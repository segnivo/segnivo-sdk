import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'


import { ObservableEmailAddressVerificationApi } from "./ObservableAPI";
import { EmailAddressVerificationApiRequestFactory, EmailAddressVerificationApiResponseProcessor} from "../apis/EmailAddressVerificationApi";

export interface EmailAddressVerificationApiValidateEmailPostRequest {
    /**
     * 
     * @type any
     * @memberof EmailAddressVerificationApivalidateEmailPost
     */
    body?: any
}

export class ObjectEmailAddressVerificationApi {
    private api: ObservableEmailAddressVerificationApi

    public constructor(configuration: Configuration, requestFactory?: EmailAddressVerificationApiRequestFactory, responseProcessor?: EmailAddressVerificationApiResponseProcessor) {
        this.api = new ObservableEmailAddressVerificationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * The `/validate-email` endpoint allows you to pass the email addresses you wish to verify and get a response on each of their status.  The following data should be passed in JSON format in the request body  - **emails** - An array/collection containing a minimum of one and maximum of fifty email addresses for verification/validation.
     * Email Address Verification Validation
     * @param param the request object
     */
    public validateEmailPostWithHttpInfo(param: EmailAddressVerificationApiValidateEmailPostRequest = {}, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.validateEmailPostWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * The `/validate-email` endpoint allows you to pass the email addresses you wish to verify and get a response on each of their status.  The following data should be passed in JSON format in the request body  - **emails** - An array/collection containing a minimum of one and maximum of fifty email addresses for verification/validation.
     * Email Address Verification Validation
     * @param param the request object
     */
    public validateEmailPost(param: EmailAddressVerificationApiValidateEmailPostRequest = {}, options?: Configuration): Promise<any> {
        return this.api.validateEmailPost(param.body,  options).toPromise();
    }

}

import { ObservableEmailCampaignsApi } from "./ObservableAPI";
import { EmailCampaignsApiRequestFactory, EmailCampaignsApiResponseProcessor} from "../apis/EmailCampaignsApi";

export interface EmailCampaignsApiMessagesGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof EmailCampaignsApimessagesGet
     */
    accept?: string
}

export interface EmailCampaignsApiMessagesPostRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof EmailCampaignsApimessagesPost
     */
    accept?: string
    /**
     * 
     * @type any
     * @memberof EmailCampaignsApimessagesPost
     */
    body?: any
}

export interface EmailCampaignsApiMessagesUidDeletePostRequest {
    /**
     * (Required) The uid of the campaign to delete
     * Defaults to: undefined
     * @type string
     * @memberof EmailCampaignsApimessagesUidDeletePost
     */
    uid: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof EmailCampaignsApimessagesUidDeletePost
     */
    accept?: string
    /**
     * 
     * @type any
     * @memberof EmailCampaignsApimessagesUidDeletePost
     */
    body?: any
}

export interface EmailCampaignsApiMessagesUidGetRequest {
    /**
     * (Required) The uid of the campaign to fetch
     * Defaults to: undefined
     * @type string
     * @memberof EmailCampaignsApimessagesUidGet
     */
    uid: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof EmailCampaignsApimessagesUidGet
     */
    accept?: string
}

export interface EmailCampaignsApiMessagesUidPatchRequest {
    /**
     * (Required) The uid of the campaign to update
     * Defaults to: undefined
     * @type string
     * @memberof EmailCampaignsApimessagesUidPatch
     */
    uid: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof EmailCampaignsApimessagesUidPatch
     */
    accept?: string
    /**
     * 
     * @type any
     * @memberof EmailCampaignsApimessagesUidPatch
     */
    body?: any
}

export interface EmailCampaignsApiMessagesUidPausePostRequest {
    /**
     * (Required) The uid of the campaign to pause
     * Defaults to: undefined
     * @type string
     * @memberof EmailCampaignsApimessagesUidPausePost
     */
    uid: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof EmailCampaignsApimessagesUidPausePost
     */
    accept?: string
    /**
     * 
     * @type any
     * @memberof EmailCampaignsApimessagesUidPausePost
     */
    body?: any
}

export interface EmailCampaignsApiMessagesUidResumePostRequest {
    /**
     * (Required) The uid of the campaign to resume
     * Defaults to: undefined
     * @type string
     * @memberof EmailCampaignsApimessagesUidResumePost
     */
    uid: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof EmailCampaignsApimessagesUidResumePost
     */
    accept?: string
    /**
     * 
     * @type any
     * @memberof EmailCampaignsApimessagesUidResumePost
     */
    body?: any
}

