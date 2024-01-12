import { Jwt } from "../../applications/jwt/jwt";
import jwt from "jsonwebtoken"

export class TokenJwt implements Jwt {
  generate(payload: any) {
    const secretKey = "asdasdasd"
    const options = { expiresIn: "15min" }
    return jwt.sign(payload, secretKey, options)
  }
}