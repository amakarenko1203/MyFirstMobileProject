import type { Browser } from 'webdriverio';

export class TextPage {
  private driver: Browser;

  constructor(driver: Browser) {
    this.driver = driver;
  }

  // Locators
  private get linkifyMenu() {
    // Using UiAutomator selector - adjust based on actual element
    return this.driver.$('android=new UiSelector().text("Linkify")');
  }

  // Actions
  async tapLinkifyMenu() {
    await this.linkifyMenu.waitForDisplayed({ timeout: 10000 });
    await this.linkifyMenu.click();
    console.log('Tapped on Linkify menu');
  }

  // Verification methods
  async isLinkifyMenuVisible() {
    return await this.linkifyMenu.isDisplayed();
  }
}
