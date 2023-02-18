import { createSSRApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import { modal } from 'momentum-modal'
import Layout from './layouts/Layout.vue'
import '../css/app.css'

async function resolver(name) {
  const pages = import.meta.glob('./pages/**/*.vue', { eager: true })
  let page = pages[`./pages/${name}.vue`]
  page = page.default || page
  page.layout ??= Layout
  return page
}

createInertiaApp({
  resolve: resolver,
  setup({ el, App, props, plugin }) {
    createSSRApp({ render: () => h(App, props) })
      .use(modal, { resolve: resolver })
      .use(plugin)
      .mount(el)
  },
  progress: {
    color: '#F24',
  },
})
