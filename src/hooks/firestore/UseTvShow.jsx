import { onSnapshot } from "firebase/firestore";
import { useMemo, useState } from "react";
import { tvShowRef } from "../../firestore-refs";

function UseTvShow() {
  const [tvShowList, setTvShowList] = useState([]);
  const fetchTvShow = useMemo(async () => {
    await onSnapshot(tvShowRef, (document) => {
      setTvShowList(
        document.docs.map((item) => ({ ...item.data(), id: item.id }))
      );
    });
  }, []);
  return { fetchTvShow, tvShowList };
}

export default UseTvShow;
