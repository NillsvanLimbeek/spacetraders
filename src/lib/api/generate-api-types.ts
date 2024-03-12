import fs from "fs";
import openapiTS, { astToString } from "openapi-typescript";

const url =
  "https://stoplight.io/api/v1/projects/spacetraders/spacetraders/nodes/reference/SpaceTraders.json?fromExportButton=true&snapshotType=http_service&deref=optimizedBundle";

async function generate() {
  const ast = await openapiTS(new URL(url, import.meta.url));
  const contents = astToString(ast);

  fs.writeFileSync("./src/lib/api/api.d.ts", contents);
}

generate();
