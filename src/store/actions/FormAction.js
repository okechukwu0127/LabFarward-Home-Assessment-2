export const NextPageAction = (data) => {

    return async (dispatch, getState) => {
      
      dispatch({ type: 'INCREASE_STAGE', pageNumber: data });
    }


}


export const IntroForm = (data) => {
  return async (dispatch, getState) => {
    dispatch({ type: "INTRO_FORM", formData: data });
  };
};



export const ReadingUpdate = (data) => {
  return async (dispatch, getState) => {
   // console.log(data)
    dispatch({ type: `READING_UPDATE_${data.index}`, readingData: data.value});
  };
};


export const ResetForm = (data) => {
  return async (dispatch, getState) => {
    // console.log(data)
    window.sessionStorage.setItem("step", 0);
    dispatch({ type: `RESET_FORM`});
  };
};

//
