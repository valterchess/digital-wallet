import Signup, { SignupInitParams } from "@src/types/signup";
import { uuid } from 'uuidv4';
/**
 * O modelo de arquitetura aqui é o hexagonal.
 * Neste modelo o controller não é MVC.
 * Aqui ele tem um papel differente
 */
export default async (signupInitParams: SignupInitParams): Promise<Signup> => {
    return {
        token: uuid(), // token de 36 caracteres proveniente da função uuid()
        initParams: signupInitParams,
    };
};