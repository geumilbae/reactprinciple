import React from "react";
import {storiesOf} from "@storybook/react";


import Button from "../04/Button";


storiesOf('Button', module)
    .addWithJSX('base', () => <Button>Post</Button>)
    .addWithJSX('large', () => <Button large>Post</Button>)
    .addWithJSX('xlarge', () => <Button xlarge>Post</Button>)
    .addWithJSX('small', () => <Button small>Post</Button>)
    .addWithJSX('xsmall', () => <Button xsmall>Post</Button>)
    .addWithJSX('primary', () => <Button primary>Post</Button>)
    .addWithJSX('secondary', () => <Button secondary>Post</Button>)
    .addWithJSX('primary and large', () => <Button primary large>Post</Button>);
