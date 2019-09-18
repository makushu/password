function password_is_valid(password){

    var upper = /[A-Z]/;
    var lower = /[a-z]/;
    var num = /[0-9]/;
    
    if(password.length === 0){
        throw new Error("password should not be null");
    } 
   
    if(!lower.test(password)){
        throw new Error("password should have at least one lowercase letter");
    }

    if (!upper.test(password)){
        throw new Error("password must have atleast 1 uppercase letter");
    }
    if(!num.test(password)){
        throw new Error("password should have at least one number");
    }
    
    if(password.length < 9){
        throw new Error("password should be larger than 8 characters");
    }
}
  
        
function password_is_ok(password){

    var one = password.length > 8;
    var two = password.length < 1;
    var upper = /[A-Z]/;
    var three = upper.test(password);
            
    var lower = /[a-z]/;
    var four = lower.test(password);
            
    var num = /[a-z]/;
    var five = num.test(password);

    if(password.length < 9 || password.length == 0){
        return "password is never OK";
    }

    if(two || one || three){
        return true;
    } else 
    
    if(two || one || four){
        return true;
    } else if(two || one || five){
        return true;
    }else if(two || three || five){
        return true;
    }else if(two || three || four){
        return true;
    }else if(two || four || five){
        return true;
    }else 
    return false;       
}
        

