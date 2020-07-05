import React from 'react';
// prop-types 라이브러리를 PropTypes라는 이름으로 임포트 했습니다.
import PropTypes from 'prop-types';


class PropsComponent extends React.Component {
    render() {
        // name 프로퍼티로 받은 문자열을 출력합니다.
        return (
            <div className="message-container">
                {this.props.name}
            </div>
        );
    }
}


// 자료형을 선언하는 예제
// PropsComponent 의 propTypes라는 특수 변수 (prop-types 라이브러리 임포트 이름 PropTypes와 다릅니다)를
// 사용하여 프로퍼티의 자료형을 정의했습니다.
// 프로퍼티의 자료형을 객체 형태로 지정하여 PropsComponent.propTypes에 저장했습니다.
PropsComponent.propTypes = {
    name: PropTypes.string,
};


export default PropsComponent;