import * as tslib_1 from "tslib";
import { Entity, NgField, NgEntity } from '@farris/devkit';
var ProjectsFanwzEntity = /** @class */ (function (_super) {
    tslib_1.__extends(ProjectsFanwzEntity, _super);
    function ProjectsFanwzEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        NgField({
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
        }),
        tslib_1.__metadata("design:type", String)
    ], ProjectsFanwzEntity.prototype, "id", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'Version',
            dataField: 'version',
            originalDataFieldType: 'DateTime',
            initValue: '0001-01-01T00:00:00',
            path: 'Version',
            enableTimeZone: true,
        }),
        tslib_1.__metadata("design:type", String)
    ], ProjectsFanwzEntity.prototype, "version", void 0);
    tslib_1.__decorate([
        NgField({
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
        }),
        tslib_1.__metadata("design:type", String)
    ], ProjectsFanwzEntity.prototype, "projectCode", void 0);
    tslib_1.__decorate([
        NgField({
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
        }),
        tslib_1.__metadata("design:type", String)
    ], ProjectsFanwzEntity.prototype, "projectName", void 0);
    tslib_1.__decorate([
        NgField({
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
        }),
        tslib_1.__metadata("design:type", String)
    ], ProjectsFanwzEntity.prototype, "projectType", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'ProjectNote',
            dataField: 'projectNote',
            originalDataFieldType: 'Text',
            initValue: '',
            path: 'ProjectNote',
        }),
        tslib_1.__metadata("design:type", Object)
    ], ProjectsFanwzEntity.prototype, "projectNote", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'ProjectSum',
            dataField: 'projectSum',
            originalDataFieldType: 'Number',
            initValue: 0,
            path: 'ProjectSum',
        }),
        tslib_1.__metadata("design:type", Object)
    ], ProjectsFanwzEntity.prototype, "projectSum", void 0);
    ProjectsFanwzEntity = tslib_1.__decorate([
        NgEntity({
            originalCode: "ProjectsFanwz",
            nodeCode: "projectsFanwzs"
        })
    ], ProjectsFanwzEntity);
    return ProjectsFanwzEntity;
}(Entity));
export { ProjectsFanwzEntity };
