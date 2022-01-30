export const ADD_QUOTE = "ADD_QUOTE";
// export const EDIT_QUOTE = "EDIT_QUOTE"
export const UPDATE_QUOTE = "UPDATE_QUOTE";
export const DELETE_QUOTE = "DELETE_QUOTE";

export const addQuote = ({ quote, character, tvShowTitle, episodeTitle }) => ({
  type: ADD_QUOTE,
  payload: { quote, character, tvShowTitle, episodeTitle },
});

// export const editQuote = ({id, quote, character, tvShowTitle}) => ({
//     type: EDIT_QUOTE,
//     payload:{id, quote, character, tvShowTitle}
// })

export const updateQuote = ({
  id,
  newQuote,
  newCharacter,
  newTvShowTitle,
}) => ({
  type: UPDATE_QUOTE,
  payload: { id, newQuote, newCharacter, newTvShowTitle },
});

export const deleteQuote = (id) => ({
  type: DELETE_QUOTE,
  payload: id,
});
