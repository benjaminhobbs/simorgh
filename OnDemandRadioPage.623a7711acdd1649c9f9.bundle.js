(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{1670:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(18);__webpack_exports__.a=function getMediaId(_ref){var assetId=_ref.assetId,masterBrand=_ref.masterBrand,lang=_ref.lang,service=_ref.service;return function isLiveRadio(assetId){return"liveradio"===assetId}(assetId)?"".concat(masterBrand,"/").concat(assetId,"/").concat(lang):"".concat(service,"/").concat(masterBrand,"/").concat(assetId,"/").concat(lang)}},1671:function(module,__webpack_exports__,__webpack_require__){"use strict";var ramda_src_pathOr__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(8),ramda_src_pathOr__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(ramda_src_pathOr__WEBPACK_IMPORTED_MODULE_0__);__webpack_exports__.a=function getMasterBrand(externalId,liveRadioIdOverrides){return ramda_src_pathOr__WEBPACK_IMPORTED_MODULE_0___default()(externalId,["masterBrand",externalId],liveRadioIdOverrides)}},919:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var pipe=__webpack_require__(667),pipe_default=__webpack_require__.n(pipe),styled_base_browser_esm=(__webpack_require__(18),__webpack_require__(43),__webpack_require__(299),__webpack_require__(5)),react=__webpack_require__(0),react_default=__webpack_require__.n(react),spacings=__webpack_require__(2),breakpoints=__webpack_require__(4),react_router=__webpack_require__(65),pathOr=__webpack_require__(8),pathOr_default=__webpack_require__.n(pathOr),Metadata=__webpack_require__(121),ATIAnalytics=__webpack_require__(117),ChartbeatAnalytics=__webpack_require__(118),ComscoreAnalytics=__webpack_require__(120),Grid=__webpack_require__(16),ServiceContext=__webpack_require__(7),RequestContext=__webpack_require__(11),OnDemandHeading=__webpack_require__(1672),OnDemandHeading_StyledRadioHeadingContainer=Object(styled_base_browser_esm.a)(OnDemandHeading.a,{target:"ei12wot0"})("padding:",spacings.h," 0 ",spacings.f,";@media (min-width:",breakpoints.g,"){padding:",spacings.h," 0 ",spacings.f,";}"),OnDemandParagraph=__webpack_require__(1673),AVPlayer=__webpack_require__(1669),ImageWithPlaceholder=(__webpack_require__(111),__webpack_require__(37),__webpack_require__(110),__webpack_require__(188)),ImageContainer=Object(styled_base_browser_esm.a)("div",{target:"e1sqqoal0"})("padding:",spacings.h," 0 ",spacings.l,";",(function paddingDir(_ref){var dir=_ref.dir;return"padding-".concat("rtl"===dir?"left":"right")}),":",spacings.f,";@media (max-width:",breakpoints.b,"){display:none;}"),getSrc=function getSrc(_ref2){var imageUrl=_ref2.imageUrl,size=_ref2.size;return"https://".concat(imageUrl.replace("$recipe","".concat(size,"x").concat(size)))},OnDemandImage_OnDemandImage=function OnDemandImage(_ref4){var imageUrl=_ref4.imageUrl,dir=_ref4.dir,alt=Object(react.useContext)(ServiceContext.a).defaultImageAltText,src=getSrc({imageUrl:imageUrl,size:128}),srcset=function getSrcSet(_ref3){var imageUrl=_ref3.imageUrl;return _ref3.sizes.map((function(size){return"".concat(getSrc({imageUrl:imageUrl,size:size})," ").concat(size,"w")})).join(",")}({imageUrl:imageUrl,sizes:[128,240,480]});return react_default.a.createElement(ImageContainer,{"data-e2e":"on-demand-image",dir:dir},react_default.a.createElement(ImageWithPlaceholder.a,{src:src,alt:alt,srcset:srcset,sizes:"(min-width: 1008px) 228px, 30vw",ratio:100,width:240,height:240}))};OnDemandImage_OnDemandImage.defaultProps={dir:"ltr"},OnDemandImage_OnDemandImage.__docgenInfo={description:"",methods:[],displayName:"OnDemandImage",props:{dir:{defaultValue:{value:"'ltr'",computed:!1},type:{name:"string"},required:!1,description:""},imageUrl:{type:{name:"string"},required:!0,description:""}}};var containers_OnDemandImage=OnDemandImage_OnDemandImage;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/containers/OnDemandImage/index.jsx"]={name:"OnDemandImage",docgenInfo:OnDemandImage_OnDemandImage.__docgenInfo,path:"src/app/containers/OnDemandImage/index.jsx"});var LinkedData=__webpack_require__(119),getMediaId=__webpack_require__(1670),getMasterbrand=__webpack_require__(1671),getEmbedUrl=__webpack_require__(666),RadioSchedule=__webpack_require__(282),esm=(__webpack_require__(55),__webpack_require__(68),__webpack_require__(39)),utilities=__webpack_require__(135),psammead_section_label_esm=__webpack_require__(145),psammead_episode_list_esm=__webpack_require__(1675),StyledSpan=Object(styled_base_browser_esm.a)("span",{target:"e1ic7ihu0"})("padding:0 ",spacings.e,";"),Spacer=Object(styled_base_browser_esm.a)("aside",{target:"e1ic7ihu1"})("position:relative;margin-bottom:",spacings.h,";"),StyledSectionLabel=Object(styled_base_browser_esm.a)(psammead_section_label_esm.a,{target:"e1ic7ihu2"})("margin-bottom:0;@media (min-width:",breakpoints.e,"){margin-bottom:",spacings.f,";}@media (min-width:",breakpoints.g,"){margin-bottom:",spacings.l,";}"),RecentAudioEpisodes_RecentAudioEpisodes=function RecentAudioEpisodes(_ref){var episodes=_ref.episodes,_useContext=Object(react.useContext)(ServiceContext.a),translations=_useContext.translations,service=_useContext.service,script=_useContext.script,dir=_useContext.dir,timezone=_useContext.timezone,datetimeLocale=_useContext.datetimeLocale;if(!episodes.length)return null;var formattedTimestamp=function formattedTimestamp(_ref2){var releaseDateTimeStamp=_ref2.releaseDateTimeStamp,format=_ref2.format;return Object(utilities.b)({timestamp:releaseDateTimeStamp,format:format,timezone:timezone,locale:datetimeLocale,isRelative:!1})},recentEpisodesTranslation=pathOr_default()("Recent Episodes",["media","recentEpisodes"],translations),durationLabel=pathOr_default()("Duration",["media","duration"],translations),audioLabel=pathOr_default()("Audio",["media","audio"],translations);return react_default.a.createElement(Spacer,{role:"complimentary"},react_default.a.createElement(StyledSectionLabel,{script:script,service:service,dir:dir,bar:!1,labelId:"recent-episodes"},recentEpisodesTranslation),react_default.a.createElement(psammead_episode_list_esm.a,{script:script,service:service,dir:dir},episodes.map((function(episode){return react_default.a.createElement(psammead_episode_list_esm.a.Episode,{key:episode.id},react_default.a.createElement(psammead_episode_list_esm.a.Link,{href:episode.url},react_default.a.createElement(esm.a,null,"".concat(audioLabel,", ")),react_default.a.createElement(psammead_episode_list_esm.a.Title,{className:"episode-list__title--hover episode-list__title--visited"},episode.brandTitle),react_default.a.createElement(esm.a,null,", "),react_default.a.createElement(psammead_episode_list_esm.a.Description,{className:"episode-list__description--hover episode-list__description--visited"},episode.episodeTitle||"".concat(formattedTimestamp({releaseDateTimeStamp:episode.timestamp,format:"LL"}),", ").concat(formattedTimestamp({releaseDateTimeStamp:episode.timestamp,format:"HH:mm"}))),react_default.a.createElement(esm.a,null,", "),react_default.a.createElement(esm.a,null," ".concat(durationLabel," ").concat(Object(utilities.a)({duration:episode.duration,format:episode.duration.includes("H")?"h,mm,ss":"mm,ss",locale:datetimeLocale})," ")),react_default.a.createElement(psammead_episode_list_esm.a.Metadata,null,react_default.a.createElement("span",{"aria-hidden":"true"}," ".concat(durationLabel," ").concat(Object(utilities.a)({duration:episode.duration,locale:datetimeLocale}))))),react_default.a.createElement(psammead_episode_list_esm.a.Metadata,null,episode.episodeTitle&&react_default.a.createElement(react_default.a.Fragment,null," ",react_default.a.createElement(StyledSpan,{"aria-hidden":!0},"|"),formattedTimestamp({releaseDateTimeStamp:episode.timestamp,format:"LL"}))))}))))};RecentAudioEpisodes_RecentAudioEpisodes.__docgenInfo={description:"",methods:[],displayName:"RecentAudioEpisodes",props:{episodes:{type:{name:"arrayOf",value:{name:"shape",value:{id:{name:"string",required:!0},url:{name:"string",required:!0},brandTitle:{name:"string",required:!0},episodeTitle:{name:"string",required:!1},timestamp:{name:"number",required:!0},duration:{name:"string",required:!0}}}},required:!0,description:""}}};var containers_RecentAudioEpisodes=RecentAudioEpisodes_RecentAudioEpisodes;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/containers/RecentAudioEpisodes/index.jsx"]={name:"RecentAudioEpisodes",docgenInfo:RecentAudioEpisodes_RecentAudioEpisodes.__docgenInfo,path:"src/app/containers/RecentAudioEpisodes/index.jsx"});var staticAssetsPath="".concat(Object({NODE_ENV:"production",NODE_PATH:"",PUBLIC_URL:"."}).SIMORGH_PUBLIC_STATIC_ASSETS_ORIGIN).concat(Object({NODE_ENV:"production",NODE_PATH:"",PUBLIC_URL:"."}).SIMORGH_PUBLIC_STATIC_ASSETS_PATH),audioPlaceholderImageSrc="".concat(staticAssetsPath,"images/amp_audio_placeholder.png"),getGroups=function getGroups(zero,one,two,three,four,five){return{group0:zero,group1:one,group2:two,group3:three,group4:four,group5:five}},StyledGelWrapperGrid=Object(styled_base_browser_esm.a)(Grid.b,{target:"e1ekx54l0"})("@media (min-width:",breakpoints.i,"){padding-top:",spacings.l,";}"),OnDemandRadioPage_OnDemandRadioPage=function OnDemandRadioPage(_ref){var pageData=_ref.pageData,mediaIsAvailable=_ref.mediaIsAvailable,MediaError=_ref.MediaError,language=pageData.language,brandTitle=pageData.brandTitle,headline=pageData.headline,summary=pageData.summary,shortSynopsis=pageData.shortSynopsis,masterBrand=pageData.masterBrand,episodeId=pageData.episodeId,releaseDateTimeStamp=pageData.releaseDateTimeStamp,imageUrl=pageData.imageUrl,promoBrandTitle=pageData.promoBrandTitle,durationISO8601=pageData.durationISO8601,thumbnailImageUrl=pageData.thumbnailImageUrl,radioScheduleData=pageData.radioScheduleData,recentEpisodes=pageData.recentEpisodes,isAmp=Object(react.useContext)(RequestContext.a).isAmp,location=Object(react_router.e)(),_useContext2=Object(react.useContext)(ServiceContext.a),dir=_useContext2.dir,liveRadioOverrides=_useContext2.liveRadioOverrides,lang=_useContext2.lang,service=_useContext2.service,translations=_useContext2.translations,oppDir="rtl"===dir?"ltr":"rtl",mediaId=Object(getMediaId.a)({assetId:episodeId,masterBrand:Object(getMasterbrand.a)(masterBrand,liveRadioOverrides),lang:lang,service:service}),embedUrl=Object(getEmbedUrl.a)({mediaId:mediaId,type:"media",isAmp:isAmp,queryString:location.search}),iframeTitle=pathOr_default()("Audio player",["mediaAssetPage","audioPlayer"],translations);return react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement(ATIAnalytics.a,{data:pageData}),react_default.a.createElement(ChartbeatAnalytics.a,{data:pageData}),react_default.a.createElement(ComscoreAnalytics.a,null),react_default.a.createElement(Metadata.a,{title:headline,lang:language,description:shortSynopsis,openGraphType:"website"}),react_default.a.createElement(Grid.b,{as:"main",role:"main",columns:getGroups(6,6,6,6,8,20),enableGelGutters:!0},react_default.a.createElement(Grid.j,{item:!0,startOffset:getGroups(1,1,1,1,2,5),columns:getGroups(6,6,6,6,6,12),margins:getGroups(!0,!0,!0,!0,!1,!1)},react_default.a.createElement(StyledGelWrapperGrid,{dir:oppDir,columns:getGroups(6,6,6,6,6,6),enableGelGutters:!0},react_default.a.createElement(Grid.j,{item:!0,columns:getGroups(6,6,4,4,4,4)},react_default.a.createElement(OnDemandHeading_StyledRadioHeadingContainer,{idAttr:"content",brandTitle:brandTitle,releaseDateTimeStamp:releaseDateTimeStamp}),react_default.a.createElement(OnDemandParagraph.a,{text:summary})),react_default.a.createElement(Grid.j,{item:!0,columns:getGroups(0,0,2,2,2,2)},react_default.a.createElement(containers_OnDemandImage,{imageUrl:imageUrl}))),mediaIsAvailable?react_default.a.createElement(AVPlayer.a,{assetId:episodeId,embedUrl:embedUrl,iframeTitle:iframeTitle,title:"On-demand radio",type:"audio",skin:"audio",placeholderSrc:audioPlaceholderImageSrc}):react_default.a.createElement(MediaError,{skin:"audio"}),react_default.a.createElement(LinkedData.a,{type:"WebPage",seoTitle:headline,entities:mediaIsAvailable?[{"@type":"AudioObject",name:promoBrandTitle,description:shortSynopsis,thumbnailUrl:thumbnailImageUrl,duration:durationISO8601,uploadDate:new Date(releaseDateTimeStamp).toISOString(),embedURL:embedUrl}]:[]}),react_default.a.createElement(containers_RecentAudioEpisodes,{episodes:recentEpisodes}))),radioScheduleData&&react_default.a.createElement(RadioSchedule.a,{initialData:radioScheduleData}))};OnDemandRadioPage_OnDemandRadioPage.__docgenInfo={description:"",methods:[],displayName:"OnDemandRadioPage",props:{MediaError:{type:{name:"func"},required:!0,description:""},mediaIsAvailable:{type:{name:"bool"},required:!0,description:""},pageData:{type:{name:"shape",value:{brandTitle:{name:"string",required:!1},headline:{name:"string",required:!1},summary:{name:"string",required:!1},language:{name:"string",required:!1},releaseDateTimeStamp:{name:"number",required:!1},imageUrl:{name:"string",required:!1}}},required:!0,description:""}}};var pages_OnDemandRadioPage_OnDemandRadioPage=OnDemandRadioPage_OnDemandRadioPage;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/pages/OnDemandRadioPage/OnDemandRadioPage.jsx"]={name:"OnDemandRadioPage",docgenInfo:OnDemandRadioPage_OnDemandRadioPage.__docgenInfo,path:"src/app/pages/OnDemandRadioPage/OnDemandRadioPage.jsx"});var applyBasicPageHandlers=__webpack_require__(178),withMediaError=__webpack_require__(1676);__webpack_exports__.default=pipe_default()(withMediaError.a,Object(applyBasicPageHandlers.a)({addVariantHandling:!1}))(pages_OnDemandRadioPage_OnDemandRadioPage)}}]);
//# sourceMappingURL=OnDemandRadioPage.623a7711acdd1649c9f9.bundle.js.map