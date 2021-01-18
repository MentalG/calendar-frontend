import queryString from "query-string";
import fetch from "node-fetch";
import { getToken } from "../utils/localstorage";

export default class ApiClient {
  constructor({ prefix = "api/v1", isServer = false } = {}) {
    this.prefix = prefix;
    this.token = null;
    this.isServer = isServer;
  }

  get(requestUrl, params) {
    return this.fetch({
      url: requestUrl,
      method: "GET",
      params,
    });
  }

  post(requestUrl, body = {}, params) {
    return this.fetch({
      url: requestUrl,
      method: "POST",
      body,
      params,
    });
  }

  delete(requestUrl, body = {}, params) {
    return this.fetch({
      url: `${requestUrl}`,
      method: "DELETE",
      body,
      params,
    });
  }

  patch(requestUrl, body = {}, params) {
    return this.fetch({
      url: `${requestUrl}`,
      method: "PATCH",
      body,
      params,
    });
  }

  async getToken() {
    if (!this.token) {
      this.token = (await getToken()) || "";
    }

    return this.token;
  }

  resetToken() {
    this.token = null;
  }

  async request(url, init) {
    const response = await fetch(url, init);

    return response;
  }

  async fetch({ url, method, params = {}, body }) {
    let token = "";
    if (!this.isServer) token = await this.getToken();
    const stringifyParams = Object.keys(params).length
      ? `?${queryString.stringify({ ...params })}`
      : "";
    const urlWithQuery = `${url}${stringifyParams}`;

    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
      // 'cache-control' : 'no-cache',
      Authorization: token,
    };

    const init = {
      method,
      credentials: "same-origin",
      headers,
    };

    if (method !== "GET" && method !== "HEAD") {
      init.body = JSON.stringify(body);
    }

    try {
      const response = await this.request(
        `${this.prefix}/${urlWithQuery}`,
        init
      );

      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }

      const data = await response.json();

      if (data) {
        return data;
      }

      throw data.Error;
    } catch (err) {
      console.warn("Unhandled exeption");
      console.warn(err);
      throw err;
    }
  }
}
