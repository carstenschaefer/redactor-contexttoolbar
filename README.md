# redactor-contexttoolbar
Adds a configurable toolbar as a context menu.

A plugin developed for [Redactor](http://imperavi.com/redactor/), a WYSIWYG rich-text editor made by [imperavi](http://imperavi.com/).

The example uses [Angular Redactor] (https://github.com/TylerGarlick/angular-redactor).

Feel free to contribute to this repository.

##Installation

Include contexttoolbar.js in your markup:

```html
<script src="contexttoolbar.js"></script>
```

##Usage
Configuration via controller options:

```html
<div id="page-editor-toolbar"></div>
<textarea ng-model="pageModel.content" redactor></textarea>
 ```

```js
$scope.redactorOptions = {
  toolbarExternal: '#page-editor-toolbar',
  focus: true,
  plugins: ['imagemanager', 'fontfamily', 'fontsize', 'fontcolor', 'table', 'contexttoolbar'],
  contexttoolbar: {
    buttons: [
      'formatting',
      'bold',
      'italic',
      'unorderedlist',
      'orderedlist',
      'outdent',
      'indent',
      'alignment',
      'fontfamily',
      'fontsize',
      'fontcolor',
      'backcolor'
    ],
    plugins: [
        'fontcolor',
        'fontsize',
        'fontfamily'
    ]
  }
};
```
