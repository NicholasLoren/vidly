import Raven from "raven-js";

function init() {
  Raven.config(
    "https://893bdc920ce34d9db66ebe5e1a01d4ca@o1428767.ingest.sentry.io/6779182",
    {
      release: "1-0-0",
      environment: "development-test",
    }
  ).install();
}

function log(error) {
  Raven.captureException("Logging the error", error);
}

export default {
  init,
  log,
};
