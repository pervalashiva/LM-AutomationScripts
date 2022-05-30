var CONSTANT = require('./common.js')
var expectchai = require('chai').expect
var LoginPage = require('./utility/loginpage.js')

describe('LoadMiles application',function() 
{

    it("Login with valid UserId Valid Password", async()=>
    {
        //login with valid userid and valid password
        browser.maximizeWindow()
        await   browser.url(CONSTANT.LOGIN_URL);
        LoginPage.Login(CONSTANT.VALID_USRID, CONSTANT.VALID_PAWD);        
        await  browser.pause(1000);
        var ink = $(".poweroff");
        ink.waitForExist();  
        // Browser waits untill the poweroff button appears After login, if the poweorff button didnt appear in 5 secnds testcase will fail

    })

       //Trailer Information Part-I testing Required inputs

       it("Verify Trailer Required inputs",async()=>{

        //Open trailer
        await  $("//h5[normalize-space()='Trailers']");
        await   $("//h5[normalize-space()='Trailers']").click();

        //Add trailer
        await   $("button[type='add']");
        await   $("button[type='add']").click();
        //click  submit the empty form and checkthe validation message with toast meesage
        await   $("//div[@class='card-footer ng-star-inserted']//button[@type='submit'][normalize-space()='Submit']").click();   
        await expect(LoginPage.toastMessage).toHaveTextContaining("Please fix the validations");
        await browser.pause(1000);

         // negative Test cases for required fields
         var spanunit = await $("//span[normalize-space()='Unit Number is required']");
         await expect(spanunit).toHaveTextContaining("Unit Number is required");
 
         var spanstate = await $("//span[normalize-space()='Register state is required']");
         await expect(spanstate).toHaveTextContaining("Register state is required");
 
         var spanplate = await $("//span[normalize-space()='Plate number is required']");
         await expect(spanplate).toHaveTextContaining("Plate number is required");
 
         var spanvin = await $("//span[normalize-space()='VIN is required']");
         await expect(spanvin).toHaveTextContaining("VIN is required");
        
  })
    
       it("Create Trailer",async()=>{
        //Enter Trailer Information Part-I
        await  $('input[id="unitNumber"]').setValue("CA258");
        var selectTrailer = await $('#trailertype');
        await selectTrailer.selectByAttribute('value', 'Reefer');
        await  $('input[id="registerState"]').setValue("CA");
        await  $('input[id="plateNumber"]').setValue("LHD80519");
        await  $('input[id="vin"]',).setValue("1XNBU1672M1125581");
        //Enter Trailer Information Part-II
        var selectors = $$('.mat-expansion-panel');    
        await selectors[0].click();
        
        await $('#make');
        await $('input[id="make"]').setValue("6X16 Red Hot Utility");
        await $('input[id="color"]').setValue("Brown");
        await $('input[id="year"]').setValue("2022");
        await $('input[id="reeferMake"]').setValue("abc123");
        await $('input[id="reeferModal"]').setValue("U6X16TBRAKE");
        await $('input[id="reeferMiles"]').setValue("123");
        await $('input[id="reeferHours"]').setValue("30");
        //var selectTruck = await $('#truck');
        //await selectTruck.selectByAttribute('value', 'Reefer');
        await $('textarea').setValue("US123");

        //Enter Safety Information
        var saftyinfo = $$('.mat-expansion-panel');    
        await saftyinfo[1].click();
        await $('#inspectionExpirydate');
        await $('#inspectionExpirydate').setValue("08/12/2022");
        await $('#platesExpirationDate').setValue("02/12/2021");
        await $('#insuranceExpirationDate').setValue("02/09/2022");
        await $('input[id="insuranceValue"]').setValue("756983148");

        //Enter Maintenance Records
        var maintenance = $$('.mat-expansion-panel');    
        maintenance[2].click();

        var maintenance = $$('.mat-expansion-panel');    
        maintenance[2].click();
        await $("//i[@class='dx-icon dx-icon-edit-button-addrow']").click();
        await browser.pause(300);
        await $("//input[@role='combobox']").setValue("5/17/2022");
        browser.keys("\uE004")  

        await $("//div[@class='dx-dropdowneditor-icon']").click();
        await $("//div[contains(text(),'Repairs')]").click();
        browser.keys("\uE004")  

        await $("//input[@role='spinbutton']").setValue("200");
        browser.keys("\uE004")  

        await $("//input[@role='spinbutton']").setValue("300");
        browser.keys("\uE004")  

        await $("//input[@role='spinbutton']").setValue("600");
        browser.keys("\uE004")  

        await $("//input[@role='textbox']").setValue("BAJAJ");
        browser.keys("\uE004")  

        await $("//input[@role='spinbutton']").setValue("1000");
        browser.keys("\uE004")  

        await $("//input[@role='textbox']").setValue("Trailer");
        browser.keys("\uE004")  

        //Enter Ownership Information        
        var ownership =  $$('.mat-expansion-panel');   
        ownership[3].click();

        //selecting radio buttons
       var radios = $$("#inline-radio1");
        await radios[0].click();
        $("#inline-radio1").click();
        await $('#price').setValue("123");
        await $('#purchaseDate').setValue('06/08/2022');
        await $('#operationDate').setValue('02/12/2021');
        await $('#financer').setValue("123");
        await $('#dealer').setValue("BAJAJ");
        var leased = $$("#inline-radio2")
        await leased[1].click();
        await $('#leasedFrom').setValue("USTRUCKS");
        await $('#leasstart').setValue('09/20/2022');
        await $('#leaseExpiryDate').setValue('04/26/2021');
        await $('#leaseInstallment').setValue("12");
        await $('#reeferPurchasedate').setValue('02/12/2021');
        await $('#reeferPrice').setValue("600");
        await $('#installment').setValue("15");
        //Submit Truck Form and checks with toast message
        await $('.card-footer'); 
        await $("//div[@class='ng-star-inserted']//button[@type='submit'][normalize-space()='Submit']").click();
        await expect(LoginPage.toastMessage).toHaveTextContaining("Trailer Data Submitted");
        await browser.pause(1000);
       })

    });


    //check the entered trailer data with view page

