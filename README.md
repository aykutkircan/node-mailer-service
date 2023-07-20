## Config

Kök dizindeki config klasörü içindeki _default.json_ dosyası gmail mail servisine göre doldurulur.

## Initialize
``` js

// import
import MailService from "./index.js";

// options
const mailServiceConfig = {
  transport: {
    service: config.get("mail.transport.service"),
    auth: {
      user: config.get("mail.transport.auth.user"),
      pass: config.get("mail.transport.auth.pass"),
    },
  },
  sender: config.get("mail.sender"),
};

//initialize
const mailService = new MailService(mailServiceConfig);

```

## Usage

``` js
const viewConfig = {
  title: "title",
};

const content = mailServices.renderHtml(
  "view/email/reset-password.html",
  viewConfig
);

mailServices.nodeMailer
  .to("recipient@example.com")
  .cc(["cc1@example.com", "cc2@example.com"])
  .bcc(["bcc1@example.com", "bcc2@example.com"])
  .subject("Test Mail")
  .text("This is a plain text content")
  .html("<p>This is an HTML content</p>")
  .attachments([
    { filename: "document.pdf", path: "/path/to/document.pdf" },
    // Diğer ekler buraya eklenebilir
  ]);
```
