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

       //incidents Information Part-I testing Required inputs

       it("Verify incidents Information valid inputs",async()=>{

        //Open incident
        await  $("//button[normalize-space()='Set-up']");
        await   $("//button[normalize-space()='Set-up']").click();
        await   $("//button[normalize-space()='Incident']").click();

        //Add incident
        await   $("button[type='add']");
        await   $("button[type='add']").click();
        //Submitting empty form and checking for the validation fields 
        //click on submit and check with toast meesage
        await   $("(//button[@type='submit'][normalize-space()='Submit'])[1]").click();  
        await browser.pause(1000); 
        await expect(LoginPage.toastMessage).toHaveTextContaining("Please fix the validations");
        await browser.pause(1000);
        
        // negative Test cases for required field
        
        // var caseNumber = await $("//div[contains(text(),'Case Number is required')]");
        // await expect(caseNumber).toHaveTextContaining("Case Status is required");

        var caseStatus = await $("//div[contains(text(),'Case Status is required')]");
        await expect(caseStatus).toHaveTextContaining("Case Status is required");
        
        var accidentDate = await $("//div[contains(text(),'Accident Date is required')]");
        await expect(accidentDate).toHaveTextContaining("Accident Date is required");
        
        var driverName = await $("//div[contains(text(),'Driver Name is required')]");
        await expect(driverName).toHaveTextContaining("Driver Name is required");
        
        var truck = await $("//div[contains(text(),'Truck')]");
        await expect(truck).toHaveTextContaining("Truck is required");
        
        var trailer = await $("//div[contains(text(),'Trailer is required')]");
        await expect(trailer).toHaveTextContaining("Trailer is required");

        var customer = await $("//div[contains(text(),'Customer is required')]");
        await expect(customer).toHaveTextContaining("Customer is required");
        
        var contactPhone = await $("//div[contains(text(),'Contact Phone is required')]");
        await expect(contactPhone).toHaveTextContaining("Contact Phone is required");


  })
    
        //entering incident data 
       it("Create incident",async()=>{
        //Entering incidents Information Part-I
        await $("//input[@formcontrolname='caseNumber']").setValue("35698745635");
        
        var caseStatus = await $("//select[@id='caseStatus']");
        await caseStatus.selectByAttribute('value', 'Pending');

        await $("//input[@id='accidentDate']").setValue("12/22/2022");
        
        await $("//input[@placeholder='Search Nearest Location']").setValue("Hyderabad");
        await $("(//span[contains(text(),'Hyderabad')])[1]").click()

        var driverId = await $("//select[@id='driverId']");
        await driverId.selectByAttribute('value', 'Pending');
        
        var truckId = await $("//select[@id='truckId']");
        await truckId.selectByAttribute('value', 'Pending');
        
        var trailerId = await $("//select[@id='trailerId']");
        await trailerId.selectByAttribute('value', 'Pending');
        
        var customerId = await $("//select[@id='customerId']");
        await customerId.selectByAttribute('value', 'Pending');

        await $("//input[@id='contactName']").setValue("ramesh");
        await $("//input[@id='phone']").setValue("6308578846");   

        await $("//input[@id='loadNumber']").setValue("shivaram");
        await $("//input[@id='commodityInfo']").setValue("6308578846");   

        
        //Enter Incident Information - II
        ("//mat-expansion-panel-header[@id='mat-expansion-panel-header-1']").click();   

        await $("//input[@id='citationNumber']").setValue("659863145");
        
        var accidentSeverity = await $("//select[@id='accidentSeverity']");
        await accidentSeverity.selectByAttribute('value', 'Ambulance');

        await $("//input[@id='copyOfReport-radio1']").click();
        await $("//input[@id='drugTest-radio1']").click();
        await $("//input[@id='alcoholTest-radio1']").click();
        await $("//input[@id='preventable-radio1']").click();
        await $("//input[@id='dotReportable-radio1']").click();
        await $("//input[@id='hazmat-radio1']").click();

        

        await $("//input[@id='insurer']").setValue("shivaram");
        await $("//input[@id='claimNumber']").setValue("shivaram");
        await $("//input[@id='damageValue']").setValue("shivaram");
        await $("//input[@id='damageRecovery']").setValue("shivaram");
        await $("//input[@id='reasonForDamage']").setValue("shivaram");
        await $("//input[@id='claimStatus']").setValue("shivaram");
        await $("//input[@id='claimComments']").setValue("shivaram");
        
       
        //Submit incident Form and checks with toast message
        await $('.card-footer'); 
        await $("(//button[@type='submit'][normalize-space()='Submit'])[2]").click();        
        await expect(LoginPage.toastMessage).toHaveTextContaining("Incident created successfully.");
        await browser.pause(1000);

       });

 });

