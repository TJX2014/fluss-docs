"use strict";
(self["webpackChunkfluss_website"] = self["webpackChunkfluss_website"] || []).push([[7757],{

/***/ 903:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_dev_ide_setup_md_a02_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-dev-ide-setup-md-a02.json
const site_docs_dev_ide_setup_md_a02_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"dev/ide-setup","title":"Import Fluss into an IDE","description":"The sections below describe how to import the Fluss project into an IDE","source":"@site/docs/dev/ide-setup.md","sourceDirName":"dev","slug":"/dev/ide-setup","permalink":"/fluss-docs/docs/dev/ide-setup","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"docsSidebar","previous":{"title":"Building Fluss from Source","permalink":"/fluss-docs/docs/dev/building"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/dev/ide-setup.md


const frontMatter = {
	sidebar_position: 2
};
const contentTitle = 'Import Fluss into an IDE';

const assets = {

};



const toc = [{
  "value": "Preparation",
  "id": "preparation",
  "level": 2
}, {
  "value": "IntelliJ IDEA",
  "id": "intellij-idea",
  "level": 2
}, {
  "value": "Importing Fluss",
  "id": "importing-fluss",
  "level": 3
}, {
  "value": "Copyright Profile",
  "id": "copyright-profile",
  "level": 3
}, {
  "value": "Required Plugins",
  "id": "required-plugins",
  "level": 3
}, {
  "value": "Code Formatting",
  "id": "code-formatting",
  "level": 4
}, {
  "value": "Checkstyle For Java",
  "id": "checkstyle-for-java",
  "level": 4
}, {
  "value": "Common Problems",
  "id": "common-problems",
  "level": 3
}, {
  "value": "Compilation fails with <code>invalid flag: --add-exports=java.base/sun.net.util=ALL-UNNAMED</code>",
  "id": "compilation-fails-with-invalid-flag---add-exportsjavabasesunnetutilall-unnamed",
  "level": 4
}, {
  "value": "Compilation fails with <code>package sun.misc does not exist</code>",
  "id": "compilation-fails-with-package-sunmisc-does-not-exist",
  "level": 4
}, {
  "value": "Examples fail with a <code>NoClassDefFoundError</code> for Fluss classes.",
  "id": "examples-fail-with-a-noclassdeffounderror-for-fluss-classes",
  "level": 4
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    header: "header",
    li: "li",
    ol: "ol",
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
        id: "import-fluss-into-an-ide",
        children: "Import Fluss into an IDE"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The sections below describe how to import the Fluss project into an IDE\nfor the development of Fluss itself."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Whenever something is not working in your IDE, try with the Maven\ncommand line first (", (0,jsx_runtime.jsx)(_components.code, {
          children: "mvn clean package -DskipTests"
        }), ") as it might be your IDE\nthat has a bug or is not properly set up."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "preparation",
      children: "Preparation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To get started, please first checkout the Fluss sources from our\n", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/alibaba/fluss",
        children: "repository"
      }), ",\ne.g."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "git clone git@github.com:alibaba/fluss.git\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "intellij-idea",
      children: "IntelliJ IDEA"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The following guide has been written for ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.jetbrains.com/idea/download/",
        children: "IntelliJ IDEA"
      }), "\n2024.3. Some details might differ in other versions. Please make sure to follow all steps"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "importing-fluss",
      children: "Importing Fluss"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Choose \"New\" → \"Project from Existing Sources\"."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Select the root folder of the cloned Fluss repository."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Choose \"Import project from external model\" and select \"Maven\"."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Leave the default options and successively click \"Next\" until you reach the SDK section."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If there is no SDK listed, create one using the \"+\" sign on the top left.\nSelect \"JDK\", choose the JDK home directory and click \"OK\".\nSelect the most suitable JDK version. NOTE: A good rule of thumb is to select\nthe JDK version matching the active Maven profile."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Continue by clicking \"Next\" until the import is finished."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Open the \"Maven\" tab (or right-click on the imported project and find \"Maven\") and run\n\"Generate Sources and Update Folders\". Alternatively, you can run\n", (0,jsx_runtime.jsx)(_components.code, {
          children: "mvn clean package -DskipTests"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build the Project (\"Build\" → \"Build Project\")."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "copyright-profile",
      children: "Copyright Profile"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Every file needs to include the Alibaba license as a header. This can be automated in IntelliJ by\nadding a Copyright profile:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Go to \"Settings\" → \"Editor\" → \"Copyright\" → \"Copyright Profiles\"."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Add a new profile and name it \"Alibaba\"."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Add the following text as the license text:"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: " Copyright (c) 2024 Alibaba Group Holding Ltd.\n\n Licensed under the Apache License, Version 2.0 (the \"License\");\n you may not use this file except in compliance with the License.\n You may obtain a copy of the License at\n \n     http://www.apache.org/licenses/LICENSE-2.0\n\n Unless required by applicable law or agreed to in writing, software\n distributed under the License is distributed on an \"AS IS\" BASIS,\n WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n See the License for the specific language governing permissions and\n limitations under the License.\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Go to \"Editor\" → \"Copyright\" and choose the \"Fluss\" profile as the default profile for this\nproject."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Click \"Apply\"."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "required-plugins",
      children: "Required Plugins"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Go to \"Settings\" → \"Plugins\" and select the \"Marketplace\" tab. Search for the following plugins,\ninstall them, and restart the IDE if prompted:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://plugins.jetbrains.com/plugin/7642-save-actions",
          children: "Save Actions"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://plugins.jetbrains.com/plugin/1065-checkstyle-idea",
          children: "Checkstyle-IDEA"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You will also need to install the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/google/google-java-format",
        children: "google-java-format"
      }), "\nplugin. However, a specific version of this plugin is required. Download\n", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://plugins.jetbrains.com/plugin/8527-google-java-format/versions/stable/115957",
        children: "google-java-format v1.7.0.6"
      }), "\nand install it as follows. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Make sure to never update this plugin"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Go to \"Settings\" → \"Plugins\"."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Click the gear icon and select \"Install Plugin from Disk\"."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Navigate to the downloaded ZIP file and select it."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "code-formatting",
      children: "Code Formatting"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Fluss uses ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/diffplug/spotless/tree/main/plugin-maven",
        children: "Spotless"
      }), " together with\n", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/google/google-java-format",
        children: "google-java-format"
      }), " to format the Java code."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "It is recommended to automatically format your code by applying the following settings:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Go to \"Settings\" → \"Other Settings\" → \"google-java-format Settings\"."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tick the checkbox to enable the plugin."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Change the code style to \"Android Open Source Project (AOSP) style\"."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Go to \"Settings\" → \"Tools\" → \"Actions on Save\"."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Under \"Formatting Actions\", select \"Optimize imports\" and \"Reformat code\"."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "From the \"All file types list\" next to \"Reformat code\", select Java and Scala."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For earlier IntelliJ IDEA versions:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Go to \"Settings\" → \"Other Settings\" → \"Save Actions\"."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Under \"General\", enable your preferred settings for when to format the code, e.g. \"Activate save actions on save\"."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Under \"Formatting Actions\", select \"Optimize imports\" and \"Reformat file\"."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Under \"File Path Inclusions\", add an entry for ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".*\\.java"
        }), " to avoid formatting other file types."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can also format the whole project via Maven by using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "mvn spotless:apply"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "checkstyle-for-java",
      children: "Checkstyle For Java"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://checkstyle.sourceforge.io/",
        children: "Checkstyle"
      }), " is used to enforce static coding guidelines."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Go to \"Settings\" → \"Tools\" → \"Checkstyle\"."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Set \"Scan Scope\" to \"Only Java sources (including tests)\"."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For \"Checkstyle Version\" select \"10.18.2\"."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Under \"Configuration File\" click the \"+\" icon to add a new configuration."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Set \"Description\" to \"Fluss\"."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Select \"Use a local Checkstyle file\" and point it to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "tools/maven/checkstyle.xml"
        }), " located within\nyour cloned repository."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Select \"Store relative to project location\" and click \"Next\"."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Configure the property ", (0,jsx_runtime.jsx)(_components.code, {
          children: "checkstyle.suppressions.file"
        }), " with the value ", (0,jsx_runtime.jsx)(_components.code, {
          children: "suppressions.xml"
        }), " and click\n\"Next\"."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Click \"Finish\"."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Select \"Fluss\" as the only active configuration file and click \"Apply\"."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can now import the Checkstyle configuration for the Java code formatter."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Go to \"Settings\" → \"Editor\" → \"Code Style\" → \"Java\"."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Click the gear icon next to \"Scheme\" and select \"Import Scheme\" → \"Checkstyle Configuration\"."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Navigate to and select ", (0,jsx_runtime.jsx)(_components.code, {
          children: "tools/maven/checkstyle.xml"
        }), " located within your cloned repository."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To verify the setup, click \"View\" → \"Tool Windows\" → \"Checkstyle\" and find the \"Check Module\"\nbutton in the opened tool window. It should report no violations."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "common-problems",
      children: "Common Problems"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This section lists issues that developers have run into in the past when working with IntelliJ."
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "compilation-fails-with-invalid-flag---add-exportsjavabasesunnetutilall-unnamed",
      children: ["Compilation fails with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "invalid flag: --add-exports=java.base/sun.net.util=ALL-UNNAMED"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This happens if the \"java11\" Maven profile is active, but an older JDK version is used. Go to\n\"View\" → \"Tool Windows\" → \"Maven\" and uncheck the \"java11\" profile. Afterwards, reimport the\nproject."
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "compilation-fails-with-package-sunmisc-does-not-exist",
      children: ["Compilation fails with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "package sun.misc does not exist"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This happens if you are using JDK 11 and compile to Java 8 with the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "--release"
      }), " option. This option is currently incompatible with our build setup.\nGo to \"Settings\" → \"Build, Execution, Deployment\" → \"Compiler\" → \"Java Compiler\" and uncheck the \"Use '--release' option for cross-compilation (Java 9 and later)\"."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "examples-fail-with-a-noclassdeffounderror-for-fluss-classes",
      children: ["Examples fail with a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "NoClassDefFoundError"
      }), " for Fluss classes."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This happens if Fluss dependencies are set to \"provided\", resulting in them not being available\non the classpath. You can either check \"Include dependencies with 'Provided' scope\" in your\nrun configuration, or create a test that calls the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "main()"
      }), " method of the example."]
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