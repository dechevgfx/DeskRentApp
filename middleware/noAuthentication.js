export default function ({ store, redirect }) {
    if (store.state.currentUser) return redirect("/rooms");
  }