const path = require("path");
const cp = require("child_process");

const app = cp.spawn("node", [path.join(__dirname, "../built/local/tsc"), "--version"], {
  encoding: "utf-8"
});

app.stderr.on("data", (data) => {
  console.log("err",data.toString());
});

app.stdout.on("data", data => {
  console.log(data.toString());
});
