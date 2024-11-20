import { CommonModule, DatePipe } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { BaseDatosService } from '../../../servicios/base-datos.service';
import { Turno } from '../../../interfaces/turno';
import { Chart, registerables } from 'chart.js';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

Chart.register(...registerables);


@Component({
  selector: 'app-dia',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './dia.component.html',
  styleUrl: './dia.component.scss',
  providers: [DatePipe]
})
export class DiaComponent {

  @ViewChild('pieChart') pieChart: ElementRef<HTMLCanvasElement> | undefined;
  @ViewChild('contenido', {static: false}) grafico!: ElementRef;

  public chart: any;
  public turnos: any[] = [];
  private sub?: Subscription;
  public generando: boolean = true;

  constructor(private db: BaseDatosService, private datePipe: DatePipe) {}

  ngAfterViewInit() {
    this.sub = this.db.obtenerTurnosAdmin().subscribe(turnos => {
      this.contarTurnosPorDia(turnos);
      this.generarGrafica();
    })
  }

  ngDestroy(){
    if(this.sub)
      this.sub.unsubscribe();
  }

  private contarTurnosPorDia(turnos: Turno[]): void {
    const arrayContadores = new Map();
    const colorMap = new Map();
    const diasDeLaSemana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];

    turnos.forEach(item => {
      const valor = diasDeLaSemana[(new Date (item.fecha).getDay())];
      const contador = arrayContadores.get(valor) || 0;
      arrayContadores.set(valor, contador + 1);

      if (!colorMap.has(valor)) {
        const randomColor = this.getRandomColor();
        colorMap.set(valor, randomColor);
      }
    });

    this.turnos = Array.from(arrayContadores.entries()).map(([valor, contador]) => ({
      nombre: valor,
      contador: contador,
      color: colorMap.get(valor)
    }));
    this.turnos.sort((a, b) => {
      const indexA = diasDeLaSemana.indexOf(a.nombre);
      const indexB = diasDeLaSemana.indexOf(b.nombre);
      return indexA - indexB;
    });
  }

  private getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  generarGrafica(): void {
    if(this.pieChart){
      this.pieChart.nativeElement.width = 450;
      this.pieChart.nativeElement.height = 450;
      const ctx = this.pieChart.nativeElement.getContext('2d');
      if(ctx){
        this.chart = new Chart(ctx, {
          type: 'pie',
          data: {
            datasets: [{
              data: this.turnos.map(item => item.contador),
              backgroundColor: this.turnos.map(item => item.color),
            }],
            labels: this.turnos.map(item => item.nombre),
          },
          options: {
            responsive: false,
            animation: {
              onComplete: (animation) => {
                this.generando = false;
              }
          }
          },
        });
      }
    }
  }

  generarPdf() {
    const pdf = new jsPDF();

    const nombre = "turnos-por-dia";
  
    const graficoElement = this.grafico.nativeElement;
  
    const options = {
      backgroundColor: '#ffffff'
    };
  
    const faviconImage = new Image();
    faviconImage.src = '../../../assets/favicon.png';
  
    faviconImage.onload = () => {
      html2canvas(graficoElement, options).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
  
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
  
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.addImage(faviconImage, 'PNG', 10, 10, 16, 16);
  
        const currentDate = this.datePipe.transform(new Date(), 'd/M/YYYY HH:mm', '-0300');
        const text = "Gráfico Generado el: " + currentDate;
        const margin = 20;
        const textX = 2;
        const textY = pdfHeight + margin;
        pdf.text(text, textX, textY);
  
        pdf.save(nombre + "-" + currentDate);
      });
    };
  }

}
