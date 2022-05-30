const constANT = require('./common.js')
//const expectchai = require('chai').expect
const LoginPage = require('./utility/loginpage.js')


describe('LoadMiles application',function() 
{

    it("Login with valid UserId Valid Password", async()=>{
        //login with valid userid and valid password
        browser.maximizeWindow();
        await browser.url(constANT.LOGIN_URL);
        await browser.pause(1000);
        LoginPage.Login(constANT.VALID_USRID, constANT.VALID_PAWD);         
        await  browser.pause(1000);
        const ink = $(".poweroff");
        ink.waitForExist();  
        // Browser waits untill the poweroff button appears After login, if the poweorff button didnt appear in 5 secnds testcase will fail

       })

       //Driver Information Part-I testing Required inputs

       it("Verify Driver Information valid inputs",async()=>{

        //Open Driver
        await  $("//h5[normalize-space()='Drivers']");
        await   $("//h5[normalize-space()='Drivers']").click();

        //Add Driver
        await   $("button[type='add']");
        await   $("button[type='add']").click();
        //Submitting empty form and checking for the validation fields 
        //click on submit and check with toast meesage
        await   $("//div[@class='card-footer ng-star-inserted']//button[@type='submit'][normalize-space()='Submit']").click();   
        await expect(LoginPage.toastMessage).toHaveTextContaining("Please fix the validations");
        await browser.pause(500);
        
        // negative Test cases for required field
        const spanunit = await $("//span[normalize-space()='Full Name is Required']");
        await expect(spanunit).toHaveTextContaining("Full Name is Required");
        
        const spanstate = await $("//span[normalize-space()='Cell phone is Required']");
        await expect(spanstate).toHaveTextContaining("Cell phone is Required");

        const spanplate = await $("//span[normalize-space()='Email is Required']");
        await expect(spanplate).toHaveTextContaining("Email is Required");

        const spanvin = await $("//span[normalize-space()='Emergency phone is Required']");
        await expect(spanvin).toHaveTextContaining("Emergency phone is Required");
        //
  })
    
        //Entering Driver Data 
       it("Create Driver",async()=>{
        //Entering Driver Information Part-I
        await $('#firstName').setValue("Rahul");
        await $("//ngx-intl-tel-input[@id='cellPhone']//input[@id='phone']").setValue("3178509546");
        await $('#email').setValue("rahulram@gmail.com");
        await $("//ngx-intl-tel-input[@id='emergencyPhone']//input[@id='phone']").setValue("3178459546"); 

        //Entering Driver Information Part-II
        const selectors = $$('.mat-expansion-panel');    
        await selectors[0].click();

        await $('#displayName').setValue("Rahulshetty");
        await $("#dob").setValue("12/23/1991");
        await $('#ssn').setValue("856932475");
        await $("//input[@placeholder='Search Nearest Location']").setValue("Hyderabad");
        await $("(//span[contains(text(),'Hyderabad')])[1]").click();

        //Enter Employment Information
        const employment = $$('.mat-expansion-panel');    
        await employment[1].click();

        await $("#inline-radio1").click();
        await $("#hireDate").setValue("11/23/2020");
        await $("#terminationDate").setValue("05/23/2021");
        await $('#vendorAccount').setValue("8569745632");
        await $('#quickPayId').setValue("ACNT8654893215");
        await $('#bankname').setValue("Bank of America");
        const accountType = await $('#acctype');
        await accountType.selectByAttribute('value', '0'); 
        await $('#accountnumber').setValue("5698236478951248");
        await $('#routingNumber').setValue("746598234");


        //Enter Safety and Compliance Information
        const maintenance = $$('.mat-expansion-panel');    
        maintenance[2].click();
        
        const cdlClass = await $('#cdlClass');
        await cdlClass.selectByAttribute('value', '1'); 
        await $('#cdlNumber').setValue("8569346");
        await $('#cdlState').setValue("BHUOP");
        await $("#cdlexpirydate").setValue("06/20/2021");
        await $("#medicalCardExpiration").setValue("06/22/2022");
        await $('#yearsOfExperience').setValue("10");
        await $('#statesOperated').setValue("BHUOP");
        await $('#safetyAwards').setValue("America");
        await $('#specialTraining').setValue("American Transports");
     
          //Verify Payrate Table      
          const payrate =  $$('.mat-expansion-panel');   
          payrate[3].click();
  
          await $("//i[@class='dx-icon dx-icon-edit-button-addrow']").click();
          await browser.pause(300);
          await $("//input[@role='combobox']").setValue("5/17/2022");
          browser.keys("\uE004")  
  
          await $("//div[@class='dx-dropdowneditor-icon']").click();
          await $("//div[contains(text(),'Per Mile')]").click();
          browser.keys("\uE004")  
  
          await $("//input[@role='spinbutton']").setValue("100");
          browser.keys("\uE004")  
  
          await $("//input[@role='spinbutton']").setValue("10");
          browser.keys("\uE004")  
  
          await $("//input[@role='spinbutton']").setValue("10");
          browser.keys("\uE004")  
          await browser.pause(1000);
          browser.keys("\uE004")  
          
          //Verify Drug and Medical Test        
          const medical =  $$('.mat-expansion-panel');   
          medical[4].click();
          await browser.pause(1000);
          await $("(//i[@class='dx-icon dx-icon-edit-button-addrow'])[2]").click();
          await browser.pause(300);
          await $("//input[@role='combobox']").setValue("5/20/2022");
          browser.keys("\uE004")   
  
          await $("//input[@role='textbox']").setValue("Yes");
          browser.keys("\uE004")  

          await $("//div[@class='dx-dropdowneditor-icon']").click();
          await $("//div[contains(text(),'Pass')]").click();
          browser.keys("\uE004")  
  
          await $("//input[@role='textbox']").setValue("Drug Test is Required");
          browser.keys("\uE004")   

        await browser.pause(1000);
        //Submit Driver Form and checks with toast message
        await $('.card-footer'); 
        await $("//div[@class='ng-star-inserted']//button[@type='submit'][normalize-space()='Submit']").click();        
        await expect(LoginPage.toastMessage).toHaveTextContaining("Driver Data Submitted");
        await browser.pause(1000);

       });

 });

