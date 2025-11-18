import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Void: { input: any; output: any; }
};

export type CreateUserError = ErrorAlreadyPending | ErrorInvalidPassword | ErrorInvalidPhone | ErrorInvalidUserName | ErrorPhoneCollision | ErrorUnconfirmedPhone;

export type ErrorAlreadyDone = {
  __typename?: 'ErrorAlreadyDone';
  a?: Maybe<Scalars['Boolean']['output']>;
};

export type ErrorAlreadyPending = {
  __typename?: 'ErrorAlreadyPending';
  a?: Maybe<Scalars['Boolean']['output']>;
};

export type ErrorInvalidCredentials = {
  __typename?: 'ErrorInvalidCredentials';
  a?: Maybe<Scalars['Boolean']['output']>;
};

export type ErrorInvalidPassword = {
  __typename?: 'ErrorInvalidPassword';
  a?: Maybe<Scalars['Boolean']['output']>;
};

export type ErrorInvalidPhone = {
  __typename?: 'ErrorInvalidPhone';
  a?: Maybe<Scalars['Boolean']['output']>;
};

export type ErrorInvalidToken = {
  __typename?: 'ErrorInvalidToken';
  a?: Maybe<Scalars['Boolean']['output']>;
};

export type ErrorInvalidUserName = {
  __typename?: 'ErrorInvalidUserName';
  a?: Maybe<Scalars['Boolean']['output']>;
};

export type ErrorPhoneCollision = {
  __typename?: 'ErrorPhoneCollision';
  a?: Maybe<Scalars['Boolean']['output']>;
};

export type ErrorSamePhone = {
  __typename?: 'ErrorSamePhone';
  a?: Maybe<Scalars['Boolean']['output']>;
};

export type ErrorUnconfirmedPhone = {
  __typename?: 'ErrorUnconfirmedPhone';
  a?: Maybe<Scalars['Boolean']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  confirmCode?: Maybe<ErrorInvalidCredentials>;
  createUser?: Maybe<CreateUserError>;
  login?: Maybe<ErrorInvalidCredentials>;
  logout: Scalars['Void']['output'];
  sendCodePrivate?: Maybe<SendCodePrivateError>;
  sendCodePublic?: Maybe<SendCodePublicError>;
};


export type MutationConfirmCodeArgs = {
  code: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};


export type MutationCreateUserArgs = {
  userIn: UserIn;
};


export type MutationLoginArgs = {
  mustBeAdmin?: Scalars['Boolean']['input'];
  password: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};


export type MutationSendCodePrivateArgs = {
  phone: Scalars['String']['input'];
};


export type MutationSendCodePublicArgs = {
  phone: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  getMe: User;
};

export type SendCodePrivateError = ErrorAlreadyDone | ErrorInvalidPhone | ErrorPhoneCollision | ErrorSamePhone;

export type SendCodePublicError = ErrorAlreadyDone | ErrorInvalidPhone | ErrorPhoneCollision;

export type User = {
  __typename?: 'User';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  phone: Scalars['String']['output'];
};

export type UserIn = {
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};

export type ConfirmCodeMutationVariables = Exact<{
  phone: Scalars['String']['input'];
  code: Scalars['String']['input'];
}>;


export type ConfirmCodeMutation = { __typename?: 'Mutation', confirmCode?: { __typename?: 'ErrorInvalidCredentials', error: 'ErrorInvalidCredentials' } | null };

export type CreateUserMutationVariables = Exact<{
  userIn: UserIn;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser?: { __typename?: 'ErrorAlreadyPending', error: 'ErrorAlreadyPending' } | { __typename?: 'ErrorInvalidPassword', error: 'ErrorInvalidPassword' } | { __typename?: 'ErrorInvalidPhone', error: 'ErrorInvalidPhone' } | { __typename?: 'ErrorInvalidUserName', error: 'ErrorInvalidUserName' } | { __typename?: 'ErrorPhoneCollision', error: 'ErrorPhoneCollision' } | { __typename?: 'ErrorUnconfirmedPhone', error: 'ErrorUnconfirmedPhone' } | null };

export type UserFragment = { __typename?: 'User', id: string, name: string, phone: string };

export type GetMeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMeQuery = { __typename?: 'Query', getMe: { __typename?: 'User', id: string, name: string, phone: string } };

export type LoginMutationVariables = Exact<{
  phone: Scalars['String']['input'];
  password: Scalars['String']['input'];
  mustBeAdmin?: Scalars['Boolean']['input'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: { __typename?: 'ErrorInvalidCredentials', error: 'ErrorInvalidCredentials' } | null };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: any };

export type SendCodePrivateMutationVariables = Exact<{
  phone: Scalars['String']['input'];
}>;


export type SendCodePrivateMutation = { __typename?: 'Mutation', sendCodePrivate?: { __typename?: 'ErrorAlreadyDone', error: 'ErrorAlreadyDone' } | { __typename?: 'ErrorInvalidPhone', error: 'ErrorInvalidPhone' } | { __typename?: 'ErrorPhoneCollision', error: 'ErrorPhoneCollision' } | { __typename?: 'ErrorSamePhone', error: 'ErrorSamePhone' } | null };

export type SendCodePublicMutationVariables = Exact<{
  phone: Scalars['String']['input'];
}>;


export type SendCodePublicMutation = { __typename?: 'Mutation', sendCodePublic?: { __typename?: 'ErrorAlreadyDone', error: 'ErrorAlreadyDone' } | { __typename?: 'ErrorInvalidPhone', error: 'ErrorInvalidPhone' } | { __typename?: 'ErrorPhoneCollision', error: 'ErrorPhoneCollision' } | null };

