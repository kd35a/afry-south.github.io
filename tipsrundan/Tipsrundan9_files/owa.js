self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.1.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[1],{401:function(e,t,o){"use strict";o.d(t,"a",(function(){return s})),o.d(t,"b",(function(){return i}));var n=o(10),s=n.AnimationVariables.durationValue2,a={root:"ms-Modal",main:"ms-Dialog-main",scrollableContent:"ms-Modal-scrollableContent",isOpen:"is-open",layer:"ms-Modal-Layer"},i=function(e){var t,o=e.className,i=e.containerClassName,r=e.scrollableContentClassName,l=e.isOpen,c=e.isVisible,p=e.hasBeenOpened,d=e.modalRectangleTop,u=e.theme,h=e.topOffsetFixed,y=e.isModeless,g=e.layerClassName,_=e.isDefaultDragHandle,f=u.palette,m=u.effects,v=u.fonts,M=Object(n.getGlobalClassNames)(a,u);return{root:[M.root,v.medium,{backgroundColor:"transparent",position:y?"absolute":"fixed",height:"100%",width:"100%",display:"flex",alignItems:"center",justifyContent:"center",opacity:0,pointerEvents:"none",transition:"opacity "+s},h&&p&&{alignItems:"flex-start"},l&&M.isOpen,c&&{opacity:1,pointerEvents:"auto"},o],main:[M.main,{boxShadow:m.elevation64,borderRadius:m.roundedCorner2,backgroundColor:f.white,boxSizing:"border-box",position:"relative",textAlign:"left",outline:"3px solid transparent",maxHeight:"calc(100% - 32px)",maxWidth:"calc(100% - 32px)",minHeight:"176px",minWidth:"288px",overflowY:"auto",zIndex:y?n.ZIndexes.Layer:void 0},h&&p&&{top:d},_&&{cursor:"move"},i],scrollableContent:[M.scrollableContent,{overflowY:"auto",flexGrow:1,maxHeight:"100vh",selectors:(t={},t["@supports (-webkit-overflow-scrolling: touch)"]={maxHeight:window.innerHeight},t)},r],layer:y&&[g,M.layer,{position:"static",width:"unset",height:"unset"}],keyboardMoveIconContainer:{position:"absolute",display:"flex",justifyContent:"center",width:"100%",padding:"3px 0px"},keyboardMoveIcon:{fontSize:v.xLargePlus.fontSize,width:"24px"}}}},578:function(e,t,o){"use strict";var n=o(0),s=o(1),a=o(162),i=o(282),r=o(46),l=o(175),c=o(141),p=o(149),d=o(771),u=o(401),h=o(774),y=o(633),g=o(631),_=o(163),f=o(56),m=o(216),v=o(150),M=o(10),b=Object(v.b)((function(e,t){return{root:Object(M.mergeStyles)(e,t&&{touchAction:"none",selectors:{"& *":{userSelect:"none"}}})}})),S=o(186),D={touch:{start:"touchstart",move:"touchmove",stop:"touchend"},mouse:{start:"mousedown",move:"mousemove",stop:"mouseup"}},x=function(e){function t(t){var o=e.call(this,t)||this;return o._currentEventType=D.mouse,o._events=[],o._onMouseDown=function(e){var t=s.Children.only(o.props.children).props.onMouseDown;return t&&t(e),o._currentEventType=D.mouse,o._onDragStart(e)},o._onMouseUp=function(e){var t=s.Children.only(o.props.children).props.onMouseUp;return t&&t(e),o._currentEventType=D.mouse,o._onDragStop(e)},o._onTouchStart=function(e){var t=s.Children.only(o.props.children).props.onTouchStart;return t&&t(e),o._currentEventType=D.touch,o._onDragStart(e)},o._onTouchEnd=function(e){var t=s.Children.only(o.props.children).props.onTouchEnd;t&&t(e),o._currentEventType=D.touch,o._onDragStop(e)},o._onDragStart=function(e){if("number"==typeof e.button&&0!==e.button)return!1;if(!(o.props.handleSelector&&!o._matchesSelector(e.target,o.props.handleSelector)||o.props.preventDragSelector&&o._matchesSelector(e.target,o.props.preventDragSelector))){o._touchId=o._getTouchId(e);var t=o._getControlPosition(e);if(void 0!==t){var n=o._createDragDataFromPosition(t);o.props.onStart&&o.props.onStart(e,n),o.setState({isDragging:!0,lastPosition:t}),o._events=[Object(S.a)(document.body,o._currentEventType.move,o._onDrag),Object(S.a)(document.body,o._currentEventType.stop,o._onDragStop)]}}},o._onDrag=function(e){"touchmove"===e.type&&e.preventDefault();var t=o._getControlPosition(e);if(t){var n=o._createUpdatedDragData(o._createDragDataFromPosition(t)),s=n.position;o.props.onDragChange&&o.props.onDragChange(e,n),o.setState({position:s,lastPosition:t})}},o._onDragStop=function(e){if(o.state.isDragging){var t=o._getControlPosition(e);if(t){var n=o._createDragDataFromPosition(t);o.setState({isDragging:!1,lastPosition:void 0}),o.props.onStop&&o.props.onStop(e,n),o.props.position&&o.setState({position:o.props.position}),o._events.forEach((function(e){return e()}))}}},o.state={isDragging:!1,position:o.props.position||{x:0,y:0},lastPosition:void 0},o}return n.__extends(t,e),t.prototype.componentDidUpdate=function(e){!this.props.position||e.position&&this.props.position===e.position||this.setState({position:this.props.position})},t.prototype.componentWillUnmount=function(){this._events.forEach((function(e){return e()}))},t.prototype.render=function(){var e=s.Children.only(this.props.children),t=e.props,o=this.props.position,a=this.state,i=a.position,r=a.isDragging,l=i.x,c=i.y;return o&&!r&&(l=o.x,c=o.y),s.cloneElement(e,{style:n.__assign({},t.style,{transform:"translate("+l+"px, "+c+"px)"}),className:b(t.className,this.state.isDragging).root,onMouseDown:this._onMouseDown,onMouseUp:this._onMouseUp,onTouchStart:this._onTouchStart,onTouchEnd:this._onTouchEnd})},t.prototype._getControlPosition=function(e){var t=this._getActiveTouch(e);if(void 0===this._touchId||t){var o=t||e;return{x:o.clientX,y:o.clientY}}},t.prototype._getActiveTouch=function(e){return e.targetTouches&&this._findTouchInTouchList(e.targetTouches)||e.changedTouches&&this._findTouchInTouchList(e.changedTouches)},t.prototype._getTouchId=function(e){var t=e.targetTouches&&e.targetTouches[0]||e.changedTouches&&e.changedTouches[0];if(t)return t.identifier},t.prototype._matchesSelector=function(e,t){if(!e||e===document.body)return!1;var o=e.matches||e.webkitMatchesSelector||e.msMatchesSelector;return!!o&&(o.call(e,t)||this._matchesSelector(e.parentElement,t))},t.prototype._findTouchInTouchList=function(e){if(void 0!==this._touchId)for(var t=0;t<e.length;t++)if(e[t].identifier===this._touchId)return e[t]},t.prototype._createDragDataFromPosition=function(e){var t=this.state.lastPosition;return void 0===t?{delta:{x:0,y:0},lastPosition:e,position:e}:{delta:{x:e.x-t.x,y:e.y-t.y},lastPosition:t,position:e}},t.prototype._createUpdatedDragData=function(e){var t=this.state.position;return{position:{x:t.x+e.delta.x,y:t.y+e.delta.y},delta:e.delta,lastPosition:t}},t}(s.Component);o.d(t,"a",(function(){return O}));var C={eventBubblingEnabled:!1},T=Object(a.a)(),O=function(e){function t(t){var o=e.call(this,t)||this;o._focusTrapZone=s.createRef(),o._allowScrollOnModal=function(e){e?o._allowTouchBodyScroll?Object(i.b)(e,o._events):Object(i.c)(e,o._events):o._events.off(o._scrollableContent),o._scrollableContent=e},o._onModalContextMenuClose=function(){o.setState({isModalMenuOpen:!1})},o._onModalClose=function(){o._lastSetX=0,o._lastSetY=0,o.setState({isModalMenuOpen:!1,isInKeyboardMoveMode:!1,isOpen:!1,x:0,y:0}),o.props.dragOptions&&o._hasRegisteredKeyUp&&o._events.off(window,"keyup",o._onKeyUp,!0),o.props.onDismissed&&o.props.onDismissed()},o._onDragStart=function(){o.setState({isModalMenuOpen:!1,isInKeyboardMoveMode:!1})},o._onDrag=function(e,t){var n=o.state,s=n.x,a=n.y;o.setState({x:s+t.delta.x,y:a+t.delta.y})},o._onDragStop=function(){o.focus()},o._onKeyUp=function(e){e.altKey&&e.ctrlKey&&e.keyCode===r.a.space&&Object(l.a)(o._scrollableContent,e.target)&&(o.setState({isModalMenuOpen:!o.state.isModalMenuOpen}),e.preventDefault(),e.stopPropagation())},o._onKeyDown=function(e){if(e.altKey&&e.ctrlKey&&e.keyCode===r.a.space)return e.preventDefault(),void e.stopPropagation();if(o.state.isModalMenuOpen&&(e.altKey||e.keyCode===r.a.escape)&&o.setState({isModalMenuOpen:!1}),!o.state.isInKeyboardMoveMode||e.keyCode!==r.a.escape&&e.keyCode!==r.a.enter||(o.setState({isInKeyboardMoveMode:!1}),e.preventDefault(),e.stopPropagation()),o.state.isInKeyboardMoveMode){var t=!0,n=o._getMoveDelta(e);switch(e.keyCode){case r.a.escape:o.setState({x:o._lastSetX,y:o._lastSetY});case r.a.enter:o._lastSetX=0,o._lastSetY=0,o.setState({isInKeyboardMoveMode:!1});break;case r.a.up:o.setState({y:o.state.y-n});break;case r.a.down:o.setState({y:o.state.y+n});break;case r.a.left:o.setState({x:o.state.x-n});break;case r.a.right:o.setState({x:o.state.x+n});break;default:t=!1}t&&(e.preventDefault(),e.stopPropagation())}},o._onEnterKeyboardMoveMode=function(){o._lastSetX=o.state.x,o._lastSetY=o.state.y,o.setState({isInKeyboardMoveMode:!0,isModalMenuOpen:!1}),o._events.on(window,"keydown",o._onKeyDown,!0)},o._onExitKeyboardMoveMode=function(){o._lastSetX=0,o._lastSetY=0,o.setState({isInKeyboardMoveMode:!1}),o._events.off(window,"keydown",o._onKeyDown,!0)},o._registerForKeyUp=function(){o._hasRegisteredKeyUp||(o._events.on(window,"keyup",o._onKeyUp,!0),o._hasRegisteredKeyUp=!0)},o.state={id:Object(c.a)("Modal"),isOpen:t.isOpen,isVisible:t.isOpen,hasBeenOpened:t.isOpen,x:0,y:0},o._lastSetX=0,o._lastSetY=0,o._warnDeprecations({onLayerDidMount:"layerProps.onLayerDidMount"});var n=o.props.allowTouchBodyScroll,a=void 0!==n&&n;return o._allowTouchBodyScroll=a,o}return n.__extends(t,e),t.prototype.UNSAFE_componentWillReceiveProps=function(e){if(clearTimeout(this._onModalCloseTimer),e.isOpen)if(this.state.isOpen){if(this.setState({hasBeenOpened:!0,isVisible:!0}),e.topOffsetFixed){var t=document.getElementsByClassName("ms-Dialog-main"),o=void 0;t.length>0&&(o=t[0].getBoundingClientRect(),this.setState({modalRectangleTop:o.top}))}}else this.setState({isOpen:!0}),e.dragOptions&&this._registerForKeyUp();!e.isOpen&&this.state.isOpen&&(this._onModalCloseTimer=this._async.setTimeout(this._onModalClose,1e3*parseFloat(u.a)),this.setState({isVisible:!1}))},t.prototype.componentDidMount=function(){this.state.isOpen&&this.state.isVisible&&this._registerForKeyUp()},t.prototype.componentDidUpdate=function(e,t){e.isOpen||t.isVisible||this.setState({isVisible:!0})},t.prototype.render=function(){var e=this.props,t=e.className,o=e.containerClassName,a=e.scrollableContentClassName,i=e.elementToFocusOnDismiss,r=e.firstFocusableSelector,l=e.forceFocusInsideTrap,c=e.ignoreExternalFocusing,p=e.isBlocking,u=e.isClickableOutsideFocusTrap,v=e.isDarkOverlay,M=e.onDismiss,b=e.layerProps,S=e.overlay,D=e.responsiveMode,O=e.titleAriaId,w=e.styles,E=e.subtitleAriaId,k=e.theme,I=e.topOffsetFixed,K=e.onLayerDidMount,P=e.isModeless,F=e.dragOptions,N=this.state,U=N.isOpen,B=N.isVisible,j=N.hasBeenOpened,R=N.modalRectangleTop,L=N.x,H=N.y,V=N.isInKeyboardMoveMode;if(!U)return null;var Y=void 0===b?"":b.className,A=T(w,{theme:k,className:t,containerClassName:o,scrollableContentClassName:a,isOpen:U,isVisible:B,hasBeenOpened:j,modalRectangleTop:R,topOffsetFixed:I,isModeless:P,layerClassName:Y,isDefaultDragHandle:F&&!F.dragHandleSelector}),X=n.__assign({},C,this.props.layerProps,{onLayerDidMount:b&&b.onLayerDidMount?b.onLayerDidMount:K,insertFirst:P,className:A.layer}),Z=s.createElement(d.a,{componentRef:this._focusTrapZone,className:A.main,elementToFocusOnDismiss:i,isClickableOutsideFocusTrap:P||u||!p,ignoreExternalFocusing:c,forceFocusInsideTrap:P?!P:l,firstFocusableSelector:r,focusPreviouslyFocusedInnerElement:!0,onBlur:V?this._onExitKeyboardMoveMode:void 0},F&&V&&s.createElement("div",{className:A.keyboardMoveIconContainer},F.keyboardMoveIconProps?s.createElement(m.a,n.__assign({},F.keyboardMoveIconProps)):s.createElement(m.a,{iconName:"move",className:A.keyboardMoveIcon})),s.createElement("div",{ref:this._allowScrollOnModal,className:A.scrollableContent,"data-is-scrollable":!0},F&&this.state.isModalMenuOpen&&s.createElement(F.menu,{items:[{key:"move",text:F.moveMenuItemText,onClick:this._onEnterKeyboardMoveMode},{key:"close",text:F.closeMenuItemText,onClick:this._onModalClose}],onDismiss:this._onModalContextMenuClose,alignTargetEdge:!0,coverTarget:!0,directionalHint:f.DirectionalHint.topLeftEdge,directionalHintFixed:!0,shouldFocusOnMount:!0,target:this._scrollableContent}),this.props.children));return D>=_.ResponsiveMode.small?s.createElement(y.a,n.__assign({},X),s.createElement(g.a,{role:P||!p?"dialog":"alertdialog","aria-modal":!P,ariaLabelledBy:O,ariaDescribedBy:E,onDismiss:M,shouldRestoreFocus:!c},s.createElement("div",{className:A.root},!P&&s.createElement(h.a,n.__assign({isDarkThemed:v,onClick:p?void 0:M,allowTouchBodyScroll:this._allowTouchBodyScroll},S)),F?s.createElement(x,{handleSelector:F.dragHandleSelector||"."+A.main.split(" ")[0],preventDragSelector:"button",onStart:this._onDragStart,onDragChange:this._onDrag,onStop:this._onDragStop,position:{x:L,y:H}},Z):Z))):null},t.prototype.focus=function(){this._focusTrapZone.current&&this._focusTrapZone.current.focus()},t.prototype._getMoveDelta=function(e){var t=10;return e.shiftKey?e.ctrlKey||(t=50):e.ctrlKey&&(t=1),t},t.defaultProps={isOpen:!1,isDarkOverlay:!0,isBlocking:!1,className:"",containerClassName:""},t=n.__decorate([_.withResponsiveMode],t)}(p.a)},630:function(e,t,o){"use strict";o.d(t,"a",(function(){return i}));var n=o(290),s=o(578),a=o(401),i=Object(n.a)(s.a,a.b,void 0,{scope:"Modal"})}}]);
//# sourceMappingURL=owa.1.js.map
self.scriptsLoaded['owa.1.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.1.js'] = (new Date()).getTime();