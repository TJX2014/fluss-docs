"use strict";
(self["webpackChunkfluss_website"] = self["webpackChunkfluss_website"] || []).push([[8221],{

/***/ 8055:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_quickstart_flink_md_676_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-quickstart-flink-md-676.json
const site_docs_quickstart_flink_md_676_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"quickstart/flink","title":"Real-Time Analytics With Flink","description":"This guide will get you up and running with Apache Flink to do real-time analytics, covering some powerful features of Fluss,","source":"@site/docs/quickstart/flink.md","sourceDirName":"quickstart","slug":"/quickstart/flink","permalink":"/fluss-docs/docs/quickstart/flink","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_label":"Flink","sidebar_position":1},"sidebar":"docsSidebar","previous":{"title":"Introduction","permalink":"/fluss-docs/docs/intro"},"next":{"title":"Architecture","permalink":"/fluss-docs/docs/concepts/architecture"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/quickstart/flink.md


const frontMatter = {
	sidebar_label: 'Flink',
	sidebar_position: 1
};
const contentTitle = 'Real-Time Analytics With Flink';

const assets = {

};



const toc = [{
  "value": "Environment Setup",
  "id": "environment-setup",
  "level": 2
}, {
  "value": "Prerequisites",
  "id": "prerequisites",
  "level": 3
}, {
  "value": "Starting components required",
  "id": "starting-components-required",
  "level": 3
}, {
  "value": "Enter into SQL-Client",
  "id": "enter-into-sql-client",
  "level": 2
}, {
  "value": "Create Fluss Tables",
  "id": "create-fluss-tables",
  "level": 2
}, {
  "value": "Create Fluss Catalog",
  "id": "create-fluss-catalog",
  "level": 3
}, {
  "value": "Create Tables",
  "id": "create-tables",
  "level": 3
}, {
  "value": "Streaming into Fluss",
  "id": "streaming-into-fluss",
  "level": 2
}, {
  "value": "Query on Fluss Tables",
  "id": "query-on-fluss-tables",
  "level": 2
}, {
  "value": "Update/Delete rows on Fluss Tables",
  "id": "updatedelete-rows-on-fluss-tables",
  "level": 2
}, {
  "value": "Update",
  "id": "update",
  "level": 3
}, {
  "value": "Delete",
  "id": "delete",
  "level": 3
}, {
  "value": "Integrate with Paimon",
  "id": "integrate-with-paimon",
  "level": 2
}, {
  "value": "Start lakehouse tiering service",
  "id": "start-lakehouse-tiering-service",
  "level": 3
}, {
  "value": "Streaming into Fluss datalake-enabled tables",
  "id": "streaming-into-fluss-datalake-enabled-tables",
  "level": 3
}, {
  "value": "Real-Time Analytics on Fluss datalake-enabled tables",
  "id": "real-time-analytics-on-fluss-datalake-enabled-tables",
  "level": 3
}, {
  "value": "Clean up",
  "id": "clean-up",
  "level": 2
}, {
  "value": "Learn more",
  "id": "learn-more",
  "level": 2
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
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "real-time-analytics-with-flink",
        children: "Real-Time Analytics With Flink"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This guide will get you up and running with Apache Flink to do real-time analytics, covering some powerful features of Fluss,\nincluding integrating with Paimon.\nThe guide is derived from from ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.tpc.org/tpch/",
        children: "TPC-H"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For more information on working with Flink, refer to the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/fluss-docs/docs/engine-flink/getting-started",
        children: "Apache Flink Engine"
      }), " section."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "environment-setup",
      children: "Environment Setup"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Before proceeding with this guide, ensure that ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://docs.docker.com/engine/install/",
        children: "Docker"
      }), " is installed on your machine."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "starting-components-required",
      children: "Starting components required"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["We will use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docker-compose"
      }), " to spin up all the required components for this tutorial."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Create a directory to serve as your working directory for this guide and add the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docker-compose.yml"
        }), " file to it."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "mkdir fluss-quickstart-flink\ncd fluss-quickstart-flink\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Create ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docker-compose.yml"
        }), " file with the following content:"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "services:\n  coordinator-server:\n    image: fluss/fluss:0.5.0\n    command: coordinatorServer\n    depends_on:\n      - zookeeper\n    environment:\n      - |\n        FLUSS_PROPERTIES=\n        zookeeper.address: zookeeper:2181\n        coordinator.host: coordinator-server\n        remote.data.dir: /tmp/fluss/remote-data\n        lakehouse.storage: paimon\n        paimon.catalog.metastore: filesystem\n        paimon.catalog.warehouse: /tmp/paimon\n  tablet-server:\n    image: fluss/fluss:0.5.0\n    command: tabletServer\n    depends_on:\n      - coordinator-server\n    environment:\n      - |\n        FLUSS_PROPERTIES=\n        zookeeper.address: zookeeper:2181\n        tablet-server.host: tablet-server\n        data.dir: /tmp/fluss/data\n        remote.data.dir: /tmp/fluss/remote-data\n        kv.snapshot.interval: 0s\n        lakehouse.storage: paimon\n        paimon.catalog.metastore: filesystem\n        paimon.catalog.warehouse: /tmp/paimon\n  zookeeper:\n    restart: always\n    image: zookeeper:3.8.4\n\n  jobmanager:\n    image: fluss/quickstart-flink:1.20-0.5\n    ports:\n      - \"8083:8081\"\n    command: jobmanager\n    environment:\n      - |\n        FLINK_PROPERTIES=\n        jobmanager.rpc.address: jobmanager\n    volumes:\n      - shared-tmpfs:/tmp/paimon\n  taskmanager:\n    image: fluss/quickstart-flink:1.20-0.5\n    depends_on:\n      - jobmanager\n    command: taskmanager\n    environment:\n      - |\n        FLINK_PROPERTIES=\n        jobmanager.rpc.address: jobmanager\n        taskmanager.numberOfTaskSlots: 10\n        taskmanager.memory.process.size: 2048m\n        taskmanager.memory.framework.off-heap.size: 256m\n    volumes:\n      - shared-tmpfs:/tmp/paimon\n\nvolumes:\n  shared-tmpfs:\n    driver: local\n    driver_opts:\n      type: \"tmpfs\"\n      device: \"tmpfs\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Docker Compose environment consists of the following containers:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fluss Cluster:"
        }), " a Fluss ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CoordinatorServer"
        }), ", a Fluss ", (0,jsx_runtime.jsx)(_components.code, {
          children: "TabletServer"
        }), " and a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ZooKeeper"
        }), " server."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Flink Cluster"
        }), ": a Flink ", (0,jsx_runtime.jsx)(_components.code, {
          children: "JobManager"
        }), " and a Flink ", (0,jsx_runtime.jsx)(_components.code, {
          children: "TaskManager"
        }), " container to execute queries."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Note:"
      }), " The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fluss/quickstart-flink"
      }), " image is based on ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://hub.docker.com/layers/library/flink/1.20-java17/images/sha256-381ed7399c95b6b03a7b5ee8baca91fd84e24def9965ce9d436fb22773d66717",
        children: "flink:1.20.0-java17"
      }), " and\nincludes the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/fluss-docs/docs/engine-flink/getting-started",
        children: "fluss-connector-flink"
      }), ", ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://paimon.apache.org/docs/0.8/flink/quick-start/",
        children: "paimon-flink"
      }), " and\n", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://flink-packages.org/packages/flink-faker",
        children: "flink-connector-faker"
      }), " to simplify this guide."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["To start all containers, run the following command in the directory that contains the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docker-compose.yml"
        }), " file:"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "docker-compose up -d\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This command automatically starts all the containers defined in the Docker Compose configuration in a detached mode.\nRun ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docker ps"
      }), " to check whether these containers are running properly."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can also visit ", (0,jsx_runtime.jsx)(_components.a, {
        href: "http://localhost:8083/",
        children: "http://localhost:8083/"
      }), " to see if Flink is running normally."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["If you want to run with your own Flink environment, remember to download the ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/downloads",
            children: "fluss-connector-flink"
          }), ", ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://github.com/knaufk/flink-faker/releases",
            children: "flink-connector-faker"
          }), ", ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://paimon.apache.org/docs/0.8/flink/quick-start/",
            children: "paimon-flink"
          }), " connector jars and then put them to ", (0,jsx_runtime.jsx)(_components.code, {
            children: "FLINK_HOME/lib/"
          }), "."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["All the following commands involving docker-compose should be executed in the directory of the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "docker-compose.yml"
          }), " file."]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "enter-into-sql-client",
      children: "Enter into SQL-Client"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "First, use the following command to enter the Flink SQL CLI Container:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "docker-compose exec jobmanager ./sql-client\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Note"
      }), ":\nTo simplify this guide, three temporary tables have been pre-created with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "faker"
      }), " connector to generate data.\nYou can view their schemas by running the following commands:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        metastring: "title=\"Flink SQL Client\"",
        children: "SHOW CREATE TABLE source_customer;\n\nSHOW CREATE TABLE source_order;\n\nSHOW CREATE TABLE source_nation;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "create-fluss-tables",
      children: "Create Fluss Tables"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "create-fluss-catalog",
      children: "Create Fluss Catalog"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Use the following SQL to create a Fluss catalog:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        metastring: "title=\"Flink SQL Client\"",
        children: "CREATE CATALOG my_fluss WITH (\n    'type' = 'fluss',\n    'bootstrap.servers' = 'coordinator-server:9123'\n);\n\nUSE CATALOG my_fluss;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "create-tables",
      children: "Create Tables"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Running the following SQL to create Fluss tables to be used in this guide:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        metastring: "title=\"Flink SQL Client\"",
        children: "CREATE TABLE fluss_order (\n    `order_key` BIGINT,\n    `cust_key` INT NOT NULL,\n    `total_price` DECIMAL(15, 2),\n    `order_date` DATE,\n    `order_priority` STRING,\n    `clerk` STRING,\n    `ptime` AS PROCTIME(),\n    PRIMARY KEY (`order_key`) NOT ENFORCED\n);\n\nCREATE TABLE fluss_customer (\n    `cust_key` INT NOT NULL,\n    `name` STRING,\n    `phone` STRING,\n    `nation_key` INT NOT NULL,\n    `acctbal` DECIMAL(15, 2),\n    `mktsegment` STRING,\n    PRIMARY KEY (`cust_key`) NOT ENFORCED\n);\n\nCREATE TABLE `fluss_nation` (\n  `nation_key` INT NOT NULL,\n  `name`       STRING,\n   PRIMARY KEY (`nation_key`) NOT ENFORCED\n);\n\nCREATE TABLE enriched_orders (\n    `order_key` BIGINT,\n    `cust_key` INT NOT NULL,\n    `total_price` DECIMAL(15, 2),\n    `order_date` DATE,\n    `order_priority` STRING,\n    `clerk` STRING,\n    `cust_name` STRING,\n    `cust_phone` STRING,\n    `cust_acctbal` DECIMAL(15, 2),\n    `cust_mktsegment` STRING,\n    `nation_name` STRING,\n    PRIMARY KEY (`order_key`) NOT ENFORCED\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "streaming-into-fluss",
      children: "Streaming into Fluss"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "First, run the following sql to sync data from source tables to Fluss tables:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        metastring: "title=\"Flink SQL Client\"",
        children: "EXECUTE STATEMENT SET\nBEGIN\n    INSERT INTO fluss_nation SELECT * FROM `default_catalog`.`default_database`.source_nation;\n    INSERT INTO fluss_customer SELECT * FROM `default_catalog`.`default_database`.source_customer;\n    INSERT INTO fluss_order SELECT * FROM `default_catalog`.`default_database`.source_order;\nEND;\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Fluss primary-key tables support high QPS point lookup on primary keys, so it's efficient to\n", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://nightlies.apache.org/flink/flink-docs-release-1.20/docs/dev/table/sql/queries/joins/#lookup-join",
        children: "lookup join"
      }), "\nprimary-key tables ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fluss_customer"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fluss_nation"
      }), " to enrich the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fluss_orders"
      }), " table."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        metastring: "title=\"Flink SQL Client\"",
        children: "INSERT INTO enriched_orders\nSELECT o.order_key, \n       o.cust_key, \n       o.total_price,\n       o.order_date, \n       o.order_priority,\n       o.clerk,\n       c.name,\n       c.phone,\n       c.acctbal, \n       c.mktsegment,\n       n.name\nFROM fluss_order o \nLEFT JOIN fluss_customer FOR SYSTEM_TIME AS OF `o`.`ptime` AS `c` \n    ON o.cust_key = c.cust_key\nLEFT JOIN fluss_nation FOR SYSTEM_TIME AS OF `o`.`ptime` AS `n` \n    ON c.nation_key = n.nation_key;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "query-on-fluss-tables",
      children: "Query on Fluss Tables"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Now, you can have a real-time analytics on Fluss tables. For example, to count the number of orders of one\nparticular customer, running the following sql to see the real-time result."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        metastring: "title=\"Flink SQL Client\"",
        children: "-- use tableau result mode\nSET 'sql-client.execution.result-mode' = 'tableau';\n    \n-- switch to batch mode\nSET 'execution.runtime-mode' = 'batch';\n    \n-- use limit to query the enriched_orders table\nSELECT * FROM enriched_orders LIMIT 2;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The result looks like:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "+-----------+----------+-------------+------------+----------------+--------+------------+----------------+--------------+-----------------+-------------+\n| order_key | cust_key | total_price | order_date | order_priority |  clerk |  cust_name |     cust_phone | cust_acctbal | cust_mktsegment | nation_name |\n+-----------+----------+-------------+------------+----------------+--------+------------+----------------+--------------+-----------------+-------------+\n|  23199744 |        9 |      266.44 | 2024-08-29 |           high | Clerk1 |   Joe King |   908.207.8513 |       124.28 |       FURNITURE |      JORDAN |\n|  10715776 |        2 |      924.43 | 2024-11-04 |         medium | Clerk3 | Rita Booke | (925) 775-0717 |       172.39 |       FURNITURE |      UNITED |\n+-----------+----------+-------------+------------+----------------+--------+------------+----------------+--------------+-----------------+-------------+\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You may be interested in the particular customer, you can lookup it by ", (0,jsx_runtime.jsx)(_components.code, {
        children: "cust_key"
      }), " with the following SQL:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        metastring: "title=\"Flink SQL Client\"",
        children: "-- lookup by primary key\nSELECT * FROM fluss_customer WHERE `cust_key` = 1;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The result looks like:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "+----------+---------------+--------------+------------+---------+------------+\n| cust_key |          name |        phone | nation_key | acctbal | mktsegment |\n+----------+---------------+--------------+------------+---------+------------+\n|        1 | Al K. Seltzer | 817-617-7960 |          1 |  533.41 | AUTOMOBILE |\n+----------+---------------+--------------+------------+---------+------------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The result should be returned quickly since Fluss supports fast lookup by primary key for primary key table."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "updatedelete-rows-on-fluss-tables",
      children: "Update/Delete rows on Fluss Tables"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UPDATE"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DELETE"
      }), " statement to update/delete rows on Fluss tables."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "update",
      children: "Update"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        metastring: "title=\"Flink SQL Client\"",
        children: "-- update by primary key\nUPDATE fluss_customer SET `name` = 'fluss_updated' WHERE `cust_key` = 1;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Then you can lookup the row:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        metastring: "title=\"Flink SQL Client\"",
        children: "SELECT * FROM fluss_customer WHERE `cust_key` = 1;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The result looks like:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "+----------+---------------+--------------+------------+---------+------------+\n| cust_key |          name |        phone | nation_key | acctbal | mktsegment |\n+----------+---------------+--------------+------------+---------+------------+\n|        1 | fluss_updated | 817-617-7960 |          1 |  533.41 | AUTOMOBILE |\n+----------+---------------+--------------+------------+---------+------------+\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "name"
      }), " column is updated to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fluss_updated"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "delete",
      children: "Delete"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        metastring: "title=\"Flink SQL Client",
        children: "DELETE FROM fluss_customer WHERE `cust_key` = 1;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Then, you should get empty set if lookup the row by the following SQL:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        metastring: "title=\"Flink SQL Client\"",
        children: "SELECT * FROM fluss_customer WHERE `cust_key` = 1;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "integrate-with-paimon",
      children: "Integrate with Paimon"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "start-lakehouse-tiering-service",
      children: "Start lakehouse tiering service"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To integrate with Paimon, you must start the lakehouse tiering service firstly. Open a new terminal and change working directory to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fluss-quickstart-flink"
      }), ".\nRun the following command in the working directly ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fluss-quickstart-flink"
      }), " to start the lakehouse tiering service:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "docker-compose exec coordinator-server ./bin/lakehouse.sh -D flink.rest.address=jobmanager -D flink.rest.port=8081 -D flink.execution.checkpointing.interval=30s\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You should see a Flink Job named ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fluss-paimon-tiering-service"
      }), " running in the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "http://localhost:8083/",
        children: "Flink Web UI"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "streaming-into-fluss-datalake-enabled-tables",
      children: "Streaming into Fluss datalake-enabled tables"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By default, table is datalake disabled, so the lakehouse tiering service won't tier the data of the table to datalake."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You must create a table with table option ", (0,jsx_runtime.jsx)(_components.code, {
        children: "table.datalake.enabled = true"
      }), " to enabled lakehouse as a tiered storage for the table.\nBack to sql-client, run the following SQL to create a datalake-enabled table"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        metastring: "title=\"Flink SQL Client\"",
        children: "CREATE TABLE datalake_enriched_orders (\n    `order_key` BIGINT,\n    `cust_key` INT NOT NULL,\n    `total_price` DECIMAL(15, 2),\n    `order_date` DATE,\n    `order_priority` STRING,\n    `clerk` STRING,\n    `cust_name` STRING,\n    `cust_phone` STRING,\n    `cust_acctbal` DECIMAL(15, 2),\n    `cust_mktsegment` STRING,\n    `nation_name` STRING,\n    PRIMARY KEY (`order_key`) NOT ENFORCED\n) WITH ('table.datalake.enabled' = 'true');\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Then, streaming writing data to the datalake-enabled table ", (0,jsx_runtime.jsx)(_components.code, {
        children: "datalake_enriched_orders"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        metastring: "title=\"Flink SQL Client\"",
        children: "-- switch to streaming mode\nSET 'execution.runtime-mode' = 'streaming';\n\nINSERT INTO datalake_enriched_orders\nSELECT o.order_key,\n       o.cust_key,\n       o.total_price,\n       o.order_date,\n       o.order_priority,\n       o.clerk,\n       c.name,\n       c.phone,\n       c.acctbal,\n       c.mktsegment,\n       n.name\nFROM fluss_order o\n       LEFT JOIN fluss_customer FOR SYSTEM_TIME AS OF `o`.`ptime` AS `c`\n                 ON o.cust_key = c.cust_key\n       LEFT JOIN fluss_nation FOR SYSTEM_TIME AS OF `o`.`ptime` AS `n`\n                 ON c.nation_key = n.nation_key;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-time-analytics-on-fluss-datalake-enabled-tables",
      children: "Real-Time Analytics on Fluss datalake-enabled tables"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Now, the data of the table ", (0,jsx_runtime.jsx)(_components.code, {
        children: "datalake_enriched_orders"
      }), " is in Fluss(for rel-time data) and Paimon(for historical data)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When you query with specifying table ", (0,jsx_runtime.jsx)(_components.code, {
        children: "datalake_enriched_orders"
      }), ", Fluss will union the data in Fluss and Paimon to get the full result."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In the case you only want to query the data in Paimon directly which is high performance without extra union, you can specifying table ", (0,jsx_runtime.jsx)(_components.code, {
        children: "datalake_enriched_orders$lake"
      }), " with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$lake"
      }), " suffix.\nWith that, you will also get all the optimization and features of a Flink Paimon table source, including ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://paimon.apache.org/docs/master/concepts/system-tables/",
        children: "system table"
      }), " using with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "datalake_enriched_orders$snapshots"
      }), ", etc."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Use the following SQL to query the snapshots on Paimon:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        metastring: "title=\"Flink SQL Client\"",
        children: "-- switch to batch mode\nSET 'execution.runtime-mode' = 'batch';\n\n-- to query snapshots in paimon\nSELECT snapshot_id, total_record_count FROM datalake_enriched_orders$lake$snapshots;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The result looks like:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "+-------------+--------------------+\n| snapshot_id | total_record_count |\n+-------------+--------------------+\n|           1 |                650 |\n+-------------+--------------------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If it return empty, you may need to wait for checkpoint finish, around 30s."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Then, you can run the following SQL to do analytics on Paimon data:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        metastring: "title=\"Flink SQL Client\"",
        children: "-- to sum prices of all orders in paimon\nSELECT sum(total_price) as sum_price FROM datalake_enriched_orders$lake;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The result looks like:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "+------------+\n|  sum_price |\n+------------+\n| 1669519.92 |\n+------------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If want to result with sub-second data freshness, you can query the table directly with union Fluss and Paimon data:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        metastring: "title=\"Flink SQL Client\"",
        children: "-- to sum prices of all orders in fluss and paimon\nSELECT sum(total_price) as sum_price FROM datalake_enriched_orders;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The result looks like:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "+------------+\n|  sum_price |\n+------------+\n| 1777908.36 |\n+------------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can run the real-time analytics query multi-times, the result should be different in every one run since the data are written to Fluss in real-time."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "At last, you can use the following command to see the files in paimon:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "docker-compose exec taskmanager tree /tmp/paimon/fluss.db\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "It looks like:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "/tmp/paimon/fluss.db\n└── datalake_enriched_orders\n    ├── bucket-0\n    │   ├── changelog-aef1810f-85b2-4eba-8eb8-9b136dec5bdb-0.orc\n    │   └── data-aef1810f-85b2-4eba-8eb8-9b136dec5bdb-1.orc\n    ├── manifest\n    │   ├── manifest-aaa007e1-81a2-40b3-ba1f-9df4528bc402-0\n    │   ├── manifest-aaa007e1-81a2-40b3-ba1f-9df4528bc402-1\n    │   ├── manifest-list-ceb77e1f-7d17-4160-9e1f-f334918c6e0d-0\n    │   ├── manifest-list-ceb77e1f-7d17-4160-9e1f-f334918c6e0d-1\n    │   └── manifest-list-ceb77e1f-7d17-4160-9e1f-f334918c6e0d-2\n    ├── schema\n    │   └── schema-0\n    └── snapshot\n        ├── EARLIEST\n        ├── LATEST\n        └── snapshot-1\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["It's standard format of Paimon which enables you query on it with other engines, like ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://docs.starrocks.io/docs/data_source/catalog/paimon_catalog/",
        children: "StartRocks"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "clean-up",
      children: "Clean up"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["After finishing the tutorial, run ", (0,jsx_runtime.jsx)(_components.code, {
        children: "exit"
      }), " to exit Flink SQL CLI Container and then run ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docker-compose down -v"
      }), " to stop all containers."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learn-more",
      children: "Learn more"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Now that you're up an running with Fluss and Flink, check out the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/fluss-docs/docs/engine-flink/getting-started",
        children: "Apache Flink Engine"
      }), " docs to learn more features with Flink!"]
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