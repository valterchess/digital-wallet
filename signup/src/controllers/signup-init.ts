import Signup, { SignupInitParams } from "@src/types/signup";
import { uuid } from 'uuidv4';
import signupRepo from '@src/ports/repos/signup';
/**
 * O modelo de arquitetura aqui é o hexagonal.
 * Neste modelo o controller não é MVC.
 * Aqui ele tem um papel differente
 */
export default async (signupInitParams: SignupInitParams): Promise<Signup> => {
    const signup: Signup = {
        token: uuid(), // token de 36 caracteres proveniente da função uuid()
        initParams: signupInitParams,
    };

    await signupRepo.insert(signup);

    return signup;
};