


export interface User {
    email: string;
    password: string;
    role: 'admin' | 'user';
}


export interface RegisterFormValues {
    email: string;
    password: string;
    confirmPassword: string;
}


export interface LoginFormValues {
    email: string;
    password: string;
}


export interface UserAPIResponse {
    data: User;
    message: string;
    success: boolean;
}


export interface RegisterProps {
    onSubmit: (values: RegisterFormValues) => void;
}


export interface LoginProps {
    onSubmit: (values: LoginFormValues) => void;
}
