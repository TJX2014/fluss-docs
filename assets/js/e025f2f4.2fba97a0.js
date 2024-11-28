"use strict";
(self["webpackChunkfluss_website"] = self["webpackChunkfluss_website"] || []).push([[1341],{

/***/ 1880:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_maintenance_tiered_storage_overview_md_e02_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-maintenance-tiered-storage-overview-md-e02.json
const site_docs_maintenance_tiered_storage_overview_md_e02_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"maintenance/tiered-storage/overview","title":"Overview","description":"With tired storage, Fluss allows you to scale compute and storage resources independently, provides better client isolation, and","source":"@site/docs/maintenance/tiered-storage/overview.md","sourceDirName":"maintenance/tiered-storage","slug":"/maintenance/tiered-storage/overview","permalink":"/fluss-docs/docs/maintenance/tiered-storage/overview","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"docsSidebar","previous":{"title":"Amazon S3","permalink":"/fluss-docs/docs/maintenance/filesystems/s3"},"next":{"title":"Remote Storage","permalink":"/fluss-docs/docs/maintenance/tiered-storage/remote-storage"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/maintenance/tiered-storage/overview.md


const frontMatter = {
	sidebar_position: 1
};
const contentTitle = 'Overview';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    header: "header",
    p: "p",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "overview",
        children: "Overview"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "With tired storage, Fluss allows you to scale compute and storage resources independently, provides better client isolation, and\nallow faster maintenance."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Fluss organize data into different storage layers based on its access patterns, performance requirements, and cost considerations."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Fluss ensures the recent data is stored in local for higher write/read performance and the historically data is stored in ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/fluss-docs/docs/maintenance/tiered-storage/remote-storage",
        children: "remote storage"
      }), " for lower cost."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["What's more, since the native format of Fluss's data is optimized for real-time write/read which is inevitable unfriendly to batch analytics, Fluss also introduces a ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/fluss-docs/docs/maintenance/tiered-storage/lakehouse-storage",
        children: "lakehouse storage"
      }), " which stores the data\nin the well-known open data lake format for better analytics performance. Currently, only Paimon is supported, but more kinds of data lake support are on the ways. Keep eyes on us!"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The over tired storage architecture is shown in the following diagram:"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      width: "600px",
      src: (__webpack_require__(7196)/* ["default"] */ .A)
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



/***/ }),

/***/ 7196:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/tiered-storage-7a1d1d0d91fa9b682bc80cb2713831a3.png");

/***/ }),

/***/ 8453:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useMDXComponents),
/* harmony export */   x: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/**
 * @import {MDXComponents} from 'mdx/types.js'
 * @import {Component, ReactElement, ReactNode} from 'react'
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {ReactElement}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


/***/ })

}]);