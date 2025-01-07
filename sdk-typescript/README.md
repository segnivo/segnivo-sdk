<div align="center">
  <h1>segnivo-typescript-sdk</h1>
  <p><strong>🚀 segnivo-typescript-sdk - TypeScript SDK for Segnivo API</strong></p>
  
  <p>
    <a href="#installation">Installation</a> •
    <a href="#quick-start">Quick Start</a> •
    <a href="#api-reference">API Reference</a> •
    <a href="#examples">Examples</a> •
    <a href="#contributing">Contributing</a>
  </p>
</div>

---

## ✨ Features

- 🔄 Full TypeScript support with complete type definitions
- 🛡️ Automatic request validation
- 📝 Comprehensive API documentation
- ⚡ Promise-based async/await interface
- 🔒 Built-in authentication handling
- 🎯 Modular architecture for tree-shaking
- 🧪 Extensive test coverage

## 📦 Installation

Using npm:
```bash
npm install segnivo-typescript-sdk@1.7.6
```

Using yarn:
```bash
yarn add segnivo-typescript-sdk@1.7.6
```

Using pnpm:
```bash
pnpm add segnivo-typescript-sdk@1.7.6
```

## 🚀 Quick Start

```typescript
import { SegnivoClient } from 'segnivo-typescript-sdk';

// Initialize the client
const client = new SegnivoClient({
  apiKey: 'YOUR_API_KEY',
  // Optional configuration
  baseURL: 'https://api.segnivo.com',
  timeout: 30000,
});

// Make your first API call
async function example() {
  try {
    const response = await client.someEndpoint.someMethod();
    console.log('Success:', response);
  } catch (error) {
    console.error('Error:', error);
  }
}
```

## 📘 API Reference

### EmailAddressVerificationApi


#### `validateEmailPost`

> Email Address Verification Validation

The `/validate-email` endpoint allows you to pass the email addresses you wish to verify and get a response on each of their status.  The following data should be passed in JSON format in the request body  - **emails** - An array/collection containing a minimum of one and maximum of fifty email addresses for verification/validation.

```typescript
interface validateEmailPostParams {
  body?: any;
}

async validateEmailPost(params: validateEmailPostParams): Promise<any>

```

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `body` | `any` | ❌ |  |

**Response Type:** `any`

**Example:**
```typescript
const response = await client.emailAddressVerification.validateEmailPost({
  body: {},
});
```

---
### EmailCampaignsApi


#### `messagesGet`

> Get campaigns

Returns a collection of all your campaigns

```typescript
interface messagesGetParams {
  accept?: string;
}

async messagesGet(params: messagesGetParams): Promise<any>

```

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `accept` | `string` | ❌ |  |

**Response Type:** `any`

**Example:**
```typescript
const response = await client.emailCampaigns.messagesGet({
  accept: "application/json",
});
```

---
#### `messagesPost`

> Create a Campaign

Creat an email campaign for processing

```typescript
interface messagesPostParams {
  accept?: string;
  body?: any;
}

async messagesPost(params: messagesPostParams): Promise<any>

```

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `accept` | `string` | ❌ |  |
| `body` | `any` | ❌ |  |

**Response Type:** `any`

**Example:**
```typescript
const response = await client.emailCampaigns.messagesPost({
  accept: "application/json",
  body: {},
});
```

---
#### `messagesUidDeletePost`

> Delete a campaign

Delete the specified campaign

```typescript
interface messagesUidDeletePostParams {
  uid: string;
  accept?: string;
  body?: any;
}

async messagesUidDeletePost(params: messagesUidDeletePostParams): Promise<any>

```

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `uid` | `string` | ✅ | (Required) The uid of the campaign to delete |
| `accept` | `string` | ❌ |  |
| `body` | `any` | ❌ |  |

**Response Type:** `any`

**Example:**
```typescript
const response = await client.emailCampaigns.messagesUidDeletePost({
  uid: "<string>",
  accept: "application/json",
  body: {},
});
```

---
#### `messagesUidGet`

> Get a campaign

Returns the specified campaign details

```typescript
interface messagesUidGetParams {
  uid: string;
  accept?: string;
}

async messagesUidGet(params: messagesUidGetParams): Promise<any>

```

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `uid` | `string` | ✅ | (Required) The uid of the campaign to fetch |
| `accept` | `string` | ❌ |  |

