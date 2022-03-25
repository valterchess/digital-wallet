import { UserBankAccount } from "@src/types/user"
import userBankAccount from "../repo/user-bank-account"

const created = async (userBankAccount: UserBankAccount): Promise<void> => {}

export default {
    created,
}