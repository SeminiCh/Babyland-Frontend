/* eslint-disable @typescript-eslint/return-await */
/* eslint-disable class-methods-use-this */
import apiService from "../apiManager";

class NannyService {
  async addNanny(nanny: any) {
    return await apiService.apiPOST("/nanny/save", nanny);
  }

  async getAllNannies() {
    return await apiService.apiPOST("/nanny", {});
  }
}

export default new NannyService();
