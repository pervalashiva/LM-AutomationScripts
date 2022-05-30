var varANT = require('./common.js')
var expectchai = require('chai').expect
var LoginPage = require('./utility/loginpage.js')


describe('LoadMiles application',function() 
{

    it("Login with valid UserId Valid Password", async()=>{
        //login with valid userid and valid password
        browser.maximizeWindow()
        await browser.url(varANT.LOGIN_URL);
        await browser.pause(1000);
        LoginPage.Login(varANT.VALID_USRID, varANT.VALID_PAWD);         
        await  browser.pause(1000);
        var ink = $(".poweroff");
        ink.waitForExist();  
        // Browser waits untill the poweroff button appears After login, if the poweorff button didnt appear in 5 secnds testcase will fail

       })

       //Trucks Information Part-I testing Required inputs

       it("Verify Trucks Information valid inputs",async()=>{

        //Open truck
        await  $("//h5[normalize-space()='Trucks']");
        await   $("//h5[normalize-space()='Trucks']").click();

        //Add truck
        await   $("button[type='add']");
        await   $("button[type='add']").click();
        //Submitting empty form and checking for the validation fields 
        //click on submit and check with toast meesage
        await   $("//div[@class='card-footer ng-star-inserted']//button[@type='submit'][normalize-space()='Submit']").click();   
        await expect(LoginPage.toastMessage).toHaveTextContaining("Please fix the validations");
        await browser.pause(500);
        
        // negative Test cases for required field
        var spanunit = await $("//span[normalize-space()='Unit Number is required']");
        await expect(spanunit).toHaveTextContaining("Unit Number is required");
        
        var spanstate = await $("//span[normalize-space()='State code is required']");
        await expect(spanstate).toHaveTextContaining("State code is required");

        var spanplate = await $("//span[normalize-space()='Plate is required']");
        await expect(spanplate).toHaveTextContaining("Plate is required");

        var spanvin = await $("//span[normalize-space()='Vin is required']");
        await expect(spanvin).toHaveTextContaining("Vin is required");
        //
  })
    
        //entering truck data 
       it("Create Truck",async()=>{
        //Entering Trucks Information Part-I
        await $('input[id="truckUnitNumber"]').setValue("FMCSA12");
        await  browser.pause(1000);
        await $('input[id="registerdState"]').setValue("CA");
        await $('input[id="plate"]').setValue("SG12345");
        await $('input[id="vin"]',).setValue("6RGJGKD13TYBG2695");
        //Entering Trucks Information Part-II
        var selectors = $$('.mat-expansion-panel');    
        await selectors[0].click();
        
        await $('#startingMileage');
        await $('input[id="startingMileage"]').setValue("123");
        await $('input[id="currentMiles"]').setValue("123");   
        await $('input[id="yom"]').setValue("2020");
        var geartype = await $('#geartype');
        await geartype.selectByAttribute('value', '1'); 

        await $('input[id="gps"]').setValue("US483");
        await $('input[id="fuelCard"]').setValue("78956845218963578954");
        await $('input[id="ezPass"]').setValue("F3K*01900308545*");
        await $('textarea').setValue("AUS123");

        //Enter Safety Information
        var saftyInfo = $$('.mat-expansion-panel');    
        await saftyInfo[1].click();
        await $('#expiryDate');
        await $('#expiryDate').setValue("08/12/2022");
        await $('#plates_expirationdate').setValue("02/12/2021");
        await $('#insuranceExpirationDate').setValue("02/09/2022");
        await $('input[id="insuranceValue"]').setValue("756983148");

        //Enter Maintenance Records
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

        await $("//input[@role='textbox']").setValue("Truck condition is good");
        browser.keys("\uE004")  


        //Enter Ownership Information        
        var ownership =  $$('.mat-expansion-panel');   
        ownership[3].click();

        //selecting radio buttons
        var radios = $$("#inline-radio1");
        await radios[0].click();
        await $('#price').setValue("123");
        await $('#purchaseDate').setValue('06/08/2022');
        await $('#operationDate').setValue('02/12/2021');
        await $('#financer').setValue("123");
        await $('#installment').setValue("12");
        await $('#installmentDuedate').setValue('04/20/2021');
        var lease = $$("#inline-radio2")
        await lease[1].click();
        await $('#dealer').setValue("BAJAJ");
        await $('#leasedFrom').setValue("USTRUCKS");
        await $('#leasestart').setValue("13");
        await $('#leaseExpirydate').setValue('04/26/2021');
        await $('#installment1').setValue("123");
        await $('#installmentDuedate1').setValue('02/12/2021');
        await browser.pause(300);

        //Submit Truck Form and checks with toast message
        await $('.card-footer'); 
        await $("//div[@class='ng-star-inserted']//button[@type='submit'][normalize-space()='Submit']").click();        
        await expect(LoginPage.toastMessage).toHaveTextContaining("Trucks Data Submit");
        await browser.pause(1000);

       });

 });

