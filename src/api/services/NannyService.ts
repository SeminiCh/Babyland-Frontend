/* eslint-disable @typescript-eslint/return-await */
/* eslint-disable class-methods-use-this */
import apiService from "../apiManager";

class NannyService {
  async addNanny(nannyInfo: any) {
    return await apiService.apiPOST("/nanny/save", nannyInfo);
  }

  async getAllNannies() {
    return await apiService.apiPOST("/nanny", {});
  }

  async getNannyByNic(nannyNic: string) {
    return await apiService.apiGET(`/nanny/${nannyNic}`);
  }
}

export default new NannyService();
