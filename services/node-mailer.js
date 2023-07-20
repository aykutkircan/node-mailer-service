import Mailer from "nodemailer";

export default class NodeMailer {
  constructor(config) {
    this.config = config;
    this.transporter = Mailer.createTransport(this.config.transport);
    this.messageConfig = { from: this.config.sender };
  }

  from(sender) {
    this.messageConfig.from = sender;
    return this;
  }

  to(receiver) {
    this.messageConfig.to = receiver;
    return this;
  }

  cc(recipients) {
    this.messageConfig.cc = recipients;
    return this;
  }

  bcc(recipients) {
    this.messageConfig.bcc = recipients;
    return this;
  }

  subject(subject) {
    this.messageConfig.subject = subject;
    return this;
  }

  text(plainText) {
    this.messageConfig.text = plainText;
    return this;
  }

  html(htmlContent) {
    this.messageConfig.html = htmlContent;
    return this;
  }

  attachments(attachmentsArray) {
    this.messageConfig.attachments = attachmentsArray;
    return this;
  }

  _resetConfig() {
    this.messageConfig = { from: this.config.sender };
  }

  send() {
    const messageConfig = { ...this.messageConfig };
    this._resetConfig();

    return this.transporter.sendMail(messageConfig);
  }
}
