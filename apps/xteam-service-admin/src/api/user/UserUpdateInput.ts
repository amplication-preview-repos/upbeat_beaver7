import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  role?: "Option1" | null;
  isActive?: boolean | null;
  activationToken?: string | null;
};
