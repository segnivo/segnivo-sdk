# RelayApi

All URIs are relative to *https://api.segnivo.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**relayEmailsIdGet**](RelayApi.md#relayEmailsIdGet) | **GET** /relay/emails/{id} | Fetch Emails |
| [**relayRawPost**](RelayApi.md#relayRawPost) | **POST** /relay/raw | Send a Raw Email Message |



## relayEmailsIdGet

> Object relayEmailsIdGet(id, limit)

Fetch Emails

The &#x60;/emails&#x60; endpoint lets you fetch one or more marketing/transactional email(s) from your &#x60;Segnivo Messaging&#x60; account and it accepts two **optional** parameters.  - The &#x60;id&#x60; string of the email to fetch provided as a path variable      - The &#x60;limit&#x60; on the number of records to fetch (if email id is not provided) as a query string parameter. This value defaults to 100 if not provided.

### Example

```java
// Import classes:
import com.segnivo.sdk.ApiClient;
import com.segnivo.sdk.ApiException;
import com.segnivo.sdk.Configuration;
import com.segnivo.sdk.auth.*;
import com.segnivo.sdk.models.*;
import com.segnivo.sdk.api.RelayApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.segnivo.com/v1");
        
        // Configure API key authorization: apiKeyAuth
        ApiKeyAuth apiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("apiKeyAuth");
        apiKeyAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //apiKeyAuth.setApiKeyPrefix("Token");

        RelayApi apiInstance = new RelayApi(defaultClient);
        String id = "<string>"; // String | The ID of the email to fetch
        Integer limit = 100; // Integer | The number of records to fetch
        try {
            Object result = apiInstance.relayEmailsIdGet(id, limit);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling RelayApi#relayEmailsIdGet");
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
| **id** | **String**| The ID of the email to fetch | |
| **limit** | **Integer**| The number of records to fetch | [optional] |

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


## relayRawPost

> Object relayRawPost(message, isTransactional, trackClick, trackOpen, signDkim)

Send a Raw Email Message

The &#x60;/raw&#x60; endpoint lets you send marketing and transactional emails from your &#x60;Segnivo Messaging&#x60; account by passing a raw RFC822 message to the &#x60;message&#x60; attribute in the request body.  The following parameters should be passed as a form data to the endpoint  - **message** - A raw RFC822 message      - **sign_dkim** (optional, defaults to &#x60;true&#x60;) - A boolean value on if a DKIM signature should be included in this message      - **track_click** (optional, defaults to &#x60;true&#x60;) - A boolean value on if email clicks should be tracked. If &#x60;true&#x60; links in the email will be rewritten to enable tracking      - **track_open** (optional, defaults to &#x60;true&#x60;) - A boolean value on if the email opens should be tracked      - **is_transactional** (optional, defaults to &#x60;false&#x60;) - A boolean value to flag this email as a transactional email

### Example

```java
// Import classes:
import com.segnivo.sdk.ApiClient;
import com.segnivo.sdk.ApiException;
import com.segnivo.sdk.Configuration;
import com.segnivo.sdk.auth.*;
import com.segnivo.sdk.models.*;
import com.segnivo.sdk.api.RelayApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.segnivo.com/v1");
        
        // Configure API key authorization: apiKeyAuth
        ApiKeyAuth apiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("apiKeyAuth");
        apiKeyAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //apiKeyAuth.setApiKeyPrefix("Token");

        RelayApi apiInstance = new RelayApi(defaultClient);
        String message = "message_example"; // String | 
        Boolean isTransactional = true; // Boolean | 
        Boolean trackClick = true; // Boolean | 
        Boolean trackOpen = true; // Boolean | 
        Boolean signDkim = true; // Boolean | 
        try {
            Object result = apiInstance.relayRawPost(message, isTransactional, trackClick, trackOpen, signDkim);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling RelayApi#relayRawPost");
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
| **message** | **String**|  | [optional] |
| **isTransactional** | **Boolean**|  | [optional] |
| **trackClick** | **Boolean**|  | [optional] |
| **trackOpen** | **Boolean**|  | [optional] |
| **signDkim** | **Boolean**|  | [optional] |

### Return type

**Object**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  * Content-Type -  <br>  |

