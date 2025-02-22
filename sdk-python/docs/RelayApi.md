# segnivo_sdk.RelayApi

All URIs are relative to *https://api.segnivo.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**relay_emails_id_get**](RelayApi.md#relay_emails_id_get) | **GET** /relay/emails/{id} | Fetch Emails
[**relay_raw_post**](RelayApi.md#relay_raw_post) | **POST** /relay/raw | Send a Raw Email Message


# **relay_emails_id_get**
> object relay_emails_id_get(id, limit=limit)

Fetch Emails

The `/emails` endpoint lets you fetch one or more marketing/transactional email(s) from your `Segnivo Messaging` account and it accepts two **optional** parameters.  - The `id` string of the email to fetch provided as a path variable      - The `limit` on the number of records to fetch (if email id is not provided) as a query string parameter. This value defaults to 100 if not provided.

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
    api_instance = segnivo_sdk.RelayApi(api_client)
    id = '<string>' # str | The ID of the email to fetch
    limit = 100 # int | The number of records to fetch (optional)

    try:
        # Fetch Emails
        api_response = api_instance.relay_emails_id_get(id, limit=limit)
        print("The response of RelayApi->relay_emails_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RelayApi->relay_emails_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The ID of the email to fetch | 
 **limit** | **int**| The number of records to fetch | [optional] 

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

# **relay_raw_post**
> object relay_raw_post(message=message, is_transactional=is_transactional, track_click=track_click, track_open=track_open, sign_dkim=sign_dkim)

Send a Raw Email Message

The `/raw` endpoint lets you send marketing and transactional emails from your `Segnivo Messaging` account by passing a raw RFC822 message to the `message` attribute in the request body.  The following parameters should be passed as a form data to the endpoint  - **message** - A raw RFC822 message      - **sign_dkim** (optional, defaults to `true`) - A boolean value on if a DKIM signature should be included in this message      - **track_click** (optional, defaults to `true`) - A boolean value on if email clicks should be tracked. If `true` links in the email will be rewritten to enable tracking      - **track_open** (optional, defaults to `true`) - A boolean value on if the email opens should be tracked      - **is_transactional** (optional, defaults to `false`) - A boolean value to flag this email as a transactional email

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
    api_instance = segnivo_sdk.RelayApi(api_client)
    message = 'message_example' # str | The raw email content in RFC822 format. This should include headers, body content, and any attachments. (optional)
    is_transactional = True # bool | Indicates whether the email is transactional (e.g., receipts, order confirmations) or marketing. Transactional emails typically bypass unsubscribes. (optional)
    track_click = True # bool | Enables or disables click tracking within the email. When enabled, any hyperlinks in the email will be tracked to gather analytics on user interactions. (optional)
    track_open = True # bool | Enables or disables open tracking for the email. When enabled, a tracking pixel is embedded in the email to monitor whether the recipient has opened it. (optional)
    sign_dkim = True # bool | Specifies whether the email should be signed with a DKIM (DomainKeys Identified Mail) signature. DKIM helps improve email deliverability by ensuring the email's integrity. (optional)

    try:
        # Send a Raw Email Message
        api_response = api_instance.relay_raw_post(message=message, is_transactional=is_transactional, track_click=track_click, track_open=track_open, sign_dkim=sign_dkim)
        print("The response of RelayApi->relay_raw_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RelayApi->relay_raw_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **message** | **str**| The raw email content in RFC822 format. This should include headers, body content, and any attachments. | [optional] 
 **is_transactional** | **bool**| Indicates whether the email is transactional (e.g., receipts, order confirmations) or marketing. Transactional emails typically bypass unsubscribes. | [optional] 
 **track_click** | **bool**| Enables or disables click tracking within the email. When enabled, any hyperlinks in the email will be tracked to gather analytics on user interactions. | [optional] 
 **track_open** | **bool**| Enables or disables open tracking for the email. When enabled, a tracking pixel is embedded in the email to monitor whether the recipient has opened it. | [optional] 
 **sign_dkim** | **bool**| Specifies whether the email should be signed with a DKIM (DomainKeys Identified Mail) signature. DKIM helps improve email deliverability by ensuring the email&#39;s integrity. | [optional] 

### Return type

**object**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  * Content-Type -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

