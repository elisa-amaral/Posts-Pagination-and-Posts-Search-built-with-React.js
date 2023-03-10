import './styles.css'

import { Component } from "react"

export class Button extends Component {
    render() {
        const { text, whenClick, disabled } = this.props

        return (
            <button
                className="button"
                onClick={whenClick}
                disabled={disabled}
            >
                {text}
            </button>
        )
    }
}