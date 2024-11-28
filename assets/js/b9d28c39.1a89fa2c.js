"use strict";
(self["webpackChunkfluss_website"] = self["webpackChunkfluss_website"] || []).push([[7113],{

/***/ 5769:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_streaming_lakehouse_integrate_data_lakes_paimon_md_b9d_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-streaming-lakehouse-integrate-data-lakes-paimon-md-b9d.json
const site_docs_streaming_lakehouse_integrate_data_lakes_paimon_md_b9d_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"streaming-lakehouse/integrate-data-lakes/paimon","title":"Paimon","description":"Apahce Paimon innovatively combines lake format and LSM structure, bringing efficient updates into the lake architecture.","source":"@site/docs/streaming-lakehouse/integrate-data-lakes/paimon.md","sourceDirName":"streaming-lakehouse/integrate-data-lakes","slug":"/streaming-lakehouse/integrate-data-lakes/paimon","permalink":"/fluss-docs/docs/streaming-lakehouse/integrate-data-lakes/paimon","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_label":"Paimon","sidebar_position":1},"sidebar":"docsSidebar","previous":{"title":"Lakehouse Overview","permalink":"/fluss-docs/docs/streaming-lakehouse/overview"},"next":{"title":"Configuration","permalink":"/fluss-docs/docs/maintenance/configuration"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/streaming-lakehouse/integrate-data-lakes/paimon.md


const frontMatter = {
	sidebar_label: 'Paimon',
	sidebar_position: 1
};
const contentTitle = 'Paimon';

const assets = {

};



const toc = [{
  "value": "Introduction",
  "id": "introduction",
  "level": 2
}, {
  "value": "Read tables",
  "id": "read-tables",
  "level": 2
}, {
  "value": "Read by Flink",
  "id": "read-by-flink",
  "level": 3
}, {
  "value": "Read data only in Paimon",
  "id": "read-data-only-in-paimon",
  "level": 4
}, {
  "value": "Union read data in Fluss and Paimon",
  "id": "union-read-data-in-fluss-and-paimon",
  "level": 4
}, {
  "value": "Read by other engines",
  "id": "read-by-other-engines",
  "level": 3
}, {
  "value": "Data Type Mapping",
  "id": "data-type-mapping",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    header: "header",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
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
        id: "paimon",
        children: "Paimon"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://paimon.apache.org/",
        children: "Apahce Paimon"
      }), " innovatively combines lake format and LSM structure, bringing efficient updates into the lake architecture.\nTo integrate Fluss with Paimon, you must enable lakehouse storage and configure Paimon as lakehouse storage. See more detail about ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/fluss-docs/docs/maintenance/tiered-storage/lakehouse-storage#enable-lakehouse-storage",
        children: "Enable Lakehouse Storage"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When a table with option ", (0,jsx_runtime.jsx)(_components.code, {
        children: "'table.datalake.enabled' = 'true'"
      }), " is created or altered in Fluss, Fluss will create a corresponding Paimon table with same table path as well.\nThe schema of the Paimon table is as same as the schema of the Fluss table, except for there are two extra columns ", (0,jsx_runtime.jsx)(_components.code, {
        children: "__offset"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "__timestamp"
      }), " appended to the last.\nThese two columns are used to help Fluss client to consume the data in Paimon in streaming way like seek by offset/timestamp, etc."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Then datalake tiering service compacts the data from Fluss to Paimon continuously. For primary key table, it will also generate change log in Paimon format which\nenables you streaming consume it in Paimon way."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "read-tables",
      children: "Read tables"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "read-by-flink",
      children: "Read by Flink"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For the table with option ", (0,jsx_runtime.jsx)(_components.code, {
        children: "'table.datalake.enabled' = 'true'"
      }), ", there are two part of data: the data remains in Fluss and the data already in Paimon.\nNow, you have two view of the table: one view is the Paimon data which has minute-level latency, one view is the full data union Fluss and Paimon data\nwhich is the latest within second-level latency."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Flink empowers you to decide to choose which view:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Only Paimon means a better analytics performance but with worse data freshness"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Combing Fluss and Paimon means a better data freshness but with analytics performance degrading"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "read-data-only-in-paimon",
      children: "Read data only in Paimon"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To point to read data in Paimon, you must specify the table with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$lake"
      }), " suffix, the following\nSQL shows how to do that:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        metastring: "title=\"Flink SQL\"",
        children: "-- assume we have a table named `orders`\n\n-- read from paimon\nSELECT COUNT(*) FROM orders$lake;\n\n-- we can also query the system tables \nSELECT * FROM orders$lake$snapshots;\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When specify the table with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$lake"
      }), " suffix in query, it just acts like a normal Paimon table, so it inherits all ability of Paimon table.\nYou can enjoy all the features that Flink's query supports/optimization on Paimon, like query system tables, time travel, etc. See more\nabout Paimon's ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://paimon.apache.org/docs/0.9/flink/sql-query/#sql-query",
        children: "sql-query"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "union-read-data-in-fluss-and-paimon",
      children: "Union read data in Fluss and Paimon"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To point to read the full data that union Fluss and Paimon, you just query it as a normal table without any suffix or others, the following\nSQL shows how to do that:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        metastring: "title=\"Flink SQL\"",
        children: "-- query will union data of Fluss and Paimon\nSELECT SUM(order_count) as total_orders FROM ads_nation_purchase_power;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The query may look slower than only querying data in Paimon, but it queries the full data which means better data freshness. You can\nrun the query multi-times, you should get different results in every one run as the data is written to the table continuously."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "read-by-other-engines",
      children: "Read by other engines"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["As the tired data in Paimon compacted from Fluss is also a standard Paimon table, you can use\n", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://paimon.apache.org/docs/0.9/engines/overview/",
        children: "any engines"
      }), " that support Paimon to read the data. Here, we take ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://paimon.apache.org/docs/master/engines/starrocks/",
        children: "StarRocks"
      }), " as the engine to read the data:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "First, create a Paimon catalog for StarRocks:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        metastring: "title=\"StarRocks SQL\"",
        children: "CREATE EXTERNAL CATALOG paimon_catalog\nPROPERTIES\n(\n  \"type\" = \"paimon\",\n  \"paimon.catalog.type\" = \"filesystem\",\n  \"paimon.catalog.warehouse\" = \"/tmp/paimon_data_warehouse\"\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "NOTE"
      }), ": The configuration value ", (0,jsx_runtime.jsx)(_components.code, {
        children: "paimon.catalog.type"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "paimon.catalog.warehouse"
      }), " should be same as how you configure the Paimon as lakehouse storage for Fluss in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "server.yaml"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Then, you can query the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "orders"
      }), " table by StarRocks:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        metastring: "title=\"StarRocks SQL\"",
        children: "-- the table is in database `fluss`\nSELECT COUNT(*) FROM paimon_catalog.fluss.orders;\n\n-- query the system tables, to know the snapshots of the table\nSELECT * FROM paimon_catalog.fluss.enriched_orders$snapshots;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "data-type-mapping",
      children: "Data Type Mapping"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When integrate with Paimon, Fluss automatically converts between Fluss data type and Paimon data type.\nThe following content shows the mapping between ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/fluss-docs/docs/table-design/data-types",
        children: "Fluss data type"
      }), " and Paimon data type:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Fluss Data Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Paimon Data Type"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BOOLEAN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BOOLEAN"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TINYINT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TINYINT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SMALLINT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SMALLINT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "INT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BIGINT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BIGINT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FLOAT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FLOAT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DOUBLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DOUBLE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DECIMAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DECIMAL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "STRING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "STRING"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CHAR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CHAR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DATE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DATE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TIME"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TIME"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TIMESTAMP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TIMESTAMP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TIMESTAMP WITH LOCAL TIMEZONE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TIMESTAMP WITH LOCAL TIMEZONE"
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