"use strict";
(self["webpackChunkfluss_website"] = self["webpackChunkfluss_website"] || []).push([[90],{

/***/ 9361:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_table_design_data_types_md_7eb_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-table-design-data-types-md-7eb.json
const site_docs_table_design_data_types_md_7eb_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"table-design/data-types","title":"Data Types","description":"Fluss has a rich set of native data types available to users. All the data types of Fluss are as follows:","source":"@site/docs/table-design/data-types.md","sourceDirName":"table-design","slug":"/table-design/data-types","permalink":"/fluss-docs/docs/table-design/data-types","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"sidebar_position":10},"sidebar":"docsSidebar","previous":{"title":"TTL","permalink":"/fluss-docs/docs/table-design/data-distribution/ttl"},"next":{"title":"Getting Started","permalink":"/fluss-docs/docs/engine-flink/getting-started"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/table-design/data-types.md


const frontMatter = {
	sidebar_position: 10
};
const contentTitle = 'Data Types';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
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
        id: "data-types",
        children: "Data Types"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Fluss has a rich set of native data types available to users. All the data types of Fluss are as follows:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "DataType"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BOOLEAN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A boolean with a (possibly) three-valued logic of TRUE, FALSE, UNKNOWN."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TINYINT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A 1-byte signed integer with values from -128 to 127."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SMALLINT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A 2-byte signed integer with values from -32,768 to 32,767."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "INT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A 4-byte signed integer with values from -2,147,483,648 to 2,147,483,647."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BIGINT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "An 8-byte signed integer with values from -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FLOAT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A 4-byte single precision floating point number."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DOUBLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "An 8-byte double precision floating point number."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CHAR(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A fixed-length character string where n is the number of code points. n must have a value between 1 and Integer.MAX_VALUE (both inclusive)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "STRING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A variable-length character string."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DECIMAL(p, s)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A decimal number with fixed precision and scale where p is the number of digits in a number (=precision) and s is the number of digits to the right of the decimal point in a number (=scale). p must have a value between 1 and 38 (both inclusive). s must have a value between 0 and p (both inclusive)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DATE"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["A date consisting of year-month-day with values ranging from 0000-01-01 to 9999-12-31. ", (0,jsx_runtime.jsx)("br", {}), "Compared to the SQL standard, the range starts at year 0000."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TIME"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["A time WITHOUT time zone with no fractional seconds by default. ", (0,jsx_runtime.jsx)("br", {}), " An instance consists of ", (0,jsx_runtime.jsx)(_components.code, {
              children: "hour:minute:second"
            }), " with up to second precision and values ranging from 00:00:00 to 23:59:59. ", (0,jsx_runtime.jsx)("br", {}), "Compared to the SQL standard, leap seconds (23:59:60 and 23:59:61) are not supported as the semantics are closer to java.time.LocalTime. A time WITH time zone is not provided."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TIME(p)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["A time WITHOUT time zone where p is the number of digits of fractional seconds (=precision). p must have a value between 0 and 9 (both inclusive).", (0,jsx_runtime.jsx)("br", {}), " An instance consists of ", (0,jsx_runtime.jsx)(_components.code, {
              children: "hour:minute:second[.fractional]"
            }), " with up to nanosecond precision and values ranging from 00:00:00.000000000 to 23:59:59.999999999. ", (0,jsx_runtime.jsx)("br", {}), "Compared to the SQL standard, leap seconds (23:59:60 and 23:59:61) are not supported as the semantics are closer to java. time. LocalTime. A time WITH time zone is not provided."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TIMESTAMP"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["A timestamp WITHOUT time zone with 6 digits of fractional seconds by default.", (0,jsx_runtime.jsx)("br", {}), " An instance consists of ", (0,jsx_runtime.jsx)(_components.code, {
              children: "year-month-day hour:minute:second[.fractional]"
            }), " with up to microsecond precision and values ranging from 0000-01-01 00:00:00.000000 to 9999-12-31 23:59:59.999999. ", (0,jsx_runtime.jsx)("br", {}), "Compared to the SQL standard, leap seconds (23:59:60 and 23:59:61) are not supported as the semantics are closer to java. time. LocalDateTime."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TIMESTAMP(p)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["A timestamp WITHOUT time zone where p is the number of digits of fractional seconds (=precision). p must have a value between 0 and 9 (both inclusive). ", (0,jsx_runtime.jsx)("br", {}), "An instance consists of ", (0,jsx_runtime.jsx)(_components.code, {
              children: "year-month-day hour:minute:second[.fractional]"
            }), " with up to nanosecond precision and values ranging from 0000-01-01 00:00:00.000000000 to 9999-12-31 23:59:59.999999999.", (0,jsx_runtime.jsx)("br", {}), "Compared to the SQL standard, leap seconds (23:59:60 and 23:59:61) are not supported as the semantics are closer to java. time. LocalDateTime."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TIMESTAMP_LTZ"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["A a timestamp WITH time zone TIMESTAMP WITH TIME ZONE with 6 digits of fractional seconds by default. ", (0,jsx_runtime.jsx)("br", {}), "An instance consists of ", (0,jsx_runtime.jsx)(_components.code, {
              children: "year-month-day hour:minute:second[.fractional]"
            }), " zone with up to microsecond precision and values ranging from 0000-01-01 00:00:00.000000 +14:59 to 9999-12-31 23:59:59.999999 -14:59. ", (0,jsx_runtime.jsx)("br", {}), " Compared to the SQL standard, leap seconds (23:59:60 and 23:59:61) are not supported as the semantics are closer to java. time. OffsetDateTime."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TIMESTAMP_LTZ(p)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["A a timestamp WITH time zone TIMESTAMP WITH TIME ZONE where p is the number of digits of fractional seconds (=precision). p must have a value between 0 and 9 (both inclusive). ", (0,jsx_runtime.jsx)("br", {}), "An instance consists of ", (0,jsx_runtime.jsx)(_components.code, {
              children: "year-month-day hour:minute:second[.fractional]"
            }), " with up to nanosecond precision and values ranging from 0000-01-01 00:00:00.000000000 to 9999-12-31 23:59:59.999999999. ", (0,jsx_runtime.jsx)("br", {}), " Compared to the SQL standard, leap seconds (23:59:60 and 23:59:61) are not supported as the semantics are closer to java. time. LocalDateTime"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BYTES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A variable-length binary string (=a sequence of bytes)."
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