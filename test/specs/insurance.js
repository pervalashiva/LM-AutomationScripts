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

       //insurances Information Part-I testing Required inputs

       it("Verify insurances Information valid inputs",async()=>{

        //Open insurance
        await  $("//button[normalize-space()='Set-up']");
        await   $("//button[normalize-space()='Set-up']").click();
        await   $("//button[normalize-space()='Insurance']").click();

        //Add insurance
        await   $("button[type='add']");
        await   $("button[type='add']").click();
        //Submitting empty form and checking for the validation fields 
        //click on submit and check with toast meesage
        await   $("//div[@class='card-footer']//button[@type='submit'][normalize-space()='Submit']").click();  
        await expect(LoginPage.toastMessage).toHaveTextContaining("Please fix the validations");
        await browser.pause(3000);
        
        // negative Test cases for required field
        var agentName = await $("//div[contains(text(),'Agent Name is required')]");
        await expect(agentName).toHaveTextContaining("Agent Name is required");

        var insuranceCompany = await $("//div[contains(text(),'Insurance Company is required')]");
        await expect(insuranceCompany).toHaveTextContaining("Insurance Company is required");
        
        var policyNumber = await $("(//div[contains(text(),'Policy Number is required')])[1]");
        await expect(policyNumber).toHaveTextContaining("Policy Number is required");
        
        var fromDate = await $("//div[contains(text(),'Effective From is required')]");
        await expect(fromDate).toHaveTextContaining("Effective From is required");
        
        var expireson = await $("(//div[contains(text(),'Policy Number is required')])[2]");
        await expect(expireson).toHaveTextContaining("Policy Number is required");
        
        var policyCost = await $("//div[contains(text(),'Policy Cost is required')]");
        await expect(policyCost).toHaveTextContaining("Policy Cost is required");

        var paymentTerms = await $("//div[contains(text(),'Payment Terms is required')]");
        await expect(paymentTerms).toHaveTextContaining("Payment Terms is required");
        
        var contactPhone = await $("//div[contains(text(),'Contact Phone is required')]");
        await expect(contactPhone).toHaveTextContaining("Contact Phone is required");
        
        var email = await $("//div[contains(text(),'Email is required')]");
        await expect(email).toHaveTextContaining("Email is required");

  })
    
        //entering insurance data 
       it("Create insurance",async()=>{
        //Entering insurances Information Part-I
        await $("//input[@formcontrolname='agentName']").setValue("Venkat");
        await $("//input[@id='insuranceCompany']").setValue("36593249658");
        await $("//input[@id='policyNumber']").setValue("200000");
        await $("//input[@id='effectiveFrom']").setValue("200000");
        await $("//input[@id='expiresOn']").setValue("200000");
        await $("//input[@id='policyCost']").setValue("200000");

        
        var paymentTerms = await $("//select[@id='paymentTerms']");
        await paymentTerms.selectByAttribute('value', 'Monthly');

        await $("//input[@id='contactName']").setValue("shivaram");
        await $("//input[@id='phone']").setValue("6308578846");   
        await $("//input[@id='email']").setValue("shivaram@gmail.com"); 
        await $("//input[@placeholder='Search Nearest Location']").setValue("Hyderabad");
        await $("(//span[contains(text(),'Hyderabad')])[1]").click()
        await $("//input[@id='emergencyContactName']").setValue("shivaram");   
        await $("//input[@id='emergencyContactNumber']").setValue("9335698485");   


        
        //Enter Converage Details
        const coverage =  $$('.mat-expansion-panel');   
        coverage[0].click();
        await browser.pause(1000);
        await $("//i[@class='dx-icon dx-icon-edit-button-addrow']").click();
        await browser.pause(1000);
        await $("//input[@role='textbox']").setValue("products");
        browser.keys("\uE004") 
        
        await $("//input[@role='textbox']").setValue("1000");
        browser.keys("\uE004") 

        await $("//div[@class='dx-dropdowneditor-icon']").click();
        await $("//div[contains(text(),'ABC346')]").click();
        browser.keys("\uE004")  

        await $("//div[@class='dx-dropdowneditor-icon']").click();
        await $("//div[contains(text(),'PQR564')]").click();
        browser.keys("\uE004") 

        await $("//div[@class='dx-dropdowneditor-icon']").click();
        await $("//div[contains(text(),'Ramesh')]").click();
        browser.keys("\uE004")  

        await $("//input[@role='textbox']").setValue("coverage details");
        browser.keys("\uE004")  
             
       
        //Submit insurance Form and checks with toast message
        await $('.card-footer'); 
        await $("(//button[@type='submit'][normalize-space()='Submit'])[2]").click();        
        await expect(LoginPage.toastMessage).toHaveTextContaining("Insurance created successfully.");
        await browser.pause(1000);
        var closev =  $("//button[@class='close']"); 
        closev.$("//button[@class='close']").click();


       });

 });

