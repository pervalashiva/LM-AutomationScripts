const CONSTANT = require('./common.js')

describe('Forgot Password Page',function() 
{

    it("Forgot Password", async()=>{

        browser.url(CONSTANT.SITE_URL)
        $('body > app-dashboard > div > main > div > div > div > div > div.card.p-4 > div > form > div.row > div.col-6.text-right > button').click()
        //Enter Username........
        $("input[name='email']").setValue(CONSTANT.VALID_USRID)
        
        //Click to submit button..
        $("//button[normalize-space()='Submit']").click()
        
        $('.toast-message').getText()
        expect($('.toast-message')).toHaveTextContaining("Email has been sent with a forgot password link")

       })
   
});