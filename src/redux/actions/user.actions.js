import { LOGIN, SIGNUP, AUTHENTICATED }  from '../../constants'

export const login = credentials => (
  { type: LOGIN, payload: credentials }
)

export const signup = user => (
  { type: SIGNUP, payload: user }
)

export const authenticated = (isAuthenticated) => ({
  type: AUTHENTICATED, payload: isAuthenticated 
});