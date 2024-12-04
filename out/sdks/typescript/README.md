# segnivo-typescript-sdk

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

[![npm](https://img.shields.io/badge/npm-v1.7.0-blue)](https://www.npmjs.com/package/segnivo-typescript-sdk/v/1.7.0)

## Table of Contents

<!-- toc -->

## Installation

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

## Getting Started

```typescript
import { Segnivo } from "segnivo-typescript-sdk"

const segnivo = new Segnivo({
    // Defining the base path is optional and defaults to https://api.segnivo.com/v1
    // basePath: "https://api.segnivo.com/v1",
    apiKey: 'API_KEY',
})

const emailPostResponse = await segnivo.emailAddressVerification.emailPost()


console.log(emailPostResponse)

```

## Reference


### `segnivo.emailAddressVerification.emailPost`

The `/validate-email` endpoint allows you to pass the email addresses you wish to verify and get a response on each of their status.

The following data should be passed in JSON format in the request body

- **emails** - An array/collection containing a minimum of one and maximum of fifty email addresses for verification/validation.

#### 🛠️ Usage

```typescript
const emailPostResponse = await segnivo.emailAddressVerification.emailPost()


```

#### 🌐 Endpoint

`/validate-email` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `segnivo.emailCampaigns.messagesGet`

Returns a collection of all your campaigns

#### 🛠️ Usage

```typescript
const messagesGetResponse = await segnivo.emailCampaigns.messagesGet({
                                                                        })


```

#### ⚙️ Parameters

##### accept: `string`

#### 🌐 Endpoint

`/messages` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `segnivo.emailCampaigns.messagesPost`

Creat an email campaign for processing

#### 🛠️ Usage

```typescript
const messagesPostResponse = await segnivo.emailCampaigns.messagesPost({
                                                                          })


```

#### ⚙️ Parameters

##### ContentType: `string`

##### accept: `string`

#### 🌐 Endpoint

`/messages` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `segnivo.emailCampaigns.messagesUidDeletePost`

Delete the specified campaign

#### 🛠️ Usage

```typescript
const messagesUidDeletePostResponse = await segnivo.emailCampaigns.messagesUidDeletePost({
                                                                                                "uid": "uid_example",
                                                                                            })


```

#### ⚙️ Parameters

##### uid: `string`

(Required) The uid of the campaign to delete

##### accept: `string`

#### 🌐 Endpoint

`/messages/{uid}/delete` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `segnivo.emailCampaigns.messagesUidGet`

Returns the specified campaign details

#### 🛠️ Usage

```typescript
const messagesUidGetResponse = await segnivo.emailCampaigns.messagesUidGet({
                                                                                  "uid": "uid_example",
                                                                              })


```

#### ⚙️ Parameters

##### uid: `string`

(Required) The uid of the campaign to fetch

##### accept: `string`

#### 🌐 Endpoint

`/messages/{uid}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `segnivo.emailCampaigns.messagesUidPatch`

Updates a previously added campaign. Only Active and Paused campaigns can be updated.

#### 🛠️ Usage

```typescript
const messagesUidPatchResponse = await segnivo.emailCampaigns.messagesUidPatch({
                                                                                      "uid": "uid_example",
                                                                                  })


```

#### ⚙️ Parameters

##### uid: `string`

(Required) The uid of the campaign to update

##### ContentType: `string`

##### accept: `string`

#### 🌐 Endpoint

`/messages/{uid}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `segnivo.emailCampaigns.messagesUidPausePost`

Pause the specified campaign

#### 🛠️ Usage

```typescript
const messagesUidPausePostResponse = await segnivo.emailCampaigns.messagesUidPausePost({
                                                                                              "uid": "uid_example",
                                                                                          })


```

#### ⚙️ Parameters

##### uid: `string`

(Required) The uid of the campaign to pause

##### accept: `string`

#### 🌐 Endpoint

`/messages/{uid}/pause` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `segnivo.emailCampaigns.messagesUidResumePost`

Resume delivery of the specified campaign

#### 🛠️ Usage

```typescript
const messagesUidResumePostResponse = await segnivo.emailCampaigns.messagesUidResumePost({
                                                                                                "uid": "uid_example",
                                                                                            })


```

#### ⚙️ Parameters

##### uid: `string`

(Required) The uid of the campaign to resume

##### accept: `string`

#### 🌐 Endpoint

`/messages/{uid}/resume` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `segnivo.mailingLists.listsGet`

Returns all your existing lists

#### 🛠️ Usage

```typescript
const listsGetResponse = await segnivo.mailingLists.listsGet({
                                                                })


```

#### ⚙️ Parameters

##### accept: `string`

#### 🌐 Endpoint

`/lists` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `segnivo.mailingLists.listsPost`

Create a new mailing list

#### 🛠️ Usage

```typescript
const listsPostResponse = await segnivo.mailingLists.listsPost({
                                                                  })


```

#### ⚙️ Parameters

##### ContentType: `string`

##### accept: `string`

#### 🌐 Endpoint

`/lists` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `segnivo.mailingLists.listsUidAddFieldPost`

Add a field to an existing list

#### 🛠️ Usage

```typescript
const listsUidAddFieldPostResponse = await segnivo.mailingLists.listsUidAddFieldPost({
                                                                                            "uid": "uid_example",
                                                                                        })


```

#### ⚙️ Parameters

##### uid: `string`

(Required) The uid of the list to add a field to.

##### ContentType: `string`

##### accept: `string`

#### 🌐 Endpoint

`/lists/{uid}/add-field` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `segnivo.mailingLists.listsUidDeletePost`

Delete an existing list

#### 🛠️ Usage

```typescript
const listsUidDeletePostResponse = await segnivo.mailingLists.listsUidDeletePost({
                                                                                        "uid": "uid_example",
                                                                                    })


```

#### ⚙️ Parameters

##### uid: `string`

(Required) The uid of the list to delete.

##### accept: `string`

#### 🌐 Endpoint

`/lists/{uid}/delete` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `segnivo.mailingLists.listsUidGet`

Returns detailed information about a specified list

#### 🛠️ Usage

```typescript
const listsUidGetResponse = await segnivo.mailingLists.listsUidGet({
                                                                          "uid": "uid_example",
                                                                      })


```

#### ⚙️ Parameters

##### uid: `string`

(Required) The uid of the mailing list to fetch.

##### accept: `string`

#### 🌐 Endpoint

`/lists/{uid}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `segnivo.mailingLists.listsUidPatch`

Update an existing mailing list

#### 🛠️ Usage

```typescript
const listsUidPatchResponse = await segnivo.mailingLists.listsUidPatch({
                                                                              "uid": "uid_example",
                                                                          })


```

#### ⚙️ Parameters

##### uid: `string`

(Required) The uid of the list to update.

##### ContentType: `string`

##### accept: `string`

#### 🌐 Endpoint

`/lists/{uid}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `segnivo.relay.relayEmailsIdGet`

The `/emails` endpoint lets you fetch one or more marketing/transactional email(s) from your `Segnivo Messaging` account and it accepts two **optional** parameters.

- The `id` string of the email to fetch provided as a path variable
    
- The `limit` on the number of records to fetch (if email id is not provided) as a query string parameter. This value defaults to 100 if not provided.

#### 🛠️ Usage

```typescript
const relayEmailsIdGetResponse = await segnivo.relay.relayEmailsIdGet({
                                                                             "id": "id_example",
                                                                         })


```

#### ⚙️ Parameters

##### id: `string`

The ID of the email to fetch

##### limit: `number`

The number of records to fetch

#### 🌐 Endpoint

`/relay/emails/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `segnivo.relay.relayRawPost`

The `/raw` endpoint lets you send marketing and transactional emails from your `Segnivo Messaging` account by passing a raw RFC822 message to the `message` attribute in the request body.

The following parameters should be passed as a form data to the endpoint

- **message** - A raw RFC822 message
    
- **sign_dkim** (optional, defaults to `true`) - A boolean value on if a DKIM signature should be included in this message
    
- **track_click** (optional, defaults to `true`) - A boolean value on if email clicks should be tracked. If `true` links in the email will be rewritten to enable tracking
    
- **track_open** (optional, defaults to `true`) - A boolean value on if the email opens should be tracked
    
- **is_transactional** (optional, defaults to `false`) - A boolean value to flag this email as a transactional email

#### 🛠️ Usage

```typescript
const relayRawPostResponse = await segnivo.relay.relayRawPost({
                                                                     "message": "A raw RFC822 message string",
                                                                     "is_transactional": true,
                                                                     "track_click": false,
                                                                     "track_open": false,
                                                                     "sign_dkim": true,
                                                                 })


```

#### ⚙️ Parameters

##### message: `string`

##### isTransactional: `boolean`

##### trackClick: `boolean`

##### trackOpen: `boolean`

##### signDkim: `boolean`

#### 🌐 Endpoint

`/relay/raw` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `segnivo.relayTransactionalEmails.relaySendPost`

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

```typescript
const relaySendPostResponse = await segnivo.relayTransactionalEmails.relaySendPost()


```

#### 🌐 Endpoint

`/relay/send` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `segnivo.subscribersContacts.contactsGet`

Returns a list of contacts/subscribers on your account

This endpoint accepts three **optional** query parameters

- `email` — An email address to search for. If set, the endpoint only returns subscribers that have an identical email address.
    
- `per_page` — A limit on the number of records to return.
    
- `page` — The parameter serves as an offset on the number of records returned.

#### 🛠️ Usage

```typescript
const contactsGetResponse = await segnivo.subscribersContacts.contactsGet({
                                                                             })


```

#### ⚙️ Parameters

##### accept: `string`

##### email: `string`

An email address to search for.

##### perPage: `number`

How many items should be returned ahead.

##### page: `number`

The offset for the items to be returned, helps in pagination.

#### 🌐 Endpoint

`/contacts` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `segnivo.subscribersContacts.contactsPost`

Add a new contact/subscriber to your mailing list

#### 🛠️ Usage

```typescript
const contactsPostResponse = await segnivo.subscribersContacts.contactsPost({
                                                                               })


```

#### ⚙️ Parameters

##### ContentType: `string`

##### accept: `string`

#### 🌐 Endpoint

`/contacts` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `segnivo.subscribersContacts.contactsUidAddTagPost`

Add tags to an existing contact

#### 🛠️ Usage

```typescript
const contactsUidAddTagPostResponse = await segnivo.subscribersContacts.contactsUidAddTagPost({
                                                                                                     "uid": "uid_example",
                                                                                                 })


```

#### ⚙️ Parameters

##### uid: `string`

(Required) The uid of the contact to update with the tags.

##### ContentType: `string`

##### accept: `string`

#### 🌐 Endpoint

`/contacts/{uid}/add-tag` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `segnivo.subscribersContacts.contactsUidDeletePost`

Delete an existing contact

#### 🛠️ Usage

```typescript
const contactsUidDeletePostResponse = await segnivo.subscribersContacts.contactsUidDeletePost({
                                                                                                     "uid": "uid_example",
                                                                                                 })


```

#### ⚙️ Parameters

##### uid: `string`

(Required) The uid of the contact to delete.

##### accept: `string`

#### 🌐 Endpoint

`/contacts/{uid}/delete` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `segnivo.subscribersContacts.contactsUidGet`

Fetch detailed contact information for specified a contact

#### 🛠️ Usage

```typescript
const contactsUidGetResponse = await segnivo.subscribersContacts.contactsUidGet({
                                                                                       "uid": "uid_example",
                                                                                   })


```

#### ⚙️ Parameters

##### uid: `string`

(Required) The uid of the contact to get.

##### accept: `string`

#### 🌐 Endpoint

`/contacts/{uid}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `segnivo.subscribersContacts.contactsUidPatch`

Update the specified subscriber/contact

#### 🛠️ Usage

```typescript
const contactsUidPatchResponse = await segnivo.subscribersContacts.contactsUidPatch({
                                                                                           "uid": "uid_example",
                                                                                       })


```

#### ⚙️ Parameters

##### uid: `string`

(Required) The uid of the contact to update.

##### ContentType: `string`

##### accept: `string`

#### 🌐 Endpoint

`/contacts/{uid}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `segnivo.subscribersContacts.contactsUidSubscribePatch`

Subscribe a contact to a list

#### 🛠️ Usage

```typescript
const contactsUidSubscribePatchResponse = await segnivo.subscribersContacts.contactsUidSubscribePatch({
                                                                                                             "uid": "uid_example",
                                                                                                         })


```

#### ⚙️ Parameters

##### uid: `string`

(Required) The uid of the contact to subscribe.

##### accept: `string`

##### listUid: `string`

(Required) The uid of the mail list to subscribe the contact.

#### 🌐 Endpoint

`/contacts/{uid}/subscribe` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `segnivo.subscribersContacts.contactsUidUnsubscribePatch`

Unsubscribe a contact from a list

#### 🛠️ Usage

```typescript
const contactsUidUnsubscribePatchResponse = await segnivo.subscribersContacts.contactsUidUnsubscribePatch({
                                                                                                                 "uid": "uid_example",
                                                                                                             })


```

#### ⚙️ Parameters

##### uid: `string`

(Required) The uid of the contact to unsubscribe.

##### accept: `string`

##### listUid: `string`

(Required) The uid of the mail list to unsubscribe the contact.

#### 🌐 Endpoint

`/contacts/{uid}/unsubscribe` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
