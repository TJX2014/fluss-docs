"use strict";
(self["webpackChunkfluss_website"] = self["webpackChunkfluss_website"] || []).push([[7699],{

/***/ 5427:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_concepts_architecture_md_8a1_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-concepts-architecture-md-8a1.json
const site_docs_concepts_architecture_md_8a1_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"concepts/architecture","title":"Architecture","description":"A Fluss cluster consists of two main processes: CoordinatorServer and TabletServer.","source":"@site/docs/concepts/architecture.md","sourceDirName":"concepts","slug":"/concepts/architecture","permalink":"/fluss-docs/docs/concepts/architecture","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"docsSidebar","previous":{"title":"Flink","permalink":"/fluss-docs/docs/quickstart/flink"},"next":{"title":"Overview","permalink":"/fluss-docs/docs/install-deploy/overview"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/concepts/architecture.md


const frontMatter = {
	sidebar_position: 1
};
const contentTitle = 'Architecture';

const assets = {

};



const toc = [{
  "value": "CoordinatorServer",
  "id": "coordinatorserver",
  "level": 2
}, {
  "value": "TabletServer",
  "id": "tabletserver",
  "level": 2
}, {
  "value": "LogStore",
  "id": "logstore",
  "level": 3
}, {
  "value": "KvStore",
  "id": "kvstore",
  "level": 3
}, {
  "value": "Tablet / Bucket",
  "id": "tablet--bucket",
  "level": 3
}, {
  "value": "Zookeeper",
  "id": "zookeeper",
  "level": 2
}, {
  "value": "Remote Storage",
  "id": "remote-storage",
  "level": 2
}, {
  "value": "Client",
  "id": "client",
  "level": 2
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
        id: "architecture",
        children: "Architecture"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A Fluss cluster consists of two main processes: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "CoordinatorServer"
      }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "TabletServer"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Fluss Architecture",
        src: (__webpack_require__(5671)/* ["default"] */ .A) + "",
        width: "6714",
        height: "4904"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "coordinatorserver",
      children: "CoordinatorServer"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "CoordinatorServer"
      }), " serves as the central control and management component of the cluster. It is responsible for maintaining metadata, managing tablet allocation, listing nodes, and handling permissions."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Additionally, it coordinates critical operations such as:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rebalancing data during node scaling (upscaling or downscaling)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Managing data migration and service node switching in the event of node failures."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Overseeing table management tasks, including creating or deleting tables and updating bucket counts."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["As the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "brain"
      }), " of the cluster, the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Coordinator Server"
      }), " ensures efficient cluster operation and seamless management of resources."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tabletserver",
      children: "TabletServer"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "TabletServer"
      }), " is responsible for data storage, persistence, and providing I/O services directly to users. It comprises two key components: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LogStore"
      }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "KvStore"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "PrimaryKey Tables"
        }), " which support updates, both ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "LogStore"
        }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "KvStore"
        }), " are activated. The KvStore is used to support updates and point lookup efficiently. LogStore is used to store the changelogs of the table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Log Tables"
        }), " which only supports appends, only the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "LogStore"
        }), " is activated, optimizing performance for write-heavy workloads."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This architecture ensures the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "TabletServer"
      }), " delivers tailored data handling capabilities based on table types."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "logstore",
      children: "LogStore"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LogStore"
      }), " is designed to store log data, functioning similarly to a database binlog.\nMessages can only be appended, not modified, ensuring data integrity.\nIts primary purposes are to enable low-latency streaming reads and to serve as the write-ahead log (WAL) for restoring the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "KvStore"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "kvstore",
      children: "KvStore"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "KvStore"
      }), " is used to store table data, functioning similarly to database tables. It supports data updates and deletions, enabling efficient querying and table management. Additionally, it generates comprehensive changelogs to track data modifications."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tablet--bucket",
      children: "Tablet / Bucket"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Table data is divided into multiple buckets based on the defined bucketing policy."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Data for the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LogStore"
      }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "KvStore"
      }), " is stored within tablets. Each tablet consists of a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LogTablet"
      }), " and, optionally, a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "KvTablet"
      }), ", depending on whether the table supports updates.\nBoth ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LogStore"
      }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "KvStore"
      }), " adhere to the same bucket-splitting and tablet allocation policies. As a result, ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LogTablets"
      }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "KvTablets"
      }), " with the same ", (0,jsx_runtime.jsx)(_components.code, {
        children: "tablet_id"
      }), " are always allocated to the same ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "TabletServer"
      }), " for efficient data management."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LogTablet"
      }), " supports multiple replicas based on the table's configured replication factor, ensuring high availability and fault tolerance. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Currently, replication is not supported for KvTablets"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "zookeeper",
      children: "Zookeeper"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Fluss currently utilizes ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ZooKeeper"
      }), " for cluster coordination, metadata storage, and cluster configuration management.\nIn upcoming releases, ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ZooKeeper will be replaced"
      }), " by ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "KvStore"
      }), " for metadata storage and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Raft"
      }), " for cluster coordination and ensuring consistency. This transition aims to streamline operations and enhance system reliability. See the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/roadmap",
        children: "Roadmap"
      }), " for more details."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "remote-storage",
      children: "Remote Storage"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Remote Storage"
      }), " serves two primary purposes:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hierarchical Storage for LogStores:"
        }), " By offloading LogStore data, it reduces storage costs and accelerates scaling operations."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Persistent Storage for KvStores:"
        }), " It ensures durable storage for KvStore data and collaborates with LogStore to enable fault recovery."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Additionally, ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Remote Storage"
      }), " allows clients to perform bulk read operations on Log and Kv data, enhancing data analysis efficiency and reduce the overhead on Fluss servers. In the future, it will also support bulk write operations, optimizing data import workflows for greater scalability and performance."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "client",
      children: "Client"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Fluss clients/sdks support streaming reads/writes, batch read/writes, DDL and point queries. Currently, the main implementation of client is Flink Connector. Users can use Flink SQL to easily operate Fluss tables and data."
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

/***/ 5671:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/architecture-b318beb94d717f94d6fe64b6303e79ab.png");

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