describe('Verify The Trailer Data',function() 
{

    it("View Data", async()=>{

        //check Trailer Information Part-I Viw Data
        await $('.card-header'); 
        await $("#search").setValue('CA258');
        await  browser.pause(1000);
        await $("//a[normalize-space()='View']").click();
        await browser.pause(1000);

        var untitNmbr = $('#unitNumber');
        await expect(untitNmbr).toHaveAttributeContaining('ng-reflect-model', 'CA258');

        var trailerType = $('#trailertype');
        await expect(trailerType).toHaveAttributeContaining('ng-reflect-model', 'Reefer');

        var regState = $('#registerState');
        await expect(regState).toHaveAttributeContaining('ng-reflect-model', 'CA');

        var plateNumber = $('#plateNumber');
        await expect(plateNumber).toHaveAttributeContaining('ng-reflect-model', 'LHD80519');

        var vin = $('#vin');
        await expect(vin).toHaveAttributeContaining('ng-reflect-model', '1XNBU1672M1125581');

        //check Trailer Information Part-II view page
        var trailerinfo = $$('.mat-expansion-panel');    
        await trailerinfo[0].click();

        var make = $('#make');
        await expect(make).toHaveAttributeContaining('ng-reflect-model', '6X16 Red Hot Utility');

        var color = $('#color');
        await expect(color).toHaveAttributeContaining('ng-reflect-model', 'Brown');

        var myyom = $('#year');
        await expect(myyom).toHaveAttributeContaining('ng-reflect-model', '2022');
        
        var reeferMake = $('#reeferMake');
        await expect(reeferMake).toHaveAttributeContaining('ng-reflect-model', 'abc123');

        var reeferModel = $('#reeferModal');
        await expect(reeferModel).toHaveAttributeContaining('ng-reflect-model', 'U6X16TBRAKE');

        var reeferMiles = $('#reeferMiles');
        await expect(reeferMiles).toHaveAttributeContaining('ng-reflect-model', '123');

        var reeferHours = $('#reeferHours');
        await expect(reeferHours).toHaveAttributeContaining('ng-reflect-model', '30');

        //Truck dropdown TODO

        var mytext = $('textarea');
        await expect(mytext).toHaveAttributeContaining('ng-reflect-model', 'US123');

        //check Safety Information in view page        
        var saftyinfo = $$('.mat-expansion-panel');    
        await saftyinfo[1].click();
        
        var inspectionExpirydate = $('#inspectionExpirydate');
        await expect(inspectionExpirydate).toHaveAttributeContaining('ng-reflect-model', '2022-08-12');

        var platesExpirationDate = $('#platesExpirationDate');
        await expect(platesExpirationDate).toHaveAttributeContaining('ng-reflect-model', '2021-02-12');
        
        var insuranceExpirationDate = $('#insuranceExpirationDate');
        await expect(insuranceExpirationDate).toHaveAttributeContaining('ng-reflect-model', '2022-02-09');
        var insuranceValue = $('#insuranceValue');
        await expect(insuranceValue).toHaveAttributeContaining('ng-reflect-model', '756983148');
        //check Maintenance Records view page
        var maintenance = $$('.mat-expansion-panel');    
        maintenance[2].click();

        
        var serviceDate = $("//td[normalize-space()='5/17/2022']");
        await expect(serviceDate).toHaveText('5/17/2022');

        var category = $("//td[normalize-space()='Repairs']");
        await expect(category).toHaveText('Repairs');

        var currentMiles = $("//td[normalize-space()='200']");
        await expect(currentMiles).toHaveText('200');

        var numberOfMiles = $("//td[normalize-space()='300']");
        await expect(numberOfMiles).toHaveText('300');

        var nextService = $("//td[normalize-space()='600']");
        await expect(nextService).toHaveText('600');

        var serviceFrom = $("//td[normalize-space()='BAJAJ']");
        await expect(serviceFrom).toHaveText('BAJAJ');

        var cost = $("//td[normalize-space()='1000']");
        await expect(cost).toHaveText('1000') 
        cost.doubleClick()
        browser.keys("\uE004")  

        var comments = $("//td[normalize-space()='Trailer']");
        await expect(comments).toHaveText('Trailer');


         //check Ownership Information view page
        var ownership = $$('.mat-expansion-panel');    
        ownership[3].click();

        var owned = $$('input[id="inline-radio1"]');
        await expect(await owned[0]).toHaveAttributeContaining('ng-reflect-model', 'true');

        var myprice = $('#price');
        await expect(myprice).toHaveAttributeContaining('ng-reflect-model', '123');
                        
        var purchaseDate = $('#purchaseDate');
        await expect(purchaseDate).toHaveAttributeContaining('ng-reflect-model', '2022-06-08');

        var operationDate = $('#operationDate');
        await expect(operationDate).toHaveAttributeContaining('ng-reflect-model', '2021-02-12')
        
        var financer = $('#financer');
        await expect(financer).toHaveAttributeContaining('ng-reflect-model', '123');
  
        var dealer = $('#dealer');
        await expect(dealer).toHaveAttributeContaining('ng-reflect-model', 'BAJAJ');
 
        var leased = $$('input[id="inline-radio1"]');
        await expect(await leased[1]).toHaveAttributeContaining('ng-reflect-model', 'false');

        var leasedFrom = $('#leasedFrom');
        await expect(leasedFrom).toHaveAttributeContaining('ng-reflect-model', 'USTRUCKS');

        var leasstart = $('#leasstart');
        await expect(leasstart).toHaveAttributeContaining('ng-reflect-model', '2022-09-20');

        var leaseExpiryDate = $('#leaseExpiryDate');
        await expect(leaseExpiryDate).toHaveAttributeContaining('ng-reflect-model', '2021-04-26');

        var leaseInstallment = $('#leaseInstallment');
        await expect(leaseInstallment).toHaveAttributeContaining('ng-reflect-model', '12');

        var reeferPurchase = $('#reeferPurchasedate');
        await expect(reeferPurchase).toHaveAttributeContaining('ng-reflect-model', '2021-02-12');

        var reeferPrice = $('#reeferPrice');
        await expect(reeferPrice).toHaveAttributeContaining('ng-reflect-model', '600');

        var myinstallment = $('#installment');
        await expect(myinstallment).toHaveAttributeContaining('ng-reflect-model', '15');

        //close the view page
        var closev =  $("//button[@class='close']"); 
        closev.$("//button[@class='close']").click();
        closev.waitForExist();
        await browser.pause(500)

       })
   
});


