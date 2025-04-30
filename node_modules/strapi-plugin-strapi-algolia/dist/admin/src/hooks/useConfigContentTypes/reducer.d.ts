export type State = {
    contentTypes: string[];
    isLoading: boolean;
};
export declare enum Actions {
    GET_DATA = "GET_DATA",
    GET_DATA_SUCCEEDED = "GET_DATA_SUCCEEDED",
    GET_DATA_ERROR = "GET_DATA_ERROR"
}
export declare const initialState: State;
declare const reducer: (state: State, action: {
    type: string;
    data?: any;
}) => State;
export default reducer;
