import React from 'react';
import {shallow} from 'enzyme';

import Input from '../../03/Input';


describe('<Input>', () => {
    it('renders without crashing', () => {
        expect(() => {
            shallow(<Input name="test_name"/>); // shallow() 함수 안에 Input 컴포넌트를 직접 넣었습니다.
        }).not.toThrow(); // jset의 toThrow() 함수를 사용하여 입력 컴포넌트가 출력되는 동안 오류가 발생하는지 검사하고,
        // 오류가 발생하지 않으면 테스트를 통과합니다.
    });
    describe('contains <input>', () => {
        it('renders one input', () => {
            // shallow() 함수는 컴포넌트를 출력한 후 컴포넌트를 검사할 수 있는 enzyme 객체를 반환합니다.
            // enzyme 객체는 find() 함수를 포함하고 있습니다.
            const wrapper = shallow(<Input name="test_name"/>);
            // find() 함수의 인자로 'input'을 전달하여 출력된 DOM에서 input 엘리먼트를 찾습니다.
            // toHaveLength() 함수로 반환된 엘리먼트의 개수를 검증합니다.
            expect(wrapper.find('input')).toHaveLength(1);
            expect(wrapper.find('label')).toHaveLength(1);
        });
    });
    it('assigns the prop value and type', () => {
        const expectedValue = '123';
        const wrapper = shallow(<Input name="test_name" value={expectedValue}/>);
        // prop() 함수를 사용하여 value의 프로퍼티값과 컴포넌트에 전달된 (expectedValue)을 검증합니다.
        expect(wrapper.find('input').prop('value')).toBe(expectedValue);
        // 객체 추출식을 사용해 필요한 프로퍼티 항목을 추출합니다.
        const {type, value} = wrapper.find('input').props();
        // props() 함수에서 추출한 value, type의 프로퍼티(에트리뷰트) 값을 검증합니다.
        // 1번에서 추출한 값과 같으며 겸증 표현법이 다릅니다.
        expect(value).toBe(expectedValue);
        expect(type).toBe('text');
    });
    it('renders errorMessage', () => {
        const wrapper = shallow(<Input name="test_name"/>);
        // error 스타일을 포함한 오류 메시지가 존재하는지 검사합니다.
        expect(wrapper.find('.error')).toHaveLength(0);
        const expectedErrorMessage = '옳지 못한 값이 입력되었습니다';
        // setProps() 함수로 errorMessage 프로퍼티의 값을 변경합니다.
        wrapper.setProps({errorMessage: expectedErrorMessage});
        expect(wrapper.find('span').prop('className')).toBe('error');
        // errorMessage 프로퍼티가 추가되었기 때문에 error 스타일을 포함한 오류 메시지 1개가 정상적으로 포함된 것을 확인.
        expect(wrapper.find('.error')).toHaveLength(1);
        // html() 함수를 사용하여 출력된 HTML에서 실제 오류 메시지가 정상적으로 출력되었는지 검증합니다.
        expect(wrapper.html()).toContain(expectedErrorMessage);
    });
    it('calls back onChange on input change', () => {
        // jest눈 감시 함수(fn())를 제공하여 생성된 함수의 호출을 감시하는 방법을 제공합니다.
        const changeStub = jest.fn();
        // 생성된 감시 함수를 입력 컴포넌트의 onChange 프로퍼티에 할당합니다.
        const wrapper = shallow(<Input name="test_name" onChange={changeStub}/>);
        // 이벤트 재현 시점을 기준으로 이벤트 실행 이전에는 콜백 함수가 호출되지 않은 상태를 expect() 함수의 호출 검증 메소드
        // toHaveBeenCalled()로 검증합니다.
        expect(changeStub).not.toHaveBeenCalled();
        const expectedTargetValue = 'updated input';
        // enzyme의 이벤트 재현 메소드를 사용하여 input값이 변경되는 이벤트(onChange)를 재현합니다.
        // 재현을 위해 실제 브라우저에서 전달할 값을 전달해야 합니다.
        // target.value에 값이 전달되므로 객체형으로 가상의 입력값을 전달했습니다.
        wrapper.find('input').simulate('change', {target: {
            value: expectedTargetValue
        }});
        // fn() 함수로 반환된 콜백 함수를 expect() 함수의 호출 검증 메소드(toHaveBeenCalledTimes,
        // toHaveBeenCalledWith)로 호출 횟수와 호출 인자들을 검사합니다.
        expect(changeStub).toHaveBeenCalledTimes(1);
        expect(changeStub).toHaveBeenCalledWith('test_name', expectedTargetValue);
    });
});