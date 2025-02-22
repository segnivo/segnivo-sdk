# AddContactRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**list_uid** | **str** | Unique identifier for the mailing list. | 
**email** | **str** | Subscriber&#39;s email address. | 
**first_name** | **str** | Subscriber&#39;s first name. | [optional] 
**last_name** | **str** | Subscriber&#39;s last name. | [optional] 
**tag** | **str** | Tag to categorize the subscriber. | [optional] 

## Example

```python
from segnivo_sdk.models.add_contact_request import AddContactRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AddContactRequest from a JSON string
add_contact_request_instance = AddContactRequest.from_json(json)
# print the JSON string representation of the object
print(AddContactRequest.to_json())

# convert the object into a dict
add_contact_request_dict = add_contact_request_instance.to_dict()
# create an instance of AddContactRequest from a dict
add_contact_request_from_dict = AddContactRequest.from_dict(add_contact_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


