
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Form, NgFormControl, NgChildForm, NgChildFormArray, NgValidateForm } from '@farris/devkit';
import { DateConverter, MultiLangConverter } from '@farris/kendo-binding';

@Injectable()
@NgValidateForm({
    formGroupName: '项目字典Fanwz',
    enableValidate: false
})

@Injectable()
export class DataGridComponentViewmodelForm extends Form {
    @NgFormControl({
        id: 'projectCode',
        name: "{{projectCode_034d37e8_rnse}}",
        binding: 'projectCode',
        updateOn: 'blur',
        defaultI18nValue: '项目编号',
    })
    projectCode: FormControl;

    @NgFormControl({
        id: 'projectName',
        name: "{{projectName_2693df04_jujs}}",
        binding: 'projectName',
        updateOn: 'blur',
        defaultI18nValue: '项目名称',
    })
    projectName: FormControl;

}