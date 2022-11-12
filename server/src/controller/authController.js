const jose = require('jose');
const assert = require('assert');
const keys = require('../config');

const tenantId = keys.userfrontTenantID;
const publicKey = keys.userfrontPublicKey;

async function VerifyAuth(authHeader) {
  const [tokenFormat, accessToken] = authHeader.split(" ");
  assert(tokenFormat == "Bearer", "Invalid token format");

  const key = await jose.importSPKI(publicKey, "RS256");
  const { payload } = await jose.jwtVerify(accessToken, key, {
    algorithms: ["RS256"],
  });

  return (payload.tenantId == tenantId && payload.iss == "userfront");
}

module.exports.VerifyAuth = VerifyAuth;