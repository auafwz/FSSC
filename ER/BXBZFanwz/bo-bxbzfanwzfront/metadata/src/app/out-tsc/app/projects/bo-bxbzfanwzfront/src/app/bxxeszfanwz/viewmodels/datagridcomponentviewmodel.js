import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ViewModel, NgCommand } from '@farris/devkit';
import { Observable } from 'rxjs';
var DataGridComponentViewmodel = /** @class */ (function (_super) {
    tslib_1.__extends(DataGridComponentViewmodel, _super);
    function DataGridComponentViewmodel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bindingPath = '/';
        _this.dom = {
            "dataGrid": {
                "type": "DataGrid",
                "resourceId": "dataGrid",
                "visible": {
                    "useQuote": false,
                    "isExpression": false,
                    "value": true
                },
                "id": "dataGrid",
                "size": {},
                "readonly": {
                    "useQuote": false,
                    "isExpression": false,
                    "value": false
                },
                "fields": [
                    {
                        "type": "GridField",
                        "resourceId": "bxdW_BXDW_name_58c3aac5_4ebf",
                        "visible": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "id": "bxdW_BXDW_name_58c3aac5_4ebf",
                        "size": {
                            "width": 120
                        },
                        "readonly": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": false
                        },
                        "binding": {
                            "type": "Form",
                            "path": "bxdW_BXDW_name",
                            "fullPath": "BXDW.BXDW_name",
                            "isExpression": false,
                            "value": "bxdW_BXDW_name"
                        },
                        "dataField": "bxdw.bxdW_name",
                        "dataType": "string",
                        "multiLanguage": false,
                        "caption": "所属组织",
                        "editor": {
                            "type": "LookupEdit",
                            "isTextArea": true,
                            "resourceId": "bxdW_BXDW_name_58c3aac5_vpnb",
                            "defaultI18nValue": "所属组织",
                            "visible": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": true
                            },
                            "id": "bxdW_BXDW_name_58c3aac5_vpnb",
                            "size": {},
                            "readonly": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": false
                            },
                            "binding": {
                                "type": "Form",
                                "path": "bxdW_BXDW_name",
                                "fullPath": "BXDW.BXDW_name",
                                "isExpression": false,
                                "value": "bxdW_BXDW_name"
                            },
                            "disable": false,
                            "dataSource": {
                                "uri": "BXBZFanwz.bxdW_BXDW_name",
                                "displayName": "系统组织帮助",
                                "idField": "id",
                                "type": "ViewObject"
                            },
                            "valueField": "id",
                            "textField": "name",
                            "multiSelect": false,
                            "pageSize": 20,
                            "mapFields": {
                                "name": "bxdw.bxdW_name",
                                "id": "bxdw.bxdw"
                            },
                            "displayType": "TreeList",
                            "enableExtendLoadMethod": true,
                            "editable": false,
                            "noSearch": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": false
                            },
                            "useTip": false,
                            "useFavorite": true,
                            "enableToSelect": true,
                            "isRecordSize": false,
                            "expandLevel": -1,
                            "enableFullTree": false,
                            "context": {
                                "enableExtendLoadMethod": true
                            },
                            "loadTreeDataType": "default",
                            "enableClear": true,
                            "enableCascade": false
                        },
                        "draggable": false,
                        "frozen": "none",
                        "sortable": true,
                        "aggregate": {
                            "type": "none",
                            "formatter": {
                                "type": "none"
                            }
                        },
                        "groupAggregate": {
                            "type": "none",
                            "formatter": {
                                "type": "none"
                            }
                        },
                        "linkedLabelEnabled": false,
                        "formatter": {
                            "type": "none"
                        }
                    },
                    {
                        "type": "GridField",
                        "resourceId": "bxrY_BXRY_Name_d8b213ed_m4pc",
                        "visible": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "id": "bxrY_BXRY_Name_d8b213ed_m4pc",
                        "size": {
                            "width": 120
                        },
                        "readonly": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": false
                        },
                        "binding": {
                            "type": "Form",
                            "path": "bxrY_BXRY_Name",
                            "fullPath": "BXRY.BXRY_Name",
                            "isExpression": false,
                            "value": "bxrY_BXRY_Name"
                        },
                        "dataField": "bxry.bxrY_Name",
                        "dataType": "string",
                        "multiLanguage": false,
                        "caption": "报销人员",
                        "editor": {
                            "type": "LookupEdit",
                            "isTextArea": true,
                            "resourceId": "bxrY_BXRY_Name_d8b213ed_jwcb",
                            "defaultI18nValue": "报销人员",
                            "visible": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": true
                            },
                            "id": "bxrY_BXRY_Name_d8b213ed_jwcb",
                            "size": {},
                            "readonly": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": false
                            },
                            "binding": {
                                "type": "Form",
                                "path": "bxrY_BXRY_Name",
                                "fullPath": "BXRY.BXRY_Name",
                                "isExpression": false,
                                "value": "bxrY_BXRY_Name"
                            },
                            "disable": false,
                            "dataSource": {
                                "uri": "BXBZFanwz.bxrY_BXRY_Name",
                                "displayName": "系统用户帮助",
                                "idField": "id",
                                "type": "ViewObject"
                            },
                            "valueField": "id",
                            "textField": "name",
                            "multiSelect": false,
                            "pageSize": 20,
                            "mapFields": {
                                "name": "bxry.bxrY_Name",
                                "id": "bxry.bxry"
                            },
                            "displayType": "List",
                            "enableExtendLoadMethod": true,
                            "editable": false,
                            "noSearch": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": false
                            },
                            "useTip": false,
                            "useFavorite": true,
                            "enableToSelect": true,
                            "isRecordSize": false,
                            "expandLevel": -1,
                            "enableFullTree": false,
                            "context": {
                                "enableExtendLoadMethod": true
                            },
                            "loadTreeDataType": "default",
                            "enableClear": true,
                            "enableCascade": false
                        },
                        "draggable": false,
                        "frozen": "none",
                        "sortable": true,
                        "aggregate": {
                            "type": "none",
                            "formatter": {
                                "type": "none"
                            }
                        },
                        "groupAggregate": {
                            "type": "none",
                            "formatter": {
                                "type": "none"
                            }
                        },
                        "linkedLabelEnabled": false,
                        "formatter": {
                            "type": "none"
                        }
                    },
                    {
                        "type": "GridField",
                        "resourceId": "je_88937e19_97r1",
                        "visible": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "id": "je_88937e19_97r1",
                        "size": {
                            "width": 120
                        },
                        "readonly": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": false
                        },
                        "binding": {
                            "type": "Form",
                            "path": "je",
                            "isExpression": false,
                            "value": "je"
                        },
                        "dataField": "je",
                        "dataType": "number",
                        "multiLanguage": false,
                        "caption": "金额",
                        "editor": {
                            "type": "FarrisNumberSpinner",
                            "isTextArea": true,
                            "resourceId": "je_88937e19_rdgv",
                            "defaultI18nValue": "数值框",
                            "visible": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": true
                            },
                            "id": "je_88937e19_rdgv",
                            "size": {},
                            "readonly": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": false
                            },
                            "binding": {
                                "type": "Form",
                                "path": "je",
                                "isExpression": false,
                                "value": "je"
                            },
                            "disable": false,
                            "step": 1,
                            "useThousands": true,
                            "textAlign": "left",
                            "precision": 2
                        },
                        "draggable": false,
                        "frozen": "none",
                        "sortable": true,
                        "resizeable": true,
                        "aggregate": {
                            "type": "none",
                            "formatter": {
                                "type": "none"
                            }
                        },
                        "groupAggregate": {
                            "type": "none",
                            "formatter": {
                                "type": "none"
                            }
                        },
                        "linkedLabelEnabled": false,
                        "updateOn": "blur",
                        "formatter": {
                            "type": "number",
                            "precision": 2,
                            "thousand": ",",
                            "decimal": "."
                        }
                    },
                    {
                        "type": "GridField",
                        "resourceId": "ksrq_45aa3953_15m6",
                        "visible": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "id": "ksrq_45aa3953_15m6",
                        "size": {
                            "width": 120
                        },
                        "readonly": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": false
                        },
                        "binding": {
                            "type": "Form",
                            "path": "ksrq",
                            "isExpression": false,
                            "value": "ksrq"
                        },
                        "dataField": "ksrq",
                        "dataType": "date",
                        "multiLanguage": false,
                        "caption": "开始日期",
                        "editor": {
                            "type": "EditableField",
                            "disable": false,
                            "editable": true,
                            "dateRange": false,
                            "showTime": false,
                            "title": "日期选择",
                            "showType": 1,
                            "locale": "zh-cn",
                            "dateFormat": "yyyy-MM-dd",
                            "placeHolder": "",
                            "linkedLabelEnabled": false,
                            "disableDates": [],
                            "returnType": "Date",
                            "useDefault": false,
                            "showWeekNumbers": false,
                            "dateRangeDatesDelimiter": "~",
                            "shortcuts": [],
                            "holdPlace": false,
                            "returnFormat": "yyyy-MM-dd",
                            "titleWidth": null,
                            "localization": false,
                            "isTextArea": true,
                            "resourceId": "ksrq_45aa3953_81rz",
                            "defaultI18nValue": "日期选择",
                            "visible": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": true
                            },
                            "id": "ksrq_45aa3953_81rz",
                            "size": {},
                            "readonly": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": false
                            },
                            "binding": {
                                "type": "Form",
                                "path": "ksrq",
                                "isExpression": false,
                                "value": "ksrq"
                            }
                        },
                        "draggable": false,
                        "frozen": "none",
                        "sortable": true,
                        "resizeable": true,
                        "aggregate": {
                            "type": "none",
                            "formatter": {
                                "type": "none"
                            }
                        },
                        "groupAggregate": {
                            "type": "none",
                            "formatter": {
                                "type": "none"
                            }
                        },
                        "linkedLabelEnabled": false,
                        "updateOn": "blur",
                        "formatter": {
                            "type": "date",
                            "dateFormat": "yyyy-MM-dd"
                        }
                    },
                    {
                        "type": "GridField",
                        "resourceId": "jsrq_5973d1a1_lfio",
                        "visible": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "id": "jsrq_5973d1a1_lfio",
                        "size": {
                            "width": 120
                        },
                        "readonly": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": false
                        },
                        "binding": {
                            "type": "Form",
                            "path": "jsrq",
                            "isExpression": false,
                            "value": "jsrq"
                        },
                        "dataField": "jsrq",
                        "dataType": "date",
                        "multiLanguage": false,
                        "caption": "结束日期",
                        "editor": {
                            "type": "EditableField",
                            "disable": false,
                            "editable": true,
                            "dateRange": false,
                            "showTime": false,
                            "title": "日期选择",
                            "showType": 1,
                            "locale": "zh-cn",
                            "dateFormat": "yyyy-MM-dd",
                            "placeHolder": "",
                            "linkedLabelEnabled": false,
                            "disableDates": [],
                            "returnType": "Date",
                            "useDefault": false,
                            "showWeekNumbers": false,
                            "dateRangeDatesDelimiter": "~",
                            "shortcuts": [],
                            "holdPlace": false,
                            "returnFormat": "yyyy-MM-dd",
                            "titleWidth": null,
                            "localization": false,
                            "isTextArea": true,
                            "resourceId": "jsrq_5973d1a1_p6xd",
                            "defaultI18nValue": "日期选择",
                            "visible": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": true
                            },
                            "id": "jsrq_5973d1a1_p6xd",
                            "size": {},
                            "readonly": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": false
                            },
                            "binding": {
                                "type": "Form",
                                "path": "jsrq",
                                "isExpression": false,
                                "value": "jsrq"
                            }
                        },
                        "draggable": false,
                        "frozen": "none",
                        "sortable": true,
                        "resizeable": true,
                        "aggregate": {
                            "type": "none",
                            "formatter": {
                                "type": "none"
                            }
                        },
                        "groupAggregate": {
                            "type": "none",
                            "formatter": {
                                "type": "none"
                            }
                        },
                        "linkedLabelEnabled": false,
                        "updateOn": "blur",
                        "formatter": {
                            "type": "date",
                            "dateFormat": "yyyy-MM-dd"
                        }
                    },
                    {
                        "type": "GridField",
                        "resourceId": "bz_9c4f692b_5ibr",
                        "visible": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "id": "bz_9c4f692b_5ibr",
                        "size": {
                            "width": 120
                        },
                        "readonly": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": false
                        },
                        "binding": {
                            "type": "Form",
                            "path": "bz",
                            "isExpression": false,
                            "value": "bz"
                        },
                        "dataField": "bz",
                        "dataType": "string",
                        "multiLanguage": false,
                        "caption": "币种",
                        "editor": {
                            "type": "TextBox",
                            "isTextArea": true,
                            "resourceId": "bz_9c4f692b_cucu",
                            "defaultI18nValue": "文本",
                            "visible": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": true
                            },
                            "id": "bz_9c4f692b_cucu",
                            "size": {},
                            "readonly": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": false
                            },
                            "binding": {
                                "type": "Form",
                                "path": "bz",
                                "isExpression": false,
                                "value": "bz"
                            },
                            "disable": false,
                            "maxLength": 10,
                            "isPassword": false,
                            "enableViewPassword": false
                        },
                        "draggable": false,
                        "frozen": "none",
                        "sortable": true,
                        "resizeable": true,
                        "aggregate": {
                            "type": "none",
                            "formatter": {
                                "type": "none"
                            }
                        },
                        "groupAggregate": {
                            "type": "none",
                            "formatter": {
                                "type": "none"
                            }
                        },
                        "linkedLabelEnabled": false,
                        "updateOn": "blur",
                        "formatter": {
                            "type": "none"
                        }
                    },
                    {
                        "type": "GridField",
                        "resourceId": "qt_91fb0df2_5zcg",
                        "visible": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "id": "qt_91fb0df2_5zcg",
                        "size": {
                            "width": 120
                        },
                        "readonly": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": false
                        },
                        "binding": {
                            "type": "Form",
                            "path": "qt",
                            "isExpression": false,
                            "value": "qt"
                        },
                        "dataField": "qt",
                        "dataType": "boolean",
                        "multiLanguage": false,
                        "caption": "启用标志",
                        "editor": {
                            "type": "CheckBox",
                            "resourceId": "qt_91fb0df2_rmx5",
                            "defaultI18nValue": "复选框",
                            "visible": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": true
                            },
                            "id": "qt_91fb0df2_rmx5",
                            "readonly": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": false
                            },
                            "binding": {
                                "type": "Form",
                                "path": "qt",
                                "isExpression": false,
                                "value": "qt"
                            },
                            "disable": false
                        },
                        "draggable": false,
                        "frozen": "none",
                        "sortable": true,
                        "resizeable": true,
                        "aggregate": {
                            "type": "none",
                            "formatter": {
                                "type": "none"
                            }
                        },
                        "groupAggregate": {
                            "type": "none",
                            "formatter": {
                                "type": "none"
                            }
                        },
                        "linkedLabelEnabled": false,
                        "updateOn": "change",
                        "formatter": {
                            "type": "boolean",
                            "trueText": "是",
                            "falseText": "否"
                        }
                    }
                ],
                "editable": "viewModel.stateMachine['editable']",
                "showLineNumber": false,
                "lineNumberTitle": "#",
                "groupTotalText": "Total",
                "filterable": false,
                "groupable": false,
                "rowClass": ""
            }
        };
        return _this;
    }
    DataGridComponentViewmodel.prototype.ChangePage1 = function (commandParam) { return; };
    tslib_1.__decorate([
        NgCommand({
            name: 'ChangePage1',
            params: {
                loadCommandName: 'Load1',
                loadCommandFrameId: 'root-component'
            },
            paramDescriptions: {
                loadCommandName: { type: 'string' },
                loadCommandFrameId: { type: 'string' }
            }
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], DataGridComponentViewmodel.prototype, "ChangePage1", null);
    DataGridComponentViewmodel = tslib_1.__decorate([
        Injectable()
    ], DataGridComponentViewmodel);
    return DataGridComponentViewmodel;
}(ViewModel));
export { DataGridComponentViewmodel };
