import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import withStyles, {css} from "./withStyles";


class Button extends PureComponent {
    render() {
        const {
            children,
            disabled,
            styles,
            large,
            xlarge,
            small,
            xsmall,
            primary,
            secondary,
            onPress,
        } = this.props;
        return (
            // 버튼 엘리먼트를 클릭하면 onPress 함수를 호출
            <button
                {...css(
                    styles.default,
                    xsmall && styles.xsmall,
                    small && styles.small,
                    large && styles.large,
                    xlarge && styles.xlarge,
                    secondary && styles.secondary,
                    primary && styles.primary,
                )}
                onClick={onPress}
            >
                {children}
            </button>
        );
    }
}

// onPress 프로퍼티는 함수 타입으로, 기본값으로 빈 실행 함수를 전달하여 프로퍼티가 선언되지 않아도 엘리먼트의 이벤트에서
// 콜백 함수를 실행할 때 undefined 오류가 발생하는 것을 방지합니다.
Button.propTypes = {
    children: PropTypes.node.isRequired,
    xsmall: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    xlarge: PropTypes.bool,
    secondary: PropTypes.bool,
    primary: PropTypes.bool,
    onPress: PropTypes.func,
};
Button.defaultProps = {
    onPress: () => {},
    xsmall: false,
    small: false,
    large: false,
    xlarge: false,
    secondary: false,
    primary: false,
};

export default withStyles(({color, size, unit, responsive}) => ({
    default: {
        // 버튼의 기본 모양을 구성합니다. 전체 테두리 두께는 1px 이며, 2px의 둥근 테두리 모양입니다.
        // 패딩 크기는 unit * 2 입니다.
        border: 1,
        borderStyle: 'solid',
        borderColor: color.default,
        borderRadius: 2,
        color: color.default,
        fontSize: size.md,
        padding: unit * 2,
        cursor: 'pointer',
        [responsive.small]: {
            width: '100%',
        },
    },
    xlarge : {
        fontSize: size.xg,
    },
    large : {
        fontSize: size.lg,
    },
    small : {
        fontSize: size.sm,
        // small, xsmall 버튼의 경우 unit * 1 크기의 패딩으로 조정합니다.
        padding: unit,
    },
    xsmall : {
        fontSize: size.xs,
        padding: unit,
    },
    primary : {
        color: color.primary,
    },
    secondary : {
        color: color.secondary,
    },
}))(Button);
