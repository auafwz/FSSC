import * as tslib_1 from "tslib";
import { Entity, NgField, NgObject, NgEntity } from '@farris/devkit';
import { GspUser48c6Entity } from './gspuser48c6entity';
import { SysOrg5dedEntity } from './sysorg5dedentity';
var BXBZFanwzEntity = /** @class */ (function (_super) {
    tslib_1.__extends(BXBZFanwzEntity, _super);
    function BXBZFanwzEntity() {
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
    ], BXBZFanwzEntity.prototype, "id", void 0);
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
    ], BXBZFanwzEntity.prototype, "version", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'JE',
            dataField: 'je',
            originalDataFieldType: 'Number',
            initValue: 0,
            path: 'JE',
        }),
        tslib_1.__metadata("design:type", Object)
    ], BXBZFanwzEntity.prototype, "je", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'KSRQ',
            dataField: 'ksrq',
            originalDataFieldType: 'Date',
            initValue: '0001-01-01T00:00:00',
            path: 'KSRQ',
        }),
        tslib_1.__metadata("design:type", String)
    ], BXBZFanwzEntity.prototype, "ksrq", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'JSRQ',
            dataField: 'jsrq',
            originalDataFieldType: 'Date',
            initValue: '0001-01-01T00:00:00',
            path: 'JSRQ',
        }),
        tslib_1.__metadata("design:type", String)
    ], BXBZFanwzEntity.prototype, "jsrq", void 0);
    tslib_1.__decorate([
        NgField({
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
        }),
        tslib_1.__metadata("design:type", String)
    ], BXBZFanwzEntity.prototype, "bz", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'QT',
            dataField: 'qt',
            originalDataFieldType: 'Boolean',
            initValue: false,
            path: 'QT',
        }),
        tslib_1.__metadata("design:type", Object)
    ], BXBZFanwzEntity.prototype, "qt", void 0);
    tslib_1.__decorate([
        NgObject({
            dataField: 'bxry',
            originalDataField: 'BXRY',
            type: GspUser48c6Entity
        }),
        tslib_1.__metadata("design:type", GspUser48c6Entity)
    ], BXBZFanwzEntity.prototype, "bxry", void 0);
    tslib_1.__decorate([
        NgObject({
            dataField: 'bxdw',
            originalDataField: 'BXDW',
            type: SysOrg5dedEntity
        }),
        tslib_1.__metadata("design:type", SysOrg5dedEntity)
    ], BXBZFanwzEntity.prototype, "bxdw", void 0);
    BXBZFanwzEntity = tslib_1.__decorate([
        NgEntity({
            originalCode: "BXBZFanwz",
            nodeCode: "bxbzFanwzs"
        })
    ], BXBZFanwzEntity);
    return BXBZFanwzEntity;
}(Entity));
export { BXBZFanwzEntity };
