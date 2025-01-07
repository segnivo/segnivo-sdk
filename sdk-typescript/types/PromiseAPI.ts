import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { ObservableEmailAddressVerificationApi } from './ObservableAPI';

import { EmailAddressVerificationApiRequestFactory, EmailAddressVerificationApiResponseProcessor} from "../apis/EmailAddressVerificationApi";
export class PromiseEmailAddressVerificationApi {
    private api: ObservableEmailAddressVerificationApi

    public constructor(
        configuration: Configuration,
        requestFactory?: EmailAddressVerificationApiRequestFactory,
        responseProcessor?: EmailAddressVerificationApiResponseProcessor
    ) {
        this.api = new ObservableEmailAddressVerificationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * The `/validate-email` endpoint allows you to pass the email addresses you wish to verify and get a response on each of their status.  The following data should be passed in JSON format in the request body  - **emails** - An array/collection containing a minimum of one and maximum of fifty email addresses for verification/validation.
     * Email Address Verification Validation
     * @param [body]
     */
    public validateEmailPostWithHttpInfo(body?: any, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.validateEmailPostWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * The `/validate-email` endpoint allows you to pass the email addresses you wish to verify and get a response on each of their status.  The following data should be passed in JSON format in the request body  - **emails** - An array/collection containing a minimum of one and maximum of fifty email addresses for verification/validation.
     * Email Address Verification Validation
     * @param [body]
     */
    public validateEmailPost(body?: any, _options?: Configuration): Promise<any> {
        const result = this.api.validateEmailPost(body, _options);
        return result.toPromise();
    }


}



import { ObservableEmailCampaignsApi } from './ObservableAPI';

import { EmailCampaignsApiRequestFactory, EmailCampaignsApiResponseProcessor} from "../apis/EmailCampaignsApi";
export class PromiseEmailCampaignsApi {
    private api: ObservableEmailCampaignsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: EmailCampaignsApiRequestFactory,
        responseProcessor?: EmailCampaignsApiResponseProcessor
    ) {
        this.api = new ObservableEmailCampaignsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns a collection of all your campaigns
     * Get campaigns
     * @param [accept]
     */
    public messagesGetWithHttpInfo(accept?: string, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.messagesGetWithHttpInfo(accept, _options);
        return result.toPromise();
    }

    /**
     * Returns a collection of all your campaigns
     * Get campaigns
     * @param [accept]
     */
    public messagesGet(accept?: string, _options?: Configuration): Promise<any> {
        const result = this.api.messagesGet(accept, _options);
        return result.toPromise();
    }

    /**
     * Creat an email campaign for processing
     * Create a Campaign
     * @param [accept]
     * @param [body]
     */
    public messagesPostWithHttpInfo(accept?: string, body?: any, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.messagesPostWithHttpInfo(accept, body, _options);
        return result.toPromise();
    }

    /**
     * Creat an email campaign for processing
     * Create a Campaign
     * @param [accept]
     * @param [body]
     */
    public messagesPost(accept?: string, body?: any, _options?: Configuration): Promise<any> {
        const result = this.api.messagesPost(accept, body, _options);
        return result.toPromise();
    }

    /**
     * Delete the specified campaign
     * Delete a campaign
     * @param uid (Required) The uid of the campaign to delete
     * @param [accept]
     * @param [body]
     */
    public messagesUidDeletePostWithHttpInfo(uid: string, accept?: string, body?: any, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.messagesUidDeletePostWithHttpInfo(uid, accept, body, _options);
        return result.toPromise();
    }

    /**
     * Delete the specified campaign
     * Delete a campaign
     * @param uid (Required) The uid of the campaign to delete
     * @param [accept]
     * @param [body]
     */
    public messagesUidDeletePost(uid: string, accept?: string, body?: any, _options?: Configuration): Promise<any> {
        const result = this.api.messagesUidDeletePost(uid, accept, body, _options);
        return result.toPromise();
    }

    /**
     * Returns the specified campaign details
     * Get a campaign
     * @param uid (Required) The uid of the campaign to fetch
     * @param [accept]
     */
    public messagesUidGetWithHttpInfo(uid: string, accept?: string, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.messagesUidGetWithHttpInfo(uid, accept, _options);
        return result.toPromise();
    }

    /**
     * Returns the specified campaign details
     * Get a campaign
     * @param uid (Required) The uid of the campaign to fetch
     * @param [accept]
     */
    public messagesUidGet(uid: string, accept?: string, _options?: Configuration): Promise<any> {
        const result = this.api.messagesUidGet(uid, accept, _options);
        return result.toPromise();
    }

    /**
     * Updates a previously added campaign. Only Active and Paused campaigns can be updated.
     * Update Campaign
     * @param uid (Required) The uid of the campaign to update
     * @param [accept]
     * @param [body]
     */
    public messagesUidPatchWithHttpInfo(uid: string, accept?: string, body?: any, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.messagesUidPatchWithHttpInfo(uid, accept, body, _options);
        return result.toPromise();
    }

    /**
     * Updates a previously added campaign. Only Active and Paused campaigns can be updated.
     * Update Campaign
     * @param uid (Required) The uid of the campaign to update
     * @param [accept]
     * @param [body]
     */
    public messagesUidPatch(uid: string, accept?: string, body?: any, _options?: Configuration): Promise<any> {
        const result = this.api.messagesUidPatch(uid, accept, body, _options);
        return result.toPromise();
    }

    /**
     * Pause the specified campaign
     * Pause a campaign
     * @param uid (Required) The uid of the campaign to pause
     * @param [accept]
     * @param [body]
     */
    public messagesUidPausePostWithHttpInfo(uid: string, accept?: string, body?: any, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.messagesUidPausePostWithHttpInfo(uid, accept, body, _options);
        return result.toPromise();
    }

    /**
     * Pause the specified campaign
     * Pause a campaign
     * @param uid (Required) The uid of the campaign to pause
     * @param [accept]
     * @param [body]
     */
    public messagesUidPausePost(uid: string, accept?: string, body?: any, _options?: Configuration): Promise<any> {
        const result = this.api.messagesUidPausePost(uid, accept, body, _options);
        return result.toPromise();
    }

    /**
     * Resume delivery of the specified campaign
     * Resume the delivery of a campaign
     * @param uid (Required) The uid of the campaign to resume
     * @param [accept]
     * @param [body]
     */
    public messagesUidResumePostWithHttpInfo(uid: string, accept?: string, body?: any, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.messagesUidResumePostWithHttpInfo(uid, accept, body, _options);
        return result.toPromise();
    }

    /**
     * Resume delivery of the specified campaign
     * Resume the delivery of a campaign
     * @param uid (Required) The uid of the campaign to resume
     * @param [accept]
     * @param [body]
     */
    public messagesUidResumePost(uid: string, accept?: string, body?: any, _options?: Configuration): Promise<any> {
        const result = this.api.messagesUidResumePost(uid, accept, body, _options);
        return result.toPromise();
    }


}



import { ObservableMailingListsApi } from './ObservableAPI';

import { MailingListsApiRequestFactory, MailingListsApiResponseProcessor} from "../apis/MailingListsApi";
export class PromiseMailingListsApi {
    private api: ObservableMailingListsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MailingListsApiRequestFactory,
        responseProcessor?: MailingListsApiResponseProcessor
    ) {
        this.api = new ObservableMailingListsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns all your existing lists
     * Get mailing lists
     * @param [accept]
     */
    public listsGetWithHttpInfo(accept?: string, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.listsGetWithHttpInfo(accept, _options);
        return result.toPromise();
    }

    /**
     * Returns all your existing lists
     * Get mailing lists
     * @param [accept]
     */
    public listsGet(accept?: string, _options?: Configuration): Promise<any> {
        const result = this.api.listsGet(accept, _options);
        return result.toPromise();
    }

    /**
     * Create a new mailing list
     * Create a Mailing List
     * @param [accept]
     * @param [body]
     */
    public listsPostWithHttpInfo(accept?: string, body?: any, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.listsPostWithHttpInfo(accept, body, _options);
        return result.toPromise();
    }

    /**
     * Create a new mailing list
     * Create a Mailing List
     * @param [accept]
     * @param [body]
     */
    public listsPost(accept?: string, body?: any, _options?: Configuration): Promise<any> {
        const result = this.api.listsPost(accept, body, _options);
        return result.toPromise();
    }

    /**
     * Add a field to an existing list
     * Add a field
     * @param uid (Required) The uid of the list to add a field to.
     * @param [accept]
     * @param [body]
     */
    public listsUidAddFieldPostWithHttpInfo(uid: string, accept?: string, body?: any, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.listsUidAddFieldPostWithHttpInfo(uid, accept, body, _options);
        return result.toPromise();
    }

    /**
     * Add a field to an existing list
     * Add a field
     * @param uid (Required) The uid of the list to add a field to.
     * @param [accept]
     * @param [body]
     */
    public listsUidAddFieldPost(uid: string, accept?: string, body?: any, _options?: Configuration): Promise<any> {
        const result = this.api.listsUidAddFieldPost(uid, accept, body, _options);
        return result.toPromise();
    }

    /**
     * Delete an existing list
     * Delete a list
     * @param uid (Required) The uid of the list to delete.
     * @param [accept]
     * @param [body]
     */
    public listsUidDeletePostWithHttpInfo(uid: string, accept?: string, body?: any, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.listsUidDeletePostWithHttpInfo(uid, accept, body, _options);
        return result.toPromise();
    }

    /**
     * Delete an existing list
     * Delete a list
     * @param uid (Required) The uid of the list to delete.
     * @param [accept]
     * @param [body]
     */
    public listsUidDeletePost(uid: string, accept?: string, body?: any, _options?: Configuration): Promise<any> {
        const result = this.api.listsUidDeletePost(uid, accept, body, _options);
        return result.toPromise();
    }

    /**
     * Returns detailed information about a specified list
     * Get a list
     * @param uid (Required) The uid of the mailing list to fetch.
     * @param [accept]
     */
    public listsUidGetWithHttpInfo(uid: string, accept?: string, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.listsUidGetWithHttpInfo(uid, accept, _options);
        return result.toPromise();
    }

    /**
     * Returns detailed information about a specified list
     * Get a list
     * @param uid (Required) The uid of the mailing list to fetch.
     * @param [accept]
     */
    public listsUidGet(uid: string, accept?: string, _options?: Configuration): Promise<any> {
        const result = this.api.listsUidGet(uid, accept, _options);
        return result.toPromise();
    }

    /**
     * Update an existing mailing list
     * Update a List
     * @param uid (Required) The uid of the list to update.
     * @param [accept]
     * @param [body]
     */
    public listsUidPatchWithHttpInfo(uid: string, accept?: string, body?: any, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.listsUidPatchWithHttpInfo(uid, accept, body, _options);
        return result.toPromise();
    }

    /**
     * Update an existing mailing list
     * Update a List
     * @param uid (Required) The uid of the list to update.
     * @param [accept]
     * @param [body]
     */
    public listsUidPatch(uid: string, accept?: string, body?: any, _options?: Configuration): Promise<any> {
        const result = this.api.listsUidPatch(uid, accept, body, _options);
        return result.toPromise();
    }


}



import { ObservableRelayApi } from './ObservableAPI';

import { RelayApiRequestFactory, RelayApiResponseProcessor} from "../apis/RelayApi";
export class PromiseRelayApi {
    private api: ObservableRelayApi

    public constructor(
        configuration: Configuration,
        requestFactory?: RelayApiRequestFactory,
        responseProcessor?: RelayApiResponseProcessor
    ) {
        this.api = new ObservableRelayApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * The `/emails` endpoint lets you fetch one or more marketing/transactional email(s) from your `Segnivo Messaging` account and it accepts two **optional** parameters.  - The `id` string of the email to fetch provided as a path variable      - The `limit` on the number of records to fetch (if email id is not provided) as a query string parameter. This value defaults to 100 if not provided.
     * Fetch Emails
     * @param id The ID of the email to fetch
     * @param [limit] The number of records to fetch
     */
    public relayEmailsIdGetWithHttpInfo(id: string, limit?: number, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.relayEmailsIdGetWithHttpInfo(id, limit, _options);
        return result.toPromise();
    }

    /**
     * The `/emails` endpoint lets you fetch one or more marketing/transactional email(s) from your `Segnivo Messaging` account and it accepts two **optional** parameters.  - The `id` string of the email to fetch provided as a path variable      - The `limit` on the number of records to fetch (if email id is not provided) as a query string parameter. This value defaults to 100 if not provided.
     * Fetch Emails
     * @param id The ID of the email to fetch
     * @param [limit] The number of records to fetch
     */
    public relayEmailsIdGet(id: string, limit?: number, _options?: Configuration): Promise<any> {
        const result = this.api.relayEmailsIdGet(id, limit, _options);
        return result.toPromise();
    }

    /**
     * The `/raw` endpoint lets you send marketing and transactional emails from your `Segnivo Messaging` account by passing a raw RFC822 message to the `message` attribute in the request body.  The following parameters should be passed as a form data to the endpoint  - **message** - A raw RFC822 message      - **sign_dkim** (optional, defaults to `true`) - A boolean value on if a DKIM signature should be included in this message      - **track_click** (optional, defaults to `true`) - A boolean value on if email clicks should be tracked. If `true` links in the email will be rewritten to enable tracking      - **track_open** (optional, defaults to `true`) - A boolean value on if the email opens should be tracked      - **is_transactional** (optional, defaults to `false`) - A boolean value to flag this email as a transactional email
     * Send a Raw Email Message
     * @param [message]
     * @param [isTransactional]
     * @param [trackClick]
     * @param [trackOpen]
     * @param [signDkim]
     */
    public relayRawPostWithHttpInfo(message?: string, isTransactional?: boolean, trackClick?: boolean, trackOpen?: boolean, signDkim?: boolean, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.relayRawPostWithHttpInfo(message, isTransactional, trackClick, trackOpen, signDkim, _options);
        return result.toPromise();
    }

    /**
     * The `/raw` endpoint lets you send marketing and transactional emails from your `Segnivo Messaging` account by passing a raw RFC822 message to the `message` attribute in the request body.  The following parameters should be passed as a form data to the endpoint  - **message** - A raw RFC822 message      - **sign_dkim** (optional, defaults to `true`) - A boolean value on if a DKIM signature should be included in this message      - **track_click** (optional, defaults to `true`) - A boolean value on if email clicks should be tracked. If `true` links in the email will be rewritten to enable tracking      - **track_open** (optional, defaults to `true`) - A boolean value on if the email opens should be tracked      - **is_transactional** (optional, defaults to `false`) - A boolean value to flag this email as a transactional email
     * Send a Raw Email Message
     * @param [message]
     * @param [isTransactional]
     * @param [trackClick]
     * @param [trackOpen]
     * @param [signDkim]
     */
    public relayRawPost(message?: string, isTransactional?: boolean, trackClick?: boolean, trackOpen?: boolean, signDkim?: boolean, _options?: Configuration): Promise<any> {
        const result = this.api.relayRawPost(message, isTransactional, trackClick, trackOpen, signDkim, _options);
        return result.toPromise();
    }


}



import { ObservableRelayTransactionalEmailsApi } from './ObservableAPI';

import { RelayTransactionalEmailsApiRequestFactory, RelayTransactionalEmailsApiResponseProcessor} from "../apis/RelayTransactionalEmailsApi";
export class PromiseRelayTransactionalEmailsApi {
    private api: ObservableRelayTransactionalEmailsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: RelayTransactionalEmailsApiRequestFactory,
        responseProcessor?: RelayTransactionalEmailsApiResponseProcessor
    ) {
        this.api = new ObservableRelayTransactionalEmailsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * The `/send` endpoint lets you send marketing and transactional emails from your `Segnivo Messaging` account.  The following data should be passed in JSON format in the request body  - **subject** - The subject of the email      - **from_name** (optional) - The full name of the sender      - **from_email** - The email of the sender      - **reply_to** (optional) - The email to which replies should be sent      - **content_type** (optional, defaults to `html`) - The content type of the email body. Accepts either `text` or `html`      - **recipients** - An array/collection of email addresses to deliver this message, max. 50      - **content** - The HTML or plain text content of the email      - **preheader** (optional) - The email preheader      - **custom_headers** (optional) - An object of custom headers to add to the email      - **delivery_at** (optional) - The 10-digit unix timestamp of the date/time at which this email should be delivered      - **attachments** (optional) - An array/collection of the URLs of files to attach to the email      - **sign_dkim** (optional, defaults to `true`) - A boolean value on if a DKIM signature should be included in this message      - **track_click** (optional, defaults to `true`) - A boolean value on if email clicks should be tracked. If `true` links in the email will be rewritten to enable tracking      - **track_open** (optional, defaults to `true`) - A boolean value on if the email opens should be tracked      - **is_transactional** (optional, defaults to `false`) - A boolean value to flag this email as a transactional email       #### 🔖 Important  **`is_transactional`** must only be set to `true` for transactional emails. Setting this to `true` for marketing emails will result in your API access being revoked and your account disabled.
     * Send an Email
     * @param [body]
     */
    public relaySendPostWithHttpInfo(body?: any, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.relaySendPostWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * The `/send` endpoint lets you send marketing and transactional emails from your `Segnivo Messaging` account.  The following data should be passed in JSON format in the request body  - **subject** - The subject of the email      - **from_name** (optional) - The full name of the sender      - **from_email** - The email of the sender      - **reply_to** (optional) - The email to which replies should be sent      - **content_type** (optional, defaults to `html`) - The content type of the email body. Accepts either `text` or `html`      - **recipients** - An array/collection of email addresses to deliver this message, max. 50      - **content** - The HTML or plain text content of the email      - **preheader** (optional) - The email preheader      - **custom_headers** (optional) - An object of custom headers to add to the email      - **delivery_at** (optional) - The 10-digit unix timestamp of the date/time at which this email should be delivered      - **attachments** (optional) - An array/collection of the URLs of files to attach to the email      - **sign_dkim** (optional, defaults to `true`) - A boolean value on if a DKIM signature should be included in this message      - **track_click** (optional, defaults to `true`) - A boolean value on if email clicks should be tracked. If `true` links in the email will be rewritten to enable tracking      - **track_open** (optional, defaults to `true`) - A boolean value on if the email opens should be tracked      - **is_transactional** (optional, defaults to `false`) - A boolean value to flag this email as a transactional email       #### 🔖 Important  **`is_transactional`** must only be set to `true` for transactional emails. Setting this to `true` for marketing emails will result in your API access being revoked and your account disabled.
     * Send an Email
     * @param [body]
     */
    public relaySendPost(body?: any, _options?: Configuration): Promise<any> {
        const result = this.api.relaySendPost(body, _options);
        return result.toPromise();
    }


}



import { ObservableSubscribersContactsApi } from './ObservableAPI';

import { SubscribersContactsApiRequestFactory, SubscribersContactsApiResponseProcessor} from "../apis/SubscribersContactsApi";
export class PromiseSubscribersContactsApi {
    private api: ObservableSubscribersContactsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SubscribersContactsApiRequestFactory,
        responseProcessor?: SubscribersContactsApiResponseProcessor
    ) {
        this.api = new ObservableSubscribersContactsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns a list of contacts/subscribers on your account  This endpoint accepts three **optional** query parameters  - `email` — An email address to search for. If set, the endpoint only returns subscribers that have an identical email address.      - `per_page` — A limit on the number of records to return.      - `page` — The parameter serves as an offset on the number of records returned.
     * Get contacts
     * @param [accept]
     * @param [email] An email address to search for.
     * @param [perPage] How many items should be returned ahead.
     * @param [page] The offset for the items to be returned, helps in pagination.
     */
    public contactsGetWithHttpInfo(accept?: string, email?: string, perPage?: number, page?: number, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.contactsGetWithHttpInfo(accept, email, perPage, page, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of contacts/subscribers on your account  This endpoint accepts three **optional** query parameters  - `email` — An email address to search for. If set, the endpoint only returns subscribers that have an identical email address.      - `per_page` — A limit on the number of records to return.      - `page` — The parameter serves as an offset on the number of records returned.
     * Get contacts
     * @param [accept]
     * @param [email] An email address to search for.
     * @param [perPage] How many items should be returned ahead.
     * @param [page] The offset for the items to be returned, helps in pagination.
     */
    public contactsGet(accept?: string, email?: string, perPage?: number, page?: number, _options?: Configuration): Promise<any> {
        const result = this.api.contactsGet(accept, email, perPage, page, _options);
        return result.toPromise();
    }

    /**
     * Add a new contact/subscriber to your mailing list
     * Add a Contact
     * @param [accept]
     * @param [body]
     */
    public contactsPostWithHttpInfo(accept?: string, body?: any, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.contactsPostWithHttpInfo(accept, body, _options);
        return result.toPromise();
    }

    /**
     * Add a new contact/subscriber to your mailing list
     * Add a Contact
     * @param [accept]
     * @param [body]
     */
    public contactsPost(accept?: string, body?: any, _options?: Configuration): Promise<any> {
        const result = this.api.contactsPost(accept, body, _options);
        return result.toPromise();
    }

    /**
     * Add tags to an existing contact
     * Add tags to a contact
     * @param uid (Required) The uid of the contact to update with the tags.
     * @param [accept]
     * @param [body]
     */
    public contactsUidAddTagPostWithHttpInfo(uid: string, accept?: string, body?: any, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.contactsUidAddTagPostWithHttpInfo(uid, accept, body, _options);
        return result.toPromise();
    }

    /**
     * Add tags to an existing contact
     * Add tags to a contact
     * @param uid (Required) The uid of the contact to update with the tags.
     * @param [accept]
     * @param [body]
     */
    public contactsUidAddTagPost(uid: string, accept?: string, body?: any, _options?: Configuration): Promise<any> {
        const result = this.api.contactsUidAddTagPost(uid, accept, body, _options);
        return result.toPromise();
    }

    /**
     * Delete an existing contact
     * Delete a contact
     * @param uid (Required) The uid of the contact to delete.
     * @param [accept]
     * @param [body]
     */
    public contactsUidDeletePostWithHttpInfo(uid: string, accept?: string, body?: any, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.contactsUidDeletePostWithHttpInfo(uid, accept, body, _options);
        return result.toPromise();
    }

    /**
     * Delete an existing contact
     * Delete a contact
     * @param uid (Required) The uid of the contact to delete.
     * @param [accept]
     * @param [body]
     */
    public contactsUidDeletePost(uid: string, accept?: string, body?: any, _options?: Configuration): Promise<any> {
        const result = this.api.contactsUidDeletePost(uid, accept, body, _options);
        return result.toPromise();
    }

    /**
     * Fetch detailed contact information for specified a contact
     * Get a contact
     * @param uid (Required) The uid of the contact to get.
     * @param [accept]
     */
    public contactsUidGetWithHttpInfo(uid: string, accept?: string, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.contactsUidGetWithHttpInfo(uid, accept, _options);
        return result.toPromise();
    }

    /**
     * Fetch detailed contact information for specified a contact
     * Get a contact
     * @param uid (Required) The uid of the contact to get.
     * @param [accept]
     */
    public contactsUidGet(uid: string, accept?: string, _options?: Configuration): Promise<any> {
        const result = this.api.contactsUidGet(uid, accept, _options);
        return result.toPromise();
    }

    /**
     * Update the specified subscriber/contact
     * Update Contact
     * @param uid (Required) The uid of the contact to update.
     * @param [accept]
     * @param [body]
     */
    public contactsUidPatchWithHttpInfo(uid: string, accept?: string, body?: any, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.contactsUidPatchWithHttpInfo(uid, accept, body, _options);
        return result.toPromise();
    }

    /**
     * Update the specified subscriber/contact
     * Update Contact
     * @param uid (Required) The uid of the contact to update.
     * @param [accept]
     * @param [body]
     */
    public contactsUidPatch(uid: string, accept?: string, body?: any, _options?: Configuration): Promise<any> {
        const result = this.api.contactsUidPatch(uid, accept, body, _options);
        return result.toPromise();
    }

    /**
     * Subscribe a contact to a list
     * Subscribe a contact
     * @param uid (Required) The uid of the contact to subscribe.
     * @param [accept]
     * @param [listUid] (Required) The uid of the mail list to subscribe the contact.
     * @param [body]
     */
    public contactsUidSubscribePatchWithHttpInfo(uid: string, accept?: string, listUid?: string, body?: any, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.contactsUidSubscribePatchWithHttpInfo(uid, accept, listUid, body, _options);
        return result.toPromise();
    }

    /**
     * Subscribe a contact to a list
     * Subscribe a contact
     * @param uid (Required) The uid of the contact to subscribe.
     * @param [accept]
     * @param [listUid] (Required) The uid of the mail list to subscribe the contact.
     * @param [body]
     */
    public contactsUidSubscribePatch(uid: string, accept?: string, listUid?: string, body?: any, _options?: Configuration): Promise<any> {
        const result = this.api.contactsUidSubscribePatch(uid, accept, listUid, body, _options);
        return result.toPromise();
    }

    /**
     * Unsubscribe a contact from a list
     * Unsubscribe a contact
     * @param uid (Required) The uid of the contact to unsubscribe.
     * @param [accept]
     * @param [listUid] (Required) The uid of the mail list to unsubscribe the contact.
     * @param [body]
     */
    public contactsUidUnsubscribePatchWithHttpInfo(uid: string, accept?: string, listUid?: string, body?: any, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.contactsUidUnsubscribePatchWithHttpInfo(uid, accept, listUid, body, _options);
        return result.toPromise();
    }

    /**
     * Unsubscribe a contact from a list
     * Unsubscribe a contact
     * @param uid (Required) The uid of the contact to unsubscribe.
     * @param [accept]
     * @param [listUid] (Required) The uid of the mail list to unsubscribe the contact.
     * @param [body]
     */
    public contactsUidUnsubscribePatch(uid: string, accept?: string, listUid?: string, body?: any, _options?: Configuration): Promise<any> {
        const result = this.api.contactsUidUnsubscribePatch(uid, accept, listUid, body, _options);
        return result.toPromise();
    }


}



