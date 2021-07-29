(this["webpackJsonpjokes-app"]=this["webpackJsonpjokes-app"]||[]).push([[0],[,,,,,,,,,,,function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},,function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(5),l=c.n(a),i=(c(11),c(12),c(4)),r=c.n(i),o=c(6),j=c(2),u=(c(14),c(15),c(0)),d=function(e){var t=e.setSearchComponent,c=e.setCategories,s=e.setParams,a=e.setHasParams,l=e.setLanguage,i=e.language,r=e.params,o=e.setConcat,d=e.categories,b=function(){return t(!1)},h=Object(n.useState)(d.length),O=Object(j.a)(h,2),p=O[0],m=O[1];return Object(n.useEffect)((function(){!function(){var e=document.querySelectorAll(".pill");document.querySelectorAll(".pill-flag").forEach((function(e){e.addEventListener("click",(function(){e.classList.toggle("active")}))})),e.forEach((function(e){e.addEventListener("click",(function(){e.classList.toggle("active"),e.classList.contains("active")?m(++p):m(--p),document.querySelector(".filter-container").style.cssText=0===p?"border: solid salmon 2px;":"border: solid #c6c6c685 2px;"}))}))}(),function(){var e=document.querySelectorAll(".pill"),t=document.querySelectorAll(".pill-flag"),c=document.querySelectorAll("#languages option");e.forEach((function(e){d.map((function(t){return e.textContent===t&&e.classList.add("active"),""}))})),t.forEach((function(e){r.map((function(t){return e.textContent===t&&e.classList.add("active"),""}))})),c.forEach((function(e){e.value===i.substring(5,7)&&(e.outerHTML='<option value="'.concat(e.value,'" selected>').concat(e.textContent,"</option>"))}))}()}),[]),Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"filter-container",children:[Object(u.jsx)("div",{className:"close",onClick:b,children:" x "}),Object(u.jsxs)("div",{className:"filters",children:[Object(u.jsx)("h6",{children:"Language"}),Object(u.jsxs)("select",{name:"languages",id:"languages",children:[Object(u.jsx)("option",{value:"",children:"English"}),Object(u.jsx)("option",{value:"es",children:"Spanish"}),Object(u.jsx)("option",{value:"fr",children:"French"}),Object(u.jsx)("option",{value:"pt",children:"Portuguese"}),Object(u.jsx)("option",{value:"de",children:"German"}),Object(u.jsx)("option",{value:"cs",children:"Czech"})]}),Object(u.jsx)("h6",{children:"Categories"}),Object(u.jsxs)("div",{className:"categories",children:[Object(u.jsx)("button",{className:"pill",children:"Programming"}),Object(u.jsx)("button",{className:"pill",children:"Miscellaneous"}),Object(u.jsx)("button",{className:"pill",children:"Dark"}),Object(u.jsx)("button",{className:"pill",children:"Pun"}),Object(u.jsx)("button",{className:"pill",children:"Spooky"}),Object(u.jsx)("button",{className:"pill",children:"Christmas"})]}),0===p&&Object(u.jsx)("h6",{className:"error-message",children:"You must select at least one category."}),Object(u.jsx)("h6",{children:"Flags [To Blacklist]"}),Object(u.jsxs)("div",{className:"flags",children:[Object(u.jsx)("button",{className:"pill-flag",children:"NSFW"}),Object(u.jsx)("button",{className:"pill-flag",children:"Religious"}),Object(u.jsx)("button",{className:"pill-flag",children:"Political"}),Object(u.jsx)("button",{className:"pill-flag",children:"Racist"}),Object(u.jsx)("button",{className:"pill-flag",children:"Sexist"}),Object(u.jsx)("button",{className:"pill-flag",children:"Explicit"})]}),Object(u.jsx)("button",{id:"getFilteredJoke",disabled:0===p,onClick:function(){p>0&&(!function(){var e=[],t=[],n=document.querySelector("#languages").value,i=document.querySelectorAll(".pill.active"),r=document.querySelectorAll(".pill-flag.active");i.forEach((function(t){return e.push(t.textContent)})),r.forEach((function(e){return t.push(e.textContent)})),c(e),t.length>0?(a("blacklistFlags="),s(t),o("&")):(a(""),s([]),o("")),l(""!==n?"lang="+n+"&":"")}(),b())},children:"Save Filter"})]})]})})},b=function(){var e=Object(n.useState)(!1),t=Object(j.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)([]),l=Object(j.a)(a,2),i=l[0],b=l[1],h=Object(n.useState)(!0),O=Object(j.a)(h,2),p=O[0],m=O[1],g=Object(n.useState)(!1),x=Object(j.a)(g,2),f=x[0],v=x[1],k=Object(n.useState)(""),N=Object(j.a)(k,2),S=N[0],C=N[1],y=Object(n.useState)(["Programming","Miscellaneous","Dark","Pun","Spooky","Christmas"]),L=Object(j.a)(y,2),E=L[0],F=L[1],P=Object(n.useState)([]),q=Object(j.a)(P,2),J=q[0],A=q[1],w=Object(n.useState)(""),T=Object(j.a)(w,2),D=T[0],I=T[1],M=Object(n.useState)(""),R=Object(j.a)(M,2),B=R[0],H=R[1],G=function(){var e=Object(o.a)(r.a.mark((function e(){var t,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),s(!0),e.next=4,fetch("https://v2.jokeapi.dev/joke/"+E.join(",")+"?"+S+D+J.join(",").toLowerCase()+B+"type=twopart",{headers:{"Content-type":"application/json; charset=UTF-8"}});case 4:return t=e.sent,e.next=7,t.json();case 7:return c=e.sent,t.ok&&b(c),m(!1),e.abrupt("return",t);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"buttons",children:[Object(u.jsx)("button",{id:"getJoke",disabled:f,onClick:G,children:"Get Random Joke"}),Object(u.jsx)("button",{id:"searchJoke",disabled:f,onClick:function(){v(!0),s(!1)}})]}),f&&Object(u.jsx)(d,{setSearchComponent:v,setCategories:F,setHasParams:I,setParams:A,params:J,categories:E,setLanguage:C,language:S,setConcat:H}),c&&Object(u.jsxs)("div",{className:"joke-container",children:[Object(u.jsx)("div",{className:"credits",children:Object(u.jsxs)("h6",{children:["Jokes provided by",Object(u.jsx)("a",{rel:"noreferrer",href:"https://jokeapi.dev",target:"_blank",children:" JokeAPI"})]})}),p?Object(u.jsx)("h1",{className:"loading",children:"Fetching Joke..."}):Object(u.jsxs)("div",{className:"joke",children:[Object(u.jsxs)("div",{className:"setup",children:[Object(u.jsx)("h1",{children:i.additionalInfo}),Object(u.jsx)("h1",{children:i.setup})]}),Object(u.jsx)("div",{className:"delivery",children:Object(u.jsx)("h1",{children:i.delivery})})]})]})]})};var h=function(){return Object(u.jsxs)("div",{className:"app-header",children:[Object(u.jsx)("h6",{className:"disclaimer",children:"Disclaimer: Retrieving random jokes may contain offensive/NSFW content. Use the search button to filter out content."}),Object(u.jsx)(b,{})]})},O=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,18)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,l=t.getTTFB;c(e),n(e),s(e),a(e),l(e)}))};l.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(h,{})}),document.getElementById("root")),O()}],[[17,1,2]]]);
//# sourceMappingURL=main.b7a65114.chunk.js.map