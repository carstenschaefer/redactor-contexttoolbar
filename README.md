# redactor-contexttoolbar
Adds a configurable toolbar as a context menu

http://imperavi.com/redactor/

A plugin developed for Redactor, a WYSIWYG rich-text editor made by @imperavi.

Feel free to contribute to this repository.

##Installation

Include contexttoolbar.js in your markup:

    <script src="contexttoolbar.js"></script>

##Usage
Configuration via options:
 HTML:
 <div id="page-editor-toolbar"></div>
 <textarea ng-model="pageModel.content" redactor="redactorOptions"></textarea>
 
 Controller:
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
	  
Configuration via Markup:
	<textarea ng-model="pageModel.content"
        redactor="{
          plugins:[
            'contexttoolbar'
          ],
          toolbarExternal: '#page-editor-toolbar',
          contexttoolbar:{
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
            ]
          }
        }"
        cols="30"
        rows="10"></textarea>