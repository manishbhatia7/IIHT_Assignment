var login=require("./Elements_Login");
var data=require("./Data");
describe("Test Suite for Login Page",function ()
{
    it("Validate if Registration is successful",function ()
    {
        expect(login.registration_message.getText()).toBe("Registration successful");
    })
    it("Test Case for Valid Login",function ()
    {
        login.username.sendKeys(data.datadriven.username);
        login.password.sendKeys(data.datadriven.password);
        login.submit_button.click();

    })
    it("Test Case to validate when login is successful",function() {
        expect(login.login_message.getText()).toBe("Hi Manu!");
    })
    it("Delete the user and logout",function() {
        login.delete_button.click();
        expect(login.login_message.getText()).toMatch("Hi");
        login.logout_button.click();

    })
    it("Login with Invalid User",function() {
        login.username.sendKeys("UserName");
        login.password.sendKeys("Password");
        login.submit_button.click();
        expect(login.invalid_login_message.getText()).toBe("Username or password is incorrect");

    })


})