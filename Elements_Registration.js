function elementfile()
{
    this.register_Link=element(By.linkText("Register"));
    this.header=element(By.tagName("h2"));
    this.first_name=element(By.id("firstName"));
    this.last_name=element(By.id("Text1"));
    this.user_name=element(By.id("username"));
    this.pass_word=element(By.id("password"));
    this.first_name_error_text=element(By.xpath("//span[contains(text(),'First name is required')]"));
    this.last_name_error_text=element(By.xpath("//span[contains(text(),'Last name is required')]"));
    this.user_name_error_text=element(By.xpath("//span[contains(text(),'Username is required')]"));
    this.password_error_text=element(By.xpath("//span[contains(text(),'Password is required')]"));
    this.register_button=element(By.className("btn btn-primary"));

    this.getUrl=function()
    {
        browser.get("https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login");
    };
};

module.exports=new elementfile();

