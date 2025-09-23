import { Component } from "react"
import { Shortcuts, ShortcutContext } from "../src/index.js"

class App extends Component {
    state = { show: true, who: "Root shortcuts component" }

    _handleShortcuts = (command) => {
        switch (command) {
            case "MOVE_LEFT":
                return this.setState({ who: "Hemingway - left" })
            case "DELETE":
                return this.setState({ who: "Hemingway - delete" })
            case "MOVE_RIGHT":
                return this.setState({ who: "Hemingway - right" })
            case "MOVE_UP":
                return this.setState({ who: "Hemingway - top" })
        }
    }

    _handleShortcuts2 = (command) => {
        switch (command) {
            case "MOVE_LEFT":
                return this.setState({ who: "Franz Kafka - left" })
            case "DELETE":
                return this.setState({ who: "Franz Kafka - delete" })
            case "MOVE_RIGHT":
                return this.setState({ who: "Franz Kafka - right" })
            case "MOVE_UP":
                return this.setState({ who: "Franz Kafka - top" })
        }
    }

    _rebind = (_e) => {
        this.setState({ show: false })
        setTimeout(() => this.setState({ show: true }), 100)
    }

    render() {
        if (!this.state.show) {
            return null
        }

        return (
            <ShortcutContext value={this.props.shortcuts}>
                <div className="root">
                    <h1 className="who">{this.state.who}</h1>
                    <button className="rebind" onClick={this._rebind}>
                        Rebind listeners
                    </button>
                    <Shortcuts
                        name="App"
                        handler={this._handleShortcuts}
                        targetNodeSelector="#app"
                        className="content">
                        <div>
                            <h1>Hemingway</h1>
                            <p>
                                Far far away, behind the word mountains, far from the countries
                                Vokalia and Consonantia, there live the blind texts. Separated they
                                live in Bookmarksgrove right at the coast of the Semantics, a large
                                language ocean. A small river named Duden flows by their place and
                                supplies it with the necessary regelialia.
                            </p>
                        </div>
                    </Shortcuts>
                    <Shortcuts
                        name="App"
                        handler={this._handleShortcuts2}
                        stopPropagation={true}
                        className="content">
                        <div>
                            <h1>Franz Kafka</h1>
                            <p>
                                One morning, when Gregor Samsa woke from troubled dreams, he found
                                himself transformed in his bed into a horrible vermin. He lay on his
                                armour-like back, and if he lifted his head a little he could see
                                his brown belly, slightly domed and divided by arches into stiff
                                sections.
                            </p>
                        </div>
                    </Shortcuts>
                </div>
            </ShortcutContext>
        )
    }
}

export default App
