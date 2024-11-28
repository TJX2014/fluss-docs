"use strict";
(self["webpackChunkfluss_website"] = self["webpackChunkfluss_website"] || []).push([[2391],{

/***/ 3136:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_maintenance_monitor_metrics_md_280_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-maintenance-monitor-metrics-md-280.json
const site_docs_maintenance_monitor_metrics_md_280_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"maintenance/monitor-metrics","title":"Monitor Metrics","description":"Fluss has built a metrics system to measure the behaviours of cluster and table, like the active CoordinatorServer,","source":"@site/docs/maintenance/monitor-metrics.md","sourceDirName":"maintenance","slug":"/maintenance/monitor-metrics","permalink":"/fluss-docs/docs/maintenance/monitor-metrics","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_label":"Monitor Metrics","sidebar_position":5},"sidebar":"docsSidebar","previous":{"title":"Metric Reporters","permalink":"/fluss-docs/docs/maintenance/metric-reporters"},"next":{"title":"Logging","permalink":"/fluss-docs/docs/maintenance/logging"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/maintenance/monitor-metrics.md


const frontMatter = {
	sidebar_label: 'Monitor Metrics',
	sidebar_position: 5
};
const contentTitle = 'Monitor Metrics';

const assets = {

};



const toc = [{
  "value": "Scope",
  "id": "scope",
  "level": 2
}, {
  "value": "Reporter",
  "id": "reporter",
  "level": 2
}, {
  "value": "Metrics List",
  "id": "metrics-list",
  "level": 2
}, {
  "value": "CPU",
  "id": "cpu",
  "level": 3
}, {
  "value": "Memory",
  "id": "memory",
  "level": 3
}, {
  "value": "Threads",
  "id": "threads",
  "level": 3
}, {
  "value": "GarbageCollection",
  "id": "garbagecollection",
  "level": 3
}, {
  "value": "Coordinator Server",
  "id": "coordinator-server",
  "level": 3
}, {
  "value": "Tablet Server",
  "id": "tablet-server",
  "level": 3
}, {
  "value": "Request",
  "id": "request",
  "level": 3
}, {
  "value": "Table/Bucket",
  "id": "tablebucket",
  "level": 3
}, {
  "value": "Flink connector standard metrics",
  "id": "flink-connector-standard-metrics",
  "level": 3
}, {
  "value": "Source Metrics",
  "id": "source-metrics",
  "level": 4
}, {
  "value": "Sink Metrics",
  "id": "sink-metrics",
  "level": 4
}, {
  "value": "Grafana template",
  "id": "grafana-template",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "monitor-metrics",
        children: "Monitor Metrics"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Fluss has built a metrics system to measure the behaviours of cluster and table, like the active CoordinatorServer,\nthe number of table, the bytes written, the number of records written, etc."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Fluss supports different metric types: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Counters"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Gauges"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Histograms"
      }), ", and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Meters"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Gauge"
        }), ": Provides a value of any type at a point in time."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Counter"
        }), ": Used to count values by incrementing and decrementing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Histogram"
        }), ": Measure the statistical distribution of a set of values including the min, max, mean, standard deviation and percentile."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Meter"
        }), ": The gauge exports the meter's rate."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Fluss client also has supported built-in metrics to measure operations of ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "write to"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "read from"
      }), " fluss cluster,\nwhich can be bridged to Flink use Flink connector standard metrics."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scope",
      children: "Scope"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Every metric is assigned an identifier and a set of key-value pairs under which the metric will be reported."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The identifier is delimited by ", (0,jsx_runtime.jsx)(_components.code, {
        children: "metrics.scope.delimiter"
      }), ". Currently, the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "metrics.scope.delimiter"
      }), " is not configurable,\nit determined by the metric reporter. Take prometheus as example, the scope will delimited by ", (0,jsx_runtime.jsx)(_components.code, {
        children: "_"
      }), ", so the scope like ", (0,jsx_runtime.jsx)(_components.code, {
        children: "A_B_C"
      }), ",\nwhile Fluss metrics will always begin with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fluss"
      }), ", as ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fluss_A_B_C"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The key-value pairs are called ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "variables"
      }), " and are used to filter metrics. There are no restrictions on the\nnumber of order of variables. Variables are case-sensitive."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "reporter",
      children: "Reporter"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For information on how to set up Fluss's metric reporters please take a look at the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/fluss-docs/docs/maintenance/metric-reporters",
        children: "Metric Reporters"
      }), " page."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "metrics-list",
      children: "Metrics List"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["By default, Fluss provides ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "cluster state"
      }), " metrics, ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "table state"
      }), " metrics, and bridging to\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Flink connector"
      }), " standard metrics. This section is a reference of all these metrics."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The tables below generally feature 5 columns:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["The \"Scope\" column describes which scope format is used to generate the system scope.\nFor example, if the cell contains ", (0,jsx_runtime.jsx)(_components.code, {
            children: "tabletserver"
          }), " then the scope format for ", (0,jsx_runtime.jsx)(_components.code, {
            children: "fluss_tabletserver"
          }), " is used.\nIf the cell contains multiple values, separated by a slash, then the metrics are reported multiple\ntimes for different entities, like for both ", (0,jsx_runtime.jsx)(_components.code, {
            children: "tabletserver"
          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "coordinator"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The (optional)\"Infix\" column describes which infix is appended to the scope."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The \"Metrics\" column lists the names of all metrics that are registered for the given scope and infix."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The \"Description\" column provides information as to what a given metric is measuring."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The \"Type\" column describes which metric type is used for the measurement."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Thus, in order to infer the metric identifier:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Take the \"fluss_\" first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Take the scope-format based on the \"Scope\" column"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Append the value in the \"Infix\" column if present, and account for the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "metrics.scope.delimiter"
        }), " setting"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Append metric name."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["One metric for prometheus will be like ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fluss_tabletserver_status_JVM_CPU_load"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cpu",
      children: "CPU"
    }), "\n", (0,jsx_runtime.jsxs)("table", {
      class: "table table-bordered",
      children: [(0,jsx_runtime.jsx)("thead", {
        children: (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("th", {
            class: "text-left",
            style: {
              width: '30pt'
            },
            children: "Scope"
          }), (0,jsx_runtime.jsx)("th", {
            class: "text-left",
            style: {
              width: '150pt'
            },
            children: "Infix"
          }), (0,jsx_runtime.jsx)("th", {
            class: "text-left",
            style: {
              width: '80pt'
            },
            children: "Metrics"
          }), (0,jsx_runtime.jsx)("th", {
            class: "text-left",
            style: {
              width: '300pt'
            },
            children: "Description"
          }), (0,jsx_runtime.jsx)("th", {
            class: "text-left",
            style: {
              width: '40pt'
            },
            children: "Type"
          })]
        })
      }), (0,jsx_runtime.jsxs)("tbody", {
        children: [(0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("th", {
            rowspan: "2",
            children: (0,jsx_runtime.jsx)("strong", {
              children: "coordinator/tabletserver"
            })
          }), (0,jsx_runtime.jsx)("td", {
            rowspan: "2",
            children: "status_JVM_CPU"
          }), (0,jsx_runtime.jsx)("td", {
            children: "load"
          }), (0,jsx_runtime.jsx)("td", {
            children: "The recent CPU usage of the JVM."
          }), (0,jsx_runtime.jsx)("td", {
            children: "Gauge"
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: "time"
          }), (0,jsx_runtime.jsx)("td", {
            children: "The CPU time used by the JVM."
          }), (0,jsx_runtime.jsx)("td", {
            children: "Gauge"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "memory",
      children: "Memory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The memory-related metrics require Oracle's memory management (also included in OpenJDK's Hotspot implementation) to be in place.\nSome metrics might not be exposed when using other JVM implementations (e.g. IBM's J9)."
    }), "\n", (0,jsx_runtime.jsxs)("table", {
      class: "table table-bordered",
      children: [(0,jsx_runtime.jsx)("thead", {
        children: (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("th", {
            class: "text-left",
            children: "Scope"
          }), (0,jsx_runtime.jsx)("th", {
            class: "text-left",
            children: "Infix"
          }), (0,jsx_runtime.jsx)("th", {
            class: "text-left",
            children: "Metrics"
          }), (0,jsx_runtime.jsx)("th", {
            class: "text-left",
            children: "Description"
          }), (0,jsx_runtime.jsx)("th", {
            class: "text-left",
            children: "Type"
          })]
        })
      }), (0,jsx_runtime.jsxs)("tbody", {
        children: [(0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("th", {
            rowspan: "17",
            children: (0,jsx_runtime.jsx)("strong", {
              children: "coordinator/tabletserver"
            })
          }), (0,jsx_runtime.jsx)("td", {
            rowspan: "15",
            children: "status_JVM_memory"
          }), (0,jsx_runtime.jsx)("td", {
            children: "heap_used"
          }), (0,jsx_runtime.jsx)("td", {
            children: "The amount of heap memory currently used (in bytes)."
          }), (0,jsx_runtime.jsx)("td", {
            children: "Gauge"
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: "heap_committed"
          }), (0,jsx_runtime.jsx)("td", {
            children: "The amount of heap memory guaranteed to be available to the JVM (in bytes)."
          }), (0,jsx_runtime.jsx)("td", {
            children: "Gauge"
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: "heap_max"
          }), (0,jsx_runtime.jsxs)("td", {
            children: ["The maximum amount of heap memory that can be used for memory management (in bytes). ", (0,jsx_runtime.jsx)("br", {}), "\nThis value might not be necessarily equal to the maximum value specified through -Xmx or\nthe equivalent Fluss configuration parameter. Some GC algorithms allocate heap memory that won't\nbe available to the user code and, therefore, not being exposed through the heap metrics."]
          }), (0,jsx_runtime.jsx)("td", {
            children: "Gauge"
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: "nonHeap_used"
          }), (0,jsx_runtime.jsx)("td", {
            children: "The amount of non-heap memory currently used (in bytes)."
          }), (0,jsx_runtime.jsx)("td", {
            children: "Gauge"
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: "nonHeap_committed"
          }), (0,jsx_runtime.jsx)("td", {
            children: "The amount of non-heap memory guaranteed to be available to the JVM (in bytes)."
          }), (0,jsx_runtime.jsx)("td", {
            children: "Gauge"
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: "nonHeap_max"
          }), (0,jsx_runtime.jsx)("td", {
            children: "The maximum amount of non-heap memory that can be used for memory management (in bytes)."
          }), (0,jsx_runtime.jsx)("td", {
            children: "Gauge"
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: "metaspace_used"
          }), (0,jsx_runtime.jsx)("td", {
            children: "The amount of memory currently used in the Metaspace memory pool (in bytes)."
          }), (0,jsx_runtime.jsx)("td", {
            children: "Gauge"
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: "metaspace_committed"
          }), (0,jsx_runtime.jsx)("td", {
            children: "The amount of memory guaranteed to be available to the JVM in the Metaspace memory pool (in bytes)."
          }), (0,jsx_runtime.jsx)("td", {
            children: "Gauge"
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: "metaspace_max"
          }), (0,jsx_runtime.jsx)("td", {
            children: "The maximum amount of memory that can be used in the Metaspace memory pool (in bytes)."
          }), (0,jsx_runtime.jsx)("td", {
            children: "Gauge"
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: "direct_count"
          }), (0,jsx_runtime.jsx)("td", {
            children: "The number of buffers in the direct buffer pool."
          }), (0,jsx_runtime.jsx)("td", {
            children: "Gauge"
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: "direct_memoryUsed"
          }), (0,jsx_runtime.jsx)("td", {
            children: "The amount of memory used by the JVM for the direct buffer pool (in bytes)."
          }), (0,jsx_runtime.jsx)("td", {
            children: "Gauge"
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: "direct_totalCapacity"
          }), (0,jsx_runtime.jsx)("td", {
            children: "The total capacity of all buffers in the direct buffer pool (in bytes)."
          }), (0,jsx_runtime.jsx)("td", {
            children: "Gauge"
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: "mapped_count"
          }), (0,jsx_runtime.jsx)("td", {
            children: "The number of buffers in the mapped buffer pool."
          }), (0,jsx_runtime.jsx)("td", {
            children: "Gauge"
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: "mapped_memoryUsed"
          }), (0,jsx_runtime.jsx)("td", {
            children: "The amount of memory used by the JVM for the mapped buffer pool (in bytes)."
          }), (0,jsx_runtime.jsx)("td", {
            children: "Gauge"
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: "mapped_totalCapacity"
          }), (0,jsx_runtime.jsx)("td", {
            children: "The number of buffers in the mapped buffer pool (in bytes)."
          }), (0,jsx_runtime.jsx)("td", {
            children: "Gauge"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "threads",
      children: "Threads"
    }), "\n", (0,jsx_runtime.jsxs)("table", {
      class: "table table-bordered",
      children: [(0,jsx_runtime.jsx)("thead", {
        children: (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("th", {
            class: "text-left",
            style: {
              width: '30pt'
            },
            children: "Scope"
          }), (0,jsx_runtime.jsx)("th", {
            class: "text-left",
            style: {
              width: '150pt'
            },
            children: "Infix"
          }), (0,jsx_runtime.jsx)("th", {
            class: "text-left",
            style: {
              width: '80pt'
            },
            children: "Metrics"
          }), (0,jsx_runtime.jsx)("th", {
            class: "text-left",
            style: {
              width: '300pt'
            },
            children: "Description"
          }), (0,jsx_runtime.jsx)("th", {
            class: "text-left",
            style: {
              width: '40pt'
            },
            children: "Type"
          })]
        })
      }), (0,jsx_runtime.jsx)("tbody", {
        children: (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("th", {
            rowspan: "1",
            children: (0,jsx_runtime.jsx)("strong", {
              children: "coordinator/tabletserver"
            })
          }), (0,jsx_runtime.jsx)("td", {
            rowspan: "1",
            children: "status_JVM_threads"
          }), (0,jsx_runtime.jsx)("td", {
            children: "count"
          }), (0,jsx_runtime.jsx)("td", {
            children: "The total number of live threads."
          }), (0,jsx_runtime.jsx)("td", {
            children: "Gauge"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "garbagecollection",
      children: "GarbageCollection"
    }), "\n", (0,jsx_runtime.jsxs)("table", {
      class: "table table-bordered",
      children: [(0,jsx_runtime.jsx)("thead", {
        children: (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("th", {
            class: "text-left",
            style: {
              width: '30pt'
            },
            children: "Scope"
          }), (0,jsx_runtime.jsx)("th", {
            class: "text-left",
            style: {
              width: '150pt'
            },
            children: "Infix"
          }), (0,jsx_runtime.jsx)("th", {
            class: "text-left",
            style: {
              width: '80pt'
            },
            children: "Metrics"
          }), (0,jsx_runtime.jsx)("th", {
            class: "text-left",
            style: {
              width: '300pt'
            },
            children: "Description"
          }), (0,jsx_runtime.jsx)("th", {
            class: "text-left",
            style: {
              width: '40pt'
            },
            children: "Type"
          })]
        })
      }), (0,jsx_runtime.jsxs)("tbody", {
        children: [(0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("th", {
            rowspan: "3",
            children: (0,jsx_runtime.jsx)("strong", {
              children: "coordinator/tabletserver"
            })
          }), (0,jsx_runtime.jsx)("td", {
            rowspan: "3",
            children: "status_JVM_GC"
          }), (0,jsx_runtime.jsx)("td", {
            children: "<Collector/all>_count"
          }), (0,jsx_runtime.jsx)("td", {
            children: "The total number of collections that have occurred for the given (or all) collector."
          }), (0,jsx_runtime.jsx)("td", {
            children: "Gauge"
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: "<Collector/all>_time"
          }), (0,jsx_runtime.jsx)("td", {
            children: "The total time spent performing garbage collection for the given (or all) collector."
          }), (0,jsx_runtime.jsx)("td", {
            children: "Gauge"
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: "<Collector/all>_timeMsPerSecond"
          }), (0,jsx_runtime.jsx)("td", {
            children: "The time (in milliseconds) spent garbage collecting per second for the given (or all) collector."
          }), (0,jsx_runtime.jsx)("td", {
            children: "Gauge"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "coordinator-server",
      children: "Coordinator Server"
    }), "\n", (0,jsx_runtime.jsxs)("table", {
      class: "table table-bordered",
      children: [(0,jsx_runtime.jsx)("thead", {
        children: (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("th", {
            class: "text-left",
            style: {
              width: '30pt'
            },
            children: "Scope"
          }), (0,jsx_runtime.jsx)("th", {
            class: "text-left",
            style: {
              width: '150pt'
            },
            children: "Infix"
          }), (0,jsx_runtime.jsx)("th", {
            class: "text-left",
            style: {
              width: '80pt'
            },
            children: "Metrics"
          }), (0,jsx_runtime.jsx)("th", {
            class: "text-left",
            style: {
              width: '300pt'
            },
            children: "Description"
          }), (0,jsx_runtime.jsx)("th", {
            class: "text-left",
            style: {
              width: '40pt'
            },
            children: "Type"
          })]
        })
      }), (0,jsx_runtime.jsxs)("tbody", {
        children: [(0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("th", {
            rowspan: "5",
            children: (0,jsx_runtime.jsx)("strong", {
              children: "coordinator"
            })
          }), (0,jsx_runtime.jsx)("td", {
            style: {
              textAlign: 'center',
              verticalAlign: 'middle'
            },
            rowspan: "5",
            children: "-"
          }), (0,jsx_runtime.jsx)("td", {
            children: "activeCoordinatorCount"
          }), (0,jsx_runtime.jsx)("td", {
            children: "The number of active CoordinatorServer in this cluster."
          }), (0,jsx_runtime.jsx)("td", {
            children: "Gauge"
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: "activeTabletServerCount"
          }), (0,jsx_runtime.jsx)("td", {
            children: "The number of active TabletServer in this cluster."
          }), (0,jsx_runtime.jsx)("td", {
            children: "Gauge"
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: "offlineBucketCount"
          }), (0,jsx_runtime.jsx)("td", {
            children: "The total number of offline buckets in this cluster."
          }), (0,jsx_runtime.jsx)("td", {
            children: "Gauge"
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: "tableCount"
          }), (0,jsx_runtime.jsx)("td", {
            children: "The total number of tables in this cluster."
          }), (0,jsx_runtime.jsx)("td", {
            children: "Gauge"
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: "bucketCount"
          }), (0,jsx_runtime.jsx)("td", {
            children: "The total number of buckets in this cluster."
          }), (0,jsx_runtime.jsx)("td", {
            children: "Gauge"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tablet-server",
      children: "Tablet Server"
    }), "\n", (0,jsx_runtime.jsxs)("table", {
      class: "table table-bordered",
      children: [(0,jsx_runtime.jsx)("thead", {
        children: (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("th", {
            class: "text-left",
            style: {
              width: '30pt'
            },
            children: "Scope"
          }), (0,jsx_runtime.jsx)("th", {
            class: "text-left",
            style: {
              width: '150pt'
            },
            children: "Infix"
          }), (0,jsx_runtime.jsx)("th", {
            class: "text-left",
            style: {
              width: '80pt'
            },
            children: "Metrics"
          }), (0,jsx_runtime.jsx)("th", {
            class: "text-left",
            style: {
              width: '300pt'
            },
            children: "Description"
          }), (0,jsx_runtime.jsx)("th", {
            class: "text-left",
            style: {
              width: '40pt'
            },
            children: "Type"
          })]
        })
      }), (0,jsx_runtime.jsxs)("tbody", {
        children: [(0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("th", {
            rowspan: "6",
            children: (0,jsx_runtime.jsx)("strong", {
              children: "tabletServer"
            })
          }), (0,jsx_runtime.jsx)("td", {
            style: {
              textAlign: 'center',
              verticalAlign: 'middle'
            },
            rowspan: "6",
            children: "-"
          }), (0,jsx_runtime.jsx)("td", {
            children: "replicationBytesInPerSecond"
          }), (0,jsx_runtime.jsx)("td", {
            children: "The bytes of data write into follower replica for data sync."
          }), (0,jsx_runtime.jsx)("td", {
            children: "Meter"
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: "replicationBytesOutPerSecond"
          }), (0,jsx_runtime.jsx)("td", {
            children: "The bytes of data read from leader replica for data sync."
          }), (0,jsx_runtime.jsx)("td", {
            children: "Meter"
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: "leaderCount"
          }), (0,jsx_runtime.jsx)("td", {
            children: "The total number of leader replicas in this TabletServer."
          }), (0,jsx_runtime.jsx)("td", {
            children: "Gauge"
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: "replicaCount"
          }), (0,jsx_runtime.jsx)("td", {
            children: "The total number of replicas (include follower replicas) in this TabletServer."
          }), (0,jsx_runtime.jsx)("td", {
            children: "Gauge"
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: "writerIdCount"
          }), (0,jsx_runtime.jsx)("td", {
            children: "The writer id count"
          }), (0,jsx_runtime.jsx)("td", {
            children: "Gauge"
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: "delayedOperationsSize"
          }), (0,jsx_runtime.jsx)("td", {
            children: "The delayed operations size in this TabletServer."
          }), (0,jsx_runtime.jsx)("td", {
            children: "Gauge"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "request",
      children: "Request"
    }), "\n", (0,jsx_runtime.jsxs)("table", {
      class: "table table-bordered",
      children: [(0,jsx_runtime.jsx)("thead", {
        children: (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("th", {
            class: "text-left",
            style: {
              width: '30pt'
            },
            children: "Scope"
          }), (0,jsx_runtime.jsx)("th", {
            class: "text-left",
            style: {
              width: '150pt'
            },
            children: "Infix"
          }), (0,jsx_runtime.jsx)("th", {
            class: "text-left",
            style: {
              width: '80pt'
            },
            children: "Metrics"
          }), (0,jsx_runtime.jsx)("th", {
            class: "text-left",
            style: {
              width: '300pt'
            },
            children: "Description"
          }), (0,jsx_runtime.jsx)("th", {
            class: "text-left",
            style: {
              width: '40pt'
            },
            children: "Type"
          })]
        })
      }), (0,jsx_runtime.jsxs)("tbody", {
        children: [(0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("th", {
            rowspan: "1",
            children: (0,jsx_runtime.jsx)("strong", {
              children: "coordinator"
            })
          }), (0,jsx_runtime.jsx)("td", {
            rowspan: "1",
            children: "request"
          }), (0,jsx_runtime.jsx)("td", {
            children: "requestQueueSize"
          }), (0,jsx_runtime.jsx)("td", {
            children: "The CoordinatorServer node network waiting queue size."
          }), (0,jsx_runtime.jsx)("td", {
            children: "Gauge"
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("th", {
            rowspan: "6",
            children: "tabletserver"
          }), (0,jsx_runtime.jsx)("td", {
            rowspan: "6",
            children: "request"
          }), (0,jsx_runtime.jsx)("td", {
            children: "requestQueueSize"
          }), (0,jsx_runtime.jsx)("td", {
            children: "The TabletServer node network waiting queue size."
          }), (0,jsx_runtime.jsx)("td", {
            children: "Gauge"
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: "requestPerSecond"
          }), (0,jsx_runtime.jsx)("td", {
            children: "The total number of requests processed per second by the TabletServer node."
          }), (0,jsx_runtime.jsx)("td", {
            children: "Meter"
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: "requestErrorPerSecond"
          }), (0,jsx_runtime.jsx)("td", {
            children: "The total number of error requests processed per second by the TabletServer node."
          }), (0,jsx_runtime.jsx)("td", {
            children: "Meter"
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: "totalTimeMs"
          }), (0,jsx_runtime.jsx)("td", {
            children: "The total time it takes for the current TabletServer node to process a request."
          }), (0,jsx_runtime.jsx)("td", {
            children: "Histogram"
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: "requestProcessTimeMs"
          }), (0,jsx_runtime.jsx)("td", {
            children: "The time the current TabletServer node spends to process a request."
          }), (0,jsx_runtime.jsx)("td", {
            children: "Histogram"
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: "requestQueueTimeMs"
          }), (0,jsx_runtime.jsx)("td", {
            children: "The wait time spent by the request in the network waiting queue in this TabletServer node."
          }), (0,jsx_runtime.jsx)("td", {
            children: "Histogram"
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("th", {
            rowspan: "6",
            children: "client"
          }), (0,jsx_runtime.jsx)("td", {
            rowspan: "6",
            children: "request"
          }), (0,jsx_runtime.jsx)("td", {
            children: "bytesInPerSecond"
          }), (0,jsx_runtime.jsx)("td", {
            children: "The data bytes return from another server per second."
          }), (0,jsx_runtime.jsx)("td", {
            children: "Gauge"
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: "bytesOutPerSecond"
          }), (0,jsx_runtime.jsx)("td", {
            children: "The data bytes send from client to another server per second."
          }), (0,jsx_runtime.jsx)("td", {
            children: "Meter"
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: "requestsPerSecond"
          }), (0,jsx_runtime.jsx)("td", {
            children: "The requests count send from this client to another server per second."
          }), (0,jsx_runtime.jsx)("td", {
            children: "Meter"
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: "responsesPerSecond"
          }), (0,jsx_runtime.jsx)("td", {
            children: "The responses count return from another server per second."
          }), (0,jsx_runtime.jsx)("td", {
            children: "Meter"
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: "requestLatencyMs"
          }), (0,jsx_runtime.jsx)("td", {
            children: "The request latency."
          }), (0,jsx_runtime.jsx)("td", {
            children: "Gauge"
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: "requestsInFlight"
          }), (0,jsx_runtime.jsx)("td", {
            children: "The in flight requests count send from client to another server."
          }), (0,jsx_runtime.jsx)("td", {
            children: "Gauge"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tablebucket",
      children: "Table/Bucket"
    }), "\n", (0,jsx_runtime.jsxs)("table", {
      class: "table table-bordered",
      children: [(0,jsx_runtime.jsx)("thead", {
        children: (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("th", {
            class: "text-left",
            style: {
              width: '30pt'
            },
            children: "Scope"
          }), (0,jsx_runtime.jsx)("th", {
            class: "text-left",
            style: {
              width: '150pt'
            },
            children: "Infix"
          }), (0,jsx_runtime.jsx)("th", {
            class: "text-left",
            style: {
              width: '80pt'
            },
            children: "Metrics"
          }), (0,jsx_runtime.jsx)("th", {
            class: "text-left",
            style: {
              width: '300pt'
            },
            children: "Description"
          }), (0,jsx_runtime.jsx)("th", {
            class: "text-left",
            style: {
              width: '40pt'
            },
            children: "Type"
          })]
        })
      }), (0,jsx_runtime.jsxs)("tbody", {
        children: [(0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("th", {
            rowspan: "31",
            children: (0,jsx_runtime.jsx)("strong", {
              children: "tabletServer"
            })
          }), (0,jsx_runtime.jsx)("td", {
            rowspan: "16",
            children: "table"
          }), (0,jsx_runtime.jsx)("td", {
            children: "messagesInPerSecond"
          }), (0,jsx_runtime.jsx)("td", {
            children: "The number of messages written per second to this table"
          }), (0,jsx_runtime.jsx)("td", {
            children: "Meter"
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: "bytesInPerSecond"
          }), (0,jsx_runtime.jsx)("td", {
            children: "The number of bytes written per second to this table."
          }), (0,jsx_runtime.jsx)("td", {
            children: "Meter"
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: "bytesOutPerSecond"
          }), (0,jsx_runtime.jsx)("td", {
            children: "The number of bytes read per second from this table."
          }), (0,jsx_runtime.jsx)("td", {
            children: "Meter"
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: "totalProduceLogRequestsPerSecond"
          }), (0,jsx_runtime.jsx)("td", {
            children: "The number of produce log requests to write log to this table per second."
          }), (0,jsx_runtime.jsx)("td", {
            children: "Meter"
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: "failedProduceLogRequestsPerSecond"
          }), (0,jsx_runtime.jsx)("td", {
            children: "The number of failed produce log requests to write log to this table per second."
          }), (0,jsx_runtime.jsx)("td", {
            children: "Meter"
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: "totalFetchLogRequestsPerSecond"
          }), (0,jsx_runtime.jsx)("td", {
            children: "The number of fetch log requests to read log from this table per second."
          }), (0,jsx_runtime.jsx)("td", {
            children: "Meter"
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: "failedFetchLogRequestsPerSecond"
          }), (0,jsx_runtime.jsx)("td", {
            children: "The number of failed fetch log requests to read log from this table per second."
          }), (0,jsx_runtime.jsx)("td", {
            children: "Meter"
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: "totalPutKvRequestsPerSecond"
          }), (0,jsx_runtime.jsx)("td", {
            children: "The number of put kv requests to put kv to this table per second."
          }), (0,jsx_runtime.jsx)("td", {
            children: "Meter"
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: "failedPutKvRequestsPerSecond"
          }), (0,jsx_runtime.jsx)("td", {
            children: "The number of failed put kv requests to put kv to this table per second."
          }), (0,jsx_runtime.jsx)("td", {
            children: "Meter"
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: "totalLookupRequestsPerSecond"
          }), (0,jsx_runtime.jsx)("td", {
            children: "The number of lookup requests to lookup value by key from this table per second."
          }), (0,jsx_runtime.jsx)("td", {
            children: "Meter"
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: "failedLookupRequestsPerSecond"
          }), (0,jsx_runtime.jsx)("td", {
            children: "The number of failed lookup requests to lookup value by key from this table per second."
          }), (0,jsx_runtime.jsx)("td", {
            children: "Meter"
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: "remoteLogCopyBytesPerSecond"
          }), (0,jsx_runtime.jsx)("td", {
            children: "The bytes of log data copied to remote per second."
          }), (0,jsx_runtime.jsx)("td", {
            children: "Meter"
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: "remoteLogCopyRequestsPerSecond"
          }), (0,jsx_runtime.jsx)("td", {
            children: "The number of remote log copy requests to copy local log to remote per second."
          }), (0,jsx_runtime.jsx)("td", {
            children: "Meter"
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: "remoteLogCopyErrorPerSecond"
          }), (0,jsx_runtime.jsx)("td", {
            children: "The number of error remote log copy requests to copy local log to remote per second."
          }), (0,jsx_runtime.jsx)("td", {
            children: "Meter"
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: "remoteLogDeleteRequestsPerSecond"
          }), (0,jsx_runtime.jsx)("td", {
            children: "The number of delete remote log requests to delete remote log after log ttl per second."
          }), (0,jsx_runtime.jsx)("td", {
            children: "Meter"
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: "remoteLogDeleteErrorPerSecond"
          }), (0,jsx_runtime.jsx)("td", {
            children: "The number of failed delete remote log requests to delete remote log after log ttl per second."
          }), (0,jsx_runtime.jsx)("td", {
            children: "Meter"
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            rowspan: "6",
            children: "table_bucket"
          }), (0,jsx_runtime.jsx)("td", {
            children: "inSyncReplicasCount"
          }), (0,jsx_runtime.jsx)("td", {
            children: "The inSync replicas count of this table bucket."
          }), (0,jsx_runtime.jsx)("td", {
            children: "Gauge"
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: "underMinIsr"
          }), (0,jsx_runtime.jsx)("td", {
            children: "If this bucket is under min isr, this value is 1, otherwise 0."
          }), (0,jsx_runtime.jsx)("td", {
            children: "Gauge"
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: "atMinIsr"
          }), (0,jsx_runtime.jsx)("td", {
            children: "If this bucket is at min isr, this value is 1, otherwise 0."
          }), (0,jsx_runtime.jsx)("td", {
            children: "Gauge"
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: "isrExpandsPerSecond"
          }), (0,jsx_runtime.jsx)("td", {
            children: "The number of isr expands per second."
          }), (0,jsx_runtime.jsx)("td", {
            children: "Meter"
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: "isrShrinksPerSecond"
          }), (0,jsx_runtime.jsx)("td", {
            children: "The number of isr shrinks per second."
          }), (0,jsx_runtime.jsx)("td", {
            children: "Meter"
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: "failedIsrUpdatesPerSecond"
          }), (0,jsx_runtime.jsx)("td", {
            children: "The failed isr updates per second."
          }), (0,jsx_runtime.jsx)("td", {
            children: "Meter"
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            rowspan: "5",
            children: "table_bucket_log"
          }), (0,jsx_runtime.jsx)("td", {
            children: "numSegments"
          }), (0,jsx_runtime.jsx)("td", {
            children: "The number of segments in local storage for this table bucket."
          }), (0,jsx_runtime.jsx)("td", {
            children: "Gauge"
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: "endOffset"
          }), (0,jsx_runtime.jsx)("td", {
            children: "The end offset in local storage for this table bucket."
          }), (0,jsx_runtime.jsx)("td", {
            children: "Gauge"
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: "size"
          }), (0,jsx_runtime.jsx)("td", {
            children: "The total log sizes in local storage for this table bucket."
          }), (0,jsx_runtime.jsx)("td", {
            children: "Gauge"
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: "flushPerSecond"
          }), (0,jsx_runtime.jsx)("td", {
            children: "The log flush count per second."
          }), (0,jsx_runtime.jsx)("td", {
            children: "Meter"
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: "flushLatencyMs"
          }), (0,jsx_runtime.jsx)("td", {
            children: "The log flush latency in ms."
          }), (0,jsx_runtime.jsx)("td", {
            children: "Histogram"
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            rowspan: "3",
            children: "table_bucket_remoteLog"
          }), (0,jsx_runtime.jsx)("td", {
            children: "numSegments"
          }), (0,jsx_runtime.jsx)("td", {
            children: "The number of segments in remote storage for this table bucket."
          }), (0,jsx_runtime.jsx)("td", {
            children: "Gauge"
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: "endOffset"
          }), (0,jsx_runtime.jsx)("td", {
            children: "The end offset in remote storage for this table bucket."
          }), (0,jsx_runtime.jsx)("td", {
            children: "Gauge"
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: "size"
          }), (0,jsx_runtime.jsx)("td", {
            children: "The number of bytes written per second to this table."
          }), (0,jsx_runtime.jsx)("td", {
            children: "Gauge"
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            rowspan: "1",
            children: "table_bucket_kv_snapshot"
          }), (0,jsx_runtime.jsx)("td", {
            children: "latestSnapshotSize"
          }), (0,jsx_runtime.jsx)("td", {
            children: "The latest kv snapshot size in bytes for this table bucket."
          }), (0,jsx_runtime.jsx)("td", {
            children: "Gauge"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "flink-connector-standard-metrics",
      children: "Flink connector standard metrics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When using Flink to read and write, Fluss has implemented some key standard Flink connector metrics\nto measure the source latency and output of sink, see ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://cwiki.apache.org/confluence/display/FLINK/FLIP-33%3A+Standardize+Connector+Metrics",
        children: "FLIP-33: Standardize Connector Metrics"
      }), ".\nFlink source / sink metrics implemented are listed here."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["How to use flink metrics, you can see ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://nightlies.apache.org/flink/flink-docs-release-1.20/docs/ops/metrics/#system-metrics",
        children: "flink metrics"
      }), " for more details."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "source-metrics",
      children: "Source Metrics"
    }), "\n", (0,jsx_runtime.jsxs)("table", {
      class: "table table-bordered",
      children: [(0,jsx_runtime.jsx)("thead", {
        children: (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("th", {
            class: "text-left",
            style: {
              width: '225pt'
            },
            children: "Metrics Name"
          }), (0,jsx_runtime.jsx)("th", {
            class: "text-left",
            style: {
              width: '165pt'
            },
            children: "Level"
          }), (0,jsx_runtime.jsx)("th", {
            class: "text-left",
            style: {
              width: '300pt'
            },
            children: "Description"
          }), (0,jsx_runtime.jsx)("th", {
            class: "text-left",
            style: {
              width: '70pt'
            },
            children: "Type"
          })]
        })
      }), (0,jsx_runtime.jsxs)("tbody", {
        children: [(0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: "currentEmitEventTimeLag"
          }), (0,jsx_runtime.jsx)("td", {
            children: "Flink Source Operator"
          }), (0,jsx_runtime.jsx)("td", {
            children: "Time difference between sending the record out of source and file creation."
          }), (0,jsx_runtime.jsx)("td", {
            children: "Gauge"
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: "currentFetchEventTimeLag"
          }), (0,jsx_runtime.jsx)("td", {
            children: "Flink Source Operator"
          }), (0,jsx_runtime.jsx)("td", {
            children: "Time difference between reading the data file and file creation."
          }), (0,jsx_runtime.jsx)("td", {
            children: "Gauge"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "sink-metrics",
      children: "Sink Metrics"
    }), "\n", (0,jsx_runtime.jsxs)("table", {
      class: "table table-bordered",
      children: [(0,jsx_runtime.jsx)("thead", {
        children: (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("th", {
            class: "text-left",
            style: {
              width: '225pt'
            },
            children: "Metrics Name"
          }), (0,jsx_runtime.jsx)("th", {
            class: "text-left",
            style: {
              width: '165pt'
            },
            children: "Level"
          }), (0,jsx_runtime.jsx)("th", {
            class: "text-left",
            style: {
              width: '300pt'
            },
            children: "Description"
          }), (0,jsx_runtime.jsx)("th", {
            class: "text-left",
            style: {
              width: '70pt'
            },
            children: "Type"
          })]
        })
      }), (0,jsx_runtime.jsxs)("tbody", {
        children: [(0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: "numBytesOut"
          }), (0,jsx_runtime.jsx)("td", {
            children: "Table"
          }), (0,jsx_runtime.jsx)("td", {
            children: "The total number of output bytes."
          }), (0,jsx_runtime.jsx)("td", {
            children: "Counter"
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: "numBytesOutPerSecond"
          }), (0,jsx_runtime.jsx)("td", {
            children: "Table"
          }), (0,jsx_runtime.jsx)("td", {
            children: "The output bytes per second."
          }), (0,jsx_runtime.jsx)("td", {
            children: "Meter"
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: "numRecordsOut"
          }), (0,jsx_runtime.jsx)("td", {
            children: "Table"
          }), (0,jsx_runtime.jsx)("td", {
            children: "The total number of output records."
          }), (0,jsx_runtime.jsx)("td", {
            children: "Counter"
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: "numRecordsOutPerSecond"
          }), (0,jsx_runtime.jsx)("td", {
            children: "Table"
          }), (0,jsx_runtime.jsx)("td", {
            children: "The output records per second."
          }), (0,jsx_runtime.jsx)("td", {
            children: "Meter"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "grafana-template",
      children: "Grafana template"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "We will provide a grafana template for you to monitor fluss soon."
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