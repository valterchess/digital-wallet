import {expect}  from 'chai';
import {SignupInitParams} from '@src/types/signup';
import { SignupInit } from '@src/controllers/signup-init';
import { highlightTrailingWhitespace } from 'jest-matcher-utils';

describe("signup initialization", () => {
  it("return a signup token as response  to signup initialization", async () => {

      const signupParams: SignupInitParams = {
        fullName: "Some Body",
        dateOfBirth:"1990-01-01",
        address: "av. Somestreet, 123",
      };

      const signup = await signupInit(signupParams);

      expect(signup.token).to.be.a("string").that.has.length(36);
  });
});