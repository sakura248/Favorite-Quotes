import { deleteDoc, doc } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { quotesRef } from "../../firestore-refs";
import UseAuthStatus from "../UseAuthStatus";

const DeleteHandler = (id) => {
  const { loggedIn } = UseAuthStatus();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  if (loggedIn) {
    if (window.confirm("Are you sure?")) {
      const targetRef = doc(quotesRef, id);
      deleteDoc(targetRef);

      dispatch({ type: "DELETE_QUOTE", id });
    }
  } else {
    navigate("/Login", { from: location });
  }
};

export default DeleteHandler;
