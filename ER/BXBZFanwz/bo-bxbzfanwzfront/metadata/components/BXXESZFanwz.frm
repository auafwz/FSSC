{
  "Header" : {
    "Code" : "BXXESZFanwz",
    "Type" : "Form",
    "NameSpace" : "Inspur.GS.FSSC.ER.BXBZFanwz",
    "CertId" : null,
    "Name" : "报销限额设置Fanwz",
    "FileName" : "BXXESZFanwz.frm",
    "BizobjectID" : "c3bf58bb-4eb7-4eb0-baf8-d9c24235f148",
    "Language" : null,
    "Extendable" : false,
    "ID" : "2782b146-ee50-4f5a-be4b-0a22b5e05e4f",
    "IsTranslating" : false
  },
  "Refs" : [ {
    "DependentMetadata" : {
      "ID" : "8e6a5e22-c7cd-4e71-8a40-101ec4a430e5",
      "CertId" : null,
      "NameSpace" : "Inspur.GS.FSSC.ER.BXBZFanwz",
      "Code" : "BXXESZFanwz.frm",
      "Name" : "BXXESZFanwz.frm",
      "Type" : "ResourceMetadata",
      "BizobjectID" : "c3bf58bb-4eb7-4eb0-baf8-d9c24235f148"
    }
  } ],
  "Content" : {
    "code" : null,
    "name" : null,
    "CreationDate" : null,
    "Contents" : {
      "module" : {
        "id" : "BXXESZFanwz",
        "code" : "BXXESZFanwz",
        "name" : "报销限额设置Fanwz",
        "caption" : "报销限额设置Fanwz",
        "type" : "Module",
        "creator" : "wang-xh",
        "creationDate" : "2022-06-23T08:57:40.702Z",
        "updateVersion" : "191104",
        "showTitle" : true,
        "bootstrap" : "list-template",
        "templateId" : "list-template",
        "schemas" : [ {
          "name" : "报销限额设置Fanwz_frm",
          "id" : "a77fa09d-e706-4e97-9c59-f9d9cf547628",
          "code" : "BXXESZFanwz_frm",
          "sourceType" : "vo",
          "sourceUri" : "api/fssc/er/v1.0/BXXESZFanwz_frm",
          "variables" : [ ],
          "entities" : [ {
            "name" : "报销限额设置Fanwz",
            "id" : "c42c74b2-8f8e-47d9-9307-0a86c5f55539",
            "type" : {
              "$type" : "EntityType",
              "fields" : [ {
                "$type" : "SimpleField",
                "refElementId" : null,
                "defaultValue" : "",
                "readonly" : false,
                "multiLanguage" : false,
                "require" : true,
                "editor" : {
                  "$type" : "TextBox"
                },
                "name" : "ID",
                "id" : "3c8ecab6-a5c8-49b2-9385-c9672cb5dd47",
                "type" : {
                  "$type" : "StringType",
                  "length" : 36,
                  "name" : "String",
                  "displayName" : "字符串"
                },
                "path" : "ID",
                "code" : "ID",
                "label" : "id",
                "originalId" : "3c8ecab6-a5c8-49b2-9385-c9672cb5dd47",
                "bindingPath" : "id",
                "bindingField" : "id"
              }, {
                "$type" : "SimpleField",
                "refElementId" : null,
                "defaultValue" : "",
                "readonly" : false,
                "multiLanguage" : false,
                "require" : false,
                "editor" : {
                  "$type" : "DateBox",
                  "format" : "'yyyy-MM-dd'"
                },
                "name" : "Version",
                "id" : "fdc96510-ccac-4002-ac01-c018aee6caa9",
                "type" : {
                  "$type" : "DateTimeType",
                  "name" : "DateTime",
                  "displayName" : "日期时间"
                },
                "path" : "Version",
                "code" : "Version",
                "label" : "version",
                "originalId" : "fdc96510-ccac-4002-ac01-c018aee6caa9",
                "bindingPath" : "version",
                "bindingField" : "version"
              }, {
                "$type" : "ComplexField",
                "refElementId" : null,
                "name" : "人员",
                "id" : "a34bc496-b70a-43df-a53a-f96b9aca19e5",
                "type" : {
                  "$type" : "EntityType",
                  "entities" : [ ],
                  "fields" : [ {
                    "$type" : "SimpleField",
                    "refElementId" : null,
                    "readonly" : false,
                    "editor" : {
                      "$type" : "TextBox"
                    },
                    "multiLanguage" : false,
                    "require" : false,
                    "defaultValue" : "",
                    "name" : "人员",
                    "id" : "48c6b584-cd26-4942-badf-2177f6e064ff",
                    "type" : {
                      "$type" : "StringType",
                      "length" : 36,
                      "name" : "String",
                      "displayName" : "字符串"
                    },
                    "path" : "BXRY.BXRY",
                    "label" : "bxry",
                    "bindingField" : "bxry",
                    "bindingPath" : "bxry.bxry",
                    "code" : "BXRY",
                    "originalId" : "48c6b584-cd26-4942-badf-2177f6e064ff"
                  }, {
                    "$type" : "SimpleField",
                    "refElementId" : "94fd1572-613c-4973-bf79-12e33c16a9ec",
                    "readonly" : false,
                    "editor" : {
                      "$type" : "TextBox"
                    },
                    "multiLanguage" : false,
                    "require" : false,
                    "defaultValue" : "",
                    "name" : "名称",
                    "id" : "d8b213ed-3708-4864-8d7b-b5ae808386b3",
                    "type" : {
                      "$type" : "StringType",
                      "length" : 36,
                      "name" : "String",
                      "displayName" : "字符串"
                    },
                    "path" : "BXRY.BXRY_Name",
                    "label" : "bxrY_Name",
                    "bindingField" : "bxrY_BXRY_Name",
                    "bindingPath" : "bxry.bxrY_Name",
                    "code" : "Name",
                    "originalId" : "d8b213ed-3708-4864-8d7b-b5ae808386b3"
                  } ],
                  "primary" : "bxry",
                  "name" : "GspUser48c6",
                  "displayName" : "用户"
                },
                "path" : "BXRY",
                "code" : "BXRY",
                "label" : "bxry",
                "originalId" : "a34bc496-b70a-43df-a53a-f96b9aca19e5",
                "bindingPath" : "bxry",
                "bindingField" : "bxry"
              }, {
                "$type" : "ComplexField",
                "refElementId" : null,
                "name" : "单位",
                "id" : "f6ac04c5-16f3-41e7-98cc-ae5de10ffd6a",
                "type" : {
                  "$type" : "EntityType",
                  "entities" : [ ],
                  "fields" : [ {
                    "$type" : "SimpleField",
                    "refElementId" : null,
                    "readonly" : false,
                    "editor" : {
                      "$type" : "TextBox"
                    },
                    "multiLanguage" : false,
                    "require" : false,
                    "defaultValue" : "",
                    "name" : "单位",
                    "id" : "5ded097c-b4b9-4a0f-a207-672e8442cf96",
                    "type" : {
                      "$type" : "StringType",
                      "length" : 36,
                      "name" : "String",
                      "displayName" : "字符串"
                    },
                    "path" : "BXDW.BXDW",
                    "label" : "bxdw",
                    "bindingField" : "bxdw",
                    "bindingPath" : "bxdw.bxdw",
                    "code" : "BXDW",
                    "originalId" : "5ded097c-b4b9-4a0f-a207-672e8442cf96"
                  }, {
                    "$type" : "SimpleField",
                    "refElementId" : "a824ff6d-b08f-4b5c-b707-997d56760fb4",
                    "readonly" : false,
                    "editor" : {
                      "$type" : "TextBox"
                    },
                    "multiLanguage" : false,
                    "require" : false,
                    "defaultValue" : "",
                    "name" : "名称",
                    "id" : "58c3aac5-cd78-47cc-9777-57b01b1081d1",
                    "type" : {
                      "$type" : "StringType",
                      "length" : 100,
                      "name" : "String",
                      "displayName" : "字符串"
                    },
                    "path" : "BXDW.BXDW_name",
                    "label" : "bxdW_name",
                    "bindingField" : "bxdW_BXDW_name",
                    "bindingPath" : "bxdw.bxdW_name",
                    "code" : "name",
                    "originalId" : "58c3aac5-cd78-47cc-9777-57b01b1081d1"
                  } ],
                  "primary" : "bxdw",
                  "name" : "SysOrg5ded",
                  "displayName" : "系统组织"
                },
                "path" : "BXDW",
                "code" : "BXDW",
                "label" : "bxdw",
                "originalId" : "f6ac04c5-16f3-41e7-98cc-ae5de10ffd6a",
                "bindingPath" : "bxdw",
                "bindingField" : "bxdw"
              }, {
                "$type" : "SimpleField",
                "refElementId" : null,
                "defaultValue" : "",
                "readonly" : false,
                "multiLanguage" : false,
                "require" : false,
                "editor" : {
                  "$type" : "NumericBox"
                },
                "name" : "金额",
                "id" : "88937e19-ffc9-4673-8bae-c9b152038f4f",
                "type" : {
                  "$type" : "NumericType",
                  "length" : 8,
                  "name" : "Number",
                  "displayName" : "数字",
                  "precision" : 2
                },
                "path" : "JE",
                "code" : "JE",
                "label" : "je",
                "originalId" : "88937e19-ffc9-4673-8bae-c9b152038f4f",
                "bindingPath" : "je",
                "bindingField" : "je"
              }, {
                "$type" : "SimpleField",
                "refElementId" : null,
                "defaultValue" : "",
                "readonly" : false,
                "multiLanguage" : false,
                "require" : false,
                "editor" : {
                  "$type" : "DateBox",
                  "format" : "'yyyy-MM-dd'"
                },
                "name" : "开始日期",
                "id" : "45aa3953-c512-42ca-8062-b8befd5fa390",
                "type" : {
                  "$type" : "DateType",
                  "name" : "Date",
                  "displayName" : "日期"
                },
                "path" : "KSRQ",
                "code" : "KSRQ",
                "label" : "ksrq",
                "originalId" : "45aa3953-c512-42ca-8062-b8befd5fa390",
                "bindingPath" : "ksrq",
                "bindingField" : "ksrq"
              }, {
                "$type" : "SimpleField",
                "refElementId" : null,
                "defaultValue" : "",
                "readonly" : false,
                "multiLanguage" : false,
                "require" : false,
                "editor" : {
                  "$type" : "DateBox",
                  "format" : "'yyyy-MM-dd'"
                },
                "name" : "结束日期",
                "id" : "5973d1a1-d4c0-490e-a0c0-340b63b9f938",
                "type" : {
                  "$type" : "DateType",
                  "name" : "Date",
                  "displayName" : "日期"
                },
                "path" : "JSRQ",
                "code" : "JSRQ",
                "label" : "jsrq",
                "originalId" : "5973d1a1-d4c0-490e-a0c0-340b63b9f938",
                "bindingPath" : "jsrq",
                "bindingField" : "jsrq"
              }, {
                "$type" : "SimpleField",
                "refElementId" : null,
                "defaultValue" : "",
                "readonly" : false,
                "multiLanguage" : false,
                "require" : false,
                "editor" : {
                  "$type" : "TextBox"
                },
                "name" : "币种",
                "id" : "9c4f692b-f967-472b-9eef-cb73abada6fa",
                "type" : {
                  "$type" : "StringType",
                  "length" : 10,
                  "name" : "String",
                  "displayName" : "字符串"
                },
                "path" : "BZ",
                "code" : "BZ",
                "label" : "bz",
                "originalId" : "9c4f692b-f967-472b-9eef-cb73abada6fa",
                "bindingPath" : "bz",
                "bindingField" : "bz"
              }, {
                "$type" : "SimpleField",
                "refElementId" : null,
                "defaultValue" : "",
                "readonly" : false,
                "multiLanguage" : false,
                "require" : false,
                "editor" : {
                  "$type" : "CheckBox"
                },
                "name" : "启用标志",
                "id" : "91fb0df2-466a-46af-bdeb-a516e2ab9548",
                "type" : {
                  "$type" : "BooleanType",
                  "name" : "Boolean",
                  "displayName" : "布尔"
                },
                "path" : "QT",
                "code" : "QT",
                "label" : "qt",
                "originalId" : "91fb0df2-466a-46af-bdeb-a516e2ab9548",
                "bindingPath" : "qt",
                "bindingField" : "qt"
              } ],
              "primary" : "id",
              "entities" : [ ],
              "name" : "BXBZFanwz",
              "displayName" : "报销限额设置Fanwz"
            },
            "code" : "BXBZFanwz",
            "label" : "bxbzFanwzs"
          } ],
          "extendProperties" : {
            "enableStdTimeFormat" : true
          },
          "eapiId" : "6c603f71-c52d-4820-89f5-b8ce705724b1"
        } ],
        "states" : [ ],
        "contents" : [ ],
        "stateMachines" : [ {
          "id" : "BXXESZFanwz_state_machine",
          "name" : "报销限额设置Fanwz状态机",
          "uri" : "4b596c0d-0284-4860-b962-e364303923fd"
        } ],
        "viewmodels" : [ {
          "id" : "root-viewmodel",
          "code" : "root-viewmodel",
          "name" : "报销限额设置Fanwz",
          "fields" : [ ],
          "stateMachine" : "BXXESZFanwz_state_machine",
          "serviceRefs" : [ ],
          "commands" : [ {
            "id" : "279090c9-553d-4936-b1ab-c485ec7e92fc",
            "code" : "Load1",
            "name" : "加载数据",
            "params" : [ {
              "name" : "filter",
              "shownName" : "过滤条件",
              "value" : "",
              "description" : "过滤条件"
            }, {
              "name" : "sort",
              "shownName" : "排序条件",
              "value" : "",
              "description" : "排序条件"
            } ],
            "handlerName" : "Load",
            "cmpId" : "d7ce1ba6-49c7-4a27-805f-f78f42e72725",
            "shortcut" : { },
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "d61e870d-464e-4f68-9a70-2dd1da750c59",
            "code" : "Add1",
            "name" : "新增数据",
            "params" : [ {
              "name" : "transitionAction",
              "shownName" : "迁移动作",
              "value" : "Create",
              "description" : null
            } ],
            "handlerName" : "Add",
            "cmpId" : "d7ce1ba6-49c7-4a27-805f-f78f42e72725",
            "shortcut" : { },
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "dd1a68e5-f404-4c07-81ab-77e3cb545c4f",
            "code" : "Edit1",
            "name" : "编辑数据",
            "params" : [ {
              "name" : "transitionAction",
              "shownName" : "迁移动作",
              "value" : "Edit",
              "description" : null
            } ],
            "handlerName" : "Edit",
            "cmpId" : "d7ce1ba6-49c7-4a27-805f-f78f42e72725",
            "shortcut" : { },
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "05da19e1-247e-4d03-bad7-48ce024ef5c3",
            "code" : "Save1",
            "name" : "保存数据",
            "params" : [ {
              "name" : "transitionAction",
              "shownName" : "迁移动作",
              "value" : "Save",
              "description" : null
            }, {
              "name" : "commandName",
              "shownName" : "命令名称",
              "value" : "",
              "description" : "数据加载命令"
            }, {
              "name" : "frameId",
              "shownName" : "框架id",
              "value" : "",
              "description" : "数据加载命令所在FrameId"
            }, {
              "name" : "successMsg",
              "shownName" : "save_提示信息",
              "value" : "",
              "description" : null
            } ],
            "handlerName" : "Save",
            "cmpId" : "d7ce1ba6-49c7-4a27-805f-f78f42e72725",
            "shortcut" : { },
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "c011b77d-5baf-49be-b35a-19e89d69134f",
            "code" : "Cancel1",
            "name" : "撤销变更",
            "params" : [ {
              "name" : "transitionAction",
              "shownName" : "迁移动作",
              "value" : "Cancel",
              "description" : null
            }, {
              "name" : "loadCmdName",
              "shownName" : "数据刷新命令名称",
              "value" : "",
              "description" : "数据刷新命令名称"
            }, {
              "name" : "loadCmdFrameId",
              "shownName" : "数据刷新命令对应的FrameId",
              "value" : "",
              "description" : "数据刷新命令对应的FrameId"
            } ],
            "handlerName" : "Cancel",
            "cmpId" : "d7ce1ba6-49c7-4a27-805f-f78f42e72725",
            "shortcut" : { },
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "9a011b2d-27e3-4e8f-b86d-46c58e5abffe",
            "code" : "Remove1",
            "name" : "删除",
            "params" : [ {
              "name" : "id",
              "shownName" : "数据id",
              "value" : "{DATA~/data-grid-component/id}",
              "description" : "必填，要删除的数据id"
            }, {
              "name" : "ifSave",
              "shownName" : "是否保存",
              "value" : "{STATEMACHINE~/renderStates/canEdit}",
              "description" : "必填，是否执行保存"
            }, {
              "name" : "refreshCommandName",
              "shownName" : "数据刷新命令名称",
              "value" : "",
              "description" : "选填，数据刷新命令名称（设计时对应表单上的命令编号）"
            }, {
              "name" : "refreshCommandFrameId",
              "shownName" : "数据刷新命令对应的FrameId",
              "value" : "",
              "description" : "选填，数据刷新命令对应的FrameId"
            }, {
              "name" : "successMsg",
              "shownName" : "remove_提示信息",
              "value" : "",
              "description" : null
            } ],
            "handlerName" : "Remove",
            "cmpId" : "d7ce1ba6-49c7-4a27-805f-f78f42e72725",
            "shortcut" : { },
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "70ec6403-d11e-42a5-92b3-ce8c84f67947",
            "code" : "dataImport1",
            "name" : "数据导入1",
            "params" : [ {
              "name" : "type",
              "shownName" : "导入类型",
              "value" : "",
              "description" : "0(默认)基本导入,1导入子表,2根据模型导入"
            }, {
              "name" : "ruleID",
              "shownName" : "规则Id",
              "value" : "",
              "description" : "数据导入规则元数据ID"
            }, {
              "name" : "option",
              "shownName" : "参数配置",
              "value" : "",
              "description" : "配置其他参数"
            } ],
            "handlerName" : "DataImport",
            "cmpId" : "3f40288a-d11e-4dbd-89ba-388abf931ca3",
            "shortcut" : { },
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "4cc18d88-b8cd-485a-bcc3-75d5ebc6f708",
            "code" : "dataExport1",
            "name" : "数据导出1",
            "params" : [ {
              "name" : "type",
              "shownName" : "导出类型",
              "value" : "",
              "description" : "0(默认)基本导出,1导出当前分页,2根据模型导出"
            }, {
              "name" : "ruleID",
              "shownName" : "规则Id",
              "value" : "",
              "description" : "数据导出规则ID"
            }, {
              "name" : "option",
              "shownName" : "参数配置",
              "value" : "",
              "description" : "配置其他参数"
            } ],
            "handlerName" : "DataExport",
            "cmpId" : "3f40288a-d11e-4dbd-89ba-388abf931ca3",
            "shortcut" : { },
            "extensions" : [ ],
            "isInvalid" : false
          } ],
          "states" : [ ],
          "bindTo" : "/",
          "enableUnifiedSession" : false
        }, {
          "id" : "data-grid-component-viewmodel",
          "code" : "data-grid-component-viewmodel",
          "name" : "报销限额设置Fanwz",
          "fields" : [ {
            "type" : "Form",
            "id" : "88937e19-ffc9-4673-8bae-c9b152038f4f",
            "fieldName" : "je",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "45aa3953-c512-42ca-8062-b8befd5fa390",
            "fieldName" : "ksrq",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "5973d1a1-d4c0-490e-a0c0-340b63b9f938",
            "fieldName" : "jsrq",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "9c4f692b-f967-472b-9eef-cb73abada6fa",
            "fieldName" : "bz",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "91fb0df2-466a-46af-bdeb-a516e2ab9548",
            "fieldName" : "qt",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "change"
          }, {
            "type" : "Form",
            "id" : "d8b213ed-3708-4864-8d7b-b5ae808386b3",
            "fieldName" : "bxrY_BXRY_Name",
            "groupId" : "",
            "groupName" : "",
            "valueChanging" : "",
            "valueChanged" : "",
            "updateOn" : "blur",
            "fieldSchema" : {
              "name" : "报销人员",
              "editor" : {
                "$type" : "LookupEdit",
                "dataSource" : {
                  "uri" : "BXBZFanwz.bxrY_BXRY_Name",
                  "displayName" : "系统用户帮助",
                  "idField" : "id",
                  "type" : "ViewObject"
                },
                "textField" : "name",
                "valueField" : "id",
                "displayType" : "List",
                "helpId" : "915a0b20-975a-4df1-8cfd-888c3dda0009",
                "mapFields" : "{'name':'bxry.bxrY_Name','id':'bxry.bxry'}"
              }
            }
          }, {
            "type" : "Form",
            "id" : "58c3aac5-cd78-47cc-9777-57b01b1081d1",
            "fieldName" : "bxdW_BXDW_name",
            "groupId" : "",
            "groupName" : "",
            "valueChanging" : "",
            "valueChanged" : "",
            "updateOn" : "blur",
            "fieldSchema" : {
              "name" : "所属组织",
              "editor" : {
                "$type" : "LookupEdit",
                "dataSource" : {
                  "uri" : "BXBZFanwz.bxdW_BXDW_name",
                  "displayName" : "系统组织帮助",
                  "idField" : "id",
                  "type" : "ViewObject"
                },
                "textField" : "name",
                "valueField" : "id",
                "displayType" : "TreeList",
                "helpId" : "b524a702-7323-4d46-998e-5ba0c6abcd49",
                "mapFields" : "{'name':'bxdw.bxdW_name','id':'bxdw.bxdw'}"
              }
            }
          } ],
          "serviceRefs" : [ ],
          "commands" : [ {
            "id" : "cc60a94a-68e9-43b2-9252-95e057e1279a",
            "code" : "ChangePage1",
            "name" : "切换页码",
            "params" : [ {
              "name" : "loadCommandName",
              "shownName" : "数据加载命令名称",
              "value" : "Load1",
              "description" : "数据加载的命令名称"
            }, {
              "name" : "loadCommandFrameId",
              "shownName" : "数据加载命令框架id",
              "value" : "root-component",
              "description" : "数据加载命令所在的框架id"
            } ],
            "handlerName" : "ChangePage",
            "cmpId" : "d7ce1ba6-49c7-4a27-805f-f78f42e72725",
            "shortcut" : { },
            "extensions" : [ ],
            "isInvalid" : false
          } ],
          "states" : [ ],
          "bindTo" : "/",
          "parent" : "root-viewmodel",
          "pagination" : {
            "enable" : true,
            "pageSize" : 20,
            "pageList" : "10,20,30,50,100"
          },
          "enableValidation" : true
        } ],
        "components" : [ {
          "id" : "root-component",
          "type" : "Component",
          "componentType" : "Frame",
          "viewModel" : "root-viewmodel",
          "onInit" : "Load1",
          "contents" : [ {
            "id" : "root-layout",
            "type" : "ContentContainer",
            "appearance" : {
              "class" : "f-page f-page-is-managelist"
            },
            "size" : null,
            "contents" : [ {
              "id" : "page-header",
              "type" : "ContentContainer",
              "appearance" : {
                "class" : "f-page-header"
              },
              "size" : null,
              "contents" : [ {
                "id" : "header-nav",
                "type" : "ContentContainer",
                "appearance" : {
                  "class" : "f-page-header-base"
                },
                "size" : null,
                "contents" : [ {
                  "id" : "header-title-container",
                  "type" : "ContentContainer",
                  "appearance" : {
                    "class" : "f-title"
                  },
                  "size" : null,
                  "contents" : [ {
                    "id" : "page-header-title",
                    "type" : "HtmlTemplate",
                    "html" : "<span class=\"f-title-icon f-text-orna-manage\"><i class=\"f-icon f-icon-page-title-administer\"></i></span><h4 class=\"f-title-text\">报销限额设置Fanwz</h4>"
                  } ],
                  "visible" : true,
                  "isScrollspyContainer" : false,
                  "draggable" : false
                }, {
                  "id" : "page-header-toolbar",
                  "type" : "ToolBar",
                  "appearance" : {
                    "class" : "col-7 f-toolbar"
                  },
                  "size" : null,
                  "items" : [ {
                    "id" : "button-add",
                    "type" : "ToolBarItem",
                    "appearance" : {
                      "class" : "btn-primary"
                    },
                    "disable" : "!viewModel.stateMachine['canAdd']",
                    "text" : "新增",
                    "visible" : true,
                    "click" : "Add1",
                    "usageMode" : "button",
                    "modalConfig" : {
                      "modalCmp" : null,
                      "mapFields" : null,
                      "showHeader" : true,
                      "title" : "",
                      "showCloseButton" : true,
                      "showMaxButton" : true,
                      "width" : 800,
                      "height" : 600,
                      "showFooterButtons" : true,
                      "footerButtons" : [ ]
                    }
                  }, {
                    "id" : "button-edit",
                    "type" : "ToolBarItem",
                    "appearance" : null,
                    "disable" : "!viewModel.stateMachine['canEdit']",
                    "text" : "编辑",
                    "visible" : true,
                    "click" : "Edit1",
                    "usageMode" : "button",
                    "modalConfig" : {
                      "modalCmp" : null,
                      "mapFields" : null,
                      "showHeader" : true,
                      "title" : "",
                      "showCloseButton" : true,
                      "showMaxButton" : true,
                      "width" : 800,
                      "height" : 600,
                      "showFooterButtons" : true,
                      "footerButtons" : [ ]
                    }
                  }, {
                    "id" : "button-save",
                    "type" : "ToolBarItem",
                    "appearance" : null,
                    "disable" : "!viewModel.stateMachine['canSave']",
                    "text" : "保存",
                    "visible" : true,
                    "click" : "Save1",
                    "usageMode" : "button",
                    "modalConfig" : {
                      "modalCmp" : null,
                      "mapFields" : null,
                      "showHeader" : true,
                      "title" : "",
                      "showCloseButton" : true,
                      "showMaxButton" : true,
                      "width" : 800,
                      "height" : 600,
                      "showFooterButtons" : true,
                      "footerButtons" : [ ]
                    }
                  }, {
                    "id" : "button-cancel",
                    "type" : "ToolBarItem",
                    "appearance" : null,
                    "disable" : "!viewModel.stateMachine['canCancel']",
                    "text" : "取消",
                    "visible" : true,
                    "click" : "Cancel1",
                    "usageMode" : "button",
                    "modalConfig" : {
                      "modalCmp" : null,
                      "mapFields" : null,
                      "showHeader" : true,
                      "title" : "",
                      "showCloseButton" : true,
                      "showMaxButton" : true,
                      "width" : 800,
                      "height" : 600,
                      "showFooterButtons" : true,
                      "footerButtons" : [ ]
                    }
                  }, {
                    "id" : "button-delete",
                    "type" : "ToolBarItem",
                    "appearance" : null,
                    "disable" : "!viewModel.stateMachine['canRemove']",
                    "text" : "删除",
                    "visible" : true,
                    "click" : "Remove1",
                    "usageMode" : "button",
                    "modalConfig" : {
                      "modalCmp" : null,
                      "mapFields" : null,
                      "showHeader" : true,
                      "title" : "",
                      "showCloseButton" : true,
                      "showMaxButton" : true,
                      "width" : 800,
                      "height" : 600,
                      "showFooterButtons" : true,
                      "footerButtons" : [ ]
                    }
                  }, {
                    "id" : "button-data-import",
                    "type" : "ToolBarItem",
                    "appearance" : null,
                    "disable" : false,
                    "text" : "导入",
                    "visible" : true,
                    "click" : "dataImport1",
                    "usageMode" : "button",
                    "modalConfig" : {
                      "modalCmp" : null,
                      "mapFields" : null,
                      "showHeader" : true,
                      "title" : "",
                      "showCloseButton" : true,
                      "showMaxButton" : true,
                      "width" : 800,
                      "height" : 600,
                      "showFooterButtons" : true,
                      "footerButtons" : [ ]
                    }
                  }, {
                    "id" : "button-data-export",
                    "type" : "ToolBarItem",
                    "appearance" : null,
                    "disable" : false,
                    "text" : "导出",
                    "visible" : true,
                    "click" : "dataExport1",
                    "usageMode" : "button",
                    "modalConfig" : {
                      "modalCmp" : null,
                      "mapFields" : null,
                      "showHeader" : true,
                      "title" : "",
                      "showCloseButton" : true,
                      "showMaxButton" : true,
                      "width" : 800,
                      "height" : 600,
                      "showFooterButtons" : true,
                      "footerButtons" : [ ]
                    }
                  } ],
                  "visible" : true,
                  "buttonSize" : "default",
                  "popDirection" : "default"
                } ],
                "visible" : true,
                "isScrollspyContainer" : false,
                "draggable" : false
              } ],
              "visible" : true,
              "isScrollspyContainer" : false,
              "draggable" : false
            }, {
              "id" : "page-main",
              "type" : "ContentContainer",
              "appearance" : {
                "class" : "f-page-main"
              },
              "size" : null,
              "contents" : [ {
                "id" : "data-grid-component-ref",
                "type" : "ComponentRef",
                "component" : "data-grid-component",
                "visible" : true
              } ],
              "visible" : true,
              "isScrollspyContainer" : false,
              "draggable" : false
            } ],
            "visible" : true,
            "isScrollspyContainer" : false,
            "draggable" : false
          } ],
          "afterViewInit" : ""
        }, {
          "id" : "data-grid-component",
          "type" : "Component",
          "componentType" : "dataGrid",
          "viewModel" : "data-grid-component-viewmodel",
          "appearance" : {
            "class" : "f-struct-wrapper f-utils-fill-flex-column"
          },
          "onInit" : "",
          "contents" : [ {
            "id" : "data-grid-section",
            "type" : "Section",
            "appearance" : {
              "class" : "f-section-grid f-section-in-managelist"
            },
            "size" : null,
            "mainTitle" : "",
            "subTitle" : "",
            "headerClass" : "",
            "titleClass" : "",
            "extendedHeaderAreaClass" : "",
            "toolbarClass" : "",
            "extendedAreaClass" : "",
            "contentTemplateClass" : "",
            "fill" : true,
            "expanded" : true,
            "enableMaximize" : true,
            "enableAccordion" : "true",
            "accordionMode" : "default",
            "showHeader" : false,
            "headerTemplate" : "",
            "titleTemplate" : "",
            "extendedHeaderAreaTemplate" : "",
            "toolbarTemplate" : "",
            "extendedAreaTemplate" : "",
            "contents" : [ {
              "id" : "dataGrid",
              "type" : "DataGrid",
              "controlSource" : "Farris",
              "appearance" : {
                "class" : "f-component-grid"
              },
              "size" : null,
              "dataSource" : "bxbzFanwzs",
              "fields" : [ {
                "id" : "bxdW_BXDW_name_58c3aac5_4ebf",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "所属组织",
                "binding" : {
                  "type" : "Form",
                  "path" : "bxdW_BXDW_name",
                  "field" : "58c3aac5-cd78-47cc-9777-57b01b1081d1",
                  "fullPath" : "BXDW.BXDW_name"
                },
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "dataField" : "bxdw.bxdW_name",
                "dataType" : "string",
                "displayTemplate" : null,
                "captionTemplate" : null,
                "editor" : {
                  "id" : "bxdW_BXDW_name_58c3aac5_vpnb",
                  "type" : "LookupEdit",
                  "titleSourceType" : "static",
                  "title" : "所属组织",
                  "appearance" : {
                    "class" : ""
                  },
                  "size" : null,
                  "binding" : {
                    "type" : "Form",
                    "path" : "bxdW_BXDW_name",
                    "field" : "58c3aac5-cd78-47cc-9777-57b01b1081d1",
                    "fullPath" : "BXDW.BXDW_name"
                  },
                  "require" : false,
                  "disable" : false,
                  "placeHolder" : "",
                  "dataSource" : {
                    "uri" : "BXBZFanwz.bxdW_BXDW_name",
                    "displayName" : "系统组织帮助",
                    "idField" : "id",
                    "type" : "ViewObject"
                  },
                  "textField" : "name",
                  "valueField" : "id",
                  "displayType" : "TreeList",
                  "multiSelect" : false,
                  "pageList" : "10,20,30,50,100",
                  "pageSize" : 20,
                  "pageIndex" : null,
                  "pagination" : null,
                  "dialogTitle" : "",
                  "showMaxButton" : null,
                  "showCloseButton" : null,
                  "resizable" : null,
                  "buttonAlign" : null,
                  "mapFields" : "{'name':'bxdw.bxdW_name','id':'bxdw.bxdw'}",
                  "lookupStyle" : "popup",
                  "holdPlace" : false,
                  "isTextArea" : true,
                  "useTip" : false,
                  "useFavorite" : true,
                  "noSearch" : false,
                  "maxSearchLength" : 100,
                  "enableToSelect" : true,
                  "isRecordSize" : false,
                  "lookupPicking" : null,
                  "lookupPicked" : null,
                  "linkedLabelEnabled" : false,
                  "linkedLabelClick" : null,
                  "visible" : true,
                  "enableExtendLoadMethod" : true,
                  "editable" : false,
                  "enableFullTree" : false,
                  "enableClear" : true,
                  "clear" : null,
                  "loadTreeDataType" : "default",
                  "expandLevel" : -1,
                  "enableCascade" : false,
                  "cascadeStatus" : "enable",
                  "onShown" : null,
                  "onHidden" : null,
                  "beforeShow" : null,
                  "beforeHide" : null,
                  "tabindex" : 0,
                  "hasDefaultFocus" : false,
                  "focusState" : null,
                  "titleWidth" : null,
                  "textAlign" : "left",
                  "useExtendInfo" : false,
                  "extInfoFields" : null,
                  "extInfoFormatter" : null,
                  "customFormatter" : null,
                  "customNavFormatter" : null,
                  "selectFirstInNav" : false,
                  "loadDataWhenOpen" : true,
                  "onlySelectLeaf" : "default",
                  "viewType" : "text",
                  "autoHeight" : false,
                  "maxHeight" : null,
                  "showHeader" : true,
                  "beforeSelectData" : null,
                  "enableAppend" : false,
                  "inputAppendType" : "button",
                  "inputAppendDisabled" : false,
                  "path" : "bxdw.bxdW_name",
                  "helpId" : "b524a702-7323-4d46-998e-5ba0c6abcd49"
                },
                "draggable" : false,
                "frozen" : "none",
                "sortable" : true,
                "enumData" : null,
                "idField" : "value",
                "textField" : "name",
                "aggregate" : {
                  "type" : "none",
                  "formatter" : {
                    "type" : "none"
                  }
                },
                "groupAggregate" : {
                  "type" : "none",
                  "formatter" : {
                    "type" : "none"
                  }
                },
                "linkedLabelEnabled" : false,
                "linkedLabelClick" : null,
                "textAlign" : "left",
                "hAlign" : "left",
                "vAlign" : "middle",
                "formatter" : {
                  "type" : "none"
                },
                "showTips" : false,
                "tipContent" : null,
                "multiLanguage" : false,
                "visible" : true,
                "enableFilter" : false,
                "headerStyler" : "",
                "styler" : "",
                "localization" : false,
                "allowGrouping" : true,
                "tipMode" : "auto",
                "readonly" : false
              }, {
                "id" : "bxrY_BXRY_Name_d8b213ed_m4pc",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "报销人员",
                "binding" : {
                  "type" : "Form",
                  "path" : "bxrY_BXRY_Name",
                  "field" : "d8b213ed-3708-4864-8d7b-b5ae808386b3",
                  "fullPath" : "BXRY.BXRY_Name"
                },
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "dataField" : "bxry.bxrY_Name",
                "dataType" : "string",
                "displayTemplate" : null,
                "captionTemplate" : null,
                "editor" : {
                  "id" : "bxrY_BXRY_Name_d8b213ed_jwcb",
                  "type" : "LookupEdit",
                  "titleSourceType" : "static",
                  "title" : "报销人员",
                  "appearance" : {
                    "class" : ""
                  },
                  "size" : null,
                  "binding" : {
                    "type" : "Form",
                    "path" : "bxrY_BXRY_Name",
                    "field" : "d8b213ed-3708-4864-8d7b-b5ae808386b3",
                    "fullPath" : "BXRY.BXRY_Name"
                  },
                  "require" : false,
                  "disable" : false,
                  "placeHolder" : "",
                  "dataSource" : {
                    "uri" : "BXBZFanwz.bxrY_BXRY_Name",
                    "displayName" : "系统用户帮助",
                    "idField" : "id",
                    "type" : "ViewObject"
                  },
                  "textField" : "name",
                  "valueField" : "id",
                  "displayType" : "List",
                  "multiSelect" : false,
                  "pageList" : "10,20,30,50,100",
                  "pageSize" : 20,
                  "pageIndex" : null,
                  "pagination" : null,
                  "dialogTitle" : "",
                  "showMaxButton" : null,
                  "showCloseButton" : null,
                  "resizable" : null,
                  "buttonAlign" : null,
                  "mapFields" : "{'name':'bxry.bxrY_Name','id':'bxry.bxry'}",
                  "lookupStyle" : "popup",
                  "holdPlace" : false,
                  "isTextArea" : true,
                  "useTip" : false,
                  "useFavorite" : true,
                  "noSearch" : false,
                  "maxSearchLength" : 36,
                  "enableToSelect" : true,
                  "isRecordSize" : false,
                  "lookupPicking" : null,
                  "lookupPicked" : null,
                  "linkedLabelEnabled" : false,
                  "linkedLabelClick" : null,
                  "visible" : true,
                  "enableExtendLoadMethod" : true,
                  "editable" : false,
                  "enableFullTree" : false,
                  "enableClear" : true,
                  "clear" : null,
                  "loadTreeDataType" : "default",
                  "expandLevel" : -1,
                  "enableCascade" : false,
                  "cascadeStatus" : "enable",
                  "onShown" : null,
                  "onHidden" : null,
                  "beforeShow" : null,
                  "beforeHide" : null,
                  "tabindex" : 0,
                  "hasDefaultFocus" : false,
                  "focusState" : null,
                  "titleWidth" : null,
                  "textAlign" : "left",
                  "useExtendInfo" : false,
                  "extInfoFields" : null,
                  "extInfoFormatter" : null,
                  "customFormatter" : null,
                  "customNavFormatter" : null,
                  "selectFirstInNav" : false,
                  "loadDataWhenOpen" : true,
                  "onlySelectLeaf" : "default",
                  "viewType" : "text",
                  "autoHeight" : false,
                  "maxHeight" : null,
                  "showHeader" : true,
                  "beforeSelectData" : null,
                  "enableAppend" : false,
                  "inputAppendType" : "button",
                  "inputAppendDisabled" : false,
                  "path" : "bxry.bxrY_Name",
                  "helpId" : "915a0b20-975a-4df1-8cfd-888c3dda0009"
                },
                "draggable" : false,
                "frozen" : "none",
                "sortable" : true,
                "enumData" : null,
                "idField" : "value",
                "textField" : "name",
                "aggregate" : {
                  "type" : "none",
                  "formatter" : {
                    "type" : "none"
                  }
                },
                "groupAggregate" : {
                  "type" : "none",
                  "formatter" : {
                    "type" : "none"
                  }
                },
                "linkedLabelEnabled" : false,
                "linkedLabelClick" : null,
                "textAlign" : "left",
                "hAlign" : "left",
                "vAlign" : "middle",
                "formatter" : {
                  "type" : "none"
                },
                "showTips" : false,
                "tipContent" : null,
                "multiLanguage" : false,
                "visible" : true,
                "enableFilter" : false,
                "headerStyler" : "",
                "styler" : "",
                "localization" : false,
                "allowGrouping" : true,
                "tipMode" : "auto",
                "readonly" : false
              }, {
                "id" : "je_88937e19_97r1",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "金额",
                "captionTemplate" : null,
                "dataField" : "je",
                "dataType" : "number",
                "binding" : {
                  "type" : "Form",
                  "path" : "je",
                  "field" : "88937e19-ffc9-4673-8bae-c9b152038f4f"
                },
                "enumData" : null,
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "displayTemplate" : null,
                "editor" : {
                  "id" : "je_88937e19_rdgv",
                  "type" : "NumericBox",
                  "titleSourceType" : "static",
                  "title" : "数值框",
                  "controlSource" : "Farris",
                  "appearance" : null,
                  "size" : null,
                  "binding" : {
                    "type" : "Form",
                    "path" : "je",
                    "field" : "88937e19-ffc9-4673-8bae-c9b152038f4f"
                  },
                  "require" : false,
                  "disable" : false,
                  "placeHolder" : "",
                  "textAlign" : "left",
                  "precisionSourceType" : "static",
                  "precision" : 2,
                  "validation" : null,
                  "maxValue" : null,
                  "minValue" : null,
                  "step" : 1,
                  "useThousands" : true,
                  "formatter" : null,
                  "parser" : null,
                  "canNull" : true,
                  "bigNumber" : false,
                  "maxLength" : 8,
                  "holdPlace" : false,
                  "linkedLabelEnabled" : false,
                  "linkedLabelClick" : null,
                  "visible" : true,
                  "isTextArea" : true,
                  "tabindex" : -1,
                  "hasDefaultFocus" : false,
                  "focusState" : null,
                  "titleWidth" : null,
                  "showZero" : true,
                  "showButton" : true,
                  "path" : "je"
                },
                "draggable" : false,
                "frozen" : "none",
                "sortable" : true,
                "sortOrder" : null,
                "resizeable" : true,
                "aggregate" : {
                  "type" : "none",
                  "formatter" : {
                    "type" : "none"
                  }
                },
                "groupAggregate" : {
                  "type" : "none",
                  "formatter" : {
                    "type" : "none"
                  }
                },
                "styler" : "",
                "colTemplate" : "",
                "linkedLabelEnabled" : false,
                "linkedLabelClick" : null,
                "textAlign" : "left",
                "hAlign" : "left",
                "vAlign" : "middle",
                "formatter" : {
                  "type" : "number",
                  "precision" : 2,
                  "thousand" : ",",
                  "decimal" : "."
                },
                "showTips" : false,
                "tipContent" : null,
                "multiLanguage" : false,
                "enableFilter" : false,
                "headerStyler" : "",
                "localization" : false,
                "path" : "je",
                "readonly" : false,
                "visible" : true,
                "allowGrouping" : true,
                "tipMode" : "auto"
              }, {
                "id" : "ksrq_45aa3953_15m6",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "开始日期",
                "captionTemplate" : null,
                "dataField" : "ksrq",
                "dataType" : "date",
                "binding" : {
                  "type" : "Form",
                  "path" : "ksrq",
                  "field" : "45aa3953-c512-42ca-8062-b8befd5fa390"
                },
                "enumData" : null,
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "displayTemplate" : null,
                "editor" : {
                  "id" : "ksrq_45aa3953_81rz",
                  "type" : "DateBox",
                  "titleSourceType" : "static",
                  "title" : "日期选择",
                  "controlSource" : "Farris",
                  "appearance" : null,
                  "size" : null,
                  "binding" : {
                    "type" : "Form",
                    "path" : "ksrq",
                    "field" : "45aa3953-c512-42ca-8062-b8befd5fa390"
                  },
                  "require" : false,
                  "disable" : false,
                  "placeHolder" : "",
                  "validation" : null,
                  "value" : null,
                  "editable" : true,
                  "dateRange" : false,
                  "showTime" : false,
                  "showType" : 1,
                  "dateFormat" : "yyyy-MM-dd",
                  "returnFormat" : "yyyy-MM-dd",
                  "maxValue" : null,
                  "minValue" : null,
                  "disableDates" : [ ],
                  "showWeekNumbers" : false,
                  "dateRangeDatesDelimiter" : "~",
                  "shortcuts" : [ ],
                  "fieldType" : "Date",
                  "useDefault" : false,
                  "holdPlace" : false,
                  "linkedLabelEnabled" : false,
                  "linkedLabelClick" : null,
                  "visible" : true,
                  "isTextArea" : true,
                  "tabindex" : -1,
                  "hasDefaultFocus" : false,
                  "focusState" : null,
                  "titleWidth" : null,
                  "localization" : false,
                  "path" : "ksrq",
                  "localizationType" : "Date"
                },
                "draggable" : false,
                "frozen" : "none",
                "sortable" : true,
                "sortOrder" : null,
                "resizeable" : true,
                "aggregate" : {
                  "type" : "none",
                  "formatter" : {
                    "type" : "none"
                  }
                },
                "groupAggregate" : {
                  "type" : "none",
                  "formatter" : {
                    "type" : "none"
                  }
                },
                "styler" : "",
                "colTemplate" : "",
                "linkedLabelEnabled" : false,
                "linkedLabelClick" : null,
                "textAlign" : "left",
                "hAlign" : "left",
                "vAlign" : "middle",
                "formatter" : {
                  "type" : "date",
                  "dateFormat" : "yyyy-MM-dd"
                },
                "showTips" : false,
                "tipContent" : null,
                "multiLanguage" : false,
                "enableFilter" : false,
                "headerStyler" : "",
                "localization" : false,
                "path" : "ksrq",
                "localizationType" : "Date",
                "readonly" : false,
                "visible" : true,
                "allowGrouping" : true,
                "tipMode" : "auto"
              }, {
                "id" : "jsrq_5973d1a1_lfio",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "结束日期",
                "captionTemplate" : null,
                "dataField" : "jsrq",
                "dataType" : "date",
                "binding" : {
                  "type" : "Form",
                  "path" : "jsrq",
                  "field" : "5973d1a1-d4c0-490e-a0c0-340b63b9f938"
                },
                "enumData" : null,
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "displayTemplate" : null,
                "editor" : {
                  "id" : "jsrq_5973d1a1_p6xd",
                  "type" : "DateBox",
                  "titleSourceType" : "static",
                  "title" : "日期选择",
                  "controlSource" : "Farris",
                  "appearance" : null,
                  "size" : null,
                  "binding" : {
                    "type" : "Form",
                    "path" : "jsrq",
                    "field" : "5973d1a1-d4c0-490e-a0c0-340b63b9f938"
                  },
                  "require" : false,
                  "disable" : false,
                  "placeHolder" : "",
                  "validation" : null,
                  "value" : null,
                  "editable" : true,
                  "dateRange" : false,
                  "showTime" : false,
                  "showType" : 1,
                  "dateFormat" : "yyyy-MM-dd",
                  "returnFormat" : "yyyy-MM-dd",
                  "maxValue" : null,
                  "minValue" : null,
                  "disableDates" : [ ],
                  "showWeekNumbers" : false,
                  "dateRangeDatesDelimiter" : "~",
                  "shortcuts" : [ ],
                  "fieldType" : "Date",
                  "useDefault" : false,
                  "holdPlace" : false,
                  "linkedLabelEnabled" : false,
                  "linkedLabelClick" : null,
                  "visible" : true,
                  "isTextArea" : true,
                  "tabindex" : -1,
                  "hasDefaultFocus" : false,
                  "focusState" : null,
                  "titleWidth" : null,
                  "localization" : false,
                  "path" : "jsrq",
                  "localizationType" : "Date"
                },
                "draggable" : false,
                "frozen" : "none",
                "sortable" : true,
                "sortOrder" : null,
                "resizeable" : true,
                "aggregate" : {
                  "type" : "none",
                  "formatter" : {
                    "type" : "none"
                  }
                },
                "groupAggregate" : {
                  "type" : "none",
                  "formatter" : {
                    "type" : "none"
                  }
                },
                "styler" : "",
                "colTemplate" : "",
                "linkedLabelEnabled" : false,
                "linkedLabelClick" : null,
                "textAlign" : "left",
                "hAlign" : "left",
                "vAlign" : "middle",
                "formatter" : {
                  "type" : "date",
                  "dateFormat" : "yyyy-MM-dd"
                },
                "showTips" : false,
                "tipContent" : null,
                "multiLanguage" : false,
                "enableFilter" : false,
                "headerStyler" : "",
                "localization" : false,
                "path" : "jsrq",
                "localizationType" : "Date",
                "readonly" : false,
                "visible" : true,
                "allowGrouping" : true,
                "tipMode" : "auto"
              }, {
                "id" : "bz_9c4f692b_5ibr",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "币种",
                "captionTemplate" : null,
                "dataField" : "bz",
                "dataType" : "string",
                "binding" : {
                  "type" : "Form",
                  "path" : "bz",
                  "field" : "9c4f692b-f967-472b-9eef-cb73abada6fa"
                },
                "enumData" : null,
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "displayTemplate" : null,
                "editor" : {
                  "id" : "bz_9c4f692b_cucu",
                  "type" : "TextBox",
                  "titleSourceType" : "static",
                  "title" : "文本",
                  "appearance" : null,
                  "size" : null,
                  "binding" : {
                    "type" : "Form",
                    "path" : "bz",
                    "field" : "9c4f692b-f967-472b-9eef-cb73abada6fa"
                  },
                  "require" : false,
                  "disable" : false,
                  "placeHolder" : "",
                  "format" : null,
                  "validation" : null,
                  "value" : null,
                  "maxLength" : 10,
                  "linkedLabelEnabled" : false,
                  "linkedLabelClick" : null,
                  "visible" : true,
                  "holdPlace" : false,
                  "isTextArea" : true,
                  "isPassword" : false,
                  "tabindex" : -1,
                  "hasDefaultFocus" : false,
                  "focusState" : null,
                  "titleWidth" : null,
                  "enableTips" : true,
                  "path" : "bz"
                },
                "draggable" : false,
                "frozen" : "none",
                "sortable" : true,
                "sortOrder" : null,
                "resizeable" : true,
                "aggregate" : {
                  "type" : "none",
                  "formatter" : {
                    "type" : "none"
                  }
                },
                "groupAggregate" : {
                  "type" : "none",
                  "formatter" : {
                    "type" : "none"
                  }
                },
                "styler" : "",
                "colTemplate" : "",
                "linkedLabelEnabled" : false,
                "linkedLabelClick" : null,
                "textAlign" : "left",
                "hAlign" : "left",
                "vAlign" : "middle",
                "formatter" : {
                  "type" : "none"
                },
                "showTips" : false,
                "tipContent" : null,
                "multiLanguage" : false,
                "enableFilter" : false,
                "headerStyler" : "",
                "localization" : false,
                "path" : "bz",
                "readonly" : false,
                "visible" : true,
                "allowGrouping" : true,
                "tipMode" : "auto"
              }, {
                "id" : "qt_91fb0df2_5zcg",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "启用标志",
                "captionTemplate" : null,
                "dataField" : "qt",
                "dataType" : "boolean",
                "binding" : {
                  "type" : "Form",
                  "path" : "qt",
                  "field" : "91fb0df2-466a-46af-bdeb-a516e2ab9548"
                },
                "enumData" : null,
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "displayTemplate" : null,
                "editor" : {
                  "id" : "qt_91fb0df2_rmx5",
                  "type" : "CheckBox",
                  "titleSourceType" : "static",
                  "title" : "复选框",
                  "checked" : false,
                  "require" : false,
                  "disable" : false,
                  "binding" : {
                    "type" : "Form",
                    "path" : "qt",
                    "field" : "91fb0df2-466a-46af-bdeb-a516e2ab9548"
                  },
                  "visible" : true,
                  "appearance" : null,
                  "vsize" : null,
                  "linkedLabelEnabled" : false,
                  "linkedLabelClick" : null,
                  "holdPlace" : false,
                  "tabindex" : -1,
                  "hasDefaultFocus" : false,
                  "focusState" : null,
                  "titleWidth" : null,
                  "path" : "qt"
                },
                "draggable" : false,
                "frozen" : "none",
                "sortable" : true,
                "sortOrder" : null,
                "resizeable" : true,
                "aggregate" : {
                  "type" : "none",
                  "formatter" : {
                    "type" : "none"
                  }
                },
                "groupAggregate" : {
                  "type" : "none",
                  "formatter" : {
                    "type" : "none"
                  }
                },
                "styler" : "",
                "colTemplate" : "",
                "linkedLabelEnabled" : false,
                "linkedLabelClick" : null,
                "textAlign" : "left",
                "hAlign" : "left",
                "vAlign" : "middle",
                "formatter" : {
                  "type" : "boolean",
                  "trueText" : "是",
                  "falseText" : "否"
                },
                "showTips" : false,
                "tipContent" : null,
                "multiLanguage" : false,
                "enableFilter" : false,
                "headerStyler" : "",
                "localization" : false,
                "path" : "qt",
                "readonly" : false,
                "visible" : true,
                "allowGrouping" : true,
                "tipMode" : "auto"
              } ],
              "focusedItem" : null,
              "focusedIndex" : null,
              "identifyField" : null,
              "multiSelect" : null,
              "selectable" : null,
              "showCheckbox" : false,
              "showAllCheckbox" : false,
              "checkOnSelect" : false,
              "selectOnCheck" : false,
              "itemTemplate" : null,
              "toolBar" : null,
              "summary" : null,
              "groupable" : false,
              "group" : null,
              "showGroupColumn" : true,
              "groupFormatter" : null,
              "groupStyler" : null,
              "groupFooter" : false,
              "onSelectionChange" : "",
              "fieldEditable" : true,
              "appendRow" : null,
              "disable" : false,
              "fitColumns" : true,
              "autoFitColumns" : false,
              "pageChange" : "ChangePage1",
              "pageSizeChanged" : "ChangePage1",
              "styler" : "",
              "multiSort" : false,
              "showBorder" : false,
              "striped" : true,
              "showLineNumber" : false,
              "disableRow" : null,
              "beforeSelect" : null,
              "beforeUnSelect" : null,
              "beforeCheck" : null,
              "beforeUnCheck" : null,
              "dblClickRow" : null,
              "showFooter" : false,
              "footerTemplate" : "",
              "footerDataFrom" : "client",
              "footerDataCommand" : null,
              "enableFilterRow" : false,
              "remoteFilter" : false,
              "showFilterBar" : false,
              "useControlPanel" : false,
              "autoHeight" : false,
              "showSelectedList" : false,
              "selectedItemFormatter" : null,
              "lineNumberWidth" : 36,
              "enableMorePageSelect" : false,
              "editable" : "viewModel.stateMachine['editable']",
              "visible" : true,
              "pagination" : true,
              "lockPagination" : "viewModel.stateMachine&&viewModel.stateMachine['editable']",
              "checkedChange" : null,
              "beforeEdit" : null,
              "mergeCell" : false,
              "virtualized" : false,
              "nowrap" : true,
              "remoteSort" : false,
              "columnSorted" : null,
              "showPageSize" : false,
              "footerHeight" : 29,
              "headerWrap" : false,
              "emptyDataHeight" : 240,
              "rowHeight" : 30,
              "enableHighlightCell" : false,
              "commandColumnWidth" : 120,
              "groupSummaryPosition" : "groupFooterRow",
              "enableEditByCard" : "none",
              "clearSelectionsWhenDataIsEmpty" : true,
              "keepSelect" : true,
              "filterType" : "none",
              "scrollBarShowMode" : "auto",
              "showGotoInput" : false,
              "footerPosition" : "bottom",
              "selectOnEditing" : false,
              "selectionMode" : "custom",
              "enableContextMenu" : false,
              "disableGroupOnEditing" : true,
              "enableSimpleMode" : false,
              "draggable" : false
            } ],
            "visible" : true,
            "toolbar" : {
              "type" : "SectionToolbar",
              "position" : "inHead",
              "contents" : [ ]
            }
          } ],
          "afterViewInit" : ""
        } ],
        "webcmds" : [ {
          "id" : "d7ce1ba6-49c7-4a27-805f-f78f42e72725",
          "path" : "/projects/packages/Inspur.GS.Gsp.Web.WebCmp/webcmd",
          "name" : "EditableListController.webcmd",
          "refedHandlers" : [ {
            "host" : "279090c9-553d-4936-b1ab-c485ec7e92fc",
            "handler" : "Load"
          }, {
            "host" : "d61e870d-464e-4f68-9a70-2dd1da750c59",
            "handler" : "Add"
          }, {
            "host" : "dd1a68e5-f404-4c07-81ab-77e3cb545c4f",
            "handler" : "Edit"
          }, {
            "host" : "05da19e1-247e-4d03-bad7-48ce024ef5c3",
            "handler" : "Save"
          }, {
            "host" : "c011b77d-5baf-49be-b35a-19e89d69134f",
            "handler" : "Cancel"
          }, {
            "host" : "9a011b2d-27e3-4e8f-b86d-46c58e5abffe",
            "handler" : "Remove"
          }, {
            "host" : "cc60a94a-68e9-43b2-9252-95e057e1279a",
            "handler" : "ChangePage"
          } ]
        }, {
          "id" : "3f40288a-d11e-4dbd-89ba-388abf931ca3",
          "path" : null,
          "name" : "DataImportExportCommand.webcmd",
          "refedHandlers" : [ {
            "host" : "70ec6403-d11e-42a5-92b3-ce8c84f67947",
            "handler" : "DataImport"
          }, {
            "host" : "4cc18d88-b8cd-485a-bcc3-75d5ebc6f708",
            "handler" : "DataExport"
          } ]
        } ],
        "serviceRefs" : [ ],
        "projectName" : "bo-bxbzfanwzfront",
        "showType" : "page",
        "toolbar" : {
          "items" : { },
          "configs" : { }
        },
        "expressions" : [ ],
        "metadataId" : "2782b146-ee50-4f5a-be4b-0a22b5e05e4f"
      },
      "options" : {
        "enableTextArea" : true,
        "renderMode" : "compile"
      }
    },
    "Id" : "2782b146-ee50-4f5a-be4b-0a22b5e05e4f"
  },
  "ExtendRule" : null,
  "RelativePath" : "FSSC/ER/BXBZFanwz/bo-bxbzfanwzfront/metadata/components",
  "ExtendProperty" : "",
  "Extended" : false,
  "PreviousVersion" : null,
  "Version" : null,
  "Properties" : null
}