//import {  screen } from "@testing-library/react";
import { render, fireEvent, screen } from "./../../configTests";

import FormUserSignup from "./index";

test("Lab Attentance Form Next Button Disable Checker", async () => {
  render(
    <FormUserSignup
      FormFeed={{
        name: "Okechukwu Eze",
        role: "Lab Admin",
        times: 5,
      }}
      pageTitle={"Lab Attendant Form:"} // form page stage title
      submitButtonText={"Next"} // submit next button display text
      previousButton={false} // show/hide previous button
    />
  );

  expect(await screen.findByRole("button", { name: /Next/i })).toBeEnabled(); //Test if button exist and is enabled
});
