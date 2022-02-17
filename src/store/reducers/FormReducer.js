const iniState = {
  FormStage: 1, // default page stage to show on page load
  FormSignup: {
    name: "",
    role: "Lab Admin",
    times: 5,
  },
  Reading1: null,
  Reading2: null,
  Reading3: null,
  Reading4: null,
  Reading5: null,
 
};

const FormReducer = (state = iniState, action) => {
  switch (action.type) {
    case "INCREASE_STAGE":
      return {
        ...state,
        FormStage: action.pageNumber,
      };

    case "INTRO_FORM":
      return {
        ...state,
        FormSignup: action.formData,
      };

    case "READING_UPDATE_1":
      return {
        ...state,
        Reading1: action.readingData,
      };

    case "READING_UPDATE_2":
      return {
        ...state,
        Reading2: action.readingData,
      };

    case "READING_UPDATE_3":
      return {
        ...state,
        Reading3: action.readingData,
      };

    case "READING_UPDATE_4":
      return {
        ...state,
        Reading4: action.readingData,
      };

    case "READING_UPDATE_5":
      return {
        ...state,
        Reading5: action.readingData,
      };

    case "RESET_FORM":
      return {
        ...state,
        FormStage: 1, // default page stage to show on page load
        FormSignup: {
          name: "",
          role: "Lab Admin",
          times: 5,
        },
        Reading1: null,
        Reading2: null,
        Reading3: null,
        Reading4: null,
        Reading5: null,
        
      };

    //RESET_FORM

    default:
      return state;
  }
};

export default FormReducer;