//check the entered insurance data with view page

describe('Verify The insurance Data',function() 
{

    it("Veiw the  insurance", async()=>{

        //check insurances Information Part-I Viw Data
        await $('.card-header'); 
        await $("#search").setValue('Venkat');
        await  browser.pause(1000);
        await $("//a[normalize-space()='View']").click();
        await browser.pause(500);

        // var agentName = $("//input[@formcontrolname='agentName']");
        // await expect(agentName).toHaveAttributeContaining('ng-reflect-model', 'Venkat');

        // var insuranceCompany = $("//input[@id='insuranceCompany']");
        // await expect(insuranceCompany).toHaveAttributeContaining('ng-reflect-model', 'CA');

        // var policyNumber = $("//input[@id='policyNumber']");
        // await expect(policyNumber).toHaveAttributeContaining('ng-reflect-model', 'SG12345');

        // var effectiveFrom = $("//input[@id='effectiveFrom']");
        // await expect(effectiveFrom).toHaveAttributeContaining('ng-reflect-model', '1');

        // var expiresOn = $("//input[@id='expiresOn']");
        // await expect(expiresOn).toHaveAttributeContaining('ng-reflect-model', 'shiavaram');
        
        // var policyCost = $("//input[@id='policyCost']");
        // await expect(policyCost).toHaveAttributeContaining('ng-reflect-model', '200000');
        
        // var paymentTerms = $("//select[@id='paymentTerms']");
        // await expect(paymentTerms).toHaveAttributeContaining('ng-reflect-model', 'Half Yearly');
        
        // var contactName = $("//input[@id='contactName']");
        // await expect(contactName).toHaveAttributeContaining('ng-reflect-model', 'shivaram');
        
        // var phone = $("//input[@id='phone']");
        // await expect(phone).toHaveAttributeContaining('ng-reflect-model', '630-857-8846');
        
        // var email = $("//input[@id='email']");
        // await expect(email).toHaveAttributeContaining('ng-reflect-model', 'shivaram@gmail.com');
        
        // var address = $("//input[@placeholder='Search Nearest Location']");
        // await expect(address).toHaveAttributeContaining('ng-reflect-model', 'hyderabad');

        // var emergencyContactName = $("//input[@id='emergencyContactName']");
        // await expect(emergencyContactName).toHaveAttributeContaining('ng-reflect-model', 'shivaram');
        
        // var emergencyContactNumber = $("//input[@id='emergencyContactNumber']");
        // await expect(emergencyContactNumber).toHaveAttributeContaining('ng-reflect-model', '9335698485');
        
        //Check coverage details

        const coverage =  $$('.mat-expansion-panel');   
        coverage[0].click();

      
        var serviceDate = $("//td[normalize-space()='products']");
         await expect(serviceDate).toHaveText('products');
 
         var category = $("//td[normalize-space()='1000']");
         await expect(category).toHaveText('1000');
 
         var currentMiles = $("//td[normalize-space()='ABC346']");
         await expect(currentMiles).toHaveText('ABC346');
 
         var numberOfMiles = $("//td[normalize-space()='PQR564']");
         await expect(numberOfMiles).toHaveText('PQR564');

         var numberOfMiles = $("//td[normalize-space()='Ramesh']");
         await expect(numberOfMiles).toHaveText('Ramesh');
         
         var numberOfMiles = $("//td[normalize-space()='coverage details']");
         await expect(numberOfMiles).toHaveText('coverage details');
       
        //close the view page
        var closev =  $("//button[@class='close']"); 
        closev.$("//button[@class='close']").click();
        closev.waitForExist({ reverse: true });
        await browser.pause(500)

       })
   
});


