(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-absen-gps~cb5b63d5"],{9527:function(t,e,a){"use strict";a.r(e);var o,n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"py-4 px-2 shadow"},[a("p",{staticClass:"mt-1 font-semibold text-lg float-right mr-3"},[t._v("GPS Location")]),a("button",{staticClass:"btn btn-sm btn-dark-outline ml-2 rounded-circle px-2",staticStyle:{border:"1px solid black"},attrs:{type:"button"},on:{click:function(e){return t.$router.go(-1)}}},[a("span",{staticClass:"typcn typcn-arrow-left"})])]),a("hr",{staticClass:"my-2"}),a("div",{staticStyle:{height:"50vh",width:"100%",background:"white"},attrs:{id:"mapid"}}),a("div",[t.users?a("p",{staticClass:"font-semibold p-3"},[t._v(" Location "+t._s(t.users.data.location)+" ")]):t._e(),a("div",{staticClass:"text-center p-4"},[t.isInside?a("button",{staticClass:"btn btn-sm btn-style4 btn-block text-xl mt-4",attrs:{type:"button"},on:{click:function(e){return t.$router.push("/absen/selfie?type="+t.$route.query.type+"&target="+t.$route.query.target+"&lat="+t.lat+"&long="+t.long)}}},[t._v("Lanjut")]):t._e()])])])},s=[],i=(a("4795"),a("bc3a"),a("2f0b")),r=new i["a"]("ci"),l={data:function(){return{isInside:!1,lat:"",long:"",users:!1}},methods:{loadMap:function(){var t=this;o=new L.Map("mapid"),o.setView([this.$route.query.latitude,this.$route.query.longitude],18),L.tileLayer("http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",{maxZoom:20,subdomains:["mt0","mt1","mt2","mt3"]}).addTo(o);var e=L.circle([this.$route.query.latitude,this.$route.query.longitude],{color:"red",fillColor:"#f03",fillOpacity:.5,radius:100}).addTo(o);function a(a,n){var s=a.coords.latitude,i=a.coords.longitude;a.coords.accuracy;console.log("lat",s),console.log("long",i),t.lat=s,t["long"]=i;var r=new L.marker([s,i],{draggable:!1,autoPan:!0}).addTo(o),l=o.distance(r._latlng,e.getLatLng()),c=l<e.getRadius();t.isInside=c,e.setStyle({fillColor:c?"green":"#f03"}),t.$forceUpdate()}"geolocation"in navigator?(navigator.geolocation.getCurrentPosition((function(t){a(t,"fetched")})),navigator.geolocation.watchPosition(a)):r.alert("Geolocation API not supported.")}},mounted:function(){setTimeout((function(){r.alert("Tunggu untuk mendapatkan Pin lokasi anda!","bg-green-400")}),1e3),clearInterval(this.$store.state.qrscanInterval),this.loadMap(),this.users=JSON.parse(localStorage.getItem("absenStatus")),this.$forceUpdate(),localStorage.getItem("users")||this.$router.push("/")}},c=l,u=a("2877"),d=Object(u["a"])(c,n,s,!1,null,null,null);e["default"]=d.exports}}]);
//# sourceMappingURL=page-absen-gps~cb5b63d5.0b4071a5.js.map