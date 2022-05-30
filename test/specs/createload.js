const CONSTANT = require('./common.js')
const expectchai = require('chai').expect
const LoginPage = require('./utility/loginpage.js')


describe('LoadMiles application',function() 
{

    it("Login with valid UserId Valid Password", async()=>{
        //login with valid userid and valid password
        browser.maximizeWindow()
        await browser.url(CONSTANT.LOGIN_URL);
        await browser.pause(1000);
        LoginPage.Login(CONSTANT.VALID_USRID, CONSTANT.VALID_PAWD);         
        await  browser.pause(1000);
        const ink = $(".poweroff");
        ink.waitForExist();  
        // Browser waits untill the poweroff button appears After login, if the poweorff button didnt appear in 5 secnds testcase will fail

       })

       //Create load  Information Part-I testing Required inputs

       it("Verify Create load Information valid inputs",async()=>{

        //Open Create load 
        await  browser.pause(1000);
        await  $("//h5[normalize-space()='Create Load']");
        await   $("//h5[normalize-space()='Create Load']").click();
        await  browser.pause(1000);
        //Submitting empty form and checking for the validation fields   click on submit and check with toast meesage
        await   $("//button[normalize-space()='Submit']").click();   
        await expect(LoginPage.toastMessage).toHaveTextContaining("Error");
        await browser.pause(4000);
        
        // negative Test cases for required field

        $("//span[normalize-space()='Customer is required']").scrollIntoView();
        const spancustomer = await $("//div[contains(text(),'Customer is required')]");
        await expect(spancustomer).toHaveTextContaining("Customer is required");
        
        const spanphone = await $("//div[contains(text(),'Contact Phone is required')]");
         await expect(spanphone).toHaveTextContaining("Contact Phone is required");

         const spanReference = await $("(//div[@class='ng-star-inserted'][normalize-space()='cref No is required'])[1]");
         await expect(spanReference).toHaveTextContaining("cref No is required");

         const shipperReference = await $("(//div[@class='ng-star-inserted'][normalize-space()='cref No is required'])[2]");
         await expect(shipperReference).toHaveTextContaining("cref No is required");

         const loadPrice = await $("//div[contains(text(),'Load price is required')]");
         await expect(loadPrice).toHaveTextContaining("Load price is required");

        const loadCost = await $("//div[contains(text(),'Load cost is required')]");
        await expect(loadCost).toHaveTextContaining("Load cost is required");

        const distance = await $("//div[contains(text(),'Distance is required')]");
        await expect(distance).toHaveTextContaining("Distance is required");

        const deadHead = await $("//div[contains(text(),'Dead head is required')]");
        await expect(deadHead).toHaveTextContaining("Dead head is required");

  })
    
        //Entering Create load  Data 
       xit("Create load",async()=>{
        //Entering Create load Information Part-I
        await $("//input[@placeholder='Select customer']").setValue("Naveen"); 
        //const selectCustomer = await $("//span[@class='mat-option-text']");
        await $("//span[@class='mat-option-text']").click(); 
        await $("//ngx-intl-tel-input[@id='phone']//input[@id='phone']").setValue("6308456849");
        await $("//input[@id='email']").setValue("naveen@gmail.com");
        await $("//input[@id='crefNo']").setValue("2568345");
        await $("//input[@id='srefNo']").setValue("6308456"); 
        
        const selectCurrency = await $("//select[@id='currency']");
        await selectCurrency.selectByAttribute('value', 'USD'); 

        await $("//input[@id='loadPrice']").setValue("100");
        await $("//input[@id='loadCost']").setValue("100");
        await $("//input[@id='distance']").setValue("200");
        await $("//input[@id='deadHead']").setValue("325");

        //load creation part-2

        await $("//input[@id='date']").setValue("02/04/2020");

        const selectdispatcher = await $("//select[@id='dispatcher']");
        await selectdispatcher.selectByAttribute('value', '626102d25d69003fd51665ff'); 

        const equipType = await $("//select[@id='equipType']");
        await equipType.selectByAttribute('value', '1');

        const selectBorder = await $("//select[@id='crossBorder']");
        await selectBorder.selectByAttribute('value', 'Yes');

        await $("//input[@id='commodity']").setValue("UIO");
        await $("//input[@id='weight']").setValue("325");

        const selectKGs = await $("//select[@id='weightUnits']");
        await selectKGs.selectByAttribute('value', 'KGs');

        await $("//input[@id='comments']").setValue("Load Weight");

        const selecSealed = await $("//select[@id='sealed']");
        await selecSealed.selectByAttribute('value', 'Yes');

        const selecthazmat = await $("//select[@id='hazmat']");
        await selecthazmat.selectByAttribute('value', 'Yes');

        const loadstatus = await $("//select[@id='loadstatus']");
        await loadstatus.selectByAttribute('value', '7');

        await $("//textarea[@id='notes']").setValue("Naveen Load is created");

        await $("//button[normalize-space()='Submit']").click();        
        await expect(LoginPage.toastMessage).toHaveTextContaining("Load successfully created");
        await browser.pause(1000);

       });

 });


 //Verify the submitted data
 describe('Verify the load data',function() 
{
    xit("Verify load Data", async()=>{

        const customerName = $("//input[@placeholder='Select customer']");
        await expect(customerName).toHaveAttributeContaining('ng-reflect-model', 'NAVEEN');

        const phone = $("//ngx-intl-tel-input[@id='phone']//input[@id='phone']");
        await expect(phone).toHaveAttributeContaining('ng-reflect-model', '630-845-6849');

        const email = $("//input[@id='email']");
        await expect(email).toHaveAttributeContaining('ng-reflect-model', 'naveen@gmail.com');

        const ephone = $("//input[@id='crefNo']");
        await expect(ephone).toHaveAttributeContaining('ng-reflect-model', '2568345');

        const srefNo = $("//input[@id='srefNo']");
        await expect(srefNo).toHaveAttributeContaining('ng-reflect-model', '6308456');

        const currency = $("//select[@id='currency']");
        await expect(currency).toHaveAttributeContaining('ng-reflect-model', 'USD');

        const loadPrice = $("//input[@id='loadPrice']");
        await expect(loadPrice).toHaveAttributeContaining('ng-reflect-model', '100');
        
        const loadCost = $("//input[@id='loadCost']");
        await expect(loadCost).toHaveAttributeContaining('ng-reflect-model', '100');

        const distance = $("//input[@id='distance']");
        await expect(distance).toHaveAttributeContaining('ng-reflect-model', '200');

        const deadHead = $("//input[@id='deadHead']");
        await expect(deadHead).toHaveAttributeContaining('ng-reflect-model', '325');

        const date = $("//input[@id='date']");
        await expect(date).toHaveAttributeContaining('ng-reflect-model', '2022-02-04');

        const dispatcher = $("//select[@name='dispatcher']");
        await expect(dispatcher).toHaveAttributeContaining('ng-reflect-model', '626102d25d69003fd51665ff');

        const equipType = $("//select[@id='equipType']");
        await expect(equipType).toHaveAttributeContaining('ng-reflect-model', '1');

        const crossBorder = $("//select[@id='crossBorder']");
        await expect(crossBorder).toHaveAttributeContaining('ng-reflect-model', 'Yes');
        
        const commodity = $("//input[@id='commodity']");
        await expect(commodity).toHaveAttributeContaining('ng-reflect-model', 'UIO');
        
        const weight = $("//input[@id='weight']");
        await expect(weight).toHaveAttributeContaining('ng-reflect-model', '325');
        
        const weightUnits = $("//select[@id='weightUnits']");
        await expect(weightUnits).toHaveAttributeContaining('ng-reflect-model', 'KGs');
        
        const comments = $("//input[@id='comments']");
        await expect(comments).toHaveAttributeContaining('ng-reflect-model', 'Load Weight');
        
        const sealed = $("//select[@id='sealed']");
        await expect(sealed).toHaveAttributeContaining('ng-reflect-model', 'Yes');
        
        const hazmat = $("//select[@id='hazmat']");
        await expect(hazmat).toHaveAttributeContaining('ng-reflect-model', 'Yes');

        const loadstatus = $("//select[@id='loadstatus']");
        await expect(loadstatus).toHaveAttributeContaining('ng-reflect-model', '7');

        
        const notes = $("//textarea[@id='notes']");
        await expect(notes).toHaveAttributeContaining('ng-reflect-model', 'Naveen Load is created');

         
    });


});


