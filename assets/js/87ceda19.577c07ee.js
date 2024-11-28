"use strict";
(self["webpackChunkfluss_website"] = self["webpackChunkfluss_website"] || []).push([[4503],{

/***/ 623:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_table_design_data_distribution_bucketing_md_87c_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-table-design-data-distribution-bucketing-md-87c.json
const site_docs_table_design_data_distribution_bucketing_md_87c_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"table-design/data-distribution/bucketing","title":"Bucketing","description":"A bucketing strategy is a data distribution technique that divides table data into small pieces","source":"@site/docs/table-design/data-distribution/bucketing.md","sourceDirName":"table-design/data-distribution","slug":"/table-design/data-distribution/bucketing","permalink":"/fluss-docs/docs/table-design/data-distribution/bucketing","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"docsSidebar","previous":{"title":"PrimaryKey Table","permalink":"/fluss-docs/docs/table-design/table-types/pk-table"},"next":{"title":"Partitioning","permalink":"/fluss-docs/docs/table-design/data-distribution/partitioning"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/table-design/data-distribution/bucketing.md


const frontMatter = {
	sidebar_position: 1
};
const contentTitle = 'Bucketing';

const assets = {

};



const toc = [{
  "value": "Hash Bucketing",
  "id": "hash-bucketing",
  "level": 2
}, {
  "value": "Sticky Bucketing",
  "id": "sticky-bucketing",
  "level": 2
}, {
  "value": "Random-Robin Bucketing",
  "id": "random-robin-bucketing",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    p: "p",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "bucketing",
        children: "Bucketing"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A bucketing strategy is a data distribution technique that divides table data into small pieces\nand distributes the data to multiple hosts and services."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When creating a Fluss table, you can specify the number of buckets by setting ", (0,jsx_runtime.jsx)(_components.code, {
        children: "'bucket.num' = '<num>'"
      }), " property for the table, see more details in ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/fluss-docs/docs/engine-flink/ddl",
        children: "DDL"
      }), ".\nCurrently, Fluss supports 3 bucketing strategies: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Hash Bucketing"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Sticky Bucketing"
      }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Round-Robin Bucketing"
      }), ".\nPrimary-Key Tables only allows to use ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Hash Bucketing"
      }), ". Log Tables use ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Sticky Bucketing"
      }), " by default but can use other two bucketing strategies."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hash-bucketing",
      children: "Hash Bucketing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hash Bucketing"
      }), " is common in OLAP scenarios.\nThe advantage is that it can be very evenly distributed to multiple nodes, making full use of the capabilities of distributed computing, and has excellent\nscalability (rescale buckets or clusters) to cope with massive data."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Usage"
      }), ": setting ", (0,jsx_runtime.jsx)(_components.code, {
        children: "'bucket.key' = 'col1, col2'"
      }), " property for the table to specify the bucket key for hash bucketing.\nPrimary-Key Tables use primary key (excluding partition key) as the bucket key by default."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "sticky-bucketing",
      children: "Sticky Bucketing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Sticky Bucketing"
      }), " enables larger batches and reduce latency when writing records into Log Tables. After sending a batch, the sticky bucket changes. Over time, the records are spread out evenly among all the buckets.\nSticky Bucketing is the default bucketing strategy for Log Tables. This is quite important because Log Tables uses Apache Arrow as the underling data format which is efficient for large batches."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Usage"
      }), ": setting ", (0,jsx_runtime.jsx)(_components.code, {
        children: "'client.writer.bucket.no-key-assigner'='sticky'"
      }), " property for the table to enable this strategy. PrimaryKey Tables do not support this strategy."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "random-robin-bucketing",
      children: "Random-Robin Bucketing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Random-Robin Bucketing"
      }), " is a simple strategy that randomly selects a bucket for each record before writing it in. This strategy is suitable for scenarios where the data distribution is relatively uniform and the data is not skewed."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Usage"
      }), ": setting ", (0,jsx_runtime.jsx)(_components.code, {
        children: "'client.writer.bucket.no-key-assigner'='round_robin'"
      }), " property for the table to enable this strategy. PrimaryKey Tables do not support this strategy."]
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