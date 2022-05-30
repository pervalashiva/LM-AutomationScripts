const CONSTANT = require('./common.js')
const expectchai = require('chai').expect
const LoginPage = require('./utility/loginpage.js')


describe('LoadMiles application',function() 
{

    it("Login with valid UserId Valid Password", async()=>{
        //login with valid userid and valid password
        browser.setWindowSize(1920, 1080);
        await browser.url(CONSTANT.LOGIN_URL);
        await browser.pause(1000);
        LoginPage.Login(CONSTANT.VALID_USRID, CONSTANT.VALID_PAWD);         
        await  browser.pause(1000);
        const ink = $(".poweroff");
        ink.waitForExist();  
        // Browser waits untill the poweroff button appears After login, if the poweorff button didnt appear in 5 secnds testcase will fail

       })


    it("Open the Finance",async()=>{

        await  $("//a[normalize-space()='Finance']");
        await  $("//a[normalize-space()='Finance']").click();

        await  $("//app-sidebar-nav-link-content[normalize-space()='Manage Invoice']");
        await  $("//app-sidebar-nav-link-content[normalize-space()='Manage Invoice']").click(); 
 
        await  $("//button[normalize-space()='Create Invoices']").click();
        await  browser.pause(1000);
       // await expect(LoginPage.toastMessage).toHaveTextContaining("Select only same customer loads for bulk creation of invoice.");

        await  $("//td[@aria-label='Select all']//span[@class='dx-checkbox-icon']").click();
        $("//td[@aria-label='Select all']//span[@class='dx-checkbox-icon']").isSelected()

        
        

    })
 });

