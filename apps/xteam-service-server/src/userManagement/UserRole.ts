import { User } from "../user/base/User";
import { registerEnumType } from "@nestjs/graphql";

export enum UserRole {
    Admin = "admin",
    Hr = "hr",
    User = "user"
}

registerEnumType(UserRole, {
    name: "UserRole",
  });