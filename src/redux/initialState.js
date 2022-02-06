const initialState = {
  loading: {
    state: false,
    text: "",
  },
  quotes: {
    createdDate: new Date(),
    id_character: "",
    id_episode: "",
    id_tvshow: "",
    id_user: "",
    quote: "",
    updatedDate: new Date(),
  },
  users: {
    email: "",
    uid: "",
    username: "",
  },
};

export default initialState;
