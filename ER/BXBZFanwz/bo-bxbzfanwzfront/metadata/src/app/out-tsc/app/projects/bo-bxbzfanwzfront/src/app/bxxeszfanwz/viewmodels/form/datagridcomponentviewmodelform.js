import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Form, NgFormControl, NgValidateForm } from '@farris/devkit';
import { DateConverter } from '@farris/kendo-binding';
var DataGridComponentViewmodelForm = /** @class */ (function (_super) {
    tslib_1.__extends(DataGridComponentViewmodelForm, _super);
    function DataGridComponentViewmodelForm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        NgFormControl({
            id: 'je',
            name: "{{je_88937e19_97r1}}",
            binding: 'je',
            updateOn: 'blur',
            defaultI18nValue: '金额',
            validRules: [
                {
                    type: 'maxValue',
                    constraints: [1.7976931348623157e+308],
                },
                {
                    type: 'minValue',
                    constraints: [-1.7976931348623157e+308],
                }
            ]
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "je", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'ksrq',
            name: "{{ksrq_45aa3953_15m6}}",
            binding: 'ksrq',
            updateOn: 'blur',
            valueConverter: new DateConverter('yyyy-MM-dd'),
            defaultI18nValue: '开始日期',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "ksrq", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'jsrq',
            name: "{{jsrq_5973d1a1_lfio}}",
            binding: 'jsrq',
            updateOn: 'blur',
            valueConverter: new DateConverter('yyyy-MM-dd'),
            defaultI18nValue: '结束日期',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "jsrq", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'bz',
            name: "{{bz_9c4f692b_5ibr}}",
            binding: 'bz',
            updateOn: 'blur',
            defaultI18nValue: '币种',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "bz", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'qt',
            name: "{{qt_91fb0df2_5zcg}}",
            binding: 'qt',
            updateOn: 'change',
            defaultI18nValue: '启用标志',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "qt", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'bxry.bxrY_Name',
            name: "{{bxrY_BXRY_Name_d8b213ed_m4pc}}",
            binding: 'bxry.bxrY_Name',
            updateOn: 'blur',
            defaultI18nValue: '报销人员',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "bxrY_BXRY_Name", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'bxdw.bxdW_name',
            name: "{{bxdW_BXDW_name_58c3aac5_4ebf}}",
            binding: 'bxdw.bxdW_name',
            updateOn: 'blur',
            defaultI18nValue: '所属组织',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "bxdW_BXDW_name", void 0);
    DataGridComponentViewmodelForm = tslib_1.__decorate([
        Injectable(),
        NgValidateForm({
            formGroupName: '报销限额设置Fanwz',
            enableValidate: true
        }),
        Injectable()
    ], DataGridComponentViewmodelForm);
    return DataGridComponentViewmodelForm;
}(Form));
export { DataGridComponentViewmodelForm };
