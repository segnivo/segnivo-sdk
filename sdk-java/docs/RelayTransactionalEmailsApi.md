# RelayTransactionalEmailsApi

All URIs are relative to *https://api.segnivo.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**relaySendPost**](RelayTransactionalEmailsApi.md#relaySendPost) | **POST** /relay/send | Send an Email |



## relaySendPost

> Object relaySendPost(relayEmailRequest)

Send an Email

The &#x60;/send&#x60; endpoint lets you send marketing and transactional emails from your &#x60;Segnivo Messaging&#x60; account.  The following data should be passed in JSON format in the request body  - **subject** - The subject of the email      - **from_name** (optional) - The full name of the sender      - **from_email** - The email of the sender      - **reply_to** (optional) - The email to which replies should be sent      - **content_type** (optional, defaults to &#x60;html&#x60;) - The content type of the email body. Accepts either &#x60;text&#x60; or &#x60;html&#x60;      - **recipients** - An array/collection of email addresses to deliver this message, max. 50      - **content** - The HTML or plain text content of the email      - **preheader** (optional) - The email preheader      - **custom_headers** (optional) - An object of custom headers to add to the email      - **delivery_at** (optional) - The 10-digit unix timestamp of the date/time at which this email should be delivered      - **attachments** (optional) - An array/collection of the URLs of files to attach to the email      - **sign_dkim** (optional, defaults to &#x60;true&#x60;) - A boolean value on if a DKIM signature should be included in this message      - **track_click** (optional, defaults to &#x60;true&#x60;) - A boolean value on if email clicks should be tracked. If &#x60;true&#x60; links in the email will be rewritten to enable tracking      - **track_open** (optional, defaults to &#x60;true&#x60;) - A boolean value on if the email opens should be tracked      - **is_transactional** (optional, defaults to &#x60;false&#x60;) - A boolean value to flag this email as a transactional email       #### 🔖 Important  **&#x60;is_transactional&#x60;** must only be set to &#x60;true&#x60; for transactional emails. Setting this to &#x60;true&#x60; for marketing emails will result in your API access being revoked and your account disabled.

### Example

```java
// Import classes:
import com.segnivo.sdk.ApiClient;
import com.segnivo.sdk.ApiException;
import com.segnivo.sdk.Configuration;
import com.segnivo.sdk.auth.*;
import com.segnivo.sdk.models.*;
import com.segnivo.sdk.api.RelayTransactionalEmailsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.segnivo.com/v1");
        
        // Configure API key authorization: apiKeyAuth
        ApiKeyAuth apiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("apiKeyAuth");
        apiKeyAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //apiKeyAuth.setApiKeyPrefix("Token");

        RelayTransactionalEmailsApi apiInstance = new RelayTransactionalEmailsApi(defaultClient);
        RelayEmailRequest relayEmailRequest = new RelayEmailRequest(); // RelayEmailRequest | 
        try {
            Object result = apiInstance.relaySendPost(relayEmailRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling RelayTransactionalEmailsApi#relaySendPost");
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
| **relayEmailRequest** | [**RelayEmailRequest**](RelayEmailRequest.md)|  | [optional] |

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

