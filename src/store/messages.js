import {addMessage, editeMessage, getMessage} from "../../firebase/methods/methods";
// , addMessage , delletMessage ,edtitMessage
const prefix = "category";

const state = {
  navVisability: false,
  messages: [],
  ShowModal : false,
}
const mutations = {
  NAV_TOGLE(state) {
    state.navVisability = !state.navVisability;
  },
  TOGLE_MODALE(state) {
    state.ShowModal = !state.ShowModal;
  },
  GET_MESSAGES( state , payload ){
    state.messages = payload
  },
  ADD_MESSAGES( state , payload ){
    state.messages = payload
  },
  EDIT_MESSAGES( state , payload ){
    state.messages = payload
  }
};

const actions = {
  // async getCats( commit , payload) {
  //   const { data } = await api.get(`${prefix}/show-table?${payload}`);
  //   commit("GET_CATS", await data);
  //   return data;
  // },
 async getMessages(commit) {
   await getMessage("messages")
       .then((querySnapshot) => {
         let  data  = querySnapshot.docs.map((doc) =>
             Object.assign({}, doc.data(), { id: doc.id })
          );
         commit("GET_MESSAGES", data);
        }).catch((err) => {
          console.log(err);
        });
  },
  async addMessages(commit ,payload ) {
     await addMessage("messages" , payload).then(
         (docRef) => {
             commit("ADD_MESSAGES",payload);
              }).catch((err) => {
                  console.log(err);
              });
  },

};
const getters = {
  cats: (state) => {
    return state.cats;
  },

    messages: (state) => {
    return state.messages;
  },
};

export default {
  namespaced: true,
  getters,
  mutations,
  actions,
  state,
};
