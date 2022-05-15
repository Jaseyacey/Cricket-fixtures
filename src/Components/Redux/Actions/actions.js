/* eslint-disable no-shadow */
import {USER_UUID, USER_INFO} from '../Constants/constants';

export function customerUuid(customerUuid) {
  return {
    type: USER_UUID,
    payload: {
      customerUuid: customerUuid,
    },
  };
}

export function customerInfo(customerInfo) {
  return {
    type: USER_INFO,
    payload: {
      customerInfo: customerInfo,
    },
  };
}
