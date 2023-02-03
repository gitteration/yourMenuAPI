import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    constructor(

    ) {}
    main():string{
        return 'yourMenu API Server';
    }
}
