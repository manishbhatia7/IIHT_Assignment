function elementfile()
{
   this.username=element(By.id("username"));
   this.password=element(By.id("password"));
   this.submit_button=element(By.className("btn btn-primary"));
   this.registration_message=element(By.xpath("//div[@class='ng-binding ng-scope alert alert-success']"));
   this.login_message=element(By.tagName("h1"));
   this.delete_button=element(By.xpath("//a[contains(text(),'Delete')]"));
   this.logout_button=element(By.xpath("//a[contains(text(),'Logout')]"));
   this.invalid_login_message=element(By.className("ng-binding ng-scope alert alert-danger"));


};

module.exports=new elementfile();

