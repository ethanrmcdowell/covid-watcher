(this["webpackJsonpcovid-watcher"]=this["webpackJsonpcovid-watcher"]||[]).push([[0],{124:function(e,t,a){},230:function(e,t,a){},231:function(e,t,a){},238:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a(25),n=a.n(s),r=a(57),i=a(5),h=a(61),o=a(29),j=a(1),d=function(){return Object(j.jsxs)(h.a,{bg:"light",variant:"light",children:[Object(j.jsx)(h.a.Brand,{children:"COVID.WATCHER"}),Object(j.jsxs)(o.a,{className:"mr-auto",children:[Object(j.jsx)(o.a.Link,{href:"/covid-watcher",children:"Home"}),Object(j.jsx)(o.a.Link,{href:"/covid-watcher/search",children:"Search"}),Object(j.jsx)(o.a.Link,{href:"/covid-watcher/about",children:"About"})]})]})},l=a(28),b=a(91),u=a.n(b),O=(a(124),function(){var e,t=(new Date).getDate(),a=(new Date).getMonth(),c=(new Date).getFullYear();switch(a){case 0:e="January";break;case 1:e="February";break;case 2:e="March";break;case 3:e="April";break;case 4:e="May";break;case 5:e="June";break;case 6:case 7:case 8:case 9:case 10:default:e="July"}return Object(j.jsx)("div",{className:"dateContainer",children:Object(j.jsxs)("h1",{className:"dateTitle",children:[e," ",t,", ",c]})})}),x=(a(95),a(230),function(e){var t=Object(c.useState)([]),a=Object(l.a)(t,2),s=a[0],n=a[1],r=Object(c.useState)([]),i=Object(l.a)(r,2),h=i[0],o=i[1];return Object(c.useEffect)((function(){u.a.request({method:"GET",url:"https://coronavirus-smartable.p.rapidapi.com/stats/v1/US/",headers:{"x-rapidapi-key":"640d573e98msh95e98b5515eb63ap1da078jsn5ce852b9cb8a","x-rapidapi-host":"coronavirus-smartable.p.rapidapi.com"}}).then((function(e){n(e.data.stats),o(e.data.stats.history),console.log(h[h.length-1])})).catch((function(e){console.error(e)}))}),[]),Object(j.jsxs)("div",{className:"dataContainer",children:[Object(j.jsx)(O,{}),Object(j.jsxs)("h2",{className:"title",children:["Newly Confirmed Cases: ",s.newlyConfirmedCases]}),Object(j.jsxs)("h2",{className:"title",children:["New Deaths: ",s.newDeaths]}),Object(j.jsxs)("h2",{className:"title",children:["Total Confirmed Cases: ",s.totalConfirmedCases]}),Object(j.jsxs)("h2",{className:"title",children:["Total Deaths: ",s.totalDeaths]}),Object(j.jsx)("div",{})]})}),m=function(e){return Object(j.jsx)("div",{children:Object(j.jsx)("h2",{children:"THIS IS THE SEARCH PAGE."})})},p=function(e){return Object(j.jsx)("div",{children:Object(j.jsx)("h2",{children:"THIS IS THE ABOUT PAGE."})})};a(231);var f=function(){return Object(j.jsxs)(r.a,{children:[Object(j.jsx)(d,{}),Object(j.jsxs)(i.c,{children:[Object(j.jsx)(i.a,{exact:!0,path:"/covid-watcher",component:x}),Object(j.jsx)(i.a,{exact:!0,path:"/covid-watcher/search",component:m}),Object(j.jsx)(i.a,{exact:!0,path:"/covid-watcher/about",component:p})]})]})};a(237);n.a.render(Object(j.jsx)(f,{}),document.getElementById("root"))}},[[238,1,2]]]);
//# sourceMappingURL=main.be0f62aa.chunk.js.map