import { onSnapshot } from "firebase/firestore";
import { useState } from "react";
import { tvCharacterRef } from "../../firestore-refs";

function UseCharacterList() {
  const [characterList, setCharacterList] = useState([]);

  const fetchCharacter = async () => {
    await onSnapshot(tvCharacterRef, (document) => {
      setCharacterList(
        document.docs.map((item) => ({ ...item.data(), id: item.id }))
      );
    });
  };
  return { fetchCharacter, characterList };
}

export default UseCharacterList;
