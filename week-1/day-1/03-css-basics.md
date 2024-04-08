# 03. CSS Basics

**< [Home](../../README.md) / [Week 1](../README.md)**

---

![HTML + CSS](../../assets/html+css.jpg)

## Ways of Applying Style

### Inline Style (Directly on the element)

```html
<div style="color: purple;"></div>
```

### Using the `<style>` tag inside the `<head>`

```html
<head>
  ...
  <style>
    div {
      color: purple;
    }
  </style>
  ...
</head>
```

### Using an external stylesheet

```html
<head>
  ...
  <link
    rel="stylesheet"
    href="styles.css"
  />
  ...
</head>
```

## Anatomy of a Rule

![CSS Ruleset](../../assets/css-ruleset.png)

## Basic Selectors

- Universal: `*`
- Type: `div`, `p`, `h1`, etc.
- Class: `.class-name`
- Id: `#id-name`

## Frequently Used Properties

- **Colors**: color, background-color
- **Sizing**: width, height
- **Fonts**: font-size, font-family, font-weight, line-height
- **Lists**: list-style
- **Text alignment**: text-align
- **Margin**: margin, margin-top, margin-bottom, margin-left, margin-right
- **Padding**: padding, padding-top, padding-bottom, etc.
- **Border**: border, border-color, border-top, border-bottom, etc.

## CSS Units

- **Absolute**: `px`, `pt`
- **Relative**:
  - `em`: relative to the font-size of parent element
  - `rem`: relative to the font-size of the root element
  - `vw`: relative to the viewport width
  - `vh`: relative to the viewport height
  - `%:` relative to the parent element

## Style Cascade

```css
div {
  color: purple;
}

div {
  color: red;
}

/* The color of the div will be red */
```

```html
<head>
  <style>
    div {
      color: purple;
    }
  </style>

  <link
    rel="stylesheet"
    href="style.css"
  />

  <!--
    internal and external styles are treated the same way. so cascade rule apply
    if `div` color is set to red in `style.css`, the color of the div will be red
  -->
</head>
```

## Specificity

```html
<div class="my-class"></div>
```

```css
.my-class {
  color: red;
}

div {
  color: purple;
}

/* the color of the div would be red */
/* because even thought `div` selector comes after the class selector, the class selector is more specific  */
```

From least to most specific:

1. Universal selectors (`*`)
2. Type selectors (`h1`, `p`, etc.)
3. Class selectors (`.class`)
4. ID selectors (`#id`)
5. Inline styles (`style` attribute) `<div style="color: red;"></div>`
6. `!important`
