import webpack, { Configuration } from "webpack";
import WebpackDevServer from "webpack-dev-server";

function buildConfig(): Configuration {
  return {
    target: "web",
    devServer: {
      server: "http",
    },
  };
}

function createServer() {
  const compiler = webpack(config);
  return new WebpackDevServer(config.devServer, compiler);
}

export default createServer;
