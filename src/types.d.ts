export interface User {
    id: string,
    login: string,
    password: string,
    age: string,
    isDeleted: boolean,
}

export interface SavedUSer extends User {
    id: string
}