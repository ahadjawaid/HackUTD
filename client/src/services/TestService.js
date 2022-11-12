import AuthService from "./AuthService";

const keys = require("../data/config");

class TestService {
  static async getUser() {
    const response = await fetch(`${keys.apiURL}/test`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${AuthService.accessToken}`,
      },
    });

    return response.json();
  }
}

export default TestService;