//check the entered incident data with view page

describe('Verify The incident Data',function() 
{

    it("Veiw the  incident", async()=>{

        //check incidents Information Part-I Viw Data
        await $('.card-header'); 
        await $("#search").setValue('NAVEEN');
        await  browser.pause(1000);
        await $("//a[normalize-space()='View']").click();
        await browser.pause(500);

        var caseNumber = $("//input[@formcontrolname='caseNumber']");
        await expect(caseNumber).toHaveAttributeContaining('ng-reflect-model', '12');

        var caseStatus = $("//select[@id='caseStatus']");
        await expect(caseStatus).toHaveAttributeContaining('ng-reflect-model', '0');

        var accidentDate = $("//input[@id='accidentDate']");
        await expect(accidentDate).toHaveAttributeContaining('ng-reflect-model', 'SG12345');

        // var Location = $("//input[@placeholder='Search Nearest Location']");
        // await expect(Location).toHaveAttributeContaining('ng-reflect-model', '1');

        var driverId = $("//select[@id='driverId']");
        await expect(driverId).toHaveAttributeContaining('ng-reflect-model', 'shiavaram');
        
        var truckId = $("//select[@id='truckId']");
        await expect(truckId).toHaveAttributeContaining('ng-reflect-model', '6308578846');
        
        var trailerId = $("//select[@id='trailerId']");
        await expect(trailerId).toHaveAttributeContaining('ng-reflect-model', 'shivaram@gmail.com');
        
        var customerId = $("//select[@id='customerId']");
        await expect(customerId).toHaveAttributeContaining('ng-reflect-model', 'shivaram@gmail.com');
        
        var contactName = $("//input[@id='contactName']");
        await expect(contactName).toHaveAttributeContaining('ng-reflect-model', 'shivaram@gmail.com');
        
        var phone = $("//input[@id='phone']");
        await expect(phone).toHaveAttributeContaining('ng-reflect-model', 'shivaram@gmail.com');
        
        var loadNumber = $("//input[@id='loadNumber']");
        await expect(loadNumber).toHaveAttributeContaining('ng-reflect-model', 'shivaram@gmail.com');
        
        var commodityInfo = $("//input[@id='commodityInfo']");
        await expect(commodityInfo).toHaveAttributeContaining('ng-reflect-model', 'shivaram@gmail.com');

       
        //Enter Incident Information - II
        ("//mat-expansion-panel-header[@id='mat-expansion-panel-header-1']").click();  
        
        var citationNumber = $("//input[@id='citationNumber']");
        await expect(citationNumber).toHaveAttributeContaining('ng-reflect-model', 'shivaram@gmail.com');
        
        var accidentSeverity = $("//select[@id='accidentSeverity']");
        await expect(accidentSeverity).toHaveAttributeContaining('ng-reflect-model', 'shivaram@gmail.com');

        var copyOfReport = await $("//input[@id='copyOfReport-radio1']");
        console.log(await copyOfReport.isSelected());

        var drugTest = await $("//input[@id='drugTest-radio1']");
        console.log(await drugTest.isSelected());

        var alcoholTest = await $("//input[@id='alcoholTest-radio1']");
        console.log(await alcoholTest.isSelected());

        var preventable = await $("//input[@id='preventable-radio1']");
        console.log(await preventable.isSelected());

        var dotReportable = await $("//input[@id='dotReportable-radio1']");
        console.log(await dotReportable.isSelected());

        var hazmat = await $("//input[@id='hazmat-radio1']");
        console.log(await hazmat.isSelected());
        
        var insurer = $("//input[@id='insurer']");
        await expect(insurer).toHaveAttributeContaining('ng-reflect-model', 'shivaram@gmail.com');

        
        var claimNumber = $("//input[@id='claimNumber']");
        await expect(claimNumber).toHaveAttributeContaining('ng-reflect-model', 'shivaram@gmail.com');
        
        var damageValue = $("//input[@id='damageValue']");
        await expect(damageValue).toHaveAttributeContaining('ng-reflect-model', 'shivaram@gmail.com');

        var damageRecovery = $("//input[@id='damageRecovery']");
        await expect(damageRecovery).toHaveAttributeContaining('ng-reflect-model', 'shivaram@gmail.com');

        
        var reasonForDamage = $("//input[@id='reasonForDamage']");
        await expect(reasonForDamage).toHaveAttributeContaining('ng-reflect-model', 'shivaram@gmail.com');

        
        var claimStatus = $("//input[@id='claimStatus']");
        await expect(claimStatus).toHaveAttributeContaining('ng-reflect-model', 'shivaram@gmail.com');

        
        var claimComments = $("//input[@id='claimComments']");
        await expect(claimComments).toHaveAttributeContaining('ng-reflect-model', 'shivaram@gmail.com');


        //close the view page
        var closev =  $("//button[@class='close']"); 
        closev.$("//button[@class='close']").click();
        closev.waitForExist({ reverse: true });
        await browser.pause(500)

       })
   
});


