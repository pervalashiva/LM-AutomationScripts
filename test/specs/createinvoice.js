var varANT = require('./common.js')
//var expect = require('chai').expect
var LoginPage = require('./utility/loginpage.js')


describe('LoadMiles application',function() 
{
    it("Login with valid UserId Valid Password", async()=>{
        //login with valid userid and valid password
        await browser.maximizeWindow()
        await browser.url(varANT.LOGIN_URL);
        await browser.pause(1000);
        LoginPage.Login(varANT.VALID_USRID, varANT.VALID_PAWD);         
        await  browser.pause(1000);
        var ink = $(".poweroff");
        ink.waitForExist();  
        // Browser waits untill the poweroff button appears After login, if the poweorff button didnt appear in 5 secnds testcase will fail

       })

       //Create invoice 

       it("Verify create invoice",async()=>{

        //Open Create Invoice
        await  $("//h5[normalize-space()='Create Invoice']");
        await   $("//h5[normalize-space()='Create Invoice']").click();

        await $("//input[@placeholder='Search customer']").setValue('NAVEEN');
        await  browser.pause(5000);
        await $("//span[@class='mat-option-text']").click();
        await  browser.pause(1000);
        await $("//button[normalize-space()='Search']").click();
                
        var customer = await $("//tbody/tr[2]/td[3]");
        await customer.waitUntil(
            async function () {
            return (await this.getText() === 'NAVEEN')
        }, {
            timeout: 10000,
            timeoutMsg: 'expected customer name is not same'
        });

        await $("//button[normalize-space()='Reset']").click();
        await  browser.pause(1000);
        await $("//input[@id='loadNumber']").setValue('1018');
        await $("//button[normalize-space()='Search']").click();

        var loadNumber = await $("//td[normalize-space()='1018']");
        await loadNumber.waitUntil(
            async function () {
            return (await this.getText() === '1018')
        }, {
            timeout: 1000,
            timeoutMsg: 'expected Load number is not same'
        });
        
        await $("//button[normalize-space()='Reset']").click();
        await  browser.pause(1000);
        const checkbox = $$('.dx-checkbox-icon');     
        await   checkbox[1].click();
        await   checkbox[1].isSelected();
        await  browser.pause(1000);
        await   checkbox[1].click();
        await   checkbox[0].click();
        await  browser.pause(1000);
        await   checkbox[0].isSelected();
        await   checkbox[1].isSelected();
        await   checkbox[2].isSelected();
        await browser.pause(500); 
  })
    
    xit("Bulk invoice ",async()=>{

     await $("//input[@placeholder='Search customer']").setValue('NAVEEN');
     await browser.pause(1000);
     await $("//span[@class='mat-option-text']").click();
     await browser.pause(1000);
     await $("//button[normalize-space()='Search']").click();
     await browser.pause(1000);
    const checkbox = $$('.dx-checkbox-icon');    
    await   checkbox[1].click();
    await   checkbox[1].isSelected();
    await   checkbox[2].click();
    await   checkbox[2].isSelected();
    await $("//button[normalize-space()='Create Invoices']").click();
    await browser.pause(1000);
    await $("//button[@class='btn btn-sm btn-danger']").click();
    await $("//tbody/tr[1]/td[10]/div[1]/button[1]").click();
    await browser.pause(2000);

})
  
it("Verify create invoice Buttons load status",async()=>{
     
    await $("//input[@id='loadNumber']").setValue('1018');
    await $("//button[normalize-space()='Search']").click();
    await browser.pause(2000);
    var loadstatus = await $("//td[normalize-space()='Delivered']");
    await expect(loadstatus).toHaveText("Delivered");
    
    // var loadPrice = await $("//td[@class='dx-cell-focus-disabled']//span[@class='ng-star-inserted'][normalize-space()='$ 100']");
    // await expect(loadPrice).toHaveText("$ 100");
    
    // var loadPrice = await $("//tbody/tr[2]/td[5]");
    //     await loadPrice.waitUntil(
    //         async function () {
    //         return (await this.getText() === '$ 100')
    //     }, {
    //         timeout: 5000,
    //         timeoutMsg: 'expected Load Price is not same'
    //     });


    
    var createInvoice = await $("//button[@class='btn btn-sm btn-primary']")
    console.log(await createInvoice.waitForClickable())//detect when element is clickable

    var cancel = await $("//button[@class='btn btn-sm btn-secondary btn-disable']");
    console.log (await cancel.waitForClickable({ reverse: true })) //detect when element is no longer clickable
    

    var loadstatus = await $("//td[normalize-space()='Delivered']");
    await expect(loadstatus).toHaveText("Delivered");
    await browser.pause(1000);
})

xit("Increase The load price load",async()=>{
    
     await browser.pause(1000);
     await $("//a[normalize-space()='Load Management']").click();
     await browser.pause(1000);
     await $("//a[@ng-reflect-router-link='/loadstatus']").click();
     await $("//div[@class='col pad-hor loadstatus arr-ontime']//div").click();
     await browser.pause(4000);
     const editload = await $$(".editload");
     await editload[4].scrollIntoView();
     await editload[4].click();
     await browser.pause(1000);
     await $("//input[@id='loadPrice']").setValue("1000");
     await browser.pause(1000);

     await $("//button[normalize-space()='Update']").click();        
     await expect(LoginPage.toastMessage).toHaveTextContaining("Load successfully updated");
     await browser.pause(1000);
     await $("//i[@class='fas fa-times']").click(); 
     await $("//button[normalize-space()='Back']").click(); 
   
     await  $("//h5[normalize-space()='Create Invoice']");
     await  $("//h5[normalize-space()='Create Invoice']").click();
     await $("//input[@id='loadNumber']").setValue('1019');
     await $("//button[normalize-space()='Search']").click();

     await browser.pause(1000);
     var loadPrice = await $("//span[normalize-space()='$ 1,000']");
     await loadPrice.waitUntil(
         async function () {
         return (await this.getText() === '$ 1000')
     }, {
         timeout: 1000,
         timeoutMsg: 'expected Load Price is not same'
     });

})

xit("Decrease The load price load",async()=>{
     
     await browser.pause(1000);
     await $("//a[normalize-space()='Load Management']").click();
     await browser.pause(1000);
     await $("//a[@ng-reflect-router-link='/loadstatus']").click();

     await browser.pause(3000);
     await $("//div[@class='col pad-hor loadstatus arr-ontime']//div").click();
     await browser.pause(3000);
     const editload = await $$(".editload");
     await editload[4].scrollIntoView();
     await editload[4].click(); 
     await browser.pause(1000);
     await $("//input[@id='loadPrice']").setValue("100");
     await browser.pause(1000);

     await $("//button[normalize-space()='Update']").click();        
     await expect(LoginPage.toastMessage).toHaveTextContaining("Load successfully updated");
     await browser.pause(1000);
     await $("//i[@class='fas fa-times']").click(); 
     await $("//button[normalize-space()='Back']").click(); 
   
     await  $("//h5[normalize-space()='Create Invoice']");
     await   $("//h5[normalize-space()='Create Invoice']").click();
     await $("//input[@id='loadNumber']").setValue('1019');
     await $("//button[normalize-space()='Search']").click();

  
     await browser.pause(1000);
     var loadPrice = await $("//span[normalize-space()='$ 100']");
     await loadPrice.waitUntil(
         async function () {
         return (await this.getText() === '$ 100')
     }, {
         timeout: 1000,
         timeoutMsg: 'expected Load Price is not same'
     });
    
 })

});


