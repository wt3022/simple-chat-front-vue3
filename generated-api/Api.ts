/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface ChatMessage {
  id: number
  createdBy: User
  /**
   * 作成日時
   * @format date-time
   */
  createdAt: string | null
  /**
   * 更新日時
   * @format date-time
   */
  updatedAt: string | null
  /**
   * テキスト
   * @maxLength 2048
   */
  text: string
}

/** Serializer for JWT authentication. */
export interface JWT {
  access: string
  refresh: string
  /** User model w/o password */
  user: UserDetails
}

export interface Login {
  /** @format email */
  email?: string
  password: string
}

export interface PaginatedChatMessageList {
  /** @example 123 */
  count?: number
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=400&limit=100"
   */
  next?: string | null
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=200&limit=100"
   */
  previous?: string | null
  results?: ChatMessage[]
}

export interface Register {
  /**
   * @minLength 1
   * @maxLength 150
   */
  username?: string
  /** @format email */
  email: string
  password1: string
  password2: string
}

export interface ResendEmailVerification {
  /** @format email */
  email: string
}

export interface RestAuthDetail {
  detail: string
}

export interface TokenRefresh {
  access: string
  refresh: string
}

export interface TokenVerify {
  token: string
}

export interface User {
  /** @format uuid */
  id: string
  /**
   * パスワード
   * @maxLength 128
   */
  password: string
  /**
   * 最終ログイン
   * @format date-time
   */
  lastLogin?: string | null
  /**
   * スーパーユーザー権限
   * 全ての権限を持っているとみなされます。
   */
  isSuperuser?: boolean
  /**
   * ユーザー名
   * この項目は必須です。半角アルファベット、半角数字、@/./+/-/_ で150文字以下にしてください。
   * @maxLength 150
   * @pattern ^[\w.@+-]+$
   */
  username: string
  /**
   * 名
   * @maxLength 150
   */
  firstName?: string
  /**
   * 姓
   * @maxLength 150
   */
  lastName?: string
  /**
   * スタッフ権限
   * ユーザーが管理サイトにログイン可能かどうかを示します。
   */
  isStaff?: boolean
  /**
   * 有効
   * ユーザーがアクティブかどうかを示します。アカウントを削除する代わりに選択を解除してください。
   */
  isActive?: boolean
  /**
   * 登録日
   * @format date-time
   */
  dateJoined?: string
  /**
   * 作成日時
   * @format date-time
   */
  createdAt: string | null
  /**
   * 更新日時
   * @format date-time
   */
  updatedAt: string | null
  /**
   * @format email
   * @maxLength 254
   */
  email?: string | null
  /**
   * グループ
   * このユーザーが所属するグループ。ユーザーはそれぞれのグループに付与されたすべての権限を持ちます。
   */
  groups?: number[]
  /**
   * ユーザーパーミッション
   * このユーザーの持つ権限です。
   */
  userPermissions?: number[]
}

/** User model w/o password */
export interface UserDetails {
  /**
   * Id
   * @format uuid
   */
  pk: string
  /**
   * ユーザー名
   * この項目は必須です。半角アルファベット、半角数字、@/./+/-/_ で150文字以下にしてください。
   * @maxLength 150
   * @pattern ^[\w.@+-]+$
   */
  username: string
  /** @format email */
  email: string | null
  /**
   * 名
   * @maxLength 150
   */
  firstName?: string
  /**
   * 姓
   * @maxLength 150
   */
  lastName?: string
}

export interface VerifyEmail {
  key: string
}

export type QueryParamsType = Record<string | number, any>
export type ResponseFormat = keyof Omit<Body, 'body' | 'bodyUsed'>

export interface FullRequestParams extends Omit<RequestInit, 'body'> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean
  /** request path */
  path: string
  /** content type of request body */
  type?: ContentType
  /** query params */
  query?: QueryParamsType
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat
  /** request body */
  body?: unknown
  /** base url */
  baseUrl?: string
  /** request cancellation token */
  cancelToken?: CancelToken
}

export type RequestParams = Omit<FullRequestParams, 'body' | 'method' | 'query' | 'path'>

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string
  baseApiParams?: Omit<RequestParams, 'baseUrl' | 'cancelToken' | 'signal'>
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void
  customFetch?: typeof fetch
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D
  error: E
}