//check the entered truck data with view page

describe('Verify The Truck Data',function() 
{

    it("Veiw Truck", async()=>{

        //check Trucks Information Part-I Viw Data
        await $('.card-header'); 
        await $("#search").setValue('FMCSA12');
        await  browser.pause(1000);
        await $("//a[normalize-space()='View']").click();
        await browser.pause(500);

        var truckUnitNumber = $('#truckUnitNumber');
        await expect(truckUnitNumber).toHaveAttributeContaining('ng-reflect-model', 'FMCSA12');

        var registerdState = $('#registerdState');
        await expect(registerdState).toHaveAttributeContaining('ng-reflect-model', 'CA');

        var plate = $('#plate');
        await expect(plate).toHaveAttributeContaining('ng-reflect-model', 'SG12345');

        var vin = $('#vin');
        await expect(vin).toHaveAttributeContaining('ng-reflect-model', '6RGJGKD13TYBG2695');

        //check Trucks Information Part-II view page
        var Trucksinfo = $$('.mat-expansion-panel');    
        await Trucksinfo[0].click();

        var startingMileage = $('#startingMileage');
        await expect(startingMileage).toHaveAttributeContaining('ng-reflect-model', '123');

        var currentMiles = $('#currentMiles');
        await expect(currentMiles).toHaveAttributeContaining('ng-reflect-model', '123');

        var myyom = $('#yom');
        await expect(myyom).toHaveAttributeContaining('ng-reflect-model', '2020');

        
        var gertype = $('#geartype');
        await expect(gertype).toHaveAttributeContaining('ng-reflect-model', '1');

        var mygps = $('#gps');
        await expect(mygps).toHaveAttributeContaining('ng-reflect-model', 'US483');

        var fuelCard = $('#fuelCard');
        await expect(fuelCard).toHaveAttributeContaining('ng-reflect-model', '78956845218963578954');

        var ezPass = $('#ezPass');
        await expect(ezPass).toHaveAttributeContaining('ng-reflect-model', 'F3K*01900308545*');

        var mytext = $('textarea');
        await expect(mytext).toHaveAttributeContaining('ng-reflect-model', 'AUS123');

        //check Safety Information in view page
        
        var saftyinfo = $$('.mat-expansion-panel');    
        await saftyinfo[1].click();
        
        var expiryDate = $('#expiryDate');
        await expect(expiryDate).toHaveAttributeContaining('ng-reflect-model', '2022-08-12');

        var plates = $('#plates_expirationdate');
        await expect(plates).toHaveAttributeContaining('ng-reflect-model', '2021-02-12');
        
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
        await expect(cost).toHaveText('1000');

        var comments = $("//td[normalize-space()='Truck condition is good']");
        await expect(comments).toHaveText("Truck condition is good");


         //check Ownership Information view page
         var Ownership = $$('.mat-expansion-panel');    
         Ownership[3].click();
        
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
        
        var installment = $('#installment');
        await expect(installment).toHaveAttributeContaining('ng-reflect-model', '12');
        
        var installmentDuedate = $('#installmentDuedate');
        await expect(installmentDuedate).toHaveAttributeContaining('ng-reflect-model', '2021-04-20');

        var leased = $$('input[id="inline-radio2"]');
        await expect(await leased[1]).toHaveAttributeContaining('ng-reflect-model', 'false');

        var mydealer = $('#dealer');
        await expect(mydealer).toHaveAttributeContaining('ng-reflect-model', 'BAJAJ');

        var leasedFrom = $('#leasedFrom');
        await expect(leasedFrom).toHaveAttributeContaining('ng-reflect-model', 'USTRUCKS');

        var leasestart = $('#leasestart');
        await expect(leasestart).toHaveAttributeContaining('ng-reflect-model', '13');

        var myexpd = $('#leaseExpirydate');
        await expect(myexpd).toHaveAttributeContaining('ng-reflect-model', '2021-04-26');

        var myinstallment = $('#installment1');
        await expect(myinstallment).toHaveAttributeContaining('ng-reflect-model', '123');

        var myinstallmentDuedate = $('#installmentDuedate1');
        await expect(myinstallmentDuedate).toHaveAttributeContaining('ng-reflect-model', '2021-02-12');

        //close the view page
        var closev =  $("//button[@class='close']"); 
        closev.$("//button[@class='close']").click();
        closev.waitForExist({ reverse: true });
        await browser.pause(500)

       })
   
});


