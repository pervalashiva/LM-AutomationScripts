const CONSTANT = require('./common.js')
//const expectchai = require('chai').expect
const LoginPage = require('./utility/loginpage.js')


describe('LoadMiles application',function() 
{

    it("Login with valid UserId Valid Password", async()=>{
        //login with valid userid and valid password
        browser.maximizeWindow();
        await browser.url(CONSTANT.LOGIN_URL);
        await browser.pause(1000);
        LoginPage.Login(CONSTANT.VALID_USRID, CONSTANT.VALID_PAWD);         
        await  browser.pause(1000);
        const ink = $(".poweroff");
        ink.waitForExist();  
        // Browser waits untill the poweroff button appears After login, if the poweorff button didnt appear in 5 secnds testcase will fail

       })

       //Carrier  Information Part-I testing Required inputs

       xit("Verify Carrier Information valid inputs",async()=>{

        //Open Carrier 
        await  $("//h5[normalize-space()='Carriers']");
        await   $("//h5[normalize-space()='Carriers']").click();
        await  browser.pause(1000);
        //Add Carrier 
        await   $("button[type='add']").click();
        //Submitting empty form and checking for the validation fields 
        //click on submit and check with toast meesage
        await   $("//div[@class='card-footer ng-star-inserted']//button[@type='submit'][normalize-space()='Submit']").click();   
        await expect(LoginPage.toastMessage).toHaveTextContaining("Please fix the validations");
        await browser.pause(1000);
        
        // negative Test cases for required field
        const spanunit = await $("//span[normalize-space()='Company name is Required']");
        await expect(spanunit).toHaveTextContaining("Company name is Required");
        
        const spanstate = await $("//span[normalize-space()='DOT Number is Required']");
        await expect(spanstate).toHaveTextContaining("DOT Number is Required");

        const spanplate = await $("//span[normalize-space()='Cell phone is Required']");
        await expect(spanplate).toHaveTextContaining("Cell phone is Required");

        const spanvin = await $("//span[normalize-space()='Emergency phone is Required']");
        await expect(spanvin).toHaveTextContaining("Emergency phone is Required");
        
  })
    
        //Entering Carrier  Data 
       xit("Create Carrier",async()=>{
        //Entering Carrier Information Part-I
        await $('#companyname').setValue("BSUS PVT LTD");
        await $("#dotnumber").setValue("5368479");
        await $("//ngx-intl-tel-input[@id='cemergencyphone']//input[@id='phone']").setValue("6308568845");
        await $("//input[@id='email']").setValue("rahulshetty@gmail.com");
        await $("//ngx-intl-tel-input[@id='cellphone']//input[@id='phone']").setValue("6308456845"); 


        //Carrier Information Part-II
        const selectors = $$('.mat-expansion-panel');    
        await selectors[0].click();

        await $('#fullName').setValue("Rahulshetty");
        await $('#displayName').setValue("Rahul");
        await $("#dateofbirth").setValue("08/24/1996"); 
        await $('#ssn').setValue("458572394");
        await $('#cemergenctcontact').setValue("6308456849");
        await $("//input[@placeholder='Search Nearest Location']").setValue("Hyderabad");
        await $("(//span[contains(text(),'Hyderabad')])[1]").click();

        //Enter Contact Information
        const contact = $$('.mat-expansion-panel');    
        await contact[1].click();

        await $("(//i[@class='dx-icon dx-icon-edit-button-addrow'])[1]").click();

        await $("//div[@class='dx-dropdowneditor-icon']").click();
        await $("//div[@class='dx-item-content dx-list-item-content'][normalize-space()='Carrier']").click();
        browser.keys("\uE004")  

        await $("//input[@role='textbox']").setValue("Ramu");
        browser.keys("\uE004")  

        await $("//input[@role='textbox']").setValue("9030341605");
        browser.keys("\uE004")  

        await $("//input[@role='textbox']").setValue("9886359856");
        browser.keys("\uE004")  

        await $("//input[@role='textbox']").setValue("85269");
        browser.keys("\uE004")  

        await $("//input[@role='textbox']").setValue("shivapervala@gmail.com");
        browser.keys("\uE004")  

        await $("//input[@role='textbox']").setValue("contact information");
        browser.keys("\uE004")  


         //Enter Employment Information
         const employment = $$('.mat-expansion-panel');    
         await employment[2].click();

        await $("#inline-radio2").click();
        await $("#hiredate").setValue("11/23/2020");
        await $("#terminationdate").setValue("05/23/2021");
        await $('#vendoraccount').setValue("8569745632");
        await $('#quickpayid').setValue("ACNT8654893215");
        await $('#bankname').setValue("Bank of America");
        await $('#accounttype').setValue("Savings");
        await $('#accountnumber').setValue("5698236478951248");
        await $('#routingnumber').setValue("746598234");

        //Enter Truck safety Information
        const maintenance = $$('.mat-expansion-panel');    
        maintenance[3].click();
        
        
        await $("(//i[@class='dx-icon dx-icon-edit-button-addrow'])[2]").click();

        await $("//div[@class='dx-dropdowneditor-icon']").click();
        await $("//div[@class='dx-item-content dx-list-item-content'][normalize-space()='Truck']").click();
        browser.keys("\uE004")  

        await $("//div[@class='dx-dropdowneditor-icon']").click();
        await $("//div[contains(text(),'Venkat')]").click();
        browser.keys("\uE004") 

        await $("//input[@role='textbox']").setValue("CF");
        browser.keys("\uE004")  

        await $("//input[@role='textbox']").setValue("CF8569");
        browser.keys("\uE004")  

        await $("//input[@role='combobox']").setValue("5/10/2022");
        browser.keys("\uE004")

        await $("//input[@role='combobox']").setValue("6/10/2021");
        browser.keys("\uE004")  

        await $("//div[@class='dx-dropdowneditor-icon']").click();
        await $("//div[@class='dx-item-content dx-list-item-content'][normalize-space()='Active']").click();
        browser.keys("\uE004") 
     
        //Driver safety      
        const payrate =  $$('.mat-expansion-panel');   
        payrate[4].click();
  
        await $("(//i[@class='dx-icon dx-icon-edit-button-addrow'])[3]").click();

        await $("//div[@class='dx-dropdowneditor-icon']").click();
        await $("//div[contains(text(),'Venkat')]").click();
        browser.keys("\uE004")  

        await $("//input[@role='textbox']").setValue("CF");
        browser.keys("\uE004")  

        await $("//input[@role='textbox']").setValue("5963486");
        browser.keys("\uE004")  

        await $("//input[@role='combobox']").setValue("5/18/2022");
        browser.keys("\uE004")

        await $("//input[@role='combobox']").setValue("3/10/2022");
        browser.keys("\uE004")  

        await $("//div[@class='dx-dropdowneditor-icon']").click();
        await $("//div[contains(text(),'Yes')]").click();
        browser.keys("\uE004") 
     
        await $("//div[@class='dx-dropdowneditor-icon']").click();
        await $("//div[@class='dx-item-content dx-list-item-content'][normalize-space()='Active']").click();
        browser.keys("\uE004") 

        //Payrate Table        
        const medical =  $$('.mat-expansion-panel');   
        medical[5].click();

        await $("(//i[@class='dx-icon dx-icon-edit-button-addrow'])[4]").click();

        await $("//input[@role='combobox']").setValue("6/20/2022");
        browser.keys("\uE004")

        await $("//div[@class='dx-dropdowneditor-icon']").click();
        await $("//div[contains(text(),'Per Mile')]").click();
        browser.keys("\uE004")  

        await $("//input[@role='textbox']").setValue("10");
        browser.keys("\uE004")  

        await $("//input[@role='textbox']").setValue("10");
        browser.keys("\uE004")  

        await $("//input[@role='textbox']").setValue("10");
        browser.keys("\uE004")



        //Drug and Medical Test        
        const Drug =  $$('.mat-expansion-panel');   
        Drug[6].click();

        await $("(//i[@class='dx-icon dx-icon-edit-button-addrow'])[5]").click();

        await $("//input[@role='combobox']").setValue("5/22/2021");
        browser.keys("\uE004")

        await $("//div[@class='dx-dropdowneditor-icon']").click();
        await $("//div[@class='dx-item-content dx-list-item-content']").click();
        browser.keys("\uE004")  

        await $("//input[@role='textbox']").setValue("yes");
        browser.keys("\uE004")  

        await $("//div[@class='dx-dropdowneditor-icon']").click();
        await $("//div[contains(text(),'Pass')]").click();
        browser.keys("\uE004")  

        await $("//input[@role='textbox']").setValue("Drug test is required");
        browser.keys("\uE004")

        //Submit Carrier Form and checks with toast message
        await $('.card-footer'); 
        await $("//div[@class='ng-star-inserted']//button[@type='submit'][normalize-space()='Submit']").click();        
        await expect(LoginPage.toastMessage).toHaveTextContaining("Carrierform Data Submitted");
        await browser.pause(1000);

       });

 });

