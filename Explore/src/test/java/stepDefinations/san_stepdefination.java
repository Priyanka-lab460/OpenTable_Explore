package stepDefinations;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import Pages.san_explore;
import Pages.san_success;
import cucumber.api.java.After;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class san_stepdefination {
	WebDriver driver;
	san_explore hp;
	san_success sp;
	@Given("^Open chrome browser and enter url$")
    public void open_chrome_browser_and_enter_url() throws Throwable {
		 System.setProperty("webdriver.chrome.driver","./drivers/chromedriver.exe");
			driver=new ChromeDriver();
			driver.manage().window().maximize();
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			driver.get("https://www.opentable.com/"); 
			hp=new san_explore(driver);
			sp=new san_success(driver);
    }
	@After
	public void teardown() {
		driver.close();
	}

    @When("^Enter location  in search criteria$")
    public void enter_location_in_search_criteria() throws Throwable {
        /*By button1=By.xpath("//input[@placeholder='Location, Restaurant, or Cuisine']");
    	driver.findElement(button1).click();
    	driver.findElement(button1).sendKeys("delhi");
    	System.out.println("1");*/
    	hp.enterloc();
    }

    @Then("^Click on search button$")
    public void click_on_search_button() throws Throwable {
    	/*By button2=By.xpath("(//button[@type='button'])[11]");
    	driver.findElement(button2).click();
    	System.out.println("1");*/
    	hp.clicksearch();
    }
    @Then("^verify hotel for location$")
    public void Verify_hotel_for_location() throws Throwable {
    	/*By res1=By.xpath("//h6[text()='Indian Accent']");
    	String s1=driver.findElement(res1).getText();
    	System.out.println(s1);*/
    	String exp="Indian Accent";
    	String act=sp.verifyloc();
    	org.junit.Assert.assertEquals(exp,act);
    	System.out.println(act);
    	//System.out.println("1");
    }
    

    @When("^Enter restaurant  in search criteria$")
    public void enter_restaurant_in_search_criteria() throws Throwable {
    	/* By button1=By.xpath("//input[@placeholder='Location, Restaurant, or Cuisine']");
     	driver.findElement(button1).click();
     	driver.findElement(button1).sendKeys("Bimbadgen Pizza Cafe");
     	System.out.println("2");*/
    	hp.enterrest();
    }

    @Then("^verify restaurant for name$")
    public void verify_restaurant_for_name() throws Throwable {
    	/*By res1=By.xpath("//h6[text()='Bimbadgen Pizza Cafe']");
    	String s1=driver.findElement(res1).getText();
    	System.out.println("2");*/
    	String exp="Bimbadgen Pizza Cafe";
    	String act=sp.verifyrest();
    	org.junit.Assert.assertEquals(exp,act);
    	System.out.println(act);
}
    @When("^Enter cuisine in search criteria$")
    public void enter_cuisine_in_search_criteria() throws Throwable {
    	/* By button1=By.xpath("//input[@placeholder='Location, Restaurant, or Cuisine']");
      	driver.findElement(button1).click();
      	driver.findElement(button1).sendKeys("Spice Kitchen");
      	System.out.println("3");*/
    	hp.entercui();
    }


    @Then("^verify cuisine$")
    public void verify_cuisine() throws Throwable {
    	/*By res1=By.xpath("//h6[text()='Spice Kitchen']");
    	String s1=driver.findElement(res1).getText();
    	System.out.println("3");*/
    	String exp="Spice Kitchen";
    	String act=sp.verifycui();
    	org.junit.Assert.assertEquals(exp,act);
    	System.out.println(act);
    }
}