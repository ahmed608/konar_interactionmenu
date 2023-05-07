$('.container').hide();
$(function()
{
    
    //get info from client side
    window.addEventListener('message', function(event)
    {
        var cdata = event.data;
        var msg = cdata.msgui;
        if (cdata.casemenue == 'open')
        {
            $('.container').show();
            $(".text").text(msg);
        }  
        if (cdata.casemenue == 'close')
        {
            $('.container').hide();
        }   
    }, false);

});