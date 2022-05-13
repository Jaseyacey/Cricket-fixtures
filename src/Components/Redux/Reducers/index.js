import {USER_UUID} from '../Constants/constants';

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
    default:
      return state;
  }
};

export default userProfile;
