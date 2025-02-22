package com.segnivo.sdk.api;

import com.segnivo.sdk.ApiClient;
import com.segnivo.sdk.BaseApi;

import com.segnivo.sdk.model.RelayEmailRequest;

import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.core.io.FileSystemResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;

@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class RelayTransactionalEmailsApi extends BaseApi {

    public RelayTransactionalEmailsApi() {
        super(new ApiClient());
    }

    public RelayTransactionalEmailsApi(ApiClient apiClient) {
        super(apiClient);
    }

    /**
     * Send an Email
     * The &#x60;/send&#x60; endpoint lets you send marketing and transactional emails from your &#x60;Segnivo Messaging&#x60; account.  The following data should be passed in JSON format in the request body  - **subject** - The subject of the email      - **from_name** (optional) - The full name of the sender      - **from_email** - The email of the sender      - **reply_to** (optional) - The email to which replies should be sent      - **content_type** (optional, defaults to &#x60;html&#x60;) - The content type of the email body. Accepts either &#x60;text&#x60; or &#x60;html&#x60;      - **recipients** - An array/collection of email addresses to deliver this message, max. 50      - **content** - The HTML or plain text content of the email      - **preheader** (optional) - The email preheader      - **custom_headers** (optional) - An object of custom headers to add to the email      - **delivery_at** (optional) - The 10-digit unix timestamp of the date/time at which this email should be delivered      - **attachments** (optional) - An array/collection of the URLs of files to attach to the email      - **sign_dkim** (optional, defaults to &#x60;true&#x60;) - A boolean value on if a DKIM signature should be included in this message      - **track_click** (optional, defaults to &#x60;true&#x60;) - A boolean value on if email clicks should be tracked. If &#x60;true&#x60; links in the email will be rewritten to enable tracking      - **track_open** (optional, defaults to &#x60;true&#x60;) - A boolean value on if the email opens should be tracked      - **is_transactional** (optional, defaults to &#x60;false&#x60;) - A boolean value to flag this email as a transactional email       #### 🔖 Important  **&#x60;is_transactional&#x60;** must only be set to &#x60;true&#x60; for transactional emails. Setting this to &#x60;true&#x60; for marketing emails will result in your API access being revoked and your account disabled.
     * <p><b>200</b> - OK
     * @param relayEmailRequest  (optional)
     * @return Object
     * @throws RestClientException if an error occurs while attempting to invoke the API
     */
    public Object relaySendPost(RelayEmailRequest relayEmailRequest) throws RestClientException {
        return relaySendPostWithHttpInfo(relayEmailRequest).getBody();
    }

    /**
     * Send an Email
     * The &#x60;/send&#x60; endpoint lets you send marketing and transactional emails from your &#x60;Segnivo Messaging&#x60; account.  The following data should be passed in JSON format in the request body  - **subject** - The subject of the email      - **from_name** (optional) - The full name of the sender      - **from_email** - The email of the sender      - **reply_to** (optional) - The email to which replies should be sent      - **content_type** (optional, defaults to &#x60;html&#x60;) - The content type of the email body. Accepts either &#x60;text&#x60; or &#x60;html&#x60;      - **recipients** - An array/collection of email addresses to deliver this message, max. 50      - **content** - The HTML or plain text content of the email      - **preheader** (optional) - The email preheader      - **custom_headers** (optional) - An object of custom headers to add to the email      - **delivery_at** (optional) - The 10-digit unix timestamp of the date/time at which this email should be delivered      - **attachments** (optional) - An array/collection of the URLs of files to attach to the email      - **sign_dkim** (optional, defaults to &#x60;true&#x60;) - A boolean value on if a DKIM signature should be included in this message      - **track_click** (optional, defaults to &#x60;true&#x60;) - A boolean value on if email clicks should be tracked. If &#x60;true&#x60; links in the email will be rewritten to enable tracking      - **track_open** (optional, defaults to &#x60;true&#x60;) - A boolean value on if the email opens should be tracked      - **is_transactional** (optional, defaults to &#x60;false&#x60;) - A boolean value to flag this email as a transactional email       #### 🔖 Important  **&#x60;is_transactional&#x60;** must only be set to &#x60;true&#x60; for transactional emails. Setting this to &#x60;true&#x60; for marketing emails will result in your API access being revoked and your account disabled.
     * <p><b>200</b> - OK
     * @param relayEmailRequest  (optional)
     * @return ResponseEntity&lt;Object&gt;
     * @throws RestClientException if an error occurs while attempting to invoke the API
     */
    public ResponseEntity<Object> relaySendPostWithHttpInfo(RelayEmailRequest relayEmailRequest) throws RestClientException {
        Object localVarPostBody = relayEmailRequest;
        

        final MultiValueMap<String, String> localVarQueryParams = new LinkedMultiValueMap<String, String>();
        final HttpHeaders localVarHeaderParams = new HttpHeaders();
        final MultiValueMap<String, String> localVarCookieParams = new LinkedMultiValueMap<String, String>();
        final MultiValueMap<String, Object> localVarFormParams = new LinkedMultiValueMap<String, Object>();

        final String[] localVarAccepts = { 
            "application/json"
         };
        final List<MediaType> localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);
        final String[] localVarContentTypes = { 
            "application/json"
         };
        final MediaType localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);

        String[] localVarAuthNames = new String[] { "apiKeyAuth" };

        ParameterizedTypeReference<Object> localReturnType = new ParameterizedTypeReference<Object>() {};
        return apiClient.invokeAPI("/relay/send", HttpMethod.POST, Collections.<String, Object>emptyMap(), localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType, localVarAuthNames, localReturnType);
    }

    @Override
    public <T> ResponseEntity<T> invokeAPI(String url, HttpMethod method, Object request, ParameterizedTypeReference<T> returnType) throws RestClientException {
        String localVarPath = url.replace(apiClient.getBasePath(), "");
        Object localVarPostBody = request;

        final Map<String, Object> uriVariables = new HashMap<String, Object>();
        final MultiValueMap<String, String> localVarQueryParams = new LinkedMultiValueMap<String, String>();
        final HttpHeaders localVarHeaderParams = new HttpHeaders();
        final MultiValueMap<String, String> localVarCookieParams = new LinkedMultiValueMap<String, String>();
        final MultiValueMap<String, Object> localVarFormParams = new LinkedMultiValueMap<String, Object>();

        final String[] localVarAccepts = { 
            "application/json"
         };
        final List<MediaType> localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);
        final String[] localVarContentTypes = { 
            "application/json"
         };
        final MediaType localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);

        String[] localVarAuthNames = new String[] { "apiKeyAuth" };

        return apiClient.invokeAPI(localVarPath, method, uriVariables, localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType, localVarAuthNames, returnType);
    }
}
