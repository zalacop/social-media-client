import { login } from "./login";

const email = "jest.test@stud.noroff.no";
const password = "testing123";
const accessToken = "mockToken";

const mockFetchApi = jest.fn().mockResolvedValue({
  ok: true,
  json: jest.fn().mockResolvedValue({
    name: "test",
    email: email,
    accessToken: accessToken,
  }),
});

const mockLocalStorage = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};

global.localStorage = mockLocalStorage;

const mockFetchApiFail = jest.fn().mockResolvedValue({
  ok: false,
  statusText: "Unauthorized",
  statusCode: 401,
});

describe("login function", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("Calls API and stores values in the local storage", async () => {
    global.fetch = mockFetchApi;
    await login(email, password);
    expect(fetch).toBe(mockFetchApi);
    expect(mockLocalStorage.setItem).toHaveBeenCalledWith("token", '\"mockToken\"');
    expect(mockLocalStorage.setItem).toHaveBeenCalledWith("profile", '{\"name\":\"test\",\"email\":\"jesttest@stud.noroff.no\"}');
  });
  
  it("Api call fails and does not store values in local storage", async () => {
    global.fetch = mockFetchApiFail;
    await expect(login(email, password)).rejects.toThrow("Unauthorized");
  });
});

