import { BasePage } from './BasePage';

/**
 * Storage Page Object
 * Represents the Storage menu screen
 */
class StoragePage extends BasePage {
    /**
     * Selectors for elements on Storage Page
     */
    get storageMenu(): string {
        return 'android=new UiSelector().text("Storage")';
    }

    get externalStorageMenu(): string {
        return 'android=new UiSelector().text("External Storage")';
    }

    /**
     * Navigate to Storage menu
     */
    async navigateToStorage(): Promise<void> {
        console.log('Step 3: Tapping Storage menu');
        await this.clickElement(this.storageMenu);
    }

    /**
     * Navigate to External Storage menu
     */
    async navigateToExternalStorage(): Promise<void> {
        console.log('Step 4: Tapping External Storage menu');
        await this.clickElement(this.externalStorageMenu);
        await this.pause(1000);
    }
}

export default new StoragePage();
