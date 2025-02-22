# EmailAddressVerificationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**emails** | **List[str]** | List of email addresses to validate | [optional] 

## Example

```python
from segnivo_sdk.models.email_address_verification_request import EmailAddressVerificationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of EmailAddressVerificationRequest from a JSON string
email_address_verification_request_instance = EmailAddressVerificationRequest.from_json(json)
# print the JSON string representation of the object
print(EmailAddressVerificationRequest.to_json())

# convert the object into a dict
email_address_verification_request_dict = email_address_verification_request_instance.to_dict()
# create an instance of EmailAddressVerificationRequest from a dict
email_address_verification_request_from_dict = EmailAddressVerificationRequest.from_dict(email_address_verification_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


