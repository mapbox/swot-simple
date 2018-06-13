#!/bin/sh

rm -rf swot.zip
rm -rf swot-build

wget https://codeload.github.com/JetBrains/swot/zip/master -O swot.zip
mkdir swot-build
unzip swot.zip -d swot-build

node build.js

npm run build

npm run test