// Edit the Create load 
describe('Edit Create load Data',function() 
{
       xit("Update Create load",async()=>{

        await $("//input[@placeholder='Select customer']").setValue("Naveen"); 
        //const selectCustomer = await $("//span[@class='mat-option-text']");
        await $("//span[@class='mat-option-text']").click(); 
        await $("//ngx-intl-tel-input[@id='phone']//input[@id='phone']").setValue("6306556849");
        await $("//input[@id='email']").setValue("naveenkumar@gmail.com");
        await $("//input[@id='crefNo']").setValue("Naveen486");
        await $("//input[@id='srefNo']").setValue("5934456"); 
        
        const selectCurrency = await $("//select[@id='currency']");
        await selectCurrency.selectByAttribute('value', 'GBP'); 

        await $("//input[@id='loadPrice']").setValue("200");
        await $("//input[@id='loadCost']").setValue("200");
        await $("//input[@id='distance']").setValue("300");
        await $("//input[@id='deadHead']").setValue("965");

        //load creation part-2

        await $("//input[@id='date']").setValue("02/04/2020");

        //const selectdispatcher = await $("//select[@name='dispatcher']");
        //await selectdispatcher.selectByAttribute('value', 'USD'); 

        const equipType = await $("//select[@id='equipType']");
        await equipType.selectByAttribute('value', '2');

        const selectBorder = await $("//select[@id='crossBorder']");
        await selectBorder.selectByAttribute('value', 'No');

        await $("//input[@id='commodity']").setValue("Cloths");
        await $("//input[@id='weight']").setValue("12");

        const selectKGs = await $("//select[@id='weightUnits']");
        await selectKGs.selectByAttribute('value', 'Tonnes');

        await $("//input[@id='comments']").setValue("Total weight of cloths");

        const selecSealed = await $("//select[@id='sealed']");
        await selecSealed.selectByAttribute('value', 'No');

        const selecthazmat = await $("//select[@id='hazmat']");
        await selecthazmat.selectByAttribute('value', 'No');

        const loadstatus = await $("//select[@id='loadstatus']");
        await loadstatus.selectByAttribute('value', '6');

        await $("//textarea[@id='notes']").setValue("Naveen Your Load is updated");
       
         $("//button[normalize-space()='Update']").click();    
        await expect(LoginPage.toastMessage).toHaveTextContaining("Load successfully updated");
        await browser.pause(2000);
       });
});



 //Verify the Updated load data
 describe('Verify the Updated load data',function() 
{
    xit("Verify load Data", async()=>{
        await browser.pause(2000);
        const customerName = $("//input[@placeholder='Select customer']");
        await expect(customerName).toHaveAttributeContaining('ng-reflect-model', 'NAVEEN');

        const phone = $("//ngx-intl-tel-input[@id='phone']//input[@id='phone']");
        await expect(phone).toHaveAttributeContaining('ng-reflect-model', '630-655-6849');

        const email = $("//input[@id='email']");
        await expect(email).toHaveAttributeContaining('ng-reflect-model', 'naveenkumar@gmail.com');

        const ephone = $("//input[@id='crefNo']");
        await expect(ephone).toHaveAttributeContaining('ng-reflect-model', 'Naveen486');


        const srefNo = $("//input[@id='srefNo']");
        await expect(srefNo).toHaveAttributeContaining('ng-reflect-model', '5934456');

        const currency = $("//select[@id='currency']");
        await expect(currency).toHaveAttributeContaining('ng-reflect-model', 'GBP');

        const loadPrice = $("//input[@id='loadPrice']");
        await expect(loadPrice).toHaveAttributeContaining('ng-reflect-model', '200');
        
        const loadCost = $("//input[@id='loadCost']");
        await expect(loadCost).toHaveAttributeContaining('ng-reflect-model', '200');

        const distance = $("//input[@id='distance']");
        await expect(distance).toHaveAttributeContaining('ng-reflect-model', '300');

        const deadHead = $("//input[@id='deadHead']");
        await expect(deadHead).toHaveAttributeContaining('ng-reflect-model', '965');

        const date = $("//input[@id='date']");
        await expect(date).toHaveAttributeContaining('ng-reflect-model', '2022-02-04');

        // const dispatcher = $("//select[@name='dispatcher']");
        // await expect(dispatcher).toHaveAttributeContaining('ng-reflect-model', '100');

        const equipType = $("//select[@id='equipType']");
        await expect(equipType).toHaveAttributeContaining('ng-reflect-model', '2');

        
        const crossBorder = $("//select[@id='crossBorder']");
        await expect(crossBorder).toHaveAttributeContaining('ng-reflect-model', 'No');
        
        const commodity = $("//input[@id='commodity']");
        await expect(commodity).toHaveAttributeContaining('ng-reflect-model', 'Cloths');
        
        const weight = $("//input[@id='weight']");
        await expect(weight).toHaveAttributeContaining('ng-reflect-model', '12');
        
        const weightUnits = $("//select[@id='weightUnits']");
        await expect(weightUnits).toHaveAttributeContaining('ng-reflect-model', 'Tonnes');
        
        const comments = $("//input[@id='comments']");
        await expect(comments).toHaveAttributeContaining('ng-reflect-model', 'Total weight of cloths');
        
        const sealed = $("//select[@id='sealed']");
        await expect(sealed).toHaveAttributeContaining('ng-reflect-model', 'No');
        
        const hazmat = $("//select[@id='hazmat']");
        await expect(hazmat).toHaveAttributeContaining('ng-reflect-model', 'No');

        const loadstatus = $("//select[@id='loadstatus']");
        await expect(loadstatus).toHaveAttributeContaining('ng-reflect-model', '6');

        const notes = $("//textarea[@id='notes']");
        await expect(notes).toHaveAttributeContaining('ng-reflect-model', 'Naveen Your Load is updated');

    });


});