// edit the truck by clicking on edit button
describe('Edit Truck Data',function() 
{
       it("Update Truck",async()=>{

        //open the edit truck form
        await $('.card-header'); 
        await $("#search").setValue('FMCSA12');
        await  browser.pause(1000);
        await $('body > app-dashboard > div > main > div.container-fluid > app-trucks-list > div > div.row > div > div > div.card-body > table > tbody > tr.ng-star-inserted > td:nth-child(5) > a:nth-child(2)').click();
        await browser.pause(1000);

        //Edit Trucks Information Part-I
        await $('input[id="truckUnitNumber"]').setValue("AR321B");
        await $('input[id="registerdState"]').setValue("AR");
        await $('input[id="plate"]').setValue("TS12BS");
        await $('input[id="vin"]',).setValue("1FUJGKD13HKJF2695");

        //Edit Trucks Information Part-II
        var truckinfo = $$('.mat-expansion-panel');    
         truckinfo[0].click();
        await $('#startingMileage');
        await $('input[id="startingMileage"]').setValue("450");
        await $('input[id="currentMiles"]').setValue("500");   
        await $('input[id="yom"]').setValue("2020");

        var geartype = await $('#geartype');
        await geartype.selectByAttribute('value', '0'); 

        await $('input[id="gps"]').setValue("TS123");
        await $('input[id="fuelCard"]').setValue("85269845218963578954");
        await $('input[id="ezPass"]').setValue("G3B*01900308545*");
        await $('textarea').setValue("United states of America");

        //Edit Safety Information
        var saftyinfo = $$('.mat-expansion-panel');    
         saftyinfo[1].click();
        await $('#expiryDate');
        await $('#expiryDate').setValue("02/12/2021");
        await $('#plates_expirationdate').setValue("04/12/2022");
        await $('#insuranceExpirationDate').setValue("06/12/2022");
        await $('input[id="insuranceValue"]').setValue("685349251");
        
        //Edit Maintenance Records
        var maintenance = $$('.mat-expansion-panel');    
        maintenance[2].click();
        await browser.pause(3000);
        var serviceDate = $("//td[normalize-space()='5/17/2022']");  
        serviceDate.doubleClick();
        await browser.pause(3000);
        await $("//input[@role='combobox']").setValue("5/20/2022");
        browser.keys("\uE004")  

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

        await $("//input[@role='textbox']").setValue("Truck condition is Verygood");
        browser.keys("\uE004")  


        //Edit Ownership Information
        var Ownership = $$('.mat-expansion-panel');    
        Ownership[3].click();
        
        await $('#inline-radio1');
        var radios = $$("#inline-radio1");
        await radios[1].click();
        
        await $('#price').setValue("456");
        await $('#purchaseDate').setValue('02/12/2021');
        await $('#operationDate').setValue('08/22/2022');
        await $('#financer').setValue("321");
        await $('#installment').setValue("15");
        await $('#installmentDuedate').setValue('11/15/2022');
        var leased = $$("#inline-radio2");
        await leased[0].click();
        await $('#dealer').setValue("Mahindra");
        await $('#leasedFrom').setValue("TATA");
        await $('#leasestart').setValue("15");
        await $('#leaseExpirydate').setValue('02/12/2021');
        await $('#installment1').setValue("123");
        await $('#installmentDuedate1').setValue('04/12/2022');
        //Submit Updated Truck Form and checks with toast message
        await $('.card-footer'); 
         $("//div[@class='ng-star-inserted']//button[@type='submit'][normalize-space()='Update']").click();    
        await expect(LoginPage.toastMessage).toHaveTextContaining("Truck Data Updated successfully");
        await browser.pause(500);
       })
});


//check the updated truck by clicking on view page

