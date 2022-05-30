const CONSTANT = require('./common.js')
const expectchai = require('chai').expect
const LoginPage = require('./utility/loginpage.js')

describe('LoadMiles application',function() 
{

    it("Login with valid UserId Valid Password", async()=>{

        //login with valid userid and valid password
        browser.maximizeWindow()
        await   browser.url(CONSTANT.LOGIN_URL);
        browser.pause(1000);
        LoginPage.Login(CONSTANT.VALID_USRID, CONSTANT.VALID_PAWD);        
        await  browser.pause(1000);
        const ink = $(".poweroff");
        ink.waitForExist();  
        // Browser waits untill the poweroff button appears After login, if the poweorff button didnt appear in 5 secnds testcase will fail

       })

       //Dispatcher Information testing Required inputs

       it("Dispatcher Information Required inputs",async()=>{

        //Open Dispatcher
        await  $("//h5[normalize-space()='Dispatchers']");
        await   $("//h5[normalize-space()='Dispatchers']").click();

        //Add New Dispatcher
        await   $("button[type='add']");
        await   $("button[type='add']").click();

        //Checking the negative test cases submit empty form and check with toast meesage
        await   $("//button[normalize-space()='Submit']").click();   
        expect(LoginPage.toastMessage).toHaveTextContaining("Please fix the validations");
        await browser.pause(1000);

        // negative Test cases for required field
        const firstName = await $("//span[normalize-space()='Firstname is Required']");
        await expect(firstName).toHaveTextContaining("Firstname is Required");

        const lastName = await $("//span[normalize-space()='Lastname is Required']");
        await expect(lastName).toHaveTextContaining("Lastname is Required");
       })

       it("Create Dispatcher",async()=>{ 
        
        //Entering Dispatcher Information
        await $('input[id="firstName"]').setValue("shiva");
        await $('input[id="middleName"]').setValue("kumar");
        await $('input[id="lastName"]').setValue("pervala");
        await $('input[id="displayName"]').setValue("ShivaPervala");
        await $('input[id="dob"]').setValue("07/23/1996");
        await $('input[id="ssn"]').setValue("689538965");
        await $('input[id="email"]').setValue("ShivaPervala@gmail.com");
        await $("//ngx-intl-tel-input[@id='cellPhone']//input[@id='phone']").setValue("6308578846");
        await $('input[id="emergenctContact"]').setValue("689538965");
        await $("//ngx-intl-tel-input[@id='emergencyPhone']//input[@id='phone']").setValue("6308578846");
        await $("//input[@placeholder='Search Nearest Location']").setValue("Hyderabad");
        await $("(//span[contains(text(),'Hyderabad')])[1]").click();     

        //Entering Employment Information
        const selectors = $$('.mat-expansion-panel');    
        await selectors[0].click();

        await browser.pause(500);
        await   $("#inline-radio1").click();
        await $('input[id="hireDate"]').setValue("11/21/2020");
        await $('input[id="terminationDate"]').setValue("06/26/2022");
        await $('input[id="vendorAccount"]').setValue("ABC123");
        await $('input[id="quickpayId"]').setValue("abc123");
        await $('input[id="bankname"]').setValue("HSBC");
        await $('input[id="acctype"]').setValue("Savings accounts");
        await $('input[id="accountnumber"]').setValue("689538965");
        await $('input[id="routingnum"]').setValue("689538965");

        //Entering Payrate Table
        const selectorp = $$('.mat-expansion-panel');    
        selectorp[1].click();

          await $("//i[@class='dx-icon dx-icon-edit-button-addrow']").click();
          await browser.pause(300);
          await $("//input[@role='combobox']").setValue("5/17/2022");
          browser.keys("\uE004")  
  
          await $("//div[@class='dx-dropdowneditor-icon']").click();
          await $("//div[contains(text(),'Per Mile')]").click();
          browser.keys("\uE004")  
  
          await $("//input[@role='textbox']").setValue("10");
          browser.keys("\uE004")  
          await browser.pause(1000);
        

        await $("//button[normalize-space()='Submit']").click();    
        await expect(LoginPage.toastMessage).toHaveTextContaining("Dispatcher Data Submitted");
        await browser.pause(1000);

       });

    });


    //check the entered dispatcher data with view page

