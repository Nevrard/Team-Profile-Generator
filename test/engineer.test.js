const Engineer = require("../lib/engineer");

it("Can set GitHUb account via constructor", () => {
  const test = "GitHubUser";
  const e = new Engineer("Wallid", 1, "Wllid@test.com", test);
  expect(e.github).toBe(test);
});

it("getRole() should return Engineer", () => {
  const test = "Engineer";
  const e = new Engineer("Wallid", 1, "Wallid@gmail.com", "GitHubUser");
  expect(e.getRole()).toBe(test);
}); 

it("Can get GitHub username through getGithub()", () => {
  const test = "GitHubUser";
  const e = new Engineer("Wallid", 1, "Wallid@gmail.com", test);
  expect(e.getGithub()).toBe(test);
});