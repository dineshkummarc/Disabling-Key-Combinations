<script type="text/javascript">
             var alterffourflag=0;
             var lastkey=0;
             var refreshflag=0;
             document.onkeydown = function ( event ) 
             {
                event = event || window.event;
                return window_onkeydown();
             }
       </script>
  
  <script for=window event=onunload>
       ie7=navigator.userAgent.toLowerCase().indexOf('msie 7')!=-1;
    if(ie7==1)
    {
           if(window.document.referrer.toString()=="")//to detect popup window in the IE7
           {
               return;
           }
                      
           var offset=0.0;
           var width=0.0;
           if( document.documentElement && ( document.documentElement.clientWidth ))
           {
                                    //IE 6+ in 'standards compliant mode'
                                    width = document.documentElement.clientWidth;
                                   
                        }
                        else if( document.body && ( document.body.offsetWidth))
                        {
                                    width=document.body.offsetWidth;
                                  
                        }
           
              offset=18500/screen.width;
           var diff =width-offset;
           if (refreshflag!=1 && width!=0 && window.event.clientY < 0 && (window.event.clientX > (width - offset))||alterffourflag==1) 
         {
            
             
              if( window.opener == null)
          { 
           if (window.XMLHttpRequest) 
              {
                   req=new XMLHttpRequest();
                   req.open("GET", "../ping.aspx" + "?t=" + new Date(), false);//page which removes session information
                req.send(null);
              }
              else
              {     
               if (window.ActiveXObject) 
               {
                req = new ActiveXObject("Microsoft.XMLHTTP");
                req.open("GET", "../ping.aspx" + "?t=" + new Date(), false);
                req.send(null);
               }
              }
          }
              }
           refreshflag=0;    
        }
        else// IE6
        {
        
        if (self.screenTop > 10000 && event.clientY < 0 && event.clientX < 0)
        {
           
            if( window.opener == null)
            { 
            
             if (window.XMLHttpRequest) 
                {
                    req=new XMLHttpRequest();
                    req.open("GET", "../ping.aspx" + "?t=" + new Date(), false);
              req.send(null);
                }
                else
                {     
                 if (window.ActiveXObject) 
                 {
                  req = new ActiveXObject("Microsoft.XMLHTTP");
                  req.open("GET", "../ping.aspx" + "?t=" + new Date(), false);
                  req.send(null);
                 }
                }
            }
           }
        } 
          
  </script>
<script language=javascript type="text/javascript" >
    function window_onkeydown()
    {
      var keynum
   var numcheck
   e=window.event;
   keynum = e.keyCode;
         if(lastkey==18 && keynum==115)//||(lastkey==17 && keynum==87))
   { 
    alterffourflag=1;
   }
   if(keynum==116)
            {
                refreshflag=1;
            }   
   lastkey=keynum;
 }
</script>