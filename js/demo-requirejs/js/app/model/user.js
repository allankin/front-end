define(['jquery'],function($){
	var users = [];
	var getUsers = function(){
		return users;
	};
	var add = function(uid,userName,age,address){
		users.push({'uid':uid,'userName':userName,'age':age,'address':address});
	};
	var remove = function(uid){
		var len = users.length;
		var index = users.indexOf(uid);
		if(index != -1){
			var user = users[i];
			if(user.uid == uid){
				users.splice(i,1);
			}
		}
	};
	var getOne = function(uid){

	};
	var UserMod ={
		create:function(){
			var userMod = {};
			userMod.add = add;
			userMod.getUsers = getUsers;
			userMod.remove = remove;
			userMod.getOne = getOne;
			return userMod;
		}
	};

	var init = function(){
		add(12345,'kim',30,'浙江绍兴');
		add(12,'tom','38','江苏南京');
		add(19,'张强','28','广东广州');
	};
	
	init();
	/*return {
		'getUsers':getUsers,
		'add':add,
		'remove':remove,
		'getOne':getOne,
		'renderList':renderList	
	};*/
	return UserMod.create();
});