// edit the insurance by clicking on edit button
describe('Edit insurance Data',function() 
{
       it("Update insurance",async()=>{

            await $("#search").setValue('Venkat');
            await  browser.pause(3000);
            await $('body > app-dashboard > div > main > div.container-fluid > app-trucks-list > div > div.row > div > div > div.card-body > table > tbody > tr.ng-star-inserted > td:nth-child(5) > a:nth-child(2)').click();
            await browser.pause(1000);
            //Entering insurances Information Part-I
            await $("//input[@formcontrolname='agentName']").setValue("Nagaraj");
            await $("//input[@id='insuranceCompany']").setValue("36593248658");
            await $("//input[@id='policyNumber']").setValue("300000");
            await $("//input[@id='effectiveFrom']").setValue("02/09/2021");
            await $("//input[@id='expiresOn']").setValue("02/10/2022");
            await $("//div[contains(text(),'Policy Cost is required')]").setValue("200000");


            var paymentTerms = await $("//select[@id='paymentTerms']");
            await paymentTerms.selectByAttribute('value', 'Half Yearly');

            await $("//input[@id='contactName']").setValue("saishiva");
            await $("//input[@id='phone']").setValue("6308586846");   
            await $("//input[@id='email']").setValue("shivasai@gmail.com"); 
            await $("//input[@placeholder='Search Nearest Location']").setValue("Warangal");
            await $("(//span[contains(text(),'Warangal')])[1]").click()
            await $("//input[@id='emergencyContactName']").setValue("shivasai");   
            await $("//input[@id='emergencyContactNumber']").setValue("9556963545");   

            //Enter insurance terms
            const payrate =  $$('.mat-expansion-panel');   
            payrate[3].click();
            await browser.pause(2000);
           var products = $("//td[normalize-space()='products");  
           products.doubleClick();
           await browser.pause(3000);

           await $("//input[@role='textbox']").setValue("Books");
           browser.keys("\uE004") 
           
           await $("//input[@role='textbox']").setValue("2000");
           browser.keys("\uE004") 
   
           await $("//div[@class='dx-dropdowneditor-icon']").click();
           await $("//div[contains(text(),'QWE3568')]").click();
           browser.keys("\uE004")  
   
           await $("//div[@class='dx-dropdowneditor-icon']").click();
           await $("//div[contains(text(),'YHJK58641')]").click();
           browser.keys("\uE004") 
   
           await $("//div[@class='dx-dropdowneditor-icon']").click();
           await $("//div[contains(text(),'Venkat')]").click();
           browser.keys("\uE004")  
   
           await $("//input[@role='textbox']").setValue("coverage item details");
           browser.keys("\uE004")  
   
         
                        
           //Submit insurance Form and checks with toast message
              await $('.card-footer'); 
              await $("(//button[@type='submit'][normalize-space()='Submit'])[2]").click();        
              await expect(LoginPage.toastMessage).toHaveTextContaining("Insurance updated successfully.");
              await browser.pause(1000);
      
       })
});


//check the updated insurance by clicking on view page

