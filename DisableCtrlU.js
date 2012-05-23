var isnn, isie
if (navigator.appName=='Microsoft Internet Explorer')
{ isie = true }
if (navigator.appName=='Netscape')
{ isnn = true }

function key (k)
 {
 if(isie)
   {
    if (event.Keycode==16 || event.Keycode==17 || event.Keycode==18 || event.Keycode==93 || event.Keycode==116 || event.Keycode==82)
       { return False;}
   }

 if(isnn)
   { return false; }
 }
if (document.layers)window.captureEvents(Event.KEYPRESS);
if (document.layers)window.captureEvents(Event.MOUSEDOWN);
if (document.layers)window.captureEvents(Event.MOUSEUP);
document.onkeydown = key;
document.onmousedown = right;
document.onmouseup = right;
window.document.layers = right;
