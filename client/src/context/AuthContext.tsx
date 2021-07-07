import { SetStateAction, Dispatch } from 'react'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { getUser, logout } from '../services/axiosService'

export interface User {
  userId: string
  firstName: string
  lastName: string
  email: string
  submissionData: { submissionNo: string; currentStatus: string } | null
}

export interface IAuthState {
  user: User | null
  isAuthenticated: boolean
}

interface IAuthContext {
  authState: IAuthState | undefined
  setState: (authInfo: IAuthState) => void
  logoutUser: () => void
  setAuthState: Dispatch<SetStateAction<IAuthState>>
}

const defaultAuthState: IAuthState = {
  user: {
    firstName: '',
    lastName: '',
    email: '',
    userId: '',
    submissionData: null,
  },
  isAuthenticated: false,
}

const AuthContext = createContext<IAuthContext>({
  authState: defaultAuthState,
  setState: () => {},
  logoutUser: () => {},
  setAuthState: () => {},
})

export function AuthProvider({ children }: { children: ReactNode }) {
  const [authState, setAuthState] = useState<IAuthState>(defaultAuthState)

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        let submissionParseData: {
          submissionNo: string
          currentStatus: string
        } | null = null
        const submissionData =
          localStorage && localStorage.getItem('neogSubmission')
        if (submissionData) {
          submissionParseData = JSON.parse(submissionData)
        }
        await getUser()
          .then((user) => {
            setAuthState({
              user: {
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                userId: user.userId,
                submissionData: submissionParseData,
              },
              isAuthenticated: true,
            })
            console.log(user)
          })
          .catch((err) => {
            setAuthState({
              user: null,
              isAuthenticated: false,
            })
            console.log({ err })
          })
      } catch (error) {
        console.log({ error })
        setAuthState({
          user: null,
          isAuthenticated: false,
        })
      }
    }
    getUserInfo()
  }, [])

  function setAuthInfo(data: IAuthState) {
    setAuthState({
      isAuthenticated: data.isAuthenticated,
      user: data.user,
    })
  }

  async function logoutUser() {
    await logout()
      .then((res) => {
        console.log(res)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  return (
    <AuthContext.Provider
      value={{
        authState: authState,
        setState: (authInfo: IAuthState) => setAuthInfo(authInfo),
        logoutUser,
        setAuthState,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(): IAuthContext {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an <AuthProvider/>')
  }
  return context
}
