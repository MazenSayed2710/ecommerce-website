import PopupModal from "./PopupModal";
import QuickShopPopup from "./QuickShopPopup";
import ViewPopup from "./ViewPopup";
import { usePopupModal } from "@/_contexts/PopupModalProvider";
function DisplayPopups({
  data,
  openViewModal,
  openQuickShopModal,
  setOpenViewModal,
  setOpenQuickShopModal,
}) {
  const { setIsOpen } = usePopupModal();
  const handleCloseViewModal = () => {
    setIsOpen(false);
    setOpenViewModal(false);
  };
  const handleCloseQuickShopModal = () => {
    setIsOpen(false);
    setOpenQuickShopModal(false);
  };
  return (
    <div>
      {openViewModal && (
        <PopupModal>
          <ViewPopup product={data} handleClose={handleCloseViewModal} />
        </PopupModal>
      )}
      {openQuickShopModal && (
        <PopupModal>
          <QuickShopPopup
            product={data}
            handleClose={handleCloseQuickShopModal}
          />
        </PopupModal>
      )}
    </div>
  );
}

export default DisplayPopups;
