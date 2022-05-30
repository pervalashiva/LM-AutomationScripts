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

       it("Verify Carrierpay",async()=>{

        //Open DriverPay Invoice
        await  $("//a[normalize-space()='Finance']");
        await   $("//a[normalize-space()='Finance']").click();

        await  $("//app-sidebar-nav-link-content[normalize-space()='Carrier Pay']");
        await   $("//app-sidebar-nav-link-content[normalize-space()='Carrier Pay']").click();

        await $("//input[@placeholder='Search Carrier']").setValue('ASUS');
        await  browser.pause(1000);
        await $("//span[normalize-space()='ASUS']").click();
        await $("//button[normalize-space()='Search']").click();
                
        var carriername = await $("//td[normalize-space()='ASUS']");
        await carriername.waitUntil(
            async function () {
            return (await this.getText() === 'ASUS')
        }, {
            timeout: 10000,
            timeoutMsg: 'expected CarrierName is not same'
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
        
        // var loadCost = await $("//tbody/tr[@class='ng-star-inserted dx-template-wrapper']/td[5]");
        // await loadCost.waitUntil(
        //     async function () {
        //     return (await this.getText() === '0')
        // }, {
        //     timeout: 4000,
        //     timeoutMsg: 'expected Load cost is not same'
        // });


        // await $("//button[normalize-space()='Reset']").click();
        // await  browser.pause(1000);
        // const checkbox = $$('.dx-checkbox-icon');     
        // await   checkbox[1].click();
        // await   checkbox[1].isSelected();
        // await  browser.pause(1000);
        // await   checkbox[1].click();
        // await   checkbox[0].click();
        // await  browser.pause(1000);
        // await   checkbox[0].isSelected();
        // await   checkbox[1].isSelected();
        // await   checkbox[2].isSelected();
        
        // await browser.pause(2000);

        // const createInvoice = await $("//body[1]/app-dashboard[1]/div[1]/main[1]/div[2]/app-driverinvoice[1]/div[1]/div[2]/div[1]/div[1]/dx-data-grid[1]/div[1]/div[6]/div[1]/div[1]/div[1]/div[1]/table[1]/tbody[2]/tr[1]/td[7]/button[1]").scrollIntoView();
        // await createInvoice.scrollIntoView();
        // console.log(await createInvoice.waitForClickable())//detect when element is clickable

        // var cancel = await $("//button[@class='btn btn-sm btn-secondary btn-disable']");
        // await cancel.scrollIntoView();
        // console.log (await cancel.waitForClickable({ reverse: true })) //detect when element is no longer clickable    
    })
    
    xit("Bulk carrierpay invoice ",async()=>{

     await $("//input[@placeholder='Search customer']").setValue('ASUS');
     await browser.pause(1000);
     await $("//span[@class='mat-option-text']").click();
     await browser.pause(1000);
     await $("//button[normalize-space()='Search']").click();
     await browser.pause(1000);
     const  checkbox = $$('.dx-checkbox-icon');    
     await   checkbox[1].click();
     await   checkbox[1].isSelected();
     await   checkbox[2].click();
     await   checkbox[2].isSelected();
     await $("//body[1]/app-dashboard[1]/div[1]/main[1]/div[2]/app-driverinvoice[1]/div[1]/div[2]/div[1]/div[1]/dx-data-grid[1]/div[1]/div[6]/div[1]/div[1]/div[1]/div[1]/table[1]/tbody[2]/tr[1]/td[7]/button[1]").click();
     await browser.pause(1000);
    // await $("//button[@class='btn btn-sm btn-danger']").click();
    // await $("//tbody/tr[1]/td[10]/div[1]/button[1]").click();
})
  
xit("Verify carrierpay Buttons load status",async()=>{
     
    await $("//input[@id='loadNumber']").setValue('1019');
    await $("//button[normalize-space()='Search']").click();
    await browser.pause(2000);
    var loadstatus = await $("//td[normalize-space()='Delivered']");
    await expect(loadstatus).toHaveText("Delivered");
    
    var loadPrice = await $("//tbody/tr[2]/td[5]");
        await loadPrice.waitUntil(
            async function () {
            return (await this.getText() === '$ 100')
        }, {
            timeout: 1000,
            timeoutMsg: 'expected Load Price is not same'
        });

    var cancel = await $("//button[@class='btn btn-sm btn-primary']");
    console.log( expect(cancel).toBeDisabled());
    await $("//button[@class='btn btn-sm btn-primary']").click();
    await browser.pause(1000);
    var createInvoice = $("//button[@class='btn btn-sm btn-secondary btn-disable']");
    console.log(expect(createInvoice).toBeEnable());
    var cancel = $("//button[@class='btn btn-sm btn-danger']");
    expect(cancel).toBeEnabled()
    await $("//button[normalize-space()='Cancel']").click();
    var createInvoice = $("//button[@class='btn btn-sm btn-secondary btn-disable']");
    expect(createInvoice).toBeEnabled()
    var cancel = $("//button[@class='btn btn-sm btn-danger']");
    expect(cancel).toBeDisabled()
    var loadstatus = await $("//td[normalize-space()='Delivered']");
    await expect(loadstatus).toHaveText("Delivered");
    await browser.pause(1000);
})

 it("Increase The load price",async()=>{
    
     await browser.pause(1000);
     await $("//a[normalize-space()='Load Management']").click();
     await browser.pause(1000);
     await $("//a[@ng-reflect-router-link='/loadstatus']").click();
     await browser.pause(5000);
     await $("//div[@class='col pad-hor loadstatus arr-ontime']//div").click();
     await browser.pause(2000);
     const editload = await $$(".editload");
     await editload[2].scrollIntoView();
     await editload[2].click();
     await browser.pause(1000);
     await $ ("//input[@id='loadCost']").setValue("0")
     await $("//input[@id='loadPrice']").setValue("1000");
     await browser.pause(1000);

     await $("//button[normalize-space()='Update']").click();        
     await expect(LoginPage.toastMessage).toHaveTextContaining("Load successfully updated");
     await browser.pause(2000);
     await $("//i[@class='fas fa-times']").click(); 
     await $("//button[normalize-space()='Back']").click(); 
   
     await  $("//a[normalize-space()='Finance']");
     await   $("//a[normalize-space()='Finance']").click();
     
     await  $("//app-sidebar-nav-link-content[normalize-space()='Carrier Pay']");
     await   $("//app-sidebar-nav-link-content[normalize-space()='Carrier Pay']").click();
     await browser.pause(1000);

     await $("//input[@id='loadNumber']").setValue('1014');
     await browser.pause(1000);
     await $("//button[normalize-space()='Search']").click();

     var loadPrice = await $("//tr[@class='ng-star-inserted']//td[1]");
     await loadPrice.waitUntil(
         async function () {
         return (await this.getText() === '1,000')
     }, {
         timeout: 6000,
         timeoutMsg: 'expected Load cost is not same'
     });  

     var payRate = await $("//td[normalize-space()='10']");
    await payRate.waitUntil(
        async function () {
        return (await this.getText() === '10')
    }, {
        timeout: 6000,
        timeoutMsg: 'expected payrate is not same'
    });

    var payType = await $("//td[normalize-space()='Percentage(%)']");
    await payType.waitUntil(
        async function () {
        return (await this.getText() === 'Percentage(%)')
    }, {
        timeout: 4000,
        timeoutMsg: 'expected payType is not same'
    });


     var calculatedPay = await $("//tr[@class='ng-star-inserted']//td[6]");
     await calculatedPay.waitUntil(
         async function () {
         return (await this.getText() === '90')
     }, {
         timeout: 6000,
         timeoutMsg: 'expected calculatedPay is not same'
     }); 
    await browser.pause(1000); 
})

 it("Decrease The load price",async()=>{
     
     await browser.pause(1000);
     await $("//a[normalize-space()='Load Management']").click();
     await browser.pause(1000);
     await $("//a[@ng-reflect-router-link='/loadstatus']").click();

     await browser.pause(5000);
     await $("//div[@class='col pad-hor loadstatus arr-ontime']//div").click();
     await browser.pause(2000);
     const editload = await $$(".editload");
     await editload[2].scrollIntoView();
     await editload[2].click(); 
     await browser.pause(2000);
     await $("//input[@id='loadPrice']").setValue("100");
     await browser.pause(1000);

     await $("//button[normalize-space()='Update']").click();        
     await expect(LoginPage.toastMessage).toHaveTextContaining("Load successfully updated");
     await browser.pause(1000);
     await $("//i[@class='fas fa-times']").click(); 
     await $("//button[normalize-space()='Back']").click(); 
   
     
     await  $("//a[normalize-space()='Finance']");
     await   $("//a[normalize-space()='Finance']").click();

     await  $("//app-sidebar-nav-link-content[normalize-space()='Carrier Pay']");
     await   $("//app-sidebar-nav-link-content[normalize-space()='Carrier Pay']").click();
     await browser.pause(1000);
     await $("//input[@id='loadNumber']").setValue('1014');
     await browser.pause(500);
     await $("//button[normalize-space()='Search']").click();

     var loadPrice = await $("//tr[@class='ng-star-inserted']//td[1]");
     await loadPrice.waitUntil(
         async function () {
         return (await this.getText() === '100')
     }, {
         timeout: 6000,
         timeoutMsg: 'expected Load cost is not same'
     });  

     var calculatedPay = await $("//tr[@class='ng-star-inserted']//td[6]");
     await calculatedPay.waitUntil(
         async function () {
         return (await this.getText() === '9')
     }, {
         timeout: 6000,
         timeoutMsg: 'expected calculatedPay is not same'
     });  
    await browser.pause(1000);
})


 it("Increase The invoiced load cost",async()=>{
    
    await browser.pause(1000);
    await $("//a[normalize-space()='Load Management']").click();
    await browser.pause(1000);
    await $("//a[@ng-reflect-router-link='/loadstatus']").click();
    await browser.pause(5000);
    await $("//div[@class='col pad-hor loadstatus arr-ontime']//div").click();
    await browser.pause(2000);
    const editload = await $$(".editload");
    await editload[4].scrollIntoView();
    await editload[4].click();
    await browser.pause(1000);
    await $("//input[@id='loadCost']").setValue("1000");
    await browser.pause(1000);

    await $("//button[normalize-space()='Update']").click();        
    await expect(LoginPage.toastMessage).toHaveTextContaining("Load successfully updated");
    await browser.pause(1000);
    await $("//i[@class='fas fa-times']").click(); 
    await $("//button[normalize-space()='Back']").click(); 
  
    await  $("//a[normalize-space()='Finance']");
    await   $("//a[normalize-space()='Finance']").click();
    
    await  $("//app-sidebar-nav-link-content[normalize-space()='Carrier Pay']");
    await   $("//app-sidebar-nav-link-content[normalize-space()='Carrier Pay']").click();
    await browser.pause(1000);

    await $("//input[@id='loadNumber']").setValue('1019');
    await browser.pause(500);
    await $("//button[normalize-space()='Search']").click();

    var loadCost = await $("//tbody/tr[@class='ng-star-inserted dx-template-wrapper']/td[5]");
    await loadCost.waitUntil(
        async function () {
        return (await this.getText() === '1000')
    }, {
        timeout: 4000,
        timeoutMsg: 'expected Load cost is not same'
    });  
   await browser.pause(1000); 

    var calculatedPay = await $("//tr[@class='ng-star-inserted']//td[6]");
    await calculatedPay.waitUntil(
        async function () {
        return (await this.getText() === '1000')
    }, {
        timeout: 6000,
        timeoutMsg: 'expected calculatedPay is not same'
    });

})


  it("Decrease The load cost",async()=>{
    
    await browser.pause(1000);
    await $("//a[normalize-space()='Load Management']").click();
    await browser.pause(1000);
    await $("//a[@ng-reflect-router-link='/loadstatus']").click();
    await browser.pause(5000);
    await $("//div[@class='col pad-hor loadstatus arr-ontime']//div").click();
    await browser.pause(2000);
    const editload = await $$(".editload");
    await editload[4].scrollIntoView();
    await editload[4].click();
    await browser.pause(1000);
    await $("//input[@id='loadCost']").setValue("100");
    await browser.pause(1000);
    await $("//button[normalize-space()='Update']").click();        
    await expect(LoginPage.toastMessage).toHaveTextContaining("Load successfully updated");
    await browser.pause(1000);
    await $("//i[@class='fas fa-times']").click(); 
    await $("//button[normalize-space()='Back']").click(); 
  
    await  $("//a[normalize-space()='Finance']");
    await   $("//a[normalize-space()='Finance']").click();
    
    await  $("//app-sidebar-nav-link-content[normalize-space()='Carrier Pay']");
    await   $("//app-sidebar-nav-link-content[normalize-space()='Carrier Pay']").click();
    await browser.pause(1000);

    await $("//input[@id='loadNumber']").setValue('1019');
    await browser.pause(500);
    await $("//button[normalize-space()='Search']").click();

    var loadCost = await $("//tbody/tr[@class='ng-star-inserted dx-template-wrapper']/td[5]");
    await loadCost.waitUntil(
        async function () { 
        return (await this.getText() === '100')
    }, {
        timeout: 4000,
        timeoutMsg: 'expected Load cost is not same'
    });  
   await browser.pause(1000); 

   var calculatedPay = await $("//tr[@class='ng-star-inserted']//td[6]");
    await calculatedPay.waitUntil(
        async function () {
        return (await this.getText() === '100')
    }, {
        timeout: 6000,
        timeoutMsg: 'expected calculatedPay is not same'
    });
})

 it("Increase The Distance",async()=>{
    
    await browser.pause(1000);
    await $("//a[normalize-space()='Load Management']").click();
    await browser.pause(1000);
    await $("//a[@ng-reflect-router-link='/loadstatus']").click();
    await browser.pause(5000);
    await $("//div[@class='col pad-hor loadstatus arr-ontime']//div").click();
    await browser.pause(2000);
    const editload = await $$(".editload");
    await editload[4].scrollIntoView();
    await editload[4].click();
    await browser.pause(1000);
    await $("//input[@id='loadCost']").setValue("0");
    await $("//input[@id='distance']").setValue("500");
    await browser.pause(1000);

    await $("//button[normalize-space()='Update']").click();        
    await expect(LoginPage.toastMessage).toHaveTextContaining("Load successfully updated");
    await browser.pause(1000);
    await $("//i[@class='fas fa-times']").click(); 
    await $("//button[normalize-space()='Back']").click(); 
  
    await  $("//a[normalize-space()='Finance']");
    await   $("//a[normalize-space()='Finance']").click();
    
    await  $("//app-sidebar-nav-link-content[normalize-space()='Carrier Pay']");
    await   $("//app-sidebar-nav-link-content[normalize-space()='Carrier Pay']").click();
    await browser.pause(1000);

    await $("//input[@id='loadNumber']").setValue('1019');
    await browser.pause(500);
    await $("//button[normalize-space()='Search']").click();

    var distance = await $("//tr[@class='ng-star-inserted']//td[2]");
    await distance.waitUntil(
        async function () {
        return (await this.getText() === '500')
    }, {
        timeout: 6000,
        timeoutMsg: 'expected Distance is not same'
    });
    
    var payType = await $("//td[normalize-space()='Per Mile']");
    await expect(payType).toHaveText("Per Mile");

    var payRate = await $("//td[normalize-space()='10']");
    await payRate.waitUntil(
        async function () {
        return (await this.getText() === '10')
    }, {
        timeout: 6000,
        timeoutMsg: 'expected calculatedPay is not same'
    });

    var calculatedPay = await $("//tr[@class='ng-star-inserted']//td[6]");
    await calculatedPay.waitUntil(
        async function () {
        return (await this.getText() === '5000')
    }, {
        timeout: 6000,
        timeoutMsg: 'expected calculatedPay is not same'
    });
    
   await browser.pause(1000); 
})

 it("Decrease The  Distance",async()=>{
    
    await browser.pause(1000);
    await $("//a[normalize-space()='Load Management']").click();
    await browser.pause(1000);
    await $("//a[@ng-reflect-router-link='/loadstatus']").click();
    await browser.pause(5000);
    await $("//div[@class='col pad-hor loadstatus arr-ontime']//div").click();
    await browser.pause(2000);
    const editload = await $$(".editload");
    await editload[4].scrollIntoView();
    await editload[4].click();
    await browser.pause(1000);
    await $("//input[@id='distance']").setValue("100");

    await browser.pause(1000);

    await $("//button[normalize-space()='Update']").click();        
    await expect(LoginPage.toastMessage).toHaveTextContaining("Load successfully updated");
    await browser.pause(1000);
    await $("//i[@class='fas fa-times']").click(); 
    await $("//button[normalize-space()='Back']").click(); 
  
    await  $("//a[normalize-space()='Finance']");
    await   $("//a[normalize-space()='Finance']").click();
    
    await  $("//app-sidebar-nav-link-content[normalize-space()='Carrier Pay']");
    await   $("//app-sidebar-nav-link-content[normalize-space()='Carrier Pay']").click();
    await browser.pause(1000);

    await $("//input[@id='loadNumber']").setValue('1019');
    await browser.pause(500);
    await $("//button[normalize-space()='Search']").click();

    var distance = await $("//tr[@class='ng-star-inserted']//td[2]");
    await distance.waitUntil(
        async function () {
        return (await this.getText() === '100')
    }, {
        timeout: 4000,
        timeoutMsg: 'expected distance is not same'
    });  

    
    var calculatedPay = await $("//tr[@class='ng-star-inserted']//td[6]");
    await calculatedPay.waitUntil(
        async function () {
        return (await this.getText() === '1000')
    }, {
        timeout: 6000,
        timeoutMsg: 'expected calculatedPay is not same'
    });
   await browser.pause(1000); 
})



});

