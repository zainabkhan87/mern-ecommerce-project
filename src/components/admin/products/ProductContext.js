export const productState = {
  products: null,
  addProductModal: false,
  editProductModal: {
    modal: false,
    pId: "",
    pName: "",
    pDescription: "",
    pImages: "", // Change from array to a string for single image
    pStatus: "",
    pCategory: "",
    pQuantity: "",
    pPrice: "",
    pOffer: 0, // optional: default to 0
  },
};

export const productReducer = (state, action) => {
  switch (action.type) {
    // Fetch all products
    case "fetchProductsAndChangeState":
      return {
        ...state,
        products: action.payload,
      };

    // Open add product modal
    case "addProductModal":
      return {
        ...state,
        addProductModal: action.payload,
      };

    // Open edit product modal with product details
    case "editProductModalOpen":
      return {
        ...state,
        editProductModal: {
          modal: true,
          pId: action.product.pId,
          pName: action.product.pName,
          pDescription: action.product.pDescription,
          pImages: action.product.pImages || "", // Now it's a string, not an array
          pStatus: action.product.pStatus,
          pCategory: action.product.pCategory,
          pQuantity: action.product.pQuantity,
          pPrice: action.product.pPrice,
          pOffer: action.product.pOffer || 0,
        },
      };

    // Close edit product modal
    case "editProductModalClose":
      return {
        ...state,
        editProductModal: {
          modal: false,
          pId: "",
          pName: "",
          pDescription: "",
          pImages: "", // Empty string for no image
          pStatus: "",
          pCategory: "",
          pQuantity: "",
          pPrice: "",
          pOffer: 0,
        },
      };

    default:
      return state;
  }
};
