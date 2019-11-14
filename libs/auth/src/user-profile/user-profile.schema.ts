
import * as mongoose from 'mongoose';

export const UserProfileSchema = new mongoose.Schema({
    userId: String,
    physicalAddress: String,
    postalAddress: String,
    cityOrState: String,
    country: String,
    phoneNumbers: String,
    gender: String,
    dateOfBirth: String

});

