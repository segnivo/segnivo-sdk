/* tslint:disable */
/* eslint-disable */
/**
 * Segnivo Developer API
 * **API Version**: 1.7  **Date**: 9th July, 2024  ## 📄 Getting Started  This API is based on the REST API architecture, allowing the user to easily manage their data with this resource-based approach.  Every API call is established on which specific request type (GET, POST, PUT, DELETE) will be used.  The API must not be abused and should be used within acceptable limits.  To start using this API, you will need not create or access an existing Segnivo account to obtain your API key ([retrievable from your account settings](https://messaging.segnivo.com/account/api)).  - You must use a valid API Key to send requests to the API endpoints.      - The API only responds to HTTPS-secured communications. Any requests sent via HTTP return an HTTP 301 redirect to the corresponding HTTPS resources.      - The API returns request responses in JSON format. When an API request returns an error, it is sent in the JSON response as an error key or with details in the message key.       ### 🔖 **Need some help?**  In case you have questions or need clarity with interacting with some endpoints feel free to create a support ticket on your account or you can send an email ([<i>developers@segnivo.com</i>](https://mailto:developers@segnivo.com)) directly and we would be happy to help.  ---  ## Authentication  As noted earlier, this API uses API keys for authentication. You can generate a Segnivo API key in the [API](https://messaging.segnivo.com/account/api) section of your account settings.  You must include an API key in each request to this API with the `X-API-KEY` request header.  ### Authentication error response  If an API key is missing, malformed, or invalid, you will receive an HTTP 401 Unauthorized response code.  ## Rate and usage limits  API access rate limits apply on a per-API endpoint basis in unit time. The limit is 10k requests per hour for most endpoints and 1m requests per hour for transactional/relay email-sending endpoints. Also, depending on your plan, you may have usage limits. If you exceed either limit, your request will return an HTTP 429 Too Many Requests status code or HTTP 403 if sending credits have been exhausted.  ### 503 response  An HTTP `503` response from our servers may indicate there is an unexpected spike in API access traffic, while this rarely happens, we ensure the server is usually operational within the next two to five minutes. If the outage persists or you receive any other form of an HTTP `5XX` error, contact support ([<i>developers@segnivo.com</i>](https://mailto:developers@segnivo.com)).  ### Request headers  To make a successful request, some or all of the following headers must be passed with the request.  | **Header** | **Description** | | --- | --- | | Content-Type | Required and should be `application/json` in most cases. | | Accept | Required and should be `application/json` in most cases | | Content-Length | Required for `POST`, `PATCH`, and `PUT` requests containing a request body. The value must be the number of bytes rather than the number of characters in the request body. | | X-API-KEY | Required. Specifies the API key used for authorization. |  ##### 🔖 Note with example requests and code snippets  If/when you use the code snippets used as example requests, remember to calculate and add the `Content-Length` header. Some request libraries, frameworks, and tools automatically add this header for you while a few do not. Kindly check and ensure yours does or add it yourself.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';

export interface RelayEmailsIdGetRequest {
    id: string;
    limit?: number;
}

export interface RelayRawPostRequest {
    message?: string;
    isTransactional?: boolean;
    trackClick?: boolean;
    trackOpen?: boolean;
    signDkim?: boolean;
}

/**
 * 
 */
export class RelayApi extends runtime.BaseAPI {

    /**
     * The `/emails` endpoint lets you fetch one or more marketing/transactional email(s) from your `Segnivo Messaging` account and it accepts two **optional** parameters.  - The `id` string of the email to fetch provided as a path variable      - The `limit` on the number of records to fetch (if email id is not provided) as a query string parameter. This value defaults to 100 if not provided.
     * Fetch Emails
     */
    async relayEmailsIdGetRaw(requestParameters: RelayEmailsIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling relayEmailsIdGet().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-API-KEY"] = await this.configuration.apiKey("X-API-KEY"); // apiKeyAuth authentication
        }

        const response = await this.request({
            path: `/relay/emails/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * The `/emails` endpoint lets you fetch one or more marketing/transactional email(s) from your `Segnivo Messaging` account and it accepts two **optional** parameters.  - The `id` string of the email to fetch provided as a path variable      - The `limit` on the number of records to fetch (if email id is not provided) as a query string parameter. This value defaults to 100 if not provided.
     * Fetch Emails
     */
    async relayEmailsIdGet(requestParameters: RelayEmailsIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.relayEmailsIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * The `/raw` endpoint lets you send marketing and transactional emails from your `Segnivo Messaging` account by passing a raw RFC822 message to the `message` attribute in the request body.  The following parameters should be passed as a form data to the endpoint  - **message** - A raw RFC822 message      - **sign_dkim** (optional, defaults to `true`) - A boolean value on if a DKIM signature should be included in this message      - **track_click** (optional, defaults to `true`) - A boolean value on if email clicks should be tracked. If `true` links in the email will be rewritten to enable tracking      - **track_open** (optional, defaults to `true`) - A boolean value on if the email opens should be tracked      - **is_transactional** (optional, defaults to `false`) - A boolean value to flag this email as a transactional email
     * Send a Raw Email Message
     */
    async relayRawPostRaw(requestParameters: RelayRawPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-API-KEY"] = await this.configuration.apiKey("X-API-KEY"); // apiKeyAuth authentication
        }

        const consumes: runtime.Consume[] = [
            { contentType: 'multipart/form-data' },
        ];
        // @ts-ignore: canConsumeForm may be unused
        const canConsumeForm = runtime.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any };
        let useForm = false;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new URLSearchParams();
        }

        if (requestParameters['message'] != null) {
            formParams.append('message', requestParameters['message'] as any);
        }

        if (requestParameters['isTransactional'] != null) {
            formParams.append('is_transactional', requestParameters['isTransactional'] as any);
        }

        if (requestParameters['trackClick'] != null) {
            formParams.append('track_click', requestParameters['trackClick'] as any);
        }

        if (requestParameters['trackOpen'] != null) {
            formParams.append('track_open', requestParameters['trackOpen'] as any);
        }

        if (requestParameters['signDkim'] != null) {
            formParams.append('sign_dkim', requestParameters['signDkim'] as any);
        }

        const response = await this.request({
            path: `/relay/raw`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: formParams,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * The `/raw` endpoint lets you send marketing and transactional emails from your `Segnivo Messaging` account by passing a raw RFC822 message to the `message` attribute in the request body.  The following parameters should be passed as a form data to the endpoint  - **message** - A raw RFC822 message      - **sign_dkim** (optional, defaults to `true`) - A boolean value on if a DKIM signature should be included in this message      - **track_click** (optional, defaults to `true`) - A boolean value on if email clicks should be tracked. If `true` links in the email will be rewritten to enable tracking      - **track_open** (optional, defaults to `true`) - A boolean value on if the email opens should be tracked      - **is_transactional** (optional, defaults to `false`) - A boolean value to flag this email as a transactional email
     * Send a Raw Email Message
     */
    async relayRawPost(requestParameters: RelayRawPostRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.relayRawPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
