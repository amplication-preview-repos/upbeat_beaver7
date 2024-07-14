import * as graphql from "@nestjs/graphql";
import { UserActivationInput } from "../userManagement/UserActivationInput";
import { UserManagementService } from "./usermanagement.service";

export class UserManagementResolver {
  constructor(protected readonly service: UserManagementService) {}

  @graphql.Mutation(() => String)
  async SendActivationEmail(
    @graphql.Args()
    args: UserActivationInput
  ): Promise<string> {
    return this.service.SendActivationEmail(args);
  }
}
