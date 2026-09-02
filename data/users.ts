export const USERS = {
  standard: {
    username: process.env.STANDARD_USERNAME || "",
    password: process.env.STANDARD_PASSWORD || "",
  },
  wrongUser: {
    username: process.env.WRONG_USERNAME || "",
    password: process.env.STANDARD_PASSWORD || "",
  },
  wrongPass: {
    username: process.env.STANDARD_USERNAME || "",
    password: process.env.WRONG_PASSWORD || "",
  },
  emptyUser: {
    username: "",
    password: process.env.WRONG_PASSWORD || "",
  },
  emptyPass: {
    username: process.env.STANDARD_USERNAME || "",
    password: "",
  },
} as const;
