import { expect } from "chai";
import {SinonStub, stub, restore} from "sinon";
import bankPartner  from "@src/ports/bank-partner";
import { UserParams } from "@src/types/user";
import createBankAccount from "@src/controllers/create-bank-account";

let createAccountBankPartner: SinonStub;

describe("Create bank Account", () => {
    beforeEach(() => {
        createAccountBankPartner = stub(bankPartner, "createAccount");
    })
    afterEach(() => restore());
    it("Call a bank partner to create a bank account", async () =>  {
        const userParams:  UserParams = {
            fullName: "Some Body",
        };

        await createBankAccount(userParams);

        expect(createAccountBankPartner).to.have.been.calledOnce;
    });
})