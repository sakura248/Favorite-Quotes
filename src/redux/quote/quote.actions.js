export const ADD_QUOTE = "ADD_QUOTE"
export const UPDATE_QUOTE = "UPDATE_QUOTE"
export const DELETE_QUOTE = "DELETE_QUOTE"

export const addQuote = ({quote, character, tvShowTitle}) => ({
    type: ADD_QUOTE,
    payload:{quote, character, tvShowTitle}
})