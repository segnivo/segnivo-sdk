# EmailCampaignsApi

All URIs are relative to *https://api.segnivo.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**messagesGet**](EmailCampaignsApi.md#messagesGet) | **GET** /messages | Get campaigns |
| [**messagesPost**](EmailCampaignsApi.md#messagesPost) | **POST** /messages | Create a Campaign |
| [**messagesUidDeletePost**](EmailCampaignsApi.md#messagesUidDeletePost) | **POST** /messages/{uid}/delete | Delete a campaign |
| [**messagesUidGet**](EmailCampaignsApi.md#messagesUidGet) | **GET** /messages/{uid} | Get a campaign |
| [**messagesUidPatch**](EmailCampaignsApi.md#messagesUidPatch) | **PATCH** /messages/{uid} | Update Campaign |
| [**messagesUidPausePost**](EmailCampaignsApi.md#messagesUidPausePost) | **POST** /messages/{uid}/pause | Pause a campaign |
| [**messagesUidResumePost**](EmailCampaignsApi.md#messagesUidResumePost) | **POST** /messages/{uid}/resume | Resume the delivery of a campaign |



## messagesGet

> Object messagesGet()

Get campaigns

Returns a collection of all your campaigns

### Example

```java
// Import classes:
import com.segnivo.sdk.ApiClient;
import com.segnivo.sdk.ApiException;
import com.segnivo.sdk.Configuration;
import com.segnivo.sdk.auth.*;
import com.segnivo.sdk.models.*;
import com.segnivo.sdk.api.EmailCampaignsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.segnivo.com/v1");
        
        // Configure API key authorization: apiKeyAuth
        ApiKeyAuth apiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("apiKeyAuth");
        apiKeyAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //apiKeyAuth.setApiKeyPrefix("Token");

        EmailCampaignsApi apiInstance = new EmailCampaignsApi(defaultClient);
        try {
            Object result = apiInstance.messagesGet();
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling EmailCampaignsApi#messagesGet");
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


## messagesPost

> Object messagesPost(campaignCreateRequest)

Create a Campaign

Creat an email campaign for processing

### Example

```java
// Import classes:
import com.segnivo.sdk.ApiClient;
import com.segnivo.sdk.ApiException;
import com.segnivo.sdk.Configuration;
import com.segnivo.sdk.auth.*;
import com.segnivo.sdk.models.*;
import com.segnivo.sdk.api.EmailCampaignsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.segnivo.com/v1");
        
        // Configure API key authorization: apiKeyAuth
        ApiKeyAuth apiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("apiKeyAuth");
        apiKeyAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //apiKeyAuth.setApiKeyPrefix("Token");

        EmailCampaignsApi apiInstance = new EmailCampaignsApi(defaultClient);
        CampaignCreateRequest campaignCreateRequest = new CampaignCreateRequest(); // CampaignCreateRequest | 
        try {
            Object result = apiInstance.messagesPost(campaignCreateRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling EmailCampaignsApi#messagesPost");
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
| **campaignCreateRequest** | [**CampaignCreateRequest**](CampaignCreateRequest.md)|  | [optional] |

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
| **201** | Created |  * Content-Type -  <br>  |


## messagesUidDeletePost

> Object messagesUidDeletePost(uid, body)

Delete a campaign

Delete the specified campaign

### Example

```java
// Import classes:
import com.segnivo.sdk.ApiClient;
import com.segnivo.sdk.ApiException;
import com.segnivo.sdk.Configuration;
import com.segnivo.sdk.auth.*;
import com.segnivo.sdk.models.*;
import com.segnivo.sdk.api.EmailCampaignsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.segnivo.com/v1");
        
        // Configure API key authorization: apiKeyAuth
        ApiKeyAuth apiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("apiKeyAuth");
        apiKeyAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //apiKeyAuth.setApiKeyPrefix("Token");

        EmailCampaignsApi apiInstance = new EmailCampaignsApi(defaultClient);
        String uid = "<string>"; // String | (Required) The uid of the campaign to delete
        Object body = null; // Object | 
        try {
            Object result = apiInstance.messagesUidDeletePost(uid, body);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling EmailCampaignsApi#messagesUidDeletePost");
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
| **uid** | **String**| (Required) The uid of the campaign to delete | |
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


## messagesUidGet

> Object messagesUidGet(uid)

Get a campaign

Returns the specified campaign details

### Example

```java
// Import classes:
import com.segnivo.sdk.ApiClient;
import com.segnivo.sdk.ApiException;
import com.segnivo.sdk.Configuration;
import com.segnivo.sdk.auth.*;
import com.segnivo.sdk.models.*;
import com.segnivo.sdk.api.EmailCampaignsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.segnivo.com/v1");
        
        // Configure API key authorization: apiKeyAuth
        ApiKeyAuth apiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("apiKeyAuth");
        apiKeyAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //apiKeyAuth.setApiKeyPrefix("Token");

        EmailCampaignsApi apiInstance = new EmailCampaignsApi(defaultClient);
        String uid = "<string>"; // String | (Required) The uid of the campaign to fetch
        try {
            Object result = apiInstance.messagesUidGet(uid);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling EmailCampaignsApi#messagesUidGet");
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
| **uid** | **String**| (Required) The uid of the campaign to fetch | |

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


## messagesUidPatch

> Object messagesUidPatch(uid, campaignUpdateRequest)

Update Campaign

Updates a previously added campaign. Only Active and Paused campaigns can be updated.

### Example

```java
// Import classes:
import com.segnivo.sdk.ApiClient;
import com.segnivo.sdk.ApiException;
import com.segnivo.sdk.Configuration;
import com.segnivo.sdk.auth.*;
import com.segnivo.sdk.models.*;
import com.segnivo.sdk.api.EmailCampaignsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.segnivo.com/v1");
        
        // Configure API key authorization: apiKeyAuth
        ApiKeyAuth apiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("apiKeyAuth");
        apiKeyAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //apiKeyAuth.setApiKeyPrefix("Token");

        EmailCampaignsApi apiInstance = new EmailCampaignsApi(defaultClient);
        String uid = "<string>"; // String | (Required) The uid of the campaign to update
        CampaignUpdateRequest campaignUpdateRequest = new CampaignUpdateRequest(); // CampaignUpdateRequest | 
        try {
            Object result = apiInstance.messagesUidPatch(uid, campaignUpdateRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling EmailCampaignsApi#messagesUidPatch");
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
| **uid** | **String**| (Required) The uid of the campaign to update | |
| **campaignUpdateRequest** | [**CampaignUpdateRequest**](CampaignUpdateRequest.md)|  | [optional] |

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


## messagesUidPausePost

> Object messagesUidPausePost(uid, body)

Pause a campaign

Pause the specified campaign

### Example

```java
// Import classes:
import com.segnivo.sdk.ApiClient;
import com.segnivo.sdk.ApiException;
import com.segnivo.sdk.Configuration;
import com.segnivo.sdk.auth.*;
import com.segnivo.sdk.models.*;
import com.segnivo.sdk.api.EmailCampaignsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.segnivo.com/v1");
        
        // Configure API key authorization: apiKeyAuth
        ApiKeyAuth apiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("apiKeyAuth");
        apiKeyAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //apiKeyAuth.setApiKeyPrefix("Token");

        EmailCampaignsApi apiInstance = new EmailCampaignsApi(defaultClient);
        String uid = "<string>"; // String | (Required) The uid of the campaign to pause
        Object body = null; // Object | 
        try {
            Object result = apiInstance.messagesUidPausePost(uid, body);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling EmailCampaignsApi#messagesUidPausePost");
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
| **uid** | **String**| (Required) The uid of the campaign to pause | |
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


## messagesUidResumePost

> Object messagesUidResumePost(uid, body)

Resume the delivery of a campaign

Resume delivery of the specified campaign

### Example

```java
// Import classes:
import com.segnivo.sdk.ApiClient;
import com.segnivo.sdk.ApiException;
import com.segnivo.sdk.Configuration;
import com.segnivo.sdk.auth.*;
import com.segnivo.sdk.models.*;
import com.segnivo.sdk.api.EmailCampaignsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.segnivo.com/v1");
        
        // Configure API key authorization: apiKeyAuth
        ApiKeyAuth apiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("apiKeyAuth");
        apiKeyAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //apiKeyAuth.setApiKeyPrefix("Token");

        EmailCampaignsApi apiInstance = new EmailCampaignsApi(defaultClient);
        String uid = "<string>"; // String | (Required) The uid of the campaign to resume
        Object body = null; // Object | 
        try {
            Object result = apiInstance.messagesUidResumePost(uid, body);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling EmailCampaignsApi#messagesUidResumePost");
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
| **uid** | **String**| (Required) The uid of the campaign to resume | |
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

