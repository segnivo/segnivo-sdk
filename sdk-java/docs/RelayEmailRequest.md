

# RelayEmailRequest


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**subject** | **String** | The subject of the email |  [optional] |
|**fromName** | **String** | The full name of the sender |  [optional] |
|**fromEmail** | **String** | The email of the sender |  [optional] |
|**replyTo** | **String** | The email to which replies should be sent |  [optional] |
|**contentType** | [**ContentTypeEnum**](#ContentTypeEnum) | The content type of the email body |  [optional] |
|**recipients** | **List&lt;String&gt;** | An array of email addresses to deliver this message |  [optional] |
|**content** | **String** | The HTML or plain text content of the email |  [optional] |
|**preheader** | **String** | The email preheader |  [optional] |
|**customHeaders** | **Object** | An object of custom headers to add to the email |  [optional] |
|**deliveryAt** | **Integer** | The 10-digit unix timestamp of the date/time at which this email should be delivered |  [optional] |
|**attachments** | **List&lt;String&gt;** | An array of URLs of files to attach to the email |  [optional] |
|**signDkim** | **Boolean** | A boolean value on if a DKIM signature should be included in this message |  [optional] |
|**trackClick** | **Boolean** | A boolean value on if email clicks should be tracked |  [optional] |
|**trackOpen** | **Boolean** | A boolean value on if the email opens should be tracked |  [optional] |
|**isTransactional** | **Boolean** | A boolean value to flag this email as a transactional email |  [optional] |



## Enum: ContentTypeEnum

| Name | Value |
|---- | -----|
| TEXT | &quot;text&quot; |
| HTML | &quot;html&quot; |



