(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[181],{7742:function(e,t,s){"use strict";var n=s(5893),a=s(2451),i=s.n(a),r=s(1664),l=s.n(r),o=s(9008),c=s.n(o);let d=[{"@context":"http://schema.org","@type":"WebSite",url:"https://www.svgrepo.com/",name:"SVG Repo - Free SVG Vectors and Icons",alternateName:"Free SVG Icons",potentialAction:{"@type":"SearchAction",target:"http://www.svgrepo.com/vectors/{search_term_string}/","query-input":"required name=search_term_string"}}];d.push({"@context":"http://schema.org","@type":"Organization",name:"SVG Repo",url:"https://www.svgrepo.com",logo:"https://www.svgrepo.com/img/logo.svg"});let h=e=>{let{links:t,submission:s}=e;if(!t)return null;{let a;d.filter(e=>"BreadcrumbList"==e["@type"]).length||d.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:t.map((e,t)=>{if(e.link){let s="/"!=e.link[0]?"/"+e.link:e.link;return{"@type":"ListItem",position:t+1,item:{"@id":"https://www.svgrepo.com".concat(s),name:"".concat(e.title)}}}})});let r=(0,n.jsx)("div",{className:i().breadCrumbsScroller,children:t.map((e,t)=>0!=t?(0,n.jsxs)("div",{children:[(0,n.jsxs)("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"#e1e1e1",children:[(0,n.jsx)("path",{d:"M8.59,16.59L13.17,12L8.59,7.41L10,6l6,6l-6,6L8.59,16.59z"}),(0,n.jsx)("path",{fill:"none",d:"M0,0h24v24H0V0z"})]}),(0,n.jsx)(l(),{href:e.link?e.link:"/vectors/".concat(e.title.toLowerCase().replace(/ /g,"-"),"/"),children:(0,n.jsx)("span",{className:2==t?i().current:null,children:e.title})})]},t):(0,n.jsx)(l(),{href:"/",children:(0,n.jsx)("span",{children:e.title})},t))});if(s){let o="";switch(s){case"collections":o="https://forms.gle/as2D6H5CZXUkSx949";break;case"illustrations":o="https://forms.gle/2NhukeH5LDaEXXc6A";break;case"designs":o="https://forms.gle/Ek7S89uftruhb3S68";break;case"blog posts":o="https://forms.gle/f7CWJ3xp3vbfH5iz5";break;default:o=""}a=(0,n.jsxs)("div",{className:i().submission,children:[(0,n.jsx)("div",{className:i().submissionIcon,children:(0,n.jsx)("svg",{width:20,height:20,viewBox:"0 0 24 24",fill:"currentColor",style:{top:0},children:(0,n.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"})})}),(0,n.jsxs)("a",{href:"/",href:o,target:"_blank",children:["Send us your ",s,(0,n.jsx)("b",{children:" and we will feature them!"})," ✨"]})]})}return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(c(),{children:[(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,n.jsx)("link",{rel:"search",href:"/opensearch.xml",type:"application/opensearchdescription+xml",title:"SVG Repo"}),(0,n.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(d)}})]}),(0,n.jsx)("div",{className:i().breadCrumbs,children:s?a:r})]})}};t.Z=h},2920:function(e,t,s){"use strict";s.d(t,{Z:function(){return r}});var n=s(5893),a=s(1225),i=s.n(a);function r(){return(0,n.jsx)("div",{className:i().loading})}},9706:function(e,t,s){"use strict";let n;var a=s(5893),i=s(7294),r=s(354),l=s.n(r),o=s(7209);s(5675);var c=s(559);n=!0==c.Z.get("native")?e=>{let{id:t,sendUrl:s}=e,[n,r]=(0,i.useState)(0),[d,h]=(0,i.useState)(0),[p,u]=(0,i.useState)(!1);(0,i.useEffect)(()=>{(function e(t,n,a){t.includes("unset")||(a&&r(0),o.Z.getNative("nativeEndpoint").then(a=>{let i=document.getElementById(t);i&&!i.innerHTML.includes("svgrepo-com")&&(r(a.ad),h(a.count),n<4?0===Object.keys(a.ad).length&&setTimeout(()=>{e(t,n+1)},2e3):c.Z.isTwitterRequestDismissed()||u(!0)),void 0!==s&&1===a.count&&s(a.ad.statlink);let l=0|Math.round(Date.now()/1e4);if(void 0!==a.pixel){let o=a.pixel.split("||");for(var d=0;d<o.length;d++){var p=document.createElement("img");p.src=o[d].replace("[timestamp]",l),p.border="0",p.height="1",p.width="1",p.style.display="none";let m=document.getElementById(t);m&&m.appendChild(p)}}}))})(t,0,!0)},[t]);let m=!(n&&n.company);return(0,a.jsxs)("div",{className:l().native,id:t,children:[0!=n&&n.company&&(0,a.jsxs)("div",{className:l().nativeInline,children:[(0,a.jsxs)("a",{href:n.statlink,className:l().nativeContent,children:[(0,a.jsx)("img",{src:n.image,style:{backgroundColor:n.backgroundColor},width:50,height:50,className:l().nativeImage}),(0,a.jsxs)("div",{className:l().nativeText,children:[(0,a.jsxs)("div",{className:l().nativeCName,children:[n.company," — ",n.companyTagline]}),(0,a.jsx)("div",{className:l().nativeDescription,children:n.description})]})]}),(0,a.jsx)("a",{href:n.statlink,className:l().nativeCTA,style:{color:n.ctaTextColor,backgroundColor:n.ctaBackgroundColor},children:n.callToAction}),(0,a.jsx)("a",{href:n.ad_via_link,className:l().nativeSP,children:"AD"})]}),0==n&&(0,a.jsx)("div",{className:l().nativeInline,children:(0,a.jsxs)("div",{className:l().nativeContent,children:[(0,a.jsx)("div",{className:l().nativeImagePlaceholder}),(0,a.jsxs)("div",{className:l().nativeText,children:[(0,a.jsx)("div",{className:l().textPlaceholder,style:{width:"60%"}}),(0,a.jsx)("div",{className:l().textPlaceholder,style:{width:"90%"}})]})]})}),m&&(0,a.jsxs)("div",{className:l().request,style:{opacity:p?1:0,top:p?0:10},children:[(0,a.jsx)("h3",{children:"No Ads here \uD83E\uDD17"}),(0,a.jsxs)("p",{style:{fontSize:15},children:["Instead, you can give us a ",(0,a.jsx)("a",{href:"http://twitter.com/share?text=Check%20out%20SVG%20Repo%21%0AFree%20460.000%20Open%20Licensed%20SVG%20Vector%20and%20Icons%0A%F0%9F%91%87&url=https://www.svgrepo.com/",target:"_blank",rel:"noreferrer",children:"Share on Twitter."})]}),(0,a.jsx)("p",{onClick:()=>void(u(!1),window.localStorage.setItem("dismissTwitterRequest",1)),style:{position:"absolute",top:20,right:20,padding:1,paddingLeft:10,paddingRight:10,borderRadius:50,cursor:"pointer",backgroundColor:"#fafafa"},children:"\xd7"})]})]})}:()=>null,t.Z=n},7924:function(e,t,s){"use strict";var n=s(5893);s(1664);var a=s(2962);function i(e){let{description:t,meta:s,title:i,noMainTitle:r,canonical:l,imageURL:o}=e;return i=r?i:"".concat(i," - SVG Repo"),o||(o="https://www.svgrepo.com/social.png"),(0,n.jsx)(a.PB,{title:i,description:t,canonical:"https://www.svgrepo.com"+l,openGraph:{url:"https://www.svgrepo.com"+l,title:i,description:t,site_name:"SVG Repo",images:[{url:o,width:1600,height:800,alt:" Free Icons and Vectors",type:"image/png"}]},robotsProps:{maxImagePreview:"large"},twitter:{handle:"@svgrepo",site:"@svgrepo",cardType:"summary_large_image"}})}i.defaultProps={lang:"en",meta:[],description:""},t.Z=i},8894:function(e,t,s){"use strict";s.d(t,{Z:function(){return u}});var n=s(5893),a=s(6393),i=s.n(a),r=s(5152),l=s.n(r),o=s(1163);let c=l()(Promise.all([s.e(675),s.e(400),s.e(512)]).then(s.bind(s,6512)),{loadableGenerated:{webpack:()=>[6512]}}),d=l()(Promise.all([s.e(675),s.e(644)]).then(s.bind(s,2132)),{loadableGenerated:{webpack:()=>[2132]}}),h=l()(Promise.all([s.e(675),s.e(119)]).then(s.bind(s,6119)),{loadableGenerated:{webpack:()=>[6119]}}),p=l()(s.e(562).then(s.bind(s,3562)),{loadableGenerated:{webpack:()=>[3562]}});function u(e){let{children:t,isHome:s,searchType:a}=e,r=(0,o.useRouter)(),l="native-flex-".concat(r.asPath.split("#")[0].split("/")[1],"-").concat(r.asPath.split("#")[0].split("/")[2],"-").concat(r.asPath.split("#")[0].split("/")[3]);return(0,n.jsxs)("div",{children:[s?(0,n.jsx)(d,{isHome:s,searchType:a}):(0,n.jsx)(c,{isHome:s,searchType:a}),(0,n.jsx)("div",{className:i().fixed,children:t}),(0,n.jsx)(p,{id:l,isHome:s}),(0,n.jsx)(h,{pageUniqueId:l})]})}},559:function(e,t,s){"use strict";s.d(t,{Z:function(){return l}});var n=s(5293).EventEmitter;n.defaultMaxListeners=40,new n;var a=s(9351),i=s.n(a);let r=new class{isAdmin(){return null!=this.getData("admin")}isTwitterRequestDismissed(){return"1"==this.getData("dismissTwitterRequest")}getAdminKey(){return this.getData("admin")}getSavedVectors(){let e=this.getData("saved");return e?JSON.parse(e):[]}getIconLink(e,t,s){return(s||(s=""),s.includes("#"))?"/show/".concat(e,"/").concat(t,".svg?fill=").concat(s.replace("#","")):"fetch"==s?"/show/".concat(e,"/").concat(t,".svg?fetch=true"):"/show/".concat(e,"/").concat(t,".svg")}checkSavedStatus(e){let t=this.getData("saved");return!!(t&&t.includes('"'.concat(e,'"')))}saveVector(e,t){let s=this.getData("saved");if(s){if(s.includes('"'.concat(e,'"'))){s=(s=JSON.parse(s)).filter(t=>t.id!=e),this.setData("saved",JSON.stringify(s));return}s=JSON.parse(s)}else s=[];s.push({id:e,slug:t}),this.setData("saved",JSON.stringify(s))}get(e,t){let s=i()[e];return void 0!==s?t&&t.forEach((e,t)=>{s=s.replace(RegExp("\\$"+Number(t+1),"g"),e)}):console.warn("Can't find the text identifier: ",e),s}setData(e,t){return localStorage.setItem(e,t)}getData(e){return localStorage.getItem(e)}constructor(){console.log("API: SVG Repo Init, welcome!")}};var l=r},9351:function(e){"use strict";e.exports={vectorCount:460,native:!0,nativeEndpoint:"https://api.svgrepo.com/native.json",flexbar:!0,flexbarEndpoint:"https://api.svgrepo.com/flex.json"}},7209:function(e,t,s){"use strict";var n=s(559);let a=new class{getNative(e){{let t=n.Z.get(e),s="";try{s=decodeURIComponent(document.cookie)}catch(a){}let i=s.indexOf("_bsap_daycap="),r=s.indexOf("_bsap_lifecap=");if(i=i>=0?s.substring(i+12+1).split(";")[0].split(","):[],r=r>=0?s.substring(r+13+1).split(";")[0].split(","):[],i.length||r.length){let l=[];for(let o=0;o<i.length;o++){let c=i[o];for(var d=-1,h=0;h<l.length&&-1==d;h++)l[h][0]==c&&(d=h);-1==d?l.push([c,1,0]):l[d][1]++}for(var p=0;p<r.length;p++){for(var u=i[p],d=-1,h=0;h<l.length&&-1==d;h++)l[h][0]==u&&(d=h);-1==d?l.push([u,0,1]):l[d][2]++}for(var p=0;p<l.length;p++)l[p]=l[p][0]+":"+l[p][1]+","+l[p][2];l.length&&(t+="?freqcap="+encodeURIComponent(l.join(";")))}return fetch(t,{cache:"no-cache"}).then(e=>e.json()).then(e=>e.ads&&e.ads[0].statlink?(this.servedCallback(e.ads[0].bannerid,e.ads[0].zoneid,!0),{ad:e.ads[0],count:e.count}):{ad:{},count:0})}}servedCallback(e,t,s){var n=function(e,t,s){var n=document.cookie,a=n.indexOf(e+"="),i=a>=0?n.substring(a+e.length+1).split(";")[0]+"%2C":"",r=new Date;r.setTime(36e5*s+r),t=(t=i+t).substring(0,2048),document.cookie=e+"="+t+"; expires="+r.toGMTString()+"; path=/"};s&&(n("_bsap_daycap",e,1),n("_bsap_lifecap",e,365))}constructor(){}};t.Z=a},3501:function(e,t,s){"use strict";function n(e){for(var t=(e=e.replace(/-/g," ")).toLowerCase().split(" "),s=0;s<t.length;s++)t[s]=t[s].charAt(0).toUpperCase()+t[s].substring(1);return t.join(" ").replace(" Ui "," UI ")}s.d(t,{Z:function(){return n}})},2451:function(e){e.exports={breadCrumbs:"style_breadCrumbs__aJ4Nl",breadCrumbsScroller:"style_breadCrumbsScroller__NORVk",submission:"style_submission__6Og5f",submissionIcon:"style_submissionIcon__tfI_5",current:"style_current__k_Par"}},1225:function(e){e.exports={loading:"style_loading__JcJto"}},354:function(e){e.exports={native:"style_native__cgeEf",nativeInline:"style_nativeInline__LFBXw",nativeContent:"style_nativeContent__wSLum",nativeText:"style_nativeText__LPndg",nativeImage:"style_nativeImage__hGwGn",nativeImagePlaceholder:"style_nativeImagePlaceholder__5RxmY",loading:"style_loading__C77Nf",textPlaceholder:"style_textPlaceholder__Nelkx",nativeCName:"style_nativeCName__IjNcW",nativeDescription:"style_nativeDescription__aM3Pz",nativeCTA:"style_nativeCTA__Ics69",nativeSP:"style_nativeSP__2IZ5t",request:"style_request__oYgyy",requestText:"style_requestText__CssoJ"}},6393:function(e){e.exports={fixed:"Layout_fixed__CTmNf"}}}]);