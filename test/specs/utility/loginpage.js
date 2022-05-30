class  LoginPage 
{
    get  userName()
    {
        return $("input[name='email']")
    }
    get password()
    {
        return $("input[name='password']")
    }
    get login()
    {
        return $("//button[normalize-space()='Login']")
    }

    get toastMessage()
    {
        return $('.toast-message')
    }

    async  Login(userName, password) 
    {
     await   this.userName.setValue(userName)
     await   this.password.setValue(password)
             this.login.click()
    }
    
}



module.exports =  new LoginPage()