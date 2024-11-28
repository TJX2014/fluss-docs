"use strict";
(self["webpackChunkfluss_website"] = self["webpackChunkfluss_website"] || []).push([[1599],{

/***/ 8497:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_maintenance_filesystems_overview_md_cdd_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-maintenance-filesystems-overview-md-cdd.json
const site_docs_maintenance_filesystems_overview_md_cdd_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"maintenance/filesystems/overview","title":"File Systems","description":"Fluss uses file systems as remote storage to store snapshots for Primary-Key Table and store tiered log segments for Log Table. These","source":"@site/docs/maintenance/filesystems/overview.md","sourceDirName":"maintenance/filesystems","slug":"/maintenance/filesystems/overview","permalink":"/fluss-docs/docs/maintenance/filesystems/overview","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_label":"Overview","sidebar_position":1},"sidebar":"docsSidebar","previous":{"title":"Configuration","permalink":"/fluss-docs/docs/maintenance/configuration"},"next":{"title":"HDFS","permalink":"/fluss-docs/docs/maintenance/filesystems/hdfs"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/maintenance/filesystems/overview.md


const frontMatter = {
	sidebar_label: 'Overview',
	sidebar_position: 1
};
const contentTitle = 'File Systems';

const assets = {

};



const toc = [{
  "value": "Local File System",
  "id": "local-file-system",
  "level": 2
}, {
  "value": "Pluggable File Systems",
  "id": "pluggable-file-systems",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
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
        id: "file-systems",
        children: "File Systems"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Fluss uses file systems as remote storage to store snapshots for Primary-Key Table and store tiered log segments for Log Table. These\nare some of the file systems that Fluss supports currently, including ", (0,jsx_runtime.jsx)(_components.em, {
        children: "local"
      }), ", ", (0,jsx_runtime.jsx)(_components.em, {
        children: "hadoop"
      }), ", ", (0,jsx_runtime.jsx)(_components.em, {
        children: "Aliyun OSS"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The file system used for a particular file is determined by its URI scheme. For example, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "file:///home/user/text.txt"
      }), " refers to a file in the local file system,\nwhile ", (0,jsx_runtime.jsx)(_components.code, {
        children: "hdfs://namenode:50010/data/user/text.txt"
      }), " is a file in a specific HDFS cluster."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "File system instances are instantiated once per process and then cached/pooled, to avoid configuration overhead per stream creation."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "local-file-system",
      children: "Local File System"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Fluss has built-in support for the file system of the local machine, including any NFS or SAN drives mounted into that local file system. Local files are referenced with the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "file://"
      }), " URI scheme. You\ncan use local file system as remote storage for testing purposes with the following configuration in Fluss' ", (0,jsx_runtime.jsx)(_components.code, {
        children: "server.yaml"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "remote.data.dir: file:///path/to/remote/storage\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "warning",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Never use local file system as remote storage in production as it is not fault-tolerant. Please use distributed file systems or cloud object storage listed in ", (0,jsx_runtime.jsx)(_components.a, {
          href: "#pluggable-file-systems",
          children: "Pluggable File Systems"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pluggable-file-systems",
      children: "Pluggable File Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Fluss project supports the following file system:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/fluss-docs/docs/maintenance/filesystems/hdfs",
              children: "HDFS"
            })
          }), " is supported by ", (0,jsx_runtime.jsx)(_components.code, {
            children: "fluss-fs-hadoop"
          }), " and registered under the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "hdfs://"
          }), " URI scheme."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/fluss-docs/docs/maintenance/filesystems/oss",
              children: "Aliyun OSS"
            })
          }), " is supported by ", (0,jsx_runtime.jsx)(_components.code, {
            children: "fluss-fs-oss"
          }), " and registered under the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "oss://"
          }), " URI scheme."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/fluss-docs/docs/maintenance/filesystems/s3",
              children: "AWS S3"
            })
          }), " is supported by ", (0,jsx_runtime.jsx)(_components.code, {
            children: "fluss-fs-s3"
          }), " and registered under the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "s3://"
          }), " URI scheme."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The implementation is based on ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://hadoop.apache.org/",
        children: "Hadoop Project"
      }), " but is self-contained with no dependency footprint."]
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