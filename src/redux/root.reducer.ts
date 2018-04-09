import { combineReducers } from 'redux'
import { reducer as formReducer, FormState } from 'redux-form'

export const reducer = combineReducers<RootState>({
  form: formReducer,
})

export interface RootState {
  form: FormState,
  test: any,
}
