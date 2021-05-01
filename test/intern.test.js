const Intern = require("../lib/intern");

it("Can set school via constructor", () => {
  const test = "carleton";
  const e = new Intern("Agnes", 1, "agnes@test.com", test);
  expect(e.school).toBe(test);
});

it("getRole() should return Intern", () => {
  const test = "Intern";
  const e = new Intern("Wallid", 1, "wallid@gmail.com", "Test_school");
  expect(e.getRole()).toBe(test);
});

it("Can get school through getSchool()", () => {
  const test = "Test_school";
  const e = new Intern("Wallid", 1, "wallid@gmail.com", test);
  expect(e.getSchool()).toBe(test);
});