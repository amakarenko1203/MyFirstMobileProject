import { BasePage } from './BasePage';

/**
 * Home Page Object
 * Represents the main screen of API Demos app
 */
class HomePage extends BasePage {
    /**
     * Selectors for elements on Home Page
     */
    get contentMenu(): string {
        return 'android=new UiSelector().text("Content")';
    }

    /**
     * Navigate to Content menu by scrolling to it first
     */
    async navigateToContent(): Promise<void> {
        console.log('Step 2: Scrolling to and tapping Content menu');
        
        // Scroll to the Content element
        await browser.$('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text("Content"))');
        
        // Now click it
        await this.clickElement(this.contentMenu);
    }
}

export default new HomePage();
