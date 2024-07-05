import { useCallback, useState } from 'react';

function useCreateContext() {
  const [modals, setModals] = useState([]);
  const [openedModals, setOpenedModals] = useState({});
  const [modalProps, setModalProps] = useState({});

  const openModal = useCallback((modalName, props) => {
    setOpenedModals((prevState) => {
      return {
        ...prevState,
        [modalName]: true,
      };
    });
    setModalProps((prevState) => {
      return {
        ...prevState,
        [modalName]: props,
      };
    });
  }, []);

  const closeModal = useCallback((modalName) => {
    setOpenedModals((prevState) => {
      return {
        ...prevState,
        [modalName]: false,
      };
    });
  }, []);

  return {
    modals,
    setModals,
    openedModals,
    modalProps,
    openModal,
    closeModal,
  };
}

export default useCreateContext;
