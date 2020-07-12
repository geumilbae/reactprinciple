import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
// css() 함수를 임포트하여 엘리먼트에 스타일을 적용합니다.
import withStyles, {css} from "./withStyles";


class Text extends PureComponent {
    render() {
        const {
            children,
            styles,
            large,
            xlarge,
            small,
            xsmall,
            primary,
            secondary,
        } = this.props;
        return (
            <span {...css(
                styles.default,
                xsmall && styles.xsmall,
                small && styles.small,
                large && styles.large,
                xlarge && styles.xlarge,
                secondary && styles.secondary,
                primary && styles.primary,
            )}>
                {/* css() 함수로 엘리먼트에 default 키에 정의된 스타일을 적용합니다. */}
                {/* css() 함수는 엘리먼트 속성값을 객체형으로 반환하므로 전개 연산자를 사용, span 엘리먼트에 스타일 적용. */}
                {children}
            </span>
        );
    }
}

Text.propTypes = {
    children: PropTypes.node.isRequired,
    xsmall: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    xlarge: PropTypes.bool,
    secondary: PropTypes.bool,
    primary: PropTypes.bool,
};

// 스타일 생성 함수를 호출하여 테마 파일에 등록된 값 {color, size}를 withStyles() 함수에 전달했습니다.
export default withStyles(({color, size}) => ({
    default: {
        color: color.default,
        // 스타일 속성을 스네이크 표기법(font-size)이 아닌 낙타 표기법으로 사용했습니다.
        fontSize: size.md,
    },
    xlarge : {
        fontSize: size.xg,
    },
    large : {
        fontSize: size.lg,
    },
    small : {
        fontSize: size.sm,
    },
    xsmall : {
        fontSize: size.xs,
    },
    primary : {
        color: color.primary,
    },
    secondary : {
        color: color.secondary,
    },
}))(Text);