import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import { jwtConstants } from "./constants";
import { AuthService } from "./auth.service";

@Injectable()

export class JwtStrategy extends PassportStrategy(Strategy){
    
    constructor(private readonly authService: AuthService){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: jwtConstants.secret
        });
    }

    async validate(payload: any){
        console.log(payload);
        return { id: payload.sub, username: payload.username};
    }

    // async validate(req: Request, payload: any) {
    //     const user = await this.authService.validateUser(payload.username, payload.password);
    //     if (!user) {
    //         //  throw new UnauthorizedException();
    //         return user
    //     }
    //     return user;
    // }
} 