// 필요한 부분만 남겨서 간략하게 index.js를 작성하면...
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));


// App 컴포넌트를 사용하지 않고 index.js를 구현하는 것은 아래와 같이 비효율적입니다.
// var img = document.createElement('img');
// img.setAttribute('src', 'http://www.easyspub.co.kr/images/logo_footer.png');
// var divEl = document.createElement('div');
// divEl.innerText = '안녕하세요';
// var welcomeEl = document.createElement('div');
// welcomeEl.append(img);
// welcomeEl.append(divEl);
//
// var root = document.getElementById('root');
// root.append(welcomeEl);


// // 필수 리액트 구동 모듈들입니다.
// import React from 'react';
// import ReactDOM from 'react-dom';
//
// // 초기 화면을 구성하는 사용자 코드입니다.
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
//
// // 리액트 엔진이 화면을 출력하는 코드입니다.
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//     // id가 root인 엘리먼트에 컴포넌트를 출력합니다.
//   document.getElementById('root')
// );
//
// // 아래 부분은 서비스워커 구동 코드로 오프라인 모드로 작동하는 데 도움이 되는 모듈입니다.
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
