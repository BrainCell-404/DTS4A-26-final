import axios from "axios";
import create from "zustand";

const userSearch = (set) => ({
  // state
  Articles: [],

  // action
  searchArticle: async (article) => {
    const response = await axios
      .get(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${article}&api-key=H52AIIGjpQmDWCHTmqRgnT60BHsRwgNZ`
      )
      .catch((err) => {
        console.log(err);
      });
    set({ Articles: response?.data.response.docs });
  },
});

const storesSearchArticle = create(userSearch);

export const selectArticles = (state) => state.Articles;
export const selectSearchArticle = (state) => state.searchArticle;

export default storesSearchArticle;
