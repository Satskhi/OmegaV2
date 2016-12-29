// Omega Styles
var omegaTheme = $.extend({
   	rory: false,
    edt: false,
	special: false,
	autojoin: false,
	autowoot: false,
	downloadOmega: false,
});
var versionMsg = "It's alive!";
var alertMsg = "This is a BETA build." + "<br>" +  "It will buggy and likely missing a literal ton of features.";
var startUpMsg = versionMsg + "<br>" + "<br>" + "Welcome to OmegaWootTheme" + "<br>";

$('#chat-messages').append('<center style=color:#A77DC2 class="cm omega-greet">' +
    [startUpMsg, alertMsg].join('<br>') + '</center>');

var CssOmega = document.getElementById('rcs-appright-button');
if (CssOmega === null) {
    var CssOmega = $('head').append('<link href="https://rawgit.com/Satskhi/ScriptTest/master/omegatest/menuwithoutrcs.css" rel="stylesheet" type="text/css">');
} else {
        var CssOmega = $('head').append('<link href="https://rawgit.com/Satskhi/ScriptTest/master/omegatest/menuwithrcs.css" rel="stylesheet" type="text/css">');
};
$('head').append('<link href="https://rawgit.com/Satskhi/OmegaV2/master/css/omega.css" rel="stylesheet" type="text/css">');
$('head').append('<script type="text/javascript" src="https://rawgit.com/Satskhi/OmegaV2/master/js/script.js"></script>');
$('head').append('<script type="text/javascript" src="https://rawgit.com/Satskhi/OmegaV2/master/js/badge.js"></script>');

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
							<div class="omega-theme-toggle-downloadmp3 omega-menu-item tooltipOmega" onclick="download()">
								<i class="icon icon-check-blue omega-menu-icon"></i>
									<span class="name omega-menu-span">Download Button</span>
							<span class="tooltiptextOmega">Only works with YouTube</span>
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
								<div class="user omega-theme-toggle-special omega-menu-item" onclick="badgespecial()">
									<i class="icon icon-check-blue omega-menu-icon"></i>
									<span class="name omega-menu-span">Special Badges</span>
								</div>
							</div>
							
							<button class="accordion">Badge</button>
							<div class="panel show">
<br>
								<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(1)">
    <img src="https://i.imgur.com/o9hAVCH.png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(2)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(1).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(3)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(2).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(4)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(3).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(5)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(4).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(6)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(5).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(7)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(6).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(8)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(7).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(9)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(8).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(10)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(9).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(11)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(10).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(12)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(11).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(13)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(12).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(14)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(13).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(15)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(14).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(16)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(15).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(17)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(16).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(18)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(17).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(19)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(18).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(20)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(19).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(21)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(20).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(22)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(21).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(23)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(22).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(24)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(23).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(25)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(24).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(26)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(25).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(27)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(26).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(28)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(27).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(29)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(28).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(30)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(29).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(31)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(30).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(32)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(31).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(33)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(32).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(34)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(33).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(35)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(34).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(36)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(35).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(37)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(36).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(38)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(37).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(39)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(38).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(40)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(39).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(41)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(40).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(42)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(41).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(43)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(42).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(44)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(43).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(45)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(44).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(46)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(45).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(47)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(46).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(48)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(47).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(49)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(48).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(50)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(49).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(51)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(50).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(52)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(51).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(53)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(52).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(54)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(53).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(55)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(54).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(56)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(55).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(57)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(56).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(58)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(57).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(59)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(58).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(60)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(59).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(61)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(60).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(62)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(61).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(63)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(62).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(64)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(63).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(65)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(64).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(66)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(65).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(67)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(66).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(68)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(67).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(69)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(68).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(70)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(69).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(71)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(70).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(72)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(71).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(73)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(72).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(74)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(73).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(75)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(74).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(76)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(75).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(77)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(76).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(78)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(77).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(79)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(78).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(80)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(79).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(81)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(80).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(82)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(81).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(83)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(82).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(84)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(83).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(85)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(84).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(86)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(85).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(87)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(86).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(88)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(87).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(89)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(88).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(90)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(89).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(91)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(90).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(92)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(91).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(93)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(92).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(94)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(93).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(95)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(94).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(96)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(95).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(97)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(96).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(98)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(97).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(99)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(98).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(100)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(99).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(101)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(100).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(102)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(101).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(103)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(102).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(104)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(103).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(105)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(104).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(106)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(105).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(107)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(106).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(108)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(107).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(109)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(108).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(110)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(109).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(111)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(110).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(112)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(111).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(113)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(112).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(114)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(113).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(115)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(114).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(116)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(115).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(117)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(116).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(118)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(117).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(119)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(118).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(120)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(119).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(121)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(120).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(122)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(121).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(123)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(122).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(124)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(123).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(125)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(124).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(126)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(125).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(127)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(126).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(128)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(127).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(129)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(128).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(130)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(129).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(131)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(130).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(132)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(131).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(133)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(132).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(134)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(133).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(135)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(134).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(136)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(135).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(137)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(136).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(138)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(137).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(139)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(138).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(140)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(139).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(141)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(140).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(142)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(141).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(143)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(142).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(144)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(143).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(145)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(144).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(146)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(145).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(147)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(146).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(148)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(147).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(149)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(148).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(150)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(149).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(151)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(150).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(152)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(151).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(153)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(152).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(154)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(153).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(155)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(154).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(156)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(155).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(157)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(156).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(158)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(157).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(159)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(158).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(160)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(159).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(161)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(160).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(162)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(161).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(163)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(162).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(164)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(163).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(165)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(164).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(166)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(165).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(167)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(166).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(168)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(167).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(169)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(168).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(170)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(169).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(171)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(170).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(172)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(171).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(173)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(172).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(174)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(173).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(175)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(174).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(176)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(175).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(177)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(176).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(178)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(177).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(179)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(178).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(180)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(179).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(181)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(180).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(182)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(181).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(183)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(182).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(184)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(183).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(185)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(184).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(186)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(185).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(187)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(186).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(188)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(187).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(189)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(188).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(190)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(189).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(191)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(190).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(192)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(191).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(193)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(192).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(194)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(193).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(195)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(194).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(196)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(195).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(197)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(196).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(198)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(197).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(199)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(198).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(200)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(199).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(201)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(200).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(202)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(201).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(203)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(202).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(204)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(203).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(205)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(204).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(206)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(205).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(207)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(206).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(208)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(207).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(209)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(208).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(210)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(209).png" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(211)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(210).gif" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(212)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(211).gif" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(213)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(212).gif" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(214)">
    <img src="https://rawgit.com/Satskhi/OmegaV2/master/badge/(213).gif" width="19px">
</label>
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
