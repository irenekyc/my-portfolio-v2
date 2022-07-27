import React, { FunctionComponent, ReactNode } from "react";
import Modal, { ModalProps } from "react-bootstrap/Modal";

interface IKModalProps extends ModalProps {
  children: ReactNode;
}

const IKModal: FunctionComponent<IKModalProps> = ({
  children,
  ...modalProps
}: IKModalProps) => {
  return <Modal {...modalProps}>{children}</Modal>;
};

export default IKModal;
