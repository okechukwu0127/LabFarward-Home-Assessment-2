import React, { useState,useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import IMGgreentick from "../../assets/imgs/green-tick.svg"; // load image
import { ResetForm } from "../../store/actions/FormAction";

import "./styles.scss";

function FormUserResult({ pageTitle, successMessage }) {
  // Get Redux Form State and output to JSON format
  const state = useSelector((state) => state);

  // redux
  const dispatch = useDispatch();

  const Form = useSelector((state) => state.FormFeed); // for form state
  const [mean, setMean] = useState(0.00);
  const [SD, setSD] = useState(0.00)

  //setMean(20)


  const standardDeviation = (arr, usePopulation = false) => {
    const mean = arr.reduce((acc, val) => acc + val, 0) / arr.length;
    return Math.sqrt(
      arr
        .reduce((acc, val) => acc.concat((val - mean) ** 2), [])
        .reduce((acc, val) => acc + val, 0) /
        (arr.length - (usePopulation ? 0 : 1))
    ).toFixed(2);
  };

  useEffect(() => {

    setMean(
      ((parseFloat(Form.Reading1) +
        parseFloat(Form.Reading2) +
        parseFloat(Form.Reading3) +
        parseFloat(Form.Reading4) +
        parseFloat(Form.Reading5)) /
      5
      ).toFixed(2))
    
    
    setSD(
      standardDeviation(
        [
          parseFloat(Form.Reading1),
          parseFloat(Form.Reading2),
          parseFloat(Form.Reading3),
          parseFloat(Form.Reading4),
          parseFloat(Form.Reading5),
          
        ],
        true
      )
    );
    
  },[])



  return (
    <>
      <div className="form-complete">
        <h2>{pageTitle || "Confirmation"}</h2>

        <img
          className="fade-in-image"
          src={IMGgreentick}
          alt={successMessage || "Success!"}
        />

        <p>{successMessage || "Thank you, please check your email!"}</p>
      </div>

      <div className="code-output">
        <pre>
          <strong>Test Volume</strong> 100%
        </pre>
      </div>

      <div className="code-output">
        <pre>
          <strong>Mean</strong> {mean}
        </pre>
      </div>

      <div className="code-output">
        <pre>
          <strong>Std. Deviation</strong> {SD}
        </pre>
      </div>

      <div className="code-output">
        <pre>
          <strong>Accuracy</strong>
        </pre>
      </div>

      <div className="code-output">
        <pre>
          <strong>Precision</strong>
        </pre>
      </div>

      <form name="form-verify" id="form-verify">
        <div className="btn-array">
          <p>
            <input
              type="button"
              style={{ fontWeight: "400" }}
              onClick={() => {
                //ResetForm
                dispatch(ResetForm());
              }}
              value={"Reset"}
            />
          </p>
        </div>
      </form>
    </>
  );
}

export default FormUserResult;
