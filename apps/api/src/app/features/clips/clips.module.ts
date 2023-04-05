import { Module } from '@nestjs/common';
import { ClipsController } from './clips.controller';
import { ClipsService } from './clips.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';

@Module({
    controllers: [ClipsController],
    imports: [
        HttpModule,
        ConfigModule,
    ],
    providers: [
        ClipsService
    ],
    exports: [ClipsService]
})
export class ClipsModule {}
