import React from "react";
import App from "./App";
import { shallow } from "enzyme";

it("renders the joke app", () => {
  expect(shallow(<App />)).toMatchSnapshot();
});
