import { createContext, useContext, useState } from 'react';

export const ModalContext = createContext();

const useModal = () => {
  return useContext(ModalContext);
};

export const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState(null);

  const value = { modal, setModal };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

export default useModal;