**Response Type:** `any`

**Example:**
```typescript
const response = await client.emailCampaigns.messagesUidGet({
  uid: "<string>",
  accept: "application/json",
});
```

---
#### `messagesUidPatch`

> Update Campaign

Updates a previously added campaign. Only Active and Paused campaigns can be updated.

```typescript
interface messagesUidPatchParams {
  uid: string;
  accept?: string;
  body?: any;
}

async messagesUidPatch(params: messagesUidPatchParams): Promise<any>

```

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `uid` | `string` | ✅ | (Required) The uid of the campaign to update |
| `accept` | `string` | ❌ |  |
| `body` | `any` | ❌ |  |

**Response Type:** `any`

**Example:**
```typescript
const response = await client.emailCampaigns.messagesUidPatch({
  uid: "<string>",
  accept: "application/json",
  body: {},
});
```

---
#### `messagesUidPausePost`

> Pause a campaign

Pause the specified campaign

```typescript
interface messagesUidPausePostParams {
  uid: string;
  accept?: string;
  body?: any;
}

async messagesUidPausePost(params: messagesUidPausePostParams): Promise<any>

```

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `uid` | `string` | ✅ | (Required) The uid of the campaign to pause |
| `accept` | `string` | ❌ |  |
| `body` | `any` | ❌ |  |

**Response Type:** `any`

**Example:**
```typescript
const response = await client.emailCampaigns.messagesUidPausePost({
  uid: "<string>",
  accept: "application/json",
  body: {},
});
```

---
#### `messagesUidResumePost`

> Resume the delivery of a campaign

Resume delivery of the specified campaign

```typescript
interface messagesUidResumePostParams {
  uid: string;
  accept?: string;
  body?: any;
}

async messagesUidResumePost(params: messagesUidResumePostParams): Promise<any>

```

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `uid` | `string` | ✅ | (Required) The uid of the campaign to resume |
| `accept` | `string` | ❌ |  |
| `body` | `any` | ❌ |  |

**Response Type:** `any`

**Example:**
```typescript
const response = await client.emailCampaigns.messagesUidResumePost({
  uid: "<string>",
  accept: "application/json",
  body: {},
});
```

---
### MailingListsApi


#### `listsGet`

> Get mailing lists

Returns all your existing lists

```typescript
interface listsGetParams {
  accept?: string;
}

async listsGet(params: listsGetParams): Promise<any>

```

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `accept` | `string` | ❌ |  |

**Response Type:** `any`

**Example:**
```typescript
const response = await client.mailingLists.listsGet({
  accept: "application/json",
});
```

---
#### `listsPost`

> Create a Mailing List

Create a new mailing list

```typescript
interface listsPostParams {
  accept?: string;
  body?: any;
}

async listsPost(params: listsPostParams): Promise<any>

```

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `accept` | `string` | ❌ |  |
| `body` | `any` | ❌ |  |

**Response Type:** `any`

**Example:**
```typescript
const response = await client.mailingLists.listsPost({
  accept: "application/json",
  body: {},
});
```

---
#### `listsUidAddFieldPost`

> Add a field

Add a field to an existing list

```typescript
interface listsUidAddFieldPostParams {
  uid: string;
  accept?: string;
  body?: any;
}

async listsUidAddFieldPost(params: listsUidAddFieldPostParams): Promise<any>

```

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `uid` | `string` | ✅ | (Required) The uid of the list to add a field to. |
| `accept` | `string` | ❌ |  |
| `body` | `any` | ❌ |  |

**Response Type:** `any`

**Example:**
```typescript
const response = await client.mailingLists.listsUidAddFieldPost({
  uid: "<string>",
  accept: "application/json",
  body: {},
});
```

---
#### `listsUidDeletePost`

> Delete a list

Delete an existing list

```typescript
interface listsUidDeletePostParams {
  uid: string;
  accept?: string;
  body?: any;
}

async listsUidDeletePost(params: listsUidDeletePostParams): Promise<any>

```

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `uid` | `string` | ✅ | (Required) The uid of the list to delete. |
| `accept` | `string` | ❌ |  |
| `body` | `any` | ❌ |  |

**Response Type:** `any`

**Example:**
```typescript
const response = await client.mailingLists.listsUidDeletePost({
  uid: "<string>",
  accept: "application/json",
  body: {},
});
```

