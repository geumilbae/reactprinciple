import React from "react";


export default class ScrollSpy extends React.PureComponent {
    constructor(props) {
        super(props);
        this.setRef = this.setRef.bind(this);
        this.checkPosition = this.checkPosition.bind(this);
        // 윈도우의 스크롤 이동 이벤트를 감지하여 checkPosition() 함수가 실행되도록 하였습니다.
        window.addEventListener('scroll', this.checkPosition);
    }

    setRef(ref) {
        // ref 프로퍼티에서 반환된 객체를 컴포넌트 변수에 할당하였습니다.
        this.ref = ref;
    }

    checkPosition() {
        // 현재 DOM 객체의 위치가 스크롤 화면 안팎인지 측정하고 있습니다.
        if (this.ref.getBoundingClientRect().top < window.innerHeight) {
            console.log('enter');
        } else {
            console.log('exit');
        }
    }

    componentDidMount() {
        this.checkPosition();
    }

    componentWillUnmount() {
        // 컴포넌트가 소멸할 때 화면 스크롤 감시 함수를 메모리에서 제거하였습니다.
        window.removeEventListener('scroll', this.checkPosition);
    }

    render() {
        return <div ref={this.setRef}/>
    }
}