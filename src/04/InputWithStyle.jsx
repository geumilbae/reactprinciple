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
            // 머티리얼 css의 항목 스타일 input-field 를 추가하였습니다.
            <div className="input-field">
                <input
                    id={`input_%{name}`}
                    className={`validate ${errorMessage && 'invalid'}`}
                    ref={this.setRef}
                    type={type}
                    onChange={this.handleChange}
                    value={value}
                />
                {/* Label의 마우스 클릭 시 마우스 커서가 입력 항목으로 이동하도록 htmlFor를 추가하였습니다. */}
                <label className="active" for={`input_${name}`}>
                    {label}
                </label>
                {/* 머티리얼 css의 입력 설명 항목 스타일 helper-text를 추가하였습니다. */}
                {errorMessage && <span className="helper-text" data-error={errorMessage}>{errorMessage}</span>}
            </div>
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
