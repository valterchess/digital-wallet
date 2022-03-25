import User, {UserBankAccount, UserParams} from "@src/types/user";
import bankPartner from "@src/ports/bank-partner";
import userRepo from "@src/ports/repo/user";
import { uuid } from "uuidv4";

export default async (userParams: UserParams): Promise<UserBankAccount> => {
    const user: User = {
        id: uuid(),
        fullName: userParams.fullName,
    };

    await userRepo.insert(user);

    await bankPartner.createAccount(user);
    return {
        id: "",
        userId: user.id,
        bankCode: "",
        accountBranch: "",
        accounNumber: ""
    };
}