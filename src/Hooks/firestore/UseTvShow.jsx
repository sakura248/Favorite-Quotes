import { onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { tvShowRef } from "../../firestore-refs";

function UseTvShow() {
  const [tvShowList, setTvShowList] = useState([]);
  useEffect(() => {
    const useTvShow = async () => {
      await onSnapshot(tvShowRef, (document) => {
        setTvShowList(
          document.docs.map((item) => ({ ...item.data(), id: item.id }))
        );
      });
    };
    return { useTvShow, tvShowList };
  }, [tvShowList]);
}

export default UseTvShow;
