import { onSnapshot } from "firebase/firestore";
import { useState } from "react";
import { tvCharacterRef } from "../../firestore-refs";

function UseCharacterList() {
  const [characterList, setCharacterList] = useState([]);

  const useCharacter = async () => {
    await onSnapshot(tvCharacterRef, (document) => {
      setCharacterList(
        document.docs.map((item) => ({ ...item.data(), id: item.id }))
      );
    });
  };
  return { useCharacter, characterList };
}

export default UseCharacterList;
