(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-main~ba4af451"],{f12b:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[t.ready?a("div",[t.modalAbsen?a("div",{staticStyle:{position:"fixed",width:"100vw",height:"100vh",left:"0",top:"0","z-index":"100000",background:"black",opacity:"0.5"},on:{click:function(s){t.modalAbsen=!1}}}):t._e(),t.modalAbsen?a("div",{staticStyle:{position:"fixed",top:"50%",left:"50%",transform:"translateX(-50%) translateY(-50%)","z-index":"100005","min-width":"90vw"}},[a("div",{staticClass:"rounded-lg shadow p-3 bg-white animate__animated animate__bounceIn"},[a("button",{staticClass:"btn btn-sm btn-dark btn-block my-1",attrs:{type:"button"},on:{click:function(s){return t.$router.push("/absen/out?latitude="+t.users.data.latitude+"&longitude="+t.users.data.longitude+"&type=IN&target=Home")}}},[t._v("WFH")]),a("button",{staticClass:"btn btn-sm btn-dark btn-block my-1",attrs:{type:"button"},on:{click:function(s){return t.$router.push("/absen?latitude="+t.users.data.latitude+"&longitude="+t.users.data.longitude+"&type=IN&target=Office")}}},[t._v("WFO")]),a("button",{staticClass:"btn btn-sm btn-dark btn-block my-1",attrs:{type:"button"},on:{click:function(s){return t.$router.push("/absen/out?latitude="+t.users.data.latitude+"&longitude="+t.users.data.longitude+"&type=IN&target=Trip")}}},[t._v("Perjalanan Dinas")])])]):t._e(),t.users?a("div",{staticClass:"bg-yellow-500",staticStyle:{height:"40vh"}},[a("div",{staticClass:"p-5 text-xs"},[t._m(0),a("p",{},[t._v("Selamat Datang!")]),a("p",{staticClass:"mt-1 font-semibold text-lg"},[t._v(t._s(t.users.data.name))]),a("p",{staticClass:"mt-1 font-semibold "},[t._v("PT. "+t._s(t.users.data.entity))])]),a("div",{staticClass:"p-4 text-xs"},[a("div",{staticClass:"shadow rounded-t-lg p-4 bg-white",staticStyle:{height:"100px"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-9"},[a("p",{staticClass:"font-semibold text-sm mb-1"},[t._v("CLOCK IN "),a("span",{class:"NORMAL"==t.users.data.clockInStatus?"text-green-400":"text-red-400"},[t._v("("+t._s(t.users.data.clockInStatus?t.users.data.clockInStatus:"-")+")")])]),a("p",{staticClass:"font-semibold"},[t._v(" Terjadwal : "+t._s(t.users.data.clockInTime)+" ")]),a("p",{staticClass:"font-semibold"},[t._v(" Check-In pada : "+t._s(t.users.data.employeeClockIn?t.users.data.employeeClockIn.split(" ")[1]:"-")+" ")])]),a("div",{staticClass:"col-3"},["NORMAL"==t.users.data.clockInStatus?a("button",{staticClass:"btn btn-sm btn-success rounded-circle p-2 px-3 mt-4",attrs:{type:"button"}},[a("span",{staticClass:"typcn typcn-tick"})]):"LATE"==t.users.data.clockInStatus?a("button",{staticClass:"btn btn-sm btn-danger rounded-circle p-2 px-3 mt-4",attrs:{type:"button"}},[a("span",{staticClass:"typcn typcn-tick"})]):a("button",{staticClass:"btn btn-sm btn-dark rounded-circle p-2 px-3 mt-4",attrs:{type:"button"}},[a("span",{staticClass:"typcn typcn-tick"})])])])]),a("div",{staticClass:"shadow rounded-b-lg p-4 mt-2 bg-white",staticStyle:{height:"100px"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-9"},[a("p",{staticClass:"font-semibold text-sm mb-1"},[t._v("CLOCK OUT "),a("span",{class:"NORMAL"==t.users.data.clockOutStatus?"text-green-400":"text-red-400"},[t._v("("+t._s(t.users.data.clockOutStatus?t.users.data.clockOutStatus:"-")+")")])]),a("p",{staticClass:"font-semibold"},[t._v(" Terjadwal : "+t._s(t.users.data.clockOutTime)+" ")]),a("p",{staticClass:"font-semibold"},[t._v(" Check-Out pada : "+t._s(t.users.data.employeeClockOut?t.users.data.employeeClockOut.split(" ")[1]:"-")+" ")])]),a("div",{staticClass:"col-3"},["NORMAL"==t.users.data.clockOutStatus?a("button",{staticClass:"btn btn-sm btn-success rounded-circle p-2 px-3 mt-4",attrs:{type:"button"}},[a("span",{staticClass:"typcn typcn-tick"})]):"LATE"==t.users.data.clockOutStatus||"EARLY OUT"==t.users.data.clockOutStatus?a("button",{staticClass:"btn btn-sm btn-danger rounded-circle p-2 px-3 mt-4",attrs:{type:"button"}},[a("span",{staticClass:"typcn typcn-tick"})]):a("button",{staticClass:"btn btn-sm btn-dark rounded-circle p-2 px-3 mt-4",attrs:{type:"button"}},[a("span",{staticClass:"typcn typcn-tick"})])])])]),a("div",{staticClass:"p-2"},[a("p",{staticClass:"font-semibold text-lg"},[t._v("Laporan Kehadiran")]),a("div",{staticClass:"p-3"},[t._l(t.users.empAttendanceSum,(function(s,e){return a("div",{key:e+"listabsen"},[a("div",{staticClass:"row shadow rounded-lg mt-2 p-2"},[a("div",{staticClass:"col-3 bg-orange-500 p-3 rounded-xl text-white"},[a("p",{staticClass:"text-lg text-center font-semibold"},[t._v(t._s(s.attendance_day))]),a("p",{staticClass:"text-lg text-center font-semibold mt-3"},[t._v(t._s(t.bulan[parseInt(s.attendance_month)-1]))])]),a("div",{staticClass:"col-5"},[a("p",{},[t._v(" Clock-In ")]),a("p",{staticClass:"font-semibold"},[t._v(" "+t._s(s.clock_in_time?s.clock_in_time:"-")+" ")]),a("hr",{staticClass:"my-2"}),a("p",{},[t._v(" Clock-Out ")]),a("p",{staticClass:"font-semibold"},[t._v(" "+t._s(s.clock_out_time?s.clock_out_time:"-")+" ")])]),a("div",{staticClass:"col-4"},["NORMAL"==s.clock_in_status?a("button",{staticClass:"btn btn-sm btn-success btn-block rounded-xl text-xs mt-3",attrs:{type:"button"}},[t._v("NORMAL")]):a("button",{staticClass:"btn btn-sm btn-danger btn-block rounded-xl text-xs mt-3",attrs:{type:"button"}},[t._v("LATE")]),a("hr",{staticClass:"my-1"}),"NORMAL"==s.clock_out_status?a("button",{staticClass:"btn btn-sm btn-success btn-block rounded-xl text-xs mt-3",attrs:{type:"button"}},[t._v("NORMAL")]):"EARLY OUT"==s.clock_out_status?a("button",{staticClass:"btn btn-sm btn-danger btn-block rounded-xl text-xs mt-3",attrs:{type:"button"}},[t._v("EARLY OUT")]):a("button",{staticClass:"btn btn-sm btn-dark btn-block rounded-xl text-xs mt-3",attrs:{type:"button"}},[t._v("-")])])])])})),a("div",{staticStyle:{height:"200px"}})],2)])])]):t._e(),a("div",{staticStyle:{position:"fixed",bottom:"0",left:"0","z-index":"1000",width:"100vw"}},[a("div",{staticClass:"row justify-content-center align-content-center"},[t._m(1),a("div",{staticClass:"col-3 bg-white   text-gray-600 hover:text-blue-500 hover:font-semibold",on:{click:t.goAbsen}},[a("div",{staticClass:"text-center ",staticStyle:{position:"absolute",top:"10%",left:"50%",transform:"translateX(-50%) translateY(-50%)","z-index":"10005"}},[a("div",{staticClass:"rounded-circle pb-3  shadow",class:"kosong"==t.absenStatus?"bg-gray-300":"clockin"==t.absenStatus?"bg-green-400 ":"clockout"==t.absenStatus?"bg-blue-600 text-white":"bg-white",staticStyle:{width:"60px",height:"60px"}},[t._m(2),a("p",{staticClass:"text-center text-xs",staticStyle:{"font-size":"10px"}},[t._v(t._s("kosong"==t.absenStatus?"bg-gray-300":"clockin"==t.absenStatus?"In":"clockout"==t.absenStatus?"Out":"-"))])])]),t._m(3)]),a("div",{staticClass:"col-4 border-t-2 border-gray-200 bg-white  text-gray-600 hover:text-blue-500 hover:font-semibold",on:{click:function(s){return t.$router.push("/profile")}}},[t._m(4),a("p",{staticClass:"text-center text-xs",staticStyle:{"font-size":"10px"}},[t._v("Profile")])])])])]):t._e()])},n=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("button",{staticClass:"btn btn-sm btn-dark  float-right mt-4 rounded-circle px-3",attrs:{type:"button"}},[a("span",{staticClass:"typcn typcn-user text-3xl"})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"col-4 border-t-2 border-gray-200 bg-white  text-gray-600 hover:text-blue-500 hover:font-semibold"},[a("p",{staticClass:" pb-1 text-xl text-center"},[a("span",{staticClass:"typcn typcn-home"})]),a("p",{staticClass:"text-center text-xs",staticStyle:{"font-size":"10px"}},[t._v("Beranda")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",{staticClass:" pt-2 text-xl text-center"},[a("span",{staticClass:"typcn typcn-code"})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"text-center ",staticStyle:{position:"absolute",top:"10%",left:"50%",transform:"translateX(-50%) translateY(-50%)","z-index":"10000"}},[a("div",{staticClass:"rounded-circle pb-3 bg-transparent border-b-2 border-gray-600",staticStyle:{width:"90px",height:"90px"}})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",{staticClass:" pb-1 text-xl text-center"},[a("span",{staticClass:"typcn typcn-user"})])}],c=a("1da1"),o=(a("96cf"),a("0d03"),a("4795"),a("bc3a")),i=a.n(o),l=a("2f0b"),r=new l["a"]("ci"),u={data:function(){return{users:null,modalAbsen:!1,ready:!1,absenStatus:"kosong",bulan:["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agust","Sept","Okt","Nov","Des"]}},methods:{goAbsen:function(){"kosong"==this.absenStatus?alert("Schedule belum ada!"):"clockin"==this.absenStatus?this.modalAbsen=!0:"clockout"==this.absenStatus?this.$router.push("/absen/out?type=OUT"):"done"==this.absenStatus&&alert("Anda sudah melakukan absen hari ini"),this.$forceUpdate()},formatTgl:function(t){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY-MM-DD";return this.$datefns.format(new Date(t),s)}},layout:"app_admin",mounted:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function s(){var a,e,n;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return n=function(t,s){},localStorage.getItem("users")||t.$router.push("/"),a=JSON.parse(r.scramble(localStorage.getItem("users"))),s.next=5,i.a.get("https://officialapp.my.id/api/bridge/attendance_status/"+a.nrp).then((function(s){console.log("res",s),t.users=s.data,localStorage.setItem("absenStatus",JSON.stringify(s.data)),t.$store.state.absenStatus=s.data,t.ready=!0,t.$forceUpdate(),t.users["workSchedule"]&&(t.absenStatus="clockin",t.users["data"]["isClockIn"]&&(t.absenStatus="clockout",t.users["data"]["isClockOut"]&&(t.absenStatus="done")))}));case 5:return e=new FormData,e.append("id_user",a.nrp),s.next=9,i.a.post("https://wajah.officialapp.my.id/api/face/check",e).then((function(s){console.log("check wajah",s.data),0==s.data.status&&t.$router.push("/daftar-wajah")}));case 9:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||setTimeout((function(){t.$router.push("/404")}),1e3),"geolocation"in navigator?(r.alert("Gps Aktif","bg-green-400"),navigator.geolocation.getCurrentPosition((function(t){n(t,"fetched")})),watchId=navigator.geolocation.watchPosition(n)):r.alert("Geolocation API not supported.");case 11:case"end":return s.stop()}}),s)})))()}},d=u,b=a("2877"),p=Object(b["a"])(d,e,n,!1,null,null,null);s["default"]=p.exports}}]);
//# sourceMappingURL=page-main~ba4af451.8a159817.js.map