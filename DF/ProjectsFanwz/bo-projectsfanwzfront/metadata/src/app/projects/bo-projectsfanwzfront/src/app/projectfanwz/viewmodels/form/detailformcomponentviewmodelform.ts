
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Form, NgFormControl, NgChildForm, NgChildFormArray, NgValidateForm } from '@farris/devkit';
import { DateConverter, MultiLangConverter } from '@farris/kendo-binding';

@Injectable()
@NgValidateForm({
    formGroupName: '项目字典Fanwz',
    enableValidate: true
})

@Injectable()
export class DetailFormComponentViewmodelForm extends Form {
    @NgFormControl({
        id: 'projectCode_034d37e8_75r8',
        name: "{{projectCode_034d37e8_75r8}}",
        binding: 'projectCode',
        updateOn: 'blur',
        defaultI18nValue: '项目编号',
    })
    projectCode: FormControl;

    @NgFormControl({
        id: 'projectName_2693df04_u0od',
        name: "{{projectName_2693df04_u0od}}",
        binding: 'projectName',
        updateOn: 'blur',
        defaultI18nValue: '项目名称',
    })
    projectName: FormControl;

    @NgFormControl({
        id: 'projectType_47b0d767_7fzm',
        name: "{{projectType_47b0d767_7fzm}}",
        binding: 'projectType',
        updateOn: 'blur',
        defaultI18nValue: '项目类别',
    })
    projectType: FormControl;

    @NgFormControl({
        id: 'projectNote_60e4aa39_qvd7',
        name: "{{projectNote_60e4aa39_qvd7}}",
        binding: 'projectNote',
        updateOn: 'blur',
        defaultI18nValue: '项目备注',
    })
    projectNote: FormControl;

    @NgFormControl({
        id: 'projectSum_c8e88808_bpqf',
        name: "{{projectSum_c8e88808_bpqf}}",
        binding: 'projectSum',
        updateOn: 'blur',
        defaultI18nValue: '项目金额',
    })
    projectSum: FormControl;

}