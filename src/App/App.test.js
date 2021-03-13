import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import { Dropdown } from "react-bootstrap";

describe("App", () => {
  it("renders without crashing", () => {
    shallow(<App />);
  });

  it("renders Bar, Header, Body, and Footer components", () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find("Bar").exists()).toBe(true);
    expect(wrapper.find("Header").exists()).toBe(true);
    expect(wrapper.find("Body").exists()).toBe(true);
    expect(wrapper.find("Footer").exists()).toBe(true);
  });

  it("has a Bootstrap dropdown", () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find(Dropdown).exists()).toBe(true);
    expect(wrapper.find(Dropdown.Toggle).exists()).toBe(true);
    expect(wrapper.find(Dropdown.Menu).exists()).toBe(true);
    expect(wrapper.find(Dropdown.Item).exists()).toBe(true);
    expect(wrapper.find(Dropdown.Item)).toHaveLength(1);
  });
});

describe("Dropdown.Item", () => {
  it("should update state on click", () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find("#d-en").exists()).toBe(true);
    expect(wrapper.find("#d-ar").exists()).toBe(false);

    wrapper.find("#d-en").simulate("click");

    expect(wrapper.find("#d-en").exists()).toBe(false);
    expect(wrapper.find("#d-ar").exists()).toBe(true);

    wrapper.find("#d-ar").simulate("click");

    expect(wrapper.find("#d-en").exists()).toBe(true);
    expect(wrapper.find("#d-ar").exists()).toBe(false);
  });
});
