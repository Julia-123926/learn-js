import { useReducer } from "react";

const initialForm = {
  name: "",
  text: "",
  rating: 0,
};

function reducer(state, { type, payload }) {
  switch (type) {
    case "setName":
      return {
        ...state,
        name: payload,
      };
    case "setText":
      return {
        ...state,
        text: payload,
      };
    case "setRating":
      return {
        ...state,
        rating: payload,
      };
    case "reset":
      return initialForm;
    default:
      return state;
  }
}

export const useForm = () => {
  const [form, dispatch] = useReducer(reducer, initialForm);

  const updateName = (name) => dispatch({ type: "setName", payload: name });
  const updateText = (text) => dispatch({ type: "setText", payload: text });
  const updateRating = (rating) =>
    dispatch({ type: "setRating", payload: rating });
  const resetForm = () => dispatch({ type: "reset" });

  return {
    form,
    updateName,
    updateText,
    updateRating,
    resetForm,
  };
};
