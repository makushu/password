function password_is_valid(password){
     
    var check = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{9,}$/;          
    var result = check.test(password); 
  
   try {
     if(result == false) throw('password must have atleast one uppercase letter, lowercase letter and number');
     
   } catch (err) {
     return 'Error ' + err;
  
   }
  
     finally {
        return result;
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
            } else if(two || one || four){
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
        