describe('Verify The Dispatcher data',function() 
{
    it("Veiw The Dispatcher", async()=>{

        //check the Dispatcher Information
        await $('.card-header'); 
        await $("#search").setValue('shiva');
        await browser.pause(1000);
        await $("//a[normalize-space()='View']").click();
        await browser.pause(1000);

        const firstname = $('#firstName');
        await expect(firstname).toHaveAttributeContaining('ng-reflect-model', 'shiva');

        const middleName = $('#middleName');
        await expect(middleName).toHaveAttributeContaining('ng-reflect-model', 'kumar');

        const lastName = $('#lastName');
        await expect(lastName).toHaveAttributeContaining('ng-reflect-model', 'pervala');

        const displayName = $('#displayName');
        await expect(displayName).toHaveAttributeContaining('ng-reflect-model', 'ShivaPervala');

        const dob = $('#dob');
        await expect(dob).toHaveAttributeContaining('ng-reflect-model', '1996-07-23');
        
        const ssn = $('#ssn');
        await expect(ssn).toHaveAttributeContaining('ng-reflect-model', '689538965');

        const email = $('#email');
        await expect(email).toHaveAttributeContaining('ng-reflect-model', 'ShivaPervala@gmail.com');
        
        const cellphone = $("//ngx-intl-tel-input[@id='cellPhone']//input[@id='phone']");
        await expect(cellphone).toHaveAttributeContaining('ng-reflect-model', '630-857-8846');
        
        const econtact = $('input[id="emergenctContact"]');
        await expect(econtact).toHaveAttributeContaining('ng-reflect-model', '689538965');
        
        const phnumber = $("//ngx-intl-tel-input[@id='emergencyPhone']//input[@id='phone']");
        await expect(phnumber).toHaveAttributeContaining('ng-reflect-model', '630-857-8846');
        
      // var location = $("//input[@placeholder='Search Nearest Location']");
    // await expect(location).toHaveAttributeContaining('ng-reflect-model', '401, Main Rd, near Gokul Chat,');

        await browser.pause(500);
        const selectors = $$('.mat-expansion-panel-header');    
        await selectors[0].click();
        await browser.pause(500);
         var owned = $('input[id="inline-radio1"]');
         await expect(await owned).toHaveAttributeContaining('ng-reflect-model', 'true');
 
        const hireDate = $('#hireDate');
        await expect(hireDate).toHaveAttributeContaining('ng-reflect-model', '2020-11-21');

        
        const terminationDate = $('#terminationDate');
        await expect(terminationDate).toHaveAttributeContaining('ng-reflect-model', '2022-06-26');

        const vendorAccount = $('#vendorAccount');
        await expect(vendorAccount).toHaveAttributeContaining('ng-reflect-model', 'ABC123');

        const quickpayId = $('#quickpayId');
        await expect(quickpayId).toHaveAttributeContaining('ng-reflect-model', 'abc123');

        const bankname = $('#bankname');
        await expect(bankname).toHaveAttributeContaining('ng-reflect-model', 'HSBC');
        
        const acctype = $('#acctype');
        await expect(acctype).toHaveAttributeContaining('ng-reflect-model', 'Savings accounts');

        
        const accountnumber = $('#accountnumber');
        await expect(accountnumber).toHaveAttributeContaining('ng-reflect-model', '689538965');
        
        const routingnum = $("#routingnum");
        await expect(routingnum).toHaveAttributeContaining('ng-reflect-model', '689538965');

        await browser.pause(1000);

        //verify payrate table

        const selectorpayrate = $$('.mat-expansion-panel-header');    
        await selectorpayrate[1].click();
        await browser.pause(500);

        var serviceDate = $("//td[normalize-space()='5/17/2022']");
        await expect(serviceDate).toHaveText('5/17/2022');

        var category = $("//td[normalize-space()='Per Mile']");
        await expect(category).toHaveText('Per Mile');

        var currentMiles = $("//td[normalize-space()='10']");
        await expect(currentMiles).toHaveText('10');



        //close the view page
        const closev =  $("//button[@class='close']"); 
        closev.$("//button[@class='close']").click();
        closev.waitForExist();
        await browser.pause(1000)

       })
   
});


