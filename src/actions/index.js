export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";

export const addFeature = feature => {
    return {
        type: ADD_ITEM,
        payload: feature
    };
};

export const removeFeature = feature => {
    console.log("remove called");
    return {
        type: REMOVE_ITEM,
        payload: feature
    };
};