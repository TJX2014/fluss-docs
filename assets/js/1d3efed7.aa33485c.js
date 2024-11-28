"use strict";
(self["webpackChunkfluss_website"] = self["webpackChunkfluss_website"] || []).push([[2040],{

/***/ 7630:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_maintenance_metric_reporters_md_1d3_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-maintenance-metric-reporters-md-1d3.json
const site_docs_maintenance_metric_reporters_md_1d3_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"maintenance/metric-reporters","title":"Metric Reporters","description":"Fluss allows reporting metrics to external system.","source":"@site/docs/maintenance/metric-reporters.md","sourceDirName":"maintenance","slug":"/maintenance/metric-reporters","permalink":"/fluss-docs/docs/maintenance/metric-reporters","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_label":"Metric Reporters","sidebar_position":4},"sidebar":"docsSidebar","previous":{"title":"Lakehouse Storage","permalink":"/fluss-docs/docs/maintenance/tiered-storage/lakehouse-storage"},"next":{"title":"Monitor Metrics","permalink":"/fluss-docs/docs/maintenance/monitor-metrics"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/maintenance/metric-reporters.md


const frontMatter = {
	sidebar_label: 'Metric Reporters',
	sidebar_position: 4
};
const contentTitle = 'Metric Reporters';

const assets = {

};



const toc = [{
  "value": "Push vs. Pull",
  "id": "push-vs-pull",
  "level": 2
}, {
  "value": "Reporters",
  "id": "reporters",
  "level": 2
}, {
  "value": "JMX",
  "id": "jmx",
  "level": 3
}, {
  "value": "Prometheus",
  "id": "prometheus",
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
    li: "li",
    p: "p",
    pre: "pre",
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
        id: "metric-reporters",
        children: "Metric Reporters"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Fluss allows reporting ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/fluss-docs/docs/maintenance/monitor-metrics",
        children: "metrics"
      }), " to external system.\nMetrics can be exposed to an external system by configuring one or several reporters in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "conf/server.yaml"
      }), ". These\nreporters will be instantiated on each CoordinatorServer and TabletServers when they started."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Example reporter configuration that specifies multiple reporters:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "metrics.reporters: jmx,prometheus\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "push-vs-pull",
      children: "Push vs. Pull"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Metrics are exported either via pushes or pulls."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Push-based reporters usually implement the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Scheduled"
      }), " interface and periodically send a summary of current metrics to an external system."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pull-based reporters are queried from an external system instead."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "reporters",
      children: "Reporters"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The following sections list the supported reporters currently."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "jmx",
      children: "JMX"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Type: pull"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Parameters:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "port"
        }), " - (optional) the port on which JMX listens for connections.\nIn order to be able to run several instances of the reporter on one host (e.g. when one TabletServer is co-located with the CoordinatorServer) it is advisable to use a port range like ", (0,jsx_runtime.jsx)(_components.code, {
          children: "9250-9260"
        }), ".\nWhen a range is specified the actual port is shown in the relevant server log.\nIf this setting is set, Fluss will start an extra JMX connector for the given port/range.\nMetrics are always available on the default local JMX interface."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Example configuration:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "metrics.reporters: jmx\nmetrics.reporter.jmx.port: 9250-9260\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Metrics exposed through JMX are identified by a domain and a list of key-properties, which together form the object name."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The domain always begins with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "com.alibaba.fluss"
      }), " followed by a generalized metric identifier.\nAn example for such a domain would be ", (0,jsx_runtime.jsx)(_components.code, {
        children: "com.alibaba.fluss.tabletserver.replicaCount"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The key-property list contains the values for all variables, that are associated\nwith a given metric.\nAn example for such a list would be ", (0,jsx_runtime.jsx)(_components.code, {
        children: "cluster_id=fluss1,host=localhost,server_id=1"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The domain thus identifies a metric class, while the key-property list identifies one (or multiple) instances of that metric."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "prometheus",
      children: "Prometheus"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Type: pull"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Parameters:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "metrics.reporter.prometheus.port"
        }), " - (optional) the port the Prometheus exporter listens on, defaults to ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/prometheus/prometheus/wiki/Default-port-allocations",
          children: "9249"
        }), ". In order to be able to run several instances of the reporter on one host (e.g. when one TabletServer is co-located with the CoordinatorServer) it is advisable to use a port range like ", (0,jsx_runtime.jsx)(_components.code, {
          children: "9250-9260"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Example configuration:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "metrics.reporters: prometheus\nmetrics.reporter.prometheus.port: 9250\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Fluss metric types are mapped to Prometheus metric types as follows:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Fluss"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Prometheus"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Note"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Counter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gauge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prometheus counters cannot be decremented."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Gauge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gauge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only numbers and booleans are supported."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Histogram"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Summary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quantiles .5, .75, .95, .98, .99 and .999"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Meter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gauge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The gauge exports the meter's rate."
          })]
        })]
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