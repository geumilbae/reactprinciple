// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16.3';
import * as Aphrodite from 'aphrodite';
import * as AphroditeNoImportant from 'aphrodite/no-important';

// 아프로디테의 DOM 함수 호출 과정을 중지시힙니다.
Aphrodite.StyleSheetTestUtils.suppressStyleInjection();
AphroditeNoImportant.StyleSheetTestUtils.suppressStyleInjection();


configure({adapter: new Adapter()});

afterEach(() => {
    console.error.mockClear();  // console.error() 함수 객체에 spyOn() 함수로 추가된 가상의 감지 코드 제거.
});


beforeEach(() => {
    // 감시함수 spyOn()을 사용하여 console 객체의 error() 함수를 실제 기능 대신 mockImplementation에 정의된 함수가
    // 실행되도록 합니다.
    jest.spyOn(console, 'error').mockImplementation((e) => {
        // console.error() 함수를 실행할 때 전달된 인자로 오류를 발생하도록 합니다.
        throw new Error(e);
    });
});