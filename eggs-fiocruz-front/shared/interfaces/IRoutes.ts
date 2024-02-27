type Routes = {
    pathName: string,
    isPublic: boolean
};

export interface IRoutes {
    public: Routes[],
    private: Routes[]
}
