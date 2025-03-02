const { atom } = require("recoil");

export const loginState = atom({
    key: "loginState",
    default: []
})

export const idKriteriaState = atom({
    key: "idKriteriaState",
    default: ""
})

// export const statusUserState = atom({
//     key: "statusUserState",
//     default: "admin"
// })