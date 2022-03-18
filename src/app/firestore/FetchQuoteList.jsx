import { onSnapshot, query, where } from "firebase/firestore";
import { useState } from "react";
import { quotesRef } from "../../firebase-config";

function FetchQuoteList() {
  const [quoteList, setQuoteList] = useState([]);

  const fetchQuoteList = async (isPrivate, uid) => {
    if (isPrivate) {
      const q = await query(quotesRef, where("id_user", "==", uid));
      onSnapshot(q, (document) => {
        console.log(document.docs);
        setQuoteList(
          document.docs.map((item) => ({ ...item.data(), id: item.id }))
        );
      });
    } else {
      await onSnapshot(quotesRef, (document) => {
        setQuoteList(
          document.docs.map((item) => ({ ...item.data(), id: item.id }))
        );
      });
    }
  };
  return { fetchQuoteList, quoteList };
}

export default FetchQuoteList;
