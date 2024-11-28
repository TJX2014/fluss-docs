"use strict";
(self["webpackChunkfluss_website"] = self["webpackChunkfluss_website"] || []).push([[7280],{

/***/ 4810:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_maintenance_tiered_storage_remote_storage_md_9df_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-maintenance-tiered-storage-remote-storage-md-9df.json
const site_docs_maintenance_tiered_storage_remote_storage_md_9df_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"maintenance/tiered-storage/remote-storage","title":"Remote Storage","description":"Remote storage usually means a cost efficient and fault-tolerant storage comparing to local disk, such as S3, HDFS, OSS.","source":"@site/docs/maintenance/tiered-storage/remote-storage.md","sourceDirName":"maintenance/tiered-storage","slug":"/maintenance/tiered-storage/remote-storage","permalink":"/fluss-docs/docs/maintenance/tiered-storage/remote-storage","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"docsSidebar","previous":{"title":"Overview","permalink":"/fluss-docs/docs/maintenance/tiered-storage/overview"},"next":{"title":"Lakehouse Storage","permalink":"/fluss-docs/docs/maintenance/tiered-storage/lakehouse-storage"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/maintenance/tiered-storage/remote-storage.md


const frontMatter = {
	sidebar_position: 2
};
const contentTitle = 'Remote Storage';

const assets = {

};



const toc = [{
  "value": "Remote Log",
  "id": "remote-log",
  "level": 2
}, {
  "value": "Cluster configurations about remote log",
  "id": "cluster-configurations-about-remote-log",
  "level": 3
}, {
  "value": "Table configurations about remote log",
  "id": "table-configurations-about-remote-log",
  "level": 3
}, {
  "value": "Remote snapshot of primary key table",
  "id": "remote-snapshot-of-primary-key-table",
  "level": 2
}, {
  "value": "Cluster configurations about remote snapshot",
  "id": "cluster-configurations-about-remote-snapshot",
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
    p: "p",
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
        id: "remote-storage",
        children: "Remote Storage"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Remote storage usually means a cost efficient and fault-tolerant storage comparing to local disk, such as S3, HDFS, OSS.\nSee more detail about how to configure remote storage in documentation of ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/fluss-docs/docs/maintenance/filesystems/overview",
        children: "filesystems"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For log table, Fluss will use remote storage to store the tiered log segments of data. For primary key table, Fluss will use remote storage to store the snapshot as well as the tiered log segments for change log."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "remote-log",
      children: "Remote Log"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "As a streaming storage, Fluss data is mostly consumed in a streaming fashion using tail reads. To achieve low\nlatency for tail reads, Fluss will store recent data in local disk. But for older data, to reduce local disk cost,\nFluss will move data from local to remote storage, such as S3, HDFS or OSS asynchronously."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cluster-configurations-about-remote-log",
      children: "Cluster configurations about remote log"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["By default, Fluss will copy local log segments to remote storage in every 1 minute. The interval is controlled by configuration ", (0,jsx_runtime.jsx)(_components.code, {
        children: "remote.log.task-interval-duration"
      }), ".\nIf you don't want to copy log segments to remote storage, you can set ", (0,jsx_runtime.jsx)(_components.code, {
        children: "remote.log.task-interval-duration"
      }), " to 0."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Below is the list for all configurations to control the log segments tiered behavior in cluster level:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Configuration"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "type"
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
            children: "The number of threads the server uses to transfer (download and upload) remote log file can be  data file, index file and remote log metadata file."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "table-configurations-about-remote-log",
      children: "Table configurations about remote log"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When local log segments are copied to remote storage, the local log segments will be deleted to reduce local disk cost.\nBut some times, we want to keep the several latest log segments retain in local although they has been coped to remote storage for better read performance.\nYou can control how many log segments to retain in local by setting the configuration ", (0,jsx_runtime.jsx)(_components.code, {
        children: "table.log.tiered.local-segments"
      }), "(default is 2) per table."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "remote-snapshot-of-primary-key-table",
      children: "Remote snapshot of primary key table"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In Fluss, one primary key table is distributed to multiple buckets. For each bucket of primary key table, Fluss will only always keep one replica in local disk without any follower replicas."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "So, for fault tolerance of local disk fail forever, Fluss will do snapshots to the replicas of primary key table periodically and upload the snapshots to remote storage.\nThe snapshot will keep a log offset representing the next unread change log while doing the snapshot. Then, when the machine holding the replica fails, Fluss can recover the replica in other live machines by downloading the snapshot from remote storage and apply the change log\nsince last snapshot."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "What' more, with the snapshot and the consistent log offset, Fluss client can seamlessly switch from full reading phase(reading snapshot) to the incremental\nphase (subscribe change log from the consistent log offset) without any data duplication or loss."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cluster-configurations-about-remote-snapshot",
      children: "Cluster configurations about remote snapshot"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Below is the list for all configurations to control the snapshot behavior in cluster level:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Configuration"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "type"
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
            children: "The interval to perform periodic snapshot for kv data."
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
            children: "The maximum number of completed snapshots to retain. It's recommended to set it to a larger value to avoid the case that server delete the snapshot while the client is still reading the snapshot."
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