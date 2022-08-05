export { default as AddDesk } from '../../components/AddDesk.vue'
export { default as AddRoom } from '../../components/AddRoom.vue'
export { default as AllDesks } from '../../components/AllDesks.vue'
export { default as AllRoomsDesign } from '../../components/AllRoomsDesign.vue'
export { default as Bookings } from '../../components/Bookings.vue'
export { default as DeskCard } from '../../components/DeskCard.vue'
export { default as DeskControl } from '../../components/DeskControl.vue'
export { default as DeskDetails } from '../../components/DeskDetails.vue'
export { default as Heading } from '../../components/Heading.vue'
export { default as Home } from '../../components/Home.vue'
export { default as Profile } from '../../components/Profile.vue'
export { default as ProfileDesk } from '../../components/ProfileDesk.vue'
export { default as RentForm } from '../../components/RentForm.vue'
export { default as RoomCard } from '../../components/RoomCard.vue'
export { default as RoomDetails } from '../../components/RoomDetails.vue'
export { default as UsersControl } from '../../components/UsersControl.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
