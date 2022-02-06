// import React from "react";
import { addDoc } from "firebase/firestore";
import { quotesRef } from "../firebase-config";
import useAuthStatus from "../hooks/useAuthStatus";

function SaveProduct() {
  const { uid } = useAuthStatus();

  const data = {
    createdDate: new Date(),
    id_character: "",
    id_episode: "",
    id_tvshow: "",
    id_user: uid,
    quote: "hoge",
    updatedDate: new Date(),
  };
  addDoc(quotesRef, data);
  console.log(data);
}

export default SaveProduct;
