import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClipsModule } from './features/clips/clips.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ClipsModule,
  ]
})
export class AppModule {}
