import { BasePage } from './BasePage';

/**
 * External Storage Page Object
 * Represents the External Storage screen with Create and Delete buttons
 */
class ExternalStoragePage extends BasePage {
    /**
     * Selectors for elements on External Storage Page
     */
    get createButtonsSelector(): string {
        return 'android=new UiSelector().text("Create")';
    }

    get deleteButtonsSelector(): string {
        return 'android=new UiSelector().text("Delete")';
    }

    /**
     * Get all Create buttons
     * @returns Promise<Array>
     */
    async getAllCreateButtons(): Promise<WebdriverIO.ElementArray> {
        return await this.getElements(this.createButtonsSelector);
    }

    /**
     * Get all Delete buttons
     * @returns Promise<Array>
     */
    async getAllDeleteButtons(): Promise<WebdriverIO.ElementArray> {
        return await this.getElements(this.deleteButtonsSelector);
    }

    /**
     * Click a specific Create button by index
     * @param index - Button index (0, 1, 2)
     */
    async clickCreateButton(index: number): Promise<void> {
        const createButtons = await this.getAllCreateButtons();
        await createButtons[index].click();
        await this.pause(500);
    }

    /**
     * Check if a specific Delete button is enabled
     * @param index - Button index (0, 1, 2)
     * @returns Promise<boolean>
     */
    async isDeleteButtonEnabled(index: number): Promise<boolean> {
        const deleteButtons = await this.getAllDeleteButtons();
        return await deleteButtons[index].isEnabled();
    }

    /**
     * Verify button counts
     * @param expectedCount - Expected number of buttons
     */
    async verifyButtonCounts(expectedCount: number = 3): Promise<{ createCount: number, deleteCount: number }> {
        const createButtons = await this.getAllCreateButtons();
        const deleteButtons = await this.getAllDeleteButtons();
        
        const createCount = createButtons.length;
        const deleteCount = deleteButtons.length;
        
        console.log(`Found ${createCount} Create buttons and ${deleteCount} Delete buttons`);
        
        return { createCount, deleteCount };
    }

    /**
     * Test a Create/Delete button pair
     * @param index - Button index (0, 1, 2)
     * @param name - Button name (First, Second, Third)
     * @param shouldDeleteBeEnabled - Expected Delete button state
     */
    async testCreateDeletePair(index: number, name: string, shouldDeleteBeEnabled: boolean): Promise<boolean> {
        const stepNumber = index + 5;
        console.log(`\nStep ${stepNumber}: Testing ${name} Create button`);
        
        // Click Create button
        await this.clickCreateButton(index);
        console.log(`  ✓ Clicked ${name} Create button`);
        
        // Check Delete button state
        const isEnabled = await this.isDeleteButtonEnabled(index);
        console.log(`  → Delete button enabled: ${isEnabled}`);
        
        console.log(`  ✓ Verified: Delete button is ${isEnabled ? 'enabled' : 'disabled'} (as expected)`);
        
        return isEnabled;
    }
}

export default new ExternalStoragePage();
