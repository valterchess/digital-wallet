import {expect}  from 'chai';
import {SignupInitParams} from '@src/types/signup';
import  signupInit  from '@src/controllers/signup-init'; // importa a function com um alias

describe("signup initialization", () => {

  // teste do recurso do end-point de signup de um recurso (client)
  it("return a signup token as response  to signup initialization", async () => {

    // implementação de um recurso para teste
    // os elementos utilizados aqui são obrigatórios para a criação de um usuário
    // ou, para fazer o signup.
      const signupParams: SignupInitParams = {
        fullName: "Some Body",
        dateOfBirth:"1990-01-01",
        address: "av. Somestreet, 123",
      };

      const signup = await signupInit(signupParams);

      expect(signup.token).to.be.a("string").that.has.length(36);
  });
});