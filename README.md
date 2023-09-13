# The Algorithms - JavaScript Playground

This project provides a client-side code playground to allow editing, running and testing code for Data Structures and Algorithms from the great repo: [The Algorithms - JavaScript](https://github.com/TheAlgorithms/JavaScript). These currently include more that [350 implementations](https://github.com/TheAlgorithms/JavaScript/blob/master/DIRECTORY.md) in JavaScript.

[Open the Playground 🚀](https://hatemhosny.github.io/thealgorithms-javascript/)

The project is built using [LiveCodes](https://livecodes.io/), the [feature-rich](https://livecodes.io/docs/features/), [open-source](https://github.com/live-codes/livecodes), [client-side](https://livecodes.io/docs/why#client-side) code playground. Code and tests are imported form [The Algorithms - JavaScript](https://github.com/TheAlgorithms/JavaScript) repo and are added to the playground using LiveCodes [SDK](https://livecodes.io/docs/sdk). Tests run locally in the browser using LiveCodes [test runner](https://livecodes.io/docs/features/tests) (which uses [Jest](https://jestjs.io/)). The playground is deployed to GitHub Pages using the LiveCodes [deploy](https://livecodes.io/docs/features/deploy) feature!

## Source Code

The source code can be found in the [`gh-pages` branch](https://github.com/hatemhosny/thealgorithms-javascript/tree/gh-pages) ([Edit in LiveCodes ✏️](https://livecodes.io/?activeEditor=script&x=https://github.com/hatemhosny/thealgorithms-javascript/tree/gh-pages/src)).

## How is that different from the official [playground](https://the-algorithms.com/playground?algorithm=binary-search&language=javascript)?

This project has the following major differences: 

- The code **runs in the browser** (instead of sending code to the server), so it does not need a backend to maintain and pay for.
- It allows **running tests** and reviewing test results (which is not currently supported in the official playground for JavaScript).
- **Mobile support**: LiveCodes has a responsive layout and uses the mobile-friendly code editor CodeMirror6 on mobile.
- Any algorithm can be opened in the full [LiveCodes](https://livecodes.io/) app (by clicking the LiveCodes logo on the upper right corner). This allows using all **LiveCodes [features](https://livecodes.io/docs/features/)** (including the ability to: [save](https://livecodes.io/docs/features/projects), [share](https://livecodes.io/docs/features/share), [export](https://livecodes.io/docs/features/export), [deploy](https://livecodes.io/docs/features/deploy), [sync](https://livecodes.io/docs/features/sync) and [broadcast](https://livecodes.io/docs/features/broadcast) code, ...etc).

## Can I have a direct link to a specific algorithm?

Yes!

When a new algorithm is selected from the dropdown menu, the URL querystring parameter `algorithm` is changed to the selected one. This URL can be shared and the selected algorithm will be loaded by default.
e.g. https://hatemhosny.github.io/thealgorithms-javascript/?algorithm=Recursive/Factorial

## What IDE did you use to build this project?

[LiveCodes](https://livecodes.io/) of course :)

## License

The project imports code and tests from [The Algorithms - JavaScript](https://github.com/TheAlgorithms/JavaScript) repo which has [GPL-3.0 license](https://github.com/TheAlgorithms/JavaScript/blob/master/LICENSE), so this project is licensed under the same license.

However, please note that [LiveCodes](https://github.com/live-codes/livecodes) and its [SDK](https://livecodes.io/docs/sdk) are licensed under [MIT license](https://github.com/live-codes/livecodes/blob/develop/LICENSE). So if you remove all references to [The Algorithms - JavaScript](https://github.com/TheAlgorithms/JavaScript) repo and its code, you may consider the rest of the code (utilizing the LiveCodes SDK) as having MIT license.

## Contributions/Suggestions

Very welcome :)

## How can I build similar projects?

Go ahead to [LiveCodes](https://livecodes.io/). You may want to check the docs on [embedding playgrounds](https://livecodes.io/docs/features/embeds) and LiveCodes [SDK](https://livecodes.io/docs/sdk).

The [LiveCodes documentations](https://livecodes.io/docs/) are comprehensive with code samples, live demos and screenshots.

LiveCodes app and SDK are licensed under [MIT license](https://github.com/live-codes/livecodes/blob/develop/LICENSE).
