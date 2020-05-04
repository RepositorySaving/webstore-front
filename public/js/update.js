/**
 *	CESIUM TEMPLATE
 *	By Xemah | https://xemah.com
 *
**/

 $(() => {
    $('#alert-update .close').click(function(event) {
        event.preventDefault();
        let expiry = new Date();
        let length = 3600000;
        expiry.setTime(expiry.getTime() + length);
        $.cookie('update-alert-closed', 'true', {
            path: '/',
            expires: expiry
        });
    });
    if($.cookie('update-alert-closed') === 'true') {
        $('#alert-update').hide();
    }
});