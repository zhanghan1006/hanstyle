import React from "react"
import { storiesOf } from "@storybook/react"

storiesOf('Welcome Page', module)
    .add('welcome', () => {
        return (
            <>
                <h1>欢迎来到 HanStyle 组件库</h1>
                <p>HanStyle 是为 React 打造的一款组件库</p>
                <h3>安装</h3>
                <code>
                    npm install hanstyle --save
                </code>
            </>
        )
    }, {
        info: {
            disable: true
        }
    })