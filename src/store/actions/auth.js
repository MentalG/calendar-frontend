import { createAction } from '@reduxjs/toolkit';
// import { putInStorage, updateStorage } from '../../utils/localstorage';
// import { TOKEN } from '../../constans/storage'
// import api from '../../api-singleton';

export const registrationRequest = createAction('R:create/post')
export const registrationSuccess = createAction('S:create/post')
export const registrationFailure = createAction('F:create/post')
export const loginRequest = createAction('R:login/get')
export const loginSuccess = createAction('S:login/get')
export const loginFailure = createAction('F:login/get')
export const logoutSuccess = createAction('S:logout/get')

export function registration(user) {
    return async (dispatch) => {
        try {
            console.log('registration');
            // dispatch(registrationRequest);
            // const response = await api.auth.registration(user);

            // switch (response.type) {
            //     case 'success':
            //     dispatch(registrationSuccess(response));
            //     putInStorage(TOKEN, response.token)
            //     break;

            //     case 'error':
            //     dispatch(registrationFailure(response));
            //     updateStorage(TOKEN, response.token)
            //     break;

            //     default:
            //     console.log('default');
            // }
        } catch (error) {
            console.log(error);
        }
    }
}

export function login(user) {
    return async (dispatch) => {
        try {
            console.log('login');
            // dispatch(loginRequest);
            // const response = await api.auth.login(user);

            // switch (response.type) {
            //     case 'success':
            //     dispatch(loginSuccess(response));
            //     putInStorage(TOKEN, response.token)
            //     break;

            //     case 'error':
            //     dispatch(loginFailure(response));
            //     updateStorage(TOKEN, response.token)
            //     break;

            //     default:
            //     console.log('default');
            // }
        } catch (error) {
            console.log(error);
        }
    }
}

export function logout() {
    return async (dispatch) => {
        try {
            console.log('logout');
            // localStorage.removeItem(TOKEN)
            // window.location.reload();
            // dispatch(logoutSuccess())
        } catch (error) {
            console.log(error);
        }
    }
}