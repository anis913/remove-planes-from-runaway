const Runway = require("./Runway");

describe("testing if error thrown if max overexceeded", () => {
  const plane1 = new Runway("Rejwan");
  Runway.planes.length = 101;
  it("number of planes more than limit", () => {
    expect(() => plane1.add("Lion")).toThrowError("runways at full capacity!");
  });
});

describe("testing whether limit of planes is 100", () => {
  const plane2 = new Runway("Fargo");
  Runway.planes.length = 100;
  plane2.add("rufus");
  it("number of planes === 100, adding 1", () => {
    expect(Runway.planes.length === 101).toBe(true);
  });
});

describe("testing if you can create an instance of Runaway", () => {
  const plane3 = new Runway("airplane");
  it("testing whether instance is initialize", () => {
    expect(plane3.name).toBe("airplane");
  });
});

describe("testing whether we can add plane to Runway", () => {
  beforeEach(() => {
    Runway.planes.length = 0;
  });
  const plane4 = new Runway("testPlane");
  Runway.planes.length === 0;
  it("if testPlane added to Runway", () => {
    plane4.add("testPlane");
    const hold = Runway.planes.pop();
    expect(hold).toBe("testPlane");
  });
});

describe("test whether we can remove plane to Runaway", () => {
  beforeEach(() => {
    Runway.planes = ["testp", "restp", "festp", "testy", "testingPlane"];
    console.log(Runway.planes);
  });

  const plane5 = new Runway("testingPlane");

  const truth = Runway.planes.includes("testingPlane");

  it("testing if we can remove a plane from Runway", () => {
    plane5.remove("testingPlane");
    expect(Runway.planes.includes("testingPlane")).toBeFalsy();
  });
});

describe("testing if we can not remove plane if runway has no planes", () => {
  beforeEach(() => {
    Runway.planes = [];
    Runway.planes.length = 0;
    console.log(Runway.planes);
    console.log(Runway.planes.length);
  });
  const plane6 = new Runway("testingPlane");
  it("testing if we get error if we remove a plane if no plane in Runway", () => {
    expect(() => plane6.remove("aeroplane")).toThrowError(
      "no planes in runways"
    );
  });
});