# MailingListRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the email template or campaign. This is used for internal identification and organization. | 
**from_email** | **str** | The sender&#39;s email address that will appear in the \&quot;From\&quot; field of the email. | 
**from_name** | **str** | The sender&#39;s name that will appear in the \&quot;From\&quot; field of the email. | 
**contact** | [**MailingListRequestContact**](MailingListRequestContact.md) |  | [optional] 

## Example

```python
from segnivo_sdk.models.mailing_list_request import MailingListRequest

# TODO update the JSON string below
json = "{}"
# create an instance of MailingListRequest from a JSON string
mailing_list_request_instance = MailingListRequest.from_json(json)
# print the JSON string representation of the object
print(MailingListRequest.to_json())

# convert the object into a dict
mailing_list_request_dict = mailing_list_request_instance.to_dict()
# create an instance of MailingListRequest from a dict
mailing_list_request_from_dict = MailingListRequest.from_dict(mailing_list_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


