import type { Browser } from 'webdriverio';

export class LinkifyPage {
  private driver: Browser;

  constructor(driver: Browser) {
    this.driver = driver;
  }

  // Locators - adjust these based on actual elements in the Linkify screen
  private get textElements() {
    return {
      // Example locators - update with actual accessibility IDs or resource IDs
      phoneNumber: this.driver.$('android=new UiSelector().textContains("tel:")'),
      emailAddress: this.driver.$('android=new UiSelector().textContains("@")'),
      webUrl: this.driver.$('android=new UiSelector().textContains("http")'),
      mapAddress: this.driver.$('android=new UiSelector().textContains("geo:")'),
    };
  }

  // Actions
  async tapPhoneNumber() {
    await this.textElements.phoneNumber.waitForDisplayed({ timeout: 10000 });
    await this.textElements.phoneNumber.click();
    console.log('Tapped on phone number');
  }

  async tapEmailAddress() {
    await this.textElements.emailAddress.waitForDisplayed({ timeout: 10000 });
    await this.textElements.emailAddress.click();
    console.log('Tapped on email address');
  }

  async tapWebUrl() {
    await this.textElements.webUrl.waitForDisplayed({ timeout: 10000 });
    await this.textElements.webUrl.click();
    console.log('Tapped on web URL');
  }

  // Verification methods
  async verifyAllTextsVisible() {
    const elements = this.textElements;
    
    // Get all text elements on the screen
    const allTexts = await this.driver.$$('android.widget.TextView');
    const textsCount = allTexts.length;
    
    console.log(`Found ${textsCount} text elements on the screen`);
    
    // Verify at least some text elements are visible
    if (textsCount === 0) {
      throw new Error('No text elements found on the Linkify page');
    }

    // Log all text content for verification
    for (let i = 0; i < textsCount; i++) {
      const text = await allTexts[i].getText();
      if (text) {
        console.log(`Text element ${i + 1}: ${text}`);
      }
    }

    console.log('All text elements verification completed');
    return true;
  }

  async isPageDisplayed() {
    // Wait for any text element to be visible as indication page is loaded
    const allTexts = await this.driver.$$('android.widget.TextView');
    return allTexts.length > 0;
  }

  async getPageTitle() {
    // Try to get the page title/header
    const title = await this.driver.$('android=new UiSelector().resourceId("android:id/action_bar_title")');
    if (await title.isDisplayed()) {
      return await title.getText();
    }
    return '';
  }
}
