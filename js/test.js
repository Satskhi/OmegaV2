<div class="cm user-action">
	<div class="badge-box">
		<i class="icon icon-user-white"></i>
	</div>
	<div class="msg">
		<div class="from">
			<span class="un">MrsRaptorzz</span>
			<span class="timestamp" style="display: inline;">13:52</span>
		</div>
		<div class="text cid-undefined">changed their username to Izuko</div>
	</div>
</div>

var user = API.getUser().id; 
	console.log(user);
	$("<style id='badgeOmegaMod' type='text/css'> [data-cid^='"+(user)+"-'] .badge-box .bdg, #user-rollover.id-"+(user)+" .badge-box .bdg { border-radius: 5px !important; background-image: url('https://rcs.radiant.dj/img/plugdj/badges/bdg-ba.png') !important; background-repeat: no-repeat !important; background-size: 30px !important; background-position: center;} </style>").appendTo("head");