---
#### `listsUidGet`

> Get a list

Returns detailed information about a specified list

```typescript
interface listsUidGetParams {
  uid: string;
  accept?: string;
}

async listsUidGet(params: listsUidGetParams): Promise<any>

```

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `uid` | `string` | ✅ | (Required) The uid of the mailing list to fetch. |
| `accept` | `string` | ❌ |  |

**Response Type:** `any`

**Example:**
```typescript
const response = await client.mailingLists.listsUidGet({
  uid: "<string>",
  accept: "application/json",
});
```

---
#### `listsUidPatch`

> Update a List

Update an existing mailing list

```typescript
interface listsUidPatchParams {
  uid: string;
  accept?: string;
  body?: any;
}

async listsUidPatch(params: listsUidPatchParams): Promise<any>

```

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `uid` | `string` | ✅ | (Required) The uid of the list to update. |
| `accept` | `string` | ❌ |  |
| `body` | `any` | ❌ |  |

**Response Type:** `any`

**Example:**
```typescript
const response = await client.mailingLists.listsUidPatch({
  uid: "<string>",
  accept: "application/json",
  body: {},
});
```

---
### RelayApi


#### `relayEmailsIdGet`

> Fetch Emails

The `/emails` endpoint lets you fetch one or more marketing/transactional email(s) from your `Segnivo Messaging` account and it accepts two **optional** parameters.  - The `id` string of the email to fetch provided as a path variable      - The `limit` on the number of records to fetch (if email id is not provided) as a query string parameter. This value defaults to 100 if not provided.

```typescript
interface relayEmailsIdGetParams {
  id: string;
  limit?: number;
}

async relayEmailsIdGet(params: relayEmailsIdGetParams): Promise<any>

```

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | `string` | ✅ | The ID of the email to fetch |
| `limit` | `number` | ❌ | The number of records to fetch |

**Response Type:** `any`

**Example:**
```typescript
const response = await client.relay.relayEmailsIdGet({
  id: "<string>",
  limit: 100,
});
```

---
#### `relayRawPost`

> Send a Raw Email Message

The `/raw` endpoint lets you send marketing and transactional emails from your `Segnivo Messaging` account by passing a raw RFC822 message to the `message` attribute in the request body.  The following parameters should be passed as a form data to the endpoint  - **message** - A raw RFC822 message      - **sign_dkim** (optional, defaults to `true`) - A boolean value on if a DKIM signature should be included in this message      - **track_click** (optional, defaults to `true`) - A boolean value on if email clicks should be tracked. If `true` links in the email will be rewritten to enable tracking      - **track_open** (optional, defaults to `true`) - A boolean value on if the email opens should be tracked      - **is_transactional** (optional, defaults to `false`) - A boolean value to flag this email as a transactional email

```typescript
interface relayRawPostParams {
  message?: string;
  isTransactional?: boolean;
  trackClick?: boolean;
  trackOpen?: boolean;
  signDkim?: boolean;
}

async relayRawPost(params: relayRawPostParams): Promise<any>

```

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `message` | `string` | ❌ |  |
| `isTransactional` | `boolean` | ❌ |  |
| `trackClick` | `boolean` | ❌ |  |
| `trackOpen` | `boolean` | ❌ |  |
| `signDkim` | `boolean` | ❌ |  |

**Response Type:** `any`

**Example:**
```typescript
const response = await client.relay.relayRawPost({
  message: "A raw RFC822 message string",
  isTransactional: true,
  trackClick: false,
  trackOpen: false,
  signDkim: true,
});
```

---
### RelayTransactionalEmailsApi


#### `relaySendPost`

> Send an Email