// edit the incident by clicking on edit button
describe('Edit incident Data',function() 
{
       xit("Update incident",async()=>{

        await $("#search").setValue('NAVEEN');
        await  browser.pause(1000);
        await $('body > app-dashboard > div > main > div.container-fluid > app-trucks-list > div > div.row > div > div > div.card-body > table > tbody > tr.ng-star-inserted > td:nth-child(5) > a:nth-child(2)').click();
        await browser.pause(1000);

        //Entering incidents Information Part-I
        await $("//input[@formcontrolname='caseNumber']").setValue("35698745635");
        
        var caseStatus = await $("//select[@id='caseStatus']");
        await caseStatus.selectByAttribute('value', 'Pending');

        await $("//input[@id='accidentDate']").setValue("12/22/2022");
        //await $("//input[@placeholder='Search Nearest Location']").setValue("Hyderabad");
        
        var driverId = await $("//select[@id='driverId']");
        await driverId.selectByAttribute('value', 'Pending');
        
        var truckId = await $("//select[@id='truckId']");
        await truckId.selectByAttribute('value', 'Pending');
        
        var trailerId = await $("//select[@id='trailerId']");
        await trailerId.selectByAttribute('value', 'Pending');
        
        var customerId = await $("//select[@id='customerId']");
        await customerId.selectByAttribute('value', 'Pending');

        await $("//input[@id='contactName']").setValue("ramesh");
        await $("//input[@id='phone']").setValue("6308578846");   

        await $("//input[@id='loadNumber']").setValue("shivaram");
        await $("//input[@id='commodityInfo']").setValue("6308578846");   

        
        //Enter Incident Information - II
        ("//mat-expansion-panel-header[@id='mat-expansion-panel-header-1']").click();   

        await $("//input[@id='citationNumber']").setValue("659863145");
        
        var accidentSeverity = await $("//select[@id='accidentSeverity']");
        await accidentSeverity.selectByAttribute('value', 'Ambulance');

        await $("//input[@id='copyOfReport-radio1']").click();
        await $("//input[@id='drugTest-radio1']").click();
        await $("//input[@id='alcoholTest-radio1']").click();
        await $("//input[@id='preventable-radio1']").click();
        await $("//input[@id='dotReportable-radio1']").click();
        await $("//input[@id='hazmat-radio1']").click();

        

        await $("//input[@id='insurer']").setValue("shivaram");
        await $("//input[@id='claimNumber']").setValue("shivaram");
        await $("//input[@id='damageValue']").setValue("shivaram");
        await $("//input[@id='damageRecovery']").setValue("shivaram");
        await $("//input[@id='reasonForDamage']").setValue("shivaram");
        await $("//input[@id='claimStatus']").setValue("shivaram");
        await $("//input[@id='claimComments']").setValue("shivaram");
              
             
        //Submit incident Form and checks with toast message
        await $('.card-footer'); 
        await $("(//button[@type='submit'][normalize-space()='Submit'])[2]").click();        
        await expect(LoginPage.toastMessage).toHaveTextContaining("incident updated successfully.");
        await browser.pause(1000);

       })
});


//check the updated incident by clicking on view page

