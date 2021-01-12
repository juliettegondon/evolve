/* import React from 'react';
import Modal from '../Modal';

export default (Modal) => {
    return class ModalWrapper extends React.Modal {
        constructor (props) {
            super(props);
            this.state = {
                isOpen: false
            };
        }

        close (evt) {
            if (evt)
                evt.preventDefault();

            this.setState({
                isOpen: false
            });
        }

        open (evt) {
            if (evt)
                evt.preventDefault();

            this.setState({
                isOpen: true
            });
        }

        render () {
            return (
                <Component
                    {...this.props}
                    modalProps={{
                        isOpen: this.state.isOpen,
                        close: this.close.bind(this),
                        open: this.open.bind(this)
                    }}
                />
            );
        }
    };
};

export const propTypes = {
    isOpen: React.PropTypes.bool.isRequired,
    close: React.PropTypes.func.isRequired,
    open: React.PropTypes.func.isRequired
}; */