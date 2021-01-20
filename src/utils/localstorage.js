import { TOKEN } from '../constans/storage';

export const getFromStorage = key => {
    let data = localStorage.getItem(key)
    return data
}

export const putInStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data))
}

export const updateStorage = (key, data) => {
    deleteFromStorage(key)
    putInStorage(key, data)
}

export const deleteFromStorage = async key => {
    await localStorage.setItem(key, null)
}

export const getToken = async () => {
    return getFromStorage(TOKEN) || null
}