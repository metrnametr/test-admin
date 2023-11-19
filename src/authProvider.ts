import { AuthProvider } from "react-admin";
import data from './mock.json'

export const authProvider: AuthProvider  = {
    login: ({ username, password }) => {
        const user = data.user.find(item => item.username === username && item.password === password)
        localStorage.setItem('token', JSON.stringify(user))
        return Promise.resolve();
    },
    logout: () => {
        localStorage.removeItem(("token"));
        return Promise.resolve();
    },
    checkError: ({status}) => {
        if(status === 401 || status === 403){
            localStorage.removeItem("token");
            return Promise.reject();
        }
        return Promise.resolve();
    },
    checkAuth: () => {
        return localStorage.getItem("token")
        ? Promise.resolve()
        : Promise.reject();
    },
    getPermissions: () => Promise.resolve(),
    getIdentity: () => {
        const user = JSON.parse(localStorage.getItem('token') ?? '');
        return Promise.resolve(user);
    }
}