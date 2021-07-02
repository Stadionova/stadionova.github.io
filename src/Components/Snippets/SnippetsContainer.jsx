import React from "react";
import { setOpenedBookIsbn } from "../../store";
import { connect } from "react-redux";
import Snippets from "../Snippets/Snippets";

const mapStateToProps = function () {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUrlPrefixDispacth: (book) => {
            dispatch(setOpenedBookIsbn(book));
        }
    }
}

class SnippetsContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    addDefaultSrc(event) {
        event.target.src = 'https://klike.net/uploads/posts/2020-04/1587719791_1.jpg';
    }
    render() {
        let flag;
        if (this.props.value && this.props.value.isResponseGot && this.props.data === undefined) {
            flag = 'show';
        } else {
            flag = 'hide';
        }
        return (
            <Snippets
                flag={flag}
                addDefaultSrc={this.addDefaultSrc}
                setUrlPrefixDispacth={this.props.setUrlPrefixDispacth}
                data={this.props.data}
                buttonRef={this.props.buttonRef}
                value={this.props.value}
            />
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SnippetsContainer);
