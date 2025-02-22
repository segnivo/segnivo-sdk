# SegnivoSDK::CampaignCreateRequest

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **mail_list_uid** | **String** | Unique identifier for the mailing list | [optional] |
| **name** | **String** | Name of the campaign | [optional] |
| **subject** | **String** | Subject of the email campaign | [optional] |
| **from_email** | **String** | Sender&#39;s email address | [optional] |
| **from_name** | **String** | Sender&#39;s full name | [optional] |
| **reply_to** | **String** | Email address for replies | [optional] |

## Example

```ruby
require 'segnivo_sdk'

instance = SegnivoSDK::CampaignCreateRequest.new(
  mail_list_uid: null,
  name: null,
  subject: null,
  from_email: null,
  from_name: null,
  reply_to: null
)
```

