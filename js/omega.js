// Omega Styles
var omegaTheme = $.extend({
   	rory: false,
    edt: false,
	special: false,
	autojoin: false,
	autowoot: false,
	downloadOmega: true,
});
var CssOmega = document.getElementById('rcs-appright-button');
if (CssOmega === null) {
    var CssOmega = $('head').append('<link href="https://rawgit.com/Satskhi/ScriptTest/master/omegatest/menuwithoutrcs.css" rel="stylesheet" type="text/css">');
} else {
        var CssOmega = $('head').append('<link href="https://rawgit.com/Satskhi/ScriptTest/master/omegatest/menuwithrcs.css" rel="stylesheet" type="text/css">');
};
$('head').append('<link href="https://rawgit.com/Satskhi/OmegaV2/master/css/omega.css" rel="stylesheet" type="text/css">');
$('head').append('<script type="text/javascript" src="https://rawgit.com/Satskhi/OmegaV2/master/js/script.js"></script>');

// MENU
var Omega = (function () {
    var models = {
        'tab': `<div id="omega-menu-button" class="header-panel-button omega-tab">
                    <span class="icon-info omega-menu-button-info"><i class="icon" style="width: 26px;height: 27px;background: url(https://i.imgur.com/TqvnXhO.png);"></i></span>
                </div>`,
        menu: `<div id="omega-menu" style="display:none">
                <div class="omega-menu-header list-header"><span class="title">Omega Settings</span></div>
                <div class="list staff jspScrollable" style="top: 40px !important; overflow: hidden; padding: 0px; outline: none; width: 345px; height: ${$(document).height() - 148}px" tabindex="0">
                    <div class="jspContainer" style="overflow: scroll; width: 340px; top:5px; height:${$(document).height() - 153}px">
                        <div class="jspPane" style="padding: 0px; top: 0px; left: 0px; width: 331px;">
							<!-- -->
							<button class="accordion">Auto-Woot</button>
							<div class="panel">
							<div class="omega-theme-toggle-downloadmp3 omega-menu-item" onclick="download()">
								<i class="icon icon-check-blue omega-menu-icon"></i>
									<span class="name omega-menu-span">Download Button</span>
							</div>
							<div class="user omega-theme-toggle-autojoin omega-menu-item" onclick="autojoin()">
									<i class="icon icon-check-blue omega-menu-icon"></i>
									<span class="name omega-menu-span">AutoJoin</span>
								</div>
							<div class="user omega-theme-toggle-autowoot omega-menu-item" onclick="autowoot()">
									<i class="icon icon-check-blue omega-menu-icon"></i>
									<span class="name omega-menu-span">AutoWoot</span>
								</div>
							</div>
							<button class="accordion">Theme</button>
							<div class="panel">
								<div class="user omega-theme-toggle-rory omega-menu-item" onclick="Themerory()">
									<i class="icon icon-check-blue omega-menu-icon"></i>
									<span class="name omega-menu-span">Rory</span>
								</div>
								<div class="user omega-theme-toggle-edt omega-menu-item" onclick="Themeedt()">
									<i class="icon icon-check-blue omega-menu-icon"></i>
									<span class="name omega-menu-span">Edt</span>
								</div>
							</div>
							
							<button class="accordion">Badge</button>
							<div class="panel">
							<div class="user omega-theme-toggle-special omega-menu-item" onclick="badgespecial()">
									<i class="icon icon-check-blue omega-menu-icon"></i>
									<span class="name omega-menu-span">Special</span>
								</div>
							</div>
							<!-- -->
                        </div>
                    </div>
                </div>
            </div>`
    };
	
    $('#header-panel-bar').append(models.tab);
    $('#header-panel-bar').click(function () {
        setTimeout(function () {
            if (!$('#omega-menu-button').hasClass('selected')) {
                $('#omega-menu').hide();
            }
        })
    });
    $('#omega-menu-button').click(function () {
        if (!$('#omega-menu-button').hasClass('selected')) {
            $(".header-panel-button").removeClass('selected')
            $('#omega-menu-button').addClass('selected');
            $('.app-right').children().hide();
            $('#omega-menu').show();
        }
    });

    $('.app-right').append(models.menu);

    API.on(API.CHAT, function (msg) {
        // Omega Developer
        if ([4405644, 4453527, 5280078].indexOf(msg.uid) !== -1) {
            $($($('div[data-cid^="' + msg.cid + '"]').addClass('omega-developer')).children('.msg')).children('.from').prepend('<i title="Omega Developer" class="icon"style="width:16px;height:16px;background: url(\'https://i.imgur.com/aJrMhVY.png\')">')
        }
        // Omega Beta
        if ([4453527, 3469419].indexOf(msg.uid) !== -1) {
            $($($('div[data-cid^="' + msg.cid + '"]').addClass('omega-vip')).children('.msg')).children('.from').prepend('<i title="Omega Beta" class="icon"style="width:16px;height:16px;background: url(\'https://i.imgur.com/3yKZCT2.png\')">')
        }
        // Omega Vip
        if ([4453527, 6081851].indexOf(msg.uid) !== -1) {
            $($($('div[data-cid^="' + msg.cid + '"]').addClass('omega-vip')).children('.msg')).children('.from').prepend('<i title="Omega Vip" class="icon"style="width:16px;height:16px;background: url(\'https://i.imgur.com/i08kSvq.png\')">')
        }
        // Supporter
        if ([4453527, 5280078].indexOf(msg.uid) !== -1) {
            $($($('div[data-cid^="' + msg.cid + '"]').addClass('omega-vip')).children('.msg')).children('.from').prepend('<i title="Supporter" class="icon"style="width:16px;height:16px;background: url(\'https://i.imgur.com/f1GSYq9.png\')">')
        }
    });
	
})();
