import { createPlayground } from "https://unpkg.com/livecodes@0.2.0/livecodes.js";

let playground;
const algorithmSelect = document.getElementById("algorithm-select");

const getContent = async (url) => {
  const pathname = new URL(url).pathname.slice(1);
  const [user, repo, _type, branch, ...path] = pathname.split("/");
  const [name, extension] = path[path.length - 1].split(".");
  const testPath = `${path
    .slice(0, -1)
    .join("/")}/test/${name}.test.${extension}`;
  const scriptUrl = `https://raw.githubusercontent.com/${user}/${repo}/${branch}/${path.join(
    "/",
  )}`;
  const testUrl = `https://raw.githubusercontent.com/${user}/${repo}/${branch}/${testPath}`;
  const [script, test] = await Promise.all([
    fetch(scriptUrl).then(
      async (res) => `// from ${url}\n\n` + (await res.text()),
    ),
    fetch(testUrl).then(async (res) =>
      res.ok
        ? (await res.text()).replace(
            /import (.*?) from ('|").*?('|")/g,
            "import $1 from './script'",
          )
        : null,
    ),
  ]);
  return { script, test, name };
};

const loadAlgorithm = async (initialLoad = false) => {
  await playground?.destroy();
  const algorithm = algorithmSelect.value;
  const algorithmUrl = `${window.lang.repo}/blob/master/${algorithm}.${window.lang.ext}`;
  if (!initialLoad) {
    history.pushState(
      {},
      "",
      `${location.origin}${location.pathname}?lang=${window.lang.ext}&algorithm=${algorithm}`,
    );
  }
  const { script, test, name } = await getContent(algorithmUrl);

  playground = await createPlayground("#container", {
    appUrl: "https://v14.livecodes.io/",
    config: {
      title: name,
      languages: [window.lang.name],
      script: {
        language: window.lang.name,
        content: script,
      },
      tests: {
        language: window.lang.name,
        content: test || "",
      },
      tools: {
        enabled: ['console', 'tests'],
        active: "tests",
        status: "full",
      },
      autotest: true,
    },
  });
};

algorithmSelect.addEventListener("change", loadAlgorithm);
loadAlgorithm(true);
