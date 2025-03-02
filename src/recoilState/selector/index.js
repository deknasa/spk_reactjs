import { selector } from "recoil";

const { loginState } = require("recoilState/atom");

export const loginLabelState = selector({
    key: 'loginLabelState',
    get: ({get}) => {
        const loginEmail = get(loginState);

        return `${loginEmail}`;
    },
});