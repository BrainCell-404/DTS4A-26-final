import axios from "axios";
import create from "zustand";

const hotArticles = (set) => ({
  // state
  hotsArticles: [],

  // action
  getArticles: async () => {
    const response = await axios
      .get(
        "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=H52AIIGjpQmDWCHTmqRgnT60BHsRwgNZ"
      )
      .catch((err) => {
        console.log(err);
      });
    set({ hotArticles: response.data?.results.slice(0, 9) });
  },
});

// create stores
const storesHotArticles = create(hotArticles);

// export
export const selectArticles = (state) => state.hotArticles;
export const selectGetHotArticles = (state) => state.getArticles;

export default storesHotArticles;
