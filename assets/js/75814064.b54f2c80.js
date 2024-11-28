"use strict";
(self["webpackChunkfluss_website"] = self["webpackChunkfluss_website"] || []).push([[8152],{

/***/ 6262:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_install_deploy_deploying_local_cluster_md_758_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-install-deploy-deploying-local-cluster-md-758.json
const site_docs_install_deploy_deploying_local_cluster_md_758_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"install-deploy/deploying-local-cluster","title":"Deploying Local Cluster","description":"This page provides instructions on how to deploy a local cluster (on one machine, but in separate processes) for Fluss.","source":"@site/docs/install-deploy/deploying-local-cluster.md","sourceDirName":"install-deploy","slug":"/install-deploy/deploying-local-cluster","permalink":"/fluss-docs/docs/install-deploy/deploying-local-cluster","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"docsSidebar","previous":{"title":"Overview","permalink":"/fluss-docs/docs/install-deploy/overview"},"next":{"title":"Deploying Distributed Cluster","permalink":"/fluss-docs/docs/install-deploy/deploying-distributed-cluster"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/install-deploy/deploying-local-cluster.md


const frontMatter = {
	sidebar_position: 2
};
const contentTitle = 'Deploying Local Cluster';

const assets = {

};



const toc = [{
  "value": "Requirements",
  "id": "requirements",
  "level": 2
}, {
  "value": "<code>JAVA_HOME</code> Configuration",
  "id": "java_home-configuration",
  "level": 3
}, {
  "value": "Fluss Setup",
  "id": "fluss-setup",
  "level": 2
}, {
  "value": "Starting Fluss Local Cluster",
  "id": "starting-fluss-local-cluster",
  "level": 2
}, {
  "value": "Interacting with Fluss",
  "id": "interacting-with-fluss",
  "level": 2
}, {
  "value": "Flink SQL Client",
  "id": "flink-sql-client",
  "level": 3
}, {
  "value": "Preparation",
  "id": "preparation",
  "level": 4
}, {
  "value": "Add catalog",
  "id": "add-catalog",
  "level": 4
}, {
  "value": "Do more with Fluss",
  "id": "do-more-with-fluss",
  "level": 4
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
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
        id: "deploying-local-cluster",
        children: "Deploying Local Cluster"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This page provides instructions on how to deploy a ", (0,jsx_runtime.jsx)(_components.em, {
        children: "local cluster"
      }), " (on one machine, but in separate processes) for Fluss."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "requirements",
      children: "Requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Fluss runs on all ", (0,jsx_runtime.jsx)(_components.em, {
        children: "UNIX-like environments"
      }), ", e.g. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Linux"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Mac OS X"
      }), ".\nBefore you start to setup the system, make sure you have the following software installed on your test machine:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Java 17"
        }), " or higher (Java 8 and Java 11 are not recommended)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If your cluster does not fulfill these software requirements you will need to install/upgrade it."
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "java_home-configuration",
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "JAVA_HOME"
      }), " Configuration"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Flink requires the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "JAVA_HOME"
      }), " environment variable to be set on your\ntest machine and point to the directory of your Java installation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fluss-setup",
      children: "Fluss Setup"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Go to the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/downloads",
        children: "downloads page"
      }), " and download the latest Fluss release. Make sure to pick ths Fluss\npackage ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "matching your Java version"
      }), ". After downloading the latest release, extract it:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "tar -xzf fluss-0.5.0-bin.tgz\ncd fluss-0.5.0/\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "starting-fluss-local-cluster",
      children: "Starting Fluss Local Cluster"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can start Fluss local cluster by running the following command:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "./bin/local-cluster.sh start\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After that, the Fluss local cluster is started."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interacting-with-fluss",
      children: "Interacting with Fluss"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["After Fluss local cluster is started, you can use ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Fluss Client"
      }), " (Currently, only support Flink Sql Client) to interact with Fluss.\nThe following subsections will show you how to use Flink Sql Client to interact with Fluss."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "flink-sql-client",
      children: "Flink SQL Client"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Using Flink SQL Client to interact with Fluss."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "preparation",
      children: "Preparation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can start a Flink standalone cluster refer to ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/docs/engine-flink/getting-started#preparation-when-using-flink-sql-client",
        children: "Flink Environment Preparation"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Note"
      }), ": Make sure the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/downloads/",
        children: "Fluss connector jar"
      }), " already has copied to the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "lib"
      }), " directory of your Flink home."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "add-catalog",
      children: "Add catalog"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In Flink SQL client, a catalog is created and named by executing the following query:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        metastring: "title=\"Flink SQL Client\"",
        children: "CREATE CATALOG fluss_catalog WITH (\n  'type'='fluss',\n  'bootstrap.servers' = 'localhost:9123'\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "do-more-with-fluss",
      children: "Do more with Fluss"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["After the catalog is created, you can use Flink SQL Client to do more with Fluss, for example, create a table, insert data, query data, etc.\nMore details please refer to ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/docs/engine-flink/getting-started/",
        children: "Flink Getting started"
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