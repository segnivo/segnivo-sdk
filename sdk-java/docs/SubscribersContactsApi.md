# SubscribersContactsApi

All URIs are relative to *https://api.segnivo.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**contactsGet**](SubscribersContactsApi.md#contactsGet) | **GET** /contacts | Get contacts |
| [**contactsPost**](SubscribersContactsApi.md#contactsPost) | **POST** /contacts | Add a Contact |
| [**contactsUidAddTagPost**](SubscribersContactsApi.md#contactsUidAddTagPost) | **POST** /contacts/{uid}/add-tag | Add tags to a contact |
| [**contactsUidDeletePost**](SubscribersContactsApi.md#contactsUidDeletePost) | **POST** /contacts/{uid}/delete | Delete a contact |
| [**contactsUidGet**](SubscribersContactsApi.md#contactsUidGet) | **GET** /contacts/{uid} | Get a contact |
| [**contactsUidPatch**](SubscribersContactsApi.md#contactsUidPatch) | **PATCH** /contacts/{uid} | Update Contact |
| [**contactsUidSubscribePatch**](SubscribersContactsApi.md#contactsUidSubscribePatch) | **PATCH** /contacts/{uid}/subscribe | Subscribe a contact |
| [**contactsUidUnsubscribePatch**](SubscribersContactsApi.md#contactsUidUnsubscribePatch) | **PATCH** /contacts/{uid}/unsubscribe | Unsubscribe a contact |



## contactsGet

> Object contactsGet(email, perPage, page)

Get contacts

Returns a list of contacts/subscribers on your account  This endpoint accepts three **optional** query parameters  - &#x60;email&#x60; — An email address to search for. If set, the endpoint only returns subscribers that have an identical email address.      - &#x60;per_page&#x60; — A limit on the number of records to return.      - &#x60;page&#x60; — The parameter serves as an offset on the number of records returned.

### Example

```java
// Import classes:
import com.segnivo.sdk.ApiClient;
import com.segnivo.sdk.ApiException;
import com.segnivo.sdk.Configuration;
import com.segnivo.sdk.auth.*;
import com.segnivo.sdk.models.*;
import com.segnivo.sdk.api.SubscribersContactsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.segnivo.com/v1");
        
        // Configure API key authorization: apiKeyAuth
        ApiKeyAuth apiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("apiKeyAuth");
        apiKeyAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //apiKeyAuth.setApiKeyPrefix("Token");

        SubscribersContactsApi apiInstance = new SubscribersContactsApi(defaultClient);
        String email = "<string>"; // String | An email address to search for.
        Integer perPage = 20; // Integer | How many items should be returned ahead.
        Integer page = 1; // Integer | The offset for the items to be returned, helps in pagination.
        try {
            Object result = apiInstance.contactsGet(email, perPage, page);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling SubscribersContactsApi#contactsGet");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **email** | **String**| An email address to search for. | [optional] |
| **perPage** | **Integer**| How many items should be returned ahead. | [optional] |
| **page** | **Integer**| The offset for the items to be returned, helps in pagination. | [optional] |

### Return type

**Object**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  * Content-Type -  <br>  |


## contactsPost

> Object contactsPost(addContactRequest)

Add a Contact

Add a new contact/subscriber to your mailing list

### Example

```java
// Import classes:
import com.segnivo.sdk.ApiClient;
import com.segnivo.sdk.ApiException;
import com.segnivo.sdk.Configuration;
import com.segnivo.sdk.auth.*;
import com.segnivo.sdk.models.*;
import com.segnivo.sdk.api.SubscribersContactsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.segnivo.com/v1");
        
        // Configure API key authorization: apiKeyAuth
        ApiKeyAuth apiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("apiKeyAuth");
        apiKeyAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //apiKeyAuth.setApiKeyPrefix("Token");

        SubscribersContactsApi apiInstance = new SubscribersContactsApi(defaultClient);
        AddContactRequest addContactRequest = new AddContactRequest(); // AddContactRequest | 
        try {
            Object result = apiInstance.contactsPost(addContactRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling SubscribersContactsApi#contactsPost");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **addContactRequest** | [**AddContactRequest**](AddContactRequest.md)|  | [optional] |

### Return type

**Object**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  * Content-Type -  <br>  |


## contactsUidAddTagPost

> Object contactsUidAddTagPost(uid, contactsUidAddTagPostRequest)

Add tags to a contact

Add tags to an existing contact

### Example

```java
// Import classes:
import com.segnivo.sdk.ApiClient;
import com.segnivo.sdk.ApiException;
import com.segnivo.sdk.Configuration;
import com.segnivo.sdk.auth.*;
import com.segnivo.sdk.models.*;
import com.segnivo.sdk.api.SubscribersContactsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.segnivo.com/v1");
        
        // Configure API key authorization: apiKeyAuth
        ApiKeyAuth apiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("apiKeyAuth");
        apiKeyAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //apiKeyAuth.setApiKeyPrefix("Token");

        SubscribersContactsApi apiInstance = new SubscribersContactsApi(defaultClient);
        String uid = "<string>"; // String | (Required) The uid of the contact to update with the tags.
        ContactsUidAddTagPostRequest contactsUidAddTagPostRequest = new ContactsUidAddTagPostRequest(); // ContactsUidAddTagPostRequest | 
        try {
            Object result = apiInstance.contactsUidAddTagPost(uid, contactsUidAddTagPostRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling SubscribersContactsApi#contactsUidAddTagPost");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **uid** | **String**| (Required) The uid of the contact to update with the tags. | |
| **contactsUidAddTagPostRequest** | [**ContactsUidAddTagPostRequest**](ContactsUidAddTagPostRequest.md)|  | [optional] |

### Return type

**Object**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  * Content-Type -  <br>  |


## contactsUidDeletePost

> Object contactsUidDeletePost(uid, body)

Delete a contact

Delete an existing contact

### Example

```java
// Import classes:
import com.segnivo.sdk.ApiClient;
import com.segnivo.sdk.ApiException;
import com.segnivo.sdk.Configuration;
import com.segnivo.sdk.auth.*;
import com.segnivo.sdk.models.*;
import com.segnivo.sdk.api.SubscribersContactsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.segnivo.com/v1");
        
        // Configure API key authorization: apiKeyAuth
        ApiKeyAuth apiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("apiKeyAuth");
        apiKeyAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //apiKeyAuth.setApiKeyPrefix("Token");

        SubscribersContactsApi apiInstance = new SubscribersContactsApi(defaultClient);
        String uid = "<string>"; // String | (Required) The uid of the contact to delete.
        Object body = null; // Object | 
        try {
            Object result = apiInstance.contactsUidDeletePost(uid, body);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling SubscribersContactsApi#contactsUidDeletePost");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **uid** | **String**| (Required) The uid of the contact to delete. | |
| **body** | **Object**|  | [optional] |

### Return type

**Object**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  * Content-Type -  <br>  |


## contactsUidGet

> Object contactsUidGet(uid)

Get a contact

Fetch detailed contact information for specified a contact

### Example

```java
// Import classes:
import com.segnivo.sdk.ApiClient;
import com.segnivo.sdk.ApiException;
import com.segnivo.sdk.Configuration;
import com.segnivo.sdk.auth.*;
import com.segnivo.sdk.models.*;
import com.segnivo.sdk.api.SubscribersContactsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.segnivo.com/v1");
        
        // Configure API key authorization: apiKeyAuth
        ApiKeyAuth apiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("apiKeyAuth");
        apiKeyAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //apiKeyAuth.setApiKeyPrefix("Token");

        SubscribersContactsApi apiInstance = new SubscribersContactsApi(defaultClient);
        String uid = "<string>"; // String | (Required) The uid of the contact to get.
        try {
            Object result = apiInstance.contactsUidGet(uid);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling SubscribersContactsApi#contactsUidGet");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **uid** | **String**| (Required) The uid of the contact to get. | |

### Return type

**Object**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  * Content-Type -  <br>  |


## contactsUidPatch

> Object contactsUidPatch(uid, contactUpdateRequest)

Update Contact

Update the specified subscriber/contact

### Example

```java
// Import classes:
import com.segnivo.sdk.ApiClient;
import com.segnivo.sdk.ApiException;
import com.segnivo.sdk.Configuration;
import com.segnivo.sdk.auth.*;
import com.segnivo.sdk.models.*;
import com.segnivo.sdk.api.SubscribersContactsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.segnivo.com/v1");
        
        // Configure API key authorization: apiKeyAuth
        ApiKeyAuth apiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("apiKeyAuth");
        apiKeyAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //apiKeyAuth.setApiKeyPrefix("Token");

        SubscribersContactsApi apiInstance = new SubscribersContactsApi(defaultClient);
        String uid = "<string>"; // String | (Required) The uid of the contact to update.
        ContactUpdateRequest contactUpdateRequest = new ContactUpdateRequest(); // ContactUpdateRequest | 
        try {
            Object result = apiInstance.contactsUidPatch(uid, contactUpdateRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling SubscribersContactsApi#contactsUidPatch");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **uid** | **String**| (Required) The uid of the contact to update. | |
| **contactUpdateRequest** | [**ContactUpdateRequest**](ContactUpdateRequest.md)|  | [optional] |

### Return type

**Object**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  * Content-Type -  <br>  |


## contactsUidSubscribePatch

> Object contactsUidSubscribePatch(uid, listUid, body)

Subscribe a contact

Subscribe a contact to a list

### Example

```java
// Import classes:
import com.segnivo.sdk.ApiClient;
import com.segnivo.sdk.ApiException;
import com.segnivo.sdk.Configuration;
import com.segnivo.sdk.auth.*;
import com.segnivo.sdk.models.*;
import com.segnivo.sdk.api.SubscribersContactsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.segnivo.com/v1");
        
        // Configure API key authorization: apiKeyAuth
        ApiKeyAuth apiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("apiKeyAuth");
        apiKeyAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //apiKeyAuth.setApiKeyPrefix("Token");

        SubscribersContactsApi apiInstance = new SubscribersContactsApi(defaultClient);
        String uid = "<string>"; // String | (Required) The uid of the contact to subscribe.
        String listUid = "<string>"; // String | (Required) The uid of the mail list to subscribe the contact.
        Object body = null; // Object | 
        try {
            Object result = apiInstance.contactsUidSubscribePatch(uid, listUid, body);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling SubscribersContactsApi#contactsUidSubscribePatch");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **uid** | **String**| (Required) The uid of the contact to subscribe. | |
| **listUid** | **String**| (Required) The uid of the mail list to subscribe the contact. | [optional] |
| **body** | **Object**|  | [optional] |

### Return type

**Object**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  * Content-Type -  <br>  |


## contactsUidUnsubscribePatch

> Object contactsUidUnsubscribePatch(uid, listUid, body)

Unsubscribe a contact

Unsubscribe a contact from a list

### Example

```java
// Import classes:
import com.segnivo.sdk.ApiClient;
import com.segnivo.sdk.ApiException;
import com.segnivo.sdk.Configuration;
import com.segnivo.sdk.auth.*;
import com.segnivo.sdk.models.*;
import com.segnivo.sdk.api.SubscribersContactsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.segnivo.com/v1");
        
        // Configure API key authorization: apiKeyAuth
        ApiKeyAuth apiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("apiKeyAuth");
        apiKeyAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //apiKeyAuth.setApiKeyPrefix("Token");

        SubscribersContactsApi apiInstance = new SubscribersContactsApi(defaultClient);
        String uid = "<string>"; // String | (Required) The uid of the contact to unsubscribe.
        String listUid = "<string>"; // String | (Required) The uid of the mail list to unsubscribe the contact.
        Object body = null; // Object | 
        try {
            Object result = apiInstance.contactsUidUnsubscribePatch(uid, listUid, body);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling SubscribersContactsApi#contactsUidUnsubscribePatch");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **uid** | **String**| (Required) The uid of the contact to unsubscribe. | |
| **listUid** | **String**| (Required) The uid of the mail list to unsubscribe the contact. | [optional] |
| **body** | **Object**|  | [optional] |

### Return type

**Object**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  * Content-Type -  <br>  |

