// interface responsável pelo contrato de solicitação
// dos dados iniciais para a construção da conta do cliente (user) | cadastro
export interface SignupInitParams {
   readonly fullName: string; // elementos readonly são definidos no construtor e não podem ser alterados depois
   readonly dateOfBirth: string;
   readonly address: string;
}

export type SignupStatus = "IN_PROGRESS" | "COMPLETE";

// interface responsável pela autenticação dos dados do user
// soolicita inicialmente um token de acesso e os dados iniciais
// podendo opcionalmente solicitar dados de mídia para
 // a confirmação de dados
export default interface Signup {
    readonly token: string;
    readonly status: SignupStatus;
    readonly initParams: SignupInitParams;
    readonly selfie?: string;
    readonly frontDocumentPicture?: string;
    readonly backDocumentPicture?: string;
}