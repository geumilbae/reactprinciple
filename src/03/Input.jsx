import React, {PureComponent} from "react";
import PropTypes from 'prop-types';


// 클래스형 컴포넌트의 PureCompoenet 형태로 작성하였습니다.
class Input extends PureComponent {
    constructor(props) {
        super(props);
        this.setRef = this.setRef.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        const {name, onChange} = this.props;
        if (onChange) {
            onChange(name, e.target.value);
        }
    }
    componentDidMount() {
        // autoFocus값이 true일 경우 출력 후 input 박스에 자동으로 커서를 배치합니다.
        if (this.props.autoFocus) {
            this.ref.focus();
        }
    }
    componentDidUpdate() {
        // autoFocus값이 true일 경우 출력 후 input 박스에 자동으로 커서를 배치합니다.
        if (this.props.autoFocus) {
            this.ref.focus();
        }
    }
    setRef(ref){
        this.ref = ref;
    }
    render() {
        const {errorMessage, label, name, value, type, onFocus} = this.props;
        return (
            <label>
                {/* label 안에 전달받은 label 값을 출력합니다. */}
                {label}
                {/* onChange={this.handleChange}: input값이 변경될 때 onChange 콜백 함수를 호출합니다. */}
                {/* onFocus={onFocus}: 프로퍼티로 전달받은 콜백 함수를 DOM 이벤트 프로퍼티에 연결하여
                        input에 마우스 커서가 포커스될 때 상위 컴포넌트의 콜백 함수를 호출합니다. */}
                <input
                    id={`input_${name}`}
                    ref={this.setRef}
                    onChange={this.handleChange}
                    onFocus={onFocus}
                    value={value}
                    type={type}
                />
                {/* errorMessage가 존재할 경우 출력합니다. */}
                {errorMessage && <sapn className="error">{errorMessage}</sapn>}
            </label>
        );
    }
}

Input.propTypes = {
    // 문자열형의 값 'text', 'number', 'price' 중 하나의 값만 가질 수 있습니다.
    type: PropTypes.oneOf(['text', 'number', 'price']),
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    errorMessage: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    autoFocus: PropTypes.bool,
};
Input.defaultProps = {
    onChange: () => {},
    onFocus: () => {},
    autoFocus: false,
    type: 'text', // type의 기본값은 'text' 입니다.
}

export default Input;