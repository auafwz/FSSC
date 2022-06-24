import * as tslib_1 from "tslib";
import { Entity, NgField, NgEntity } from '@farris/devkit';
var GspUser48c6Entity = /** @class */ (function (_super) {
    tslib_1.__extends(GspUser48c6Entity, _super);
    function GspUser48c6Entity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        NgField({
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
        }),
        tslib_1.__metadata("design:type", String)
    ], GspUser48c6Entity.prototype, "bxry", void 0);
    tslib_1.__decorate([
        NgField({
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
        }),
        tslib_1.__metadata("design:type", String)
    ], GspUser48c6Entity.prototype, "bxrY_Name", void 0);
    GspUser48c6Entity = tslib_1.__decorate([
        NgEntity({
            originalCode: "BXRY",
            nodeCode: "bxry"
        })
    ], GspUser48c6Entity);
    return GspUser48c6Entity;
}(Entity));
export { GspUser48c6Entity };
