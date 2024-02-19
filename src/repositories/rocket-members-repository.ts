export type Member = {
  id: string;
  name: string;
  function: string;
};

export abstract class RocketMembersRepository {
  abstract create(name: string, memberFunction: string): Promise<Member>;
}
