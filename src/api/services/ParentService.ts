/* eslint-disable @typescript-eslint/return-await */
/* eslint-disable class-methods-use-this */
import apiService from "../apiManager";

class ParentService {
  async getAllParents() {
    return await apiService.apiPOST("/parent", {});
  }
}

export default new ParentService();
