var varANT = require('./common.js')
//var expectchai = require('chai').expect
var LoginPage = require('./utility/loginpage.js')


describe('LoadMiles application',function() 
{

    it("Login with valid UserId Valid Password", async()=>{
        //login with valid userid and valid password
        browser.setWindowSize(1920, 1080);
        await browser.url(varANT.LOGIN_URL);
        await browser.pause(1000);
        LoginPage.Login(varANT.VALID_USRID, varANT.VALID_PAWD);         
        await  browser.pause(1000);
        var ink = $(".poweroff");
        ink.waitForExist();  
        // Browser waits untill the poweroff button appears After login, if the poweorff button didnt appear in 5 secnds testcase will fail

       })

       //factors Information Part-I testing Required inputs

       xit("Verify factors Information valid inputs",async()=>{

        //Open factor
        await  $("//button[normalize-space()='Set-up']");
        await   $("//button[normalize-space()='Set-up']").click();
        await   $("//button[normalize-space()='Factor']").click();

        //Add factor
        await   $("button[type='add']");
        await   $("button[type='add']").click();
        //Submitting empty form and checking for the validation fields 
        //click on submit and check with toast meesage
        await   $("//div[@class='card-footer']//button[@type='submit'][normalize-space()='Submit']").click();  
        await $("//div[@aria-label='Success']"); 
        await expect(LoginPage.toastMessage).toHaveTextContaining("Please fix the validations");
        await browser.pause(1000);
        
        // negative Test cases for required field
        var companyName = await $("//div[contains(text(),'Company Name is required')]");
        await expect(companyName).toHaveTextContaining("Company Name is required");
        
        var accountNumber = await $("//div[contains(text(),'Account Number is required')]");
        await expect(accountNumber).toHaveTextContaining("Account Number is required");

  })
    
        //entering factor data 
       xit("Create factor",async()=>{
        //Entering factors Information Part-I
        await $("//input[@formcontrolname='companyName']").setValue("VKCPRIDE");
        await  browser.pause(1000);
        await $("//input[@id='accountNumber']").setValue("36593249658");
        await $("//input[@placeholder='Search Nearest Location']").setValue("Hyderabad");
        await $("(//span[contains(text(),'Hyderabad')])[1]").click()
        await $("//input[@id='contactName']").setValue("Rajesh");
        
        await $("//input[@id='phone']").setValue("6308578846");
        await $("//input[@id='email']").setValue("shivaram@gmail.com");   
        
        //Enter Factor terms
        const factor =  $$('.mat-expansion-panel');   
        factor[0].click();
        await browser.pause(1000);
        await $("//i[@class='dx-icon dx-icon-edit-button-addrow']").click();
        await browser.pause(1000);
        await $("//input[@role='combobox']").setValue("5/17/2022");  
        browser.keys("\uE004") 
         await browser.pause(1000);

         await $("//div[@class='dx-dropdowneditor-icon']").click();   
         await $("//div[contains(text(),'Factor Charges')]").click();   
         browser.keys("\uE004") 
 
         await $("//input[@role='textbox']").setValue("10000");  
         browser.keys("\uE004")   
         await browser.pause(1000);
 
         await $("//input[@role='textbox']").setValue("20000");  
         browser.keys("\uE004")   
         await browser.pause(1000);

         await $("//input[@role='textbox']").setValue("Factor Items");  
         browser.keys("\uE004")   
         await browser.pause(1000);

       
        //Submit factor Form and checks with toast message
        await $('.card-footer'); 
        await $("(//button[@type='submit'][normalize-space()='Submit'])[2]").click();        
        await expect(LoginPage.toastMessage).toHaveTextContaining("Factor created successfully.");
        await browser.pause(1000);

       });

 });

//check the entered factor data with view page

describe('Verify The factor Data',function() 
{

    it("Veiw the  factor", async()=>{

        //check factors Information Part-I Viw Data
        await   $("//button[normalize-space()='Set-up']").click();
        await   $("//button[normalize-space()='Factor']").click();
        await $('.card-header'); 
        await $("#search").setValue('VKCPRIDE');
        await  browser.pause(1000);
        await $("//a[normalize-space()='View']").click();
        await browser.pause(1000);

        const classNameAndText = await $("//input[@formcontrolname='companyName']").getText()
        console.log(await classNameAndText)


        // var companyName = $("//input[@formcontrolname='companyName']");
        // await expect(companyName).toHaveAttributeContaining('ng-reflect-model', 'FMCSA12');

        // var accountNumber = $("//input[@id='accountNumber']");
        // await expect(accountNumber).toHaveAttributeContaining('ng-reflect-model', 'CA');

        // var contactName = $("//input[@id='contactName']");
        // await expect(contactName).toHaveAttributeContaining('ng-reflect-model', 'SG12345');

        // var phone = $("//input[@id='phone']");
        // await expect(phone).toHaveAttributeContaining('ng-reflect-model', '6RGJGKD13TYBG2695');

        // var email = $("//input[@id='email']");
        // await expect(email).toHaveAttributeContaining('ng-reflect-model', '123');


        //check the factor items
        // const factor =  $$('.mat-expansion-panel');   
        // factor[0].click();

        // var dateFrom = $("//td[normalize-space()='5/17/2022']");
        // await expect(dateFrom).toHaveText('5/17/2022');

        // var factorCharges = $("//td[normalize-space()='Factor Charges']");
        // await expect(factorCharges).toHaveText('Factor Charges');

        // var factorRate = $("//td[normalize-space()='10000']");
        // await expect(factorRate).toHaveText('10000');

        // var creditLimit = $("//td[normalize-space()='20000']]");
        // await expect(creditLimit).toHaveText('20000');

        // var factorComments = $("//td[normalize-space()='Factor Items']");
        // await expect(factorComments).toHaveText('Factor Items');
        
       
        //close the view page
        var closev =  $("//button[@class='close']"); 
        closev.$("//button[@class='close']").click();
        closev.waitForExist({ reverse: true });
        await browser.pause(500)

       })
   
});


