# MailingListRequestContact

Contact details for the email sender or organization. Used for compliance with email regulations (e.g., CAN-SPAM).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | The email address of the sender or organization. Usually used for replies or compliance purposes. | [optional] 
**company** | **str** | The name of the organization sending the email. | [optional] 

## Example

```python
from segnivo_sdk.models.mailing_list_request_contact import MailingListRequestContact

# TODO update the JSON string below
json = "{}"
# create an instance of MailingListRequestContact from a JSON string
mailing_list_request_contact_instance = MailingListRequestContact.from_json(json)
# print the JSON string representation of the object
print(MailingListRequestContact.to_json())

# convert the object into a dict
mailing_list_request_contact_dict = mailing_list_request_contact_instance.to_dict()
# create an instance of MailingListRequestContact from a dict
mailing_list_request_contact_from_dict = MailingListRequestContact.from_dict(mailing_list_request_contact_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


