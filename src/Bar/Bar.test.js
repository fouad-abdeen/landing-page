import React from "react";
import { shallow } from "enzyme";
import Bar from "./Bar";

describe("Bar", () => {
  it("renders without crashing", () => {
    shallow(<Bar />);
  });
});
