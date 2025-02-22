# RelayEmailRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subject** | **str** | The subject of the email | [optional] 
**from_name** | **str** | The full name of the sender | [optional] 
**from_email** | **str** | The email of the sender | [optional] 
**reply_to** | **str** | The email to which replies should be sent | [optional] 
**content_type** | **str** | The content type of the email body | [optional] [default to 'html']
**recipients** | **List[str]** | An array of email addresses to deliver this message | [optional] 
**content** | **str** | The HTML or plain text content of the email | [optional] 
**preheader** | **str** | The email preheader | [optional] 
**custom_headers** | **object** | An object of custom headers to add to the email | [optional] 
**delivery_at** | **int** | The 10-digit unix timestamp of the date/time at which this email should be delivered | [optional] 
**attachments** | **List[str]** | An array of URLs of files to attach to the email | [optional] 
**sign_dkim** | **bool** | A boolean value on if a DKIM signature should be included in this message | [optional] [default to True]
**track_click** | **bool** | A boolean value on if email clicks should be tracked | [optional] [default to True]
**track_open** | **bool** | A boolean value on if the email opens should be tracked | [optional] [default to True]
**is_transactional** | **bool** | A boolean value to flag this email as a transactional email | [optional] [default to False]

## Example

```python
from segnivo_sdk.models.relay_email_request import RelayEmailRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RelayEmailRequest from a JSON string
relay_email_request_instance = RelayEmailRequest.from_json(json)
# print the JSON string representation of the object
print(RelayEmailRequest.to_json())

# convert the object into a dict
relay_email_request_dict = relay_email_request_instance.to_dict()
# create an instance of RelayEmailRequest from a dict
relay_email_request_from_dict = RelayEmailRequest.from_dict(relay_email_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


