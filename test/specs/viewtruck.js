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
                
        browser.pause(3000)
        const ink = $(".poweroff")
        ink.waitForExist()

       })
   
       it("Open truck",async()=>{
        await $('.card-data');
        //Click to add truck button..
        await $('.card-data').click()

       })
   

    });
    

//check the truck view

describe('Checking the entered data',function() 
{

    it("check Trucks Information Part-I Viw Data", async()=>{

        await $('.card-header'); 
        await browser.pause(3000)
        await $('body > app-dashboard > div > main > div.container-fluid > app-trucks-list > div > div.row > div > div > div.card-body > table > tbody > tr.ng-star-inserted > td:nth-child(5) > a:nth-child(1)').click()
        await browser.pause(3000)

        const myInput = $('#truckUnitNumber')
        await expect(myInput).toHaveAttributeContaining('ng-reflect-model', 'AUS123')

        const myInpu = $('#registerdState')
        await expect(myInpu).toHaveAttributeContaining('ng-reflect-model', 'TS')

        const myInp = $('#plate')
        await expect(myInp).toHaveAttributeContaining('ng-reflect-model', 'ASC123')

        const myIn = $('#vin')
        await expect(myIn).toHaveAttributeContaining('ng-reflect-model', 'ASD123')

        await browser.pause(3000)

        
 
       })

       it('check Trucks Information Part-II view page', async () => {

        const selectors = $$('.mat-expansion-panel')    
        await selectors[0].click();

        let element = await $('[value="1"]');
        console.log(await element.isSelected());//print true r fase

        const mystart = $('#startingMileage')
        await expect(mystart).toHaveAttributeContaining('ng-reflect-model', '123')

        const mymiles = $('#currentMiles')
        await expect(mymiles).toHaveAttributeContaining('ng-reflect-model', '123')

        const myyom = $('#yom')
        await expect(myyom).toHaveAttributeContaining('ng-reflect-model', '2020')

        //const myIn = $('#vin')
        //await expect(myIn).toHaveAttributeContaining('ng-reflect-model', 'ASD123')

        const mygps = $('#gps')
        await expect(mygps).toHaveAttributeContaining('ng-reflect-model', 'AUS123')

        const myfuel = $('#fuelCard')
        await expect(myfuel).toHaveAttributeContaining('ng-reflect-model', 'AUS123')

        const myez = $('#ezPass')
        await expect(myez).toHaveAttributeContaining('ng-reflect-model', 'AUS123')

        const mytext = $('textarea')
        await expect(mytext).toHaveAttributeContaining('ng-reflect-model', 'AUS123')

        });

         it('check Safety Information view page', async () => {

            const selectors = $$('.mat-expansion-panel')    
            await selectors[1].click();
            
            
        const myexp = $('#expiryDate')
        await expect(myexp).toHaveAttributeContaining('ng-reflect-model', '2021-12-20')

        
        const myplx = $('#plates_expirationdate')
        await expect(myplx).toHaveAttributeContaining('ng-reflect-model', '2021-12-20')

        
        const myins = $('#insuranceExpirationDate')
        await expect(myins).toHaveAttributeContaining('ng-reflect-model', '2021-12-20')

        
        const myinsv = $('#insuranceValue')
        await expect(myinsv).toHaveAttributeContaining('ng-reflect-model', '123')

        
        

        });


        it('check Maintenance Records view page', async () => {

            const selectors = $$('.mat-expansion-panel')    
            await selectors[2].click();
        

        });

        it('check Ownership Information view page', async () => {

            const selectors = $$('.mat-expansion-panel')    
            await selectors[3].click();

        let elemen = await $('input[id="inline-radio1"]');
        console.log(await elemen.isSelected()); //print true r fase

        const myprice = $('#price')
        await expect(myprice).toHaveAttributeContaining('ng-reflect-model', '123')
            
            
        const mypud = $('#purchaseDate')
        await expect(mypud).toHaveAttributeContaining('ng-reflect-model', '2021-12-21')

        
        const myope = $('#operationDate')
        await expect(myope).toHaveAttributeContaining('ng-reflect-model', '2021-12-22')

        
        const myfas = $('#financer')
        await expect(myfas).toHaveAttributeContaining('ng-reflect-model', '123')

        
        const myinst = $('#installment')
        await expect(myinst).toHaveAttributeContaining('ng-reflect-model', '12')

        
        const myinsd = $('#installmentDuedate')
        await expect(myinsd).toHaveAttributeContaining('ng-reflect-model', '2021-12-21')

        //let eleme = await $('input[id="inline-radio2"]');
        //console.log(await eleme.isSelected()); //print true r fase

        const mydealer = $('#dealer')
        await expect(mydealer).toHaveAttributeContaining('ng-reflect-model', 'AUS123')

        const myeasef = $('#leasedFrom')
        await expect(myeasef).toHaveAttributeContaining('ng-reflect-model', 'AUS123')

        const mylease = $('#leasestart')
        await expect(mylease).toHaveAttributeContaining('ng-reflect-model', '13')

        const myexp = $('#leaseExpirydate')
        await expect(myexp).toHaveAttributeContaining('ng-reflect-model', '2021-12-21')

        const myinstam = $('#installment1')
        await expect(myinstam).toHaveAttributeContaining('ng-reflect-model', '123')

        const myinstad = $('#installmentDuedate1')
        await expect(myinstad).toHaveAttributeContaining('ng-reflect-model', '2021-12-21')


        });

       it('close the view page', async () => {

        const closev =  $("//button[@class='close']"); 
        closev.$("//button[@class='close']").click();
        closev.waitForExist({ reverse: true });
        await browser.pause(3000)

         });
   
       
   
});

