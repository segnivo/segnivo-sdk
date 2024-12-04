/* tslint:disable */
/* eslint-disable */
/*
Segnivo Developer API

**API Version**: 1.7

**Date**: 9th July, 2024

## 📄 Getting Started

This API is based on the REST API architecture, allowing the user to easily manage their data with this resource-based approach.

Every API call is established on which specific request type (GET, POST, PUT, DELETE) will be used.

The API must not be abused and should be used within acceptable limits.

To start using this API, you will need not create or access an existing Segnivo account to obtain your API key ([retrievable from your account settings](https://messaging.segnivo.com/account/api)).

- You must use a valid API Key to send requests to the API endpoints.
    
- The API only responds to HTTPS-secured communications. Any requests sent via HTTP return an HTTP 301 redirect to the corresponding HTTPS resources.
    
- The API returns request responses in JSON format. When an API request returns an error, it is sent in the JSON response as an error key or with details in the message key.
    

### 🔖 **Need some help?**

In case you have questions or need clarity with interacting with some endpoints feel free to create a support ticket on your account or you can send an email ([<i>developers@segnivo.com</i>](https://mailto:developers@segnivo.com)) directly and we would be happy to help.

---

## Authentication

As noted earlier, this API uses API keys for authentication. You can generate a Segnivo API key in the [API](https://messaging.segnivo.com/account/api) section of your account settings.

You must include an API key in each request to this API with the `X-API-KEY` request header.

### Authentication error response

If an API key is missing, malformed, or invalid, you will receive an HTTP 401 Unauthorized response code.

## Rate and usage limits

API access rate limits apply on a per-API endpoint basis in unit time. The limit is 10k requests per hour for most endpoints and 1m requests per hour for transactional/relay email-sending endpoints. Also, depending on your plan, you may have usage limits. If you exceed either limit, your request will return an HTTP 429 Too Many Requests status code or HTTP 403 if sending credits have been exhausted.

### 503 response

An HTTP `503` response from our servers may indicate there is an unexpected spike in API access traffic, while this rarely happens, we ensure the server is usually operational within the next two to five minutes. If the outage persists or you receive any other form of an HTTP `5XX` error, contact support ([<i>developers@segnivo.com</i>](https://mailto:developers@segnivo.com)).

### Request headers

To make a successful request, some or all of the following headers must be passed with the request.

| **Header** | **Description** |
| --- | --- |
| Content-Type | Required and should be `application/json` in most cases. |
| Accept | Required and should be `application/json` in most cases |
| Content-Length | Required for `POST`, `PATCH`, and `PUT` requests containing a request body. The value must be the number of bytes rather than the number of characters in the request body. |
| X-API-KEY | Required. Specifies the API key used for authorization. |

##### 🔖 Note with example requests and code snippets

If/when you use the code snippets used as example requests, remember to calculate and add the `Content-Length` header. Some request libraries, frameworks, and tools automatically add this header for you while a few do not. Kindly check and ensure yours does or add it yourself.

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
import { fromBuffer } from "file-type/browser"
const FormData = require("form-data")
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * MailingListsApi - axios parameter creator
 * @export
 */