export class ObjectEmailCampaignsApi {
    private api: ObservableEmailCampaignsApi

    public constructor(configuration: Configuration, requestFactory?: EmailCampaignsApiRequestFactory, responseProcessor?: EmailCampaignsApiResponseProcessor) {
        this.api = new ObservableEmailCampaignsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns a collection of all your campaigns
     * Get campaigns
     * @param param the request object
     */
    public messagesGetWithHttpInfo(param: EmailCampaignsApiMessagesGetRequest = {}, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.messagesGetWithHttpInfo(param.accept,  options).toPromise();
    }

    /**
     * Returns a collection of all your campaigns
     * Get campaigns
     * @param param the request object
     */
    public messagesGet(param: EmailCampaignsApiMessagesGetRequest = {}, options?: Configuration): Promise<any> {
        return this.api.messagesGet(param.accept,  options).toPromise();
    }

    /**
     * Creat an email campaign for processing
     * Create a Campaign
     * @param param the request object
     */
    public messagesPostWithHttpInfo(param: EmailCampaignsApiMessagesPostRequest = {}, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.messagesPostWithHttpInfo(param.accept, param.body,  options).toPromise();
    }

    /**
     * Creat an email campaign for processing
     * Create a Campaign
     * @param param the request object
     */
    public messagesPost(param: EmailCampaignsApiMessagesPostRequest = {}, options?: Configuration): Promise<any> {
        return this.api.messagesPost(param.accept, param.body,  options).toPromise();
    }

    /**
     * Delete the specified campaign
     * Delete a campaign
     * @param param the request object
     */
    public messagesUidDeletePostWithHttpInfo(param: EmailCampaignsApiMessagesUidDeletePostRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.messagesUidDeletePostWithHttpInfo(param.uid, param.accept, param.body,  options).toPromise();
    }

    /**
     * Delete the specified campaign
     * Delete a campaign
     * @param param the request object
     */
    public messagesUidDeletePost(param: EmailCampaignsApiMessagesUidDeletePostRequest, options?: Configuration): Promise<any> {
        return this.api.messagesUidDeletePost(param.uid, param.accept, param.body,  options).toPromise();
    }

    /**
     * Returns the specified campaign details
     * Get a campaign
     * @param param the request object
     */
    public messagesUidGetWithHttpInfo(param: EmailCampaignsApiMessagesUidGetRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.messagesUidGetWithHttpInfo(param.uid, param.accept,  options).toPromise();
    }

    /**
     * Returns the specified campaign details
     * Get a campaign
     * @param param the request object
     */
    public messagesUidGet(param: EmailCampaignsApiMessagesUidGetRequest, options?: Configuration): Promise<any> {
        return this.api.messagesUidGet(param.uid, param.accept,  options).toPromise();
    }

    /**
     * Updates a previously added campaign. Only Active and Paused campaigns can be updated.
     * Update Campaign
     * @param param the request object
     */
    public messagesUidPatchWithHttpInfo(param: EmailCampaignsApiMessagesUidPatchRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.messagesUidPatchWithHttpInfo(param.uid, param.accept, param.body,  options).toPromise();
    }

    /**
     * Updates a previously added campaign. Only Active and Paused campaigns can be updated.
     * Update Campaign
     * @param param the request object
     */
    public messagesUidPatch(param: EmailCampaignsApiMessagesUidPatchRequest, options?: Configuration): Promise<any> {
        return this.api.messagesUidPatch(param.uid, param.accept, param.body,  options).toPromise();
    }

    /**
     * Pause the specified campaign
     * Pause a campaign
     * @param param the request object
     */
    public messagesUidPausePostWithHttpInfo(param: EmailCampaignsApiMessagesUidPausePostRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.messagesUidPausePostWithHttpInfo(param.uid, param.accept, param.body,  options).toPromise();
    }

    /**
     * Pause the specified campaign
     * Pause a campaign
     * @param param the request object
     */
    public messagesUidPausePost(param: EmailCampaignsApiMessagesUidPausePostRequest, options?: Configuration): Promise<any> {
        return this.api.messagesUidPausePost(param.uid, param.accept, param.body,  options).toPromise();
    }

    /**
     * Resume delivery of the specified campaign
     * Resume the delivery of a campaign
     * @param param the request object
     */
    public messagesUidResumePostWithHttpInfo(param: EmailCampaignsApiMessagesUidResumePostRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.messagesUidResumePostWithHttpInfo(param.uid, param.accept, param.body,  options).toPromise();
    }

    /**
     * Resume delivery of the specified campaign
     * Resume the delivery of a campaign
     * @param param the request object
     */
    public messagesUidResumePost(param: EmailCampaignsApiMessagesUidResumePostRequest, options?: Configuration): Promise<any> {
        return this.api.messagesUidResumePost(param.uid, param.accept, param.body,  options).toPromise();
    }

}

import { ObservableMailingListsApi } from "./ObservableAPI";
import { MailingListsApiRequestFactory, MailingListsApiResponseProcessor} from "../apis/MailingListsApi";

export interface MailingListsApiListsGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof MailingListsApilistsGet
     */
    accept?: string
}

