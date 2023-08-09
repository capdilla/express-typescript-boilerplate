import jwt from 'jsonwebtoken';
import getCerts from './getCerts.helper';

export const sign = (payload: any) => {
  const { privateKey } = getCerts();

  return jwt.sign(payload, privateKey, {
    algorithm: 'RS256',
    expiresIn: '8h',
  });
};

export function decode<T>(token: string): Promise<T | null> {
  return new Promise((resolve, reject) => {
    jwt.verify(token, getCerts().publicKey, function (err: any, decoded: any) {
      if (err) {
        return reject(err);
      }

      resolve(decoded as T);
    });
  });
}
