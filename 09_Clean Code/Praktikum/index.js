class user {
    var id;
    var userName;
    var password;
}

class userService{
    user[];
    users =[];
    getAllUser(){

        return users;
    }
    getUserById(userId){
        return users.filter(userId);
    }
}