describe('ADD Pickup',function() 
{
    
    xit("Add Pickup", async()=>{
        await browser.pause(1000);
        await $("//button[normalize-space()='Add Pickup']").click(); 
        await browser.pause(1000);
        $("(//select[@name='carrier'])[3]").selectByAttribute("value", "6261032b5d69003fd51666e2")
        
        $("//select[@name='driver1']").selectByAttribute("value", "626102935d69003fd5166524")
        await browser.pause(1000);

        $("//select[@name='driver2']").selectByAttribute("value", "626a390058b6d3447ebd4d71")
        $("//select[@name='truck']").selectByAttribute("value", "626101f25d69003fd516607e")
        $("//select[@name='trailer']").selectByAttribute("value", "626102505d69003fd516644d")
        await browser.pause(1000);

        await $("//input[@id='contactName']").setValue("Shiva");
        await $("//ngx-intl-tel-input[@id='contactNumber']//input[@id='phone']").setValue("6308578846");
        await $("//input[@id='pickupCompany']").setValue("QUARTZ");
        await $("//input[@id='pickupRef']").setValue("Naresh");

        await $("//input[@id='pickupDate']").setValue("06/22/2022");

        await $("//input[@id='pickupTime']").setValue("01:00AM");

        await $("//input[@placeholder='Search Nearest Location']").setValue("Hyderabad");
        await $("(//span[contains(text(),'Hyderabad')])[1]").click()
        await browser.pause(1000);

        const loadStatus = await $("//select[@name='loadStatus']");
        await loadStatus.selectByAttribute('value', '4'); 
        await browser.pause(1000);
        await $("//div[@class='card']//button[@type='submit'][normalize-space()='Submit']").click(); 
        await expect(LoginPage.toastMessage).toHaveTextContaining("Pickup successfully created");
        await browser.pause(3000);
    });


    xit("Verify Add Pickup", async()=>{
        await browser.pause(1000);
        await $("//i[@class='bi bi-pencil-fill actionIcon']").click(); 
        await browser.pause(3000);
        const carrier = $("(//select[@name='carrier'])[3]");
        await expect(carrier).toHaveAttributeContaining('ng-reflect-model', '6261032b5d69003fd51666e2');

        var driver1 = $("//select[@name='driver1']");
        await expect(driver1).toHaveAttributeContaining('ng-reflect-model', '626102935d69003fd5166524');

        var driver2 = $("//select[@name='driver2']");
        await expect(driver2).toHaveAttributeContaining('ng-reflect-model', '626a390058b6d3447ebd4d71');
        
        var truck = $("//select[@name='truck']");
        await expect(truck).toHaveAttributeContaining('ng-reflect-model', '626101f25d69003fd516607e');
        
        var trailer = $("//select[@name='trailer']");
        await expect(trailer).toHaveAttributeContaining('ng-reflect-model', '626102505d69003fd516644d');
        
        var contactName = $("//input[@id='contactName']");
        await expect(contactName).toHaveAttributeContaining('ng-reflect-model', 'Shiva');
        
        var contactNumber = $("//ngx-intl-tel-input[@id='contactNumber']//input[@id='phone']");
        await expect(contactNumber).toHaveAttributeContaining('ng-reflect-model', '630-857-8846');
        
        var pickupCompany = $("//input[@id='pickupCompany']");
        await expect(pickupCompany).toHaveAttributeContaining('ng-reflect-model', 'QUARTZ');
        
        var pickupRef = $("//input[@id='pickupRef']");
        await expect(pickupRef).toHaveAttributeContaining('ng-reflect-model', 'Naresh');
        
        var pickupDate = $("//input[@id='pickupDate']");
        await expect(pickupDate).toHaveAttributeContaining('ng-reflect-model', '2022-06-22');
        
        var pickupTime = $("//input[@id='pickupTime']");
        await expect(pickupTime).toHaveAttributeContaining('ng-reflect-model', '01:00');
        
        var location = $("//input[@placeholder='Search Nearest Location']");
        await expect(location).toHaveAttributeContaining('ng-reflect-model', '401, Main Rd, near Gokul Chat,');
        
        var loadStatus = $("//select[@name='loadStatus']");
        await expect(loadStatus).toHaveAttributeContaining('ng-reflect-model', '4');
        await browser.pause(1000);
         await $("//button[@aria-label='Close']").click(); 
          await browser.pause(1000);
        
    });


    xit("Edit Add Pickup", async()=>{
        await browser.pause(3000);
        await $("//i[@class='bi bi-pencil-fill actionIcon']").click(); 
        await browser.pause(5000);

        $("(//select[@name='carrier'])[3]").selectByAttribute("value", "626caa0e58b6d3447ebde0e5")

        $("//select[@name='driver1']").selectByAttribute("value", "626a390058b6d3447ebd4d71")

        $("//select[@name='driver2']").selectByAttribute("value", "626102935d69003fd5166524")

        $("//select[@name='truck']").selectByAttribute("value", "627b93401235660769f640fd")
        $("//select[@name='trailer']").selectByAttribute("value", "627b93691235660769f641df")

        await $("//input[@id='contactName']").setValue("Naresh");

        await $("//ngx-intl-tel-input[@id='contactNumber']//input[@id='phone']").setValue("6308578845");

        await $("//input[@id='pickupCompany']").setValue("PRTUS");

        await $("//input[@id='pickupRef']").setValue("Venkat");

        await $("//input[@id='pickupDate']").setValue("07/22/2022");

        await $("//input[@id='pickupTime']").setValue("02:00AM");

        await $("//input[@placeholder='Search Nearest Location']").setValue("karimnagar");
        await $("(//span[contains(text(),'Karimnagar')])[1]").click()
        await browser.pause(1000);
        const loadStatus = await $("//select[@name='loadStatus']");
        await loadStatus.selectByAttribute('value', '0'); 
        await browser.pause(1000);
        await $("(//button[@type='submit'][normalize-space()='Update'])[2]").click(); 
        await expect(LoginPage.toastMessage).toHaveTextContaining("Pickup successfully updated");
        await browser.pause(3000);
    });


    xit("Verify Updated Add Pickup", async()=>{
        await browser.pause(1000);
        $("//i[@class='bi bi-pencil-fill actionIcon']").scrollIntoView();
        await $("//i[@class='bi bi-pencil-fill actionIcon']").click(); 
        await browser.pause(3000);
        const carrier = $("(//select[@name='carrier'])[3]");
        await expect(carrier).toHaveAttributeContaining('ng-reflect-model', '626caa0e58b6d3447ebde0e5');

        var driver1 = $("//select[@name='driver1']");
        await expect(driver1).toHaveAttributeContaining('ng-reflect-model', '626a390058b6d3447ebd4d71');

        
        var driver2 = $("//select[@name='driver2']");
        await expect(driver2).toHaveAttributeContaining('ng-reflect-model', '626102935d69003fd5166524');
        
        var truck = $("//select[@name='truck']");
        await expect(truck).toHaveAttributeContaining('ng-reflect-model', '627b93401235660769f640fd');
        
        var trailer = $("//select[@name='trailer']");
        await expect(trailer).toHaveAttributeContaining('ng-reflect-model', '627b93691235660769f641df');
        
        var contactName = $("//input[@id='contactName']");
        await expect(contactName).toHaveAttributeContaining('ng-reflect-model', 'Naresh');
        
        var contactNumber = $("//ngx-intl-tel-input[@id='contactNumber']//input[@id='phone']");
        await expect(contactNumber).toHaveAttributeContaining('ng-reflect-model', '630-857-8845');
        
        var pickupCompany = $("//input[@id='pickupCompany']");
        await expect(pickupCompany).toHaveAttributeContaining('ng-reflect-model', 'PRTUS');
        
        var pickupRef = $("//input[@id='pickupRef']");
        await expect(pickupRef).toHaveAttributeContaining('ng-reflect-model', 'Venkat');
        
        var pickupDate = $("//input[@id='pickupDate']");
        await expect(pickupDate).toHaveAttributeContaining('ng-reflect-model', '2022-07-22');
        
        var pickupTime = $("//input[@id='pickupTime']");
        await expect(pickupTime).toHaveAttributeContaining('ng-reflect-model', '02:00');
        
        var location = $("//input[@placeholder='Search Nearest Location']");
        await expect(location).toHaveAttributeContaining('ng-reflect-model', '5-10, Saraswathi Nagar, Karimn');
        
        var loadStatus = $("//select[@name='loadStatus']");
        await expect(loadStatus).toHaveAttributeContaining('ng-reflect-model', '0');

        await browser.pause(1000);
        await $("//button[@aria-label='Close']").click(); 
        await browser.pause(1000);
        
    });


 
});