The `/send` endpoint lets you send marketing and transactional emails from your `Segnivo Messaging` account.  The following data should be passed in JSON format in the request body  - **subject** - The subject of the email      - **from_name** (optional) - The full name of the sender      - **from_email** - The email of the sender      - **reply_to** (optional) - The email to which replies should be sent      - **content_type** (optional, defaults to `html`) - The content type of the email body. Accepts either `text` or `html`      - **recipients** - An array/collection of email addresses to deliver this message, max. 50      - **content** - The HTML or plain text content of the email      - **preheader** (optional) - The email preheader      - **custom_headers** (optional) - An object of custom headers to add to the email      - **delivery_at** (optional) - The 10-digit unix timestamp of the date/time at which this email should be delivered      - **attachments** (optional) - An array/collection of the URLs of files to attach to the email      - **sign_dkim** (optional, defaults to `true`) - A boolean value on if a DKIM signature should be included in this message      - **track_click** (optional, defaults to `true`) - A boolean value on if email clicks should be tracked. If `true` links in the email will be rewritten to enable tracking      - **track_open** (optional, defaults to `true`) - A boolean value on if the email opens should be tracked      - **is_transactional** (optional, defaults to `false`) - A boolean value to flag this email as a transactional email       #### 🔖 Important  **`is_transactional`** must only be set to `true` for transactional emails. Setting this to `true` for marketing emails will result in your API access being revoked and your account disabled.

```typescript
interface relaySendPostParams {
  body?: any;
}

async relaySendPost(params: relaySendPostParams): Promise<any>

```

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `body` | `any` | ❌ |  |

**Response Type:** `any`

**Example:**
```typescript
const response = await client.relayTransactionalEmails.relaySendPost({
  body: {},
});
```

---
### SubscribersContactsApi


#### `contactsGet`

> Get contacts

Returns a list of contacts/subscribers on your account  This endpoint accepts three **optional** query parameters  - `email` — An email address to search for. If set, the endpoint only returns subscribers that have an identical email address.      - `per_page` — A limit on the number of records to return.      - `page` — The parameter serves as an offset on the number of records returned.

```typescript
interface contactsGetParams {
  accept?: string;
  email?: string;
  perPage?: number;
  page?: number;
}

async contactsGet(params: contactsGetParams): Promise<any>

```

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `accept` | `string` | ❌ |  |
| `email` | `string` | ❌ | An email address to search for. |
| `perPage` | `number` | ❌ | How many items should be returned ahead. |
| `page` | `number` | ❌ | The offset for the items to be returned, helps in pagination. |

**Response Type:** `any`

**Example:**
```typescript
const response = await client.subscribersContacts.contactsGet({
  accept: "application/json",
  email: "<string>",
  perPage: 20,
  page: 1,
});
```

---
#### `contactsPost`

> Add a Contact

Add a new contact/subscriber to your mailing list

```typescript
interface contactsPostParams {
  accept?: string;
  body?: any;
}

async contactsPost(params: contactsPostParams): Promise<any>

```

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `accept` | `string` | ❌ |  |
| `body` | `any` | ❌ |  |

**Response Type:** `any`

**Example:**
```typescript
const response = await client.subscribersContacts.contactsPost({
  accept: "application/json",
  body: {},
});
```

---
#### `contactsUidAddTagPost`

> Add tags to a contact

Add tags to an existing contact

```typescript
interface contactsUidAddTagPostParams {
  uid: string;
  accept?: string;
  body?: any;
}

async contactsUidAddTagPost(params: contactsUidAddTagPostParams): Promise<any>

```

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `uid` | `string` | ✅ | (Required) The uid of the contact to update with the tags. |
| `accept` | `string` | ❌ |  |
| `body` | `any` | ❌ |  |

**Response Type:** `any`

**Example:**
```typescript
const response = await client.subscribersContacts.contactsUidAddTagPost({
  uid: "<string>",
  accept: "application/json",
  body: {},
});
```

---
#### `contactsUidDeletePost`

> Delete a contact

Delete an existing contact

```typescript
interface contactsUidDeletePostParams {
  uid: string;
  accept?: string;
  body?: any;
}

async contactsUidDeletePost(params: contactsUidDeletePostParams): Promise<any>

```

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `uid` | `string` | ✅ | (Required) The uid of the contact to delete. |
| `accept` | `string` | ❌ |  |
| `body` | `any` | ❌ |  |

**Response Type:** `any`

**Example:**
```typescript
const response = await client.subscribersContacts.contactsUidDeletePost({
  uid: "<string>",
  accept: "application/json",
  body: {},
});
```

---
#### `contactsUidGet`

> Get a contact

Fetch detailed contact information for specified a contact

```typescript
interface contactsUidGetParams {
  uid: string;
  accept?: string;
}

async contactsUidGet(params: contactsUidGetParams): Promise<any>

```

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `uid` | `string` | ✅ | (Required) The uid of the contact to get. |
| `accept` | `string` | ❌ |  |