//check the entered Driver data with view page

describe('Verify The Driver Data',function() 
{

    it("Veiw Driver", async()=>{

        //Verify Driver Information Part-I Viw Data
        await $('.card-header'); 
        await $("#search").setValue('Rahul');

        await $("//a[normalize-space()='View']").click();
        await browser.pause(500);

        const firstName = $('#firstName');
        await expect(firstName).toHaveAttributeContaining('ng-reflect-model', 'Rahul');

        const phone = $("//ngx-intl-tel-input[@id='cellPhone']//input[@id='phone']");
        await expect(phone).toHaveAttributeContaining('ng-reflect-model', '317-850-9546');

        const email = $('#email');
        await expect(email).toHaveAttributeContaining('ng-reflect-model', 'rahulram@gmail.com');

        const ephone = $("//ngx-intl-tel-input[@id='emergencyPhone']//input[@id='phone']");
        await expect(ephone).toHaveAttributeContaining('ng-reflect-model', '317-845-9546');


          //Verify Driver Information Part-II
        const selectors = $$('.mat-expansion-panel');    
        await selectors[0].click();
  
        const displayName = $('#displayName');
        await expect(displayName).toHaveAttributeContaining('ng-reflect-model', 'Rahulshetty');

        const dob = $("#dob");
        await expect(dob).toHaveAttributeContaining('ng-reflect-model', '1991-12-23');

        const ssn = $('#ssn');
        await expect(ssn).toHaveAttributeContaining('ng-reflect-model', '856932475');

        
        // var location = $("//input[@placeholder='Search Nearest Location']");
        // await expect(location).toHaveAttributeContaining('ng-reflect-model', '401, Main Rd, near Gokul Chat,');

        //verify Employment Information
        const employment = $$('.mat-expansion-panel');    
        await employment[1].click();
  
        const Employee = $('#inline-radio1');
        await expect(await Employee).toHaveAttributeContaining('ng-reflect-model', 'true');
 
        const hireDate = $('#hireDate');
        await expect(hireDate).toHaveAttributeContaining('ng-reflect-model', '2020-11-23');
      
        const terminationDate = $('#terminationDate');
        await expect(terminationDate).toHaveAttributeContaining('ng-reflect-model', '2021-05-23');

        const vendorAccount = $("#vendorAccount");
        await expect(vendorAccount).toHaveAttributeContaining('ng-reflect-model', '8569745632');

        const quickPayId = $('#quickPayId');
        await expect(quickPayId).toHaveAttributeContaining('ng-reflect-model', 'ACNT8654893215');
        
        const bankname = $('#bankname');
        await expect(bankname).toHaveAttributeContaining('ng-reflect-model', 'Bank of America');

        const acctype = $("#acctype");
        await expect(acctype).toHaveAttributeContaining('ng-reflect-model', '0');

        const accountnumber = $('#accountnumber');
        await expect(accountnumber).toHaveAttributeContaining('ng-reflect-model', '5698236478951248');
        
        const routingNumber = $('#routingNumber');
        await expect(routingNumber).toHaveAttributeContaining('ng-reflect-model', '746598234');
  
        //Verify Safety and Compliance Information
        const maintenance = $$('.mat-expansion-panel');    
        maintenance[2].click();
          
        const cdlClass = $("#cdlClass");
        await expect(cdlClass).toHaveAttributeContaining('ng-reflect-model', '1');

        const cdlNumber = $('#cdlNumber');
        await expect(cdlNumber).toHaveAttributeContaining('ng-reflect-model', '8569346');
        
        const cdlState = $("#cdlState");
        await expect(cdlState).toHaveAttributeContaining('ng-reflect-model', 'BHUOP');

        const cdlexpirydate = $('#cdlexpirydate');
        await expect(cdlexpirydate).toHaveAttributeContaining('ng-reflect-model', '2021-06-20');
        
        const medicalCardExpiration = $('#medicalCardExpiration');
        await expect(medicalCardExpiration).toHaveAttributeContaining('ng-reflect-model', '2022-06-22');

        const yearsOfExperience = $("#yearsOfExperience");
        await expect(yearsOfExperience).toHaveAttributeContaining('ng-reflect-model', '10');

        const statesOperated = $('#statesOperated');
        await expect(statesOperated).toHaveAttributeContaining('ng-reflect-model', 'BHUOP');
        
        const safetyAwards = $('#safetyAwards');
        await expect(safetyAwards).toHaveAttributeContaining('ng-reflect-model', 'America');

        const specialTraining = $('#specialTraining');
        await expect(specialTraining).toHaveAttributeContaining('ng-reflect-model', 'American Transports');
      
        //Verify Payrate Table      
        const payrate =  $$('.mat-expansion-panel');   
        payrate[3].click();

      
        var serviceDate = $("//td[normalize-space()='5/17/2022']");
         await expect(serviceDate).toHaveText('5/17/2022');
 
         var category = $("//td[normalize-space()='Per Mile']");
         await expect(category).toHaveText('Per Mile');
 
         var currentMiles = $("//td[normalize-space()='100']");
         await expect(currentMiles).toHaveText('100');
 
         var numberOfMiles = $("//td[normalize-space()='10']");
         await expect(numberOfMiles).toHaveText('10');

         var numberOfMiles = $("//td[normalize-space()='10']");
         await expect(numberOfMiles).toHaveText('10');

       
        //Verify Drug and Medical Test        
        const medical =  $$('.mat-expansion-panel');   
        medical[4].click();

        
        var serviceDate = $("//td[normalize-space()='5/20/2022']");
         await expect(serviceDate).toHaveText('5/20/2022');
 
         var category = $("//td[normalize-space()='Yes']");
         await expect(category).toHaveText('Yes');
 
         var currentMiles = $("//td[normalize-space()='Pass']");
         await expect(currentMiles).toHaveText('Pass');
 
         var numberOfMiles = $("//td[normalize-space()='Drug Test is Required']");
         await expect(numberOfMiles).toHaveText('Drug Test is Required');

        //close the view page
        const closev =  $("//button[@class='close']"); 
        closev.$("//button[@class='close']").click();
        closev.waitForExist();
        await browser.pause(500)

       })
   
});


