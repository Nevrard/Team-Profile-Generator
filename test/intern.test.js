const Intern = require("../lib/intern");


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