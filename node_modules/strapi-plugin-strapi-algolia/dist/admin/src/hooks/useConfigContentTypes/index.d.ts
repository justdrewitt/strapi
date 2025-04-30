declare const useConfigContentTypes: (shouldFetchData?: boolean) => {
    contentTypes: string[];
    isLoading: boolean;
    getData: () => Promise<void>;
};
export default useConfigContentTypes;
