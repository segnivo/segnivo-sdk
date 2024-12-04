# segnivo-typescript-sdk<a id="segnivo-typescript-sdk"></a>

**API Version**: 1.7

**Date**: 9th July, 2024

## 📄 Getting Started<a id="📄-getting-started"></a>

This API is based on the REST API architecture, allowing the user to easily manage their data with this resource-based approach.

Every API call is established on which specific request type (GET, POST, PUT, DELETE) will be used.

The API must not be abused and should be used within acceptable limits.

To start using this API, you will need not create or access an existing Segnivo account to obtain your API key ([retrievable from your account settings](https://messaging.segnivo.com/account/api)).

- You must use a valid API Key to send requests to the API endpoints.
    
- The API only responds to HTTPS-secured communications. Any requests sent via HTTP return an HTTP 301 redirect to the corresponding HTTPS resources.
    
- The API returns request responses in JSON format. When an API request returns an error, it is sent in the JSON response as an error key or with details in the message key.
    

### 🔖 **Need some help?**<a id="🔖-need-some-help"></a>

In case you have questions or need clarity with interacting with some endpoints feel free to create a support ticket on your account or you can send an email ([<i>developers@segnivo.com</i>](https://mailto:developers@segnivo.com)) directly and we would be happy to help.

---

## Authentication<a id="authentication"></a>

As noted earlier, this API uses API keys for authentication. You can generate a Segnivo API key in the [API](https://messaging.segnivo.com/account/api) section of your account settings.

You must include an API key in each request to this API with the `X-API-KEY` request header.

### Authentication error response<a id="authentication-error-response"></a>

If an API key is missing, malformed, or invalid, you will receive an HTTP 401 Unauthorized response code.

## Rate and usage limits<a id="rate-and-usage-limits"></a>

API access rate limits apply on a per-API endpoint basis in unit time. The limit is 10k requests per hour for most endpoints and 1m requests per hour for transactional/relay email-sending endpoints. Also, depending on your plan, you may have usage limits. If you exceed either limit, your request will return an HTTP 429 Too Many Requests status code or HTTP 403 if sending credits have been exhausted.

### 503 response<a id="503-response"></a>

An HTTP `503` response from our servers may indicate there is an unexpected spike in API access traffic, while this rarely happens, we ensure the server is usually operational within the next two to five minutes. If the outage persists or you receive any other form of an HTTP `5XX` error, contact support ([<i>developers@segnivo.com</i>](https://mailto:developers@segnivo.com)).

### Request headers<a id="request-headers"></a>

To make a successful request, some or all of the following headers must be passed with the request.

| **Header** | **Description** |
| --- | --- |
| Content-Type | Required and should be `application/json` in most cases. |
| Accept | Required and should be `application/json` in most cases |
| Content-Length | Required for `POST`, `PATCH`, and `PUT` requests containing a request body. The value must be the number of bytes rather than the number of characters in the request body. |
| X-API-KEY | Required. Specifies the API key used for authorization. |

##### 🔖 Note with example requests and code snippets<a id="🔖-note-with-example-requests-and-code-snippets"></a>

If/when you use the code snippets used as example requests, remember to calculate and add the `Content-Length` header. Some request libraries, frameworks, and tools automatically add this header for you while a few do not. Kindly check and ensure yours does or add it yourself.

[![npm](https://img.shields.io/badge/npm-v1.7.0-blue)](https://www.npmjs.com/package/segnivo-typescript-sdk/v/1.7.0)

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`segnivo.emailAddressVerification.emailPost`](#segnivoemailaddressverificationemailpost)
  * [`segnivo.emailCampaigns.messagesGet`](#segnivoemailcampaignsmessagesget)
  * [`segnivo.emailCampaigns.messagesPost`](#segnivoemailcampaignsmessagespost)
  * [`segnivo.emailCampaigns.messagesUidDeletePost`](#segnivoemailcampaignsmessagesuiddeletepost)
  * [`segnivo.emailCampaigns.messagesUidGet`](#segnivoemailcampaignsmessagesuidget)
  * [`segnivo.emailCampaigns.messagesUidPatch`](#segnivoemailcampaignsmessagesuidpatch)
  * [`segnivo.emailCampaigns.messagesUidPausePost`](#segnivoemailcampaignsmessagesuidpausepost)
  * [`segnivo.emailCampaigns.messagesUidResumePost`](#segnivoemailcampaignsmessagesuidresumepost)
  * [`segnivo.mailingLists.listsGet`](#segnivomailinglistslistsget)
  * [`segnivo.mailingLists.listsPost`](#segnivomailinglistslistspost)
  * [`segnivo.mailingLists.listsUidAddFieldPost`](#segnivomailinglistslistsuidaddfieldpost)
  * [`segnivo.mailingLists.listsUidDeletePost`](#segnivomailinglistslistsuiddeletepost)
  * [`segnivo.mailingLists.listsUidGet`](#segnivomailinglistslistsuidget)
  * [`segnivo.mailingLists.listsUidPatch`](#segnivomailinglistslistsuidpatch)
  * [`segnivo.relay.relayEmailsIdGet`](#segnivorelayrelayemailsidget)
  * [`segnivo.relay.relayRawPost`](#segnivorelayrelayrawpost)
  * [`segnivo.relayTransactionalEmails.relaySendPost`](#segnivorelaytransactionalemailsrelaysendpost)
  * [`segnivo.subscribersContacts.contactsGet`](#segnivosubscriberscontactscontactsget)
  * [`segnivo.subscribersContacts.contactsPost`](#segnivosubscriberscontactscontactspost)
  * [`segnivo.subscribersContacts.contactsUidAddTagPost`](#segnivosubscriberscontactscontactsuidaddtagpost)
  * [`segnivo.subscribersContacts.contactsUidDeletePost`](#segnivosubscriberscontactscontactsuiddeletepost)
  * [`segnivo.subscribersContacts.contactsUidGet`](#segnivosubscriberscontactscontactsuidget)
  * [`segnivo.subscribersContacts.contactsUidPatch`](#segnivosubscriberscontactscontactsuidpatch)
  * [`segnivo.subscribersContacts.contactsUidSubscribePatch`](#segnivosubscriberscontactscontactsuidsubscribepatch)
  * [`segnivo.subscribersContacts.contactsUidUnsubscribePatch`](#segnivosubscriberscontactscontactsuidunsubscribepatch)

<!-- tocstop -->

## Installation<a id="installation"></a>

<table>
<tr>
<th width="292px"><code>npm</code></th>
<th width="293px"><code>pnpm</code></th>
<th width="292px"><code>yarn</code></th>
</tr>
<tr>
<td>

```bash
npm i segnivo-typescript-sdk
```

</td>
<td>

```bash
pnpm i segnivo-typescript-sdk
```

</td>
<td>

```bash
yarn add segnivo-typescript-sdk
```

</td>
</tr>
</table>

## Getting Started<a id="getting-started"></a>

```typescript
import { Segnivo } from "segnivo-typescript-sdk";

const segnivo = new Segnivo({
  // Defining the base path is optional and defaults to https://api.segnivo.com/v1
  // basePath: "https://api.segnivo.com/v1",
  apiKey: "API_KEY",
});

const emailPostResponse = await segnivo.emailAddressVerification.emailPost();

console.log(emailPostResponse);
```

## Reference<a id="reference"></a>


### `segnivo.emailAddressVerification.emailPost`<a id="segnivoemailaddressverificationemailpost"></a>

The `/validate-email` endpoint allows you to pass the email addresses you wish to verify and get a response on each of their status.

The following data should be passed in JSON format in the request body

- **emails** - An array/collection containing a minimum of one and maximum of fifty email addresses for verification/validation.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const emailPostResponse = await segnivo.emailAddressVerification.emailPost();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/validate-email` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `segnivo.emailCampaigns.messagesGet`<a id="segnivoemailcampaignsmessagesget"></a>

Returns a collection of all your campaigns

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const messagesGetResponse = await segnivo.emailCampaigns.messagesGet({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### accept: `string`<a id="accept-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messages` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `segnivo.emailCampaigns.messagesPost`<a id="segnivoemailcampaignsmessagespost"></a>

Creat an email campaign for processing

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const messagesPostResponse = await segnivo.emailCampaigns.messagesPost({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ContentType: `string`<a id="contenttype-string"></a>

##### accept: `string`<a id="accept-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messages` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `segnivo.emailCampaigns.messagesUidDeletePost`<a id="segnivoemailcampaignsmessagesuiddeletepost"></a>

Delete the specified campaign

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const messagesUidDeletePostResponse =
  await segnivo.emailCampaigns.messagesUidDeletePost({
    uid: "uid_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### uid: `string`<a id="uid-string"></a>

(Required) The uid of the campaign to delete

##### accept: `string`<a id="accept-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messages/{uid}/delete` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `segnivo.emailCampaigns.messagesUidGet`<a id="segnivoemailcampaignsmessagesuidget"></a>

Returns the specified campaign details

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const messagesUidGetResponse = await segnivo.emailCampaigns.messagesUidGet({
  uid: "uid_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### uid: `string`<a id="uid-string"></a>

(Required) The uid of the campaign to fetch

##### accept: `string`<a id="accept-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messages/{uid}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `segnivo.emailCampaigns.messagesUidPatch`<a id="segnivoemailcampaignsmessagesuidpatch"></a>

Updates a previously added campaign. Only Active and Paused campaigns can be updated.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const messagesUidPatchResponse = await segnivo.emailCampaigns.messagesUidPatch({
  uid: "uid_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### uid: `string`<a id="uid-string"></a>

(Required) The uid of the campaign to update

##### ContentType: `string`<a id="contenttype-string"></a>

##### accept: `string`<a id="accept-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messages/{uid}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `segnivo.emailCampaigns.messagesUidPausePost`<a id="segnivoemailcampaignsmessagesuidpausepost"></a>

Pause the specified campaign

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const messagesUidPausePostResponse =
  await segnivo.emailCampaigns.messagesUidPausePost({
    uid: "uid_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### uid: `string`<a id="uid-string"></a>

(Required) The uid of the campaign to pause

##### accept: `string`<a id="accept-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messages/{uid}/pause` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `segnivo.emailCampaigns.messagesUidResumePost`<a id="segnivoemailcampaignsmessagesuidresumepost"></a>

Resume delivery of the specified campaign

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const messagesUidResumePostResponse =
  await segnivo.emailCampaigns.messagesUidResumePost({
    uid: "uid_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### uid: `string`<a id="uid-string"></a>

(Required) The uid of the campaign to resume

##### accept: `string`<a id="accept-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messages/{uid}/resume` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `segnivo.mailingLists.listsGet`<a id="segnivomailinglistslistsget"></a>

Returns all your existing lists

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listsGetResponse = await segnivo.mailingLists.listsGet({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### accept: `string`<a id="accept-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `segnivo.mailingLists.listsPost`<a id="segnivomailinglistslistspost"></a>

Create a new mailing list

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listsPostResponse = await segnivo.mailingLists.listsPost({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ContentType: `string`<a id="contenttype-string"></a>

##### accept: `string`<a id="accept-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `segnivo.mailingLists.listsUidAddFieldPost`<a id="segnivomailinglistslistsuidaddfieldpost"></a>

Add a field to an existing list

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listsUidAddFieldPostResponse =
  await segnivo.mailingLists.listsUidAddFieldPost({
    uid: "uid_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### uid: `string`<a id="uid-string"></a>

(Required) The uid of the list to add a field to.

##### ContentType: `string`<a id="contenttype-string"></a>

##### accept: `string`<a id="accept-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/{uid}/add-field` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `segnivo.mailingLists.listsUidDeletePost`<a id="segnivomailinglistslistsuiddeletepost"></a>

Delete an existing list

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listsUidDeletePostResponse =
  await segnivo.mailingLists.listsUidDeletePost({
    uid: "uid_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### uid: `string`<a id="uid-string"></a>

(Required) The uid of the list to delete.

##### accept: `string`<a id="accept-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/{uid}/delete` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `segnivo.mailingLists.listsUidGet`<a id="segnivomailinglistslistsuidget"></a>

Returns detailed information about a specified list

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listsUidGetResponse = await segnivo.mailingLists.listsUidGet({
  uid: "uid_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### uid: `string`<a id="uid-string"></a>

(Required) The uid of the mailing list to fetch.

##### accept: `string`<a id="accept-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/{uid}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `segnivo.mailingLists.listsUidPatch`<a id="segnivomailinglistslistsuidpatch"></a>

Update an existing mailing list

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listsUidPatchResponse = await segnivo.mailingLists.listsUidPatch({
  uid: "uid_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### uid: `string`<a id="uid-string"></a>

(Required) The uid of the list to update.

##### ContentType: `string`<a id="contenttype-string"></a>

##### accept: `string`<a id="accept-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/{uid}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `segnivo.relay.relayEmailsIdGet`<a id="segnivorelayrelayemailsidget"></a>

The `/emails` endpoint lets you fetch one or more marketing/transactional email(s) from your `Segnivo Messaging` account and it accepts two **optional** parameters.

- The `id` string of the email to fetch provided as a path variable
    
- The `limit` on the number of records to fetch (if email id is not provided) as a query string parameter. This value defaults to 100 if not provided.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const relayEmailsIdGetResponse = await segnivo.relay.relayEmailsIdGet({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

The ID of the email to fetch

##### limit: `number`<a id="limit-number"></a>

The number of records to fetch

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/relay/emails/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `segnivo.relay.relayRawPost`<a id="segnivorelayrelayrawpost"></a>

The `/raw` endpoint lets you send marketing and transactional emails from your `Segnivo Messaging` account by passing a raw RFC822 message to the `message` attribute in the request body.

The following parameters should be passed as a form data to the endpoint

- **message** - A raw RFC822 message
    
- **sign_dkim** (optional, defaults to `true`) - A boolean value on if a DKIM signature should be included in this message
    
- **track_click** (optional, defaults to `true`) - A boolean value on if email clicks should be tracked. If `true` links in the email will be rewritten to enable tracking
    
- **track_open** (optional, defaults to `true`) - A boolean value on if the email opens should be tracked
    
- **is_transactional** (optional, defaults to `false`) - A boolean value to flag this email as a transactional email

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const relayRawPostResponse = await segnivo.relay.relayRawPost({
  message: "A raw RFC822 message string",
  is_transactional: true,
  track_click: false,
  track_open: false,
  sign_dkim: true,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### message: `string`<a id="message-string"></a>

##### isTransactional: `boolean`<a id="istransactional-boolean"></a>

##### trackClick: `boolean`<a id="trackclick-boolean"></a>

##### trackOpen: `boolean`<a id="trackopen-boolean"></a>

##### signDkim: `boolean`<a id="signdkim-boolean"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/relay/raw` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `segnivo.relayTransactionalEmails.relaySendPost`<a id="segnivorelaytransactionalemailsrelaysendpost"></a>

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
    

#### 🔖 Important<a id="🔖-important"></a>

**`is_transactional`** must only be set to `true` for transactional emails. Setting this to `true` for marketing emails will result in your API access being revoked and your account disabled.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const relaySendPostResponse =
  await segnivo.relayTransactionalEmails.relaySendPost();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/relay/send` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `segnivo.subscribersContacts.contactsGet`<a id="segnivosubscriberscontactscontactsget"></a>

Returns a list of contacts/subscribers on your account

This endpoint accepts three **optional** query parameters

- `email` — An email address to search for. If set, the endpoint only returns subscribers that have an identical email address.
    
- `per_page` — A limit on the number of records to return.
    
- `page` — The parameter serves as an offset on the number of records returned.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const contactsGetResponse = await segnivo.subscribersContacts.contactsGet({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### accept: `string`<a id="accept-string"></a>

##### email: `string`<a id="email-string"></a>

An email address to search for.

##### perPage: `number`<a id="perpage-number"></a>

How many items should be returned ahead.

##### page: `number`<a id="page-number"></a>

The offset for the items to be returned, helps in pagination.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/contacts` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `segnivo.subscribersContacts.contactsPost`<a id="segnivosubscriberscontactscontactspost"></a>

Add a new contact/subscriber to your mailing list

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const contactsPostResponse = await segnivo.subscribersContacts.contactsPost({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ContentType: `string`<a id="contenttype-string"></a>

##### accept: `string`<a id="accept-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/contacts` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `segnivo.subscribersContacts.contactsUidAddTagPost`<a id="segnivosubscriberscontactscontactsuidaddtagpost"></a>

Add tags to an existing contact

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const contactsUidAddTagPostResponse =
  await segnivo.subscribersContacts.contactsUidAddTagPost({
    uid: "uid_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### uid: `string`<a id="uid-string"></a>

(Required) The uid of the contact to update with the tags.

##### ContentType: `string`<a id="contenttype-string"></a>

##### accept: `string`<a id="accept-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/contacts/{uid}/add-tag` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `segnivo.subscribersContacts.contactsUidDeletePost`<a id="segnivosubscriberscontactscontactsuiddeletepost"></a>

Delete an existing contact

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const contactsUidDeletePostResponse =
  await segnivo.subscribersContacts.contactsUidDeletePost({
    uid: "uid_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### uid: `string`<a id="uid-string"></a>

(Required) The uid of the contact to delete.

##### accept: `string`<a id="accept-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/contacts/{uid}/delete` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `segnivo.subscribersContacts.contactsUidGet`<a id="segnivosubscriberscontactscontactsuidget"></a>

Fetch detailed contact information for specified a contact

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const contactsUidGetResponse = await segnivo.subscribersContacts.contactsUidGet(
  {
    uid: "uid_example",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### uid: `string`<a id="uid-string"></a>

(Required) The uid of the contact to get.

##### accept: `string`<a id="accept-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/contacts/{uid}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `segnivo.subscribersContacts.contactsUidPatch`<a id="segnivosubscriberscontactscontactsuidpatch"></a>

Update the specified subscriber/contact

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const contactsUidPatchResponse =
  await segnivo.subscribersContacts.contactsUidPatch({
    uid: "uid_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### uid: `string`<a id="uid-string"></a>

(Required) The uid of the contact to update.

##### ContentType: `string`<a id="contenttype-string"></a>

##### accept: `string`<a id="accept-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/contacts/{uid}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `segnivo.subscribersContacts.contactsUidSubscribePatch`<a id="segnivosubscriberscontactscontactsuidsubscribepatch"></a>

Subscribe a contact to a list

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const contactsUidSubscribePatchResponse =
  await segnivo.subscribersContacts.contactsUidSubscribePatch({
    uid: "uid_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### uid: `string`<a id="uid-string"></a>

(Required) The uid of the contact to subscribe.

##### accept: `string`<a id="accept-string"></a>

##### listUid: `string`<a id="listuid-string"></a>

(Required) The uid of the mail list to subscribe the contact.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/contacts/{uid}/subscribe` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `segnivo.subscribersContacts.contactsUidUnsubscribePatch`<a id="segnivosubscriberscontactscontactsuidunsubscribepatch"></a>

Unsubscribe a contact from a list

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const contactsUidUnsubscribePatchResponse =
  await segnivo.subscribersContacts.contactsUidUnsubscribePatch({
    uid: "uid_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### uid: `string`<a id="uid-string"></a>

(Required) The uid of the contact to unsubscribe.

##### accept: `string`<a id="accept-string"></a>

##### listUid: `string`<a id="listuid-string"></a>

(Required) The uid of the mail list to unsubscribe the contact.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/contacts/{uid}/unsubscribe` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
