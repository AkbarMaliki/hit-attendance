(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-absen-selfie"],{"0538":function(e,t,a){"use strict";var n=a("1c0b"),s=a("861d"),i=[].slice,r={},o=function(e,t,a){if(!(t in r)){for(var n=[],s=0;s<t;s++)n[s]="a["+s+"]";r[t]=Function("C,a","return new C("+n.join(",")+")")}return r[t](e,a)};e.exports=Function.bind||function(e){var t=n(this),a=i.call(arguments,1),r=function(){var n=a.concat(i.call(arguments));return this instanceof r?o(t,n.length,n):t.apply(e,n)};return s(t.prototype)&&(r.prototype=t.prototype),r}},"07ac":function(e,t,a){var n=a("23e7"),s=a("6f53").values;n({target:"Object",stat:!0},{values:function(e){return s(e)}})},"0d03":function(e,t,a){var n=a("6eeb"),s=Date.prototype,i="Invalid Date",r="toString",o=s[r],c=s.getTime;new Date(NaN)+""!=i&&n(s,r,(function(){var e=c.call(this);return e===e?o.call(this):i}))},6157:function(e,t,a){"use strict";a("b831")},"6f53":function(e,t,a){var n=a("83ab"),s=a("df75"),i=a("fc6a"),r=a("d1e7").f,o=function(e){return function(t){var a,o=i(t),c=s(o),l=c.length,u=0,d=[];while(l>u)a=c[u++],n&&!r.call(o,a)||d.push(e?[a,o[a]]:o[a]);return d}};e.exports={entries:o(!0),values:o(!1)}},b831:function(e,t,a){},c0b6:function(e,t,a){var n=a("23e7"),s=a("0538");n({target:"Function",proto:!0},{bind:s})},cfc3:function(e,t,a){var n=a("74e8");n("Float32",(function(e){return function(t,a,n){return e(this,t,a,n)}}))},d81d:function(e,t,a){"use strict";var n=a("23e7"),s=a("b727").map,i=a("1dde"),r=i("map");n({target:"Array",proto:!0,forced:!r},{map:function(e){return s(this,e,arguments.length>1?arguments[1]:void 0)}})},e1b7:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"py-4 px-2 shadow bg-blue-light text-white font-bold"},[a("p",{staticClass:"mt-1 font-semibold text-xs float-right mr-3"},[e._v(" Face Recognition ")]),a("div",{staticClass:"ml-2 cursor-pointer",on:{click:function(t){return e.$router.go(-1)}}},[a("svg",{staticClass:"d-inline mr-1",staticStyle:{fill:"white"},attrs:{width:"20",height:"20",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512"}},[a("path",{attrs:{d:"M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"}})])])]),a("div",{staticClass:"row"},[e.streamOn?a("div",{staticClass:"col-sm-12 text-center"},[a("video",{attrs:{id:"videoQRCODE",autoplay:"",muted:""},domProps:{muted:!0}}),a("div",{staticClass:"text-center rounded-t-lg shadow background_gps p-3"},[a("div",{staticStyle:{height:"70px"}},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-9"},[a("div",{staticClass:"text-center"},[a("button",{staticClass:"p-3 mt-2 btn btn-sm btn-warning rounded-lg font-semibold btn-block text-sm",attrs:{type:"submit"},on:{click:e.startScan}},[a("svg",{staticClass:"d-inline mr-2",staticStyle:{fill:"black"},attrs:{width:"17",height:"17",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[a("path",{attrs:{d:"M220.6 121.2L271.1 96 448 96v96H333.2c-21.9-15.1-48.5-24-77.2-24s-55.2 8.9-77.2 24H64V128H192c9.9 0 19.7-2.3 28.6-6.8zM0 128V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H271.1c-9.9 0-19.7 2.3-28.6 6.8L192 64H160V48c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16l0 16C28.7 64 0 92.7 0 128zM168 304a88 88 0 1 1 176 0 88 88 0 1 1 -176 0z"}})]),e._v(" Take Picture ")])])])]),a("p",{staticClass:"text-xs font-semibold text-white"},[e._v(" Remove Mask and any other accessories before take a selfie ! ")])]),a("br"),a("br"),a("br"),a("br"),a("br")]),a("div",{staticClass:"text-xs p-3 font-semibold"},[""!=e.message?a("p",[e._v(e._s(e.message))]):e._e()]),a("canvas",{staticClass:"d-none",staticStyle:{overflow:"auto"},attrs:{id:"canvas"}})]):a("div",{staticClass:"col-sm-12",staticStyle:{height:"100vh"},on:{click:function(t){e.getStream("video"),e.streamOn=!0,e.$forceUpdate()}}},[e._m(0)])])])},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"d-flex justify-content-center align-items-center shadow-lg rounded-lg",staticStyle:{height:"90vh"}},[a("div",{staticStyle:{width:"100%"}},[a("p",{staticClass:"text-center text-xl font-semibold"},[e._v(" Klik disini untuk Start Camera! ")])])])}],i=a("1da1"),r=(a("96cf"),a("d3b7"),a("3ca3"),a("ddb0"),a("d81d"),a("4160"),a("159b"),a("cfc3"),a("9a8c"),a("a975"),a("735e"),a("c1ac"),a("d139"),a("3a7b"),a("d5d6"),a("82f8"),a("e91f"),a("60bd"),a("5f96"),a("3280"),a("3fcc"),a("ca91"),a("25a1"),a("cd26"),a("3c5d"),a("2954"),a("649e"),a("219c"),a("170b"),a("b39a"),a("72f7"),a("ace4"),a("07ac"),a("b0c0"),a("e25e"),a("0d03"),a("4795"),a("2b3d"),a("c0b6"),a("bc3a"),a("2f0b")),o=a("75bf"),c=new r["a"]("ci"),l={data:function(){return{isIos:!1,countIos:0,streamOn:!1,expressions:null,listUsers:[],urutanEkspresi:[],message:"",listExpressions:[]}},methods:{startScan:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a,n,s,r,l,u,d,h,g,m,f,p;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.message="",a=document.getElementById("videoQRCODE"),n=t,e.next=6,o["createCanvasFromMedia"](a);case 6:return s=e.sent,s.style.position="absolute;",r={width:s.width,height:s.height},console.log(r),o["euclideanDistance"]([0,0],[0,20]),o["matchDimensions"](s,r),l=null,e.next=15,o["detectAllFaces"](a).withFaceLandmarks().withFaceDescriptors();case 15:return l=e.sent,console.log("fullFaceDescription",l),console.log("change",l[0].landmarks.getMouth()),u=l[0].landmarks.getMouth(),console.log("mulut",u),console.log(l),d=o["resizeResults"](l,r),console.log(s.width,s.height),s.getContext("2d").clearRect(0,0,s.width,s.height),o["draw"].drawDetections(s,d),o["draw"].drawFaceLandmarks(s,d),console.log(n.$store.state.employee),h=[{facejson:JSON.parse(n.$store.state.employee.faces)}],e.next=30,Promise.all(h.map(function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(console.log("label",t),!t.facejson){e.next=5;break}return a=[],t.facejson.forEach((function(e){a.push(new Float32Array(Object.values(e[0])))})),e.abrupt("return",new o["LabeledFaceDescriptors"](JSON.stringify({EMP_NO:n.$store.state.employee_id,FULL_NAME:n.$store.state.employee.name,_id:n.$store.state.employee_id}),a));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 30:if(g=e.sent,m=parseInt(n.$store.state.akurasiWajah)/100,f=new o["FaceMatcher"](g,m),p=l.map((function(e){return f.findBestMatch(e.descriptor)})),!(p.length>0)){e.next=42;break}if("unknown"!=p[0]._label){e.next=38;break}return c.alert("Wajah bukan milik "+n.$store.state.employee.name,"bg-black"),e.abrupt("return",!1);case 38:document.querySelectorAll("canvas").forEach((function(e,t){t>0&&e.remove()})),p.forEach(function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t,a){var i,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log(t),i=JSON.parse(t.label),r=JSON.parse(t._distance),console.log(r),console.log(i),n.faceid=i,100-100*r>60?(c.alert("Wajah ditemukan!","bg-green-400"),n.loading=!1,n.cekExpressionAbsen(i,s)):c.alert("Persentase hanya ".concat(100-100*r),"bg-green-400");case 7:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),e.next=44;break;case 42:n.loading=!1,c.alert("Data tidak ada atau tidak ditemukan di gang ini!");case 44:e.next=50;break;case 46:e.prev=46,e.t0=e["catch"](0),console.log("error"),c.alert("Recognition wajah gagal");case 50:case"end":return e.stop()}}),e,null,[[0,46]])})))()},cekExpressionAbsen:function(e,t){var a=this;if(0==this.listExpressions.length&&(this.listExpressions[0]=this.expressions),0==this.listUsers.length?this.listUsers[0]=e.EMP_NO:this.listUsers[1]=e.EMP_NO,this.listUsers.length>0&&this.listExpressions.length>0){if(this.listUsers[0]!=e.EMP_NO)return this.listUsers[0]=null,void c.alert("Data Perbandingan user tidak sama!");this.listExpressions[0]==this.expressions?this.urutanEkspresi=[]:this.message="Wajah Milik ".concat(e["FULL_NAME"],", \n Gunakan Ekspresi yang berbeda!!"),a.prosesAbsen(t)}this.$forceUpdate()},prosesAbsen:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a,n,s,i,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:window.checktimes.remove({},{multi:!0},(function(e,t){})),a=t,c.loadingOn(),n=document.getElementById("videoQRCODE"),s=document.createElement("canvas"),s.width=n.videoWidth,s.height=n.videoHeight,i=s.getContext("2d"),i.drawImage(n,0,0,s.width,s.height),r=s.toDataURL("image/png"),t.$store.state.checktimes.unshift({id_user:t.$store.state.hit_id,name:t.$store.state.employee.name,checktime:a.formatTgl(new Date,"YYYY-MM-DD HH:mm:ss"),dataURL:r,work_location:a.$store.state.employee.work_location_id,lat:a.$store.state.lat,lng:a.$store.state.lng,type_location:a.$store.state.location,source_data:"local"}),window.checktimes.insert(t.$store.state.checktimes,(function(e,t){})),c.alert("Absen Berhasil","bg-blue-400"),c.loadingOff(),t.$router.push("/absen/checktime");case 15:case"end":return e.stop()}}),e)})))()},getImage:function(){var e=this,t=document.getElementById("videoQRCODE"),a=document.getElementById("canvas");a.width=t.videoWidth,a.height=t.videoHeight,a.getContext("2d").drawImage(t,0,0,t.videoWidth,t.videoHeight),a.toBlob((function(t){var a=new File([t],"photo.jpg",{type:"image/jpeg"});e.prosesAbsen(a)}),"image/jpeg")},getStream:function(e){var t=this;setTimeout((function(){var e=document.getElementById("videoQRCODE");console.log("video",e),navigator.mediaDevices.getUserMedia({video:{facingMode:t.$store.state.camera?"user":"environment",resizeMode:"true"}}).then((function(a){t.loading=!1,t.$forceUpdate(),e.srcObject=a,e.src=window.URL.createObjectURL(a),e.play()}))}),2e3)},getUserMedia:function(e){if(navigator.mediaDevices)return navigator.mediaDevices.getUserMedia({video:{facingMode:"user"}});var t=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia;return t?new Promise((function(a,n){t.bind(navigator)(e,a,n)})):void 0},formatTgl:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY-MM-DD";return this.$datefns.format(new Date(e),t)}},mounted:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e;case 1:case"end":return t.stop()}}),t)})))()}},u=l,d=(a("6157"),a("2877")),h=Object(d["a"])(u,n,s,!1,null,"463bb5ed",null);t["default"]=h.exports}}]);
//# sourceMappingURL=page-absen-selfie.ee4fbe7d.js.map