export const UserFragmentDoc = gql`
    fragment User on User {
  id
  name
  phone
}
    `;
export const ConfirmCodeDocument = gql`
    mutation ConfirmCode($phone: String!, $code: String!) {
  confirmCode(phone: $phone, code: $code) {
    error: __typename
  }
}
    `;
export type ConfirmCodeMutationFn = Apollo.MutationFunction<ConfirmCodeMutation, ConfirmCodeMutationVariables>;

/**
 * __useConfirmCodeMutation__
 *
 * To run a mutation, you first call `useConfirmCodeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useConfirmCodeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [confirmCodeMutation, { data, loading, error }] = useConfirmCodeMutation({
 *   variables: {
 *      phone: // value for 'phone'
 *      code: // value for 'code'
 *   },
 * });
 */
export function useConfirmCodeMutation(baseOptions?: Apollo.MutationHookOptions<ConfirmCodeMutation, ConfirmCodeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ConfirmCodeMutation, ConfirmCodeMutationVariables>(ConfirmCodeDocument, options);
      }
export type ConfirmCodeMutationHookResult = ReturnType<typeof useConfirmCodeMutation>;
export type ConfirmCodeMutationResult = Apollo.MutationResult<ConfirmCodeMutation>;
export type ConfirmCodeMutationOptions = Apollo.BaseMutationOptions<ConfirmCodeMutation, ConfirmCodeMutationVariables>;
export const CreateUserDocument = gql`
    mutation CreateUser($userIn: UserIn!) {
  createUser(userIn: $userIn) {
    error: __typename
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      userIn: // value for 'userIn'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const GetMeDocument = gql`
    query GetMe {
  getMe {
    ...User
  }
}
    ${UserFragmentDoc}`;

/**
 * __useGetMeQuery__
 *
 * To run a query within a React component, call `useGetMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMeQuery(baseOptions?: Apollo.QueryHookOptions<GetMeQuery, GetMeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMeQuery, GetMeQueryVariables>(GetMeDocument, options);
      }
export function useGetMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMeQuery, GetMeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMeQuery, GetMeQueryVariables>(GetMeDocument, options);
        }
export function useGetMeSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetMeQuery, GetMeQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMeQuery, GetMeQueryVariables>(GetMeDocument, options);
        }
export type GetMeQueryHookResult = ReturnType<typeof useGetMeQuery>;
export type GetMeLazyQueryHookResult = ReturnType<typeof useGetMeLazyQuery>;
export type GetMeSuspenseQueryHookResult = ReturnType<typeof useGetMeSuspenseQuery>;
export type GetMeQueryResult = Apollo.QueryResult<GetMeQuery, GetMeQueryVariables>;
export const LoginDocument = gql`
    mutation Login($phone: String!, $password: String!, $mustBeAdmin: Boolean! = false) {
  login(phone: $phone, password: $password, mustBeAdmin: $mustBeAdmin) {
    error: __typename
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      phone: // value for 'phone'
 *      password: // value for 'password'
 *      mustBeAdmin: // value for 'mustBeAdmin'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const SendCodePrivateDocument = gql`
    mutation SendCodePrivate($phone: String!) {
  sendCodePrivate(phone: $phone) {
    error: __typename
  }
}
    `;
export type SendCodePrivateMutationFn = Apollo.MutationFunction<SendCodePrivateMutation, SendCodePrivateMutationVariables>;

/**
 * __useSendCodePrivateMutation__
 *
 * To run a mutation, you first call `useSendCodePrivateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendCodePrivateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendCodePrivateMutation, { data, loading, error }] = useSendCodePrivateMutation({
 *   variables: {
 *      phone: // value for 'phone'
 *   },
 * });
 */
export function useSendCodePrivateMutation(baseOptions?: Apollo.MutationHookOptions<SendCodePrivateMutation, SendCodePrivateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendCodePrivateMutation, SendCodePrivateMutationVariables>(SendCodePrivateDocument, options);
      }
export type SendCodePrivateMutationHookResult = ReturnType<typeof useSendCodePrivateMutation>;
export type SendCodePrivateMutationResult = Apollo.MutationResult<SendCodePrivateMutation>;
export type SendCodePrivateMutationOptions = Apollo.BaseMutationOptions<SendCodePrivateMutation, SendCodePrivateMutationVariables>;
export const SendCodePublicDocument = gql`
    mutation SendCodePublic($phone: String!) {
  sendCodePublic(phone: $phone) {
    error: __typename
  }
}
    `;
export type SendCodePublicMutationFn = Apollo.MutationFunction<SendCodePublicMutation, SendCodePublicMutationVariables>;

/**
 * __useSendCodePublicMutation__
 *
 * To run a mutation, you first call `useSendCodePublicMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendCodePublicMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendCodePublicMutation, { data, loading, error }] = useSendCodePublicMutation({
 *   variables: {
 *      phone: // value for 'phone'
 *   },
 * });
 */
export function useSendCodePublicMutation(baseOptions?: Apollo.MutationHookOptions<SendCodePublicMutation, SendCodePublicMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendCodePublicMutation, SendCodePublicMutationVariables>(SendCodePublicDocument, options);
      }
export type SendCodePublicMutationHookResult = ReturnType<typeof useSendCodePublicMutation>;
export type SendCodePublicMutationResult = Apollo.MutationResult<SendCodePublicMutation>;
export type SendCodePublicMutationOptions = Apollo.BaseMutationOptions<SendCodePublicMutation, SendCodePublicMutationVariables>;