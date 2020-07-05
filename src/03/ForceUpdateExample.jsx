import React from "react";


class ForceUpdateExample extends React.Component {
    constructor(props) {
        super(props);
        // state 정의
        // 클래스 변수로 초깃값을 정의하였습니다.
        this.loading = true;
        this.formData = 'no data';
        // 이후 콜백 함수를 다룰 대 bind를 선언하는 부분에 대해 다룹니다.
        this.handleData = this.handleData.bind(this);
        // 4초 후에 handleData를 호출합니다.
        setTimeout(this.handleData, 4000);
    }

    handleData() {
        const data = 'new data';
        // state 변경
        // 내부 state를 변경하였습니다.
        this.loading = false;
        this.formData = data + this.formData;
        // 컴포넌트 내장 함수 forceUpdate()를 호출하여 강제로 화면을 새로고침합니다.
        this.forceUpdate();
    }

    render() {
        return(
            <div>
                {/* state 데이터는 this.state로 접근 가능합니다. */}
                <span>로딩중: {String(this.loading)}</span>
                <span>결과: {this.formData}</span>
            </div>
        );
    }
}


export default ForceUpdateExample;
