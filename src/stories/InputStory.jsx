import React from 'react';
// 스토리를 스토리북 도구에 추가해 주는 storiesOf() 함수를 임포트했습니다.
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';

// Input 컴포넌트를 임포트 했습니다.
import Input from "../03/Input";


// 스토리북 도구에 표시할 스토리의 이름을 입력하고, 메뉴 이름을 입력하였습니다.
storiesOf('Input', module)
    .addWithJSX('기본 설정', () => <Input name={"name"} />)
    .addWithJSX('label 예제', () => <Input name={"name"} label={"이름"} />)
    .addWithJSX('onChange 예제', () => <Input name={"name"}
                                     onChange={action('onChange 이벤트 발생')}/>);