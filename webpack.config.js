// loader는 아래의 module과 rule을 통해서 폼을 정의한다.
// module: {
//     rules: [
//       {
//         test: '빌드할 파일 확장자 정규식'
//         exclude: '제외할 파일 정규식'
//         use: {
//           loader: '사용할 로더 이름'
//           option: '로더 옵션'
//         }
//       }
//     ]
//   }

const HtmlWebpackPlugin = require("html-webpack-plugin");
const port = 3000;

module.exports = {
  //현재 모드를 개발 환경으로 설정한다.
  mode: "development",
  // 웹팩에서 중요한 개념인 entry이다.
  entry: "./src/index.js",
  //번들된 파일을 저장할 경로를 설정 또한 hash는 애플리케이션 컴파일 될 때 웹팩에서 생선된 해쉬를 사용한다.
  output: {
    filename: "bundle.[hash].js",
  },
  module: {
    rules: [
      {
        // ex6와 관련있는 loader로 .js와 .jsx확장자도 같이 번들한다. node_modules 안에 있는 파일은 번들에서 제외한다.
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        // html loader로 minimize: true는 코드를 최적화 하는 옵션이다.
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              minimize: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      //html-webpack-plugin 는 html 관련 plugin 입니다. 템플릿을 지정하거나 favicon을 설정할 수 있다.
      template: "public/index.html",
      // template: `public/index.html`으로 public/index.html를 템플릿으로 지정한다.
    }),
  ],
  devServer: {
    host: "localhost",
    port: port,
    open: true,
  },
};

// loader는 아래의 module과 rule을 통해서 폼을 정의한다.
// module: {
//     rules: [
//       {
//         test: '빌드할 파일 확장자 정규식'
//         exclude: '제외할 파일 정규식'
//         use: {
//           loader: '사용할 로더 이름'
//           option: '로더 옵션'
//         }
//       }
//     ]
//   }
