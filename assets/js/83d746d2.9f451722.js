"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[85344],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>u});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),m=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=m(t.components);return n.createElement(o.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),k=m(a),u=r,N=k["".concat(o,".").concat(u)]||k[u]||c[u]||l;return a?n.createElement(N,i(i({ref:e},d),{},{components:a})):n.createElement(N,i({ref:e},d))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=k;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},47588:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const l={title:"Tracking an event",date:"2020-02-26",sidebar_position:50},i=void 0,p={unversionedId:"collecting-data/collecting-from-own-applications/php-tracker/tracking-an-event/index",id:"collecting-data/collecting-from-own-applications/php-tracker/tracking-an-event/index",title:"Tracking an event",description:"Tracking methods supported by the PHP Tracker:",source:"@site/docs/collecting-data/collecting-from-own-applications/php-tracker/tracking-an-event/index.md",sourceDirName:"collecting-data/collecting-from-own-applications/php-tracker/tracking-an-event",slug:"/collecting-data/collecting-from-own-applications/php-tracker/tracking-an-event/",permalink:"/docs/collecting-data/collecting-from-own-applications/php-tracker/tracking-an-event/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/collecting-data/collecting-from-own-applications/php-tracker/tracking-an-event/index.md",tags:[],version:"current",lastUpdatedAt:1662725915,formattedLastUpdatedAt:"Sep 9, 2022",sidebarPosition:50,frontMatter:{title:"Tracking an event",date:"2020-02-26",sidebar_position:50},sidebar:"defaultSidebar",previous:{title:"Emitters",permalink:"/docs/collecting-data/collecting-from-own-applications/php-tracker/emitters/"},next:{title:"C++ Tracker",permalink:"/docs/collecting-data/collecting-from-own-applications/c-tracker/"}},o={},m=[{value:"Optional Tracking Arguments",id:"optional-tracking-arguments",level:3},{value:"Custom Context",id:"custom-context",level:4},{value:"Timestamp",id:"timestamp",level:4},{value:"Event Tracking Methods",id:"event-tracking-methods",level:3},{value:"<code>trackPageView</code>",id:"trackpageview",level:4},{value:"<code>trackEcommerceTransaction</code>",id:"trackecommercetransaction",level:4},{value:"<code>trackEcommerceTransactionItem</code>",id:"trackecommercetransactionitem",level:5},{value:"<code>trackScreenView</code>",id:"trackscreenview",level:4},{value:"<code>trackStructEvent</code>",id:"trackstructevent",level:4},{value:"<code>trackUnstructEvent</code>",id:"trackunstructevent",level:4},{value:"Extra Tracker Functions",id:"extra-tracker-functions",level:3},{value:"Tracker\xa0<code>flushEmitters</code>",id:"trackerflushemitters",level:4}],d={toc:m};function c(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Tracking methods supported by the PHP Tracker:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Function")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#page-view"},(0,r.kt)("inlineCode",{parentName:"a"},"trackPageView"))),(0,r.kt)("td",{parentName:"tr",align:null},"Track and record views of web pages.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#ecommerce-transaction"},(0,r.kt)("inlineCode",{parentName:"a"},"trackEcommerceTransaction"))),(0,r.kt)("td",{parentName:"tr",align:null},"Track an ecommerce transaction")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#screen-view"},(0,r.kt)("inlineCode",{parentName:"a"},"trackScreenView"))),(0,r.kt)("td",{parentName:"tr",align:null},"Track the user viewing a screen within the application")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#struct-event"},(0,r.kt)("inlineCode",{parentName:"a"},"trackStructEvent"))),(0,r.kt)("td",{parentName:"tr",align:null},"Track a Snowplow custom structured event")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#unstruct-event"},(0,r.kt)("inlineCode",{parentName:"a"},"trackUnstructEvent"))),(0,r.kt)("td",{parentName:"tr",align:null},"Track a Snowplow custom unstructured event")))),(0,r.kt)("h3",{id:"optional-tracking-arguments"},"Optional Tracking Arguments"),(0,r.kt)("h4",{id:"custom-context"},"Custom Context"),(0,r.kt)("p",null,"Custom contexts let you add additional information about any circumstances surrounding an event in the form of a PHP Array of name-value pairs. Each tracking method accepts an additional optional contexts parameter after all the parameters specific to that method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"public function trackPageView($page_url, $page_title = NULL, $referrer = NULL, $context = NULL, $tstamp = NULL)\n")),(0,r.kt)("p",null,"An example of a Context Array Structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'array(\n    "schema" => "iglu:com.acme_company/movie_poster/jsonschema/2-1-1",\n    "data" => array(\n        "movie_name" => "Solaris",\n        "poster_country" => "JP"\n    )\n)\n')),(0,r.kt)("p",null,"This is how to fire a page view event with the above custom context:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'$tracker->trackPageView(\n    "http://www.films.com",\n    "Homepage",\n    NULL,\n    array(\n        array(\n            "schema" => "iglu:com.acme_company/movie_poster/jsonschema/2-1-1",\n            "data" => array(\n                "movie_name" => "Solaris",\n                "poster_country" => "JP"\n            )\n        )\n    )\n);\n')),(0,r.kt)("h4",{id:"timestamp"},"Timestamp"),(0,r.kt)("p",null,"Each tracking method supports an optional timestamp as its final argument; this allows you to also set the true timestamp (",(0,r.kt)("inlineCode",{parentName:"p"},"true_tstamp"),") of the event besides the device created timestamp (",(0,r.kt)("inlineCode",{parentName:"p"},"dvce_created_tstamp"),") that always gets set by the tracker. The optional timestamp argument should be provided in\xa0",(0,r.kt)("strong",{parentName:"p"},"milliseconds"),"\xa0since the Unix epoch."),(0,r.kt)("p",null,"Here is an example tracking a structured event and supplying the optional timestamp argument. We can explicitly supply a\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"NULL"),"\xa0for the intervening arguments which are empty:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'$tracker->trackStructEvent("some cat", "save action", NULL, NULL, NULL, 1368725287000);\n')),(0,r.kt)("h3",{id:"event-tracking-methods"},"Event Tracking Methods"),(0,r.kt)("h4",{id:"trackpageview"},(0,r.kt)("inlineCode",{parentName:"h4"},"trackPageView")),(0,r.kt)("p",null,"Track a user viewing a page within your app."),(0,r.kt)("p",null,"Function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"public function trackPageView($page_url, $page_title = NULL, $referrer = NULL, $context = NULL, $tstamp = NULL)\n")),(0,r.kt)("p",null,"Arguments:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Argument")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Required?")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Validation")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$page_url")),(0,r.kt)("td",{parentName:"tr",align:null},"The URL of the page"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Non-empty string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$page_title")),(0,r.kt)("td",{parentName:"tr",align:null},"The title of the page"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$referrer")),(0,r.kt)("td",{parentName:"tr",align:null},"The address which linked to the page"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$context")),(0,r.kt)("td",{parentName:"tr",align:null},"Custom context for the event"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Array")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$tstamp")),(0,r.kt)("td",{parentName:"tr",align:null},"When the pageview occurred"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Positive integer")))),(0,r.kt)("p",null,"Example Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'$tracker->trackPageView("www.example.com", NULL, NULL, NULL, 123123132132);\n')),(0,r.kt)("h4",{id:"trackecommercetransaction"},(0,r.kt)("inlineCode",{parentName:"h4"},"trackEcommerceTransaction")),(0,r.kt)("p",null,"Track an ecommerce transaction."),(0,r.kt)("p",null,"Function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"public function trackEcommerceTransaction($order_id, $total_value, $currency = NULL, $affiliation = NULL, $tax_value = NULL, $shipping = NULL, $city = NULL, $state = NULL, $country = NULL, $items = array(), $context = NULL, $tstamp = NULL)\n")),(0,r.kt)("p",null,"Arguments:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Argument")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Required?")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Validation")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$order_id")),(0,r.kt)("td",{parentName:"tr",align:null},"ID of the eCommerce transaction"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Non-empty string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$total_value")),(0,r.kt)("td",{parentName:"tr",align:null},"Total transaction value"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Int or Float")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$currency")),(0,r.kt)("td",{parentName:"tr",align:null},"Transaction currency"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$affiliation")),(0,r.kt)("td",{parentName:"tr",align:null},"Transaction affiliation"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$tax_value")),(0,r.kt)("td",{parentName:"tr",align:null},"Transaction tax value"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Int or Float")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$shipping")),(0,r.kt)("td",{parentName:"tr",align:null},"Delivery cost charged"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Int or Float")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$city")),(0,r.kt)("td",{parentName:"tr",align:null},"Delivery address city"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$state")),(0,r.kt)("td",{parentName:"tr",align:null},"Delivery address state"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$country")),(0,r.kt)("td",{parentName:"tr",align:null},"Delivery address country"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$items")),(0,r.kt)("td",{parentName:"tr",align:null},"Items in the transaction"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Array")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$context")),(0,r.kt)("td",{parentName:"tr",align:null},"Custom context for the event"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Array")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$tstamp")),(0,r.kt)("td",{parentName:"tr",align:null},"When the transaction event occurred"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Positive integer")))),(0,r.kt)("p",null,"Example Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'\n$tracker->trackEcommerceTransaction(\n    "test_order_id_1", \n    200, \n    "GBP", \n    "affiliation_1", \n    "tax_value_1",\n    "shipping_1", \n    "city_1", \n    "state_1", \n    "country_1",\n    array(\n        array("name" => "name_1","category" => "category_1",\n            "price" => 100,"sku" => "sku_1","quantity" => 1),\n        array("name" => "name_2","category" => "category_2",\n            "price" => 100,"sku" => "sku_2","quantity" => 1)\n    )\n);\n')),(0,r.kt)("p",null,"The above example contains an order with two order items."),(0,r.kt)("h5",{id:"trackecommercetransactionitem"},(0,r.kt)("inlineCode",{parentName:"h5"},"trackEcommerceTransactionItem")),(0,r.kt)("p",null,"This is a private function that is called from within\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"trackEcommerceTransaction"),". Note that for an item to be added successfully you need to include the following fields in the array, even if the value is\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"NULL"),"."),(0,r.kt)("p",null,"Arguments:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Argument")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Required?")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Validation")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"sku"')),(0,r.kt)("td",{parentName:"tr",align:null},"Item SKU"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Non-empty string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"price"')),(0,r.kt)("td",{parentName:"tr",align:null},"Item price"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Int or Float")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"quantity"')),(0,r.kt)("td",{parentName:"tr",align:null},"Item quantity"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Int")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"name"')),(0,r.kt)("td",{parentName:"tr",align:null},"Item name"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"category"')),(0,r.kt)("td",{parentName:"tr",align:null},"Item category"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"String")))),(0,r.kt)("p",null,"Example Item:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'array(\n    array("name" => NULL,\n          "category" => NULL,\n          "price" => 100,\n          "sku" => "sku_1",\n          "quantity" => 1)\n)\n')),(0,r.kt)("p",null,"If any of these fields are missing the item event will not be created. However the order of these fields is not important."),(0,r.kt)("h4",{id:"trackscreenview"},(0,r.kt)("inlineCode",{parentName:"h4"},"trackScreenView")),(0,r.kt)("p",null,"Track a user viewing a screen (or equivalent) within your app."),(0,r.kt)("p",null,"Function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"public function trackScreenView($name = NULL, $id = NULL, $context = NULL, $tstamp = NULL)\n")),(0,r.kt)("p",null,"Arguments:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Argument")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Required?")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Validation")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$name")),(0,r.kt)("td",{parentName:"tr",align:null},"Human-readable name for this screen"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Non-empty string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$id")),(0,r.kt)("td",{parentName:"tr",align:null},"Unique identifier for this screen"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$context")),(0,r.kt)("td",{parentName:"tr",align:null},"Custom context for the event"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Array")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$tstamp")),(0,r.kt)("td",{parentName:"tr",align:null},"When the screen was viewed"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Positive integer")))),(0,r.kt)("p",null,"Although\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"$name"),"\xa0and\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"$id"),"\xa0are not individually required, at least one must be provided or the event will fail validation."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'$tracker->trackScreenView("HUD > Save Game", NULL, NULL, 1368725287000);\n')),(0,r.kt)("h4",{id:"trackstructevent"},(0,r.kt)("inlineCode",{parentName:"h4"},"trackStructEvent")),(0,r.kt)("p",null,"Track a custom event happening in your app which fits the Google Analytics-style structure of having up to five fields (with only the first two required)."),(0,r.kt)("p",null,"Function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"public function trackStructEvent($category, $action, $label = NULL, $property = NULL, $value = NULL, $context = NULL, $tstamp = NULL)\n")),(0,r.kt)("p",null,"Arguments:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Argument")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Required?")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Validation")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$category")),(0,r.kt)("td",{parentName:"tr",align:null},"The grouping of structured events which this\xa0",(0,r.kt)("inlineCode",{parentName:"td"},"action"),"\xa0belongs to"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Non-empty string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$action")),(0,r.kt)("td",{parentName:"tr",align:null},"Defines the type of user interaction which this event involves"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Non-empty string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$label")),(0,r.kt)("td",{parentName:"tr",align:null},"A string to provide additional dimensions to the event data"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$property")),(0,r.kt)("td",{parentName:"tr",align:null},"A string describing the object or the action performed on it"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$value")),(0,r.kt)("td",{parentName:"tr",align:null},"A value to provide numerical data about the event"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Int or Float")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$context")),(0,r.kt)("td",{parentName:"tr",align:null},"Custom context for the event"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Array")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$tstamp")),(0,r.kt)("td",{parentName:"tr",align:null},"When the structured event occurred"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Positive integer")))),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'$tracker->trackStructEvent("shop", "add-to-basket", NULL, "pcs", 2);\n')),(0,r.kt)("h4",{id:"trackunstructevent"},(0,r.kt)("inlineCode",{parentName:"h4"},"trackUnstructEvent")),(0,r.kt)("p",null,"Track a custom event which consists of a name and an unstructured set of properties. This is useful when:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You want to track event types which are proprietary/specific to your business (i.e. not already part of Snowplow), or"),(0,r.kt)("li",{parentName:"ul"},"You want to track events which have unpredictable or frequently changing properties")),(0,r.kt)("p",null,"Function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"public function trackUnstructEvent($event_json, $context = NULL, $tstamp = NULL)\n")),(0,r.kt)("p",null,"Arguments:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Argument")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Required?")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Validation")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$event_json")),(0,r.kt)("td",{parentName:"tr",align:null},"The properties of the event"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Array")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$context")),(0,r.kt)("td",{parentName:"tr",align:null},"Custom context for the event"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Array")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$tstamp")),(0,r.kt)("td",{parentName:"tr",align:null},"When the unstructured event occurred"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Positive integer")))),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'$tracker->trackUnstructEvent(\n    array(\n        "schema" => "com.example_company/save-game/jsonschema/1.0.2",\n        "data" => array(\n            "save_id" => "4321",\n            "level" => 23,\n            "difficultyLevel" => "HARD",\n            "dl_content" => true\n        )\n    ),\n    NULL,\n    132184654684\n);\n')),(0,r.kt)("p",null,"The\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"$event_json"),"\xa0must be an array with two fields:\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"schema"),"\xa0and\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"data"),".\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"data"),"\xa0is a flat array containing the properties of the unstructured event.\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"schema"),"\xa0identifies the JSON schema against which\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"data"),"\xa0should be validated."),(0,r.kt)("h3",{id:"extra-tracker-functions"},"Extra Tracker Functions"),(0,r.kt)("h4",{id:"trackerflushemitters"},"Tracker\xa0",(0,r.kt)("inlineCode",{parentName:"h4"},"flushEmitters")),(0,r.kt)("p",null,"The\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"flushEmitters"),"\xa0function can be called after you have successfully created a Tracker with the following function call:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$tracker->flushEmitters();\n")),(0,r.kt)("p",null,"This will tell the tracker to send any remaining events that are left in the buffer to the collector(s)."))}c.isMDXComponent=!0}}]);