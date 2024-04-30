# 01. React Introduction

**< [Home](../../README.md) / [Week 4](../README.md)**

---

## Starting a React Project with Vite

In the terminal, run the following commands to create a new React project using Vite.

### 1. Create Project

```sh
npm create vite@latest <project-name> -- --template react
```

OR

```sh
npm create vite@latest

# 1. Type the project name
# 2. Select the template (React)
# 3. Select the variant (JavaScript)
```

### 2. Install Dependencies

```sh
cd <project-name>  # go to the project directory
npm install        # install dependencies
```

### 3. Start Development Server

```sh
npm run dev  # to be run in the project directory
```

## React

### JSX

- JSX stands for JavaScript XML.
- JSX allows us to write HTML in React.

```jsx
const element = <h1>Hello, world!</h1>;
```
