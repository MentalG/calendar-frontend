import Base from './base';
export default class Auth extends Base {
    registration(body) {
        return this.apiClient.post('auth/create', body);
    }

    login(params) {
        return this.apiClient.get('auth/login', params);
    }
}
