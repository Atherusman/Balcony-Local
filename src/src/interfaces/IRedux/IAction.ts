export interface IAction<T = void> {
    type: string;
    payload?: T;
}
