const  logs  = require("../logging/log-service");
const connectors = require("../connectors");
// commit 2 day2-api-fixes
exports.callConnector = async (connectorName) => {
  logs("[INFO]", "Invoking connector:", connectorName);
  const data = await connectors.callApi(connectorName);
  return data;
};

exports.getConnectors = async () => {
  logs("[INFO]", "Getting connectors");
  const data = await connectors.getConnectors();
  return data;
};

exports.getConnector = async (connectorName) => {
  logs("[INFO]", "Getting connector:", connectorName);
  const data = await connectors.getConnector(connectorName);
  return data;
};
