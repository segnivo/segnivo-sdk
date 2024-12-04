import { Segnivo } from "./index";

describe("segnivo-typescript-sdk", () => {
    it("initialize client", async () => {
        const segnivo = new Segnivo({
            apiKey: "API_KEY",
        });
    });
});