//Edit the Dispatcher data and update with new data

describe('Edit Dispatcher Data',function() 
{
        //entering Dispatcher New data 
        it("Update Dispatcher Information",async()=>{ 
        
            //Entering Dispatcher Information
            $('.card-header'); 
            await $("#search").setValue('shiva');
            $("//a[normalize-space()='Edit']").click();
           await browser.pause(1000);
            await $('input[id="firstName"]').setValue("Naveen");
            await $('input[id="middleName"]').setValue("kumar");
            await $('input[id="lastName"]').setValue("nandhu");
            await $('input[id="displayName"]').setValue("NaveenKumar");
            await $('input[id="dob"]').setValue("06/28/1994");
            await $('input[id="ssn"]').setValue("689588965");
            await $('input[id="email"]').setValue("naveenkumar@gmail.com");
            await $("//ngx-intl-tel-input[@id='cellPhone']//input[@id='phone']").setValue("6308678846");
            await $('input[id="emergenctContact"]').setValue("689538965");
            await $("//ngx-intl-tel-input[@id='emergencyPhone']//input[@id='phone']").setValue("6308848846");
            await $("//input[@placeholder='Search Nearest Location']").setValue("Karimnagar");
            await $("(//span[contains(text(),'Karimnagar')])[1]").click();    
            //Entering Employment Information
            await browser.pause(500)
            const selectors = $$('.mat-expansion-panel-header');    
            await selectors[0].click();
            await browser.pause(500)
    
            await   $("#inline-radio2").click();
            await $('input[id="hireDate"]').setValue("11/21/2020");
            await $('input[id="terminationDate"]').setValue("06/26/2022");
            await $('input[id="vendorAccount"]').setValue("SFG123");
            await $('input[id="quickpayId"]').setValue("JIK123");
            await $('input[id="bankname"]').setValue("U.S. Bancorp");
            await $('input[id="acctype"]').setValue("Checking accounts");
            await $('input[id="accountnumber"]').setValue("685968965");
            await $('input[id="routingnum"]').setValue("689585265");
    
            //Entering Payrate Table
            const selectorp = $$('.mat-expansion-panel-header');    
            await selectorp[1].click();
    
            var serviceDate = $("//td[normalize-space()='5/17/2022']");  
            serviceDate.doubleClick();
            await $("//input[@role='combobox']").setValue("5/20/2022");
            browser.keys("\uE004")  
    
            await $("//div[@class='dx-dropdowneditor-icon']").click();
            await $("//div[contains(text(),'Per Hour')]").click();
            browser.keys("\uE004")  
    
            await $("//input[@role='spinbutton']").setValue("20");
            browser.keys("\uE004")  
            await browser.pause(1000);
          
            await $("//button[normalize-space()='Update']").click();    
            await expect(LoginPage.toastMessage).toHaveTextContaining("Dispatcher Data Updated successfully");
            await browser.pause(3000);
    
           });

    });

        //check the entered updated Dispatcher data with view page

