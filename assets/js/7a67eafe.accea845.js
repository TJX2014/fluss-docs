"use strict";
(self["webpackChunkfluss_website"] = self["webpackChunkfluss_website"] || []).push([[891],{

/***/ 6467:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_streaming_lakehouse_overview_md_7a6_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-streaming-lakehouse-overview-md-7a6.json
const site_docs_streaming_lakehouse_overview_md_7a6_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"streaming-lakehouse/overview","title":"Lakehouse Overview","description":"Introducing Lakehouse","source":"@site/docs/streaming-lakehouse/overview.md","sourceDirName":"streaming-lakehouse","slug":"/streaming-lakehouse/overview","permalink":"/fluss-docs/docs/streaming-lakehouse/overview","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"docsSidebar","previous":{"title":"Lookups","permalink":"/fluss-docs/docs/engine-flink/lookups"},"next":{"title":"Paimon","permalink":"/fluss-docs/docs/streaming-lakehouse/integrate-data-lakes/paimon"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/streaming-lakehouse/overview.md


const frontMatter = {
	sidebar_position: 1
};
const contentTitle = 'Lakehouse Overview';

const assets = {

};



const toc = [{
  "value": "Introducing Lakehouse",
  "id": "introducing-lakehouse",
  "level": 2
}, {
  "value": "Streaming Lakehouse: Streaming &amp; Lakehouse Unification",
  "id": "streaming-lakehouse-streaming--lakehouse-unification",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "lakehouse-overview",
        children: "Lakehouse Overview"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introducing-lakehouse",
      children: "Introducing Lakehouse"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Lakehouse represents a new, open architecture that combines the best elements of data lakes and data warehouses.\nIt combines data lake scalability and cost-effectiveness with data warehouse reliability and performance.\nThe well known data lake format such like ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://iceberg.apache.org/",
        children: "Apache Iceberg"
      }), ", ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://paimon.apache.org/",
        children: "Apache Paimon"
      }), ", ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://hudi.apache.org/",
        children: "Apache Hudi"
      }), " and ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://delta.io/",
        children: "Delta Lake"
      }), " play key roles in the Lakehouse architecture,\nfacilitating a harmonious balance between data storage, reliability, and analytical capabilities within a single, unified platform."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Lakehouse, as a modern architecture, is effective in addressing the complex needs of data management and analytics.\nBut they can hardly meet the scenario of real-time analytics requiring sub-second-level data freshness limited by their implementation.\nWith these data lake formats, you will get into a contradictory situation:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If you require low latency, then you write and commit frequently, which means many small Parquet files. This becomes inefficient for\nreads which must now deal with masses of small files."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If you require read efficiency, then you accumulate data until you can write to large Parquet files, but this introduces\nmuch higher latency."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Overall, these data lake formats typically achieve data freshness at best within minute-level granularity, even under optimal usage conditions."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "streaming-lakehouse-streaming--lakehouse-unification",
      children: "Streaming Lakehouse: Streaming & Lakehouse Unification"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Fluss is a streaming storage supporting streaming reads and writes with sub-second low latency.\nWith ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/fluss-docs/docs/maintenance/tiered-storage/lakehouse-storage",
        children: "Lakehouse Storage"
      }), ", Fluss unifies data streaming and data Lakehouse by serving real-time streaming data on top of Lakehouse.\nThis not only brings low latency to data Lakehouse, but also adds powerful analytics to data streams."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In order to build Streaming Lakehouse, Fluss maintains a compaction service to compact the real-time data in Fluss cluster into Lakehouse storage.\nThe data in Fluss cluster (streaming Arrow format) is write-optimized for low-latency read and write, and the compacted data in Lakehouse (Parquet format with compressions) is read-optimized for powerful analytics and space-optimized for storing long-term data.\nSo the data in Fluss cluster serves real-time data layer which retains days with sub-second-level freshness, and the data in Lakehouse serves historical data layer which retains months with minute-level freshness."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "streamhouse",
        src: (__webpack_require__(577)/* ["default"] */ .A) + "",
        width: "2901",
        height: "1237"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The core idea of Streaming Lakehouse is shared data and shared metadata between stream and Lakehouse, avoiding data duplication and metadata inconsistency.\nSome powerful features it provided are:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Unified Metadata"
        }), ": Fluss provides a unified table metadata for both data in Stream and Lakehouse. So users only need to handle one table, but can access either the real-time streaming data, or the historical data, or the union of them."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Union Reads"
        }), ": Compute engines perform queries on the table will read the union of the real-time streaming data and Lakehouse data. Currently, only Flink supports union reads, but more engines are on the roadmap."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Real-Time Lakehouse"
        }), ": The union reads help Lakehouse evolving from near-real-time analytics to truly real-time analytics. This empowers businesses to gain more valuable insights from real-time data."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Analytical Streams"
        }), ": The union reads help data streams to have the powerful analytics capabilities. This reduces complexity when developing streaming applications, simplifies debugging, and allows for immediate access to live data insights."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Connect to Lakehouse Ecosystem"
        }), ": Fluss keeps the table metadata in sync with data lake catalogs while compacting data into Lakehouse. This allows external engines like Spark, StarRocks, Flink, Trino to read the data directly by connecting to the data lake catalog."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Currently, Fluss supports ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/fluss-docs/docs/streaming-lakehouse/integrate-data-lakes/paimon",
        children: "Paimon as Lakehouse Storage"
      }), ", more kinds of data lake formats are on the roadmap."]
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

/***/ 577:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/streamhouse-8069e2c65c0cf01ec3db98818555089a.png");

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