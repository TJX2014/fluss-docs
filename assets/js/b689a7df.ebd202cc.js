"use strict";
(self["webpackChunkfluss_website"] = self["webpackChunkfluss_website"] || []).push([[4424],{

/***/ 3534:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_engine_flink_getting_started_md_b68_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-engine-flink-getting-started-md-b68.json
const site_docs_engine_flink_getting_started_md_b68_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"engine-flink/getting-started","title":"Getting Started with Flink Engine","description":"Quick Start","source":"@site/docs/engine-flink/getting-started.md","sourceDirName":"engine-flink","slug":"/engine-flink/getting-started","permalink":"/fluss-docs/docs/engine-flink/getting-started","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_label":"Getting Started","sidebar_position":1},"sidebar":"docsSidebar","previous":{"title":"Data Types","permalink":"/fluss-docs/docs/table-design/data-types"},"next":{"title":"DDL","permalink":"/fluss-docs/docs/engine-flink/ddl"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/engine-flink/getting-started.md


const frontMatter = {
	sidebar_label: 'Getting Started',
	sidebar_position: 1
};
const contentTitle = 'Getting Started with Flink Engine';

const assets = {

};



const toc = [{
  "value": "Quick Start",
  "id": "quick-start",
  "level": 2
}, {
  "value": "Support Flink Versions",
  "id": "support-flink-versions",
  "level": 2
}, {
  "value": "Feature Support",
  "id": "feature-support",
  "level": 2
}, {
  "value": "Preparation when using Flink SQL Client",
  "id": "preparation-when-using-flink-sql-client",
  "level": 2
}, {
  "value": "Creating a Catalog",
  "id": "creating-a-catalog",
  "level": 2
}, {
  "value": "Creating a Table",
  "id": "creating-a-table",
  "level": 2
}, {
  "value": "Data Writing",
  "id": "data-writing",
  "level": 2
}, {
  "value": "Data Reading",
  "id": "data-reading",
  "level": 2
}, {
  "value": "Type Conversion",
  "id": "type-conversion",
  "level": 2
}, {
  "value": "Fluss -&gt; Apache Flink",
  "id": "fluss---apache-flink",
  "level": 3
}, {
  "value": "Apache Flink -&gt; Fluss",
  "id": "apache-flink---fluss",
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
    strong: "strong",
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
        id: "getting-started-with-flink-engine",
        children: "Getting Started with Flink Engine"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-start",
      children: "Quick Start"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For a quick introduction to running Flink, refer to the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/fluss-docs/docs/quickstart/flink",
        children: "Quick Start"
      }), " guide."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "support-flink-versions",
      children: "Support Flink Versions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Fluss Connector Versions"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Supported Flink Versions"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.18, 1.19, 1.20"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "feature-support",
      children: "Feature Support"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Fluss only supports Apache Flink's Table API."
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature support"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Flink"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/fluss-docs/docs/engine-flink/ddl#create-catalog",
              children: "SQL create catalog"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✔️"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/fluss-docs/docs/engine-flink/ddl#create-database",
              children: "SQl create database"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✔️"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/fluss-docs/docs/engine-flink/ddl#drop-database",
              children: "SQL drop database"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✔️"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/fluss-docs/docs/engine-flink/ddl#create-table",
              children: "SQL create table"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✔️"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/fluss-docs/docs/engine-flink/ddl#create-table-like",
              children: "SQL create table like"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✔️"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/fluss-docs/docs/engine-flink/ddl#drop-table",
              children: "SQL drop table"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✔️"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/fluss-docs/docs/engine-flink/reads",
              children: "SQL select"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✔️"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Support both streaming and batch mode."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/fluss-docs/docs/engine-flink/writes",
              children: "SQL insert into"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✔️"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Support both streaming and batch mode."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/fluss-docs/docs/engine-flink/lookups",
              children: "SQL lookup join"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✔️"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "preparation-when-using-flink-sql-client",
      children: "Preparation when using Flink SQL Client"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Download Flink"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Flink runs on all UNIX-like environments, i.e. Linux, Mac OS X, and Cygwin (for Windows).\nIf you haven’t downloaded Flink, you can download ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://flink.apache.org/downloads.html",
        children: "the binary release"
      }), " of Flink, then extract the archive with the following command."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "tar -xzf fluss-0.5.0-bin.tgz\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Copy Fluss Connector Jar"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Download ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/downloads#fluss-connector",
        children: "Fluss connector jar"
      }), " and copy to the lib directory of your Flink home."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "cp fluss-connector-flink-0.5.0.jar <FLINK_HOME>/lib/\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["If you use ", (0,jsx_runtime.jsx)(_components.a, {
          href: "http://aws.amazon.com/s3/",
          children: "Amazon S3"
        }), ", ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://www.aliyun.com/product/oss",
          children: "Aliyun OSS"
        }), " or ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://hadoop.apache.org/docs/stable/",
          children: "HDFS(Hadoop Distributed File System)"
        }), " as Fluss's ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/maintenance/tiered-storage/remote-storage",
          children: "remote storage"
        }), ",\nyou should download the corresponding ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/downloads#filesystem-jars",
          children: "Fluss filesystem jar"
        }), " and also copy it to the lib directory of your Flink home."]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Start a local cluster"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To start a local cluster, run the bash script that comes with Flink:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "<FLINK_HOME>/bin/start-cluster.sh\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You should be able to navigate to the web UI at ", (0,jsx_runtime.jsx)(_components.a, {
        href: "http://localhost:8081/",
        children: "localhost:8081"
      }), " to view the Flink dashboard and see that the cluster is up and running. You can also check its status with the following command:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "ps aux | grep flink\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Start a sql client"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To quickly stop the cluster and all running components, you can use the provided script:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "<FLINK_HOME>/bin/sql-client.sh\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "creating-a-catalog",
      children: "Creating a Catalog"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can use the following SQL statement to create a catalog."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        metastring: "title=\"Flink SQL Client\"",
        children: "CREATE CATALOG fluss_catalog WITH (\n  'type'='fluss',\n  'bootstrap.servers' = 'localhost:9123'\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
            children: "bootstrap.servers"
          }), " means the Fluss server address. Before you config the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "bootstrap.servers"
          }), ",\nyou should start the Fluss server first. See ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/docs/install-deploy/overview/#how-to-deploy-fluss",
            children: "Deploying Fluss"
          }), "\nfor how to build a Fluss cluster.\nHere, it is assumed that there is a Fluss cluster running on your local machine and the CoordinatorServer port is 9123."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["The", (0,jsx_runtime.jsx)(_components.code, {
            children: " bootstrap.servers"
          }), " configuration is used to discover all nodes within the Fluss cluster. It can be set with one or more (up to three) Fluss server addresses (either CoordinatorServer or TabletServer) separated by commas."]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "creating-a-table",
      children: "Creating a Table"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        metastring: "title=\"Flink SQL Client\"",
        children: "USE CATALOG `fluss_catalog`;\n\nCREATE TABLE pk_table (\n  shop_id BIGINT,\n  user_id BIGINT,\n  num_orders INT,\n  total_amount INT,\n  PRIMARY KEY (shop_id, user_id) NOT ENFORCED\n) WITH (\n  'bucket.num' = '4'\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "data-writing",
      children: "Data Writing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To append new data to a table, you can use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "INSERT INTO"
      }), " in batch mode or streaming mode:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        metastring: "title=\"Flink SQL Client\"",
        children: "-- Execute the flink job in batch mode for current session context\nSET 'execution.runtime-mode' = 'batch';\n-- use tableau result mode\nSET 'sql-client.execution.result-mode' = 'tableau';\n\nINSERT INTO pk_table VALUES\n  (1234, 1234, 1, 1),\n  (12345, 12345, 2, 2),\n  (123456, 123456, 3, 3);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To update data record with the primary key (1234, 1234) in a Flink streaming job, use the UPDATE statement as follows:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        metastring: "title=\"Flink SQL Client\"",
        children: "-- should run in batch mode\nUPDATE pk_table SET total_amount = 4 WHERE shop_id = 1234 and user_id = 1234;\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To delete the data record with primary key ", (0,jsx_runtime.jsx)(_components.code, {
        children: "(12345, 12345)"
      }), ", use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DELETE FROM"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        metastring: "title=\"Flink SQL Client\"",
        children: "-- should run in batch mode\nDELETE FROM pk_table WHERE shop_id = 12345 and user_id = 12345;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "data-reading",
      children: "Data Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To retrieve data with the primary key ", (0,jsx_runtime.jsx)(_components.code, {
        children: "(1234, 1234)"
      }), ", you can perform a point query by applying a filter on the primary key:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        metastring: "title=\"Flink SQL Client\"",
        children: "-- should run in batch mode\nSELECT * FROM pk_table WHERE shop_id = 1234 and user_id = 1234;\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To preview a subset of the data in a table, you can use a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "LIMIT"
      }), " clause."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        metastring: "title=\"Flink SQL Client\"",
        children: "-- should run in batch mode\nSELECT * FROM pk_table LIMIT 10;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Fluss supports processing incremental data reading in flink streaming jobs:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        metastring: "title=\"Flink SQL Client\"",
        children: "-- Submit the flink job in streaming mode for current session.\nSET 'execution.runtime-mode' = 'streaming';\n-- reading changelogs from the primary-key table from beginning.\nSELECT * FROM pk_table /*+ OPTIONS('scan.startup.mode' = 'earliest') */;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "type-conversion",
      children: "Type Conversion"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Fluss's integration for Flink automatically converts between Flink and Fluss types."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fluss---apache-flink",
      children: "Fluss -> Apache Flink"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Fluss"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Flink"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BOOLEAN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BOOLEAN"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TINYINT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TINYINT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SMALLINT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SMALLINT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "INT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BIGINT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BIGINT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FLOAT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FLOAT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DOUBLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DOUBLE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CHAR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CHAR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "STRING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "STRING"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DECIMAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DECIMAL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DATE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DATE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TIME"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TIME"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TIMESTAMP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TIMESTAMP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TIMESTAMP_LTZ"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TIMESTAMP_LTZ"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BYTES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BYTES"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "apache-flink---fluss",
      children: "Apache Flink -> Fluss"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Flink"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Fluss"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BOOLEAN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BOOLEAN"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SMALLINT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SMALLINT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "INT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BIGINT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BIGINT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FLOAT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FLOAT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DOUBLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DOUBLE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CHAR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CHAR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "STRING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "STRING"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DECIMAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DECIMAL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DATE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DATE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TIME"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TIME"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TIMESTAMP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TIMESTAMP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TIMESTAMP_LTZ"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TIMESTAMP_LTZ"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BYTES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BYTES"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VARCHAR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not supported, suggest to use STRING instead."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VARBINARY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not supported, suggest to use BYTES instead."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "INTERVAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not supported"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARRAY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not supported"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MAP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not supported"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MULTISET"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not supported"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ROW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not supported"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RAW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not supported"
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