type CancelToken = Symbol | string | number

export enum ContentType {
  Json = 'application/json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
  Text = 'text/plain',
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = ''
  private securityData: SecurityDataType | null = null
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker']
  private abortControllers = new Map<CancelToken, AbortController>()
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams)

  private baseApiParams: RequestParams = {
    credentials: 'same-origin',
    headers: {},
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  }

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig)
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data
  }

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key)
    return `${encodedKey}=${encodeURIComponent(typeof value === 'number' ? value : `${value}`)}`
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key])
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key]
    return value.map((v: any) => this.encodeQueryParam(key, v)).join('&')
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {}
    const keys = Object.keys(query).filter((key) => 'undefined' !== typeof query[key])
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join('&')
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery)
    return queryString ? `?${queryString}` : ''
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === 'object' || typeof input === 'string') ? JSON.stringify(input) : input,
    [ContentType.Text]: (input: any) => (input !== null && typeof input !== 'string' ? JSON.stringify(input) : input),
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key]
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === 'object' && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        )
        return formData
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  }

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    }
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken)
      if (abortController) {
        return abortController.signal
      }
      return void 0
    }

    const abortController = new AbortController()
    this.abortControllers.set(cancelToken, abortController)
    return abortController.signal
  }

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken)

    if (abortController) {
      abortController.abort()
      this.abortControllers.delete(cancelToken)
    }
  }

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === 'boolean' ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {}
    const requestParams = this.mergeRequestParams(params, secureParams)
    const queryString = query && this.toQueryString(query)
    const payloadFormatter = this.contentFormatters[type || ContentType.Json]
    const responseFormat = format || requestParams.format

    return this.customFetch(`${baseUrl || this.baseUrl || ''}${path}${queryString ? `?${queryString}` : ''}`, {
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { 'Content-Type': type } : {}),
      },
      signal: (cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal) || null,
      body: typeof body === 'undefined' || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>
      r.data = null as unknown as T
      r.error = null as unknown as E

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data
              } else {
                r.error = data
              }
              return r
            })
            .catch((e) => {
              r.error = e
              return r
            })

      if (cancelToken) {
        this.abortControllers.delete(cancelToken)
      }

      if (!response.ok) throw data
      return data
    })
  }
}

