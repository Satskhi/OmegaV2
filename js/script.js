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

function badge(b) {
    if (b == 1) {
        document.getElementById('Omega-Badge').setAttribute('href', 'https://rawgit.com/Satskhi/PlugCssSatskhi/master/css/user.css');
    } else {
        document.getElementById('Omega-Badge').removeAttribute('href');
    }
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
        document.getElementById('Omega-Badge').setAttribute('href', 'https://rawgit.com/Satskhi/PlugCssSatskhi/master/css/user.css');
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
            API.chatLog("You are currently in the queue, the bot will add you back into the queue if you leave it", false);
            cancelDetect();
            return
        }
        if (e < 50) {
            API.djJoin();
            add1 = setTimeout(function() {
                if (API.getWaitListPosition(user) > -1) {
                    API.chatLog("Queue had a space free, you were added", false);
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
                                API.chatLog("Join method 2 successful", false);
                                cancelDetect();
                                return
                            } else if (t > 3) {
                                console.log("Join method 2 failed, attempting again");
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
                API.chatLog("Join method 1 successful", false);
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

function autowoot() {
    if (omegaTheme.autowoot === true) {
        $('.omega-theme-toggle-autowoot').children('.omega-menu-icon').hide();
        omegaTheme.autowoot = false;
        console.info('[Omega] Disabled autowoot.');
		API.off(API.ADVANCE, callback);
    } else {
        $('.omega-theme-toggle-autowoot').children('.omega-menu-icon').show();
        omegaTheme.autowoot = true;
        console.info('[Omega] Enabled autowoot.');
		API.on(API.ADVANCE, callback);		
    }
}

function callback(obj) {
	setTimeout(function(){
		$('#woot').click(); 
	}, 1000);
}
