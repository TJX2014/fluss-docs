"use strict";
(self["webpackChunkfluss_website"] = self["webpackChunkfluss_website"] || []).push([[9724],{

/***/ 7717:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_maintenance_tiered_storage_lakehouse_storage_md_e83_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-maintenance-tiered-storage-lakehouse-storage-md-e83.json
const site_docs_maintenance_tiered_storage_lakehouse_storage_md_e83_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"maintenance/tiered-storage/lakehouse-storage","title":"Lakehouse Storage","description":"Lakehouse represents a new, open architecture that combines the best elements of data lakes and data warehouses.","source":"@site/docs/maintenance/tiered-storage/lakehouse-storage.md","sourceDirName":"maintenance/tiered-storage","slug":"/maintenance/tiered-storage/lakehouse-storage","permalink":"/fluss-docs/docs/maintenance/tiered-storage/lakehouse-storage","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"docsSidebar","previous":{"title":"Remote Storage","permalink":"/fluss-docs/docs/maintenance/tiered-storage/remote-storage"},"next":{"title":"Metric Reporters","permalink":"/fluss-docs/docs/maintenance/metric-reporters"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/maintenance/tiered-storage/lakehouse-storage.md


const frontMatter = {
	sidebar_position: 3
};
const contentTitle = 'Lakehouse Storage';

const assets = {

};



const toc = [{
  "value": "Enable Lakehouse Storage",
  "id": "enable-lakehouse-storage",
  "level": 2
}, {
  "value": "Lakehouse Storage Cluster Configurations",
  "id": "lakehouse-storage-cluster-configurations",
  "level": 3
}, {
  "value": "Start The Datalake Tiering Service",
  "id": "start-the-datalake-tiering-service",
  "level": 3
}, {
  "value": "Enable Lakehouse Storage Per Table",
  "id": "enable-lakehouse-storage-per-table",
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
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "lakehouse-storage",
        children: "Lakehouse Storage"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Lakehouse represents a new, open architecture that combines the best elements of data lakes and data warehouses.\nLakehouse combines data lake scalability and cost-effectiveness with data warehouse reliability and preformance."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Fluss leverages the well-known Lakehouse storage solutions like Apache Paimon, Apache Iceberg, Apache Hudi, Delta Lake as\nthe tiered storage layer. Currently, only Apache Paimon is supported, but more kinds of Lakehouse storage support are on the ways."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Fluss's datalake tiering service will compact Fluss's data to the Lakehouse storage continuously. The data in Lakehouse storage can be read both by Fluss's client in a streaming manner and accessed directly\nby external systems such as Flink, Spark, StarRocks and others. With data tired in Lakehouse storage, Fluss\ncan gain much storage cost reduction and analytics performance improvement."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "enable-lakehouse-storage",
      children: "Enable Lakehouse Storage"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Lakehouse Storage disabled by default, you must enable it manually."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lakehouse-storage-cluster-configurations",
      children: "Lakehouse Storage Cluster Configurations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["First, you must configure the lakehouse storage in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "server.yaml"
      }), ". Take Paimon\nas an example, you must configure the following configurations:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "datalake.tiered.storage: paimon\n\n# the catalog config about Paimon, assuming using Filesystem catalog\npaimon.catalog.type: filesystem\npaimon.catalog.warehouse: /tmp/paimon_data_warehouse\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "start-the-datalake-tiering-service",
      children: "Start The Datalake Tiering Service"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Then, you must start the datalake tiering service to compact Fluss's data to the lakehouse storage.\nTo start the datalake tiering service, you must have a Flink cluster running since Fluss currently only supports Flink as a tiering service backend."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can use the following commands to start the datalake tiering service:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "# change directory to Fluss \ncd $FLUSS_HOME\n\n# start the tiering service, assuming rest endpoint is localhost:8081\n./bin/lakehouse.sh -D flink.rest.address=localhost -D flink.rest.port=8081 \n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Note:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "flink.rest.address"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "flink.rest.port"
        }), " are the Flink cluster's rest endpoint, you may need to change it according to your Flink cluster's configuration."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The datalake tiering service is actual a flink job, you can set the Flink configuration in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "-D"
        }), " arguments while starting the datalake tiering service. For example, if want to set the checkpoint interval to 10s,\nyou can use the following command to start the datalake tiering service:"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "./bin/lakehouse.sh -D flink.rest.address=localhost -D flink.rest.port=8081 -D flink.execution.checkpointing.interval=10s\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "enable-lakehouse-storage-per-table",
      children: "Enable Lakehouse Storage Per Table"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To enable lakehouse storage for a table, the table must be created with the option ", (0,jsx_runtime.jsx)(_components.code, {
        children: "'table.datalake.enabled' = 'true'"
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