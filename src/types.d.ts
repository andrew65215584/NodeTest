export interface User {
    login: string,
    password: string,
    age: string,
    isDeleted: boolean,
}

export type SavedUser = Optional<User, 'id'>;
