"use strict";
(self["webpackChunkfluss_website"] = self["webpackChunkfluss_website"] || []).push([[2791],{

/***/ 6951:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_table_design_data_distribution_partitioning_md_e01_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-table-design-data-distribution-partitioning-md-e01.json
const site_docs_table_design_data_distribution_partitioning_md_e01_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"table-design/data-distribution/partitioning","title":"Partitioning","description":"Partitioned Tables","source":"@site/docs/table-design/data-distribution/partitioning.md","sourceDirName":"table-design/data-distribution","slug":"/table-design/data-distribution/partitioning","permalink":"/fluss-docs/docs/table-design/data-distribution/partitioning","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"docsSidebar","previous":{"title":"Bucketing","permalink":"/fluss-docs/docs/table-design/data-distribution/bucketing"},"next":{"title":"TTL","permalink":"/fluss-docs/docs/table-design/data-distribution/ttl"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/table-design/data-distribution/partitioning.md


const frontMatter = {
	sidebar_position: 2
};
const contentTitle = 'Partitioning';

const assets = {

};



const toc = [{
  "value": "Partitioned Tables",
  "id": "partitioned-tables",
  "level": 2
}, {
  "value": "Key Benefits of Partitioned Tables",
  "id": "key-benefits-of-partitioned-tables",
  "level": 3
}, {
  "value": "Restrictions",
  "id": "restrictions",
  "level": 2
}, {
  "value": "Auto Partitioning Options",
  "id": "auto-partitioning-options",
  "level": 2
}, {
  "value": "Example",
  "id": "example",
  "level": 3
}, {
  "value": "Options",
  "id": "options",
  "level": 3
}, {
  "value": "Partition Generation Rules",
  "id": "partition-generation-rules",
  "level": 3
}, {
  "value": "Fluss Cluster Configuration",
  "id": "fluss-cluster-configuration",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
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
        id: "partitioning",
        children: "Partitioning"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "partitioned-tables",
      children: "Partitioned Tables"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In Fluss, a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Partitioned Table"
      }), " organizes data based on one or more partition keys, providing a way to improve query performance and manageability for large datasets. Partitions allow the system to divide data into distinct segments, each corresponding to specific values of the partition keys."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For partitioned tables, Fluss supports auto partitioning creation. Partitions can be automatically created based on the auto partitioning rules configured at the time of table creation, and expired partitions are automatically removed, ensuring data not expanding unlimited."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "key-benefits-of-partitioned-tables",
      children: "Key Benefits of Partitioned Tables"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Improved Query Performance:"
        }), " By narrowing down the query scope to specific partitions, the system reads less data, reducing query execution time."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data Organization:"
        }), " Partitions help in logically organizing data, making it easier to manage and query."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Scalability:"
        }), " Partitioning large datasets distributes the data across smaller, manageable chunks, improving scalability."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "restrictions",
      children: "Restrictions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Only one partition key is supported, and the type of the partition key must be STRING."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If the table is a primary key table, the partition key must be a subset of the primary key."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Auto-partitioning rules can only be configured at the time of creating the partitioned table; modifying the auto-partitioning rules after table creation is not supported."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "auto-partitioning-options",
      children: "Auto Partitioning Options"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example",
      children: "Example"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The auto-partitioning rules are configured through table options. The following example demonstrates creating a table named ", (0,jsx_runtime.jsx)(_components.code, {
        children: "site_access"
      }), " that supports automatic partitioning using Flink SQL."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE TABLE site_access(\n  event_day STRING,\n  site_id INT,\n  city_code STRING,\n  user_name STRING,\n  pv BIGINT,\n  PRIMARY KEY(event_day, site_id) NOT ENFORCED \n) PARTITIONED BY (event_day) WITH (\n  'table.auto-partition.enabled' = 'true',\n  'table.auto-partition.time-unit' = 'YEAR',\n  'table.auto-partition.num-precreate' = '5',\n  'table.auto-partition.num-retention' = '2',\n  'table.auto_partitioning.time-zone' = 'Asia/Shanghai'\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In this case, when automatic partitioning occurs (Fluss will periodically operate on all tables in the background), four partitions are pre-created with a partition granularity of YEAR, retaining two historical partitions. The time zone is set to Asia/Shanghai."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "options",
      children: "Options"
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
            children: "table.auto-partition.enabled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "no"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Whether enable auto partition for the table. Disable by default. When auto partition is enabled, the partitions of the table will be created automatically."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "table.auto-partition.time-unit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ENUM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "no"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(none)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The time granularity for auto created partitions. Valid values are 'HOUR', 'DAY', 'MONTH', 'QUARTER', 'YEAR'. If the value is 'HOUR', the partition format for auto created is yyyyMMddHH. If the value is 'DAY', the partition format for auto created is yyyyMMdd. If the value is 'MONTH', the partition format for auto created is yyyyMM. If the value is 'QUARTER', the partition format for auto created is yyyyQ. If the value is 'YEAR', the partition format for auto created is yyyy."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "table.auto-partition.num-precreate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "no"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The number of partitions to pre-create for auto created partitions in each check for auto partition. For example, if the current check time is 2024-11-11 and the value is configured as 3, then partitions 20241111, 20241112, 20241113 will be pre-created. If any one partition exists, it'll skip creating the partition."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "table.auto-partition.num-retention"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "no"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The number of history partitions to retain for auto created partitions in each check for auto partition. The default value is -1 which means retain all partitions. For example, if the current check time is 2024-11-11, time-unit is DAY, and the value is configured as 3, then the history partitions 20241108, 20241109, 20241110 will be retained. The partitions earlier than 20241108 will be deleted."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "table.auto_partitioning.time-zone"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "no"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "the system time zone"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The time zone for auto partitions, which is by default the same as the system time zone."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "partition-generation-rules",
      children: "Partition Generation Rules"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The time unit for the automatic partition table ", (0,jsx_runtime.jsx)(_components.code, {
        children: "auto-partition.time-unit"
      }), " can take values of HOUR, DAY, MONTH, QUARTER, or YEAR. Automatic partitioning will use the following format to create partitions."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Time Unit"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Partition Format"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HOUR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "yyyyMMddHH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2024091922"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DAY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "yyyyMMdd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20240919"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MONTH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "yyyyMM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "202409"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "QUARTER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "yyyyQ"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20241"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "YEAR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "yyyy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2024"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fluss-cluster-configuration",
      children: "Fluss Cluster Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Below are the configuration items related to Fluss cluster and automatic partitioning."
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Option"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Default"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "auto-partition.check.interval"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Duration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10 minutes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The interval of auto partition check. The time interval for automatic partition checking is set to 10 minutes by default, meaning that it checks the table partition status every 10 minutes to see if it meets the automatic partitioning criteria. If it does not meet the criteria, partitions will be automatically created or deleted."
          })]
        })
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