//Edit the trailer data and update with new data

describe('Update The Trailer Data',function() 
{
        //entering trailer New data 
       it("Edit Trailer Information",async()=>{
        //open the edit trailer form
         $('.card-header'); 
         await $("#search").setValue('CA258');
        await  browser.pause(1000);
         $("//a[normalize-space()='Edit']").click();
        await browser.pause(500);
        //Entering Trailer Information Part-I
        await  $('input[id="unitNumber"]').setValue("AS258");
        var selectTrailer = await $('#trailertype');
        await selectTrailer.selectByAttribute('value', 'Step Deck');
        await  $('input[id="registerState"]').setValue("CA");
        await  $('input[id="plateNumber"]').setValue("LKJ80519");
        await  $('input[id="vin"]',).setValue("1XNBU1672M1125581");
        //Entering Trailer Information Part-II
        var selectors = $$('.mat-expansion-panel');    
        await selectors[0].click();
        
        await $('#make');
        await $('input[id="make"]').setValue("5X27 Blue Utility");
        await $('input[id="color"]').setValue("Green");
        await $('input[id="year"]').setValue("2020");
        await $('input[id="reeferMake"]').setValue("SDF852");
        await $('input[id="reeferModal"]').setValue("U6X16TBRAKE");
        await $('input[id="reeferMiles"]').setValue("478");
        await $('input[id="reeferHours"]').setValue("56");
       // var selectTruck = await $('#truck');
        //await selectTruck.selectByAttribute('value', '');

        await $('textarea').setValue("US Trailers");

        //Enter Safety Information
        var saftyinfo = $$('.mat-expansion-panel');    
        await saftyinfo[1].click();
        await $('#inspectionExpirydate');
        await $('#inspectionExpirydate').setValue("04/22/2022");
        await $('#platesExpirationDate').setValue("06/15/2022");
        await $('#insuranceExpirationDate').setValue("02/09/2025");
        await $('input[id="insuranceValue"]').setValue("756562848");

        //Enter Maintenance Records
            var maintenance = $$('.mat-expansion-panel');    
            maintenance[2].click();
            await browser.pause(3000);
            var serviceDate = $("//td[normalize-space()='5/17/2022']");  
            serviceDate.doubleClick();
            await browser.pause(3000);
            await $("//input[@role='combobox']").setValue("5/20/2022");
            browser.keys("\uE004")  
            await browser.pause(1000);
            await $("//div[@class='dx-dropdowneditor-icon']").click();
            await $("//div[contains(text(),'Rebuild')]").click();
            browser.keys("\uE004")  
    
            await $("//input[@role='spinbutton']").setValue("300");
            browser.keys("\uE004")  
    
            await $("//input[@role='spinbutton']").setValue("400");
            browser.keys("\uE004")  
    
            await $("//input[@role='spinbutton']").setValue("700");
            browser.keys("\uE004")  
    
            await $("//input[@role='textbox']").setValue("AutoMobiles");
            browser.keys("\uE004")  
    
            await $("//input[@role='spinbutton']").setValue("2000");
            browser.keys("\uE004")  
    
            await $("//input[@role='textbox']").setValue("Truck");
            browser.keys("\uE004")  
    

        //Enter Ownership Information        
        var owenership =  $$('.mat-expansion-panel');   
        owenership[3].click();

        //selecting radio buttons
        var radios = $$("#inline-radio1");
        radios[1].click();
         $("#inline-radio1").click();
        await $('#price').setValue("856");
        await $('#purchaseDate').setValue('06/25/2022');
        await $('#operationDate').setValue('02/09/2021');
        await $('#financer').setValue("852");
        await $('#dealer').setValue("CHITS");
        var leased = $$("#inline-radio2")
        leased[0].click();
        await $('#leasedFrom').setValue("BAJAJTRUCKS");
        await $('#leasstart').setValue('04/06/2022');
        await $('#leaseExpiryDate').setValue('08/26/2023');
        await $('#leaseInstallment').setValue("12");
        await $('#reeferPurchasedate').setValue('02/24/2025');
        await $('#reeferPrice').setValue("800");
        await $('#installment').setValue("13");
        //Will update the Trailer Form and checks with toast message
        await $('.card-footer'); 
        await $("//div[@class='ng-star-inserted']//button[@type='submit'][normalize-space()='Update']").click();
        await expect(LoginPage.toastMessage).toHaveTextContaining("Trailer Data Updated successfully");
        await browser.pause(1000);
       })

    });

        //check the entered updated trailer data with view page

