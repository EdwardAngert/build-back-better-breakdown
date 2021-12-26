# Build Back Better Act Breakdown

## Goal

A collaborative effort to:

1. Outline each section of the Build Back Better Act in a way that's easier to understand, navigate, and search.

1. Summarize the contents of each section as objectively as possible.

## Current Status

- copying from source into new md files for each major section/part
  - this'll make it easier for contributors to take manageable contributions
- figuring out file structure and naming conventions - to be added as a Style section in the intro or in a CONTRIBUTING doc

## Sources

- https://www.congress.gov/bill/117th-congress/house-bill/5376/text
- https://www.govtrack.us/congress/bills/117/hr5376/text
- https://rules.house.gov/bill/117/hr-5376

## Remaining Work

- [ ] finish laying out all the original text into sections / subsections
- [ ] intro page
- [ ] [algolia docsearch](https://docusaurus.io/docs/search#using-algolia-docsearch)
- [ ] new components
  - [ ] glossary (should this be by section?)
  - [ ] tag each dollar amount, ideally with the purpose
    - [ ] total dollar amounts in a table `| purpose | dollars | link |`
    - [ ] a glossary-style page that lists out each
- [ ] plain-English translations of each section/page - should probably be a sub page so that the original can stay separate
- [ ] cross-link - when other legislation is referenced, link to that
- [ ] style / design / formatting - replace all the default Docusaurus stuff with relevant info
- [ ] public, non-Edward repo
- [ ] Git{Hub,Lab} pages
  - [Deploy to GitHub Pages](https://docusaurus.io/docs/deployment)
- [ ] Add a license? Probably closest to [BY-NC-SA](https://en.wikipedia.org/wiki/Creative_Commons_license#Types_of_license)?

## Meta

The site is built using [Docusaurus 2](https://docusaurus.io/).

To run and develop locally, you'll need (git,) npm and yarn:

```shell
git clone git@github.com:EdwardAngert/build-back-better-breakdown.git
cd build-back-better-breakdown
yarn install
cd docs
yarn run start
```

Use your browser to navigate to [http://localhost:3000](http://localhost:3000)
