# Angular Master-Details Example

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).


## Running fake backend provider

# json-server installation
First, you need to install a json-server. You can do it globally (-g) with npm:

`npm install -g json-server`

# Create a JSON file with mock data

In the root folder of your application, create a file with the extension .json.

#Run it

Run the json-server in a terminal and launch the JSON file. The option watch (shortcut: -w) allows to reload automatically the browser when the JSON file is modified:

`json-server --watch myJSONfile.json`

