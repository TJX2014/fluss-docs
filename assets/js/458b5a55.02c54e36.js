"use strict";
(self["webpackChunkfluss_website"] = self["webpackChunkfluss_website"] || []).push([[6060],{

/***/ 7300:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_table_design_overview_md_458_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-table-design-overview-md-458.json
const site_docs_table_design_overview_md_458_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"table-design/overview","title":"Table Overview","description":"Database","source":"@site/docs/table-design/overview.md","sourceDirName":"table-design","slug":"/table-design/overview","permalink":"/fluss-docs/docs/table-design/overview","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_label":"Overview","sidebar_position":2},"sidebar":"docsSidebar","previous":{"title":"Deploying with Docker","permalink":"/fluss-docs/docs/install-deploy/deploying-with-docker"},"next":{"title":"Log Table","permalink":"/fluss-docs/docs/table-design/table-types/log-table"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/table-design/overview.md


const frontMatter = {
	sidebar_label: 'Overview',
	sidebar_position: 2
};
const contentTitle = 'Table Overview';

const assets = {

};



const toc = [{
  "value": "Database",
  "id": "database",
  "level": 2
}, {
  "value": "Table",
  "id": "table",
  "level": 2
}, {
  "value": "Table Data Organization",
  "id": "table-data-organization",
  "level": 2
}, {
  "value": "Partition",
  "id": "partition",
  "level": 3
}, {
  "value": "Bucket",
  "id": "bucket",
  "level": 3
}, {
  "value": "LogTablet",
  "id": "logtablet",
  "level": 3
}, {
  "value": "KvTablet",
  "id": "kvtablet",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
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
        id: "table-overview",
        children: "Table Overview"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "database",
      children: "Database"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A Database is a collection of Table objects. You can create/delete databases or create/modify/delete tables under a database."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "table",
      children: "Table"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In Fluss, a Table is the fundamental unit of user data storage, organized into rows and columns. Tables are stored within specific databases, adhering to a hierarchical structure (database -> table)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tables are classified into two types based on the presence of a primary key:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Log Tables:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Designed for append-only scenarios."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Support only INSERT operations."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PrimaryKey Tables:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Used for updating and managing data in business databases."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Support INSERT, UPDATE, and DELETE operations based on the defined primary key."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A Table becomes a ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/fluss-docs/docs/table-design/data-distribution/partitioning",
        children: "Partitioned Table"
      }), " when a partition column is defined. Data with the same partition value is stored in the same partition. Partition columns can be applied to both Log Tables and PrimaryKey Tables, but with specific considerations:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "For Log Tables"
        }), ", partitioning is commonly used for log data, typically based on date columns, to facilitate data separation and cleaning."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "For PrimaryKey Tables"
        }), ", the partition column must be a subset of the primary key to ensure uniqueness."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This design ensures efficient data organization, flexibility in handling different use cases, and adherence to data integrity constraints."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "table-data-organization",
      children: "Table Data Organization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Table Data Organization",
        src: (__webpack_require__(7622)/* ["default"] */ .A) + "",
        width: "2104",
        height: "1381"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "partition",
      children: "Partition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "partition"
      }), " is a logical division of a table's data into smaller, more manageable subsets based on the values of one or more specified columns, known as partition columns.\nEach unique value (or combination of values) in the partition column(s) defines a distinct partition."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bucket",
      children: "Bucket"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "bucket"
      }), " horizontally divides the data of a table/partition into ", (0,jsx_runtime.jsx)(_components.code, {
        children: "N"
      }), " buckets according to the bucketing policy.\nThe number of buckets ", (0,jsx_runtime.jsx)(_components.code, {
        children: "N"
      }), " can be configured per table. A bucket is the smallest unit of data migration and backup.\nThe data of a bucket consists of a LogTablet and a (optional) KvTablet."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "logtablet",
      children: "LogTablet"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LogTablet"
      }), " needs to be generated for each bucket of Log and PrimaryKey tables.\nFor Log Tables, the LogTablet is both the primary table data and the log data. For PrimaryKey tables, the LogTablet acts\nas the log data for the primary table data."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Segment:"
        }), " The smallest unit of log storage in the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "LogTablet"
        }), ". A segment consists of an ", (0,jsx_runtime.jsx)(_components.strong, {
          children: ".index"
        }), " file and a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: ".log"
        }), " data file."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: ".index:"
        }), " An ", (0,jsx_runtime.jsx)(_components.code, {
          children: "offset sparse index"
        }), " that stores the mappings between the physical byte address in the message relative offset -> .log file."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: ".log:"
        }), " Compact arrangement of log data."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "kvtablet",
      children: "KvTablet"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each bucket of the PrimaryKey table needs to generate a KvTablet. Underlying, each KvTablet correspond to an embedded RocksDB instance. RocksDB is a LSM (log structured merge) engine which helps KvTablet supports high-performance updates and lookup query."
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

/***/ 7622:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/data_organization-c63fd910ab4f86359e60234f855bbb74.png");

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