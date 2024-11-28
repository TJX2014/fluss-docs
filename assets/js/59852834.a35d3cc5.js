"use strict";
(self["webpackChunkfluss_website"] = self["webpackChunkfluss_website"] || []).push([[9707],{

/***/ 7899:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_install_deploy_overview_md_598_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-install-deploy-overview-md-598.json
const site_docs_install_deploy_overview_md_598_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"install-deploy/overview","title":"Overview","description":"Below, we briefly explain the building blocks of a Fluss cluster, their functionalities and implementations,","source":"@site/docs/install-deploy/overview.md","sourceDirName":"install-deploy","slug":"/install-deploy/overview","permalink":"/fluss-docs/docs/install-deploy/overview","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"docsSidebar","previous":{"title":"Architecture","permalink":"/fluss-docs/docs/concepts/architecture"},"next":{"title":"Deploying Local Cluster","permalink":"/fluss-docs/docs/install-deploy/deploying-local-cluster"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/install-deploy/overview.md


const frontMatter = {
	sidebar_position: 1
};
const contentTitle = 'Overview';

const assets = {

};



const toc = [{
  "value": "Overview and Reference Architecture",
  "id": "overview-and-reference-architecture",
  "level": 2
}, {
  "value": "How to deploy Fluss",
  "id": "how-to-deploy-fluss",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h1: "h1",
    h2: "h2",
    header: "header",
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
        id: "overview",
        children: "Overview"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Below, we briefly explain the building blocks of a Fluss cluster, their functionalities and implementations,\nand we will introduce the different deployment way to deploy Fluss."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview-and-reference-architecture",
      children: "Overview and Reference Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The figure below shows the building blocks of every Fluss cluster:"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      width: "1200px",
      src: (__webpack_require__(146)/* ["default"] */ .A)
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When deploying Fluss, there are often multiple options available for each building block.\nWe have listed them in the table below the figure."
    }), "\n", (0,jsx_runtime.jsxs)("table", {
      class: "table table-bordered",
      children: [(0,jsx_runtime.jsx)("thead", {
        children: (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("th", {
            class: "text-left",
            width: "250",
            children: "Component"
          }), (0,jsx_runtime.jsx)("th", {
            class: "text-left",
            width: "600",
            children: "Purpose"
          }), (0,jsx_runtime.jsx)("th", {
            class: "text-left",
            width: "300",
            children: "Implementations"
          })]
        })
      }), (0,jsx_runtime.jsxs)("tbody", {
        children: [(0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: "Fluss Client"
          }), (0,jsx_runtime.jsxs)("td", {
            children: [(0,jsx_runtime.jsx)("p", {
              children: (0,jsx_runtime.jsx)(_components.p, {
                children: "The Fluss Client is the entry point for users to interact with Fluss Cluster. It is responsible for\nmanaging Fluss Cluster like:"
              })
            }), (0,jsx_runtime.jsxs)("ul", {
              children: [(0,jsx_runtime.jsx)("li", {
                children: " Admin operation: like create or delete database/table etc"
              }), (0,jsx_runtime.jsx)("li", {
                children: "Table operation: like write, read, delete data"
              })]
            })]
          }), (0,jsx_runtime.jsx)("td", {
            children: (0,jsx_runtime.jsx)("ul", {
              children: (0,jsx_runtime.jsx)("li", {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/docs/engine-flink/getting-started/",
                  children: "Flink Connector"
                })
              })
            })
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: "CoordinatorServer"
          }), (0,jsx_runtime.jsxs)("td", {
            children: [(0,jsx_runtime.jsx)("p", {
              children: (0,jsx_runtime.jsx)(_components.p, {
                children: "CoordinatorServer is the name of the central work coordination component of Fluss.\nThe coordinator server is responsible to:"
              })
            }), (0,jsx_runtime.jsxs)("ul", {
              children: [(0,jsx_runtime.jsx)("li", {
                children: "Manage the TabletServer"
              }), (0,jsx_runtime.jsx)("li", {
                children: "Manage the metadata"
              }), (0,jsx_runtime.jsx)("li", {
                children: "Coordinate the whole cluster, e.g. data re-balance, recover data when tablet servers down"
              })]
            })]
          }), (0,jsx_runtime.jsx)("td", {
            rowspan: "2",
            children: (0,jsx_runtime.jsxs)("ul", {
              children: [(0,jsx_runtime.jsx)("li", {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/docs/install-deploy/deploying-local-cluster/",
                  children: "Local Cluster"
                })
              }), (0,jsx_runtime.jsx)("li", {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/docs/install-deploy/deploying-distributed-cluster/",
                  children: "Distributed Cluster"
                })
              }), (0,jsx_runtime.jsx)("li", {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/docs/install-deploy/deploying-with-docker/",
                  children: "Docker run / Docker compose"
                })
              })]
            })
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: "TabletServer"
          }), (0,jsx_runtime.jsx)("td", {
            children: (0,jsx_runtime.jsx)("p", {
              children: (0,jsx_runtime.jsx)(_components.p, {
                children: "TabletServers are the actual node to manage and store data."
              })
            })
          })]
        }), (0,jsx_runtime.jsx)("tr", {
          children: (0,jsx_runtime.jsx)("td", {
            colspan: "3",
            style: {
              textAlign: "center"
            },
            children: (0,jsx_runtime.jsx)("b", {
              children: "External Components"
            })
          })
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: "ZooKeeper"
          }), (0,jsx_runtime.jsxs)("td", {
            children: [(0,jsx_runtime.jsx)(_components.admonition, {
              type: "warning",
              children: (0,jsx_runtime.jsxs)(_components.p, {
                children: ["Zookeeper will be removed to simplify deployment in the near future. For more details, please checkout ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/roadmap/",
                  children: "Roadmap"
                }), "."]
              })
            }), (0,jsx_runtime.jsx)("p", {
              children: (0,jsx_runtime.jsx)(_components.p, {
                children: "Fluss leverages ZooKeeper for distributed coordination between all running CoordinatorServer instances and for metadata management."
              })
            })]
          }), (0,jsx_runtime.jsx)("td", {
            children: (0,jsx_runtime.jsx)("ul", {
              children: (0,jsx_runtime.jsx)("li", {
                children: (0,jsx_runtime.jsx)("a", {
                  href: "https://zookeeper.apache.org/",
                  children: "Zookeeper"
                })
              })
            })
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: "Remote Storage (optional)"
          }), (0,jsx_runtime.jsx)("td", {
            children: (0,jsx_runtime.jsx)(_components.p, {
              children: "Fluss uses file systems as remote storage to store snapshots for Primary-Key Table and store tiered log segments for Log Table."
            })
          }), (0,jsx_runtime.jsxs)("td", {
            children: [(0,jsx_runtime.jsx)("li", {
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "/docs/maintenance/filesystems/hdfs/",
                children: "HDFS"
              })
            }), (0,jsx_runtime.jsx)("li", {
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "/docs/maintenance/filesystems/oss/",
                children: "Aliyun OSS"
              })
            }), (0,jsx_runtime.jsx)("li", {
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "/docs/maintenance/filesystems/s3/",
                children: "Amazon S3"
              })
            })]
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: "Lakehouse Storage (optional)"
          }), (0,jsx_runtime.jsx)("td", {
            children: (0,jsx_runtime.jsx)(_components.p, {
              children: "Fluss's DataLake Tiering Service will continuously compact Fluss's Arrow files into Parquet/ORC files in open lake format.\nThe data in Lakehouse storage can be read both by Fluss's client in a Union Read manner and accessed directly\nby query engines such as Flink, Spark, StarRocks, Trino."
            })
          }), (0,jsx_runtime.jsxs)("td", {
            children: [(0,jsx_runtime.jsx)("li", {
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "/docs/maintenance/tiered-storage/lakehouse-storage/",
                children: "Paimon"
              })
            }), (0,jsx_runtime.jsx)("li", {
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "/roadmap/",
                children: "Iceberg (Roadmap)"
              })
            })]
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: "Metrics Storage (optional)"
          }), (0,jsx_runtime.jsx)("td", {
            children: (0,jsx_runtime.jsx)(_components.p, {
              children: "CoordinatorServer/TabletServer report internal metrics and Fluss client (e.g., connector in Flink jobs) can report additional, client specific metrics as well."
            })
          }), (0,jsx_runtime.jsxs)("td", {
            children: [(0,jsx_runtime.jsx)("li", {
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "/docs/maintenance/metric-reporters#jmx",
                children: "JMX"
              })
            }), (0,jsx_runtime.jsx)("li", {
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "/docs/maintenance/metric-reporters#prometheus",
                children: "Prometheus"
              })
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "how-to-deploy-fluss",
      children: "How to deploy Fluss"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Fluss can be deployed in three different ways:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/install-deploy/deploying-local-cluster/",
          children: "Local Cluster"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/install-deploy/deploying-distributed-cluster/",
          children: "Distributed Cluster"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/install-deploy/deploying-with-docker/",
          children: "Docker run/ Docker compose"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "NOTE"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Local Cluster is for testing purpose only."
      }), "\n"]
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

/***/ 146:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/deployment_overview-9108e1465903f9424cddd023a8301fb2.png");

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