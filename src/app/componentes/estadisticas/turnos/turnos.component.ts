import { CommonModule, DatePipe } from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { BaseDatosService } from '../../../servicios/base-datos.service';
import { Estado, Turno } from '../../../interfaces/turno';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-turnos',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './turnos.component.html',
  styleUrl: './turnos.component.scss',
  providers: [DatePipe]
})
export class TurnosComponent {

  private _finalizados: boolean = false;

  @ViewChild('pieChart') pieChart: ElementRef<HTMLCanvasElement> | undefined;
  @ViewChild('contenido', {static: false}) grafico!: ElementRef;

  public chart: any;
  public turnos: any[] = [];
  private _turnos: any[] = [];
  private sub?: Subscription;
  public fechaInicio?: string;
  public fechaFin?: string;
  public generando: boolean = true;

  constructor(private db: BaseDatosService, private datePipe: DatePipe) {}

  @Input() set finalizados(value: boolean){
    this._finalizados = value;
    this.filtrarTurnos();
  }

  get finalizados(): boolean {
    return this._finalizados;
  }

  ngAfterViewInit() {
    this.sub = this.db.obtenerTurnosAdmin().subscribe(turnos => {
      this._turnos = turnos;
      this.filtrarTurnos();
    })
  }

  ngDestroy(){
    if(this.sub)
      this.sub.unsubscribe();
  }

  private filtrarTurnos(){
    this.generando = true;
    this.turnos = [];
    if(this.finalizados){
      for(let item of this._turnos){
        if(item.estado == Estado.realizado){
          this.turnos.push(item);
        }
      }
    }
    else{
      this.turnos = this._turnos;
    }
    if(this.fechaInicio){
      let fecha = new Date(this.fechaInicio);
      fecha.setHours(fecha.getHours() + 3);
      let turnosFiltrados = [];
      for(let item of this.turnos){
        let fechaTurno = new Date(item.fecha);
        if(fechaTurno >= fecha){
          turnosFiltrados.push(item);
        }
        this.turnos = turnosFiltrados;
      }
    }
    if(this.fechaFin){
      let fecha = new Date(this.fechaFin);
      fecha.setHours(fecha.getHours() + 3);
      fecha.setDate(fecha.getDate() + 1);
      let turnosFiltrados = [];
      for(let item of this.turnos){
        let fechaTurno = new Date(item.fecha);
        if(fechaTurno <= fecha){
          turnosFiltrados.push(item);
        }
        this.turnos = turnosFiltrados;
      }
    }
    this.chart?.destroy();
    this.contarTurnosPorDia(this.turnos);
    this.generarGrafica();
  }

  private contarTurnosPorDia(turnos: Turno[]): void {
    const arrayContadores = new Map();
    const colorMap = new Map();

    turnos.forEach(item => {
      const valor = item.nombreEspecialista;
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
  }

  private getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  onCambioInicio(event: any): void {
    if (event != null) {
      this.fechaInicio = event.target.value;
      this.filtrarTurnos();
    }
  }

  onCambioFin(event: any): void {
    if (event != null) {
      this.fechaFin = event.target.value;
      this.filtrarTurnos();
    }
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

  const nombre = "turnos-" + (this.finalizados ? "finalizados" : "solicitados") + (this.fechaInicio ? "-inicio-" + this.fechaInicio : "") + (this.fechaFin ? "-fin-" + this.fechaFin : "");

  const graficoElement = this.grafico.nativeElement;

  const options = {
    backgroundColor: '#ffffff'
  };

  const faviconImage = new Image();
  faviconImage.src = '../../../assets/favicon.png';

  faviconImage.onload = () => {
    html2canvas(graficoElement, options).then((canvas) => {
      const imgData = canvas.toDataURL('image/png',1);

      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = ((imgProps.height * pdfWidth) / imgProps.width)-20;

      pdf.addImage(imgData, 'PNG', 0, 20, pdfWidth, pdfHeight);
      pdf.addImage(faviconImage, 'PNG', 10, 10, 16, 16);

      const currentDate = this.datePipe.transform(new Date(), 'd/M/YYYY HH:mm', '-0300');
      const text = "Gráfico Generado el: " + currentDate;
      const margin = 20;
      const textX = 2;
      const textY = pdfHeight + margin + 20;
      pdf.text(text, textX, textY);

      pdf.save(nombre + "-" + currentDate);
    });
  };
}

}