export interface MailingListsApiListsPostRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof MailingListsApilistsPost
     */
    accept?: string
    /**
     * 
     * @type any
     * @memberof MailingListsApilistsPost
     */
    body?: any
}

export interface MailingListsApiListsUidAddFieldPostRequest {
    /**
     * (Required) The uid of the list to add a field to.
     * Defaults to: undefined
     * @type string
     * @memberof MailingListsApilistsUidAddFieldPost
     */
    uid: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof MailingListsApilistsUidAddFieldPost
     */
    accept?: string
    /**
     * 
     * @type any
     * @memberof MailingListsApilistsUidAddFieldPost
     */
    body?: any
}

export interface MailingListsApiListsUidDeletePostRequest {
    /**
     * (Required) The uid of the list to delete.
     * Defaults to: undefined
     * @type string
     * @memberof MailingListsApilistsUidDeletePost
     */
    uid: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof MailingListsApilistsUidDeletePost
     */
    accept?: string
    /**
     * 
     * @type any
     * @memberof MailingListsApilistsUidDeletePost
     */
    body?: any
}

export interface MailingListsApiListsUidGetRequest {
    /**
     * (Required) The uid of the mailing list to fetch.
     * Defaults to: undefined
     * @type string
     * @memberof MailingListsApilistsUidGet
     */
    uid: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof MailingListsApilistsUidGet
     */
    accept?: string
}

export interface MailingListsApiListsUidPatchRequest {
    /**
     * (Required) The uid of the list to update.
     * Defaults to: undefined
     * @type string
     * @memberof MailingListsApilistsUidPatch
     */
    uid: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof MailingListsApilistsUidPatch
     */
    accept?: string
    /**
     * 
     * @type any
     * @memberof MailingListsApilistsUidPatch
     */
    body?: any
}

export class ObjectMailingListsApi {
    private api: ObservableMailingListsApi

