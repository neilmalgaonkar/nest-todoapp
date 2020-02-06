import { Controller, Get, Req, Param, HttpException, HttpStatus } from '@nestjs/common';
import { Request } from 'express';
import { Promise } from 'bluebird';

@Controller('cats')
export default class CatsController {
    @Get()
    getCats(@Req() request: Request): any {
        return request.rawHeaders;
    }

    @Get(':cat_id')
    getCat(@Req() request: Request, @Param() params): any {
        throw new HttpException('Not Authorized', HttpStatus.NOT_FOUND);
    }

    @Get('archived')
    async getAllArchivedCats(): Promise<any[]> {
        const resolver = () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(['neil malgaonkar']);
                }, 500);
            });
        };
        return await resolver();
    }
}