/**
 * @title No title
 * @version 0.0.0
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  api = {
    /**
     * @description OpenApi3 schema for this API. Format can be selected via content negotiation. - YAML: application/vnd.oai.openapi - JSON: application/vnd.oai.openapi+json
     *
     * @tags api
     * @name ApiSchemaRetrieve
     * @request GET:/api/schema/
     * @secure
     */
    apiSchemaRetrieve: (
      query?: {
        format?: 'json' | 'yaml'
        lang?:
          | 'af'
          | 'ar'
          | 'ar-dz'
          | 'ast'
          | 'az'
          | 'be'
          | 'bg'
          | 'bn'
          | 'br'
          | 'bs'
          | 'ca'
          | 'ckb'
          | 'cs'
          | 'cy'
          | 'da'
          | 'de'
          | 'dsb'
          | 'el'
          | 'en'
          | 'en-au'
          | 'en-gb'
          | 'eo'
          | 'es'
          | 'es-ar'
          | 'es-co'
          | 'es-mx'
          | 'es-ni'
          | 'es-ve'
          | 'et'
          | 'eu'
          | 'fa'
          | 'fi'
          | 'fr'
          | 'fy'
          | 'ga'
          | 'gd'
          | 'gl'
          | 'he'
          | 'hi'
          | 'hr'
          | 'hsb'
          | 'hu'
          | 'hy'
          | 'ia'
          | 'id'
          | 'ig'
          | 'io'
          | 'is'
          | 'it'
          | 'ja'
          | 'ka'
          | 'kab'
          | 'kk'
          | 'km'
          | 'kn'
          | 'ko'
          | 'ky'
          | 'lb'
          | 'lt'
          | 'lv'
          | 'mk'
          | 'ml'
          | 'mn'
          | 'mr'
          | 'ms'
          | 'my'
          | 'nb'
          | 'ne'
          | 'nl'
          | 'nn'
          | 'os'
          | 'pa'
          | 'pl'
          | 'pt'
          | 'pt-br'
          | 'ro'
          | 'ru'
          | 'sk'
          | 'sl'
          | 'sq'
          | 'sr'
          | 'sr-latn'
          | 'sv'
          | 'sw'
          | 'ta'
          | 'te'
          | 'tg'
          | 'th'
          | 'tk'
          | 'tr'
          | 'tt'
          | 'udm'
          | 'uk'
          | 'ur'
          | 'uz'
          | 'vi'
          | 'zh-hans'
          | 'zh-hant'
      },
      params: RequestParams = {},
    ) =>
      this.request<Record<string, any>, any>({
        path: `/api/schema/`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),
  }
  auth = {
    /**
     * @description Check the credentials and return the REST Token if the credentials are valid and authenticated. Calls Django Auth login method to register User ID in Django session framework Accept the following POST parameters: username, password Return the REST Framework Token Object's key.
     *
     * @tags auth
     * @name AuthLoginCreate
     * @request POST:/auth/login/
     * @secure
     */
    authLoginCreate: (data: Login, params: RequestParams = {}) =>
      this.request<JWT, any>({
        path: `/auth/login/`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Calls Django logout method and delete the Token object assigned to the current User object. Accepts/Returns nothing.
     *
     * @tags auth
     * @name AuthLogoutCreate
     * @request POST:/auth/logout/
     * @secure
     */
    authLogoutCreate: (params: RequestParams = {}) =>
      this.request<RestAuthDetail, any>({
        path: `/auth/logout/`,
        method: 'POST',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthRegistrationCreate
     * @request POST:/auth/registration/
     * @secure
     */
    authRegistrationCreate: (data: Register, params: RequestParams = {}) =>
      this.request<RestAuthDetail, any>({
        path: `/auth/registration/`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthRegistrationResendEmailCreate
     * @request POST:/auth/registration/resend-email/
     * @secure
     */
    authRegistrationResendEmailCreate: (data: ResendEmailVerification, params: RequestParams = {}) =>
      this.request<RestAuthDetail, any>({
        path: `/auth/registration/resend-email/`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthRegistrationVerifyEmailCreate
     * @request POST:/auth/registration/verify-email/
     * @secure
     */
    authRegistrationVerifyEmailCreate: (data: VerifyEmail, params: RequestParams = {}) =>
      this.request<RestAuthDetail, any>({
        path: `/auth/registration/verify-email/`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Takes a refresh type JSON web token and returns an access type JSON web token if the refresh token is valid.
     *
     * @tags auth
     * @name AuthTokenRefreshCreate
     * @request POST:/auth/token/refresh/
     */
    authTokenRefreshCreate: (data: TokenRefresh, params: RequestParams = {}) =>
      this.request<TokenRefresh, any>({
        path: `/auth/token/refresh/`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Takes a token and indicates if it is valid.  This view provides no information about a token's fitness for a particular use.
     *
     * @tags auth
     * @name AuthTokenVerifyCreate
     * @request POST:/auth/token/verify/
     */
    authTokenVerifyCreate: (data: TokenVerify, params: RequestParams = {}) =>
      this.request<TokenVerify, any>({
        path: `/auth/token/verify/`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  }
  chatMessages = {
    /**
     * No description
     *
     * @tags chat_messages
     * @name ChatMessagesList
     * @request GET:/chat_messages/
     * @secure
     */
    chatMessagesList: (
      query?: {
        /** @format date-time */
        latest_timestamp?: string
        /** Number of results to return per page. */
        limit?: number
        /** The initial index from which to return the results. */
        offset?: number
      },
      params: RequestParams = {},
    ) =>
      this.request<PaginatedChatMessageList, any>({
        path: `/chat_messages/`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags chat_messages
     * @name ChatMessagesCreate
     * @request POST:/chat_messages/
     * @secure
     */
    chatMessagesCreate: (data: ChatMessage, params: RequestParams = {}) =>
      this.request<ChatMessage, any>({
        path: `/chat_messages/`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  }
}
