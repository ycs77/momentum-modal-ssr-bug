# Momentum modal SSR bug

## Reproduce the bug

1. copy .env: `cp .env.example .env`
2. generate key: `php artisan key:generate`
3. build vite ssr assets: `yarn && yarn build`
4. start PHP server: `php artisan serve`
5. start SSR server: `php artisan inertia:start-ssr`
6. enter the URL in browser: `http://localhost:8000/edit`
7. enter the URL in browser: `http://localhost:8000/`
8. see the bug messages on SSR logs:

```
[Vue warn]: Unhandled error during execution of setup function 
  at <AsyncComponentWrapper key="c90b219f-a2ab-46ef-90c3-3eca64f3db96" contact= { first_name: 'Lucas', last_name: 'Yang' } >
TypeError: f.value is not a function
    at Object.resolve (file:///D:/momentum-modal-ssr-bug/node_modules/momentum-modal/dist/momentum-modal.js:8:21)
    at file:///D:/momentum-modal-ssr-bug/node_modules/momentum-modal/dist/momentum-modal.js:46:124
    at load (D:\momentum-modal-ssr-bug\node_modules\@vue\runtime-core\dist\runtime-core.cjs.js:2297:17)
    at setup (D:\momentum-modal-ssr-bug\node_modules\@vue\runtime-core\dist\runtime-core.cjs.js:2350:24)
    at callWithErrorHandling (D:\momentum-modal-ssr-bug\node_modules\@vue\runtime-core\dist\runtime-core.cjs.js:171:22)
    at setupStatefulComponent (D:\momentum-modal-ssr-bug\node_modules\@vue\runtime-core\dist\runtime-core.cjs.js:7194:29)
    at setupComponent (D:\momentum-modal-ssr-bug\node_modules\@vue\runtime-core\dist\runtime-core.cjs.js:7149:11)
    at renderComponentVNode (D:\momentum-modal-ssr-bug\node_modules\@vue\server-renderer\dist\server-renderer.cjs.js:628:17)
    at renderVNode (D:\momentum-modal-ssr-bug\node_modules\@vue\server-renderer\dist\server-renderer.cjs.js:755:22)
    at renderComponentSubTree (D:\momentum-modal-ssr-bug\node_modules\@vue\server-renderer\dist\server-renderer.cjs.js:719:13)
```
