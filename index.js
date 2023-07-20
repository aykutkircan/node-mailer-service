import NodeMailer from "./services/node-mailer.js";
import path from "node:path";
import handlebars from "handlebars";
import fs from "node:fs";
import url from "node:url";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default class MailService {
  constructor(config) {
    this.config = config;
    this.nodeMailer = new NodeMailer(this.config);
  }

  renderHtml(filePath, viewConfig) {
    const emailTemplatePath = path.join(__dirname, filePath);
    const content = fs.readFileSync(emailTemplatePath, "utf8");
    const template = handlebars.compile(content);
    return template(viewConfig);
  }
}
