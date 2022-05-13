/* eslint-disable no-shadow */
import {USER_UUID} from '../Constants/constants';

export function customerUuid(customerUuid) {
  return {
    type: USER_UUID,
    payload: {
      customerUuid: customerUuid,
    },
  };
}
