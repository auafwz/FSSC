
import { Entity, NgField, NgObject, EntityList, NgList, NgDynamic, DynamicEntity, NgEntity } from '@farris/devkit';
import { GspUser48c6Entity } from './gspuser48c6entity';
import { SysOrg5dedEntity } from './sysorg5dedentity';

@NgEntity({
    originalCode: "BXBZFanwz",
    nodeCode: "bxbzFanwzs"
})
export class BXBZFanwzEntity extends Entity {

    @NgField({
        originalDataField: 'ID',
        dataField: 'id',
        primary: true,
        originalDataFieldType: 'String',
        initValue: '',
        path: 'ID',

        validRules: [
            {
                type: 'required',
                constraints: [true],
            },
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    id: string;

    @NgField({
        originalDataField: 'Version',
        dataField: 'version',
        originalDataFieldType: 'DateTime',
        initValue: '0001-01-01T00:00:00',
        path: 'Version',
        enableTimeZone: true,
    })
    version: string;

    @NgField({
        originalDataField: 'JE',
        dataField: 'je',
        originalDataFieldType: 'Number',
        initValue: 0,
        path: 'JE',
    })
    je: any;

    @NgField({
        originalDataField: 'KSRQ',
        dataField: 'ksrq',
        originalDataFieldType: 'Date',
        initValue: '0001-01-01T00:00:00',
        path: 'KSRQ',
    })
    ksrq: string;

    @NgField({
        originalDataField: 'JSRQ',
        dataField: 'jsrq',
        originalDataFieldType: 'Date',
        initValue: '0001-01-01T00:00:00',
        path: 'JSRQ',
    })
    jsrq: string;

    @NgField({
        originalDataField: 'BZ',
        dataField: 'bz',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'BZ',

        validRules: [
            {
                type: 'maxLength',
                constraints: [10],
                message: '最大长度为10',
            }
        ]
    })
    bz: string;

    @NgField({
        originalDataField: 'QT',
        dataField: 'qt',
        originalDataFieldType: 'Boolean',
        initValue: false,
        path: 'QT',
    })
    qt: any;

    @NgObject({
        dataField: 'bxry',
        originalDataField: 'BXRY',
        type: GspUser48c6Entity
    })
    bxry: GspUser48c6Entity;
    @NgObject({
        dataField: 'bxdw',
        originalDataField: 'BXDW',
        type: SysOrg5dedEntity
    })
    bxdw: SysOrg5dedEntity;
}