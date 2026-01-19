# Frontend Mentor - FAQ Accordion Solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFpBss0P). 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked.
- Navigate the accordion and reveal/hide answers using keyboard navigation.
- View the optimal layout for the interface depending on their device's screen size.
- See hover and focus states for all interactive elements on the page.

### Screenshot

![Design Preview](./preview.jpg)

### Links

- Solution URL: [Github] (https://github.com/Akinzo7/faq-accordion)
- Live Site URL:[Live Site] (https://akinzo7.github.io/faq-accordion/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox for layout and centering
- Mobile-first workflow and Responsive Design
- Vanilla JavaScript for DOM manipulation

### What I learned

During this project, I focused on creating an accessible accordion using semantic buttons. I learned how to use JavaScript to manage classes and icons dynamically while ensuring only one item is open at a time.

```js
// Logic to close other items when a new one is clicked
accordion.forEach((otherItem) => {
  if (otherItem !== item) {
    otherItem.nextElementSibling.classList.remove("active");
    otherItem.querySelector("img").src = "./assets/images/icon-plus.svg";
  }
});
```

### Author

- [ Github](https://github.com/Akinzo7)

- [Frontend Mentor](https://www.frontendmentor.io/profile/Akinzo7)

