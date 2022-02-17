import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./styles.scss";
import "../../assets/css/main.css";
import { NextPageAction } from "../../store/actions/FormAction";

function FormUserResult({
  pageTitle,
  successMessage,
  previousButton,
  submitButtonText,
}) {
  // Get Redux Form State and output to JSON format
  const state = useSelector((state) => state);

  // redux
  const dispatch = useDispatch();

  // get Redux store values for current page
  const currentStage = useSelector((state) => state.FormFeed.FormStage); // for previous button

  const Form = useSelector((state) => state.FormFeed); // for form state
  const [isLinkElementLoaded, setLinkElementLoaded] = useState(false);

  useEffect(() => {
    const linkElement = document.createElement("link");
    linkElement.setAttribute("rel", "stylesheet");
    linkElement.setAttribute("type", "text/css");
    linkElement.setAttribute(
      "href",
      "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
    );
    document.head.appendChild(linkElement);

    setLinkElementLoaded(true);
  }, []);

  return (
    <>
      <div className="form-verify">
        <h2>{pageTitle || "Verify Data"}</h2>

        <center>
          <img
            style={{ width: 70 }}
            className="fade-in-image"
            src={require("./../../assets/imgs/checkmark.png").default}
          />
        </center>

        <p>{successMessage}</p>
      </div>

      <div className="code-output verifyPadding">
        <div class="row">
          <div class="col-md-6 col-sm-12 col-xs-12">
            <div className="pull-left_">
              <h4 className="margin10">USER DETAILS</h4>
              <pre style={{ paddingTop: 0 }}>
                <div className="verifyLabel">Name</div>
                <div className="font19">{Form.FormSignup.name}</div>

                <div className="verifyLabel margin20">Role</div>
                <div className="font19">{Form.FormSignup.role}</div>

                <div className="verifyLabel margin20">Number of readings</div>
                <div className="font19">{Form.FormSignup.times}</div>
              </pre>
            </div>
          </div>
          <div class="col-md-6 col-sm-12 col-xs-12">
            <div className="pull-right_">
              <h4 className="margin10">READING DETAILS</h4>

              <pre style={{ paddingTop: 0 }}>
                <div className="verifyLabel">Dispense-1 Reading</div>
                <div className="font19">{Form.Reading1}</div>

                <div className="verifyLabel margin20">Dispense-2 Reading</div>
                <div className="font19">{Form.Reading2}</div>

                <div className="verifyLabel margin20">Dispense-3 Reading</div>
                <div className="font19">{Form.Reading3}</div>

                <div className="verifyLabel margin20">Dispense-4 Reading</div>
                <div className="font19">{Form.Reading4}</div>

                <div className="verifyLabel margin20">Dispense-5 Reading</div>
                <div className="font19">{Form.Reading5}</div>
              </pre>
            </div>
          </div>
        </div>
      </div>

      <form name="form-verify" id="form-verify">
        <div className="btn-array">
          {previousButton && (
            <p>
              <input
                type="submit"
                style={{ fontWeight: "400" }}
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
                style={{ fontWeight: "400" }}
                value={submitButtonText || "Submit"}
                onClick={() => dispatch(NextPageAction(currentStage + 1))}
              />
            ) : (
              <input
                type="button"
                style={{ backgroundColor: "grey" }}
                onClick={() => {}}
                value={submitButtonText || "Submit"}
              />
            )}
          </p>
        </div>
      </form>
    </>
  );
}

export default FormUserResult;
