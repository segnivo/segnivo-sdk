# CampaignUpdateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**subject** | **str** |  | 
**from_email** | **str** |  | 
**from_name** | **str** |  | 
**reply_to** | **str** |  | 

## Example

```python
from segnivo_sdk.models.campaign_update_request import CampaignUpdateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CampaignUpdateRequest from a JSON string
campaign_update_request_instance = CampaignUpdateRequest.from_json(json)
# print the JSON string representation of the object
print(CampaignUpdateRequest.to_json())

# convert the object into a dict
campaign_update_request_dict = campaign_update_request_instance.to_dict()
# create an instance of CampaignUpdateRequest from a dict
campaign_update_request_from_dict = CampaignUpdateRequest.from_dict(campaign_update_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


