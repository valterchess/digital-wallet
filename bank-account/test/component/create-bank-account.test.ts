import { expect } from "chai";
import { SinonStub, stub, restore } from "sinon";
import userRepo from "@src/ports/repo/user";
import bankPartner from "@src/ports/bank-partner";
import User, { UserParams } from "@src/types/user";
import createBankAccount from "@src/controllers/create-bank-account";

let createAccountBankPartner: SinonStub;
let insertUser: SinonStub;

describe("Create bank Account", () => {
    beforeEach(() => {
        createAccountBankPartner = stub(bankPartner, "createAccount");
        insertUser = stub(userRepo, "insert");
    })
    afterEach(() => restore());

    it("Call a bank partner to create a bank account", async () => {
        const userParams: UserParams = {
            fullName: "Some Body",
        };

        await createBankAccount(userParams);

        expect(createAccountBankPartner).to.have.been.calledOnce;
    });


    it("Persist user in the database", async () => {
        const userParams: UserParams = {
            fullName: "Some Body",
        };

        await createBankAccount(userParams);

        expect(insertUser).to.have.been.calledOnce;

        const insertedUser = insertUser.getCall(0).args[0] as User;
        expect(insertedUser.id).to.be.a("string").that.has.length(36);
        expect(insertedUser.fullName).to.be.equal("Some Body");
    });

});