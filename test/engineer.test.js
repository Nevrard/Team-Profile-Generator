const Engineer = require("../lib/engineer");

it("getRole() should return Engineer", () => {
  const test = "Engineer";
  const e = new Engineer("Foo", 1, "foo@gmail.com", "GitHubUser");
  expect(e.getRole()).toBe(test);
}); 

it("Can get GitHub username through getGithub()", () => {
  const test = "GitHubUser";
  const e = new Engineer("Foo", 1, "foo@gmail.com", test);
  expect(e.getGithub()).toBe(test);
});