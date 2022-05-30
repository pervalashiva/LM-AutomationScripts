const CONSTANT = require('./common.js')
const expectchai = require('chai').expect

describe('LoadMiles application',function() 
{

    it("Login with valid UserId Valid Password",()=>{

        browser.setWindowSize(1920, 1080)
        browser.url(CONSTANT.LOGIN_URL)

        //Enter Username........
        $("input[name='email']").setValue(CONSTANT.VALID_USRID)
        //Enter Password.....
        $("input[name='password']").setValue(CONSTANT.VALID_PAWD)
        //Click to login button..
        $('.btn-primary').click()
        
        //browser.waitUntil(() => $('.btn-primary').getText('.toast-message') === 'Invalid UserId and Password', { timeout: 4000,timeoutMsg: 'error message didnt appear'})        
        
        browser.pause(3000)
        const ink = $(".poweroff")
        ink.waitForExist()

       })
   
       it("Open truck",async()=>{
        await $('.card-data');
        //Click to add truck button..
        await $('.card-data').click()

       })
   
       it("Edit Update Data",async()=>{

        await $('.card-header'); 
        await $('body > app-dashboard > div > main > div.container-fluid > app-trucks-list > div > div.row > div > div > div.card-body > table > tbody > tr.ng-star-inserted > td:nth-child(5) > a:nth-child(2)').click()
        await browser.pause(3000)

       })
    
       it("Edit Trucks Information Part-I",async()=>{
        
        await $('input[id="truckUnitNumber"]').setValue("TS321B");
        await $('input[id="registerdState"]').setValue("TS");
        await $('input[id="plate"]').setValue("TS12BS");
        await $('input[id="vin"]',).setValue("TS123");
        
       })

       it("Edit Trucks Information Part-II",async()=>{
        
        const selectors = $$('.mat-expansion-panel')    
        await selectors[0].click();
        await $('#startingMileage');
        await $('input[id="startingMileage"]').setValue("450");
        await $('input[id="currentMiles"]').setValue("500");   
        await $('input[id="yom"]').setValue("2020");

        //await $("select#geartype", "1").setValue("AUS123"); 
        const selectBox = await $('#geartype');
        await selectBox.selectByAttribute('value', '1'); 

        await $('input[id="gps"]').setValue("TS123");
        await $('input[id="fuelCard"]').setValue("TS123");
        await $('input[id="ezPass"]').setValue("TS123");
        await $('textarea').setValue("Telanana 123");
       })

       //Enter Contact Information
       it("Edit Safety Information",async()=>{

        const selectors = $$('.mat-expansion-panel')    
        await selectors[1].click();
        await $('#expiryDate');
        await $('#expiryDate').setValue("21-12-2021");
        await $('#plates_expirationdate').setValue("22-10-2021");
        await $('#insuranceExpirationDate').setValue("23-11-2022");
        await $('input[id="insuranceValue"]').setValue("123");
        
       })

       it("Edit Maintenance Records",async()=>{
        const selectors = $$('.mat-expansion-panel')    
        await selectors[2].click();
        
        //await page.$eval('[aria-label="Add a row"]', elem => elem.click());
        //await page.waitForSelector('.dx-texteditor-input-container');
        //const addrow = await page.$$('.dx-texteditor-input')    
        //await addrow[0].type('8/21/2020')
        //await page.type('table colgroup col:nth-child(2)', 500);
        //await addrow[1].select("select#paymentTerms", "30 days")

        //await addrow[2].type(500);
        
       })

       it("Edit Ownership Information",async()=>{
        //Ownership Information
        const selectors = $$('.mat-expansion-panel')    
        await selectors[3].click();
        
        await $('#inline-radio1');
        const radios = $$("#inline-radio1");
        await radios[1].click();
        
        await $('#price').setValue("456");
        await $('#purchaseDate').setValue('25-01-2022');
        await $('#operationDate').setValue('20-12-2021');
        await $('#financer').setValue("321");
        await $('#installment').setValue("15");
        await $('#installmentDuedate').setValue('21-6-2022');
        const mgender = $$("#inline-radio2")
        await mgender[0].click();
        await $('#dealer').setValue("TS123");
        await $('#leasedFrom').setValue("TS123");
        await $('#leasestart').setValue("15");
        await $('#leaseExpirydate').setValue('25-05-2022');
        await $('#installment1').setValue("123");
        await $('#installmentDuedate1').setValue('01-12-2021');
        await browser.pause(3000)

       })

       it("Submit Updated Truck Form",async()=>{

        await $('.card-footer'); 
        const submit = $$('.btn-primary')    
        await submit[2].click();
        browser.pause(3000)
        
        $('.toast-message').getText()
        expect($('.toast-message')).toHaveTextContaining("Truck Data Updated successfully")
        await browser.pause(3000)


       })
    });