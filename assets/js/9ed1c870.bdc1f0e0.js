"use strict";
(self["webpackChunkfluss_website"] = self["webpackChunkfluss_website"] || []).push([[6264],{

/***/ 4412:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_table_design_table_types_log_table_md_9ed_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-table-design-table-types-log-table-md-9ed.json
const site_docs_table_design_table_types_log_table_md_9ed_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"table-design/table-types/log-table","title":"Log Table","description":"Basic Concept","source":"@site/docs/table-design/table-types/log-table.md","sourceDirName":"table-design/table-types","slug":"/table-design/table-types/log-table","permalink":"/fluss-docs/docs/table-design/table-types/log-table","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"docsSidebar","previous":{"title":"Overview","permalink":"/fluss-docs/docs/table-design/overview"},"next":{"title":"PrimaryKey Table","permalink":"/fluss-docs/docs/table-design/table-types/pk-table"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/table-design/table-types/log-table.md


const frontMatter = {
	sidebar_position: 1
};
const contentTitle = 'Log Table';

const assets = {

};



const toc = [{
  "value": "Basic Concept",
  "id": "basic-concept",
  "level": 2
}, {
  "value": "Bucket Assigning",
  "id": "bucket-assigning",
  "level": 2
}, {
  "value": "Data Consumption",
  "id": "data-consumption",
  "level": 2
}, {
  "value": "Log Tiering",
  "id": "log-tiering",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "log-table",
        children: "Log Table"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "basic-concept",
      children: "Basic Concept"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Log Table is a type of table in Fluss that is used to store data in the order in which it was written. Log Table only supports append records, and doesn't support Update/Delete operations.\nUsually, Log Table is used to store logs in very high-throughput, like the typical use cases of Apache Kafka."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Log Table is created by not specifying the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PRIMARY KEY"
      }), " clause in the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CREATE TABLE"
      }), " statement. For example, the following Flink SQL statement will create a log table with 3 buckets."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        metastring: "title=\"Flink SQL\"",
        children: "CREATE TABLE log_table (\n  order_id BIGINT,\n  item_id BIGINT,\n  amount INT,\n  address STRING\n)\nWITH ('bucket.num' = '3');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
          children: "bucket.num"
        }), " should be a positive integer. If this value is not provided, a default value from the cluster will be used as the bucket number for the table."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "bucket-assigning",
      children: "Bucket Assigning"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Bucketing is the fundamental unit of parallelism and scalability in Fluss.  A single table in Fluss is divided into multiple buckets. A bucket is the smallest storage unit for reads and writes. See more details about ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/fluss-docs/docs/table-design/data-distribution/bucketing",
        children: "Bucketing"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When writing records into log table, Fluss will assign each record to a specific bucket based on the bucket assigning strategy. There are 3 strategies for bucket assigning in Fluss:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sticky Bucket Strategy"
        }), ": As the default strategy, randomly select a bucket and consistently write into that bucket until a record batch is full. Sets ", (0,jsx_runtime.jsx)(_components.code, {
          children: "client.writer.bucket.no-key-assigner=sticky"
        }), " to the table property to enable this strategy."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Round-Robin Strategy"
        }), ": Select a bucket in round-robin for each record before writing it in. Sets ", (0,jsx_runtime.jsx)(_components.code, {
          children: "client.writer.bucket.no-key-assigner=round_robin"
        }), " to the table property to enable this strategy."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hash-based Bucketing"
        }), ": If ", (0,jsx_runtime.jsx)(_components.code, {
          children: "bucket.key"
        }), " property is set in the table property, Fluss will determine to assign records to bucket based on the hash value of the specified bucket keys, and the property ", (0,jsx_runtime.jsx)(_components.code, {
          children: "client.writer.bucket.no-key-assigner"
        }), " will be ignored. For example, setting ", (0,jsx_runtime.jsx)(_components.code, {
          children: "'bucket.key' = 'c1,c2'"
        }), " will assign buckets based on the values of columns ", (0,jsx_runtime.jsx)(_components.code, {
          children: "c1"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "c2"
        }), ". Different column names should be separated by commas."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "data-consumption",
      children: "Data Consumption"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For log tables, you can consume the data produced in real-time, with the consumption order of the data in each bucket matching the order in which the data was written to the Fluss table.\nSpecifically:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For two data records from the same table and the same bucket, the data that was written to the Fluss table first will be consumed first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For two data records from the same partition but different buckets, the consumption order is not guaranteed because different buckets may be processed concurrently by different data consumption jobs."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "log-tiering",
      children: "Log Tiering"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Log Table supports tiering data to different storage tiers. See more details about ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/docs/maintenance/tiered-storage/remote-storage/",
        children: "Remote Log"
      }), "."]
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