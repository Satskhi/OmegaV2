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

// MENU
var Omega = (function () {
    var models = {
        'tab': `<div id="omega-menu-button" class="header-panel-button omega-tab">
                    <span class="icon-info omega-menu-button-info"><i class="icon" style="width: 27px;height: 27px;background: url(https://i.imgur.com/iYdzGOJ.gif); background-size: 27px 27px;"></i></span>
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
							<div class="panel">
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
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(215)">
    <img src="https://i.imgur.com/eh2VJbv.gif" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(216)">
    <img src="https://i.imgur.com/WSnlRjs.gif" width="19px">
</label>
<label>
    <input type="radio" name="badgeOmegaMod" onchange="badgeMod(217)">
    <img src="https://i.imgur.com/lLqiUUB.gif" width="19px">
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
var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
    }
}
var ThemeOmega = document.getElementById('omega-css');
if (ThemeOmega === null) {
    var ThemeOmega = document.createElement('link');
    ThemeOmega.setAttribute('id', 'Omega-Theme');
    ThemeOmega.setAttribute('rel', 'stylesheet');
    ThemeOmega.setAttribute('type', 'text/css');
    document.head.appendChild(ThemeOmega);
} else {
    ThemeOmega.remove();
};
var BadgeOmega = document.getElementById('omega-css');
if (BadgeOmega === null) {
    var BadgeOmega = document.createElement('link');
    BadgeOmega.setAttribute('id', 'Omega-Badge');
    BadgeOmega.setAttribute('rel', 'stylesheet');
    BadgeOmega.setAttribute('type', 'text/css');
    document.head.appendChild(BadgeOmega);
} else {
    BadgeOmega.remove();
};

function Themerory() {
    if (omegaTheme.rory === true) {
        $('.omega-theme-toggle-rory').children('.omega-menu-icon').hide();
        omegaTheme.rory = false;
        document.getElementById('Omega-Theme').removeAttribute('href');
        console.info('[Omega] Disabled Rory Theme.');
    } else {
        $('.omega-theme-toggle-rory').children('.omega-menu-icon').show();
        $('.omega-theme-toggle-edt').children('.omega-menu-icon').hide();
        omegaTheme.edt = false;
        omegaTheme.rory = true;
        document.getElementById('Omega-Theme').setAttribute('href', 'https://rawgit.com/SatskhiPlug/SatskhiPlug/master/css.css');
        console.info('[Omega] Enabled Rory Theme.');
    }
}

function Themeedt() {
    if (omegaTheme.edt === true) {
        $('.omega-theme-toggle-edt').children('.omega-menu-icon').hide();
        omegaTheme.edt = false;
        document.getElementById('Omega-Theme').removeAttribute('href');
        console.info('[Omega] Disabled Edt Theme.');
    } else {
        $('.omega-theme-toggle-edt').children('.omega-menu-icon').show();
        $('.omega-theme-toggle-rory').children('.omega-menu-icon').hide();
        omegaTheme.rory = false;
        omegaTheme.edt = true;
        document.getElementById('Omega-Theme').setAttribute('href', 'https://rawgit.com/TheStrangerGuy/EDT/master/EDT.css');
        console.info('[Omega] Enabled Edt Theme.');
    }
}

function badgespecial() {
    if (omegaTheme.special === true) {
        $('.omega-theme-toggle-special').children('.omega-menu-icon').hide();
        omegaTheme.special = false;
        document.getElementById('Omega-Badge').removeAttribute('href');
        console.info('[Omega] Disabled Badge Special.');
    } else {
        $('.omega-theme-toggle-special').children('.omega-menu-icon').show();
        omegaTheme.special = true;
        document.getElementById('Omega-Badge').setAttribute('href', 'https://rawgit.com/Satskhi/OmegaV2/master/css/css.css');
        console.info('[Omega] Enabled Badge Special.');
    }
}
//Ty _ĐⱧ111_ <3
function autojoin() {
    if (omegaTheme.autojoin === true) {
        $('.omega-theme-toggle-autojoin').children('.omega-menu-icon').hide();
        omegaTheme.autojoin = false;
        console.info('[Omega] Disabled AutoJoin.');
    } else {
        $('.omega-theme-toggle-autojoin').children('.omega-menu-icon').show();
        omegaTheme.autojoin = true;
        console.info('[Omega] Enabled AutoJoin.');
        var e = API.getWaitList().length;
        var t = API.getTimeRemaining();
        var n = API.getWaitListPosition(user);
        if (n > -1) {
            //API.chatLog("You are currently in the queue, the bot will add you back into the queue if you leave it", false);
            cancelDetect();
            return
        }
        if (e < 50) {
            API.djJoin();
            add1 = setTimeout(function() {
                if (API.getWaitListPosition(user) > -1) {
                    //API.chatLog("Queue had a space free, you were added", false);
                    cancelDetect();
                    return
                }
            }, 1e3)
        }
        API.on(API.WAIT_LIST_UPDATE, singleShotJoin);
        console.log("join in progress1");
        add2 = setTimeout(function() {
            if (API.getTimeRemaining() < 3) {
                console.log("join in progress2");
                add3 = setInterval(function() {
                    console.log("join in progress3");
                    API.djJoin();
                    t = API.getTimeRemaining();
                    n = API.getWaitListPosition(user);
                    if (n > -1 || t > 3) {
                        add4 = setTimeout(function() {
                            if (n > -1) {
                                //API.chatLog("Join method 2 successful", false);
                                cancelDetect();
                                return
                            } else if (t > 3) {
                                //console.log("Join method 2 failed, attempting again");
                                cancelFailed();
                                return
                            }
                        }, 1e3)
                    }
                }, 40)
            } else {
                console.log("song was skipped, trying again");
                failed();
            }
        }, t * 1e3 - 1500)
    }

    function failed() {
        setTimeout(function() {
            autojoin();
        }, 5e3)
    }
    function cancelDetect() {
        API.off(API.WAIT_LIST_UPDATE, singleShotJoin);
        API.off(API.ADVANCE, djChange);
        clearInterval(add1);
        clearInterval(add2);
        clearInterval(add3);
        clearInterval(add4);
        detect();
    }

    function cancelFailed() {
        API.off(API.WAIT_LIST_UPDATE, singleShotJoin);
        API.off(API.ADVANCE, djChange);
        clearInterval(add1);
        clearInterval(add2);
        clearInterval(add3);
        clearInterval(add4);
        failed();
    }

    function detect() {
        API.on(API.ADVANCE, djChange)
    }
    
    function cancel() {
        API.off(API.WAIT_LIST_UPDATE, singleShotJoin);
        API.off(API.ADVANCE, djChange);
        clearInterval(add1);
        clearInterval(add2);
        clearInterval(add3);
        clearInterval(add4);
        failed();      
    }

    function singleShotJoin() {
        console.log("singleshot running");
        waitingCount = API.getWaitList().length;
        if (waitingCount < 50) {
            API.djJoin()
        }
        setTimeout(function() {
            if (API.getWaitListPosition(user) > -1) {
                cancel();
                //API.chatLog("Join method 1 successful", false);
                detect();
            }
        }, 5e3)
    }

    function djChange() {
        var t = API.getWaitListPosition(user);
        if (t == -1) {
            setTimeout(function() {
                console.log("detected not in queue, will now run autojoin()");
                autojoin();
            }, 5e3)
        }
    }

    var add1, add2, add3, add4;
    var user = API.getUser().id;
    API.on(API.CHAT_COMMAND)
}
//Ty _ĐⱧ111_ <3
var wooting = true;
function wootSong() {
	if(wooting) {
		$('#woot').click();
	}
}
function callback(obj) {
	wootSong();
}
function autowoot() {
    if (omegaTheme.autowoot === true) {
        $('.omega-theme-toggle-autowoot').children('.omega-menu-icon').hide();
        omegaTheme.autowoot = false;
		API.off(API.ADVANCE, callback);
		wootSong();
		console.info('[Omega] Disabled autowoot.');
    } else {
        $('.omega-theme-toggle-autowoot').children('.omega-menu-icon').show();
        omegaTheme.autowoot = true;
		API.on(API.ADVANCE, callback);
		wootSong();
        console.info('[Omega] Enabled autowoot.');		
    }
}
function download() {
    if (omegaTheme.downloadOmega === true) {
        $('#OmegaDownload').remove();
        console.info('[Omega] Download Button Disabled');
        omegaTheme.downloadOmega = false;
        $('.omega-theme-toggle-downloadmp3').children('.omega-menu-icon').hide();
    } else {
        $('#vote').append('<div id="OmegaDownload" class="crowd-response" onclick="downloadmp3();"><div class="top"><i class="icon icon-woot-disabled" style="-ms-transform: rotate(180deg); /* IE 9 */ -webkit-transform: rotate(180deg); /* Chrome, Safari, Opera */ transform: rotate(180deg);"></i><span class="label">Mp3</span></div><div class="bottom"><span class="value">Download</span></div></div>');
        console.info('[Omega] Download Button Enabled');
        omegaTheme.downloadOmega = true;
        $('.omega-theme-toggle-downloadmp3').children('.omega-menu-icon').show();
    }
}							
function downloadmp3() {
    var uri = "https://youtube.com/watch?v=" + API.getMedia().cid;
    window.open('https://www.youtubeinmp3.com/fetch/?video=' + uri);
}

function badgeMod(bm){
	var user = API.getUser().id; 
	if (bm==1) {
		$('#badgeOmegaMod').remove()
	} else if (bm==2) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(1).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==3) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(2).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==4) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(3).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==5) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(4).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==6) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(5).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==7) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(6).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==8) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(7).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==9) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(8).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==10) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(9).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==11) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(10).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==12) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(11).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==13) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(12).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==14) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(13).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==15) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(14).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==16) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(15).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==17) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(16).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==18) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(17).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==19) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(18).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==20) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(19).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==21) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(20).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==22) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(21).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==23) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(22).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==24) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(23).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==25) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(24).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==26) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(25).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==27) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(26).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==28) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(27).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==29) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(28).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==30) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(29).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==31) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(30).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==32) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(31).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==33) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(32).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==34) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(33).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==35) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(34).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==36) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(35).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==37) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(36).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==38) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(37).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==39) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(38).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==40) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(39).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==41) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(40).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==42) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(41).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==43) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(42).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==44) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(43).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==45) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(44).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==46) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(45).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==47) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(46).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==48) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(47).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==49) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(48).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==50) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(49).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==51) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(50).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==52) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(51).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==53) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(52).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==54) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(53).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==55) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(54).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==56) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(55).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==57) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(56).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==58) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(57).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==59) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(58).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==60) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(59).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==61) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(60).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==62) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(61).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==63) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(62).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==64) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(63).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==65) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(64).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==66) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(65).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==67) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(66).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==68) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(67).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==69) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(68).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==70) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(69).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==71) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(70).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==72) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(71).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==73) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(72).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==74) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(73).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==75) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(74).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==76) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(75).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==77) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(76).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==78) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(77).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==79) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(78).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==80) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(79).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==81) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(80).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==82) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(81).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==83) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(82).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==84) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(83).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==85) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(84).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==86) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(85).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==87) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(86).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==88) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(87).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==89) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(88).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==90) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(89).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==91) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(90).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==92) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(91).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==93) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(92).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==94) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(93).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==95) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(94).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==96) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(95).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==97) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(96).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==98) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(97).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==99) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(98).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==100) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(99).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==101) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(101).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==102) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(102).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==103) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(103).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==104) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(104).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==105) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(105).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==106) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(106).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==107) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(107).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==108) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(109).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==109) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(108).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==110) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(109).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==111) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(110).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==112) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(111).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==113) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(112).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==114) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(113).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==115) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(114).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==116) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(115).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==117) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(116).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==118) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(117).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==119) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(118).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==120) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(119).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==121) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(120).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==122) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(121).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==123) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(122).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==124) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(123).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==125) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(124).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==126) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(125).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==127) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(126).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==128) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(127).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==129) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(128).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==130) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(129).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==131) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(130).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==132) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(131).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==133) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(132).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==134) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(133).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==135) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(134).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==136) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(135).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==137) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(136).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==138) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(137).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==139) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(138).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==140) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(139).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==141) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(140).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==142) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(141).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==143) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(142).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==144) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(143).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==145) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(144).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==146) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(145).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==147) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(146).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==148) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(147).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==149) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(148).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==150) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(149).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==51) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(150).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==152) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(151).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==153) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(152).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==154) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(153).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==155) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(154).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==156) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(155).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==157) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(156).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==158) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(157).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==159) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(158).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==160) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(159).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==161) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(160).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==162) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(161).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==163) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(162).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==164) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(163).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==165) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(164).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==166) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(165).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==167) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(166).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==168) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(167).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==169) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(168).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==170) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(169).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==171) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(170).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==172) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(171).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==173) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(172).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==174) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(173).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==175) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(174).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==176) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(175).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==177) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(176).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==178) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(177).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==179) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(178).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==180) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(179).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==181) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(180).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==182) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(181).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==183) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(182).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==184) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(183).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==185) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(184).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==186) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(185).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==187) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(186).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==188) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(187).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==189) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(188).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==190) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(189).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==191) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(190).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==192) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(191).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==193) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(192).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==194) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(193).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==195) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(194).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==196) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(195).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==197) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(196).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==198) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(197).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==199) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(198).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==200) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(199).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==201) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(200).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==202) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(201).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==203) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(202).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==204) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(203).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==205) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(204).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==206) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(205).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==207) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(206).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==208) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(207).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==209) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(208).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==210) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(209).png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==211) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(210).gif') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==212) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(211).gif') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else if (bm==213) {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(212).gif') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	} else {
		$('#badgeOmegaMod').remove()
		$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rawgit.com/Satskhi/OmegaV2/master/badge/(213).gif') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
	}
};
