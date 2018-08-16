import { IBaseResponse } from 'kentico-cloud-core';

export class FakeResponseFactory {

    getFakeSuccessResponse(json: any): IBaseResponse {
        const fakeResponse: any = {};

        fakeResponse.response = json;
        fakeResponse.status = 200;
        fakeResponse.originalEvent = {};
        fakeResponse.xhr = {};
        fakeResponse.request = {};

        return {
            data: json,
            response: fakeResponse
        };
    }
}

export const fakeResponseFactory = new FakeResponseFactory();



