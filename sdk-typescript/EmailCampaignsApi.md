# Segnivo-Sdk.EmailCampaignsApi

All URIs are relative to *https://api.segnivo.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**messagesGet**](EmailCampaignsApi.md#messagesGet) | **GET** /messages | Get campaigns
[**messagesPost**](EmailCampaignsApi.md#messagesPost) | **POST** /messages | Create a Campaign
[**messagesUidDeletePost**](EmailCampaignsApi.md#messagesUidDeletePost) | **POST** /messages/{uid}/delete | Delete a campaign
[**messagesUidGet**](EmailCampaignsApi.md#messagesUidGet) | **GET** /messages/{uid} | Get a campaign
[**messagesUidPatch**](EmailCampaignsApi.md#messagesUidPatch) | **PATCH** /messages/{uid} | Update Campaign
[**messagesUidPausePost**](EmailCampaignsApi.md#messagesUidPausePost) | **POST** /messages/{uid}/pause | Pause a campaign
[**messagesUidResumePost**](EmailCampaignsApi.md#messagesUidResumePost) | **POST** /messages/{uid}/resume | Resume the delivery of a campaign


# **messagesGet**
> any messagesGet()

Returns a collection of all your campaigns

### Example


```typescript
import { createConfiguration, EmailCampaignsApi } from 'segnivo-typescript-sdk';
import type { EmailCampaignsApiMessagesGetRequest } from 'segnivo-typescript-sdk';

const configuration = createConfiguration();
const apiInstance = new EmailCampaignsApi(configuration);

const request: EmailCampaignsApiMessagesGetRequest = {
  
  accept: "application/json",
};

const data = await apiInstance.messagesGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accept** | [**string**] |  | (optional) defaults to undefined


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

# **messagesPost**
> any messagesPost()

Creat an email campaign for processing

### Example


```typescript
import { createConfiguration, EmailCampaignsApi } from 'segnivo-typescript-sdk';
import type { EmailCampaignsApiMessagesPostRequest } from 'segnivo-typescript-sdk';

const configuration = createConfiguration();
const apiInstance = new EmailCampaignsApi(configuration);

const request: EmailCampaignsApiMessagesPostRequest = {
  
  accept: "application/json",
  
  body: {},
};

const data = await apiInstance.messagesPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **any**|  |
 **accept** | [**string**] |  | (optional) defaults to undefined


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
**201** | Created |  * Content-Type -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **messagesUidDeletePost**
> any messagesUidDeletePost()

Delete the specified campaign

### Example


```typescript
import { createConfiguration, EmailCampaignsApi } from 'segnivo-typescript-sdk';
import type { EmailCampaignsApiMessagesUidDeletePostRequest } from 'segnivo-typescript-sdk';

const configuration = createConfiguration();
const apiInstance = new EmailCampaignsApi(configuration);

const request: EmailCampaignsApiMessagesUidDeletePostRequest = {
    // (Required) The uid of the campaign to delete
  uid: "<string>",
  
  accept: "application/json",
  
  body: {},
};

const data = await apiInstance.messagesUidDeletePost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **any**|  |
 **uid** | [**string**] | (Required) The uid of the campaign to delete | defaults to undefined
 **accept** | [**string**] |  | (optional) defaults to undefined


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

# **messagesUidGet**
> any messagesUidGet()

Returns the specified campaign details

### Example


```typescript
import { createConfiguration, EmailCampaignsApi } from 'segnivo-typescript-sdk';
import type { EmailCampaignsApiMessagesUidGetRequest } from 'segnivo-typescript-sdk';

const configuration = createConfiguration();
const apiInstance = new EmailCampaignsApi(configuration);

const request: EmailCampaignsApiMessagesUidGetRequest = {
    // (Required) The uid of the campaign to fetch
  uid: "<string>",
  
  accept: "application/json",
};

const data = await apiInstance.messagesUidGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uid** | [**string**] | (Required) The uid of the campaign to fetch | defaults to undefined
 **accept** | [**string**] |  | (optional) defaults to undefined


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

# **messagesUidPatch**
> any messagesUidPatch()

Updates a previously added campaign. Only Active and Paused campaigns can be updated.

### Example


```typescript
import { createConfiguration, EmailCampaignsApi } from 'segnivo-typescript-sdk';
import type { EmailCampaignsApiMessagesUidPatchRequest } from 'segnivo-typescript-sdk';

const configuration = createConfiguration();
const apiInstance = new EmailCampaignsApi(configuration);

const request: EmailCampaignsApiMessagesUidPatchRequest = {
    // (Required) The uid of the campaign to update
  uid: "<string>",
  
  accept: "application/json",
  
  body: {},
};

const data = await apiInstance.messagesUidPatch(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **any**|  |
 **uid** | [**string**] | (Required) The uid of the campaign to update | defaults to undefined
 **accept** | [**string**] |  | (optional) defaults to undefined


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

# **messagesUidPausePost**
> any messagesUidPausePost()

Pause the specified campaign

### Example


```typescript
import { createConfiguration, EmailCampaignsApi } from 'segnivo-typescript-sdk';
import type { EmailCampaignsApiMessagesUidPausePostRequest } from 'segnivo-typescript-sdk';

const configuration = createConfiguration();
const apiInstance = new EmailCampaignsApi(configuration);

const request: EmailCampaignsApiMessagesUidPausePostRequest = {
    // (Required) The uid of the campaign to pause
  uid: "<string>",
  
  accept: "application/json",
  
  body: {},
};

const data = await apiInstance.messagesUidPausePost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **any**|  |
 **uid** | [**string**] | (Required) The uid of the campaign to pause | defaults to undefined
 **accept** | [**string**] |  | (optional) defaults to undefined


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

# **messagesUidResumePost**
> any messagesUidResumePost()

Resume delivery of the specified campaign

### Example


```typescript
import { createConfiguration, EmailCampaignsApi } from 'segnivo-typescript-sdk';
import type { EmailCampaignsApiMessagesUidResumePostRequest } from 'segnivo-typescript-sdk';

const configuration = createConfiguration();
const apiInstance = new EmailCampaignsApi(configuration);

const request: EmailCampaignsApiMessagesUidResumePostRequest = {
    // (Required) The uid of the campaign to resume
  uid: "<string>",
  
  accept: "application/json",
  
  body: {},
};

const data = await apiInstance.messagesUidResumePost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **any**|  |
 **uid** | [**string**] | (Required) The uid of the campaign to resume | defaults to undefined
 **accept** | [**string**] |  | (optional) defaults to undefined


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


