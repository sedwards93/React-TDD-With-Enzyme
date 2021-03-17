import App from "./App";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { findByTestAttr } from "../test/testUtils";

/**
 * @returns {ShalllowWrapper}
 */
const setup = () => {
  return shallow(<App />);
};

test("renders without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-app");
  expect(component.length).toBe(1);
});
