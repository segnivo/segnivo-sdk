# SegnivoSDK::RelayEmailRequest

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **subject** | **String** | The subject of the email | [optional] |
| **from_name** | **String** | The full name of the sender | [optional] |
| **from_email** | **String** | The email of the sender | [optional] |
| **reply_to** | **String** | The email to which replies should be sent | [optional] |
| **content_type** | **String** | The content type of the email body | [optional][default to &#39;html&#39;] |
| **recipients** | **Array&lt;String&gt;** | An array of email addresses to deliver this message | [optional] |
| **content** | **String** | The HTML or plain text content of the email | [optional] |
| **preheader** | **String** | The email preheader | [optional] |
| **custom_headers** | **Object** | An object of custom headers to add to the email | [optional] |
| **delivery_at** | **Integer** | The 10-digit unix timestamp of the date/time at which this email should be delivered | [optional] |
| **attachments** | **Array&lt;String&gt;** | An array of URLs of files to attach to the email | [optional] |
| **sign_dkim** | **Boolean** | A boolean value on if a DKIM signature should be included in this message | [optional][default to true] |
| **track_click** | **Boolean** | A boolean value on if email clicks should be tracked | [optional][default to true] |
| **track_open** | **Boolean** | A boolean value on if the email opens should be tracked | [optional][default to true] |
| **is_transactional** | **Boolean** | A boolean value to flag this email as a transactional email | [optional][default to false] |

## Example

```ruby
require 'segnivo_sdk'

instance = SegnivoSDK::RelayEmailRequest.new(
  subject: null,
  from_name: null,
  from_email: null,
  reply_to: null,
  content_type: null,
  recipients: null,
  content: null,
  preheader: null,
  custom_headers: null,
  delivery_at: null,
  attachments: null,
  sign_dkim: null,
  track_click: null,
  track_open: null,
  is_transactional: null
)
```

