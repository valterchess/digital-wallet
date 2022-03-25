import User, { UserBankAccount, UserParams } from "@src/types/user";
import bankPartner from "@src/ports/bank-partner";
import userRepo from "@src/ports/repo/user";
import userBankAccountRepo from "@src/ports/repo/user-bank-account";
import { uuid } from "uuidv4";
import BankAccount from "@src/types/bank-account";

export default async (userParams: UserParams): Promise<UserBankAccount> => {
    const user: User = {
        id: uuid(),
        fullName: userParams.fullName,
    };


    await userRepo.insert(user);

    const bankAccount = await bankPartner.createAccount(user);
    const userBanckAccount: UserBankAccount = {
        id: uuid(),
        userId: user.id,
        bankCode: bankAccount.bankCode,
        accountBranch: bankAccount.accountBranch,
        accountNumber: bankAccount.accountNumber,
    };

    await userBankAccountRepo.insert(userBanckAccount);
    return userBanckAccount;
}

