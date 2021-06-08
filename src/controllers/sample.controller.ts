import { inject, service } from "@loopback/core";
import { get, post, response, RestBindings } from "@loopback/rest";
import { SampleService } from "../services";

export class SampleController {
  constructor(@service(SampleService) private sampleService: SampleService) {}

  @get("/pdf", {
    responses: {
      "200": {
        content: { "application/pdf": {} },
      },
    },
  })
  generate(@inject(RestBindings.Http.RESPONSE) res: any): any {
    return this.sampleService.printPDF().then((pdf) => {
      res.set({
        "Content-Type": "application/pdf",
        "Content-Length": pdf.length,
      }),
        res.send(pdf);
    });
  }
}
