const CONSTANT = require('./common.js')
const expectchai = require('chai').expect
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

       //Customer  Information Part-I testing Required inputs

       it("Verify Customers Information valid inputs",async()=>{

        //Open Customer 
        await  browser.pause(1000);
        await  $("//h5[normalize-space()='Customers']");
        await   $("//h5[normalize-space()='Customers']").click();
        await  browser.pause(1000);
        //Add Customer 
        await   $("button[type='add']").click();
        await browser.pause(1000)
        //Submitting empty form and checking for the validation fields   click on submit and check with toast meesage
        await   $("//div[@class='card-footer ng-star-inserted']//button[@type='submit'][normalize-space()='Submit']").click();   
        await expect(LoginPage.toastMessage).toHaveTextContaining("Please fix the validations");
        await browser.pause(1000);
        
        // negative Test cases for required field
        const spanunit = await $("//span[normalize-space()='Customer name is Required']");
        await expect(spanunit).toHaveTextContaining("Customer name is Required");
        
        const spanmc = await $("//span[normalize-space()='MC is Required']");
        await expect(spanmc).toHaveTextContaining("MC is Required");
  })
    
        //Entering Customer  Data 
       it("Create Customer",async()=>{
        //Entering Customer Information Part-I
        await $('#name').setValue("PRAVEEN");
        await $("#mcff").setValue("PKF864L");
        await $("//input[@id='email']").setValue("shivapervaala@gmail.com");
        await $("#dba").setValue("HUYTK586JHGV");
        await $("#usdot").setValue("6308456"); 
        await $("//input[@placeholder='Search Nearest Location']").setValue("Hyderabad");
        await $("(//span[contains(text(),'Hyderabad')])[1]").click();

        //Contact Information
        const selectors = $$('.mat-expansion-panel');    
        await selectors[0].click();
        await browser.pause(1000)

        await $("//i[@class='dx-icon dx-icon-edit-button-addrow']").click();
        await browser.pause(300);
        await $("//input[@role='textbox']").setValue("Santhosh");
        browser.keys("\uE004")   

        await $("//input[@role='textbox']").setValue("9035684562");
        browser.keys("\uE004")  

        await $("//input[@role='textbox']").setValue("9035684561");
        browser.keys("\uE004")  

        await $("//input[@role='textbox']").setValue("569826");
        browser.keys("\uE004") 
        
        await $("//input[@role='textbox']").setValue("shiva@gmail.com");
        browser.keys("\uE004") 

        await $("//input[@role='textbox']").setValue("Contact information is Required");
        browser.keys("\uE004")   

      await browser.pause(1000); 


        //Enter Billing Information
        const contact = $$('.mat-expansion-panel');    
        await contact[1].click();
        await browser.pause(1000)
        await $("//input[@id='billTo']").setValue("Rahulshetty");
        await $("(//input[@placeholder='Search Nearest Location'])[2]").setValue("Kukatpally");
        await $("(//span[contains(text(),'Kukatpally')])[1]").click();
        const paymentTerms = await $("//select[@id='paymentTerms']");
        await paymentTerms.selectByAttribute('value', '15 days'); 
        await $("//input[@id='customerAccount']").setValue("Rahul");
        await $("//input[@id='contact']").setValue("Ramesh"); 
        await $("//input[@id='phone']").setValue("6308456849");

       
        //Submit Customer Form and checks with toast message
        await $('.card-footer'); 
        await $("//div[@class='ng-star-inserted']//button[@type='submit'][normalize-space()='Submit']").click();        
        await expect(LoginPage.toastMessage).toHaveTextContaining("Customerform Data Submitted");
        await browser.pause(1000);
       });
 });

//check the entered Customer data with view page

