// import React from 'react'
import { useFirebase } from "react-redux-firebase";

function AddRrfTest() {
  const firebase = useFirebase();
  const sampleQuote = { quote: "Sample", character: "Andy" };
  return firebase.push("quotes", sampleQuote);
}

export default AddRrfTest;
