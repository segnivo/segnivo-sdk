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
> object messages_get(accept=accept)

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
    accept = 'application/json' # str |  (optional)

    try:
        # Get campaigns
        api_response = api_instance.messages_get(accept=accept)
        print("The response of EmailCampaignsApi->messages_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EmailCampaignsApi->messages_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accept** | **str**|  | [optional] 

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
> object messages_post(content_type=content_type, accept=accept, body=body)

Create a Campaign

Creat an email campaign for processing

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
    content_type = 'application/json' # str |  (optional)
    accept = 'application/json' # str |  (optional)
    body = None # object |  (optional)

    try:
        # Create a Campaign
        api_response = api_instance.messages_post(content_type=content_type, accept=accept, body=body)
        print("The response of EmailCampaignsApi->messages_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EmailCampaignsApi->messages_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content_type** | **str**|  | [optional] 
 **accept** | **str**|  | [optional] 
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
**201** | Created |  * Content-Type -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **messages_uid_delete_post**
> object messages_uid_delete_post(uid, accept=accept, body=body)

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
    accept = 'application/json' # str |  (optional)
    body = None # object |  (optional)

    try:
        # Delete a campaign
        api_response = api_instance.messages_uid_delete_post(uid, accept=accept, body=body)
        print("The response of EmailCampaignsApi->messages_uid_delete_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EmailCampaignsApi->messages_uid_delete_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uid** | **str**| (Required) The uid of the campaign to delete | 
 **accept** | **str**|  | [optional] 
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
> object messages_uid_get(uid, accept=accept)

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
    accept = 'application/json' # str |  (optional)

    try:
        # Get a campaign
        api_response = api_instance.messages_uid_get(uid, accept=accept)
        print("The response of EmailCampaignsApi->messages_uid_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EmailCampaignsApi->messages_uid_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uid** | **str**| (Required) The uid of the campaign to fetch | 
 **accept** | **str**|  | [optional] 

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
> object messages_uid_patch(uid, content_type=content_type, accept=accept, body=body)

Update Campaign

Updates a previously added campaign. Only Active and Paused campaigns can be updated.

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
    uid = '<string>' # str | (Required) The uid of the campaign to update
    content_type = 'application/json' # str |  (optional)
    accept = 'application/json' # str |  (optional)
    body = None # object |  (optional)

    try:
        # Update Campaign
        api_response = api_instance.messages_uid_patch(uid, content_type=content_type, accept=accept, body=body)
        print("The response of EmailCampaignsApi->messages_uid_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EmailCampaignsApi->messages_uid_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uid** | **str**| (Required) The uid of the campaign to update | 
 **content_type** | **str**|  | [optional] 
 **accept** | **str**|  | [optional] 
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

# **messages_uid_pause_post**
> object messages_uid_pause_post(uid, accept=accept, body=body)

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
    accept = 'application/json' # str |  (optional)
    body = None # object |  (optional)

    try:
        # Pause a campaign
        api_response = api_instance.messages_uid_pause_post(uid, accept=accept, body=body)
        print("The response of EmailCampaignsApi->messages_uid_pause_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EmailCampaignsApi->messages_uid_pause_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uid** | **str**| (Required) The uid of the campaign to pause | 
 **accept** | **str**|  | [optional] 
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
> object messages_uid_resume_post(uid, accept=accept, body=body)

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
    accept = 'application/json' # str |  (optional)
    body = None # object |  (optional)

    try:
        # Resume the delivery of a campaign
        api_response = api_instance.messages_uid_resume_post(uid, accept=accept, body=body)
        print("The response of EmailCampaignsApi->messages_uid_resume_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EmailCampaignsApi->messages_uid_resume_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uid** | **str**| (Required) The uid of the campaign to resume | 
 **accept** | **str**|  | [optional] 
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

