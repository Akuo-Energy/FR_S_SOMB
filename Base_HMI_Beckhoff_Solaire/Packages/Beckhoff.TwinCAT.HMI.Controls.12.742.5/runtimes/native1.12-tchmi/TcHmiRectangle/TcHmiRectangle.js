var TcHmi;!function(e){let t;!function(t){let r;!function(t){class r extends e.Controls.System.TcHmiControl{constructor(t,r,s){super(t,r,s),this.__resizedEventDestroyEvent=null,this.__onResolverForFillColorWatchCallback=t=>{!1===this.__isAttached&&this.__suspendObjectResolver("fillColor"),t.error===e.Errors.NONE?tchmi_equal(t.value,this.__fillColor)||(this.__fillColor=t.value,e.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"FillColor"}),this.__processFillColor()):TCHMI_CONSOLE_LOG_LEVEL>=1&&e.Log.error("[Source=Control, Module=TcHmi.Controls.Beckhoff.TcHmiRectangle, Id="+this.getId()+", Attribute=FillColor] Resolving symbols from object failed with error: "+e.Log.buildMessage(t.details))},this.__onResolverForStrokeColorWatchCallback=t=>{!1===this.__isAttached&&this.__suspendObjectResolver("strokeColor"),t.error===e.Errors.NONE?tchmi_equal(t.value,this.__strokeColor)||(this.__strokeColor=t.value,e.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"StrokeColor"}),this.__processStrokeColor()):TCHMI_CONSOLE_LOG_LEVEL>=1&&e.Log.error("[Source=Control, Module=TcHmi.Controls.Beckhoff.TcHmiRectangle, Id="+this.getId()+", Attribute=StrokeColor] Resolving symbols from object failed with error: "+e.Log.buildMessage(t.details))}}__previnit(){if(this.__elementTemplateRoot=this.__element.find(".TcHmi_Controls_Beckhoff_TcHmiRectangle-template"),0===this.__elementTemplateRoot.length&&(this.__elementTemplateRoot=this.__element.find(".tchmi-rectangle-template")),this.__elementSvgRectangle=this.__elementTemplateRoot.find(".TcHmi_Controls_Beckhoff_TcHmiRectangle-template-svg-rectangle"),0===this.__elementSvgRectangle.length&&(this.__elementSvgRectangle=this.__elementTemplateRoot.find(".tchmi-rectangle-template-svg-rectangle")),0===this.__elementTemplateRoot.length||0===this.__elementSvgRectangle.length)throw new Error("Invalid Template.html");super.__previnit()}__init(){super.__init()}__attach(){super.__attach(),this.__resizedEventDestroyEvent=e.EventProvider.register(this.__id+".onResized",this.__onResized())}__detach(){super.__detach(),null!==this.__resizedEventDestroyEvent&&(this.__resizedEventDestroyEvent(),this.__resizedEventDestroyEvent=null)}destroy(){this.__keepAlive||super.destroy()}__onResized(){return(e,t)=>{this.__updateDimensions()}}__updateDimensions(){let t=this.getRenderedWidth();if(!t)return;let r=this.getRenderedHeight();if(r){var s=this.__strokeThickness?this.__strokeThickness:0;s=(s=s<t/2?s:t/2)<r/2?s:r/2,this.__elementSvgRectangle[0].setAttribute("x",(s/2).toString()),this.__elementSvgRectangle[0].setAttribute("y",(s/2).toString()),this.__elementSvgRectangle[0].setAttribute("width",(t-s).toString()),this.__elementSvgRectangle[0].setAttribute("height",(r-s).toString()),e.StyleProvider.setSimpleElementStyle(this.__elementSvgRectangle,"stroke-width",s.toString())}}setFillColor(valueNew){let t=e.ValueConverter.toObject(valueNew);null===t&&(t=this.getAttributeDefaultValueInternal("FillColor"));let r=this.__objectResolvers.get("fillColor");r&&(r.watchDestroyer&&r.watchDestroyer(),r.resolver.destroy());let s=new e.Symbol.ObjectResolver(t);this.__objectResolvers.set("fillColor",{resolver:s,watchCallback:this.__onResolverForFillColorWatchCallback,watchDestroyer:s.watch(this.__onResolverForFillColorWatchCallback)})}getFillColor(){return this.__fillColor}__processFillColor(){e.StyleProvider.processFillColor(this.__elementSvgRectangle,this.__fillColor)}setStrokeColor(valueNew){let t=e.ValueConverter.toObject(valueNew);null===t&&(t=this.getAttributeDefaultValueInternal("StrokeColor"));let r=this.__objectResolvers.get("strokeColor");r&&(r.watchDestroyer&&r.watchDestroyer(),r.resolver.destroy());let s=new e.Symbol.ObjectResolver(t);this.__objectResolvers.set("strokeColor",{resolver:s,watchCallback:this.__onResolverForStrokeColorWatchCallback,watchDestroyer:s.watch(this.__onResolverForStrokeColorWatchCallback)})}getStrokeColor(){return this.__strokeColor}__processStrokeColor(){e.StyleProvider.processStrokeColor(this.__elementSvgRectangle,this.__strokeColor)}setStrokeStyle(valueNew){let t=e.ValueConverter.toString(valueNew);null===t&&(t=this.getAttributeDefaultValueInternal("StrokeStyle")),t!==this.__strokeStyle&&(this.__strokeStyle=t,e.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"StrokeStyle"}),this.__processStrokeStyle())}getStrokeStyle(){return this.__strokeStyle}__processStrokeStyle(){e.StyleProvider.setSimpleElementStyle(this.__elementSvgRectangle,"stroke-dasharray",this.__strokeStyle)}setStrokeThickness(valueNew){let t=e.ValueConverter.toNumber(valueNew);null===t&&(t=this.getAttributeDefaultValueInternal("StrokeThickness")),t!==this.__strokeThickness&&(this.__strokeThickness=t,e.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"StrokeThickness"}),this.__processStrokeThickness())}getStrokeThickness(){return this.__strokeThickness}__processStrokeThickness(){this.__updateDimensions()}getStrokeThicknessUnit(){return"px"}__processStrokeThicknessUnit(){}setRadiusX(valueNew){let t=e.ValueConverter.toNumber(valueNew);null===t&&(t=this.getAttributeDefaultValueInternal("RadiusX")),t!==this.__radiusX&&(this.__radiusX=t,e.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"RadiusX"}),this.__processRadiusX())}getRadiusX(){return this.__radiusX}__processRadiusX(){void 0!==this.__radiusX&&null!==this.__radiusX?this.__elementSvgRectangle[0].setAttribute("rx",this.__radiusX.toString()):this.__elementSvgRectangle[0].removeAttribute("rx")}getRadiusXUnit(){return"px"}__processRadiusXUnit(){}setRadiusY(valueNew){let t=e.ValueConverter.toNumber(valueNew);null===t&&(t=this.getAttributeDefaultValueInternal("RadiusY")),t!==this.__radiusY&&(this.__radiusY=t,e.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"RadiusY"}),this.__processRadiusY())}getRadiusY(){return this.__radiusY}__processRadiusY(){void 0!==this.__radiusY&&null!==this.__radiusY?this.__elementSvgRectangle[0].setAttribute("ry",this.__radiusY.toString()):this.__elementSvgRectangle[0].removeAttribute("ry")}getRadiusYUnit(){return"px"}__processRadiusYUnit(){}}t.TcHmiRectangle=r}(r=t.Beckhoff||(t.Beckhoff={})),t.registerEx("TcHmiRectangle","TcHmi.Controls.Beckhoff",e.Controls.Beckhoff.TcHmiRectangle)}(t=e.Controls||(e.Controls={}))}(TcHmi||(TcHmi={}));