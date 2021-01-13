package cucumberTest;

import cucumber.api.CucumberOptions;

@CucumberOptions(
features= "features/san.feature"     //Name of feature file
,glue= {"stepDefinations"}                //Name of package
//,tags= {"@tag"}
)
public class san_testrunner extends cucumber.api.testng.AbstractTestNGCucumberTests{

}