//check the entered Carrier data with view page

describe('Verify The Carrier Data',function() 
{

    xit("Veiw Carrier", async()=>{

        //Verify Driver Information Part-I Viw Data
        await $('.card-header'); 
        await $("#search").setValue('BSUS PVT LTD');

        await $("//a[normalize-space()='View']").click();
        await browser.pause(1000);

        const companyname = $('#companyname');
        await expect(companyname).toHaveAttributeContaining('ng-reflect-model', 'BSUS PVT LTD');

        const dotnumber = $("#dotnumber");
        await expect(dotnumber).toHaveAttributeContaining('ng-reflect-model', '5368479');

        const phone = $("//ngx-intl-tel-input[@id='cemergencyphone']//input[@id='phone']");
        await expect(phone).toHaveAttributeContaining('ng-reflect-model', '630-856-8845');

        const email = $('#email');
        await expect(email).toHaveAttributeContaining('ng-reflect-model', 'rahulshetty@gmail.com');

        const ephone = $("//ngx-intl-tel-input[@id='cellphone']//input[@id='phone']");
        await expect(ephone).toHaveAttributeContaining('ng-reflect-model', '630-845-6845');

        //Verify Carrier Information Part - II 
         const carrierinfo = $$('.mat-expansion-panel');    
         await carrierinfo[0].click();
        
         const fullName = $('#fullName');
         await expect(fullName).toHaveAttributeContaining('ng-reflect-model', 'Rahulshetty');
       
         const displayName = $('#displayName');
         await expect(displayName).toHaveAttributeContaining('ng-reflect-model', 'Rahul');
 
         const dateofbirth = $("#dateofbirth");
         await expect(dateofbirth).toHaveAttributeContaining('ng-reflect-model', '1996-08-24');
 
         const ssn = $('#ssn');
         await expect(ssn).toHaveAttributeContaining('ng-reflect-model', '458572394');

         const cemergenctcontact = $('#cemergenctcontact');
         await expect(cemergenctcontact).toHaveAttributeContaining('ng-reflect-model', '6308456849');
        
        //Enter Contact Information
        const employ = $$('.mat-expansion-panel');    
        await employ[1].click();

        var carrierType = $("//td[normalize-space()='Carrier']");
        await expect(carrierType).toHaveText('Carrier');

        var name = $("//td[@role='gridcell'][normalize-space()='Ramu']");
        await expect(name).toHaveText('Ramu');

        var phoneNumber = $("//td[normalize-space()='9030341605']");
        await expect(phoneNumber).toHaveText('9030341605');

        var mobileNumber = $("//td[normalize-space()='9886359856']");
        await expect(mobileNumber).toHaveText('9886359856');

        var ext = $("//td[normalize-space()='85269']");
        await expect(ext).toHaveText('85269');

        var mailId = $("//td[normalize-space()='shivapervala@gmail.com']");
        await expect(mailId).toHaveText('shivapervala@gmail.com');

        var contactInfo = $("//td[normalize-space()='contact information']");
        await expect(contactInfo).toHaveText('contact information');


        //Enter Employment Information
        const employment = $$('.mat-expansion-panel');    
        await employment[2].click();
        await browser.pause(2000)
        const Employee = $('#inline-radio2');
        await expect(Employee).toHaveAttributeContaining('ng-reflect-model', 'false');
        await browser.pause(2000)

        const hireDate = $("//input[@id='hiredate']");
        await expect(hireDate).toHaveAttributeContaining('ng-reflect-model', '2020-11-23');
      
        const terminationDate1 = $("//input[@id='terminationdate']");
        await expect(terminationDate1).toHaveAttributeContaining('ng-reflect-model', '2021-05-23');

         const vendorAccount = $("//input[@id='vendoraccount']");
         await expect(vendorAccount).toHaveAttributeContaining('ng-reflect-model', '8569745632');

          const quickPayId = $("//input[@id='quickpayid']");
         await expect(quickPayId).toHaveAttributeContaining('ng-reflect-model', 'ACNT8654893215');
        
         const bankname = $('#bankname');
         await expect(bankname).toHaveAttributeContaining('ng-reflect-model', 'Bank of America');

         const accounttype = $("#accounttype");
        await expect(accounttype).toHaveAttributeContaining('ng-reflect-model', 'Savings');

        const accountnumber = $('#accountnumber');
        await expect(accountnumber).toHaveAttributeContaining('ng-reflect-model', '5698236478951248');
        
         const routingnumber = $('#routingnumber');
         await expect(routingnumber).toHaveAttributeContaining('ng-reflect-model', '746598234');
  
        //Enter Carrier safety Information
        const maintenance = $$('.mat-expansion-panel');    
        maintenance[3].click();
        await browser.pause(1000)
 
        var carrierType = $("//td[normalize-space()='Truck']");
        await expect(carrierType).toHaveText('Truck');

        var driverName = $("//td[normalize-space()='Venkat']");
        await expect(driverName).toHaveText('Venkat');

        var registerState = $("(//td[@role='gridcell'][normalize-space()='CF'])[1]");
        await expect(registerState).toHaveText('CF');

        var plateNumber = $("//td[normalize-space()='CF8569']");
        await expect(plateNumber).toHaveText('CF8569');

        var plateExpiry = $("//td[normalize-space()='5/10/2022']");
        await expect(plateExpiry).toHaveText('5/10/2022');

        var insurenceExpiry = $("//td[normalize-space()='6/10/2021']");
        await expect(insurenceExpiry).toHaveText('6/10/2021');

        var activeStatus = $("(//td[@role='gridcell'][normalize-space()='Active'])[1]");
        await expect(activeStatus).toHaveText('Active');


    
        //Driver safety      
        const payrate =  $$('.mat-expansion-panel');   
        payrate[4].click();
        await browser.pause(1000)

         
        var driverName = $("(//td[@role='gridcell'][normalize-space()='Venkat'])[2]");
        await expect(driverName).toHaveText('Venkat');

        var registerState = $("(//td[@role='gridcell'][normalize-space()='CF'])[2]");
        await expect(registerState).toHaveText('CF');

        var cdlNumber = $("//td[normalize-space()='5963486']");
        await expect(cdlNumber).toHaveText('5963486');

        var cdlExpiry = $("//td[normalize-space()='5/18/2022']");
        await expect(cdlExpiry).toHaveText('5/18/2022');

        var medicalExpiry = $("//td[normalize-space()='3/10/2022']");
        await expect(medicalExpiry).toHaveText('3/10/2022');

        var hazmat = $("//td[normalize-space()='Yes']");
        await expect(hazmat).toHaveText('Yes');

        var activeStatus = $("(//td[@role='gridcell'][normalize-space()='Active'])[2]");
        await expect(activeStatus).toHaveText('Active');



        //Payrate Table        
        const medical =  $$('.mat-expansion-panel');   
        medical[5].click();
        await browser.pause(1000)

        var dateFrom = $("//td[normalize-space()='6/20/2022']");
        await expect(dateFrom).toHaveText('6/20/2022');

        var payType = $("//td[normalize-space()='Per Mile']");
        await expect(payType).toHaveText('Per Mile');

        var payRate = $("(//td[@role='gridcell'][normalize-space()='10'])[1]");
        await expect(payRate).toHaveText('10');

        var dispatcherPay = $("(//td[@role='gridcell'][normalize-space()='10'])[2]");
        await expect(dispatcherPay).toHaveText('10');

        var deadheadPay = $("(//td[@role='gridcell'][normalize-space()='10'])[3]");
        await expect(deadheadPay).toHaveText('10');


        //Drug and Medical Test        
        const drugstest =  $$('.mat-expansion-panel');   
        drugstest[6].click();
        await browser.pause(1000)

        var dateFrom = $("//td[normalize-space()='5/22/2021']");
        await expect(dateFrom).toHaveText('5/22/2021');

        var driverName = $("//td[normalize-space()='shiva']");
        await expect(driverName).toHaveText('shiva');

        var testFacility = $("//td[normalize-space()='yes']");
        await expect(testFacility).toHaveText('yes');

        var testResult = $("//td[normalize-space()='Pass']");
        await expect(testResult).toHaveText('Pass');

        var comments = $("//td[normalize-space()='Drug test is required']");
        await expect(comments).toHaveText('Drug test is required');
         
        //close the view page
        const closev =  $("//button[@class='close']"); 
        closev.$("//button[@class='close']").click();
        closev.waitForExist();
        await browser.pause(1000)

       });
   
});


