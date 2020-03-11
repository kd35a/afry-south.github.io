self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.vendors~Addins~addins-marketplace.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[75],{10002:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(0);t.default=function(e){return i.__assign({__type:"UpdateClientExtensionNotificationsJsonRequest:#Exchange"},e)}},10003:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(0);t.default=function(e){return i.__assign({__type:"EwsProxyRequestParameters:#Exchange"},e)}},10004:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(0);t.default=function(e){return i.__assign({__type:"LoadExtensionCustomPropertiesParameters:#Exchange"},e)}},10005:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(0);t.default=function(e){return i.__assign({__type:"RegisterConsentJsonRequest:#Exchange"},e)}},10006:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(0);t.default=function(e){return i.__assign({__type:"SaveExtensionCustomPropertiesParameters:#Exchange"},e)}},10007:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(0);t.default=function(e){return i.__assign({__type:"SaveExtensionSettingsParameters:#Exchange"},e)}},10008:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(0);t.default=function(e){return i.__assign({__type:"GetExtensibilityContextParameters:#Exchange"},e)}},10009:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(0);t.default=function(e){return i.__assign({__type:"GetAllClientExtensionsNotificationsJsonRequest:#Exchange"},e)}},1311:function(e,t,n){"use strict";e.exports=function(e,t){return"string"!=typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),/["'() \t\n]/.test(e)||t?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},1422:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(38),r=n(2304);t.default=function(e,t){return void 0===e||e.__type||(e=r.default(e)),i.makeServiceRequest("GetClientAccessToken",e,t)}},1423:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(0);t.default=function(e){return i.__assign({__type:"GetClientAccessTokenRequest:#Exchange"},e)}},146:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.Unspecified=0]="Unspecified",e[e.String=1]="String",e[e.Int64=2]="Int64",e[e.Double=3]="Double",e[e.Boolean=4]="Boolean",e[e.Date=5]="Date"}(t.AWTPropertyType||(t.AWTPropertyType={})),function(e){e[e.NotSet=0]="NotSet",e[e.DistinguishedName=1]="DistinguishedName",e[e.GenericData=2]="GenericData",e[e.IPV4Address=3]="IPV4Address",e[e.IPv6Address=4]="IPv6Address",e[e.MailSubject=5]="MailSubject",e[e.PhoneNumber=6]="PhoneNumber",e[e.QueryString=7]="QueryString",e[e.SipAddress=8]="SipAddress",e[e.SmtpAddress=9]="SmtpAddress",e[e.Identity=10]="Identity",e[e.Uri=11]="Uri",e[e.Fqdn=12]="Fqdn",e[e.IPV4AddressLegacy=13]="IPV4AddressLegacy"}(t.AWTPiiKind||(t.AWTPiiKind={})),function(e){e[e.NotSet=0]="NotSet",e[e.GenericContent=1]="GenericContent"}(t.AWTCustomerContentKind||(t.AWTCustomerContentKind={})),function(e){e[e.Low=1]="Low",e[e.Normal=2]="Normal",e[e.High=3]="High",e[e.Immediate_sync=5]="Immediate_sync"}(t.AWTEventPriority||(t.AWTEventPriority={})),function(e){e[e.NonRetryableStatus=1]="NonRetryableStatus",e[e.QueueFull=3]="QueueFull",e[e.MaxRetryLimit=4]="MaxRetryLimit"}(t.AWTEventsDroppedReason||(t.AWTEventsDroppedReason={})),function(e){e[e.InvalidEvent=1]="InvalidEvent",e[e.SizeLimitExceeded=2]="SizeLimitExceeded",e[e.KillSwitch=3]="KillSwitch"}(t.AWTEventsRejectedReason||(t.AWTEventsRejectedReason={}))},150:function(e,t,n){"use strict";function i(){var e=Object.create(null),t=0,n=0,i=0,r=!1;function s(t){i--,delete e[t]}this.put=function(t,n,r,o){if(void 0!==r&&("number"!=typeof r||isNaN(r)||r<=0))throw new Error("Cache timeout must be a positive number");if(void 0!==o&&"function"!=typeof o)throw new Error("Cache timeout callback must be a function");var a=e[t];a?clearTimeout(a.timeout):i++;var u={value:n,expire:r+Date.now()};return isNaN(u.expire)||(u.timeout=setTimeout(function(){s(t),o&&o(t,n)}.bind(this),r)),e[t]=u,n},this.del=function(t){var n=!0,i=e[t];return i?(clearTimeout(i.timeout),!isNaN(i.expire)&&i.expire<Date.now()&&(n=!1)):n=!1,n&&s(t),n},this.clear=function(){for(var s in e)clearTimeout(e[s].timeout);i=0,e=Object.create(null),r&&(t=0,n=0)},this.get=function(s){var o=e[s];if(void 0!==o){if(isNaN(o.expire)||o.expire>=Date.now())return r&&t++,o.value;r&&n++,i--,delete e[s]}else r&&n++;return null},this.size=function(){return i},this.memsize=function(){var t,n=0;for(t in e)n++;return n},this.debug=function(e){r=e},this.hits=function(){return t},this.misses=function(){return n},this.keys=function(){return Object.keys(e)},this.exportJson=function(){var t={};for(var n in e){var i=e[n];t[n]={value:i.value,expire:i.expire||"NaN"}}return JSON.stringify(t)},this.importJson=function(t,n){var i=JSON.parse(t),r=Date.now(),s=n&&n.skipDuplicates;for(var o in i)if(i.hasOwnProperty(o)){if(s)if(e[o])continue;var a=i[o],u=a.expire-r;if(u<=0){this.del(o);continue}u=u>0?u:void 0,this.put(o,a.value,u)}return this.size()}}e.exports=new i,e.exports.Cache=i},2304:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(0);t.default=function(e){return i.__assign({__type:"GetClientAccessTokenJsonRequest:#Exchange"},e)}},301:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var i,r=n(167);n.d(t,"b",(function(){return r.ResponsiveMode})),function(e){e[e.normal=0]="normal",e[e.largeHeader=1]="largeHeader",e[e.close=2]="close"}(i||(i={}))},331:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(292),r=n(293),s=n(291),o=n(287);t.getJsonRequestHeader=function(e){return i.default({RequestServerVersion:"Exchange2015",TimeZoneContext:r.default({TimeZoneDefinition:s.default({Id:null!=e?e:"Pacific Standard Time"})})})},t.getExtendedPropertyUri=function(e,t,n){return o.default({PropertySetId:e,PropertyName:t,PropertyType:n})}},412:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(0);t.default=function(e){return i.__assign({__type:"TokenRequest:#Exchange"},e)}},4250:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(0);t.default=function(e){return i.__assign({__type:"InstallExtensionJsonRequest:#Exchange"},e)}},4573:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(38),r=n(4250);t.default=function(e,t){return void 0===e||e.__type||(e=r.default(e)),i.makeServiceRequest("InstallExtension",e,t)}},467:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(38),r=n(412);t.default=function(e,t){return void 0===e||e.__type||(e=r.default(e)),i.makeServiceRequest("GetAccessTokenforResource",e,t)}},470:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var i=n(0),r=n(1),s=n(166),o=n(153),a=Object(s.a)(),u=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i.__extends(t,e),t.prototype.render=function(){var e=this.props,t=e.className,n=e.styles,i=e.theme;return this._classNames=a(n,{theme:i,className:t}),r.createElement("div",{className:this._classNames.actions},r.createElement("div",{className:this._classNames.actionsRight},this._renderChildrenAsActions()))},t.prototype._renderChildrenAsActions=function(){var e=this;return r.Children.map(this.props.children,(function(t){return t?r.createElement("span",{className:e._classNames.action},t):null}))},t}(o.a)},474:function(e,t,n){"use strict";var i=n(295),r=n(470),s=n(9),o={actions:"ms-Dialog-actions",action:"ms-Dialog-action",actionsRight:"ms-Dialog-actionsRight"};n.d(t,"a",(function(){return a}));var a=Object(i.a)(r.a,(function(e){var t=e.className,n=e.theme,i=Object(s.getGlobalClassNames)(o,n);return{actions:[i.actions,{position:"relative",width:"100%",minHeight:"24px",lineHeight:"24px",margin:"16px 0 0",fontSize:"0",selectors:{".ms-Button":{lineHeight:"normal"}}},t],action:[i.action,{margin:"0 4px"}],actionsRight:[i.actionsRight,{textAlign:"right",marginRight:"-4px",fontSize:"0"}]}}),void 0,{scope:"DialogFooter"})},475:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var i=n(0),r=n(1),s=n(166),o=n(145),a=n(301),u=n(643),c=n(167),l=n(477),d=Object(s.a)(),p={isDarkOverlay:!1,isBlocking:!1,className:"",containerClassName:"",topOffsetFixed:!1},f={type:a.a.normal,className:"",topButtonsProps:[]},m=function(e){function t(t){var n=e.call(this,t)||this;return n._getSubTextId=function(){var e=n.props,t=e.ariaDescribedById,i=e.modalProps,r=e.dialogContentProps,s=e.subText,o=t||i&&i.subtitleAriaId;return o||(o=(s||r&&r.subText)&&n._defaultSubTextId),o},n._getTitleTextId=function(){var e=n.props,t=e.ariaLabelledById,i=e.modalProps,r=e.dialogContentProps,s=e.title,o=t||i&&i.titleAriaId;return o||(o=(s||r&&r.title)&&n._defaultTitleTextId),o},n._id=Object(o.a)("Dialog"),n._defaultTitleTextId=n._id+"-title",n._defaultSubTextId=n._id+"-subText",n}return i.__extends(t,e),t.prototype.render=function(){var e,t,n=this.props,s=n.className,o=n.containerClassName,a=n.contentClassName,c=n.elementToFocusOnDismiss,m=n.firstFocusableSelector,_=n.forceFocusInsideTrap,v=n.styles,g=n.hidden,h=n.ignoreExternalFocusing,x=n.isBlocking,y=n.isClickableOutsideFocusTrap,b=n.isDarkOverlay,P=n.isOpen,T=n.onDismiss,S=n.onDismissed,E=n.onLayerDidMount,N=n.responsiveMode,C=n.subText,D=n.theme,O=n.title,M=n.topButtonsProps,j=n.type,w=n.minWidth,R=n.maxWidth,q=n.modalProps,I=i.__assign({},q?q.layerProps:{onLayerDidMount:E});E&&!I.onLayerDidMount&&(I.onLayerDidMount=E),q&&q.dragOptions&&!q.dragOptions.dragHandleSelector?(e="ms-Dialog-draggable-header",t=i.__assign({},q.dragOptions,{dragHandleSelector:"."+e})):t=q&&q.dragOptions;var A=i.__assign({},p,q,{layerProps:I,dragOptions:t}),k=i.__assign({},f,this.props.dialogContentProps,{draggableHeaderClassName:e}),W=d(v,{theme:D,className:s||A.className,containerClassName:o||A.containerClassName,hidden:g,dialogDefaultMinWidth:w,dialogDefaultMaxWidth:R});return r.createElement(u.a,i.__assign({elementToFocusOnDismiss:c,firstFocusableSelector:m,forceFocusInsideTrap:_,ignoreExternalFocusing:h,isClickableOutsideFocusTrap:y,onDismissed:S,responsiveMode:N},A,{isDarkOverlay:void 0!==b?b:A.isDarkOverlay,isBlocking:void 0!==x?x:A.isBlocking,isOpen:void 0!==P?P:!g,className:W.root,containerClassName:W.main,onDismiss:T||A.onDismiss,subtitleAriaId:this._getSubTextId(),titleAriaId:this._getTitleTextId()}),r.createElement(l.a,i.__assign({titleId:this._defaultTitleTextId,subTextId:this._defaultSubTextId,title:O,subText:C,showCloseButton:void 0!==x?!x:!A.isBlocking,topButtonsProps:M||k.topButtonsProps,type:void 0!==j?j:k.type,onDismiss:T||k.onDismiss,className:a||k.className},k),this.props.children))},t.defaultProps={hidden:!0},t=i.__decorate([c.withResponsiveMode],t)}(r.Component)},476:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var i=n(0),r=n(1),s=n(166),o=n(153),a=n(301),u=n(486),c=n(474),l=n(167),d=Object(s.a)(),p=r.createElement(c.a,null).type,f=function(e){function t(t){return e.call(this,t)||this}return i.__extends(t,e),t.prototype.render=function(){var e,t=this.props,n=t.showCloseButton,s=t.className,o=t.closeButtonAriaLabel,c=t.onDismiss,l=t.subTextId,p=t.subText,f=t.titleId,m=t.title,_=t.type,v=t.styles,g=t.theme,h=t.draggableHeaderClassName,x=d(v,{theme:g,className:s,isLargeHeader:_===a.a.largeHeader,isClose:_===a.a.close,draggableHeaderClassName:h}),y=this._groupChildren();return p&&(e=r.createElement("p",{className:x.subText,id:l},p)),r.createElement("div",{className:x.content},r.createElement("div",{className:x.header},r.createElement("p",{className:x.title,id:f,role:"heading","aria-level":2},m),r.createElement("div",{className:x.topButton},this.props.topButtonsProps.map((function(e,t){return r.createElement(u.a,i.__assign({key:e.uniqueId||t},e))})),(_===a.a.close||n&&_!==a.a.largeHeader)&&r.createElement(u.a,{className:x.button,iconProps:{iconName:"Cancel"},ariaLabel:o,onClick:c,title:o}))),r.createElement("div",{className:x.inner},r.createElement("div",{className:x.innerContent},e,y.contents),y.footers))},t.prototype._groupChildren=function(){var e={footers:[],contents:[]};return r.Children.map(this.props.children,(function(t){"object"==typeof t&&null!==t&&t.type===p?e.footers.push(t):e.contents.push(t)})),e},t.defaultProps={showCloseButton:!1,className:"",topButtonsProps:[],closeButtonAriaLabel:"Close"},t=i.__decorate([l.withResponsiveMode],t)}(o.a)},477:function(e,t,n){"use strict";var i=n(295),r=n(476),s=n(9),o={contentLgHeader:"ms-Dialog-lgHeader",close:"ms-Dialog--close",subText:"ms-Dialog-subText",header:"ms-Dialog-header",headerLg:"ms-Dialog--lgHeader",button:"ms-Dialog-button ms-Dialog-button--close",inner:"ms-Dialog-inner",content:"ms-Dialog-content",title:"ms-Dialog-title"};n.d(t,"a",(function(){return a}));var a=Object(i.a)(r.a,(function(e){var t,n,i,r=e.className,a=e.theme,u=e.isLargeHeader,c=e.isClose,l=e.hidden,d=e.isMultiline,p=e.draggableHeaderClassName,f=a.palette,m=a.fonts,_=a.effects,v=a.semanticColors,g=Object(s.getGlobalClassNames)(o,a);return{content:[u&&[g.contentLgHeader,{borderTop:"4px solid "+f.themePrimary}],c&&g.close,{flexGrow:1,overflowY:"hidden"},r],subText:[g.subText,m.medium,{margin:"0 0 24px 0",color:v.bodySubtext,lineHeight:"1.5",wordWrap:"break-word",fontWeight:s.FontWeights.regular}],header:[g.header,{position:"relative",width:"100%",boxSizing:"border-box"},c&&g.close,p&&[p,{cursor:"move"}]],button:[g.button,l&&{selectors:{".ms-Icon.ms-Icon--Cancel":{color:v.buttonText,fontSize:s.IconFontSizes.medium}}}],inner:[g.inner,{padding:"0 24px 24px",selectors:(t={},t["@media (min-width: "+s.ScreenWidthMinSmall+"px) and (max-width: "+s.ScreenWidthMaxSmall+"px)"]={padding:"0 16px 16px"},t)}],innerContent:[g.content,{position:"relative",width:"100%"}],title:[g.title,m.xLarge,{color:v.bodyText,margin:"0",padding:"16px 46px 20px 24px",lineHeight:"normal",selectors:(n={},n["@media (min-width: "+s.ScreenWidthMinSmall+"px) and (max-width: "+s.ScreenWidthMaxSmall+"px)"]={padding:"16px 46px 16px 16px"},n)},u&&{color:v.menuHeader},d&&{fontSize:m.xxLarge.fontSize}],topButton:[{display:"flex",flexDirection:"row",flexWrap:"nowrap",position:"absolute",top:"0",right:"0",padding:"15px 15px 0 0",selectors:(i={"> *":{flex:"0 0 auto"},".ms-Dialog-button":{color:v.buttonText},".ms-Dialog-button:hover":{color:v.buttonTextHovered,borderRadius:_.roundedCorner2}},i["@media (min-width: "+s.ScreenWidthMinSmall+"px) and (max-width: "+s.ScreenWidthMaxSmall+"px)"]={padding:"15px 8px 0 0"},i)}]}}),void 0,{scope:"DialogContent"})},7402:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(0);t.default=function(e){return i.__assign({__type:"DisableExtensionJsonRequest:#Exchange"},e)}},7403:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(0);t.default=function(e){return i.__assign({__type:"UninstallExtensionJsonRequest:#Exchange"},e)}},7404:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(0);t.default=function(e){return i.__assign({__type:"EnableAppDataRequest:#Exchange"},e)}},787:function(e,t,n){"use strict";var i=n(295),r=n(475),s=n(9),o={root:"ms-Dialog"};n.d(t,"a",(function(){return a}));var a=Object(i.a)(r.a,(function(e){var t,n=e.className,i=e.containerClassName,r=e.dialogDefaultMinWidth,a=void 0===r?"288px":r,u=e.dialogDefaultMaxWidth,c=void 0===u?"340px":u,l=e.hidden,d=e.theme;return{root:[Object(s.getGlobalClassNames)(o,d).root,d.fonts.medium,n],main:[{width:a,outline:"3px solid transparent",selectors:(t={},t["@media (min-width: "+s.ScreenWidthMinMedium+"px)"]={width:"auto",maxWidth:c,minWidth:a},t)},!l&&{display:"flex"},i]}}),void 0,{scope:"Dialog"})},793:function(e,t,n){"use strict";function i(e){throw new Error("Unexpected object: "+e)}n.d(t,"a",(function(){return i}))},8878:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(38),r=n(10002);t.default=function(e,t){return void 0===e||e.__type||(e=r.default(e)),i.makeServiceRequest("UpdateClientExtensionNotifications",e,t)}},8879:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(0);t.default=function(e){return i.__assign({__type:"UpdateClientExtensionNotificationsRequest:#Exchange"},e)}},8880:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(38);t.default=function(e,t){return i.makeServiceRequest("SanitizeHtml",e,t)}},8881:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(38),r=n(10003);t.default=function(e,t){return void 0===e||e.__type||(e=r.default(e)),i.makeServiceRequest("ExecuteEwsProxy",e,t)}},8882:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(38),r=n(10004);t.default=function(e,t){return void 0===e.request||e.request.__type||(e.request=r.default(e.request)),i.makeServiceRequest("LoadExtensionCustomProperties",e,t)}},8883:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(38),r=n(10005);t.default=function(e,t){return void 0===e||e.__type||(e=r.default(e)),i.makeServiceRequest("RegisterConsent",e,t)}},8884:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(0);t.default=function(e){return i.__assign({__type:"RegisterConsentRequest:#Exchange"},e)}},8885:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(38),r=n(10006);t.default=function(e,t){return void 0===e.request||e.request.__type||(e.request=r.default(e.request)),i.makeServiceRequest("SaveExtensionCustomProperties",e,t)}},8886:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(38),r=n(10007);t.default=function(e,t){return void 0===e.request||e.request.__type||(e.request=r.default(e.request)),i.makeServiceRequest("SaveExtensionSettings",e,t)}},8887:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(38),r=n(10008);t.default=function(e,t){return void 0===e.request||e.request.__type||(e.request=r.default(e.request)),i.makeServiceRequest("GetExtensibilityContext",e,t)}},8888:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(38),r=n(10009);t.default=function(e,t){return void 0===e||e.__type||(e=r.default(e)),i.makeServiceRequest("GetAllClientExtensionsNotifications",e,t)}},8889:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(0);t.default=function(e){return i.__assign({__type:"GetAllClientExtensionsNotificationsRequest:#Exchange"},e)}},8890:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(38),r=n(7402);t.default=function(e,t){return void 0===e||e.__type||(e=r.default(e)),i.makeServiceRequest("DisableExtension",e,t)}},8891:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(38),r=n(7403);t.default=function(e,t){return void 0===e||e.__type||(e=r.default(e)),i.makeServiceRequest("UninstallExtension",e,t)}},8892:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(38),r=n(7404);t.default=function(e,t){return void 0===e||e.__type||(e=r.default(e)),i.makeServiceRequest("EnableApp",e,t)}},9505:function(e,t,n){"use strict";var i,r=n(146);!function(e){e[e.String=0]="String",e[e.Boolean=1]="Boolean",e[e.Int64=2]="Int64",e[e.Double=3]="Double"}(i||(i={})),n.d(t,"a",(function(){return l}));var s=/\./g,o=".",a="Data",u="zC",c=0;function l(e,t,n){var i,o,a={name:(i=e.eventName,i.toLowerCase().replace(s,"_")),properties:{}};if(!e.telemetryProperties||!e.telemetryProperties.ariaTenantToken)throw new Error("Unable to find ariaTenantToken for namespace.");return a.properties["Event.Sequence"]={value:++c,type:r.AWTPropertyType.Int64},a.properties["Event.Name"]=e.eventName,a.properties["Event.Source"]="OTelJS",o=n?new Date(n):new Date,a.properties["Event.Time"]={value:o,type:r.AWTPropertyType.Date},e.eventContract&&(a.properties["Event.Contract"]=e.eventContract.name,d(a,e.eventContract.dataFields,!1)),d(a,t,!1),d(a,e.dataFields,!0),a}function d(e,t,n){t&&t.forEach((function(t){var i=["","",t.name],r=i[0],s=i[1],c=i[2],l=t.name.indexOf(o);l>0&&t.name.substr(0,l)===u&&(r=t.name.substring(0,l+1),c=t.name.substring(l+1)),n&&(s=a+o);var d=r+s+c;e.properties[d]={value:t.value,type:p(t.dataType)}}))}function p(e){switch(e){case i.String:return r.AWTPropertyType.String;case i.Boolean:return r.AWTPropertyType.Boolean;case i.Int64:return r.AWTPropertyType.Int64;case i.Double:return r.AWTPropertyType.Double;default:throw new Error(e)}}}}]);
//# sourceMappingURL=owa.vendors~Addins~addins-marketplace.js.map
self.scriptsLoaded['owa.vendors~Addins~addins-marketplace.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.vendors~Addins~addins-marketplace.js'] = (new Date()).getTime();