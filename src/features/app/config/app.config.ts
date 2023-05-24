import { __DEV__, KEY_COOKIE_ACCESS_TOKEN_DEV, KEY_COOKIE_ACCESS_TOKEN_PROD } from '@/features/app/constants'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const packageJson = require('../../../package.json')

// prettier-ignore
export const AppConfig = {
    AppId: '',
    AppVersion: packageJson.version,
    AppName: 'J.S',
    AppDescription: '',
    AppDefaultLang: 'id',
    AppFavicon: '/favicon.ico',
    AppLogo: '/vercel.svg',
    IsDevelopment: __DEV__,
    ApiBaseUrl:process.env.NEXT_PUBLIC_API_BASE_URL,
    ApiStorageBaseUrl: process.env.NEXT_PUBLIC_API_STORAGE_BASE_URL,
    KeyAccessTokenUser: __DEV__ ? KEY_COOKIE_ACCESS_TOKEN_DEV: KEY_COOKIE_ACCESS_TOKEN_PROD,

  }