    public constructor(configuration: Configuration, requestFactory?: MailingListsApiRequestFactory, responseProcessor?: MailingListsApiResponseProcessor) {
        this.api = new ObservableMailingListsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns all your existing lists
     * Get mailing lists
     * @param param the request object
     */
    public listsGetWithHttpInfo(param: MailingListsApiListsGetRequest = {}, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.listsGetWithHttpInfo(param.accept,  options).toPromise();
    }

    /**
     * Returns all your existing lists
     * Get mailing lists
     * @param param the request object
     */
    public listsGet(param: MailingListsApiListsGetRequest = {}, options?: Configuration): Promise<any> {
        return this.api.listsGet(param.accept,  options).toPromise();
    }

    /**
     * Create a new mailing list
     * Create a Mailing List
     * @param param the request object
     */
    public listsPostWithHttpInfo(param: MailingListsApiListsPostRequest = {}, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.listsPostWithHttpInfo(param.accept, param.body,  options).toPromise();
    }

    /**
     * Create a new mailing list
     * Create a Mailing List
     * @param param the request object
     */
    public listsPost(param: MailingListsApiListsPostRequest = {}, options?: Configuration): Promise<any> {
        return this.api.listsPost(param.accept, param.body,  options).toPromise();
    }

    /**
     * Add a field to an existing list
     * Add a field
     * @param param the request object
     */
    public listsUidAddFieldPostWithHttpInfo(param: MailingListsApiListsUidAddFieldPostRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.listsUidAddFieldPostWithHttpInfo(param.uid, param.accept, param.body,  options).toPromise();
    }

    /**
     * Add a field to an existing list
     * Add a field
     * @param param the request object
     */
    public listsUidAddFieldPost(param: MailingListsApiListsUidAddFieldPostRequest, options?: Configuration): Promise<any> {
        return this.api.listsUidAddFieldPost(param.uid, param.accept, param.body,  options).toPromise();
    }

    /**
     * Delete an existing list
     * Delete a list
     * @param param the request object
     */
    public listsUidDeletePostWithHttpInfo(param: MailingListsApiListsUidDeletePostRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.listsUidDeletePostWithHttpInfo(param.uid, param.accept, param.body,  options).toPromise();
    }

    /**
     * Delete an existing list
     * Delete a list
     * @param param the request object
     */
    public listsUidDeletePost(param: MailingListsApiListsUidDeletePostRequest, options?: Configuration): Promise<any> {
        return this.api.listsUidDeletePost(param.uid, param.accept, param.body,  options).toPromise();
    }

    /**
     * Returns detailed information about a specified list
     * Get a list
     * @param param the request object
     */
    public listsUidGetWithHttpInfo(param: MailingListsApiListsUidGetRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.listsUidGetWithHttpInfo(param.uid, param.accept,  options).toPromise();
    }

    /**
     * Returns detailed information about a specified list
     * Get a list
     * @param param the request object
     */
    public listsUidGet(param: MailingListsApiListsUidGetRequest, options?: Configuration): Promise<any> {
        return this.api.listsUidGet(param.uid, param.accept,  options).toPromise();
    }

    /**
     * Update an existing mailing list
     * Update a List
     * @param param the request object
     */
    public listsUidPatchWithHttpInfo(param: MailingListsApiListsUidPatchRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.listsUidPatchWithHttpInfo(param.uid, param.accept, param.body,  options).toPromise();
    }

    /**
     * Update an existing mailing list
     * Update a List
     * @param param the request object
     */
    public listsUidPatch(param: MailingListsApiListsUidPatchRequest, options?: Configuration): Promise<any> {
        return this.api.listsUidPatch(param.uid, param.accept, param.body,  options).toPromise();
    }

}

import { ObservableRelayApi } from "./ObservableAPI";
import { RelayApiRequestFactory, RelayApiResponseProcessor} from "../apis/RelayApi";

export interface RelayApiRelayEmailsIdGetRequest {
    /**
     * The ID of the email to fetch
     * Defaults to: undefined
     * @type string
     * @memberof RelayApirelayEmailsIdGet
     */
    id: string
    /**
     * The number of records to fetch
     * Defaults to: undefined
     * @type number
     * @memberof RelayApirelayEmailsIdGet
     */
    limit?: number
}

export interface RelayApiRelayRawPostRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RelayApirelayRawPost
     */
    message?: string
    /**
     * 
     * Defaults to: undefined
     * @type boolean
     * @memberof RelayApirelayRawPost
     */
    isTransactional?: boolean
    /**
     * 
     * Defaults to: undefined
     * @type boolean
     * @memberof RelayApirelayRawPost
     */
    trackClick?: boolean
    /**
     * 
     * Defaults to: undefined
     * @type boolean
     * @memberof RelayApirelayRawPost
     */
    trackOpen?: boolean
    /**
     * 
     * Defaults to: undefined
     * @type boolean
     * @memberof RelayApirelayRawPost
     */
    signDkim?: boolean
}

export class ObjectRelayApi {
    private api: ObservableRelayApi