**Response Type:** `any`

**Example:**
```typescript
const response = await client.subscribersContacts.contactsUidGet({
  uid: "<string>",
  accept: "application/json",
});
```

---
#### `contactsUidPatch`

> Update Contact

Update the specified subscriber/contact

```typescript
interface contactsUidPatchParams {
  uid: string;
  accept?: string;
  body?: any;
}

async contactsUidPatch(params: contactsUidPatchParams): Promise<any>

```

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `uid` | `string` | ✅ | (Required) The uid of the contact to update. |
| `accept` | `string` | ❌ |  |
| `body` | `any` | ❌ |  |

**Response Type:** `any`

**Example:**
```typescript
const response = await client.subscribersContacts.contactsUidPatch({
  uid: "<string>",
  accept: "application/json",
  body: {},
});
```

---
#### `contactsUidSubscribePatch`

> Subscribe a contact

Subscribe a contact to a list

```typescript
interface contactsUidSubscribePatchParams {
  uid: string;
  accept?: string;
  listUid?: string;
  body?: any;
}

async contactsUidSubscribePatch(params: contactsUidSubscribePatchParams): Promise<any>

```

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `uid` | `string` | ✅ | (Required) The uid of the contact to subscribe. |
| `accept` | `string` | ❌ |  |
| `listUid` | `string` | ❌ | (Required) The uid of the mail list to subscribe the contact. |
| `body` | `any` | ❌ |  |

**Response Type:** `any`

**Example:**
```typescript
const response = await client.subscribersContacts.contactsUidSubscribePatch({
  uid: "<string>",
  accept: "application/json",
  listUid: "<string>",
  body: {},
});
```

---
#### `contactsUidUnsubscribePatch`

> Unsubscribe a contact

Unsubscribe a contact from a list

```typescript
interface contactsUidUnsubscribePatchParams {
  uid: string;
  accept?: string;
  listUid?: string;
  body?: any;
}

async contactsUidUnsubscribePatch(params: contactsUidUnsubscribePatchParams): Promise<any>

```

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `uid` | `string` | ✅ | (Required) The uid of the contact to unsubscribe. |
| `accept` | `string` | ❌ |  |
| `listUid` | `string` | ❌ | (Required) The uid of the mail list to unsubscribe the contact. |
| `body` | `any` | ❌ |  |

**Response Type:** `any`

**Example:**
```typescript
const response = await client.subscribersContacts.contactsUidUnsubscribePatch({
  uid: "<string>",
  accept: "application/json",
  listUid: "<string>",
  body: {},
});
```

---

## 🔧 Configuration

The SDK can be configured with the following options:

```typescript
interface ClientConfig {
  apiKey: string;
  baseURL?: string;
  timeout?: number;
  headers?: Record<string, string>;
  retry?: {
    maxRetries: number;
    delayMS: number;
  };
}
```

## 📋 Types


## 🎯 Examples

### Authentication
```typescript
const client = new SegnivoClient({
  apiKey: process.env.SEGNIVO_API_KEY,
});
```

### Error Handling
```typescript
try {
  const response = await client.someEndpoint.someMethod();
} catch (error) {
  if (error instanceof SegnivoApiError) {
    console.error('API Error:', error.message);
    console.error('Status Code:', error.statusCode);
    console.error('Error Code:', error.code);
  } else {
    console.error('Unknown Error:', error);
  }
}
```

### Custom Configuration
```typescript
const client = new SegnivoClient({
  apiKey: 'YOUR_API_KEY',
  baseURL: 'https://api.staging.segnivo.com',
  timeout: 60000,
  headers: {
    'Custom-Header': 'value',
  },
  retry: {
    maxRetries: 3,
    delayMS: 1000,
  },
});
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

* [GIT_USER_ID](https://github.com/GIT_USER_ID)

## 🔗 Links

* [API Documentation](https://docs.segnivo.com)
* [GitHub Repository](https://github.com/GIT_USER_ID/GIT_REPO_ID)
* [NPM Package](https://www.npmjs.com/package/segnivo-typescript-sdk)
* [Support](https://support.segnivo.com)

---

<div align="center">
  <sub>Built with ❤️ by the Segnivo team</sub>
</div>