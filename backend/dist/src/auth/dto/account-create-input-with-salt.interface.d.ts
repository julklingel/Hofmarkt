import { AccountCreateInput } from '../../../node_modules/.prisma/client';
export interface AccountCreateInputWithSalt extends AccountCreateInput {
    salt: string;
}
