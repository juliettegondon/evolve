/* import React from 'react';

import {
  Modal
  withModal,
  propTypes as modalPropTypes
} from 'react-with-modal';

class Modal extends React.Component {
  static propTypes = {
    modalProps: React.PropTypes.shape({
      close: modalPropTypes.close,
      open: modalPropTypes.open
    })
  }

  render () {
    <div>
      <Modal {...this.props.modalProps}>
        <div>
          <button onClick={this.props.modalProps.close}>
            Close Modal
          </button>
        </div>
      </Modal>
      <button onClick={this.props.modalProps.open}>
        Open Modal
      </button>
    </div>
  }
}
export default withModal(Modal); */