import { onSnapshot, query, where } from "firebase/firestore";
import { useState } from "react";
import { favoriteQuotesRef, quotesRef } from "../../firestore-refs";

function FetchQuoteList() {
  const [quoteList, setQuoteList] = useState([]);
  const [tempList, setTempList] = useState([]);
  const [favList, setFavList] = useState([]);

  const fetchQuoteList = async (type, uid) => {
    const accountQuery = await query(quotesRef, where("id_user", "==", uid));
    const favoriteQuery = await query(
      favoriteQuotesRef,
      where("id_user", "==", uid)
    );

    if (type === "fav") {
      await onSnapshot(quotesRef, (document) => {
        setTempList(
          document.docs.map((item) => ({ ...item.data(), id: item.id }))
        );
      });
      await onSnapshot(favoriteQuery, (document) => {
        setFavList(
          document.docs.map((item) => ({ ...item.data(), id: item.id }))
        );
      });
      await setQuoteList(
        tempList.filter(
          (quote) =>
            favList.filter((fav) => fav.id_quote === quote.id).length > 0
        )
      );
    } else if (type === "account") {
      await onSnapshot(accountQuery, (document) => {
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
