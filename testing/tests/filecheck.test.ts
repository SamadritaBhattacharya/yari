import fs from "fs";

import { checkFile } from "../../filecheck/checker";

const SAMPLES_DIRECTORY = new URL(
  "filechecker/samplefiles-html/",
  import.meta.url
);

describe("checking files", () => {
  it("should spot SVGs with scripts inside them", async () => {
    const filePath = new URL("./script.svg", SAMPLES_DIRECTORY);
    // Sanity check the test itself
    console.assert(fs.existsSync(filePath), `${filePath} does not exist`);
    await expect(checkFile(filePath)).rejects.toThrow(
      / does not appear to be an SVG$/
    );
  });
  it("should spot SVGs with onLoad inside an element", async () => {
    const filePath = new URL("./onhandler.svg", SAMPLES_DIRECTORY);
    // Sanity check the test itself
    console.assert(fs.existsSync(filePath), `${filePath} does not exist`);
    await expect(checkFile(filePath)).rejects.toThrow(
      / does not appear to be an SVG$/
    );
  });

  it("should spot files that are not mentioned in source", async () => {
    const filePath = new URL("./orphan.png", SAMPLES_DIRECTORY);
    // Sanity check the test itself
    console.assert(fs.existsSync(filePath), `${filePath} does not exist`);
    await expect(checkFile(filePath)).rejects.toThrow("is not mentioned in");
  });

  it("should spot files that are not mentioned in md source", async () => {
    const filePath = new URL(
      "./filechecker/samplefiles-md/orphan.png",
      import.meta.url
    );
    // Sanity check the test itself
    console.assert(fs.existsSync(filePath), `${filePath} does not exist`);
    await expect(checkFile(filePath)).rejects.toThrow("is not mentioned in");
  });

  it("should spot files that are completely empty", async () => {
    const filePath = new URL("./zero.gif", SAMPLES_DIRECTORY);
    // Sanity check the test itself
    console.assert(fs.existsSync(filePath), `${filePath} does not exist`);
    await expect(checkFile(filePath)).rejects.toThrow("is 0 bytes");
  });

  it("should spot mismatch between file-type and file extension", async () => {
    const filePath = new URL("./png.jpeg", SAMPLES_DIRECTORY);
    // Sanity check the test itself
    console.assert(fs.existsSync(filePath), `${filePath} does not exist`);
    await expect(checkFile(filePath)).rejects.toThrow(
      "is type 'image/png' but named extension is '.jpeg'"
    );
  });
});
