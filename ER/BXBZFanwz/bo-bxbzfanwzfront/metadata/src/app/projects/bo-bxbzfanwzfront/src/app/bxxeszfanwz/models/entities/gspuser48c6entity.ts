
import { Entity, NgField, NgObject, EntityList, NgList, NgDynamic, DynamicEntity, NgEntity } from '@farris/devkit';

@NgEntity({
    originalCode: "BXRY",
    nodeCode: "bxry"
})
export class GspUser48c6Entity extends Entity {

    @NgField({
        originalDataField: 'BXRY',
        dataField: 'bxry',
        primary: true,
        originalDataFieldType: 'String',
        initValue: '',
        path: 'BXRY.BXRY',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    bxry: string;

    @NgField({
        originalDataField: 'Name',
        dataField: 'bxrY_Name',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'BXRY.BXRY_Name',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    bxrY_Name: string;

}