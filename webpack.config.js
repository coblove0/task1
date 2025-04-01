const path = require('path');

module.exports = {
  entry: './src/index.ts', // Входной файл TypeScript
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Папка с файлами для сервера
    },
    compress: true,  // Включаем сжатие
    port: 9000,      // Порт для веб-сервера
    open: true,      // Открытие браузера при запуске сервера
    hot: true,       // Включение горячей перезагрузки
  },
};
