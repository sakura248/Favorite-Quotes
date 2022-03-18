import { onSnapshot } from "firebase/firestore";
import { useState } from "react";
import { tvShowRef } from "../../firebase-config";

function FetchTvShow() {
  const [tvShowList, setTvShowList] = useState([]);

  const fetchTvShow = async () => {
    await onSnapshot(tvShowRef, (document) => {
      setTvShowList(
        document.docs.map((item) => ({ ...item.data(), id: item.id }))
      );
    });
  };
  return { fetchTvShow, tvShowList };
}

export default FetchTvShow;