describe('Verify The Updated Trailer Data',function() 
{

    it("View The Data", async()=>{

        //check updated Trailer Information Part-I Viw Data
        await $('.card-header'); 
        await $("#search").setValue('AS258');
        await  browser.pause(1000);
        await $("//a[normalize-space()='View']").click();
        await browser.pause(500);

        var untitNmbr = $('#unitNumber');
        await expect(untitNmbr).toHaveAttributeContaining('ng-reflect-model', 'AS258');
     
        var trailerType = $('#trailertype');
        await expect(trailerType).toHaveAttributeContaining('ng-reflect-model', 'Step Deck');

        var regState = $('#registerState');
        await expect(regState).toHaveAttributeContaining('ng-reflect-model', 'CA');

        var plateNumber = $('#plateNumber');
        await expect(plateNumber).toHaveAttributeContaining('ng-reflect-model', 'LKJ80519');

        var vin = $('#vin');
        await expect(vin).toHaveAttributeContaining('ng-reflect-model', '1XNBU1672M1125581');

        //check the updated Trailer Information Part-II view page
        var trailerinfo = $$('.mat-expansion-panel');    
        await trailerinfo[0].click();

        var mystart = $('#make');
        await expect(mystart).toHaveAttributeContaining('ng-reflect-model', '5X27 Blue Utility');

        var color = $('#color');
        await expect(color).toHaveAttributeContaining('ng-reflect-model', 'Green');

        var myyom = $('#year');
        await expect(myyom).toHaveAttributeContaining('ng-reflect-model', '2020');

        var reeferMake = $('#reeferMake');
        await expect(reeferMake).toHaveAttributeContaining('ng-reflect-model', 'SDF852');

        var reeferModel = $('#reeferModal');
        await expect(reeferModel).toHaveAttributeContaining('ng-reflect-model', 'U6X16TBRAKE');

        var reeferMiles = $('#reeferMiles');
        await expect(reeferMiles).toHaveAttributeContaining('ng-reflect-model', '478');

        var reeferHours = $('#reeferHours');
        await expect(reeferHours).toHaveAttributeContaining('ng-reflect-model', '56');

        //Truck dropdown TODO

        var mytext = $('textarea');
        await expect(mytext).toHaveAttributeContaining('ng-reflect-model', 'US Trailers');

        //check the updated Safety Information in view page
        
        var saftyInfo = $$('.mat-expansion-panel');    
        await saftyInfo[1].click();
        
        var inspectionExpirydate = $('#inspectionExpirydate');
        await expect(inspectionExpirydate).toHaveAttributeContaining('ng-reflect-model', '2022-04-22');

        var platesExpirationDate = $('#platesExpirationDate');
        await expect(platesExpirationDate).toHaveAttributeContaining('ng-reflect-model', '2022-06-15');
        
        var insuranceExpirationDate = $('#insuranceExpirationDate');
        await expect(insuranceExpirationDate).toHaveAttributeContaining('ng-reflect-model', '2025-02-09');

        var insuranceValue = $('#insuranceValue');
        await expect(insuranceValue).toHaveAttributeContaining('ng-reflect-model', '756562848');

        //check Maintenance Records view page
        var maintenance = $$('.mat-expansion-panel');    
        maintenance[2].click();


        var serviceDate = $("//td[normalize-space()='5/17/2022']");
        await expect(serviceDate).toHaveText('5/17/2022');

        var category = $("//td[normalize-space()='Rebuild']");
        await expect(category).toHaveText('Rebuild');

        var currentMiles = $("//td[normalize-space()='300']");
        await expect(currentMiles).toHaveText('300');

        var numberOfMiles = $("//td[normalize-space()='400']");
        await expect(numberOfMiles).toHaveText('400');

        var nextService = $("//td[normalize-space()='700']");
        await expect(nextService).toHaveText('700');

        var serviceFrom = $("//td[normalize-space()='AutoMobiles']");
        await expect(serviceFrom).toHaveText('AutoMobiles');

        var cost = $("//td[normalize-space()='2000']");
        await expect(cost).toHaveText('2000');

        cost.doubleClick()
        browser.keys("\uE004") 

        var comments = $("//td[normalize-space()='Truck");
        await expect(comments).toHaveText("Truck");


        //check Ownership Information view page
         var ownership = $$('.mat-expansion-panel');    
         ownership[3].click();
        
         var owned = $$('input[id="inline-radio1"]');
         await expect(await owned[1]).toHaveAttributeContaining('ng-reflect-model', 'true');
        
         var myprice = $('#price');
        await expect(myprice).toHaveAttributeContaining('ng-reflect-model', '856');
                        
        var purchaseDate = $('#purchaseDate');
        await expect(purchaseDate).toHaveAttributeContaining('ng-reflect-model', '2022-06-25');

        var operationDate = $('#operationDate');
        await expect(operationDate).toHaveAttributeContaining('ng-reflect-model', '2021-02-09')
        
        var financer = $('#financer');
        await expect(financer).toHaveAttributeContaining('ng-reflect-model', '852');
  
        var dealer = $('#dealer');
        await expect(dealer).toHaveAttributeContaining('ng-reflect-model', 'CHITS');
 
        var leased = $$('input[id="inline-radio1"]');
        await expect(await leased[0]).toHaveAttributeContaining('ng-reflect-model', 'false');
       
        var leasedFrom = $('#leasedFrom');
        await expect(leasedFrom).toHaveAttributeContaining('ng-reflect-model', 'BAJAJTRUCKS');

        var leasstart = $('#leasstart');
        await expect(leasstart).toHaveAttributeContaining('ng-reflect-model', '2022-04-06');

        var leaseExpiryDate = $('#leaseExpiryDate');
        await expect(leaseExpiryDate).toHaveAttributeContaining('ng-reflect-model', '2023-08-26');

        var leaseInstallment = $('#leaseInstallment');
        await expect(leaseInstallment).toHaveAttributeContaining('ng-reflect-model', '12');

        var reeferPurchase = $('#reeferPurchasedate');
        await expect(reeferPurchase).toHaveAttributeContaining('ng-reflect-model', '2025-02-24');

        var reeferPrice = $('#reeferPrice');
        await expect(reeferPrice).toHaveAttributeContaining('ng-reflect-model', '800');

        var myinstallment = $('#installment');
        await expect(myinstallment).toHaveAttributeContaining('ng-reflect-model', '13');

        //close the view page
        var closev =  $("//button[@class='close']"); 
        closev.$("//button[@class='close']").click();
        closev.waitForExist();
        await browser.pause(1000)

       })

       //the Trailer will be get deleted and will conform with toast message
       it("Delete The trailer", async()=>{
        await $("#search").setValue('AS258');
        await  browser.pause(1000);
        await $("//a[normalize-space()='Delete']").click();    
        expect(LoginPage.toastMessage).toHaveTextContaining("Trailer Deleted Successfully");
        await browser.pause(1000);
              
       })
   
});