// Edit the Driver by clicking on edit button
describe('Edit Driver Data',function() 
{
       it("Update Driver",async()=>{

            //open the edit Driver form
            await $('.card-header'); 
            await $("#search").setValue('Rahul');
            await $("//a[normalize-space()='Edit']").click();
            await browser.pause(1000);
             //Edit Driver Information Part-I
             await $('#firstName').setValue("Rakesh");
             await $("//ngx-intl-tel-input[@id='cellPhone']//input[@id='phone']").setValue("3178509963");
             await $('#email').setValue("rameshrao@gmail.com");
             await $("//ngx-intl-tel-input[@id='emergencyPhone']//input[@id='phone']").setValue("3178852546"); 
     
             //Edit Driver Information Part-II
             const selectors = $$('.mat-expansion-panel');    
             await selectors[0].click();
     
             await $('#displayName').setValue("RameshKumar");
             await $("#dob").setValue("07/23/1996");
             await $('#ssn').setValue("856996375");
             await $("//input[@placeholder='Search Nearest Location']").setValue("karimnagar");
             await $("(//span[contains(text(),'Karimnagar')])[1]").click();     
     
             //Enter Employment Information
             const employment = $$('.mat-expansion-panel');    
             await employment[1].click();
     
             await $("#inline-radio2").click();
             await $("#hireDate").setValue("11/20/2022");
             await $("#terminationDate").setValue("05/23/2023");
             await $('#vendorAccount').setValue("8569753632");
             await $('#quickPayId').setValue("ACNT8654893215");
             await $('#bankname').setValue("Bank of USA");
             const accountType = await $('#acctype');
             await accountType.selectByAttribute('value', '1'); 
             await $('#accountnumber').setValue("5698238651248");
             await $('#routingNumber').setValue("746575234");
     
     
             //Enter Safety and Compliance Information
             const maintenance = $$('.mat-expansion-panel');    
             maintenance[2].click();
             
             const cdlClass = await $('#cdlClass');
             await cdlClass.selectByAttribute('value', '2'); 
             await $('#cdlNumber').setValue("8569852");
             await $('#cdlState').setValue("UIYTP");
             await $("#cdlexpirydate").setValue("04/20/2023");
             await $("#medicalCardExpiration").setValue("06/29/2023");
             await $('#yearsOfExperience').setValue("09");
             await $('#statesOperated').setValue("KURVH");
             await $('#safetyAwards').setValue("Five");
             await $('#specialTraining').setValue("USA Transports");
          
               //Verify Payrate Table      
               const payrate =  $$('.mat-expansion-panel');   
               payrate[3].click();
               await browser.pause(2000);
              var serviceDate = $("//td[normalize-space()='5/17/2022']");  
              serviceDate.doubleClick();
              await browser.pause(3000);

               await $("//input[@role='combobox']").setValue("3/17/2022");
               browser.keys("\uE004")  
       
               await $("//div[@class='dx-dropdowneditor-icon']").click();
               await $("//div[contains(text(),'Per Mile')]").click();
               browser.keys("\uE004")  
       
               await $("//input[@role='spinbutton']").setValue("100");
               browser.keys("\uE004")  
       
               await $("//input[@role='spinbutton']").setValue("10");
               browser.keys("\uE004")  
       
               await $("//input[@role='spinbutton']").setValue("10");
               browser.keys("\uE004")  
               await browser.pause(1000);
               browser.keys("\uE004")  
               
               //Verify Drug and Medical Test        
               const medical =  $$('.mat-expansion-panel');   
               medical[4].click();
               await browser.pause(2000);
               var serviceDate = $("//td[normalize-space()='5/20/2022']");  
              serviceDate.doubleClick();
              await browser.pause(3000);
               await $("//input[@role='combobox']").setValue("5/17/2022");
               browser.keys("\uE004")   
       
               await $("//input[@role='textbox']").setValue("NO");
               browser.keys("\uE004")  
     
               await $("//div[@class='dx-dropdowneditor-icon']").click();
               await $("//div[contains(text(),'Fail')]").click();
               browser.keys("\uE004")  
       
               await $("//input[@role='textbox']").setValue("Medical Test is Required");
               browser.keys("\uE004")   
     
        //Submit Updated Driver Form and checks with toast message
        await $('.card-footer'); 
         $("//div[@class='ng-star-inserted']//button[@type='submit'][normalize-space()='Update']").click();    
        await expect(LoginPage.toastMessage).toHaveTextContaining("Driver Data Updated successfully");
        await browser.pause(500);
       })
});


