import { Injectable } from "@nestjs/common";
import { UserActivationInput } from "../userManagement/UserActivationInput";

@Injectable()
export class UserManagementService {
  constructor() {}
  async SendActivationEmail(args: UserActivationInput): Promise<string> {
    throw new Error("Not implemented");
  }
}
