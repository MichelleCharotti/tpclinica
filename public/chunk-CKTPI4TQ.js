import{$a as L,A as o,B as oe,C as I,D as h,G as ae,Ka as be,L as B,Qa as Ae,Sa as A,Ta as H,Ua as d,Va as v,Wa as Me,X as b,Xa as Ee,Za as ue,_ as Ce,_a as M,a as l,aa as Ve,ab as Fe,b as c,ba as De,bb as $,c as k,ca as S,cb as we,d as ve,da as f,e as _e,ea as le,eb as Ie,f as R,g as ye,gb as Se,h as G,hb as Ne,i as C,j as w,k as j,l as m,n as V,p as U,q as u,r as T,u as re,w as D,y as se}from"./chunk-JWGQPPUO.js";var He=(()=>{class i{constructor(t,n){this._renderer=t,this._elementRef=n,this.onChange=r=>{},this.onTouched=()=>{}}setProperty(t,n){this._renderer.setProperty(this._elementRef.nativeElement,t,n)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static{this.\u0275fac=function(n){return new(n||i)(o(oe),o(se))}}static{this.\u0275dir=u({type:i})}}return i})(),Le=(()=>{class i extends He{static{this.\u0275fac=(()=>{let t;return function(r){return(t||(t=re(i)))(r||i)}})()}static{this.\u0275dir=u({type:i,features:[h]})}}return i})(),Q=new m(""),gt={provide:Q,useExisting:C(()=>mt),multi:!0},mt=(()=>{class i extends Le{writeValue(t){this.setProperty("checked",t)}static{this.\u0275fac=(()=>{let t;return function(r){return(t||(t=re(i)))(r||i)}})()}static{this.\u0275dir=u({type:i,selectors:[["input","type","checkbox","formControlName",""],["input","type","checkbox","formControl",""],["input","type","checkbox","ngModel",""]],hostBindings:function(n,r){n&1&&B("change",function(a){return r.onChange(a.target.checked)})("blur",function(){return r.onTouched()})},features:[b([gt]),h]})}}return i})(),vt={provide:Q,useExisting:C(()=>$e),multi:!0};function _t(){let i=le()?le().getUserAgent():"";return/android (\d+)/.test(i.toLowerCase())}var yt=new m(""),$e=(()=>{class i extends He{constructor(t,n,r){super(t,n),this._compositionMode=r,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!_t())}writeValue(t){let n=t??"";this.setProperty("value",n)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static{this.\u0275fac=function(n){return new(n||i)(o(oe),o(se),o(yt,8))}}static{this.\u0275dir=u({type:i,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,r){n&1&&B("input",function(a){return r._handleInput(a.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(a){return r._compositionEnd(a.target.value)})},features:[b([vt]),h]})}}return i})();function p(i){return i==null||(typeof i=="string"||Array.isArray(i))&&i.length===0}function We(i){return i!=null&&typeof i.length=="number"}var pe=new m(""),ge=new m(""),Ct=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Oe=class{static min(e){return Vt(e)}static max(e){return Dt(e)}static required(e){return bt(e)}static requiredTrue(e){return At(e)}static email(e){return Mt(e)}static minLength(e){return Et(e)}static maxLength(e){return Ft(e)}static pattern(e){return wt(e)}static nullValidator(e){return qe(e)}static compose(e){return Je(e)}static composeAsync(e){return et(e)}};function Vt(i){return e=>{if(p(e.value)||p(i))return null;let t=parseFloat(e.value);return!isNaN(t)&&t<i?{min:{min:i,actual:e.value}}:null}}function Dt(i){return e=>{if(p(e.value)||p(i))return null;let t=parseFloat(e.value);return!isNaN(t)&&t>i?{max:{max:i,actual:e.value}}:null}}function bt(i){return p(i.value)?{required:!0}:null}function At(i){return i.value===!0?null:{required:!0}}function Mt(i){return p(i.value)||Ct.test(i.value)?null:{email:!0}}function Et(i){return e=>p(e.value)||!We(e.value)?null:e.value.length<i?{minlength:{requiredLength:i,actualLength:e.value.length}}:null}function Ft(i){return e=>We(e.value)&&e.value.length>i?{maxlength:{requiredLength:i,actualLength:e.value.length}}:null}function wt(i){if(!i)return qe;let e,t;return typeof i=="string"?(t="",i.charAt(0)!=="^"&&(t+="^"),t+=i,i.charAt(i.length-1)!=="$"&&(t+="$"),e=new RegExp(t)):(t=i.toString(),e=i),n=>{if(p(n.value))return null;let r=n.value;return e.test(r)?null:{pattern:{requiredPattern:t,actualValue:r}}}}function qe(i){return null}function ze(i){return i!=null}function Ze(i){return Ce(i)?_e(i):i}function Xe(i){let e={};return i.forEach(t=>{e=t!=null?l(l({},e),t):e}),Object.keys(e).length===0?null:e}function Ye(i,e){return e.map(t=>t(i))}function It(i){return!i.validate}function Ke(i){return i.map(e=>It(e)?e:t=>e.validate(t))}function Je(i){if(!i)return null;let e=i.filter(ze);return e.length==0?null:function(t){return Xe(Ye(t,e))}}function Qe(i){return i!=null?Je(Ke(i)):null}function et(i){if(!i)return null;let e=i.filter(ze);return e.length==0?null:function(t){let n=Ye(t,e).map(Ze);return ye(n).pipe(R(Xe))}}function tt(i){return i!=null?et(Ke(i)):null}function xe(i,e){return i===null?[e]:Array.isArray(i)?[...i,e]:[i,e]}function it(i){return i._rawValidators}function nt(i){return i._rawAsyncValidators}function ce(i){return i?Array.isArray(i)?i:[i]:[]}function q(i,e){return Array.isArray(i)?i.includes(e):i===e}function Pe(i,e){let t=ce(e);return ce(i).forEach(r=>{q(t,r)||t.push(r)}),t}function ke(i,e){return ce(e).filter(t=>!q(i,t))}var z=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=Qe(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=tt(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,t){return this.control?this.control.hasError(e,t):!1}getError(e,t){return this.control?this.control.getError(e,t):null}},_=class extends z{get formDirective(){return null}get path(){return null}},y=class extends z{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},Z=class{constructor(e){this._cd=e}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},St={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},vi=c(l({},St),{"[class.ng-submitted]":"isSubmitted"}),_i=(()=>{class i extends Z{constructor(t){super(t)}static{this.\u0275fac=function(n){return new(n||i)(o(y,2))}}static{this.\u0275dir=u({type:i,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,r){n&2&&ae("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},features:[h]})}}return i})(),yi=(()=>{class i extends Z{constructor(t){super(t)}static{this.\u0275fac=function(n){return new(n||i)(o(_,10))}}static{this.\u0275dir=u({type:i,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(n,r){n&2&&ae("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},features:[h]})}}return i})();var N="VALID",W="INVALID",E="PENDING",O="DISABLED",g=class{},X=class extends g{constructor(e,t){super(),this.value=e,this.source=t}},x=class extends g{constructor(e,t){super(),this.pristine=e,this.source=t}},P=class extends g{constructor(e,t){super(),this.touched=e,this.source=t}},F=class extends g{constructor(e,t){super(),this.status=e,this.source=t}},de=class extends g{constructor(e){super(),this.source=e}},he=class extends g{constructor(e){super(),this.source=e}};function rt(i){return(ee(i)?i.validators:i)||null}function Nt(i){return Array.isArray(i)?Qe(i):i||null}function st(i,e){return(ee(e)?e.asyncValidators:i)||null}function Ot(i){return Array.isArray(i)?tt(i):i||null}function ee(i){return i!=null&&!Array.isArray(i)&&typeof i=="object"}function xt(i,e,t){let n=i.controls;if(!(e?Object.keys(n):n).length)throw new G(1e3,"");if(!n[t])throw new G(1001,"")}function Pt(i,e,t){i._forEachChild((n,r)=>{if(t[r]===void 0)throw new G(1002,"")})}var Y=class{constructor(e,t){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=null,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this._status=S(()=>this.statusReactive()),this.statusReactive=I(void 0),this._pristine=S(()=>this.pristineReactive()),this.pristineReactive=I(!0),this._touched=S(()=>this.touchedReactive()),this.touchedReactive=I(!1),this._events=new ve,this.events=this._events.asObservable(),this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return f(this.statusReactive)}set status(e){f(()=>this.statusReactive.set(e))}get valid(){return this.status===N}get invalid(){return this.status===W}get pending(){return this.status==E}get disabled(){return this.status===O}get enabled(){return this.status!==O}get pristine(){return f(this.pristineReactive)}set pristine(e){f(()=>this.pristineReactive.set(e))}get dirty(){return!this.pristine}get touched(){return f(this.touchedReactive)}set touched(e){f(()=>this.touchedReactive.set(e))}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Pe(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Pe(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(ke(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(ke(e,this._rawAsyncValidators))}hasValidator(e){return q(this._rawValidators,e)}hasAsyncValidator(e){return q(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let t=this.touched===!1;this.touched=!0;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched(c(l({},e),{sourceControl:n})),t&&e.emitEvent!==!1&&this._events.next(new P(!0,n))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(e))}markAsUntouched(e={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:n})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,n),t&&e.emitEvent!==!1&&this._events.next(new P(!1,n))}markAsDirty(e={}){let t=this.pristine===!0;this.pristine=!1;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty(c(l({},e),{sourceControl:n})),t&&e.emitEvent!==!1&&this._events.next(new x(!1,n))}markAsPristine(e={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,n),t&&e.emitEvent!==!1&&this._events.next(new x(!0,n))}markAsPending(e={}){this.status=E;let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new F(this.status,t)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending(c(l({},e),{sourceControl:t}))}disable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=O,this.errors=null,this._forEachChild(r=>{r.disable(c(l({},e),{onlySelf:!0}))}),this._updateValue();let n=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new X(this.value,n)),this._events.next(new F(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(c(l({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=N,this._forEachChild(n=>{n.enable(c(l({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(c(l({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(e,t){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},t),this._parent._updateTouched({},t))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===N||this.status===E)&&this._runAsyncValidator(n,e.emitEvent)}let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new X(this.value,t)),this._events.next(new F(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(c(l({},e),{sourceControl:t}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?O:N}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,t){if(this.asyncValidator){this.status=E,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1};let n=Ze(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:t,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(e){let t=e;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((n,r)=>n&&n._find(r),this)}getError(e,t){let n=t?this.get(t):this;return n&&n.errors?n.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,t,n){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||n)&&this._events.next(new F(this.status,t)),this._parent&&this._parent._updateControlsErrors(e,t,n)}_initObservables(){this.valueChanges=new D,this.statusChanges=new D}_calculateStatus(){return this._allControlsDisabled()?O:this.errors?W:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(E)?E:this._anyControlsHaveStatus(W)?W:N}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,t){let n=!this._anyControlsDirty(),r=this.pristine!==n;this.pristine=n,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,t),r&&this._events.next(new x(this.pristine,t))}_updateTouched(e={},t){this.touched=this._anyControlsTouched(),this._events.next(new P(this.touched,t)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,t)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){ee(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let t=this._parent&&this._parent.dirty;return!e&&!!t&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=Nt(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=Ot(this._rawAsyncValidators)}},Re=class extends Y{constructor(e,t,n){super(rt(t),st(n,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,t){return this.controls[e]?this.controls[e]:(this.controls[e]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(e,t,n={}){this.registerControl(e,t),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(e,t={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(e,t,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],t&&this.registerControl(e,t),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,t={}){Pt(this,!0,e),Object.keys(e).forEach(n=>{xt(this,!0,n),this.controls[n].setValue(e[n],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(e,t={}){e!=null&&(Object.keys(e).forEach(n=>{let r=this.controls[n];r&&r.patchValue(e[n],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e={},t={}){this._forEachChild((n,r)=>{n.reset(e?e[r]:null,{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t)}getRawValue(){return this._reduceChildren({},(e,t,n)=>(e[n]=t.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(t,n)=>n._syncPendingControls()?!0:t);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(t=>{let n=this.controls[t];n&&e(n,t)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[t,n]of Object.entries(this.controls))if(this.contains(t)&&e(n))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(t,n,r)=>((n.enabled||this.disabled)&&(t[r]=n.value),t))}_reduceChildren(e,t){let n=e;return this._forEachChild((r,s)=>{n=t(n,r,s)}),n}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var te=new m("CallSetDisabledState",{providedIn:"root",factory:()=>ie}),ie="always";function ot(i,e){return[...e.path,i]}function fe(i,e,t=ie){me(i,e),e.valueAccessor.writeValue(i.value),(i.disabled||t==="always")&&e.valueAccessor.setDisabledState?.(i.disabled),Rt(i,e),jt(i,e),Gt(i,e),kt(i,e)}function Ge(i,e,t=!0){let n=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(n),e.valueAccessor.registerOnTouched(n)),J(i,e),i&&(e._invokeOnDestroyCallbacks(),i._registerOnCollectionChange(()=>{}))}function K(i,e){i.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function kt(i,e){if(e.valueAccessor.setDisabledState){let t=n=>{e.valueAccessor.setDisabledState(n)};i.registerOnDisabledChange(t),e._registerOnDestroy(()=>{i._unregisterOnDisabledChange(t)})}}function me(i,e){let t=it(i);e.validator!==null?i.setValidators(xe(t,e.validator)):typeof t=="function"&&i.setValidators([t]);let n=nt(i);e.asyncValidator!==null?i.setAsyncValidators(xe(n,e.asyncValidator)):typeof n=="function"&&i.setAsyncValidators([n]);let r=()=>i.updateValueAndValidity();K(e._rawValidators,r),K(e._rawAsyncValidators,r)}function J(i,e){let t=!1;if(i!==null){if(e.validator!==null){let r=it(i);if(Array.isArray(r)&&r.length>0){let s=r.filter(a=>a!==e.validator);s.length!==r.length&&(t=!0,i.setValidators(s))}}if(e.asyncValidator!==null){let r=nt(i);if(Array.isArray(r)&&r.length>0){let s=r.filter(a=>a!==e.asyncValidator);s.length!==r.length&&(t=!0,i.setAsyncValidators(s))}}}let n=()=>{};return K(e._rawValidators,n),K(e._rawAsyncValidators,n),t}function Rt(i,e){e.valueAccessor.registerOnChange(t=>{i._pendingValue=t,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn==="change"&&at(i,e)})}function Gt(i,e){e.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn==="blur"&&i._pendingChange&&at(i,e),i.updateOn!=="submit"&&i.markAsTouched()})}function at(i,e){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1}function jt(i,e){let t=(n,r)=>{e.valueAccessor.writeValue(n),r&&e.viewToModelUpdate(n)};i.registerOnChange(t),e._registerOnDestroy(()=>{i._unregisterOnChange(t)})}function Ut(i,e){i==null,me(i,e)}function Tt(i,e){return J(i,e)}function lt(i,e){if(!i.hasOwnProperty("model"))return!1;let t=i.model;return t.isFirstChange()?!0:!Object.is(e,t.currentValue)}function Bt(i){return Object.getPrototypeOf(i.constructor)===Le}function Ht(i,e){i._syncPendingControls(),e.forEach(t=>{let n=t.control;n.updateOn==="submit"&&n._pendingChange&&(t.viewToModelUpdate(n._pendingValue),n._pendingChange=!1)})}function ut(i,e){if(!e)return null;Array.isArray(e);let t,n,r;return e.forEach(s=>{s.constructor===$e?t=s:Bt(s)?n=s:r=s}),r||n||t||null}function Lt(i,e){let t=i.indexOf(e);t>-1&&i.splice(t,1)}function je(i,e){let t=i.indexOf(e);t>-1&&i.splice(t,1)}function Ue(i){return typeof i=="object"&&i!==null&&Object.keys(i).length===2&&"value"in i&&"disabled"in i}var ct=class extends Y{constructor(e=null,t,n){super(rt(t),st(n,t)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),ee(t)&&(t.nonNullable||t.initialValueIsDefault)&&(Ue(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,t={}){this.value=this._pendingValue=e,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){je(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){je(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Ue(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var $t=i=>i instanceof ct;var Wt={provide:y,useExisting:C(()=>qt)},Te=Promise.resolve(),qt=(()=>{class i extends y{constructor(t,n,r,s,a,pt){super(),this._changeDetectorRef=a,this.callSetDisabledState=pt,this.control=new ct,this._registered=!1,this.name="",this.update=new D,this._parent=t,this._setValidators(n),this._setAsyncValidators(r),this.valueAccessor=ut(this,s)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){let n=t.name.previousValue;this.formDirective.removeControl({name:n,path:this._getPath(n)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),lt(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){fe(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(t){Te.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){let n=t.isDisabled.currentValue,r=n!==0&&De(n);Te.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?ot(t,this._parent):[t]}static{this.\u0275fac=function(n){return new(n||i)(o(_,9),o(pe,10),o(ge,10),o(Q,10),o(Ve,8),o(te,8))}}static{this.\u0275dir=u({type:i,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[b([Wt]),h,T]})}}return i})(),Vi=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275dir=u({type:i,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]})}}return i})();var dt=new m("");var zt={provide:_,useExisting:C(()=>Zt)},Zt=(()=>{class i extends _{get submitted(){return f(this._submittedReactive)}set submitted(t){this._submittedReactive.set(t)}constructor(t,n,r){super(),this.callSetDisabledState=r,this._submitted=S(()=>this._submittedReactive()),this._submittedReactive=I(!1),this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new D,this._setValidators(t),this._setAsyncValidators(n)}ngOnChanges(t){this._checkFormPresent(),t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(J(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(t){let n=this.form.get(t.path);return fe(n,t,this.callSetDisabledState),n.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),n}getControl(t){return this.form.get(t.path)}removeControl(t){Ge(t.control||null,t,!1),Lt(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}getFormArray(t){return this.form.get(t.path)}updateModel(t,n){this.form.get(t.path).setValue(n)}onSubmit(t){return this._submittedReactive.set(!0),Ht(this.form,this.directives),this.ngSubmit.emit(t),this.form._events.next(new de(this.control)),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this._submittedReactive.set(!1),this.form._events.next(new he(this.form))}_updateDomValue(){this.directives.forEach(t=>{let n=t.control,r=this.form.get(t.path);n!==r&&(Ge(n||null,t),$t(r)&&(fe(r,t,this.callSetDisabledState),t.control=r))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){let n=this.form.get(t.path);Ut(n,t),n.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){if(this.form){let n=this.form.get(t.path);n&&Tt(n,t)&&n.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){me(this.form,this),this._oldForm&&J(this._oldForm,this)}_checkFormPresent(){this.form}static{this.\u0275fac=function(n){return new(n||i)(o(pe,10),o(ge,10),o(te,8))}}static{this.\u0275dir=u({type:i,selectors:[["","formGroup",""]],hostBindings:function(n,r){n&1&&B("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[b([zt]),h,T]})}}return i})();var Xt={provide:y,useExisting:C(()=>Yt)},Yt=(()=>{class i extends y{set isDisabled(t){}static{this._ngModelWarningSentOnce=!1}constructor(t,n,r,s,a){super(),this._ngModelWarningConfig=a,this._added=!1,this.name=null,this.update=new D,this._ngModelWarningSent=!1,this._parent=t,this._setValidators(n),this._setAsyncValidators(r),this.valueAccessor=ut(this,s)}ngOnChanges(t){this._added||this._setUpControl(),lt(t,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return ot(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}static{this.\u0275fac=function(n){return new(n||i)(o(_,13),o(pe,10),o(ge,10),o(Q,10),o(dt,8))}}static{this.\u0275dir=u({type:i,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},features:[b([Xt]),h,T]})}}return i})();var ht=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=U({type:i})}static{this.\u0275inj=j({})}}return i})();var Di=(()=>{class i{static withConfig(t){return{ngModule:i,providers:[{provide:te,useValue:t.callSetDisabledState??ie}]}}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=U({type:i})}static{this.\u0275inj=j({imports:[ht]})}}return i})(),bi=(()=>{class i{static withConfig(t){return{ngModule:i,providers:[{provide:dt,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:te,useValue:t.callSetDisabledState??ie}]}}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=U({type:i})}static{this.\u0275inj=j({imports:[ht]})}}return i})();var ne=class i{constructor(e,t){this.firestore=e;this.storage=t}obtenerDatosUsuario(e){return Me(v(this.firestore,"usuarios",e))}asignarDatosUsuario(e){let t=v(this.firestore,"usuarios",e);return H(t).pipe(R(n=>{if(H.exists())return H.data()}))}obtenerUsuarios(){let e=d(this.firestore,"usuarios"),t=M(e,ue("tipo","desc"));return A(t,{idField:"id"})}obtenerEspecialistas(){let e=d(this.firestore,"usuarios"),t=M(e,$("tipo","==","especialista"));return A(t,{idField:"id"})}obtenerPacientes(){let e=d(this.firestore,"usuarios"),t=M(e,$("tipo","==","paciente"));return A(t,{idField:"id"})}obtenerEspecialidades(){let e=d(this.firestore,"especialidades");return A(e,{idField:"id"})}agregarEspecialidad(e){let t=d(this.firestore,"especialidades"),n=v(t),r=n.id;L(n,{id:r,nombre:e})}agregarUsuario(e){return k(this,null,function*(){let t=d(this.firestore,"usuarios");e.imagen1=yield this.subirArchivos(e.imagen1,e.id+"-1"),e.imagen2&&(e.imagen2=yield this.subirArchivos(e.imagen2,e.id+"-2"));let n=v(t,e.id);L(n,e)})}cambiarEstado(e,t){let n=v(this.firestore,"usuarios",e);return Fe(n,{habilitado:t})}subirArchivos(e,t){return k(this,null,function*(){let n=Se(this.storage,`imagenes/${t}`),r=yield Ne(n,e);return yield Ie(n)})}usuarioExiste(e){return k(this,null,function*(){let t=d(this.firestore,"usuarios"),n=M(t,$("email","==",e));return(yield Ee(n)).size!==0})}generarLog(e){if(e){let t=d(this.firestore,"logs"),n=v(t),r=n.id;L(n,{id:r,idUsuario:e.id,nombre:e.nombre+" "+e.apellido,dni:e.dni,tipo:e.tipo,fecha:new Date().toUTCString()})}}obtenerLogs(){let e=d(this.firestore,"logs"),t=M(e,ue("fecha","asc"));return A(t,{idField:"id"})}static \u0275fac=function(t){return new(t||i)(V(Ae),V(we))};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})};var ft=class i{constructor(e,t){this.db=e;this.auth=t}datos=void 0;sub;obtenerDatos(){return new Promise((e,t)=>{this.db.obtenerDatosUsuario(this.auth.currentUser?.uid).then(n=>{n.exists()&&(this.datos=n.data(),e(this.datos))}).catch(n=>t(n))})}vincularDatos(e){this.sub||(this.sub=this.db.asignarDatosUsuario(e).subscribe(t=>{this.datos=t}))}cerrarSesion(){this.datos=void 0,this.auth.signOut(),this.sub&&(this.sub.unsubscribe(),this.sub=void 0)}static \u0275fac=function(t){return new(t||i)(V(ne),V(be))};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})};export{Q as a,mt as b,$e as c,Oe as d,y as e,_i as f,yi as g,Re as h,ct as i,qt as j,Vi as k,Zt as l,Yt as m,Di as n,bi as o,ne as p,ft as q};