"use strict";
(self["webpackChunkfluss_website"] = self["webpackChunkfluss_website"] || []).push([[5782],{

/***/ 1392:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_dev_building_md_c08_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-dev-building-md-c08.json
const site_docs_dev_building_md_c08_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"dev/building","title":"Building Fluss from Source","description":"This page covers how to build Fluss 0.6.0-SNAPSHOT from sources.","source":"@site/docs/dev/building.md","sourceDirName":"dev","slug":"/dev/building","permalink":"/fluss-docs/docs/dev/building","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"docsSidebar","previous":{"title":"Logging","permalink":"/fluss-docs/docs/maintenance/logging"},"next":{"title":"Import Fluss into an IDE","permalink":"/fluss-docs/docs/dev/ide-setup"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/dev/building.md


const frontMatter = {
	sidebar_position: 1
};
const contentTitle = 'Building Fluss from Source';

const assets = {

};



const toc = [{
  "value": "Build Fluss",
  "id": "build-fluss",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
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
        id: "building-fluss-from-source",
        children: "Building Fluss from Source"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This page covers how to build Fluss 0.6.0-SNAPSHOT from sources."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "build-fluss",
      children: "Build Fluss"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In order to build Fluss you need to get the source code by ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/alibaba/fluss",
        children: "clone the git repository"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In addition you need ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Maven 3.8.6"
      }), " and a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "JDK"
      }), " (Java Development Kit). Fluss requires ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Java 8 or Java 11"
      }), " to build."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To clone from git, enter:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "git clone git@github.com:alibaba/fluss.git\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The simplest way of building Fluss is by running:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "mvn clean install -DskipTests\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This instructs ", (0,jsx_runtime.jsx)(_components.a, {
        href: "http://maven.apache.org",
        children: "Maven"
      }), " (", (0,jsx_runtime.jsx)(_components.code, {
        children: "mvn"
      }), ") to first remove all existing builds (", (0,jsx_runtime.jsx)(_components.code, {
        children: "clean"
      }), ") and then create a new Fluss binary (", (0,jsx_runtime.jsx)(_components.code, {
        children: "install"
      }), ")."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To speed up the build you can:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["skip tests by using ", (0,jsx_runtime.jsx)(_components.code, {
          children: " -DskipTests"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["use Maven's parallel build feature, e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "mvn package -T 1C"
        }), " will attempt to build 1 module for each CPU core in parallel."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The build script will be:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "mvn clean install -DskipTests -T 1C\n"
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