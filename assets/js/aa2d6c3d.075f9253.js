"use strict";
(self["webpackChunkfluss_website"] = self["webpackChunkfluss_website"] || []).push([[1903],{

/***/ 6707:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_maintenance_filesystems_hdfs_md_aa2_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-maintenance-filesystems-hdfs-md-aa2.json
const site_docs_maintenance_filesystems_hdfs_md_aa2_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"maintenance/filesystems/hdfs","title":"HDFS","description":"HDFS (Hadoop Distributed File System) is the primary storage system used by Hadoop applications. Fluss","source":"@site/docs/maintenance/filesystems/hdfs.md","sourceDirName":"maintenance/filesystems","slug":"/maintenance/filesystems/hdfs","permalink":"/fluss-docs/docs/maintenance/filesystems/hdfs","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_label":"HDFS","sidebar_position":2},"sidebar":"docsSidebar","previous":{"title":"Overview","permalink":"/fluss-docs/docs/maintenance/filesystems/overview"},"next":{"title":"Aliyun OSS","permalink":"/fluss-docs/docs/maintenance/filesystems/oss"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/maintenance/filesystems/hdfs.md


const frontMatter = {
	sidebar_label: 'HDFS',
	sidebar_position: 2
};
const contentTitle = 'HDFS';

const assets = {

};



const toc = [{
  "value": "Configurations setup",
  "id": "configurations-setup",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    p: "p",
    pre: "pre",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "hdfs",
        children: "HDFS"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://hadoop.apache.org/docs/stable/",
        children: "HDFS (Hadoop Distributed File System)"
      }), " is the primary storage system used by Hadoop applications. Fluss\nsupports HDFS as a remote storage."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "configurations-setup",
      children: "Configurations setup"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To enabled HDFS as remote storage, you need to define the hdfs path as remote storage in Fluss' ", (0,jsx_runtime.jsx)(_components.code, {
        children: "server.yaml"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# The dir that used to be as the remote storage of Fluss\nremote.data.dir: hdfs://namenode:50010/path/to/remote/storage\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To allow for easy adoption, you can use the same configuration keys in Fluss' server.yaml as in Hadoop's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "core-site.xml"
      }), ".\nYou can see the configuration keys in Hadoop's ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://hadoop.apache.org/docs/stable/hadoop-project-dist/hadoop-common/core-default.xml",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "core-site.xml"
        })
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