    public constructor(configuration: Configuration, requestFactory?: RelayApiRequestFactory, responseProcessor?: RelayApiResponseProcessor) {
        this.api = new ObservableRelayApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * The `/emails` endpoint lets you fetch one or more marketing/transactional email(s) from your `Segnivo Messaging` account and it accepts two **optional** parameters.  - The `id` string of the email to fetch provided as a path variable      - The `limit` on the number of records to fetch (if email id is not provided) as a query string parameter. This value defaults to 100 if not provided.
     * Fetch Emails
     * @param param the request object
     */
    public relayEmailsIdGetWithHttpInfo(param: RelayApiRelayEmailsIdGetRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.relayEmailsIdGetWithHttpInfo(param.id, param.limit,  options).toPromise();
    }

    /**
     * The `/emails` endpoint lets you fetch one or more marketing/transactional email(s) from your `Segnivo Messaging` account and it accepts two **optional** parameters.  - The `id` string of the email to fetch provided as a path variable      - The `limit` on the number of records to fetch (if email id is not provided) as a query string parameter. This value defaults to 100 if not provided.
     * Fetch Emails
     * @param param the request object
     */
    public relayEmailsIdGet(param: RelayApiRelayEmailsIdGetRequest, options?: Configuration): Promise<any> {
        return this.api.relayEmailsIdGet(param.id, param.limit,  options).toPromise();
    }

    /**
     * The `/raw` endpoint lets you send marketing and transactional emails from your `Segnivo Messaging` account by passing a raw RFC822 message to the `message` attribute in the request body.  The following parameters should be passed as a form data to the endpoint  - **message** - A raw RFC822 message      - **sign_dkim** (optional, defaults to `true`) - A boolean value on if a DKIM signature should be included in this message      - **track_click** (optional, defaults to `true`) - A boolean value on if email clicks should be tracked. If `true` links in the email will be rewritten to enable tracking      - **track_open** (optional, defaults to `true`) - A boolean value on if the email opens should be tracked      - **is_transactional** (optional, defaults to `false`) - A boolean value to flag this email as a transactional email
     * Send a Raw Email Message
     * @param param the request object
     */
    public relayRawPostWithHttpInfo(param: RelayApiRelayRawPostRequest = {}, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.relayRawPostWithHttpInfo(param.message, param.isTransactional, param.trackClick, param.trackOpen, param.signDkim,  options).toPromise();
    }

    /**
     * The `/raw` endpoint lets you send marketing and transactional emails from your `Segnivo Messaging` account by passing a raw RFC822 message to the `message` attribute in the request body.  The following parameters should be passed as a form data to the endpoint  - **message** - A raw RFC822 message      - **sign_dkim** (optional, defaults to `true`) - A boolean value on if a DKIM signature should be included in this message      - **track_click** (optional, defaults to `true`) - A boolean value on if email clicks should be tracked. If `true` links in the email will be rewritten to enable tracking      - **track_open** (optional, defaults to `true`) - A boolean value on if the email opens should be tracked      - **is_transactional** (optional, defaults to `false`) - A boolean value to flag this email as a transactional email
     * Send a Raw Email Message
     * @param param the request object
     */
    public relayRawPost(param: RelayApiRelayRawPostRequest = {}, options?: Configuration): Promise<any> {
        return this.api.relayRawPost(param.message, param.isTransactional, param.trackClick, param.trackOpen, param.signDkim,  options).toPromise();
    }

}

import { ObservableRelayTransactionalEmailsApi } from "./ObservableAPI";
import { RelayTransactionalEmailsApiRequestFactory, RelayTransactionalEmailsApiResponseProcessor} from "../apis/RelayTransactionalEmailsApi";

export interface RelayTransactionalEmailsApiRelaySendPostRequest {
    /**
     * 
     * @type any
     * @memberof RelayTransactionalEmailsApirelaySendPost
     */
    body?: any
}

export class ObjectRelayTransactionalEmailsApi {
    private api: ObservableRelayTransactionalEmailsApi

