## Book Lister Technical Demo

This is a technical demo of a UI built on top of the ReadWorks.org development API. The UI serves to paginate through the list of books returned by the API. It displays five books per page and allows navigation through the list. As per the specs (in challenge.txt) the list does not wrap.

## Example deployment

http://book-lister.cameronswaim.com/

### Directory Layout

```shell
.
├── /build/                         # Distribution folder for productionized builds
├── /node_modules/                  # 3rd-party libraries and utilities
├── /src/                           # Source files
│   ├── /__mocks__/                 # Mock files for Jest
│   ├── /assets/                    # Static assets
│   ├── /scripts/                   # JavaScript & Styles
│   │   ├── /actions/               # Redux action generators
│   │   ├── /components/            # Shared or generic UI components
│   │   │   ├── /Banner/            # Banner component
│   │   │   ├── /Book/              # Book item component
│   │   │   ├── /List/              # List component to navigate Books
│   │   │   └── /...                # etc.
│   │   ├── /reducers/              # Redux reducers
│   │   ├── /service/               # Services for API communication
│   │   ├── /store/                 # Redux store
│   │   ├── /views/                 # Application views / routes
│   │   │   └── /BookLister/        # Main view
│   │   ├── /app.jsx                # Entry point, mounts DOM
│   │   ├── /app.scss               # App wide style imports
│   │   └── /theme-variables.scss   # Shared theme variables
│   └── index.html                  # Basic HTML template
│── package.json                    # The list of project dependencies and NPM scripts
│── webpack.config.js               # Bundling and optimization settings for Webpack
│── manifest.yml                    # CloudFoundry deployment config
└── ...                             # Editor and tooling config files
```


## Installation

Install dependencies:
```
npm install
```

Development:
```
npm run webpack-dev-server
```

Build:
```
npm run dist
```

Deployment (using CloudFoundry):
```
cf push
```

## Tests

Run all tests:
```
npm run test
```

## License

A short snippet describing the license (MIT, Apache, etc.)
