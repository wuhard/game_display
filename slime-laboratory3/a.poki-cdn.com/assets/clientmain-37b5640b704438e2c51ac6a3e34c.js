"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[8556],{8387:(t,l,e)=>{e.r(l),e.d(l,{default:()=>m});var n=e(8661),c=e(5441),o=e(278),a=e(6727),i=e(5665),h=e(9853),r=e(4481),d=e(3285);const s=(0,a.ZP)({resolved:{},chunkName:()=>"app-components-Pill",isReady(t){const l=this.resolve(t);return!0===this.resolved[l]&&!!e.m[l]},importAsync:()=>Promise.all([e.e(7222),e.e(3541),e.e(5939),e.e(4552)]).then(e.bind(e,5425)),requireAsync(t){const l=this.resolve(t);return this.resolved[l]=!1,this.importAsync(t).then((t=>(this.resolved[l]=!0,t)))},requireSync(t){const l=this.resolve(t);return e(l)},resolve(){return 5425}}),v=(0,a.ZP)({resolved:{},chunkName:()=>"app-components-PillFilter",isReady(t){const l=this.resolve(t);return!0===this.resolved[l]&&!!e.m[l]},importAsync:()=>Promise.all([e.e(1828),e.e(9142),e.e(5353),e.e(3549)]).then(e.bind(e,8691)),requireAsync(t){const l=this.resolve(t);return this.resolved[l]=!1,this.importAsync(t).then((t=>(this.resolved[l]=!0,t)))},requireSync(t){const l=this.resolve(t);return e(l)},resolve(){return 8691}});function m(){const{isMobile:t}=(0,n.useContext)(d.k),l=(0,c.v9)(h.dY);let e=n.default.createElement(o.Z,{on:"mouseover"},n.default.createElement(s,null));return t&&(e=n.default.createElement(o.Z,{whenIdle:!0},n.default.createElement(s,null))),l.includes(r.Dj)&&(e=n.default.createElement(o.Z,{whenIdle:!0},n.default.createElement(v,null))),n.default.createElement(n.default.Fragment,null,e,n.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",style:{display:"none"},dangerouslySetInnerHTML:{__html:i.default}}))}},5181:(t,l,e)=>{e.r(l),e.d(l,{default:()=>a,getVideo:()=>o});var n=e(8661),c=e(7);function o(t){let{videoUrl:l,videoSize:e}=t;return{h264:`https://v.poki-cdn.com/${l}.${e}.h264.mp4`,h265:`https://v.poki-cdn.com/${l}.${e}.h265.mp4`,vp9:`https://v.poki-cdn.com/${l}.${e}.vp9.mp4`}}function a(t,l){let{videoUrl:e,videoSize:a}=t;const{h264:i,h265:h,vp9:r}=o({videoUrl:e,videoSize:a});return n.default.createElement("video",{loop:!0,muted:!0,ref:l,className:c.tileVideo,autoPlay:!0,playsInline:!0},n.default.createElement("source",{src:r,type:'video/mp4; codecs="vp09.00.10.08"'}),n.default.createElement("source",{src:h,type:'video/mp4; codecs="hvc1.1.6.L63.90"'}),n.default.createElement("source",{src:i,type:"video/mp4"}))}},5665:(t,l,e)=>{e.r(l),e.d(l,{default:()=>n});const n='\n\t<symbol id="arrowIcon" viewBox="6 0 14 24">\n\t\t<path d="M9 19.91a2 2 0 0 1-1.403-3.424L12.15 12 7.597 7.514a2 2 0 1 1 2.806-2.85l6 5.91a2 2 0 0 1 0 2.85l-6 5.911A1.993 1.993 0 0 1 9 19.911z"></path>\n\t</symbol>\n\t<symbol id="closeIcon" viewBox="0 0 16 16">\n\t\t<path d="M4.2 1.3c-.8-.8-2.1-.7-2.8 0-.7.8-.7 2 0 2.8L5.3 8l-3.9 3.9c-.8.8-.8 2 0 2.8s2 .8 2.8 0l3.9-3.9 3.7 3.7c.8.8 2 .8 2.8 0s.8-2 0-2.8L10.9 8l3.7-3.7c.8-.8.8-2 0-2.8s-2-.8-2.8 0L8.1 5.1 4.2 1.3z"></path>\n\t</symbol>\n\t<symbol id="closeWideIcon" viewBox="0 0 36 36">\n\t\t<rect x="8" y="24.971" width="24" height="4" rx="2" transform="rotate(-45 8 24.97)" fill="currentColor"></rect>\n\t\t<rect x="10.828" y="8" width="24" height="4" rx="2" transform="rotate(45 10.828 8)" fill="currentColor"></rect>\n\t</symbol>\n\t<symbol id="favIcon" viewBox="0 0 36 36">\n\t\t<g fill="none">\n\t\t\t<path d="M18.0837 0C12.3552 0 7.6096 1.9567 4.3607 5.657 1.5489 8.86 0 13.224 0 17.945c0 4.8601 1.578 9.3005 4.444 12.5035C7.694 34.081 12.4103 36 18.0837 36c5.551 0 10.2023-1.914 13.4495-5.5361C34.4134 27.2512 36 22.8445 36 18.0556c0-4.8365-1.5852-9.2762-4.4637-12.5017C28.2945 1.921 23.6426 0 18.0837 0z" fill="#002b50"></path>\n\t\t\t<path d="M18.0002 30.2865c-6.7867 0-12.3074-5.5782-12.3074-12.4339 0-6.5792 5.636-12.1375 12.3074-12.1375 6.6715 0 12.3076 5.5583 12.3076 12.1375 0 6.8557-5.5216 12.4339-12.3076 12.4339" fill="#fff"></path>\n\t\t\t<path d="M17.9182 18.8012c-5.4178 0-8.1573.939-9.2878 1.2275.9465 4.3075 4.7498 7.5394 9.2878 7.5394 4.5374 0 8.3411-3.2319 9.2878-7.5394-1.1304-.2884-3.8702-1.2275-9.2878-1.2275" fill="#009cff"></path>\n\t\t</g>\n\t</symbol>\n\t<symbol id="fireIcon" viewBox="0 0 24 24">\n\t\t<path d="M10.9828 20.0414c-.7856.6508-1.2665 1.5768-1.3389 2.5696-.0774 1.0614-1.2047 1.7069-2.1592 1.2363-3.3837-1.6679-5.5127-5.0707-5.4843-8.759-.0344-3.5216 2.3036-6.8544 5.5934-9.672 1.2717-.9823 2.0509-2.4393 2.1479-4.007C9.8114.2816 11.0557-.367 12.02.2215c1.6728 1.0207 2.7725 2.5369 3.3761 4.3736.5424 1.6504.6382 3.352.4845 4.8893-.024.241-.0494.4224-.069.5348-.1422.8161-.919 1.3625-1.7352 1.2203-.8161-.1422-1.3625-.9191-1.2203-1.7352.0075-.0431.0229-.1528.0394-.3184.1156-1.1565.042-2.463-.3494-3.6541-.131-.3989-.2933-.768-.4892-1.106-.562 1.3001-1.4444 2.4485-2.57 3.3164-2.6095 2.237-4.5099 4.946-4.4867 7.343-.0148 1.9297.8207 3.7436 2.2458 5.017.4234-.912 1.0586-1.7369 1.8806-2.4166.607-.4545.9976-1.1222 1.0886-1.8526.129-1.0362 1.2507-1.6268 2.178-1.1468 2.1897 1.1334 3.8037 3.0503 4.5453 5.3023 1.2283-1.0917 1.9863-2.6305 2.0567-4.2888.0779-2.548-.8015-5.0377-2.4761-7.0039-.5372-.6306-.4614-1.5773.1693-2.1145.6307-.5372 1.5774-.4614 2.1145.1693 2.156 2.5313 3.2916 5.7465 3.1902 9.0585-.1474 3.4788-2.2822 6.5725-5.509 7.9895-.9614.4222-2.0479-.2486-2.1012-1.2972-.0804-1.5807-.7809-3.0497-1.9231-4.1271-.378.651-.8805 1.2214-1.4771 1.6671z"></path>\n\t</symbol>\n\t<symbol id="closeFullscreenIcon" viewBox="0 0 24 24">\n\t\t<path d="M5.25 15.5a1.25 1.25 0 1 1 0-2.5h4.5a1.25 1.25 0 1 1 0 2.5h-4.5zM14.25 15.5a1.25 1.25 0 1 1 0-2.5h4.5a1.25 1.25 0 1 1 0 2.5h-4.5zM5.25 11a1.25 1.25 0 1 1 0-2.5h4.5a1.25 1.25 0 1 1 0 2.5h-4.5zM14.25 11a1.25 1.25 0 1 1 0-2.5h4.5a1.25 1.25 0 1 1 0 2.5h-4.5z" fill="#fff"/><path d="M14.25 20c-.69 0-1.25-.56-1.25-1.25v-4.5a1.25 1.25 0 1 1 2.5 0v4.5c0 .69-.56 1.25-1.25 1.25zM14.25 11c-.69 0-1.25-.56-1.25-1.25v-4.5a1.25 1.25 0 1 1 2.5 0v4.5c0 .69-.56 1.25-1.25 1.25zM9.75 11c-.69 0-1.25-.56-1.25-1.25v-4.5a1.25 1.25 0 1 1 2.5 0v4.5c0 .69-.56 1.25-1.25 1.25zM9.75 20c-.69 0-1.25-.56-1.25-1.25v-4.5a1.25 1.25 0 1 1 2.5 0v4.5c0 .69-.56 1.25-1.25 1.25z" fill="#fff"/>\n\t</symbol>\n\t<symbol id="enterFullscreenIcon" viewBox="0 0 24 24">\n\t\t<path d="M5.25 20a1.25 1.25 0 1 1 0-2.5h4.5a1.25 1.25 0 1 1 0 2.5h-4.5zM14.25 20a1.25 1.25 0 1 1 0-2.5h4.5a1.25 1.25 0 1 1 0 2.5h-4.5zM5.25 6.5a1.25 1.25 0 1 1 0-2.5h4.5a1.25 1.25 0 1 1 0 2.5h-4.5zM14.25 6.5a1.25 1.25 0 1 1 0-2.5h4.5a1.25 1.25 0 1 1 0 2.5h-4.5z" fill="#009CFF"/><path d="M5.25 11C4.56 11 4 10.44 4 9.75v-4.5a1.25 1.25 0 1 1 2.5 0v4.5c0 .69-.56 1.25-1.25 1.25zM18.75 11c-.69 0-1.25-.56-1.25-1.25v-4.5a1.25 1.25 0 1 1 2.5 0v4.5c0 .69-.56 1.25-1.25 1.25zM5.25 20C4.56 20 4 19.44 4 18.75v-4.5a1.25 1.25 0 1 1 2.5 0v4.5c0 .69-.56 1.25-1.25 1.25zM18.75 20c-.69 0-1.25-.56-1.25-1.25v-4.5a1.25 1.25 0 1 1 2.5 0v4.5c0 .69-.56 1.25-1.25 1.25z" fill="#009CFF"/>\n\t</symbol>\n\t<symbol id="homeIcon" viewBox="0 0 20 17">\n\t\t<path d="M6 7.6061V14h8V7.6409L9.9826 3.6235zm-3 3l-.4394.4394c-.586.586-1.535.586-2.121 0s-.586-1.536 0-2.121l8.469-8.47c.005-.005.006-.011.011-.016.293-.293.678-.439 1.063-.438.385-.001.77.145 1.064.438.004.005.005.011.01.016l8.469 8.47c.586.585.586 1.535 0 2.121-.585.586-1.535.586-2.121 0L17 10.6409V15.5c0 .8284-.6716 1.5-1.5 1.5h-11c-.8284 0-1.5-.6716-1.5-1.5zM9 10h2v4H9z"></path>\n\t</symbol>\n\t<symbol id="playIcon" viewBox="0 0 37 37">\n\t\t<path fill-rule="evenodd" clip-rule="evenodd" d="M15.9827 22.8299L23.2833 18.1768L15.9827 13.5236V22.8299ZM12.9827 10.3035V26.05C12.9827 26.9768 14.2278 27.5059 15.1003 26.9498L27.4533 19.0766C28.1591 18.6267 28.1591 17.7269 27.4533 17.277L15.1003 9.40375C14.2278 8.84764 12.9827 9.3767 12.9827 10.3035Z"/>\n\t</symbol>\n\t<symbol id="kidsIcon" viewBox="0 0 1628 709">\n\t\t<g fill="none">\n\t\t\t<path d="M1627.735 189.112c2.0763 0-8.695 42.2868-9.7463 45.3772-5.1748 15.1598-13.9985 26.8349-24.4857 38.878-13.4187 15.414-36.3317 22.3395-56.0673 27.4775a1.1639 1.1639 0 0 1-.3163.0438c-5.8776.0234-14.019 1.3641-19.759 0-10.3788-2.474-21.598-12.1395-30.9841-17.4148-11.5883-6.5166-32.592-13.5036-41.9516-23.3063-1.4028-1.4693-3.2185-7.7055-4.4046-9.5808-.7087-1.1246-4.3987-3.6103-5.6257-5.2373-2.1057-2.7953-4.797-8.0881-5.986-11.1318-6.5248-16.7634-6.9407-51.3096-2.3516-68.482 3.4264-12.8346 17.1555-21.7406 25.9001-32.5511 8.5602-10.5798 15.375-21.2179 29.069-26.4815 4.8028-1.8431 10.9557-3.622 15.8054-4.9422 7.5176-2.0476 6.7474-1.3203 14.0746-1.1012 11.2193.3359 13.445 2.2725 23.6716-1.183 7.9832-2.699 7.7636-2.9736 16.9212-2.9765.12 0 .246.0117.3631.038 7.2365 1.5422 15.9402 10.0773 22.2424 14.336 7.7139 5.2169 13.0878 10.9712 19.9318 17.7595 8.9204 8.8505 21.314 15.446 25.8475 28.2954 1.1421 3.2364-.1113 32.1831 7.8514 32.1831m-110.2425 218.1505c10.2298-34.363 64.1803 15.084 36.8746 39.7225-27.3145 24.6503-43.5343-17.3424-36.8746-39.7225M786.3452 22.7927c7.4408-12.4639 26.0238-.2252 38.3413 6.5214 6.5198 3.5736 13.6624 10.8875 21.837 10.6126 6.6339-.2222 14.0337-7.7175 19.9132-10.5337 7.6455-3.6642 16.3844-4.796 24.1176-7.9222 10.2943-4.1643 20.3255-10.3085 32.605-10.8349 8.692-.3772 18.1795 2.7753 23.8894 3.9947 6.3795 1.3628 12.3818-2.4974 19.9893-1.6318 7.0198.8013 10.4668 7.1239 12.8584 7.9076 5.8006 1.895 8.6336 1.512 14.522 2.7519 15.5452 3.2753 25.5851-11.3028 36.7916-17.8067 13.835-8.0334 33.5932-7.8316 43.7881 6.188 4.4499 6.1208 5.2568 10.6946 11.7854 15.6602 5.137 3.907 12.8701 6.8636 18.5187 10.5951 4.3417 2.8689 6.2508 6.8402 11.6246 8.2527 8.4407 2.2196 19.9892-.62 28.8217-.12 10.5691.5996 20.2641 4.0094 21.995 15.5725 2.3184 15.476 1.4062 26.7817 20.533 31.3496 22.1703 5.2932 23.3866-8.4515 39.5575-19.3127 24.2286-16.2743 64.2072-10.8028 84.708 6.109 11.2797 9.3055 14.3145 14.0109 21.0506 26.846 7.2625 13.8413 10.1365 30.5864 7.856 46.349-1.3888 9.589-6.9672 22.7606-12.6684 30.8583-8.7096 12.3702-30.1432 16.6018-33.906 32.9726-2.8418 12.3615 11.9199 32.2153 18.583 42.0062 4.2949 6.3167 4.862 6.6413 10.4083 7.308 5.6573.6756 17.7293-3.7753 21.229 3.9334 3.8709 8.5246-13.452 12.9141-17.9164 15.0958-3.8242 1.8686-4.2102.3743-6.745 1.8891-2.988 1.784-5.058 4.8107-5.9819 8.165-3.1692 11.4987-14.2997 7.0916-15.8727 17.7774-.6812 4.6352 5.3913 13.9436 6.0871 17.6926 2.7103 14.6045-21.1207 38.2863-3.9966 40.4095 2.4295.3012 4.8504-.7136 6.3648-2.6378 2.8068-3.5766 6.8912-9.0745 7.435-9.4079 7.4992-8.0391 16.7615-9.5218 22.1177-10.9635 12.5572-3.3777 17.0363-5.84 32.1606-5.8489 16.1095 4.0065 25.8542 8.3521 38.008 20.4709 7.7828 7.7526 20.9365 21.5324 24.1905 33.7125.8011 2.9887 1.9501 5.8371 3.3067 8.6153 2.7775 5.6821 1.6198 13.543.7573 20.8422.1403 12.3469-6.8766 28.9838-13.6361 39.1841-12.6128 19.0262-32.1606 23.3952-52.6264 29.244-17.5422-2.9244-35.4878.8832-50.3957-8.162-6.017-3.6467-14.8815-13.0399-19.8109-17.9821-8.733-8.9487-8.733-35.2683-16.9778-8.8697-2.9267 9.3727.187 21.082 4.827 28.627 3.9586 6.4453 10.1773 8.1386 4.4118 16.4263-6.0345 8.665-17.7176 3.7784-25.9857 7.0274-11.9287 4.6936-14.329 13.5458-16.2645 24.5065-1.7396 9.8347 1.2776 15.9643-3.6985 24.4129-4.251 7.2145-15.1213 15.6456-21.9657 20.6521-6.128 4.4831-14.8932 8.282-19.1355 14.742-3.4032 5.182-3.0757 12.066-6.2801 17.523-3.8768 6.6091-10.2388 8.7235-15.8406 12.6948-8.2418 5.846-14.6535 11.8117-22.1118 18.684-6.5783 6.0653-15.209 9.4488-24.1526 9.4956-14.8962.0702-28.2429.3597-43.3671 5.2288-18.6795 6.0155-28.9036 29.478-46.4194 33.7798-8.8705 2.322-18.3988-8.4954-26.743-11.1332-13.8583-4.3808-21.7055-.2895-30.6958 10.2383-3.3798 3.9568-5.8533 13.1657-8.084 14.8326-5.175 3.8602-24.5912-3.3309-29.4737-5.8634-12.2561-6.346-35.8708-24.9042-51.0944-20.1024-8.932 2.8162-5.8474 15.6105-14.908 18.0787-10.4258 2.8425-18.045-7.6444-23.0445-13.6424-6.6981-8.0333-31.9617-24.1321-43.864-18.7659-5.789 2.6086-7.5637 12.7241-14.4782 15.8006-8.1278 3.6204-16.4516.7282-19.9162-7.8345-3.4704-8.5831 4.4382-17.5025.4006-25.1148-8.4407-14.9086-19.2905-9.4692-25.6232-9.6125-7.2332-.1667-26.6728.5527-30.0175-15.5636-11.227-54.081-49.2817-24.8253-52.2054-54.0694-3.2512-32.534 0-40.9416-32.1606-61.4124-35.3153-22.4828 2.9237-49.7149-26.3132-90.6566-5.5112-7.7204-17.5422-14.274-17.5422-23.3952 0-8.7732 17.5422-23.3952 11.6948-40.9416-1.9618-5.8956-17.5421-17.5465-16.4575-29.3406.7163-7.8286 10.5721-19.8128 15.209-26.15 7.7859-10.639 9.8149-26.3694-1.605-37.8652-2.1957-2.2108-3.9938-6.7232-4.1868-9.8348-1.4209-22.6348 10.2534-25.4569 31.7747-23.5122 9.4581.8569 15.0716-7.3402 17.1445-14.312 2.181-7.3373 0-17.9207 0-25.6646-.7981-11.8847-3.2453-23.2987 7.2362-29.0071 8.0576-4.3925 18.6502-1.0528 26.591-7.1677 9.5224-7.3344 7.0635-17.2336 10.8877-26.8548 4.0464-10.1857 11.572-13.3675 21.0477-16.9704 16.3872-6.2319 37.5752-11.3554 50.5769-23.7812 8.5693-8.1883 23.3661-30.3495 16.6153-38.1869-6.4058-7.4338-2.3653-18.8858 0-22.8483" fill="#D901FF"></path>\n\t\t\t<g fill="#FFF">\n\t\t\t\t<path d="M914.5672 244.5705c-.7178-3.1076-1.7917-5.3886-3.2274-6.8226-1.4386-1.437-3.5922-2.7513-6.4607-3.9517-2.8714-1.1945-6.341-1.7962-10.406-1.7962h-17.9433c-4.0708 0-7.5346.6017-10.406 1.7962-2.8685 1.2004-5.025 2.5147-6.4578 3.9517-1.4357 1.434-2.5124 3.715-3.2303 6.8226-.7178 3.1135-1.138 5.6281-1.2577 7.544-.1226 1.919-.178 4.79-.178 8.619v197.533c0 3.832.0554 6.7088.178 8.619.1196 1.9217.5399 4.4335 1.2577 7.544.7179 3.1134 1.7946 5.3886 3.2303 6.8256 1.4328 1.434 3.5893 2.7541 6.4578 3.9487 2.8714 1.2033 6.3352 1.7962 10.406 1.7962h17.9434c4.0649 0 7.5345-.5929 10.406-1.7962 2.8684-1.1946 5.022-2.5147 6.4606-3.9487 1.4357-1.437 2.5096-3.7122 3.2274-6.8256.7179-3.1105 1.1322-5.6223 1.2577-7.544.1167-1.9102.1751-4.787.1751-8.619v-197.533c0-3.829-.0584-6.7-.175-8.619-.1256-1.9159-.54-4.4305-1.2578-7.544M885.5 213c16.8172 0 30.5-14.528 30.5-32.384C916 163.4785 902.0317 149 885.5 149c-16.5347 0-30.5 14.4785-30.5 31.616C855 198.472 868.6798 213 885.5 213M1028.1884 420.0422C1024.9826 430.6807 1017.0783 436 1004.4841 436c-4.7537 0-7.1276-5.9725-7.1276-17.9321 0-14.3452-.0608-35.739-.1739-64.19-.1246-28.4483-.1826-49.3667-.1826-62.7582 0-4.0623.4754-6.932 1.426-8.6088.948-1.6681 2.9682-2.5109 6.058-2.5109 5.2261 0 9.6261 1.1403 13.1914 3.4091 3.5652 2.2747 6.3507 5.261 8.3768 8.9646 2.0145 3.7095 3.5623 9.1455 4.6319 16.3166 1.0695 7.174 1.7217 14.1672 1.9594 20.9796.2348 6.8153.3565 15.9578.3565 27.4333 0 31.3208-1.6029 52.3033-4.8116 62.939m63.845-138.478c-3.588-11.493-8.608-20.591-15.069-27.2968-6.4552-6.703-15.1244-12.0888-26.0017-16.1631-10.886-4.0686-24.0969-6.1043-39.6384-6.1043h-53.803c-4.0721 0-7.5345.5987-10.4019 1.7962-2.8703 1.2004-5.023 2.5118-6.4581 3.9488-1.4352 1.437-2.5115 3.7151-3.2262 6.8257-.7175 3.1134-1.1376 5.6281-1.2572 7.5412-.1196 1.9189-.1779 4.7929-.1779 8.619V458.269c0 3.832.0583 6.706.178 8.619.1195 1.9218.5396 4.4307 1.2571 7.5442.7147 3.1105 1.791 5.3886 3.2262 6.8256 1.4351 1.434 3.5878 2.7542 6.4581 3.9459 2.8674 1.2033 6.3298 1.7962 10.4018 1.7962h53.8031c11.4782 0 21.7575-1.1332 30.8467-3.4085 9.0892-2.2752 16.7404-5.2105 22.9622-8.803 6.2131-3.5895 11.5307-8.5576 15.9586-14.9042 4.4221-6.3409 7.9458-12.7518 10.5827-19.2153 2.6282-6.4635 4.6613-14.4194 6.0964-23.8854 1.4352-9.4543 2.3307-18.4325 2.6895-26.9347.3587-8.4933.5396-18.6135.5396-30.3489 0-16.9984-.6009-31.3653-1.794-43.0978-1.1988-11.7295-3.5878-23.345-7.1727-34.838M1235.4099 367.9526c-7.066-13.547-20.646-28.5974-40.7517-45.1457-6.9462-5.754-11.5537-10.487-13.8224-14.208-2.2832-3.715-3.4132-8.454-3.4132-14.208 0-9.589 5.1447-14.3894 15.44-14.3894 3.8249 0 9.2732.664 16.3333 1.9775 7.0572 1.3222 11.3113 1.9804 12.7508 1.9804h2.8701c9.0923 0 13.6443-3.598 13.6443-10.7913v-27.6993c0-5.0373-4.4878-8.8694-13.4632-11.511-8.9784-2.6385-21.1307-3.9578-36.448-3.9578-7.1797 0-13.5245.3598-19.0254 1.0794-5.5096.7196-11.9128 2.5801-19.2123 5.5756-7.3024 3.0013-13.4048 7.0148-18.31 12.0491-4.9112 5.0373-9.0982 12.5348-12.5669 22.4836-3.4716 9.9547-5.206 21.644-5.206 35.074 0 9.5919 2.0935 18.587 6.2805 26.9767 4.187 8.3985 8.9784 15.5303 14.3654 21.4042 5.3841 5.8798 14.8998 15.5302 28.544 28.9572 6.9404 6.7193 12.0822 12.4704 15.44 17.2678 3.349 4.8004 5.3227 8.2727 5.9213 10.4286.5956 2.1618.9022 4.9203.9022 8.2756 0 5.2771-2.5782 9.7733-7.7229 13.4913-5.1476 3.721-10.4762 5.5726-15.9771 5.5726-7.6616 0-15.3202-.898-22.9789-2.697-7.6645-1.7991-12.5668-2.6972-14.7216-2.6972-8.8587 0-13.2822 2.8785-13.2822 8.6354v27.6964c0 6.7164 5.022 11.6338 15.0779 14.7463 10.0528 3.1154 22.497 4.6804 37.3413 4.6804 12.926 0 24.4154-1.3222 34.4654-3.9608 16.7567-4.5488 29.563-13.544 38.4217-26.9768 6.4644-9.8318 9.6937-25.0578 9.6937-45.6839 0-16.0655-3.5359-30.8732-10.5901-44.426M792.716 346.1657c-.0528-.2366-.0557-.4877.0527-.7068l34.9487-70.166c3.0542-5.8559 5.47-10.6224 7.2006-14.2002 4.079-8.1399 6.12-14.4836 6.12-19.0369 0-3.1075-1.139-5.444-3.4201-7.0037-2.284-1.5538-4.6794-2.4504-7.2006-2.6929-2.5213-.2365-6.4246-.3592-11.7043-.3592h-20.8843c-3.1215 0-5.8214.4206-8.1025 1.2559-2.284.8411-4.1405 1.7962-5.5813 2.874-1.4377 1.0776-2.9429 3.1163-4.5007 6.107-1.5637 2.9937-2.8228 5.5084-3.7804 7.5412-.9604 2.0357-2.4011 5.628-4.3191 10.7743-1.9268 5.152-6.9664 18.4965-10.085 28.5524-3.1215 10.0558-6.363 18.441-9.7218 25.141-3.3645 6.7059-6.6032 10.0559-9.7218 10.0559-.9634 0-1.5022-2.6316-1.6222-7.9004-.123-5.263-.1787-23.8239-.1787-55.6678 0-3.829-.0615-6.7-.1786-8.6218-.126-1.913-.5417-4.4277-1.262-7.5412-.7204-3.1105-1.801-5.3886-3.2417-6.8256-1.4407-1.434-3.5988-2.7483-6.4802-3.9487-2.8814-1.1945-6.3631-1.7962-10.4422-1.7962h-18.0058c-4.085 0-7.5608.6017-10.4422 1.7962-2.8785 1.2004-5.0424 2.5147-6.4802 3.9487-1.4407 1.437-2.5212 3.7151-3.2416 6.8256-.7203 3.1135-1.142 5.6281-1.2591 7.5412-.123 1.9218-.1816 4.7928-.1816 8.6218v197.533c0 3.832.0586 6.7088.1816 8.619.117 1.9217.5388 4.4335 1.2591 7.544.7204 3.1105 1.8009 5.3886 3.2416 6.8256 1.4378 1.434 3.6017 2.7541 6.4802 3.9458C693.044 486.407 696.5198 487 700.6047 487h18.0058c4.0791 0 7.5608-.5929 10.4422-1.7991 2.8814-1.1917 5.0395-2.5118 6.4802-3.9458 1.4407-1.437 2.5213-3.7151 3.2416-6.8256.7204-3.1105 1.1362-5.6223 1.2621-7.544.1171-1.9102.1786-4.787.1786-8.619V404.395c0-2.1583-.123-5.2104-.3601-9.1592-.243-3.9516-.3602-6.6445-.3602-8.0814 0-5.266.9575-7.9004 2.8814-7.9004 1.918 0 3.7804 1.139 5.5812 3.4113 1.801 2.2752 3.719 6.0487 5.7629 11.3117 2.035 5.2718 3.959 10.5962 5.7598 15.9848 1.801 5.3857 4.1962 12.9298 7.2006 22.6264 2.9986 9.6966 5.8185 18.3768 8.4627 26.0377 4.322 12.6932 8.1025 20.5965 11.344 23.704 3.2387 3.1164 10.2607 4.6702 21.063 4.6702h18.7262C838.757 487 845 483.4076 845 476.2228c-.7145-11.633-51.9649-129.3328-52.284-130.057"></path>\n\t\t\t</g>\n\t\t\t<path d="M542.0015 326C562.9519 326 580 308.7474 580 287.5435 580 267.1915 562.5987 250 542.0015 250 521.4013 250 504 267.1916 504 287.5435 504 308.7474 521.0452 326 542.0015 326" fill="#002B50"></path>\n\t\t\t<path d="M255.5 463c-47.1482 0-85.5-39.2787-85.5-87.5472C170 329.1387 209.1428 290 255.5 290c46.3397 0 85.5 39.1387 85.5 85.4528C341 423.7213 302.6452 463 255.5 463zM85.785 402.9706c-4.03 0-26.5077.0294-29.785.0294v-53c7.953 0 24.2004.05 28.9686.05 7.51 0 20.0314 5.1348 20.0314 25.4453 0 13.0194-5.3212 27.4753-19.215 27.4753zm418.1-63.6899v110.384l-33.9785-73.8017c15.3584-19.2203 21.6187-46.3298 22.3172-65.8336l.0146-15.9624h-60.2296v15.3868c-.8388 19.6265-7.2218 28.7896-24.7722 34.4873V240l-61.2525.0643v44.2845c-22.3026-22.7968-53.1188-34.797-89.5231-34.797-39.85 0-72.87 13.803-95.4678 39.887-6.801 7.857-12.5176 16.725-17.1149 26.3205-14.8002-15.1998-35.4106-21.6923-59.873-21.6923H0V513h56.0035v-52.2467h28.0017c24.3835 0 44.9939-8.1375 59.8555-23.5243 4.723 9.9345 10.6413 19.0655 17.7082 27.0803 22.6124 25.6164 55.4277 39.1419 94.892 39.1419 38.6284 0 70.976-13.4934 93.5739-39.0338 1.5694-1.7736 3.06-3.6203 4.5037-5.4815h52.698v-54.3476l8.0752-1.8641 25.9705 56.2117H578V339.2807h-74.115z" fill="#002B50"></path>\n\t\t\t<path d="M256 382c-37.9142 0-57.0864 6.6429-65 8.6819C197.623 421.1414 224.2434 444 256 444s58.377-22.8586 65-53.3181c-7.9106-2.039-27.0828-8.6819-65-8.6819" fill="#D901FF"></path>\n\t\t</g>\n\t</symbol>\n\t<symbol id="pokiIcon" viewBox="0 0 578.88 273.16">\n\t\t<path fill="#002b50" d="M541 85.8c21 0 38-17.4 38-38.7 0-20.4-17.4-37.7-38-37.7S503.5 26.6 503.5 47c0 21.4 17 38.8 37.7 38.8z"></path>\n\t\t<path fill="#002b50" d="M504 99.3v110.5L470 136c15.4-19.3 21.7-46.4 22.4-66V54h-60.2v15.5c-1 19.6-7.3 28.8-24.8 34.5V0H346v44.4C324 21.6 293 9.6 256.7 9.6c-40 0-73 13.8-95.6 40a118 118 0 0 0-17 26.2C129 60.6 108.4 54 84 54H0v219.2h56V221h28c24.4 0 45-8.3 60-23.7a116.3 116.3 0 0 0 17.6 27c22.7 25.8 55.5 39.3 95 39.3 38.6 0 71-13.5 93.6-39l4.5-5.6h52.7v-54.3l8-2 26 56.4h136.8V99.4h-74zm-418 64H56v-53h29.2c7.6 0 20.3 5.2 20.3 25.5 0 13-5.4 27.3-19.4 27.3zm170 60c-47.3 0-85.7-39.4-85.7-87.8C170.3 89 209.5 50 256 50s85.6 39 85.6 85.5c0 48.4-38.4 87.8-85.6 87.8z"></path>\n\t\t<path fill="#009cff" d="M256 142c-38 0-57 6.5-65 8.6 6.7 30.5 33.2 53.3 65 53.3s58.3-23 65-53.4c-8-2-27.2-8.7-65-8.7z"></path>\n\t</symbol>\n\t<symbol id="searchIcon" viewBox="0 0 16 16">\n\t\t<path d="M12.6162 11.179l2.2383 2.2384c.5858.5858.5858 1.5356 0 2.1213-.5858.5858-1.5355.5858-2.1213 0l-2.3882-2.3881C9.3512 13.6922 8.2115 14 7 14c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7c0 1.5665-.5145 3.0127-1.3838 4.179zM7 11c2.2091 0 4-1.7909 4-4S9.2091 3 7 3 3 4.7909 3 7s1.7909 4 4 4z"></path>\n\t</symbol>\n\t<symbol id="spinnerIcon" viewBox="0 0 20 20">\n\t\t<circle stroke="#BAC9DE" stroke-width="2" opacity=".25" cx="10" cy="10" r="9" fill="#FFF"></circle>\n\t\t<path d="M2.957 17.1a1 1 0 011.414-1.415A8 8 0 1015.685 4.371a1 1 0 011.414-1.414c3.905 3.905 3.905 10.237 0 14.142-3.905 3.905-10.237 3.905-14.142 0z" fill="#009CFF"></path>\n\t</symbol>\n\t<symbol id="thumbsUpIcon" viewBox="0 0 36 36">\n\t\t<path d="M29.9 16.29c.99-2.66-.61-5.98-5.28-5.98-1.58 0-3.82.18-3.99.19.17-7.07-7.37-6.53-7.48-1.03 0 1.52-.73 2.69-3.71 3.26-2.56.49-4 2.45-4 4.66v6.16c0 5.48 6.42 3.73 8.15 4.82 2.77 1.75 7.25 1.63 10.16 1.12 4.34-.77 5.63-3.71 4.93-5.41 1.13-.6 1.48-2.91.53-3.86 1.45-.6 1.8-3.07.69-3.93zm-14.5 9.75c-.88-.56-1.97-1.07-4.36-1.07-2.02 0-2.6-.87-2.6-2.99v-4.45c0-.9.2-1.59 1.55-1.85 2.39-.45 6.16-1.86 6.16-6.2 0-.83.3-1.13.77-1.13.65 0 .92 1.48.94 2.39.05 3.21-.39 3.82-.41 4.66-.04 1.37 1.45 1.48 1.87 1.14.48-.39.81-1.06 1.15-3.04.6-.05 3.27-.14 5.19-.17 2.52-.03 1.83 2.02 1.83 2.02h-3.73a1.25 1.25 0 0 0 0 2.5h3.4c.69 0 .54 1.14 0 1.14h-4.01c-1.64.03-1.64 2.47 0 2.5h3.57c.74 0 .59 1.14-.14 1.14h-3.5c-1.64.03-1.64 2.47 0 2.5h2.78c-1.35 2.81-8.8 1.98-10.46.93z" />\n\t</symbol>\n\t<symbol id="alertIcon" viewBox="0 0 40.8 40.8">\n\t\t<path d="M24.5 40.4C13.5 42.7 2.7 35.6.4 24.5-1.9 13.5 5.2 2.7 16.3.4c11-2.3 21.8 4.8 24.1 15.9s-4.8 21.8-15.9 24.1zm-1-5c8.3-1.7 13.6-9.8 11.9-18.1-1.7-8.2-9.8-13.6-18.1-11.9C9.1 7.1 3.7 15.2 5.4 23.5c1.7 8.3 9.8 13.6 18.1 11.9zm-7.5-24c-.2-1.2.5-2.3 1.7-2.5l.8-.2c1.2-.2 2.3.5 2.5 1.7l2.2 10.8c.2 1.2-.5 2.3-1.7 2.5l-.8.2c-1.2.2-2.3-.5-2.5-1.7L16 11.4zm6.8 20.7c1.6-.3 2.6-1.9 2.3-3.5-.3-1.6-1.9-2.6-3.5-2.3-1.6.3-2.6 1.9-2.3 3.5.3 1.6 1.9 2.6 3.5 2.3z" fill-rule="evenodd" clip-rule="evenodd" fill="#002b50"></path>\n\t</symbol>\n\t<symbol id="sparkle1Icon" viewBox="0 0 80 160" fill="none">\n\t\t<path fill-rule="evenodd" clip-rule="evenodd" d="M30 15H32.5V22.5H30V15ZM22.5 22.5H25V25H22.5V22.5ZM40 22.5H37.5V25H40V22.5ZM40 37.5H37.5V40H40V37.5ZM25 37.5H22.5V40H25V37.5ZM30 40H32.5V47.5H30V40ZM47.5 30H40V32.5H47.5V30ZM22.5 30H15V32.5H22.5V30ZM22.5 120H25V122.5H22.5V120ZM20 122.5H22.5V135H20V122.5ZM17.5 120H20V122.5H17.5V120ZM17.5 117.5V120H5V117.5H17.5ZM20 115H17.5V117.5H20V115ZM22.5 115H20V102.5H22.5V115ZM22.5 115V117.5H25V120H37.5V117.5H25V115H22.5Z" fill="white"></path>\n\t</symbol>\n\t<symbol id="sparkle2Icon" viewBox="0 0 80 160" fill="none">\n\t\t<path fill-rule="evenodd" clip-rule="evenodd" d="M60 27.5H57.5V17.5H60V27.5ZM62.5 30H60V27.5H62.5V30ZM62.5 32.5V30H72.5V32.5H62.5ZM60 35V32.5H62.5V35H60ZM57.5 35H60V45H57.5V35ZM55 32.5H57.5V35H55V32.5ZM55 30V32.5H45V30H55ZM55 30H57.5V27.5H55V30ZM70 67.5H72.5V70H70V67.5ZM70 67.5H65V70H70V75H72.5V70H77.5V67.5H72.5V62.5H70V67.5ZM27.5 135H20V132.5H27.5V135ZM37.5 125H35V117.5H37.5V125ZM42.5 127.5H45V125H42.5V127.5ZM45 142.5H42.5V140H45V142.5ZM27.5 142.5H30V140H27.5V142.5ZM30 127.5H27.5V125H30V127.5ZM45 135H52.5V132.5H45V135ZM37.5 150H35V142.5H37.5V150Z" fill="white"></path>\n\t</symbol>\n\t<defs>\n\t\t<clipPath id="rotationIconPath">\n\t\t\t<path fill="#fff" transform="translate(.5 .7)" d="M0 0h25v22H0z" />\n\t\t</clipPath>\n\t</defs>\n\t<symbol id="rotationIcon" viewBox="0 0 26 28" fill="none">\n\t\t<path d="M5.6 4.4h.8l-.8.8a1 1 0 0 0 0 1.3c.2.2.4.3.7.3a1 1 0 0 0 .6-.3L9.2 4a1 1 0 0 0 0-1.3L6.9.4a1 1 0 0 0-1.5.3 1 1 0 0 0 .2 1l.8.9h-.8A5.5 5.5 0 0 0 .1 8a1 1 0 0 0 1.8 0 3.7 3.7 0 0 1 3.7-3.7ZM25.9 19.3a1 1 0 0 0-1-1 1 1 0 0 0-.8 1 3.7 3.7 0 0 1-3.8 3.7h-.9l.8-.8a1 1 0 0 0-.3-1.5 1 1 0 0 0-1 .2l-2.2 2.4a.9.9 0 0 0 0 1.2l2.2 2.4a.9.9 0 0 0 .7.3.9.9 0 0 0 .8-.5 1 1 0 0 0-.2-1l-.8-.9h1a5.6 5.6 0 0 0 5.5-5.5ZM22.5 8.6 17.9 4A3.5 3.5 0 0 0 13 4l-9.5 9.4a3.5 3.5 0 0 0 0 4.9l4.6 4.6a3.5 3.5 0 0 0 5 0l9.4-9.5a3.5 3.5 0 0 0 0-4.8ZM20 11l-9.5 9.5h-.1l-4.6-4.7a.1.1 0 0 1 0-.1l9.5-9.5a.1.1 0 0 1 .1 0l4.6 4.6a.1.1 0 0 1 0 .1Z" fill="#fff" />\n\t</symbol>\n\t<symbol id="desktopIcon" viewBox="0 0 16 16">\n\t\t<path d="M12.5 2.6h-9c-.7 0-1.2.6-1.2 1.2v6.5c0 .7.6 1.2 1.2 1.2h2.3l-.3 1.1c0 .1 0 .3.1.4.1.1.2.2.4.2h4c.2 0 .3-.1.4-.2.1-.1.1-.3.1-.4l-.4-1.1h2.4c.7 0 1.2-.6 1.2-1.2V3.9c0-.7-.5-1.3-1.2-1.3zm-3.2 9.8H6.7l.2-.7h2.2l.2.7zm2.9-2.3H3.8v-6h8.5v6z" fill="#fff" />\n\t</symbol>\n\t<symbol id="restartIcon" viewBox="-1 0 14 14">\n\t\t<path d="M.033 8.667a1 1 0 112 0h.022a4.001 4.001 0 103.151-4.588l.725.724a.975.975 0 01-1.377 1.375l-2.27-2.267a.975.975 0 010-1.377L4.555.268A.974.974 0 015.93 1.645l-.444.37C5.656 2.007 5.827 2 6 2A6 6 0 11.037 8.667z" fill="#009CFF" fill-rule="evenodd"></path>\n\t</symbol>\n\t<symbol id="reportIcon" viewBox="0 0 24 24">\n\t\t<path fill-rule="evenodd" clip-rule="evenodd" d="M7 4a1 1 0 0 1 1 1v14a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1zM9 5a1 1 0 0 1 1-1h9a1 1 0 0 1 .829 1.56L17.506 9l2.323 3.44A1 1 0 0 1 19 14h-9a1 1 0 0 1-1-1V5zm2 1v6h6.119L15.47 9.56a1 1 0 0 1 0-1.12L17.12 6H11z" />\n\t</symbol>\n\t<symbol id="starIcon" viewBox="0 0 10 10">\n\t\t<path d="M3.189 2.94L4.383.391a.682.682 0 0 1 1.234 0L6.811 2.94h2.506c.6 0 .908.72.492 1.154L7.912 6.071l.78 3.078a.682.682 0 0 1-1.001.758L5 8.357l-2.691 1.55a.682.682 0 0 1-1-.758l.779-3.078L.19 4.093a.682.682 0 0 1 .492-1.154h2.506z"></path>\n\t</symbol>\n\t<symbol id="cookiesIcon" viewBox="0 0 25 25">\n\t\t<path d="M23.5 11c-.4-.4-1 .1-1.6-.5a.6.6 0 0 1-.2-.4c0-.5-.6-.9-1-.6l-1-.1c-.2-.2-.6-.4-.6-1 0-.3-.4-.6-.7-.6-.7 0-1.2-1-.9-1.6.2-.3 0-.8-.4-.9-.2 0-1-.3-.9-1.7a.7.7 0 0 0-.7-.7 8 8 0 0 0-6.1 3.3c-4.4.3-7.9 4-7.9 8.4 0 8.9 12 11.7 16 4a8 8 0 0 0 6.2-7c0-.2 0-.4-.2-.6Zm-7 6.4c-3 7-13.5 4.9-13.6-2.8 0-3.9 3.3-7 7.1-7a7 7 0 0 1 6.5 9.8Zm1.7-4.6c1-.1 1.2 1.3.2 1.4 0-.4 0-1-.2-1.4Zm4-.2a6.6 6.6 0 0 1-4 4.4l.2-1.3c1.3 0 2.3-1.2 2.1-2.5-.1-1.2-1.5-2.2-2.7-1.8A8.5 8.5 0 0 0 11 6.2c1-1 2.4-1.7 3.9-2 0 1 .5 1.7 1.2 2.1-.2 1.1.7 2.5 1.8 2.8.3 1 1.5 1.8 2.6 1.7.3.8 1 1.2 1.8 1.3l-.1.5Z" fill="currentColor"/>\n\t\t<path d="M13.2 14.5c-3 0-3 4.5 0 4.6 3-.1 3-4.5 0-4.6Zm.8 2.7c-.5 1-2 .3-1.6-.7.5-1.1 2-.4 1.6.7ZM7.9 11.2c-1.5-1.2-3.7 0-3.7 1.8 0 1.3 1 2.4 2.3 2.4 2.3 0 3.2-3 1.4-4.2Zm-1.4 2.7c-1.1 0-1.1-1.7 0-1.7 1.2 0 1.2 1.7 0 1.7ZM11.9 9c-3.1 0-3.1 4.6 0 4.6 3 0 3-4.5 0-4.6Zm0 3.2c-1.2 0-1.2-1.7 0-1.8 1.1 0 1.1 1.8 0 1.8ZM8 15.8c-3.1 0-3.1 4.5 0 4.6 3 0 3-4.6 0-4.6ZM8 19c-1.2 0-1.2-1.8 0-1.8C9 17.2 9 18.9 8 19ZM18.4 3.6c0 1 1.4 1 1.5 0 0-.9-1.4-1-1.5 0ZM21 6.9c-.1 1 1.3 1 1.4 0 0-1-1.4-1-1.5 0ZM21.8 3.9c0 1 1.4 1 1.5 0 0-1-1.4-1-1.5 0Z" fill="currentColor"/>\n\t</symbol>\n\t<symbol id="mobileUnavailableIcon" viewBox="0 0 37 37">\n\t\t<path d="M24.5027 4.17676H13.4627C11.5327 4.17676 9.96268 5.74676 9.96268 7.67676V28.6768C9.96268 30.6068 11.5327 32.1768 13.4627 32.1768H24.5027C26.4327 32.1768 28.0027 30.6068 28.0027 28.6768V7.67676C28.0027 5.74676 26.4327 4.17676 24.5027 4.17676ZM25.0027 28.6768C25.0027 28.9568 24.7827 29.1768 24.5027 29.1768H13.4627C13.1827 29.1768 12.9627 28.9568 12.9627 28.6768V7.67676C12.9627 7.39676 13.1827 7.17676 13.4627 7.17676H24.5027C24.7827 7.17676 25.0027 7.39676 25.0027 7.67676V28.6768Z" />\n\t\t<path d="M22.8627 14.2968C22.3727 13.8068 21.5827 13.8068 21.0927 14.2968L18.9727 16.4168L16.8527 14.2968C16.3627 13.8068 15.5727 13.8068 15.0827 14.2968C14.5927 14.7868 14.5927 15.5768 15.0827 16.0668L17.2027 18.1868L15.0827 20.3068C14.5927 20.7968 14.5927 21.5868 15.0827 22.0768C15.3227 22.3168 15.6427 22.4468 15.9627 22.4468C16.2827 22.4468 16.6027 22.3268 16.8427 22.0768L18.9627 19.9568L21.0827 22.0768C21.3227 22.3168 21.6427 22.4468 21.9627 22.4468C22.2827 22.4468 22.6027 22.3268 22.8427 22.0768C23.3327 21.5868 23.3327 20.7968 22.8427 20.3068L20.7227 18.1868L22.8427 16.0668C23.3327 15.5768 23.3327 14.7868 22.8427 14.2968H22.8627Z" />\n\t</symbol>\n\t<symbol id="thinArrowIcon" viewBox="0 0 25 25">\n\t\t<path d="M9.46236 18.2603C8.97421 18.7485 8.18275 18.7485 7.69459 18.2603C7.20644 17.7722 7.20644 16.9807 7.69459 16.4926L16.5334 7.65373C17.0216 7.16557 17.813 7.16557 18.3012 7.65373C18.7894 8.14188 18.7894 8.93334 18.3012 9.4215L9.46236 18.2603Z"/>\n\t\t<path d="M18.412 8.41415C18.412 9.1045 17.8524 9.66415 17.162 9.66415L11.662 9.66414C10.9717 9.66414 10.412 9.1045 10.412 8.41414C10.412 7.72379 10.9717 7.16414 11.662 7.16414L17.162 7.16415C17.8524 7.16415 18.412 7.72379 18.412 8.41415Z"/>\n\t\t<path d="M17.5281 7.53027C18.2185 7.53027 18.7781 8.08991 18.7781 8.78027L18.7781 14.2803C18.7781 14.9706 18.2185 15.5303 17.5281 15.5303C16.8378 15.5303 16.2781 14.9706 16.2781 14.2803L16.2781 8.78027C16.2781 8.08991 16.8378 7.53027 17.5281 7.53027Z"/>\n\t</symbol>\n\t<symbol id="checkIcon" viewBox="0 0 12 10" fill="none">\n\t\t<path d="M2 5L4.66667 8L10 2" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>\n\t</symbol>\n\t<symbol id="previewIcon" viewBox="0 0 16 17" fill="none">\n\t\t<path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 8.1a8.4 8.4 0 0 0 1 1.2c1 .8 2.1 1.5 3.5 1.5s2.5-.7 3.4-1.5A8.9 8.9 0 0 0 12.5 8a8 8 0 0 0-1-1.2c-1-.8-2.1-1.5-3.5-1.5S5.5 6.1 4.6 7a8.9 8.9 0 0 0-1.1 1.2Zm9.8 0 .6-.4a3.3 3.3 0 0 0-.1-.1 9 9 0 0 0-1.5-1.7c-1-.8-2.5-1.8-4.3-1.8-1.8 0-3.3 1-4.3 1.8A10.2 10.2 0 0 0 2 7.7l.6.4-.6-.4c-.1.3-.1.5 0 .8l.6-.4-.6.4a3.6 3.6 0 0 0 .1.1 8.8 8.8 0 0 0 1.5 1.7C4.7 11 6.2 12 8 12c1.8 0 3.3-1 4.3-1.8A10.2 10.2 0 0 0 14 8.5l-.6-.4Zm0 0 .6.4c.1-.3.1-.5 0-.8l-.6.4Z" fill="currentColor"/>\n\t\t<path fill-rule="evenodd" clip-rule="evenodd" d="M8 7.4a.7.7 0 1 0 0 1.4.7.7 0 0 0 0-1.4Zm0-1.3a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z" fill="currentColor"/>\n\t</symbol>\n\t<symbol id="labsIcon" viewBox="0 0 17 17" fill="none">\n\t\t<path fill-rule="evenodd" clip-rule="evenodd" d="M12.1 8.6c.1.3 0 .7-.4.8l-.6.2a5 5 0 0 1-3.2 0l-1-.2H5.4a.7.7 0 1 1 0-1.3h1.3c.5 0 1 0 1.6.3.7.2 1.5.2 2.2 0l.7-.3c.3 0 .7.1.8.5Z" fill="currentColor"/>\n\t\t<path fill-rule="evenodd" clip-rule="evenodd" d="M6 4.1c0-.7.7-1.3 1.4-1.3h2.2c.7 0 1.3.6 1.3 1.3v2.3l2.6 4.3c.4.6.4 1.3.1 1.8-.3.6-.9 1-1.6 1H5c-.7 0-1.3-.4-1.6-1a1.6 1.6 0 0 1 .1-1.8l2.6-4.3V4Zm3.6 0H7.4v2.3c0 .2 0 .4-.2.6l-2.5 4.4-.1.1c-.1.1-.1.3 0 .4l.4.2h7l.5-.2v-.4l-.2-.1L9.8 7c-.2-.2-.2-.4-.2-.6V4Z" fill="currentColor"/>\n\t</symbol>\n'},7:(t,l,e)=>{e.r(l),e.d(l,{tileVideo:()=>n});var n="UnEHxLYLNyXKaG7b1gjH"}}]);