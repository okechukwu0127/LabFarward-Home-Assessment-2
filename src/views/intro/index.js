import React,{useEffect} from 'react';
import { useSelector, connect } from "react-redux";
import LazyLoad from 'react-lazyload'; // use lazyload for components and image
import FormUserSignup from '../../components/form-signup'; // load component
import FormRecording from '../../components/form-recording'; // load component
import FormUserCompleted from '../../components/form-completed'; // load component
import FormUserVerify from '../../components/form-verify'; // load component
//import LabLogo from '../../assets/imgs/labforward.png'; // load image

import './styles.scss';
import { NextPageAction } from "../../store/actions/FormAction";


const Intro = (props) => {
  useEffect(() => {
    NextPageAction(1);
  }, []);

  
  const Form = useSelector((state) => state);
  let pageStage = Form.FormFeed.FormStage;
  //console.log(Form);
  //const stateAll = useSelector(state => state)
  //console.log(`output: ${JSON.stringify(stateAll, null, 2)}`) // output results to console.log

  return (
    <main>
    
      <div className="form-wrapper">
        <center>
          <img
            src={require("./../../assets/imgs/labforward.png").default}
            style={{ width: 100 }}
          />
        </center>
        <br />
        <br />
        {pageStage == 1 ? (
          <>
            <div style={{ color: "#bbb", fontSize: 12 }}>
              <div>
                <strong>PURPOSE</strong>
              </div>
              To perform a calibration check on a pipette with automated data
              capture and compliance documentation. The purpose of this test is
              to check if the pipette is dispensing the same amount of liquid
              each time.
            </div>
            <br />
            <br />
            <div style={{ color: "#bbb", fontSize: 12 }}>
              <div>
                <strong>ASSUMPTIONS</strong>
              </div>

              <ul
                style={{ color: "#bbb", fontSize: 12, listStyleType: "circle" }}
              >
                <li>Beaker with 1000ul of distilled H20</li>
                <li>Weigh the pipettes at 100% volume n times</li>
              </ul>
            </div>
          </>
        ) : null}
        <h1 data-testid="Signup-Title" className="text-center">
          Home Challenge
        </h1>

        <br />
        <br />

        <section>
          {/* When adding/removing components, update the progress bar below */}
          <LazyLoad once>
            <div className="progressbar">
              <div
                className={
                  pageStage === 1
                    ? "progress-step progress-step-active"
                    : "progress-step"
                }
                data-title="User"
              ></div>
              <div
                className={
                  pageStage === 2
                    ? "progress-step progress-step-active"
                    : "progress-step"
                }
                data-title="Recording"
              ></div>
              <div
                className={
                  pageStage === 3
                    ? "progress-step progress-step-active"
                    : "progress-step"
                }
                data-title="Verify"
              ></div>

              <div
                className={
                  pageStage === 4
                    ? "progress-step progress-step-active"
                    : "progress-step"
                }
                data-title="Done"
              ></div>
            </div>
          </LazyLoad>

          <div className="page-wrapper">
            {pageStage === 1 && (
              // Signup Page
              <LazyLoad once>
                <div className="wrap">
                  <FormUserSignup
                    FormFeed={Form.FormFeed}
                    pageTitle={"Lab Attendant Form:"} // form page stage title
                    submitButtonText={"Next"} // submit next button display text
                    previousButton={false} // show/hide previous button
                  />
                </div>
              </LazyLoad>
            )}

            {pageStage === 2 && (
              // Privacy Page
              <LazyLoad once>
                <div className="wrap">
                  <FormRecording
                    pageTitle={"Take readings:"} // form page stage title
                    submitButtonText={"Next"} // submit next button display text
                    previousButton={true} // show/hide previous button
                  />
                </div>
              </LazyLoad>
            )}

            {pageStage === 3 && (
              // Completion Page
              <LazyLoad once>
                <div className="wrap">
                  <FormUserVerify
                    previousButton={true}
                    submitButtonText={"Submit"}
                    pageTitle={"Verify!"} // form page stage title
                    successMessage={"Kindly confirm your data below"} // page success message
                  />
                </div>
              </LazyLoad>
            )}

            {pageStage === 4 && (
              // Completion Page
              <LazyLoad once>
                <div className="wrap">
                  <FormUserCompleted
                    pageTitle={"Success!"} // form page stage title
                    successMessage={
                      "Calculate Mean, Std. Deviation, Accuracy and Precision"
                    } // page success message
                  />
                </div>
              </LazyLoad>
            )}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Intro;




//Intro
