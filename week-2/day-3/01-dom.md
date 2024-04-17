# 01. DOM (Document Object Model)

**< [Home](../../README.md) / [Week 2](../README.md)**

---

## Definition

DOM stands for Document Object Model. DOM is a programming interface for web documents. It represents the structure of a document as a tree of objects. Each object corresponds to a part of the document.

![DOM Tree](../../assets/html-dom-tree.png)

## Selecting Elements

There are several ways to select elements in the DOM. Here are a few common methods:

- `document.getElementById()` Returns the element with the specified ID.
- `document.getElementsByClassName()` Returns a collection of all elements with the specified class name.
- `document.getElementsByTagName()` Returns a collection of all elements with the specified tag name.
- `document.querySelector()` Returns the first element that matches a specified CSS selector.
- `document.querySelectorAll()` Returns a collection of all elements that match a specified CSS selector.
- `element.closest()` Returns the closest ancestor element that matches a specified CSS selector.

**The most importants ones to remember are `document.querySelector()` and `document.querySelectorAll()` `element.closest()`**

### Selecting Elements Within a Specific Element

We can also select elements within a specific element by using the `element.querySelector()` and `element.querySelectorAll()` methods.

```html
<p>Paragraph 1</p>

<div id="parent">
  <p>Paragraph 2</p>
  <p>Paragraph 3</p>
</div>
```

```javascript
const parent = document.querySelector("#parent");

const paragraph1 = document.querySelector("p"); // selects the "Paragraph 1" element

const paragraph2 = parent.querySelector("p"); // selects the "Paragraph 2" element
const parentParagraphs = parent.querySelectorAll("p"); // selects both "Paragraph 2" and "Paragraph 3" elements. But not "Paragraph 1".
```

### `element.closest()`

While `element.querySelector()` and `element.querySelectorAll()` are used to select elements within a specific element, `element.closest()` is used to select the closest ancestor element that matches a specified CSS selector.

`querySelector()` and `querySelectorAll()` go down the tree, while `closest()` goes up the tree.

```html
<div class="granparent">
  <div class="parent">
    <div class="child">
      <p>Paragraph</p>
    </div>
  </div>
</div>
```

```javascript
const paragraph = document.querySelector("p");

const child = paragraph.closest("div"); // selects the div with class "child"
const parent = child.closest("div"); // selects the div with class "parent"
```

## Manipulating Elements

Once an element is selected, you can manipulate it in several ways:

### `element.innerHTML`

Be careful when using this property, as it can introduce security vulnerabilities.

**DO NOT USE IT TO INSERT USER-GENERATED CONTENT**.

Whatever you set to `element.innerHTML` will replace the content of the element and will be parsed as HTML.

```javascript
const myElement = document.querySelector("#my-element");

myElement.innerHTML = "<h1>Hello, World!</h1>"; // this will render an h1 element inside my-element

myElement.innerHTML = null; // this will remove all the content inside my-element
```

### `element.textContent`

```javascript
const myElement = document.querySelector("#my-element");

myElement.textContent = "Hello, World!";
myElement.textContent = "<h1>Hello, World!</h1>"; // this will render the text "<h1>Hello, World!</h1>" inside my-element
```

### Manipulating Attributes and Other Properties

**Getting Attributes**

```javascript
const myElement = document.querySelector("#my-element");

const myElementId1 = myElement.id; // gets the id attribute
// or
const myElementId2 = myElement.getAttribute("id");
```

**Setting Attributes**

```javascript
// always select the element first
const myElement = document.querySelector("#my-element");

myElement.id = "new-id"; // changes the id attribute
myElement.className = "new-class"; // changes the class attribute

// we can change any style property by doing
// element.style.propertyName
myElement.style.color = "red"; // changes the color of the text to red
// element.style.setProperty("property-name", "value") also works
myElement.style.setProperty("background-color", "blue"); // changes the background color to blue

// we can also change any other attribute by doing
myElement.setAttribute("attribute-name", "value");

// to remove an attribute
myElement.removeAttribute("attribute-name");

// myElement.attributeName = "value" is also valid, but doesn't work for all attributes
```

**The reason we use `element.className` instead of `element.class` is because `class` is a reserved keyword in JavaScript. `element.setAttribute("class", "some-class")` works though**

```javascript
// to clear the inline styles of an element we can do
myElement.style = null;
// or
myElement.removeAttribute("style");

// to clear a property from an element's style
myElement.style.removeProperty("color");
```

## Creating Elements

To create an element, use the `document.createElement()` method:

```javascript
const div = document.createElement("div");

const paragraph = document.createElement("p");
paragraph.textContent = "Hello, World!";

div.appendChild(paragraph);
document.body.appendChild(div);
```

**We can also use `.append()` instead of `.appendChild()` to append multiple element at once `body.append(el1, el2, etc...)`**

**[More about `append()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/append)**

## Removing Elements

To remove an element, use the `element.remove()` method:

```javascript
const myElement = document.querySelector("#my-element");

myElement.remove();
```

## Events

Events are actions that happen in the browser. They can be triggered by the user or by the browser itself.

### Adding Event Listeners

To add an event listener to an element, use the `element.addEventListener()` method:

```javascript
const myElement = document.querySelector("#my-element");

myElement.addEventListener("click", () => {
  console.log("Element clicked!");
});

document.addEventListener("keydown", (event) => {
  console.log("Key pressed:", event.key);
});

// we can also use the on-event properties. However, it's not recommended
myElement.onclick = () => {
  console.log("Element clicked!");
};
```

#### Event Target

The event target is the element that triggered the event. It can be accessed through the `event.target` property.

```javascript
document.addEventListener("click", (event) => {
  console.log("Element clicked:", event.target);
});
```

**[More about events](https://developer.mozilla.org/en-US/docs/Web/Events)**

## Extras

- [innerHTML vs textContent vs innerText](https://www.freecodecamp.org/news/innerhtml-vs-innertext-vs-textcontent/)
