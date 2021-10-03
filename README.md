# Overview

Simple React, TypeScript application to demo the internal data-grid component.

# Deployment

The app is currently deployed on vercel:
[Datagrid component react-typescript app] (https://datagrid-react-ts-app.vercel.app/)

# Setup

Tech stack:

- **React**
- **TypeScript**
- **SASS** : styling
- **Jest & RTL** : testing

Runtime configurations:

- **Webpack** : static module bundler for JavaScript applications.
- **Babel** : KavaScript transpiler that converts edge JavaScript into plain old ES5 JavaScript that can run in any browser
- **Jest & JSDOM** : JavaScript testing framework designed to ensure correctness of any JavaScript codebase

# How to run the app locally

You'll need to install a number of dependencies to get this up and running on your machine.

You need to install:

- Node
- NVM
- Yarn

`Quick Start`

- Make sure that you have Node.js, yarn or npm installed.
- Create and move to appropriate directory
- Clone the repo using 'git clone ...'
- Move to the repo directory
- Install the dependencies: `yarn install` or `npm install`
- Run `yarn start` or `npm start` and see the sample app at `http://localhost:3000`
- Run `yarn test` or `npm test` and see the test results with basic code coverage.

# DataGrid Component

`How to use`

- Import component
  **_import DataGrid from <...path>;_**

- Use it and pass the required props
  **_<DataGrid {...props}/>_**

`Props`

- **pagination**: [optional]
- **columns**: [required]
- **columnLabels**: [required]
- **rows**: [required]
- **gridKey**: [required]
- **tableRowActions**: [optional]
- **pageLimitValues**: [optional]
- **selectedPageLimit**: [optional]
- **noResultLabel**: [optional]
- **loading**: [optional]
- **editable**: [optional]
- **onPageLimitChange**: [required]
- **onEditCellHandler**: [optional]

`Examples`

# Features and Interface

- Editable cells
- Grid column sorting
- Pagination
- Custom row actions
- Update page limit
- Show columns based on the input
- Custom column headers
- Responsive data grid
- Loading state
- Flexibility with input props

# Future goals

- Bulk row selection
- Column resize
- Improve code coverage for the DataGrid component i.e. [from 96.50% to 100%]
- Table level actions [including bulk actions]
- Flexibilty around pagination options i.e. infinite scrolling
