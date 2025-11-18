import type { Browser } from 'webdriverio';

export class HomePage {
  private driver: Browser;

  constructor(driver: Browser) {
    this.driver = driver;
  }

  // Locators
  private get textMenu() {
    // Using UiAutomator selector - adjust based on actual element
    return this.driver.$('android=new UiSelector().text("Text")');
  }

  // Actions
  async tapTextMenu() {
    await this.textMenu.waitForDisplayed({ timeout: 10000 });
    await this.textMenu.click();
    console.log('Tapped on Text menu');
  }

  // Verification methods
  async isTextMenuVisible() {
    return await this.textMenu.isDisplayed();
  }
}
