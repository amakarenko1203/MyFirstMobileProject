import { BasePage } from './BasePage';

/**
 * Views Page Object
 * Represents the Views screen with scrollable content
 */
class ViewsPage extends BasePage {
    /**
     * Selectors for elements on Views Page
     */
    get viewsMenu(): string {
        return 'android=new UiSelector().text("Views")';
    }

    get webView3Element(): string {
        return 'android=new UiSelector().text("WebView3")';
    }

    get animationsElement(): string {
        return 'android=new UiSelector().text("Animation")';
    }

    /**
     * Navigate to Views menu by scrolling to it first
     */
    async navigateToViews(): Promise<void> {
        console.log('Step 2: Scrolling to and tapping Views menu');
        
        // Scroll to the Views element with max swipes to handle any screen size
        await browser.$('android=new UiScrollable(new UiSelector().scrollable(true)).setMaxSearchSwipes(20).scrollIntoView(new UiSelector().text("Views"))');
        
        // Now click it
        await this.clickElement(this.viewsMenu);
    }

    /**
     * Scroll to the bottom of the screen
     * Uses setMaxSearchSwipes to handle different screen resolutions and pixel densities
     */
    async scrollToBottom(): Promise<void> {
        console.log('Step 3: Scrolling to the bottom');
        await browser.$('android=new UiScrollable(new UiSelector().scrollable(true)).setMaxSearchSwipes(20).flingToEnd(10)');
        await this.pause(1000);
    }

    /**
     * Scroll to the top of the screen
     * Uses setMaxSearchSwipes to handle different screen resolutions and pixel densities
     */
    async scrollToTop(): Promise<void> {
        console.log('Step 5: Scrolling to the top');
        await browser.$('android=new UiScrollable(new UiSelector().scrollable(true)).setMaxSearchSwipes(20).flingToBeginning(10)');
        await this.pause(1000);
    }

    /**
     * Validate if WebView3 is visible
     */
    async validateWebView3Visible(): Promise<void> {
        console.log('Step 4: Validating WebView3 is visible');
        const element = await $(this.webView3Element);
        const isDisplayed = await element.isDisplayed();
        
        if (!isDisplayed) {
            throw new Error('WebView3 element is not visible');
        }
        
        console.log('  ✓ WebView3 is visible');
    }

    /**
     * Validate if Animation is visible
     */
    async validateAnimationVisible(): Promise<void> {
        console.log('Step 6: Validating Animation is visible');
        const element = await $(this.animationsElement);
        const isDisplayed = await element.isDisplayed();
        
        if (!isDisplayed) {
            throw new Error('Animation element is not visible');
        }
        
        console.log('  ✓ Animation is visible');
    }
}

export default new ViewsPage();
