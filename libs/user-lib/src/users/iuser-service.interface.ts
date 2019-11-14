import { IUser } from "./iuser.interface";

export interface IUserService {

    findAllUsers(): Promise<IUser[]>;
    findUserById(id): Promise<IUser | null>;
    findOneUser(options: object): Promise<IUser | null>;
    createUser(user: IUser): Promise<IUser>;
    updateUser(id, newValue: IUser): Promise<IUser | null>;
    deleteUser(id): Promise<string>;
}