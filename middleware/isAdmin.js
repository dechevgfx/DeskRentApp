export default function ({ store, redirect }) {
    if (!store.state.currentUser && store.state.currentUser.role !== 'admin') return redirect("/login");
  }