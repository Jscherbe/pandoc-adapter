const logger = require("./index.js")({
  title: "Logger",
  enabled: true
});

const disabledLogger = require("./index.js")({
  title: "Disabled Logger",
  enabled: false
});

const quickArgs = [
  "Example logs (1)", 
  "Example logs (2)"
];
logger.log(...quickArgs);
disabledLogger.log(...quickArgs);
disabledLogger.required("This should always output");
disabledLogger.error("This should always output");
logger.warn("This is a warning");
logger.list("Fruit", [
  "Apple",
  "Orange",
  "bannana"
]);
logger.listOrdered("Fruit (ordered)", [
  "Apple",
  "Orange",
  "bannana"
]);
logger.memory(process, "memory test");


let functionLoggerCounter = 0;
const functionLogger = require("./index.js")({
  title: "Function Enabled Logger",
  enabled: () => functionLoggerCounter++
});
functionLogger.log("This SHOULD NOT BE VISIBLE");
functionLogger.log("This should be visible");