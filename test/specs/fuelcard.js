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

       //fuelcards Information Part-I testing Required inputs

       it("Verify fuelcards Information valid inputs",async()=>{

        //Open fuelcard
        await  $("//button[normalize-space()='Set-up']");
        await   $("//button[normalize-space()='Set-up']").click();
        await   $("//button[normalize-space()='Fuel Card']").click();

        //Add fuelcard
        await   $("button[type='add']");
        await   $("button[type='add']").click();
        //Submitting empty form and checking for the validation fields 
        //click on submit and check with toast meesage
        await   $("//div[@class='card-footer']//button[@type='submit'][normalize-space()='Submit']").click();  
        await browser.pause(1000); 
        await expect(LoginPage.toastMessage).toHaveTextContaining("Please fix the validations");
        await browser.pause(1000);
        
        // negative Test cases for required field
        var companyName = await $("//div[contains(text(),'Company Name is required')]");
        await expect(companyName).toHaveTextContaining("Company Name is required");
        
        var accountNumber = await $("//div[contains(text(),'Account Number is required')]");
        await expect(accountNumber).toHaveTextContaining("Account Number is required");
        
        var creditLimit = await $("//div[contains(text(),'Credit Limit is required')]");
        await expect(creditLimit).toHaveTextContaining("Credit Limit is required");
        
        var payment = await $("//div[contains(text(),'Payment Terms is required')]");
        await expect(payment).toHaveTextContaining("Payment Terms is required");
        
        var email = await $("//div[contains(text(),'Email is required')]");
        await expect(email).toHaveTextContaining("Email is required");

  })
    
        //entering fuelcard data 
       xit("Create fuelcard",async()=>{
        //Entering fuelcards Information Part-I
        await $("//input[@formcontrolname='companyName']").setValue("ram");
        await  browser.pause(1000);
        await $("//input[@id='accountNumber']").setValue("36593249658");
       
        await $("//input[@id='creditLimit']").setValue("200000");
        
        var paymentTerms = await $("//select[@id='paymentTerms']");
        await paymentTerms.selectByAttribute('value', 'Monthly');

        await $("//input[@id='contactName']").setValue("shivaram");
        await $("//input[@id='phone']").setValue("6308578846");   
        await $("//input[@id='email']").setValue("shivaram@gmail.com");   
        await $("//input[@placeholder='Search Nearest Location']").setValue("Hyderabad");
        await $("(//span[contains(text(),'Hyderabad')])[1]").click()
       
        
        //Enter fuelcard terms
        var maintenance = await $('.mat-expansion-panel');    
        maintenance.click();
        await browser.pause(1000);

        var addrow = $("//div[@title='Add a row']//div[@class='dx-button-content']");    
        addrow.click();
        await browser.pause(2000);

       await $("//input[@role='combobox']").setValue("5/17/2022");  
       browser.keys("\uE004") 
        await browser.pause(1000);

        await $("//input[@role='textbox']").setValue("shivaram"); 
        browser.keys("\uE004")  
        await browser.pause(1000);

        await $("//input[@role='textbox']").setValue("1234567890321456"); 
        browser.keys("\uE004")  
        await browser.pause(1000);

        await $("//input[@role='combobox']").setValue("5/17/2022");  
        browser.keys("\uE004")   
        await browser.pause(1000);

        await $("//div[@class='dx-dropdowneditor-icon']").click();   
        await $("//div[contains(text(),'Ramesh')]").click();   
        browser.keys("\uE004")   
        await browser.pause(1000);
        await $("//div[@class='dx-dropdowneditor-icon']").click();   
        await $("//div[@class='dx-item-content dx-list-item-content']").click();  
        browser.keys("\uE004")   
        await browser.pause(1000);
        
        await $("//input[@role='textbox']").setValue("afsa6789");  

        var maintenance = await $('.mat-expansion-panel');    
        maintenance.click();
        await browser.pause(4000);

        //Submit fuelcard Form and checks with toast message
        await $('.card-footer'); 
        await $("(//button[@type='submit'][normalize-space()='Submit'])[2]").click();        
        await expect(LoginPage.toastMessage).toHaveTextContaining("FuelCard created successfully.");
        await browser.pause(4000);

       });

 });

