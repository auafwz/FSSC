import * as tslib_1 from "tslib";
import { Entity, NgField, NgEntity } from '@farris/devkit';
var SysOrg5dedEntity = /** @class */ (function (_super) {
    tslib_1.__extends(SysOrg5dedEntity, _super);
    function SysOrg5dedEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        NgField({
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
        }),
        tslib_1.__metadata("design:type", String)
    ], SysOrg5dedEntity.prototype, "bxdw", void 0);
    tslib_1.__decorate([
        NgField({
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
        }),
        tslib_1.__metadata("design:type", String)
    ], SysOrg5dedEntity.prototype, "bxdW_name", void 0);
    SysOrg5dedEntity = tslib_1.__decorate([
        NgEntity({
            originalCode: "BXDW",
            nodeCode: "bxdw"
        })
    ], SysOrg5dedEntity);
    return SysOrg5dedEntity;
}(Entity));
export { SysOrg5dedEntity };
