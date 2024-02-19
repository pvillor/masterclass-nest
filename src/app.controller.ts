import { Body, Controller, Post } from '@nestjs/common';
import { CreateTeamMemberBody } from './dtos/create-team-member-body';
import {
  Member,
  RocketMembersRepository,
} from './repositories/rocket-members-repository';

@Controller('app')
export class AppController {
  constructor(private rocketMembersRespository: RocketMembersRepository) {}

  @Post('hello')
  async getHello(@Body() body: CreateTeamMemberBody): Promise<Member> {
    const { name, function: memberFunction } = body;

    return await this.rocketMembersRespository.create(name, memberFunction);
  }
}
