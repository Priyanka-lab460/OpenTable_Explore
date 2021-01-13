package cucumberTest;

import cucumber.api.CucumberOptions;

@CucumberOptions(
features= "features/san.feature"     //Name of feature file
,glue= {"stepDefinations"}                //Name of package
//,tags= {"@tag"}
,plugin = {"html:cucumber_reports","junit:cucumber_reports/cucumber.xml" }
)
public class san_testrunner extends cucumber.api.testng.AbstractTestNGCucumberTests{

}
