"use strict";
(self["webpackChunkfluss_website"] = self["webpackChunkfluss_website"] || []).push([[8552],{

/***/ 8428:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_maintenance_filesystems_oss_md_2f6_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-maintenance-filesystems-oss-md-2f6.json
const site_docs_maintenance_filesystems_oss_md_2f6_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"maintenance/filesystems/oss","title":"Aliyun OSS","description":"OSS: Object Storage Service","source":"@site/docs/maintenance/filesystems/oss.md","sourceDirName":"maintenance/filesystems","slug":"/maintenance/filesystems/oss","permalink":"/fluss-docs/docs/maintenance/filesystems/oss","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_label":"Aliyun OSS","sidebar_position":3},"sidebar":"docsSidebar","previous":{"title":"HDFS","permalink":"/fluss-docs/docs/maintenance/filesystems/hdfs"},"next":{"title":"Amazon S3","permalink":"/fluss-docs/docs/maintenance/filesystems/s3"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/maintenance/filesystems/oss.md


const frontMatter = {
	sidebar_label: 'Aliyun OSS',
	sidebar_position: 3
};
const contentTitle = 'Aliyun OSS';

const assets = {

};



const toc = [{
  "value": "OSS: Object Storage Service",
  "id": "oss-object-storage-service",
  "level": 2
}, {
  "value": "Configurations setup",
  "id": "configurations-setup",
  "level": 2
}, {
  "value": "Token-based Authentication",
  "id": "token-based-authentication",
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
        id: "aliyun-oss",
        children: "Aliyun OSS"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "oss-object-storage-service",
      children: "OSS: Object Storage Service"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.aliyun.com/product/oss",
        children: "Aliyun Object Storage Service"
      }), " (Aliyun OSS) is widely used, particularly popular among China’s cloud users, and it provides cloud object storage for a variety of use cases."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "configurations-setup",
      children: "Configurations setup"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To enabled OSS as remote storage, there are some required configurations that must be add to Fluss' ", (0,jsx_runtime.jsx)(_components.code, {
        children: "server.yaml"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# The dir that used to be as the remote storage of Fluss\nremote.data.dir: oss://<your-bucket>/path/to/remote/storage\n# Aliyun OSS endpoint to connect to, such as: oss-cn-hangzhou.aliyuncs.com\nfs.oss.endpoint: <your-endpoint>\n# Aliyun access key ID\nfs.oss.accessKeyId: <your-access-key>\n# Aliyun access key secret\nfs.oss.accessKeySecret: <your-secret-key>\n\n# Aliyun STS endpoint to connect to obtain a STS token, such as: sts.cn-hangzhou.aliyuncs.com\nfs.oss.sts.endpoint: <your-sts-endpoint>\n# For the role of the STS token obtained from the STS endpoint, such as: acs:ram::123456789012:role/testrole\nfs.oss.roleArn: <your-role-arn>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "token-based-authentication",
      children: "Token-based Authentication"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For client to access the remote storage such as reading snapshot or tiered log, client must obtain a STS token from Fluss cluster. So you must\nconfigure ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fs.oss.sts.endpoint"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fs.oss.roleArn"
      }), ".\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "fs.oss.sts.endpoint"
      }), " is the STS endpoint to obtain a STS token, such as ", (0,jsx_runtime.jsx)(_components.code, {
        children: "sts.cn-hangzhou.aliyuncs.com"
      }), " for hangzhou region, you can\nfind different endpoints for different regions in ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://help.aliyun.com/zh/ram/developer-reference/api-sts-2015-04-01-endpoint",
        children: "Aliyun STS Endpoint"
      }), ".\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "fs.oss.roleArn"
      }), " is for the role of the STS token obtained from the STS endpoint, it should be in the format of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "acs:ram::<aliyun-account-id>:role/<role-name>"
      }), ",\nsuch as ", (0,jsx_runtime.jsx)(_components.code, {
        children: "acs:ram::123456789012:role/testrole"
      }), ". Since client will use the STS token to read the remote storage, the role must be granted with the read permission of the remote storage.\nSee more detail in ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://help.aliyun.com/zh/ram/developer-reference/api-sts-2015-04-01-assumerole",
        children: "AssumeRole"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Apart from the above configurations, you can also define the configuration keys mentioned in the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "http://hadoop.apache.org/docs/current/hadoop-aliyun/tools/hadoop-aliyun/index.html",
        children: "Hadoop OSS documentation"
      }), "\nin the Fluss' ", (0,jsx_runtime.jsx)(_components.code, {
        children: "server.yaml"
      }), ". These configurations defines in Hadoop OSS documentation are advanced configurations which are usually used by performance tuning."]
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