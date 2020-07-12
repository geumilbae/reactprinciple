import React from "react";


class LifecycleExample extends React.Component {
    static getDerivedStateFromProps() {
        console.log('getDerivedStateFromProps 호출');
        return {};
    }

    constructor(props) {
        super(props);
        // getDerivedSateFromProps() 함수를 사용하므로
        // 경고 메시지를 건너뛰기 위해 state 초깃값을 설정합니다.
        this.state = {};
        console.log('constructor 호출');
    }

    componentDidMount() {
        console.log('componentDidMount 호출');
        this.setState({updated: true});
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate 호출');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount 호출');
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate 호출');
        return {};
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('shouldComponentUpdate 호출');
        return false;
    }

    render() {
        console.log('render 호출');
        return null;
    }
}


export default LifecycleExample;
