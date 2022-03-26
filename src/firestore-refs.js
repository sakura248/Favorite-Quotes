import { collection, getDocs, getFirestore } from "firebase/firestore";

export const db = getFirestore();

export const quotesRef = collection(db, "quotes");
export const favoriteQuotesRef = collection(db, "favorites_quote");

export const tvShowRef = collection(db, "tvshow");
export const favTvShowRef = collection(db, "favorites_tvshow");

export const tvCharacterRef = collection(db, "character");

export const quoteSnapShot = () => getDocs(quotesRef);
export const favoriteQuoteSnapShot = () => getDocs(favoriteQuotesRef);

export const tvShowSnapShot = () => getDocs(tvShowRef);
export const favSnapShot = () => getDocs(favTvShowRef);
