(window.webpackJsonp=window.webpackJsonp||[]).push([[18,8],{268:function(t,e,o){t.exports=o.p+"img/p1.40d33dd.jpg"},269:function(t,e,o){t.exports=o.p+"img/p2.4c88ed6.jpg"},270:function(t,e,o){t.exports=o.p+"img/p3.978e3e4.jpg"},271:function(t,e,o){t.exports=o.p+"img/p4.fa5213e.jpg"},272:function(t,e,o){t.exports=o.p+"img/p5.4623d72.jpg"},273:function(t,e,o){t.exports=o.p+"img/p6.4eb6cb7.jpg"},274:function(t,e,o){t.exports=o.p+"img/newRoom.4c7faa6.jpeg"},284:function(t,e,o){"use strict";o.r(e);o(185),o(184),o(14);var r={data:function(){return{}},computed:{user:function(){return this.$store.state.currentUser},roomID:function(){return this.room._id},room:function(){var t=Number(this.$route.params.roomId),e=this.$store.state.rooms.rooms.find((function(e){return e._id===t}));return e},freeSpaces:function(){return this.room.deskCapacity-this.room.rentedDesksCount}}},n=o(36),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"space-above"}),t._v(" "),r("div",{staticClass:"desks-container"},[r("div",{staticClass:"heading"},[r("br"),t._v(" "),r("h1",{staticClass:"container-line"},[t._v(t._s(t.room.name))]),t._v(" "),r("p",{staticClass:"left"},[t._v(t._s(t.room.city))])]),t._v(" "),r("div",{staticClass:"desks-container container"},[r("div",{staticClass:"box"},[1==t.roomID?r("img",{attrs:{src:o(268)}}):t._e(),t._v(" "),2==t.roomID?r("img",{attrs:{src:o(269)}}):t._e(),t._v(" "),3==t.roomID?r("img",{attrs:{src:o(270)}}):t._e(),t._v(" "),4==t.roomID?r("img",{attrs:{src:o(271)}}):t._e(),t._v(" "),5==t.roomID?r("img",{attrs:{src:o(272)}}):t._e(),t._v(" "),6==t.roomID?r("img",{attrs:{src:o(273)}}):t._e(),t._v(" "),t.roomID>6?r("img",{attrs:{src:o(274)}}):t._e(),t._v(" "),r("div",{staticClass:"content"},[r("div",{staticClass:"text"},[r("h2",[t._v(t._s(t.room.size)+" ROOM")]),t._v(" "),r("br"),t._v(" "),"Big"===t.room.size?r("p",[r("br"),t._v("Including: free Wi-Fi, air conditioner,\n                            computer/laptop, comfortable chair, 8 personal\n                            cabinets next to the desk, 2 pairs of headphones\n                            and a personal side place to relax, kitchen,\n                            fitness hall.\n                        ")]):r("p",[t._v("\n                            Including: free Wi-Fi, air conditioner,\n                            computer, comfortable chair, four personal\n                            cabinets next to the desk, headphones and a side\n                            place to relax with your colleagues\n                        ")]),t._v(" "),r("br"),t._v(" "),r("div",{staticClass:"grided"},[r("p",[t._v("\n                                Maximum Capacity:\n                                "+t._s(t.room.deskCapacity)+" spaces\n                            ")]),t._v(" "),r("span",[t._v("Available: "+t._s(t.freeSpaces))]),t._v(" "),r("br"),t._v(" "),t.freeSpaces>0?r("NuxtLink",{staticClass:"btn",attrs:{to:"/rooms/"+t.room._id+"/desks"}},[t._v("\n                                BOOK")]):t._e(),t._v(" "),0==t.freeSpaces?r("div",[r("p",[t._v("NO AVAILABLE SPACES")]),t._v(" "),"admin"==t.user.role?r("NuxtLink",{staticClass:"btn"},[t._v("GO TO DESKS PAGE")]):t._e()],1):t._e()],1)])])])])])])}),[],!1,null,null,null);e.default=component.exports},293:function(t,e,o){"use strict";o.r(e);var r={data:function(){return{}},middleware:"authentication"},n=o(36),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"space-above"},[o("RoomDetails"),t._v(" "),o("NuxtChild")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{RoomDetails:o(284).default})}}]);