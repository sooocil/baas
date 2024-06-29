import React from 'react';
import { Button, Modal } from 'antd';

const PopupModal = ({ isOpen, isLoading, onReload, onClose, status }) => {
  return (
    <Modal
      title={<p>{isLoading ? 'Loading Modal' : 'Reservation Status'}</p>}
      open={isOpen} // Use open instead of visible
      onCancel={onClose}
      footer={
        isLoading ? null : (
          <Button type="primary" onClick={onReload}>
            Reload
          </Button>
        )
      }
    >
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <p>{status}</p>

        </>
      )}
    </Modal>
  );
};

export default PopupModal;
