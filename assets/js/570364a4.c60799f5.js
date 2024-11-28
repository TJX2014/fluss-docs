"use strict";
(self["webpackChunkfluss_website"] = self["webpackChunkfluss_website"] || []).push([[6585],{

/***/ 1746:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_maintenance_configuration_md_570_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-maintenance-configuration-md-570.json
const site_docs_maintenance_configuration_md_570_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"maintenance/configuration","title":"Configuration","description":"All configuration can be set in Fluss configuration file conf/server.yaml","source":"@site/docs/maintenance/configuration.md","sourceDirName":"maintenance","slug":"/maintenance/configuration","permalink":"/fluss-docs/docs/maintenance/configuration","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_label":"Configuration","sidebar_position":1},"sidebar":"docsSidebar","previous":{"title":"Paimon","permalink":"/fluss-docs/docs/streaming-lakehouse/integrate-data-lakes/paimon"},"next":{"title":"Overview","permalink":"/fluss-docs/docs/maintenance/filesystems/overview"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/maintenance/configuration.md


const frontMatter = {
	sidebar_label: 'Configuration',
	sidebar_position: 1
};
const contentTitle = 'Configuration';

const assets = {

};



const toc = [{
  "value": "Server Configuration",
  "id": "server-configuration",
  "level": 2
}, {
  "value": "Fluss Cluster",
  "id": "fluss-cluster",
  "level": 3
}, {
  "value": "CoordinatorServer",
  "id": "coordinatorserver",
  "level": 3
}, {
  "value": "TabletServer",
  "id": "tabletserver",
  "level": 3
}, {
  "value": "Zookeeper",
  "id": "zookeeper",
  "level": 3
}, {
  "value": "Netty",
  "id": "netty",
  "level": 3
}, {
  "value": "Log",
  "id": "log",
  "level": 3
}, {
  "value": "Log Tired Storage",
  "id": "log-tired-storage",
  "level": 3
}, {
  "value": "Kv",
  "id": "kv",
  "level": 3
}, {
  "value": "Metrics",
  "id": "metrics",
  "level": 3
}, {
  "value": "Lakehouse",
  "id": "lakehouse",
  "level": 3
}, {
  "value": "Table Configuration",
  "id": "table-configuration",
  "level": 2
}, {
  "value": "Config by Flink SQL",
  "id": "config-by-flink-sql",
  "level": 3
}, {
  "value": "Client Configuration",
  "id": "client-configuration",
  "level": 2
}, {
  "value": "Config by Flink SQL",
  "id": "config-by-flink-sql-1",
  "level": 3
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
    li: "li",
    ol: "ol",
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
        id: "configuration",
        children: "Configuration"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["All configuration can be set in Fluss configuration file ", (0,jsx_runtime.jsx)(_components.code, {
        children: "conf/server.yaml"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The configuration is parsed and evaluated when the Fluss processes are started.\nChanges to the configuration file require restarting the relevant processes."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Users can organize config in format ", (0,jsx_runtime.jsx)(_components.code, {
        children: "key: value"
      }), ", such as:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        metastring: "title=\"conf/server.yaml\"",
        children: "default.bucket.number: 8\ndefault.replication.factor: 3\nremote.data.dir: /home/fluss/data\nremote.fs.write-buffer-size: 10mb\nauto-partition.check.interval: 5min\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "server-configuration",
      children: "Server Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Server configuration refers to a set of configurations used to specify the running parameters of a server.\nThese settings can only be configured at the time of cluster startup and do not support dynamic modification\nduring the Fluss cluster working."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fluss-cluster",
      children: "Fluss Cluster"
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
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "default.bucket.number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The default number of buckets for a table in Fluss cluster. It's a cluster-level parameter and all the tables without specifying bucket number in the cluster will use the value as the bucket number."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "default.replication.factor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The default replication factor for the log of a table in Fluss cluster. It's a cluster-level parameter, and all the tables without specifying replication factor in the cluster will use the value as replication factor."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "remote.data.dir"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(none)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The directory used for storing the kv snapshot data files and remote log for log tiered storage in a Fluss supported filesystem."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "remote.fs.write-buffer-size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MemorySize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4kb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The default size of the write buffer for writing the local files to remote file systems."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "plugin.classloader.parent-first-patterns.default"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["java.,", (0,jsx_runtime.jsx)("br", {}), "com.alibaba.fluss.,", (0,jsx_runtime.jsx)("br", {}), "javax.annotation.,", (0,jsx_runtime.jsx)("br", {}), "org.slf4j,", (0,jsx_runtime.jsx)("br", {}), "org.apache.log4j,", (0,jsx_runtime.jsx)("br", {}), "org.apache.logging,", (0,jsx_runtime.jsx)("br", {}), "org.apache.commons.logging,", (0,jsx_runtime.jsx)("br", {}), "ch.qos.logback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A (semicolon-separated) list of patterns that specifies which classes should always be resolved through the plugin parent ClassLoader first. A pattern is a simple prefix that is checked against the fully qualified class name. This setting should generally not be modified."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "auto-partition.check.interval"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Duration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10min"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The interval of auto partition check. he default value is 10 minutes."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "coordinatorserver",
      children: "CoordinatorServer"
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
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "coordinator.host"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(None)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The config parameter defining the network address to connect to for communication with the coordinator server. If the coordinator server is used as a bootstrap server (discover all the servers in the cluster), the value of this config option should be a static hostname or address."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "coordinator.port"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9123"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The config parameter defining the network port to connect to for communication with the coordinator server. Like 'coordinator.host', if the coordinator server is used as a bootstrap server (discover all the servers in the cluster), the value of this config option should be a static port. Otherwise, the value can be set to \"0\" for a dynamic service name resolution. The value accepts a list of ports (“50100,50101”), ranges (“50100-50200”) or a combination of both."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "coordinator.io-pool.size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The size of the IO thread pool to run blocking operations for coordinator server. This includes discard unnecessary snapshot files. Increase this value if you experience slow unnecessary snapshot files clean. The default value is 1."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tabletserver",
      children: "TabletServer"
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
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "tablet-server.host"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(None)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The external address of the network interface where the TabletServer is exposed. Because different TabletServer need different values for this option, usually it is specified in an additional non-shared TabletServer-specific config file."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "tablet-server.port"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The external RPC port where the TabletServer is exposed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "tablet-server.id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(None)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The id for the tablet server."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "data.dir"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/tmp/fluss-data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "This configuration controls the directory where fluss will store its data. The default value is /tmp/fluss-data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "server.writer-id.expiration-time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Duration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7d"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The time that the tablet server will wait without receiving any write request from a client before expiring the related status. The default value is 7 days."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "server.writer-id.expiration-check-interval"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Duration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10min"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The interval at which to remove writer ids that have expired due to 'server.writer-id.expiration-time passing. The default value is 10 minutes."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "zookeeper",
      children: "Zookeeper"
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
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "zookeeper.address"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(None)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The ZooKeeper address to use, when running Fluss with ZooKeeper."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "zookeeper.path.root"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/fluss"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The root path under which Fluss stores its entries in ZooKeeper."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "zookeeper.client.session-timeout"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "60000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Defines the session timeout for the ZooKeeper session in ms."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "zookeeper.client.connection-timeout"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Defines the connection timeout for ZooKeeper in ms."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "zookeeper.client.retry-wait"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Defines the pause between consecutive retries in ms."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "zookeeper.client.max-retry-attempts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Defines the number of connection retries before the client gives up."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "zookeeper.client.tolerate-suspended-connections"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Defines whether a suspended ZooKeeper connection will be treated as an error that causes the leader information to be invalidated or not. In case you set this option to %s, Fluss will wait until a ZooKeeper connection is marked as lost before it revokes the leadership of components. This has the effect that Fluss is more resilient against temporary connection instabilities at the cost of running more likely into timing issues with ZooKeeper."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "zookeeper.client.ensemble-tracker"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Defines whether Curator should enable ensemble tracker. This can be useful in certain scenarios in which CuratorFramework is accessing to ZK clusters via load balancer or Virtual IPs. Default Curator EnsembleTracking logic watches CuratorEventType.GET_CONFIG events and changes ZooKeeper connection string. It is not desired behaviour when ZooKeeper is running under the Virtual IPs. Under certain configurations EnsembleTracking can lead to setting of ZooKeeper connection string with unresolvable hostnames."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "netty",
      children: "Netty"
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
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "netty.server.num-network-threads"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The number of threads that the server uses for receiving requests from the network and sending responses to the network."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "netty.server.num-worker-threads"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The number of threads that the server uses for processing requests, which may include disk and remote I/O."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "netty.server.max-queued-requests"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "500"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The number of queued requests allowed for worker threads, before blocking the I/O threads."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "netty.connection.max-idle-time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Duration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10min"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Close idle connections after the number of milliseconds specified by this config."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "netty.client.num-network-threads"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The number of threads that the client uses for sending requests to the network and receiving responses from network. The default value is 1"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "log",
      children: "Log"
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
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "log.segment.file-size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MemorySize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1024m"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "This configuration controls the segment file size for the log. Retention and cleaning is always done a file at a time so a larger segment size means fewer files but less granular control over retention."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "log.index.file-size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MemorySize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10m"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "This configuration controls the size of the index that maps offsets to file positions. We preallocate this index file and shrink it only after log rolls. You generally should not need to change this setting."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "log.index.interval-size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MemorySize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4k"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "This setting controls how frequently fluss adds an index entry to its offset index. The default setting ensures that we index a message roughly every 4096 bytes. More indexing allows reads to jump closer to the exact position in the log but makes the index larger. You probably don't need to change this."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "log.file-preallocate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "True if we should preallocate the file on disk when creating a new log segment."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "log.flush.interval-messages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Long"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Long.MAX_VALUE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "This setting allows specifying an interval at which we will force a fsync of data written to the log. For example if this was set to 1, we would fsync after every message; if it were 5 we would fsync after every five messages."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "log.replica.high-watermark.checkpoint-interval"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Duration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The frequency with which the high watermark is saved out to disk. The default setting is 5 seconds."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "log.replica.max-lag-time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Duration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "If a follower replica hasn't sent any fetch log requests or hasn't consumed up the leaders log end offset for at least this time, the leader will remove the follower replica form isr"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "log.replica.write-operation-purge-number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The purge number (in number of requests) of the write operation manager, the default value is 1000."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "log.replica.fetcher-number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Number of fetcher threads used to replicate log records from each source tablet server. The total number of fetchers on each tablet server is bound by this parameter multiplied by the number of tablet servers in the cluster. Increasing this value can increase the degree of I/O parallelism in the follower and leader tablet server at the cost of higher CPU and memory utilization."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "log.replica.fetch-backoff-interval"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Duration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The amount of time to sleep when fetch bucket error occurs."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "log.fetch.max-bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MemorySize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16mb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The maximum amount of data the server should return for a fetch request. Records are fetched in batches for log scanner or follower, for one request batch, and if the first record batch in the first non-empty bucket of the fetch is larger than this value, the record batch will still be returned to ensure that the fetch can make progress. As such, this is not a absolute maximum. Note that the fetcher performs multiple fetches in parallel."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "log.fetch.max-bytes-for-bucket"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MemorySize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1mb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The maximum amount of data the server should return for a table bucket in fetch request. Records are fetched in batches for consumer or follower, for one request batch, the max bytes size is config by this option."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "log.replica.min-in-sync-replicas-number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "When a producer set acks to all (-1), this configuration specifies the minimum number of replicas that must acknowledge a write for the write to be considered successful. If this minimum cannot be met, then the producer will raise an exception(NotEnoughReplicas). when used together, this config and 'acks' allow you to enforce greater durability guarantees. A typical scenario would be to create a table with a replication factor of 3. set this conf to 2, and produce with acks = -1. This will ensure that the producer raises an exception if a majority of replicas don't receive a write."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "log-tired-storage",
      children: "Log Tired Storage"
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
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "remote.log.task-interval-duration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Duration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1min"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Interval at which remote log manager runs the scheduled tasks like copy segments, clean up remote log segments, delete local log segments etc. If the value is set to 0s, it means that the remote log storage is disabled."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "remote.log.index-file-cache-size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MemorySize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1gb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The total size of the space allocated to store index files fetched from remote storage in the local storage."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "remote.log-manager.thread-pool-size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Size of the thread pool used in scheduling tasks to copy segments, fetch remote log indexes and clean up remote log segments."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "remote.log.data-transfer-thread-num"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The number of threads the server uses to transfer (download and upload) remote log file can be data file, index file and remote log metadata file."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "kv",
      children: "Kv"
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
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "kv.snapshot.interval"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Duration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10min"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The interval to perform periodic snapshot for kv data. The default setting is 10 minutes."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "kv.snapshot.scheduler-thread-num"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The number of threads that the server uses to schedule snapshot kv data for all the replicas in the server."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "kv.snapshot.transfer-thread-num"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The number of threads the server uses to transfer (download and upload) kv snapshot files."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "kv.snapshot.num-retained"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The maximum number of completed snapshots to retain."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "kv.rocksdb.thread.num"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The maximum number of concurrent background flush and compaction jobs (per bucket of table). The default value is '2'."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "kv.rocksdb.files.open"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The maximum number of open files (per  bucket of table) that can be used by the DB, '-1' means no limit. The default value is '-1'."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "kv.rocksdb.log.max-file-size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MemorySize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "25mb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The maximum size of RocksDB's file used for information logging. If the log files becomes larger than this, a new file will be created. If 0, all logs will be written to one log file. The default maximum file size is '25MB'."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "kv.rocksdb.log.file-num"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The maximum number of files RocksDB should keep for information logging (Default setting: 4)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "kv.rocksdb.log.dir"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(None)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The directory for RocksDB's information logging files. If empty (Fluss default setting), log files will be in the same directory as the Fluss log. If non-empty, this directory will be used and the data directory's absolute path will be used as the prefix of the log file name. If setting this option as a non-existing location, e.g '/dev/null', RocksDB will then create the log under its own database folder as before."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "kv.rocksdb.log.level"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INFO_LEVEL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The specified information logging level for RocksDB. Candidate log level is 'DEBUG_LEVEL', 'INFO_LEVEL', 'WARN_LEVEL', 'ERROR_LEVEL', 'FATAL_LEVEL', 'HEADER_LEVEL', NUM_INFO_LOG_LEVELS, . If unset, Fluss will use INFO_LEVEL. Note: RocksDB info logs will not be written to the Fluss's tablet server logs and there is no rolling strategy, unless you configure 'kv.rocksdb.log.dir', 'kv.rocksdb.log.max-file-size' and 'kv.rocksdb.log.file-num' accordingly. Without a rolling strategy, it may lead to uncontrolled disk space usage if configured with increased log levels!  There is no need to modify the RocksDB log level, unless for troubleshooting RocksDB."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "kv.rocksdb.write-batch-size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MemorySize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2mb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The max size of the consumed memory for RocksDB batch write, will flush just based on item count if this config set to 0."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "kv.rocksdb.compaction.style"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LEVEL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The specified compaction style for DB. Candidate compaction style is LEVEL, FIFO, UNIVERSAL, or NONE, and Fluss chooses 'LEVEL' as default style."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "kv.rocksdb.compaction.level.use-dynamic-size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["If true, RocksDB will pick target size of each level dynamically. From an empty DB, RocksDB would make last level the base level, which means merging L0 data into the last level, until it exceeds max_bytes_for_level_base. And then repeat this process for second last level and so on. The default value is 'false'. For more information, please refer to %s ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/facebook/rocksdb/wiki/Leveled-Compaction#level_compaction_dynamic_level_bytes-is-true",
              children: "https://github.com/facebook/rocksdb/wiki/Leveled-Compaction#level_compaction_dynamic_level_bytes-is-true"
            }), " RocksDB's doc."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "kv.rocksdb.compression.per.level"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LZ4,LZ4,LZ4,LZ4,LZ4,ZSTD,ZSTD"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["A comma-separated list of Compression Type. Different levels can have different compression policies. In many cases, lower levels use fast compression algorithms, while higher levels with more data use slower but more effective compression algorithms. The N th element in the List corresponds to the compression type of the level N-1 When 'kv.rocksdb.compaction.level.use-dynamic-size' is true, compression_per_level[0] still determines L0, but other elements are based on the base level and may not match the level seen in the info log. Note: If the List size is smaller than the level number, the undefined lower level uses the last Compression Type in the List. The optional values include NO, SNAPPY, LZ4, ZSTD. For more information about compression type, please refer to doc ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/facebook/rocksdb/wiki/Compression",
              children: "https://github.com/facebook/rocksdb/wiki/Compression"
            }), ". The default value is ‘LZ4,LZ4,LZ4,LZ4,LZ4,ZSTD,ZSTD’, indicates there is lz4 compaction of level0 and level4, ZSTD compaction algorithm is used from level5 to level6. LZ4 is a lightweight compression algorithm so it usually strikes a good balance between space and CPU usage. ZSTD is more space save than LZ4, but it is more CPU-intensive. Different machines deploy compaction modes according to CPU and I/O resources. The default value is for the scenario that CPU resources are adequate. If you find the IO pressure of the system is not big when writing a lot of data, but CPU resources are inadequate, you can exchange I/O resources for CPU resources and change the compaction mode to 'NO,NO,NO,LZ4,LZ4,ZSTD,ZSTD'."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "kv.rocksdb.compaction.level.target-file-size-base"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MemorySize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "64mb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The target file size for compaction, which determines a level-1 file size. The default value is '64MB'."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "kv.rocksdb.compaction.level.max-size-level-base"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MemorySize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "256mb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The upper-bound of the total size of level base files in bytes. The default value is '256MB'."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "kv.rocksdb.writebuffer.size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MemorySize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "64mb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The amount of data built up in memory (backed by an unsorted log on disk) before converting to a sorted on-disk files. The default writebuffer size is '64MB'."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "kv.rocksdb.writebuffer.count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The maximum number of write buffers that are built up in memory. The default value is '2'."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "kv.rocksdb.writebuffer.number-to-merge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The minimum number of write buffers that will be merged together before writing to storage. The default value is '1'."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "kv.rocksdb.block.blocksize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MemorySize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4kb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The approximate size (in bytes) of user data packed per block. The default blocksize is '4KB'."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "kv.rocksdb.block.cache-size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MemorySize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8mb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The amount of the cache for data blocks in RocksDB. The default block-cache size is '8MB'."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "kv.rocksdb.use-bloom-filter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "If true, every newly created SST file will contain a Bloom filter. It is enabled by default."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "kv.rocksdb.bloom-filter.bits-per-key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Double"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bits per key that bloom filter will use, this only take effect when bloom filter is used. The default value is 10.0."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "kv.rocksdb.bloom-filter.block-based-mode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "If true, RocksDB will use block-based filter instead of full filter, this only take effect when bloom filter is used. The default value is 'false'."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "kv.recover.log-record-batch.max-size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MemorySize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16mb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The max fetch size for fetching log to apply to kv during recovering kv."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "metrics",
      children: "Metrics"
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
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "metrics.reporters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "List"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(None)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "An optional list of reporter names. If configured, only reporters whose name matches in the list will be started"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "metrics.reporter.prometheus.port"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9249"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The port the Prometheus reporter listens on, defaults to 9249. In order to be able to run several instances of the reporter on one host (e.g. when one TabletServer is colocated with the CoordinatorServer) it is advisable to use a port range like 9250-9260."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "metrics.reporter.jmx.port"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(None)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The port for the JMXServer that JMX clients can connect to. If not set, the JMXServer won't start. In order to be able to run several instances of the reporter on one host (e.g. when one TabletServer is colocated with the CoordinatorServer) it is advisable to use a port range like 9990-9999."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lakehouse",
      children: "Lakehouse"
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
            children: "lakehouse.storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(None)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The kind of lakehouse storage used by of Fluss such as Paimon, Iceberg, Hudi. Now, only support Paimon."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "table-configuration",
      children: "Table Configuration"
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
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bucket.num"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int"
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
            children: "(none)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Specific the distribution policy of the Fluss table. Data will be distributed to each bucket according to the hash value of bucket-key. If you specify multiple fields, delimiter is ','. If the table is with primary key, you can't specific bucket key currently. The bucket keys will always be the primary key(excluding partition key). If the table is not with primary key, you can specific bucket key, and when the bucket key is not specified, the data will be distributed to each bucket randomly."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "table.log.ttl"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Duration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7 days"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The time to live for log segments. The configuration controls the maximum time we will retain a log before we will delete old segments to free up space. If set to -1, the log will not be deleted."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "table.auto-partition.enabled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Boolean"
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
            children: "the system time zone"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The time zone for auto partitions, which is by default the same as the system time zone."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "table.replication.factor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(None)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The replication factor for the log of the new table. When it's not set, Fluss will use the cluster's default replication factor configured by default.replication.factor. It should be a positive number and not larger than the number of tablet servers in the Fluss cluster. A value larger than the number of tablet servers in Fluss cluster will result in an error when the new table is created."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "table.log.format"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ARROW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The format of the log records in log store. The default value is 'ARROW'. The supported formats are 'ARROW' and 'INDEXED'."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "table.kv.format"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPACTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The format of the kv records in kv store. The default value is 'COMPACTED'. The supported formats are 'COMPACTED' and 'INDEXED'."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "table.log.tiered.local-segments"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The number of log segments to retain in local for each table when log tiered storage is enabled. It must be greater that 0. The default is 2."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "table.datalake.enabled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Whether enable lakehouse storage for the table. Disabled by default. When this option is set to ture and the datalake tiering service is up, the table will be tiered and compacted into datalake format stored on lakehouse storage."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "config-by-flink-sql",
      children: "Config by Flink SQL"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When you create a table in Fluss by Flink, you can specify the table configuration by Flink in with options, like:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE TABLE my_table (\n  id INT,\n  name STRING,\n  PRIMARY KEY (id)\n) WITH (\n  'bucket.num' = '2',\n  'table.log.ttl' = '7 days',\n  'table.auto-partition.enabled' = 'true',\n  'table.auto-partition.time-unit' = 'DAY');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Currently, we don't support alter table configuration by Flink. This will be supported soon."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "client-configuration",
      children: "Client Configuration"
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
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "client.id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "An id string to pass to the server when making requests. The purpose of this is to be able to track the source of requests beyond just ip/port by allowing a logical application name to be included in server-side request logging."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "client.connect-timeout"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Duration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "120s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The Netty client connect timeout."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bootstrap.servers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "List"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(None)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["A list of host/port pairs to use for establishing the initial connection to the Fluss cluster. The list should be in the form host1", ":port1", ",host2", ":port2", ",.... Since these servers are just used for the initial connection to discover the full cluster membership (which may change dynamically), this list need not contain the full set of servers (you may want more than one, though, in case a server is down)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "client.writer.buffer.memory-size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MemorySize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "64mb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The total bytes of memory the writer can use to buffer internal rows."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "client.writer.buffer.page-size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MemorySize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "128kb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Size of every page in memory buffers ('client.writer.buffer.memory-size')."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "client.writer.batch-size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MemorySize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2mb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The writer or walBuilder will attempt to batch records together into one batch for the same bucket. This helps performance on both the client and the server."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "client.writer.legacy.batch-size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MemorySize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "64kb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The writer or walBuilder will attempt to batch records together into one batch for the same bucket. This helps performance on both the client and the server."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "client.writer.batch-timeout"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Duration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The writer groups ay rows that arrive in between request sends into a single batched request. Normally this occurs only under load when rows arrive faster than they can be sent out. However in some circumstances the writer may want to reduce the number of requests even under moderate load. This setting accomplishes this by adding a small amount of artificial delay, that is, rather than immediately sending out a row, the writer will wait for up to the given delay to allow other records to be sent so that the sends can be batched together. This can be thought of as analogous to Nagle's algorithm in TCP. This setting gives the upper bound on the delay for batching: once we get client.writer.batch-size worth of rows for a bucket it will be sent immediately regardless of this setting, however if we have fewer than this many bytes accumulated for this bucket we will delay for the specified time waiting for more records to show up. This setting defaults to 100ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "client.writer.bucket.no-key-assigner"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "STICKY"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["The bucket assigner for no key table. For table with bucket key or primary key, we choose a bucket based on a hash of the key. For these table without bucket key and primary key, we can use this option to specify bucket assigner, the candidate assigner is ROUND_ROBIN, STICKY, the default assigner is STICKY.", (0,jsx_runtime.jsx)("br", {}), "ROUND_ROBIN: this strategy will assign the bucket id for the input row by round robin.", (0,jsx_runtime.jsx)("br", {}), "STICKY: this strategy will assign new bucket id only if the batch changed in record accumulator, otherwise the bucket id will be the same as the front record."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "client.writer.acks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "all"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["The number of acknowledgments the writer requires the leader to have received before considering a request complete. This controls the durability of records that are sent. The following settings are allowed:", (0,jsx_runtime.jsx)("br", {}), "acks=0: If set to 0, then the writer will not wait for any acknowledgment from the server at all. No gurarantee can be mode that the server has received the record in this case.", (0,jsx_runtime.jsx)("br", {}), "acks=1: This will mean the leader will write the record to its local log but will respond without awaiting full acknowledge the record but before the followers have replicated it then the record will be lost.", (0,jsx_runtime.jsx)("br", {}), "acks=-1 (all): This will mean the leader will wait for the full ser of in-sync replicas to acknowledge the record. This guarantees that the record will not be lost as long as at least one in-sync replica remains alive, This is the strongest available guarantee."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "client.writer.request-max-size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MemorySize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10mb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The maximum size of a request in bytes. This setting will limit the number of record batches the writer will send in a single request to avoid sending huge requests. Note that this retry is no different than if the writer resent the row upon receiving the error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "client.writer.retries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer.MAX_VALUE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Setting a value greater than zero will cause the client to resend any record whose send fails with a potentially transient error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "client.writer.enable-idempotence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Writer idempotence is enabled by default if no conflicting config are set. If conflicting config are set and writer idempotence is not explicitly enabled, idempotence is disabled. If idempotence is explicitly enabled and conflicting config are set, a ConfigException is thrown"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "client.writer.max-inflight-requests-per-bucket"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The maximum number of unacknowledged requests per bucket for writer. This configuration can work only if 'client.writer.enable-idempotence' is set to true. When the number of inflight requests per bucket exceeds this setting, the writer will wait for the inflight requests to complete before sending out new requests. This setting defaults to 5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "client.request-timeout"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Duration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The timeout for a request to complete. If user set the write ack to -1, this timeout is the max time that delayed write try to complete. The default setting is 30 seconds."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "client.scanner.log.check-crc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automatically check the CRC3 of the read records for LogScanner. This ensures no on-the-wire or on-disk corruption to the messages occurred. This check adds some overhead, so it may be disabled in cases seeking extreme performance."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "client.scanner.log.max-poll-records"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "500"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The maximum number of records returned in a single call to poll() for LogScanner. Note that this config doesn't impact the underlying fetching behavior. The Scanner will cache the records from each fetch request and returns them incrementally from each poll."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "client.lookup.queue-size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "256"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The maximum number of pending lookup operations."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "client.lookup.max-batch-size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "128"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The maximum batch size of merging lookup operations to one lookup request."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "client.lookup.max-inflight-requests"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "128"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The maximum number of unacknowledged lookup requests for lookup operations."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "client.scanner.remote-log.prefetch-num"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The number of remote log segments to keep in local temp file for LogScanner, which download from remote storage. The default setting is 4."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "client.scanner.io.tmpdir"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System.getProperty(\"java.io.tmpdir\") + \"/fluss\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Local directory that is used by client for storing the data files (like kv snapshot, log segment files) to read temporarily"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "client.remote-file.download-thread-num"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The number of threads the client uses to download remote files."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "client.filesystem.security.token.renewal.backoff"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Duration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The time period how long to wait before retrying to obtain new security tokens for filesystem after a failure."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "client.filesystem.security.token.renewal.time-ratio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Double"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.75"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ratio of the tokens's expiration time when new credentials for access filesystem should be re-obtained."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "client.metrics.enabled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enable metrics for client. When metrics is enabled, the client will collect metrics and report by the JMX metrics reporter."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "config-by-flink-sql-1",
      children: "Config by Flink SQL"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When you create a table in Fluss by Flink, you can specify the client configuration by Flink in with options, like:"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE TABLE my_table (\n  id INT,\n  name STRING,\n  PRIMARY KEY (id)\n) WITH (\n  'bucket.num' = '2',\n  'client.writer.acks ' = 'all');\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Also, you can change the client configuration use ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://nightlies.apache.org/flink/flink-docs-release-1.20/docs/dev/table/sql/queries/hints/#dynamic-table-options",
          children: "Flink SQL Hints"
        }), " like:"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "INSERT INTO my_table /*+ OPTIONS('client.writer.acks' = '0') */\nSELECT *\nFROM my_source\n"
      })
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