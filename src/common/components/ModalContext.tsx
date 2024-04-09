import React, {createContext, FC, PropsWithChildren, ReactNode, useContext, useState} from 'react';
import {Modal} from "./Modal";

type ModalContextProps = Readonly<{
  setModal: (modal: ReactNode) => void;
  openModal: () => void;
  closeModal: () => void;
}>;

const ModalContext = createContext<ModalContextProps>({
  setModal: () => {},
  openModal: () => {},
  closeModal: () => {},
});

const ModalContextProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const [selectedModal, setSelectedModal] = useState<ReactNode>(null);
  const [isOpen, setIsOpen] = useState(false)

  return (
    <ModalContext.Provider
      value={{
        setModal: (modal) => setSelectedModal(modal),
        openModal: () => setIsOpen(true),
        closeModal: () => setIsOpen(false),
      }}
    >
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        {selectedModal}
      </Modal>
      {children}
    </ModalContext.Provider>
  );
};

const useModalContext = (): ModalContextProps => useContext(ModalContext);

export { ModalContext, ModalContextProvider, useModalContext };