    public constructor(configuration: Configuration, requestFactory?: RelayTransactionalEmailsApiRequestFactory, responseProcessor?: RelayTransactionalEmailsApiResponseProcessor) {
        this.api = new ObservableRelayTransactionalEmailsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * The `/send` endpoint lets you send marketing and transactional emails from your `Segnivo Messaging` account.  The following data should be passed in JSON format in the request body  - **subject** - The subject of the email      - **from_name** (optional) - The full name of the sender      - **from_email** - The email of the sender      - **reply_to** (optional) - The email to which replies should be sent      - **content_type** (optional, defaults to `html`) - The content type of the email body. Accepts either `text` or `html`      - **recipients** - An array/collection of email addresses to deliver this message, max. 50      - **content** - The HTML or plain text content of the email      - **preheader** (optional) - The email preheader      - **custom_headers** (optional) - An object of custom headers to add to the email      - **delivery_at** (optional) - The 10-digit unix timestamp of the date/time at which this email should be delivered      - **attachments** (optional) - An array/collection of the URLs of files to attach to the email      - **sign_dkim** (optional, defaults to `true`) - A boolean value on if a DKIM signature should be included in this message      - **track_click** (optional, defaults to `true`) - A boolean value on if email clicks should be tracked. If `true` links in the email will be rewritten to enable tracking      - **track_open** (optional, defaults to `true`) - A boolean value on if the email opens should be tracked      - **is_transactional** (optional, defaults to `false`) - A boolean value to flag this email as a transactional email       #### 🔖 Important  **`is_transactional`** must only be set to `true` for transactional emails. Setting this to `true` for marketing emails will result in your API access being revoked and your account disabled.
     * Send an Email
     * @param param the request object
     */
    public relaySendPostWithHttpInfo(param: RelayTransactionalEmailsApiRelaySendPostRequest = {}, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.relaySendPostWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * The `/send` endpoint lets you send marketing and transactional emails from your `Segnivo Messaging` account.  The following data should be passed in JSON format in the request body  - **subject** - The subject of the email      - **from_name** (optional) - The full name of the sender      - **from_email** - The email of the sender      - **reply_to** (optional) - The email to which replies should be sent      - **content_type** (optional, defaults to `html`) - The content type of the email body. Accepts either `text` or `html`      - **recipients** - An array/collection of email addresses to deliver this message, max. 50      - **content** - The HTML or plain text content of the email      - **preheader** (optional) - The email preheader      - **custom_headers** (optional) - An object of custom headers to add to the email      - **delivery_at** (optional) - The 10-digit unix timestamp of the date/time at which this email should be delivered      - **attachments** (optional) - An array/collection of the URLs of files to attach to the email      - **sign_dkim** (optional, defaults to `true`) - A boolean value on if a DKIM signature should be included in this message      - **track_click** (optional, defaults to `true`) - A boolean value on if email clicks should be tracked. If `true` links in the email will be rewritten to enable tracking      - **track_open** (optional, defaults to `true`) - A boolean value on if the email opens should be tracked      - **is_transactional** (optional, defaults to `false`) - A boolean value to flag this email as a transactional email       #### 🔖 Important  **`is_transactional`** must only be set to `true` for transactional emails. Setting this to `true` for marketing emails will result in your API access being revoked and your account disabled.
     * Send an Email
     * @param param the request object
     */
    public relaySendPost(param: RelayTransactionalEmailsApiRelaySendPostRequest = {}, options?: Configuration): Promise<any> {
        return this.api.relaySendPost(param.body,  options).toPromise();
    }

}

import { ObservableSubscribersContactsApi } from "./ObservableAPI";
import { SubscribersContactsApiRequestFactory, SubscribersContactsApiResponseProcessor} from "../apis/SubscribersContactsApi";

export interface SubscribersContactsApiContactsGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof SubscribersContactsApicontactsGet
     */
    accept?: string
    /**
     * An email address to search for.
     * Defaults to: undefined
     * @type string
     * @memberof SubscribersContactsApicontactsGet
     */
    email?: string
    /**
     * How many items should be returned ahead.
     * Defaults to: undefined
     * @type number
     * @memberof SubscribersContactsApicontactsGet
     */
    perPage?: number
    /**
     * The offset for the items to be returned, helps in pagination.
     * Defaults to: undefined
     * @type number
     * @memberof SubscribersContactsApicontactsGet
     */
    page?: number
}

export interface SubscribersContactsApiContactsPostRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof SubscribersContactsApicontactsPost
     */
    accept?: string
    /**
     * 
     * @type any
     * @memberof SubscribersContactsApicontactsPost
     */
    body?: any
}

export interface SubscribersContactsApiContactsUidAddTagPostRequest {
    /**
     * (Required) The uid of the contact to update with the tags.
     * Defaults to: undefined
     * @type string
     * @memberof SubscribersContactsApicontactsUidAddTagPost
     */
    uid: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof SubscribersContactsApicontactsUidAddTagPost
     */
    accept?: string
    /**
     * 
     * @type any
     * @memberof SubscribersContactsApicontactsUidAddTagPost
     */
    body?: any
}

export interface SubscribersContactsApiContactsUidDeletePostRequest {
    /**
     * (Required) The uid of the contact to delete.
     * Defaults to: undefined
     * @type string
     * @memberof SubscribersContactsApicontactsUidDeletePost
     */
    uid: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof SubscribersContactsApicontactsUidDeletePost
     */
    accept?: string
    /**
     * 
     * @type any
     * @memberof SubscribersContactsApicontactsUidDeletePost
     */
    body?: any
}

export interface SubscribersContactsApiContactsUidGetRequest {
    /**
     * (Required) The uid of the contact to get.
     * Defaults to: undefined
     * @type string
     * @memberof SubscribersContactsApicontactsUidGet
     */
    uid: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof SubscribersContactsApicontactsUidGet
     */
    accept?: string
}

export interface SubscribersContactsApiContactsUidPatchRequest {
    /**
     * (Required) The uid of the contact to update.
     * Defaults to: undefined
     * @type string
     * @memberof SubscribersContactsApicontactsUidPatch
     */
    uid: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof SubscribersContactsApicontactsUidPatch
     */
    accept?: string
    /**
     * 
     * @type any
     * @memberof SubscribersContactsApicontactsUidPatch
     */
    body?: any
}

export interface SubscribersContactsApiContactsUidSubscribePatchRequest {
    /**
     * (Required) The uid of the contact to subscribe.
     * Defaults to: undefined
     * @type string
     * @memberof SubscribersContactsApicontactsUidSubscribePatch
     */
    uid: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof SubscribersContactsApicontactsUidSubscribePatch
     */
    accept?: string
    /**
     * (Required) The uid of the mail list to subscribe the contact.
     * Defaults to: undefined
     * @type string
     * @memberof SubscribersContactsApicontactsUidSubscribePatch
     */
    listUid?: string
    /**
     * 
     * @type any
     * @memberof SubscribersContactsApicontactsUidSubscribePatch
     */
    body?: any
}

export interface SubscribersContactsApiContactsUidUnsubscribePatchRequest {
    /**
     * (Required) The uid of the contact to unsubscribe.
     * Defaults to: undefined
     * @type string
     * @memberof SubscribersContactsApicontactsUidUnsubscribePatch
     */
    uid: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof SubscribersContactsApicontactsUidUnsubscribePatch
     */
    accept?: string
    /**
     * (Required) The uid of the mail list to unsubscribe the contact.
     * Defaults to: undefined
     * @type string
     * @memberof SubscribersContactsApicontactsUidUnsubscribePatch
     */
    listUid?: string
    /**
     * 
     * @type any
     * @memberof SubscribersContactsApicontactsUidUnsubscribePatch
     */
    body?: any
}

export class ObjectSubscribersContactsApi {
    private api: ObservableSubscribersContactsApi

