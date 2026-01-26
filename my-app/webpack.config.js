// module.exports - это аналог export'ов для NodeJS.
// Эта конструкция похожа на export default.

const HtmlWebpackPlugin = require("html-webpack-plugin");
//const FileManagerPlugin = require("filemanager-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/ts/index.ts", // Точка входа вашего приложения
  output: {
    filename: "index.[contenthash].js", // Имя JS бандла
    path: path.resolve(__dirname, "dist"), // Папка для сборки
    clean: true, // Очистка папки dist (Webpack 5+)
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // Путь к вашему исходному HTML
      filename: "index.html", // Имя генерируемого файла в dist
      // Другие опции для минификации, кэширования и т.д.
    }),
    // Если используете старые версии Webpack или хотите больше контроля над файлами:
    // new FileManagerPlugin({
    //   events: {
    //     onStart: {
    //       delete: ['dist'], // Удаляет папку dist перед сборкой
    //     },
    //   },
    // }),
  ],
  // ... другие настройки (loaders, devServer)
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
      directory: "./src",
    },
  },
};





// // module.exports - это аналог export'ов для NodeJS.
// // Эта конструкция похожа на export default.

// module.exports = {
//   mode: "production",
//   // В поле entry размещается путь до js-файла, который будет точкой входа
//   // для приложения (от англ. entry, переводится как "вход")
//   entry: "./src/ts/index.ts",
//   // В поле output размещаются настройки того, что будет в результате в
//   // сборке (от англ. output, что можно перевести как "выход")
//   output: {
//     // Название файла. В простейшей конфигурации весь
//     // код, как приложения, так и пакетов, попадёт именно сюда
//     filename: "main.js",
//   },

//   module: {
//     rules: [
//       {
//         test: /\.(ttf|otf|woff2?)/i,
//         type: "asset/resource",
//       },
//       {
//         test: /\.(png|svg|jpg|jpeg|gif)$/i,
//         type: "asset/resource",
//       },
//       {
//         test: /\.scss$/i,
//         use: ["style-loader", "css-loader", "sass-loader"],
//       },
//       {
//         test: /\.tsx?$/,
//         use: "ts-loader",
//         exclude: /node_modules/,
//       },
//     ],
//   },
//   resolve: {
//     extensions: [".tsx", ".ts", ".js"],
//   },
//     devServer: {
//     static: {
//       directory: './src',
//     },
  
//   },
// };
