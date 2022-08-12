export interface Server {
  hostname: string | undefined;
  protocol: string | undefined;
  port: string | undefined;
}

export interface Security {
  tokenAlgorithm: string | undefined;
  tokenKey: string | undefined;
  tokenPublicKey?: string | undefined;
  tokenPrivateKey?: string | undefined;
  tokenExpiry: string | undefined;
  refreshTokenAlgorithm?: string | undefined;
  refreshTokenKey?: string | undefined;
  refreshTokenExpiry?: string | undefined;
}

export interface DB {
  client: string | undefined;
  host: string | undefined;
  name: string | undefined;
  pass: string | undefined;
  user: string | undefined;
  port: string | undefined;
}

export interface Config {
  server: Server;
  serverString: string;
  security: Security;
  db: DB;
}
