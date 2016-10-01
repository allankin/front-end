define(['jquery'],function($){
	var renderList = function(_users){
		users = _users || [];
        $('#users').remove();
        var html = "<table class='table' id='users'>";
        html+="<thead><tr><th>UID</th><th>用户名</th><th>地址</th></tr></thead>"
        users.forEach(function(user){
            html+="<tr><td>"+user.uid+"</td><td>"+user.userName+"</td><td>"+user.address+"</td></tr>";
        });
        html+="</table>";
        var $table = $(html);
        $('body').append($table);
    };
	return {
		'renderList':renderList
	}
});