describe('Verify the updated data',function() 
{

    xit("View incident Data", async()=>{
       
        
        //check incidents Information Part-I Viw Data
        await $('.card-header'); 
        await $("#search").setValue('VKCPRIDE');
        await  browser.pause(1000);
        await $("//a[normalize-space()='View']").click();
        await browser.pause(500);


        var caseNumber = $("//input[@formcontrolname='caseNumber']");
        await expect(caseNumber).toHaveAttributeContaining('ng-reflect-model', '12');

        var caseStatus = $("//select[@id='caseStatus']");
        await expect(caseStatus).toHaveAttributeContaining('ng-reflect-model', '0');

        var accidentDate = $("//input[@id='accidentDate']");
        await expect(accidentDate).toHaveAttributeContaining('ng-reflect-model', 'SG12345');

        // var Location = $("//input[@placeholder='Search Nearest Location']");
        // await expect(Location).toHaveAttributeContaining('ng-reflect-model', '1');

        var driverId = $("//select[@id='driverId']");
        await expect(driverId).toHaveAttributeContaining('ng-reflect-model', 'shiavaram');
        
        var truckId = $("//select[@id='truckId']");
        await expect(truckId).toHaveAttributeContaining('ng-reflect-model', '6308578846');
        
        var trailerId = $("//select[@id='trailerId']");
        await expect(trailerId).toHaveAttributeContaining('ng-reflect-model', 'shivaram@gmail.com');
        
        
        var customerId = $("//select[@id='customerId']");
        await expect(customerId).toHaveAttributeContaining('ng-reflect-model', 'shivaram@gmail.com');
        
        var contactName = $("//input[@id='contactName']");
        await expect(contactName).toHaveAttributeContaining('ng-reflect-model', 'shivaram@gmail.com');
        
        var phone = $("//input[@id='phone']");
        await expect(phone).toHaveAttributeContaining('ng-reflect-model', 'shivaram@gmail.com');
        
        var loadNumber = $("//input[@id='loadNumber']");
        await expect(loadNumber).toHaveAttributeContaining('ng-reflect-model', 'shivaram@gmail.com');
        
        var commodityInfo = $("//input[@id='commodityInfo']");
        await expect(commodityInfo).toHaveAttributeContaining('ng-reflect-model', 'shivaram@gmail.com');

       
        //Enter Incident Information - II
        ("//mat-expansion-panel-header[@id='mat-expansion-panel-header-1']").click();  
        
        var citationNumber = $("//input[@id='citationNumber']");
        await expect(citationNumber).toHaveAttributeContaining('ng-reflect-model', 'shivaram@gmail.com');
        
        var accidentSeverity = $("//select[@id='accidentSeverity']");
        await expect(accidentSeverity).toHaveAttributeContaining('ng-reflect-model', 'shivaram@gmail.com');


        var copyOfReport = await $("//input[@id='copyOfReport-radio1']");
        console.log(await copyOfReport.isSelected());

        var drugTest = await $("//input[@id='drugTest-radio1']");
        console.log(await drugTest.isSelected());

        var alcoholTest = await $("//input[@id='alcoholTest-radio1']");
        console.log(await alcoholTest.isSelected());

        var preventable = await $("//input[@id='preventable-radio1']");
        console.log(await preventable.isSelected());

        var dotReportable = await $("//input[@id='dotReportable-radio1']");
        console.log(await dotReportable.isSelected());

        var hazmat = await $("//input[@id='hazmat-radio1']");
        console.log(await hazmat.isSelected());


        
        var insurer = $("//input[@id='insurer']");
        await expect(insurer).toHaveAttributeContaining('ng-reflect-model', 'shivaram@gmail.com');

        
        var claimNumber = $("//input[@id='claimNumber']");
        await expect(claimNumber).toHaveAttributeContaining('ng-reflect-model', 'shivaram@gmail.com');
        
        var damageValue = $("//input[@id='damageValue']");
        await expect(damageValue).toHaveAttributeContaining('ng-reflect-model', 'shivaram@gmail.com');

        var damageRecovery = $("//input[@id='damageRecovery']");
        await expect(damageRecovery).toHaveAttributeContaining('ng-reflect-model', 'shivaram@gmail.com');

        
        var reasonForDamage = $("//input[@id='reasonForDamage']");
        await expect(reasonForDamage).toHaveAttributeContaining('ng-reflect-model', 'shivaram@gmail.com');

        
        var claimStatus = $("//input[@id='claimStatus']");
        await expect(claimStatus).toHaveAttributeContaining('ng-reflect-model', 'shivaram@gmail.com');

        
        var claimComments = $("//input[@id='claimComments']");
        await expect(claimComments).toHaveAttributeContaining('ng-reflect-model', 'shivaram@gmail.com');


       
        //close the view page
        var closev =  $("//button[@class='close']"); 
        closev.$("//button[@class='close']").click();
        closev.waitForExist({ reverse: true });
        await browser.pause(500)
    })       

    xit("Delete the incident", async()=>{

        await $("#search").setValue('AR321B');
        await  browser.pause(1000);
        await $("//a[normalize-space()='Delete']").click();    
        await expect(LoginPage.toastMessage).toHaveTextContaining("incident Deleted Successfully");
        await browser.pause(1000);
              
       })

});
