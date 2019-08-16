package bobcat.gradle.BOBCAT.AEM.BDD;

import com.cognifide.qa.bb.modules.BobcatRunModule;
import com.google.inject.Guice;
import com.google.inject.Injector;

import cucumber.api.guice.CucumberModules;
import cucumber.runtime.java.guice.InjectorSource;

public class CucumberInjectorSource implements InjectorSource {

	@Override


	public Injector getInjector() {

		return Guice.createInjector(CucumberModules.SCENARIO, new BobcatRunModule());
	}
}
