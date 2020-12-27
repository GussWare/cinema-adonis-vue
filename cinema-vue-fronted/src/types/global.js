import namespace from "../common/namespace";

export default namespace("global", {
  actions: ["changeLanguage"],
  getters: ["processing", "language"],
  mutations: ["startingProcessing", "stopProcessing", "setLanguages"]
});
