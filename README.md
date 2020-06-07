# sidenavbar

### Simple vanilla js replacement for Bootstrap's collapsed navbar

This implementation shows the navbar items (when the navbar is collapsed) inside a sidebar that slides in from the right side of the page, instead of unfolding from the top of the page.

It requires that the navbar's nav element has a "sidenavbar" class instead of a "navbar-expand-xx" class.

Like bootstrap's collapsing method, it is also necessary that each navbar-item be inside of a div that has the "navbar-collapse" class. Hoerver, unlike bootstrap's collapsing method, you don't add a navbar-toggle button, it is automatically added for you.

The sidenavbar's width is 250px by default, but you can override it using the --sidenabar-width CSS variable. For example, if you'd like the width to be 195px you'd put the following rule in your CSS:

```css
:root {
  --sidenavbar-width: 195px;
}
```

---

Author: Paulo Lopes

Version: 0.0.3

License: Apache License 2.0

Inspired by: https://codepen.io/Smakosh/pen/OQMNNd
