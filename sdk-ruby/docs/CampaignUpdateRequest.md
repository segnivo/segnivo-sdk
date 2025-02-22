# SegnivoSDK::CampaignUpdateRequest

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **name** | **String** |  |  |
| **subject** | **String** |  |  |
| **from_email** | **String** |  |  |
| **from_name** | **String** |  |  |
| **reply_to** | **String** |  |  |

## Example

```ruby
require 'segnivo_sdk'

instance = SegnivoSDK::CampaignUpdateRequest.new(
  name: Your Campaign Name,
  subject: Welcome to our service!,
  from_email: no-reply@example.com,
  from_name: Example Team,
  reply_to: support@example.com
)
```

