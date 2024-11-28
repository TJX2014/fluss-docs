"use strict";
(self["webpackChunkfluss_website"] = self["webpackChunkfluss_website"] || []).push([[8545],{

/***/ 9064:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_maintenance_logging_md_917_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-maintenance-logging-md-917.json
const site_docs_maintenance_logging_md_917_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"maintenance/logging","title":"Logging","description":"All Fluss processes(CoordinatorServer/TabletServer) create a log text file that contains messages for various events happening in that process. These logs provide deep insights into the inner workings of Fluss, and can be used to detect problems (in the form of WARN/ERROR messages) and can help in debugging them.","source":"@site/docs/maintenance/logging.md","sourceDirName":"maintenance","slug":"/maintenance/logging","permalink":"/fluss-docs/docs/maintenance/logging","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"sidebar_label":"Logging","sidebar_position":6},"sidebar":"docsSidebar","previous":{"title":"Monitor Metrics","permalink":"/fluss-docs/docs/maintenance/monitor-metrics"},"next":{"title":"Building Fluss from Source","permalink":"/fluss-docs/docs/dev/building"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/maintenance/logging.md


const frontMatter = {
	sidebar_label: 'Logging',
	sidebar_position: 6
};
const contentTitle = 'Logging';

const assets = {

};



const toc = [{
  "value": "Configuring Log4j 2",
  "id": "configuring-log4j-2",
  "level": 2
}, {
  "value": "Log4j 2 property files",
  "id": "log4j-2-property-files",
  "level": 3
}, {
  "value": "Log4j 2 configuration",
  "id": "log4j-2-configuration",
  "level": 3
}, {
  "value": "Compatibility with Log4j 1",
  "id": "compatibility-with-log4j-1",
  "level": 3
}, {
  "value": "Configuring Log4j1",
  "id": "configuring-log4j1",
  "level": 2
}, {
  "value": "Configuring logback",
  "id": "configuring-logback",
  "level": 2
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
        id: "logging",
        children: "Logging"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "All Fluss processes(CoordinatorServer/TabletServer) create a log text file that contains messages for various events happening in that process. These logs provide deep insights into the inner workings of Fluss, and can be used to detect problems (in the form of WARN/ERROR messages) and can help in debugging them."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The logging in Fluss uses the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "http://www.slf4j.org/",
        children: "SLF4J"
      }), " logging interface. This allows you to use any logging framework that supports SLF4J, without having to modify the Fluss source code."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["By default, ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://logging.apache.org/log4j/2.x/index.html",
        children: "Log4j 2"
      }), " is used as the underlying logging framework."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "configuring-log4j-2",
      children: "Configuring Log4j 2"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "log4j-2-property-files",
      children: "Log4j 2 property files"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Fluss distribution ships with the following log4j properties files in the conf directory, which are used automatically if Log4j 2 is enabled:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "log4j-console.properties"
        }), ": used for CoordinatorServer/TabletServer if they are run in the foreground (e.g., Kubernetes)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "log4j.properties"
        }), ": used for CoordinatorServer/TabletServer by default."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Log4j periodically scans this file for changes and adjusts the logging behavior if necessary. By default, this check happens every 30 seconds and is controlled by the monitorInterval setting in the Log4j properties files."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "log4j-2-configuration",
      children: "Log4j 2 configuration"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The following ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/fluss-docs/docs/maintenance/configuration",
        children: "logging-related configuration options"
      }), " are available:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Configuration"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Default"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "env.log.dir"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The directory where the Fluss logs are saved. Must be an absolute path."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "log folder under Fluss’s home."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "env.log.level"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Root logger level."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INFO"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "env.log.max"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The maximum number of old log files to keep."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "env.stdout-err.redirect-to-file"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Whether to redirect the ERROR level Fluss logs to another file."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "compatibility-with-log4j-1",
      children: "Compatibility with Log4j 1"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Fluss ships with the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://logging.apache.org/log4j/log4j-2.2/log4j-1.2-api/index.html",
        children: "Log4j API bridge"
      }), ", allowing existing applications that work against Log4j1 classes to continue working."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If you have custom Log4j 1 properties files or code that relies on Log4j 1, please check out the official Log4j ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://logging.apache.org/log4j/2.x/manual/compatibility.html",
        children: "compatibility"
      }), " and ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://logging.apache.org/log4j/2.x/manual/migration.html",
        children: "migration"
      }), " guides."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "configuring-log4j1",
      children: "Configuring Log4j1"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To use Fluss with ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://logging.apache.org/log4j/1.2/",
        children: "Log4j 1"
      }), " you must ensure that:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "org.apache.logging.log4j:log4j-core"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "org.apache.logging.log4j:log4j-slf4j-impl"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "org.apache.logging.log4j:log4j-1.2-api"
        }), " are not on the classpath."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "log4j:log4j"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "org.slf4j:slf4j-log4j12"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "org.apache.logging.log4j:log4j-to-slf4j"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "org.apache.logging.log4j:log4j-api"
        }), " are on the classpath."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For Fluss distributions this means you have to"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["remove the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "log4j-core"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "log4j-slf4j-impl"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "log4j-1.2-api"
        }), " jars from the lib directory,"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["add the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "log4j"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "slf4j-log4j12"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "log4j-to-slf4j"
        }), " jars to the lib directory,"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "replace all log4j properties files in the conf directory with Log4j1-compliant versions."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In the IDE this means you have to replace such dependencies defined in your pom, and possibly add exclusions on dependencies that transitively depend on them."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "configuring-logback",
      children: "Configuring logback"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To use Fluss with ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://logback.qos.ch/",
        children: "logback"
      }), " you must ensure that:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "org.apache.logging.log4j:log4j-slf4j-impl"
        }), " is not on the classpath,"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "ch.qos.logback:logback-core"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ch.qos.logback:logback-classic"
        }), " are on the classpath."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For Fluss distributions this means you have to"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["remove the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "log4j-slf4j-impl"
        }), " jar from the lib directory."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["add the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "logback-core"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "logback-classic"
        }), " jars to the lib directory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Fluss distribution ships with the following logback configuration files in the conf directory, which are used automatically if logback is enabled:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "logback-console.xml"
        }), ": used for CoordinatorServer/TabletServer if they are run in the foreground (e.g., Kubernetes)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "logback.xml"
        }), ": used for CoordinatorServer/TabletServer by default."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In the IDE this means you have to replace such dependencies defined in your pom, and possibly add exclusions on dependencies that transitively depend on them."
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