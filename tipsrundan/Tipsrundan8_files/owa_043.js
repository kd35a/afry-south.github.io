self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.MailFunctionalBoot~PostMailDeeplinkBoot.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[67],{1132:function(e,n,t){"use strict";var r=t(0);function i(e){return e>0}var o=t(4),u=t(84),c=Object(o.action)("UNSUBSCRIBE_FROM_BRAND_SUBSCRIPTION",(function(e,n,t,r,i,o){return Object(u.c)({name:"UnsubscribeSubscription",customData:{unsubscribeSourceType:e}},{unsubscribeSourceType:e,smtpAddress:n,smtpIdentifier:t,unsubscribeSilentUris:r,unsubscribeHttpUri:i,completedCallback:o})})),a=Object(o.action)("AFTER_UNSUBSCRIBE",(function(e,n,t,r,i){return{smtpIdentifier:e,unsubscribeSourceType:n,responseType:t,debugMessage:r,completedCallback:i}})),s=t(7),d=t(195),f="ows/api/beta/subscriptions/{0}/unsubscribe";var b,l=function(e,n){return Object(r.__awaiter)(this,void 0,void 0,(function(){return Object(r.__generator)(this,(function(t){switch(t.label){case 0:return[4,Object(d.c)(Object(s.b)(f,e),{unsubscribeSilentUris:n},null,!0)];case 1:return[2,t.sent()]}}))}))};!function(e){e[e.Fail=0]="Fail",e[e.Success=1]="Success"}(b||(b={}));var p=b,O=t(14),v=Object(o.createStore)("BrandSubscription",{subscriptions:new O.ObservableMap({}),unsubscribedSubscriptions:new O.ObservableMap({})})();function m(e){return e&&v.subscriptions.has(e.toLowerCase())?v.subscriptions.get(e.toLowerCase()):null}var j=Object(o.mutatorAction)("unsubscribeFromCache",(function(e){var n=Object(r.__assign)({},m(e));n?(v.subscriptions.delete(e.toLowerCase()),v.unsubscribedSubscriptions.set(e.toLowerCase(),n)):S()})),w=t(188);Object(o.orchestrator)(c,(function(e){return Object(r.__awaiter)(void 0,void 0,void 0,(function(){var n,t,o,u,c,s,d,f,b,O,v,m;return Object(r.__generator)(this,(function(r){switch(r.label){case 0:return n=e.unsubscribeSourceType,t=e.smtpAddress,o=e.smtpIdentifier,u=e.unsubscribeSilentUris,c=e.unsubscribeHttpUri,s=e.completedCallback,c&&0!==c.length||u&&0!==u.length?(u&&i(u.length)||!c?d="No unsubscribe URIs provided":(window.open(c,"_blank"),d="Opened unsubscribe URI in new tab"),[4,l(o,u)]):(d="No unsubscribe URIs or SilentURIs provided",f=p.Fail,a(o,n,f,d,s),[2,Promise.reject("No unsubscribe URIs or SilentURIs provided")]);case 1:return b=r.sent(),O=null,Object(w.a)(b.status)?(d="Unsubscribe service called successfully. "+d,f=p.Success,j(t),[3,4]):[3,2];case 2:return d="Unsubscribe service failed. "+d,f=p.Fail,[4,b.text().then((function(e){return e?JSON.parse(e):{}}))];case 3:v=r.sent(),(O=new Error("ResponseCode="+b.status+", ErrorMessage="+(null===(m=null==v?void 0:v.error)||void 0===m?void 0:m.message))).fetchErrorType="ServerFailure",r.label=4;case 4:return a(o,n,f,d,s),O?[2,Promise.reject(O)]:[2,Promise.resolve()]}}))}))}));Object(o.mutator)(a,(function(e){var n=e.unsubscribeSourceType,t=e.responseType,r=e.debugMessage,i=e.completedCallback;"BrandCard"===n&&i&&i(t===p.Success,r)}));var g=Object(o.mutatorAction)("populateSubscriptionStore",(function(e){e.subscriptions.forEach((function(e){var n;(null===(n=null==e?void 0:e.smtpInfo)||void 0===n?void 0:n.smtpAddress)&&v.subscriptions.set(e.smtpInfo.smtpAddress.toLowerCase(),e)})),e.unsubscribedSubscriptions.forEach((function(e){var n;(null===(n=null==e?void 0:e.smtpInfo)||void 0===n?void 0:n.smtpAddress)&&v.unsubscribedSubscriptions.set(e.smtpInfo.smtpAddress.toLowerCase(),e)}))})),h="ows/api/beta/subscriptions?orderBy=name, asc";var S=function(e){return Object(r.__awaiter)(this,void 0,void 0,(function(){var n,t;return Object(r.__generator)(this,(function(r){switch(r.label){case 0:return[4,Object(d.b)(e?h+"&noResolveBrand=true":h,void 0,!0)];case 1:return n=r.sent(),Object(w.a)(n.status)?[4,n.json()]:[3,3];case 2:return t=r.sent(),g(t),[2,t];case 3:return[2,null]}}))}))};t.d(n,"b",(function(){return S})),t.d(n,"e",(function(){return c})),t.d(n,"d",(function(){return a})),t.d(n,"a",(function(){return p})),t.d(n,"c",(function(){return m})),t.d(n,"f",(function(){return i}))},1150:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var r=t(54),i=t(928),o=t(74);function u(){return(Object(r.f)("grp-shareable-crud-integrationv2")||Object(i.a)().isSensitivityLabelsEnabled)&&!Object(o.t)()}},1187:function(e,n,t){"use strict";t.d(n,"b",(function(){return u})),t.d(n,"a",(function(){return c}));var r=t(0),i=void 0,o=new Promise((function(e){i=e}));function u(e){null==i||i(e)}function c(){return Object(r.__awaiter)(this,void 0,void 0,(function(){return Object(r.__generator)(this,(function(e){return[2,Promise.race([o,new Promise((function(e,n){setTimeout((function(){return n()}),45e3)}))])]}))}))}},1336:function(e,n,t){"use strict";t.d(n,"b",(function(){return i}));var r=t(4),i=Object(r.createStore)("substratepeoplesuggestions",{sessionMaskedRecipients:[]}),o=i();n.a=o},1742:function(e,n,t){"use strict";var r=t(4),i=Object(r.createStore)("recipientcommon",{fallbackToFindPeople:!1})();n.a=i},1789:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var r=t(1790),i=t(1329),o=t(897),u=t(54);function c(e){if(Object(u.f)("fwk-skypeBusinessV2")&&e){var n=Object(r.b)(e),t=function(e){switch(e){case"Offline":return o.b.offline;case"Away":case"BeRightBack":return o.b.away;case"Busy":case"IdleBusy":return o.b.busy;case"DoNotDisturb":return o.b.dnd;case"Online":case"IdleOnline":return o.b.online;case"None":return o.b.none}}(i.a.presences.get(n));return t||void 0}}},1790:function(e,n,t){"use strict";t.d(n,"a",(function(){return r})),t.d(n,"b",(function(){return i}));var r="sip:";function i(e){if(!e)return null;var n=e.toLowerCase();return 0!=n.indexOf(r)&&(n=r+n),n}},1906:function(e,n,t){"use strict";var r=t(86),i=t(0),o=t(1336),u=t(103),c=Object(u.action)("addSessionMaskedRecipient")((function(e){return Object(i.__awaiter)(this,void 0,void 0,(function(){return Object(i.__generator)(this,(function(n){return o.a.sessionMaskedRecipients[e]=!0,[2]}))}))}));t.d(n,"b",(function(){return s})),t.d(n,"a",(function(){return c}));var a=new r.c((function(){return t.e(489).then(t.bind(null,13648))})),s=new r.a(a,(function(e){return e.execute3SPrimeCall}))},1926:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var r=t(54);function i(){return Object(r.f)("rp-peopleSuggestionsCacheFirst")||Object(r.f)("rp-cacheFirstPeopleTrieSize300")||Object(r.f)("rp-cacheFirstPeopleTrieSize500")||Object(r.f)("rp-cacheFirstPeopleTrieSize700")}},2707:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var r=t(4),i=Object(r.createStore)("linkedInStore",{status:null})},2831:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var r=t(0),i=t(386),o=t(54),u=t(840);function c(e,n,t,c){var a=Object(i.e)(t,e,null,n),s=Object(r.__assign)(Object(r.__assign)({},c),{includeBohemiaOnPopout:Object(u.d)(u.a.Bohemia).bohemiaEnabled&&Object(o.f)("rp-prague")});Object(i.c)("mail",a,s,{resizable:!0})}},2878:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var r=t(86),i=t(54),o=new r.c((function(){return Promise.all([t.e(7),t.e(219)]).then(t.bind(null,4356))})),u=new r.a(o,(function(e){return e.initializeErrorHandlerDevtools}));function c(){Object(i.f)("fwk-devTools")&&Object(i.f)("fwk-errorpopup")&&u.importAndExecute()}},3206:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t(86),i=new r.c((function(){return t.e(440).then(t.bind(null,5156))})),o=new r.a(i,(function(e){return e.initializeCache}))},3271:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var r=t(4),i=Object(r.createStore)("chatStore",{isChatCalloutShown:!1,chatProvider:0});i()},3601:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var r=t(4),i=Object(r.createStore)("allowedOptions",{allowedOptions:[]})},3646:function(e,n,t){"use strict";var r=t(86),i=t(3601),o=t(205);function u(e){return Object(o.a)()||e.every((function(e){return Object(i.a)().allowedOptions.includes(e)}))}t.d(n,"b",(function(){return a})),t.d(n,"a",(function(){return u}));var c=new r.c((function(){return t.e(110).then(t.bind(null,13510))})),a=new r.a(c,(function(e){return e.loadAllowedOptions}))},3775:function(e,n,t){"use strict";t.d(n,"b",(function(){return i}));var r=t(4),i=Object(r.createStore)("mruFolderCache",{mruFolders:[],isInitialized:!1}),o=i();n.a=o},4071:function(e,n,t){"use strict";t.d(n,"a",(function(){return o})),t.d(n,"b",(function(){return u}));var r=t(86),i=new r.c((function(){return Promise.all([t.e(0),t.e(2),t.e(3),t.e(4),t.e(143)]).then(t.bind(null,6954))})),o=new r.a(i,(function(e){return e.initializeAccountAndCalendars})),u=new r.a(i,(function(e){return e.initializeCalendarsDataForModule}))},4193:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t(86),i=new r.c((function(){return Promise.all([t.e(27),t.e(748),t.e(89),t.e(812)]).then(t.bind(null,6406))})),o=new r.a(i,(function(e){return e.registerAndInitializeSharedABT}))},4194:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t(86),i=new r.c((function(){return t.e(528).then(t.bind(null,6442))})),o=new r.a(i,(function(e){return e.validateCache}))},4370:function(e,n,t){"use strict";var r=t(23),i=t(0);function o(e,n){var t;return void 0===e.request||e.request.__type||(e.request=(t=e.request,Object(i.__assign)({__type:"SetFocusedInboxConfigurationRequest:#Exchange"},t))),Object(r.a)("SetFocusedInboxConfiguration",e,n)}t.d(n,"a",(function(){return o}))},4854:function(e,n,t){"use strict";t.d(n,"e",(function(){return o})),t.d(n,"b",(function(){return u})),t.d(n,"c",(function(){return c})),t.d(n,"a",(function(){return a})),t.d(n,"d",(function(){return s}));var r=t(86),i=new r.c((function(){return t.e(271).then(t.bind(null,8421))})),o=new r.a(i,(function(e){return e.setGroupHeaderCallbacks})),u=new r.b(i,(function(e){return e.groupHeaderCommandBarStore})),c=new r.b(i,(function(e){return e.groupHeaderNavigationButton})),a=new r.a(i,(function(e){return e.groupHeaderCommandBarAction})),s=new r.b(i,(function(e){return e.isGroupHeaderNavigationOnEmail}))},4855:function(e,n,t){"use strict";var r=t(4),i=Object(r.createStore)("TrustedSenders",{trustedSendersAndDomains:null})();n.a=i},5160:function(e,n,t){"use strict";var r=t(86),i=t(5268),o=t(191);var u=t(2707);function c(){var e=Object(u.a)();return null==e.status||"OptOut"==e.status||"OptOutBound"==e.status||"DisabledBound"==e.status}function a(){return"Bound"===Object(u.a)().status}t.d(n,"a",(function(){return d})),t.d(n,"c",(function(){return c})),t.d(n,"b",(function(){return a}));var s=new r.c((function(){return Promise.all([t.e(7),t.e(320)]).then(t.bind(null,13530))})),d=(new r.a(s,(function(e){return e.connectToLinkedIn})),new r.a(s,(function(e){return e.initializeBindStatus})));"undefined"!=typeof window&&void 0!==window.Owa&&(window.Owa.completeLinkedInBind=function(e){Object(o.o)("linkedInBindComplete",[e]),Object(i.a)(e?"Unbound":"Bound")})},5164:function(e,n,t){"use strict";var r=t(86),i=t(23);function o(){return Object(i.a)("GetFolderMruConfiguration",{},e).then((function(e){return e}));var e}var u=t(3775),c=t(826),a=t(103),s=Object(a.action)("getMoveToMruList")((function(){o().then((function(e){return function(e){if(null==e.FolderMruEntries||0==e.FolderMruEntries.length)u.a.mruFolders.push(Object(c.a)("inbox")),u.a.mruFolders.push(Object(c.a)("deleteditems")),u.a.mruFolders.push(Object(c.a)("archive"));else for(var n=0;n<e.FolderMruEntries.length;n++){var t=e.FolderMruEntries[n].EwsFolderIdEntry;u.a.mruFolders.push(t)}u.a.isInitialized=!0}(e)}))}));t.d(n,"b",(function(){return f})),t.d(n,"c",(function(){return b})),t.d(n,"a",(function(){return s}));var d=new r.c((function(){return t.e(368).then(t.bind(null,13484))})),f=new r.a(d,(function(e){return e.addFolderIdToMoveToMruList})),b=new r.a(d,(function(e){return e.removeFolderIdFromMoveToMruList}))},5170:function(e,n,t){"use strict";var r="shortcut icon",i="image/x-icon";function o(e){if(document){var n=document.querySelector('link[rel="'+r+'"]');n||((n=document.createElement("link")).rel=r,n.type=i,document.head.appendChild(n)),n.href=e}}var u,c=t(14);function a(e){u&&u(),u=Object(c.autorun)((function(){o(e.get())}))}t.d(n,"a",(function(){return o})),t.d(n,"b",(function(){return a}))},5268:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t(4),i=t(2707),o=Object(r.mutatorAction)("updateBindStatus",(function(e){Object(i.a)().status=e}))},5334:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t(4370),i=t(151);function o(){var e={Header:Object(i.a)(),IsFocusedInboxCapable:!0};return Object(r.a)({request:e}).then((function(e){return e}))}},5351:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var r=t(4),i=Object(r.action)("turnOffFocusedInbox")},5470:function(e,n,t){"use strict";var r=t(961),i=t(4),o=Object(i.action)("REMINDER_NOTIFICATION",(function(e){return{notification:e}})),u=Object(i.action)("NEW_MAIL_NOTIFICATION",(function(e){return{notification:e}})),c=Object(i.action)("SOCIAL_ACTIVITY_NOTIFICATION",(function(e){return{notification:e}})),a=t(205),s=!1;function d(){s||(s=!0,r.g.importAndExecute(f("ReminderNotification","ReminderNotifications"),o),r.g.importAndExecute(f("NewMailNotification"),u),Object(a.a)()||r.g.importAndExecute(f("SocialActivityNotification"),c))}function f(e,n){return{subscriptionId:n||e,requiresExplicitSubscribe:!0,subscriptionParameters:{NotificationType:e}}}t.d(n,"d",(function(){return d})),t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return o})),t.d(n,"c",(function(){return c}))},5871:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var r=t(23);function i(e){return Object(r.a)("GetMailboxJunkEmailConfiguration",{},e)}},5965:function(e,n,t){"use strict";t.d(n,"a",(function(){return o})),t.d(n,"c",(function(){return u})),t.d(n,"b",(function(){return c})),t.d(n,"e",(function(){return a})),t.d(n,"d",(function(){return s}));var r=t(86),i=new r.c((function(){return Promise.all([t.e(48),t.e(276)]).then(t.bind(null,8451))})),o=new r.a(i,(function(e){return e.loadGroupAction})),u=new r.a(i,(function(e){return e.onAfterNewGroupSelectedAction})),c=new r.a(i,(function(e){return e.onAfterGroupDetailsSucceededAction})),a=new r.a(i,(function(e){return e.setGroupIsSubscribedAction})),s=new r.a(i,(function(e){return e.setGroupIsMemberAction}))},6060:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t(86),i=new r.c((function(){return Promise.all([t.e(1),t.e(4),t.e(5),t.e(6),t.e(263)]).then(t.bind(null,8437))})),o=new r.b(i,(function(e){return e.editGroup}))},6061:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t(86),i=new r.c((function(){return Promise.all([t.e(1),t.e(4),t.e(5),t.e(6),t.e(264)]).then(t.bind(null,8438))})),o=new r.a(i,(function(e){return e.editGroup}))},6441:function(e,n,t){"use strict";var r=t(86),i=t(1728),o=t(19),u=t(103),c=t(224),a=t(222),s=t(192),d=t(5334),f=Object(u.action)("initializeFocusedInboxConfig")((function(){if(Object(o.a)().UserOptions.IsFocusedInboxFeatureSupported){var e=Object(o.a)().UserOptions,n=null!=e.IsFocusedInboxEnabled,t=null!=e.IsFocusedInboxOnLastUpdateTime?new Date(e.IsFocusedInboxOnLastUpdateTime).getTime():null,r=null!=e.IsFocusedInboxOnLastUpdateTime?new Date(e.IsFocusedInboxOnAdminLastUpdateTime).getTime():null;(!n||null!=t&&null!=r&&r>t)&&(Object(o.a)().UserOptions.IsFocusedInboxEnabled=e.FocusedInboxServerOverride,Object(o.a)().UserOptions.IsFocusedInboxOnLastUpdateTime=e.IsFocusedInboxOnAdminLastUpdateTime,Object(c.a)("OWA.UserOptions",[Object(a.a)({DictionaryKey:Object(s.a)({Type:"String",Value:["IsFocusedInboxEnabled"]}),DictionaryValue:Object(s.a)({Type:"Boolean",Value:[String(e.FocusedInboxServerOverride)]})}),Object(a.a)({DictionaryKey:Object(s.a)({Type:"String",Value:["IsFocusedInboxOnLastUpdateTime"]}),DictionaryValue:Object(s.a)({Type:"String",Value:[e.IsFocusedInboxOnAdminLastUpdateTime]})})]),Object(o.a)().UserOptions.IsFocusedInboxEnabled&&Object(d.a)())}}));t.d(n,"b",(function(){return l})),t.d(n,"c",(function(){return p})),t.d(n,"a",(function(){return f}));var b=new r.c((function(){return t.e(245).then(t.bind(null,13653))})),l=new r.a(b,(function(e){return e.setFocusedInboxOnOff}));function p(){Object(i.subscribe)("saveFocusInboxOptionStitchName",(function(e){return l.importAndExecute(e,!0)}))}},7514:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t(86),i=new r.c((function(){return t.e(478).then(t.bind(null,9174))})),o=new r.a(i,(function(e){return e.loadSignature}))},7809:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t(86),i=new r.c((function(){return Promise.all([t.e(1),t.e(4),t.e(11),t.e(16),t.e(256)]).then(t.bind(null,9175))})),o=new r.b(i,(function(e){return e.addGroupMember}))},7810:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t(86),i=new r.c((function(){return Promise.all([t.e(1),t.e(4),t.e(5),t.e(6),t.e(257)]).then(t.bind(null,9176))})),o=new r.a(i,(function(e){return e.addGroupMember}))},7822:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var r=t(871);function i(e,n){var t=Object(r.getPersonaFromPersonIdOrEmailAddress)(e,n),i=t;if(null==i?void 0:i.favoriteId)return i.favoriteId;var o=t;return(null==o?void 0:o.id)?o.id:void 0}},7866:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var r=t(0),i=t(7867),o=t(961),u=t(2108),c=t(449),a=t(36),s=t(22);function d(){return Object(r.__awaiter)(this,void 0,void 0,(function(){var e,n;return Object(r.__generator)(this,(function(t){switch(t.label){case 0:return[4,i.a.import()];case 1:return e=t.sent(),n=(null===window||void 0===window?void 0:window.location)?window.location.pathname:null,[4,e()];case 2:return t.sent(),[4,o.e.importAndExecute({channelEndpoint:Object(c.r)("/owa",n)+"/notificationchannel",pingInterval:3e5,backoffMaximum:64e3,minimumReconnectInterval:1e3,readyCheckTimeout:6e4,handleSessionTimeout:function(){Object(u.b)(Object(a.a)(),Object(s.g)())}})];case 3:return t.sent(),[2]}}))}))}},7867:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t(86),i=new r.c((function(){return t.e(375).then(t.bind(null,9141))})),o=new r.b(i,(function(e){return e.initializeNotificationDiagnostics}))},7868:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t(86),i=new r.c((function(){return Promise.all([t.e(0),t.e(2),t.e(3),t.e(636),t.e(353)]).then(t.bind(null,9172))})),o=new r.a(i,(function(e){return e.initializeMailOptinService}))},7869:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var r=t(86),i=t(5351);t.d(n,"b",(function(){return i.a}));var o=new r.c((function(){return t.e(558).then(t.bind(null,9166))})),u=new r.b(o,(function(e){return e.getActionByFilter}))},828:function(e,n,t){"use strict";t.d(n,"s",(function(){return o})),t.d(n,"A",(function(){return u})),t.d(n,"d",(function(){return c})),t.d(n,"v",(function(){return a})),t.d(n,"y",(function(){return s})),t.d(n,"z",(function(){return d})),t.d(n,"x",(function(){return f})),t.d(n,"w",(function(){return b})),t.d(n,"e",(function(){return l})),t.d(n,"f",(function(){return p})),t.d(n,"h",(function(){return O})),t.d(n,"l",(function(){return v})),t.d(n,"B",(function(){return m})),t.d(n,"j",(function(){return j})),t.d(n,"t",(function(){return w})),t.d(n,"u",(function(){return g})),t.d(n,"a",(function(){return h})),t.d(n,"k",(function(){return S})),t.d(n,"r",(function(){return I})),t.d(n,"i",(function(){return A})),t.d(n,"b",(function(){return C})),t.d(n,"m",(function(){return y})),t.d(n,"c",(function(){return E})),t.d(n,"g",(function(){return T})),t.d(n,"q",(function(){return F})),t.d(n,"n",(function(){return P})),t.d(n,"p",(function(){return x})),t.d(n,"o",(function(){return _}));var r=t(86),i=new r.c((function(){return Promise.all([t.e(1),t.e(4),t.e(6),t.e(74),t.e(105)]).then(t.bind(null,3180))})),o=new r.b(i,(function(e){return e.removeExtensibilityNotification})),u=new r.b(i,(function(e){return e.updatePersistentNotifications})),c=new r.b(i,(function(e){return e.closeTaskPaneAddinCommand})),a=new r.b(i,(function(e){return e.triggerAppointmentTimeChangedEvent})),s=new r.b(i,(function(e){return e.triggerRecipientsChangedEvent})),d=new r.b(i,(function(e){return e.triggerRecurrenceChangedEvent})),f=new r.b(i,(function(e){return e.triggerLocationsChangedEvent})),b=new r.b(i,(function(e){return e.triggerAttachmentsChangedEvent})),l=new r.b(i,(function(e){return e.deinitializeAddinsForItem})),p=new r.b(i,(function(e){return e.initializeAddinsForItem})),O=new r.a(i,(function(e){return e.initializeExtensibilityContext})),v=new r.b(i,(function(e){return e.onHostItemChanged})),m=new r.b(i,(function(e){return e.whenItemHasContextualAddinKeywords})),j=new r.b(i,(function(e){return e.launchTranslateCommand})),w=new r.b(i,(function(e){return e.setPersistedAddin})),g=new r.b(i,(function(e){return e.shouldForceOnSendCompliantBehavior})),h=(Object(r.d)(i,(function(e){return e.AddinBarView})),Object(r.d)(i,(function(e){return e.TaskPaneCollection}))),S=new r.b(i,(function(e){return e.onComposeClose})),I=new r.b(i,(function(e){return e.openContextualCallout})),A=new r.b(i,(function(e){return e.launchAddinCommand})),C=new r.b(i,(function(e){return e.observeAddinCommandSurfaceItems})),y=new r.b(i,(function(e){return e.onItemNavigation})),E=new r.b(i,(function(e){return e.allowItemSendEvent})),T=new r.a(i,(function(e){return e.ExecuteEntryPoint})),F=new r.a(i,(function(e){return e.onNewMessageCompose})),P=new r.a(i,(function(e){return e.onNewAppointmentOrganizer})),x=new r.a(i,(function(e){return e.onNewAttachmentOnMessageCompose})),_=new r.a(i,(function(e){return e.onNewAttachmentOnAppointmentOrganizer}))},8390:function(e,n,t){"use strict";var r=t(828),i=t(7866),o=t(0),u=t(54),c=t(7809),a=t(7810),s=t(205),d=t(976),f=t(6060),b=t(6061),l=t(4854),p=t(5965),O=t(899),v=t(1546),m=t(7822),j=t(1415),w=t(989),g=t(820),h=t(2299),S=t(1187),I=t(2831),A=t(1431),C=t(1789),y=t(48),E=t(3271);function T(){var e=Object(E.a)().chatProvider;return 3==e||4==e?F:null}function F(e,n){var t=e.imAddressUrl;A.e.import().then((function(e){var r=e([t],void 0,4);n(r,void 0)}))}var P,x,_,k,N=t(871),U=t(4),G=t(1439),R=function(e){P=e},L=function(e){x=e},B=function(e){_=e},M=function(e){k=e};function V(e){k&&k(e)}Object(U.orchestrator)(G.l,(function(e){P&&P({Smtp:e.groupSmtp,AadObjectId:"",PersonaType:"Group",OlsPersonaId:"",photoUrl:e.photoUrl})})),Object(U.orchestrator)(G.j,(function(e){x&&x({Smtp:e.groupSmtp,AadObjectId:"",PersonaType:"Group",OlsPersonaId:""})})),Object(U.orchestrator)(G.k,(function(e){_&&_({Smtp:e.groupSmtp,AadObjectId:"",PersonaType:"Group",OlsPersonaId:""})})),Object(U.orchestrator)(G.p,(function(e){V(e)})),Object(U.orchestrator)(G.o,(function(e){V(e)}));var D=t(1150);function z(e,n,t){"Group"===e.PersonaType&&Object(u.f)("tri-favorites-roaming")?function(e,n){var t=Object(O.a)().groups.get(e.Smtp.toLowerCase());if(!t)return;Object(N.isGroupInFavorites)(e.Smtp)?n(!1,"Group is already favorited"):N.lazyAddFavoriteGroup.import().then((function(n){return n(e.Smtp,t.basicInformation.DisplayName,"GroupNodeFavoriteButton")})).then((function(){return n(!0,void 0)}))}(e,n):function(e,n,t){if(Object(v.isFavoritingInProgress)(e.Smtp))return void n(!1,void 0);Object(v.addFavoritePersona)(void 0,e.Smtp,t.personaDisplayName,"LivePersonaCard").then((function(){return n(!0,void 0)})).catch((function(e){n(!1,e),v.lazyHandleToggleFavoritePersonaError.importAndExecute(e)}))}(e,n,t)}function H(e,n){"Group"===e.PersonaType&&Object(u.f)("tri-favorites-roaming")?function(e,n){if(!Object(O.a)().groups.get(e.Smtp.toLowerCase()))return;if(Object(N.isGroupInFavorites)(e.Smtp)){var t=Object(w.c)();t.id&&t.id.toLowerCase()==e.Smtp.toLowerCase()&&j.h.importAndExecute(e.Smtp,"groups"),N.lazyRemoveFavoriteGroup.import().then((function(n){return n(e.Smtp,"GroupNodeFavoriteButton")})).then((function(){return n(!0,void 0)}))}else n(!1,"Group is already unfavorited")}(e,n):function(e,n){if(Object(v.isFavoritingInProgress)(e.Smtp))return void n(!1,void 0);var t=Object(m.a)(void 0,e.Smtp);v.lazyRemoveFavoritePersona.importAndExecute(t,"LivePersonaCard").then((function(){return n(!0,void 0)})).catch((function(e){n(!1,e),v.lazyHandleToggleFavoritePersonaError.importAndExecute(e)}))}(e,n)}var q=t(3646),K=t(4194),W=t(1132),J=t(2878),Q=t(5160),$=t(2691),Y=4194304,X=t(826);function Z(e){if(Object(s.a)()){var n=e.ViewStateConfiguration.GlobalFolderViewState;return n&&!JSON.parse(n).IsConversationView?1:0}var t=e.ViewStateConfiguration.FolderViewState,r=Object(X.a)("inbox");if(!r||!t||!t.length)return 0;var i=t.filter((function(e){return JSON.parse(e).FolderId.Id===r}));return 1===((null==i?void 0:i.length)&&i[0]?JSON.parse(i[0]).View:1)?0:1}var ee=t(191),ne=t(900);function te(e){if(function(e){var n,t=e.UserOptions;return Object(s.a)()?!(null===(n=t.ReactOptinSettings)||void 0===n?void 0:n.MailGraduatedFromBeta)||2===t.ClientTypeOptInState||0==(t.NewEnabledPonts&Y):Object(ne.a)(32)}(e))return null;Object(ee.o)("settingUpdate");var n=e.UserOptions;return{GlobalReadingPanePositionReact:n.GlobalReadingPanePosition,ConversationSortOrderReact:n.ConversationSortOrder,GlobalListViewTypeReact:Z(e)}}var re=t(19),ie=t(224),oe=t(222),ue=t(192);function ce(e){var n;switch(e.UserOptions.ConversationSortOrderReact){case"Chronological":n=1;break;case"Tree":n=2;break;case"NewestOnTop":n=4;break;case"NewestOnBottom":n=8;break;case"ChronologicalNewestOnTop":n=5;break;case"ChronologicalNewestOnBottom":n=9;break;case"TreeNewestOnBottom":n=10}return n}var ae=Object(U.mutatorAction)("updateDefaultSettings",(function(e){var n=Object(re.a)();n.UserOptions.GlobalReadingPanePositionReact=e.GlobalReadingPanePositionReact,n.UserOptions.ConversationSortOrderReact=e.ConversationSortOrderReact,n.UserOptions.GlobalListViewTypeReact=e.GlobalListViewTypeReact}));function se(){var e,n=te(Object(re.a)());n&&(ae(n),e=Object(re.a)(),Object(ie.a)("OWA.UserOptions",[Object(oe.a)({DictionaryKey:Object(ue.a)({Type:"String",Value:["GlobalReadingPanePositionReact"]}),DictionaryValue:Object(ue.a)({Type:"Integer32",Value:[""+e.UserOptions.GlobalReadingPanePositionReact]})}),Object(oe.a)({DictionaryKey:Object(ue.a)({Type:"String",Value:["ConversationSortOrderReact"]}),DictionaryValue:Object(ue.a)({Type:"Integer32",Value:[""+ce(e)]})}),Object(oe.a)({DictionaryKey:Object(ue.a)({Type:"String",Value:["GlobalListViewTypeReact"]}),DictionaryValue:Object(ue.a)({Type:"Integer32",Value:[""+e.UserOptions.GlobalListViewTypeReact]})}),Object(oe.a)({DictionaryKey:Object(ue.a)({Type:"String",Value:["NewEnabledPonts"]}),DictionaryValue:Object(ue.a)({Type:"Integer32",Value:[""+(e.UserOptions.NewEnabledPonts&~Y)]})})]).then((function(n){"Success"!==n.Body.ResponseMessages.Items[0].ResponseClass||Object(s.a)()||Object(ne.a)(32)||(Object(ne.b)(!0,32),Object(ie.a)("OWA.ViewStateConfiguration",[Object(oe.a)({DictionaryKey:Object(ue.a)({Type:"String",Value:["ListViewBitFlags"]}),DictionaryValue:Object(ue.a)({Type:"Integer32",Value:[""+e.ViewStateConfiguration.ListViewBitFlags]})})]))})))}var de=t(5170),fe=t(14),be=t(2),le=t(196),pe=Object(U.createStore)("mailFaviconStore",{unseenMessages:0}),Oe=Object(fe.computed)((function(){return 0===pe().unseenMessages||Object(g.O)(Object(X.a)("inbox"))?ve("resources/images/favicons/mail-seen.ico"):ve("resources/images/favicons/mail-unseen.ico")}));function ve(e){return Object(le.resolve)(Object(be.q)(),e)}var me=t(3387),je=t(1267),we=t(824),ge=Object(U.mutatorAction)("SET_UNSEEN_COUNT",(function(e){pe().unseenMessages=e}));Object(U.orchestrator)(me.a,(function(e){return Object(o.__awaiter)(void 0,void 0,void 0,(function(){return Object(o.__generator)(this,(function(e){return Object(je.a)()===Object(we.m)("inbox")&&ge(0),[2]}))}))}));var he=t(5470),Se=t(74);Object(U.orchestrator)(he.a,(function(e){return Object(o.__awaiter)(void 0,void 0,void 0,(function(){return Object(o.__generator)(this,(function(n){return(Object(je.a)()!==Object(we.m)("inbox")||document.hidden)&&("Focused"!==e.notification.InferenceClassification&&Object(Se.h)().UserOptions.IsFocusedInboxEnabled||ge(pe().unseenMessages+1)),[2]}))}))})),document&&document.addEventListener("visibilitychange",(function(){Object(je.a)()!==Object(we.m)("inbox")||document.hidden||ge(0)}));var Ie=t(7868),Ae=t(961),Ce=t(7514),ye=t(840),Ee=t(914),Te=t(4193),Fe=t(1906),Pe=t(6495),xe=t(5871);var _e=t(4855),ke=t(103),Ne=Object(ke.action)("getTrustedSendersAndDomains")((function(){_e.a.trustedSendersAndDomains||function(){return Object(o.__awaiter)(this,void 0,void 0,(function(){return Object(o.__generator)(this,(function(e){return[2,Object(xe.a)().then((function(e){return function(e){return null!=e&&null==e.ErrorMessage?e.Options.TrustedSendersAndDomains:null}(e)}))]}))}))}().then(Object(ke.action)("updateTrustedSendersAndDomains")((function(e){e&&(_e.a.trustedSendersAndDomains=e)})))})),Ue=t(2014),Ge=t(1926),Re=t(3206),Le=t(229);function Be(e){!function(){var e=this,n={actionCallbacks:{composeMail:function(n,t,r,i){return Object(o.__awaiter)(e,void 0,void 0,(function(){var e,u,c,a,s,f;return Object(o.__generator)(this,(function(o){switch(o.label){case 0:return e=null,u=!1,c=n?[{EmailAddress:n,Name:i?i.personaDisplayName:n}]:void 0,a=Object(g.C)(),(s=a&&Object(d.b)(a.tableQuery))&&n&&n.toLowerCase()===s.toLowerCase()?[4,l.d.import()]:[3,2];case 1:f=o.sent(),u=!f(),e=s,c=void 0,o.label=2;case 2:return h.c.importAndExecute("LivePersonaCard",e,c,t,r,u),[2]}}))}))},readMail:function(e,n){y.d.info("Persona action callback: readMail"),Object(I.a)(e)},toggleSubscribeToGroup:function(e,n){e.Smtp&&p.e.importAndExecute(e.Smtp,n)},editGroup:function(n){return Object(o.__awaiter)(e,void 0,void 0,(function(){return Object(o.__generator)(this,(function(e){switch(e.label){case 0:return Object(D.a)()?[4,b.a.importAndExecute(n,"OWA_GroupCard")]:[3,2];case 1:return e.sent(),[3,4];case 2:return[4,f.a.import()];case 3:e.sent()(n),e.label=4;case 4:return[2]}}))}))},addGroupMembers:function(n){return Object(o.__awaiter)(e,void 0,void 0,(function(){return Object(o.__generator)(this,(function(e){switch(e.label){case 0:return!Object(u.f)("grp-shareable-crud")||Object(s.a)()?[3,2]:[4,a.a.importAndExecute(n,"OWA_GroupCard")];case 1:return e.sent(),[3,4];case 2:return[4,c.a.import()];case 3:e.sent()(n),e.label=4;case 4:return[2]}}))}))},updateMembership:function(n,t,r,i,u){return Object(o.__awaiter)(e,void 0,void 0,(function(){var e,t,i;return Object(o.__generator)(this,(function(o){switch(o.label){case 0:return!n.Smtp||r<=0?[2]:(e=n.Smtp.toLowerCase(),t=Object(g.C)(),i=t&&Object(d.b)(t.tableQuery),e!==i?[2]:[4,p.a.import()]);case 1:return o.sent()(e),[2]}}))}))},getStartChatCallback:T},dataCallbacks:{},dataUpdateBroadcaster:{setGroupUpdateListener:R,setGroupMembersUpdateListener:L,setGroupDeleteListener:B,updatePopupStateListener:M}};n.actionCallbacks.favoritePersona=Object(u.f)("tri-favorites-roaming")?z:void 0,n.actionCallbacks.unfavoritePersona=Object(u.f)("tri-favorites-roaming")?H:void 0,n.dataCallbacks.getIsPersonaFavorited=function(e,n){"Group"===e.PersonaType?n({isFavorited:Object(N.isGroupInFavorites)(e.Smtp)},void 0):n({isFavorited:Object(N.isPersonaInFavorites)(e.OlsPersonaId,e.Smtp)},void 0)},n.dataCallbacks.getPresence=function(e,n){Object(u.f)("fwk-skypeBusinessV2")&&A.f.import().then((function(n){n(e)})),n(Object(C.a)(e),void 0)},Object(S.b)(n)}(),Object(de.b)(Oe),Ue.b.importAndExecute(J.a,{condition:!Object(Ge.a)(),task:function(){return Re.a.importAndExecute()}},(function(){return Ce.a.importAndExecute()}),{condition:Object(u.f)("cmp-clp")&&!Object(s.a)(),task:function(){return $.b.importAndExecute()}},{condition:Object(Ee.a)(),task:function(){return Fe.b.importAndExecute()}},{condition:!Object(s.a)(),task:function(){return q.b.importAndExecute()}},(function(){return Ae.f.importAndExecute()}),(function(){return ye.g.importAndExecute()}),{condition:Object(u.f)("rp-linkedInViewProfile"),task:function(){return Q.a.importAndExecute()}},{task:function(){return Te.a.importAndExecute()},condition:Object(Le.a)()&&Object(u.f)("auth-sharedActivityBasedTimeout")&&Object(re.a)().PolicySettings.IsSharedActivityBasedTimeoutEnabled,idle:e},{task:function(){return r.h.importAndExecute()},condition:Object(u.f)("rp-addins"),idle:e},{task:i.a,idle:e},{task:Ne,idle:e},{condition:Object(u.f)("rp-infoBarBrandSubscription")||Object(u.f)("tri-unsubscribeLV"),task:function(){return Object(W.b)(!0)},idle:e},{task:function(){return Pe.c.importAndExecute()},idle:e},{task:function(){return Ie.a.importAndExecute()},idle:e},{task:function(){return K.a.importAndExecute()},idle:e},{task:se,idle:e})}t.d(n,"a",(function(){return Be}))},8429:function(e,n,t){"use strict";var r=t(8390),i=t(4071),o=t(54),u=t(86),c=t(0),a=t(4),s=t(7869),d=t(6441),f=(Object(a.orchestrator)(s.b,(function(e){return Object(c.__awaiter)(void 0,void 0,void 0,(function(){return Object(c.__generator)(this,(function(e){return d.b.importAndExecute(!1,!1),[2]}))}))})),new u.c((function(){return Promise.all([t.e(1),t.e(36),t.e(317)]).then(t.bind(null,13362))}))),b=new u.a(f,(function(e){return e.loadLightningPrimaryView})),l=t(1546),p=t(1415),O=t(3862),v=t(2505),m=t(3529),j=t(2357),w=t(2823),g=t(5164),h=t(1252),S=t(1433),I=t(7040),A=t(5470),C=t(2014),y=t(1926),E=t(3206),T=t(347),F=t(871);var P=t(974);function x(e){Object(r.a)(e),m.c.importAndExecute(w.b(0)),Object(d.c)(),Object(j.h)(),C.b.importAndExecute({condition:Object(y.a)(),task:function(){return E.a.importAndExecute()}},(function(){return l.lazyModule.import()}),g.a,(function(){return h.p.import()}),A.d,{condition:Object(P.d)(),task:function(){O.d.import().then((function(e){e()}))}},(function(){return b.importAndExecute()}),(function(){T.t.importAndExecute().then((function(){(Object(o.f)("tri-favorites-roaming")?Object(c.__spread)(F.favoritesStore.outlookFavorites.values()).some((function(e){return"category"===e.type})):F.favoritesStore.favoriteCategories.size>0)&&T.z.importAndExecute()}))}),(function(){Object(o.d)("tri-upNextV2",(function(){I.b.importAndExecute()}))}),(function(){return i.b.importAndExecute()}),{task:d.a,idle:e},{task:function(){return p.d.importAndExecute()},idle:e},{task:function(){return S.M.importAndExecute()},idle:e},{condition:Object(P.a)(),task:v.b,idle:e})}t.d(n,"a",(function(){return x}))},899:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t(4),i=t(14),o=Object(r.createStore)("groupsStore",{groups:new i.ObservableMap})},914:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var r=t(19),i=t(54),o=t(1742);function u(){var e=Object(r.a)(),n=null==e?void 0:e.SessionSettings,t=null==n?void 0:n.IsExplicitLogon,u=null==n?void 0:n.IsSubstrateSearchServiceAvailable;return!(o.a.fallbackToFindPeople||!Object(i.f)("rp-3SPeopleSuggestions")||t||!u)}},928:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t(4),i=t(968),o=Object(r.createStore)("unifiedGroupsSettingsStore",{supportedClassifications:[],defaultClassification:"",namingPolicySettings:{},groupsGuidelinesLink:"",orgAllowAddGuests:!1,defaultGroupAccessType:i.a.Private,groupCreationEnabled:!1,isSensitivityLabelsEnabled:!1})},968:function(e,n,t){"use strict";var r;t.d(n,"a",(function(){return r})),function(e){e[e.Private=0]="Private",e[e.Public=1]="Public"}(r||(r={}))}}]);
//# sourceMappingURL=owa.MailFunctionalBoot~PostMailDeeplinkBoot.js.map
self.scriptsLoaded['owa.MailFunctionalBoot~PostMailDeeplinkBoot.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.MailFunctionalBoot~PostMailDeeplinkBoot.js'] = (new Date()).getTime();