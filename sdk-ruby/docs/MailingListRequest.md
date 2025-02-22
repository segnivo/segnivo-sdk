# SegnivoSDK::MailingListRequest

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **name** | **String** | The name of the email template or campaign. This is used for internal identification and organization. |  |
| **from_email** | **String** | The sender&#39;s email address that will appear in the \&quot;From\&quot; field of the email. |  |
| **from_name** | **String** | The sender&#39;s name that will appear in the \&quot;From\&quot; field of the email. |  |
| **contact** | [**MailingListRequestContact**](MailingListRequestContact.md) |  | [optional] |

## Example

```ruby
require 'segnivo_sdk'

instance = SegnivoSDK::MailingListRequest.new(
  name: Welcome Email,
  from_email: no-reply@example.com,
  from_name: Example Company,
  contact: null
)
```

