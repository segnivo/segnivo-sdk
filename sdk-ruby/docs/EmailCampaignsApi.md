# SegnivoSDK::EmailCampaignsApi

All URIs are relative to *https://api.segnivo.com/v1*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**messages_get**](EmailCampaignsApi.md#messages_get) | **GET** /messages | Get campaigns |
| [**messages_post**](EmailCampaignsApi.md#messages_post) | **POST** /messages | Create a Campaign |
| [**messages_uid_delete_post**](EmailCampaignsApi.md#messages_uid_delete_post) | **POST** /messages/{uid}/delete | Delete a campaign |
| [**messages_uid_get**](EmailCampaignsApi.md#messages_uid_get) | **GET** /messages/{uid} | Get a campaign |
| [**messages_uid_patch**](EmailCampaignsApi.md#messages_uid_patch) | **PATCH** /messages/{uid} | Update Campaign |
| [**messages_uid_pause_post**](EmailCampaignsApi.md#messages_uid_pause_post) | **POST** /messages/{uid}/pause | Pause a campaign |
| [**messages_uid_resume_post**](EmailCampaignsApi.md#messages_uid_resume_post) | **POST** /messages/{uid}/resume | Resume the delivery of a campaign |


## messages_get

> Object messages_get

Get campaigns

Returns a collection of all your campaigns

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

api_instance = SegnivoSDK::EmailCampaignsApi.new

begin
  # Get campaigns
  result = api_instance.messages_get
  p result
rescue SegnivoSDK::ApiError => e
  puts "Error when calling EmailCampaignsApi->messages_get: #{e}"
end
```

#### Using the messages_get_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> messages_get_with_http_info

```ruby
begin
  # Get campaigns
  data, status_code, headers = api_instance.messages_get_with_http_info
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue SegnivoSDK::ApiError => e
  puts "Error when calling EmailCampaignsApi->messages_get_with_http_info: #{e}"
end
```

### Parameters

This endpoint does not need any parameter.

### Return type

**Object**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## messages_post

> Object messages_post(opts)

Create a Campaign

Creat an email campaign for processing

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

api_instance = SegnivoSDK::EmailCampaignsApi.new
opts = {
  campaign_create_request: SegnivoSDK::CampaignCreateRequest.new # CampaignCreateRequest | 
}

begin
  # Create a Campaign
  result = api_instance.messages_post(opts)
  p result
rescue SegnivoSDK::ApiError => e
  puts "Error when calling EmailCampaignsApi->messages_post: #{e}"
end
```

#### Using the messages_post_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> messages_post_with_http_info(opts)

```ruby
begin
  # Create a Campaign
  data, status_code, headers = api_instance.messages_post_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue SegnivoSDK::ApiError => e
  puts "Error when calling EmailCampaignsApi->messages_post_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **campaign_create_request** | [**CampaignCreateRequest**](CampaignCreateRequest.md) |  | [optional] |

### Return type

**Object**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## messages_uid_delete_post

> Object messages_uid_delete_post(uid, opts)

Delete a campaign

Delete the specified campaign

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

api_instance = SegnivoSDK::EmailCampaignsApi.new
uid = '<string>' # String | (Required) The uid of the campaign to delete
opts = {
  body: { ... } # Object | 
}

begin
  # Delete a campaign
  result = api_instance.messages_uid_delete_post(uid, opts)
  p result
rescue SegnivoSDK::ApiError => e
  puts "Error when calling EmailCampaignsApi->messages_uid_delete_post: #{e}"
end
```

#### Using the messages_uid_delete_post_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> messages_uid_delete_post_with_http_info(uid, opts)

```ruby
begin
  # Delete a campaign
  data, status_code, headers = api_instance.messages_uid_delete_post_with_http_info(uid, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue SegnivoSDK::ApiError => e
  puts "Error when calling EmailCampaignsApi->messages_uid_delete_post_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **uid** | **String** | (Required) The uid of the campaign to delete |  |
| **body** | **Object** |  | [optional] |

### Return type

**Object**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## messages_uid_get

> Object messages_uid_get(uid)

Get a campaign

Returns the specified campaign details

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

api_instance = SegnivoSDK::EmailCampaignsApi.new
uid = '<string>' # String | (Required) The uid of the campaign to fetch

begin
  # Get a campaign
  result = api_instance.messages_uid_get(uid)
  p result
rescue SegnivoSDK::ApiError => e
  puts "Error when calling EmailCampaignsApi->messages_uid_get: #{e}"
end
```

#### Using the messages_uid_get_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> messages_uid_get_with_http_info(uid)

```ruby
begin
  # Get a campaign
  data, status_code, headers = api_instance.messages_uid_get_with_http_info(uid)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue SegnivoSDK::ApiError => e
  puts "Error when calling EmailCampaignsApi->messages_uid_get_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **uid** | **String** | (Required) The uid of the campaign to fetch |  |

### Return type

**Object**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## messages_uid_patch

> Object messages_uid_patch(uid, opts)

Update Campaign

Updates a previously added campaign. Only Active and Paused campaigns can be updated.

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

api_instance = SegnivoSDK::EmailCampaignsApi.new
uid = '<string>' # String | (Required) The uid of the campaign to update
opts = {
  campaign_update_request: SegnivoSDK::CampaignUpdateRequest.new({name: 'Your Campaign Name', subject: 'Welcome to our service!', from_email: 'no-reply@example.com', from_name: 'Example Team', reply_to: 'support@example.com'}) # CampaignUpdateRequest | 
}

begin
  # Update Campaign
  result = api_instance.messages_uid_patch(uid, opts)
  p result
rescue SegnivoSDK::ApiError => e
  puts "Error when calling EmailCampaignsApi->messages_uid_patch: #{e}"
end
```

#### Using the messages_uid_patch_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> messages_uid_patch_with_http_info(uid, opts)

```ruby
begin
  # Update Campaign
  data, status_code, headers = api_instance.messages_uid_patch_with_http_info(uid, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue SegnivoSDK::ApiError => e
  puts "Error when calling EmailCampaignsApi->messages_uid_patch_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **uid** | **String** | (Required) The uid of the campaign to update |  |
| **campaign_update_request** | [**CampaignUpdateRequest**](CampaignUpdateRequest.md) |  | [optional] |

### Return type

**Object**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## messages_uid_pause_post

> Object messages_uid_pause_post(uid, opts)

Pause a campaign

Pause the specified campaign

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

api_instance = SegnivoSDK::EmailCampaignsApi.new
uid = '<string>' # String | (Required) The uid of the campaign to pause
opts = {
  body: { ... } # Object | 
}

begin
  # Pause a campaign
  result = api_instance.messages_uid_pause_post(uid, opts)
  p result
rescue SegnivoSDK::ApiError => e
  puts "Error when calling EmailCampaignsApi->messages_uid_pause_post: #{e}"
end
```

#### Using the messages_uid_pause_post_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> messages_uid_pause_post_with_http_info(uid, opts)

```ruby
begin
  # Pause a campaign
  data, status_code, headers = api_instance.messages_uid_pause_post_with_http_info(uid, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue SegnivoSDK::ApiError => e
  puts "Error when calling EmailCampaignsApi->messages_uid_pause_post_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **uid** | **String** | (Required) The uid of the campaign to pause |  |
| **body** | **Object** |  | [optional] |

### Return type

**Object**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## messages_uid_resume_post

> Object messages_uid_resume_post(uid, opts)

Resume the delivery of a campaign

Resume delivery of the specified campaign

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

api_instance = SegnivoSDK::EmailCampaignsApi.new
uid = '<string>' # String | (Required) The uid of the campaign to resume
opts = {
  body: { ... } # Object | 
}

begin
  # Resume the delivery of a campaign
  result = api_instance.messages_uid_resume_post(uid, opts)
  p result
rescue SegnivoSDK::ApiError => e
  puts "Error when calling EmailCampaignsApi->messages_uid_resume_post: #{e}"
end
```

#### Using the messages_uid_resume_post_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> messages_uid_resume_post_with_http_info(uid, opts)

```ruby
begin
  # Resume the delivery of a campaign
  data, status_code, headers = api_instance.messages_uid_resume_post_with_http_info(uid, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue SegnivoSDK::ApiError => e
  puts "Error when calling EmailCampaignsApi->messages_uid_resume_post_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **uid** | **String** | (Required) The uid of the campaign to resume |  |
| **body** | **Object** |  | [optional] |

### Return type

**Object**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

