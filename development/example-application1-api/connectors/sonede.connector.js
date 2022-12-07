const logs = require("../logging/log-service");
const fetch = require("node-fetch-commonjs");
const error = require("../errors/custom-error.model");

exports.config = {
  name: "sonede",
  isActive: true,
  dynamicList: false,
  timeout: 10 * 1000,
};
// second new api commit
exports.billerList = [
  {
    code: "500",
    name: "SONEDE",
    connectorName : "sonede",
    isActive: true,
    url: "https://yesno.wtf/api",
    timeout: 10 * 1000,
    logo : "https://kkkk.gif"
  },
];

exports.callApi = async (connectorName) => {
  const connector = "[" + connectorName + "]";
  const url = "https://yesno.wtf/api";
  logs("[INFO]", connector, "Fetching Url:", url);

  const res = await fetch(url).catch((err) => {
    logs("[ERROR]", connector, err);
    throw new error(CONNECTOR_ERROR, err.name);
  });
  const data = await res.json().catch((err) => {
    logs("[ERROR]", connector, err);
    throw new error(CONNECTOR_ERROR, err.name);
  });
  logs("[INFO]", connector, "Response:", data);

  return data;
};