// edit the factor by clicking on edit button
describe('Edit factor Data',function() 
{
       xit("Update factor",async()=>{

        await $("#search").setValue('VKCPRIDE');
        await  browser.pause(1000);
        await $('body > app-dashboard > div > main > div.container-fluid > app-trucks-list > div > div.row > div > div > div.card-body > table > tbody > tr.ng-star-inserted > td:nth-child(5) > a:nth-child(2)').click();
        await browser.pause(1000);

      //Entering factors Information Part-I
      await $("//input[@formcontrolname='companyName']").setValue("VKCPRIDE");
      await  browser.pause(1000);
      await $("//input[@id='accountNumber']").setValue("36593249658");
      //await $("//input[@placeholder='Search Nearest Location']").setValue("Hyderabad");
      await $("//input[@id='contactName']").setValue("Rajesh");
      
      await $("//input[@id='phone']").setValue("6308578846");
      await $("//input[@id='email']").setValue("shivaram@gmail.com");   
      
      //Enter Factor terms
      const factor =  $$('.mat-expansion-panel');   
      factor[0].click();
      await browser.pause(2000);
        var products = $("//td[normalize-space()='5/17/2022");  
        products.doubleClick();
        await browser.pause(3000);      
        await $("//input[@role='combobox']").setValue("05/20/2022");  
        browser.keys("\uE004") 
         await browser.pause(1000);

         await $("//div[@class='dx-dropdowneditor-icon']").click();   
         await $("//div[contains(text(),'Factoring Reserve')]").click();   
         browser.keys("\uE004") 
 
         await $("//input[@role='textbox']").setValue("20000");  
         browser.keys("\uE004")   
         await browser.pause(1000);
 
         await $("//input[@role='textbox']").setValue("30000");  
         browser.keys("\uE004")   
         await browser.pause(1000);

         await $("//input[@role='textbox']").setValue("Factor Item numbers");  
         browser.keys("\uE004")   
         await browser.pause(1000);

     
      //Submit factor Form and checks with toast message
      await $('.card-footer'); 
      await $("//mat-dialog-actions[@class='card-footer mat-dialog-actions']//button[@type='submit'][normalize-space()='Submit']").click();        
      await expect(LoginPage.toastMessage).toHaveTextContaining("Factor data updated successfully.");
      await browser.pause(1000);
       })
});


//check the updated factor by clicking on view page

describe('Verify the updated data',function() 
{

    xit("View factor Data", async()=>{
       
        //check factors Information Part-I Viw Data
        await $('.card-header'); 
        await $("#search").setValue('VKCPRIDE');
        await  browser.pause(1000);
        await $("//a[normalize-space()='View']").click();
        await browser.pause(500);

        var companyName = $("//input[@formcontrolname='companyName']");
        await expect(companyName).toHaveAttributeContaining('ng-reflect-model', 'FMCSA12');

        var accountNumber = $("//input[@id='accountNumber']");
        await expect(accountNumber).toHaveAttributeContaining('ng-reflect-model', 'CA');

        var contactName = $("//input[@id='contactName']");
        await expect(contactName).toHaveAttributeContaining('ng-reflect-model', 'SG12345');

        var phone = $("//input[@id='phone']");
        await expect(phone).toHaveAttributeContaining('ng-reflect-model', '6RGJGKD13TYBG2695');

        var email = $("//input[@id='email']");
        await expect(email).toHaveAttributeContaining('ng-reflect-model', '123');

          //check the factor items
          const factor =  $$('.mat-expansion-panel');   
          factor[0].click();
  
          var dateFrom = $("//td[normalize-space()='05/20/2022']");
          await expect(dateFrom).toHaveText('5/17/2022');
  
          var factorCharges = $("//td[normalize-space()='Factoring Reserve']");
          await expect(factorCharges).toHaveText('Factoring Reserve');
  
          var factorRate = $("//td[normalize-space()='20000']");
          await expect(factorRate).toHaveText('20000');
  
          var creditLimit = $("//td[normalize-space()='30000']]");
          await expect(creditLimit).toHaveText('30000');
  
          var factorComments = $("//td[normalize-space()='Factor Items']");
          await expect(factorComments).toHaveText('Factor Item numbers');
        
       
        //close the view page
        var closev =  $("//button[@class='close']"); 
        closev.$("//button[@class='close']").click();
        closev.waitForExist({ reverse: true });
        await browser.pause(500)

    })       

    xit("Delete the factor", async()=>{

        await $("#search").setValue('VKCPRIDE');
        await  browser.pause(1000);
        await $("//a[normalize-space()='Delete']").click();    
        await expect(LoginPage.toastMessage).toHaveTextContaining("factor Deleted Successfully");
        await browser.pause(1000);
              

       })

});
