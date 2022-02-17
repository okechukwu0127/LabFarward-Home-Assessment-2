import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import StepZilla from "react-stepzilla";
//import { formStage, formPrivacy } from '../../store/rootSlice'
import "./styles.scss";
import "../../assets/css/main.css";
import { NextPageAction, ReadingUpdate } from "../../store/actions/FormAction";
import Stepper from "./steps/Stepper";

function FormRecording({ pageTitle, submitButtonText, previousButton }) {
  // redux
  const dispatch = useDispatch();

  // get Redux store values for current page
  const currentStage = useSelector((state) => state.FormFeed.FormStage); // for previous button

  // get Redux  store  for Form state
  const Form = useSelector((state) => state.FormFeed); // for form state

  const OnChange = async (data, index) => {
    let props = {
      value: data.target.value,
      index: index,
    };

    dispatch(ReadingUpdate(props));
  };

  const steps = [
    { name: "Reading 1", component: <Stepper index="1" OnChange={OnChange} /> },
    { name: "Reading 2", component: <Stepper index="2" OnChange={OnChange} /> },
    { name: "Reading 3", component: <Stepper index="3" OnChange={OnChange} /> },
    { name: "Reading 4", component: <Stepper index="4" OnChange={OnChange} /> },
    { name: "Reading 5", component: <Stepper index="5" OnChange={OnChange} /> },
  ];

  return (
    <>
      <h2>{pageTitle}</h2>
      <br />
      <center className="stepperPadding">
        <StepZilla
          //hocValidationAppliedTo={[0, 1]}
          startAtStep="1"
          steps={steps}
          stepsNavigation={true}
          showSteps={true}
          prevBtnOnLastStep={true}
          nextButtonText="Next Reading"
          backButtonText="Previous Reading"
          nextButtonCls={"btn  pull-right btn-xs"}
          backButtonCls={"btn btn-default  pull-left btn-xs"}
          nextTextOnFinalActionStep="Final Reading"
          startAtStep={
            window.sessionStorage.getItem("step")
              ? parseFloat(window.sessionStorage.getItem("step"))
              : 0
          }
          onStepChange={(step) => window.sessionStorage.setItem("step", step)}
        />
      </center>
      <hr />

      <form name="form-privacy" id="form-privacy">
        <div className="btn-array">
          {previousButton && (
            <p>
              <input
                type="submit"
                value={`Back`}
                onClick={() => dispatch(NextPageAction(currentStage - 1))}
              />
            </p>
          )}
          <p>
            {Form.Reading1 != "" &&
            Form.Reading1 != null &&
            Form.Reading2 != "" &&
            Form.Reading2 != null &&
            Form.Reading3 != "" &&
            Form.Reading3 != null &&
            Form.Reading4 != "" &&
            Form.Reading4 != null &&
            Form.Reading5 != "" &&
            Form.Reading5 != null ? (
              <input
                type="button"
                value={submitButtonText || "Submit"}
                onClick={() => dispatch(NextPageAction(currentStage + 1))}
              />
            ) : (
              <input
                type="button"
                style={{ backgroundColor: "grey" }}
                onClick={() => {
                  alert(
                    "One or more reading value were not provided.\nAll reading values are mandatory"
                  );
                }}
                value={submitButtonText || "Submit"}
              />
            )}
          </p>
        </div>
      </form>
    </>
  );
}

export default FormRecording;
