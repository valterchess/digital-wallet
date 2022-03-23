import { expect } from 'chai';
import signupComplete from '@src/controllers/signup-complete';
import { SinonStub, stub, restore } from 'sinon';
import signupRepo from "@src/ports/repos/signup"

let insertSignup: SinonStub;

describe("signup complete", () => {

  beforeEach(() => {
    insertSignup = stub(signupRepo, "insert").resolves();
  });

  afterEach(() => restore());
});