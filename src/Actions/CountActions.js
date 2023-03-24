// actions

export const ADD = "ADD"; //action creators

export const addOne = () => ({
    type : ADD
})

export const ADDSOME = "ADDSOME";

export const addSome = (val) => ({
    type: "ADDSOME",
    payload : val
})

export const SUB = "SUB";

export const SUBSOME = "SUBSOME";
 
export const subOne = () => ({
    type: "SUB"
})

export const subSome = (val) => ({
    type: "SUBSOME",
    payload: val
})

