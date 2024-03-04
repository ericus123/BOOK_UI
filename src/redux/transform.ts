import CryptoJS from "crypto-js";
import { createTransform } from "redux-persist";

const encryptionKey = `${process.env.REDUX_TRANSFORM_KEY}`;

const encryptTransform = createTransform(
  // Transform state on its way to being serialized and stored
  (inboundState) => {
    const encryptedState = CryptoJS.AES.encrypt(
      JSON.stringify(inboundState),
      encryptionKey
    ).toString();
    return encryptedState;
  },
  // Transform state being rehydrated
  (outboundState) => {
    const decryptedState = CryptoJS.AES.decrypt(
      outboundState,
      encryptionKey
    ).toString(CryptoJS.enc.Utf8);
    return JSON.parse(decryptedState);
  }
);

export default encryptTransform;
