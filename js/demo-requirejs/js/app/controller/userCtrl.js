define(['app/model/user','app/view/userView'],function(userMod,userView){
	userView.renderList(userMod.getUsers());
    $('#addBtn').click(function(){
        userMod.add(1000,'test',20,'上海');
        userView.renderList(userMod.getUsers());
    });
});