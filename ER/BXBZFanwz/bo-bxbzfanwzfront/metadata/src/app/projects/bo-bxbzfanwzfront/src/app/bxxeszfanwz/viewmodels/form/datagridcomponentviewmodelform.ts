
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Form, NgFormControl, NgChildForm, NgChildFormArray, NgValidateForm } from '@farris/devkit';
import { DateConverter, MultiLangConverter } from '@farris/kendo-binding';

@Injectable()
@NgValidateForm({
    formGroupName: '报销限额设置Fanwz',
    enableValidate: true
})

@Injectable()
export class DataGridComponentViewmodelForm extends Form {
    @NgFormControl({
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
    })
    je: FormControl;

    @NgFormControl({
        id: 'ksrq',
        name: "{{ksrq_45aa3953_15m6}}",
        binding: 'ksrq',
        updateOn: 'blur',
        valueConverter: new DateConverter('yyyy-MM-dd'),
        defaultI18nValue: '开始日期',
    })
    ksrq: FormControl;

    @NgFormControl({
        id: 'jsrq',
        name: "{{jsrq_5973d1a1_lfio}}",
        binding: 'jsrq',
        updateOn: 'blur',
        valueConverter: new DateConverter('yyyy-MM-dd'),
        defaultI18nValue: '结束日期',
    })
    jsrq: FormControl;

    @NgFormControl({
        id: 'bz',
        name: "{{bz_9c4f692b_5ibr}}",
        binding: 'bz',
        updateOn: 'blur',
        defaultI18nValue: '币种',
    })
    bz: FormControl;

    @NgFormControl({
        id: 'qt',
        name: "{{qt_91fb0df2_5zcg}}",
        binding: 'qt',
        updateOn: 'change',
        defaultI18nValue: '启用标志',
    })
    qt: FormControl;

    @NgFormControl({
        id: 'bxry.bxrY_Name',
        name: "{{bxrY_BXRY_Name_d8b213ed_m4pc}}",
        binding: 'bxry.bxrY_Name',
        updateOn: 'blur',
        defaultI18nValue: '报销人员',
    })
    bxrY_BXRY_Name: FormControl;

    @NgFormControl({
        id: 'bxdw.bxdW_name',
        name: "{{bxdW_BXDW_name_58c3aac5_4ebf}}",
        binding: 'bxdw.bxdW_name',
        updateOn: 'blur',
        defaultI18nValue: '所属组织',
    })
    bxdW_BXDW_name: FormControl;

}