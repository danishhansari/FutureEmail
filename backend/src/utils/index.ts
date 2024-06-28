import { sign } from "hono/jwt";
import { JWTPayload } from "hono/utils/jwt/types";

export const getJWTAndOption = async (payload: JWTPayload, secret: string) => {
  const jwt = await sign(payload, secret);
  const options = {
    sameSite: "strict",
    httpOnly: true,
    secure: true,
    expires: thirtyDaysFromNow(),
  };
  return { jwt, options };
};

const thirtyDaysFromNow = (): Date =>
  new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
