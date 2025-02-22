# ContactsUidAddTagPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tag** | **str** | Tag for a contact. | [optional] 

## Example

```python
from segnivo_sdk.models.contacts_uid_add_tag_post_request import ContactsUidAddTagPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ContactsUidAddTagPostRequest from a JSON string
contacts_uid_add_tag_post_request_instance = ContactsUidAddTagPostRequest.from_json(json)
# print the JSON string representation of the object
print(ContactsUidAddTagPostRequest.to_json())

# convert the object into a dict
contacts_uid_add_tag_post_request_dict = contacts_uid_add_tag_post_request_instance.to_dict()
# create an instance of ContactsUidAddTagPostRequest from a dict
contacts_uid_add_tag_post_request_from_dict = ContactsUidAddTagPostRequest.from_dict(contacts_uid_add_tag_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