describe('Verify the updated data',function() 
{

    xit("View insurance Data", async()=>{
       
        
        //check insurances Information Part-I Viw Data
        await $('.card-header'); 
        await $("#search").setValue('Venkat');
        await  browser.pause(1000);
        await $("//a[normalize-space()='View']").click();
        await browser.pause(500);

        var agentName = $("//input[@formcontrolname='agentName']");
        await expect(agentName).toHaveAttributeContaining('ng-reflect-model', 'Venkat');

        var insuranceCompany = $("//input[@id='insuranceCompany']");
        await expect(insuranceCompany).toHaveAttributeContaining('ng-reflect-model', 'CA');

        var policyNumber = $("//input[@id='policyNumber']");
        await expect(policyNumber).toHaveAttributeContaining('ng-reflect-model', 'SG12345');

        var effectiveFrom = $("//input[@id='effectiveFrom']");
        await expect(effectiveFrom).toHaveAttributeContaining('ng-reflect-model', '1');

        var expiresOn = $("//input[@id='expiresOn']");
        await expect(expiresOn).toHaveAttributeContaining('ng-reflect-model', 'shiavaram');
        
        var policyCost = $("//div[contains(text(),'Policy Cost is required')]");
        await expect(policyCost).toHaveAttributeContaining('ng-reflect-model', '6308578846');
        
        var paymentTerms = $("//select[@id='paymentTerms']");
        await expect(paymentTerms).toHaveAttributeContaining('ng-reflect-model', 'shivaram@gmail.com');
        
        var contactName = $("//input[@id='contactName']");
        await expect(contactName).toHaveAttributeContaining('ng-reflect-model', 'shivaram@gmail.com');
        
        var phone = $("//input[@id='phone']");
        await expect(phone).toHaveAttributeContaining('ng-reflect-model', 'shivaram@gmail.com');
        
        var email = $("//input[@id='email']");
        await expect(email).toHaveAttributeContaining('ng-reflect-model', 'shivaram@gmail.com');
        
        // var address = $("//input[@placeholder='Search Nearest Location']");
        // await expect(address).toHaveAttributeContaining('ng-reflect-model', 'hyderabad');

        var emergencyContactName = $("//input[@id='emergencyContactName']");
        await expect(emergencyContactName).toHaveAttributeContaining('ng-reflect-model', 'shivaram@gmail.com');
        
        var emergencyContactNumber = $("//input[@id='emergencyContactNumber']");
        await expect(emergencyContactNumber).toHaveAttributeContaining('ng-reflect-model', 'shivaram@gmail.com');

        
        //Check coverage details

        const coverage =  $$('.mat-expansion-panel');   
        coverage[0].click();

      
        var serviceDate = $("//td[normalize-space()='Books']");
         await expect(serviceDate).toHaveText('Books');
 
         var category = $("//td[normalize-space()='2000']");
         await expect(category).toHaveText('2000');
 
         var currentMiles = $("//td[normalize-space()='ABC346']");
         await expect(currentMiles).toHaveText('ABC346');
 
         var numberOfMiles = $("//td[normalize-space()='PQR564']");
         await expect(numberOfMiles).toHaveText('PQR564');

         var numberOfMiles = $("//td[normalize-space()='Ramesh']");
         await expect(numberOfMiles).toHaveText('Ramesh');
         
         var numberOfMiles = $("//td[normalize-space()='coverage details']");
         await expect(numberOfMiles).toHaveText('coverage details');
       
       
        //close the view page
        var closev =  $("//button[@class='close']"); 
        closev.$("//button[@class='close']").click();
        closev.waitForExist({ reverse: true });
        await browser.pause(500)
    })       

    xit("Delete the insurance", async()=>{

        await $("#search").setValue('AR321B');
        await  browser.pause(1000);
        await $("//a[normalize-space()='Delete']").click();    
        await expect(LoginPage.toastMessage).toHaveTextContaining("insurance Deleted Successfully");
        await browser.pause(1000);
              

       })

});
