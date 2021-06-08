import { get, post, response } from "@loopback/rest";
import { InvoiceTemplate } from "../static-invoice-template";
const puppeteer = require("puppeteer");
// import {puppeteer} from 'puppeteer';

export class SampleController {
  constructor() {}

  @get("/pdf")
  async printPDF(): Promise<object> {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    const templates = new InvoiceTemplate();
    const htmlContent = templates.sampleEmailTemplate();

    // set html template as content
    await page.setContent(htmlContent);

    // page.pdf() is currently supported only in headless mode.
    // @see https://bugs.chromium.org/p/chromium/issues/detail?id=753118
    const pdf = await page.pdf({
      // path: "invoice.pdf",
      format: "A4",
    });

    await browser.close();

    return pdf;
  }
}
