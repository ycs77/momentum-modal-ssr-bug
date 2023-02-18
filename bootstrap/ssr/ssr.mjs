import { unref, useSSRContext, mergeProps, withCtx, createVNode, renderSlot, createTextVNode, withModifiers, openBlock, createBlock, toDisplayString, createCommentVNode, withDirectives, vModelText, createSSRApp, h } from "vue";
import { ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderAttr, ssrRenderAttrs, renderToString } from "vue/server-renderer";
import { Head, useForm, Link, createInertiaApp } from "@inertiajs/vue3";
import { TransitionRoot, Dialog, TransitionChild, DialogPanel, DialogTitle } from "@headlessui/vue";
import { useModal, Modal } from "momentum-modal";
import createServer from "@inertiajs/vue3/server";
const _sfc_main$4 = {
  __name: "About",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "About Page" }, null, _parent));
      _push(`<div>About</div><!--]-->`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/About.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$4
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$3 = {
  __name: "Modal",
  __ssrInlineRender: true,
  setup(__props) {
    const { show, close, redirect } = useModal();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(TransitionRoot), mergeProps({
        appear: "",
        as: "template",
        show: unref(show)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Dialog), {
              as: "div",
              class: "relative z-10",
              onClose: unref(close)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(TransitionChild), {
                    as: "template",
                    enter: "duration-300 ease-out",
                    "enter-from": "opacity-0",
                    "enter-to": "opacity-100",
                    leave: "duration-200 ease-in",
                    "leave-from": "opacity-100",
                    "leave-to": "opacity-0",
                    onAfterLeave: unref(redirect)
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="fixed inset-0 bg-black/75 transition-opacity"${_scopeId3}></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "fixed inset-0 bg-black/75 transition-opacity" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="fixed inset-0 overflow-y-auto"${_scopeId2}><div class="flex min-h-full items-center justify-center p-4 text-center"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(TransitionChild), {
                    as: "template",
                    enter: "duration-300 ease-out",
                    "enter-from": "opacity-0 scale-95",
                    "enter-to": "opacity-100 scale-100",
                    leave: "duration-200 ease-in",
                    "leave-from": "opacity-100 scale-100",
                    "leave-to": "opacity-0 scale-95"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(DialogPanel), { class: "w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(DialogTitle), {
                                as: "h3",
                                class: "text-lg font-bold leading-6 text-gray-900"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    ssrRenderSlot(_ctx.$slots, "title", {}, null, _push6, _parent6, _scopeId5);
                                  } else {
                                    return [
                                      renderSlot(_ctx.$slots, "title")
                                    ];
                                  }
                                }),
                                _: 3
                              }, _parent5, _scopeId4));
                              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push5, _parent5, _scopeId4);
                            } else {
                              return [
                                createVNode(unref(DialogTitle), {
                                  as: "h3",
                                  class: "text-lg font-bold leading-6 text-gray-900"
                                }, {
                                  default: withCtx(() => [
                                    renderSlot(_ctx.$slots, "title")
                                  ]),
                                  _: 3
                                }),
                                renderSlot(_ctx.$slots, "default")
                              ];
                            }
                          }),
                          _: 3
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(DialogPanel), { class: "w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all" }, {
                            default: withCtx(() => [
                              createVNode(unref(DialogTitle), {
                                as: "h3",
                                class: "text-lg font-bold leading-6 text-gray-900"
                              }, {
                                default: withCtx(() => [
                                  renderSlot(_ctx.$slots, "title")
                                ]),
                                _: 3
                              }),
                              renderSlot(_ctx.$slots, "default")
                            ]),
                            _: 3
                          })
                        ];
                      }
                    }),
                    _: 3
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode(unref(TransitionChild), {
                      as: "template",
                      enter: "duration-300 ease-out",
                      "enter-from": "opacity-0",
                      "enter-to": "opacity-100",
                      leave: "duration-200 ease-in",
                      "leave-from": "opacity-100",
                      "leave-to": "opacity-0",
                      onAfterLeave: unref(redirect)
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "fixed inset-0 bg-black/75 transition-opacity" })
                      ]),
                      _: 1
                    }, 8, ["onAfterLeave"]),
                    createVNode("div", { class: "fixed inset-0 overflow-y-auto" }, [
                      createVNode("div", { class: "flex min-h-full items-center justify-center p-4 text-center" }, [
                        createVNode(unref(TransitionChild), {
                          as: "template",
                          enter: "duration-300 ease-out",
                          "enter-from": "opacity-0 scale-95",
                          "enter-to": "opacity-100 scale-100",
                          leave: "duration-200 ease-in",
                          "leave-from": "opacity-100 scale-100",
                          "leave-to": "opacity-0 scale-95"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(DialogPanel), { class: "w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all" }, {
                              default: withCtx(() => [
                                createVNode(unref(DialogTitle), {
                                  as: "h3",
                                  class: "text-lg font-bold leading-6 text-gray-900"
                                }, {
                                  default: withCtx(() => [
                                    renderSlot(_ctx.$slots, "title")
                                  ]),
                                  _: 3
                                }),
                                renderSlot(_ctx.$slots, "default")
                              ]),
                              _: 3
                            })
                          ]),
                          _: 3
                        })
                      ])
                    ])
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Dialog), {
                as: "div",
                class: "relative z-10",
                onClose: unref(close)
              }, {
                default: withCtx(() => [
                  createVNode(unref(TransitionChild), {
                    as: "template",
                    enter: "duration-300 ease-out",
                    "enter-from": "opacity-0",
                    "enter-to": "opacity-100",
                    leave: "duration-200 ease-in",
                    "leave-from": "opacity-100",
                    "leave-to": "opacity-0",
                    onAfterLeave: unref(redirect)
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "fixed inset-0 bg-black/75 transition-opacity" })
                    ]),
                    _: 1
                  }, 8, ["onAfterLeave"]),
                  createVNode("div", { class: "fixed inset-0 overflow-y-auto" }, [
                    createVNode("div", { class: "flex min-h-full items-center justify-center p-4 text-center" }, [
                      createVNode(unref(TransitionChild), {
                        as: "template",
                        enter: "duration-300 ease-out",
                        "enter-from": "opacity-0 scale-95",
                        "enter-to": "opacity-100 scale-100",
                        leave: "duration-200 ease-in",
                        "leave-from": "opacity-100 scale-100",
                        "leave-to": "opacity-0 scale-95"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(DialogPanel), { class: "w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all" }, {
                            default: withCtx(() => [
                              createVNode(unref(DialogTitle), {
                                as: "h3",
                                class: "text-lg font-bold leading-6 text-gray-900"
                              }, {
                                default: withCtx(() => [
                                  renderSlot(_ctx.$slots, "title")
                                ]),
                                _: 3
                              }),
                              renderSlot(_ctx.$slots, "default")
                            ]),
                            _: 3
                          })
                        ]),
                        _: 3
                      })
                    ])
                  ])
                ]),
                _: 3
              }, 8, ["onClose"])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Modal.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "Edit",
  __ssrInlineRender: true,
  props: {
    contact: Object
  },
  setup(__props) {
    const props = __props;
    const form = useForm({
      first_name: props.contact.first_name,
      last_name: props.contact.last_name
    });
    const submit = () => form.put("/update");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Edit Page" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, null, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Edit Contact `);
          } else {
            return [
              createTextVNode(" Edit Contact ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<form class="mt-6"${_scopeId}>`);
            if (_ctx.$page.props.error_message) {
              _push2(`<div class="px-3 py-1.5 text-sm bg-red-500 text-white rounded mb-3"${_scopeId}>${ssrInterpolate(_ctx.$page.props.error_message)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="grid grid-cols-2 gap-x-6 gap-y-8"${_scopeId}><div${_scopeId}><label${_scopeId}>First name</label><input type="text"${ssrRenderAttr("value", unref(form).first_name)} class="px-3 py-1.5 border border-gray-300 rounded"${_scopeId}>`);
            if (unref(form).errors.first_name) {
              _push2(`<span class="text-sm text-red-600"${_scopeId}>${ssrInterpolate(unref(form).errors.first_name)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div${_scopeId}><label${_scopeId}>Last name</label><input type="text"${ssrRenderAttr("value", unref(form).last_name)} class="px-3 py-1.5 border border-gray-300 rounded"${_scopeId}>`);
            if (unref(form).errors.last_name) {
              _push2(`<span class="text-sm text-red-600"${_scopeId}>${ssrInterpolate(unref(form).errors.last_name)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><div class="mt-6 flex justify-between"${_scopeId}><button type="submit"${ssrRenderAttr("loading", unref(form).processing)} class="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm rounded ml-auto"${_scopeId}> Update Contact </button></div></form>`);
          } else {
            return [
              createVNode("form", {
                class: "mt-6",
                onSubmit: withModifiers(submit, ["prevent"])
              }, [
                _ctx.$page.props.error_message ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "px-3 py-1.5 text-sm bg-red-500 text-white rounded mb-3"
                }, toDisplayString(_ctx.$page.props.error_message), 1)) : createCommentVNode("", true),
                createVNode("div", { class: "grid grid-cols-2 gap-x-6 gap-y-8" }, [
                  createVNode("div", null, [
                    createVNode("label", null, "First name"),
                    withDirectives(createVNode("input", {
                      type: "text",
                      "onUpdate:modelValue": ($event) => unref(form).first_name = $event,
                      class: "px-3 py-1.5 border border-gray-300 rounded"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, unref(form).first_name]
                    ]),
                    unref(form).errors.first_name ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: "text-sm text-red-600"
                    }, toDisplayString(unref(form).errors.first_name), 1)) : createCommentVNode("", true)
                  ]),
                  createVNode("div", null, [
                    createVNode("label", null, "Last name"),
                    withDirectives(createVNode("input", {
                      type: "text",
                      "onUpdate:modelValue": ($event) => unref(form).last_name = $event,
                      class: "px-3 py-1.5 border border-gray-300 rounded"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, unref(form).last_name]
                    ]),
                    unref(form).errors.last_name ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: "text-sm text-red-600"
                    }, toDisplayString(unref(form).errors.last_name), 1)) : createCommentVNode("", true)
                  ])
                ]),
                createVNode("div", { class: "mt-6 flex justify-between" }, [
                  createVNode("button", {
                    type: "submit",
                    loading: unref(form).processing,
                    class: "px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm rounded ml-auto"
                  }, " Update Contact ", 8, ["loading"])
                ])
              ], 40, ["onSubmit"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/Edit.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$2
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$1 = {
  __name: "Home",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Home Page" }, null, _parent));
      _push(`<div>Home</div><!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/Home.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main = {
  __name: "Layout",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div>`);
      _push(ssrRenderComponent(unref(Link), {
        href: "/",
        class: { "text-red-500 bg-red-100": _ctx.$page.url === "/" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Home `);
          } else {
            return [
              createTextVNode(" Home ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: "/about",
        class: { "text-red-500 bg-red-100": _ctx.$page.url === "/about" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` About `);
          } else {
            return [
              createTextVNode(" About ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: "/edit",
        class: { "text-red-500 bg-red-100": _ctx.$page.url === "/edit" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Edit `);
          } else {
            return [
              createTextVNode(" Edit ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(ssrRenderComponent(unref(Modal), null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/layouts/Layout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
async function resolver(name) {
  const pages = /* @__PURE__ */ Object.assign({ "./pages/About.vue": __vite_glob_0_0, "./pages/Edit.vue": __vite_glob_0_1, "./pages/Home.vue": __vite_glob_0_2 });
  let page = pages[`./pages/${name}.vue`];
  page = page.default || page;
  page.layout ?? (page.layout = _sfc_main);
  return page;
}
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    resolve: resolver,
    setup({ App, props, plugin }) {
      return createSSRApp({ render: () => h(App, props) }).use(plugin);
    },
    progress: {
      color: "#F24"
    }
  })
);
