const { createSlice } = require("@reduxjs/toolkit");

const popupSlice = createSlice({
  name: "popup",
  initialState: {
    isOpen: false,
  },
  reducers: {
    openPopup(state) {
      document.body.classList.add("open");
      state.isOpen = true;
    },
    closePopup(state) {
      document.body.classList.remove("open");
      state.isOpen = false;
    },
  },
});

export const { openPopup, closePopup } = popupSlice.actions;
export default popupSlice.reducer;
