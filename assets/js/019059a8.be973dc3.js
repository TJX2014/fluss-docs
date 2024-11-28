"use strict";
(self["webpackChunkfluss_website"] = self["webpackChunkfluss_website"] || []).push([[4944],{

/***/ 3097:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_engine_flink_reads_md_019_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-engine-flink-reads-md-019.json
const site_docs_engine_flink_reads_md_019_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"engine-flink/reads","title":"Flink Reads","description":"Fluss support streaming and batch read with Apache Flink\'s SQL & Table API. Execute the following SQL command to switch execution mode from streaming to batch, and vice versa:","source":"@site/docs/engine-flink/reads.md","sourceDirName":"engine-flink","slug":"/engine-flink/reads","permalink":"/fluss-docs/docs/engine-flink/reads","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_label":"Reads","sidebar_position":4},"sidebar":"docsSidebar","previous":{"title":"Writes","permalink":"/fluss-docs/docs/engine-flink/writes"},"next":{"title":"Lookups","permalink":"/fluss-docs/docs/engine-flink/lookups"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/engine-flink/reads.md


const frontMatter = {
	sidebar_label: 'Reads',
	sidebar_position: 4
};
const contentTitle = 'Flink Reads';

const assets = {

};



const toc = [{
  "value": "Streaming Read",
  "id": "streaming-read",
  "level": 2
}, {
  "value": "Batch Read",
  "id": "batch-read",
  "level": 2
}, {
  "value": "Limit Read",
  "id": "limit-read",
  "level": 3
}, {
  "value": "Example",
  "id": "example",
  "level": 4
}, {
  "value": "Point Query",
  "id": "point-query",
  "level": 3
}, {
  "value": "Example",
  "id": "example-1",
  "level": 4
}, {
  "value": "Aggregations",
  "id": "aggregations",
  "level": 3
}, {
  "value": "Read Options",
  "id": "read-options",
  "level": 2
}, {
  "value": "scan.startup.mode",
  "id": "scanstartupmode",
  "level": 3
}, {
  "value": "scan.partition.discovery.interval",
  "id": "scanpartitiondiscoveryinterval",
  "level": 3
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
    ol: "ol",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "flink-reads",
        children: "Flink Reads"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Fluss support streaming and batch read with ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://flink.apache.org/",
        children: "Apache Flink"
      }), "'s SQL & Table API. Execute the following SQL command to switch execution mode from streaming to batch, and vice versa:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Execute the flink job in streaming mode for current session context\nSET 'execution.runtime-mode' = 'streaming';\n\n-- Execute the flink job in batch mode for current session context\nSET 'execution.runtime-mode' = 'batch';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "streaming-read",
      children: "Streaming Read"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By default, Streaming read produces the latest snapshot on the table upon first startup, and continue to read the latest changes."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Fluss by default ensures that your startup is properly processed with all data included."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Fluss Source in streaming mode is unbounded, like a queue that never ends."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "SET 'execution.runtime-mode' = 'streaming';\nSELECT * FROM my_table ;\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can also do streaming read without reading the snapshot data, you can use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "latest"
      }), " scan mode, which only reads the changelogs (or logs) from the latest offset:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "SELECT * FROM my_table /*+ OPTIONS('scan.startup.mode' = 'latest') */;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "batch-read",
      children: "Batch Read"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "limit-read",
      children: "Limit Read"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The Fluss sources supports limiting reads for both primary-key tables and log tables, making it convenient to preview the latest ", (0,jsx_runtime.jsx)(_components.code, {
        children: "N"
      }), " records in a table."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "example",
      children: "Example"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create a table and prepare data"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE TABLE log_table (\n    `c_custkey` INT NOT NULL,\n    `c_name` STRING NOT NULL,\n    `c_address` STRING NOT NULL,\n    `c_nationkey` INT NOT NULL,\n    `c_phone` STRING NOT NULL,\n    `c_acctbal` DECIMAL(15, 2) NOT NULL,\n    `c_mktsegment` STRING NOT NULL,\n    `c_comment` STRING NOT NULL\n);\n\nINSERT INTO log_table\nVALUES (1, 'Customer1', 'IVhzIApeRb ot,c,E', 15, '25-989-741-2988', 711.56, 'BUILDING', 'comment1'),\n       (2, 'Customer2', 'XSTf4,NCwDVaWNe6tEgvwfmRchLXak', 13, '23-768-687-3665', 121.65, 'AUTOMOBILE', 'comment2'),\n       (3, 'Customer3', 'MG9kdTD2WBHm', 1, '11-719-748-3364', 7498.12, 'AUTOMOBILE', 'comment3');\n;\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Query from table."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Execute the flink job in batch mode for current session context\nSET 'execution.runtime-mode' = 'batch';\nSET 'sql-client.execution.result-mode' = 'tableau';\n\nSELECT * FROM log_table LIMIT 10;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "point-query",
      children: "Point Query"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Fluss source supports point queries for primary-key tables, allowing you to inspect specific records efficiently. Currently, this functionality is exclusive to primary-key tables."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "example-1",
      children: "Example"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create a table and prepare data"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE TABLE pk_table (\n    `c_custkey` INT NOT NULL,\n    `c_name` STRING NOT NULL,\n    `c_address` STRING NOT NULL,\n    `c_nationkey` INT NOT NULL,\n    `c_phone` STRING NOT NULL,\n    `c_acctbal` DECIMAL(15, 2) NOT NULL,\n    `c_mktsegment` STRING NOT NULL,\n    `c_comment` STRING NOT NULL,\n    PRIMARY KEY (c_custkey) NOT ENFORCED\n);\nINSERT INTO pk_table\nVALUES (1, 'Customer1', 'IVhzIApeRb ot,c,E', 15, '25-989-741-2988', 711.56, 'BUILDING', 'comment1'),\n       (2, 'Customer2', 'XSTf4,NCwDVaWNe6tEgvwfmRchLXak', 13, '23-768-687-3665', 121.65, 'AUTOMOBILE', 'comment2'),\n       (3, 'Customer3', 'MG9kdTD2WBHm', 1, '11-719-748-3364', 7498.12, 'AUTOMOBILE', 'comment3');\n;\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Query from table."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Execute the flink job in batch mode for current session context\nSET 'execution.runtime-mode' = 'batch';\nSET 'sql-client.execution.result-mode' = 'tableau';\n\nSELECT * FROM pk_table WHERE c_custkey = 1;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "aggregations",
      children: "Aggregations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Fluss source support pushdown count aggregation for the log table in batch mode. It is useful to preview the total number of the log table;"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Execute the flink job in batch mode for current session context\nSET 'execution.runtime-mode' = 'batch';\nSET 'sql-client.execution.result-mode' = 'tableau';\n\nSELECT COUNT(*) FROM log_table;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "read-options",
      children: "Read Options"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "scanstartupmode",
      children: "scan.startup.mode"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The scan startup mode enables you to specify the starting point for data consumption. Fluss currently supports the following ", (0,jsx_runtime.jsx)(_components.code, {
        children: "scan.startup.mode"
      }), " options:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "initial"
        }), " (default): For primary key tables, it first consumes the full data set and then consumes incremental data. For log tables, it starts consuming from the earliest offset."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "earliest"
        }), ": For primary key tables, it starts consuming from the earliest changelog offset; for log tables, it starts consuming from the earliest log offset."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "latest"
        }), ": For primary key tables, it starts consuming from the latest changelog offset; for log tables, it starts consuming from the latest log offset."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "timestamp"
        }), ": For primary key tables, it starts consuming the changelog from a specified time (defined by the configuration item ", (0,jsx_runtime.jsx)(_components.code, {
          children: "scan.startup.timestamp"
        }), "); for log tables, it starts consuming from the offset corresponding to the specified time."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can dynamically apply the scan parameters via SQL hints. For instance, the following SQL statement temporarily sets the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "scan.startup.mode"
      }), " to latest when consuming the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "log_table"
      }), " table."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "SELECT * FROM log_table /*+ OPTIONS('scan.startup.mode' = 'latest') */;\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Also, the following SQL statement temporarily sets the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "scan.startup.mode"
      }), " to timestamp when consuming the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "log_table"
      }), " table."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- timestamp mode with microseconds.\nSELECT * FROM log_table\n/*+ OPTIONS('scan.startup.mode' = 'timestamp',\n'scan.startup.timestamp' = '1678883047356') */;\n\n-- timestamp mode with a time string format\nSELECT * FROM log_table\n/*+ OPTIONS('scan.startup.mode' = 'timestamp',\n'scan.startup.timestamp' = '2023-12-09 23:09:12') */;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "scanpartitiondiscoveryinterval",
      children: "scan.partition.discovery.interval"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The interval in milliseconds for the Fluss source to discover the new partitions for partitioned table while scanning.  The default value is 10s. A non-positive value disables the partition discovery."
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