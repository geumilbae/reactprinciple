import React from 'react';
import PropTypes from 'prop-types';


class ChildComponent extends React.Component {
    render() {
        const { // 객체 구조 분해 할당식을 사용하여 프로퍼티에 전달된 값들을 render() 함수 내의 지역 변수로 재정의
            boolValue,
            numValue,
            arrayValue,
            objValue,
            nodeValue,
            funcValue,
        } = this.props;

        return (
            <div>
                <span>boolean: {boolValue}</span>
                <span>number: {numValue}</span>
                <span>array: {arrayValue}</span>
                <span>object: {String(objValue)}</span>
                <span>node: {nodeValue}</span>
                <span>function: {String(funcValue)}</span>
            </div>
        );
    }
}


ChildComponent.propTypes = { // 객체 형태로 프로퍼티의 자료형을 정의
    boolValue: PropTypes.bool,
    numValue: PropTypes.number,
    arrayValue: PropTypes.arrayOf(PropTypes.number),
    objValue: PropTypes.object,
    nodeValue: PropTypes.node,
    funcValue: PropTypes.func,
}


export default  ChildComponent;

