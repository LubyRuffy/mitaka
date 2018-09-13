import { Searcher } from "./searcher";

export class Sploitus implements Searcher {

  public endpoint: string;
  public name;
  public supportedTypes: string[] = ["cve"]

  constructor() {
    this.endpoint = "https://sploitus.com";
    this.name = "Splotious";
  }

  public searchByCVE(query) {
    return `${this.endpoint}/?query=${query}`;
  }
}
