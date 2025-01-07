# segnivo_sdk.SubscribersContactsApi

All URIs are relative to *https://api.segnivo.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**contacts_get**](SubscribersContactsApi.md#contacts_get) | **GET** /contacts | Get contacts
[**contacts_post**](SubscribersContactsApi.md#contacts_post) | **POST** /contacts | Add a Contact
[**contacts_uid_add_tag_post**](SubscribersContactsApi.md#contacts_uid_add_tag_post) | **POST** /contacts/{uid}/add-tag | Add tags to a contact
[**contacts_uid_delete_post**](SubscribersContactsApi.md#contacts_uid_delete_post) | **POST** /contacts/{uid}/delete | Delete a contact
[**contacts_uid_get**](SubscribersContactsApi.md#contacts_uid_get) | **GET** /contacts/{uid} | Get a contact
[**contacts_uid_patch**](SubscribersContactsApi.md#contacts_uid_patch) | **PATCH** /contacts/{uid} | Update Contact
[**contacts_uid_subscribe_patch**](SubscribersContactsApi.md#contacts_uid_subscribe_patch) | **PATCH** /contacts/{uid}/subscribe | Subscribe a contact
[**contacts_uid_unsubscribe_patch**](SubscribersContactsApi.md#contacts_uid_unsubscribe_patch) | **PATCH** /contacts/{uid}/unsubscribe | Unsubscribe a contact


# **contacts_get**
> object contacts_get(accept=accept, email=email, per_page=per_page, page=page)

Get contacts

Returns a list of contacts/subscribers on your account  This endpoint accepts three **optional** query parameters  - `email` — An email address to search for. If set, the endpoint only returns subscribers that have an identical email address.      - `per_page` — A limit on the number of records to return.      - `page` — The parameter serves as an offset on the number of records returned.

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
    api_instance = segnivo_sdk.SubscribersContactsApi(api_client)
    accept = 'application/json' # str |  (optional)
    email = '<string>' # str | An email address to search for. (optional)
    per_page = 20 # int | How many items should be returned ahead. (optional)
    page = 1 # int | The offset for the items to be returned, helps in pagination. (optional)

    try:
        # Get contacts
        api_response = api_instance.contacts_get(accept=accept, email=email, per_page=per_page, page=page)
        print("The response of SubscribersContactsApi->contacts_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubscribersContactsApi->contacts_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accept** | **str**|  | [optional] 
 **email** | **str**| An email address to search for. | [optional] 
 **per_page** | **int**| How many items should be returned ahead. | [optional] 
 **page** | **int**| The offset for the items to be returned, helps in pagination. | [optional] 

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

# **contacts_post**
> object contacts_post(content_type=content_type, accept=accept, body=body)

Add a Contact

Add a new contact/subscriber to your mailing list

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
    api_instance = segnivo_sdk.SubscribersContactsApi(api_client)
    content_type = 'application/json' # str |  (optional)
    accept = 'application/json' # str |  (optional)
    body = None # object |  (optional)

    try:
        # Add a Contact
        api_response = api_instance.contacts_post(content_type=content_type, accept=accept, body=body)
        print("The response of SubscribersContactsApi->contacts_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubscribersContactsApi->contacts_post: %s\n" % e)
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
**200** | OK |  * Content-Type -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **contacts_uid_add_tag_post**
> object contacts_uid_add_tag_post(uid, content_type=content_type, accept=accept, body=body)

Add tags to a contact

Add tags to an existing contact

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
    api_instance = segnivo_sdk.SubscribersContactsApi(api_client)
    uid = '<string>' # str | (Required) The uid of the contact to update with the tags.
    content_type = 'application/json' # str |  (optional)
    accept = 'application/json' # str |  (optional)
    body = None # object |  (optional)

    try:
        # Add tags to a contact
        api_response = api_instance.contacts_uid_add_tag_post(uid, content_type=content_type, accept=accept, body=body)
        print("The response of SubscribersContactsApi->contacts_uid_add_tag_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubscribersContactsApi->contacts_uid_add_tag_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uid** | **str**| (Required) The uid of the contact to update with the tags. | 
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

# **contacts_uid_delete_post**
> object contacts_uid_delete_post(uid, accept=accept, body=body)

Delete a contact

Delete an existing contact

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
    api_instance = segnivo_sdk.SubscribersContactsApi(api_client)
    uid = '<string>' # str | (Required) The uid of the contact to delete.
    accept = 'application/json' # str |  (optional)
    body = None # object |  (optional)

    try:
        # Delete a contact
        api_response = api_instance.contacts_uid_delete_post(uid, accept=accept, body=body)
        print("The response of SubscribersContactsApi->contacts_uid_delete_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubscribersContactsApi->contacts_uid_delete_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uid** | **str**| (Required) The uid of the contact to delete. | 
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

# **contacts_uid_get**
> object contacts_uid_get(uid, accept=accept)

Get a contact

Fetch detailed contact information for specified a contact

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
    api_instance = segnivo_sdk.SubscribersContactsApi(api_client)
    uid = '<string>' # str | (Required) The uid of the contact to get.
    accept = 'application/json' # str |  (optional)

    try:
        # Get a contact
        api_response = api_instance.contacts_uid_get(uid, accept=accept)
        print("The response of SubscribersContactsApi->contacts_uid_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubscribersContactsApi->contacts_uid_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uid** | **str**| (Required) The uid of the contact to get. | 
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

# **contacts_uid_patch**
> object contacts_uid_patch(uid, content_type=content_type, accept=accept, body=body)

Update Contact

Update the specified subscriber/contact

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
    api_instance = segnivo_sdk.SubscribersContactsApi(api_client)
    uid = '<string>' # str | (Required) The uid of the contact to update.
    content_type = 'application/json' # str |  (optional)
    accept = 'application/json' # str |  (optional)
    body = None # object |  (optional)

    try:
        # Update Contact
        api_response = api_instance.contacts_uid_patch(uid, content_type=content_type, accept=accept, body=body)
        print("The response of SubscribersContactsApi->contacts_uid_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubscribersContactsApi->contacts_uid_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uid** | **str**| (Required) The uid of the contact to update. | 
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

# **contacts_uid_subscribe_patch**
> object contacts_uid_subscribe_patch(uid, accept=accept, list_uid=list_uid, body=body)

Subscribe a contact

Subscribe a contact to a list

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
    api_instance = segnivo_sdk.SubscribersContactsApi(api_client)
    uid = '<string>' # str | (Required) The uid of the contact to subscribe.
    accept = 'application/json' # str |  (optional)
    list_uid = '<string>' # str | (Required) The uid of the mail list to subscribe the contact. (optional)
    body = None # object |  (optional)

    try:
        # Subscribe a contact
        api_response = api_instance.contacts_uid_subscribe_patch(uid, accept=accept, list_uid=list_uid, body=body)
        print("The response of SubscribersContactsApi->contacts_uid_subscribe_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubscribersContactsApi->contacts_uid_subscribe_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uid** | **str**| (Required) The uid of the contact to subscribe. | 
 **accept** | **str**|  | [optional] 
 **list_uid** | **str**| (Required) The uid of the mail list to subscribe the contact. | [optional] 
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

# **contacts_uid_unsubscribe_patch**
> object contacts_uid_unsubscribe_patch(uid, accept=accept, list_uid=list_uid, body=body)

Unsubscribe a contact

Unsubscribe a contact from a list

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
    api_instance = segnivo_sdk.SubscribersContactsApi(api_client)
    uid = '<string>' # str | (Required) The uid of the contact to unsubscribe.
    accept = 'application/json' # str |  (optional)
    list_uid = '<string>' # str | (Required) The uid of the mail list to unsubscribe the contact. (optional)
    body = None # object |  (optional)

    try:
        # Unsubscribe a contact
        api_response = api_instance.contacts_uid_unsubscribe_patch(uid, accept=accept, list_uid=list_uid, body=body)
        print("The response of SubscribersContactsApi->contacts_uid_unsubscribe_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubscribersContactsApi->contacts_uid_unsubscribe_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uid** | **str**| (Required) The uid of the contact to unsubscribe. | 
 **accept** | **str**|  | [optional] 
 **list_uid** | **str**| (Required) The uid of the mail list to unsubscribe the contact. | [optional] 
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

