import { test } from '@playwright/test';
import { remote } from 'webdriverio';
import { HomePage } from './pages/HomePage';
import { TextPage } from './pages/TextPages/TextPage';
import { LinkifyPage } from './pages/TextPages/LinkifyPage';
import path from 'path';

test.describe('API Demos - Text Linkify Test', () => {
  test('Navigate to Linkify and verify text elements', async () => {
    // Connect to Appium server
    const driver = await remote({
      logLevel: 'info',
      hostname: 'localhost',
      port: 4723,
      path: '/',
      capabilities: {
        platformName: 'Android',
        'appium:deviceName': 'emulator-5554',
        'appium:automationName': 'UiAutomator2',
        'appium:app': path.resolve(__dirname, 'app.apk'),
        'appium:appWaitActivity': '.ApiDemos'
      }
    });

    try {
      // Initialize page objects
      const homePage = new HomePage(driver);
      const textPage = new TextPage(driver);
      const linkifyPage = new LinkifyPage(driver);

      // Test steps
      // 1. App is already opened
      // 2. Tap 'Text' menu element
      await homePage.tapTextMenu();

      // 3. Tap 'Linkify' menu element
      await textPage.tapLinkifyMenu();

      // 4. Verify all text elements are visible
      await linkifyPage.verifyAllTextsVisible();

      console.log('All verifications passed!');
    } finally {
      // Cleanup
      await driver.deleteSession();
    }
  });
});
