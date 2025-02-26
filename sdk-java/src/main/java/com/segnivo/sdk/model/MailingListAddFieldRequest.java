/*
 * Segnivo Developer API
 * **API Version**: 1.7  **Date**: 9th July, 2024  ## 📄 Getting Started  This API is based on the REST API architecture, allowing the user to easily manage their data with this resource-based approach.  Every API call is established on which specific request type (GET, POST, PUT, DELETE) will be used.  The API must not be abused and should be used within acceptable limits.  To start using this API, you will need not create or access an existing Segnivo account to obtain your API key ([retrievable from your account settings](https://messaging.segnivo.com/account/api)).  - You must use a valid API Key to send requests to the API endpoints.      - The API only responds to HTTPS-secured communications. Any requests sent via HTTP return an HTTP 301 redirect to the corresponding HTTPS resources.      - The API returns request responses in JSON format. When an API request returns an error, it is sent in the JSON response as an error key or with details in the message key.       ### 🔖 **Need some help?**  In case you have questions or need clarity with interacting with some endpoints feel free to create a support ticket on your account or you can send an email ([<i>developers@segnivo.com</i>](https://mailto:developers@segnivo.com)) directly and we would be happy to help.  ---  ## Authentication  As noted earlier, this API uses API keys for authentication. You can generate a Segnivo API key in the [API](https://messaging.segnivo.com/account/api) section of your account settings.  You must include an API key in each request to this API with the `X-API-KEY` request header.  ### Authentication error response  If an API key is missing, malformed, or invalid, you will receive an HTTP 401 Unauthorized response code.  ## Rate and usage limits  API access rate limits apply on a per-API endpoint basis in unit time. The limit is 10k requests per hour for most endpoints and 1m requests per hour for transactional/relay email-sending endpoints. Also, depending on your plan, you may have usage limits. If you exceed either limit, your request will return an HTTP 429 Too Many Requests status code or HTTP 403 if sending credits have been exhausted.  ### 503 response  An HTTP `503` response from our servers may indicate there is an unexpected spike in API access traffic, while this rarely happens, we ensure the server is usually operational within the next two to five minutes. If the outage persists or you receive any other form of an HTTP `5XX` error, contact support ([<i>developers@segnivo.com</i>](https://mailto:developers@segnivo.com)).  ### Request headers  To make a successful request, some or all of the following headers must be passed with the request.  | **Header** | **Description** | | --- | --- | | Content-Type | Required and should be `application/json` in most cases. | | Accept | Required and should be `application/json` in most cases | | Content-Length | Required for `POST`, `PATCH`, and `PUT` requests containing a request body. The value must be the number of bytes rather than the number of characters in the request body. | | X-API-KEY | Required. Specifies the API key used for authorization. |  ##### 🔖 Note with example requests and code snippets  If/when you use the code snippets used as example requests, remember to calculate and add the `Content-Length` header. Some request libraries, frameworks, and tools automatically add this header for you while a few do not. Kindly check and ensure yours does or add it yourself.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.segnivo.sdk.model;

import java.util.Objects;
import java.util.Arrays;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonTypeName;
import com.fasterxml.jackson.annotation.JsonValue;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.fasterxml.jackson.annotation.JsonTypeName;

/**
 * MailingListAddFieldRequest
 */
@JsonPropertyOrder({
  MailingListAddFieldRequest.JSON_PROPERTY_TYPE,
  MailingListAddFieldRequest.JSON_PROPERTY_LABEL,
  MailingListAddFieldRequest.JSON_PROPERTY_TAG,
  MailingListAddFieldRequest.JSON_PROPERTY_DEFAULT_VALUE
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class MailingListAddFieldRequest {
  public static final String JSON_PROPERTY_TYPE = "type";
  @javax.annotation.Nonnull
  private String type;

  public static final String JSON_PROPERTY_LABEL = "label";
  @javax.annotation.Nonnull
  private String label;

  public static final String JSON_PROPERTY_TAG = "tag";
  @javax.annotation.Nonnull
  private String tag;

  public static final String JSON_PROPERTY_DEFAULT_VALUE = "default_value";
  @javax.annotation.Nullable
  private String defaultValue;

  public MailingListAddFieldRequest() {
  }

  public MailingListAddFieldRequest type(@javax.annotation.Nonnull String type) {
    
    this.type = type;
    return this;
  }

  /**
   * The type of input field to be created. This defines the behavior and appearance of the input.
   * @return type
   */
  @javax.annotation.Nonnull
  @JsonProperty(JSON_PROPERTY_TYPE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public String getType() {
    return type;
  }


  @JsonProperty(JSON_PROPERTY_TYPE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setType(@javax.annotation.Nonnull String type) {
    this.type = type;
  }

  public MailingListAddFieldRequest label(@javax.annotation.Nonnull String label) {
    
    this.label = label;
    return this;
  }

  /**
   * The label associated with the input field. This is typically displayed to the user as a descriptor.
   * @return label
   */
  @javax.annotation.Nonnull
  @JsonProperty(JSON_PROPERTY_LABEL)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public String getLabel() {
    return label;
  }


  @JsonProperty(JSON_PROPERTY_LABEL)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setLabel(@javax.annotation.Nonnull String label) {
    this.label = label;
  }

  public MailingListAddFieldRequest tag(@javax.annotation.Nonnull String tag) {
    
    this.tag = tag;
    return this;
  }

  /**
   * A unique identifier or tag for the input field, useful for internal processing or referencing the field in the system.
   * @return tag
   */
  @javax.annotation.Nonnull
  @JsonProperty(JSON_PROPERTY_TAG)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public String getTag() {
    return tag;
  }


  @JsonProperty(JSON_PROPERTY_TAG)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setTag(@javax.annotation.Nonnull String tag) {
    this.tag = tag;
  }

  public MailingListAddFieldRequest defaultValue(@javax.annotation.Nullable String defaultValue) {
    
    this.defaultValue = defaultValue;
    return this;
  }

  /**
   * The default value pre-filled in the input field when it is rendered. This is optional and can be left blank.
   * @return defaultValue
   */
  @javax.annotation.Nullable
  @JsonProperty(JSON_PROPERTY_DEFAULT_VALUE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getDefaultValue() {
    return defaultValue;
  }


  @JsonProperty(JSON_PROPERTY_DEFAULT_VALUE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setDefaultValue(@javax.annotation.Nullable String defaultValue) {
    this.defaultValue = defaultValue;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    MailingListAddFieldRequest mailingListAddFieldRequest = (MailingListAddFieldRequest) o;
    return Objects.equals(this.type, mailingListAddFieldRequest.type) &&
        Objects.equals(this.label, mailingListAddFieldRequest.label) &&
        Objects.equals(this.tag, mailingListAddFieldRequest.tag) &&
        Objects.equals(this.defaultValue, mailingListAddFieldRequest.defaultValue);
  }

  @Override
  public int hashCode() {
    return Objects.hash(type, label, tag, defaultValue);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class MailingListAddFieldRequest {\n");
    sb.append("    type: ").append(toIndentedString(type)).append("\n");
    sb.append("    label: ").append(toIndentedString(label)).append("\n");
    sb.append("    tag: ").append(toIndentedString(tag)).append("\n");
    sb.append("    defaultValue: ").append(toIndentedString(defaultValue)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}