//check the entered fuelcard data with view page

describe('Verify The fuelcard Data',function() 
{

    it("Veiw the  fuelcard", async()=>{

        //check fuelcards Information Part-I Viw Data
        await $('.card-header'); 
        await $("#search").setValue('ram');
        await  browser.pause(1000);
        await $("//a[normalize-space()='View']").click();
        await browser.pause(4000);

        const elem = await $('*[ng-reflect-name="companyName"]').getComputedLabel();
        console.log(await elem);

        const compynum = await $('*[formcontrolname="accountNumber"]').getComputedLabel();
        console.log(compynum);

        const creditLimit = await $('*[formcontrolname="creditLimit"]');
        console.log(await creditLimit.getComputedLabel());

        await browser.pause(4000);


        // var companyName = $("//input[@formcontrolname='companyName']");
        // await expect(companyName).toHaveAttributeContaining('formcontrolname', 'companyName');

        // var accountNumber = $("//input[@id='accountNumber']");
        // await expect(accountNumber).toHaveAttributeContaining('ng-reflect-model', 'CA');

        // var creditLimit = $("//input[@id='creditLimit']");
        // await expect(creditLimit).toHaveAttributeContaining('ng-reflect-model', 'SG12345');

        // var paymentTerms = $("//select[@id='paymentTerms']");
        // await expect(paymentTerms).toHaveAttributeContaining('ng-reflect-model', '1');

        // var contactName = $("//input[@id='contactName']");
        // await expect(contactName).toHaveAttributeContaining('ng-reflect-model', 'shiavaram');
        
        // var phone = $("//input[@id='phone']");
        // await expect(phone).toHaveAttributeContaining('ng-reflect-model', '6308578846');
        
        // var email = $("//input[@id='email']");
        // await expect(email).toHaveAttributeContaining('ng-reflect-model', 'shivaram@gmail.com');
        
        // var address = $("//input[@placeholder='Search Nearest Location']");
        // await expect(address).toHaveAttributeContaining('ng-reflect-model', 'hyderabad');

        var maintenance = await $('.mat-expansion-panel');    
        maintenance.click();
        await browser.pause(3000)
       
        // var issueDate = $("//td[normalize-space()='5/17/2022']");
        // await expect(issueDate).toHaveText('5/17/2022');

        // var cardName = $("//td[@role='gridcell'][normalize-space()='shivaram']");
        // await expect(cardName).toHaveText('shivaram');

        // var cardNum = $("//td[normalize-space()='1234567890321456']");
        // await expect(cardNum).toHaveText('1234567890321456');

        // var validDate = $("//td[normalize-space()='05/2022']");
        // await expect(validDate).toHaveText('05/2022');

        // var driverName = $("//td[normalize-space()='Ramesh']");
        // await expect(driverName).toHaveText('Ramesh');

        // var truknum = $("//td[normalize-space()='ABC346']");
        // await expect(truknum).toHaveText('ABC346');

        // var comments = $("//td[normalize-space()='afsa67895']");
        // await expect(comments).toHaveText("afsa67895");

        //close the view page
        var closev =  $("//button[@class='close']"); 
        closev.$("//button[@class='close']").click();
        closev.waitForExist({ reverse: true });
        await browser.pause(500)

       })
   
});


