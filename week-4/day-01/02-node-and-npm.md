# 02. Introduction to Node and NPM

**< [Home](../../README.md) / [Week 4](../README.md)**

---

## Node.js

Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows us to run JavaScript code outside of the browser. Node.js is commonly used to build server-side applications, but it's also used for front-end development when working with tools like Vite.

### Running JavaScript with Node.js

To run a JavaScript file with Node.js, we can use the `node` command followed by the file name.

```javascript
// my-file.js

console.log("Hello, from the terminal!");
```

```sh
node my-file.js

# Outputs to the console:
# Hello, from the terminal!
```

### Node.js REPL

Node.js comes with a built-in REPL (Read-Eval-Print Loop) that allows us to run JavaScript code interactively. To start the Node.js REPL, we can run the `node` command without any arguments.

```sh
node
```

This will open the Node.js REPL, where we can run JavaScript code line by line.

## NPM

NPM (Node Package Manager) is the default package manager for Node.js. It allows us to install, manage, and share packages of code with other developers. NPM is also used to manage project dependencies and scripts.

### Initializing a New Project

To initialize a new Node.js project, we can run `npm init` in the project directory. This will create a `package.json` file that contains information about the project and its dependencies.

```sh
npm init
```

**Example `package.json` File:**

```json
{
  "name": "my-project",
  "version": "1.0.0",
  "description": "A description of my project",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Pepe",
  "license": "MIT"
}
```

### Installing Packages

To install a package in a Node.js project, we can use the `npm install` command followed by the package name.

```sh
npm install colors
```

This will install the `colors` package and add it to the `dependencies` section of the `package.json` file. We also notice that a `node_modules` directory is created in the project directory, which contains the installed package. There is also a `package-lock.json` file that keeps track of the exact versions of the installed packages.

**Example `package.json` File with Dependencies:**

```json
{
  "name": "my-project",
  "version": "1.0.0",
  "description": "A description of my project",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Pepe",
  "license": "MIT",
  "dependencies": {
    "colors": "^1.4.0"
  }
}
```

#### Ignoring `node_modules`

It's common practice to add the `node_modules` directory to the `.gitignore` file to prevent it from being committed to the repository.

**Example `.gitignore` File:**

```
node_modules/

file-to-ignore.txt
directory-to-ignore/
```

### Using Installed Packages

To use an installed package in a Node.js project, we can require it in our JavaScript files. Then use it based on the package's documentation.

```javascript
// index.js
const colors = require("colors"); // CommonJS import syntax

console.log("Hello, from the terminal!".green);
```

```sh
node index.js

# Outputs to the console:
# Hello, from the terminal! (in green color)
```

### Uninstalling Packages

To uninstall a package from a Node.js project, we can use the `npm uninstall` command followed by the package name.

```sh
npm uninstall colors
```

### Global vs. Local Packages

When we install a package using `npm install`, the package is installed locally in the `node_modules` directory of the project. This means that the package is only available to that project.

If we want to install a package globally, we can use the `-g` flag with the `npm install` command.

```sh
npm install -g nodemon

# Now we can use nodemon globally
```

### Semantic Versioning

NPM uses semantic versioning (semver) to manage package versions. A version number consists of three parts: `major.minor.patch`.

- `major`: Breaking changes
- `minor`: New features
- `patch`: Bug fixes

[**NPM Semantic Versioning**](https://docs.npmjs.com/about-semantic-versioning)

### Running Scripts

NPM allows us to define custom scripts in the `package.json` file. We can then run these scripts using the `npm run` command followed by the script name.

**Example `package.json` File with Scripts:**

```json
{
  "name": "my-project",
  "version": "1.0.0",
  "description": "A description of my project",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "test": "mocha"
  },
  "author": "Pepe",
  "license": "MIT",
  "dependencies": {
    "colors": "^1.4.0"
  }
}
```

```sh
npm run start  # Runs the "start" script which executes "node index.js"
```

### Some Useful NPM Commands

- `npm init`: Initializes a new Node.js project.
- `npm install <package>`: Installs a package in the project.
- `npm uninstall <package>`: Uninstalls a package from the project.
- `npm run <script>`: Runs a custom script defined in the `package.json` file.
- `npm list`: Lists all installed packages in the project.
- `npm update`: Updates packages to their latest versions.
- `npm search <package>`: Searches for packages in the NPM registry.
- `npm info <package>`: Displays information about a package.
- `npm help`: Displays help information about NPM commands.
