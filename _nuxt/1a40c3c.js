(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{268:function(e,t,r){e.exports=r.p+"img/p1.40d33dd.jpg"},269:function(e,t,r){e.exports=r.p+"img/p2.4c88ed6.jpg"},270:function(e,t,r){e.exports=r.p+"img/p3.978e3e4.jpg"},271:function(e,t,r){e.exports=r.p+"img/p4.fa5213e.jpg"},272:function(e,t,r){e.exports=r.p+"img/p5.4623d72.jpg"},273:function(e,t,r){e.exports=r.p+"img/p6.4eb6cb7.jpg"},274:function(e,t,r){e.exports=r.p+"img/newRoom.4c7faa6.jpeg"},278:function(e,t,r){"use strict";r.r(t);r(25);var o={props:["desk","room"],data:function(){return{}},methods:{},computed:{location:function(){return this.room.city},roomName:function(){return this.room.name},currentUser:function(){return this.$store.state.currentUser},goTo:function(){return"admin"===this.currentUser.role||this.room.manager===this.currentUser.email||this.desk.rentedBy===this.currentUser.email}}},n=r(36),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("br"),e._v(" "),o("div",{staticClass:"box"},[1===e.desk.roomId?o("img",{attrs:{src:r(268),alt:""}}):e._e(),e._v(" "),2===e.desk.roomId?o("img",{attrs:{src:r(269),alt:""}}):e._e(),e._v(" "),3===e.desk.roomId?o("img",{attrs:{src:r(270),alt:""}}):e._e(),e._v(" "),4===e.desk.roomId?o("img",{attrs:{src:r(271),alt:""}}):e._e(),e._v(" "),5===e.desk.roomId?o("img",{attrs:{src:r(272),alt:""}}):e._e(),e._v(" "),6===e.desk.roomId?o("img",{attrs:{src:r(273),alt:""}}):e._e(),e._v(" "),e.desk.roomId>6?o("img",{attrs:{src:r(274)}}):e._e(),e._v(" "),o("div",[o("br"),e._v(" "),e.desk.rentedBy===e.currentUser.email?o("h5",[e._v("\n                RENTED BY YOU!\n            ")]):o("h5",[e._v("\n                Available:\n                "),o("span",[e._v(e._s(e.desk.isTaken?"From "+e.desk.nextAvailableDate:"NOW"))])]),e._v(" "),o("br"),e._v(" "),e.desk.isTaken?e._e():o("button",{staticClass:"btn"},[o("a",{attrs:{href:"#top"}},[e._v("Rent")])]),e._v(" "),e.desk.rentedBy===e.currentUser.email&&"admin"!==e.currentUser.role&&"RoomManager"!==e.currentUser.role?o("button",{staticClass:"btn"},[e.goTo?o("NuxtLink",{attrs:{to:"desks/"+e.desk._id}},[e._v("Details")]):e._e()],1):e._e(),e._v(" "),"admin"===e.currentUser.role||"RoomManager"===e.currentUser.role&&e.desk.roomId==e.currentUser.roomsManaged?o("button",{staticClass:"btn"},[e.goTo?o("NuxtLink",{attrs:{to:"desks/"+e.desk._id}},[e._v("Details")]):e._e()],1):e._e(),e._v(" "),"RoomManager"===e.currentUser.role&&e.desk.roomId==e.currentUser.roomsManaged&&e.desk.isTaken?o("button",{staticClass:"btn",on:{click:e.freeDesk}},[e.goTo?o("NuxtLink",{attrs:{to:"desks"}},[e._v("Release")]):e._e()],1):e._e()]),e._v(" "),o("div",{staticClass:"content"},[o("div",{staticClass:"text"},[o("h3",[e._v(e._s(e.roomName))]),e._v(" "),o("p",[e._v(e._s(e.location))]),e._v(" "),o("p",[e._v("\n                    Size: "),o("span",[e._v(e._s(e.desk.size))])]),e._v(" "),o("p",[e._v("\n                    Position: "),o("span",[e._v(e._s(e.desk.position))])]),e._v(" "),o("p",[o("strong",[e._v("\n                        Price: "),o("span",[e._v("$"+e._s(e.desk.price)+" per week")])])])])])])])}),[],!1,null,null,null);t.default=component.exports}}]);