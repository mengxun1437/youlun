import { Effect, Reducer } from 'umi'
import { IConnectState } from '@/models/connect'

export interface IAppModalState {
  collapsed: boolean
  layout: 'horizontal' | 'vertical' | 'inline'
}

interface IModel {
  state: IAppModalState
  effects: {
    toggleSider: Effect
  }
  reducers: {
    updateState: Reducer<IAppModalState>
  }
}

const AppModel: IModel = {
  state: {
    collapsed: false,
    layout: 'horizontal'
  },

  effects: {
    *toggleSider({ payload }, { put, select }) {
      const collapsed =
        payload === 'hover' ? false : yield select(({ app }: IConnectState) => !app.collapsed)
      yield put({
        type: 'updateState',
        payload: {
          collapsed
        }
      })
    }
  },

  reducers: {
    updateState(state, { payload }) {
      return {
        ...state,
        ...payload
      }
    }
  }
}

export default AppModel
