/* eslint-disable @typescript-eslint/return-await */
/* eslint-disable class-methods-use-this */
import apiService from "../apiManager";

class MessageService {
  async getAllSpecialRequests() {
    return await apiService.apiPOST("/api/v1/specialreq", {});
  }
}

export default new MessageService();
