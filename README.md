Jump Rope Animation
===================

[![live demo](https://img.shields.io/website?url=https%3A%2F%2Fzkm.github.io%2Fanimate-test%2F&label=live%20demo)](https://zkm.github.io/animate-test/)

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![jQuery](https://img.shields.io/badge/jQuery-0769AD?logo=jquery&logoColor=white)
![Sass](https://img.shields.io/badge/Sass-CC6699?logo=sass&logoColor=white)

This is a JavaScript function that animates a jump rope using the background position of an HTML element. The animation loops through a sprite sheet with 7 frames and updates the background position of the element every 140 milliseconds.

Installation
------------

No installation is necessary. Just include the JavaScript code in your HTML file and call the `an_jumprope()` function to start the animation.

Usage
-----

To use the jump rope animation, follow these steps:

1.  Include the JavaScript code in your HTML file.
2.  Add an HTML element with the ID `an_jumprope`.
3.  Call the `an_jumprope()` function to start the animation.

Optionally, you can use the `jBlitter` plugin to load the sprite sheet and handle the animation for you. Just include the `jBlitter` plugin and call the `$("#an_jumprope").jBlitter()` function with the appropriate options.
