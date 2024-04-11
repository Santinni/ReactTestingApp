import {
  createContext,
  FC,
  PropsWithChildren,
  ReactNode,
  useContext,
  useMemo,
  useState,
} from "react";

import Modal from "./Modal";

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
  const [isOpen, setIsOpen] = useState(false);
  const value = useMemo(
    () => ({
      setModal: (modal: ReactNode) => setSelectedModal(modal),
      openModal: () => setIsOpen(true),
      closeModal: () => setIsOpen(false),
    }),
    []
  );

  return (
    <ModalContext.Provider value={value}>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        {selectedModal}
      </Modal>
      {children}
    </ModalContext.Provider>
  );
};

const useModalContext = (): ModalContextProps => useContext(ModalContext);

export { ModalContext, ModalContextProvider, useModalContext };
