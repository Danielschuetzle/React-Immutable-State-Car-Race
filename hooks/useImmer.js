import { useState } from "react";
import produce from "immer";

// useImmer hook for immutable state updates.
export const useImmer = (initialValue) => {
  const [value, setValue] = useState(initialValue); // State variable and setter.

  // Return current state and a function for updating it.
  return [
    value, // Current state.
    (updater) => {
      // Immutably update state with immer's produce function.
      setValue(produce(value, updater));
    },
  ];
};
