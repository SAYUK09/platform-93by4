import axios from 'axios'
import { User } from '../context/AuthContext'
import { LoginValues } from '../pages/auth/login'
import { SignUpValues } from '../pages/auth/signup'
import { submissionValues } from '../pages/submission'
import { reSubmissionValues } from '../pages/resubmission'

if (typeof window !== 'undefined') {
  console.log('LOCAL TOKEN', localStorage.getItem('x-auth-token'))
}

const apiClient = axios.create({
  baseURL: `${process.env.API_URL}/api/`,
  withCredentials: true,
  headers: {
    'x-auth-token':
      typeof window !== 'undefined' && localStorage.getItem('x-auth-token'),
  },
})

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('x-auth-token')
    if (token) {
      config.headers['x-auth-token'] = token
    }
    return config
  },
  (error) => Promise.reject(error)
)

/**
 * Auth Services
 * */
export const login = async (data: LoginValues) => {
  const response = await apiClient.post('/auth/sign-in', {
    ...data,
  })
  return response
}

export const register = async (data: SignUpValues) => {
  const response = await apiClient.post('/auth/sign-up', {
    ...data,
  })
  return response
}

interface SendVerificationTokenBody {
  verificationToken: string | undefined // this may be undefined possible .. need to check
}

export const sendVerificationToken = async (
  data: SendVerificationTokenBody
) => {
  const response = await apiClient.post('/auth/email-verification', {
    ...data,
  })
  return response
}

export const sendForgotPasswordRequest = async (data: { email: string }) => {
  const response = await apiClient.post('/auth/forgot-password', {
    ...data,
  })
  return response
}

export const sendPasswordResetRequest = async (
  passwordResetToken: string,
  newPassword: string
) => {
  const response = await apiClient.put(
    `/auth/reset-password/${passwordResetToken}`,
    {
      newPassword,
    }
  )
  return response
}

export const resendEmailVerificationLink = async (email: string) => {
  const response = await apiClient.post('/auth/email-verification/resend', {
    email,
  })
  return response
}

export const getUser = async () => {
  const response = await apiClient.get<User>('/auth/user-info')
  return response.data
}
export const getDashboard = async () => {
  const response = await apiClient.get('/dashboard-info')
  return response.data
}

export const logout = async () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('x-auth-token')
  }
  const response = await apiClient.post('/auth/logout')
  return response
}

export const resendLink = async (email: string | undefined) => {
  const response = await apiClient.post('/auth/email-verification/resend', {
    email,
  })
  return response
}

export const submissionLink = async (submissionData: submissionValues) => {
  const response = await apiClient.post('submit', {
    ...submissionData,
  })
  return response
}

export const reSubmissionLink = async (
  reSubmissionData: reSubmissionValues
) => {
  const response = await apiClient.post('resubmit', {
    ...reSubmissionData,
  })
  return response
}
