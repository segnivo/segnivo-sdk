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

import { Configuration } from "./configuration";
import { RequiredError, RequestArgs } from "./base";
import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import { requestAfterHook } from "./requestAfterHook";
import { requestBeforeUrlHook } from "./requestBeforeUrlHook";
import { readableStreamToString, SegnivoError, parseIfJson } from "./error";

/**
 *
 * @export
 */
export const DUMMY_BASE_URL = 'https://example.com'

/**
 *
 * @throws {RequiredError}
 * @export
 */
export const assertParamExists = function (functionName: string, paramName: string, paramValue: unknown) {
    if (paramValue === null || paramValue === undefined) {
        throw new RequiredError(paramName, `Required parameter ${paramName} was null or undefined when calling ${functionName}.`);
    }
}

/**
 *
 * @export
 */
export const setApiKeyToObject = async function ({
  object,
  key,
  type,
  keyParamName,
  configuration,
  prefix
}: {
  object: any
  key?: string
  type?: "Cookie"
  keyParamName: string
  configuration?: Configuration
  prefix?: string
}) {
  key = key ? key : keyParamName
  let apiKey: string | null | undefined = null
  if (configuration && configuration.apiKey) {
    if (typeof configuration.apiKey === 'function')
      apiKey = await configuration.apiKey(keyParamName)
    else if (typeof configuration.apiKey === 'string')
      apiKey = configuration.apiKey
    else if (typeof configuration.apiKey === 'object') {
      if (keyParamName in configuration.apiKey)
        apiKey = configuration.apiKey[keyParamName]
    } else
      throw Error(
        `Unexpected type ${typeof configuration.apiKey} for Configuration.apiKey`
      )
  }
  if (!apiKey) return
  object[key] = prefix !== undefined ? `${prefix}${apiKey}` : apiKey
  if (type === "Cookie")
    object[key] = `${keyParamName}=${object[key]}`
}

/**
 *
 * @export
 */
export const setBasicAuthToObject = function (object: any, configuration?: Configuration) {
    if (configuration && (configuration.username || configuration.password)) {
        object["auth"] = { username: configuration.username, password: configuration.password };
    }
}

/**
 *
 * @export
 */
export const setBearerAuthToObject = async function (object: any, configuration?: Configuration) {
    if (configuration && configuration.accessToken) {
        const accessToken = typeof configuration.accessToken === 'function'
            ? await configuration.accessToken()
            : await configuration.accessToken;
        object["Authorization"] = "Bearer " + accessToken;
    }
}

function setFlattenedQueryParams(urlSearchParams: URLSearchParams, parameter: any, key: string = ""): void {
    if (typeof parameter === "object") {
        if (Array.isArray(parameter)) {
            (parameter as any[]).forEach(item => setFlattenedQueryParams(urlSearchParams, item, key));
        }
        else {
            Object.keys(parameter).forEach(currentKey =>
                setFlattenedQueryParams(urlSearchParams, parameter[currentKey], `${key}${key !== '' ? '.' : ''}${currentKey}`)
            );
        }
    }
    else {
        if (urlSearchParams.has(key)) {
            urlSearchParams.append(key, parameter);
        }
        else {
            urlSearchParams.set(key, parameter);
        }
    }
}

/**
 *
 * @export
 */
export const setSearchParams = function (url: URL, ...objects: any[]) {
    const searchParams = new URLSearchParams(url.search);
    setFlattenedQueryParams(searchParams, objects);
    url.search = searchParams.toString();
}

/**
 *
 * @export
 */
export const serializeDataIfNeeded = function (value: any, requestOptions: any, configuration?: Configuration) {
    const nonString = typeof value !== 'string';
    const needsSerialization = nonString && configuration && configuration.isJsonMime
        ? configuration.isJsonMime(requestOptions.headers['Content-Type'])
        : nonString;
    return needsSerialization
        ? JSON.stringify(value !== undefined ? value : {})
        : (value || "");
}

/**
 *
 * @export
 */
export const toPathString = function (url: URL) {
    return removeTrailingSlash(url.pathname) + url.search + url.hash
}

/**
 * remove trailing slash from string
 */
export const removeTrailingSlash = function (url: string) {
    return url.replace(/\/$/, "");
}

/**
 * Wrap an axios request in a try/catch block to catch network errors and parse the response body
 */
async function wrapAxiosRequest<R>(makeRequest: () => Promise<R>): Promise<R> {
    const maxAttempts = 3;
    let attempt = 0;
    let delay = 5000;
    while (attempt < maxAttempts) {
        try {
            return await makeRequest();
        } catch (e) {
            if (e instanceof AxiosError && e.isAxiosError) {
                if (e.response?.status == 429) {
                    attempt++;
                    console.log(`429 error encountered, retrying in ${delay / 1000} seconds...`);
                    await new Promise(resolve => setTimeout(resolve, delay));
                    delay *= 2;
                    continue;
                }
                try {
                    const responseBody =
                        e.response?.data instanceof ReadableStream
                        ? await readableStreamToString(e.response.data)
                        : e.response?.data
                    throw new SegnivoError(e, parseIfJson(responseBody), e.response?.headers)
                } catch (innerError) {
                    if (innerError instanceof ReferenceError) {
                        // Got: "ReferenceError: ReadableStream is not defined"
                        // This means we are in a Node environment so just throw the original error
                        throw new SegnivoError(e, e.response?.data, e.response?.headers)
                    }
                    if (innerError instanceof SegnivoError) {
                        // Got "SegnivoError" from the above try block
                        throw innerError;
                    }
                    // Something unexpected happened: propagate the error
                    throw e
                }
            }
            throw e
        }
    }
    throw new Error(`Request failed after ${maxAttempts} retries due to 429 (rate limit) errors.`);
}

/**
 *
 * @export
 */
export const createRequestFunction = function (axiosArgs: RequestArgs, globalAxios: AxiosInstance, BASE_PATH: string, configuration?: Configuration) {
    return async <T = unknown, R = AxiosResponse<T>>(axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
        requestBeforeUrlHook({axiosArgs, basePath, configuration})
        const url = (configuration?.basePath || basePath) + axiosArgs.url
        await requestAfterHook({axiosArgs, basePath, url, configuration})
        return wrapAxiosRequest(async () => await axios.request<T, R>({ ...axiosArgs.options, url }));
    };
}

export function isBrowser() {
    return typeof window !== "undefined"
}
