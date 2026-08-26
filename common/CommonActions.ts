import { type Page, type Locator, expect } from "@playwright/test";
export class CommonActions {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(url: string) {
    await this.page.goto(url);
  }

  async reload() {
    await this.page.reload();
  }

  async goBack() {
    await this.page.goBack();
  }

  async click(locator: Locator) {
    await locator.scrollIntoViewIfNeeded();
    await locator.click();
  }

  async doubleClick(locator: Locator) {
    await locator.scrollIntoViewIfNeeded();
    await locator.dblclick();
  }

  async rightClick(locator: Locator) {
    await locator.scrollIntoViewIfNeeded();
    await locator.click({ button: "right" });
  }

  async hover(locator: Locator) {
    await locator.scrollIntoViewIfNeeded();
    await locator.hover();
  }

  async fill(locator: Locator, text: string) {
    await locator.scrollIntoViewIfNeeded();
    await locator.fill(text);
  }

  async clear(locator: Locator) {
    await locator.scrollIntoViewIfNeeded();
    await locator.clear();
  }

  async pressKey(locator: Locator, key: string) {
    await locator.scrollIntoViewIfNeeded();
    await locator.press(key);
  }

  async getText(locator: Locator): Promise<string> {
    await locator.scrollIntoViewIfNeeded();
    return (await locator.textContent()) ?? "";
  }

  async getInputValue(locator: Locator): Promise<string> {
    await locator.scrollIntoViewIfNeeded();
    return await locator.inputValue();
  }
  async expectVisible(locator: Locator) {
    await locator.scrollIntoViewIfNeeded();
    await expect(locator).toBeVisible();
  }

  async expectHidden(locator: Locator) {
    await expect(locator).toBeHidden();
  }

  async expectEnabled(locator: Locator) {
    await locator.scrollIntoViewIfNeeded();
    await expect(locator).toBeEnabled();
  }

  async expectText(locator: Locator, text: string) {
    await locator.scrollIntoViewIfNeeded();
    await expect(locator).toHaveText(text);
  }

  async expectContainsText(locator: Locator, text: string) {
    await locator.scrollIntoViewIfNeeded();
    await expect(locator).toContainText(text);
  }

  async expectValue(locator: Locator, value: string) {
    await expect(locator).toHaveValue(value);
  }

  async expectCount(locator: Locator, count: number) {
    await expect(locator).toHaveCount(count);
  }

  async expectUrl(url: string | RegExp) {
    await expect(this.page).toHaveURL(url);
  }
  async expectTitle(title: string | RegExp) {
    await expect(this.page).toHaveTitle(title);
  }
}
