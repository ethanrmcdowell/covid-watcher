(this["webpackJsonpcovid-watcher"]=this["webpackJsonpcovid-watcher"]||[]).push([[0],{124:function(e,t,a){},230:function(e,t,a){},231:function(e,t,a){},238:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a(25),n=a.n(s),r=a(57),i=a(5),h=a(61),j=a(28),o=a(1),l=function(){return Object(o.jsxs)(h.a,{bg:"light",variant:"light",children:[Object(o.jsx)(h.a.Brand,{children:"COVID.WATCHER"}),Object(o.jsxs)(j.a,{className:"mr-auto",children:[Object(o.jsx)(j.a.Link,{href:"/covid-watcher",children:"Home"}),Object(o.jsx)(j.a.Link,{href:"/search",children:"Search"}),Object(o.jsx)(j.a.Link,{href:"/about",children:"About"})]})]})},d=a(39),b=a(91),u=a.n(b),x=(a(124),function(){var e,t=(new Date).getDate(),a=(new Date).getMonth(),c=(new Date).getFullYear();switch(a){case 0:e="January";break;case 1:e="February";break;case 2:e="March";break;case 3:e="April";break;case 4:e="May";break;case 5:e="June";break;case 6:case 7:case 8:case 9:case 10:default:e="July"}return Object(o.jsx)("div",{className:"dateContainer",children:Object(o.jsxs)("h1",{className:"dateTitle",children:[e," ",t,", ",c]})})}),O=(a(95),a(230),function(e){var t=Object(c.useState)([]),a=Object(d.a)(t,2),s=a[0],n=a[1];return Object(c.useEffect)((function(){u.a.request({method:"GET",url:"https://coronavirus-smartable.p.rapidapi.com/stats/v1/US/",headers:{"x-rapidapi-key":"640d573e98msh95e98b5515eb63ap1da078jsn5ce852b9cb8a","x-rapidapi-host":"coronavirus-smartable.p.rapidapi.com"}}).then((function(e){n(e.data.stats)})).catch((function(e){console.error(e)}))}),[s]),Object(o.jsxs)("div",{className:"dataContainer",children:[Object(o.jsx)(x,{}),Object(o.jsxs)("h2",{className:"title",children:["Newly Confirmed Cases: ",s.newlyConfirmedCases]}),Object(o.jsxs)("h2",{className:"title",children:["New Deaths: ",s.newDeaths]}),Object(o.jsxs)("h2",{className:"title",children:["Total Confirmed Cases: ",s.totalConfirmedCases]}),Object(o.jsxs)("h2",{className:"title",children:["Total Deaths: ",s.totalDeaths]}),Object(o.jsx)("div",{})]})}),m=function(e){return Object(o.jsx)("div",{children:Object(o.jsx)("h2",{children:"THIS IS THE SEARCH PAGE."})})},p=function(e){return Object(o.jsx)("div",{children:Object(o.jsx)("h2",{children:"THIS IS THE ABOUT PAGE."})})};a(231);var f=function(){return Object(o.jsxs)(r.a,{children:[Object(o.jsx)(l,{}),Object(o.jsxs)(i.c,{children:[Object(o.jsx)(i.a,{exact:!0,path:"/covid-watcher",component:O}),Object(o.jsx)(i.a,{exact:!0,path:"/search",component:m}),Object(o.jsx)(i.a,{exact:!0,path:"/about",component:p})]})]})};a(237);n.a.render(Object(o.jsx)(f,{}),document.getElementById("root"))}},[[238,1,2]]]);
//# sourceMappingURL=main.06ab2234.chunk.js.map