/* eslint-disable @typescript-eslint/return-await */
/* eslint-disable class-methods-use-this */
import apiService from "../apiManager";

class AgentService {
  async addAgent(agent: any) {
    return await apiService.apiPOST("/agent/save", agent);
  }

  async getAllAgents() {
    return await apiService.apiPOST("/agent", {});
  }
}

export default new AgentService();
