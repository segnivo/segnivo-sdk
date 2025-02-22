# MailingListsApi

All URIs are relative to *https://api.segnivo.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**listsGet**](MailingListsApi.md#listsGet) | **GET** /lists | Get mailing lists |
| [**listsPost**](MailingListsApi.md#listsPost) | **POST** /lists | Create a Mailing List |
| [**listsUidAddFieldPost**](MailingListsApi.md#listsUidAddFieldPost) | **POST** /lists/{uid}/add-field | Add a field |
| [**listsUidDeletePost**](MailingListsApi.md#listsUidDeletePost) | **POST** /lists/{uid}/delete | Delete a list |
| [**listsUidGet**](MailingListsApi.md#listsUidGet) | **GET** /lists/{uid} | Get a list |
| [**listsUidPatch**](MailingListsApi.md#listsUidPatch) | **PATCH** /lists/{uid} | Update a List |



## listsGet

> Object listsGet()

Get mailing lists

Returns all your existing lists

### Example

```java
// Import classes:
import com.segnivo.sdk.ApiClient;
import com.segnivo.sdk.ApiException;
import com.segnivo.sdk.Configuration;
import com.segnivo.sdk.auth.*;
import com.segnivo.sdk.models.*;
import com.segnivo.sdk.api.MailingListsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.segnivo.com/v1");
        
        // Configure API key authorization: apiKeyAuth
        ApiKeyAuth apiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("apiKeyAuth");
        apiKeyAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //apiKeyAuth.setApiKeyPrefix("Token");

        MailingListsApi apiInstance = new MailingListsApi(defaultClient);
        try {
            Object result = apiInstance.listsGet();
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling MailingListsApi#listsGet");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
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


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  * Content-Type -  <br>  |


## listsPost

> Object listsPost(mailingListRequest)

Create a Mailing List

Create a new mailing list

### Example

```java
// Import classes:
import com.segnivo.sdk.ApiClient;
import com.segnivo.sdk.ApiException;
import com.segnivo.sdk.Configuration;
import com.segnivo.sdk.auth.*;
import com.segnivo.sdk.models.*;
import com.segnivo.sdk.api.MailingListsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.segnivo.com/v1");
        
        // Configure API key authorization: apiKeyAuth
        ApiKeyAuth apiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("apiKeyAuth");
        apiKeyAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //apiKeyAuth.setApiKeyPrefix("Token");

        MailingListsApi apiInstance = new MailingListsApi(defaultClient);
        MailingListRequest mailingListRequest = new MailingListRequest(); // MailingListRequest | 
        try {
            Object result = apiInstance.listsPost(mailingListRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling MailingListsApi#listsPost");
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
| **mailingListRequest** | [**MailingListRequest**](MailingListRequest.md)|  | [optional] |

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


## listsUidAddFieldPost

> Object listsUidAddFieldPost(uid, mailingListAddFieldRequest)

Add a field

Add a field to an existing list

### Example

```java
// Import classes:
import com.segnivo.sdk.ApiClient;
import com.segnivo.sdk.ApiException;
import com.segnivo.sdk.Configuration;
import com.segnivo.sdk.auth.*;
import com.segnivo.sdk.models.*;
import com.segnivo.sdk.api.MailingListsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.segnivo.com/v1");
        
        // Configure API key authorization: apiKeyAuth
        ApiKeyAuth apiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("apiKeyAuth");
        apiKeyAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //apiKeyAuth.setApiKeyPrefix("Token");

        MailingListsApi apiInstance = new MailingListsApi(defaultClient);
        String uid = "<string>"; // String | (Required) The uid of the list to add a field to.
        MailingListAddFieldRequest mailingListAddFieldRequest = new MailingListAddFieldRequest(); // MailingListAddFieldRequest | 
        try {
            Object result = apiInstance.listsUidAddFieldPost(uid, mailingListAddFieldRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling MailingListsApi#listsUidAddFieldPost");
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
| **uid** | **String**| (Required) The uid of the list to add a field to. | |
| **mailingListAddFieldRequest** | [**MailingListAddFieldRequest**](MailingListAddFieldRequest.md)|  | [optional] |

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


## listsUidDeletePost

> Object listsUidDeletePost(uid, body)

Delete a list

Delete an existing list

### Example

```java
// Import classes:
import com.segnivo.sdk.ApiClient;
import com.segnivo.sdk.ApiException;
import com.segnivo.sdk.Configuration;
import com.segnivo.sdk.auth.*;
import com.segnivo.sdk.models.*;
import com.segnivo.sdk.api.MailingListsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.segnivo.com/v1");
        
        // Configure API key authorization: apiKeyAuth
        ApiKeyAuth apiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("apiKeyAuth");
        apiKeyAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //apiKeyAuth.setApiKeyPrefix("Token");

        MailingListsApi apiInstance = new MailingListsApi(defaultClient);
        String uid = "<string>"; // String | (Required) The uid of the list to delete.
        Object body = null; // Object | 
        try {
            Object result = apiInstance.listsUidDeletePost(uid, body);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling MailingListsApi#listsUidDeletePost");
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
| **uid** | **String**| (Required) The uid of the list to delete. | |
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


## listsUidGet

> Object listsUidGet(uid)

Get a list

Returns detailed information about a specified list

### Example

```java
// Import classes:
import com.segnivo.sdk.ApiClient;
import com.segnivo.sdk.ApiException;
import com.segnivo.sdk.Configuration;
import com.segnivo.sdk.auth.*;
import com.segnivo.sdk.models.*;
import com.segnivo.sdk.api.MailingListsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.segnivo.com/v1");
        
        // Configure API key authorization: apiKeyAuth
        ApiKeyAuth apiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("apiKeyAuth");
        apiKeyAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //apiKeyAuth.setApiKeyPrefix("Token");

        MailingListsApi apiInstance = new MailingListsApi(defaultClient);
        String uid = "<string>"; // String | (Required) The uid of the mailing list to fetch.
        try {
            Object result = apiInstance.listsUidGet(uid);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling MailingListsApi#listsUidGet");
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
| **uid** | **String**| (Required) The uid of the mailing list to fetch. | |

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


## listsUidPatch

> Object listsUidPatch(uid, mailingListRequest)

Update a List

Update an existing mailing list

### Example

```java
// Import classes:
import com.segnivo.sdk.ApiClient;
import com.segnivo.sdk.ApiException;
import com.segnivo.sdk.Configuration;
import com.segnivo.sdk.auth.*;
import com.segnivo.sdk.models.*;
import com.segnivo.sdk.api.MailingListsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.segnivo.com/v1");
        
        // Configure API key authorization: apiKeyAuth
        ApiKeyAuth apiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("apiKeyAuth");
        apiKeyAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //apiKeyAuth.setApiKeyPrefix("Token");

        MailingListsApi apiInstance = new MailingListsApi(defaultClient);
        String uid = "<string>"; // String | (Required) The uid of the list to update.
        MailingListRequest mailingListRequest = new MailingListRequest(); // MailingListRequest | 
        try {
            Object result = apiInstance.listsUidPatch(uid, mailingListRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling MailingListsApi#listsUidPatch");
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
| **uid** | **String**| (Required) The uid of the list to update. | |
| **mailingListRequest** | [**MailingListRequest**](MailingListRequest.md)|  | [optional] |

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

