# Segnivo\SDK\SubscribersContactsApi

All URIs are relative to https://api.segnivo.com/v1, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**contactsGet()**](SubscribersContactsApi.md#contactsGet) | **GET** /contacts | Get contacts |
| [**contactsPost()**](SubscribersContactsApi.md#contactsPost) | **POST** /contacts | Add a Contact |
| [**contactsUidAddTagPost()**](SubscribersContactsApi.md#contactsUidAddTagPost) | **POST** /contacts/{uid}/add-tag | Add tags to a contact |
| [**contactsUidDeletePost()**](SubscribersContactsApi.md#contactsUidDeletePost) | **POST** /contacts/{uid}/delete | Delete a contact |
| [**contactsUidGet()**](SubscribersContactsApi.md#contactsUidGet) | **GET** /contacts/{uid} | Get a contact |
| [**contactsUidPatch()**](SubscribersContactsApi.md#contactsUidPatch) | **PATCH** /contacts/{uid} | Update Contact |
| [**contactsUidSubscribePatch()**](SubscribersContactsApi.md#contactsUidSubscribePatch) | **PATCH** /contacts/{uid}/subscribe | Subscribe a contact |
| [**contactsUidUnsubscribePatch()**](SubscribersContactsApi.md#contactsUidUnsubscribePatch) | **PATCH** /contacts/{uid}/unsubscribe | Unsubscribe a contact |


## `contactsGet()`

```php
contactsGet($accept, $email, $perPage, $page): object
```

Get contacts

Returns a list of contacts/subscribers on your account  This endpoint accepts three **optional** query parameters  - `email` — An email address to search for. If set, the endpoint only returns subscribers that have an identical email address.      - `per_page` — A limit on the number of records to return.      - `page` — The parameter serves as an offset on the number of records returned.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: apiKeyAuth
$config = Segnivo\SDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Segnivo\SDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new Segnivo\SDK\Api\SubscribersContactsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$accept = application/json; // string
$email = <string>; // string | An email address to search for.
$perPage = 20; // int | How many items should be returned ahead.
$page = 1; // int | The offset for the items to be returned, helps in pagination.

try {
    $result = $apiInstance->contactsGet($accept, $email, $perPage, $page);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SubscribersContactsApi->contactsGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **accept** | **string**|  | [optional] |
| **email** | **string**| An email address to search for. | [optional] |
| **perPage** | **int**| How many items should be returned ahead. | [optional] |
| **page** | **int**| The offset for the items to be returned, helps in pagination. | [optional] |

### Return type

**object**

### Authorization

[apiKeyAuth](../../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `contactsPost()`

```php
contactsPost($accept, $body): object
```

Add a Contact

Add a new contact/subscriber to your mailing list

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: apiKeyAuth
$config = Segnivo\SDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Segnivo\SDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new Segnivo\SDK\Api\SubscribersContactsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$accept = application/json; // string
$body = array('key' => new \stdClass); // object

try {
    $result = $apiInstance->contactsPost($accept, $body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SubscribersContactsApi->contactsPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **accept** | **string**|  | [optional] |
| **body** | **object**|  | [optional] |

### Return type

**object**

### Authorization

[apiKeyAuth](../../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `contactsUidAddTagPost()`

```php
contactsUidAddTagPost($uid, $accept, $body): object
```

Add tags to a contact

Add tags to an existing contact

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: apiKeyAuth
$config = Segnivo\SDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Segnivo\SDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new Segnivo\SDK\Api\SubscribersContactsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$uid = <string>; // string | (Required) The uid of the contact to update with the tags.
$accept = application/json; // string
$body = array('key' => new \stdClass); // object

try {
    $result = $apiInstance->contactsUidAddTagPost($uid, $accept, $body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SubscribersContactsApi->contactsUidAddTagPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **uid** | **string**| (Required) The uid of the contact to update with the tags. | |
| **accept** | **string**|  | [optional] |
| **body** | **object**|  | [optional] |

### Return type

**object**

### Authorization

[apiKeyAuth](../../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `contactsUidDeletePost()`

```php
contactsUidDeletePost($uid, $accept, $body): object
```

Delete a contact

Delete an existing contact

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: apiKeyAuth
$config = Segnivo\SDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Segnivo\SDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new Segnivo\SDK\Api\SubscribersContactsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$uid = <string>; // string | (Required) The uid of the contact to delete.
$accept = application/json; // string
$body = array('key' => new \stdClass); // object

try {
    $result = $apiInstance->contactsUidDeletePost($uid, $accept, $body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SubscribersContactsApi->contactsUidDeletePost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **uid** | **string**| (Required) The uid of the contact to delete. | |
| **accept** | **string**|  | [optional] |
| **body** | **object**|  | [optional] |

### Return type

**object**

### Authorization

[apiKeyAuth](../../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `contactsUidGet()`

```php
contactsUidGet($uid, $accept): object
```

Get a contact

Fetch detailed contact information for specified a contact

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: apiKeyAuth
$config = Segnivo\SDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Segnivo\SDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new Segnivo\SDK\Api\SubscribersContactsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$uid = <string>; // string | (Required) The uid of the contact to get.
$accept = application/json; // string

try {
    $result = $apiInstance->contactsUidGet($uid, $accept);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SubscribersContactsApi->contactsUidGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **uid** | **string**| (Required) The uid of the contact to get. | |
| **accept** | **string**|  | [optional] |

### Return type

**object**

### Authorization

[apiKeyAuth](../../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `contactsUidPatch()`

```php
contactsUidPatch($uid, $accept, $body): object
```

Update Contact

Update the specified subscriber/contact

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: apiKeyAuth
$config = Segnivo\SDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Segnivo\SDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new Segnivo\SDK\Api\SubscribersContactsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$uid = <string>; // string | (Required) The uid of the contact to update.
$accept = application/json; // string
$body = array('key' => new \stdClass); // object

try {
    $result = $apiInstance->contactsUidPatch($uid, $accept, $body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SubscribersContactsApi->contactsUidPatch: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **uid** | **string**| (Required) The uid of the contact to update. | |
| **accept** | **string**|  | [optional] |
| **body** | **object**|  | [optional] |

### Return type

**object**

### Authorization

[apiKeyAuth](../../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `contactsUidSubscribePatch()`

```php
contactsUidSubscribePatch($uid, $accept, $listUid, $body): object
```

Subscribe a contact

Subscribe a contact to a list

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: apiKeyAuth
$config = Segnivo\SDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Segnivo\SDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new Segnivo\SDK\Api\SubscribersContactsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$uid = <string>; // string | (Required) The uid of the contact to subscribe.
$accept = application/json; // string
$listUid = <string>; // string | (Required) The uid of the mail list to subscribe the contact.
$body = array('key' => new \stdClass); // object

try {
    $result = $apiInstance->contactsUidSubscribePatch($uid, $accept, $listUid, $body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SubscribersContactsApi->contactsUidSubscribePatch: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **uid** | **string**| (Required) The uid of the contact to subscribe. | |
| **accept** | **string**|  | [optional] |
| **listUid** | **string**| (Required) The uid of the mail list to subscribe the contact. | [optional] |
| **body** | **object**|  | [optional] |

### Return type

**object**

### Authorization

[apiKeyAuth](../../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `contactsUidUnsubscribePatch()`

```php
contactsUidUnsubscribePatch($uid, $accept, $listUid, $body): object
```

Unsubscribe a contact

Unsubscribe a contact from a list

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: apiKeyAuth
$config = Segnivo\SDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Segnivo\SDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new Segnivo\SDK\Api\SubscribersContactsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$uid = <string>; // string | (Required) The uid of the contact to unsubscribe.
$accept = application/json; // string
$listUid = <string>; // string | (Required) The uid of the mail list to unsubscribe the contact.
$body = array('key' => new \stdClass); // object

try {
    $result = $apiInstance->contactsUidUnsubscribePatch($uid, $accept, $listUid, $body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SubscribersContactsApi->contactsUidUnsubscribePatch: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **uid** | **string**| (Required) The uid of the contact to unsubscribe. | |
| **accept** | **string**|  | [optional] |
| **listUid** | **string**| (Required) The uid of the mail list to unsubscribe the contact. | [optional] |
| **body** | **object**|  | [optional] |

### Return type

**object**

### Authorization

[apiKeyAuth](../../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
