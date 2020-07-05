import React from "react";


class StateExample extends React.Component {
    constructor(props) {
        super(props);
        // state 정의
        // 컴포넌트에서 관리하려는 변수 state 초깃값을 this.state에 객체 형태로 정의했습니다.
        this.state = {
            loading: true,
            formData: 'no data',
        };
        // 이후 콜백 함수를 다룰 때 bind(this)에 대해 자세히 이야기할 것입니다.
        // 함수로 넘어갈 this는 반드시 생성자에서 bind() 함수로 묶어주어야 합니다.
        // 자세한 내용은 03-9에서 다룰 예정입니다.
        this.handleData = this.handleData.bind(this);
        // 4초 후에 handleData 함수를 호출합니다.
        setTimeout(this.handleData, 4000);
    }

    handleData() {
        const data = 'new data';
        // 컴포넌트 특수 변수 this.state를 사용하여 state값에 접근합니다.
        const {formData} = this.state;
        // state 변경
        // 컴포넌트의 내장 함수 this.setState()를 사용하여 state값을 변경합니다.
        this.setState({
            loading: false,
            formData: data + formData,
        });
        // this.state.loading은 현재 true입니다.
        console.log('loading값', this.state.loading);
        // 이후 호출될 render() 함수에서의 this.state.loading은 false입니다.
    }

    render() {
        return (
            <div>
                {/* state 데이터는 this.sate로 접근 가능합니다. */}
                <span>로딩중: {String(this.state.loading)}</span>
                <span>결과: {this.state.formData}</span>
            </div>
        );
    }
}


export default StateExample

/*
state를 사용할 때 주의할 점
1. 생성자(constructor)에서 반드시 초기화해야 합니다.
2. state값을 변경할 때는 setState() 함수(상태 관리 함수)를 반드시 사용해야 합니다.
3. setState() 함수는 비동기로 처리되며, setState() 코드 이후로 연결된 함수들의 실행이 완료된 시점에 화면 동기화 과정을
   거칩니다.
 */
