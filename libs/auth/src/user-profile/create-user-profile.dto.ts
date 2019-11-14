import { ApiModelProperty } from '@nestjs/swagger';

export class CreateUserProfileDto {
    @ApiModelProperty()
    readonly _id: number;

    @ApiModelProperty()
    readonly userId: string;

    @ApiModelProperty()
    readonly physicalAddress: string;

    @ApiModelProperty()
    readonly postalAddress: string;

    @ApiModelProperty()
    readonly cityOrState: string;

    @ApiModelProperty()
    readonly country: string;

    @ApiModelProperty()
    phoneNumbers: string[];

    @ApiModelProperty()
    readonly gender: string;

    @ApiModelProperty()
    readonly dateOfBirth: string;

}
