const CONSTANT = require('./common.js')
const expectchai = require('chai').expect
const LoginPage = require('./utility/loginpage.js')

describe('Login application',function() 
{
    //Test case for Login with invalid UserId Valid Password
    it("Login with invalid UserId Valid Password", async()=>{
       await browser.setWindowSize(1920, 1080);
       await browser.url(CONSTANT.LOGIN_URL)
       await browser.pause(2000)
       await LoginPage.Login(CONSTANT.INVALID_USRID, CONSTANT.VALID_PAWD);
        await expect(LoginPage.toastMessage).toHaveTextContaining("Invalid UserId and Password")

       })
   
        //Test case for Login with valid UserId InValid Password
       it("Login with valid UserId InValid Password", async()=>{
        await browser.pause(3000)
        await  LoginPage.Login(CONSTANT.VALID_USRID, CONSTANT.INVALID_PAWD);
        await  expect(LoginPage.toastMessage).toHaveTextContaining("Invalid UserId and Password")
        //Checks the toast-message for validation error Invalid UserId and Password
        
        })
   
        //Test case for Login with Invalid UserId InValid Password

        it("Login with Invalid UserId InValid Password", async()=>{
            await browser.pause(3000)
            await   LoginPage.Login(CONSTANT.INVALID_USRID, CONSTANT.INVALID_PAWD);
            await  expect(LoginPage.toastMessage).toHaveTextContaining("Invalid UserId and Password")
            //Checks the toast-message for validation error Invalid UserId and Password

        })

        //Test case for Login with valid username and valid password
    
    it("Login with valid username and valid password", async()=>{
        await browser.pause(3000)
        await LoginPage.Login(CONSTANT.VALID_USRID, CONSTANT.VALID_PAWD);
        await browser.pause(5000)
        const ink = $(".poweroff")
        await ink.waitForExist(); // Browser waits untill the poweroff button appears After login, if the poweorff button didnt appear in 5 secnds testcase will fail
              
       })
});