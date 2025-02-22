# SegnivoSDK::AddContactRequest

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **list_uid** | **String** | Unique identifier for the mailing list. |  |
| **email** | **String** | Subscriber&#39;s email address. |  |
| **first_name** | **String** | Subscriber&#39;s first name. | [optional] |
| **last_name** | **String** | Subscriber&#39;s last name. | [optional] |
| **tag** | **String** | Tag to categorize the subscriber. | [optional] |

## Example

```ruby
require 'segnivo_sdk'

instance = SegnivoSDK::AddContactRequest.new(
  list_uid: null,
  email: null,
  first_name: null,
  last_name: null,
  tag: null
)
```

