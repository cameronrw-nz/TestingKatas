import { Greeting } from "./Greeting";

describe("Greeting Tests", () => {
  test("Passing in name John returns 'Hello, John'", () => {
    const result = Greeting("John");

    expect(result).toBe("Hello, John.");
  });

  test("Passing in null to my greeting returns 'Hello, my friend.'", () => {
    const result = Greeting(null);

    expect(result).toBe("Hello, my friend.");
  })

  test("When the name is in all caps then return 'HELLO {{name}}''", () => {
    const result = Greeting("JOHN");

    expect(result).toBe("HELLO JOHN!");
  })

  test("When the name contains 2 names then greet both people.", () => {
    const result = Greeting(["John", "Jane"]);

    expect(result).toBe("Hello, John and Jane.");
  })

  test("When the name contains multiple names then greet all people using the correct grammar.", () => {
    const result = Greeting(["John", "Jane", "Sarah"]);

    expect(result).toBe("Hello, John, Jane and Sarah.");
  })

  test("When the name contains multiple names and shouted names then show the names in seperate sentences.", () => {
    const result = Greeting(["John", "Jane", "Herman", "SARAH"]);

    expect(result).toBe("Hello, John, Jane and Herman. AND HELLO SARAH!");
  })

  test("When the name contains multiple names and multiple shouted names then show the names in seperate sentences.", () => {
    const result = Greeting(["John", "Jane", "JEREMY", "Herman", "SARAH"]);

    expect(result).toBe("Hello, John, Jane and Herman. AND HELLO JEREMY AND SARAH!");
  });

  test("When the name contains names joined then seperate then split the names out and format correctly.", () => {
    const result = Greeting("Jane, Somchai");

    expect(result).toBe("Hello, Jane and Somchai.");
  });

  test("When the name contains names joined then seperate then split the names out and format correctly.", () => {
    const result = Greeting(["John", "Jane, Somchai"]);

    expect(result).toBe("Hello, John, Jane and Somchai.");
  })

  test("When the name contains escaped names joined then format correctly.", () => {
    const result = Greeting(["Bob", "\"Charlie, Dianne\""]);

    expect(result).toBe("Hello, Bob and Charlie, Dianne.");
  })
})

