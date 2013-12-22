(function() {
	/*
	 * Bloody Skins
	 */
	var skins = document.getElementById("custom_style");
	skins.parentNode.removeChild(skins);


	/*
	 * Headroom
	 */
	var headroom = new Headroom(document.querySelector(".WB_global_nav"));
	headroom.init();


	/*
	 * Keyboard Shortcut
	 */
	// `g + h` Home Page
	Mousetrap.bind('g+h', function() { window.open("http://weibo.com", "_self"); });

	// `g + p` Profile Page
	Mousetrap.bind('g+p', function() { window.open("http://weibo.com/profile", "_self"); });

	// `g + m` Message Page
	Mousetrap.bind('g+m', function() { window.open("http://weibo.com/messages", "_self"); });

	// `g + a` Mention Page
	Mousetrap.bind('g+a', function() { window.open("http://weibo.com/at/weibo", "_self"); });

	// `g + c` Profile Page
	Mousetrap.bind('g+c', function() { window.open("http://weibo.com/comment", "_self"); });

	// `.` Load New Feed
	Mousetrap.bind('.', function() { 
	  document.getElementById("pl_content_homeFeed").getElementsByClassName("notes").click(); 
	});
}());
