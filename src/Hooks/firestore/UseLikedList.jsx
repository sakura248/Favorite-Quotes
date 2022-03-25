import { onSnapshot } from "firebase/firestore";
import { useState } from "react";
import { favoriteQuotesRef } from "../../firestore-refs";

function UseLikedList() {
  const [likedList, setLikedList] = useState([]);

  const useLiked = async () => {
    await onSnapshot(favoriteQuotesRef, (document) => {
      setLikedList(
        document.docs.map((item) => ({ ...item.data(), id: item.id }))
      );
    });
  };
  return { useLiked, likedList };
}

export default UseLikedList;