// edit the fuelcard by clicking on edit button
describe('Edit fuelcard Data',function() 
{
       xit("Update fuelcard",async()=>{

        await $("#search").setValue('VKCPRIDE');
        await  browser.pause(1000);
        await $('body > app-dashboard > div > main > div.container-fluid > app-trucks-list > div > div.row > div > div > div.card-body > table > tbody > tr.ng-star-inserted > td:nth-child(5) > a:nth-child(2)').click();
        await browser.pause(1000);

              //Entering fuelcards Information Part-I
              await $("//input[@formcontrolname='companyName']").setValue("VKCPRIDE");
              await  browser.pause(1000);
              await $("//input[@id='accountNumber']").setValue("36593249658");
              //await $("//input[@placeholder='Search Nearest Location']").setValue("Hyderabad");
              await $("//input[@id='creditLimit']").setValue("200000");
              
              var paymentTerms = await $("//select[@id='paymentTerms']");
              await paymentTerms.selectByAttribute('value', 'Monthly');
      
              await $("//input[@id='contactName']").setValue("shivaram");
              await $("//input[@id='phone']").setValue("6308578846");   
              await $("//input[@id='email']").setValue("shivaram@gmail.com");   
      
              
              //Enter fuelcard terms
              //("//mat-expansion-panel-header[@id='mat-expansion-panel-header-1']").click();  

            var products = $("//td[normalize-space()='5/17/2022");  
            products.doubleClick();
            await browser.pause(3000);
              
              await $("//input[@role='combobox']").setValue("5/17/2022");  
              browser.keys("\uE004") 
               await browser.pause(1000);
       
               await $("//input[@role='textbox']").setValue("shivaram"); 
               browser.keys("\uE004")  
               await browser.pause(1000);
       
               await $("//input[@role='textbox']").setValue("1234567890321456"); 
               browser.keys("\uE004")  
               await browser.pause(1000);
       
               await $("//input[@role='combobox']").setValue("5/17/2022");  
               browser.keys("\uE004")   
               await browser.pause(1000);
       
               await $("//div[@class='dx-dropdowneditor-icon']").click();   
               await $("//div[contains(text(),'Ramesh')]").click();   
               browser.keys("\uE004")   
               await browser.pause(1000);
               await $("//div[@class='dx-dropdowneditor-icon']").click();   
               await $("//div[@class='dx-item-content dx-list-item-content']").click();  
               browser.keys("\uE004")   
               await browser.pause(1000);
               
               await $("//input[@role='textbox']").setValue("afsa6789");  
              
             
              //Submit fuelcard Form and checks with toast message
              await $('.card-footer'); 
              await $("(//button[@type='submit'][normalize-space()='Submit'])[2]").click();        
              await expect(LoginPage.toastMessage).toHaveTextContaining("FuelCard updated successfully.");
              await browser.pause(1000);
      
       })
});


//check the updated fuelcard by clicking on view page

describe('Verify the updated data',function() 
{

    xit("View fuelcard Data", async()=>{
       
        
        //check fuelcards Information Part-I Viw Data
        await $('.card-header'); 
        await $("#search").setValue('VKCPRIDE');
        await  browser.pause(1000);
        await $("//a[normalize-space()='View']").click();
        await browser.pause(500);

        var companyName = $("//input[@formcontrolname='companyName']");
        await expect(companyName).toHaveAttributeContaining('ng-reflect-model', 'FMCSA12');

        var accountNumber = $("//input[@id='accountNumber']");
        await expect(accountNumber).toHaveAttributeContaining('ng-reflect-model', 'CA');

        var creditLimit = $("//input[@id='creditLimit']");
        await expect(creditLimit).toHaveAttributeContaining('ng-reflect-model', 'SG12345');

        var paymentTerms = $("//select[@id='paymentTerms']");
        await expect(paymentTerms).toHaveAttributeContaining('ng-reflect-model', '1');

        var contactName = $("//input[@id='contactName']");
        await expect(contactName).toHaveAttributeContaining('ng-reflect-model', 'shiavaram');
        
        var phone = $("//input[@id='phone']");
        await expect(phone).toHaveAttributeContaining('ng-reflect-model', '6308578846');
        
        var email = $("//input[@id='email']");
        await expect(email).toHaveAttributeContaining('ng-reflect-model', 'shivaram@gmail.com');
        
        // var address = $("//input[@placeholder='Search Nearest Location']");
        // await expect(address).toHaveAttributeContaining('ng-reflect-model', 'hyderabad');

       
        //close the view page
        var closev =  $("//button[@class='close']"); 
        closev.$("//button[@class='close']").click();
        closev.waitForExist({ reverse: true });
        await browser.pause(500)
    })       

    xit("Delete the fuelcard", async()=>{

        await $("#search").setValue('AR321B');
        await  browser.pause(1000);
        await $("//a[normalize-space()='Delete']").click();    
        await expect(LoginPage.toastMessage).toHaveTextContaining("fuelcard Deleted Successfully");
        await browser.pause(1000);
              

       })

});