describe('Verify Updated Dispatcher Information',function() 
{

    it("View Dispatcher Information", async()=>{

        //check Dispatcher Information
        await $('.card-header'); 
        await $("#search").setValue('Naveen');
        await browser.pause(1000);
        await $("//a[normalize-space()='View']").click();
        await browser.pause(1000);

        const firstname = $('#firstName');
        await expect(firstname).toHaveAttributeContaining('ng-reflect-model', 'Naveen');
   
        const middleName = $('#middleName');
        await expect(middleName).toHaveAttributeContaining('ng-reflect-model', 'kumar');

        const lastName = $('#lastName');
        await expect(lastName).toHaveAttributeContaining('ng-reflect-model', 'nandhu');

        const displayName = $('#displayName');
        await expect(displayName).toHaveAttributeContaining('ng-reflect-model', 'NaveenKumar');

        const dob = $('#dob');
        await expect(dob).toHaveAttributeContaining('ng-reflect-model', '1994-06-28');
        
        const ssn = $('#ssn');
        await expect(ssn).toHaveAttributeContaining('ng-reflect-model', '689588965');

        const email = $('#email');
        await expect(email).toHaveAttributeContaining('ng-reflect-model', 'naveenkumar@gmail.com');
        
        const cellphone = $("//ngx-intl-tel-input[@id='cellPhone']//input[@id='phone']");
        await expect(cellphone).toHaveAttributeContaining('ng-reflect-model', '630-867-8846');
        
        const econtact = $('input[id="emergenctContact"]');
        await expect(econtact).toHaveAttributeContaining('ng-reflect-model', '689538965');
        
        const phnumber = $("//ngx-intl-tel-input[@id='emergencyPhone']//input[@id='phone']");
        await expect(phnumber).toHaveAttributeContaining('ng-reflect-model', '630-884-8846');
        
        //const location = $("//input[@placeholder='Search Nearest Location']");
        //await expect(location).toHaveAttributeContaining('ng-reflect-model', 'Kukatpally');

        browser.pause(500)
        const selectors = $$('.mat-expansion-panel-header');    
        await selectors[0].click();
        browser.pause(500)
        var owned = $('input[id="inline-radio2"]');
        await expect(await owned).toHaveAttributeContaining('ng-reflect-model', 'false');
 
        const hireDate = $('#hireDate');
        await expect(hireDate).toHaveAttributeContaining('ng-reflect-model', '2020-11-21');

        const terminationDate = $('#terminationDate');
        await expect(terminationDate).toHaveAttributeContaining('ng-reflect-model', '2022-06-26');

        const vendorAccount = $('#vendorAccount');
        await expect(vendorAccount).toHaveAttributeContaining('ng-reflect-model', 'SFG123');

        const quickpayId = $('#quickpayId');
        await expect(quickpayId).toHaveAttributeContaining('ng-reflect-model', 'JIK123');

        const bankname = $('#bankname');
        await expect(bankname).toHaveAttributeContaining('ng-reflect-model', 'U.S. Bancorp');
        
        const acctype = $('#acctype');
        await expect(acctype).toHaveAttributeContaining('ng-reflect-model', 'Checking accounts');
        
        const accountnumber = $('#accountnumber');
        await expect(accountnumber).toHaveAttributeContaining('ng-reflect-model', '685968965');
        
        const routingnum = $("#routingnum");
        await expect(routingnum).toHaveAttributeContaining('ng-reflect-model', '689585265');

        await browser.pause(1000);

        //verify payrate table

        const selectorpayrate = $$('.mat-expansion-panel-header');    
        await selectorpayrate[1].click();
        await browser.pause(500);

        var serviceDate = $("//td[normalize-space()='5/20/2022']");
        await expect(serviceDate).toHaveText('5/20/2022');

        var category = $("//td[normalize-space()='Per Hour']");
        await expect(category).toHaveText('Per Hour');

        var currentMiles = $("//td[normalize-space()='20']");
        await expect(currentMiles).toHaveText('20');

        //close the view page
        const closev =  $("//button[@class='close']"); 
        closev.$("//button[@class='close']").click();
        closev.waitForExist();
        await browser.pause(3000)

       })

       //the Dispatcher will be get deleted and will conform with toast message
       xit("Delete the Dispatcher", async()=>{
        await $("#search").setValue('Naveen');
        await $("//a[normalize-space()='Delete']").click();    
        await expect(LoginPage.toastMessage).toHaveTextContaining("Dispatcher deleted successfully");
        await browser.pause(1000);
              
       })
   
});