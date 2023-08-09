//@ts-check
const forge = require('node-forge');
const fs = require('fs');

const PUBLIC_PATH = `${__dirname}/public.key`;
const PRIVATE_PATH = `${__dirname}/private.key`;

const generatePulicPrivate = () => {
  const { pki } = forge;
  const { rsa } = pki;

  const { privateKey, publicKey } = rsa.generateKeyPair({
    bits: 512,
    workers: 2,
  });

  const privatePEM = pki.privateKeyToPem(privateKey);
  const publicPEM = pki.publicKeyToPem(publicKey);

  return {
    privateKey: privatePEM,
    publicKey: publicPEM,
  };
};

const generate = () => {
  const { publicKey, privateKey } = generatePulicPrivate();

  fs.writeFileSync(PUBLIC_PATH, publicKey);
  fs.writeFileSync(PRIVATE_PATH, privateKey);

  console.log(
    '---------------- NEW PUBLIC AND PRIVATE CREATED ------------------'
  );
};

generate();