// Edit the Carrier by clicking on edit button
describe('Edit Carrier Data',function() 
{
       it("Update Carrier",async()=>{
        //open the edit Carrier form
        $('.card-header'); 
        await  $("//h5[normalize-space()='Carriers']");
        await   $("//h5[normalize-space()='Carriers']").click();
        await browser.pause(1000);
        await $("#search").setValue('BSUS PVT LTD');
        await browser.pause(2000);
        $("//a[normalize-space()='Edit']").click();
        await browser.pause(1000);
        //Entering Carrier Information Part-I
        await $('#companyname').setValue("HCL PVT LTD");
        await $("#dotnumber").setValue("8568479");
        await $("//ngx-intl-tel-input[@id='cemergencyphone']//input[@id='phone']").setValue("6308951845");
        await $("#email").setValue("ramnarayan@gmail.com");
        await $("//ngx-intl-tel-input[@id='cellphone']//input[@id='phone']").setValue("6308753845"); 

        //Carrier Information Part-II
        const selectors = $$('.mat-expansion-panel');    
        await selectors[0].click();

        await $('#fullName').setValue("Ramnarayan");
        await $('#displayName').setValue("RamNarayan");
        await $("#dateofbirth").setValue("06/28/1994"); 
        await $('#ssn').setValue("486572394");
        await $('#cemergenctcontact').setValue("6309566849");
        await $("//input[@placeholder='Search Nearest Location']").setValue("Warangal");
        await $("(//span[contains(text(),'Warangal')])[1]").click();

        //Enter Contact Information
        const contact = $$('.mat-expansion-panel');    
        await contact[1].click();

        await browser.pause(1000)
        var carrierType = $("//td[normalize-space()='Carrier']");  
        carrierType.doubleClick();
        await browser.pause(1000)

        //await $("//div[@class='dx-dropdowneditor-icon']").click();
         await $("//div[@class='dx-item-content dx-list-item-content'][normalize-space()='Driver']").click();
         browser.keys("\uE004")  

        await $("//input[@role='textbox']").setValue("Naresh");
        browser.keys("\uE004")  

        await $("//input[@role='textbox']").setValue("9030345605");
        browser.keys("\uE004")  

        await $("//input[@role='textbox']").setValue("9886359896");
        browser.keys("\uE004")  

        await $("//input[@role='textbox']").setValue("35698");
        browser.keys("\uE004")  

        await $("//input[@role='textbox']").setValue("shivaperval@gmail.com");
        browser.keys("\uE004")  

        await $("//input[@role='textbox']").setValue("contact info");
        browser.keys("\uE004")  

        //Enter Employment Information
        const employment = $$('.mat-expansion-panel');    
        await employment[2].click();

        await $("#inline-radio2").click();
        await $("#hiredate").setValue("12/21/2020");
        await $("#terminationdate").setValue("07/24/2022");
        await $('#vendoraccount').setValue("8569635632");
        await $('#quickpayid').setValue("UKLI8654893215");
        await $('#bankname').setValue("Bank of USA");
        await $('#accounttype').setValue("Current");
        await $('#accountnumber').setValue("5698296588951248");
        await $('#routingnumber').setValue("746756234");

        //Enter truck safety Information
        const maintenance = $$('.mat-expansion-panel');    
        await maintenance[3].click();
        await browser.pause(1000)
        var carrierType = $("//td[normalize-space()='Truck']");  
        carrierType.doubleClick();
        await browser.pause(1000)

        //await $("//div[@class='dx-dropdowneditor-icon']").click();
        await $("//div[@class='dx-item-content dx-list-item-content'][normalize-space()='Trailer']").click();
        browser.keys("\uE004")  

        await $("//div[@class='dx-dropdowneditor-icon']").click();
        await $("//div[contains(text(),'shiva')]").click();
        browser.keys("\uE004") 

        await $("//input[@role='textbox']").setValue("AU");
        browser.keys("\uE004")  

        await $("//input[@role='textbox']").setValue("CF8669");
        browser.keys("\uE004")  

        await $("//input[@role='combobox']").setValue("6/10/2022");
        browser.keys("\uE004")

        await $("//input[@role='combobox']").setValue("6/11/2021");
        browser.keys("\uE004")  

        await $("//div[@class='dx-dropdowneditor-icon']").click();
        await $("//div[@class='dx-item-content dx-list-item-content'][normalize-space()='Inactive']").click();
        browser.keys("\uE004") 
     
        //Edit Driver safty

        const driverSafty =  $$('.mat-expansion-panel');   
        driverSafty[4].click();

        await browser.pause(2000)
       // var driverName = $("//td[@class='dx-focused']");  
        var driverName = $("//td[@class='dx-focused']");  
        driverName.doubleClick();
        await browser.pause(3000)

       await $("//div[contains(text(),'Ramesh')]").click();
        browser.keys("\uE004")  

        await $("//input[@role='textbox']").setValue("AU");
        browser.keys("\uE004")  

        await $("//input[@role='textbox']").setValue("5968686");
        browser.keys("\uE004")  

        await $("//input[@role='combobox']").setValue("5/19/2022");
        browser.keys("\uE004")

        await $("//input[@role='combobox']").setValue("3/10/2021");
        browser.keys("\uE004")  

        await $("//div[@class='dx-dropdowneditor-icon']").click();
        await $("//div[contains(text(),'No')]").click();
        browser.keys("\uE004") 
     
        await $("//div[@class='dx-dropdowneditor-icon']").click();
        await $("//div[@class='dx-item-content dx-list-item-content'][normalize-space()='Inactive']").click();
        browser.keys("\uE004") 

        //Payrate Table        
        const medical =  $$('.mat-expansion-panel');   
        medical[5].click();

        await browser.pause(1000)
        var dateFrom = $("//td[normalize-space()='6/20/2022']");  
        dateFrom.doubleClick();
        await browser.pause(1000)

        await $("//input[@role='combobox']").setValue("4/20/2022");
        browser.keys("\uE004")

        await $("//div[@class='dx-dropdowneditor-icon']").click();
        await $("//div[contains(text(),'Per Hour')]").click();
        browser.keys("\uE004")  

        await $("//input[@role='spinbutton']").setValue("20");
        browser.keys("\uE004")  

        await $("//input[@role='spinbutton']").setValue("20");
        browser.keys("\uE004")  

        await $("//input[@role='textbox']").setValue("20");
        browser.keys("\uE004")

        //Drug and Medical Test        
        const Drug =  $$('.mat-expansion-panel');   
        Drug[6].click();

        await browser.pause(1000)
        var dateFrom = $("//td[normalize-space()='5/22/2021']");  
        dateFrom.doubleClick();
        await browser.pause(1000)
        
        await $("//input[@role='combobox']").setValue("5/22/2022");
        browser.keys("\uE004")

        await $("//div[@class='dx-dropdowneditor-icon']").click();
        await $("//div[contains(text(),'Ramesh')]").click();
        browser.keys("\uE004")  

        await $("//input[@role='textbox']").setValue("NO");
        browser.keys("\uE004")  

        await $("//div[@class='dx-dropdowneditor-icon']").click();
        await $("//div[contains(text(),'Fail')]").click();
        browser.keys("\uE004")  

        await $("//input[@role='textbox']").setValue("Medical test is required");
        browser.keys("\uE004")

        
        //Submit Updated carrier Form and checks with toast message
        await $('.card-footer'); 
         $("//div[@class='ng-star-inserted']//button[@type='submit'][normalize-space()='Update']").click();    
        await expect(LoginPage.toastMessage).toHaveTextContaining("Carrier Data Updated successfully");
        await browser.pause(1000);
       });
});


