(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-test2~8356f3e3"],{"8f36":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("button",{attrs:{id:"askButton"}},[t._v("Ask for location")]),n("div",{attrs:{id:"target"}})])}],i=(n("bc3a"),{data:function(){return{files:[]}},methods:{ambilGambar:function(t){var e=t.target.files[0];alert(e)}},mounted:function(){var t=document.getElementById("target");function e(e,n){n=n||"updated";var o=document.createElement("p");o.innerHTML="Location "+n+": "+e.coords.latitude+", "+e.coords.longitude,t.appendChild(o)}"geolocation"in navigator?document.getElementById("askButton").addEventListener("click",(function(){navigator.geolocation.getCurrentPosition((function(t){e(t,"fetched")})),navigator.geolocation.watchPosition(e)})):t.innerText="Geolocation API not supported."}}),r=i,c=n("2877"),u=Object(c["a"])(r,o,a,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=page-test2~8356f3e3.fd6b3c2f.js.map