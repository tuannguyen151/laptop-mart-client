import { useRouter } from 'next/router'

import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState
} from 'react'

import Cookies from 'js-cookie'

import { LOGIN_API, PROFILE_API } from '@/constants'
import { LOGIN } from '@/constants/routes'
import api from '@/lib/api'
import { ILoginRequest } from '@/types/request'
import { ILoginResponse, IUserResponse } from '@/types/response'

const userLocal: IUserResponse | undefined = Cookies.get('user')
  ? JSON.parse(Cookies.get('user') as string)
  : undefined

const isLoggedInLocal = !!Cookies.get('token')

const AuthContext = createContext<{
  isLoggedIn: boolean
  isLoading: boolean
  user: IUserResponse | undefined
  updateUser: () => Promise<void>
  login: (payload: ILoginRequest) => Promise<void>
  logout: () => void
}>({
  isLoggedIn: isLoggedInLocal,
  isLoading: true,
  user: userLocal,
  updateUser: () => Promise.reject(),
  login: () => Promise.reject(),
  logout: () => undefined
})

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter()
  const [user, setUser] = useState<any>(userLocal)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const updateUser = async () => {
    const { data: user } = await api.get<IUserResponse>(PROFILE_API)

    const userCookies = Cookies.get('user')

    if (JSON.stringify(user) !== userCookies) {
      setUser(user)
      Cookies.set('user', JSON.stringify(user), {
        expires: Number(process.env.NEXT_PUBLIC_LOGIN_EXPIRES_DAY || 180)
      })
    }
  }

  useEffect(() => {
    async function loadUserFromCookies() {
      const token = Cookies.get('token')

      if (token) {
        await updateUser()
      }

      setIsLoading(false)
    }

    loadUserFromCookies()
  }, [])

  const login = async ({ username, password }: ILoginRequest) => {
    const {
      data: { token }
    } = await api.post<ILoginResponse>(LOGIN_API, {
      account: username,
      password,
      isUser: true
    })

    if (token) {
      Cookies.set('token', token, {
        expires: Number(process.env.NEXT_PUBLIC_LOGIN_EXPIRES_DAY || 180)
      })

      const { data: user } = await api.get<IUserResponse>(PROFILE_API)

      Cookies.set('user', JSON.stringify(user), {
        expires: Number(process.env.NEXT_PUBLIC_LOGIN_EXPIRES_DAY || 180)
      })

      setUser(user)
    }
  }

  const logout = () => {
    Cookies.remove('token')
    Cookies.remove('user')
    setUser(null)

    router.push(LOGIN)
  }

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: !!user, user, login, isLoading, logout, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
