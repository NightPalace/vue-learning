import { createApp, h } from 'vue'
import './index.css';
import NotFoundComponent from './pages/404.vue';
import Home from './pages/Home.vue';
import Reactive from './pages/Reactive.vue';

const routes = {
  '/': Home,
  '/reactive': Reactive,
};

const SimpleRouterApp = {
  data: () => ({
    currentRoute: window.location.pathname,
  }),

  computed: {
    ViewComponent () {
      // const matchingPage = routes[this.currentRoute] || '404';
      // return require(`./pages/${matchingPage}.vue`).default;
      return routes[this.currentRoute] || NotFoundComponent;
    }
  },

  render () {
    return h(this.ViewComponent);
  },

  created () {
    window.addEventListener('popstate', () => {
      this.currentRoute = window.location.pathname;
    });
  }
}

createApp(SimpleRouterApp).mount('#app')