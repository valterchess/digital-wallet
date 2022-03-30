import User, { UserBankAccount, UserParams } from "@src/types/user";
import bankPartner from "@src/ports/bank-partner";
import userRepo from "@src/ports/repo/user";
import userBankAccountRepo from "@src/ports/repo/user-bank-account";
import { uuid } from "uuidv4";
import userbankAccountNotifiers from "@src/ports/notifiers/user-bank-account";

export default async (userParams: UserParams): Promise<UserBankAccount> => {

    //constroi um novo usuário com os atributos recebidos no parametro
    const user: User = {
        id: uuid(), // constroi um id genérico, que será verificado de acordo com o tamanho da string
        fullName: userParams.fullName, // recebe o valor de fullName do parametro (definido no test)
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
    await userbankAccountNotifiers.created(userBanckAccount);
    return userBanckAccount;
}