export const MailingListsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns all your existing lists
         * @summary Get mailing lists
         * @param {string} [accept] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listsGet: async (accept?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/lists`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyAuth required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "X-API-KEY", keyParamName: "apiKeyAuth", configuration })
            if (accept != null) {
                localVarHeaderParameter['Accept'] = String(accept);
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/lists',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Create a new mailing list
         * @summary Create a Mailing List
         * @param {string} [contentType] 
         * @param {string} [accept] 
         * @param {object} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listsPost: async (contentType?: string, accept?: string, body?: object, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/lists`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyAuth required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "X-API-KEY", keyParamName: "apiKeyAuth", configuration })
            if (contentType != null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            if (accept != null) {
                localVarHeaderParameter['Accept'] = String(accept);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: body,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/lists',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Add a field to an existing list
         * @summary Add a field
         * @param {string} uid (Required) The uid of the list to add a field to.
         * @param {string} [contentType] 
         * @param {string} [accept] 
         * @param {object} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listsUidAddFieldPost: async (uid: string, contentType?: string, accept?: string, body?: object, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'uid' is not null or undefined
            assertParamExists('listsUidAddFieldPost', 'uid', uid)
            const localVarPath = `/lists/{uid}/add-field`
                .replace(`{${"uid"}}`, encodeURIComponent(String(uid !== undefined ? uid : `-uid-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyAuth required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "X-API-KEY", keyParamName: "apiKeyAuth", configuration })
            if (contentType != null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            if (accept != null) {
                localVarHeaderParameter['Accept'] = String(accept);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: body,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/lists/{uid}/add-field',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete an existing list
         * @summary Delete a list
         * @param {string} uid (Required) The uid of the list to delete.
         * @param {string} [accept] 
         * @param {object} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listsUidDeletePost: async (uid: string, accept?: string, body?: object, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'uid' is not null or undefined
            assertParamExists('listsUidDeletePost', 'uid', uid)
            const localVarPath = `/lists/{uid}/delete`
                .replace(`{${"uid"}}`, encodeURIComponent(String(uid !== undefined ? uid : `-uid-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyAuth required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "X-API-KEY", keyParamName: "apiKeyAuth", configuration })
            if (accept != null) {
                localVarHeaderParameter['Accept'] = String(accept);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: body,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/lists/{uid}/delete',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns detailed information about a specified list
         * @summary Get a list
         * @param {string} uid (Required) The uid of the mailing list to fetch.
         * @param {string} [accept] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listsUidGet: async (uid: string, accept?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'uid' is not null or undefined
            assertParamExists('listsUidGet', 'uid', uid)
            const localVarPath = `/lists/{uid}`
                .replace(`{${"uid"}}`, encodeURIComponent(String(uid !== undefined ? uid : `-uid-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyAuth required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "X-API-KEY", keyParamName: "apiKeyAuth", configuration })
            if (accept != null) {
                localVarHeaderParameter['Accept'] = String(accept);
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/lists/{uid}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update an existing mailing list
         * @summary Update a List
         * @param {string} uid (Required) The uid of the list to update.
         * @param {string} [contentType] 
         * @param {string} [accept] 
         * @param {object} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listsUidPatch: async (uid: string, contentType?: string, accept?: string, body?: object, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'uid' is not null or undefined
            assertParamExists('listsUidPatch', 'uid', uid)
            const localVarPath = `/lists/{uid}`
                .replace(`{${"uid"}}`, encodeURIComponent(String(uid !== undefined ? uid : `-uid-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyAuth required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "X-API-KEY", keyParamName: "apiKeyAuth", configuration })
            if (contentType != null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            if (accept != null) {
                localVarHeaderParameter['Accept'] = String(accept);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: body,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/lists/{uid}',
                httpMethod: 'PATCH'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * MailingListsApi - functional programming interface
 * @export
 */
export const MailingListsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = MailingListsApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns all your existing lists
         * @summary Get mailing lists
         * @param {MailingListsApiListsGetRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listsGet(requestParameters: MailingListsApiListsGetRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listsGet(requestParameters.accept, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Create a new mailing list
         * @summary Create a Mailing List
         * @param {MailingListsApiListsPostRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listsPost(requestParameters: MailingListsApiListsPostRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const body: object = {
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.listsPost(requestParameters.contentType, requestParameters.accept, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Add a field to an existing list
         * @summary Add a field
         * @param {MailingListsApiListsUidAddFieldPostRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listsUidAddFieldPost(requestParameters: MailingListsApiListsUidAddFieldPostRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const body: object = {
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.listsUidAddFieldPost(requestParameters.uid, requestParameters.contentType, requestParameters.accept, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Delete an existing list
         * @summary Delete a list
         * @param {MailingListsApiListsUidDeletePostRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listsUidDeletePost(requestParameters: MailingListsApiListsUidDeletePostRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const body: object = {
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.listsUidDeletePost(requestParameters.uid, requestParameters.accept, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns detailed information about a specified list
         * @summary Get a list
         * @param {MailingListsApiListsUidGetRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listsUidGet(requestParameters: MailingListsApiListsUidGetRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listsUidGet(requestParameters.uid, requestParameters.accept, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Update an existing mailing list
         * @summary Update a List
         * @param {MailingListsApiListsUidPatchRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listsUidPatch(requestParameters: MailingListsApiListsUidPatchRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const body: object = {
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.listsUidPatch(requestParameters.uid, requestParameters.contentType, requestParameters.accept, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * MailingListsApi - factory interface
 * @export
 */
export const MailingListsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = MailingListsApiFp(configuration)
    return {
        /**
         * Returns all your existing lists
         * @summary Get mailing lists
         * @param {MailingListsApiListsGetRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listsGet(requestParameters: MailingListsApiListsGetRequest = {}, options?: AxiosRequestConfig): AxiosPromise<object> {
            return localVarFp.listsGet(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Create a new mailing list
         * @summary Create a Mailing List
         * @param {MailingListsApiListsPostRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listsPost(requestParameters: MailingListsApiListsPostRequest = {}, options?: AxiosRequestConfig): AxiosPromise<object> {
            return localVarFp.listsPost(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Add a field to an existing list
         * @summary Add a field
         * @param {MailingListsApiListsUidAddFieldPostRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listsUidAddFieldPost(requestParameters: MailingListsApiListsUidAddFieldPostRequest, options?: AxiosRequestConfig): AxiosPromise<object> {
            return localVarFp.listsUidAddFieldPost(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete an existing list
         * @summary Delete a list
         * @param {MailingListsApiListsUidDeletePostRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listsUidDeletePost(requestParameters: MailingListsApiListsUidDeletePostRequest, options?: AxiosRequestConfig): AxiosPromise<object> {
            return localVarFp.listsUidDeletePost(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns detailed information about a specified list
         * @summary Get a list
         * @param {MailingListsApiListsUidGetRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listsUidGet(requestParameters: MailingListsApiListsUidGetRequest, options?: AxiosRequestConfig): AxiosPromise<object> {
            return localVarFp.listsUidGet(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Update an existing mailing list
         * @summary Update a List
         * @param {MailingListsApiListsUidPatchRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listsUidPatch(requestParameters: MailingListsApiListsUidPatchRequest, options?: AxiosRequestConfig): AxiosPromise<object> {
            return localVarFp.listsUidPatch(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for listsGet operation in MailingListsApi.
 * @export
 * @interface MailingListsApiListsGetRequest
 */
export type MailingListsApiListsGetRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof MailingListsApiListsGet
    */
    readonly accept?: string
    
}

/**
 * Request parameters for listsPost operation in MailingListsApi.
 * @export
 * @interface MailingListsApiListsPostRequest
 */
export type MailingListsApiListsPostRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof MailingListsApiListsPost
    */
    readonly contentType?: string
    
    /**
    * 
    * @type {string}
    * @memberof MailingListsApiListsPost
    */
    readonly accept?: string
    
} & object

/**
 * Request parameters for listsUidAddFieldPost operation in MailingListsApi.
 * @export
 * @interface MailingListsApiListsUidAddFieldPostRequest
 */
export type MailingListsApiListsUidAddFieldPostRequest = {
    
    /**
    * (Required) The uid of the list to add a field to.
    * @type {string}
    * @memberof MailingListsApiListsUidAddFieldPost
    */
    readonly uid: string
    
    /**
    * 
    * @type {string}
    * @memberof MailingListsApiListsUidAddFieldPost
    */
    readonly contentType?: string
    
    /**
    * 
    * @type {string}
    * @memberof MailingListsApiListsUidAddFieldPost
    */
    readonly accept?: string
    
} & object

/**
 * Request parameters for listsUidDeletePost operation in MailingListsApi.
 * @export
 * @interface MailingListsApiListsUidDeletePostRequest
 */
export type MailingListsApiListsUidDeletePostRequest = {
    
    /**
    * (Required) The uid of the list to delete.
    * @type {string}
    * @memberof MailingListsApiListsUidDeletePost
    */
    readonly uid: string
    
    /**
    * 
    * @type {string}
    * @memberof MailingListsApiListsUidDeletePost
    */
    readonly accept?: string
    
} & object

/**
 * Request parameters for listsUidGet operation in MailingListsApi.
 * @export
 * @interface MailingListsApiListsUidGetRequest
 */
export type MailingListsApiListsUidGetRequest = {
    
    /**
    * (Required) The uid of the mailing list to fetch.
    * @type {string}
    * @memberof MailingListsApiListsUidGet
    */
    readonly uid: string
    
    /**
    * 
    * @type {string}
    * @memberof MailingListsApiListsUidGet
    */
    readonly accept?: string
    
}

/**
 * Request parameters for listsUidPatch operation in MailingListsApi.
 * @export
 * @interface MailingListsApiListsUidPatchRequest
 */
export type MailingListsApiListsUidPatchRequest = {
    
    /**
    * (Required) The uid of the list to update.
    * @type {string}
    * @memberof MailingListsApiListsUidPatch
    */
    readonly uid: string
    
    /**
    * 
    * @type {string}
    * @memberof MailingListsApiListsUidPatch
    */
    readonly contentType?: string
    
    /**
    * 
    * @type {string}
    * @memberof MailingListsApiListsUidPatch
    */
    readonly accept?: string
    
} & object

/**
 * MailingListsApiGenerated - object-oriented interface
 * @export
 * @class MailingListsApiGenerated
 * @extends {BaseAPI}
 */
export class MailingListsApiGenerated extends BaseAPI {
    /**
     * Returns all your existing lists
     * @summary Get mailing lists
     * @param {MailingListsApiListsGetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MailingListsApiGenerated
     */
    public listsGet(requestParameters: MailingListsApiListsGetRequest = {}, options?: AxiosRequestConfig) {
        return MailingListsApiFp(this.configuration).listsGet(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Create a new mailing list
     * @summary Create a Mailing List
     * @param {MailingListsApiListsPostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MailingListsApiGenerated
     */
    public listsPost(requestParameters: MailingListsApiListsPostRequest = {}, options?: AxiosRequestConfig) {
        return MailingListsApiFp(this.configuration).listsPost(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Add a field to an existing list
     * @summary Add a field
     * @param {MailingListsApiListsUidAddFieldPostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MailingListsApiGenerated
     */
    public listsUidAddFieldPost(requestParameters: MailingListsApiListsUidAddFieldPostRequest, options?: AxiosRequestConfig) {
        return MailingListsApiFp(this.configuration).listsUidAddFieldPost(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Delete an existing list
     * @summary Delete a list
     * @param {MailingListsApiListsUidDeletePostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MailingListsApiGenerated
     */
    public listsUidDeletePost(requestParameters: MailingListsApiListsUidDeletePostRequest, options?: AxiosRequestConfig) {
        return MailingListsApiFp(this.configuration).listsUidDeletePost(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns detailed information about a specified list
     * @summary Get a list
     * @param {MailingListsApiListsUidGetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MailingListsApiGenerated
     */
    public listsUidGet(requestParameters: MailingListsApiListsUidGetRequest, options?: AxiosRequestConfig) {
        return MailingListsApiFp(this.configuration).listsUidGet(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update an existing mailing list
     * @summary Update a List
     * @param {MailingListsApiListsUidPatchRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MailingListsApiGenerated
     */
    public listsUidPatch(requestParameters: MailingListsApiListsUidPatchRequest, options?: AxiosRequestConfig) {
        return MailingListsApiFp(this.configuration).listsUidPatch(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
