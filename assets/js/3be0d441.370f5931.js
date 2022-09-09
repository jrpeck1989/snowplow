"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[65828],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var s=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,s,o=function(e,t){if(null==e)return{};var n,s,o={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=s.createContext({}),u=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return s.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,h=d["".concat(l,".").concat(f)]||d[f]||p[f]||r;return n?s.createElement(h,a(a({ref:t},c),{},{components:n})):s.createElement(h,a({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var u=2;u<r;u++)a[u]=n[u];return s.createElement.apply(null,a)}return s.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22939:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var s=n(87462),o=(n(67294),n(3905));const r={title:"Launch a Redshift cluster",date:"2020-02-26",sidebar_position:-100},a=void 0,i={unversionedId:"getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/setup-redshift/launch-a-redshift-cluster/index",id:"getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/setup-redshift/launch-a-redshift-cluster/index",title:"Launch a Redshift cluster",description:'Go into the Amazon webservices console and select "Redshift" from the list of services.',source:"@site/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/setup-redshift/launch-a-redshift-cluster/index.md",sourceDirName:"getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/setup-redshift/launch-a-redshift-cluster",slug:"/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/setup-redshift/launch-a-redshift-cluster/",permalink:"/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/setup-redshift/launch-a-redshift-cluster/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/setup-redshift/launch-a-redshift-cluster/index.md",tags:[],version:"current",lastUpdatedAt:1662725915,formattedLastUpdatedAt:"Sep 9, 2022",sidebarPosition:-100,frontMatter:{title:"Launch a Redshift cluster",date:"2020-02-26",sidebar_position:-100},sidebar:"defaultSidebar",previous:{title:"Redshift",permalink:"/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/setup-redshift/"},next:{title:"Authorize client connections to your cluster",permalink:"/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/setup-redshift/launch-a-redshift-cluster/authorize-client-connections-to-your-cluster/"}},l={},u=[],c={toc:u};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,s.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'Go into the Amazon webservices console and select "Redshift" from the list of services.'),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(36366).Z,width:"949",height:"747"})),(0,o.kt)("p",null,'Click on the "Launch Cluster" button:'),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(79655).Z,width:"1097",height:"825"})),(0,o.kt)("p",null,"Enter suitable values for the cluster identifier, database name (e.g. 'snowplow'), port, username and password. Click the \"Continue\" button."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(14338).Z,width:"1097",height:"825"})),(0,o.kt)("p",null,"We now need to configure the cluster size. Select the values that are most appropriate to your situation. We generally recommend starting with a single node cluster with node type i.e. a ",(0,o.kt)("inlineCode",{parentName:"p"},"dw1.xlarge")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"dw2.large")," node, and then adding nodes as your data volumes grow."),(0,o.kt)("p",null,'You now have the opportunity to encrypt the database and and set the availability zone if you wish. Select your preferences and click "Continue".'),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(69775).Z,width:"1099",height:"888"})),(0,o.kt)("p",null,'Amazon summarises your cluster information. Click "Launch Cluster" to fire your Redshift instance up. This will take a few minutes to complete.'),(0,o.kt)("p",null,"Alternatively, you could use ",(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/cli/"},"AWS CLI")," to launch a new cluster. The outcome of the above steps could be achieved with the following command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ aws redshift create-cluster \\\n    --node-type dc1.large \\\n    --cluster-type single-node \\\n    --cluster-identifier snowplow \\\n    --db-name pbz \\\n    --master-username admin \\\n    --master-user-password TopSecret1\n")))}p.isMDXComponent=!0},36366:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/redshift-setup-1-02388773c79b4e07cae917402f763344.png"},79655:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/redshift-setup-2-a1c1694ab4d283eba845bd5f747b7fff.png"},14338:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/redshift-setup-3-988cbf6b7e8a092751011ac998d9370f.png"},69775:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/redshift-setup-4-5a7b2501848489bf90f2ff3c57af3b47.png"}}]);