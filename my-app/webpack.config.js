// module.exports - это аналог export'ов для NodeJS.
// Эта конструкция похожа на export default.

module.exports = {
  mode: "production",
  // В поле entry размещается путь до js-файла, который будет точкой входа
  // для приложения (от англ. entry, переводится как "вход")
  entry: "./src/ts/index.ts",
  // В поле output размещаются настройки того, что будет в результате в
  // сборке (от англ. output, что можно перевести как "выход")
  output: {
    // Название файла. В простейшей конфигурации весь
    // код, как приложения, так и пакетов, попадёт именно сюда
    filename: "main.js",
  },

  module: {
    rules: [
      {
        test: /\.(ttf|otf|woff2?)/i,
        type: "asset/resource",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.scss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
    devServer: {
    static: {
      directory: './src',
    },
  
  },
};
