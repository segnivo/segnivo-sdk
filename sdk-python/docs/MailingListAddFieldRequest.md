# MailingListAddFieldRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | The type of input field to be created. This defines the behavior and appearance of the input. | 
**label** | **str** | The label associated with the input field. This is typically displayed to the user as a descriptor. | 
**tag** | **str** | A unique identifier or tag for the input field, useful for internal processing or referencing the field in the system. | 
**default_value** | **str** | The default value pre-filled in the input field when it is rendered. This is optional and can be left blank. | [optional] 

## Example

```python
from segnivo_sdk.models.mailing_list_add_field_request import MailingListAddFieldRequest

# TODO update the JSON string below
json = "{}"
# create an instance of MailingListAddFieldRequest from a JSON string
mailing_list_add_field_request_instance = MailingListAddFieldRequest.from_json(json)
# print the JSON string representation of the object
print(MailingListAddFieldRequest.to_json())

# convert the object into a dict
mailing_list_add_field_request_dict = mailing_list_add_field_request_instance.to_dict()
# create an instance of MailingListAddFieldRequest from a dict
mailing_list_add_field_request_from_dict = MailingListAddFieldRequest.from_dict(mailing_list_add_field_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


