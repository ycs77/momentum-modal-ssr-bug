import { createSSRApp, h } from 'vue'
import { renderToString } from 'vue/server-renderer'
import { createInertiaApp } from '@inertiajs/vue3'
import createServer from '@inertiajs/vue3/server'
import Layout from './layouts/Layout.vue'

async function resolver(name) {
  const pages = import.meta.glob('./pages/**/*.vue', { eager: true })
  let page = pages[`./pages/${name}.vue`]
  page = page.default || page
  page.layout ??= Layout
  return page
}

createServer(page =>
  createInertiaApp({
    page,
    render: renderToString,
    resolve: resolver,
    setup({ App, props, plugin }) {
      return createSSRApp({ render: () => h(App, props) })
        .use(plugin)
    },
    progress: {
      color: '#F24',
    },
  }),
)
