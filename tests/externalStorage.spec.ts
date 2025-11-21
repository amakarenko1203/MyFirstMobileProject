import { expect } from 'chai';
import HomePage from './pages/HomePage';
import StoragePage from './pages/StoragePage';
import ExternalStoragePage from './pages/ExternalStoragePage';

describe('API Demos - External Storage Test', () => {
    it('Should verify Create and Delete button states in External Storage', async () => {
        console.log('\n========================================');
        console.log('Starting External Storage Test');
        console.log('========================================\n');
        
        console.log('Step 1: App opened - ApiDemos.apk\n');
        
        // Wait for app to fully load
        await browser.pause(5000);

        // Step 2: Navigate to Content menu
        await HomePage.navigateToContent();

        // Step 3: Navigate to Storage menu
        await StoragePage.navigateToStorage();

        // Step 4: Navigate to External Storage menu
        await StoragePage.navigateToExternalStorage();

        // Verify we have 3 Create and 3 Delete buttons
        await ExternalStoragePage.verifyButtonCounts(3);

        // Step 5: Test first Create button - Delete should NOT be enabled
        await ExternalStoragePage.testCreateDeletePair(0, 'First', false);

        // Step 6: Test second Create button - Delete should be enabled
        await ExternalStoragePage.testCreateDeletePair(1, 'Second', true);

        // Step 7: Test third Create button - Delete should be enabled
        await ExternalStoragePage.testCreateDeletePair(2, 'Third', true);

        console.log('\n========================================');
        console.log('✓ All verifications passed!');
        console.log('Test completed successfully');
        console.log('========================================\n');
    });
});
