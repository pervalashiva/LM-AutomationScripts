describe('Launch chrome', () =>{
    it('login', async ()=> {

        browser.url("www.google.com");
        await $("").setValue("Shiva");
        await $("").setValue("");
        await $("").click();


    })

})