if (!RedactorPlugins) var RedactorPlugins = {};

(function ($) {
  RedactorPlugins.contexttoolbar = function () {
    var $_contextToolbar = null;
    var $_shownDropdown = null;

    return {
      init: function () {
        $_contextToolbar = this.contexttoolbar.createToolbar();

        this.contexttoolbar.loadButtons();
        this.core.getBox().append($_contextToolbar);

        this.$toolbar = this.$toolbar.add($_contextToolbar);

        this.core.getEditor().on('contextmenu.showtoolbar', this.contexttoolbar.showToolbar.bind(this));
        this.opts.dropdownShownCallback = this.contexttoolbar.onDropdownShown.bind(this);

        $(document).on('click', this.contexttoolbar.hideToolbar.bind(this));
        $(document).on('scroll', this.contexttoolbar.hideToolbar.bind(this));

        this.$toolbar.find('a.re-icon').on('click', this.contexttoolbar.observeDropdownShow.bind(this));
      },
      createToolbar: function () {
        return $('<ul></ul>')
            .addClass('redactor-toolbar')
            .addClass('redactor-context-toolbar')
            .css({
              'display': 'none',
              'position': 'absolute',
              'z-index': 99,
              'box-shadow': '0 0 8px rgba(0, 0, 0, 0.8)',
              'white-space': 'nowrap'
            });
      },
      loadButtons: function () {
        var options = this.opts.contexttoolbar || {};
        var _originButtons = this.opts.buttons;
        this.opts.buttons = options.buttons || _originButtons;

        var $_originToolbar = this.$toolbar;
        this.$toolbar = $_contextToolbar;

        this.toolbar.loadButtons();
        this.opts.buttons = _originButtons;

        // load plugins
        if (options.plugins) {
          var _originPlugins = this.opts.plugins;
          this.opts.plugins = options.plugins;
          this.build.plugins();
          this.opts.plugins = _originPlugins;
        }

        this.$toolbar = $_originToolbar;
      },
      showToolbar: function (event) {
        event.preventDefault();
        var $buttons = $_contextToolbar.find('> li');
        var contextWidth = $buttons.length * this.$toolbar.find('> li').innerWidth();
        var $box = this.core.getBox();
        var generalWidth = $box.width();
        var offset = $box.offset();
        var cursorOffsetTop = 44;
        var posX = (event.pageX - offset.left - contextWidth / 2);
        var posY = (event.pageY - offset.top - cursorOffsetTop);

        // if left corner is outside of editor
        if ((event.pageX - contextWidth / 2) < offset.left) {
          posX = 0;
        }

        // if right corner is outside of editor
        if ((event.pageX + contextWidth / 2) > offset.left + generalWidth) {
          posX = generalWidth - contextWidth;
        }

        $_contextToolbar.css({
          'display': 'inline-block',
          'position': 'absolute',
          'left': posX + 'px',
          'top': posY + 'px',
          'width': contextWidth + 'px'
        })
            .stop(true, true)
            .fadeIn(150);
      },
      hideToolbar: function () {
        if ($_shownDropdown) {
          $_shownDropdown.fadeOut();
        }
        $_contextToolbar.fadeOut();
      },
      observeDropdownShow: function (event) {
        var $btn = $(event.target);
        var toolbarOffset = this.$toolbar.offset();
        var keyOffset = $btn.offset();
        var $dropdown = $btn.data('dropdown');

        if ($dropdown) {
          if (this.$toolbar.hasClass('toolbar-fixed-box')) {
            keyOffset.top -= toolbarOffset.top;
          }

          $_shownDropdown.css({
            'top': keyOffset.top + 32 + 'px',
            'left': keyOffset.left + 'px',
            'display': 'block'
          });
        }
      },
      onDropdownShown: function (data) {
        $_shownDropdown = data.dropdown;
      }
    };
  };
})(jQuery);