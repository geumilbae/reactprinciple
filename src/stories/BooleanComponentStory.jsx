import React from "react";
import {storiesOf} from "@storybook/react";


import BooleanComponent from "../03/BooleanComponent";

storiesOf('BoolieanComponent', module)
    .add('기본 설정', () => <BooleanComponent/>)
    .add('bored 설정', () => <BooleanComponent bored />);
