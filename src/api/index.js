import ApiClient from './apiClient'
import Events from './events'
import Auth from './auth'

export default function apiClient ({ apiPrefix, isServer = false } = {}) {
    if (!apiPrefix) {
        throw new Error('[apiPrefix] required')
    }
    const api = new ApiClient({ prefix: apiPrefix, isServer })

    return {
        apiClient   : api,
        events      : new Events({ apiClient: api }),
        auth        : new Auth({ apiClient: api })
    }
}
