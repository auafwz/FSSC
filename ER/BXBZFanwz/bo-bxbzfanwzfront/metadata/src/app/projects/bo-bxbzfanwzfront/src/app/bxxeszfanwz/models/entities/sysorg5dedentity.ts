
import { Entity, NgField, NgObject, EntityList, NgList, NgDynamic, DynamicEntity, NgEntity } from '@farris/devkit';

@NgEntity({
    originalCode: "BXDW",
    nodeCode: "bxdw"
})
export class SysOrg5dedEntity extends Entity {

    @NgField({
        originalDataField: 'BXDW',
        dataField: 'bxdw',
        primary: true,
        originalDataFieldType: 'String',
        initValue: '',
        path: 'BXDW.BXDW',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    bxdw: string;

    @NgField({
        originalDataField: 'name',
        dataField: 'bxdW_name',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'BXDW.BXDW_name',

        validRules: [
            {
                type: 'maxLength',
                constraints: [100],
                message: '最大长度为100',
            }
        ]
    })
    bxdW_name: string;

}