"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[9432],{9898:(e,l,t)=>{t.r(l),t.d(l,{default:()=>v});var a=t(8661),i=t(5441),d=t(512),n=t(9801),_=t(477),c=t(1055),s=t(5482),o=t(6241),m=t(9927),u=t(4481),r=t(3067),g=t(3285),h=t(394),f=t(4057);function v(e){let{className:l,contentDetails:t,contentType:v="game",thumbSize:T=40,href:p="",showPlayButton:y=!1,unavailableContent:E=!1,children:N,onClick:w}=e;const b=(0,i.I0)(),{isMobile:A}=(0,a.useContext)(g.k),$=(0,i.v9)(o.lH),B=(0,i.v9)(c.B),D=(0,i.v9)(s.jL),Z=(0,a.useRef)(null),x="game"===v?T:64,L="game"===v?T:64,k=(null==t?void 0:t.imageAlt)&&D>=.5?null==t?void 0:t.imageAlt:null==t?void 0:t.image,C=null==k?void 0:k.path,S=C?(0,u.u2)({width:x,height:L,image:k}):void 0,U=C?(0,u.u2)({width:2*x,height:2*L,image:k}):void 0;const I=function(){const e=(0,d.Z)(f.detailedTile__img,{[f.detailedTile__img_category]:"category"===v,[f.detailedTile__img_unavailable]:E,[f.detailedTile__img_sizeS]:T<=40}),l=(0,d.Z)(f.detailedTile__titleText,{[f.detailedTile__titleText_category]:"category"===v,[f.detailedTile__titleText_with_playButton]:y});return a.default.createElement(a.default.Fragment,null,C?a.default.createElement("img",{className:e,alt:t.title,src:S,srcSet:`${S} 1x, ${U} 2x`,decoding:"async",width:T,height:T}):a.default.createElement("div",{className:e}),a.default.createElement("div",{className:(0,d.Z)(f.detailedTile__details,{[f.detailedTile__details_mobile]:A,[f.detailedTile__details_with_playButton]:y})},t.unlisted?a.default.createElement("div",{className:f.detailedTile__unlistedWrapper},a.default.createElement("div",{className:l},t.title),a.default.createElement("div",{className:f.detailedTile__unlisted},"Unlisted")):a.default.createElement("div",{className:l},t.title),t.developer&&a.default.createElement("span",{className:f.detailedTile__developer},"tr"===$.lang?`${t.developer} ${B.by}`:`${B.by} ${t.developer}`)),y&&a.default.createElement("div",{className:(0,d.Z)(f.detailedTile__playNowBtn,{[f.detailedTile__playNowBtn_unavailable]:E}),ref:Z},E?a.default.createElement(n.default,{className:f.detailedTile__mobileUnavailableIcon,name:"mobileUnavailable",width:"36",height:"36"}):a.default.createElement(n.default,{className:f.detailedTile__playIcon,name:"play",width:"36",height:"36"})),N)}();return p?a.default.createElement(_.default,{className:(0,d.Z)(f.detailedTile__link,{[f.detailedTile__link_mobile]:A,[f.detailedTile__link_category]:"category"===v},l),onClick:e=>{w&&w(e),E||e.target!==Z.current||(e.preventDefault(),e.stopImmediatePropagation(),(0,r.A)({category:"game",action:"play-now-launch"}),(0,h.Z)().push(`${p}`),(0,h.Z)().push(`${window.location.pathname}${window.location.search}#fullscreen`),b((0,m.Zx)({toggle:!0})))},to:p},I):I}}}]);