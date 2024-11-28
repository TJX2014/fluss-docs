"use strict";
(self["webpackChunkfluss_website"] = self["webpackChunkfluss_website"] || []).push([[2506],{

/***/ 5690:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_install_deploy_deploying_with_docker_md_d97_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-install-deploy-deploying-with-docker-md-d97.json
const site_docs_install_deploy_deploying_with_docker_md_d97_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"install-deploy/deploying-with-docker","title":"Deploying with Docker","description":"This guide will show you how to run a Fluss cluster using Docker. In this guide, we will introduce the prerequisites of","source":"@site/docs/install-deploy/deploying-with-docker.md","sourceDirName":"install-deploy","slug":"/install-deploy/deploying-with-docker","permalink":"/fluss-docs/docs/install-deploy/deploying-with-docker","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"docsSidebar","previous":{"title":"Deploying Distributed Cluster","permalink":"/fluss-docs/docs/install-deploy/deploying-distributed-cluster"},"next":{"title":"Overview","permalink":"/fluss-docs/docs/table-design/overview"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/install-deploy/deploying-with-docker.md


const frontMatter = {
	sidebar_position: 4
};
const contentTitle = 'Deploying with Docker';

const assets = {

};



const toc = [{
  "value": "Prerequisites",
  "id": "prerequisites",
  "level": 2
}, {
  "value": "Deploy with Docker",
  "id": "deploy-with-docker",
  "level": 2
}, {
  "value": "Create a shared tmpfs volume",
  "id": "create-a-shared-tmpfs-volume",
  "level": 3
}, {
  "value": "Create a Network",
  "id": "create-a-network",
  "level": 3
}, {
  "value": "Start Zookeeper",
  "id": "start-zookeeper",
  "level": 3
}, {
  "value": "Start Fluss CoordinatorServer",
  "id": "start-fluss-coordinatorserver",
  "level": 3
}, {
  "value": "Start Fluss TabletServer",
  "id": "start-fluss-tabletserver",
  "level": 3
}, {
  "value": "Start with One TabletServer",
  "id": "start-with-one-tabletserver",
  "level": 4
}, {
  "value": "Start with Multiple TabletServer",
  "id": "start-with-multiple-tabletserver",
  "level": 4
}, {
  "value": "Interacting with Fluss",
  "id": "interacting-with-fluss",
  "level": 3
}, {
  "value": "Start Flink Cluster",
  "id": "start-flink-cluster",
  "level": 4
}, {
  "value": "Enter into SQL-Client",
  "id": "enter-into-sql-client",
  "level": 4
}, {
  "value": "Create Fluss Catalog",
  "id": "create-fluss-catalog",
  "level": 4
}, {
  "value": "Do more with Fluss",
  "id": "do-more-with-fluss",
  "level": 4
}, {
  "value": "Deploy with Docker Compose",
  "id": "deploy-with-docker-compose",
  "level": 2
}, {
  "value": "Create docker-compose.yml file",
  "id": "create-docker-composeyml-file",
  "level": 3
}, {
  "value": "Compose file to start Fluss cluster with one TabletServer",
  "id": "compose-file-to-start-fluss-cluster-with-one-tabletserver",
  "level": 4
}, {
  "value": "Compose file to start Fluss cluster with multi TabletServer",
  "id": "compose-file-to-start-fluss-cluster-with-multi-tabletserver",
  "level": 4
}, {
  "value": "Launch the components",
  "id": "launch-the-components",
  "level": 3
}, {
  "value": "Interacting with Fluss",
  "id": "interacting-with-fluss-1",
  "level": 3
}, {
  "value": "Enter into SQL-Client",
  "id": "enter-into-sql-client-1",
  "level": 4
}, {
  "value": "Create Fluss Catalog",
  "id": "create-fluss-catalog-1",
  "level": 4
}, {
  "value": "Do more with Fluss",
  "id": "do-more-with-fluss-1",
  "level": 4
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
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
        id: "deploying-with-docker",
        children: "Deploying with Docker"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This guide will show you how to run a Fluss cluster using Docker. In this guide, we will introduce the prerequisites of\nthe Docker environment and how to quickly create a Fluss cluster using the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docker run"
      }), " commands\nor ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docker compose"
      }), " file."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Overview"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Prepare the build machine before creating the Docker image."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Hardware"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Recommended configuration: 4 cores, 16GB memory."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Software"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Docker version: 20.10 or later."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "docker-compose version: 20.1 or later."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "deploy-with-docker",
      children: "Deploy with Docker"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The following is a brief overview of how to quickly create a complete Fluss testing cluster\nusing the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docker run"
      }), " commands."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "create-a-shared-tmpfs-volume",
      children: "Create a shared tmpfs volume"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Create a shared tmpfs volume:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "docker volume create shared-tmpfs\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "create-a-network",
      children: "Create a Network"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Create an isolated bridge network in docker"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "docker network create fluss-demo\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "start-zookeeper",
      children: "Start Zookeeper"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Start Zookeeper in daemon mode. This is a single node zookeeper setup. Zookeeper is the central metadata store\nfor Fluss and should be set up with replication for production use. For more information,\nsee ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://zookeeper.apache.org/doc/r3.6.0/zookeeperStarted.html#sc_RunningReplicatedZooKeeper",
        children: "Running zookeeper cluster"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "docker run \\\n    --name zookeeper \\\n    --network=fluss-demo \\\n    --restart always \\\n    -p 2181:2181 \\\n    -d zookeeper:3.9.2\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "start-fluss-coordinatorserver",
      children: "Start Fluss CoordinatorServer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Start Fluss CoordinatorServer in daemon and connect to Zookeeper."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "docker run \\\n    --name coordinator-server \\\n    --network=fluss-demo \\\n    --env FLUSS_PROPERTIES=\"zookeeper.address: zookeeper:2181\ncoordinator.host: coordinator-server\" \\\n    -p 9123:9123 \\\n    -d fluss/fluss:0.5.0 coordinatorServer\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "start-fluss-tabletserver",
      children: "Start Fluss TabletServer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can start one or more tablet servers based on your needs. For a production environment,\nensure that you have multiple tablet servers."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "start-with-one-tabletserver",
      children: "Start with One TabletServer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If you just want to start a sample test, you can start only one TabletServer in daemon and connect to Zookeeper.\nThe command is as follows:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "docker run \\\n    --name tablet-server \\\n    --network=fluss-demo \\\n    --env FLUSS_PROPERTIES=\"zookeeper.address: zookeeper:2181\ntablet-server.host: tablet-server\ntablet-server.id: 0\ntablet-server.port: 9124\ndata.dir: /tmp/fluss/data\nremote.data.dir: /tmp/fluss/remote-data\" \\\n    -p 9124:9124 \\\n    --volume shared-tmpfs:/tmp/fluss \\\n    -d fluss/fluss:0.5.0 tabletServer\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "start-with-multiple-tabletserver",
      children: "Start with Multiple TabletServer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In a production environment, you need to start multiple Fluss TabletServer nodes.\nHere we start 3 Fluss TabletServer nodes in daemon and connect to Zookeeper. The command is as follows:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "start tablet-server-0"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "docker run \\\n    --name tablet-server-0 \\\n    --network=fluss-demo \\\n    --env FLUSS_PROPERTIES=\"zookeeper.address: zookeeper:2181\ntablet-server.host: tablet-server-0\ntablet-server.id: 0\ntablet-server.port: 9124\ndata.dir: /tmp/fluss/data/tablet-server-0\nremote.data.dir: /tmp/fluss/remote-data\" \\\n    -p 9124:9124 \\\n    --volume shared-tmpfs:/tmp/fluss \\\n    -d fluss/fluss:0.5.0 tabletServer\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "start tablet-server-1"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "docker run \\\n    --name tablet-server-1 \\\n    --network=fluss-demo \\\n    --env FLUSS_PROPERTIES=\"zookeeper.address: zookeeper:2181\ntablet-server.host: tablet-server-1\ntablet-server.id: 1\ntablet-server.port: 9125\ndata.dir: /tmp/fluss/data/tablet-server-1\nremote.data.dir: /tmp/fluss/remote-data\" \\\n    -p 9125:9125 \\\n    --volume shared-tmpfs:/tmp/fluss \\\n    -d fluss/fluss:0.5.0 tabletServer\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "start tablet-server-2"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "docker run \\\n    --name tablet-server-2 \\\n    --network=fluss-demo \\\n    --env FLUSS_PROPERTIES=\"zookeeper.address: zookeeper:2181\ntablet-server.host: tablet-server-2\ntablet-server.id: 2\ntablet-server.port: 9126\ndata.dir: /tmp/fluss/data/tablet-server-2\nremote.data.dir: /tmp/fluss/remote-data\" \\\n    -p 9126:9126 \\\n    --volume shared-tmpfs:/tmp/fluss \\\n    -d fluss/fluss:0.5.0 tabletServer\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Now all the Fluss related components are running."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Run the below command to check the Fluss cluster status:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "docker container ls -a\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interacting-with-fluss",
      children: "Interacting with Fluss"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["After the Fluss cluster is started, you can use ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Fluss Client"
      }), " (e.g., Flink SQL Client) to interact with Fluss.\nThe following subsections will show you how to use 'Docker' to build a Flink cluster and use ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Flink SQL Client"
      }), "\nto interact with Fluss."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "start-flink-cluster",
      children: "Start Flink Cluster"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "start jobManager"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "docker run \\\n    --name jobmanager \\\n    --network=fluss-demo \\\n    --env FLINK_PROPERTIES=\" jobmanager.rpc.address: jobmanager\" \\\n    -p 8083:8081 \\\n    --volume shared-tmpfs:/tmp/fluss \\\n    -d fluss/quickstart-flink:1.20-0.5 jobmanager\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "start taskManager"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "docker run \\\n    --name taskmanager \\\n    --network=fluss-demo \\\n    --env FLINK_PROPERTIES=\" jobmanager.rpc.address: jobmanager\" \\\n    --volume shared-tmpfs:/tmp/fluss \\\n    -d fluss/quickstart-flink:1.20-0.5 taskmanager\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "enter-into-sql-client",
      children: "Enter into SQL-Client"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "First, use the following command to enter pod:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "docker exec -it jobmanager /bin/bash\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Then, use the following command to enter the Flink SQL CLI Container:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "./sql-client\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "do-more-with-fluss",
      children: "Do more with Fluss"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["After the catalog is created, you can use Flink SQL Client to do more with Fluss, for example, create a table, insert data, query data, etc.\nMore details please refer to ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/docs/engine-flink/getting-started/",
        children: "Flink Getting started"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "deploy-with-docker-compose",
      children: "Deploy with Docker Compose"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The following is a brief overview of how to quickly create a complete Fluss testing cluster\nusing the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docker-compose up -d"
      }), " commands in a detached mode."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "create-docker-composeyml-file",
      children: "Create docker-compose.yml file"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "compose-file-to-start-fluss-cluster-with-one-tabletserver",
      children: "Compose file to start Fluss cluster with one TabletServer"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can use the following ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docker-compose.yml"
      }), " file to start a Fluss cluster with one ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CoordinatorServer"
      }), " and one ", (0,jsx_runtime.jsx)(_components.code, {
        children: "TabletServer"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "services:\n  coordinator-server:\n    image: fluss/fluss:0.5.0\n    command: coordinatorServer\n    depends_on:\n      - zookeeper\n    environment:\n      - |\n        FLUSS_PROPERTIES=\n        zookeeper.address: zookeeper:2181\n        coordinator.host: coordinator-server\n        remote.data.dir: /tmp/fluss/remote-data\n  tablet-server:\n    image: fluss/fluss\n    command: tabletServer:0.5.0\n    depends_on:\n      - coordinator-server\n    environment:\n      - |\n        FLUSS_PROPERTIES=\n        zookeeper.address: zookeeper:2181\n        tablet-server.host: tablet-server\n        tablet-server.id: 0\n        kv.snapshot.interval: 0s\n        data.dir: /tmp/fluss/data\n        remote.data.dir: /tmp/fluss/remote-data\n    volumes:\n      - shared-tmpfs:/tmp/fluss\n  zookeeper:\n    restart: always\n    image: zookeeper:3.9.2\n\nvolumes:\n  shared-tmpfs:\n    driver: local\n    driver_opts:\n      type: \"tmpfs\"\n      device: \"tmpfs\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "compose-file-to-start-fluss-cluster-with-multi-tabletserver",
      children: "Compose file to start Fluss cluster with multi TabletServer"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can use the following ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docker-compose.yml"
      }), " file to start a Fluss cluster with one ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CoordinatorServer"
      }), " and three ", (0,jsx_runtime.jsx)(_components.code, {
        children: "TabletServers"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "services:\n  coordinator-server:\n    image: fluss/fluss:0.5.0\n    command: coordinatorServer\n    depends_on:\n      - zookeeper\n    environment:\n      - |\n        FLUSS_PROPERTIES=\n        zookeeper.address: zookeeper:2181\n        coordinator.host: coordinator-server\n        remote.data.dir: /tmp/fluss/remote-data\n  tablet-server-0:\n    image: fluss/fluss:0.5.0\n    command: tabletServer\n    depends_on:\n      - coordinator-server\n    environment:\n      - |\n        FLUSS_PROPERTIES=\n        zookeeper.address: zookeeper:2181\n        tablet-server.host: tablet-server-0\n        tablet-server.id: 0\n        kv.snapshot.interval: 0s\n        data.dir: /tmp/fluss/data/tablet-server-0\n        remote.data.dir: /tmp/fluss/remote-data\n    volumes:\n      - shared-tmpfs:/tmp/fluss\n  tablet-server-1:\n    image: fluss/fluss:0.5.0\n    command: tabletServer\n    depends_on:\n      - coordinator-server\n    environment:\n      - |\n        FLUSS_PROPERTIES=\n        zookeeper.address: zookeeper:2181\n        tablet-server.host: tablet-server-1\n        tablet-server.id: 1\n        kv.snapshot.interval: 0s\n        data.dir: /tmp/fluss/data/tablet-server-1\n        remote.data.dir: /tmp/fluss/remote-data\n    volumes:\n      - shared-tmpfs:/tmp/fluss\n  tablet-server-2:\n    image: fluss/fluss:0.5.0\n    command: tabletServer\n    depends_on:\n      - coordinator-server\n    environment:\n      - |\n        FLUSS_PROPERTIES=\n        zookeeper.address: zookeeper:2181\n        tablet-server.host: tablet-server-2\n        tablet-server.id: 2\n        kv.snapshot.interval: 0s\n        data.dir: /tmp/fluss/data/tablet-server-2\n        remote.data.dir: /tmp/fluss/remote-data\n    volumes:\n      - shared-tmpfs:/tmp/fluss\n  zookeeper:\n    restart: always\n    image: zookeeper:3.9.2\n\nvolumes:\n  shared-tmpfs:\n    driver: local\n    driver_opts:\n      type: \"tmpfs\"\n      device: \"tmpfs\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "launch-the-components",
      children: "Launch the components"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Save the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docker-compose.yaml"
      }), " script and execute the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docker-compose up -d"
      }), " command in the same directory\nto create the cluster."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Run the below command to check the container status:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "docker container ls -a\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interacting-with-fluss-1",
      children: "Interacting with Fluss"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If you want to interact with this Fluss cluster, you can change the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docker-compose.yml"
      }), " file to add a Flink cluster.\nThe changed ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docker-compose.yml"
      }), " file is as follows:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "services:\n  coordinator-server:\n    image: fluss/fluss:0.5.0\n    command: coordinatorServer\n    depends_on:\n      - zookeeper\n    environment:\n      - |\n        FLUSS_PROPERTIES=\n        zookeeper.address: zookeeper:2181\n        coordinator.host: coordinator-server\n        remote.data.dir: /tmp/fluss/remote-data\n  tablet-server-0:\n    image: fluss/fluss:0.5.0\n    command: tabletServer\n    depends_on:\n      - coordinator-server\n    environment:\n      - |\n        FLUSS_PROPERTIES=\n        zookeeper.address: zookeeper:2181\n        tablet-server.host: tablet-server-0\n        tablet-server.id: 0\n        kv.snapshot.interval: 0s\n        data.dir: /tmp/fluss/data/tablet-server-0\n        remote.data.dir: /tmp/fluss/remote-data\n    volumes:\n      - shared-tmpfs:/tmp/fluss\n  tablet-server-1:\n    image: fluss/fluss:0.5.0\n    command: tabletServer\n    depends_on:\n      - coordinator-server\n    environment:\n      - |\n        FLUSS_PROPERTIES=\n        zookeeper.address: zookeeper:2181\n        tablet-server.host: tablet-server-1\n        tablet-server.id: 1\n        kv.snapshot.interval: 0s\n        data.dir: /tmp/fluss/data/tablet-server-1\n        remote.data.dir: /tmp/fluss/remote-data\n    volumes:\n      - shared-tmpfs:/tmp/fluss\n  tablet-server-2:\n    image: fluss/fluss:0.5.0\n    command: tabletServer\n    depends_on:\n      - coordinator-server\n    environment:\n      - |\n        FLUSS_PROPERTIES=\n        zookeeper.address: zookeeper:2181\n        tablet-server.host: tablet-server-2\n        tablet-server.id: 2\n        kv.snapshot.interval: 0s\n        data.dir: /tmp/fluss/data/tablet-server-2\n        remote.data.dir: /tmp/fluss/remote-data\n    volumes:\n      - shared-tmpfs:/tmp/fluss\n  zookeeper:\n    restart: always\n    image: zookeeper:3.9.2\n  jobmanager:\n    image: fluss/quickstart-flink:1.20-0.5\n    ports:\n      - \"8083:8081\"\n    command: jobmanager\n    environment:\n      - |\n        FLINK_PROPERTIES=\n        jobmanager.rpc.address: jobmanager\n    volumes:\n      - shared-tmpfs:/tmp/fluss\n  taskmanager:\n    image: fluss/quickstart-flink:1.20-0.5\n    depends_on:\n      - jobmanager\n    command: taskmanager\n    environment:\n      - |\n        FLINK_PROPERTIES=\n        jobmanager.rpc.address: jobmanager\n    volumes:\n      - shared-tmpfs:/tmp/fluss\n\nvolumes:\n  shared-tmpfs:\n    driver: local\n    driver_opts:\n      type: \"tmpfs\"\n      device: \"tmpfs\"\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Save the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docker-compose.yaml"
      }), " script and execute the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docker-compose up -d"
      }), " command in the same directory to create the cluster."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "enter-into-sql-client-1",
      children: "Enter into SQL-Client"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "First, use the following command to enter the Flink SQL CLI Container:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "docker-compose exec jobmanager ./sql-client\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "create-fluss-catalog-1",
      children: "Create Fluss Catalog"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Use the following SQL to create a Fluss catalog:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        metastring: "title=\"Flink SQL Client\"",
        children: "CREATE CATALOG my_fluss WITH (\n    'type' = 'fluss',\n    'bootstrap.servers' = 'coordinator-server:9123'\n);\n\nUSE CATALOG my_fluss;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "do-more-with-fluss-1",
      children: "Do more with Fluss"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["After the catalog is created, you can use Flink SQL Client to do more with Fluss, for example, create a table, insert data, query data, etc.\nMore details please refer to ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/docs/engine-flink/getting-started/",
        children: "Flink Getting started"
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