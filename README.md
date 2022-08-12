# ts-config-setup-notes

### .env.example

```env
SERVER_PROTOCOL             = http
SERVER_HOSTNAME             = localhost
SERVER_PORT                 = 4000

DATABASE_CLIENT             = sqlite3
# DATABASE_HOST             = localhost
DATABASE_NAME               = entix.dev.sqlite3
# DATABASE_USER             = admin
# DATABASE_PASS             = password
# DATABASE_PORT             = 3421

TOKEN_ALGORITHM             = sha256
TOKEN_KEY                   = e49727a8efd14755550c30b8e2bb3109c27b197a
TOKEN_PUBLIC_KEY            = -----BEGIN PUBLIC KEY-----\nMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCXJOz69dTo4sJE9m5q+b9fq8/k\niqtFZIT4taqofh77Bw7LIlrm/Oi1GR90G50ofkuikgHnwIAWzF7Su6G3scoyyRLi\n4GCENaxb6VgoinvqVB1AcHjmRdXT1nwrYOehEzMmmX4vOH6EE9j2RRP+jZv+NWQV\nG+WaB7IeOt0s/ygGJQIDAQAB\n-----END PUBLIC KEY-----
TOKEN_PRIVATE_KEY           = -----BEGIN RSA PRIVATE KEY-----\nMIICXAIBAAKBgQCXJOz69dTo4sJE9m5\n/Oi1GR90G50ofkuikgHnwIAWzF7Su6G\nRdXT1nwrYOehEzMmmX4vOH6EE9j2RRP\nAoGACVcc1f1vJN0uiDh6Zl38t5rUhBk\nSSxU3D0NpRa+U6pZichSnBl+l0BbsXa\nLVMSooyYshcJp0KmrLB73PUxMyONvF+\nyid5G4ZElsmf59KiuvnpqkcxXx6798V\nVCVFFXYDAkEAriV8uEy5bXcC853sZ6L\nS59gfR1dxubSVTmC5lLHxmQYK/o7r8m\nyE4ihYyFRpc2HicOa9z76DZ+rvirbOg\ncFAROrnBpfnvrZhISa2QofkMQV6GXRO\nZU+EdeQuh87AQygvW6sCQGw6a+qNkkY\nn28M+ldQSUqdf69E8wgZTMtQ1P7cCePpYdOXLJ7pRuY=\n-----END RSA PRIVATE KEY-----
TOKEN_EXPITY                = 10m

REFRESH_TOKEN_ALGORITHM     = sha256
REFRESH_TOKEN_KEY           = b348ce72e90758979c56153536230ca397dbe130
REFRESH_TOKEN_EXPITY        = 7d
```

### default.config.ts

```ts
import dotenv from "dotenv";
import { join } from "path";
import { Config } from "./config.interfaces";
import url from "url";
const path = join(__dirname, "../..", `.env.${process.env.NODE_ENV}`);
dotenv.config({ path });

export const config: Config = {
  server: {
    protocol: process.env.SERVER_PROTOCOL,
    hostname: process.env.SERVER_HOSTNAME,
    port: process.env.SERVER_PORT,
  },
  get serverString(): string {
    return url.format(this.server);
  },
  security: {
    tokenAlgorithm: process.env.TOKEN_ALGORITHM,
    tokenKey: process.env.TOKEN_KEY,
    tokenExpiry: process.env.TOKEN_EXPITY,
    refreshTokenAlgorithm: process.env.REFRESH_TOKEN_ALGORITHM,
    refreshTokenKey: process.env.REFRESH_TOKEN_KEY,
    refreshTokenExpiry: process.env.REFRESH_TOKEN_EXPITY,
  },
  db: {
    client: process.env.DATABASE_CLIENT,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    name: process.env.DATABASE_NAME,
    user: process.env.DATABASE_USER,
    pass: process.env.DATABASE_PORT,
  },
};
```

### package.json

```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "app": "nodemon --watch './**/*.ts' --exec 'ts-node' ./src/app.ts",
    "dev": "NODE_ENV=development npm run app",
    "prod": "NODE_ENV=production npm run app",
    "build": "tsc --build --clean && NODE_ENV=production tsc",
    "start": "NODE_ENV=production node dist/app.js",
    "knex": "./node_modules/.bin/knex --knexfile src/database/knexfile.ts",
    "knex:dev": "NODE_ENV=development npm run knex",
    "knex:prod": "NODE_ENV=production npm run knex"
},
```
