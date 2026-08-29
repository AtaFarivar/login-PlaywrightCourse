import { test } from "@playwright/test";
import { CommonActions } from "../common/CommonActions";
import { LoginLocators } from "../pages/LoginLocators";
import { USERS } from "../data/users";
import { URLS } from "../data/urls";
import { MESSAGES } from "../data/messages";

test.describe("Login Page Tests", () => {
  let common: CommonActions;
  let login: LoginLocators;

  test.beforeEach(async ({ page }) => {
    common = new CommonActions(page);
    login = new LoginLocators(page);

    await common.goto(URLS.base);

    //ٰValidations
    await common.expectTitle(URLS.title);
    await common.expectVisible(login.usernameInput);
    await common.expectVisible(login.passwordInput);
    await common.expectEnabled(login.loginButton);
  });

  test(
    "1-succeessful login",
    { tag: ["@smoke", "@critical", "@regression"] },
    async () => {
      await common.fill(login.usernameInput, USERS.standard.username);
      await common.fill(login.passwordInput, USERS.standard.password);

      await common.expectValue(login.usernameInput, USERS.standard.username);
      await common.expectValue(login.passwordInput, USERS.standard.password);

      await common.click(login.loginButton);
      await common.expectUrl(URLS.inventory);
    },
  );

  test("2-wrong username", { tag: ["@regression", "@smoke"] }, async () => {
    await common.fill(login.usernameInput, USERS.wrongUser.username);
    await common.fill(login.passwordInput, USERS.wrongUser.password);
    await common.expectValue(login.usernameInput, USERS.wrongUser.username);
    await common.expectValue(login.passwordInput, USERS.wrongUser.password);
    await common.click(login.loginButton);

    await common.expectVisible(login.errorMessage);
    await common.expectText(login.errorMessage, MESSAGES.wrongcredintials);
  });
  test("3-wrong pass", { tag: ["@regression", "@smoke"] }, async () => {
    await common.fill(login.usernameInput, USERS.wrongPass.username);
    await common.fill(login.passwordInput, USERS.wrongPass.password);
    await common.expectValue(login.usernameInput, USERS.wrongPass.username);
    await common.expectValue(login.passwordInput, USERS.wrongPass.password);
    await common.click(login.loginButton);

    await common.expectVisible(login.errorMessage);
    await common.expectText(login.errorMessage, MESSAGES.wrongcredintials);
  });
  test("4-empty user", { tag: ["@regression"] }, async () => {
    await common.fill(login.usernameInput, USERS.emptyUser.username);
    await common.fill(login.passwordInput, USERS.emptyUser.password);
    await common.expectValue(login.usernameInput, USERS.emptyUser.username);
    await common.expectValue(login.passwordInput, USERS.emptyUser.password);
    await common.click(login.loginButton);

    await common.expectVisible(login.errorMessage);
    await common.expectText(login.errorMessage, MESSAGES.emptyuser);
  });

  test("5-empty pass", { tag: ["@regression"] }, async () => {
    await common.fill(login.usernameInput, USERS.emptyPass.username);
    await common.fill(login.passwordInput, USERS.emptyPass.password);
    await common.expectValue(login.usernameInput, USERS.emptyPass.username);
    await common.expectValue(login.passwordInput, USERS.emptyPass.password);
    await common.click(login.loginButton);

    await common.expectVisible(login.errorMessage);
    await common.expectText(login.errorMessage, MESSAGES.emptypassword);
  });
});
