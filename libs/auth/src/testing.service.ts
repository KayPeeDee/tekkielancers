import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class TestingService {
    constructor(
        // private readonly jwtService: JwtService
    ){}

    async greetings(){
        return "Hello World";
    }
}
