$(function(){

    $("#login").click(function() {
        username = $("#loginUser").attr("value");
        rid = $('#channelList').val();

        if(username.length > 20 || username.length == 0 || rid.length > 20 || rid.length == 0) {
            showError(LENGTH_ERROR);
            return false;
        }

        if(!reg.test(username) || !reg.test(rid)) {
            showError(NAME_ERROR);
            return false;
        }

        //query entry of connection
        queryEntry(username, function(host, port) {
            pomelo.init({
                host: host,
                port: port,
                log: true
            }, function() {
                var route = "connector.entryHandler.enter";
                pomelo.request(route, {
                    username: username,
                    rid: rid
                }, function(data) {
                    if(data.error) {
                        showError(DUPLICATE_ERROR);
                        return;
                    }
                    setName();
                    setRoom();
                    showChat();
                    initUserList(data);
                });
            });
        });
    });
})