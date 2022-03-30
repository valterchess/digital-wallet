import { expect } from 'chai';
import { SignupInitParams } from '@src/types/signup';
import signupInit from '@src/controllers/signup-init'; // importa a function com um alias
import { SinonStub, stub, restore } from 'sinon';
import signupRepo from "@src/ports/repos/signup"

let insertSignup: SinonStub;

describe("signup initialization", () => {

  beforeEach(() => {
    insertSignup = stub(signupRepo, "insert").resolves();
  });

  afterEach(() => restore());
  // teste do recurso do end-point de signup de um recurso (client)
  it("return a signup token as response to signup initialization", async () => {

    const signup = await signupInit(signupParams);
    // verificando a resposta do token
    expect(signup.token).to.be.a("string").that.has.length(36);
  });

  it("return a signup with init params that sent to the function", async () => {

    const signup = await signupInit(signupParams);
    // verifica se o objeo retornado é o requerido
    expect(signup.initParams).to.be.deep.equal(signupParams);
  });

  it("persist signup in the database", async () => {

    const signup = await signupInit(signupParams);

    // verifica se o objeto está sendo persisitido no banco de dados
    expect(insertSignup).to.have.been.calledOnce;
    expect(insertSignup).to.have.been.calledWith(signup);
  });

  // implementação de um recurso para teste
  // os elementos utilizados aqui são obrigatórios para a criação de um usuário
  // ou, para fazer o signup.
  const signupParams: SignupInitParams = {
    fullName: "Some Body",
    dateOfBirth: "1990-01-01",
    address: "av. Somestreet, 123",
  };
});

