
import { Entity, NgField, NgObject, EntityList, NgList, NgDynamic, DynamicEntity, NgEntity } from '@farris/devkit';

@NgEntity({
    originalCode: "ProjectsFanwz",
    nodeCode: "projectsFanwzs"
})
export class ProjectsFanwzEntity extends Entity {

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
        originalDataField: 'ProjectCode',
        dataField: 'projectCode',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'ProjectCode',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    projectCode: string;

    @NgField({
        originalDataField: 'ProjectName',
        dataField: 'projectName',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'ProjectName',

        validRules: [
            {
                type: 'maxLength',
                constraints: [512],
                message: '最大长度为512',
            }
        ]
    })
    projectName: string;

    @NgField({
        originalDataField: 'ProjectType',
        dataField: 'projectType',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'ProjectType',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    projectType: string;

    @NgField({
        originalDataField: 'ProjectNote',
        dataField: 'projectNote',
        originalDataFieldType: 'Text',
        initValue: '',
        path: 'ProjectNote',
    })
    projectNote: any;

    @NgField({
        originalDataField: 'ProjectSum',
        dataField: 'projectSum',
        originalDataFieldType: 'Number',
        initValue: 0,
        path: 'ProjectSum',
    })
    projectSum: any;

}