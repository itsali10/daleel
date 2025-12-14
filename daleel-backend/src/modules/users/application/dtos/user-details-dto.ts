export class UserDetailsDTO{
    fullName: string;
    email: string;
    mobile: string;
    nationalId: string;
    dateOfBirth: Date;
    isSubscribed?: boolean;
    subscriptionStatus?: string;
}