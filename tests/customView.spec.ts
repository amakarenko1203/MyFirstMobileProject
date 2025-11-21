import { test, expect } from '@playwright/test';
import { remote } from 'webdriverio';
import path from 'path';

test.describe('API Demos - Accessibility Custom View Test', () => {
  test('Navigate to Custom View and verify expected text', async () => {
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
        'appium:appWaitActivity': '.ApiDemos',
        'appium:skipServerInstallation': true,
        'appium:skipDeviceInitialization': true,
        'appium:ignoreHiddenApiPolicyError': true
      }
    });

    try {
      console.log('Step 1: App opened - APIDemos.apk');

      // Step 2: Tap 'Accessibility' menu element
      const accessibilityMenu = await driver.$('~Accessibility');
      await accessibilityMenu.waitForDisplayed({ timeout: 10000 });
      await accessibilityMenu.click();
      console.log('Step 2: Tapped on Accessibility menu');

      // Step 3: Tap 'Custom View' menu element
      const customViewMenu = await driver.$('~Custom View');
      await customViewMenu.waitForDisplayed({ timeout: 10000 });
      await customViewMenu.click();
      console.log('Step 3: Tapped on Custom View menu');

      // Step 4: Verify expected text
      const expectedText = "1. Enable TalkBack (Settings -> Accessibility -> TalkBack). \n\n2. Enable Explore-by-Touch (Settings -> Accessibility -> Explore by Touch). \n\n3. Touch explore/poke the buttons.";
      
      // Find the text element containing the expected text
      const textElement = await driver.$(`android=new UiSelector().textContains("Enable TalkBack")`);
      await textElement.waitForDisplayed({ timeout: 10000 });
      
      const actualText = await textElement.getText();
      console.log('Step 4: Actual text found:', actualText);
      
      // Verify the text matches
      if (actualText.includes('Enable TalkBack') && 
          actualText.includes('Enable Explore-by-Touch') && 
          actualText.includes('Touch explore/poke the buttons')) {
        console.log('✓ Text verification passed!');
      } else {
        throw new Error(`Text verification failed!\nExpected: ${expectedText}\nActual: ${actualText}`);
      }

      console.log('All verifications passed!');
    } catch (error) {
      console.error('Test failed:', error);
      throw error;
    } finally {
      // Cleanup
      await driver.deleteSession();
    }
  });
});
