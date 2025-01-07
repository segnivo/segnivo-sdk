# Segnivo-Sdk.MailingListsApi

All URIs are relative to *https://api.segnivo.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listsGet**](MailingListsApi.md#listsGet) | **GET** /lists | Get mailing lists
[**listsPost**](MailingListsApi.md#listsPost) | **POST** /lists | Create a Mailing List
[**listsUidAddFieldPost**](MailingListsApi.md#listsUidAddFieldPost) | **POST** /lists/{uid}/add-field | Add a field
[**listsUidDeletePost**](MailingListsApi.md#listsUidDeletePost) | **POST** /lists/{uid}/delete | Delete a list
[**listsUidGet**](MailingListsApi.md#listsUidGet) | **GET** /lists/{uid} | Get a list
[**listsUidPatch**](MailingListsApi.md#listsUidPatch) | **PATCH** /lists/{uid} | Update a List


# **listsGet**
> any listsGet()

Returns all your existing lists

### Example


```typescript
import { createConfiguration, MailingListsApi } from 'segnivo-typescript-sdk';
import type { MailingListsApiListsGetRequest } from 'segnivo-typescript-sdk';

const configuration = createConfiguration();
const apiInstance = new MailingListsApi(configuration);

const request: MailingListsApiListsGetRequest = {
  
  accept: "application/json",
};

const data = await apiInstance.listsGet(request);
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

# **listsPost**
> any listsPost()

Create a new mailing list

### Example


```typescript
import { createConfiguration, MailingListsApi } from 'segnivo-typescript-sdk';
import type { MailingListsApiListsPostRequest } from 'segnivo-typescript-sdk';

const configuration = createConfiguration();
const apiInstance = new MailingListsApi(configuration);

const request: MailingListsApiListsPostRequest = {
  
  accept: "application/json",
  
  body: {},
};

const data = await apiInstance.listsPost(request);
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
**200** | OK |  * Content-Type -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listsUidAddFieldPost**
> any listsUidAddFieldPost()

Add a field to an existing list

### Example


```typescript
import { createConfiguration, MailingListsApi } from 'segnivo-typescript-sdk';
import type { MailingListsApiListsUidAddFieldPostRequest } from 'segnivo-typescript-sdk';

const configuration = createConfiguration();
const apiInstance = new MailingListsApi(configuration);

const request: MailingListsApiListsUidAddFieldPostRequest = {
    // (Required) The uid of the list to add a field to.
  uid: "<string>",
  
  accept: "application/json",
  
  body: {},
};

const data = await apiInstance.listsUidAddFieldPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **any**|  |
 **uid** | [**string**] | (Required) The uid of the list to add a field to. | defaults to undefined
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

# **listsUidDeletePost**
> any listsUidDeletePost()

Delete an existing list

### Example


```typescript
import { createConfiguration, MailingListsApi } from 'segnivo-typescript-sdk';
import type { MailingListsApiListsUidDeletePostRequest } from 'segnivo-typescript-sdk';

const configuration = createConfiguration();
const apiInstance = new MailingListsApi(configuration);

const request: MailingListsApiListsUidDeletePostRequest = {
    // (Required) The uid of the list to delete.
  uid: "<string>",
  
  accept: "application/json",
  
  body: {},
};

const data = await apiInstance.listsUidDeletePost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **any**|  |
 **uid** | [**string**] | (Required) The uid of the list to delete. | defaults to undefined
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

# **listsUidGet**
> any listsUidGet()

Returns detailed information about a specified list

### Example


```typescript
import { createConfiguration, MailingListsApi } from 'segnivo-typescript-sdk';
import type { MailingListsApiListsUidGetRequest } from 'segnivo-typescript-sdk';

const configuration = createConfiguration();
const apiInstance = new MailingListsApi(configuration);

const request: MailingListsApiListsUidGetRequest = {
    // (Required) The uid of the mailing list to fetch.
  uid: "<string>",
  
  accept: "application/json",
};

const data = await apiInstance.listsUidGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uid** | [**string**] | (Required) The uid of the mailing list to fetch. | defaults to undefined
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

# **listsUidPatch**
> any listsUidPatch()

Update an existing mailing list

### Example


```typescript
import { createConfiguration, MailingListsApi } from 'segnivo-typescript-sdk';
import type { MailingListsApiListsUidPatchRequest } from 'segnivo-typescript-sdk';

const configuration = createConfiguration();
const apiInstance = new MailingListsApi(configuration);

const request: MailingListsApiListsUidPatchRequest = {
    // (Required) The uid of the list to update.
  uid: "<string>",
  
  accept: "application/json",
  
  body: {},
};

const data = await apiInstance.listsUidPatch(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **any**|  |
 **uid** | [**string**] | (Required) The uid of the list to update. | defaults to undefined
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


