var obj=require("./Elements_Registration");
var data=require("./Data");


describe("TestCase",function()
{
    it("Click on Registration Page and validate we have reached Registration Page",function()
    {
        obj.getUrl();
        obj.register_Link.click();
        expect(obj.header.getText()).toBe("Register");



});
    it("Registration Page-Validate Assertion for First Name",function()
    {
        obj.first_name.sendKeys(data.datadriven.firstname);
        obj.first_name.clear();
        expect(obj.first_name_error_text.getText()).toBe("First name is required");


    })
    it("Registration Page-Validate Assertion for Last Name",function()
    {
        obj.last_name.sendKeys(data.datadriven.lastname);
        obj.last_name.clear();
        expect(obj.last_name_error_text.getText()).toBe("Last name is required");


    })
    it("Registration Page-Validate Assertion for UserName",function()
    {
        obj.user_name.sendKeys(data.datadriven.username);
        obj.user_name.clear();
        expect(obj.user_name_error_text.getText()).toBe("Username is required");


    })
    it("Registration Page-Validate Assertion for Password",function()
    {
        obj.pass_word.sendKeys(data.datadriven.password);
        obj.pass_word.clear();
        expect(obj.password_error_text.getText()).toBe("Password is required");


    })
    it("Enter Registration Page Details and Submit",function()
    {
        obj.first_name.sendKeys(data.datadriven.firstname);
        obj.last_name.sendKeys(data.datadriven.lastname);
        obj.user_name.sendKeys(data.datadriven.username);
        obj.pass_word.sendKeys(data.datadriven.password);
        obj.register_button.click();





    })

});