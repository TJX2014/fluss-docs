"use strict";
(self["webpackChunkfluss_website"] = self["webpackChunkfluss_website"] || []).push([[2469],{

/***/ 7929:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_install_deploy_deploying_distributed_cluster_md_663_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-install-deploy-deploying-distributed-cluster-md-663.json
const site_docs_install_deploy_deploying_distributed_cluster_md_663_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"install-deploy/deploying-distributed-cluster","title":"Deploying Distributed Cluster","description":"This page provides instructions on how to deploy a distributed cluster for Fluss on bare machines.","source":"@site/docs/install-deploy/deploying-distributed-cluster.md","sourceDirName":"install-deploy","slug":"/install-deploy/deploying-distributed-cluster","permalink":"/fluss-docs/docs/install-deploy/deploying-distributed-cluster","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"docsSidebar","previous":{"title":"Deploying Local Cluster","permalink":"/fluss-docs/docs/install-deploy/deploying-local-cluster"},"next":{"title":"Deploying with Docker","permalink":"/fluss-docs/docs/install-deploy/deploying-with-docker"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/install-deploy/deploying-distributed-cluster.md


const frontMatter = {
	sidebar_position: 3
};
const contentTitle = 'Deploying Distributed Cluster';

const assets = {

};



const toc = [{
  "value": "Requirements",
  "id": "requirements",
  "level": 2
}, {
  "value": "Hardware Requirements",
  "id": "hardware-requirements",
  "level": 3
}, {
  "value": "Software Requirements",
  "id": "software-requirements",
  "level": 3
}, {
  "value": "<code>JAVA_HOME</code> Configuration",
  "id": "java_home-configuration",
  "level": 3
}, {
  "value": "Fluss Setup",
  "id": "fluss-setup",
  "level": 2
}, {
  "value": "Preparation",
  "id": "preparation",
  "level": 3
}, {
  "value": "Configuring Fluss",
  "id": "configuring-fluss",
  "level": 3
}, {
  "value": "Starting Fluss",
  "id": "starting-fluss",
  "level": 3
}, {
  "value": "Starting CoordinatorServer",
  "id": "starting-coordinatorserver",
  "level": 4
}, {
  "value": "Starting TabletServer",
  "id": "starting-tabletserver",
  "level": 4
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
  "id": "preparation-1",
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
    admonition: "admonition",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    header: "header",
    li: "li",
    ol: "ol",
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
        id: "deploying-distributed-cluster",
        children: "Deploying Distributed Cluster"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This page provides instructions on how to deploy a ", (0,jsx_runtime.jsx)(_components.em, {
        children: "distributed cluster"
      }), " for Fluss on bare machines."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "requirements",
      children: "Requirements"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hardware-requirements",
      children: "Hardware Requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Fluss runs on all ", (0,jsx_runtime.jsx)(_components.em, {
        children: "UNIX-like environments"
      }), ", e.g. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Linux"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Mac OS X"
      }), ".\nTo build a distributed cluster, you need to have at least two nodes.\nThis docs provides a simple example of how to deploy a distributed cluster on three nodes."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "software-requirements",
      children: "Software Requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Before you start to setup the system, make sure you have the following software installed ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "on each node"
      }), ":"]
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
      }), " environment variable to be set on all nodes and point to the directory of your Java installation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fluss-setup",
      children: "Fluss Setup"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This part will describe how to set up Fluss cluster consisting of one coordinator server and multiple tablet servers\nacross three machines. Suppose you have three nodes have ip address:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Node1: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "192.168.10.1"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Node2: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "192.168.10.2"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Node3: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "192.168.10.3"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Node1 will deploy the CoordinatorServer and one TabletServer, Node2 and Node3 will deploy one TabletServer."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "preparation",
      children: "Preparation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Make sure ZooKeeper has been deployed, and assuming the ZooKeeper address is ", (0,jsx_runtime.jsx)(_components.code, {
            children: "192.168.10.99:2181"
          }), ". see ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://zookeeper.apache.org/doc/r3.6.0/zookeeperStarted.html#sc_RunningReplicatedZooKeeper",
            children: "Running zookeeper cluster"
          }), " to deploy a distributed ZooKeeper."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Download Fluss"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Go to the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/downloads",
        children: "downloads page"
      }), " and download the latest Fluss release. After downloading the latest release, copy the archive to all the nodes and extract it:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "tar -xzf fluss-0.5.0-bin.tgz\ncd fluss-0.5.0/\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "configuring-fluss",
      children: "Configuring Fluss"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["After having extracted the archived files, you need to configure Fluss for the cluster by editing ", (0,jsx_runtime.jsx)(_components.code, {
        children: "conf/server.yaml"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Node1"
      }), ", the config is as follows:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "coordinator.host: 192.168.10.1\ncoordinator.port: 9123\nzookeeper.address: 192.168.10.99:2181\nzookeeper.path.root: /fluss\n\ntablet-server.host: 192.168.10.1\ntablet-server.id: 1\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Node2"
      }), ", the config is as follows:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "zookeeper.address: 192.168.10.99:2181\nzookeeper.path.root: /fluss\n\ntablet-server.host: 192.168.10.2\ntablet-server.id: 2\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Node3"
      }), ", the config is as follows:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "zookeeper.address: 192.168.10.99:2181\nzookeeper.path.root: /fluss\n\ntablet-server.host: 192.168.10.3\ntablet-server.id: 3\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "tablet-server.id"
          }), " is the unique id of the TabletServer, if you have multiple TabletServers, you should set different id for each TabletServer."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["In this example, we only set the properties that must be configured, and for some other properties, you can refer to ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/docs/maintenance/configuration/",
            children: "Configuration"
          }), " for more details."]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "starting-fluss",
      children: "Starting Fluss"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To start Fluss, you should first to start a CoordinatorServer in ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "node1"
      }), " and\nthen start each TabletServer in ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "node1"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "node2"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "node3"
      }), ". The command is as follows:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "starting-coordinatorserver",
      children: "Starting CoordinatorServer"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "node1"
      }), ", starting a CoordinatorServer:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "./bin/coordinator-server.sh start\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "starting-tabletserver",
      children: "Starting TabletServer"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "node1"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "node2"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "node3"
      }), ", starting a TabletServer is as follows:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "./bin/tablet-server.sh start\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After that, the Fluss distributed cluster is started."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interacting-with-fluss",
      children: "Interacting with Fluss"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["After the Fluss cluster is started, you can use ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Fluss Client"
      }), " (e.g., Flink SQL Client) to interact with Fluss.\nThe following subsections will show you how to use Flink SQL Client to interact with Fluss."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "flink-sql-client",
      children: "Flink SQL Client"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Using Flink SQL Client to interact with Fluss."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "preparation-1",
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
        children: "CREATE CATALOG fluss_catalog WITH (\n  'type'='fluss',\n  'bootstrap.servers' = '192.168.10.1:9123'\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "do-more-with-fluss",
      children: "Do more with Fluss"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["After the catalog is created, you can use Flink SQL Client to do more with Fluss, for example, create a table, insert data, query data, etc.\nMore details please refer to ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/docs/engine-flink/getting-started/",
        children: "Flink Getting Started"
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