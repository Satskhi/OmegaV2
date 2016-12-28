function userIdBadge() {
    var user = API.getUser().id; 
	console.log(user);
	$("<style id='badgeOmegaMod' type='text/css'> [data-cid^="+'(user)'+"] .badge .bdg.g, #user-rollover.id-"+'(user)'+" .badge-box .bdg {background-image: url(https://rcs.radiant.dj/img/plugdj/badges/bdg-zoob01.png);background-size: 30px;} </style>").appendTo("head");
}
