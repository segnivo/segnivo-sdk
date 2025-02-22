# segnivo_sdk.MailingListsApi

All URIs are relative to *https://api.segnivo.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**lists_get**](MailingListsApi.md#lists_get) | **GET** /lists | Get mailing lists
[**lists_post**](MailingListsApi.md#lists_post) | **POST** /lists | Create a Mailing List
[**lists_uid_add_field_post**](MailingListsApi.md#lists_uid_add_field_post) | **POST** /lists/{uid}/add-field | Add a field
[**lists_uid_delete_post**](MailingListsApi.md#lists_uid_delete_post) | **POST** /lists/{uid}/delete | Delete a list
[**lists_uid_get**](MailingListsApi.md#lists_uid_get) | **GET** /lists/{uid} | Get a list
[**lists_uid_patch**](MailingListsApi.md#lists_uid_patch) | **PATCH** /lists/{uid} | Update a List


# **lists_get**
> object lists_get()

Get mailing lists

Returns all your existing lists

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
    api_instance = segnivo_sdk.MailingListsApi(api_client)

    try:
        # Get mailing lists
        api_response = api_instance.lists_get()
        print("The response of MailingListsApi->lists_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MailingListsApi->lists_get: %s\n" % e)
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

# **lists_post**
> object lists_post(mailing_list_request=mailing_list_request)

Create a Mailing List

Create a new mailing list

### Example

* Api Key Authentication (apiKeyAuth):

```python
import segnivo_sdk
from segnivo_sdk.models.mailing_list_request import MailingListRequest
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
    api_instance = segnivo_sdk.MailingListsApi(api_client)
    mailing_list_request = segnivo_sdk.MailingListRequest() # MailingListRequest |  (optional)

    try:
        # Create a Mailing List
        api_response = api_instance.lists_post(mailing_list_request=mailing_list_request)
        print("The response of MailingListsApi->lists_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MailingListsApi->lists_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mailing_list_request** | [**MailingListRequest**](MailingListRequest.md)|  | [optional] 

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

# **lists_uid_add_field_post**
> object lists_uid_add_field_post(uid, mailing_list_add_field_request=mailing_list_add_field_request)

Add a field

Add a field to an existing list

### Example

* Api Key Authentication (apiKeyAuth):

```python
import segnivo_sdk
from segnivo_sdk.models.mailing_list_add_field_request import MailingListAddFieldRequest
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
    api_instance = segnivo_sdk.MailingListsApi(api_client)
    uid = '<string>' # str | (Required) The uid of the list to add a field to.
    mailing_list_add_field_request = segnivo_sdk.MailingListAddFieldRequest() # MailingListAddFieldRequest |  (optional)

    try:
        # Add a field
        api_response = api_instance.lists_uid_add_field_post(uid, mailing_list_add_field_request=mailing_list_add_field_request)
        print("The response of MailingListsApi->lists_uid_add_field_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MailingListsApi->lists_uid_add_field_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uid** | **str**| (Required) The uid of the list to add a field to. | 
 **mailing_list_add_field_request** | [**MailingListAddFieldRequest**](MailingListAddFieldRequest.md)|  | [optional] 

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

# **lists_uid_delete_post**
> object lists_uid_delete_post(uid, body=body)

Delete a list

Delete an existing list

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
    api_instance = segnivo_sdk.MailingListsApi(api_client)
    uid = '<string>' # str | (Required) The uid of the list to delete.
    body = None # object |  (optional)

    try:
        # Delete a list
        api_response = api_instance.lists_uid_delete_post(uid, body=body)
        print("The response of MailingListsApi->lists_uid_delete_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MailingListsApi->lists_uid_delete_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uid** | **str**| (Required) The uid of the list to delete. | 
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

# **lists_uid_get**
> object lists_uid_get(uid)

Get a list

Returns detailed information about a specified list

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
    api_instance = segnivo_sdk.MailingListsApi(api_client)
    uid = '<string>' # str | (Required) The uid of the mailing list to fetch.

    try:
        # Get a list
        api_response = api_instance.lists_uid_get(uid)
        print("The response of MailingListsApi->lists_uid_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MailingListsApi->lists_uid_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uid** | **str**| (Required) The uid of the mailing list to fetch. | 

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

# **lists_uid_patch**
> object lists_uid_patch(uid, mailing_list_request=mailing_list_request)

Update a List

Update an existing mailing list

### Example

* Api Key Authentication (apiKeyAuth):

```python
import segnivo_sdk
from segnivo_sdk.models.mailing_list_request import MailingListRequest
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
    api_instance = segnivo_sdk.MailingListsApi(api_client)
    uid = '<string>' # str | (Required) The uid of the list to update.
    mailing_list_request = segnivo_sdk.MailingListRequest() # MailingListRequest |  (optional)

    try:
        # Update a List
        api_response = api_instance.lists_uid_patch(uid, mailing_list_request=mailing_list_request)
        print("The response of MailingListsApi->lists_uid_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MailingListsApi->lists_uid_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uid** | **str**| (Required) The uid of the list to update. | 
 **mailing_list_request** | [**MailingListRequest**](MailingListRequest.md)|  | [optional] 

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

