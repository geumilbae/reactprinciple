// react-with-styles의 테마 관리자를 임포트합니다.
import ThemedStyleSheet from "react-with-styles/lib/ThemedStyleSheet";
// 서버 출력을 도와주는 아프로디테 라이브러리의 react-with-styles 버전을 임포트합니다.
import aphroditeInterface from "react-with-styles-interface-aphrodite";
// react-with-styles에서 사용하는 함수를 임포트합니다.
import {css, withStyles, withStylesPropTypes} from "react-with-styles";
import Theme from './Theme';

// 과정 2에서 제작한 테마 파일을 등록합니다.
ThemedStyleSheet.registerTheme(Theme);
// 아프로디테를 react-with-styles의 테마 관리자에 적용합니다.
ThemedStyleSheet.registerInterface(aphroditeInterface);

export {css, withStyles, withStylesPropTypes, ThemedStyleSheet};
export default withStyles;