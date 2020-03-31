/*! Version: 1.0.0; Third Party Notices: https://lpcres.delve.office.com/lpc/versionless/tpn-8a42276e0b31ff0f17eba30bd1606f9e58f8c218c9bfdfd4e4834573ff16256ffc8478bb348883c9124d3645408334a852327c011fd748785049ed6f9f1054b9.txt */
(window.webpackJsonpLpc=window.webpackJsonpLpc||[]).push([[68],{1011:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var o=n(9),a=n(3),r=function(t){function e(e){var n=t.call(this,e)||this;return n.state={isRendered:!1},n}return Object(o.c)(e,t),e.prototype.componentDidMount=function(){var t=this,e=this.props.delay;this._timeoutId=setTimeout(function(){t.setState({isRendered:!0})},e)},e.prototype.componentWillUnmount=function(){this._timeoutId&&clearTimeout(this._timeoutId)},e.prototype.render=function(){return this.state.isRendered?a.Children.only(this.props.children):null},e.defaultProps={delay:0},e}(a.Component)},1720:function(t,e,n){"use strict";n.r(e);var o=n(6),a=n(43),r=n(39),i=n(1),s="ProfilePhotoPicker";function l(t,e){void 0===e&&(e=null);var n=""+s+t+"Action";return Object(i.a)(n,{featureName:s,exportOptions:e?{exportType:"UserInteraction",exportName:e}:void 0})}var u=l("CancelButtonClicked","ProfilePhotoPickerCancelButtonClicked"),p=l("CloseButtonClicked","ProfilePhotoPickerCloseButtonClickedAction"),c=l("DoneButtonClicked","ProfilePhotoPickerDoneButtonClickedAction"),d=l("UploadNewPhotoButtonClicked","ProfilePhotoPickerUploadNewPhotoButtonClickedAction"),h=l("ImageEditPaneDismissed","ProfilePhotoPickerImageEditPaneDismissed"),m=l("ImageUpdated"),f=l("LoadedCurrentImage"),g=l("LoadedEmptyImage"),v=l("LoadedNewImage"),y=l("SomethingWentWrong"),S=l("UploadStarted","ProfilePhotoPickerApplyButtonClicked"),b=l("UploadProgress"),C=l("UploadSucceeded"),E=l("WarningDismissed"),w={dataUrl:void 0,currentImageDataUrl:void 0,status:"READY",warning:void 0,show:!1,isUpdated:!1,uploadStart:0,uploadDuration:0},U=Object(a.a)().handleAction(u,I).handleAction(p,I).handleAction(c,I).handleAction(h,I).handleAction(E,function(t){return Object(o.l)(t,{status:"READY",warning:void 0})}).handleAction(f,function(t,e){var n=e.payload.dataUrl;return Object(o.l)(t,{dataUrl:t.dataUrl||n,currentImageDataUrl:t.currentImageDataUrl||n,isUpdated:!!e.payload.isSuggestedPhoto})}).handleAction(v,function(t,e){return Object(o.l)(t,{dataUrl:e.payload.dataUrl,status:"READY",warning:void 0,isUpdated:e.payload.dataUrl!==t.currentImageDataUrl})}).handleAction(g,function(t){return Object(o.l)(t,{dataUrl:"",status:"READY",warning:void 0,isUpdated:!!t.currentImageDataUrl})}).handleAction(S,function(t,e){return Object(o.l)(t,{status:"IN_PROGRESS",warning:void 0,uploadStart:e.payload.now,uploadDuration:0})}).handleAction(b,function(t,e){return"IN_PROGRESS"===t.status?Object(o.l)(t,{uploadDuration:e.payload.now-t.uploadStart}):t}).handleAction(C,function(t,e){return Object(o.l)(t,{currentImageDataUrl:e.payload.dataUrl,status:"SUCCESS",warning:void 0})}).handleAction(y,function(t,e){return Object(o.l)(t,{status:"SOMETHING_WENT_WRONG",warning:e.payload.warning})}).handleAction(m,function(t){return Object(o.l)(t,{isUpdated:!0})}).done(w),P=Object(r.a)("ProfilePhotoPickerStore",U,function(t){return t});function I(t){return Object(o.l)(t,{dataUrl:"",currentImageDataUrl:"",status:"READY",warning:void 0,isUpdated:!1})}var x=n(379),O=n.n(x),D=n(276),k=n.n(D),N=n(862),R=n(1300),B=n(1136),_=n(1195),A=n(1125),W=n(411),L=n(1326),T=n(1328),M=n(728),j=n(184),z=n(3),H=n(187);function G(t){try{return t.toDataURL("image/jpeg")}catch(t){return console.error(t),""}}var F=n(2),Y=n.n(F),X=n(174),K=n(524),Z=n(1412),V=n(60);function q(t){var e=new DataView(function(t){for(var e=t.replace(/^data\:([^\;]+)\;base64,/i,""),n=atob(e),o=n.length,a=new ArrayBuffer(o),r=new Uint8Array(a),i=0;i<o;i++)r[i]=n.charCodeAt(i);return a}(t));if(65496!==e.getUint16(0,!1))return 1;for(var n,o=e.byteLength,a=2;a<o;){var r=e.getUint16(a,!1);if(a+=2,65505===r){if(1165519206!==e.getUint32(a+=2,!1))break;var i=18761===e.getUint16(a+=6,!1);a+=e.getUint32(a+4,i);var s=e.getUint16(a,i);a+=2;for(var l=0;l<s;l++)if(274===e.getUint16(a+12*l,i))return(n=e.getUint16(a+12*l+8,i))<1||n>8?1:n}else{if(65280!=(65280&r))break;a+=e.getUint16(a,!1)}}return 1}var J,Q=n(19),$=n(261),tt=function(){return(tt=Y.a||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var a in e=arguments[n])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}).apply(this,arguments)},et=Object($.c)(function(t,e){var n=t.palette;return Object(Q.ab)({editControls:{display:"flex",flexDirection:"row",width:"100%",height:54},zoomButton:{selectors:{"&:disabled":{background:n.white}}},editCanvas:{backgroundColor:n.white,cursor:e?"move":"inherit"},invisible:tt({clip:"rect(1px, 1px, 1px, 1px)"},{height:1,overflow:"hidden",position:"absolute",whiteSpace:"nowrap",width:1}),slider:{flexGrow:1,marginTop:2,marginBottom:24,selectors:{".ms-Slider-thumb":{border:"2px solid "+n.themePrimary},".ms-Slider-active":{backgroundColor:n.themePrimary},".ms-Slider-inactive":{backgroundColor:n.themeLight}}},canvasContainer:{margin:"0 auto",display:"flex",alignItems:"center",flexDirection:"column",width:256,position:"relative"},textboy:{color:n.white,position:"absolute",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",top:0,left:0,width:256,height:256},initials:{fontSize:128,lineHeight:128}})}),nt=(J=function(t,e){return(J=k.a||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}J(t,e),t.prototype=null===e?O()(e):(n.prototype=e.prototype,new n)}),ot={1:[1,0,0,1,0,0],2:[-1,0,0,1,0,0],3:[-1,0,0,-1,0,0],4:[1,0,0,-1,0,0],5:[0,1,1,0,0,0],6:[0,1,-1,0,0,0],7:[0,-1,-1,0,0,0],8:[0,-1,1,0,0,0]},at=function(t,e,n){return Math.min(n,Math.max(t,e))},rt=function(t){function e(e){var n=t.call(this,e)||this;return n.hasUnmounted=!1,n.editorCanvas=null,n.textBoy=null,n.initialState={xpos:0,ypos:0,absoluteScale:1,relativeScale:0,stepSize:.1,orientation:1,maximumScale:1,naturalMin:0,naturalWidth:0,naturalHeight:0,moving:!1,lastMouseX:0,lastMouseY:0,zoomInDisabled:!0,zoomOutDisabled:!0,image:void 0,initialRender:!0},n.state=Y()({},n.initialState),n}return nt(e,t),e.prototype.render=function(){var t=this,e=!this.state.image||this.state.maximumScale<=1||this.props.progress>0,n=!e||this.state.naturalHeight!==this.state.naturalWidth,o=et(this.props.theme,n),a=1===this.props.progress?z.createElement("div",{className:o.textboy},z.createElement("span",{className:o.invisible},this.props.strings.success),z.createElement(K.a,{className:o.initials,iconName:"CheckMark"})):null,r=at(2*this.state.stepSize,.1,.2),i=e?z.createElement("div",{className:o.editControls}):z.createElement("div",{className:o.editControls},z.createElement(R.a,{className:o.zoomButton,iconProps:{iconName:"CalculatorSubtract"},title:this.props.strings.zoomOut,ariaLabel:this.props.strings.zoomOut,onClick:function(){return t.zoom(-r,128,128)},disabled:this.state.zoomOutDisabled,tabIndex:-1}),z.createElement(Z.a,{ariaValueText:function(e){return Math.round(100*(e*(t.state.maximumScale-1)+1))+"%"},ariaLabel:this.props.strings.zoom,className:o.slider,min:0,max:1,step:at(this.state.stepSize,.05,.1),value:this.state.relativeScale,showValue:!1,onChange:function(e){return t.handleZoomSlider(e)}}),z.createElement(R.a,{className:o.zoomButton,iconProps:{iconName:"CalculatorAddition"},title:this.props.strings.zoomIn,ariaLabel:this.props.strings.zoomIn,onClick:function(){return t.zoom(r,128,128)},disabled:this.state.zoomInDisabled,tabIndex:-1}));return z.createElement("div",{className:o.canvasContainer},z.createElement("canvas",{className:o.editCanvas,role:"img",tabIndex:this.state.image?0:void 0,ref:function(e){return t.editorCanvas=e},width:256,height:256,onKeyDown:function(e){return t.onKeyboardHandler(e)},"aria-label":this.props.strings.dropZone}),z.createElement("div",{className:o.textboy,ref:function(e){return t.textBoy=e}},z.createElement("div",{className:o.initials},this.props.initials),z.createElement("div",null,this.props.strings.dropZone)),z.createElement("div",{role:"region","aria-live":"assertive","aria-atomic":!0},a),i)},e.prototype.componentWillUnmount=function(){this.hasUnmounted=!0},e.prototype.componentDidMount=function(){var t=this;this.props.dataUrl&&setTimeout(function(){return t.props.dataUrl&&t.loadImage(t.props.dataUrl)},0),this.attachEventListeners(),this.renderCanvasContent()},e.prototype.shouldComponentUpdate=function(t,e){return!Object(X.a)(t,this.props)||!Object(X.a)(e,this.state)},e.prototype.componentWillReceiveProps=function(t){t.dataUrl&&t.dataUrl!==this.props.dataUrl?this.loadImage(t.dataUrl):t.dataUrl!==this.props.dataUrl&&(this.state=Y()({},this.initialState))},e.prototype.componentDidUpdate=function(t){this.renderCanvasContent(),1===this.props.progress&&t.progress!==this.props.progress&&this.props.onRefocus()},e.prototype.getImageDataUrlFromCanvas=function(t){var e=this;if(void 0===t&&(t=648),!this.state.image)return"";var n=document.createElement("canvas"),o=this.state.naturalMin/this.state.absoluteScale;n.width=o,n.height=o;var a=n.getContext("2d");if(!a)return this.props.onError("UNSUPPORTED_BROWSER"),"";a.fillStyle="white",a.fillRect(0,0,n.width,n.height),this.state.image&&this.withCenterRotated(a,n.width,this.state.orientation,this.state.image,function(t,o){return a.drawImage(o,e.state.xpos*n.width/256,e.state.ypos*n.height/256,e.state.naturalWidth,e.state.naturalHeight)});for(var r=1;n.width*r/4>=t;)r/=2,a.drawImage(n,0,0,n.width*r,n.height*r);var i=document.createElement("canvas"),s=Math.min(this.state.naturalMin/this.state.absoluteScale,t);i.width=s,i.height=s;var l=i.getContext("2d");return l?(l.drawImage(n,0,0,n.width*r,n.width*r,0,0,s,s),G(i)):(this.props.onError("UNSUPPORTED_BROWSER"),"")},e.prototype.loadImage=function(t){var e=this;if(t){var n=new Image;n.onload=function(){return e.imageLoaded(n)},n.src=t}else this.setState(this.initialState)},e.prototype.imageLoaded=function(t){var e=this,n=Math.min(t.naturalWidth,t.naturalHeight),a=n/256,r=function(t){return-.5*(t/a-256)},i=Math.min(1,Math.max(.01,256/(2*Math.max(t.naturalWidth,t.naturalHeight)))),s=Object(o.l)(this.initialState,{naturalMin:n,naturalWidth:t.naturalWidth,naturalHeight:t.naturalHeight,stepSize:i,maximumScale:a,orientation:q(t.src),image:t,zoomInDisabled:!1,initialRender:!1,xpos:r(t.naturalWidth),ypos:r(t.naturalHeight)});!this.state.initialRender&&s.maximumScale<1&&(s.naturalHeight<48||s.naturalWidth<48?setTimeout(function(){return e.props.onError("IMAGE_TOO_SMALL_ERROR")},0):setTimeout(function(){return e.props.onError("IMAGE_TOO_SMALL_WARNING")},0)),this.props.isUploadedPhotoTooSmall(s.naturalHeight<48||s.naturalWidth<48),this.hasUnmounted||this.setState(s)},e.prototype.renderCanvasContent=function(){var t=this,e=this.editorCanvas;if(e&&this.textBoy){var n=e.getContext("2d");if(n){var o=window.getComputedStyle(e);n.fillStyle=o.backgroundColor||"#ffffff",n.fillRect(0,0,1,1);var a=n.getImageData(0,0,1,1).data,r="rgba("+a[0]+", "+a[1]+", "+a[2]+", 0.6)",i="rgba("+a[0]+", "+a[1]+", "+a[2]+", 1)";""===this.props.dataUrl?(n.fillStyle=this.props.textboyColor,this.textBoy.style.display="flex"):(n.fillStyle="white",this.textBoy.style.display="none"),n.fillRect(0,0,256,256),this.state.image&&this.withCenterRotated(n,256,this.state.orientation,this.state.image,function(e,n){return e.drawImage(n,t.state.xpos,t.state.ypos,t.state.naturalWidth*t.state.absoluteScale/t.state.maximumScale,t.state.naturalHeight*t.state.absoluteScale/t.state.maximumScale)}),n.save(),n.beginPath(),n.rect(0,0,256,256),n.arc(128,128,125,0,2*Math.PI,!0),n.clip(),n.fillStyle=r,n.fillRect(0,0,256,256),n.restore(),n.save(),n.beginPath(),n.arc(128,128,126,0,2*Math.PI,!0),n.lineWidth=2,n.strokeStyle=i,n.stroke(),n.restore(),n.save(),n.beginPath(),n.lineWidth=4,n.fillStyle="rgba(0, 120, 215, 0.5)",n.strokeStyle="rgba(0, 120, 215, 0.5)",n.arc(128,128,125,-Math.PI/2,2*this.props.progress*Math.PI-Math.PI/2,!1),1===this.props.progress&&n.fill(),n.stroke(),n.restore()}else this.props.onError("UNSUPPORTED_BROWSER")}},e.prototype.withCenterRotated=function(t,e,n,o,a){t.save(),t.translate(e/2,e/2),t.transform.apply(t,ot[n]),t.translate(-e/2,-e/2),a(t,o),t.restore()},e.prototype.rotate=function(t,e,n){var o=ot[n],a=o[0],r=o[2];return{x:(t-=128)*a+(e-=128)*o[1]+128,y:t*r+e*o[3]+128}},e.prototype.attachEventListeners=function(){var t=this;this.editorCanvas&&this.textBoy&&(this.editorCanvas.addEventListener("dragenter",this.handleDragEnter.bind(this),!1),this.editorCanvas.addEventListener("dragleave",this.handleDragLeave.bind(this),!1),this.editorCanvas.addEventListener("dragover",this.stopEventDefaults.bind(this),!1),this.editorCanvas.addEventListener("drop",this.handleFileDrop.bind(this),!1),this.textBoy.addEventListener("dragenter",this.handleDragEnter.bind(this),!1),this.textBoy.addEventListener("dragleave",this.handleDragLeave.bind(this),!1),this.textBoy.addEventListener("dragover",this.stopEventDefaults.bind(this),!1),this.textBoy.addEventListener("drop",this.handleFileDrop.bind(this),!1),this.editorCanvas.addEventListener("mousedown",this.handleDragStart.bind(this),!1),this.editorCanvas.addEventListener("mousemove",function(e){return t.handleDrag(e,!0)},!1),this.editorCanvas.addEventListener("mouseup",function(e){return t.handleDrag(e,!1)},!1),this.editorCanvas.addEventListener("mouseleave",function(e){return t.handleDrag(e,!1)},!1),this.editorCanvas.addEventListener("wheel",this.handleWheel.bind(this),!1))},e.prototype.stopEventDefaults=function(t){t.stopPropagation(),t.preventDefault()},e.prototype.keepInside=function(t,e){return t>0?0:t+e<256?256-e:t},e.prototype.handleZoomSlider=function(t){!this.state.image||this.state.maximumScale<1||this.zoom(t-this.state.relativeScale,128,128,!1)},e.prototype.newScaledPosition=function(t,e,n,o){var a=t+(e-t)*o/this.state.absoluteScale,r=o*n/this.state.maximumScale;return this.keepInside(a,r)},e.prototype.zoom=function(t,e,n,a){var r=this;if(void 0===a&&(a=!0),this.state.image&&!(this.state.maximumScale<1)){var i=Math.min(1,Math.max(0,this.state.relativeScale+t));if(i!==this.state.relativeScale){var s=Math.exp(i*Math.log(this.state.maximumScale));this.setState(function(t,l){var u=s<=1,p=s>=t.maximumScale;return a&&(u||p)&&r.props.onRefocus(),Object(o.l)(t,{absoluteScale:s,relativeScale:i,zoomOutDisabled:u,zoomInDisabled:p,xpos:r.newScaledPosition(e,r.state.xpos,r.state.naturalWidth,s),ypos:r.newScaledPosition(n,r.state.ypos,r.state.naturalHeight,s)})}),this.props.onUpdate()}}},e.prototype.handleWheel=function(t){if(this.state.image){this.stopEventDefaults(t);var e=t.deltaY>0?-1:1,n=this.rotate(t.offsetX,t.offsetY,this.state.orientation),o=n.x,a=n.y;this.zoom(at(this.state.stepSize,.05,.1)*e,o,a)}},e.prototype.handleDragStart=function(t){var e=this.rotate(t.clientX,t.clientY,this.state.orientation),n=e.x,a=e.y;this.state.image&&(this.stopEventDefaults(t),this.setState(function(t,e){return Object(o.l)(t,{moving:!0,lastMouseX:n,lastMouseY:a})}))},e.prototype.handleDrag=function(t,e){this.stopEventDefaults(t);var n=this.rotate(t.clientX,t.clientY,this.state.orientation),a=n.x,r=n.y;if(this.state.image&&this.state.moving){var i=this.keepInside(this.state.xpos+(a-this.state.lastMouseX),this.state.naturalWidth*this.state.absoluteScale/this.state.maximumScale),s=this.keepInside(this.state.ypos+(r-this.state.lastMouseY),this.state.naturalHeight*this.state.absoluteScale/this.state.maximumScale);(this.state.xpos!==i||this.state.ypos!==s)&&this.props.onUpdate(),this.setState(function(t,n){return Object(o.l)(t,{moving:e,xpos:i,ypos:s,lastMouseX:a,lastMouseY:r})})}},e.prototype.handleDragEnter=function(t){this.stopEventDefaults(t),this.editorCanvas&&(this.editorCanvas.style.outline="1px solid purple")},e.prototype.handleDragLeave=function(t){this.stopEventDefaults(t),this.editorCanvas&&(this.editorCanvas.style.outline="none")},e.prototype.handleFileDrop=function(t){this.handleDragLeave(t),t.dataTransfer&&this.props.onFileSelected(t.dataTransfer.files[0])},e.prototype.onKeyboardHandler=function(t){var e=this;switch(t.key){case"+":return this.zoom(this.state.stepSize,128,128,!1);case"-":return this.zoom(-this.state.stepSize,128,128,!1)}var n=(t.which===V.a.left?1:t.which===V.a.right&&-1)||0,a=(t.which===V.a.up?1:t.which===V.a.down&&-1)||0,r=this.rotate(n,a,this.state.orientation),i=r.x,s=r.y;this.state.image&&this.setState(function(t,n){var a=i*t.naturalWidth/100,r=s*t.naturalHeight/100;return Object(o.l)(t,{xpos:e.keepInside(t.xpos+a,t.naturalWidth*t.absoluteScale/t.maximumScale),ypos:e.keepInside(t.ypos+r,t.naturalHeight*t.absoluteScale/t.maximumScale)})})},e}(z.Component),it=n(1139),st=n(1403),lt=Object($.c)(function(t){var e=t.palette;return Object(Q.ab)({picker:t.fonts.medium,uploadHeader:t.fonts.xLarge,messageBarText:t.fonts.medium},{modal:{width:512,maxWidth:512,margin:0,selectors:{"#lpc-photo-picker .ms-Button-icon":{display:"inline-block",minWidth:16,padding:"0px 4px",backgroundColor:"transparent"},"#lpc-photo-picker .ms-Slider-slideBox:focus":{outline:"transparent"},"#lpc-photo-picker .ms-Button":{height:32,border:"none"},"#lpc-photo-picker .ms-Button--default":{marginLeft:0,backgroundColor:e.neutralLighter},"#lpc-photo-picker .ms-Button--icon &hover":{color:e.themePrimary},"#lpc-photo-picker .ms-Button--icon &active":{color:e.themeDarker},"#lpc-photo-picker .ms-Button--primary &:not([disabled])":{backgroundColor:e.themePrimary},"#lpc-photo-picker .ms-Button--primary &:hover":{backgroundColor:e.themeDarkAlt},"#lpc-photo-picker .ms-Button--primary &:active":{backgroundColor:e.themeDark},"#lpc-photo-picker .ms-Button--default .ms-Button-label":{color:e.neutralDark},"#lpc-photo-picker .ms-Button--default &:hover":{backgroundColor:e.neutralLight},"#lpc-photo-picker .ms-Button--default &:active":{backgroundColor:e.neutralTertiaryAlt}}},picker:{padding:32,overflow:"hidden"},header:{display:"flex",alignContent:"space-between"},uploadHeader:{color:e.neutralPrimary,fontWeight:300,marginBottom:7,flexGrow:1},messageBar:{margin:"7px 0"},messageBarText:{color:e.neutralPrimary},fileInput:{display:"none"},fileInputButton:{color:e.themePrimary,padding:0,margin:"0 0 12px -4px"},closeButton:{float:"right",marginTop:-20,marginRight:-20},removeButton:{marginLeft:"auto"},endActions:{alignItems:"center",display:"flex",selectors:{button:{marginRight:12,minWidth:90,padding:"0px 16px"}}}})}),ut=function(t){var e=lt(t.theme),n="UNKNOWN"===t.warning,o="IMAGE_TOO_SMALL_ERROR"===t.warning,a=n||o?it.a.error:it.a.warning,r=n?void 0:t.onDismiss;return z.createElement(st.a,{className:e.messageBar,messageBarType:a,onDismiss:r,isMultiline:!0,"aria-live":"polite",role:"region"},z.createElement("div",{className:e.messageBarText},t.warningText))},pt=function(){var t=function(e,n){return(t=k.a||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?O()(n):(o.prototype=n.prototype,new o)}}(),ct=function(t){function e(e){return 1/(1+Math.exp(-t*e))-.5}var n=.5/e(1);return function(t){return t<=0?0:t>1?1:n*e(2*t-1)+.5}}(5),dt=function(t){function e(e){var n=t.call(this,e)||this;return n.editCanvas=null,n.fileInput=null,n.focusTrap=null,n.primaryButton=null,n.handleOnRemoveButtonClicked=function(){n.props.onLoadedEmptyImage()},n.handleOnSaveButtonClicked=function(){switch(n.props.status){case"SUCCESS":return n.props.onDone(),n.props.onDismiss();default:if(!n.editCanvas)return;var t=n.editCanvas.getImageDataUrlFromCanvas();n.props.onStartUpload(performance.now(),t,n.props.onUpload)}},n.handleUploadAnimation=function(){"IN_PROGRESS"===n.props.status&&n.props.onUploadProgress(performance.now())},n.handleOnCancelButtonClicked=function(){n.props.onCancel(),n.props.onDismiss()},n.handleOnCloseButtonClicked=function(){n.props.onClose(),n.props.onDismiss()},n.state={isUploadedPhotoTooSmall:!1},n}return pt(e,t),e.prototype.render=function(){var t=this,e=lt(this.props.theme),n=this.getSaveButtonText(this.props.status),o=this.getWarningText(this.props.warning),a=Object(W.b)({text:this.props.personDisplayName}),r=Object(M.a)(this.props.personDisplayName,Object(j.a)());return z.createElement(T.a,{className:"lpc_nested_popup",containerClassName:e.modal,isOpen:!0,onDismiss:this.props.onDismiss,titleAriaId:"dialogTitle"},z.createElement(L.a,{id:"lpc-photo-picker",className:e.picker,componentRef:function(e){return t.focusTrap=e},firstFocusableSelector:e.fileInputButton},z.createElement(R.a,{className:e.closeButton,iconProps:{iconName:"Cancel"},onClick:this.handleOnCloseButtonClicked,ariaLabel:this.props.strings.cancel}),z.createElement("div",{className:e.header,id:"dialogTitle"},z.createElement("div",{className:e.uploadHeader},this.props.strings.uploadHeader)),o&&z.createElement(ut,{theme:this.props.theme,warning:this.props.warning,status:this.props.status,warningText:o,onDismiss:this.props.onDismissInfoBar}),z.createElement("input",{role:"button",className:e.fileInput,type:"file",ref:function(e){return t.fileInput=e},onClick:function(t){return t.currentTarget.value=""},onChange:function(e){return e.currentTarget.files&&t.props.onFileSelected(e.currentTarget.files[0])},"data-log-name":"PhotoPickerFileInput",accept:"image/*"}),z.createElement(B.a,{className:e.fileInputButton,iconProps:{iconName:"Add"},onClick:function(){t.fileInput&&t.fileInput.click(),t.props.onUploadNewPhoto()}},this.props.strings.upload),z.createElement(rt,{theme:this.props.theme,ref:function(e){return t.editCanvas=e},dataUrl:this.props.dataUrl,initials:r,textboyColor:a,progress:this.props.progress,warning:o,strings:this.props.strings,onError:this.props.onError,isUploadedPhotoTooSmall:function(e){return t.setState({isUploadedPhotoTooSmall:e})},onFileSelected:this.props.onFileSelected,onRefocus:function(){return t.onFocusChange()},onUpdate:this.props.onImageUpdated}),z.createElement("div",{className:e.endActions},z.createElement(_.a,{disabled:!this.props.isUpdated||"IN_PROGRESS"===this.props.status||this.state.isUploadedPhotoTooSmall,onClick:this.handleOnSaveButtonClicked,"data-log-name":"PhotoPickerOkay",componentRef:function(e){return t.primaryButton=e}},n),this.props.progress>0?null:z.createElement(A.a,{onClick:this.handleOnCancelButtonClicked,"data-log-name":"PhotoPickerCancel"},this.props.strings.cancel),this.props.isImageRemovable&&z.createElement(B.a,{className:e.removeButton,iconProps:{iconName:"Delete"},onClick:this.handleOnRemoveButtonClicked,"data-log-name":"PhotoPickerDelete"},this.props.strings.remove))))},e.prototype.componentDidMount=function(){var t=this;this.loadCurrentImage(),requestAnimationFrame(function(){return t.focusTrap&&t.focusTrap.focus()})},e.prototype.componentWillUnmount=function(){this.props.onImageEditPaneDismissed()},e.prototype.componentDidUpdate=function(t){"IN_PROGRESS"===this.props.status&&requestAnimationFrame(this.handleUploadAnimation),"IN_PROGRESS"===t.status&&"SUCCESS"===this.props.status&&this.primaryButton&&this.primaryButton.focus()},e.prototype.onFocusChange=function(){"SUCCESS"===this.props.status?this.primaryButton&&this.primaryButton.focus():this.focusTrap&&this.focusTrap.focus()},e.prototype.getSaveButtonText=function(t){switch(t){case"IN_PROGRESS":return this.props.strings.inProgress;case"SUCCESS":return this.props.strings.close;case"READY":case"SOMETHING_WENT_WRONG":return this.props.strings.apply;default:return Object(o.g)(t)}},e.prototype.getWarningText=function(t){switch(t){case"IMAGE_TOO_SMALL_WARNING":return this.props.strings.imageTooSmall;case"IMAGE_TOO_SMALL_ERROR":return this.props.strings.imageTooSmallError;case"NOT_AN_IMAGE":return this.props.strings.notAnImage;case"UNKNOWN":return this.props.strings.somethingWentWrong;case"UNSUPPORTED_BROWSER":return this.props.strings.unsupportedBrowser;default:return""}},e.prototype.loadCurrentImage=function(){var t=this,e=new Image;e.crossOrigin="Anonymous",e.onload=function(){return t.profileImageLoaded(e)},e.onerror=function(){return t.profileImageLoadFailed()},e.src=this.props.personImageUrl},e.prototype.profileImageLoaded=function(t){var e=document.createElement("canvas");e.width=t.naturalWidth,e.height=t.naturalHeight;var n=e.getContext("2d");n?(n.drawImage(t,0,0),this.props.onLoadedCurrentImage(G(e),!!this.props.isSuggestedPhoto)):this.props.onError("UNSUPPORTED_BROWSER")},e.prototype.profileImageLoadFailed=function(){this.props.onLoadedEmptyImage()},e}(z.Component);var ht=Object(N.a)(Object(H.b)(function(t,e){var n=P.getSelectors(t),a=0;switch(n.status){case"IN_PROGRESS":var r=n.uploadDuration/2e3;a=.999999*ct(r);break;case"SUCCESS":a=1;break;case"READY":case"SOMETHING_WENT_WRONG":a=0;break;default:Object(o.g)(n.status)}return{dataUrl:n.dataUrl,initialImage:n.currentImageDataUrl,warning:n.warning,status:n.status,isUpdated:n.isUpdated,progress:a}},function(t){return{onDismissInfoBar:function(){return t(E())},onError:function(e){return t(y({warning:e}))},onUploadNewPhoto:function(){return t(d())},onFileSelected:function(e){return function(t,e){var n=new FileReader,o=function(){return t(y({warning:"NOT_AN_IMAGE"}))};n.onerror=o,n.onloadend=function(){var e=document.createElement("img");e.onerror=o,e.onload=function(){return t(v({dataUrl:e.src}))},e.src=String(n.result)},n.readAsDataURL(e)}(t,e)},onCancel:function(){return t(u())},onClose:function(){return t(p())},onDone:function(){return t(c())},onImageEditPaneDismissed:function(){return t(h())},onImageUpdated:function(){return t(m())},onLoadedCurrentImage:function(e,n){return t(f({dataUrl:e,isSuggestedPhoto:n}))},onLoadedEmptyImage:function(){return t(g())},onStartUpload:function(e,n,o){return function(t,e,n,o){t(S({now:e})),o(n,function(){return t(C({dataUrl:n}))},function(){return t(y({warning:"UNKNOWN"}))})}(t,e,n,o)},onUploadProgress:function(e){return t(b({now:e}))}}})(dt)),mt=n(698),ft=n(277),gt=n(847),vt=n(873),yt=n(58),St=function(){var t=function(e,n){return(t=k.a||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?O()(n):(o.prototype=n.prototype,new o)}}(),bt=function(){return(bt=Y.a||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var a in e=arguments[n])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}).apply(this,arguments)},Ct=!1;function Et(){Ct||(Ct=!0,Object(vt.a)(void 0,{disableWarnings:!0}))}var wt=null,Ut=0,Pt=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return St(e,t),e.prototype.componentWillMount=function(){if(Ut>=1)throw new Error("Can only mount one StandaloneProfilePhotoPicker at a time.");if(Ut+=1,Et(),null===wt){var t=Object(yt.createStore)(Object(mt.a)([P]));wt=new ft.a({reduxStore:t})}},e.prototype.componentWillUnmount=function(){Ut-=1},e.prototype.render=function(){return wt?z.createElement(gt.a,{context:wt},z.createElement(ht,bt({},this.props))):null},e}(z.Component);n.d(e,"ProfilePhotoPickerStore",function(){return P}),n.d(e,"ProfilePhotoPicker",function(){return ht}),n.d(e,"StandaloneProfilePhotoPicker",function(){return Pt}),n.d(e,"initIcons",function(){return Et})},954:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var o,a=n(72);function r(t){if(void 0===o||t){var e=Object(a.a)(),n=e&&e.navigator.userAgent;o=!!n&&-1!==n.indexOf("Macintosh")}return!!o}},955:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var o=function(){return!!(window&&window.navigator&&window.navigator.userAgent)&&/iPad|iPhone|iPod/i.test(window.navigator.userAgent)}},956:function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return r});var o=["setState","render","componentWillMount","UNSAFE_componentWillMount","componentDidMount","componentWillReceiveProps","UNSAFE_componentWillReceiveProps","shouldComponentUpdate","componentWillUpdate","getSnapshotBeforeUpdate","UNSAFE_componentWillUpdate","componentDidUpdate","componentWillUnmount"];function a(t,e,n){void 0===n&&(n=o);var a=[],r=function(o){"function"!=typeof e[o]||void 0!==t[o]||n&&-1!==n.indexOf(o)||(a.push(o),t[o]=function(){e[o].apply(e,arguments)})};for(var i in e)r(i);return a}function r(t,e){e.forEach(function(e){return delete t[e]})}}}]);