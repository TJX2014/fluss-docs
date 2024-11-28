"use strict";
(self["webpackChunkfluss_website"] = self["webpackChunkfluss_website"] || []).push([[3976],{

/***/ 2053:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_intro_md_0e3_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-intro-md-0e3.json
const site_docs_intro_md_0e3_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"intro","title":"What is Fluss?","description":"Fluss is a streaming storage built for real-time analytics which can serve as the real-time data layer for Lakehouse architectures.","source":"@site/docs/intro.md","sourceDirName":".","slug":"/intro","permalink":"/fluss-docs/docs/intro","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_label":"Introduction","sidebar_position":1},"sidebar":"docsSidebar","next":{"title":"Flink","permalink":"/fluss-docs/docs/quickstart/flink"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/intro.md


const frontMatter = {
	sidebar_label: 'Introduction',
	sidebar_position: 1
};
const contentTitle = 'What is Fluss?';

const assets = {

};



const toc = [{
  "value": "Where to go Next?",
  "id": "where-to-go-next",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "what-is-fluss",
        children: "What is Fluss?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Fluss is a streaming storage built for real-time analytics which can serve as the real-time data layer for Lakehouse architectures."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "arch",
        src: (__webpack_require__(1794)/* ["default"] */ .A) + "",
        width: "3327",
        height: "889"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["It bridges the gap between ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "streaming data"
      }), " and the data ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lakehouse"
      }), " by enabling low-latency, high-throughput data ingestion and processing while seamlessly integrating with popular compute engines like ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Apache Flink"
      }), ", while ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Apache Spark"
      }), ", and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "StarRocks"
      }), " are coming soon."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Fluss supports ", (0,jsx_runtime.jsx)(_components.code, {
        children: "streaming reads"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "writes"
      }), " with sub-second latency and stores data in a columnar format, enhancing query performance and reducing storage costs.\nIt offers flexible table types, including append-only ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Log Tables"
      }), " and updateable ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "PrimaryKey Tables"
      }), ", to accommodate diverse real-time analytics and processing needs."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["With built-in replication for fault tolerance, horizontal scalability, and advanced features like high-QPS lookup joins and bulk read/write operations, Fluss is ideal for powering ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "real-time analytics"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "AI/ML pipelines"
      }), ", and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "streaming data warehouses"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Fluss (German: river, pronounced ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/flus/"
        }), ")"]
      }), " enables streaming data continuously converging, distributing and flowing into lakes, like a river 🌊"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "where-to-go-next",
      children: "Where to go Next?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/quickstart/flink/",
          children: "QuickStart"
        }), ": Get started with Fluss in minutes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/concepts/architecture/",
          children: "Architecture"
        }), ": Learn about Fluss's architecture."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/table-design/overview",
          children: "Table Design"
        }), ": Explore Fluss's table types, partitions and buckets."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/streaming-lakehouse/overview/",
          children: "Lakehouse"
        }), ": Integrate Fluss with your Lakehouse to bring low-latency data to your Lakehouse analytics."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/dev/ide-setup/",
          children: "Development"
        }), ": Set up your development environment and contribute to the community."]
      }), "\n"]
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

/***/ 1794:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/fluss-40f18feb02c2121ddfbd325df7039345.png");

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