import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';

import { EmailAddressVerificationApiRequestFactory, EmailAddressVerificationApiResponseProcessor} from "../apis/EmailAddressVerificationApi";
export class ObservableEmailAddressVerificationApi {
    private requestFactory: EmailAddressVerificationApiRequestFactory;
    private responseProcessor: EmailAddressVerificationApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: EmailAddressVerificationApiRequestFactory,
        responseProcessor?: EmailAddressVerificationApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new EmailAddressVerificationApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new EmailAddressVerificationApiResponseProcessor();
    }

    /**
     * The `/validate-email` endpoint allows you to pass the email addresses you wish to verify and get a response on each of their status.  The following data should be passed in JSON format in the request body  - **emails** - An array/collection containing a minimum of one and maximum of fifty email addresses for verification/validation.
     * Email Address Verification Validation
     * @param [body]
     */
    public validateEmailPostWithHttpInfo(body?: any, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.validateEmailPost(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.validateEmailPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * The `/validate-email` endpoint allows you to pass the email addresses you wish to verify and get a response on each of their status.  The following data should be passed in JSON format in the request body  - **emails** - An array/collection containing a minimum of one and maximum of fifty email addresses for verification/validation.
     * Email Address Verification Validation
     * @param [body]
     */
    public validateEmailPost(body?: any, _options?: Configuration): Observable<any> {
        return this.validateEmailPostWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

}

import { EmailCampaignsApiRequestFactory, EmailCampaignsApiResponseProcessor} from "../apis/EmailCampaignsApi";
export class ObservableEmailCampaignsApi {
    private requestFactory: EmailCampaignsApiRequestFactory;
    private responseProcessor: EmailCampaignsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: EmailCampaignsApiRequestFactory,
        responseProcessor?: EmailCampaignsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new EmailCampaignsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new EmailCampaignsApiResponseProcessor();
    }

    /**
     * Returns a collection of all your campaigns
     * Get campaigns
     * @param [accept]
     */
    public messagesGetWithHttpInfo(accept?: string, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.messagesGet(accept, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.messagesGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns a collection of all your campaigns
     * Get campaigns
     * @param [accept]
     */
    public messagesGet(accept?: string, _options?: Configuration): Observable<any> {
        return this.messagesGetWithHttpInfo(accept, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Creat an email campaign for processing
     * Create a Campaign
     * @param [accept]
     * @param [body]
     */
    public messagesPostWithHttpInfo(accept?: string, body?: any, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.messagesPost(accept, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.messagesPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creat an email campaign for processing
     * Create a Campaign
     * @param [accept]
     * @param [body]
     */
    public messagesPost(accept?: string, body?: any, _options?: Configuration): Observable<any> {
        return this.messagesPostWithHttpInfo(accept, body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Delete the specified campaign
     * Delete a campaign
     * @param uid (Required) The uid of the campaign to delete
     * @param [accept]
     * @param [body]
     */
    public messagesUidDeletePostWithHttpInfo(uid: string, accept?: string, body?: any, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.messagesUidDeletePost(uid, accept, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.messagesUidDeletePostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete the specified campaign
     * Delete a campaign
     * @param uid (Required) The uid of the campaign to delete
     * @param [accept]
     * @param [body]
     */
    public messagesUidDeletePost(uid: string, accept?: string, body?: any, _options?: Configuration): Observable<any> {
        return this.messagesUidDeletePostWithHttpInfo(uid, accept, body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Returns the specified campaign details
     * Get a campaign
     * @param uid (Required) The uid of the campaign to fetch
     * @param [accept]
     */
    public messagesUidGetWithHttpInfo(uid: string, accept?: string, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.messagesUidGet(uid, accept, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.messagesUidGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the specified campaign details
     * Get a campaign
     * @param uid (Required) The uid of the campaign to fetch
     * @param [accept]
     */
    public messagesUidGet(uid: string, accept?: string, _options?: Configuration): Observable<any> {
        return this.messagesUidGetWithHttpInfo(uid, accept, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Updates a previously added campaign. Only Active and Paused campaigns can be updated.
     * Update Campaign
     * @param uid (Required) The uid of the campaign to update
     * @param [accept]
     * @param [body]
     */
    public messagesUidPatchWithHttpInfo(uid: string, accept?: string, body?: any, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.messagesUidPatch(uid, accept, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.messagesUidPatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a previously added campaign. Only Active and Paused campaigns can be updated.
     * Update Campaign
     * @param uid (Required) The uid of the campaign to update
     * @param [accept]
     * @param [body]
     */
    public messagesUidPatch(uid: string, accept?: string, body?: any, _options?: Configuration): Observable<any> {
        return this.messagesUidPatchWithHttpInfo(uid, accept, body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Pause the specified campaign
     * Pause a campaign
     * @param uid (Required) The uid of the campaign to pause
     * @param [accept]
     * @param [body]
     */
    public messagesUidPausePostWithHttpInfo(uid: string, accept?: string, body?: any, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.messagesUidPausePost(uid, accept, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.messagesUidPausePostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Pause the specified campaign
     * Pause a campaign
     * @param uid (Required) The uid of the campaign to pause
     * @param [accept]
     * @param [body]
     */
    public messagesUidPausePost(uid: string, accept?: string, body?: any, _options?: Configuration): Observable<any> {
        return this.messagesUidPausePostWithHttpInfo(uid, accept, body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Resume delivery of the specified campaign
     * Resume the delivery of a campaign
     * @param uid (Required) The uid of the campaign to resume
     * @param [accept]
     * @param [body]
     */
    public messagesUidResumePostWithHttpInfo(uid: string, accept?: string, body?: any, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.messagesUidResumePost(uid, accept, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.messagesUidResumePostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Resume delivery of the specified campaign
     * Resume the delivery of a campaign
     * @param uid (Required) The uid of the campaign to resume
     * @param [accept]
     * @param [body]
     */
    public messagesUidResumePost(uid: string, accept?: string, body?: any, _options?: Configuration): Observable<any> {
        return this.messagesUidResumePostWithHttpInfo(uid, accept, body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

}

import { MailingListsApiRequestFactory, MailingListsApiResponseProcessor} from "../apis/MailingListsApi";
export class ObservableMailingListsApi {
    private requestFactory: MailingListsApiRequestFactory;
    private responseProcessor: MailingListsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: MailingListsApiRequestFactory,
        responseProcessor?: MailingListsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new MailingListsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new MailingListsApiResponseProcessor();
    }

    /**
     * Returns all your existing lists
     * Get mailing lists
     * @param [accept]
     */
    public listsGetWithHttpInfo(accept?: string, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.listsGet(accept, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns all your existing lists
     * Get mailing lists
     * @param [accept]
     */
    public listsGet(accept?: string, _options?: Configuration): Observable<any> {
        return this.listsGetWithHttpInfo(accept, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Create a new mailing list
     * Create a Mailing List
     * @param [accept]
     * @param [body]
     */
    public listsPostWithHttpInfo(accept?: string, body?: any, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.listsPost(accept, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listsPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a new mailing list
     * Create a Mailing List
     * @param [accept]
     * @param [body]
     */
    public listsPost(accept?: string, body?: any, _options?: Configuration): Observable<any> {
        return this.listsPostWithHttpInfo(accept, body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Add a field to an existing list
     * Add a field
     * @param uid (Required) The uid of the list to add a field to.
     * @param [accept]
     * @param [body]
     */
    public listsUidAddFieldPostWithHttpInfo(uid: string, accept?: string, body?: any, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.listsUidAddFieldPost(uid, accept, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listsUidAddFieldPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Add a field to an existing list
     * Add a field
     * @param uid (Required) The uid of the list to add a field to.
     * @param [accept]
     * @param [body]
     */
    public listsUidAddFieldPost(uid: string, accept?: string, body?: any, _options?: Configuration): Observable<any> {
        return this.listsUidAddFieldPostWithHttpInfo(uid, accept, body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Delete an existing list
     * Delete a list
     * @param uid (Required) The uid of the list to delete.
     * @param [accept]
     * @param [body]
     */
    public listsUidDeletePostWithHttpInfo(uid: string, accept?: string, body?: any, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.listsUidDeletePost(uid, accept, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listsUidDeletePostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete an existing list
     * Delete a list
     * @param uid (Required) The uid of the list to delete.
     * @param [accept]
     * @param [body]
     */
    public listsUidDeletePost(uid: string, accept?: string, body?: any, _options?: Configuration): Observable<any> {
        return this.listsUidDeletePostWithHttpInfo(uid, accept, body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Returns detailed information about a specified list
     * Get a list
     * @param uid (Required) The uid of the mailing list to fetch.
     * @param [accept]
     */
    public listsUidGetWithHttpInfo(uid: string, accept?: string, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.listsUidGet(uid, accept, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listsUidGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns detailed information about a specified list
     * Get a list
     * @param uid (Required) The uid of the mailing list to fetch.
     * @param [accept]
     */
    public listsUidGet(uid: string, accept?: string, _options?: Configuration): Observable<any> {
        return this.listsUidGetWithHttpInfo(uid, accept, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Update an existing mailing list
     * Update a List
     * @param uid (Required) The uid of the list to update.
     * @param [accept]
     * @param [body]
     */
    public listsUidPatchWithHttpInfo(uid: string, accept?: string, body?: any, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.listsUidPatch(uid, accept, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listsUidPatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update an existing mailing list
     * Update a List
     * @param uid (Required) The uid of the list to update.
     * @param [accept]
     * @param [body]
     */
    public listsUidPatch(uid: string, accept?: string, body?: any, _options?: Configuration): Observable<any> {
        return this.listsUidPatchWithHttpInfo(uid, accept, body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

}

import { RelayApiRequestFactory, RelayApiResponseProcessor} from "../apis/RelayApi";
export class ObservableRelayApi {
    private requestFactory: RelayApiRequestFactory;
    private responseProcessor: RelayApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: RelayApiRequestFactory,
        responseProcessor?: RelayApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new RelayApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new RelayApiResponseProcessor();
    }

    /**
     * The `/emails` endpoint lets you fetch one or more marketing/transactional email(s) from your `Segnivo Messaging` account and it accepts two **optional** parameters.  - The `id` string of the email to fetch provided as a path variable      - The `limit` on the number of records to fetch (if email id is not provided) as a query string parameter. This value defaults to 100 if not provided.
     * Fetch Emails
     * @param id The ID of the email to fetch
     * @param [limit] The number of records to fetch
     */
    public relayEmailsIdGetWithHttpInfo(id: string, limit?: number, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.relayEmailsIdGet(id, limit, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.relayEmailsIdGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * The `/emails` endpoint lets you fetch one or more marketing/transactional email(s) from your `Segnivo Messaging` account and it accepts two **optional** parameters.  - The `id` string of the email to fetch provided as a path variable      - The `limit` on the number of records to fetch (if email id is not provided) as a query string parameter. This value defaults to 100 if not provided.
     * Fetch Emails
     * @param id The ID of the email to fetch
     * @param [limit] The number of records to fetch
     */
    public relayEmailsIdGet(id: string, limit?: number, _options?: Configuration): Observable<any> {
        return this.relayEmailsIdGetWithHttpInfo(id, limit, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
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
    public relayRawPostWithHttpInfo(message?: string, isTransactional?: boolean, trackClick?: boolean, trackOpen?: boolean, signDkim?: boolean, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.relayRawPost(message, isTransactional, trackClick, trackOpen, signDkim, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.relayRawPostWithHttpInfo(rsp)));
            }));
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
    public relayRawPost(message?: string, isTransactional?: boolean, trackClick?: boolean, trackOpen?: boolean, signDkim?: boolean, _options?: Configuration): Observable<any> {
        return this.relayRawPostWithHttpInfo(message, isTransactional, trackClick, trackOpen, signDkim, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

}

import { RelayTransactionalEmailsApiRequestFactory, RelayTransactionalEmailsApiResponseProcessor} from "../apis/RelayTransactionalEmailsApi";
export class ObservableRelayTransactionalEmailsApi {
    private requestFactory: RelayTransactionalEmailsApiRequestFactory;
    private responseProcessor: RelayTransactionalEmailsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: RelayTransactionalEmailsApiRequestFactory,
        responseProcessor?: RelayTransactionalEmailsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new RelayTransactionalEmailsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new RelayTransactionalEmailsApiResponseProcessor();
    }

    /**
     * The `/send` endpoint lets you send marketing and transactional emails from your `Segnivo Messaging` account.  The following data should be passed in JSON format in the request body  - **subject** - The subject of the email      - **from_name** (optional) - The full name of the sender      - **from_email** - The email of the sender      - **reply_to** (optional) - The email to which replies should be sent      - **content_type** (optional, defaults to `html`) - The content type of the email body. Accepts either `text` or `html`      - **recipients** - An array/collection of email addresses to deliver this message, max. 50      - **content** - The HTML or plain text content of the email      - **preheader** (optional) - The email preheader      - **custom_headers** (optional) - An object of custom headers to add to the email      - **delivery_at** (optional) - The 10-digit unix timestamp of the date/time at which this email should be delivered      - **attachments** (optional) - An array/collection of the URLs of files to attach to the email      - **sign_dkim** (optional, defaults to `true`) - A boolean value on if a DKIM signature should be included in this message      - **track_click** (optional, defaults to `true`) - A boolean value on if email clicks should be tracked. If `true` links in the email will be rewritten to enable tracking      - **track_open** (optional, defaults to `true`) - A boolean value on if the email opens should be tracked      - **is_transactional** (optional, defaults to `false`) - A boolean value to flag this email as a transactional email       #### 🔖 Important  **`is_transactional`** must only be set to `true` for transactional emails. Setting this to `true` for marketing emails will result in your API access being revoked and your account disabled.
     * Send an Email
     * @param [body]
     */
    public relaySendPostWithHttpInfo(body?: any, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.relaySendPost(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.relaySendPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * The `/send` endpoint lets you send marketing and transactional emails from your `Segnivo Messaging` account.  The following data should be passed in JSON format in the request body  - **subject** - The subject of the email      - **from_name** (optional) - The full name of the sender      - **from_email** - The email of the sender      - **reply_to** (optional) - The email to which replies should be sent      - **content_type** (optional, defaults to `html`) - The content type of the email body. Accepts either `text` or `html`      - **recipients** - An array/collection of email addresses to deliver this message, max. 50      - **content** - The HTML or plain text content of the email      - **preheader** (optional) - The email preheader      - **custom_headers** (optional) - An object of custom headers to add to the email      - **delivery_at** (optional) - The 10-digit unix timestamp of the date/time at which this email should be delivered      - **attachments** (optional) - An array/collection of the URLs of files to attach to the email      - **sign_dkim** (optional, defaults to `true`) - A boolean value on if a DKIM signature should be included in this message      - **track_click** (optional, defaults to `true`) - A boolean value on if email clicks should be tracked. If `true` links in the email will be rewritten to enable tracking      - **track_open** (optional, defaults to `true`) - A boolean value on if the email opens should be tracked      - **is_transactional** (optional, defaults to `false`) - A boolean value to flag this email as a transactional email       #### 🔖 Important  **`is_transactional`** must only be set to `true` for transactional emails. Setting this to `true` for marketing emails will result in your API access being revoked and your account disabled.
     * Send an Email
     * @param [body]
     */
    public relaySendPost(body?: any, _options?: Configuration): Observable<any> {
        return this.relaySendPostWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

}

import { SubscribersContactsApiRequestFactory, SubscribersContactsApiResponseProcessor} from "../apis/SubscribersContactsApi";
export class ObservableSubscribersContactsApi {
    private requestFactory: SubscribersContactsApiRequestFactory;
    private responseProcessor: SubscribersContactsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SubscribersContactsApiRequestFactory,
        responseProcessor?: SubscribersContactsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SubscribersContactsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SubscribersContactsApiResponseProcessor();
    }

    /**
     * Returns a list of contacts/subscribers on your account  This endpoint accepts three **optional** query parameters  - `email` — An email address to search for. If set, the endpoint only returns subscribers that have an identical email address.      - `per_page` — A limit on the number of records to return.      - `page` — The parameter serves as an offset on the number of records returned.
     * Get contacts
     * @param [accept]
     * @param [email] An email address to search for.
     * @param [perPage] How many items should be returned ahead.
     * @param [page] The offset for the items to be returned, helps in pagination.
     */
    public contactsGetWithHttpInfo(accept?: string, email?: string, perPage?: number, page?: number, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.contactsGet(accept, email, perPage, page, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.contactsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns a list of contacts/subscribers on your account  This endpoint accepts three **optional** query parameters  - `email` — An email address to search for. If set, the endpoint only returns subscribers that have an identical email address.      - `per_page` — A limit on the number of records to return.      - `page` — The parameter serves as an offset on the number of records returned.
     * Get contacts
     * @param [accept]
     * @param [email] An email address to search for.
     * @param [perPage] How many items should be returned ahead.
     * @param [page] The offset for the items to be returned, helps in pagination.
     */
    public contactsGet(accept?: string, email?: string, perPage?: number, page?: number, _options?: Configuration): Observable<any> {
        return this.contactsGetWithHttpInfo(accept, email, perPage, page, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Add a new contact/subscriber to your mailing list
     * Add a Contact
     * @param [accept]
     * @param [body]
     */
    public contactsPostWithHttpInfo(accept?: string, body?: any, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.contactsPost(accept, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.contactsPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Add a new contact/subscriber to your mailing list
     * Add a Contact
     * @param [accept]
     * @param [body]
     */
    public contactsPost(accept?: string, body?: any, _options?: Configuration): Observable<any> {
        return this.contactsPostWithHttpInfo(accept, body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Add tags to an existing contact
     * Add tags to a contact
     * @param uid (Required) The uid of the contact to update with the tags.
     * @param [accept]
     * @param [body]
     */
    public contactsUidAddTagPostWithHttpInfo(uid: string, accept?: string, body?: any, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.contactsUidAddTagPost(uid, accept, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.contactsUidAddTagPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Add tags to an existing contact
     * Add tags to a contact
     * @param uid (Required) The uid of the contact to update with the tags.
     * @param [accept]
     * @param [body]
     */
    public contactsUidAddTagPost(uid: string, accept?: string, body?: any, _options?: Configuration): Observable<any> {
        return this.contactsUidAddTagPostWithHttpInfo(uid, accept, body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Delete an existing contact
     * Delete a contact
     * @param uid (Required) The uid of the contact to delete.
     * @param [accept]
     * @param [body]
     */
    public contactsUidDeletePostWithHttpInfo(uid: string, accept?: string, body?: any, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.contactsUidDeletePost(uid, accept, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.contactsUidDeletePostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete an existing contact
     * Delete a contact
     * @param uid (Required) The uid of the contact to delete.
     * @param [accept]
     * @param [body]
     */
    public contactsUidDeletePost(uid: string, accept?: string, body?: any, _options?: Configuration): Observable<any> {
        return this.contactsUidDeletePostWithHttpInfo(uid, accept, body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Fetch detailed contact information for specified a contact
     * Get a contact
     * @param uid (Required) The uid of the contact to get.
     * @param [accept]
     */
    public contactsUidGetWithHttpInfo(uid: string, accept?: string, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.contactsUidGet(uid, accept, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.contactsUidGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Fetch detailed contact information for specified a contact
     * Get a contact
     * @param uid (Required) The uid of the contact to get.
     * @param [accept]
     */
    public contactsUidGet(uid: string, accept?: string, _options?: Configuration): Observable<any> {
        return this.contactsUidGetWithHttpInfo(uid, accept, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Update the specified subscriber/contact
     * Update Contact
     * @param uid (Required) The uid of the contact to update.
     * @param [accept]
     * @param [body]
     */
    public contactsUidPatchWithHttpInfo(uid: string, accept?: string, body?: any, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.contactsUidPatch(uid, accept, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.contactsUidPatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update the specified subscriber/contact
     * Update Contact
     * @param uid (Required) The uid of the contact to update.
     * @param [accept]
     * @param [body]
     */
    public contactsUidPatch(uid: string, accept?: string, body?: any, _options?: Configuration): Observable<any> {
        return this.contactsUidPatchWithHttpInfo(uid, accept, body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Subscribe a contact to a list
     * Subscribe a contact
     * @param uid (Required) The uid of the contact to subscribe.
     * @param [accept]
     * @param [listUid] (Required) The uid of the mail list to subscribe the contact.
     * @param [body]
     */
    public contactsUidSubscribePatchWithHttpInfo(uid: string, accept?: string, listUid?: string, body?: any, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.contactsUidSubscribePatch(uid, accept, listUid, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.contactsUidSubscribePatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Subscribe a contact to a list
     * Subscribe a contact
     * @param uid (Required) The uid of the contact to subscribe.
     * @param [accept]
     * @param [listUid] (Required) The uid of the mail list to subscribe the contact.
     * @param [body]
     */
    public contactsUidSubscribePatch(uid: string, accept?: string, listUid?: string, body?: any, _options?: Configuration): Observable<any> {
        return this.contactsUidSubscribePatchWithHttpInfo(uid, accept, listUid, body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Unsubscribe a contact from a list
     * Unsubscribe a contact
     * @param uid (Required) The uid of the contact to unsubscribe.
     * @param [accept]
     * @param [listUid] (Required) The uid of the mail list to unsubscribe the contact.
     * @param [body]
     */
    public contactsUidUnsubscribePatchWithHttpInfo(uid: string, accept?: string, listUid?: string, body?: any, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.contactsUidUnsubscribePatch(uid, accept, listUid, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.contactsUidUnsubscribePatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Unsubscribe a contact from a list
     * Unsubscribe a contact
     * @param uid (Required) The uid of the contact to unsubscribe.
     * @param [accept]
     * @param [listUid] (Required) The uid of the mail list to unsubscribe the contact.
     * @param [body]
     */
    public contactsUidUnsubscribePatch(uid: string, accept?: string, listUid?: string, body?: any, _options?: Configuration): Observable<any> {
        return this.contactsUidUnsubscribePatchWithHttpInfo(uid, accept, listUid, body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

}
