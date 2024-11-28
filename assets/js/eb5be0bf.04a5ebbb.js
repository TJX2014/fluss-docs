"use strict";
(self["webpackChunkfluss_website"] = self["webpackChunkfluss_website"] || []).push([[4836],{

/***/ 5064:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_engine_flink_lookups_md_eb5_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-engine-flink-lookups-md-eb5.json
const site_docs_engine_flink_lookups_md_eb5_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"engine-flink/lookups","title":"Flink Lookup Joins","description":"Flink lookup joins are important because they enable efficient, real-time enrichment of streaming data with reference data, a common requirement in many real-time analytics and processing scenarios.","source":"@site/docs/engine-flink/lookups.md","sourceDirName":"engine-flink","slug":"/engine-flink/lookups","permalink":"/fluss-docs/docs/engine-flink/lookups","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_label":"Lookups","sidebar_position":5},"sidebar":"docsSidebar","previous":{"title":"Reads","permalink":"/fluss-docs/docs/engine-flink/reads"},"next":{"title":"Lakehouse Overview","permalink":"/fluss-docs/docs/streaming-lakehouse/overview"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/engine-flink/lookups.md


const frontMatter = {
	sidebar_label: 'Lookups',
	sidebar_position: 5
};
const contentTitle = 'Flink Lookup Joins';

const assets = {

};



const toc = [{
  "value": "Instructions",
  "id": "instructions",
  "level": 2
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Lookup Options",
  "id": "lookup-options",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "flink-lookup-joins",
        children: "Flink Lookup Joins"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Flink lookup joins are important because they enable efficient, real-time enrichment of streaming data with reference data, a common requirement in many real-time analytics and processing scenarios."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "instructions",
      children: "Instructions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use a primary key table as a dimension table,  and the join condition must include all primary keys of the dimension table."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Fluss lookup join is in asynchronous mode by default for higher throughput. You can change the mode of lookup join as synchronous mode by setting the SQL Hint ", (0,jsx_runtime.jsx)(_components.code, {
          children: "'lookup.async' = 'false'"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create two tables."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE TABLE `fluss_catalog`.`my_db`.`orders` (\n  `o_orderkey` INT NOT NULL,\n  `o_custkey` INT NOT NULL,\n  `o_orderstatus` CHAR(1) NOT NULL,\n  `o_totalprice` DECIMAL(15, 2) NOT NULL,\n  `o_orderdate` DATE NOT NULL,\n  `o_orderpriority` CHAR(15) NOT NULL,\n  `o_clerk` CHAR(15) NOT NULL,\n  `o_shippriority` INT NOT NULL,\n  `o_comment` STRING NOT NULL,\n  PRIMARY KEY (o_orderkey) NOT ENFORCED\n);\n\n\nCREATE TABLE `fluss_catalog`.`my_db`.`customer` (\n  `c_custkey` INT NOT NULL,\n  `c_name` STRING NOT NULL,\n  `c_address` STRING NOT NULL,\n  `c_nationkey` INT NOT NULL,\n  `c_phone` CHAR(15) NOT NULL,\n  `c_acctbal` DECIMAL(15, 2) NOT NULL,\n  `c_mktsegment` CHAR(10) NOT NULL,\n  `c_comment` STRING NOT NULL,\n  PRIMARY KEY (c_custkey) NOT ENFORCED\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Perform lookup join."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "USE CATALOG `fluss_catalog`;\nUSE my_db;\n\nCREATE TEMPORARY TABLE lookup_join_sink\n(\n   order_key INT NOT NULL,\n   order_totalprice DECIMAL(15, 2) NOT NULL,\n   customer_name STRING NOT NULL,\n   customer_address STRING NOT NULL\n) WITH ('connector' = 'blackhole');\n\n-- look up join in asynchronous mode.\nINSERT INTO lookup_join_sink\nSELECT `o`.`o_orderkey`, `o`.`o_totalprice`, `c`.`c_name`, `c`.`c_address`\nFROM \n(SELECT `orders`.*, proctime() AS ptime FROM `orders`) AS `o`\nLEFT JOIN `customer`\nFOR SYSTEM_TIME AS OF `o`.`ptime` AS `c`\nON `o`.`o_custkey` = `c`.`c_custkey`;\n\n\n-- look up join in synchronous mode.\nINSERT INTO lookup_join_sink\nSELECT `o`.`o_orderkey`, `o`.`o_totalprice`, `c`.`c_name`, `c`.`c_address`\nFROM \n(SELECT `orders`.*, proctime() AS ptime FROM `orders`) AS `o`\nLEFT JOIN `customer` /*+ OPTIONS('lookup.async' = 'false') */\nFOR SYSTEM_TIME AS OF `o`.`ptime` AS `c`\nON `o`.`o_custkey` = `c`.`c_custkey`;\n\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "lookup-options",
      children: "Lookup Options"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Option"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Required"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Default"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "lookup.cache"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "optional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NONE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The caching strategy for this lookup table, including NONE, PARTIAL."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "lookup.max-retries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "optional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The maximum allowed retries if a lookup operation fails."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "lookup.partial-cache.expire-after-access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Duration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "optional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(none)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Duration to expire an entry in the cache after accessing."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "lookup.partial-cache.expire-after-write"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Duration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "optional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(none)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Duration to expire an entry in the cache after writing."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "lookup.partial-cache.cache-missing-key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "optional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Whether to store an empty value into the cache if the lookup key doesn't match any rows in the table."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "lookup.partial-cache.max-rows"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Long"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "optional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The maximum number of rows to store in the cache."
          })]
        })]
      })]
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