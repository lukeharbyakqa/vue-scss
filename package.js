{
  "name": "vue-scss",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint",
    "test:e2e": "vue-cli-service test:e2e",
    "test:unit": "vue-cli-service test:unit --watchAll"
  },
  "dependencies": {
    "axios": "^0.19.0",
    "core-js": "^2.6.5",
    "lodash": "^4.17.15",
    "vue": "^2.6.10"
  },
  "devDependencies": {
    "@vue/cli-plugin-babel": "^3.10.0",
    "@vue/cli-plugin-e2e-nightwatch": "^3.10.0",
    "@vue/cli-plugin-eslint": "^3.10.0",
    "@vue/cli-plugin-unit-jest": "^3.10.0",
    "@vue/cli-service": "^3.10.0",
    "@vue/eslint-config-airbnb": "^4.0.0",
    "@vue/test-utils": "1.0.0-beta.29",
    "babel-core": "7.0.0-bridge.0",
    "babel-eslint": "^10.0.1",
    "babel-jest": "^23.6.0",
    "eslint": "^5.16.0",
    "eslint-plugin-vue": "^5.0.0",
    "node-sass": "^4.9.0",
    "sass-loader": "^7.1.0",
    "vue-template-compiler": "^2.6.10"
  },
  "eslintConfig": {
    "root": true,
    "env": {
      "node": true
    },
    "extends": [
      "plugin:vue/essential",
      "@vue/airbnb"
    ],
    "rules": {},
    "parserOptions": {
      "parser": "babel-eslint"
    },
    "overrides": [
      {
        "files": [
          "**/__tests__/*.{j,t}s?(x)"
        ],
        "env": {
          "jest": true
        }
      }
    ]
  },
  "postcss": {
    "plugins": {
      "autoprefixer": {}
    }
  },
  "browserslist": [
    "> 1%",
    "last 2 versions"
  ],
  "jest": {
    "moduleFileExtensions": [
      "js",
      "jsx",
      "json",
      "vue"
    ],
    "transform": {
      "^.+\\.vue$": "vue-jest",
      ".+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$": "jest-transform-stub",
      "^.+\\.jsx?$": "babel-jest"
    },
    "transformIgnorePatterns": [
      "/node_modules/"
    ],
    "moduleNameMapper": {
      "^@/(.*)$": "<rootDir>/src/$1"
    },
    "snapshotSerializers": [
      "jest-serializer-vue"
    ],
    "testMatch": [
      "**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)"
    ],
    "testURL": "http://localhost/",
    "watchPlugins": [
      "jest-watch-typeahead/filename",
      "jest-watch-typeahead/testname"
    ]
  }
}
