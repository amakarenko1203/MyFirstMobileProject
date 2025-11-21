/**
 * Base Page Object
 * Contains common methods used across all pages
 */
class BasePage {
    /**
     * Wait for an element to be displayed and click it
     * @param selector - Element selector
     * @param timeout - Wait timeout in milliseconds
     */
    async clickElement(selector: string, timeout: number = 10000): Promise<void> {
        const element = await $(selector);
        await element.waitForDisplayed({ timeout });
        await element.click();
    }

    /**
     * Wait for an element to be displayed
     * @param selector - Element selector
     * @param timeout - Wait timeout in milliseconds
     */
    async waitForElement(selector: string, timeout: number = 10000) {
        const element = await $(selector);
        await element.waitForDisplayed({ timeout });
        return element;
    }

    /**
     * Check if element is enabled
     * @param selector - Element selector
     * @returns Promise<boolean>
     */
    async isElementEnabled(selector: string): Promise<boolean> {
        const element = await $(selector);
        return await element.isEnabled();
    }

    /**
     * Get all elements matching selector
     * @param selector - Element selector
     * @returns Promise<Array>
     */
    async getElements(selector: string) {
        return await $$(selector);
    }

    /**
     * Pause execution
     * @param ms - Milliseconds to pause
     */
    async pause(ms: number): Promise<void> {
        await browser.pause(ms);
    }
}

export { BasePage };
