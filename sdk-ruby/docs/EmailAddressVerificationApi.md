# SegnivoSDK::EmailAddressVerificationApi

All URIs are relative to *https://api.segnivo.com/v1*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**validate_email_post**](EmailAddressVerificationApi.md#validate_email_post) | **POST** /validate-email | Email Address Verification Validation |


## validate_email_post

> Object validate_email_post(opts)

Email Address Verification Validation

The `/validate-email` endpoint allows you to pass the email addresses you wish to verify and get a response on each of their status.  The following data should be passed in JSON format in the request body  - **emails** - An array/collection containing a minimum of one and maximum of fifty email addresses for verification/validation.

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

api_instance = SegnivoSDK::EmailAddressVerificationApi.new
opts = {
  body: { ... } # Object | 
}

begin
  # Email Address Verification Validation
  result = api_instance.validate_email_post(opts)
  p result
rescue SegnivoSDK::ApiError => e
  puts "Error when calling EmailAddressVerificationApi->validate_email_post: #{e}"
end
```

#### Using the validate_email_post_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> validate_email_post_with_http_info(opts)

```ruby
begin
  # Email Address Verification Validation
  data, status_code, headers = api_instance.validate_email_post_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue SegnivoSDK::ApiError => e
  puts "Error when calling EmailAddressVerificationApi->validate_email_post_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **body** | **Object** |  | [optional] |

### Return type

**Object**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

