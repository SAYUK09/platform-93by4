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
  userId?: string
  firstName?: string
  lastName?: string
  email?: string
  submissionData: { submissionNo: string; status: string } | null
}

// todo -> maybe add a global loading state here ??
export interface IAuthState {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
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
  isLoading: true,
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
          status: string
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
              isLoading: false,
            })
            console.log(user)
          })
          .catch((err) => {
            setAuthState({
              user: null,
              isAuthenticated: false,
              isLoading: false,
            })
            console.log({ err })
          })
      } catch (error) {
        console.log({ error })
        setAuthState({
          user: null,
          isAuthenticated: false,
          isLoading: false,
        })
      }
    }
    getUserInfo()
  }, [])

  function setAuthInfo(data: IAuthState) {
    setAuthState({
      isAuthenticated: data.isAuthenticated,
      user: data.user,
      isLoading: data.isLoading,
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
