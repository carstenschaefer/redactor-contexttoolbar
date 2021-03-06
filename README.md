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
Configuration via HTML markup:

```html
<div id="page-editor-toolbar"></div>
 <textarea ng-model="pageModel.content"
                redactor="{
                          focus: true,
                          linebreaks: false,
                          tabKey: true,
                          plugins: ['fontfamily', 'fontsize', 'fontcolor', 'table', 'contexttoolbar'],
                          toolbarExternal: '#page-editor-toolbar',
                          contexttoolbar:{
                            scroll: false,
                            buttons:[
                              'formatting',
                              'bold',
                              'italic',
                              'unorderedlist',
                              'orderedlist',
                              'outdent',
                              'indent',
                              'alignment',
                            ],
                            plugins:[
                              'fontcolor',
                              'fontsize',
                              'fontfamily'
                            ]},
                            blurCallback: blurCallbackFunction,
                            focusCallback: focusCallbackFunction
                            }"></textarea>
 ````
 
###Description of scroll property:
   scroll: true   ->  allows scrolling while context toolbar is open. Will close context toolbar automatically
  
   scroll: false  ->  prevents any scrolling (mouse, keyboard) while context toolbar is open.