    public constructor(configuration: Configuration, requestFactory?: SubscribersContactsApiRequestFactory, responseProcessor?: SubscribersContactsApiResponseProcessor) {
        this.api = new ObservableSubscribersContactsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns a list of contacts/subscribers on your account  This endpoint accepts three **optional** query parameters  - `email` — An email address to search for. If set, the endpoint only returns subscribers that have an identical email address.      - `per_page` — A limit on the number of records to return.      - `page` — The parameter serves as an offset on the number of records returned.
     * Get contacts
     * @param param the request object
     */
    public contactsGetWithHttpInfo(param: SubscribersContactsApiContactsGetRequest = {}, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.contactsGetWithHttpInfo(param.accept, param.email, param.perPage, param.page,  options).toPromise();
    }

    /**
     * Returns a list of contacts/subscribers on your account  This endpoint accepts three **optional** query parameters  - `email` — An email address to search for. If set, the endpoint only returns subscribers that have an identical email address.      - `per_page` — A limit on the number of records to return.      - `page` — The parameter serves as an offset on the number of records returned.
     * Get contacts
     * @param param the request object
     */
    public contactsGet(param: SubscribersContactsApiContactsGetRequest = {}, options?: Configuration): Promise<any> {
        return this.api.contactsGet(param.accept, param.email, param.perPage, param.page,  options).toPromise();
    }

    /**
     * Add a new contact/subscriber to your mailing list
     * Add a Contact
     * @param param the request object
     */
    public contactsPostWithHttpInfo(param: SubscribersContactsApiContactsPostRequest = {}, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.contactsPostWithHttpInfo(param.accept, param.body,  options).toPromise();
    }

    /**
     * Add a new contact/subscriber to your mailing list
     * Add a Contact
     * @param param the request object
     */
    public contactsPost(param: SubscribersContactsApiContactsPostRequest = {}, options?: Configuration): Promise<any> {
        return this.api.contactsPost(param.accept, param.body,  options).toPromise();
    }

    /**
     * Add tags to an existing contact
     * Add tags to a contact
     * @param param the request object
     */
    public contactsUidAddTagPostWithHttpInfo(param: SubscribersContactsApiContactsUidAddTagPostRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.contactsUidAddTagPostWithHttpInfo(param.uid, param.accept, param.body,  options).toPromise();
    }

    /**
     * Add tags to an existing contact
     * Add tags to a contact
     * @param param the request object
     */
    public contactsUidAddTagPost(param: SubscribersContactsApiContactsUidAddTagPostRequest, options?: Configuration): Promise<any> {
        return this.api.contactsUidAddTagPost(param.uid, param.accept, param.body,  options).toPromise();
    }

    /**
     * Delete an existing contact
     * Delete a contact
     * @param param the request object
     */
    public contactsUidDeletePostWithHttpInfo(param: SubscribersContactsApiContactsUidDeletePostRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.contactsUidDeletePostWithHttpInfo(param.uid, param.accept, param.body,  options).toPromise();
    }

    /**
     * Delete an existing contact
     * Delete a contact
     * @param param the request object
     */
    public contactsUidDeletePost(param: SubscribersContactsApiContactsUidDeletePostRequest, options?: Configuration): Promise<any> {
        return this.api.contactsUidDeletePost(param.uid, param.accept, param.body,  options).toPromise();
    }

    /**
     * Fetch detailed contact information for specified a contact
     * Get a contact
     * @param param the request object
     */
    public contactsUidGetWithHttpInfo(param: SubscribersContactsApiContactsUidGetRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.contactsUidGetWithHttpInfo(param.uid, param.accept,  options).toPromise();
    }

    /**
     * Fetch detailed contact information for specified a contact
     * Get a contact
     * @param param the request object
     */
    public contactsUidGet(param: SubscribersContactsApiContactsUidGetRequest, options?: Configuration): Promise<any> {
        return this.api.contactsUidGet(param.uid, param.accept,  options).toPromise();
    }

    /**
     * Update the specified subscriber/contact
     * Update Contact
     * @param param the request object
     */
    public contactsUidPatchWithHttpInfo(param: SubscribersContactsApiContactsUidPatchRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.contactsUidPatchWithHttpInfo(param.uid, param.accept, param.body,  options).toPromise();
    }

    /**
     * Update the specified subscriber/contact
     * Update Contact
     * @param param the request object
     */
    public contactsUidPatch(param: SubscribersContactsApiContactsUidPatchRequest, options?: Configuration): Promise<any> {
        return this.api.contactsUidPatch(param.uid, param.accept, param.body,  options).toPromise();
    }

    /**
     * Subscribe a contact to a list
     * Subscribe a contact
     * @param param the request object
     */
    public contactsUidSubscribePatchWithHttpInfo(param: SubscribersContactsApiContactsUidSubscribePatchRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.contactsUidSubscribePatchWithHttpInfo(param.uid, param.accept, param.listUid, param.body,  options).toPromise();
    }

    /**
     * Subscribe a contact to a list
     * Subscribe a contact
     * @param param the request object
     */
    public contactsUidSubscribePatch(param: SubscribersContactsApiContactsUidSubscribePatchRequest, options?: Configuration): Promise<any> {
        return this.api.contactsUidSubscribePatch(param.uid, param.accept, param.listUid, param.body,  options).toPromise();
    }

    /**
     * Unsubscribe a contact from a list
     * Unsubscribe a contact
     * @param param the request object
     */
    public contactsUidUnsubscribePatchWithHttpInfo(param: SubscribersContactsApiContactsUidUnsubscribePatchRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.contactsUidUnsubscribePatchWithHttpInfo(param.uid, param.accept, param.listUid, param.body,  options).toPromise();
    }

    /**
     * Unsubscribe a contact from a list
     * Unsubscribe a contact
     * @param param the request object
     */
    public contactsUidUnsubscribePatch(param: SubscribersContactsApiContactsUidUnsubscribePatchRequest, options?: Configuration): Promise<any> {
        return this.api.contactsUidUnsubscribePatch(param.uid, param.accept, param.listUid, param.body,  options).toPromise();
    }

}
