const fs = require('fs');

const path = require('path');
const PATH = path.join(__dirname, '../..', '/cert');

const PUBLIC_PATH = `${PATH}/public.key`;
const PRIVATE_PATH = `${PATH}/private.key`;

const getCerts = () => {
  try {
    const privateKey = fs.readFileSync(PRIVATE_PATH).toString('utf-8');
    const publicKey = fs.readFileSync(PUBLIC_PATH).toString('utf-8');
    return {
      privateKey,
      publicKey,
    };
  } catch (error) {
    throw new Error(
      'Public and private key must be create, please execute the command `npm run cert`'
    );
  }
};

export default getCerts;