//check the updated Carrier by clicking on view page

describe('Verify the updated data',function() 
{

    xit("View Carrier Data", async()=>{
         
        //Verify Driver Information Part-I Viw Data
        await $('.card-header'); 
        await $("#search").setValue('HCL PVT LTD');
        await $("//a[normalize-space()='View']").click();
        await browser.pause(500);

        const companyname = $('#companyname');
        await expect(companyname).toHaveAttributeContaining('ng-reflect-model', 'HCL PVT LTD');

        const dotnumber = $("#dotnumber");
        await expect(dotnumber).toHaveAttributeContaining('ng-reflect-model', '8568479');

        const ephone = $("//ngx-intl-tel-input[@id='cemergencyphone']//input[@id='phone']");
        await expect(ephone).toHaveAttributeContaining('ng-reflect-model', '630-895-1845');

        const phone = $("//ngx-intl-tel-input[@id='cellphone']//input[@id='phone']");
        await expect(phone).toHaveAttributeContaining('ng-reflect-model', '630-875-3845');

        


        //Verify Carrier Information Part - II 
         const employment = $$('.mat-expansion-panel');    
         await employment[0].click();

        
         const fullName = $('#fullName');
         await expect(fullName).toHaveAttributeContaining('ng-reflect-model', 'Ramnarayan');
  
         const email = $('#email');
         await expect(email).toHaveAttributeContaining('ng-reflect-model', 'ramnarayan@gmail.com');
       
         const displayName = $('#displayName');
         await expect(displayName).toHaveAttributeContaining('ng-reflect-model', 'RamNarayan');
 
         const dateofbirth = $("#dateofbirth");
         await expect(dateofbirth).toHaveAttributeContaining('ng-reflect-model', '1994-06-28');
 
         const ssn = $('#ssn');
         await expect(ssn).toHaveAttributeContaining('ng-reflect-model', '486572394');

         const cemergenctcontact = $('#cemergenctcontact');
         await expect(cemergenctcontact).toHaveAttributeContaining('ng-reflect-model', '6309566849');
        
        //Enter Contact Information
        const contact = $$('.mat-expansion-panel');    
        await contact[1].click();

        var carrierType = $("//td[contains(text(),'Driver')]");
        await expect(carrierType).toHaveText('Driver');

        var name = $("//td[normalize-space()='Naresh']");
        await expect(name).toHaveText('Naresh');

        var phoneNumber = $("//td[normalize-space()='9030345605']");
        await expect(phoneNumber).toHaveText('9030345605');

        var mobileNumber = $("//td[normalize-space()='9886359896']");
        await expect(mobileNumber).toHaveText('9886359896');

        var ext = $("//td[normalize-space()='35698']");
        await expect(ext).toHaveText('35698');

        var mailId = $("//td[normalize-space()='shivaperval@gmail.com']");
        await expect(mailId).toHaveText('shivaperval@gmail.com');

        var contactInfo = $("//td[normalize-space()='contact info']");
        await expect(contactInfo).toHaveText('contact info');


        //Enter Contact Information
        const employ = $$('.mat-expansion-panel');    
        await employ[2].click();
       
        const Employee = $('#inline-radio2');
        await expect(await Employee).toHaveAttributeContaining('ng-reflect-model', 'false');

        const hireDate = $("//input[@id='hiredate']");
        await expect(hireDate).toHaveAttributeContaining('ng-reflect-model', '2020-12-21');
      
        const terminationDate1 = $("//input[@id='terminationdate']");
        await expect(terminationDate1).toHaveAttributeContaining('ng-reflect-model', '2022-07-24');

         const vendorAccount = $("//input[@id='vendoraccount']");
         await expect(vendorAccount).toHaveAttributeContaining('ng-reflect-model', '8569635632');

          const quickPayId = $("//input[@id='quickpayid']");
         await expect(quickPayId).toHaveAttributeContaining('ng-reflect-model', 'UKLI8654893215');

        
         const bankname = $('#bankname');
         await expect(bankname).toHaveAttributeContaining('ng-reflect-model', 'Bank of USA');

         const accounttype = $("#accounttype");
         await expect(accounttype).toHaveAttributeContaining('ng-reflect-model', 'Current');

         const accountnumber = $('#accountnumber');
         await expect(accountnumber).toHaveAttributeContaining('ng-reflect-model', '5698296588951248');
        
         const routingnumber = $('#routingnumber');
         await expect(routingnumber).toHaveAttributeContaining('ng-reflect-model', '746756234');
  
        
        //Enter Carrier safety Information
        const maintenance = $$('.mat-expansion-panel');    
        maintenance[3].click();
        
        await browser.pause(1000)
 
        var carrierType = $("//td[normalize-space()='Trailer']");
        await expect(carrierType).toHaveText('Trailer');

        var driverName = $("//td[normalize-space()='shiva']");
        await expect(driverName).toHaveText('shiva');

        var registerState = $("//td[normalize-space()='AU']");
        await expect(registerState).toHaveText('AU');

        var plateNumber = $("//td[normalize-space()='CF8669']");
        await expect(plateNumber).toHaveText('CF8669');

        var plateExpiry = $("//td[normalize-space()='6/10/2022']");
        await expect(plateExpiry).toHaveText('6/10/2022');

        var insurenceExpiry = $("//td[normalize-space()='6/11/2021']");
        await expect(insurenceExpiry).toHaveText('6/11/2021');

        var activeStatus = $("//td[normalize-space()='Inactive']");
        await expect(activeStatus).toHaveText('Inactive');

        //Driver safety      
        const payrate =  $$('.mat-expansion-panel');   
        payrate[4].click();

        await browser.pause(1000)

         
        // var driverName = $("(//td[@role='gridcell'][normalize-space()='Venkat'])[2]");
        // await expect(driverName).toHaveText('Venkat');

        // var registerState = $("(//td[@role='gridcell'][normalize-space()='CF'])[2]");
        // await expect(registerState).toHaveText('CF');

        // var cdlNumber = $("//td[normalize-space()='5963486']");
        // await expect(cdlNumber).toHaveText('5963486');

        // var cdlExpiry = $("//td[normalize-space()='5/18/2022']");
        // await expect(cdlExpiry).toHaveText('5/18/2022');

        // var medicalExpiry = $("//td[normalize-space()='3/10/2022']");
        // await expect(medicalExpiry).toHaveText('3/10/2022');

        // var hazmat = $("//td[normalize-space()='Yes']");
        // await expect(hazmat).toHaveText('Yes');

        // var activeStatus = $("(//td[@role='gridcell'][normalize-space()='Active'])[2]");
        // await expect(activeStatus).toHaveText('Active');
     
        //Payrate Table        
        const medical =  $$('.mat-expansion-panel');   
        medical[5].click();
        await browser.pause(1000)

        var dateFrom = $("//td[normalize-space()='4/20/2022']");
        await expect(dateFrom).toHaveText('4/20/2022');

        var payType = $("//td[normalize-space()='Per Hour']");
        await expect(payType).toHaveText('Per Hour');

        var payRate = $("(//td[@role='gridcell'][normalize-space()='20'])[1]");
        await expect(payRate).toHaveText('20');

        var dispatcherPay = $("(//td[@role='gridcell'][normalize-space()='20'])[2]");
        await expect(dispatcherPay).toHaveText('20');

        var deadheadPay = $("(//td[@role='gridcell'][normalize-space()='20'])[3]");
        await expect(deadheadPay).toHaveText('20');


        //Drug and Medical Test        
        const drugstest =  $$('.mat-expansion-panel');   
        drugstest[6].click();
        await browser.pause(1000)

        var dateFrom = $("//td[normalize-space()='5/22/2022']");
        await expect(dateFrom).toHaveText('5/22/2022');

        var driverName = $("//td[normalize-space()='Ramesh']");
        await expect(driverName).toHaveText('Ramesh');

        var testFacility = $("//td[normalize-space()='NO']");
        await expect(testFacility).toHaveText('NO');

        var testResult = $("//td[normalize-space()='Fail']");
        await expect(testResult).toHaveText('Fail');

        var comments = $("//td[normalize-space()='Medical test is required']");
        await expect(comments).toHaveText('Medical test is required');
     
         
        //close the view page
        const closev =  $("//button[@class='close']"); 
        closev.$("//button[@class='close']").click();
        closev.waitForExist();
        await browser.pause(1000);
       
    });     

    //Delete the carrier and checks with toase message
    xit("Delete the Carrier", async()=>{

        await $("//a[normalize-space()='Delete']").click();    
        await expect(LoginPage.toastMessage).toHaveTextContaining("Carrier Data Deleted");
        await browser.pause(1000);
              
       });

});







