/* eslint-disable @typescript-eslint/return-await */
/* eslint-disable class-methods-use-this */
import apiService from "../apiManager";

class RatingService {
  async getAllNanniesRatings() {
    return await apiService.apiPOST("/nannyRating/view", {});
  }
}

export default new RatingService();
