# hanubeki-lemmy-themes
* Full Bootstrap CSS theme with addition for Lemmy and PieFed
* Flat design, inspired from Material You
* 4 color schemes, auto/manual light/dark modes
* Mobile friendly (if instance owner installs these themes)

## 5
These files are themes for [lemmy-ui](https://github.com/LemmyNet/lemmy-ui) 0.19.6 and [PieFed](https://codeberg.org/rimu/pyfedi/) v1.0.0, based on Bootstrap 5.3.7.

Caution: theme names were changed to `hanubeki-*` to `hlt-*`, to support [LemmyNet/lemmy-ui#2638](https://github.com/LemmyNet/lemmy-ui/pull/2638).

## Preview

### hanubeki-cold
![hanubeki-cold](/preview/hanubeki-cold.png)

### hanubeki-pink
![hanubeki-pink](/preview/hanubeki-pink.png)

### hanubeki-mint
![hanubeki-mint](/preview/hanubeki-mint.png)

### hanubeki-fruits
![hanubeki-fruits](/preview/hanubeki-fruits.png)

## Installation

### Common users
Use Stylish or Stylus and paste all lines of *one* css to the editor.

### Lemmy instance owners
See https://join-lemmy.org/docs/administration/theming.html

### PieFed instance owners
You will need to make custom themes per which you want.
You may want to put [the script](/piefed/scripts.js) to theme directories for light/dark mode preference.

## License
Licensed under MIT (https://github.com/hanubeki/hanubeki-lemmy-themes/blob/main/LICENSE)

`_palette.common.scss`, `_variables.common.scss`, `_variables.force-dark.scss` and `mixins/*.scss` are using some portions from Bootstrap, Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
