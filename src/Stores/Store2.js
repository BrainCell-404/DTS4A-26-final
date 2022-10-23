import axios from "axios";
import create from "zustand";

const mostPopular = (set) => ({
  // state
  populars: [],

  // action
  getPopular: async () => {
    const response = await axios
      .get(
        "https://api.nytimes.com/svc/mostpopular/v2/shared/1.json?api-key=H52AIIGjpQmDWCHTmqRgnT60BHsRwgNZ"
      )
      .catch((err) => {
        console.log(err);
      });
    set({ populars: response?.data.results.slice(0, 15) });
  },
});

const storseMostPopular = create(mostPopular);

export const selectPopulars = (state) => state.populars;
export const selectGetPopular = (state) => state.getPopular;

export default storseMostPopular;
