import {USER_UUID, USER_INFO} from '../Constants/constants';

const initialState = {
  customerUuid: '',
};

const userProfile = (state = initialState, action) => {
  switch (action.type) {
    case USER_UUID:
      return {
        ...state,
        customerUuid: action.payload.customerUuid,
      };
    case USER_INFO:
      return {
        ...state,
        customerInfo: action.payload.customerInfo,
      };
    default:
      return state;
  }
};

export default userProfile;
