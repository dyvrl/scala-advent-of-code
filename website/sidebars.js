/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

const fs = require('fs');

const puzzlePage = /(day(\d+))\.md/;

const buildSidebar = (dir) => {
  const extractDay = (f) => {
    const ns = puzzlePage.exec(f);
    if (ns === null) {
      return { id: `<unknown:'${f}'>`, n: -1 };
    } else {
      return { id: `${dir}/${ns[1]}`, n: parseInt(ns[2]) };
    }
  }
  const days = fs.readdirSync(`target/mdoc/${dir}`).map(extractDay);
  const sorted = days.sort((a, b) => a.n - b.n);
  return sorted.map((day) => day.id);
};

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  adventOfCodeSidebar: [
    'introduction',
    'setup',
    {
      "2024 Puzzles": buildSidebar('2024/puzzles'),
    },
    {
      "2023 Puzzles": buildSidebar('2023/puzzles'),
    },
    {
      "2022 Puzzles": buildSidebar('2022/puzzles'),
    },
    {
      "2021 Puzzles": buildSidebar('puzzles'),
    },
  ]
};

module.exports = sidebars;
