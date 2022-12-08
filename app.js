const express = require("express");

const app = express();
const PORT = 3000;

var confiObj = {
  androidConfig: {
    appName: "appName",
    appId: "androidappid",
    buildNumber: "buildNumber",
    buildVersion: "buildVersion",
    logoIconUrl: "logoIconUrl",
    logoUrl: "logoUrl",
  },
  isoConfig: {
    appName: "appName",
    appId: "ISOappid",
    buildNumber: "buildNumber",
    buildVersion: "buildVersion",
    logoIconUrl: "logoIconUrl",
    logoUrl: "logoUrl",
  },
};

app.get("/", (req, res) => {
  res.status(200);
  res.send("Welcome to Config Api");
});

app.get("/fetchconfig", (req, res) => {
  res.status(200);
  res.send(confiObj);
});

app.listen(PORT, (error) => {
  if (!error)
    console.log(
      "Server is Successfully Running, and App is listening on port " + PORT
    );
  else console.log("Error occurred, server can't start", error);
});
