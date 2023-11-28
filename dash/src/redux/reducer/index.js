import {
  ALGO,
  TOGGLE_COLOR_MODE,
  SIDEBAR_PROVIDER,
  WINDOW_SIZE,
  IS_COLLAPSED,
} from '../actions/types';

const initialState = {
  algo: null,
  mode: 'light',
  sizeWindows: {},
  isCollapsed: true,
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ALGO:
      return {
        ...state,
        algo: payload,
      };
    case TOGGLE_COLOR_MODE:
      return { ...state, mode: state.mode === 'light' ? 'dark' : 'light' };
    case WINDOW_SIZE:
      return { ...state, sizeWindows: payload };
    case IS_COLLAPSED:
      return {
        ...state,
        isCollapsed: state.isCollapsed === true ? false : true,
      };
    default:
      return state;
  }
};

export default rootReducer;
