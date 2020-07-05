import React from "react";
import PropTypes from 'prop-types';


class ChildComponent2 extends React.Component {
    render() {
        const {
            objValue,
            requiredStringValue,
        } = this.props;

        return (
            <div>
                <div>객체값: {String(Object.entries(objValue))}</div>
                <div>필수값: {requiredStringValue}</div>
            </div>
        );
    }
}


ChildComponent2.propTypes = {
    // 객체 프로퍼티
    // PropTypes.shape를 사용하여 객체 프로퍼티를 정의하면 객체 목록을 한눈에 확인할 수 있어 편리합니다.
    objValue: PropTypes.shape({
        name: PropTypes.string,
        age:PropTypes.number,
    }),
    // 필수 프로퍼티
    // PropTypes에 정의된 변수(string, object, bool, ...) 안의 특수 변수 isRequired를 이용하여
    // requiredStringValue를 필수 프로퍼티로 지정했습니다.
    requiredStringValue: PropTypes.string.isRequired,
}


export default ChildComponent2;
