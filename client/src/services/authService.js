import * as request from "../lib/requester";

const AUTH_FORM_KEYS = {
    register: 'users/register',
    login: 'users/login',
    logout: 'users/logout',
}

export const register = async (data) => {
    // TODO: check if password matches confirm password
    const result = await request.post(AUTH_FORM_KEYS.register, data);

    console.log(result);
    return result;
}