# Segnivo-Sdk.RelayTransactionalEmailsApi

All URIs are relative to *https://api.segnivo.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**relaySendPost**](RelayTransactionalEmailsApi.md#relaySendPost) | **POST** /relay/send | Send an Email


# **relaySendPost**
> any relaySendPost()

The `/send` endpoint lets you send marketing and transactional emails from your `Segnivo Messaging` account.  The following data should be passed in JSON format in the request body  - **subject** - The subject of the email      - **from_name** (optional) - The full name of the sender      - **from_email** - The email of the sender      - **reply_to** (optional) - The email to which replies should be sent      - **content_type** (optional, defaults to `html`) - The content type of the email body. Accepts either `text` or `html`      - **recipients** - An array/collection of email addresses to deliver this message, max. 50      - **content** - The HTML or plain text content of the email      - **preheader** (optional) - The email preheader      - **custom_headers** (optional) - An object of custom headers to add to the email      - **delivery_at** (optional) - The 10-digit unix timestamp of the date/time at which this email should be delivered      - **attachments** (optional) - An array/collection of the URLs of files to attach to the email      - **sign_dkim** (optional, defaults to `true`) - A boolean value on if a DKIM signature should be included in this message      - **track_click** (optional, defaults to `true`) - A boolean value on if email clicks should be tracked. If `true` links in the email will be rewritten to enable tracking      - **track_open** (optional, defaults to `true`) - A boolean value on if the email opens should be tracked      - **is_transactional** (optional, defaults to `false`) - A boolean value to flag this email as a transactional email       #### 🔖 Important  **`is_transactional`** must only be set to `true` for transactional emails. Setting this to `true` for marketing emails will result in your API access being revoked and your account disabled.

### Example


```typescript
import { createConfiguration, RelayTransactionalEmailsApi } from 'segnivo-typescript-sdk';
import type { RelayTransactionalEmailsApiRelaySendPostRequest } from 'segnivo-typescript-sdk';

const configuration = createConfiguration();
const apiInstance = new RelayTransactionalEmailsApi(configuration);

const request: RelayTransactionalEmailsApiRelaySendPostRequest = {
  
  body: {},
};

const data = await apiInstance.relaySendPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **any**|  |


### Return type

**any**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  * Content-Type -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


