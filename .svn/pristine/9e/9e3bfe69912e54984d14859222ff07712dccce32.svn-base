package bobcat.gradle.BOBCAT.AEM.BDD.pages;

import com.cognifide.qa.bb.qualifier.CurrentScope;
import com.cognifide.qa.bb.qualifier.PageObject;
import com.google.inject.Inject;
import org.openqa.selenium.WebElement;
import com.cognifide.qa.bb.constants.HtmlTags.Properties;

@PageObject(css = ".cmp-title__text")
public class TitleComponentImpl implements TitleComponent {

    @Inject
    @CurrentScope
    private WebElement component;

    public String getText(){
        return component.getText();
    }

    public String getCssClassNameProperty(){
        return component.getAttribute(Properties.CLASS_NAME);
    }
}