//check the updated driver by clicking on view page

describe('Verify the updated data',function() 
{

    it("View Driver Data", async()=>{
        //open the view page
        await $('.card-header'); 

        await $("#search").setValue('Rakesh');

        await $("//a[normalize-space()='View']").click();
        await browser.pause(500);

        const firstName = $('#firstName');
        await expect(firstName).toHaveAttributeContaining('ng-reflect-model', 'Rakesh');

        const phone = $("//ngx-intl-tel-input[@id='cellPhone']//input[@id='phone']");
        await expect(phone).toHaveAttributeContaining('ng-reflect-model', '317-850-9963');

        const email = $('#email');
        await expect(email).toHaveAttributeContaining('ng-reflect-model', 'rameshrao@gmail.com');

        const ephone = $("//ngx-intl-tel-input[@id='emergencyPhone']//input[@id='phone']");
        await expect(ephone).toHaveAttributeContaining('ng-reflect-model', '317-885-2546');


          //Verify Driver Information Part-II
        const selectors = $$('.mat-expansion-panel');    
        await selectors[0].click();
  
        const displayName = $('#displayName');
        await expect(displayName).toHaveAttributeContaining('ng-reflect-model', 'RameshKumar');

        const dob = $("#dob");
        await expect(dob).toHaveAttributeContaining('ng-reflect-model', '1996-07-23');

        const ssn = $('#ssn');
        await expect(ssn).toHaveAttributeContaining('ng-reflect-model', '856996375');

        // var location = $("//input[@placeholder='Search Nearest Location']");
        // await expect(location).toHaveAttributeContaining('ng-reflect-model', '5-10, Saraswathi Nagar, Karimn');
        
  
        //verify Employment Information
        const employment = $$('.mat-expansion-panel');    
        await employment[1].click();
  
        const Employee = $('#inline-radio2');
        await expect(await Employee).toHaveAttributeContaining('ng-reflect-model', 'false');

        const hireDate = $('#hireDate');
        await expect(hireDate).toHaveAttributeContaining('ng-reflect-model', '2022-11-20');
      
        const terminationDate = $('#terminationDate');
        await expect(terminationDate).toHaveAttributeContaining('ng-reflect-model', '2023-05-23');

        const vendorAccount = $("#vendorAccount");
        await expect(vendorAccount).toHaveAttributeContaining('ng-reflect-model', '8569753632');

        const quickPayId = $('#quickPayId');
        await expect(quickPayId).toHaveAttributeContaining('ng-reflect-model', 'ACNT8654893215');
        
        const bankname = $('#bankname');
        await expect(bankname).toHaveAttributeContaining('ng-reflect-model', 'Bank of USA');

        const acctype = $("#acctype");
        await expect(acctype).toHaveAttributeContaining('ng-reflect-model', '1');

        const accountnumber = $('#accountnumber');
        await expect(accountnumber).toHaveAttributeContaining('ng-reflect-model', '5698238651248');
        
        const routingNumber = $('#routingNumber');
        await expect(routingNumber).toHaveAttributeContaining('ng-reflect-model', '746575234');
  
        //Verify Safety and Compliance Information
        const maintenance = $$('.mat-expansion-panel');    
        maintenance[2].click();
          
        
        const cdlClass = $("#cdlClass");
        await expect(cdlClass).toHaveAttributeContaining('ng-reflect-model', '2');

        const cdlNumber = $('#cdlNumber');
        await expect(cdlNumber).toHaveAttributeContaining('ng-reflect-model', '8569852');
        
        const cdlState = $("#cdlState");
        await expect(cdlState).toHaveAttributeContaining('ng-reflect-model', 'UIYTP');

        const cdlexpirydate = $('#cdlexpirydate');
        await expect(cdlexpirydate).toHaveAttributeContaining('ng-reflect-model', '2023-04-20');
        
        const medicalCardExpiration = $('#medicalCardExpiration');
        await expect(medicalCardExpiration).toHaveAttributeContaining('ng-reflect-model', '2023-06-29');

        const yearsOfExperience = $("#yearsOfExperience");
        await expect(yearsOfExperience).toHaveAttributeContaining('ng-reflect-model', '9');

        const statesOperated = $('#statesOperated');
        await expect(statesOperated).toHaveAttributeContaining('ng-reflect-model', 'KURVH');
        
        const safetyAwards = $('#safetyAwards');
        await expect(safetyAwards).toHaveAttributeContaining('ng-reflect-model', 'Five');

        const specialTraining = $('#specialTraining');
        await expect(specialTraining).toHaveAttributeContaining('ng-reflect-model', 'USA Transports');
      
        //Verify Payrate Table      
        const payrate =  $$('.mat-expansion-panel');   
        payrate[3].click();
  
        var serviceDate = $("//td[normalize-space()='3/17/2022']");
         await expect(serviceDate).toHaveText('3/17/2022');
 
         var category = $("//td[normalize-space()='Per Mile']");
         await expect(category).toHaveText('Per Mile');
 
         var currentMiles = $("//td[normalize-space()='100']");
         await expect(currentMiles).toHaveText('100');
 
         var numberOfMiles = $("//td[normalize-space()='10']");
         await expect(numberOfMiles).toHaveText('10');

         var numberOfMiles = $("//td[normalize-space()='10']");
         await expect(numberOfMiles).toHaveText('10');

       
        //Verify Drug and Medical Test        
        const medical =  $$('.mat-expansion-panel');   
        medical[4].click();

        
        var serviceDate = $("//td[normalize-space()='5/17/2022']");
         await expect(serviceDate).toHaveText('5/17/2022');
 
         var category = $("//td[normalize-space()='NO']");
         await expect(category).toHaveText('NO');
 
         var currentMiles = $("//td[normalize-space()='Fail']");
         await expect(currentMiles).toHaveText('Fail');
 
         var numberOfMiles = $("//td[normalize-space()='Medical Test is Required']");
         await expect(numberOfMiles).toHaveText('Medical Test is Required');

        //close the view page
        const closev =  $("//button[@class='close']"); 
        closev.$("//button[@class='close']").click();
        closev.waitForExist();
        await browser.pause(500)
    })       

    xit("Delete the Driver", async()=>{

        await $("#search").setValue('Rakesh');
        await $("//a[normalize-space()='Delete']").click();    
        await expect(LoginPage.toastMessage).toHaveTextContaining("Driver Data Deleted Successfully");
        await browser.pause(1000);
              
       })

});







