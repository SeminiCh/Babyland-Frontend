/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/return-await */
/* eslint-disable class-methods-use-this */
import apiService from "../apiManager";

class SuggestionService {
  async addSuggestion(suggestion: any) {
    return await apiService.apiPOST("/suggestion/save", suggestion);
  }

  async getAllSuggestions() {
    return await apiService.apiPOST("/suggestion", {});
  }
}

export default new SuggestionService();
