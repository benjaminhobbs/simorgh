(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{1420:function(module,__webpack_exports__,__webpack_require__){"use strict";var _templateObject,helpers_extends=__webpack_require__(21),extends_default=__webpack_require__.n(helpers_extends),slicedToArray=__webpack_require__(37),slicedToArray_default=__webpack_require__.n(slicedToArray),emotion_styled_base_browser_esm=__webpack_require__(4),react=(__webpack_require__(49),__webpack_require__(0)),react_default=__webpack_require__.n(react),spacings=__webpack_require__(3),breakpoints=__webpack_require__(5),pathOr=__webpack_require__(8),pathOr_default=__webpack_require__.n(pathOr),taggedTemplateLiteral=__webpack_require__(1421),taggedTemplateLiteral_default=__webpack_require__.n(taggedTemplateLiteral),emotion_react_browser_esm=__webpack_require__(263);var Wrapper=Object(emotion_styled_base_browser_esm.a)("div",{target:"enyy4ic2"})({name:"bjn8wh",styles:"position:relative"}),Overlay=Object(emotion_styled_base_browser_esm.a)("div",{target:"enyy4ic1"})({name:"1mqrah",styles:".no-js &{display:none;}position:absolute;top:0;left:0;right:0;bottom:0;display:flex;justify-content:center;align-items:center"}),spin=Object(emotion_react_browser_esm.c)(_templateObject||(_templateObject=taggedTemplateLiteral_default()(["\n  to {\n    transform: rotate(360deg);\n  }\n"]))),Spinner=Object(emotion_styled_base_browser_esm.a)("svg",{target:"enyy4ic0"})("width:64px;height:64px;stroke:currentColor;@media screen and (-ms-high-contrast: active){stroke:windowText;}will-change:transform;@media (prefers-reduced-motion: no-preference){animation:",spin," 1.1s 3 linear;}"),AudioLoader_AudioLoader=function AudioLoader(_ref){var children=_ref.children,isLoading=_ref.isLoading;return react_default.a.createElement(Wrapper,null,isLoading&&react_default.a.createElement(Overlay,{"data-testid":"audio-loader-overlay","aria-hidden":"true"},react_default.a.createElement(Spinner,{xmlns:"http://www.w3.org/2000/svg",width:"38",height:"38",viewBox:"0 0 38 38",focusable:"false",stroke:"black"},react_default.a.createElement("g",{fill:"none",strokeWidth:"2",transform:"translate(1 1)"},react_default.a.createElement("circle",{strokeOpacity:"0.2",cx:"18",cy:"18",r:"18"}),react_default.a.createElement("path",{d:"M36 18c0-9.94-8.06-18-18-18"})))),children)};AudioLoader_AudioLoader.defaultProps={isLoading:!1},AudioLoader_AudioLoader.__docgenInfo={description:"",methods:[],displayName:"AudioLoader",props:{isLoading:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},children:{type:{name:"element"},required:!0,description:""}}};var MediaPlayer_AudioLoader=AudioLoader_AudioLoader;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/components/MediaPlayer/AudioLoader/index.jsx"]={name:"AudioLoader",docgenInfo:AudioLoader_AudioLoader.__docgenInfo,path:"src/app/components/MediaPlayer/AudioLoader/index.jsx"});var MediaPlayer=__webpack_require__(97),RequestContext=__webpack_require__(14),ServiceContext=__webpack_require__(7),AVPlayer_Wrapper=Object(emotion_styled_base_browser_esm.a)("div",{target:"e1a3lole1"})((function(props){return!props.hasBottomPadding&&"padding-bottom: ".concat(spacings.f,";")}),"@media (min-width: ",breakpoints.i,"){",(function(props){return!props.hasBottomPadding&&"padding-bottom: ".concat(spacings.l,";")}),";}"),AVPlayer_AVPlayer=function AVPlayer(_ref){var assetId=_ref.assetId,placeholderSrc=_ref.placeholderSrc,title=_ref.title,embedUrl=_ref.embedUrl,iframeTitle=_ref.iframeTitle,type=_ref.type,skin=_ref.skin,className=_ref.className,hasBottomPadding=_ref.hasBottomPadding,showLoadingImage=_ref.showLoadingImage,darkMode=_ref.darkMode,onMediaInitialised=_ref.onMediaInitialised,_useContext=Object(react.useContext)(ServiceContext.a),translations=_useContext.translations,service=_useContext.service,_useContext2=Object(react.useContext)(RequestContext.a),isAmp=_useContext2.isAmp,platform=_useContext2.platform,isValidPlatform=["amp","canonical"].includes(platform),mediaInfo={title:title,type:type},noJsMessage=pathOr_default()("This ".concat(mediaInfo.type," cannot play in your browser. Please enable JavaScript or try a different browser."),["media","noJs"],translations);return isValidPlatform&&assetId?react_default.a.createElement(AVPlayer_Wrapper,{hasBottomPadding:hasBottomPadding,className:className},isAmp?react_default.a.createElement(MediaPlayer.a,{placeholderSrc:placeholderSrc,src:embedUrl,title:iframeTitle,skin:skin,noJsMessage:noJsMessage,service:service}):react_default.a.createElement(MediaPlayer.b,{showPlaceholder:!1,showLoadingImage:showLoadingImage,darkMode:darkMode,src:embedUrl,title:iframeTitle,skin:skin,service:service,mediaInfo:mediaInfo,noJsMessage:noJsMessage,noJsClassName:"no-js",onMediaInitialised:onMediaInitialised})):null},AudioPlayer=Object(emotion_styled_base_browser_esm.a)(AVPlayer_AVPlayer,{target:"e1a3lole0"})("amp-iframe,div>iframe{width:calc(100% + ",spacings.f,");margin:0 -",spacings.e,";@media (min-width: ",breakpoints.e,"){width:calc(100% + ",spacings.h,");margin:0 -",spacings.f,";}}");AVPlayer_AVPlayer.defaultProps={embedUrl:"",assetId:"",placeholderSrc:"",type:"",title:"",iframeTitle:"",className:"",skin:"classic",hasBottomPadding:!0,showLoadingImage:!1,darkMode:!1,onMediaInitialised:function onMediaInitialised(){}};var AVPlayer_AVSelector=function AVSelector(props){var skin=props.skin,_useState=Object(react.useState)(!0),_useState2=slicedToArray_default()(_useState,2),isLoading=_useState2[0],setIsLoading=_useState2[1];return"audio"===skin?react_default.a.createElement(MediaPlayer_AudioLoader,{isLoading:isLoading},react_default.a.createElement(AudioPlayer,extends_default()({},props,{onMediaInitialised:function onMediaInitialised(){return setIsLoading(!1)}}))):react_default.a.createElement(AVPlayer_AVPlayer,props)};AVPlayer_AVSelector.defaultProps={skin:"classic"},AVPlayer_AVSelector.__docgenInfo={description:"",methods:[],displayName:"AVSelector",props:{skin:{defaultValue:{value:"'classic'",computed:!1},type:{name:"enum",value:[{value:"'classic'",computed:!1},{value:"'audio'",computed:!1}]},required:!1,description:""}}};__webpack_exports__.a=AVPlayer_AVSelector;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/containers/AVPlayer/index.jsx"]={name:"AVSelector",docgenInfo:AVPlayer_AVSelector.__docgenInfo,path:"src/app/containers/AVPlayer/index.jsx"})},1421:function(module,exports){module.exports=function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))},module.exports.default=module.exports,module.exports.__esModule=!0},1422:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(18);__webpack_exports__.a=function getMediaId(_ref){var assetId=_ref.assetId,masterBrand=_ref.masterBrand,lang=_ref.lang,service=_ref.service;return function isLiveRadio(assetId){return"liveradio"===assetId}(assetId)?"".concat(masterBrand,"/").concat(assetId,"/").concat(lang):"".concat(service,"/").concat(masterBrand,"/").concat(assetId,"/").concat(lang)}},1423:function(module,__webpack_exports__,__webpack_require__){"use strict";var ramda_src_pathOr__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(8),ramda_src_pathOr__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(ramda_src_pathOr__WEBPACK_IMPORTED_MODULE_0__);__webpack_exports__.a=function getMasterBrand(externalId,liveRadioIdOverrides){return ramda_src_pathOr__WEBPACK_IMPORTED_MODULE_0___default()(externalId,["masterBrand",externalId],liveRadioIdOverrides)}},899:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(18),__webpack_require__(95),__webpack_require__(41),__webpack_require__(275);var react=__webpack_require__(0),react_default=__webpack_require__.n(react),esm=__webpack_require__(337),pathOr=__webpack_require__(8),pathOr_default=__webpack_require__.n(pathOr),psammead_paragraph_esm=__webpack_require__(428),react_router=__webpack_require__(65),ATIAnalytics=__webpack_require__(123),Metadata=__webpack_require__(127),RadioSchedule=__webpack_require__(291),ChartbeatAnalytics=__webpack_require__(124),ComscoreAnalytics=__webpack_require__(126),Grid=__webpack_require__(20),LinkedData=__webpack_require__(125),AVPlayer=__webpack_require__(1420),ServiceContext=__webpack_require__(7),RequestContext=__webpack_require__(14),getMediaId=__webpack_require__(1422),getMasterbrand=__webpack_require__(1423),getEmbedUrl=__webpack_require__(684),staticAssetsPath="".concat(Object({NODE_ENV:"production",NODE_PATH:[],STORYBOOK:"true",PUBLIC_URL:"."}).SIMORGH_PUBLIC_STATIC_ASSETS_ORIGIN).concat(Object({NODE_ENV:"production",NODE_PATH:[],STORYBOOK:"true",PUBLIC_URL:"."}).SIMORGH_PUBLIC_STATIC_ASSETS_PATH),audioPlaceholderImageSrc="".concat(staticAssetsPath,"images/amp_audio_placeholder.png"),LiveRadioPage_LiveRadioPage=function LiveRadioPage(_ref){var pageData=_ref.pageData,language=pageData.language,name=pageData.name,summary=pageData.summary,heading=pageData.heading,bodySummary=pageData.bodySummary,masterBrand=pageData.masterBrand,radioScheduleData=pageData.radioScheduleData,_useContext=Object(react.useContext)(ServiceContext.a),script=_useContext.script,service=_useContext.service,lang=_useContext.lang,liveRadioOverrides=_useContext.liveRadioOverrides,translations=_useContext.translations,isAmp=Object(react.useContext)(RequestContext.a).isAmp,location=Object(react_router.e)(),mediaId=Object(getMediaId.a)({assetId:"liveradio",masterBrand:Object(getMasterbrand.a)(masterBrand,liveRadioOverrides),lang:lang,service:service}),embedUrl=Object(getEmbedUrl.a)({mediaId:mediaId,type:"media",isAmp:isAmp,queryString:location.search}),iframeTitle=pathOr_default()("Audio player",["mediaAssetPage","audioPlayer"],translations),hasRadioScheduleData=Boolean(radioScheduleData);return react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement(ATIAnalytics.a,{data:pageData}),react_default.a.createElement(ChartbeatAnalytics.a,{data:pageData}),react_default.a.createElement(ComscoreAnalytics.a,null),react_default.a.createElement(Metadata.a,{title:name,lang:language,description:summary,openGraphType:"website"}),react_default.a.createElement(LinkedData.a,{type:"RadioChannel",seoTitle:name}),react_default.a.createElement(Grid.b,{as:"main",role:"main",columns:{group0:6,group1:6,group2:6,group3:6,group4:8,group5:20},enableGelGutters:!0},react_default.a.createElement(Grid.j,{item:!0,startOffset:{group0:1,group1:1,group2:1,group3:1,group4:2,group5:5},columns:{group0:6,group1:6,group2:6,group3:6,group4:6,group5:12},margins:{group0:!0,group1:!0,group2:!0,group3:!0}},react_default.a.createElement(esm.a,{script:script,service:service,id:"content",tabIndex:"-1"},heading),react_default.a.createElement(psammead_paragraph_esm.a,{script:script,service:service},bodySummary),react_default.a.createElement(AVPlayer.a,{assetId:"liveradio",embedUrl:embedUrl,iframeTitle:iframeTitle,title:"Live radio",type:"audio",skin:"audio",placeholderSrc:audioPlaceholderImageSrc}))),hasRadioScheduleData&&react_default.a.createElement(RadioSchedule.a,{initialData:radioScheduleData}))};LiveRadioPage_LiveRadioPage.__docgenInfo={description:"",methods:[],displayName:"LiveRadioPage",props:{pageData:{type:{name:"shape",value:{metadata:{name:"shape",value:{type:{name:"string",required:!1}},required:!1},language:{name:"string",required:!1},name:{name:"string",required:!1},summary:{name:"string",required:!1},heading:{name:"string",required:!1},bodySummary:{name:"string",required:!1},masterBrand:{name:"string",required:!1}}},required:!0,description:""}}};var pages_LiveRadioPage_LiveRadioPage=LiveRadioPage_LiveRadioPage;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/pages/LiveRadioPage/LiveRadioPage.jsx"]={name:"LiveRadioPage",docgenInfo:LiveRadioPage_LiveRadioPage.__docgenInfo,path:"src/app/pages/LiveRadioPage/LiveRadioPage.jsx"});var applyBasicPageHandlers=__webpack_require__(189);__webpack_exports__.default=Object(applyBasicPageHandlers.a)({addVariantHandling:!1})(pages_LiveRadioPage_LiveRadioPage)}}]);