(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{268:function(o,t,r){o.exports=r.p+"img/p1.40d33dd.jpg"},269:function(o,t,r){o.exports=r.p+"img/p2.4c88ed6.jpg"},270:function(o,t,r){o.exports=r.p+"img/p3.978e3e4.jpg"},271:function(o,t,r){o.exports=r.p+"img/p4.fa5213e.jpg"},272:function(o,t,r){o.exports=r.p+"img/p5.4623d72.jpg"},273:function(o,t,r){o.exports=r.p+"img/p6.4eb6cb7.jpg"},274:function(o,t,r){o.exports=r.p+"img/newRoom.4c7faa6.jpeg"},277:function(o,t,r){"use strict";r.r(t);var e={props:["room"],data:function(){return{}},methods:{navigateToRoom:function(){this.$router.push("rooms/".concat(this.room._id))}},computed:{roomID:function(){return this.room._id},location:function(){return this.room.city},freeSpaces:function(){return this.room.deskCapacity-this.room.rentedDesksCount},currentUser:function(){return this.$store.state.currentUser}}},n=r(36),component=Object(n.a)(e,(function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("div",[e("div",{staticClass:"box hovered-box",on:{click:o.navigateToRoom}},[1==o.roomID?e("img",{attrs:{src:r(268)}}):o._e(),o._v(" "),2==o.roomID?e("img",{attrs:{src:r(269)}}):o._e(),o._v(" "),3==o.roomID?e("img",{attrs:{src:r(270)}}):o._e(),o._v(" "),4==o.roomID?e("img",{attrs:{src:r(271)}}):o._e(),o._v(" "),5==o.roomID?e("img",{attrs:{src:r(272)}}):o._e(),o._v(" "),6==o.roomID?e("img",{attrs:{src:r(273)}}):o._e(),o._v(" "),o.roomID>6?e("img",{attrs:{src:r(274)}}):o._e(),o._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"text"},[e("h3",[o._v(o._s(o.room.name.toUpperCase()))]),o._v(" "),e("p",[o._v(o._s(o.location))]),o._v(" "),e("p",[o._v("Room Size: "+o._s(o.room.size))])]),o._v(" "),e("div",[e("span",[o._v("Available spaces: "+o._s(o.freeSpaces))])])])]),o._v(" "),e("br")])}),[],!1,null,null,null);t.default=component.exports}}]);