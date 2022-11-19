import { execSync } from "node:child_process";
import webpack from "webpack";

const commitHash = execSync("git rev-parse --short HEAD").toString().trim();

const config = {
  entry: {
    bundle: new URL("./src/service-worker.ts", import.meta.url),
  },

  output: {
    filename: "service-worker.js",
    path: new URL("../public/", import.meta.url),
  },

  mode: "production",

  watchOptions: {
    ignored: /node_modules|dist|\.js/g,
  },

  plugins: [
    new webpack.DefinePlugin({
      __COMMIT_HASH__: JSON.stringify(commitHash),
    }),
  ],

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
    extensionAlias: {
      ".js": [".ts", ".js"],
    },
    plugins: [],
  },

  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: "ts-loader",
      },
    ],
  },
};

export default config;
