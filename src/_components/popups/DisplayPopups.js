import PopupModal from "./PopupModal";
import QuickShopPopup from "./QuickShopPopup";
import ViewPopup from "./ViewPopup";

function DisplayPopups({
  data,
  openViewModal,
  openQuickShopModal,
  setOpenViewModal,
  setOpenQuickShopModal,
}) {
  const handleCloseViewModal = () => {
    document.body.classList.remove("open");
    setOpenViewModal(false);
  };
  const handleCloseQuickShopModal = () => {
    document.body.classList.remove("open");
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
