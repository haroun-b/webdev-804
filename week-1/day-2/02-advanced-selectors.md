# 02. Advanced Selectors

**< [Home](../../README.md) / [Week 1](../README.md)**

---

## CSS Selectors

- `>` **Direct Descendants** selects all the direct children elements.
- ` ` (space between selectors) **All Descendants** selects all descendant elements, regardless of nesting depth.
- `+` **Next Sibling** selects the first sibling element coming immediately after the
  specified element.
- `,` **Selector Grouping** selects all elements that match the specified group of selectors.
- `[attribute]` **Attribute Selector** selects elements with a specified attribute.

### Pseudo-Classes

- `:first-child` selects the first child element of its parent.
- `:last-child` selects the last child element of its parent.
- `:nth-child(n)` selects the nth child element of its parent.
- `:hover` selects an element when you mouse over it.
- `:active` selects an element when you click on it.
- :etc...

### Pseudo-Elements

- `::before` inserts content before the content of the selected element.
- `::after` inserts content after the content of the selected element.
- ::etc...

## External Resources

- [MDN - CSS Selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)
- [CSS Diner](https://flukeout.github.io/)
