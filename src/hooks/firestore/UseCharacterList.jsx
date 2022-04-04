import { onSnapshot } from "firebase/firestore";
import { useMemo, useState } from "react";
import { tvCharacterRef } from "../../firestore-refs";

function UseCharacterList() {
  const [characterList, setCharacterList] = useState([]);

  const fetchCharacter = useMemo(async () => {
    await onSnapshot(tvCharacterRef, (document) => {
      setCharacterList(
        document.docs.map((item) => ({ ...item.data(), id: item.id }))
      );
    });
  }, []);
  return { fetchCharacter, characterList };
}

export default UseCharacterList;
