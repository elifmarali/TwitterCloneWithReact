import React, { useEffect } from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { modal } from "~/routes/modal";
import { log, modalCloseFunc, resetModalInfo } from "~/store/modal";

function CustomModal() {
  const dispatch = useDispatch();
  let isModal = useSelector((state) => state.modal.modal);
  const modalName = useSelector((state) => state.modal.modalName);
  const element = modal.find((item) => item.name === modalName);

  useEffect(() => {
    dispatch(log());
  });

  let width;
  let styleFeatures = {};
  if (modalName === "appearanceModal") {
    width = "500px";
    styleFeatures = {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    };
  } else {
    width = "320px";
  }

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "var(--background-primary)",
      padding: "32px",
      maxWidth: "600px",
      borderRadius: "16px",
      width: width,
      ...styleFeatures
    },
  };

  return (
    <Modal
      isOpen={isModal}
      onRequestClose={() => {
        dispatch(modalCloseFunc());
        dispatch(resetModalInfo());
      }}
      style={customStyles}
    >
      {element && <element.element></element.element>}
    </Modal>
  );
}

export default CustomModal;
