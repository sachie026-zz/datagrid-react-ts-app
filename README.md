# Overview

Simple React, TypeScript application to demo the internal data-grid component.

# Deployment

The app is currently deployed on vercel: (https://datagrid-react-ts-app.vercel.app/)

# Setup

Tech stack:

- **React**
- **TypeScript**
- **CSS** : styling
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

`Example`

```

    <DataGrid
        editable
        columns={['key1', 'key2']}
        columnLabels={["Name", "Age"]}
        rows={data}
        gridKey="sample-grid"
        pageLimitValues={[5, 10, 15]}
        selectedPageLimit={5}
        noResultLabel="No data!"
        onPageLimitChange={<actionhandler>}
        pagination={{
            pageNumber: 1,
            limit: 5,
            totalCount: 24,
            show: true,
            onNext: <actionhandler>,
            onPrev: <actionhandler>,
        }}
        tableRowActions={[
            {
            name: "Delete",
            onAction: <actionhandler>,
            },
        ]}
        loading={false}
        onEditCellHandler={<actionhandler>}
        />

```

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
