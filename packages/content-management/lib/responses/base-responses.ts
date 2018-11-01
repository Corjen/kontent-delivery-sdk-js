export interface IContentManagementResponseDebug {
    response: any;
}

export interface IContentManagementResponse {
    data: any;
    rawData: any;
    debug: IContentManagementResponseDebug;
}

export abstract class BaseContentManagementResponse<TRawData extends any, TData extends any> implements IContentManagementResponse {

    constructor(
        public debug: IContentManagementResponseDebug,
        public rawData: TRawData,
        public data: TData
    ) { }
}
