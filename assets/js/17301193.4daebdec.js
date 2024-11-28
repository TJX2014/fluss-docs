"use strict";
(self["webpackChunkfluss_website"] = self["webpackChunkfluss_website"] || []).push([[9456],{

/***/ 1264:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_engine_flink_ddl_md_173_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-engine-flink-ddl-md-173.json
const site_docs_engine_flink_ddl_md_173_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"engine-flink/ddl","title":"Flink DDL","description":"Create Catalog","source":"@site/docs/engine-flink/ddl.md","sourceDirName":"engine-flink","slug":"/engine-flink/ddl","permalink":"/fluss-docs/docs/engine-flink/ddl","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_label":"DDL","sidebar_position":2},"sidebar":"docsSidebar","previous":{"title":"Getting Started","permalink":"/fluss-docs/docs/engine-flink/getting-started"},"next":{"title":"Writes","permalink":"/fluss-docs/docs/engine-flink/writes"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/engine-flink/ddl.md


const frontMatter = {
	sidebar_label: 'DDL',
	sidebar_position: 2
};
const contentTitle = 'Flink DDL';

const assets = {

};



const toc = [{
  "value": "Create Catalog",
  "id": "create-catalog",
  "level": 2
}, {
  "value": "Create Database",
  "id": "create-database",
  "level": 2
}, {
  "value": "Drop Database",
  "id": "drop-database",
  "level": 2
}, {
  "value": "Create Table",
  "id": "create-table",
  "level": 2
}, {
  "value": "PrimaryKey Table",
  "id": "primarykey-table",
  "level": 3
}, {
  "value": "Log Table",
  "id": "log-table",
  "level": 3
}, {
  "value": "Partitioned (PrimaryKey/Log) Table",
  "id": "partitioned-primarykeylog-table",
  "level": 3
}, {
  "value": "Create Table Like",
  "id": "create-table-like",
  "level": 2
}, {
  "value": "Drop Table",
  "id": "drop-table",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    p: "p",
    pre: "pre",
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
        id: "flink-ddl",
        children: "Flink DDL"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "create-catalog",
      children: "Create Catalog"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Fluss supports creating and managing tables through the Fluss Catalog."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE CATALOG fluss_catalog WITH (\n  'type' = 'fluss',\n  'bootstrap.servers' = 'fluss-server-1:9123',\n);\n\nUSE CATALOG fluss_catalog;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The following properties can be set if using the Fluss catalog:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Option"
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "required"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(none)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Catalog type, must to be 'fluss' here."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bootstrap.servers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "required"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(none)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Comma separated list of Fluss servers."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "default-database"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "optional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fluss"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The default database to use when switching to this catalog."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The following introduced statements assuming the the current catalog is switched to the Fluss catalog using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "USE CATALOG <catalog_name>"
      }), " statement."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "create-database",
      children: "Create Database"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["By default, FlussCatalog will use the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fluss"
      }), " database in Flink. Using the following example to create a separate database in order to avoid creating tables under the default ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fluss"
      }), " database:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE DATABASE my_db;\nUSE my_db;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "drop-database",
      children: "Drop Database"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To delete a database, this will drop all the tables in the database as well:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Flink doesn't allow drop current database, switch to Fluss default database\nUSE fluss;\n-- drop the database\nDROP DATABASE my_db;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "create-table",
      children: "Create Table"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "primarykey-table",
      children: "PrimaryKey Table"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The following SQL statement will create a ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/fluss-docs/docs/table-design/table-types/pk-table",
        children: "PrimaryKey Table"
      }), " with a primary key consisting of shop_id and user_id."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE TABLE my_pk_table (\n  shop_id BIGINT,\n  user_id BIGINT,\n  num_orders INT,\n  total_amount INT,\n  PRIMARY KEY (shop_id, user_id) NOT ENFORCED\n) WITH (\n  'bucket.num' = '4'\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "log-table",
      children: "Log Table"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The following SQL statement creates a ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/fluss-docs/docs/table-design/table-types/log-table",
        children: "Log Table"
      }), " by not specifying primary key clause."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE TABLE my_log_table (\n  order_id BIGINT,\n  item_id BIGINT,\n  amount INT,\n  address STRING\n) WITH (\n  'bucket.num' = '8'\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "partitioned-primarykeylog-table",
      children: "Partitioned (PrimaryKey/Log) Table"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The following SQL statement creates a Partitioned PrimaryKey Table in Fluss. Note that the partitioned field (", (0,jsx_runtime.jsx)(_components.code, {
        children: "dt"
      }), " in this case) must be a subset of the primary key (", (0,jsx_runtime.jsx)(_components.code, {
        children: "dt, shop_id, user_id"
      }), " in this case).\nCurrently, Fluss only supports one partitioned field with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "STRING"
      }), " type."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Currently, partitioned table must enable auto partition and set auto partition time unit."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE TABLE my_part_pk_table (\n  dt STRING,\n  shop_id BIGINT,\n  user_id BIGINT,\n  num_orders INT,\n  total_amount INT,\n  PRIMARY KEY (dt, shop_id, user_id) NOT ENFORCED\n) PARTITIONED BY (dt) WITH (\n  'bucket.num' = '4',\n  'table.auto-partition.enabled' = 'true',\n  'table.auto-partition.time-unit' = 'day'\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The following SQL statement creates a Partitioned Log Table in Fluss."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE TABLE my_part_log_table (\n  order_id BIGINT,\n  item_id BIGINT,\n  amount INT,\n  address STRING,\n  dt STRING\n) PARTITIONED BY (dt) WITH (\n  'bucket.num' = '8',\n  'table.auto-partition.enabled' = 'true',\n  'table.auto-partition.time-unit' = 'hour'\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The supported option in \"with\" parameters when creating a table are as follows:"
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
            children: "bucket.num"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "optional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The bucket number of Fluss cluster."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The number of buckets of a Fluss table."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bucket.key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "optional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(none)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Specific the distribution policy of the Fluss table. Data will be distributed to each bucket according to the hash value of bucket-key.  If you specify multiple fields, delimiter is ','. If the table is with primary key, you can't specific bucket key currently. The bucket keys will always be the primary key(excluding partition key). If the table is not with primary key, you can specific bucket key, and when the bucket key is not specified, the data will be distributed to each bucket randomly."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "table.*"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["All the ", (0,jsx_runtime.jsxs)(_components.a, {
              href: "/fluss-docs/docs/maintenance/configuration",
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "table."
              }), " prefix configuration"]
            }), " are supported to be defined in \"with\" options."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "client.*"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["All the ", (0,jsx_runtime.jsxs)(_components.a, {
              href: "/fluss-docs/docs/maintenance/configuration",
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "client."
              }), " prefix configuration"]
            }), " are supported to be defined in \"with\" options."]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "create-table-like",
      children: "Create Table Like"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To create a table with the same schema, partitioning, and table properties as another table, use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CREATE TABLE LIKE"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- there is a temporary datagen table\nCREATE TEMPORARY TABLE datagen (\n    user_id BIGINT,\n    item_id BIGINT,\n    behavior STRING,\n    dt STRING,\n    hh STRING\n) WITH (\n    'connector' = 'datagen',\n    'rows-per-second' = '10'\n);\n\n-- creates Fluss table which derives the metadata from the temporary table excluding options\nCREATE TABLE my_table LIKE datagen (EXCLUDING OPTIONS);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For more details, refer to the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://nightlies.apache.org/flink/flink-docs-release-1.20/docs/dev/table/sql/create/#like",
        children: "Flink CREATE TABLE"
      }), " documentation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "drop-table",
      children: "Drop Table"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To delete a table, run:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "DROP TABLE my_table;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This will entirely remove all the data of the table in the Fluss cluster."
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