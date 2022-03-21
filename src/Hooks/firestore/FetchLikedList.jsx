import { onSnapshot } from "firebase/firestore";
import { useState } from "react";
import { favoriteQuotesRef } from "../../firestore-refs";

function FetchLikedList() {
  const [likedList, setLikedList] = useState([]);

  const fetchLiked = async () => {
    await onSnapshot(favoriteQuotesRef, (document) => {
      setLikedList(
        document.docs.map((item) => ({ ...item.data(), id: item.id }))
      );
    });
  };
  return { fetchLiked, likedList };
}

export default FetchLikedList;
