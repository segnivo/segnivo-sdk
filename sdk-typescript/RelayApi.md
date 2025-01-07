# Segnivo-Sdk.RelayApi

All URIs are relative to *https://api.segnivo.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**relayEmailsIdGet**](RelayApi.md#relayEmailsIdGet) | **GET** /relay/emails/{id} | Fetch Emails
[**relayRawPost**](RelayApi.md#relayRawPost) | **POST** /relay/raw | Send a Raw Email Message


# **relayEmailsIdGet**
> any relayEmailsIdGet()

The `/emails` endpoint lets you fetch one or more marketing/transactional email(s) from your `Segnivo Messaging` account and it accepts two **optional** parameters.  - The `id` string of the email to fetch provided as a path variable      - The `limit` on the number of records to fetch (if email id is not provided) as a query string parameter. This value defaults to 100 if not provided.

### Example


```typescript
import { createConfiguration, RelayApi } from 'segnivo-typescript-sdk';
import type { RelayApiRelayEmailsIdGetRequest } from 'segnivo-typescript-sdk';

const configuration = createConfiguration();
const apiInstance = new RelayApi(configuration);

const request: RelayApiRelayEmailsIdGetRequest = {
    // The ID of the email to fetch
  id: "<string>",
    // The number of records to fetch (optional)
  limit: 100,
};

const data = await apiInstance.relayEmailsIdGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | The ID of the email to fetch | defaults to undefined
 **limit** | [**number**] | The number of records to fetch | (optional) defaults to undefined


### Return type

**any**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  * Content-Type -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **relayRawPost**
> any relayRawPost()

The `/raw` endpoint lets you send marketing and transactional emails from your `Segnivo Messaging` account by passing a raw RFC822 message to the `message` attribute in the request body.  The following parameters should be passed as a form data to the endpoint  - **message** - A raw RFC822 message      - **sign_dkim** (optional, defaults to `true`) - A boolean value on if a DKIM signature should be included in this message      - **track_click** (optional, defaults to `true`) - A boolean value on if email clicks should be tracked. If `true` links in the email will be rewritten to enable tracking      - **track_open** (optional, defaults to `true`) - A boolean value on if the email opens should be tracked      - **is_transactional** (optional, defaults to `false`) - A boolean value to flag this email as a transactional email

### Example


```typescript
import { createConfiguration, RelayApi } from 'segnivo-typescript-sdk';
import type { RelayApiRelayRawPostRequest } from 'segnivo-typescript-sdk';

const configuration = createConfiguration();
const apiInstance = new RelayApi(configuration);

const request: RelayApiRelayRawPostRequest = {
  
  message: "A raw RFC822 message string",
  
  isTransactional: true,
  
  trackClick: false,
  
  trackOpen: false,
  
  signDkim: true,
};

const data = await apiInstance.relayRawPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **message** | [**string**] |  | (optional) defaults to undefined
 **isTransactional** | [**boolean**] |  | (optional) defaults to undefined
 **trackClick** | [**boolean**] |  | (optional) defaults to undefined
 **trackOpen** | [**boolean**] |  | (optional) defaults to undefined
 **signDkim** | [**boolean**] |  | (optional) defaults to undefined


### Return type

**any**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  * Content-Type -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


