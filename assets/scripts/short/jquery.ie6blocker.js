

var IE8 = (navigator.userAgent.indexOf("MSIE 8") >= 0) ? true : false;
if (IE8) {

    $(function () {
        alert(0);
        $("<div>")
			.css({
			    'position': 'absolute',
			    'top': '0px',
			    'left': '0px',
			    backgroundColor: 'black',
			    'opacity': '0.75',
			    'width': '100%',
			    'height': $(window).height(),
			    zIndex: 5000
			})
			.appendTo("body");

        $("<div><img src='no-ie6.png' alt='' style='float: left;'/><p><br /><strong>Sorry! This page doesn't support Internet Explorer 6.</strong><br /><br />If you'd like to read our content please <a href='http://getfirefox.org'>upgrade your browser</a> or <a href='http://feeds.feedburner.com/CssTricks'>subscribe to our RSS feed</a>.</p>")
			.css({
			    backgroundColor: 'white',
			    'top': '50%',
			    'left': '50%',
			    marginLeft: -210,
			    marginTop: -100,
			    width: 410,
			    paddingRight: 10,
			    height: 200,
			    'position': 'absolute',
			    zIndex: 6000
			})
			.appendTo("body");
    });
}

 