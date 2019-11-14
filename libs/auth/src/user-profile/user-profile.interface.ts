import { Document } from 'mongoose';

export interface UserProfile extends Document{
    readonly userId: string;
    readonly physicalAddress: string;
    readonly postalAddress: string;
    readonly cityOrState: string;
    readonly country: string;
    readonly phoneNumbers: string[];
    readonly gender: string;
    readonly dateOfBirth: string;
}

