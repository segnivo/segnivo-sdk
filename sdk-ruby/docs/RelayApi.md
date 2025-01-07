# SegnivoSDK::RelayApi

All URIs are relative to *https://api.segnivo.com/v1*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**relay_emails_id_get**](RelayApi.md#relay_emails_id_get) | **GET** /relay/emails/{id} | Fetch Emails |
| [**relay_raw_post**](RelayApi.md#relay_raw_post) | **POST** /relay/raw | Send a Raw Email Message |


## relay_emails_id_get

> Object relay_emails_id_get(id, opts)

Fetch Emails

The `/emails` endpoint lets you fetch one or more marketing/transactional email(s) from your `Segnivo Messaging` account and it accepts two **optional** parameters.  - The `id` string of the email to fetch provided as a path variable      - The `limit` on the number of records to fetch (if email id is not provided) as a query string parameter. This value defaults to 100 if not provided.

### Examples

```ruby
require 'time'
require 'segnivo_sdk'
# setup authorization
SegnivoSDK.configure do |config|
  # Configure API key authorization: apiKeyAuth
  config.api_key['X-API-KEY'] = 'YOUR API KEY'
  # Uncomment the following line to set a prefix for the API key, e.g. 'Bearer' (defaults to nil)
  # config.api_key_prefix['X-API-KEY'] = 'Bearer'
end

api_instance = SegnivoSDK::RelayApi.new
id = '<string>' # String | The ID of the email to fetch
opts = {
  limit: 100 # Integer | The number of records to fetch
}

begin
  # Fetch Emails
  result = api_instance.relay_emails_id_get(id, opts)
  p result
rescue SegnivoSDK::ApiError => e
  puts "Error when calling RelayApi->relay_emails_id_get: #{e}"
end
```

#### Using the relay_emails_id_get_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> relay_emails_id_get_with_http_info(id, opts)

```ruby
begin
  # Fetch Emails
  data, status_code, headers = api_instance.relay_emails_id_get_with_http_info(id, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue SegnivoSDK::ApiError => e
  puts "Error when calling RelayApi->relay_emails_id_get_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** | The ID of the email to fetch |  |
| **limit** | **Integer** | The number of records to fetch | [optional] |

### Return type

**Object**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## relay_raw_post

> Object relay_raw_post(opts)

Send a Raw Email Message

The `/raw` endpoint lets you send marketing and transactional emails from your `Segnivo Messaging` account by passing a raw RFC822 message to the `message` attribute in the request body.  The following parameters should be passed as a form data to the endpoint  - **message** - A raw RFC822 message      - **sign_dkim** (optional, defaults to `true`) - A boolean value on if a DKIM signature should be included in this message      - **track_click** (optional, defaults to `true`) - A boolean value on if email clicks should be tracked. If `true` links in the email will be rewritten to enable tracking      - **track_open** (optional, defaults to `true`) - A boolean value on if the email opens should be tracked      - **is_transactional** (optional, defaults to `false`) - A boolean value to flag this email as a transactional email

### Examples

```ruby
require 'time'
require 'segnivo_sdk'
# setup authorization
SegnivoSDK.configure do |config|
  # Configure API key authorization: apiKeyAuth
  config.api_key['X-API-KEY'] = 'YOUR API KEY'
  # Uncomment the following line to set a prefix for the API key, e.g. 'Bearer' (defaults to nil)
  # config.api_key_prefix['X-API-KEY'] = 'Bearer'
end

api_instance = SegnivoSDK::RelayApi.new
opts = {
  message: 'message_example', # String | 
  is_transactional: true, # Boolean | 
  track_click: true, # Boolean | 
  track_open: true, # Boolean | 
  sign_dkim: true # Boolean | 
}

begin
  # Send a Raw Email Message
  result = api_instance.relay_raw_post(opts)
  p result
rescue SegnivoSDK::ApiError => e
  puts "Error when calling RelayApi->relay_raw_post: #{e}"
end
```

#### Using the relay_raw_post_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> relay_raw_post_with_http_info(opts)

```ruby
begin
  # Send a Raw Email Message
  data, status_code, headers = api_instance.relay_raw_post_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue SegnivoSDK::ApiError => e
  puts "Error when calling RelayApi->relay_raw_post_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **message** | **String** |  | [optional] |
| **is_transactional** | **Boolean** |  | [optional] |
| **track_click** | **Boolean** |  | [optional] |
| **track_open** | **Boolean** |  | [optional] |
| **sign_dkim** | **Boolean** |  | [optional] |

### Return type

**Object**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

