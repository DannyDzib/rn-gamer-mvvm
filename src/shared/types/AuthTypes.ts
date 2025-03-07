export type FirebaseAuthError = Error & {
    code: string;
    message: string;
};
