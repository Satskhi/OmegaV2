var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
  }
}
var ThemeOmega = document.getElementById('omega-css');
	if (ThemeOmega === null) {
		var ThemeOmega = document.createElement('link'); 
			ThemeOmega.setAttribute('id','Omega-Theme');
			ThemeOmega.setAttribute('rel','stylesheet');
			ThemeOmega.setAttribute('type','text/css');
			document.head.appendChild(ThemeOmega);
	} else{
			ThemeOmega.remove();
	};
var BadgeOmega = document.getElementById('omega-css');
	if (BadgeOmega === null) {
		var BadgeOmega = document.createElement('link'); 
			BadgeOmega.setAttribute('id','Omega-Badge');
			BadgeOmega.setAttribute('rel','stylesheet');
			BadgeOmega.setAttribute('type','text/css');
			document.head.appendChild(BadgeOmega);
	} else{
			BadgeOmega.remove();
	};

function badge(b){
if (b==1) {
	document.getElementById('Omega-Badge').setAttribute('href','https://rawgit.com/Satskhi/PlugCssSatskhi/master/css/user.css');
} else {
	document.getElementById('Omega-Badge').removeAttribute('href');
}};

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
		document.getElementById('Omega-Theme').setAttribute('href','https://rawgit.com/SatskhiPlug/SatskhiPlug/master/css.css');
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
		document.getElementById('Omega-Theme').setAttribute('href','https://rawgit.com/TheStrangerGuy/EDT/master/EDT.css');
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
		document.getElementById('Omega-Badge').setAttribute('href','https://rawgit.com/Satskhi/PlugCssSatskhi/master/css/user.css');
        console.info('[Omega] Enabled Badge Special.');
    }
}
function autojoin() {
    if (omegaTheme.autojoin === true) {
        $('.omega-theme-toggle-autojoin').children('.omega-menu-icon').hide();
        omegaTheme.autojoin = false;
        console.info('[Omega] Disabled AutoJoin.');
    } else {
        $('.omega-theme-toggle-autojoin').children('.omega-menu-icon').show();
        omegaTheme.autojoin = true;
        console.info('[Omega] Enabled AutoJoin.');
		setTimeout(function(){
			if (waitingCount < 50) {
				API.djJoin()
			}, 5e3);
		
    }	
}
