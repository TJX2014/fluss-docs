"use strict";
(self["webpackChunkfluss_website"] = self["webpackChunkfluss_website"] || []).push([[8908],{

/***/ 2395:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_src_pages_roadmap_md_b4e_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-pages/default/site-src-pages-roadmap-md-b4e.json
const site_src_pages_roadmap_md_b4e_namespaceObject = /*#__PURE__*/JSON.parse('{"type":"mdx","permalink":"/fluss-docs/roadmap","source":"@site/src/pages/roadmap.md","title":"Fluss Roadmap","description":"This roadmap means to provide users and contributors with a high-level summary of ongoing efforts in the Fluss community.","frontMatter":{},"unlisted":false}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./src/pages/roadmap.md


const frontMatter = {};
const contentTitle = 'Fluss Roadmap';

const assets = {

};



const toc = [{
  "value": "Kafka Protocol Compatibility",
  "id": "kafka-protocol-compatibility",
  "level": 2
}, {
  "value": "Flink Integration",
  "id": "flink-integration",
  "level": 2
}, {
  "value": "Streaming Lakehouse",
  "id": "streaming-lakehouse",
  "level": 2
}, {
  "value": "ZooKeeper Removal",
  "id": "zookeeper-removal",
  "level": 2
}, {
  "value": "Storage Engine",
  "id": "storage-engine",
  "level": 2
}, {
  "value": "Zero Disks",
  "id": "zero-disks",
  "level": 2
}, {
  "value": "Maintenance",
  "id": "maintenance",
  "level": 2
}, {
  "value": "Miscellaneous",
  "id": "miscellaneous",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
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
        id: "fluss-roadmap",
        children: "Fluss Roadmap"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This roadmap means to provide users and contributors with a high-level summary of ongoing efforts in the Fluss community.\nThe roadmap contains both efforts working in process as well as completed efforts, so that users may get a better impression of the overall status and direction of those developments."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "kafka-protocol-compatibility",
      children: "Kafka Protocol Compatibility"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Fluss will support the Kafka network protocol to enable users to use Fluss as a drop-in replacement for Kafka. This will allow users to leverage Fluss's real-time storage capabilities while maintaining compatibility with existing Kafka applications."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flink-integration",
      children: "Flink Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Fluss will provide deep integration with Apache Flink, enabling users a single engine experience for building real-time analytics applications.\nThe integration will include:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Support for Flink ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "DataStream API"
        }), " to read/write data from/to Fluss."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Support new ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://cwiki.apache.org/confluence/display/FLINK/FLIP-486%3A+Introduce+A+New+DeltaJoin",
          children: "Delta Join"
        }), " to address the pain-points of Stream-Stream Join."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "More pushdown optimizations: Filter Pushdown, Partition Pruning, Aggregation Pushdown, etc."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Upgrade the Rule-Based Optimization into Cost-Based Optimization in Flink SQL streaming planner with leveraging statistics in Fluss tables."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "streaming-lakehouse",
      children: "Streaming Lakehouse"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Support for Iceberg as Lakehouse Storage. And DeltaLake, Hudi as well."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Support Union Read for Spark, Trino, StarRocks."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Avoid data shuffle in compaction service to directly compact Arrow files of Fluss into Parquet files of data lakes."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "zookeeper-removal",
      children: "ZooKeeper Removal"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Fluss currently utilizes ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ZooKeeper"
      }), " for cluster coordination, metadata storage, and cluster configuration management.\nIn upcoming releases, ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ZooKeeper will be replaced"
      }), " by ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "KvStore"
      }), " for metadata storage and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Raft"
      }), " for cluster coordination and ensuring consistency.\nThis transition aims to streamline operations and enhance system reliability."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "storage-engine",
      children: "Storage Engine"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Support for complex data types: Array, Map, Struct, Variant/JSON."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Support for schema evolution."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Support for secondary index for Delta Join with Flink."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Support for buckets rescale."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "zero-disks",
      children: "Zero Disks"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Fluss currently utilizes a tiered storage architecture to significantly reduce storage costs and operational complexities.\nHowever, the Fluss community is actively investing in the Zero Disk architecture,\nwhich aims to completely replace local disks with S3 storage. This transition will enable Fluss to achieve a\nserverless, stateless, and elastic design, significantly minimizing operational overhead while eliminating inter-zone networking costs."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "maintenance",
      children: "Maintenance"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Re-balance Cluster"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Gray Upgrade"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "miscellaneous",
      children: "Miscellaneous"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Upgrade programing language to Java 17."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Support for more connectors: Spark, Presto, DuckDB, etc."
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