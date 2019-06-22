import { LOGIN }  from '../../constants'

export const login = credentials => (
  { type: LOGIN, payload: credentials }
)
