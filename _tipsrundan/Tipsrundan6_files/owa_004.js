self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.AllowedOptions.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[113],{12534:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(38),o=n(12535);t.default=function(e,t){return void 0===e||e.__type||(e=o.default(e)),r.makeServiceRequest("GetAllowedOptions",e,t)}},12535:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.default=function(e){return r.__assign({__type:"GetAllowedOptionsRequest:#Exchange"},e)}},14041:function(e,t,n){"use strict";n.r(t);var r=n(4),o=n(3730),u=Object(r.mutatorAction)("SET_ALLOWED_OPTIONS",(function(e){Object(o.a)().allowedOptions=e})),i=n(12534),d=n.n(i),a=n(331);var c=void 0;function s(){return c||(c=d()({Header:Object(a.getJsonRequestHeader)()}).then((function(e){return u(e.AllowedOptions)}))),c}n.d(t,"loadAllowedOptions",(function(){return s}))},331:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(292),o=n(293),u=n(291),i=n(287);t.getJsonRequestHeader=function(e){return r.default({RequestServerVersion:"Exchange2015",TimeZoneContext:o.default({TimeZoneDefinition:u.default({Id:null!=e?e:"Pacific Standard Time"})})})},t.getExtendedPropertyUri=function(e,t,n){return i.default({PropertySetId:e,PropertyName:t,PropertyType:n})}}}]);
//# sourceMappingURL=owa.AllowedOptions.js.map
self.scriptsLoaded['owa.AllowedOptions.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.AllowedOptions.js'] = (new Date()).getTime();