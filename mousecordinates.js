function doSomething(e) {
        var posx = 0;
        var posy = 0;
        if (!e) var e = window.event;
        if (e.pageX || e.pageY)     {
            posx = e.pageX;
            posy = e.pageY;
        }
        else if (e.clientX || e.clientY)     {
            posx = e.clientX + document.body.scrollLeft
                + document.documentElement.scrollLeft;
            posy = e.clientY + document.body.scrollTop
                + document.documentElement.scrollTop;
        }
        alert(posx + ", " + posy);
    }
	

function CloseBrowser()
	{
      this.enterFullscreen();
      this.attachKeyboard({
      backspace: function() {},
      return: function() {}
    });
       window.addEventListener("keyup", function(e){ if(e.keyCode == 13) history.back(); }, false);
    }