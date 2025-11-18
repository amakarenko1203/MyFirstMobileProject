describe('My First Mobile Test', () => {
    it('should launch the app successfully', async () => {
        // Wait for app to load
        await driver.pause(2000);
        
        // Get current activity
        const currentActivity = await driver.getCurrentActivity();
        console.log('Current Activity:', currentActivity);
        
        // Take a screenshot
        await driver.saveScreenshot('./tests/screenshot.png');
        
        // Example: Find element by accessibility id (update based on your app)
        // const element = await $('~elementAccessibilityId');
        // await element.click();
        
        console.log('App launched successfully!');
    });
});
