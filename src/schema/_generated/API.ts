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

export interface ChatMessageRequest {
  /**
   * テキスト
   * @minLength 1
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

export interface LoginRequest {
  /** @format email */
  email?: string
  /** @minLength 1 */
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

export interface RegisterRequest {
  /**
   * @minLength 1
   * @maxLength 150
   */
  username?: string
  /**
   * @format email
   * @minLength 1
   */
  email: string
  /** @minLength 1 */
  password1: string
  /** @minLength 1 */
  password2: string
}

export interface ResendEmailVerificationRequest {
  /**
   * @format email
   * @minLength 1
   */
  email: string
}

export interface RestAuthDetail {
  detail: string
}

export interface TokenRefresh {
  access: string
  refresh: string
}

export interface TokenRefreshRequest {
  /** @minLength 1 */
  refresh: string
}

export interface TokenVerifyRequest {
  /** @minLength 1 */
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

export interface UserRequest {
  /**
   * パスワード
   * @minLength 1
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
   * @minLength 1
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
   * @format email
   * @minLength 1
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

export interface VerifyEmailRequest {
  /** @minLength 1 */
  key: string
}

import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, HeadersDefaults, ResponseType } from 'axios'
import axios from 'axios'

export type QueryParamsType = Record<string | number, any>

export interface FullRequestParams extends Omit<AxiosRequestConfig, 'data' | 'params' | 'url' | 'responseType'> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean
  /** request path */
  path: string
  /** content type of request body */
  type?: ContentType
  /** query params */
  query?: QueryParamsType
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType
  /** request body */
  body?: unknown
}

export type RequestParams = Omit<FullRequestParams, 'body' | 'method' | 'query' | 'path'>

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, 'data' | 'cancelToken'> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void
  secure?: boolean
  format?: ResponseType
}

export enum ContentType {
  Json = 'application/json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
  Text = 'text/plain',
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance
  private securityData: SecurityDataType | null = null
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker']
  private secure?: boolean
  private format?: ResponseType

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || '' })
    this.secure = secure
    this.format = format
    this.securityWorker = securityWorker
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data
  }

  protected mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method)

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method && this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    }
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === 'object' && formItem !== null) {
      return JSON.stringify(formItem)
    } else {
      return `${formItem}`
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key]
      const propertyContent: any[] = property instanceof Array ? property : [property]

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File
        formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem))
      }

      return formData
    }, new FormData())
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === 'boolean' ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {}
    const requestParams = this.mergeRequestParams(params, secureParams)
    const responseFormat = format || this.format || undefined

    if (type === ContentType.FormData && body && body !== null && typeof body === 'object') {
      body = this.createFormData(body as Record<string, unknown>)
    }

    if (type === ContentType.Text && body && body !== null && typeof body !== 'string') {
      body = JSON.stringify(body)
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { 'Content-Type': type } : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
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
    authLoginCreate: (data: LoginRequest, params: RequestParams = {}) =>
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
    authRegistrationCreate: (data: RegisterRequest, params: RequestParams = {}) =>
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
    authRegistrationResendEmailCreate: (data: ResendEmailVerificationRequest, params: RequestParams = {}) =>
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
    authRegistrationVerifyEmailCreate: (data: VerifyEmailRequest, params: RequestParams = {}) =>
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
    authTokenRefreshCreate: (data: TokenRefreshRequest, params: RequestParams = {}) =>
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
    authTokenVerifyCreate: (data: TokenVerifyRequest, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/auth/token/verify/`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
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
    chatMessagesCreate: (data: ChatMessageRequest, params: RequestParams = {}) =>
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
