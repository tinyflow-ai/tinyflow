#!/usr/bin/env sh

# abort on errors
set -e

# copy changes.md
#cp ../changes.md ./zh/
#cp ../changes.md ./en/

# build
npm run docs:build
#vuepress build .



ossutil rm oss://tinyflow-cn-docs/ -rf
ossutil cp -rf assets/images oss://tinyflow-cn-docs/assets/images
ossutil cp -rf .vitepress/dist  oss://tinyflow-cn-docs/
