"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[14555],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),d=p(n),m=r,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(k,o(o({ref:e},c),{},{components:n})):a.createElement(k,o({ref:e},c))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8969:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={title:"Initialisation",date:"2020-02-25",sidebar_position:20},o=void 0,l={unversionedId:"collecting-data/collecting-from-own-applications/c-tracker/initialisation/index",id:"collecting-data/collecting-from-own-applications/c-tracker/initialisation/index",title:"Initialisation",description:"Designing how and what to track in your app is an important decision. Check out our docs about tracking design\xa0here.",source:"@site/docs/collecting-data/collecting-from-own-applications/c-tracker/initialisation/index.md",sourceDirName:"collecting-data/collecting-from-own-applications/c-tracker/initialisation",slug:"/collecting-data/collecting-from-own-applications/c-tracker/initialisation/",permalink:"/docs/collecting-data/collecting-from-own-applications/c-tracker/initialisation/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/collecting-data/collecting-from-own-applications/c-tracker/initialisation/index.md",tags:[],version:"current",lastUpdatedAt:1662725915,formattedLastUpdatedAt:"Sep 9, 2022",sidebarPosition:20,frontMatter:{title:"Initialisation",date:"2020-02-25",sidebar_position:20},sidebar:"defaultSidebar",previous:{title:"Setup",permalink:"/docs/collecting-data/collecting-from-own-applications/c-tracker/setup/"},next:{title:"Adding extra data: the Subject class",permalink:"/docs/collecting-data/collecting-from-own-applications/c-tracker/adding-extra-data-the-subject-class/"}},s={},p=[{value:"Import the library",id:"import-the-library",level:2},{value:"Option 1: Creating a tracker with default configuration using the &quot;Snowplow&quot; interface",id:"option-1-creating-a-tracker-with-default-configuration-using-the-snowplow-interface",level:2},{value:"Option 2: Creating a tracker with custom configuration using the &quot;Snowplow&quot; interface",id:"option-2-creating-a-tracker-with-custom-configuration-using-the-snowplow-interface",level:2},{value:"Tracker configuration using &quot;TrackerConfiguration&quot;",id:"tracker-configuration-using-trackerconfiguration",level:3},{value:"Network configuration using &quot;NetworkConfiguration&quot;",id:"network-configuration-using-networkconfiguration",level:3},{value:"Emitter configuration using &quot;EmitterConfiguration&quot;",id:"emitter-configuration-using-emitterconfiguration",level:3},{value:"Session configuration using &quot;SessionConfiguration&quot;",id:"session-configuration-using-sessionconfiguration",level:3},{value:"Option 3: Managing &quot;Tracker&quot;, &quot;Emitter&quot;, and &quot;ClientSession&quot; directly",id:"option-3-managing-tracker-emitter-and-clientsession-directly",level:2},{value:"Storage",id:"storage",level:3},{value:"Emitter",id:"emitter",level:3},{value:"Subject",id:"subject",level:3},{value:"Client session",id:"client-session",level:3},{value:"Tracker",id:"tracker",level:3}],c={toc:p};function u(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Designing how and what to track in your app is an important decision. Check out our docs about tracking design\xa0",(0,r.kt)("a",{parentName:"p",href:"/docs/understanding-tracking-design/introduction-to-tracking-design/"},"here"),"."),(0,r.kt)("h2",{id:"import-the-library"},"Import the library"),(0,r.kt)("p",null,"Import the C++ Tracker library and use the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"snowplow"),"\xa0namespace like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'#include "snowplow/snowplow.hpp"\n\nusing namespace snowplow;\n')),(0,r.kt)("p",null,"That\u2019s it \u2013 you are now ready to initialize a tracker instance that you will use to track events. There are 3 ways to do that:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a tracker with default configuration using the\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"Snowplow"),"\xa0interface."),(0,r.kt)("li",{parentName:"ol"},"Create a tracker with custom configuration using the\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"Snowplow"),"\xa0interface."),(0,r.kt)("li",{parentName:"ol"},"Create and manage\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"Tracker"),",\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"Emitter"),", and\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"ClientSession"),"\xa0directly.")),(0,r.kt)("h2",{id:"option-1-creating-a-tracker-with-default-configuration-using-the-snowplow-interface"},'Option 1: Creating a tracker with default configuration using the "Snowplow" interface'),(0,r.kt)("p",null,"The\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"Snowplow"),"\xa0class provides static methods that let you easily create a new tracker. It can be as simple as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'auto tracker = Snowplow::create_tracker(\n    "ns", // tracker namespace used to identify the tracker\n    "https://com.acme.collector", // Snowplow collector URL\n    POST, // HTTP method used to send events to the collector\n    "events.db" // Relative path to an SQLite database used for event queue and session tracking\n);\n')),(0,r.kt)("p",null,"Optionally, you may choose to attach a\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"Subject"),"\xa0instance with information about the user and device (see the next page on\xa0",(0,r.kt)("a",{parentName:"p",href:"https://file+.vscode-resource.vscode-cdn.net/Users/matus/Projects/Snowplow/snowplow-cpp-tracker/docs/03-adding-data.md"},"Adding data"),"\xa0to learn more about the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"Subject"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'auto subject = std::make_shared<Subject>() // initialize a C++ shared pointer for the Subject\nsubject->set_user_id("a-user-id");\n\nauto tracker = Snowplow::create_tracker("ns", "https://com.acme.collector", POST, "events.db", subject);\n')),(0,r.kt)("p",null,"Finally, client session tracking will be automatically enabled and session information will be attached to all events (see documentation on\xa0",(0,r.kt)("a",{parentName:"p",href:"https://file+.vscode-resource.vscode-cdn.net/Users/matus/Projects/Snowplow/snowplow-cpp-tracker/docs/06-client-sessions.md"},"Client sessions"),"\xa0for more details). If you wish to disable session tracking, pass\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"\xa0as the last argument:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'auto tracker = Snowplow::create_tracker("ns", "https://com.acme.collector", POST, "events.db", subject, false);\n')),(0,r.kt)("p",null,"After you create a tracker, you can access it from anywhere using it's namespace:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'auto tracker = Snowplow::get_tracker("ns");\n')),(0,r.kt)("p",null,"You can also access the default tracker using\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"Snowplow::get_default_tracker()"),". The default tracker is the first initialized tracker (unless it is removed). If you have multiple trackers, you can choose the default tracker by calling\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"Snowplow::set_default_tracker(tracker2)"),"."),(0,r.kt)("p",null,"To remove reference of previously initialized tracker from the Snowplow interface (the tracker will be deleted once all remaininig references to it are deleted):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"Snowplow::remove_tracker(tracker);\n")),(0,r.kt)("h2",{id:"option-2-creating-a-tracker-with-custom-configuration-using-the-snowplow-interface"},'Option 2: Creating a tracker with custom configuration using the "Snowplow" interface'),(0,r.kt)("p",null,"There are a number of settings that you may want to customize when creating a tracker instance. You can make use of configuration objects to provide custom configuration for the tracker:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'TrackerConfiguration tracker_config(\n    "namespace", // tracker namespace\n    "app-id", // application ID\n    mob // platform that the tracker runs on\n);\ntracker_config.set_desktop_context(false); // do not attach a desktop context entity to events (on by default)\n\nNetworkConfiguration network_config("https://com.acme.collector", POST); // collector URL and method\n\nEmitterConfiguration emitter_config("sp.db"); // event queue DB path if SQLite or custom `EventStore` instance\nemitter_config.set_batch_size(500); // maximum number of events to send at a time\n\nSessionConfiguration session_config(\n    "sp.db", // session DB path if SQLite (usually same as event queue) or custom `SessionStore` instance\n    5000, // foreground timeout in ms\n    5000 // background timeout in ms\n);\n\nauto tracker = Snowplow::create_tracker(tracker_config, network_config, emitter_config, session_config);\n')),(0,r.kt)("h3",{id:"tracker-configuration-using-trackerconfiguration"},'Tracker configuration using "TrackerConfiguration"'),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"TrackerConfiguration"),"\xa0contains settings to identify and configure the tracker. It's constructor takes 3 attributes:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Constructor attribute"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"name_space")),(0,r.kt)("td",{parentName:"tr",align:null},"Tracker namespace to identify the tracker and also attach as a property to tracked events."),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"app_id")),(0,r.kt)("td",{parentName:"tr",align:null},"Application ID."),(0,r.kt)("td",{parentName:"tr",align:null},'""')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"platform")),(0,r.kt)("td",{parentName:"tr",align:null},"Enum of the platform the Tracker is running on, can be one of: web, mob, pc, app, srv, tv, cnsl, iot"),(0,r.kt)("td",{parentName:"tr",align:null},"srv")))),(0,r.kt)("p",null,"It further provides 2 optional setter functions:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Setter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"set_use_base64")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to use base64 encoding in events."),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"set_desktop_context")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to add a desktop","_","context, which gathers information about the device the tracker is running on, to each event."),(0,r.kt)("td",{parentName:"tr",align:null},"true")))),(0,r.kt)("h3",{id:"network-configuration-using-networkconfiguration"},'Network configuration using "NetworkConfiguration"'),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"NetworkConfiguration"),"\xa0has only two properties set in it's constructor to configure the Snowplow collector:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Constructor attribute"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"collector_url")),(0,r.kt)("td",{parentName:"tr",align:null},"Full URL of the Snowplow collector including the protocol (or defaults to HTTPS if protocol not present)."),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"method")),(0,r.kt)("td",{parentName:"tr",align:null},"HTTP method to use when sending events to collector \u2013 GET or POST."),(0,r.kt)("td",{parentName:"tr",align:null},"POST")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"curl_cookie_file")),(0,r.kt)("td",{parentName:"tr",align:null},"Path to a file where to store cookies in case http","_","client is nullptr and the CURL HTTP client is used \u2013 only relevant under Linux (CURL is not used under Windows and macOS)"),(0,r.kt)("td",{parentName:"tr",align:null},"In-memory cookie storage with CURL on Linux, platform native storage on Windows and macOS")))),(0,r.kt)("p",null,"Additionally, it provides the following setter functions:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Setter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"set_http_client")),(0,r.kt)("td",{parentName:"tr",align:null},"Unique pointer to a custom HTTP client to send GET and POST requests with."),(0,r.kt)("td",{parentName:"tr",align:null},"Platform-specific implementation.")))),(0,r.kt)("h3",{id:"emitter-configuration-using-emitterconfiguration"},'Emitter configuration using "EmitterConfiguration"'),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"EmitterConfiguration"),"\xa0brings additional settings for the constructor. It provides two constructors that accept the event store either as a path to the SQLite database or a custom\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"EventStore"),"\xa0object. The following configurations are identical:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'EmitterConfiguration config1("sp.db");\n\nauto storage = std::make_shared<SqliteStorage>("sp.db");\nEmitterConfiguration config2(storage); // you can also pass a custom `EventStore`\n')),(0,r.kt)("p",null,"Additionally, it provides the following setter functions:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Setter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"set_batch_size")),(0,r.kt)("td",{parentName:"tr",align:null},"The maximum amount of events to send at a time."),(0,r.kt)("td",{parentName:"tr",align:null},"250 events")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"set_byte_limit_get")),(0,r.kt)("td",{parentName:"tr",align:null},"The byte limit when sending a GET request."),(0,r.kt)("td",{parentName:"tr",align:null},"40000 bytes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"set_byte_limit_post")),(0,r.kt)("td",{parentName:"tr",align:null},"The byte limit when sending a POST request."),(0,r.kt)("td",{parentName:"tr",align:null},"40000 bytes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"set_request_callback")),(0,r.kt)("td",{parentName:"tr",align:null},"Set a callback to call after emit requests are made with the resulting emit status (see page about Emitter for more info)."),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"set_custom_retry_for_status_code")),(0,r.kt)("td",{parentName:"tr",align:null},"Set a custom retry rule for when the HTTP status code is received in emit response from Collector (see page about Emitter for more details)."),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("h3",{id:"session-configuration-using-sessionconfiguration"},'Session configuration using "SessionConfiguration"'),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"SessionConfiguration"),"\xa0is an optional attribute in\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"create_tracker"),". If passed, session tracking will be enabled with the given configuration. If not passed, session tracking will not be enabled. The constructor takes 3 attributes:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Constructor attribute"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"session_store"),"\xa0or\xa0",(0,r.kt)("inlineCode",{parentName:"td"},"db_name")),(0,r.kt)("td",{parentName:"tr",align:null},"You may either pass a path to an SQLite database to be used for session storage or a custom implementation of\xa0",(0,r.kt)("inlineCode",{parentName:"td"},"SessionStore"),"\xa0similar as for\xa0",(0,r.kt)("inlineCode",{parentName:"td"},"EventStore"),"\xa0in\xa0",(0,r.kt)("inlineCode",{parentName:"td"},"EmitterConfiguration"),"."),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"foreground_timeout")),(0,r.kt)("td",{parentName:"tr",align:null},"Timeout in ms for updating the session when the app is in background."),(0,r.kt)("td",{parentName:"tr",align:null},"30 minutes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"background_timeout")),(0,r.kt)("td",{parentName:"tr",align:null},"Timeout in ms for updating the session when the app is in foreground."),(0,r.kt)("td",{parentName:"tr",align:null},"30 minutes")))),(0,r.kt)("h2",{id:"option-3-managing-tracker-emitter-and-clientsession-directly"},'Option 3: Managing "Tracker", "Emitter", and "ClientSession" directly'),(0,r.kt)("p",null,"The third option to initialise a new tracker is to instantiate it and the related components directly. This option is suitable in case you want supply a custom emitter or client session implementation. If you don't want to do that, we recommend using Option 2 which gives you the same configuration options with a simpler API."),(0,r.kt)("p",null,"The following example takes you through the steps needed to initialize a storage, emitter, subject, client session, and tracker:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'#include "snowplow/snowplow.hpp"\n\n// 1. create storage for event queue and session information\nauto storage = std::make_shared<SqliteStorage>("sp.db");\n// 2. create an emitter for sending event to Snowplow collector\nauto emitter = std::make_shared<Emitter>(storage, "com.acme.collector");\n// 3. create a subject with user and device information\nauto subject = std::make_shared<Subject>();\nsubject->set_user_id("a-user-id");\n// 4. optionally create a client_session for session tracking\nauto client_session = std::make_shared<ClientSession>(storage, 5000, 5000);\n// 5. finally, create the tracker instance\nauto tracker = std::make_shared<Tracker>(emitter, subject, client_session, "pc", "app_id", "ns");\n')),(0,r.kt)("p",null,"Once you initialize the tracker, you can optionally register it with the Snowplow interface:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"Snowplow::register_tracker(tracker);\n")),(0,r.kt)("p",null,"This will make accessible from anywhere using\xa0",(0,r.kt)("inlineCode",{parentName:"p"},'Snowplow::get_tracker("ns")'),"."),(0,r.kt)("p",null,"The following will explain the individual components shown in the above code sample in more detail."),(0,r.kt)("h3",{id:"storage"},"Storage"),(0,r.kt)("p",null,"The storage has two functions in the example above \u2013 it is used by the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"emitter"),"\xa0to persist an event queue with events to be sent, and it is used by the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"client_session"),"\xa0to persist the current session. The tracker provides an SQL storage (",(0,r.kt)("inlineCode",{parentName:"p"},"SqliteStorage"),") implementation, but you may introduce your own storage as described in\xa0",(0,r.kt)("a",{parentName:"p",href:"/docs/collecting-data/collecting-from-own-applications/c-tracker/emitters/"},'"Emitters"'),"\xa0and\xa0",(0,r.kt)("a",{parentName:"p",href:"/docs/collecting-data/collecting-from-own-applications/c-tracker/client-sessions/"},'"Client Sessions"'),"."),(0,r.kt)("h3",{id:"emitter"},"Emitter"),(0,r.kt)("p",null,"Emitter is a required component responsible for sending tracked events to the collector."),(0,r.kt)("p",null,"Accepts an argument of an Emitter instance pointer; if the object is\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"NULL"),"\xa0will throw an exception. See\xa0Emitters\xa0for more on emitter configuration."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Argument Name")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Required?")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Default")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"event_store")),(0,r.kt)("td",{parentName:"tr",align:null},"Defines the database to use for event queue"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2013")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"uri")),(0,r.kt)("td",{parentName:"tr",align:null},"The collector URI (excluding protocol) to send events to"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2013")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"method")),(0,r.kt)("td",{parentName:"tr",align:null},"The request type to use (GET or POST)"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"POST")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"protocol")),(0,r.kt)("td",{parentName:"tr",align:null},"The protocol to use (HTTP or HTTPS)"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"HTTPS")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"batch_size")),(0,r.kt)("td",{parentName:"tr",align:null},"The maximum amount of events to send at a time"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"250 events")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"byte_limit_post")),(0,r.kt)("td",{parentName:"tr",align:null},"The byte limit when sending a POST request"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"40000 bytes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"byte_limit_get")),(0,r.kt)("td",{parentName:"tr",align:null},"The byte limit when sending a GET request"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"40000 bytes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"http_client")),(0,r.kt)("td",{parentName:"tr",align:null},"Unique pointer to a custom HTTP client to send GET and POST requests with"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Platform-specific implementation.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"curl_cookie_file")),(0,r.kt)("td",{parentName:"tr",align:null},"Path to a file where to store cookies in case http","_","client is nullptr and the CURL HTTP client is used \u2013 only relevant under Linux (CURL is not used under Windows and macOS)"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"In-memory cookie storage with CURL on Linux, platform native storage on Windows and macOS")))),(0,r.kt)("h3",{id:"subject"},"Subject"),(0,r.kt)("p",null,"The user which the Tracker will track. Accepts an argument of a\xa0Subject\xa0instance pointer."),(0,r.kt)("p",null,"You don\u2019t need to set this during Tracker construction; you can use the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"tracker.set_subject(...)"),"\xa0method afterwards. In fact, you don\u2019t need to create a subject at all. If you don\u2019t, though, your events won\u2019t contain user-specific data such as timezone and language."),(0,r.kt)("h3",{id:"client-session"},"Client session"),(0,r.kt)("p",null,"The client sessions which the Tracker will attach to each event. Accepts an argument of a\xa0ClientSession\xa0instance pointer."),(0,r.kt)("p",null,"Adds the ability to attach a ClientSession context to each event that leaves the Tracker. This object will persistently store information about the sessions that have occurred for the life of the application \u2013 unless the database is destroyed."),(0,r.kt)("h3",{id:"tracker"},"Tracker"),(0,r.kt)("p",null,"The tracker instance lets you track events. You should maintain a reference to the initialized tracker during the app lifetime."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Argument Name")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Required?")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Default")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"emitter")),(0,r.kt)("td",{parentName:"tr",align:null},"The emitter to which events are sent"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2013")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"subject")),(0,r.kt)("td",{parentName:"tr",align:null},"The user being tracked"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"nullptr")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"client_session")),(0,r.kt)("td",{parentName:"tr",align:null},"Client session recording"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"nullptr")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"platform")),(0,r.kt)("td",{parentName:"tr",align:null},"The platform the Tracker is running on"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},'"srv"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"app_id")),(0,r.kt)("td",{parentName:"tr",align:null},"The application ID"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},'""')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"name_space")),(0,r.kt)("td",{parentName:"tr",align:null},"The namespace of the tracker instance used to identify the tracker."),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},'""')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"use_base64")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to enable\xa0",(0,r.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/Base64"},"base 64 encoding"),". Defaults to true to ensure that no data is lost or corrupted."),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"desktop_context")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to add a\xa0",(0,r.kt)("inlineCode",{parentName:"td"},"desktop_context"),"\xa0to events"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"true")))),(0,r.kt)("p",null,"The\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"desktop_context"),"\xa0gathers extra information about the device it is running on and sends it along with every event that is made by the Tracker."),(0,r.kt)("p",null,"An example of the data in this context:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "deviceManufacturer": "Apple Inc.",\n    "deviceModel": "MacPro3,1",\n    "deviceProcessorCount": 8,\n    "osIs64Bit": true,\n    "osServicePack": "",\n    "osType": "macOS",\n    "osVersion": "10.11.2"\n}\n')),(0,r.kt)("p",null,"For more information the raw JsonSchema can be found\xa0",(0,r.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/snowplow/iglu-central/master/schemas/com.snowplowanalytics.snowplow/desktop_context/jsonschema/1-0-0"},"here"),"."))}u.isMDXComponent=!0}}]);