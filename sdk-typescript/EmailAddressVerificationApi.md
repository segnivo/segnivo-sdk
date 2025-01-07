# Segnivo-Sdk.EmailAddressVerificationApi

All URIs are relative to *https://api.segnivo.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**validateEmailPost**](EmailAddressVerificationApi.md#validateEmailPost) | **POST** /validate-email | Email Address Verification Validation


# **validateEmailPost**
> any validateEmailPost()

The `/validate-email` endpoint allows you to pass the email addresses you wish to verify and get a response on each of their status.  The following data should be passed in JSON format in the request body  - **emails** - An array/collection containing a minimum of one and maximum of fifty email addresses for verification/validation.

### Example


```typescript
import { createConfiguration, EmailAddressVerificationApi } from 'segnivo-typescript-sdk';
import type { EmailAddressVerificationApiValidateEmailPostRequest } from 'segnivo-typescript-sdk';

const configuration = createConfiguration();
const apiInstance = new EmailAddressVerificationApi(configuration);

const request: EmailAddressVerificationApiValidateEmailPostRequest = {
  
  body: {},
};

const data = await apiInstance.validateEmailPost(request);
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
**200** | OK |  * Date -  <br>  * Server -  <br>  * X-Powered-By -  <br>  * Access-Control-Allow-Origin -  <br>  * Access-Control-Allow-Headers -  <br>  * Access-Control-Allow-Methods -  <br>  * Content-Length -  <br>  * Keep-Alive -  <br>  * Connection -  <br>  * Content-Type -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


