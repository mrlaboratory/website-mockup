$(document).ready(function() {
    // Change iFrame on a Button Click Event
        $(".button").click(function(event){
            $("iframe").attr('src', $( '#url' ).val());
        });
    });

    $(document).ready(function() {
        var a = 3;
        $('.desktop,.laptop,.tablet,.mobile').draggable({
       start: function(event, ui) { $(this).css("z-index", a++); }
    });
        $('.display div').click(function() {
            $(this).addClass('top').removeClass('bottom');
            $(this).siblings().removeClass('top').addClass('bottom');
            $(this).css("z-index", a++);
    
        });
    });


        function getUrlVars() {
            var vars = {};
            var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
                vars[key] = value;
            });
            return vars;
        }
        var first = getUrlVars()["url"]; 
        var first = decodeURIComponent(first);
        var first = first.replace(/\#$/, '');
        
        if(first === "undefined") {
          // don't do anything.
        }
        else {
        //  take the url variable and update the iframes and input field
          $("iframe").attr('src',(first));
          $('#url').attr('value',(first));
        }
        </script>
        <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
        <!-- Place this tag after the last +1 button tag. -->
        <script type='text/javascript'>
          window.___gcfg = {lang: 'en-GB'};
        
          (function() {
            var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
            po.src = 'https://apis.google.com/js/plusone.js';
            var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
          })();