describe('ADD Delivery',function() 
{

    xit("Add Delivery", async()=>{
        await browser.pause(1000);
        $("//button[normalize-space()='Add Delivery']").scrollIntoView();
        await $("//button[normalize-space()='Add Delivery']").click(); 
        await browser.pause(1000);
        $("(//select[@name='carrier'])[3]").selectByAttribute("value", "6261032b5d69003fd51666e2")
        
        $("//select[@name='driver1']").selectByAttribute("value", "626102935d69003fd5166524")
        await browser.pause(1000);

        $("//select[@name='driver2']").selectByAttribute("value", "626a390058b6d3447ebd4d71")
        $("//select[@name='truck']").selectByAttribute("value", "626101f25d69003fd516607e")
        $("//select[@name='trailer']").selectByAttribute("value", "626102505d69003fd516644d")
        await browser.pause(1000);

        await $("//input[@id='contactname']").setValue("Shiva");
        await $("//ngx-intl-tel-input[@id='dropContactNumber']//input[@id='phone']").setValue("6308578846");
        await $("//input[@id='dropoffcompany']").setValue("QUARTZ");
        await $("//input[@id='dropoffRef']").setValue("Naresh");

        await $("//input[@id='dropoffDate']").setValue("11/22/2022");

        await $("//input[@id='dropoffTime']").setValue("01:00AM");

        await $("//input[@placeholder='Search Nearest Location']").setValue("Hyderabad");
        await $("(//span[contains(text(),'Hyderabad')])[1]").click()
        await browser.pause(1000);

        const loadStatus = await $("//select[@name='loadStatus']");
        await loadStatus.selectByAttribute('value', '4'); 
        await browser.pause(1000);
        await $("//div[@class='card']//button[@type='submit'][normalize-space()='Submit']").click(); 
        await expect(LoginPage.toastMessage).toHaveTextContaining("Dropoff successfully created");
        await browser.pause(3000);
    });

    xit("Verify Add Delivery", async()=>{
        await browser.pause(1000);
        await $("(//i[@class='bi bi-pencil-fill actionIcon'])[2]").click(); 
        await browser.pause(1000);
        const carrier = $("(//select[@name='carrier'])[3]");
        await expect(carrier).toHaveAttributeContaining('ng-reflect-model', '6261032b5d69003fd51666e2');

        var driver1 = $("//select[@name='driver1']");
        await expect(driver1).toHaveAttributeContaining('ng-reflect-model', '626102935d69003fd5166524');

        
        var driver2 = $("//select[@name='driver2']");
        await expect(driver2).toHaveAttributeContaining('ng-reflect-model', '626a390058b6d3447ebd4d71');
        
        var truck = $("//select[@name='truck']");
        await expect(truck).toHaveAttributeContaining('ng-reflect-model', '626101f25d69003fd516607e');
        
        var trailer = $("//select[@name='trailer']");
        await expect(trailer).toHaveAttributeContaining('ng-reflect-model', '626102505d69003fd516644d');
        
        var contactName = $("//input[@id='contactname']");
        await expect(contactName).toHaveAttributeContaining('ng-reflect-model', 'Shiva');
        
        var contactNumber = $("//ngx-intl-tel-input[@id='dropContactNumber']//input[@id='phone']");
        await expect(contactNumber).toHaveAttributeContaining('ng-reflect-model', '630-857-8846');
        
        var dropoffcompany = $("//input[@id='dropoffcompany']");
        await expect(dropoffcompany).toHaveAttributeContaining('ng-reflect-model', 'QUARTZ');
        
        var dropoffRef = $("//input[@id='dropoffRef']");
        await expect(dropoffRef).toHaveAttributeContaining('ng-reflect-model', 'Naresh');
        
        var dropoffDate = $("//input[@id='dropoffDate']");
        await expect(dropoffDate).toHaveAttributeContaining('ng-reflect-model', '2022-11-22');
        
        var dropoffTime = $("//input[@id='dropoffTime']");
        await expect(dropoffTime).toHaveAttributeContaining('ng-reflect-model', '01:00');
        
        var location = $("//input[@placeholder='Search Nearest Location']");
        await expect(location).toHaveAttributeContaining('ng-reflect-model', '401, Main Rd, near Gokul Chat,');
        
        var loadStatus = $("//select[@name='loadStatus']");
        await expect(loadStatus).toHaveAttributeContaining('ng-reflect-model', '4');
        await $("//button[@aria-label='Close']").click(); 
        await browser.pause(1000);

    });


    xit("Edit Add Delivery", async()=>{
        await browser.pause(1000);
        $("(//i[@class='bi bi-pencil-fill actionIcon'])[2]").scrollIntoView();
        await $("(//i[@class='bi bi-pencil-fill actionIcon'])[2]").click(); 
        await browser.pause(5000);

        $("(//select[@name='carrier'])[3]").selectByAttribute("value", "626caa0e58b6d3447ebde0e5")

        $("//select[@name='driver1']").selectByAttribute("value", "626a390058b6d3447ebd4d71")

        $("//select[@name='driver2']").selectByAttribute("value", "626102935d69003fd5166524")

        $("//select[@name='truck']").selectByAttribute("value", "627b93401235660769f640fd")
        $("//select[@name='trailer']").selectByAttribute("value", "627b93691235660769f641df")

        await $("//input[@id='contactname']").setValue("Naresh");

        await $("//ngx-intl-tel-input[@id='dropContactNumber']//input[@id='phone']").setValue("6308578845");

        await $("//input[@id='dropoffcompany']").setValue("PRTUS");

        await $("//input[@id='dropoffRef']").setValue("Venkat");

        await $("//input[@id='dropoffDate']").setValue("07/22/2022");

        await $("//input[@id='dropoffTime']").setValue("02:00AM");

        await $("//input[@placeholder='Search Nearest Location']").setValue("karimnagar");
        await $("(//span[contains(text(),'Karimnagar')])[1]").click()
        await browser.pause(1000);
        const loadStatus = await $("//select[@name='loadStatus']");
        await loadStatus.selectByAttribute('value', '0'); 
        await browser.pause(1000);
        await $("(//button[@type='submit'][normalize-space()='Update'])[2]").click(); 
        await expect(LoginPage.toastMessage).toHaveTextContaining("Dropoff successfully updated");
        await browser.pause(3000);
    });

    xit( "Verify Updated Add Delivery", async()=>{
        await browser.pause(1000);
        await $("(//i[@class='bi bi-pencil-fill actionIcon'])[2]").click(); 
        await browser.pause(3000);
        const carrier = $("(//select[@name='carrier'])[3]");
        await expect(carrier).toHaveAttributeContaining('ng-reflect-model', '626caa0e58b6d3447ebde0e5');

        var driver1 = $("//select[@name='driver1']");
        await expect(driver1).toHaveAttributeContaining('ng-reflect-model', '626a390058b6d3447ebd4d71');

        
        var driver2 = $("//select[@name='driver2']");
        await expect(driver2).toHaveAttributeContaining('ng-reflect-model', '626102935d69003fd5166524');
        
        var truck = $("//select[@name='truck']");
        await expect(truck).toHaveAttributeContaining('ng-reflect-model', '627b93401235660769f640fd');
        
        var trailer = $("//select[@name='trailer']");
        await expect(trailer).toHaveAttributeContaining('ng-reflect-model', '627b93691235660769f641df');
        
        var contactName = $("//input[@id='contactname']");
        await expect(contactName).toHaveAttributeContaining('ng-reflect-model', 'Naresh');
        
        var contactNumber = $("//ngx-intl-tel-input[@id='dropContactNumber']//input[@id='phone']");
        await expect(contactNumber).toHaveAttributeContaining('ng-reflect-model', '630-857-8845');
        
        var pickupCompany = $("//input[@id='dropoffcompany']");
        await expect(pickupCompany).toHaveAttributeContaining('ng-reflect-model', 'PRTUS');
        
        var pickupRef = $("//input[@id='dropoffRef']");
        await expect(pickupRef).toHaveAttributeContaining('ng-reflect-model', 'Venkat');
        
        var pickupDate = $("//input[@id='dropoffDate']");
        await expect(pickupDate).toHaveAttributeContaining('ng-reflect-model', '2022-07-22');
        
        var pickupTime = $("//input[@id='dropoffTime']");
        await expect(pickupTime).toHaveAttributeContaining('ng-reflect-model', '02:00');
        
        var location = $("//input[@placeholder='Search Nearest Location']");
        await expect(location).toHaveAttributeContaining('ng-reflect-model', '5-10, Saraswathi Nagar, Karimn');
        
        var loadStatus = $("//select[@name='loadStatus']");
        await expect(loadStatus).toHaveAttributeContaining('ng-reflect-model', '0');

        await browser.pause(1000);
        await $("//button[@aria-label='Close']").click(); 
        await browser.pause(1000);
    });

});