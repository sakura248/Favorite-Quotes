import { onSnapshot, query, where } from "firebase/firestore";
import { useMemo, useState } from "react";
import { favoriteQuotesRef } from "../../firestore-refs";

function UseLikedList() {
  const [likedList, setLikedList] = useState([]);

  const fetchLiked = useMemo(async (uid) => {
    const accountQuery = await query(
      favoriteQuotesRef,
      where("id_user", "==", uid)
    );
    await onSnapshot(accountQuery, (document) => {
      setLikedList(
        document.docs.map((item) => ({ ...item.data(), id: item.id }))
      );
    });
  }, []);
  return { fetchLiked, likedList };
}

export default UseLikedList;
