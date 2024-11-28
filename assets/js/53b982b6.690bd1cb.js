"use strict";
(self["webpackChunkfluss_website"] = self["webpackChunkfluss_website"] || []).push([[874],{

/***/ 6490:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_engine_flink_writes_md_53b_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-engine-flink-writes-md-53b.json
const site_docs_engine_flink_writes_md_53b_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"engine-flink/writes","title":"Flink Writes","description":"You can directly insert or update data into a Fluss table using the INSERT INTO statement.","source":"@site/docs/engine-flink/writes.md","sourceDirName":"engine-flink","slug":"/engine-flink/writes","permalink":"/fluss-docs/docs/engine-flink/writes","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_label":"Writes","sidebar_position":3},"sidebar":"docsSidebar","previous":{"title":"DDL","permalink":"/fluss-docs/docs/engine-flink/ddl"},"next":{"title":"Reads","permalink":"/fluss-docs/docs/engine-flink/reads"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/engine-flink/writes.md


const frontMatter = {
	sidebar_label: 'Writes',
	sidebar_position: 3
};
const contentTitle = 'Flink Writes';

const assets = {

};



const toc = [{
  "value": "INSERT INTO",
  "id": "insert-into",
  "level": 2
}, {
  "value": "Appending Data to the Log Table",
  "id": "appending-data-to-the-log-table",
  "level": 3
}, {
  "value": "Create a Log table.",
  "id": "create-a-log-table",
  "level": 4
}, {
  "value": "Insert data into the Log table.",
  "id": "insert-data-into-the-log-table",
  "level": 4
}, {
  "value": "Perform Data Upserts to the PrimaryKey Table.",
  "id": "perform-data-upserts-to-the-primarykey-table",
  "level": 3
}, {
  "value": "Create a primary key table.",
  "id": "create-a-primary-key-table",
  "level": 4
}, {
  "value": "Updates All Columns",
  "id": "updates-all-columns",
  "level": 4
}, {
  "value": "Partial Updates",
  "id": "partial-updates",
  "level": 4
}, {
  "value": "DELETE FROM",
  "id": "delete-from",
  "level": 2
}, {
  "value": "UPDATE",
  "id": "update",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    header: "header",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "flink-writes",
        children: "Flink Writes"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can directly insert or update data into a Fluss table using the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "INSERT INTO"
      }), " statement.\nFluss primary key tables can accept all types of messages (", (0,jsx_runtime.jsx)(_components.code, {
        children: "INSERT"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UPDATE_BEFORE"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UPDATE_AFTER"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DELETE"
      }), "), while Fluss log table can only accept ", (0,jsx_runtime.jsx)(_components.code, {
        children: "INSERT"
      }), " type messages."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "insert-into",
      children: "INSERT INTO"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "INSERT INTO"
      }), " statements are used to write data to Fluss tables.\nThey support both streaming and batch modes and are compatible with primary-key tables (for upserting data) as well as log tables (for appending data)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "appending-data-to-the-log-table",
      children: "Appending Data to the Log Table"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "create-a-log-table",
      children: "Create a Log table."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE TABLE log_table (\n  order_id BIGINT,\n  item_id BIGINT,\n  amount INT,\n  address STRING\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "insert-data-into-the-log-table",
      children: "Insert data into the Log table."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE TEMPORARY TABLE source (\n  order_id BIGINT,\n  item_id BIGINT,\n  amount INT,\n  address STRING\n) WITH ('connector' = 'datagen');\n\nINSERT INTO log_table\nSELECT * FROM source;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "perform-data-upserts-to-the-primarykey-table",
      children: "Perform Data Upserts to the PrimaryKey Table."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "create-a-primary-key-table",
      children: "Create a primary key table."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE TABLE pk_table (\n  shop_id BIGINT,\n  user_id BIGINT,\n  num_orders INT,\n  total_amount INT,\n  PRIMARY KEY (shop_id, user_id) NOT ENFORCED\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "updates-all-columns",
      children: "Updates All Columns"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE TEMPORARY TABLE source (\n  shop_id BIGINT,\n  user_id BIGINT,\n  num_orders INT,\n  total_amount INT\n) WITH ('connector' = 'datagen');\n\nINSERT INTO pk_table\nSELECT * FROM source;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "partial-updates",
      children: "Partial Updates"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE TEMPORARY TABLE source (\n  shop_id BIGINT,\n  user_id BIGINT,\n  num_orders INT,\n  total_amount INT\n) WITH ('connector' = 'datagen');\n\n-- only partial-update the num_orders column\nINSERT INTO pk_table (shop_id, user_id, num_orders)\nSELECT shop_id, user_id, num_orders FROM source;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "delete-from",
      children: "DELETE FROM"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Fluss supports deleting data for primary-key tables in batch mode via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DELETE FROM"
      }), " statement. Currently, only single data deletions based on the primary key are supported."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "the primary key table"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- DELETE statement requires batch mode\nSET 'execution.runtime-mode' = 'batch';\n-- The condition must include all primary key equality conditions.\nDELETE FROM pk_table WHERE shop_id = 10000 and user_id = 123456;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "update",
      children: "UPDATE"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Fluss enables data updates for primary-key tables in batch mode using the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UPDATE"
      }), " statement. Currently, only single-row updates based on the primary key are supported."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Execute the flink job in batch mode for current session context\nSET execution.runtime-mode = batch;\n-- The condition must include all primary key equality conditions.\nUPDATE pk_table SET total_amount = 2 WHERE shop_id = 10000 and user_id = 123456;\n"
      })
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