describe('Verify the updated data',function() 
{

    it("View Truck Data", async()=>{
        //open the view page
        await $('.card-header'); 
        await $("#search").setValue('AR321B');
        await browser.pause(1000)
        await $("//a[normalize-space()='View']").click();
        await browser.pause(500);

        var truckUnitNumber = $('#truckUnitNumber');
        await expect(truckUnitNumber).toHaveAttributeContaining('ng-reflect-model', 'AR321B');

        var registerdState = $('#registerdState');
        await expect(registerdState).toHaveAttributeContaining('ng-reflect-model', 'AR');

        var plate = $('#plate');
        await expect(plate).toHaveAttributeContaining('ng-reflect-model', 'TS12BS');

        var vin = $('#vin');
        await expect(vin).toHaveAttributeContaining('ng-reflect-model', '1FUJGKD13HKJF2695');
        await browser.pause(500);


        //check Trucks Information Part-II view page
        var truckinfo = $$('.mat-expansion-panel');    
         truckinfo[0].click();

        
        var startingMileage = $('#startingMileage');
        await expect(startingMileage).toHaveAttributeContaining('ng-reflect-model', '450');

        var currentMiles = $('#currentMiles');
        await expect(currentMiles).toHaveAttributeContaining('ng-reflect-model', '500');

        var myyom = $('#yom');
        await expect(myyom).toHaveAttributeContaining('ng-reflect-model', '2020');

        var geartype = $('#geartype');
        await expect(geartype).toHaveAttributeContaining('ng-reflect-model', '0');

        var mygps = $('#gps');
        await expect(mygps).toHaveAttributeContaining('ng-reflect-model', 'TS123');

        var myfuel = $('#fuelCard');
        await expect(myfuel).toHaveAttributeContaining('ng-reflect-model', '85269845218963578954');

        var myez = $('#ezPass');
        await expect(myez).toHaveAttributeContaining('ng-reflect-model', 'G3B*01900308545*');

        var mytext = $('textarea');
        await expect(mytext).toHaveAttributeContaining('ng-reflect-model', 'United states of America');
        
        //check Safety Information view page
        var saftyinfo = $$('.mat-expansion-panel');    
         saftyinfo[1].click();
       
        var expiryDate = $('#expiryDate');
        await expect(expiryDate).toHaveAttributeContaining('ng-reflect-model', '2021-02-12');
        var plates = $('#plates_expirationdate');
        await expect(plates).toHaveAttributeContaining('ng-reflect-model', '2022-04-12');
        var insuranceExpirationDate = $('#insuranceExpirationDate');
        await expect(insuranceExpirationDate).toHaveAttributeContaining('ng-reflect-model', '2022-06-12'); 
        var insuranceValue = $('#insuranceValue');
        await expect(insuranceValue).toHaveAttributeContaining('ng-reflect-model', '685349251');

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
 
         var comments = $("//td[normalize-space()='Truck condition is Verygood']");
         await expect(comments).toHaveText("Truck condition is Verygood");
 

        //check Ownership Information view page
        var ownership = $$('.mat-expansion-panel');    
         ownership[3].click();

         
        var owned = $$('input[id="inline-radio1"]');
        await expect(await owned[1]).toHaveAttributeContaining('ng-reflect-model', 'true');
            
        var myprice = $('#price');
        await expect(myprice).toHaveAttributeContaining('ng-reflect-model', '456');
            
        var purchaseDate = $('#purchaseDate');
        await expect(purchaseDate).toHaveAttributeContaining('ng-reflect-model', '2021-02-12');

        var operationDate = $('#operationDate');
        await expect(operationDate).toHaveAttributeContaining('ng-reflect-model', '2022-08-22');
        
        var financer = $('#financer');
        await expect(financer).toHaveAttributeContaining('ng-reflect-model', '321');
        
        var installment = $('#installment');
        await expect(installment).toHaveAttributeContaining('ng-reflect-model', '15');
        
        var installmentDuedate = $('#installmentDuedate');
        await expect(installmentDuedate).toHaveAttributeContaining('ng-reflect-model', '2022-11-15');
        
        var leased = $$('input[id="inline-radio2"]');
        await expect(await leased[0]).toHaveAttributeContaining('ng-reflect-model', 'false');

        var mydealer = $('#dealer');
        await expect(mydealer).toHaveAttributeContaining('ng-reflect-model', 'Mahindra');

        var leasedFrom = $('#leasedFrom');
        await expect(leasedFrom).toHaveAttributeContaining('ng-reflect-model', 'TATA');

        var mylease = $('#leasestart');
        await expect(mylease).toHaveAttributeContaining('ng-reflect-model', '15');

        var leaseExpirydate = $('#leaseExpirydate');
        await expect(leaseExpirydate).toHaveAttributeContaining('ng-reflect-model', '2021-02-12');

        var installment = $('#installment1');
        await expect(installment).toHaveAttributeContaining('ng-reflect-model', '123');

        var installmentDuedate = $('#installmentDuedate1');
        await expect(installmentDuedate).toHaveAttributeContaining('ng-reflect-model', '2022-04-12');

        //close the view page
        var closev =  $("//button[@class='close']"); 
        closev.$("//button[@class='close']").click();
        closev.waitForExist();
        await browser.pause(500)
    })       

    xit("Delete the truck", async()=>{

        await $("#search").setValue('AR321B');
        await  browser.pause(1000);
        await $("//a[normalize-space()='Delete']").click();    
        await expect(LoginPage.toastMessage).toHaveTextContaining("Truck Deleted Successfully");
        await browser.pause(1000);
              

       })

});







