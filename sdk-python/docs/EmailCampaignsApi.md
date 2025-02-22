# segnivo_sdk.EmailCampaignsApi

All URIs are relative to *https://api.segnivo.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**messages_get**](EmailCampaignsApi.md#messages_get) | **GET** /messages | Get campaigns
[**messages_post**](EmailCampaignsApi.md#messages_post) | **POST** /messages | Create a Campaign
[**messages_uid_delete_post**](EmailCampaignsApi.md#messages_uid_delete_post) | **POST** /messages/{uid}/delete | Delete a campaign
[**messages_uid_get**](EmailCampaignsApi.md#messages_uid_get) | **GET** /messages/{uid} | Get a campaign
[**messages_uid_patch**](EmailCampaignsApi.md#messages_uid_patch) | **PATCH** /messages/{uid} | Update Campaign
[**messages_uid_pause_post**](EmailCampaignsApi.md#messages_uid_pause_post) | **POST** /messages/{uid}/pause | Pause a campaign
[**messages_uid_resume_post**](EmailCampaignsApi.md#messages_uid_resume_post) | **POST** /messages/{uid}/resume | Resume the delivery of a campaign


# **messages_get**
> object messages_get()

Get campaigns

Returns a collection of all your campaigns

### Example

* Api Key Authentication (apiKeyAuth):

```python
import segnivo_sdk
from segnivo_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.segnivo.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = segnivo_sdk.Configuration(
    host = "https://api.segnivo.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyAuth
configuration.api_key['apiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with segnivo_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = segnivo_sdk.EmailCampaignsApi(api_client)

    try:
        # Get campaigns
        api_response = api_instance.messages_get()
        print("The response of EmailCampaignsApi->messages_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EmailCampaignsApi->messages_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**object**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  * Content-Type -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **messages_post**
> object messages_post(campaign_create_request=campaign_create_request)

Create a Campaign

Creat an email campaign for processing

### Example

* Api Key Authentication (apiKeyAuth):

```python
import segnivo_sdk
from segnivo_sdk.models.campaign_create_request import CampaignCreateRequest
from segnivo_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.segnivo.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = segnivo_sdk.Configuration(
    host = "https://api.segnivo.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyAuth
configuration.api_key['apiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with segnivo_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = segnivo_sdk.EmailCampaignsApi(api_client)
    campaign_create_request = segnivo_sdk.CampaignCreateRequest() # CampaignCreateRequest |  (optional)

    try:
        # Create a Campaign
        api_response = api_instance.messages_post(campaign_create_request=campaign_create_request)
        print("The response of EmailCampaignsApi->messages_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EmailCampaignsApi->messages_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaign_create_request** | [**CampaignCreateRequest**](CampaignCreateRequest.md)|  | [optional] 

### Return type

**object**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  * Content-Type -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **messages_uid_delete_post**
> object messages_uid_delete_post(uid, body=body)

Delete a campaign

Delete the specified campaign

### Example

* Api Key Authentication (apiKeyAuth):

```python
import segnivo_sdk
from segnivo_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.segnivo.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = segnivo_sdk.Configuration(
    host = "https://api.segnivo.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyAuth
configuration.api_key['apiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with segnivo_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = segnivo_sdk.EmailCampaignsApi(api_client)
    uid = '<string>' # str | (Required) The uid of the campaign to delete
    body = None # object |  (optional)

    try:
        # Delete a campaign
        api_response = api_instance.messages_uid_delete_post(uid, body=body)
        print("The response of EmailCampaignsApi->messages_uid_delete_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EmailCampaignsApi->messages_uid_delete_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uid** | **str**| (Required) The uid of the campaign to delete | 
 **body** | **object**|  | [optional] 

### Return type

**object**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  * Content-Type -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **messages_uid_get**
> object messages_uid_get(uid)

Get a campaign

Returns the specified campaign details

### Example

* Api Key Authentication (apiKeyAuth):

```python
import segnivo_sdk
from segnivo_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.segnivo.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = segnivo_sdk.Configuration(
    host = "https://api.segnivo.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyAuth
configuration.api_key['apiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with segnivo_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = segnivo_sdk.EmailCampaignsApi(api_client)
    uid = '<string>' # str | (Required) The uid of the campaign to fetch

    try:
        # Get a campaign
        api_response = api_instance.messages_uid_get(uid)
        print("The response of EmailCampaignsApi->messages_uid_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EmailCampaignsApi->messages_uid_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uid** | **str**| (Required) The uid of the campaign to fetch | 

### Return type

**object**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  * Content-Type -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **messages_uid_patch**
> object messages_uid_patch(uid, campaign_update_request=campaign_update_request)

Update Campaign

Updates a previously added campaign. Only Active and Paused campaigns can be updated.

### Example

* Api Key Authentication (apiKeyAuth):

```python
import segnivo_sdk
from segnivo_sdk.models.campaign_update_request import CampaignUpdateRequest
from segnivo_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.segnivo.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = segnivo_sdk.Configuration(
    host = "https://api.segnivo.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyAuth
configuration.api_key['apiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with segnivo_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = segnivo_sdk.EmailCampaignsApi(api_client)
    uid = '<string>' # str | (Required) The uid of the campaign to update
    campaign_update_request = segnivo_sdk.CampaignUpdateRequest() # CampaignUpdateRequest |  (optional)

    try:
        # Update Campaign
        api_response = api_instance.messages_uid_patch(uid, campaign_update_request=campaign_update_request)
        print("The response of EmailCampaignsApi->messages_uid_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EmailCampaignsApi->messages_uid_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uid** | **str**| (Required) The uid of the campaign to update | 
 **campaign_update_request** | [**CampaignUpdateRequest**](CampaignUpdateRequest.md)|  | [optional] 

### Return type

**object**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  * Content-Type -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **messages_uid_pause_post**
> object messages_uid_pause_post(uid, body=body)

Pause a campaign

Pause the specified campaign

### Example

* Api Key Authentication (apiKeyAuth):

```python
import segnivo_sdk
from segnivo_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.segnivo.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = segnivo_sdk.Configuration(
    host = "https://api.segnivo.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyAuth
configuration.api_key['apiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with segnivo_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = segnivo_sdk.EmailCampaignsApi(api_client)
    uid = '<string>' # str | (Required) The uid of the campaign to pause
    body = None # object |  (optional)

    try:
        # Pause a campaign
        api_response = api_instance.messages_uid_pause_post(uid, body=body)
        print("The response of EmailCampaignsApi->messages_uid_pause_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EmailCampaignsApi->messages_uid_pause_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uid** | **str**| (Required) The uid of the campaign to pause | 
 **body** | **object**|  | [optional] 

### Return type

**object**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  * Content-Type -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **messages_uid_resume_post**
> object messages_uid_resume_post(uid, body=body)

Resume the delivery of a campaign

Resume delivery of the specified campaign

### Example

* Api Key Authentication (apiKeyAuth):

```python
import segnivo_sdk
from segnivo_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.segnivo.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = segnivo_sdk.Configuration(
    host = "https://api.segnivo.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyAuth
configuration.api_key['apiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with segnivo_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = segnivo_sdk.EmailCampaignsApi(api_client)
    uid = '<string>' # str | (Required) The uid of the campaign to resume
    body = None # object |  (optional)

    try:
        # Resume the delivery of a campaign
        api_response = api_instance.messages_uid_resume_post(uid, body=body)
        print("The response of EmailCampaignsApi->messages_uid_resume_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EmailCampaignsApi->messages_uid_resume_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uid** | **str**| (Required) The uid of the campaign to resume | 
 **body** | **object**|  | [optional] 

### Return type

**object**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  * Content-Type -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

