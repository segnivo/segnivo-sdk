# SegnivoSDK::MailingListsApi

All URIs are relative to *https://api.segnivo.com/v1*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**lists_get**](MailingListsApi.md#lists_get) | **GET** /lists | Get mailing lists |
| [**lists_post**](MailingListsApi.md#lists_post) | **POST** /lists | Create a Mailing List |
| [**lists_uid_add_field_post**](MailingListsApi.md#lists_uid_add_field_post) | **POST** /lists/{uid}/add-field | Add a field |
| [**lists_uid_delete_post**](MailingListsApi.md#lists_uid_delete_post) | **POST** /lists/{uid}/delete | Delete a list |
| [**lists_uid_get**](MailingListsApi.md#lists_uid_get) | **GET** /lists/{uid} | Get a list |
| [**lists_uid_patch**](MailingListsApi.md#lists_uid_patch) | **PATCH** /lists/{uid} | Update a List |


## lists_get

> Object lists_get

Get mailing lists

Returns all your existing lists

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

api_instance = SegnivoSDK::MailingListsApi.new

begin
  # Get mailing lists
  result = api_instance.lists_get
  p result
rescue SegnivoSDK::ApiError => e
  puts "Error when calling MailingListsApi->lists_get: #{e}"
end
```

#### Using the lists_get_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> lists_get_with_http_info

```ruby
begin
  # Get mailing lists
  data, status_code, headers = api_instance.lists_get_with_http_info
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue SegnivoSDK::ApiError => e
  puts "Error when calling MailingListsApi->lists_get_with_http_info: #{e}"
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


## lists_post

> Object lists_post(opts)

Create a Mailing List

Create a new mailing list

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

api_instance = SegnivoSDK::MailingListsApi.new
opts = {
  mailing_list_request: SegnivoSDK::MailingListRequest.new({name: 'Welcome Email', from_email: 'no-reply@example.com', from_name: 'Example Company'}) # MailingListRequest | 
}

begin
  # Create a Mailing List
  result = api_instance.lists_post(opts)
  p result
rescue SegnivoSDK::ApiError => e
  puts "Error when calling MailingListsApi->lists_post: #{e}"
end
```

#### Using the lists_post_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> lists_post_with_http_info(opts)

```ruby
begin
  # Create a Mailing List
  data, status_code, headers = api_instance.lists_post_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue SegnivoSDK::ApiError => e
  puts "Error when calling MailingListsApi->lists_post_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **mailing_list_request** | [**MailingListRequest**](MailingListRequest.md) |  | [optional] |

### Return type

**Object**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## lists_uid_add_field_post

> Object lists_uid_add_field_post(uid, opts)

Add a field

Add a field to an existing list

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

api_instance = SegnivoSDK::MailingListsApi.new
uid = '<string>' # String | (Required) The uid of the list to add a field to.
opts = {
  mailing_list_add_field_request: SegnivoSDK::MailingListAddFieldRequest.new({type: 'text', label: 'Enter your name', tag: 'username'}) # MailingListAddFieldRequest | 
}

begin
  # Add a field
  result = api_instance.lists_uid_add_field_post(uid, opts)
  p result
rescue SegnivoSDK::ApiError => e
  puts "Error when calling MailingListsApi->lists_uid_add_field_post: #{e}"
end
```

#### Using the lists_uid_add_field_post_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> lists_uid_add_field_post_with_http_info(uid, opts)

```ruby
begin
  # Add a field
  data, status_code, headers = api_instance.lists_uid_add_field_post_with_http_info(uid, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue SegnivoSDK::ApiError => e
  puts "Error when calling MailingListsApi->lists_uid_add_field_post_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **uid** | **String** | (Required) The uid of the list to add a field to. |  |
| **mailing_list_add_field_request** | [**MailingListAddFieldRequest**](MailingListAddFieldRequest.md) |  | [optional] |

### Return type

**Object**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## lists_uid_delete_post

> Object lists_uid_delete_post(uid, opts)

Delete a list

Delete an existing list

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

api_instance = SegnivoSDK::MailingListsApi.new
uid = '<string>' # String | (Required) The uid of the list to delete.
opts = {
  body: { ... } # Object | 
}

begin
  # Delete a list
  result = api_instance.lists_uid_delete_post(uid, opts)
  p result
rescue SegnivoSDK::ApiError => e
  puts "Error when calling MailingListsApi->lists_uid_delete_post: #{e}"
end
```

#### Using the lists_uid_delete_post_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> lists_uid_delete_post_with_http_info(uid, opts)

```ruby
begin
  # Delete a list
  data, status_code, headers = api_instance.lists_uid_delete_post_with_http_info(uid, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue SegnivoSDK::ApiError => e
  puts "Error when calling MailingListsApi->lists_uid_delete_post_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **uid** | **String** | (Required) The uid of the list to delete. |  |
| **body** | **Object** |  | [optional] |

### Return type

**Object**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## lists_uid_get

> Object lists_uid_get(uid)

Get a list

Returns detailed information about a specified list

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

api_instance = SegnivoSDK::MailingListsApi.new
uid = '<string>' # String | (Required) The uid of the mailing list to fetch.

begin
  # Get a list
  result = api_instance.lists_uid_get(uid)
  p result
rescue SegnivoSDK::ApiError => e
  puts "Error when calling MailingListsApi->lists_uid_get: #{e}"
end
```

#### Using the lists_uid_get_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> lists_uid_get_with_http_info(uid)

```ruby
begin
  # Get a list
  data, status_code, headers = api_instance.lists_uid_get_with_http_info(uid)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue SegnivoSDK::ApiError => e
  puts "Error when calling MailingListsApi->lists_uid_get_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **uid** | **String** | (Required) The uid of the mailing list to fetch. |  |

### Return type

**Object**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## lists_uid_patch

> Object lists_uid_patch(uid, opts)

Update a List

Update an existing mailing list

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

api_instance = SegnivoSDK::MailingListsApi.new
uid = '<string>' # String | (Required) The uid of the list to update.
opts = {
  mailing_list_request: SegnivoSDK::MailingListRequest.new({name: 'Welcome Email', from_email: 'no-reply@example.com', from_name: 'Example Company'}) # MailingListRequest | 
}

begin
  # Update a List
  result = api_instance.lists_uid_patch(uid, opts)
  p result
rescue SegnivoSDK::ApiError => e
  puts "Error when calling MailingListsApi->lists_uid_patch: #{e}"
end
```

#### Using the lists_uid_patch_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> lists_uid_patch_with_http_info(uid, opts)

```ruby
begin
  # Update a List
  data, status_code, headers = api_instance.lists_uid_patch_with_http_info(uid, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue SegnivoSDK::ApiError => e
  puts "Error when calling MailingListsApi->lists_uid_patch_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **uid** | **String** | (Required) The uid of the list to update. |  |
| **mailing_list_request** | [**MailingListRequest**](MailingListRequest.md) |  | [optional] |

### Return type

**Object**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

