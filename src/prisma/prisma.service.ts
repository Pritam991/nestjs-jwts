/* eslint-disable prettier/prettier */
import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';



@Injectable()
export class PrismaService extends PrismaClient, implements OnModuleInit, OnModuleDestroy {
    
    constructor(){
        super({
            datasources: {
                db: {
                    url: 'postgresql://postgres:123@localhost:5432/nestjs-1?schema=public',
                },
            },
        });
    }

    onModuleInit(){
        await this.$connect();
    }


    onModuleDestroy(){
        await this.$disconnect();
    }
}
