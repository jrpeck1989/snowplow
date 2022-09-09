"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[58866],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),g=p(n),m=i,d=g["".concat(s,".").concat(m)]||g[m]||u[m]||a;return n?r.createElement(d,l(l({ref:t},c),{},{components:n})):r.createElement(d,l({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},31774:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const a={title:"Iglu Central",date:"2021-03-26",sidebar_position:1e3},l=void 0,o={unversionedId:"pipeline-components-and-applications/iglu/iglu-repositories/iglu-central/index",id:"pipeline-components-and-applications/iglu/iglu-repositories/iglu-central/index",title:"Iglu Central",description:"Iglu Central\xa0is a public repository of JSON Schemas hosted by\xa0Snowplow Analytics.",source:"@site/docs/pipeline-components-and-applications/iglu/iglu-repositories/iglu-central/index.md",sourceDirName:"pipeline-components-and-applications/iglu/iglu-repositories/iglu-central",slug:"/pipeline-components-and-applications/iglu/iglu-repositories/iglu-central/",permalink:"/docs/pipeline-components-and-applications/iglu/iglu-repositories/iglu-central/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/pipeline-components-and-applications/iglu/iglu-repositories/iglu-central/index.md",tags:[],version:"current",lastUpdatedAt:1662725915,formattedLastUpdatedAt:"Sep 9, 2022",sidebarPosition:1e3,frontMatter:{title:"Iglu Central",date:"2021-03-26",sidebar_position:1e3},sidebar:"defaultSidebar",previous:{title:"Iglu Repositories",permalink:"/docs/pipeline-components-and-applications/iglu/iglu-repositories/"},next:{title:"Iglu Server",permalink:"/docs/pipeline-components-and-applications/iglu/iglu-repositories/iglu-server/"}},s={},p=[{value:"Technical architecture",id:"technical-architecture",level:2},{value:"Self Hosting Iglu Central schemas",id:"self-hosting-iglu-central-schemas",level:2}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"http://iglucentral.com/"},"Iglu Central"),"\xa0is a public repository of JSON Schemas hosted by\xa0Snowplow Analytics."),(0,i.kt)("p",null,"As far as we know, Iglu Central is the first public\xa0",(0,i.kt)("strong",{parentName:"p"},"machine-readable"),"\xa0schema repository - all prior efforts we have seen are human-browsable directories of articles about schemas (e.g.\xa0",(0,i.kt)("a",{parentName:"p",href:"http://schema.org/"},"schema.org"),")."),(0,i.kt)("p",null,"Think of Iglu Central as like\xa0",(0,i.kt)("a",{parentName:"p",href:"http://rubygems.org/"},"RubyGems.org"),"\xa0or\xa0",(0,i.kt)("a",{parentName:"p",href:"http://central.maven.org/"},"Maven Central"),"\xa0but for storing publically-available JSON Schemas."),(0,i.kt)("h2",{id:"technical-architecture"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/snowplow/iglu/wiki/Iglu-Central#technical-architecture"}),"Technical architecture"),(0,i.kt)("p",null,"Under the hood, Iglu Central is built and run as a\xa0static Iglu repository, which is simply an Iglu repository server structured as a static website serving its whole content over http, and is hosted on Amazon S3."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"iglu-central-img",src:n(84032).Z,width:"466",height:"520"})),(0,i.kt)("p",null,"The\xa0",(0,i.kt)("a",{parentName:"p",href:"/docs/pipeline-components-and-applications/iglu/iglu-central-setup/"},"deployment process"),"\xa0for Iglu Central is documented on this wiki in case a user wants to setup a public mirror or private instance of Iglu Central."),(0,i.kt)("p",null,"Iglu Central is available for view at\xa0",(0,i.kt)("a",{parentName:"p",href:"http://iglucentral.com/"},"http://iglucentral.com"),". Although Iglu Central is primarily designed to be consumed by\xa0",(0,i.kt)("a",{parentName:"p",href:"/docs/pipeline-components-and-applications/iglu/iglu-clients/"},"Iglu clients"),", the root index page for Iglu Central links to all schemas currently hosted on Iglu Central."),(0,i.kt)("h2",{id:"self-hosting-iglu-central-schemas"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/snowplow/iglu/wiki/Iglu-Central#existing-and-new-schemas"}),"Self Hosting Iglu Central schemas"),(0,i.kt)("p",null,"The schemas for Iglu Central are stored in GitHub, in\xa0",(0,i.kt)("a",{parentName:"p",href:"https://github.com/snowplow/iglu-central"},"snowplow/iglu-central"),"."),(0,i.kt)("p",null,"Some components of Snowplow require an Iglu Server, and a static repo will not work. This means you'll want to host a mirror of Iglu Central. You can mirror Iglu Central using ",(0,i.kt)("inlineCode",{parentName:"p"},"[igluctl](/docs/pipeline-components-and-applications/iglu/igluctl-2/)"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"git clone https://github.com/snowplow/iglu-central\ncd iglu-central\nigluctl static push --public schemas/ http://CHANGE-TO-MY-IGLU-URL.elb.amazonaws.com 00000000-0000-0000-0000-000000000000\n")),(0,i.kt)("p",null,"For further information on Iglu Central, consult the\xa0",(0,i.kt)("a",{parentName:"p",href:"/docs/pipeline-components-and-applications/iglu/iglu-central-setup/"},"Iglu Central setup guide"),"."))}u.isMDXComponent=!0},84032:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/iglu-central-c0427b712c8c80ad53d1a8a2b7e6871d.png"}}]);