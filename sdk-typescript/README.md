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
bash
npm install segnivo-typescript-sdk@1.7.16


Using yarn:
bash
yarn add segnivo-typescript-sdk@1.7.16


Using pnpm:
bash
pnpm add segnivo-typescript-sdk@1.7.16

## 🚀 Quick Start
```typescript
import { MailingListsApi, Configuration } from 'segnivo-typescript-sdk';

// Initialize the client with your API key
const client = new MailingListsApi(new Configuration({
  apiKey: 'your_api_key_here',
  baseURL: 'https://api.segnivo.com',
  timeout: 30000
}));

// Example: Fetch mailing lists
async function fetchMailingLists() {
  try {
    console.log('Fetching mailing lists...');
    const response = await client.listsGet();
    console.log('Successfully retrieved mailing lists:');
    console.log('Total lists:', response.data.length);
    console.log('First list:', response.data[0]);
  } catch (error) {
    console.error('Failed to fetch mailing lists:');
    console.error('Error:', error.response?.data || error.message);
  }
}

// Execute the example
fetchMailingLists();

## 📘 API Reference

### EmailAddressVerificationApi


#### validateEmailPost

> Email Address Verification Validation

The `/validate-email` endpoint allows you to pass the email addresses you wish to verify and get a response on each of their status.  The following data should be passed in JSON format in the request body  - **emails** - An array/collection containing a minimum of one and maximum of fifty email addresses for verification/validation.

typescript
interface validateEmailPostParams {
  emailAddressVerificationRequest?: EmailAddressVerificationRequest;
}

async validateEmailPost(params: validateEmailPostParams): Promise<object>



| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| emailAddressVerificationRequest | EmailAddressVerificationRequest | ❌ |  |

**Response Type:** object

**Example:**
typescript
const response = await client.emailAddressVerification.validateEmailPost({
  emailAddressVerificationRequest: 'example',
});


---
### EmailCampaignsApi


#### messagesGet

> Get campaigns

Returns a collection of all your campaigns

typescript

async messagesGet(): Promise<object>




**Response Type:** object

**Example:**
typescript
const response = await client.emailCampaigns.messagesGet({
});


---
#### messagesPost

> Create a Campaign

Creat an email campaign for processing

typescript
interface messagesPostParams {
  campaignCreateRequest?: CampaignCreateRequest;
}

async messagesPost(params: messagesPostParams): Promise<object>



| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| campaignCreateRequest | CampaignCreateRequest | ❌ |  |

**Response Type:** object

**Example:**
typescript
const response = await client.emailCampaigns.messagesPost({
  campaignCreateRequest: 'example',
});


---
#### messagesUidDeletePost

> Delete a campaign

Delete the specified campaign

typescript
interface messagesUidDeletePostParams {
  uid: string;
  body?: object;
}

async messagesUidDeletePost(params: messagesUidDeletePostParams): Promise<object>



| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| uid | string | ✅ | (Required) The uid of the campaign to delete |
| body | object | ❌ |  |

**Response Type:** object

**Example:**
typescript
const response = await client.emailCampaigns.messagesUidDeletePost({
  uid: <string>,
  body: Object,
});


---
#### messagesUidGet

> Get a campaign

Returns the specified campaign details

typescript
interface messagesUidGetParams {
  uid: string;
}

async messagesUidGet(params: messagesUidGetParams): Promise<object>



| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| uid | string | ✅ | (Required) The uid of the campaign to fetch |

**Response Type:** object

**Example:**
typescript
const response = await client.emailCampaigns.messagesUidGet({
  uid: <string>,
});


---
#### messagesUidPatch

> Update Campaign

Updates a previously added campaign. Only Active and Paused campaigns can be updated.

typescript
interface messagesUidPatchParams {
  uid: string;
  campaignUpdateRequest?: CampaignUpdateRequest;
}

async messagesUidPatch(params: messagesUidPatchParams): Promise<object>



| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| uid | string | ✅ | (Required) The uid of the campaign to update |
| campaignUpdateRequest | CampaignUpdateRequest | ❌ |  |

**Response Type:** object

**Example:**
typescript
const response = await client.emailCampaigns.messagesUidPatch({
  uid: <string>,
  campaignUpdateRequest: 'example',
});


---
#### messagesUidPausePost

> Pause a campaign

Pause the specified campaign

typescript
interface messagesUidPausePostParams {
  uid: string;
  body?: object;
}

async messagesUidPausePost(params: messagesUidPausePostParams): Promise<object>



| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| uid | string | ✅ | (Required) The uid of the campaign to pause |
| body | object | ❌ |  |

**Response Type:** object

**Example:**
typescript
const response = await client.emailCampaigns.messagesUidPausePost({
  uid: <string>,
  body: Object,
});


---
#### messagesUidResumePost

> Resume the delivery of a campaign

Resume delivery of the specified campaign

typescript
interface messagesUidResumePostParams {
  uid: string;
  body?: object;
}

async messagesUidResumePost(params: messagesUidResumePostParams): Promise<object>



| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| uid | string | ✅ | (Required) The uid of the campaign to resume |
| body | object | ❌ |  |

**Response Type:** object

**Example:**
typescript
const response = await client.emailCampaigns.messagesUidResumePost({
  uid: <string>,
  body: Object,
});


---
### MailingListsApi


#### listsGet

> Get mailing lists

Returns all your existing lists

typescript

async listsGet(): Promise<object>




**Response Type:** object

**Example:**
typescript
const response = await client.mailingLists.listsGet({
});


---
#### listsPost

> Create a Mailing List

Create a new mailing list

typescript
interface listsPostParams {
  mailingListRequest?: MailingListRequest;
}

async listsPost(params: listsPostParams): Promise<object>



| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| mailingListRequest | MailingListRequest | ❌ |  |

**Response Type:** object

**Example:**
typescript
const response = await client.mailingLists.listsPost({
  mailingListRequest: 'example',
});


---
#### listsUidAddFieldPost

> Add a field

Add a field to an existing list

typescript
interface listsUidAddFieldPostParams {
  uid: string;
  mailingListAddFieldRequest?: MailingListAddFieldRequest;
}

async listsUidAddFieldPost(params: listsUidAddFieldPostParams): Promise<object>



| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| uid | string | ✅ | (Required) The uid of the list to add a field to. |
| mailingListAddFieldRequest | MailingListAddFieldRequest | ❌ |  |

**Response Type:** object

**Example:**
typescript
const response = await client.mailingLists.listsUidAddFieldPost({
  uid: <string>,
  mailingListAddFieldRequest: 'example',
});


---
#### listsUidDeletePost

> Delete a list

Delete an existing list

typescript
interface listsUidDeletePostParams {
  uid: string;
  body?: object;
}

async listsUidDeletePost(params: listsUidDeletePostParams): Promise<object>



| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| uid | string | ✅ | (Required) The uid of the list to delete. |
| body | object | ❌ |  |

**Response Type:** object

**Example:**
typescript
const response = await client.mailingLists.listsUidDeletePost({
  uid: <string>,
  body: Object,
});


---
#### listsUidGet

> Get a list

Returns detailed information about a specified list

typescript
interface listsUidGetParams {
  uid: string;
}

async listsUidGet(params: listsUidGetParams): Promise<object>



| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| uid | string | ✅ | (Required) The uid of the mailing list to fetch. |

**Response Type:** object

**Example:**
typescript
const response = await client.mailingLists.listsUidGet({
  uid: <string>,
});


---
#### listsUidPatch

> Update a List

Update an existing mailing list

typescript
interface listsUidPatchParams {
  uid: string;
  mailingListRequest?: MailingListRequest;
}

async listsUidPatch(params: listsUidPatchParams): Promise<object>



| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| uid | string | ✅ | (Required) The uid of the list to update. |
| mailingListRequest | MailingListRequest | ❌ |  |

**Response Type:** object

**Example:**
typescript
const response = await client.mailingLists.listsUidPatch({
  uid: <string>,
  mailingListRequest: 'example',
});


---
### RelayApi


#### relayEmailsIdGet

> Fetch Emails

The `/emails` endpoint lets you fetch one or more marketing/transactional email(s) from your `Segnivo Messaging` account and it accepts two **optional** parameters.  - The `id` string of the email to fetch provided as a path variable      - The `limit` on the number of records to fetch (if email id is not provided) as a query string parameter. This value defaults to 100 if not provided.

typescript
interface relayEmailsIdGetParams {
  id: string;
  limit?: number;
}

async relayEmailsIdGet(params: relayEmailsIdGetParams): Promise<object>



| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| id | string | ✅ | The ID of the email to fetch |
| limit | number | ❌ | The number of records to fetch |

**Response Type:** object

**Example:**
typescript
const response = await client.relay.relayEmailsIdGet({
  id: <string>,
  limit: 100,
});


---
#### relayRawPost

> Send a Raw Email Message

The `/raw` endpoint lets you send marketing and transactional emails from your `Segnivo Messaging` account by passing a raw RFC822 message to the `message` attribute in the request body.  The following parameters should be passed as a form data to the endpoint  - **message** - A raw RFC822 message      - **sign_dkim** (optional, defaults to `true`) - A boolean value on if a DKIM signature should be included in this message      - **track_click** (optional, defaults to `true`) - A boolean value on if email clicks should be tracked. If `true` links in the email will be rewritten to enable tracking      - **track_open** (optional, defaults to `true`) - A boolean value on if the email opens should be tracked      - **is_transactional** (optional, defaults to `false`) - A boolean value to flag this email as a transactional email

typescript
interface relayRawPostParams {
  message?: string;
  isTransactional?: boolean;
  trackClick?: boolean;
  trackOpen?: boolean;
  signDkim?: boolean;
}

async relayRawPost(params: relayRawPostParams): Promise<object>



| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| message | string | ❌ | The raw email content in RFC822 format. This should include headers, body content, and any attachments. |
| isTransactional | boolean | ❌ | Indicates whether the email is transactional (e.g., receipts, order confirmations) or marketing. Transactional emails typically bypass unsubscribes. |
| trackClick | boolean | ❌ | Enables or disables click tracking within the email. When enabled, any hyperlinks in the email will be tracked to gather analytics on user interactions. |
| trackOpen | boolean | ❌ | Enables or disables open tracking for the email. When enabled, a tracking pixel is embedded in the email to monitor whether the recipient has opened it. |
| signDkim | boolean | ❌ | Specifies whether the email should be signed with a DKIM (DomainKeys Identified Mail) signature. DKIM helps improve email deliverability by ensuring the email\\\'s integrity. |

**Response Type:** object

**Example:**
typescript
const response = await client.relay.relayRawPost({
  message: message_example,
  isTransactional: true,
  trackClick: true,
  trackOpen: true,
  signDkim: true,
});


---
### RelayTransactionalEmailsApi


#### relaySendPost

> Send an Email

The `/send` endpoint lets you send marketing and transactional emails from your `Segnivo Messaging` account.  The following data should be passed in JSON format in the request body  - **subject** - The subject of the email      - **from_name** (optional) - The full name of the sender      - **from_email** - The email of the sender      - **reply_to** (optional) - The email to which replies should be sent      - **content_type** (optional, defaults to `html`) - The content type of the email body. Accepts either `text` or `html`      - **recipients** - An array/collection of email addresses to deliver this message, max. 50      - **content** - The HTML or plain text content of the email      - **preheader** (optional) - The email preheader      - **custom_headers** (optional) - An object of custom headers to add to the email      - **delivery_at** (optional) - The 10-digit unix timestamp of the date/time at which this email should be delivered      - **attachments** (optional) - An array/collection of the URLs of files to attach to the email      - **sign_dkim** (optional, defaults to `true`) - A boolean value on if a DKIM signature should be included in this message      - **track_click** (optional, defaults to `true`) - A boolean value on if email clicks should be tracked. If `true` links in the email will be rewritten to enable tracking      - **track_open** (optional, defaults to `true`) - A boolean value on if the email opens should be tracked      - **is_transactional** (optional, defaults to `false`) - A boolean value to flag this email as a transactional email       #### 🔖 Important  **`is_transactional`** must only be set to `true` for transactional emails. Setting this to `true` for marketing emails will result in your API access being revoked and your account disabled.

typescript
interface relaySendPostParams {
  relayEmailRequest?: RelayEmailRequest;
}

async relaySendPost(params: relaySendPostParams): Promise<object>



| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| relayEmailRequest | RelayEmailRequest | ❌ |  |

**Response Type:** object

**Example:**
typescript
const response = await client.relayTransactionalEmails.relaySendPost({
  relayEmailRequest: 'example',
});


---
### SubscribersContactsApi


#### contactsGet

> Get contacts

Returns a list of contacts/subscribers on your account  This endpoint accepts three **optional** query parameters  - `email` — An email address to search for. If set, the endpoint only returns subscribers that have an identical email address.      - `per_page` — A limit on the number of records to return.      - `page` — The parameter serves as an offset on the number of records returned.

typescript
interface contactsGetParams {
  email?: string;
  perPage?: number;
  page?: number;
}

async contactsGet(params: contactsGetParams): Promise<object>



| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| email | string | ❌ | An email address to search for. |
| perPage | number | ❌ | How many items should be returned ahead. |
| page | number | ❌ | The offset for the items to be returned, helps in pagination. |

**Response Type:** object

**Example:**
typescript
const response = await client.subscribersContacts.contactsGet({
  email: <string>,
  perPage: 20,
  page: 1,
});


---
#### contactsPost

> Add a Contact

Add a new contact/subscriber to your mailing list

typescript
interface contactsPostParams {
  addContactRequest?: AddContactRequest;
}

async contactsPost(params: contactsPostParams): Promise<object>



| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| addContactRequest | AddContactRequest | ❌ |  |

**Response Type:** object

**Example:**
typescript
const response = await client.subscribersContacts.contactsPost({
  addContactRequest: 'example',
});


---
#### contactsUidAddTagPost

> Add tags to a contact

Add tags to an existing contact

typescript
interface contactsUidAddTagPostParams {
  uid: string;
  contactsUidAddTagPostRequest?: ContactsUidAddTagPostRequest;
}

async contactsUidAddTagPost(params: contactsUidAddTagPostParams): Promise<object>



| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| uid | string | ✅ | (Required) The uid of the contact to update with the tags. |
| contactsUidAddTagPostRequest | ContactsUidAddTagPostRequest | ❌ |  |

**Response Type:** object

**Example:**
typescript
const response = await client.subscribersContacts.contactsUidAddTagPost({
  uid: <string>,
  contactsUidAddTagPostRequest: 'example',
});


---
#### contactsUidDeletePost

> Delete a contact

Delete an existing contact

typescript
interface contactsUidDeletePostParams {
  uid: string;
  body?: object;
}

async contactsUidDeletePost(params: contactsUidDeletePostParams): Promise<object>



| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| uid | string | ✅ | (Required) The uid of the contact to delete. |
| body | object | ❌ |  |

**Response Type:** object

**Example:**
typescript
const response = await client.subscribersContacts.contactsUidDeletePost({
  uid: <string>,
  body: Object,
});


---
#### contactsUidGet

> Get a contact

Fetch detailed contact information for specified a contact

typescript
interface contactsUidGetParams {
  uid: string;
}

async contactsUidGet(params: contactsUidGetParams): Promise<object>



| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| uid | string | ✅ | (Required) The uid of the contact to get. |

**Response Type:** object

**Example:**
typescript
const response = await client.subscribersContacts.contactsUidGet({
  uid: <string>,
});


---
#### contactsUidPatch

> Update Contact

Update the specified subscriber/contact

typescript
interface contactsUidPatchParams {
  uid: string;
  contactUpdateRequest?: ContactUpdateRequest;
}

async contactsUidPatch(params: contactsUidPatchParams): Promise<object>



| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| uid | string | ✅ | (Required) The uid of the contact to update. |
| contactUpdateRequest | ContactUpdateRequest | ❌ |  |

**Response Type:** object

**Example:**
typescript
const response = await client.subscribersContacts.contactsUidPatch({
  uid: <string>,
  contactUpdateRequest: 'example',
});


---
#### contactsUidSubscribePatch

> Subscribe a contact

Subscribe a contact to a list

typescript
interface contactsUidSubscribePatchParams {
  uid: string;
  listUid?: string;
  body?: object;
}

async contactsUidSubscribePatch(params: contactsUidSubscribePatchParams): Promise<object>



| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| uid | string | ✅ | (Required) The uid of the contact to subscribe. |
| listUid | string | ❌ | (Required) The uid of the mail list to subscribe the contact. |
| body | object | ❌ |  |

**Response Type:** object

**Example:**
typescript
const response = await client.subscribersContacts.contactsUidSubscribePatch({
  uid: <string>,
  listUid: <string>,
  body: Object,
});


---
#### contactsUidUnsubscribePatch

> Unsubscribe a contact

Unsubscribe a contact from a list

typescript
interface contactsUidUnsubscribePatchParams {
  uid: string;
  listUid?: string;
  body?: object;
}

async contactsUidUnsubscribePatch(params: contactsUidUnsubscribePatchParams): Promise<object>



| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| uid | string | ✅ | (Required) The uid of the contact to unsubscribe. |
| listUid | string | ❌ | (Required) The uid of the mail list to unsubscribe the contact. |
| body | object | ❌ |  |

**Response Type:** object

**Example:**
typescript
const response = await client.subscribersContacts.contactsUidUnsubscribePatch({
  uid: <string>,
  listUid: <string>,
  body: Object,
});


---

## 🔧 Configuration

The SDK can be configured with the following options:

typescript
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


## 📋 Types

### AddContactRequest


typescript
interface AddContactRequest {
  listUid: string;
  email: string;
  firstName?: string;
  lastName?: string;
  tag?: string;
}


- listUid: Unique identifier for the mailing list.
- email: Subscriber\'s email address.
- firstName: Subscriber\'s first name.
- lastName: Subscriber\'s last name.
- tag: Tag to categorize the subscriber.

---
### CampaignCreateRequest


typescript
interface CampaignCreateRequest {
  mailListUid?: string;
  name?: string;
  subject?: string;
  fromEmail?: string;
  fromName?: string;
  replyTo?: string;
}


- mailListUid: Unique identifier for the mailing list
- name: Name of the campaign
- subject: Subject of the email campaign
- fromEmail: Sender\'s email address
- fromName: Sender\'s full name
- replyTo: Email address for replies

---
### CampaignUpdateRequest


typescript
interface CampaignUpdateRequest {
  name: string;
  subject: string;
  fromEmail: string;
  fromName: string;
  replyTo: string;
}



---
### ContactUpdateRequest


typescript
interface ContactUpdateRequest {
  email?: string;
  firstName?: string;
  lastName?: string;
}


- email: Updated email address
- firstName: Updated first name
- lastName: Updated last name

---
### ContactsUidAddTagPostRequest


typescript
interface ContactsUidAddTagPostRequest {
  tag?: string;
}


- tag: Tag for a contact.

---
### EmailAddressVerificationRequest


typescript
interface EmailAddressVerificationRequest {
  emails?: Array<string>;
}


- emails: List of email addresses to validate

---
### MailingListAddFieldRequest


typescript
interface MailingListAddFieldRequest {
  type: string;
  label: string;
  tag: string;
  defaultValue?: string;
}


- type: The type of input field to be created. This defines the behavior and appearance of the input.
- label: The label associated with the input field. This is typically displayed to the user as a descriptor.
- tag: A unique identifier or tag for the input field, useful for internal processing or referencing the field in the system.
- defaultValue: The default value pre-filled in the input field when it is rendered. This is optional and can be left blank.

---
### MailingListRequest


typescript
interface MailingListRequest {
  name: string;
  fromEmail: string;
  fromName: string;
  contact?: MailingListRequestContact;
}


- name: The name of the email template or campaign. This is used for internal identification and organization.
- fromEmail: The sender\'s email address that will appear in the \"From\" field of the email.
- fromName: The sender\'s name that will appear in the \"From\" field of the email.

---
### MailingListRequestContact

Contact details for the email sender or organization. Used for compliance with email regulations (e.g., CAN-SPAM).

typescript
interface MailingListRequestContact {
  email?: string;
  company?: string;
}


- email: The email address of the sender or organization. Usually used for replies or compliance purposes.
- company: The name of the organization sending the email.

---
### RelayEmailRequest


typescript
interface RelayEmailRequest {
  subject?: string;
  fromName?: string;
  fromEmail?: string;
  replyTo?: string;
  contentType?: string;
  recipients?: Array<string>;
  content?: string;
  preheader?: string;
  customHeaders?: object;
  deliveryAt?: number;
  attachments?: Array<string>;
  signDkim?: boolean;
  trackClick?: boolean;
  trackOpen?: boolean;
  isTransactional?: boolean;
}


- subject: The subject of the email
- fromName: The full name of the sender
- fromEmail: The email of the sender
- replyTo: The email to which replies should be sent
- contentType: The content type of the email body
- recipients: An array of email addresses to deliver this message
- content: The HTML or plain text content of the email
- preheader: The email preheader
- customHeaders: An object of custom headers to add to the email
- deliveryAt: The 10-digit unix timestamp of the date/time at which this email should be delivered
- attachments: An array of URLs of files to attach to the email
- signDkim: A boolean value on if a DKIM signature should be included in this message
- trackClick: A boolean value on if email clicks should be tracked
- trackOpen: A boolean value on if the email opens should be tracked
- isTransactional: A boolean value to flag this email as a transactional email

---

## 🎯 Examples

### Authentication
To authenticate with the Segnivo API, you must provide an API key when initializing the client. The API key can be passed via the `Configuration` object.

```typescript
import { MailingListsApi, Configuration } from 'segnivo-typescript-sdk';

// Initialize the client with your API key
const client = new MailingListsApi(new Configuration({
  apiKey: 'your_api_key_here', // Replace with your actual API key
  baseURL: 'https://api.segnivo.com', // Optional: Specify the base URL if needed
  timeout: 30000 // Optional: Set a request timeout in milliseconds
}));


### Error Handling
typescript
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



## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

## 🔗 Links

* [API Documentation](https://docs.segnivo.com)
* [NPM Package](https://www.npmjs.com/package/segnivo-typescript-sdk)
* [Support](https://support.segnivo.com)

---

<div align="center">
  <sub>Built with ❤️ by the Segnivo team</sub>
</div>