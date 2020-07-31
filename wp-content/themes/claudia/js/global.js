(function($) {


    var $header = $('header'),
        $menuButton = $header.find('#menu-toggle'),
        $menuMain = $header.find('.main-navigation'),
        $buttonOpenSearch = $('#search-open'),
        $seachPanel= $('#claudia-search-panel')
        $buttonUpp = $('#upp-button');

    $(window).on('load', function() {

        $buttonOpenSearch.on('click', function() {
            $seachPanel.slideToggle('slow',function(){
                if( $seachPanel.is(':hidden')){
                    $buttonOpenSearch.find('img').attr('src',claudia_data.theme_path+'/assets/images/search.png');
                    $seachPanel.find('#s').blur();
                }else{
                    $seachPanel.find('#s').focus();
                    $buttonOpenSearch.find('img').attr('src',claudia_data.theme_path+'/assets/images/close.png');
                }
            });
            
        });

        
        $buttonUpp.on('click', function() {
            $('html,body').animate({ scrollTop: 0 }, 800);
        });


        $menuButton.on('click', function() {
            $menuMain.slideToggle();
        });

        adjustPanelWidgets($('#wpadminbar'));

        $(".main-navigation ul ul ul li a").focus(function(){
            var styles = {
                "left":"100%",
                "opacity" :"1"
            }
            
            $(this).parent().parent().css(styles);
        });

       $(".main-navigation ul ul ul li a").focusout(function(){
            var styles = {
                "left":"-999em",
                "opacity" :"0"
            }
            
            $(this).parent().parent().css(styles);
        });  

        $(".main-navigation ul ul li a").focus(function(){
            var styles = {
                "left":"auto",
                "opacity" :"1"
            }
            
            $(this).parent().parent().css(styles);
        });

      $(".main-navigation ul ul li a").focusout(function(){
            var styles = {
                "left":"-999em",
                "opacity" :"0"
            }
            
            $(this).parent().parent().css(styles);
        });    
         
    });

    function adjustPanelWidgets($bar) {

        if ($bar) {

            $('#widgets-panel').css('top', $bar.height());
        }
    }
})(jQuery);