describe('Verify The Customer Data',function() 
{

    it("Veiw Customer", async()=>{

        //Verify customer Information Part-I Viw Data
        await $('.card-header'); 
        await $("#search").setValue('PRAVEEN');

        await $("//a[normalize-space()='View']").click();
        await browser.pause(1000);

        const name = $("//input[@id='name']");
        await expect(name).toHaveAttributeContaining('ng-reflect-model', 'PRAVEEN');

        const dotnumber = $("//input[@id='mcff']");
        await expect(dotnumber).toHaveAttributeContaining('ng-reflect-model', 'PKF864L');

        
        const mail = $("//input[@id='email']");
        await expect(mail).toHaveAttributeContaining('ng-reflect-model', 'shivapervaala@gmail.com');

        const dba = $("//input[@id='dba']");
        await expect(dba).toHaveAttributeContaining('ng-reflect-model', 'HUYTK586JHGV');

        const usdot = $("//input[@id='usdot']");
        await expect(usdot).toHaveAttributeContaining('ng-reflect-model', '6308456');
        await browser.pause(1000)

        //Verify Customer Information Part - II 
         const Customerinfo = $$('.mat-expansion-panel');    
         await Customerinfo[0].click();

         var customerName = $("//td[normalize-space()='Santhosh']");
         await expect(customerName).toHaveText('Santhosh');
 
         var mobileNum = $("//td[normalize-space()='9035684562']");
         await expect(mobileNum).toHaveText('9035684562');
 
         var phoneNum = $("//td[normalize-space()='9035684561']");
         await expect(phoneNum).toHaveText('9035684561');
 
         var extNum = $("//td[normalize-space()='569826']");
         await expect(extNum).toHaveText('569826');

         var mailId = $("//td[normalize-space()='shiva@gmail.com']");
         await expect(mailId).toHaveText('shiva@gmail.com');

         var comments = $("//td[normalize-space()='Contact information is Required']");
         await expect(comments).toHaveText('Contact information is Required');

        //Verify Billing Information
        const employ = $$('.mat-expansion-panel');    
        await employ[1].click();
        await browser.pause(1000)

         const billTo = $("//input[@id='billTo']");
         await expect(billTo).toHaveAttributeContaining('ng-reflect-model', 'Rahulshetty');
  
         const paymentTerms = $("//select[@id='paymentTerms']");
         await expect(paymentTerms).toHaveAttributeContaining('ng-reflect-model', '15 days');
       
         const customerAccount = $("//input[@id='customerAccount']");
         await expect(customerAccount).toHaveAttributeContaining('ng-reflect-model', 'Rahul');
 
         const contact = $("//input[@id='contact']");
         await expect(contact).toHaveAttributeContaining('ng-reflect-model', 'Ramesh');
 
         const phonenmbr = $("//input[@id='phone']");
         await expect(phonenmbr).toHaveAttributeContaining('ng-reflect-model', '630-845-6849');

        
        //close the view page
        const closev =  $("//button[@class='close']"); 
        closev.$("//button[@class='close']").click();
        closev.waitForExist();
        await browser.pause(1000)

       });
   
});


// Edit the Customer by clicking on edit button
describe('Edit Customer Data',function() 
{
       it("Update Customer",async()=>{

        await $("#search").setValue('PRAVEEN');
        //open the edit Customer form
        $("//a[normalize-space()='Edit']").click();
        await browser.pause(1000);
          //Entering Customer Information Part-I
          await $('#name').setValue("Nikheel");
          await $("#mcff").setValue("POI864L");
          await $('#email').setValue("naveen@gmail.com");
          await $("#dba").setValue("RHKOK586JHGV");
          await $("#usdot").setValue("6951656"); 
          await $("//input[@placeholder='Search Nearest Location']").setValue("Karimnagar");
          await $("(//span[contains(text(),'Karimnagar')])[1]").click();
  
          //Contact Information
          const selectors = $$('.mat-expansion-panel');    
          await selectors[0].click();
          await browser.pause(1000);
          var personName = $("//td[normalize-space()='Santhosh']");  
          personName.doubleClick();
          await browser.pause(1000);

        await $("//input[@role='textbox']").setValue("Kiran");
          browser.keys("\uE004")   
  
          await $("//input[@role='textbox']").setValue("9035584562");
          browser.keys("\uE004")  
  
          await $("//input[@role='textbox']").setValue("9035884561");
          browser.keys("\uE004")  
  
          await $("//input[@role='textbox']").setValue("561116");
          browser.keys("\uE004") 
          
          await $("//input[@role='textbox']").setValue("shivakumar@gmail.com");
          browser.keys("\uE004") 
  
          await $("//input[@role='textbox']").setValue("Contact information");
          browser.keys("\uE004")  
          //Enter Billing Information
          const contact = $$('.mat-expansion-panel');    
          await contact[1].click();
          await browser.pause(1000)

          await $('#billTo').setValue("Naveeshetty");
          await $("(//input[@placeholder='Search Nearest Location'])[2]").setValue("Hyderabad");
          await $("(//span[contains(text(),'Hyderabad')])[1]").click();
          const paymentTerms = await $('#paymentTerms');
          await paymentTerms.selectByAttribute('value', '30 days'); 
          await $('#customerAccount').setValue("Naveen");
          await $("#contact").setValue("Naveen"); 
          await $("//input[@id='phone']").setValue("6308465449");
          await browser.pause(1000)
        //Submit Updated Customer Form and checks with toast message
        await $('.card-footer'); 
         $("//div[@class='ng-star-inserted']//button[@type='submit'][normalize-space()='Update']").click();    
        await expect(LoginPage.toastMessage).toHaveTextContaining("Customer Data Updated successfully");
        await browser.pause(1000);
       });
});


