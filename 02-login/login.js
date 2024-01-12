
class Login {
   
    username='';
    password='';
    userNameErrorLog = '';
    passwordErrorLog = '';

    constructor (usern, passw) {
        this.username = usern;
        this.password = passw;
    }
  
    validateUsername(){
       if (this.username == '') {
        //alert('UserName must be filled out');
        this.userNameErrorLog = 'UserName must be filled out'; 
        return false;
       }
       
       if (this.username.length < 5) {
        //alert('UserName must be atleast 5 characters');
        this.userNameErrorLog = 'UserName must be atleast 5 characters'; 
        return false;
       }
       return true;
    }

    validatePassword()
    {
        if (this.password == '') {
        this.passwordErrorLog = 'UserName must be filled out'; 
        
         return false;
        }

        if (this.password.length < 5) {
         
         this.passwordErrorLog = 'UserName must be atleast 5 characters'; 
         return false;
        }

        return true;
    }

}

