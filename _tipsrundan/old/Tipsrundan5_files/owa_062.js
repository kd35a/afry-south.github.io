self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.MarkRead.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[361],{1033:function(e,t,n){"use strict";n.d(t,"r",(function(){return d})),n.d(t,"u",(function(){return l})),n.d(t,"e",(function(){return b})),n.d(t,"p",(function(){return f})),n.d(t,"i",(function(){return O})),n.d(t,"o",(function(){return j})),n.d(t,"b",(function(){return v})),n.d(t,"m",(function(){return m})),n.d(t,"f",(function(){return p})),n.d(t,"q",(function(){return I})),n.d(t,"t",(function(){return _})),n.d(t,"s",(function(){return y})),n.d(t,"g",(function(){return R})),n.d(t,"j",(function(){return T})),n.d(t,"k",(function(){return S})),n.d(t,"n",(function(){return A})),n.d(t,"d",(function(){return E})),n.d(t,"c",(function(){return h})),n.d(t,"h",(function(){return w})),n.d(t,"l",(function(){return g})),n.d(t,"a",(function(){return M}));var r=n(0),o=n(74),a=n(833),c=n(846),i=n(4),u=n(958),s=n(18),d=Object(i.action)("SINGLE_SELECT_ROW",(function(e,t,n,r){var a=C(r,e,t);return Object(o.c)({name:a?"SelectMailItem":"SelectMailItemNonCritical",options:{isQos:a}},{tableView:e,rowKey:t,isUserNavigation:n,mailListItemSelectionSource:r})})),l=Object(i.action)("TOGGLE_SELECT_ROW",(function(e,t,n,r){var a=C(r,e,t);return Object(o.c)({name:a?"SelectMailItem":"SelectMailItemNonCritical",options:{isQos:a}},{tableView:e,rowKey:t,isUserNavigation:n,mailListItemSelectionSource:r})})),b=Object(i.action)("ON_AFTER_SELECTION_CHANGED",(function(e,t,n,r){return{rowKey:e,tableView:t,mailListItemSelectionSource:n,listViewType:r}})),f=Object(i.action)("SET_SELECTION_ON_ROW",(function(e,t,n){return{rowKey:e,tableViewId:t,shouldSelect:n}})),O=Object(i.action)("RESET_LIST_VIEW_EXPANSION_VIEW_STATE"),j=Object(i.action)("SET_LIST_VIEW_EXPANSION_LOADING_STATE",(function(e){return{shouldBeExpanded:e}})),v=Object(i.action)("ITEM_PART_SELECTED",(function(e,t,n,r,o){return{nodeId:e,itemId:t,allNodeIds:n,tableView:r,mailListItemSelectionSource:o}})),m=Object(i.action)("SELECT_NEXT_ITEM_PART",(function(e,t){return{rowKey:e,tableView:t}})),p=Object(i.action)("ON_ITEM_PART_CONTEXT_MENU",(function(e,t,n){return{contextMenuAnchor:e,nodeId:t,tableViewId:n}})),I=Object(i.action)("SINGLE_SELECT_ITEM_PART",(function(e,t,n,r){return{rowKey:e,nodeIdToSelect:t,allNodeIds:n,tableViewId:r}})),_=Object(i.action)("TOGGLE_SELECT_ITEM_PART",(function(e){return{nodeId:e}})),y=Object(i.action)("TOGGLE_SELECT_ALL_ROWS",(function(e){return{tableView:e}})),R=Object(i.action)("RANGE_SELECT_ROW",(function(e,t,n,r){return{tableView:e,targetRowKey:t,mailListItemSelectionSource:n,isCtrlOrCmdKeyDown:r}})),T=Object(i.action)("RESET_SELECTION",(function(e,t){return{tableView:e,mailListItemSelectionSource:t}})),S=Object(i.action)("RESET_SELECTION",(function(e){return{tableView:e}})),A=Object(i.action)("SELECT_ROW_IN_DIRECTION",(function(e,t,n){var r=C(n,e,void 0,t);return Object(o.c)({name:r?"SelectMailItem":"SelectMailItemNonCritical",options:{isQos:r}},{tableView:e,selectionDirection:t,mailListItemSelectionSource:n})})),E=Object(i.action)("KEYBOARD_MULTI_SELECT_ROW",(function(e,t,n,r){return{tableView:e,mailListItemSelectionSource:t,selectionDirection:n,isCtrlOrCmdKeyDown:r}})),h=Object(i.action)("KEYBOARD_COLLAPSE_CONVERSATION",(function(e){return{rowKey:e}})),w=Object(i.action)("RESET_BUS_STOP_STATE_MAP"),g=Object(i.action)("SELECT_NEW_ITEM_UPON_ROW_REMOVAL",(function(e,t,n){return{tableView:e,lastSelectedRowIndex:t,lastSelectedRowWasPinned:n}})),M=Object(i.action)("INIT_TABLE_SELECTION_ON_LOAD",(function(e){return{tableView:e}}));function C(e,t,n,o){return!(function(e){return e===c.b.MailListItemRichPreview||e===c.b.KeyboardShiftEnter||e===c.b.MailListItemBodyDoubleClick}(e)||Object(u.q)()&&!function(e){var t;return e===c.b.KeyboardEnter||e===c.b.MailListItemBody||e===c.b.RouteHandler||e===c.b.CommandBarArrows||e===c.b.ImmersiveReadingPaneDelete&&"ReturnToView"!==(null===(t=Object(s.a)().UserOptions)||void 0===t?void 0:t.NextSelection)}(e)||function(e,t,n,o){if(Object(u.q)())return!1;if(e===c.b.KeyboardUpDown){var i=t.rowKeys.indexOf(t.selectionAnchorRowKey);if(-1!==i&&1===t.selectedRowKeys.size){var s=t.rowKeys.indexOf(Object(r.__spread)(t.selectedRowKeys.keys())[0]);return o===a.d.Next?s===i+1||s===t.rowKeys.length-1&&i===t.rowKeys.length-1:s===i-1||0===s&&0===i}return!1}return n&&t.selectedRowKeys.has(n)&&1===t.selectedRowKeys.size}(e,t,n,o))}},10783:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.default=function(e){return r.__assign({__type:"MarkAllItemsAsReadRequest:#Exchange"},e)}},10784:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(38),o=n(10785);t.default=function(e,t){return void 0===e||e.__type||(e=o.default(e)),r.makeServiceRequest("MarkAllItemsAsRead",e,t)}},10785:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.default=function(e){return r.__assign({__type:"MarkAllItemsAsReadJsonRequest:#Exchange"},e)}},10786:function(e){e.exports=JSON.parse('{"a":"yba","b":"zba","c":"Aba","d":"Bba"}')},10787:function(e){e.exports=JSON.parse('{"a":"pba","b":"qba","c":"rba","d":"sba"}')},10788:function(e){e.exports=JSON.parse('{"a":"lba","b":"mba","c":"nba","d":"oba"}')},1210:function(e,t,n){"use strict";var r={};n.r(r),n.d(r,"add",(function(){return s})),n.d(r,"remove",(function(){return d})),n.d(r,"removeAll",(function(){return l})),n.d(r,"getCount",(function(){return b})),n.d(r,"getTombstonedReasons",(function(){return f})),n.d(r,"clearMapForFolder",(function(){return O})),n.d(r,"removeRowsFromTombstone",(function(){return j}));var o=n(0),a=n(4),c=Object(a.createStore)("tombstone",{folderTombstoneMap:{}}),i=(c(),n(193)),u=n(93),s=Object(u.action)("tombstoneOperations.add")((function(e,t,n){var r=c().folderTombstoneMap;t in r||(r[t]={});var o=r[t];e.forEach((function(e){var t=o[e];t?3!=n?t.indexOf(3)>-1||-1==t.indexOf(n)&&t.push(n):o[e]=[3]:o[e]=[n]}))})),d=Object(u.action)("tombstoneOperations.remove")((function(e,t,n){var r=c().folderTombstoneMap;if(t in r){var o=r[t],a=o[e],i=a?a.indexOf(n):-1;if(-1==i)throw new Error("tombstone.remove given reason does not exist when trying to remove entry from it");a.splice(i,1),0==a.length&&delete o[e],0==Object.keys(o).length&&delete r[t]}})),l=Object(u.action)("tombstoneOperations.removeAll")((function(){c().folderTombstoneMap={},Object(i.p)("TnS_RemoveAllFromTombstone")})),b=function(e,t){var n=c().folderTombstoneMap;if(!(e in n))return 0;var r=0,o=n[e];return Object.values(o).forEach((function(e){e==t&&r++})),r},f=function(e,t){var n=c().folderTombstoneMap;if(t in n){var r=n[t][e];if(r)return r}return[]},O=Object(u.action)("tombstoneOperations.clearMapForFolder")((function(e){var t=c().folderTombstoneMap;t[e]&&(Object(i.p)("TnS_ClearFolderMapInTombstone",[Object.keys(t[e]).length]),delete t[e])})),j=Object(u.action)("tombstoneOperations.removeRowsFromTombstone")((function(e,t){var n,r,a=c().folderTombstoneMap;if(t in a){var i=a[t];try{for(var u=Object(o.__values)(e),s=u.next();!s.done;s=u.next()){var d=s.value;d in i&&delete i[d]}}catch(e){n={error:e}}finally{try{s&&!s.done&&(r=u.return)&&r.call(u)}finally{if(n)throw n.error}}0==Object.keys(i).length&&delete a[t]}}));t.a=r},1418:function(e,t,n){"use strict";var r=n(73),o=n(1750),a=n(78),c=n(833),i=n(846),u=n(839),s=n(836),d=n(842);function l(e,t){return e&&!Object(c.s)()&&t&&t.type===a.a.UserMailbox&&!Object(i.p)(e)&&e!=Object(u.a)("recoverableitemsdeletions")&&!Object(s.C)(e,d.j)}n.d(t,"e",(function(){return f})),n.d(t,"a",(function(){return o.a})),n.d(t,"b",(function(){return o.b})),n.d(t,"d",(function(){return o.c})),n.d(t,"c",(function(){return l}));var b=new r.c((function(){return n.e(520).then(n.bind(null,13740))})),f=new r.a(b,(function(e){return e.undo}))},1433:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.default=function(e){return r.__assign({__type:"ItemChange:#Exchange"},e)}},1514:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.default=function(e){return r.__assign({__type:"SetItemField:#Exchange"},e)}},1711:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.default=function(e){return r.__assign({__type:"Message:#Exchange"},e)}},1750:function(e,t,n){"use strict";var r,o=n(4),a=Object(o.createStore)("undo",{hasUndoableAction:!1,undoableActionFolderId:null})(),c=n(1210),i=n(93),u=n(74);n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return b}));var s=Object(i.action)("addActionToUndoStack")(Object(i.select)({store:function(){return a}})((function(e,t,n){null!==e&&(r=e,n.store.hasUndoableAction=!0,n.store.undoableActionFolderId=t)}))),d=Object(i.action)("clearLastUndoableAction")(Object(i.select)({store:function(){return a}})((function(e){r=null,e.store.hasUndoableAction=!1,e.store.undoableActionFolderId=null}))),l=Object(i.select)({store:function(){return a}})((function(e){return e.store.hasUndoableAction})),b=Object(u.d)("undo",{name:"TnS_Undo",customData:function(e){return[e]}})((function(e){a.undoableActionFolderId?c.a.clearMapForFolder(a.undoableActionFolderId):c.a.removeAll();null!==r&&(r(),d())}))},1809:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(1110);function o(e,t){return e.map((function(e){return Object(r.getInstrumentationContext)(e,t)})).filter((function(e){return e}))}},1820:function(e){e.exports=JSON.parse('{"a":"pea"}')},1983:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(4),o=Object(r.action)("USERMAIL_INTERACTION",(function(e,t,n){return{interactionType:e,instrumentationContexts:t,triageContext:n}}))},2038:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return a}));var r=n(4),o=Object(r.action)("ON_DELETE_CONVERSATION_ITEM_PARTS_COMPLETE"),a=Object(r.action)("TOGGLE_ROW_READ_STATE_COMPLETE")},2101:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return u}));var r=n(73),o=n(1983);n.d(t,"d",(function(){return o.a}));var a=new r.c((function(){return n.e(327).then(n.bind(null,4116))})),c=new r.a(a,(function(e){return e.onKeyboardUpDown})),i=new r.a(a,(function(e){return e.onOpenEmail})),u=new r.a(a,(function(e){return e.onKeyboardToggleSelect}))},2106:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return d})),n.d(t,"b",(function(){return l}));var r=n(0),o=n(851),a=n(1358),c=n(999),i=n(18),u=n(1111);function s(e){var t,n,i=(null==e?void 0:e.itemIds)?e.itemIds.length:0;if(0==i)return[null,!1,!1];var s=null,d=2==Object(c.c)().type||!Object(c.b)();if(1==i){if(!(s=o.a.items.get(e.itemIds[0])))return[null,!1,!1];d=d||s.ParentFolderId&&s.ParentFolderId.Id==Object(c.b)()}else{var l=null;try{for(var b=Object(r.__values)(e.itemIds),f=b.next();!f.done;f=b.next()){var O=f.value,j=o.a.items.get(O);if(!j)return[null,!1,!1];if(j.ParentFolderId&&j.ParentFolderId.Id==Object(c.b)()){s=j,d=!0;break}Object(u.a)(j.ParentFolderId.Id,"sentitems")&&(l=j)}}catch(e){t={error:e}}finally{try{f&&!f.done&&(n=b.return)&&n.call(b)}finally{if(t)throw t.error}}s||(s=l||o.a.items.get(e.itemIds[0]))}return[s,d,Object(a.a)(s.ParentFolderId.Id)]}function d(e,t,n){var r=Object(i.a)().UserOptions.HideDeletedItems;return e&&!((e.IsDraft||r)&&t&&!n)}function l(e){var t=o.a.conversationNodes.get(e),n=Object(r.__read)(s(t),3),a=n[0],c=n[1];return d(a,n[2],c)?a:null}},2138:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(38),o=n(2394);t.default=function(e,t){return void 0===e||e.__type||(e=o.default(e)),r.makeServiceRequest("UpdateItem",e,t)}},2195:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.default=function(e){return r.__assign({__type:"UpdateItemRequest:#Exchange"},e)}},2389:function(e){e.exports=JSON.parse('{"a":"Hba","c":"Iba","e":"Jba","b":"Kba","d":"Lba"}')},2394:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.default=function(e){return r.__assign({__type:"UpdateItemJsonRequest:#Exchange"},e)}},2470:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(836),o=n(842);function a(e){return Object(r.C)(e,o.j)}},2604:function(e,t,n){"use strict";var r=n(5011),o=n(0),a=n(3746),c=n(3747);function i(e,t,n,r,i){return e.then((function(e){if(Object(a.a)(t,n,i),e.ResponseMessages){var u=function(e,t){var n,r;try{for(var a=Object(o.__values)(e),i=a.next();!i.done;i=a.next()){var u=i.value;if(u&&"Success"!=u.ResponseClass){Object(c.a)(t);var s=new Error("ResponseCode="+u.ResponseCode+", Stacktrace="+u.StackTrace);return s.fetchErrorType="ServerFailure",s}}}catch(e){n={error:e}}finally{try{i&&!i.done&&(r=a.return)&&r.call(a)}finally{if(n)throw n.error}}return null}(e.ResponseMessages.Items,r);return u?Promise.reject(u):Promise.resolve()}return Promise.reject(new Error("processUpdateItemActionResponseMessage empty response"))})).catch((function(e){return Object(a.a)(t,n,i),Object(c.a)(r),Promise.reject(e)}))}var u=n(4105);n.d(t,"d",(function(){return r.a})),n.d(t,"e",(function(){return i})),n.d(t,"a",(function(){return u.a})),n.d(t,"b",(function(){return a.a})),n.d(t,"c",(function(){return c.a}))},2878:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(1711),o=n.n(r),a=n(847),c=n.n(a),i=n(1514),u=n.n(i);function s(e,t){var n;return u()({Path:c()({FieldURI:e}),Item:o()((n={},n[e]=t,n))})}},2997:function(e,t,n){"use strict";var r=n(4);t.a=Object(r.action)("RELOAD_TABLE_ON_TRIAGE_ACTION_FAIL",(function(e){return{tableView:e}}))},3187:function(e){e.exports=JSON.parse('{"a":"Gba"}')},3251:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.default=function(e){return r.__assign({__type:"ApplyConversationActionRequest:#Exchange"},e)}},3252:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.default=function(e){return r.__assign({__type:"ConversationAction:#Exchange"},e)}},3253:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(0),o=n(331),a=n(5009),c=n.n(a);function i(e,t,n){if(void 0===t&&(t=Object(o.getJsonRequestHeader)()),!e||!e.ConversationActions||0===e.ConversationActions.length)throw new Error("ApplyConversationAction requestBody is invalid!");n=n||{};var a=Object(r.__assign)({},n),i=a.headers?new Headers(a.headers):new Headers;return i.set("X-OWA-ActionSource","ApplyConversationAction_"+e.ConversationActions[0].Action),a.headers=i,c()({Header:t,Body:e},a).then((function(e){return e.Body.ResponseMessages.Items[0]})).catch((function(e){return Promise.reject(e)}))}},331:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(292),o=n(293),a=n(291),c=n(287);t.getJsonRequestHeader=function(e){return r.default({RequestServerVersion:"Exchange2015",TimeZoneContext:o.default({TimeZoneDefinition:a.default({Id:null!=e?e:"Pacific Standard Time"})})})},t.getExtendedPropertyUri=function(e,t,n){return c.default({PropertySetId:e,PropertyName:t,PropertyType:n})}},3746:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(1210);function o(e,t,n){n&&r.a.removeRowsFromTombstone(e,t)}},3747:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(2997);function o(e){e&&Object(r.a)(e)}},4104:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(340),o=n.n(r),a=n(886),c=n.n(a);function i(e){return e?c()({BaseFolderId:o()({Id:e})}):null}},4105:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(0),o=n(846);function a(e){var t,n;if(!e)return Promise.reject(c("500","Server returned a null response!"));var a=Array.isArray(e)?e:[e];try{for(var i=Object(r.__values)(a),u=i.next();!u.done;u=i.next()){var s=u.value;if(s&&!Object(o.c)(s))return Promise.reject(c(s.ResponseCode,s.StackTrace))}}catch(e){t={error:e}}finally{try{u&&!u.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}return Promise.resolve()}function c(e,t){var n=new Error("ResponseCode="+e+", Stacktrace="+t);return n.fetchErrorType="ServerFailure",n}},4403:function(e,t,n){"use strict";function r(e){return e?new Date(e).toISOString():null}n.d(t,"a",(function(){return r}))},4404:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(1004);function o(e,t){var n={};return e.forEach((function(e){var o,a=null===(o=Object(r.a)(e,t))||void 0===o?void 0:o.itemIds;a&&a.forEach((function(e){n[e]||(n[e]=!0)}))})),Object.keys(n)}},5009:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(38),o=n(5010);t.default=function(e,t){return void 0===e||e.__type||(e=o.default(e)),r.makeServiceRequest("ApplyConversationAction",e,t)}},5010:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.default=function(e){return r.__assign({__type:"ApplyConversationActionJsonRequest:#Exchange"},e)}},5011:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(3746),o=n(3747),a=n(4105);function c(e,t,n,c,i){return e.then((function(e){return Object(r.a)(t,n,i),Object(a.a)(e)})).catch((function(e){return Object(r.a)(t,n,i),Object(o.a)(c),Promise.reject(e)}))}},5321:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(833),a={markConversationAsRead:{name:function(e,t,n,r,o,a,c){var i="TnS_MarkConversation";return i+=n?"Read":"Unread",r||(i+="Background"),i},options:function(e,t,n,r,o,a,c){return r?{isCore:!0}:{}},customData:function(e,t,n,r,a,c,i){return[a,e.length,Object(o.l)(t),Object(o.K)(t)]},cosmosOnlyData:function(e,t,n,a,c,i,u){var s,d,l=[],b=Object(o.A)(e,t);try{for(var f=Object(r.__values)(b),O=f.next();!O.done;O=f.next()){var j=O.value;l.push(o.b.getItemIds(j,t))}}catch(e){s={error:e}}finally{try{O&&!O.done&&(d=f.return)&&d.call(f)}finally{if(s)throw s.error}}return JSON.stringify({itemIds:l,conversationIds:e})}},markItemReadUnread:{name:function(e,t,n,r,o,a){var c="TnS_MarkItem";return c+=n?"Read":"Unread",r||(c+="Background"),c},options:function(e,t,n,r,o,a){return r?{isCore:!0}:{}},customData:function(e,t,n,r,a,c){var i=e?e.tableQuery.type:null,u=e?Object(o.l)(e):null,s=e?Object(o.K)(e):null;return[i,t.length,u,s]},cosmosOnlyData:function(e,t,n,r,o,a){return JSON.stringify({itemIds:t})},actionSource:function(e,t,n,r,o){return o}}},c=n(93),i=n(4),u=Object(i.createStore)("markread",{markAsReadTimerTask:null,suppressedItemIdsMap:{}})(),s=Object(c.action)("AddMarkReadSuppressedItemIds")(Object(c.select)({store:function(){return u}})((function(e,t){e.forEach((function(e){return t.store.suppressedItemIdsMap[e]=!0}))}))),d=Object(c.action)("RemoveMarkReadSuppressedItemIds")(Object(c.select)({store:function(){return u}})((function(e,t){e.forEach((function(e){return delete t.store.suppressedItemIdsMap[e]}))}))),l=Object(c.action)("ClearMarkReadSuppressedMap")(Object(c.select)({store:function(){return u}})((function(e){e.store.suppressedItemIdsMap={}})));function b(e){for(var t=0;t<e.length;t++)if(!u.suppressedItemIdsMap[e[t]])return!1;return!0}var f=n(4403),O=n(4104),j=n(3251),v=n.n(j),m=n(3252),p=n.n(m),I=n(454),_=n.n(I),y=n(3253);function R(e,t,n){var r=Object(O.a)(n),o=e.map((function(e){return function(e,t,n){return p()({Action:"SetReadState",ConversationId:_()({Id:e.conversationId}),IsRead:t,ConversationLastSyncTime:Object(f.a)(e.conversationLastSyncTimeStamp),SuppressReadReceipts:!0,ContextFolderId:n})}(e,t,r)}));return v()({ConversationActions:o,ReturnMovedItemIds:!1})}var T=n(6157),S=n(2101),A=n(2129),E=n(1632),h=n(989),w=n(44),g=n(74),M=n(2604);var C=n(851);var k=n(2878),N=n(18),x=n(1433),P=n.n(x),L=n(2138),V=n.n(L),U=n(2195),D=n.n(U),K=n(155);function F(e,t,n){var r=function(e,t){var n="AlwaysSend"!=Object(N.a)().UserOptions.ReadReceipt,r=Object(k.a)("IsRead",t),o=[];return e.forEach((function(e){return o.push(P()({Updates:[r],ItemId:_()({Id:e})}))})),D()({ItemChanges:o,ConflictResolution:"AlwaysOverwrite",MessageDisposition:"SaveOnly",SuppressReadReceipts:n})}(e,t);return V()({Header:Object(K.getJsonRequestHeader)(),Body:r},n).then((function(e){return e.Body.ResponseMessages.Items[0]}))}var q=n(2130),B=Object(g.d)("markItemsAsReadBasedOnItemIds",a.markItemReadUnread)((function(e,t,n,a,c,i){return Object(r.__awaiter)(this,void 0,void 0,(function(){var u,l,b,f;return Object(r.__generator)(this,(function(r){return 0==(u=function(e,t){var n=[];return e.forEach((function(e){var r=C.a.items.get(e);Object(o.Q)(r)&&r.IsRead!=t&&n.push(e)})),n}(t,n)).length?[2,Promise.resolve()]:(n?d(u):a?s(u):w.d.warn("Invalid scenario to implicitly mark item as unread."),l=e?e.id:null,Object(q.a)(u,n,a,l),T.a.import().then((function(t){t(e?e.tableQuery:null,!1,n,c,u)})),n?a?Object(S.d)("MarkAsRead",i):Object(S.d)("MarkAsReadImplicit",i):Object(S.d)("MarkAsUnread",i),b=Object(h.b)(e).requestOptions,f=e?Object(o.A)(u,e):[],[2,J(e,f,u,n,b)])}))}))}));function J(e,t,n,r,o){return F(n,r,o).then((function(e){return Object(M.a)(e)})).catch((function(n){var r=e?e.serverFolderId:null;return Object(M.b)(t,r,!0),Promise.reject(n)}))}var Q=Object(g.d)("markConversationsAsReadBasedOnConversationIds",a.markConversationAsRead)((function(e,t,n,a,c,i,u){var d=function(e,t,n){var r=[];return e.forEach((function(e){var a=Object(o.G)(e,t);a&&a.unreadCount>0===n&&r.push(e)})),r}(u,t.id,n);if(0==d.length)return Promise.resolve();if(1==e.length&&1==t.selectedRowKeys.size){var b=o.b.getRowIdString(d[0],t),f=Object(o.G)(Object(r.__spread)(t.selectedRowKeys.keys())[0],t.id);if(b==f.id){var O=f.itemIds;n?l():a?s(O):w.d.warn("Invalid scenario to implicitly mark conversation as unread.")}}Object(A.a)(e,t.id,n,a),T.a.import().then((function(r){r(t.tableQuery,!1,n,c,e)})),n?a?Object(S.d)("MarkAsRead",i):Object(S.d)("MarkAsReadImplicit",i):Object(S.d)("MarkAsUnread",i);var j=Object(h.b)(t).requestOptions;return Object(o.e)(t)?function(e,t,n,a){var c=[];return t.forEach((function(t){c.push.apply(c,Object(r.__spread)(o.b.getItemIds(t,e)))})),J(e,t,c,n,a)}(t,d,n,j):function(e,t,n,r,a){var c=Object(E.a)(e),i=function(e,t,n,r){var o=R(e,t,n);return Object(y.a)(o,void 0,r)}(t.map((function(t){return Object(o.h)(t,e.id)})),n,c,a),u=Object(o.V)(e,n,r);return Object(M.d)(i,t,c,e,u)}(t,d,n,a,j)}));var G=n(1004),W=Object(c.action)("autoMarkConversationAsRead")(Object(c.select)({items:function(){return C.a.items}})((function(e,t,n){var r=Object(o.A)([e],t),a=Object(G.a)(r[0],t.id);if(a&&Object(o.f)(t)){var c=a.itemIds;b(c)||(0==Object.keys(u.suppressedItemIdsMap).length?Q([e],t,!0,!1,null,[],r):c.forEach((function(e){!b([e])&&n.items.get(e)&&B(t,[e],!0,!1,null,[])})),l())}}))),H=Object(c.action)("autoMarkItemAsRead")((function(e,t){Object(o.f)(t)&&(b([e])||(B(t,[e],!0,!1,null,[]),l()))}));function X(e,t){if("OnSelectionChange"===Object(N.a)().UserOptions.PreviewMarkAsRead){var n=o.b.getRowIdString(e,t);switch(t.tableQuery.listViewType){case 0:W(n,t);break;case 1:H(n,t)}}}var z=n(958),Y=Object(c.action)("onReadingPaneClosed")((function(e,t){Object(z.q)()||w.d.error("onReadingPaneClosed should only be called in single line view."),X(e,t)})),Z=Object(c.action)("onSingleSelectionChanged")((function(e,t,n){Object(z.q)()||n&&X(e,t)}));function $(e,t,n){0==e.length||Object(z.q)()||1!==e.length||"Unread"===Object(o.K)(n)||X(e[0],t)}var ee=Object(i.action)("MARK_ITEMS_READ_BASED_ON_NODE_IDS",(function(e,t,n,r,o){return{nodeIds:e,tableViewId:t,isReadValueToSet:n,isExplicit:r,actionSource:o}})),te=Object(c.action)("markItemAsReadFromReadingPane")((function(e,t,n,r,a){var c=[],i=null;if(t){if(1==t.tableQuery.listViewType)c=Object(o.A)([e],t);else{var u=C.a.items.get(e).ConversationId.Id;c=Object(o.A)([u],t)}i=Object(o.k)(t)}B(t,[e],n,!0,a,r).then((function(){t&&Object(M.b)(c,i)})).catch((function(e){t&&(Object(M.b)(c,i),Object(M.c)(t))}))})),ne=n(1809),re=Object(c.action)("markConversationsAsReadFromTable")((function(e,t,n,r){var a=Object(o.y)(e,t.id),c=Object(ne.a)(e,t);return Q(a,t,n,!0,r,c,e)})),oe=Object(c.action)("markItemsReadFromTable")((function(e,t,n,r,a){var c=Object(o.y)(e,t.id),i=Object(ne.a)(e,t),u=B(t,c,n,r,a,i),s=Object(o.k)(t),d=Object(o.V)(t,n,r);u.then((function(t){Object(M.b)(e,s,d)})).catch((function(n){Object(M.b)(e,s,d),Object(M.c)(t)}))})),ae=n(2038),ce=Object(c.action)("toggleRowReadState")((function(e,t,n){var r=o.S.tableViews.get(t),a=o.b.getUnreadCount(e,r)>0;switch(r.tableQuery.listViewType){case 0:re([e],r,a,n);break;case 1:oe([e],r,a,!0,n)}Object(ae.b)()})),ie=Object(c.action)("onNavigateAwayViaUpDown")((function(e,t){X(e,t)})),ue=Object(i.action)("onKeyboardMarkAsRead",(function(e,t,n,r,o,a){return{tableView:e,selectedNodeIds:t,isInVirtualSelectAllMode:n,rowKeysToActOn:r,exclusionList:o,isReadValueToSet:a}})),se=n(193),de=n(896),le=n(5),be=n(836),fe=n(8),Oe=n(1820),je=n(1866),ve=n(4404),me=n(10783),pe=n.n(me),Ie=n(10784),_e=n.n(Ie);var ye=n(6158),Re=n(2470),Te=n(1418),Se=n(5383),Ae=n(2389),Ee=n(3187),he=n(10786),we=n(10787),ge=n(10788);var Me=n(351),Ce=n(37),ke=Object(c.action)("markAsReadInTable")((function(e,t,n,a,c,i,u){var s=this;if(c.length&&n)throw new Error("If in virtual select all mode, rowKeysToActOn should be empty.");if(t.length&&!n)throw new Error("If not in virtual select all mode, exclusionList should be empty.");var d=i.tableQuery.folderId,l=be.e.folderTable.get(d),b=i.isInVirtualSelectAllMode&&t.length>0,f=Object(o.K)(i),O="ContextFolder"===e||"CommandBar"===e&&n&&!i.isInCheckedMode&&!Object(o.N)(i,f),j=c.length>0&&!n,v=n&&l&&l.UnreadCount>=ye.b,m=function(e,t,n,r,a,c,i,u){if(e){if(Object(Ce.f)("tri-categoryUnreadCount")){var s=Object(o.J)(c);if(s)return Object(Me.n)(s)}return null==n?void 0:n.UnreadCount}if(Object(o.q)(c)||t||Object(o.N)(c,i)&&u)return c.totalRowsInView-r;return a}(O,b,l,t.length,c.length,i,f,n),p=v||m>=ye.b,I={headerText:"",bodyText:""};if(p){var y=Object(o.o)(i.tableQuery.type,i,l&&Object(be.k)(l));I=function(e,t,n,r,o,a,c,i){var u,s="",d="",l=1===t,b=e||l;return n<0&&(w.d.warn("totalCount in getMarkAsReadUnreadAllConfirmText should not be negative."),s=b?o?Object(fe.a)(Se.e):Object(fe.a)(Ae.e):o?Object(fe.a)(Se.c):Object(fe.a)(Ae.c)),1==n&&(s=o?Object(fe.a)(Ee.a):Object(fe.a)(Ae.a)),u=n<ye.a?n:"10000+",s=b?o?Object(fe.b)(Object(fe.a)(Se.d),u):Object(fe.b)(Object(fe.a)(Ae.d),u):o?Object(fe.b)(Object(fe.a)(Se.b),u):Object(fe.b)(Object(fe.a)(Ae.b),u),d=e?o?Object(fe.b)(Object(fe.a)(we.b),r):Object(fe.b)(Object(fe.a)(ge.b),r):a||c?l?o?Object(fe.b)(Object(fe.a)(we.d),r):Object(fe.b)(Object(fe.a)(ge.d),r):o?Object(fe.b)(Object(fe.a)(we.c),r):Object(fe.b)(Object(fe.a)(ge.c),r):l?o?Object(fe.b)(Object(fe.a)(we.b),r):Object(fe.b)(Object(fe.a)(ge.b),r):o?Object(fe.b)(Object(fe.a)(we.a),r):Object(fe.b)(Object(fe.a)(ge.a),r),i&&(d=l?o?Object(fe.a)(he.b):Object(fe.a)(he.d):o?Object(fe.a)(he.a):Object(fe.a)(he.c)),{headerText:s,bodyText:d}}(O,i.tableQuery.listViewType,m,y,a,b,j,2===i.tableQuery.type)}Object(de.b)(I.headerText,I.bodyText,!p,{delayCallbackAfterAnimation:!0,okText:Object(fe.a)(Oe.a)}).then((function(u){return Object(r.__awaiter)(s,void 0,void 0,(function(){var s,l,b,f;return Object(r.__generator)(this,(function(r){if(u===de.a.ok)if(Te.b(),n){switch(s=Object(N.a)().UserOptions.ReadReceipt,l="DoNotAutomaticallySend"==s||"NeverSend"==s||Object(Re.a)(d),b=Object(o.O)(d)?Object(le.m)(o.S.inboxPausedDateTime):null,function(e,t,n){var r="TnS_MarkAllAs";r+=t?"Read":"Unread",Object(se.o)(r,[e,Object(o.l)(n),n.isInCheckedMode])}(e,a,i),T.a.import().then((function(t){t(i.tableQuery,!0,a,e)})),f=[],i.tableQuery.listViewType){case 0:f=Object(ve.a)(t,i.id);break;case 1:f=Object(o.y)(t,i.id)}Object(je.a)(i,a,f),function(e,t,n,r,o,a){var c=null!=n?n.map((function(e){return _()({Id:e})})):void 0;_e()({Header:Object(K.getJsonRequestHeader)(),Body:pe()({ReadFlag:t,SuppressReadReceipts:r,FromFilter:null,FolderIds:[e],ItemIdsToExclude:c,ClientLastSyncTime:a&&a.toISOString()})},o).then((function(e){return e.Body.ResponseMessages.Items[0]}))}(Object(o.j)(i),a,f,l,Object(h.b)(i).requestOptions,b)}else switch(i.tableQuery.listViewType){case 0:re(c,i,a,e);break;case 1:oe(c,i,a,!0,e)}return[2]}))}))}))}));var Ne=n(1005),xe=Object(c.action)("setAutoMarkAsReadTimer")(Object(c.select)({markAsReadDelaytime:function(){return Object(N.a)().UserOptions.MarkAsReadDelaytime},store:function(){return u},userOptions:function(){return Object(N.a)().UserOptions}})((function(e,t,n){var r=Object(Ne.a)();if(r&&Object(o.f)(r)){var a=n.markAsReadDelaytime,c=n.store;"Delayed"==n.userOptions.PreviewMarkAsRead&&(c.markAsReadTimerTask=setTimeout((function(){Le(e,r,t)}),1e3*a))}}))),Pe=Object(c.action)("clearAutoMarkAsReadTimer")(Object(c.select)({store:function(){return u}})((function(e){e.store.markAsReadTimerTask&&(clearTimeout(e.store.markAsReadTimerTask),e.store.markAsReadTimerTask=null)}))),Le=Object(c.action)("setMarkAsReadTimer:timeout")((function(e,t,n){if(Pe(),n)H(e,t);else switch(t.tableQuery.listViewType){case 0:W(e,t);break;case 1:H(e,t)}})),Ve=n(2463),Ue=n(73),De=Object(Ue.e)(Ve.b,"CLONE_ON_ITEM_PART_DESELECTED",(function(e){var t=e.itemId,n=e.tableView;n&&"OnSelectionChange"==Object(N.a)().UserOptions.PreviewMarkAsRead&&H(t,n)})),Ke=n(5498),Fe=(Object(i.orchestrator)(ee,(function(e){var t=Object(Ke.a)(e.nodeIds),n=o.S.tableViews.get(e.tableViewId);B(n,t,e.isReadValueToSet,e.isExplicit,e.actionSource,null)})),n(1033)),qe=n(2106),Be=n(2004);Object(i.orchestrator)(Fe.q,(function(e){var t=Object(qe.b)(e.nodeIdToSelect);t&&(Be.a.importAndExecute(),Be.j.importAndExecute(t.ItemId.Id,!0))}));Object(i.orchestrator)(ue,(function(e){var t=e.tableView,n=e.selectedNodeIds,r=e.isInVirtualSelectAllMode,o=e.rowKeysToActOn,a=e.exclusionList,c=e.isReadValueToSet;n.length>0?ee(n,t.id,c,!0,"Keyboard"):ke("Keyboard",a,r,c,o,t)}));n.d(t,"onReadingPaneClosed",(function(){return Y})),n.d(t,"onSingleSelectionChanged",(function(){return Z})),n.d(t,"markReadOnTableViewChange",(function(){return $})),n.d(t,"markItemsAsReadBasedOnNodeIds",(function(){return ee})),n.d(t,"markItemAsReadFromReadingPane",(function(){return te})),n.d(t,"toggleRowReadState",(function(){return ce})),n.d(t,"onNavigateAwayViaUpDown",(function(){return ie})),n.d(t,"onKeyboardMarkAsRead",(function(){return ue})),n.d(t,"markAsReadInTable",(function(){return ke})),n.d(t,"clearAutoMarkAsReadTimer",(function(){return Pe})),n.d(t,"setAutoMarkAsReadTimer",(function(){return xe})),n.d(t,"onItemPartDeselectedOrchestrator",(function(){return De}))},5383:function(e){e.exports=JSON.parse('{"a":"tba","c":"uba","e":"vba","b":"wba","d":"xba"}')},5498:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(0),o=n(2106);function a(e){var t,n,a=[];try{for(var c=Object(r.__values)(e),i=c.next();!i.done;i=c.next()){var u=i.value,s=Object(o.b)(u);s&&a.push(s.ItemId.Id)}}catch(e){t={error:e}}finally{try{i&&!i.done&&(n=c.return)&&n.call(c)}finally{if(t)throw t.error}}return a}},6157:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return i}));var r=n(73),o=new r.c((function(){return n.e(280).then(n.bind(null,9201))})),a=new r.b(o,(function(e){return e.addMarkAsReadDiagnostics})),c=new r.b(o,(function(e){return e.addUnreadCountNotificationDiagnostics})),i=new r.b(o,(function(e){return e.addUnreadCountSubscriptionDiagnostics}))},6158:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));var r=1e4,o=25}}]);
//# sourceMappingURL=owa.MarkRead.js.map
self.scriptsLoaded['owa.MarkRead.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.MarkRead.js'] = (new Date()).getTime();