import { getByDisplayValue } from "@testing-library/react";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const Stepper = (props) => {
  const Form = useSelector((state) => state.FormFeed);

  function getReadingValue(index) {
    switch (parseInt(index)) {
      case 1:
        return Form.Reading1;

      case 2:
        return Form.Reading2;

      case 3:
        return Form.Reading3;

      case 4:
        return Form.Reading4;

      case 5:
        return Form.Reading5;

      default:
        return null;
    }
  }

  let value = getReadingValue(props.index);

  return (
    <div class="container readingContainer">
      <form id="Form" className="form-horizontal">
        <div className="form-group readingFormGroup">
          <center>
            <img
              className="readingImage"
              src={
                require("./../../../assets/imgs/pipette" + props.index + ".png")
                  .default
              }
            />
          </center>
          <div className="readingLabel">Reading {props.index} value</div>
          <input
            type="number"
            class="form-control readingInput"
            onChange={(e) => {
              props.setShowAlert(false)
              props.OnChange(e, props.index);
            }}
            //defaultValue={value}
            value={value == "" || value == null ? "" : value}
            placeholder={"Enter weight value for reading " + props.index + ""}
          />
        </div>
      </form>
    </div>
  );
};

export default React.memo(Stepper);