//check the updated Customer by clicking on view page

describe('Verify the updated data',function() 
{
    it("View Customer Data", async()=>{
        //Verify Driver Information Part-I Viw Data
        await $('.card-header'); 
        await $("#search").setValue('Nikheel');
        await $("//a[normalize-space()='View']").click();
        await browser.pause(1000);
        const name = $("//input[@id='name']");
        await expect(name).toHaveAttributeContaining('ng-reflect-model', 'Nikheel');

        const dotnumber = $("//input[@id='mcff']");
        await expect(dotnumber).toHaveAttributeContaining('ng-reflect-model', 'POI864L');
        
        const email = $("//input[@id='email']");
        await expect(email).toHaveAttributeContaining('ng-reflect-model', 'naveen@gmail.com');

        const dba = $("//input[@id='dba']");
        await expect(dba).toHaveAttributeContaining('ng-reflect-model', 'RHKOK586JHGV');

        const usdot = $("//input[@id='usdot']");
        await expect(usdot).toHaveAttributeContaining('ng-reflect-model', '6951656');


        //Verify Customer Information Part - II 
         const Customerinfo = $$('.mat-expansion-panel');    
         await Customerinfo[0].click();

         var customerName = $("//td[normalize-space()='Kiran']");
         await expect(customerName).toHaveText('Kiran');
 
         var mobileNum = $("//td[normalize-space()='9035584562']");
         await expect(mobileNum).toHaveText('9035584562');
 
         var phoneNum = $("//td[normalize-space()='9035884561']");
         await expect(phoneNum).toHaveText('9035884561');
 
         var extNum = $("//td[normalize-space()='561116']");
         await expect(extNum).toHaveText('561116');

         var mailId = $("//td[normalize-space()='shivakumar@gmail.com']");
         await expect(mailId).toHaveText('shivakumar@gmail.com');

         var comments = $("//td[normalize-space()='Contact information']");
         await expect(comments).toHaveText('Contact information');


        //Enter Contact Information
        const employ = $$('.mat-expansion-panel');    
        await employ[1].click();
        await browser.pause(1000)
         const billTo = $("//input[@id='billTo']");
         await expect(billTo).toHaveAttributeContaining('ng-reflect-model', 'Naveeshetty');
  
         const paymentTerms = $("//select[@id='paymentTerms']");
         await expect(paymentTerms).toHaveAttributeContaining('ng-reflect-model', '30 days');
       
         const customerAccount = $("//input[@id='customerAccount']");
         await expect(customerAccount).toHaveAttributeContaining('ng-reflect-model', 'Naveen');
 
         const contact = $("//input[@id='contact']");
         await expect(contact).toHaveAttributeContaining('ng-reflect-model', 'Naveen');
 
         const phonenmbr = $("//input[@id='phone']");
         await expect(phonenmbr).toHaveAttributeContaining('ng-reflect-model', '630-846-5449');

                 
        //close the view page
        const closev =  $("//button[@class='close']"); 
        closev.$("//button[@class='close']").click();
        closev.waitForExist();
        await browser.pause(1000)
         
    });

    //Delete the Customer and checks with toase message
    it("Delete the Customer", async()=>{
        await $("#search").setValue('Nikheel');
        await $("//a[normalize-space()='Delete']").click();    
        await expect(LoginPage.toastMessage).toHaveTextContaining("Customer Data Delete");
        await browser.pause(1000);       
       });

});







