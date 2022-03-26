import { onSnapshot, query, where } from "firebase/firestore";
import { useState } from "react";
import { quotesRef } from "../../firestore-refs";

function UseQuoteList() {
  const [quoteList, setQuoteList] = useState([]);
  // const [favList, setFavList] = useState([]);

  const fetchQuoteList = async (type, uid) => {
    const accountQuery = await query(quotesRef, where("id_user", "==", uid));
    const favQuery = await query(
      quotesRef,
      where("liked", "array-contains", uid)
    );
    const ref =
      type === "all" ? quotesRef : type === "account" ? accountQuery : favQuery;

    await onSnapshot(ref, (document) => {
      setQuoteList(
        document.docs.map((item) => ({ ...item.data(), id: item.id }))
      );
    });

    // await onSnapshot(favQuery, (document) => {
    //   setFavList(
    //     document.docs.map((item) => ({ ...item.data(), id: item.id }))
    //   );
    // });
  };
  return { fetchQuoteList, quoteList };
}

export default UseQuoteList;
