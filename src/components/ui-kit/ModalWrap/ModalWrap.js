import React from 'react';
import { Modal } from 'antd';

const ModalWrap = (props) => {
    const { children, title, visible, handleOk, onCancel } = props;

  return (
    <Modal title={title} visible={visible} handleOk={handleOk} onCancel={onCancel}>
      {children}
    </Modal>
  );
};

export default ModalWrap;
