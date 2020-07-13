import React from "react";
import {shallow, mount} from 'enzyme';

import Text from '../../04/Text';


describe('<Text>', () => {
    it('renders without crashing', () => {
        expect(() => {
            shallow(<Text>테스트</Text>);  // shallow() 함수 안에 Text 컴포넌트를 직접 넣었습니다.
        }).not.toThrow();  // jset의 toThrow() 함수를 사용하여 입력 컴포넌트가 출력되는 동안 오류가 발생하는지 검사하고,
        // 오류가 발생하지 않으면 테스트를 통과합니다.
});
it('contains <span>', () => {
        expect(shallow(<Text>테스트</Text>).dive().find('span')).toHaveLength(1);
    });
});