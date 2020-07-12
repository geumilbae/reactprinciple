import {configure, setAddon} from "@storybook/react";
import interopRequireDefault from 'babel-runtime/helpers/interopRequireDefault';
import JSXAddon from 'storybook-addon-jsx';

import '../src/sass/materialize.scss';

function loadStories() {
    // require.context() 함수로 src/stories 폴더의 스토리 목록을 가져옵니다.
    const context = require.context('../src/stories', true, /Story\.jsx$/);
    context.keys().forEach((srcFile) => {
        // require.context(...)로 받아낸 context() 함수는 require() 함수와 동일한 기능을 하며,
        // 가변 경료를 사용할 때 사용합니다.
        // interopRequireDefault(context(srcFile))는 context() 함수로 임포트한 파일 중
        // default 항목을 임포트합니다.
        interopRequireDefault(context(srcFile));
    });
}

setAddon(JSXAddon);
configure(loadStories, module);