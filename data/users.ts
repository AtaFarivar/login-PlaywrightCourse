export const USERS = {
  standard: {
    username: "standard_user",
    password: "secret_sauce",
  },
  wrongUser: {
    username: "wrongUser",
    password: "secret_sauce",
  },
  wrongPass: {
    username: "standard_user",
    password: "wrongPass",
  },
  emptyUser: {
    username: "",
    password: "wrongPass",
  },
  emptyPass: {
    username: "standard_user",
    password: "",
  },
} as const;
