import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Form, NgFormControl, NgValidateForm } from '@farris/devkit';
var DetailFormComponentViewmodelForm = /** @class */ (function (_super) {
    tslib_1.__extends(DetailFormComponentViewmodelForm, _super);
    function DetailFormComponentViewmodelForm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        NgFormControl({
            id: 'projectCode_034d37e8_75r8',
            name: "{{projectCode_034d37e8_75r8}}",
            binding: 'projectCode',
            updateOn: 'blur',
            defaultI18nValue: '项目编号',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DetailFormComponentViewmodelForm.prototype, "projectCode", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'projectName_2693df04_u0od',
            name: "{{projectName_2693df04_u0od}}",
            binding: 'projectName',
            updateOn: 'blur',
            defaultI18nValue: '项目名称',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DetailFormComponentViewmodelForm.prototype, "projectName", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'projectType_47b0d767_7fzm',
            name: "{{projectType_47b0d767_7fzm}}",
            binding: 'projectType',
            updateOn: 'blur',
            defaultI18nValue: '项目类别',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DetailFormComponentViewmodelForm.prototype, "projectType", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'projectNote_60e4aa39_qvd7',
            name: "{{projectNote_60e4aa39_qvd7}}",
            binding: 'projectNote',
            updateOn: 'blur',
            defaultI18nValue: '项目备注',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DetailFormComponentViewmodelForm.prototype, "projectNote", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'projectSum_c8e88808_bpqf',
            name: "{{projectSum_c8e88808_bpqf}}",
            binding: 'projectSum',
            updateOn: 'blur',
            defaultI18nValue: '项目金额',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DetailFormComponentViewmodelForm.prototype, "projectSum", void 0);
    DetailFormComponentViewmodelForm = tslib_1.__decorate([
        Injectable(),
        NgValidateForm({
            formGroupName: '项目字典Fanwz',
            enableValidate: true
        }),
        Injectable()
    ], DetailFormComponentViewmodelForm);
    return DetailFormComponentViewmodelForm;
}(Form));
export { DetailFormComponentViewmodelForm };
