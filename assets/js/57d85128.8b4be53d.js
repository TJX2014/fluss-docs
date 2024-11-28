"use strict";
(self["webpackChunkfluss_website"] = self["webpackChunkfluss_website"] || []).push([[4559],{

/***/ 8662:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_table_design_table_types_pk_table_md_57d_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-table-design-table-types-pk-table-md-57d.json
const site_docs_table_design_table_types_pk_table_md_57d_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"table-design/table-types/pk-table","title":"PrimaryKey Table","description":"Basic Concept","source":"@site/docs/table-design/table-types/pk-table.md","sourceDirName":"table-design/table-types","slug":"/table-design/table-types/pk-table","permalink":"/fluss-docs/docs/table-design/table-types/pk-table","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"docsSidebar","previous":{"title":"Log Table","permalink":"/fluss-docs/docs/table-design/table-types/log-table"},"next":{"title":"Bucketing","permalink":"/fluss-docs/docs/table-design/data-distribution/bucketing"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/table-design/table-types/pk-table.md


const frontMatter = {
	sidebar_position: 2
};
const contentTitle = 'PrimaryKey Table';

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
  "value": "Partial Update",
  "id": "partial-update",
  "level": 2
}, {
  "value": "Data Queries",
  "id": "data-queries",
  "level": 2
}, {
  "value": "Changelog Generation",
  "id": "changelog-generation",
  "level": 2
}, {
  "value": "Data Consumption",
  "id": "data-consumption",
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
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "primarykey-table",
        children: "PrimaryKey Table"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "basic-concept",
      children: "Basic Concept"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "PrimaryKey Table"
      }), " in Fluss ensures the uniqueness of the specified primary key and supports ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "INSERT"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "UPDATE"
      }), ", and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "DELETE"
      }), " operations."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "PrimaryKey Table"
      }), " is created by specifying a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "PRIMARY KEY"
      }), " clause in the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "CREATE TABLE"
      }), " statement. For example, the following Flink SQL statement creates a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "PrimaryKey Table"
      }), " with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "shop_id"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "user_id"
      }), " as the primary key and distributes the data into 4 buckets:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        metastring: "title=\"Flink SQL\"",
        children: "CREATE TABLE pk_table (\n  shop_id BIGINT,\n  user_id BIGINT,\n  num_orders INT,\n  total_amount INT,\n  PRIMARY KEY (shop_id, user_id) NOT ENFORCED\n) WITH (\n  'bucket.num' = '4'\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In the Fluss primary key table, each row of data has a unique primary key.\nIf multiple entries with the same primary key are written to the Fluss primary key table, only the last entry will be retained."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/fluss-docs/docs/table-design/data-distribution/partitioning",
        children: "Partitioned PrimaryKey Table"
      }), ", the primary key must contain the partition key."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "bucket-assigning",
      children: "Bucket Assigning"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For primary key tables, Fluss always determines which bucket the data belongs to based on the hash value of the primary key for each record.\nData with the same hash value will be distributed to the same bucket."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "partial-update",
      children: "Partial Update"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For primary key tables, Fluss supports partial column updates, allowing you to write only a subset of columns to incrementally update the data and ultimately achieve complete data. Note that the columns being written must include the primary key column."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For example, consider the following Fluss primary key table:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        metastring: "title=\"Flink SQL\"",
        children: "CREATE TABLE T (\n  k INT,\n  v1 DOUBLE,\n  v2 STRING,\n  PRIMARY KEY (k) NOT ENFORCED\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Assuming that at the beginning, only the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "k"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "v1"
      }), " columns are written with the data ", (0,jsx_runtime.jsx)(_components.code, {
        children: "+I(1, 2.0)"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "+I(2, 3.0)"
      }), ", the data in T is as follows:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "k"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "v1"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "v2"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Then write to the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "k"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "v2"
      }), " columns with the data ", (0,jsx_runtime.jsx)(_components.code, {
        children: "+I(1, 't1')"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "+I(2, 't2')"
      }), ", resulting in the data in T as follows:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "k"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "v1"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "v2"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "t1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "t2"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "data-queries",
      children: "Data Queries"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For primary key tables, Fluss supports querying data directly based on the key. Please refer to the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/fluss-docs/docs/engine-flink/reads",
        children: "Flink Reads"
      }), " for detailed instructions."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "changelog-generation",
      children: "Changelog Generation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Fluss will capture the changes when inserting, updating, deleting records on the primary-key table, which is known as the changelog. Downstream consumers can directly consume the changelog to obtain the changes in the table. For example, consider the following primary key table in Fluss:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        metastring: "title=\"Flink SQL\"",
        children: "CREATE TABLE T (\n  k INT,\n  v1 DOUBLE,\n  v2 STRING,\n  PRIMARY KEY (k) NOT ENFORCED\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If the data written to the primary-key table is sequentially ", (0,jsx_runtime.jsx)(_components.code, {
        children: "+I(1, 2.0, 'apple')"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "+I(1, 4.0, 'banana')"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "-D(1, 4.0, 'banana')"
      }), ", then the following change data will be generated."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "+I(1, 2.0, 'apple')\n-U(1, 2.0, 'apple')\n+U(1, 4.0, 'banana')\n-D(1, 4.0, 'banana')\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "data-consumption",
      children: "Data Consumption"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For a primary key table, the default consumption method is a full snapshot followed by incremental data. First, the snapshot data of the table is consumed, followed by the binlog data of the table."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["It is also possible to only consume the binlog data of the table. For more details, please refer to the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/fluss-docs/docs/engine-flink/reads",
        children: "Flink Reads"
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