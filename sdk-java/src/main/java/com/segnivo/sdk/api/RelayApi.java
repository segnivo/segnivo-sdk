package com.segnivo.sdk.api;

import com.segnivo.sdk.ApiClient;
import com.segnivo.sdk.BaseApi;


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
public class RelayApi extends BaseApi {

    public RelayApi() {
        super(new ApiClient());
    }

    public RelayApi(ApiClient apiClient) {
        super(apiClient);
    }

    /**
     * Fetch Emails
     * The &#x60;/emails&#x60; endpoint lets you fetch one or more marketing/transactional email(s) from your &#x60;Segnivo Messaging&#x60; account and it accepts two **optional** parameters.  - The &#x60;id&#x60; string of the email to fetch provided as a path variable      - The &#x60;limit&#x60; on the number of records to fetch (if email id is not provided) as a query string parameter. This value defaults to 100 if not provided.
     * <p><b>200</b> - OK
     * @param id The ID of the email to fetch (required)
     * @param limit The number of records to fetch (optional)
     * @return Object
     * @throws RestClientException if an error occurs while attempting to invoke the API
     */
    public Object relayEmailsIdGet(String id, Integer limit) throws RestClientException {
        return relayEmailsIdGetWithHttpInfo(id, limit).getBody();
    }

    /**
     * Fetch Emails
     * The &#x60;/emails&#x60; endpoint lets you fetch one or more marketing/transactional email(s) from your &#x60;Segnivo Messaging&#x60; account and it accepts two **optional** parameters.  - The &#x60;id&#x60; string of the email to fetch provided as a path variable      - The &#x60;limit&#x60; on the number of records to fetch (if email id is not provided) as a query string parameter. This value defaults to 100 if not provided.
     * <p><b>200</b> - OK
     * @param id The ID of the email to fetch (required)
     * @param limit The number of records to fetch (optional)
     * @return ResponseEntity&lt;Object&gt;
     * @throws RestClientException if an error occurs while attempting to invoke the API
     */
    public ResponseEntity<Object> relayEmailsIdGetWithHttpInfo(String id, Integer limit) throws RestClientException {
        Object localVarPostBody = null;
        
        // verify the required parameter 'id' is set
        if (id == null) {
            throw new HttpClientErrorException(HttpStatus.BAD_REQUEST, "Missing the required parameter 'id' when calling relayEmailsIdGet");
        }
        
        // create path and map variables
        final Map<String, Object> uriVariables = new HashMap<String, Object>();
        uriVariables.put("id", id);

        final MultiValueMap<String, String> localVarQueryParams = new LinkedMultiValueMap<String, String>();
        final HttpHeaders localVarHeaderParams = new HttpHeaders();
        final MultiValueMap<String, String> localVarCookieParams = new LinkedMultiValueMap<String, String>();
        final MultiValueMap<String, Object> localVarFormParams = new LinkedMultiValueMap<String, Object>();

        localVarQueryParams.putAll(apiClient.parameterToMultiValueMap(null, "limit", limit));
        

        final String[] localVarAccepts = { 
            "application/json"
         };
        final List<MediaType> localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);
        final String[] localVarContentTypes = {  };
        final MediaType localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);

        String[] localVarAuthNames = new String[] { "apiKeyAuth" };

        ParameterizedTypeReference<Object> localReturnType = new ParameterizedTypeReference<Object>() {};
        return apiClient.invokeAPI("/relay/emails/{id}", HttpMethod.GET, uriVariables, localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType, localVarAuthNames, localReturnType);
    }
    /**
     * Send a Raw Email Message
     * The &#x60;/raw&#x60; endpoint lets you send marketing and transactional emails from your &#x60;Segnivo Messaging&#x60; account by passing a raw RFC822 message to the &#x60;message&#x60; attribute in the request body.  The following parameters should be passed as a form data to the endpoint  - **message** - A raw RFC822 message      - **sign_dkim** (optional, defaults to &#x60;true&#x60;) - A boolean value on if a DKIM signature should be included in this message      - **track_click** (optional, defaults to &#x60;true&#x60;) - A boolean value on if email clicks should be tracked. If &#x60;true&#x60; links in the email will be rewritten to enable tracking      - **track_open** (optional, defaults to &#x60;true&#x60;) - A boolean value on if the email opens should be tracked      - **is_transactional** (optional, defaults to &#x60;false&#x60;) - A boolean value to flag this email as a transactional email
     * <p><b>200</b> - OK
     * @param message  (optional)
     * @param isTransactional  (optional)
     * @param trackClick  (optional)
     * @param trackOpen  (optional)
     * @param signDkim  (optional)
     * @return Object
     * @throws RestClientException if an error occurs while attempting to invoke the API
     */
    public Object relayRawPost(String message, Boolean isTransactional, Boolean trackClick, Boolean trackOpen, Boolean signDkim) throws RestClientException {
        return relayRawPostWithHttpInfo(message, isTransactional, trackClick, trackOpen, signDkim).getBody();
    }

    /**
     * Send a Raw Email Message
     * The &#x60;/raw&#x60; endpoint lets you send marketing and transactional emails from your &#x60;Segnivo Messaging&#x60; account by passing a raw RFC822 message to the &#x60;message&#x60; attribute in the request body.  The following parameters should be passed as a form data to the endpoint  - **message** - A raw RFC822 message      - **sign_dkim** (optional, defaults to &#x60;true&#x60;) - A boolean value on if a DKIM signature should be included in this message      - **track_click** (optional, defaults to &#x60;true&#x60;) - A boolean value on if email clicks should be tracked. If &#x60;true&#x60; links in the email will be rewritten to enable tracking      - **track_open** (optional, defaults to &#x60;true&#x60;) - A boolean value on if the email opens should be tracked      - **is_transactional** (optional, defaults to &#x60;false&#x60;) - A boolean value to flag this email as a transactional email
     * <p><b>200</b> - OK
     * @param message  (optional)
     * @param isTransactional  (optional)
     * @param trackClick  (optional)
     * @param trackOpen  (optional)
     * @param signDkim  (optional)
     * @return ResponseEntity&lt;Object&gt;
     * @throws RestClientException if an error occurs while attempting to invoke the API
     */
    public ResponseEntity<Object> relayRawPostWithHttpInfo(String message, Boolean isTransactional, Boolean trackClick, Boolean trackOpen, Boolean signDkim) throws RestClientException {
        Object localVarPostBody = null;
        

        final MultiValueMap<String, String> localVarQueryParams = new LinkedMultiValueMap<String, String>();
        final HttpHeaders localVarHeaderParams = new HttpHeaders();
        final MultiValueMap<String, String> localVarCookieParams = new LinkedMultiValueMap<String, String>();
        final MultiValueMap<String, Object> localVarFormParams = new LinkedMultiValueMap<String, Object>();

        if (message != null)
            localVarFormParams.add("message", message);
        if (isTransactional != null)
            localVarFormParams.add("is_transactional", isTransactional);
        if (trackClick != null)
            localVarFormParams.add("track_click", trackClick);
        if (trackOpen != null)
            localVarFormParams.add("track_open", trackOpen);
        if (signDkim != null)
            localVarFormParams.add("sign_dkim", signDkim);

        final String[] localVarAccepts = { 
            "application/json"
         };
        final List<MediaType> localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);
        final String[] localVarContentTypes = { 
            "multipart/form-data"
         };
        final MediaType localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);

        String[] localVarAuthNames = new String[] { "apiKeyAuth" };

        ParameterizedTypeReference<Object> localReturnType = new ParameterizedTypeReference<Object>() {};
        return apiClient.invokeAPI("/relay/raw", HttpMethod.POST, Collections.<String, Object>emptyMap(), localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType, localVarAuthNames, localReturnType);
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
            "multipart/form-data"
         };
        final MediaType localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);

        String[] localVarAuthNames = new String[] { "apiKeyAuth" };

        return apiClient.invokeAPI(localVarPath, method, uriVariables, localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType, localVarAuthNames, returnType);
    }
}
