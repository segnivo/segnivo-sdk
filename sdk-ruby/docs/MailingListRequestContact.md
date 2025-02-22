# SegnivoSDK::MailingListRequestContact

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **email** | **String** | The email address of the sender or organization. Usually used for replies or compliance purposes. | [optional] |
| **company** | **String** | The name of the organization sending the email. | [optional] |

## Example

```ruby
require 'segnivo_sdk'

instance = SegnivoSDK::MailingListRequestContact.new(
  email: support@example.com,
  company: Example Company Inc.
)
```

