import 'source-map-support/register';
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

export class AppDynamoDb {
  constructor() {
    this.documentClient = new DynamoDBClient();
    this.docClient = DynamoDBDocumentClient.from(this.documentClient);
  };

  async getItem(param) {
    return this.docClient.send(param);
  };

  async queryItems(param) {
    return this.docClient.send(param);
  };

  async createItem(param) {
    return this.docClient.send(param);
  };

  async updateItem(param) {
    return this.docClient.send(param);
  };

  async deleteItem(param) {
    return this.docClient.send(param);
  };
};
