(function (w, $) {
    function ExtensionDemo(options) {
        this.options = $.extend({
            $el: $('.demo'),
        }, options);

        this.init(this.options);
    }

    ExtensionDemo.prototype = {
        init: function (options) {
            options.$el.on('click', function () {
                Dcat.success($(this).text());
            });

            console.log('Done.');
        },
    };

    $.fn.extensionDemo = function (options) {
        options = options || {};
        options.$el = $(this);

        return new ExtensionDemo(options);
    };
})(window, jQuery);


function IsMobile()
{
    if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent.toLowerCase()))
    {
        return true;
    }
    return false;
}

function _P(url,w,h,t)
{
    layer.open({ type: 2, content: url, area: [w+'px', h+'px'], title: t })
}

function disablescroll() {
    $("body").addClass("hdbody");
}

function enablescroll() {
    $("body").removeClass("hdbody");
}

function openMobile(_url, title) {
    var _mobileWidth = '320px';
    var _mobileHeight = '600px';
    disablescroll();
    layer.open({
        type: 2,
        title: title,
        area: [_mobileWidth, _mobileHeight],
        fix: false, //不固定
        maxmin: true,
        content: _url,
        cancel: function (index) {
            enablescroll();
        }
    });
}

function openPC(_url, title, w, h) {
    var _PcWidth = "900px";
    var _PcHeight = "600px";

    if (w !== undefined)
    {
        _PcWidth = w;
    }

    if (h !== undefined) {
        _PcHeight = h;
    }

    disablescroll();
    layer.open({
        type: 2,
        title: title,
        area: [_PcWidth, _PcHeight],
        fix: false, //不固定
        maxmin: true,
        content: _url,
        cancel: function (index) {
            enablescroll();
        }
    });
}

function openPC2(_url, title) {
    openPC(_url, title, '1050px', '700px');
}
