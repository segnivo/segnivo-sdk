# SegnivoSDK::SubscribersContactsApi

All URIs are relative to *https://api.segnivo.com/v1*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**contacts_get**](SubscribersContactsApi.md#contacts_get) | **GET** /contacts | Get contacts |
| [**contacts_post**](SubscribersContactsApi.md#contacts_post) | **POST** /contacts | Add a Contact |
| [**contacts_uid_add_tag_post**](SubscribersContactsApi.md#contacts_uid_add_tag_post) | **POST** /contacts/{uid}/add-tag | Add tags to a contact |
| [**contacts_uid_delete_post**](SubscribersContactsApi.md#contacts_uid_delete_post) | **POST** /contacts/{uid}/delete | Delete a contact |
| [**contacts_uid_get**](SubscribersContactsApi.md#contacts_uid_get) | **GET** /contacts/{uid} | Get a contact |
| [**contacts_uid_patch**](SubscribersContactsApi.md#contacts_uid_patch) | **PATCH** /contacts/{uid} | Update Contact |
| [**contacts_uid_subscribe_patch**](SubscribersContactsApi.md#contacts_uid_subscribe_patch) | **PATCH** /contacts/{uid}/subscribe | Subscribe a contact |
| [**contacts_uid_unsubscribe_patch**](SubscribersContactsApi.md#contacts_uid_unsubscribe_patch) | **PATCH** /contacts/{uid}/unsubscribe | Unsubscribe a contact |


## contacts_get

> Object contacts_get(opts)

Get contacts

Returns a list of contacts/subscribers on your account  This endpoint accepts three **optional** query parameters  - `email` — An email address to search for. If set, the endpoint only returns subscribers that have an identical email address.      - `per_page` — A limit on the number of records to return.      - `page` — The parameter serves as an offset on the number of records returned.

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

api_instance = SegnivoSDK::SubscribersContactsApi.new
opts = {
  email: '<string>', # String | An email address to search for.
  per_page: 20, # Integer | How many items should be returned ahead.
  page: 1 # Integer | The offset for the items to be returned, helps in pagination.
}

begin
  # Get contacts
  result = api_instance.contacts_get(opts)
  p result
rescue SegnivoSDK::ApiError => e
  puts "Error when calling SubscribersContactsApi->contacts_get: #{e}"
end
```

#### Using the contacts_get_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> contacts_get_with_http_info(opts)

```ruby
begin
  # Get contacts
  data, status_code, headers = api_instance.contacts_get_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue SegnivoSDK::ApiError => e
  puts "Error when calling SubscribersContactsApi->contacts_get_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **email** | **String** | An email address to search for. | [optional] |
| **per_page** | **Integer** | How many items should be returned ahead. | [optional] |
| **page** | **Integer** | The offset for the items to be returned, helps in pagination. | [optional] |

### Return type

**Object**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## contacts_post

> Object contacts_post(opts)

Add a Contact

Add a new contact/subscriber to your mailing list

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

api_instance = SegnivoSDK::SubscribersContactsApi.new
opts = {
  add_contact_request: SegnivoSDK::AddContactRequest.new({list_uid: 'list_uid_example', email: 'email_example'}) # AddContactRequest | 
}

begin
  # Add a Contact
  result = api_instance.contacts_post(opts)
  p result
rescue SegnivoSDK::ApiError => e
  puts "Error when calling SubscribersContactsApi->contacts_post: #{e}"
end
```

#### Using the contacts_post_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> contacts_post_with_http_info(opts)

```ruby
begin
  # Add a Contact
  data, status_code, headers = api_instance.contacts_post_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue SegnivoSDK::ApiError => e
  puts "Error when calling SubscribersContactsApi->contacts_post_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **add_contact_request** | [**AddContactRequest**](AddContactRequest.md) |  | [optional] |

### Return type

**Object**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## contacts_uid_add_tag_post

> Object contacts_uid_add_tag_post(uid, opts)

Add tags to a contact

Add tags to an existing contact

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

api_instance = SegnivoSDK::SubscribersContactsApi.new
uid = '<string>' # String | (Required) The uid of the contact to update with the tags.
opts = {
  contacts_uid_add_tag_post_request: SegnivoSDK::ContactsUidAddTagPostRequest.new # ContactsUidAddTagPostRequest | 
}

begin
  # Add tags to a contact
  result = api_instance.contacts_uid_add_tag_post(uid, opts)
  p result
rescue SegnivoSDK::ApiError => e
  puts "Error when calling SubscribersContactsApi->contacts_uid_add_tag_post: #{e}"
end
```

#### Using the contacts_uid_add_tag_post_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> contacts_uid_add_tag_post_with_http_info(uid, opts)

```ruby
begin
  # Add tags to a contact
  data, status_code, headers = api_instance.contacts_uid_add_tag_post_with_http_info(uid, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue SegnivoSDK::ApiError => e
  puts "Error when calling SubscribersContactsApi->contacts_uid_add_tag_post_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **uid** | **String** | (Required) The uid of the contact to update with the tags. |  |
| **contacts_uid_add_tag_post_request** | [**ContactsUidAddTagPostRequest**](ContactsUidAddTagPostRequest.md) |  | [optional] |

### Return type

**Object**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## contacts_uid_delete_post

> Object contacts_uid_delete_post(uid, opts)

Delete a contact

Delete an existing contact

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

api_instance = SegnivoSDK::SubscribersContactsApi.new
uid = '<string>' # String | (Required) The uid of the contact to delete.
opts = {
  body: { ... } # Object | 
}

begin
  # Delete a contact
  result = api_instance.contacts_uid_delete_post(uid, opts)
  p result
rescue SegnivoSDK::ApiError => e
  puts "Error when calling SubscribersContactsApi->contacts_uid_delete_post: #{e}"
end
```

#### Using the contacts_uid_delete_post_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> contacts_uid_delete_post_with_http_info(uid, opts)

```ruby
begin
  # Delete a contact
  data, status_code, headers = api_instance.contacts_uid_delete_post_with_http_info(uid, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue SegnivoSDK::ApiError => e
  puts "Error when calling SubscribersContactsApi->contacts_uid_delete_post_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **uid** | **String** | (Required) The uid of the contact to delete. |  |
| **body** | **Object** |  | [optional] |

### Return type

**Object**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## contacts_uid_get

> Object contacts_uid_get(uid)

Get a contact

Fetch detailed contact information for specified a contact

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

api_instance = SegnivoSDK::SubscribersContactsApi.new
uid = '<string>' # String | (Required) The uid of the contact to get.

begin
  # Get a contact
  result = api_instance.contacts_uid_get(uid)
  p result
rescue SegnivoSDK::ApiError => e
  puts "Error when calling SubscribersContactsApi->contacts_uid_get: #{e}"
end
```

#### Using the contacts_uid_get_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> contacts_uid_get_with_http_info(uid)

```ruby
begin
  # Get a contact
  data, status_code, headers = api_instance.contacts_uid_get_with_http_info(uid)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue SegnivoSDK::ApiError => e
  puts "Error when calling SubscribersContactsApi->contacts_uid_get_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **uid** | **String** | (Required) The uid of the contact to get. |  |

### Return type

**Object**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## contacts_uid_patch

> Object contacts_uid_patch(uid, opts)

Update Contact

Update the specified subscriber/contact

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

api_instance = SegnivoSDK::SubscribersContactsApi.new
uid = '<string>' # String | (Required) The uid of the contact to update.
opts = {
  contact_update_request: SegnivoSDK::ContactUpdateRequest.new # ContactUpdateRequest | 
}

begin
  # Update Contact
  result = api_instance.contacts_uid_patch(uid, opts)
  p result
rescue SegnivoSDK::ApiError => e
  puts "Error when calling SubscribersContactsApi->contacts_uid_patch: #{e}"
end
```

#### Using the contacts_uid_patch_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> contacts_uid_patch_with_http_info(uid, opts)

```ruby
begin
  # Update Contact
  data, status_code, headers = api_instance.contacts_uid_patch_with_http_info(uid, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue SegnivoSDK::ApiError => e
  puts "Error when calling SubscribersContactsApi->contacts_uid_patch_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **uid** | **String** | (Required) The uid of the contact to update. |  |
| **contact_update_request** | [**ContactUpdateRequest**](ContactUpdateRequest.md) |  | [optional] |

### Return type

**Object**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## contacts_uid_subscribe_patch

> Object contacts_uid_subscribe_patch(uid, opts)

Subscribe a contact

Subscribe a contact to a list

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

api_instance = SegnivoSDK::SubscribersContactsApi.new
uid = '<string>' # String | (Required) The uid of the contact to subscribe.
opts = {
  list_uid: '<string>', # String | (Required) The uid of the mail list to subscribe the contact.
  body: { ... } # Object | 
}

begin
  # Subscribe a contact
  result = api_instance.contacts_uid_subscribe_patch(uid, opts)
  p result
rescue SegnivoSDK::ApiError => e
  puts "Error when calling SubscribersContactsApi->contacts_uid_subscribe_patch: #{e}"
end
```

#### Using the contacts_uid_subscribe_patch_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> contacts_uid_subscribe_patch_with_http_info(uid, opts)

```ruby
begin
  # Subscribe a contact
  data, status_code, headers = api_instance.contacts_uid_subscribe_patch_with_http_info(uid, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue SegnivoSDK::ApiError => e
  puts "Error when calling SubscribersContactsApi->contacts_uid_subscribe_patch_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **uid** | **String** | (Required) The uid of the contact to subscribe. |  |
| **list_uid** | **String** | (Required) The uid of the mail list to subscribe the contact. | [optional] |
| **body** | **Object** |  | [optional] |

### Return type

**Object**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## contacts_uid_unsubscribe_patch

> Object contacts_uid_unsubscribe_patch(uid, opts)

Unsubscribe a contact

Unsubscribe a contact from a list

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

api_instance = SegnivoSDK::SubscribersContactsApi.new
uid = '<string>' # String | (Required) The uid of the contact to unsubscribe.
opts = {
  list_uid: '<string>', # String | (Required) The uid of the mail list to unsubscribe the contact.
  body: { ... } # Object | 
}

begin
  # Unsubscribe a contact
  result = api_instance.contacts_uid_unsubscribe_patch(uid, opts)
  p result
rescue SegnivoSDK::ApiError => e
  puts "Error when calling SubscribersContactsApi->contacts_uid_unsubscribe_patch: #{e}"
end
```

#### Using the contacts_uid_unsubscribe_patch_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> contacts_uid_unsubscribe_patch_with_http_info(uid, opts)

```ruby
begin
  # Unsubscribe a contact
  data, status_code, headers = api_instance.contacts_uid_unsubscribe_patch_with_http_info(uid, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue SegnivoSDK::ApiError => e
  puts "Error when calling SubscribersContactsApi->contacts_uid_unsubscribe_patch_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **uid** | **String** | (Required) The uid of the contact to unsubscribe. |  |
| **list_uid** | **String** | (Required) The uid of the mail list to unsubscribe the contact. | [optional] |
| **body** | **Object** |  | [optional] |

### Return type

**Object**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

