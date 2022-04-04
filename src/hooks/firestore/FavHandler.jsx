import {
  addDoc,
  deleteDoc,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { useLocation, useNavigate } from "react-router-dom";
import { favoriteQuotesRef, quotesRef } from "../../firestore-refs";

const FavHandler = async (loggedIn, uid, quoteItem) => {
  const location = useLocation();
  const navigate = useNavigate();

  if (loggedIn) {
    if (quoteItem.liked.length === 0) {
      const data = {
        id_user: uid,
        id_quote: quoteItem.id,
      };
      addDoc(favoriteQuotesRef, data);
      setDoc(quotesRef, { liked: uid }, { merge: true });
    } else {
      const targetQuery = query(
        favoriteQuotesRef,
        where("id_quote", "==", quoteItem.id)
      );
      const querySnapShot = await getDocs(targetQuery);
      const id = querySnapShot.docs.map((item) => item.id).toString();
      const targetRef = doc(favoriteQuotesRef, id);
      await deleteDoc(targetRef);

      setDoc(quotesRef, { liked: "" }, { merge: true });
    }
  } else {
    navigate("/Login", { from: location });
  }
};

export default FavHandler;
