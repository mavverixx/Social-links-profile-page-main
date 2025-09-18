# Social Media Links profile with Rive Button Animations
![Screen Recording 2025-02-12 at 18-40-56_5](https://github.com/user-attachments/assets/aa89a4cf-4877-4955-a9c6-b1090e6ac0c0)

This is a solution to the [Social links profile challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-links-profile-UG32l9m6dQ). Frontend Mentor challenges help you improve your coding skills by building realistic projects.


### Difference between Markdown and README

**Markdown** is a lightweight markup language with plain text formatting syntax. It's used to format text on platforms like GitHub, Stack Overflow, and many content management systems.

A **README.md** is a specific file (written in Markdown) that serves as documentation for a project. It's typically the first file people see when they visit a repository, explaining what the project is, how to use it, and other important information.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View a profile card with social media links
- See hover and focus states for all interactive elements on the page
- Experience interactive animated buttons using Rive animations

### Screenshot

![](./screenshot.jpg)

*Note: Add your screenshot here once the project is complete*

### Links

- Solution URL: [GitHub Repository](https://github.com/mavverixx/Social-links-profile-page-main)
- Live Site URL: [Add your live site URL here]

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Responsive design
- [Rive](https://rive.app/) - For interactive button animations
- Google Fonts - Inter font family
- Mobile-first workflow

### What I learned

This project helped me learn how to integrate Rive animations into a web page, creating interactive social media buttons that respond to user interaction. I also practiced creating a responsive profile card that works well on different screen sizes.

Key code snippets:

```html
<!-- Using canvas elements for Rive animations -->
<a href="https://github.com/mavverixx">
  <canvas class="git-btn-css" id="github-button" width="200" height="65"></canvas>
</a>
```

```css
/* Responsive box styling */
#box {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  border: 2px solid black;
  border-radius: 50px;
  width: 100%;
  height: auto;
  margin: 0 auto;
  padding: 40px;
  max-width: 60%;
  box-sizing: border-box;
}
```

```js
// Loading Rive animations
const githubButton = new rive.Rive({
  src: "rive/github-button.riv",
  canvas: document.getElementById("github-button"),
  stateMachines: "State Machine 1",
  layout: new rive.Layout({
    alignment: rive.Alignment.TopCenter
  }),
  autoplay: true,
});
```

### Continued development

In future projects, I plan to:

- Add a background image slideshow using JavaScript for loops
- Improve the responsive design for various screen sizes
- Add more interactive elements and animations
- Implement dark/light mode toggle
- Enhance accessibility features

### Useful resources

- [Rive Documentation](https://rive.app/docs) - This helped me understand how to implement Rive animations in my project.
- [CSS Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - This is an excellent resource for understanding Flexbox layout.
- [Google Fonts](https://fonts.google.com/) - For adding custom typography to the project.
- [MDN Web Docs](https://developer.mozilla.org/) - Comprehensive web development documentation.

## Author

- Website - [Rikki Henry](https://www.your-site.com)
- Frontend Mentor - [@mavverixx](https://www.frontendmentor.io/profile/mavverixx)
- GitHub - [@mavverixx](https://github.com/mavverixx)
- LinkedIn - [Rikki Henry](https://www.linkedin.com/in/rikkihenry/)

## Acknowledgments

I'd like to thank Frontend Mentor for providing this challenge, which helped me practice my HTML, CSS, and JavaScript skills. The Rive community was also helpful in understanding how to implement interactive animations.
