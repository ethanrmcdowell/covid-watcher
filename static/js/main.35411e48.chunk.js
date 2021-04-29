(this["webpackJsonpcovid-watcher"]=this["webpackJsonpcovid-watcher"]||[]).push([[0],{119:function(e,t,a){},225:function(e,t,a){},226:function(e,t,a){},227:function(e,t,a){},250:function(e,t,a){"use strict";a.r(t);var c=a(21),n=a.n(c),r=a(32),s=a(0),i=a(19),o=a.n(i),d=a(101),h=a(5),u=a(68),l=a(36),j=a(1),b=function(){return Object(j.jsxs)(u.a,{bg:"light",variant:"light",children:[Object(j.jsx)(u.a.Brand,{children:"COVID.WATCHER"}),Object(j.jsxs)(l.a,{className:"mr-auto",children:[Object(j.jsx)(l.a.Link,{href:"/covid-watcher",children:"Home"}),Object(j.jsx)(l.a.Link,{href:"/covid-watcher/search",children:"Search"}),Object(j.jsx)(l.a.Link,{href:"/covid-watcher/about",children:"About"})]})]})},O=a(35),p=(a(119),function(){var e,t=(new Date).getDate(),a=(new Date).getMonth(),c=(new Date).getFullYear();switch(a){case 0:e="January";break;case 1:e="February";break;case 2:e="March";break;case 3:e="April";break;case 4:e="May";break;case 5:e="June";break;case 6:case 7:case 8:case 9:case 10:default:e="July"}return Object(j.jsx)("div",{className:"dateContainer",children:Object(j.jsxs)("h1",{className:"dateTitle",children:[e," ",t,", ",c]})})}),f=a(104),v=a(103),x=(a(225),function(e){var t=Object(s.useState)({}),a=Object(f.a)(t,2),c=a[0],n=a[1],r=e.deathData;console.log(r);for(var i=r.timeline.deaths,o=Object.values(i),d=Object.keys(i),h=[],u=1;u<16;u++){var l=o[u]-o[u-1];h.push(l)}return Object(s.useEffect)((function(){n({labels:d,datasets:[{label:"Deaths",data:h,borderColor:"red",backgroundColor:"red",borderWidth:1.5}]})}),[]),Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("div",{className:"chartContainer",children:Object(j.jsx)(v.a,{data:c,options:{responsive:!0,title:{text:"THICCNESS SCALE",display:!0},scales:{y:{grace:"0.5%",beginAtZero:!1}}}})})})}),w=(a(226),function(e){var t=Object(O.b)((function(e){return e.data[0]})),a=Object(O.b)((function(e){return e.data[1]}));return t&&a?(console.log(a),Object(j.jsxs)("div",{children:[Object(j.jsx)(p,{}),Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("div",{className:"dataContainer",children:[Object(j.jsx)("h1",{className:"countryHeader",children:"United States:"}),Object(j.jsxs)("h2",{children:["Total Deaths:"," ",t.deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")]}),Object(j.jsxs)("h2",{children:["Today Deaths:"," ",t.todayDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")]}),Object(j.jsxs)("h2",{children:["Total Active Cases:"," ",t.active.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")]})]}),Object(j.jsx)("div",{className:"dataContainer",children:Object(j.jsx)(x,{deathData:a})})]})]})):Object(j.jsx)("div",{children:Object(j.jsx)("h2",{children:"Loading..."})})}),y=function(e){return Object(j.jsx)("div",{children:Object(j.jsx)("h2",{children:"THIS IS THE SEARCH PAGE."})})},g=function(e){return Object(j.jsx)("div",{children:Object(j.jsx)("h2",{children:"THIS IS THE ABOUT PAGE."})})};a(227);var D=function(){return Object(j.jsxs)(d.a,{children:[Object(j.jsx)(b,{}),Object(j.jsxs)(h.c,{children:[Object(j.jsx)(h.a,{exact:!0,path:"/covid-watcher",component:w}),Object(j.jsx)(h.a,{exact:!0,path:"/covid-watcher/search",component:y}),Object(j.jsx)(h.a,{exact:!0,path:"/covid-watcher/about",component:g})]})]})},m=(a(231),a(30)),A=a(102),S=a(6),k="ADD_FETCHED_DATA",E="ADD_HISTORICAL_DATA";var T=Object(m.b)({data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:case E:return[].concat(Object(S.a)(e),[t.payload]);default:return e}}}),C=a(67),N=a.n(C),H=function(){return function(){var e=Object(r.a)(n.a.mark((function e(t){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("https://disease.sh/v3/covid-19/countries/usa?yesterday=false&twoDaysAgo=false&strict=true&allowNull=false").then((function(e){t({type:k,payload:e.data})})).catch((function(e){throw e}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},_=function(){return function(){var e=Object(r.a)(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.get("https://disease.sh/v3/covid-19/historical/usa?lastdays=16");case 3:a=e.sent,t({type:E,payload:a.data}),e.next=10;break;case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},I=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||m.c,L=Object(m.d)(T,I(Object(m.a)(A.a)));function B(){return(B=Object(r.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:L.dispatch(H()),L.dispatch(_());case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(function(){return B.apply(this,arguments)})().then(o.a.render(Object(j.jsx)(O.a,{store:L,children:Object(j.jsx)(D,{})}),document.getElementById("root")))}},[[250,1,2]]]);
//# sourceMappingURL=main.35411e48.chunk.js.map