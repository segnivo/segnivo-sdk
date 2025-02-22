# CampaignCreateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mail_list_uid** | **str** | Unique identifier for the mailing list | [optional] 
**name** | **str** | Name of the campaign | [optional] 
**subject** | **str** | Subject of the email campaign | [optional] 
**from_email** | **str** | Sender&#39;s email address | [optional] 
**from_name** | **str** | Sender&#39;s full name | [optional] 
**reply_to** | **str** | Email address for replies | [optional] 

## Example

```python
from segnivo_sdk.models.campaign_create_request import CampaignCreateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CampaignCreateRequest from a JSON string
campaign_create_request_instance = CampaignCreateRequest.from_json(json)
# print the JSON string representation of the object
print(CampaignCreateRequest.to_json())

# convert the object into a dict
campaign_create_request_dict = campaign_create_request_instance.to_dict()
# create an instance of CampaignCreateRequest from a dict
campaign_create_request_from_dict = CampaignCreateRequest.from_dict(campaign_create_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


