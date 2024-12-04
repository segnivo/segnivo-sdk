# segnivo-python-sdk

**API Version**: 1.7

**Date**: 9th July, 2024

## 📄 Getting Started

This API is based on the REST API architecture, allowing the user to easily manage their data with this resource-based approach.

Every API call is established on which specific request type (GET, POST, PUT, DELETE) will be used.

The API must not be abused and should be used within acceptable limits.

To start using this API, you will need not create or access an existing Segnivo account to obtain your API key ([retrievable from your account settings](https://messaging.segnivo.com/account/api)).

- You must use a valid API Key to send requests to the API endpoints.
    
- The API only responds to HTTPS-secured communications. Any requests sent via HTTP return an HTTP 301 redirect to the corresponding HTTPS resources.
    
- The API returns request responses in JSON format. When an API request returns an error, it is sent in the JSON response as an error key or with details in the message key.
    

### 🔖 **Need some help?**

In case you have questions or need clarity with interacting with some endpoints feel free to create a support ticket on your account or you can send an email ([<i>developers@segnivo.com</i>](https://mailto:developers@segnivo.com)) directly and we would be happy to help.

---

## Authentication

As noted earlier, this API uses API keys for authentication. You can generate a Segnivo API key in the [API](https://messaging.segnivo.com/account/api) section of your account settings.

You must include an API key in each request to this API with the `X-API-KEY` request header.

### Authentication error response

If an API key is missing, malformed, or invalid, you will receive an HTTP 401 Unauthorized response code.

## Rate and usage limits

API access rate limits apply on a per-API endpoint basis in unit time. The limit is 10k requests per hour for most endpoints and 1m requests per hour for transactional/relay email-sending endpoints. Also, depending on your plan, you may have usage limits. If you exceed either limit, your request will return an HTTP 429 Too Many Requests status code or HTTP 403 if sending credits have been exhausted.

### 503 response

An HTTP `503` response from our servers may indicate there is an unexpected spike in API access traffic, while this rarely happens, we ensure the server is usually operational within the next two to five minutes. If the outage persists or you receive any other form of an HTTP `5XX` error, contact support ([<i>developers@segnivo.com</i>](https://mailto:developers@segnivo.com)).

### Request headers

To make a successful request, some or all of the following headers must be passed with the request.

| **Header** | **Description** |
| --- | --- |
| Content-Type | Required and should be `application/json` in most cases. |
| Accept | Required and should be `application/json` in most cases |
| Content-Length | Required for `POST`, `PATCH`, and `PUT` requests containing a request body. The value must be the number of bytes rather than the number of characters in the request body. |
| X-API-KEY | Required. Specifies the API key used for authorization. |

##### 🔖 Note with example requests and code snippets

If/when you use the code snippets used as example requests, remember to calculate and add the `Content-Length` header. Some request libraries, frameworks, and tools automatically add this header for you while a few do not. Kindly check and ensure yours does or add it yourself.


[![PyPI](https://img.shields.io/badge/PyPI-v1.7.1-blue)](https://pypi.org/project/segnivo-python-sdk/1.7.1)
[![README.md](https://img.shields.io/badge/README-Click%20Here-green)](https://github.com/munchads/segnivo-sdk/tree/main/python#readme)

## Table of Contents

<!-- toc -->

## Requirements

Python >=3.7

## Installation

```sh
pip install segnivo-python-sdk==1.7.1
```

## Getting Started

```python
from pprint import pprint
from segnivo import Segnivo, ApiException

segnivo = Segnivo(

        api_key_auth = 'YOUR_API_KEY',
)

try:
    # Email Address Verification Validation
    email_post_response = segnivo.email_address_verification.email_post(
    )
except ApiException as e:
    print("Exception when calling EmailAddressVerificationApi.email_post: %s\n" % e)
    pprint(e.body)
    pprint(e.headers)
    pprint(e.status)
    pprint(e.reason)
    pprint(e.round_trip_time)
```

## Async

`async` support is available by prepending `a` to any method.

```python

import asyncio
from pprint import pprint
from segnivo import Segnivo, ApiException

segnivo = Segnivo(

        api_key_auth = 'YOUR_API_KEY',
)

async def main():
    try:
        # Email Address Verification Validation
        email_post_response = await segnivo.email_address_verification.aemail_post(
        )
    except ApiException as e:
        print("Exception when calling EmailAddressVerificationApi.email_post: %s\n" % e)
        pprint(e.body)
        pprint(e.headers)
        pprint(e.status)
        pprint(e.reason)
        pprint(e.round_trip_time)

asyncio.run(main())
```

## Raw HTTP Response

To access raw HTTP response values, use the `.raw` namespace.

```python
from pprint import pprint
from segnivo import Segnivo, ApiException

segnivo = Segnivo(

        api_key_auth = 'YOUR_API_KEY',
)

try:
    # Email Address Verification Validation
    email_post_response = segnivo.email_address_verification.raw.email_post(
    )
    pprint(email_post_response.headers)
    pprint(email_post_response.status)
    pprint(email_post_response.round_trip_time)
except ApiException as e:
    print("Exception when calling EmailAddressVerificationApi.email_post: %s\n" % e)
    pprint(e.body)
    pprint(e.headers)
    pprint(e.status)
    pprint(e.reason)
    pprint(e.round_trip_time)
```


## Reference
### `segnivo.email_address_verification.email_post`

The `/validate-email` endpoint allows you to pass the email addresses you wish to verify and get a response on each of their status.

The following data should be passed in JSON format in the request body

- **emails** - An array/collection containing a minimum of one and maximum of fifty email addresses for verification/validation.

#### 🛠️ Usage

```python
email_post_response = segnivo.email_address_verification.email_post(
)
```

#### ⚙️ Request Body

`Dict[str, Union[bool, date, datetime, dict, float, int, list, str, None]]`
#### 🌐 Endpoint

`/validate-email` `post`

[🔙 **Back to Table of Contents**](#table-of-contents)

---

### `segnivo.email_campaigns.messages_get`

Returns a collection of all your campaigns

#### 🛠️ Usage

```python
messages_get_response = segnivo.email_campaigns.messages_get(
    accept="application/json",
)
```

#### ⚙️ Parameters

##### accept: `str`

#### 🌐 Endpoint

`/messages` `get`

[🔙 **Back to Table of Contents**](#table-of-contents)

---

### `segnivo.email_campaigns.messages_post`

Creat an email campaign for processing

#### 🛠️ Usage

```python
messages_post_response = segnivo.email_campaigns.messages_post(
    content_type="application/json",
    accept="application/json",
)
```

#### ⚙️ Parameters

##### content_type: `str`

##### accept: `str`

#### ⚙️ Request Body

`Dict[str, Union[bool, date, datetime, dict, float, int, list, str, None]]`
#### 🌐 Endpoint

`/messages` `post`

[🔙 **Back to Table of Contents**](#table-of-contents)

---

### `segnivo.email_campaigns.messages_uid_delete_post`

Delete the specified campaign

#### 🛠️ Usage

```python
messages_uid_delete_post_response = segnivo.email_campaigns.messages_uid_delete_post(
    uid="<string>",
    accept="application/json",
)
```

#### ⚙️ Parameters

##### uid: `str`

(Required) The uid of the campaign to delete

##### accept: `str`

#### ⚙️ Request Body

`Dict[str, Union[bool, date, datetime, dict, float, int, list, str, None]]`
#### 🌐 Endpoint

`/messages/{uid}/delete` `post`

[🔙 **Back to Table of Contents**](#table-of-contents)

---

### `segnivo.email_campaigns.messages_uid_get`

Returns the specified campaign details

#### 🛠️ Usage

```python
messages_uid_get_response = segnivo.email_campaigns.messages_uid_get(
    uid="<string>",
    accept="application/json",
)
```

#### ⚙️ Parameters

##### uid: `str`

(Required) The uid of the campaign to fetch

##### accept: `str`

#### 🌐 Endpoint

`/messages/{uid}` `get`

[🔙 **Back to Table of Contents**](#table-of-contents)

---

### `segnivo.email_campaigns.messages_uid_patch`

Updates a previously added campaign. Only Active and Paused campaigns can be updated.

#### 🛠️ Usage

```python
messages_uid_patch_response = segnivo.email_campaigns.messages_uid_patch(
    uid="<string>",
    content_type="application/json",
    accept="application/json",
)
```

#### ⚙️ Parameters

##### uid: `str`

(Required) The uid of the campaign to update

##### content_type: `str`

##### accept: `str`

#### ⚙️ Request Body

`Dict[str, Union[bool, date, datetime, dict, float, int, list, str, None]]`
#### 🌐 Endpoint

`/messages/{uid}` `patch`

[🔙 **Back to Table of Contents**](#table-of-contents)

---

### `segnivo.email_campaigns.messages_uid_pause_post`

Pause the specified campaign

#### 🛠️ Usage

```python
messages_uid_pause_post_response = segnivo.email_campaigns.messages_uid_pause_post(
    uid="<string>",
    accept="application/json",
)
```

#### ⚙️ Parameters

##### uid: `str`

(Required) The uid of the campaign to pause

##### accept: `str`

#### ⚙️ Request Body

`Dict[str, Union[bool, date, datetime, dict, float, int, list, str, None]]`
#### 🌐 Endpoint

`/messages/{uid}/pause` `post`

[🔙 **Back to Table of Contents**](#table-of-contents)

---

### `segnivo.email_campaigns.messages_uid_resume_post`

Resume delivery of the specified campaign

#### 🛠️ Usage

```python
messages_uid_resume_post_response = segnivo.email_campaigns.messages_uid_resume_post(
    uid="<string>",
    accept="application/json",
)
```

#### ⚙️ Parameters

##### uid: `str`

(Required) The uid of the campaign to resume

##### accept: `str`

#### ⚙️ Request Body

`Dict[str, Union[bool, date, datetime, dict, float, int, list, str, None]]`
#### 🌐 Endpoint

`/messages/{uid}/resume` `post`

[🔙 **Back to Table of Contents**](#table-of-contents)

---

### `segnivo.mailing_lists.lists_get`

Returns all your existing lists

#### 🛠️ Usage

```python
lists_get_response = segnivo.mailing_lists.lists_get(
    accept="application/json",
)
```

#### ⚙️ Parameters

##### accept: `str`

#### 🌐 Endpoint

`/lists` `get`

[🔙 **Back to Table of Contents**](#table-of-contents)

---

### `segnivo.mailing_lists.lists_post`

Create a new mailing list

#### 🛠️ Usage

```python
lists_post_response = segnivo.mailing_lists.lists_post(
    content_type="application/json",
    accept="application/json",
)
```

#### ⚙️ Parameters

##### content_type: `str`

##### accept: `str`

#### ⚙️ Request Body

`Dict[str, Union[bool, date, datetime, dict, float, int, list, str, None]]`
#### 🌐 Endpoint

`/lists` `post`

[🔙 **Back to Table of Contents**](#table-of-contents)

---

### `segnivo.mailing_lists.lists_uid_add_field_post`

Add a field to an existing list

#### 🛠️ Usage

```python
lists_uid_add_field_post_response = segnivo.mailing_lists.lists_uid_add_field_post(
    uid="<string>",
    content_type="application/json",
    accept="application/json",
)
```

#### ⚙️ Parameters

##### uid: `str`

(Required) The uid of the list to add a field to.

##### content_type: `str`

##### accept: `str`

#### ⚙️ Request Body

`Dict[str, Union[bool, date, datetime, dict, float, int, list, str, None]]`
#### 🌐 Endpoint

`/lists/{uid}/add-field` `post`

[🔙 **Back to Table of Contents**](#table-of-contents)

---

### `segnivo.mailing_lists.lists_uid_delete_post`

Delete an existing list

#### 🛠️ Usage

```python
lists_uid_delete_post_response = segnivo.mailing_lists.lists_uid_delete_post(
    uid="<string>",
    accept="application/json",
)
```

#### ⚙️ Parameters

##### uid: `str`

(Required) The uid of the list to delete.

##### accept: `str`

#### ⚙️ Request Body

`Dict[str, Union[bool, date, datetime, dict, float, int, list, str, None]]`
#### 🌐 Endpoint

`/lists/{uid}/delete` `post`

[🔙 **Back to Table of Contents**](#table-of-contents)

---

### `segnivo.mailing_lists.lists_uid_get`

Returns detailed information about a specified list

#### 🛠️ Usage

```python
lists_uid_get_response = segnivo.mailing_lists.lists_uid_get(
    uid="<string>",
    accept="application/json",
)
```

#### ⚙️ Parameters

##### uid: `str`

(Required) The uid of the mailing list to fetch.

##### accept: `str`

#### 🌐 Endpoint

`/lists/{uid}` `get`

[🔙 **Back to Table of Contents**](#table-of-contents)

---

### `segnivo.mailing_lists.lists_uid_patch`

Update an existing mailing list

#### 🛠️ Usage

```python
lists_uid_patch_response = segnivo.mailing_lists.lists_uid_patch(
    uid="<string>",
    content_type="application/json",
    accept="application/json",
)
```

#### ⚙️ Parameters

##### uid: `str`

(Required) The uid of the list to update.

##### content_type: `str`

##### accept: `str`

#### ⚙️ Request Body

`Dict[str, Union[bool, date, datetime, dict, float, int, list, str, None]]`
#### 🌐 Endpoint

`/lists/{uid}` `patch`

[🔙 **Back to Table of Contents**](#table-of-contents)

---

### `segnivo.relay.relay_emails_id_get`

The `/emails` endpoint lets you fetch one or more marketing/transactional email(s) from your `Segnivo Messaging` account and it accepts two **optional** parameters.

- The `id` string of the email to fetch provided as a path variable
    
- The `limit` on the number of records to fetch (if email id is not provided) as a query string parameter. This value defaults to 100 if not provided.

#### 🛠️ Usage

```python
relay_emails_id_get_response = segnivo.relay.relay_emails_id_get(
    id="<string>",
    limit=100,
)
```

#### ⚙️ Parameters

##### id: `str`

The ID of the email to fetch

##### limit: `int`

The number of records to fetch

#### 🌐 Endpoint

`/relay/emails/{id}` `get`

[🔙 **Back to Table of Contents**](#table-of-contents)

---

### `segnivo.relay.relay_raw_post`

The `/raw` endpoint lets you send marketing and transactional emails from your `Segnivo Messaging` account by passing a raw RFC822 message to the `message` attribute in the request body.

The following parameters should be passed as a form data to the endpoint

- **message** - A raw RFC822 message
    
- **sign_dkim** (optional, defaults to `true`) - A boolean value on if a DKIM signature should be included in this message
    
- **track_click** (optional, defaults to `true`) - A boolean value on if email clicks should be tracked. If `true` links in the email will be rewritten to enable tracking
    
- **track_open** (optional, defaults to `true`) - A boolean value on if the email opens should be tracked
    
- **is_transactional** (optional, defaults to `false`) - A boolean value to flag this email as a transactional email

#### 🛠️ Usage

```python
relay_raw_post_response = segnivo.relay.relay_raw_post(
    message="A raw RFC822 message string",
    is_transactional=True,
    track_click=False,
    track_open=False,
    sign_dkim=True,
)
```

#### ⚙️ Parameters

##### message: `str`

##### is_transactional: `bool`

##### track_click: `bool`

##### track_open: `bool`

##### sign_dkim: `bool`

#### ⚙️ Request Body

[`Any`](./segnivo/type/typing_any.py)
#### 🌐 Endpoint

`/relay/raw` `post`

[🔙 **Back to Table of Contents**](#table-of-contents)

---

### `segnivo.relay_transactional_emails.relay_send_post`

The `/send` endpoint lets you send marketing and transactional emails from your `Segnivo Messaging` account.

The following data should be passed in JSON format in the request body

- **subject** - The subject of the email
    
- **from_name** (optional) - The full name of the sender
    
- **from_email** - The email of the sender
    
- **reply_to** (optional) - The email to which replies should be sent
    
- **content_type** (optional, defaults to `html`) - The content type of the email body. Accepts either `text` or `html`
    
- **recipients** - An array/collection of email addresses to deliver this message, max. 50
    
- **content** - The HTML or plain text content of the email
    
- **preheader** (optional) - The email preheader
    
- **custom_headers** (optional) - An object of custom headers to add to the email
    
- **delivery_at** (optional) - The 10-digit unix timestamp of the date/time at which this email should be delivered
    
- **attachments** (optional) - An array/collection of the URLs of files to attach to the email
    
- **sign_dkim** (optional, defaults to `true`) - A boolean value on if a DKIM signature should be included in this message
    
- **track_click** (optional, defaults to `true`) - A boolean value on if email clicks should be tracked. If `true` links in the email will be rewritten to enable tracking
    
- **track_open** (optional, defaults to `true`) - A boolean value on if the email opens should be tracked
    
- **is_transactional** (optional, defaults to `false`) - A boolean value to flag this email as a transactional email
    

#### 🔖 Important

**`is_transactional`** must only be set to `true` for transactional emails. Setting this to `true` for marketing emails will result in your API access being revoked and your account disabled.

#### 🛠️ Usage

```python
relay_send_post_response = segnivo.relay_transactional_emails.relay_send_post(
)
```

#### ⚙️ Request Body

`Dict[str, Union[bool, date, datetime, dict, float, int, list, str, None]]`
#### 🌐 Endpoint

`/relay/send` `post`

[🔙 **Back to Table of Contents**](#table-of-contents)

---

### `segnivo.subscribers_contacts.contacts_get`

Returns a list of contacts/subscribers on your account

This endpoint accepts three **optional** query parameters

- `email` — An email address to search for. If set, the endpoint only returns subscribers that have an identical email address.
    
- `per_page` — A limit on the number of records to return.
    
- `page` — The parameter serves as an offset on the number of records returned.

#### 🛠️ Usage

```python
contacts_get_response = segnivo.subscribers_contacts.contacts_get(
    accept="application/json",
    email="<string>",
    per_page=20,
    page=1,
)
```

#### ⚙️ Parameters

##### accept: `str`

##### email: `str`

An email address to search for.

##### per_page: `int`

How many items should be returned ahead.

##### page: `int`

The offset for the items to be returned, helps in pagination.

#### 🌐 Endpoint

`/contacts` `get`

[🔙 **Back to Table of Contents**](#table-of-contents)

---

### `segnivo.subscribers_contacts.contacts_post`

Add a new contact/subscriber to your mailing list

#### 🛠️ Usage

```python
contacts_post_response = segnivo.subscribers_contacts.contacts_post(
    content_type="application/json",
    accept="application/json",
)
```

#### ⚙️ Parameters

##### content_type: `str`

##### accept: `str`

#### ⚙️ Request Body

`Dict[str, Union[bool, date, datetime, dict, float, int, list, str, None]]`
#### 🌐 Endpoint

`/contacts` `post`

[🔙 **Back to Table of Contents**](#table-of-contents)

---

### `segnivo.subscribers_contacts.contacts_uid_add_tag_post`

Add tags to an existing contact

#### 🛠️ Usage

```python
contacts_uid_add_tag_post_response = segnivo.subscribers_contacts.contacts_uid_add_tag_post(
    uid="<string>",
    content_type="application/json",
    accept="application/json",
)
```

#### ⚙️ Parameters

##### uid: `str`

(Required) The uid of the contact to update with the tags.

##### content_type: `str`

##### accept: `str`

#### ⚙️ Request Body

`Dict[str, Union[bool, date, datetime, dict, float, int, list, str, None]]`
#### 🌐 Endpoint

`/contacts/{uid}/add-tag` `post`

[🔙 **Back to Table of Contents**](#table-of-contents)

---

### `segnivo.subscribers_contacts.contacts_uid_delete_post`

Delete an existing contact

#### 🛠️ Usage

```python
contacts_uid_delete_post_response = segnivo.subscribers_contacts.contacts_uid_delete_post(
    uid="<string>",
    accept="application/json",
)
```

#### ⚙️ Parameters

##### uid: `str`

(Required) The uid of the contact to delete.

##### accept: `str`

#### ⚙️ Request Body

`Dict[str, Union[bool, date, datetime, dict, float, int, list, str, None]]`
#### 🌐 Endpoint

`/contacts/{uid}/delete` `post`

[🔙 **Back to Table of Contents**](#table-of-contents)

---

### `segnivo.subscribers_contacts.contacts_uid_get`

Fetch detailed contact information for specified a contact

#### 🛠️ Usage

```python
contacts_uid_get_response = segnivo.subscribers_contacts.contacts_uid_get(
    uid="<string>",
    accept="application/json",
)
```

#### ⚙️ Parameters

##### uid: `str`

(Required) The uid of the contact to get.

##### accept: `str`

#### 🌐 Endpoint

`/contacts/{uid}` `get`

[🔙 **Back to Table of Contents**](#table-of-contents)

---

### `segnivo.subscribers_contacts.contacts_uid_patch`

Update the specified subscriber/contact

#### 🛠️ Usage

```python
contacts_uid_patch_response = segnivo.subscribers_contacts.contacts_uid_patch(
    uid="<string>",
    content_type="application/json",
    accept="application/json",
)
```

#### ⚙️ Parameters

##### uid: `str`

(Required) The uid of the contact to update.

##### content_type: `str`

##### accept: `str`

#### ⚙️ Request Body

`Dict[str, Union[bool, date, datetime, dict, float, int, list, str, None]]`
#### 🌐 Endpoint

`/contacts/{uid}` `patch`

[🔙 **Back to Table of Contents**](#table-of-contents)

---

### `segnivo.subscribers_contacts.contacts_uid_subscribe_patch`

Subscribe a contact to a list

#### 🛠️ Usage

```python
contacts_uid_subscribe_patch_response = segnivo.subscribers_contacts.contacts_uid_subscribe_patch(
    uid="<string>",
    accept="application/json",
    list_uid="<string>",
)
```

#### ⚙️ Parameters

##### uid: `str`

(Required) The uid of the contact to subscribe.

##### accept: `str`

##### list_uid: `str`

(Required) The uid of the mail list to subscribe the contact.

#### ⚙️ Request Body

`Dict[str, Union[bool, date, datetime, dict, float, int, list, str, None]]`
#### 🌐 Endpoint

`/contacts/{uid}/subscribe` `patch`

[🔙 **Back to Table of Contents**](#table-of-contents)

---

### `segnivo.subscribers_contacts.contacts_uid_unsubscribe_patch`

Unsubscribe a contact from a list

#### 🛠️ Usage

```python
contacts_uid_unsubscribe_patch_response = segnivo.subscribers_contacts.contacts_uid_unsubscribe_patch(
    uid="<string>",
    accept="application/json",
    list_uid="<string>",
)
```

#### ⚙️ Parameters

##### uid: `str`

(Required) The uid of the contact to unsubscribe.

##### accept: `str`

##### list_uid: `str`

(Required) The uid of the mail list to unsubscribe the contact.

#### ⚙️ Request Body

`Dict[str, Union[bool, date, datetime, dict, float, int, list, str, None]]`
#### 🌐 Endpoint

`/contacts/{uid}/unsubscribe` `patch`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author
This Python package is automatically generated by [Konfig](https://konfigthis.com)
