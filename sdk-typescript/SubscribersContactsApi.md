# Segnivo-Sdk.SubscribersContactsApi

All URIs are relative to *https://api.segnivo.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**contactsGet**](SubscribersContactsApi.md#contactsGet) | **GET** /contacts | Get contacts
[**contactsPost**](SubscribersContactsApi.md#contactsPost) | **POST** /contacts | Add a Contact
[**contactsUidAddTagPost**](SubscribersContactsApi.md#contactsUidAddTagPost) | **POST** /contacts/{uid}/add-tag | Add tags to a contact
[**contactsUidDeletePost**](SubscribersContactsApi.md#contactsUidDeletePost) | **POST** /contacts/{uid}/delete | Delete a contact
[**contactsUidGet**](SubscribersContactsApi.md#contactsUidGet) | **GET** /contacts/{uid} | Get a contact
[**contactsUidPatch**](SubscribersContactsApi.md#contactsUidPatch) | **PATCH** /contacts/{uid} | Update Contact
[**contactsUidSubscribePatch**](SubscribersContactsApi.md#contactsUidSubscribePatch) | **PATCH** /contacts/{uid}/subscribe | Subscribe a contact
[**contactsUidUnsubscribePatch**](SubscribersContactsApi.md#contactsUidUnsubscribePatch) | **PATCH** /contacts/{uid}/unsubscribe | Unsubscribe a contact


# **contactsGet**
> any contactsGet()

Returns a list of contacts/subscribers on your account  This endpoint accepts three **optional** query parameters  - `email` — An email address to search for. If set, the endpoint only returns subscribers that have an identical email address.      - `per_page` — A limit on the number of records to return.      - `page` — The parameter serves as an offset on the number of records returned.

### Example


```typescript
import { createConfiguration, SubscribersContactsApi } from 'segnivo-typescript-sdk';
import type { SubscribersContactsApiContactsGetRequest } from 'segnivo-typescript-sdk';

const configuration = createConfiguration();
const apiInstance = new SubscribersContactsApi(configuration);

const request: SubscribersContactsApiContactsGetRequest = {
  
  accept: "application/json",
    // An email address to search for. (optional)
  email: "<string>",
    // How many items should be returned ahead. (optional)
  perPage: 20,
    // The offset for the items to be returned, helps in pagination. (optional)
  page: 1,
};

const data = await apiInstance.contactsGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accept** | [**string**] |  | (optional) defaults to undefined
 **email** | [**string**] | An email address to search for. | (optional) defaults to undefined
 **perPage** | [**number**] | How many items should be returned ahead. | (optional) defaults to undefined
 **page** | [**number**] | The offset for the items to be returned, helps in pagination. | (optional) defaults to undefined


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

# **contactsPost**
> any contactsPost()

Add a new contact/subscriber to your mailing list

### Example


```typescript
import { createConfiguration, SubscribersContactsApi } from 'segnivo-typescript-sdk';
import type { SubscribersContactsApiContactsPostRequest } from 'segnivo-typescript-sdk';

const configuration = createConfiguration();
const apiInstance = new SubscribersContactsApi(configuration);

const request: SubscribersContactsApiContactsPostRequest = {
  
  accept: "application/json",
  
  body: {},
};

const data = await apiInstance.contactsPost(request);
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

# **contactsUidAddTagPost**
> any contactsUidAddTagPost()

Add tags to an existing contact

### Example


```typescript
import { createConfiguration, SubscribersContactsApi } from 'segnivo-typescript-sdk';
import type { SubscribersContactsApiContactsUidAddTagPostRequest } from 'segnivo-typescript-sdk';

const configuration = createConfiguration();
const apiInstance = new SubscribersContactsApi(configuration);

const request: SubscribersContactsApiContactsUidAddTagPostRequest = {
    // (Required) The uid of the contact to update with the tags.
  uid: "<string>",
  
  accept: "application/json",
  
  body: {},
};

const data = await apiInstance.contactsUidAddTagPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **any**|  |
 **uid** | [**string**] | (Required) The uid of the contact to update with the tags. | defaults to undefined
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

# **contactsUidDeletePost**
> any contactsUidDeletePost()

Delete an existing contact

### Example


```typescript
import { createConfiguration, SubscribersContactsApi } from 'segnivo-typescript-sdk';
import type { SubscribersContactsApiContactsUidDeletePostRequest } from 'segnivo-typescript-sdk';

const configuration = createConfiguration();
const apiInstance = new SubscribersContactsApi(configuration);

const request: SubscribersContactsApiContactsUidDeletePostRequest = {
    // (Required) The uid of the contact to delete.
  uid: "<string>",
  
  accept: "application/json",
  
  body: {},
};

const data = await apiInstance.contactsUidDeletePost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **any**|  |
 **uid** | [**string**] | (Required) The uid of the contact to delete. | defaults to undefined
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

# **contactsUidGet**
> any contactsUidGet()

Fetch detailed contact information for specified a contact

### Example


```typescript
import { createConfiguration, SubscribersContactsApi } from 'segnivo-typescript-sdk';
import type { SubscribersContactsApiContactsUidGetRequest } from 'segnivo-typescript-sdk';

const configuration = createConfiguration();
const apiInstance = new SubscribersContactsApi(configuration);

const request: SubscribersContactsApiContactsUidGetRequest = {
    // (Required) The uid of the contact to get.
  uid: "<string>",
  
  accept: "application/json",
};

const data = await apiInstance.contactsUidGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uid** | [**string**] | (Required) The uid of the contact to get. | defaults to undefined
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

# **contactsUidPatch**
> any contactsUidPatch()

Update the specified subscriber/contact

### Example


```typescript
import { createConfiguration, SubscribersContactsApi } from 'segnivo-typescript-sdk';
import type { SubscribersContactsApiContactsUidPatchRequest } from 'segnivo-typescript-sdk';

const configuration = createConfiguration();
const apiInstance = new SubscribersContactsApi(configuration);

const request: SubscribersContactsApiContactsUidPatchRequest = {
    // (Required) The uid of the contact to update.
  uid: "<string>",
  
  accept: "application/json",
  
  body: {},
};

const data = await apiInstance.contactsUidPatch(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **any**|  |
 **uid** | [**string**] | (Required) The uid of the contact to update. | defaults to undefined
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

# **contactsUidSubscribePatch**
> any contactsUidSubscribePatch()

Subscribe a contact to a list

### Example


```typescript
import { createConfiguration, SubscribersContactsApi } from 'segnivo-typescript-sdk';
import type { SubscribersContactsApiContactsUidSubscribePatchRequest } from 'segnivo-typescript-sdk';

const configuration = createConfiguration();
const apiInstance = new SubscribersContactsApi(configuration);

const request: SubscribersContactsApiContactsUidSubscribePatchRequest = {
    // (Required) The uid of the contact to subscribe.
  uid: "<string>",
  
  accept: "application/json",
    // (Required) The uid of the mail list to subscribe the contact. (optional)
  listUid: "<string>",
  
  body: {},
};

const data = await apiInstance.contactsUidSubscribePatch(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **any**|  |
 **uid** | [**string**] | (Required) The uid of the contact to subscribe. | defaults to undefined
 **accept** | [**string**] |  | (optional) defaults to undefined
 **listUid** | [**string**] | (Required) The uid of the mail list to subscribe the contact. | (optional) defaults to undefined


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

# **contactsUidUnsubscribePatch**
> any contactsUidUnsubscribePatch()

Unsubscribe a contact from a list

### Example


```typescript
import { createConfiguration, SubscribersContactsApi } from 'segnivo-typescript-sdk';
import type { SubscribersContactsApiContactsUidUnsubscribePatchRequest } from 'segnivo-typescript-sdk';

const configuration = createConfiguration();
const apiInstance = new SubscribersContactsApi(configuration);

const request: SubscribersContactsApiContactsUidUnsubscribePatchRequest = {
    // (Required) The uid of the contact to unsubscribe.
  uid: "<string>",
  
  accept: "application/json",
    // (Required) The uid of the mail list to unsubscribe the contact. (optional)
  listUid: "<string>",
  
  body: {},
};

const data = await apiInstance.contactsUidUnsubscribePatch(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **any**|  |
 **uid** | [**string**] | (Required) The uid of the contact to unsubscribe. | defaults to undefined
 **accept** | [**string**] |  | (optional) defaults to undefined
 **listUid** | [**string**] | (Required) The uid of the mail list to unsubscribe the contact. | (optional) defaults to undefined


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


