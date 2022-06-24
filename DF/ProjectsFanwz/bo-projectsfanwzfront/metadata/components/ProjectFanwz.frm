{
  "Header" : {
    "Code" : "ProjectFanwz",
    "Type" : "Form",
    "NameSpace" : "Inspur.GS.FSSC.DF.ProjectsFanwz",
    "CertId" : null,
    "Name" : "项目字典Fanwz",
    "FileName" : "ProjectFanwz.frm",
    "BizobjectID" : "4de97d7c-9f8f-04a4-a825-859b00dd9a33",
    "Language" : null,
    "Extendable" : false,
    "ID" : "7d545b71-0100-4274-8d05-926744931d5f",
    "IsTranslating" : false
  },
  "Refs" : [ {
    "DependentMetadata" : {
      "ID" : "7c3317b0-a122-4be9-ae84-84079d959ca3",
      "CertId" : null,
      "NameSpace" : "Inspur.GS.FSSC.DF.ProjectsFanwz",
      "Code" : "ProjectFanwz.frm",
      "Name" : "ProjectFanwz.frm",
      "Type" : "ResourceMetadata",
      "BizobjectID" : "4de97d7c-9f8f-04a4-a825-859b00dd9a33"
    }
  } ],
  "Content" : {
    "code" : null,
    "name" : null,
    "Id" : "7d545b71-0100-4274-8d05-926744931d5f",
    "Contents" : {
      "module" : {
        "id" : "ProjectFanwz",
        "code" : "ProjectFanwz",
        "name" : "项目字典Fanwz",
        "caption" : "项目字典Fanwz",
        "type" : "Module",
        "creator" : "wang-xh",
        "creationDate" : "2022-06-23T06:52:14.605Z",
        "updateVersion" : "191104",
        "showTitle" : true,
        "bootstrap" : "list-card-template",
        "templateId" : "list-card-template",
        "schemas" : [ {
          "name" : "项目字典Fanwz_frm",
          "id" : "a270caa9-61f5-42d1-963a-5e70677e6b0a",
          "code" : "ProjectFanwz_frm",
          "sourceType" : "vo",
          "sourceUri" : "api/fssc/df/v1.0/ProjectFanwz_frm",
          "variables" : [ ],
          "entities" : [ {
            "name" : "项目字典Fanwz",
            "id" : "9034ba6f-b055-4122-b7e1-d6dc108b1031",
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
                "id" : "407e84e9-5741-4709-9c56-f2bf4027dd1f",
                "type" : {
                  "$type" : "StringType",
                  "length" : 36,
                  "name" : "String",
                  "displayName" : "字符串"
                },
                "path" : "ID",
                "code" : "ID",
                "label" : "id",
                "originalId" : "407e84e9-5741-4709-9c56-f2bf4027dd1f",
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
                "id" : "fc9e7215-2b70-414f-b3a4-8dc400228d78",
                "type" : {
                  "$type" : "DateTimeType",
                  "name" : "DateTime",
                  "displayName" : "日期时间"
                },
                "path" : "Version",
                "code" : "Version",
                "label" : "version",
                "originalId" : "fc9e7215-2b70-414f-b3a4-8dc400228d78",
                "bindingPath" : "version",
                "bindingField" : "version"
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
                "name" : "项目编号",
                "id" : "034d37e8-5585-4a75-b4d9-94f665d4ac48",
                "type" : {
                  "$type" : "StringType",
                  "length" : 36,
                  "name" : "String",
                  "displayName" : "字符串"
                },
                "path" : "ProjectCode",
                "code" : "ProjectCode",
                "label" : "projectCode",
                "originalId" : "034d37e8-5585-4a75-b4d9-94f665d4ac48",
                "bindingPath" : "projectCode",
                "bindingField" : "projectCode"
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
                "name" : "项目名称",
                "id" : "2693df04-6fb9-4484-abac-8b6f8334ca5a",
                "type" : {
                  "$type" : "StringType",
                  "length" : 512,
                  "name" : "String",
                  "displayName" : "字符串"
                },
                "path" : "ProjectName",
                "code" : "ProjectName",
                "label" : "projectName",
                "originalId" : "2693df04-6fb9-4484-abac-8b6f8334ca5a",
                "bindingPath" : "projectName",
                "bindingField" : "projectName"
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
                "name" : "项目类别",
                "id" : "47b0d767-813c-40e0-ac91-7ca55af99494",
                "type" : {
                  "$type" : "StringType",
                  "length" : 36,
                  "name" : "String",
                  "displayName" : "字符串"
                },
                "path" : "ProjectType",
                "code" : "ProjectType",
                "label" : "projectType",
                "originalId" : "47b0d767-813c-40e0-ac91-7ca55af99494",
                "bindingPath" : "projectType",
                "bindingField" : "projectType"
              }, {
                "$type" : "SimpleField",
                "refElementId" : null,
                "defaultValue" : "",
                "readonly" : false,
                "multiLanguage" : false,
                "require" : false,
                "editor" : {
                  "$type" : "MultiTextBox"
                },
                "name" : "项目备注",
                "id" : "60e4aa39-29c1-44c1-abdf-fd09a81883a4",
                "type" : {
                  "$type" : "TextType",
                  "length" : 0,
                  "name" : "Text",
                  "displayName" : "文本"
                },
                "path" : "ProjectNote",
                "code" : "ProjectNote",
                "label" : "projectNote",
                "originalId" : "60e4aa39-29c1-44c1-abdf-fd09a81883a4",
                "bindingPath" : "projectNote",
                "bindingField" : "projectNote"
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
                "name" : "项目金额",
                "id" : "c8e88808-9c3e-419e-bf0f-4290828bb220",
                "type" : {
                  "$type" : "NumericType",
                  "length" : 8,
                  "name" : "Number",
                  "displayName" : "数字",
                  "precision" : 2
                },
                "path" : "ProjectSum",
                "code" : "ProjectSum",
                "label" : "projectSum",
                "originalId" : "c8e88808-9c3e-419e-bf0f-4290828bb220",
                "bindingPath" : "projectSum",
                "bindingField" : "projectSum"
              } ],
              "primary" : "id",
              "entities" : [ ],
              "name" : "ProjectsFanwz",
              "displayName" : "项目字典Fanwz"
            },
            "code" : "ProjectsFanwz",
            "label" : "projectsFanwzs"
          } ],
          "extendProperties" : {
            "enableStdTimeFormat" : true
          },
          "eapiId" : "9de88979-f482-499f-a9a4-091cd41f3aab"
        } ],
        "states" : [ ],
        "contents" : [ ],
        "stateMachines" : [ {
          "id" : "ProjectFanwz_state_machine",
          "name" : "项目字典Fanwz状态机",
          "uri" : "39cdc009-34bf-49bb-a8a8-c12de22bf4a2"
        } ],
        "viewmodels" : [ {
          "id" : "root-viewmodel",
          "code" : "root-viewmodel",
          "name" : "项目字典Fanwz",
          "fields" : [ ],
          "stateMachine" : "ProjectFanwz_state_machine",
          "serviceRefs" : [ ],
          "commands" : [ {
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
          "name" : "项目字典Fanwz",
          "fields" : [ {
            "type" : "Form",
            "id" : "034d37e8-5585-4a75-b4d9-94f665d4ac48",
            "fieldName" : "projectCode",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "2693df04-6fb9-4484-abac-8b6f8334ca5a",
            "fieldName" : "projectName",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          } ],
          "commands" : [ {
            "id" : "fda876c8-7230-46e7-af3d-d38233642275",
            "code" : "loadList1",
            "name" : "加载列表数据",
            "params" : [ ],
            "handlerName" : "loadList",
            "cmpId" : "7c48ef46-339c-42d4-8365-a21236c63044",
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "22576fc1-08fb-49a9-b132-295c7392b481",
            "code" : "remove1",
            "name" : "删除",
            "params" : [ {
              "name" : "id",
              "shownName" : "数据id",
              "value" : "{DATA~/data-grid-component/id}",
              "description" : null
            } ],
            "handlerName" : "remove",
            "cmpId" : "7c48ef46-339c-42d4-8365-a21236c63044",
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "8788c27e-722a-4b98-9d57-98eafb526fe5",
            "code" : "loadCard1",
            "name" : "加载卡片数据",
            "params" : [ {
              "name" : "id",
              "shownName" : "当前行Id",
              "value" : "{DATA~/data-grid-component/id}",
              "description" : null
            }, {
              "name" : "frameId",
              "shownName" : "框架Id",
              "value" : "detail-form-component",
              "description" : null
            } ],
            "handlerName" : "loadCard",
            "cmpId" : "7c48ef46-339c-42d4-8365-a21236c63044",
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "ef281c13-4480-4256-901e-4bef5f92bd9e",
            "code" : "add1",
            "name" : "新增",
            "params" : [ ],
            "handlerName" : "add",
            "cmpId" : "7c48ef46-339c-42d4-8365-a21236c63044",
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "e7cf83c2-e52d-4dce-aded-047a819c8068",
            "code" : "changePage1",
            "name" : "切换页码",
            "params" : [ {
              "name" : "loadCommandName",
              "shownName" : "数据加载命令名称",
              "value" : "loadList1",
              "description" : "数据加载的命令名称"
            }, {
              "name" : "loadCommandFrameId",
              "shownName" : "数据加载命令框架id",
              "value" : "data-grid-component",
              "description" : "数据加载命令所在的框架id"
            } ],
            "handlerName" : "changePage",
            "cmpId" : "7c48ef46-339c-42d4-8365-a21236c63044",
            "extensions" : [ ],
            "isInvalid" : false
          } ],
          "serviceRefs" : [ ],
          "states" : [ ],
          "bindTo" : "/",
          "parent" : "root-viewmodel",
          "pagination" : {
            "enable" : true,
            "pageSize" : 20,
            "pageList" : "10,20,30,50,100"
          },
          "enableValidation" : false
        }, {
          "id" : "detail-form-component-viewmodel",
          "code" : "detail-form-component-viewmodel",
          "name" : "项目字典Fanwz",
          "fields" : [ {
            "type" : "Form",
            "id" : "034d37e8-5585-4a75-b4d9-94f665d4ac48",
            "fieldName" : "projectCode",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "2693df04-6fb9-4484-abac-8b6f8334ca5a",
            "fieldName" : "projectName",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "47b0d767-813c-40e0-ac91-7ca55af99494",
            "fieldName" : "projectType",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "60e4aa39-29c1-44c1-abdf-fd09a81883a4",
            "fieldName" : "projectNote",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "c8e88808-9c3e-419e-bf0f-4290828bb220",
            "fieldName" : "projectSum",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur",
            "fieldSchema" : {
              "editor" : {
                "minValue" : 0
              }
            }
          } ],
          "commands" : [ {
            "id" : "d12acc4e-6274-44dc-95e6-cedeb5e66707",
            "code" : "edit1",
            "name" : "编辑",
            "params" : [ {
              "name" : "id",
              "shownName" : "当前行Id",
              "value" : "{DATA~/detail-form-component/id}",
              "description" : null
            }, {
              "name" : "transitionAction",
              "shownName" : "迁移状态动作",
              "value" : "Edit",
              "description" : null
            } ],
            "handlerName" : "edit",
            "cmpId" : "7c48ef46-339c-42d4-8365-a21236c63044",
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "5707d460-c441-45c4-8fe1-f77abd9f75b1",
            "code" : "save1",
            "name" : "保存",
            "params" : [ ],
            "handlerName" : "save",
            "cmpId" : "7c48ef46-339c-42d4-8365-a21236c63044",
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "b3897b4b-a37f-48e3-afb3-8489cec02806",
            "code" : "cancel1",
            "name" : "取消",
            "params" : [ ],
            "handlerName" : "cancel",
            "cmpId" : "7c48ef46-339c-42d4-8365-a21236c63044",
            "extensions" : [ ],
            "isInvalid" : false
          } ],
          "serviceRefs" : [ ],
          "states" : [ ],
          "bindTo" : "/",
          "parent" : "root-viewmodel",
          "enableValidation" : true
        } ],
        "components" : [ {
          "id" : "root-component",
          "type" : "Component",
          "componentType" : "Frame",
          "viewModel" : "root-viewmodel",
          "onInit" : "",
          "contents" : [ {
            "id" : "root-layout",
            "type" : "ContentContainer",
            "appearance" : {
              "class" : "f-page f-page-navigate f-page-is-grid-card"
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
                    "html" : "<span class=\"f-title-icon f-text-orna-dict\"><i class=\"f-icon f-icon-page-title-dictionary\"></i></span><h4 class=\"f-title-text\">项目字典Fanwz</h4>"
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
                    "click" : "root-viewmodel.data-grid-component-viewmodel.add1",
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
                    "click" : "root-viewmodel.detail-form-component-viewmodel.edit1",
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
                    "click" : "root-viewmodel.detail-form-component-viewmodel.save1",
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
                    "click" : "root-viewmodel.detail-form-component-viewmodel.cancel1",
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
                    "click" : "root-viewmodel.data-grid-component-viewmodel.remove1",
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
              "id" : "main-container",
              "type" : "ContentContainer",
              "appearance" : {
                "class" : "f-page-main"
              },
              "size" : null,
              "contents" : [ {
                "id" : "content-splitter",
                "type" : "Splitter",
                "appearance" : {
                  "class" : "f-page-content"
                },
                "size" : null,
                "contents" : [ {
                  "id" : "content-list",
                  "type" : "SplitterPane",
                  "appearance" : {
                    "class" : "f-col-w6 f-page-content-nav"
                  },
                  "size" : null,
                  "resizable" : true,
                  "resizeHandlers" : "e",
                  "contents" : [ {
                    "id" : "data-grid-component-ref",
                    "type" : "ComponentRef",
                    "component" : "data-grid-component",
                    "visible" : true
                  } ],
                  "visible" : true
                }, {
                  "id" : "content-main",
                  "type" : "SplitterPane",
                  "appearance" : {
                    "class" : "f-page-content-main"
                  },
                  "size" : null,
                  "contents" : [ {
                    "id" : "detail-component-ref",
                    "type" : "ComponentRef",
                    "component" : "detail-form-component",
                    "visible" : true
                  } ],
                  "visible" : true
                } ],
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
            "class" : "f-struct-wrapper  f-utils-fill-flex-column"
          },
          "onInit" : "loadList1",
          "contents" : [ {
            "id" : "data-grid-section",
            "type" : "Section",
            "appearance" : {
              "class" : "f-section-grid f-section-in-nav"
            },
            "size" : null,
            "visible" : true,
            "mainTitle" : "",
            "subTitle" : "",
            "headerClass" : "",
            "titleClass" : "",
            "extendedHeaderAreaClass" : "",
            "toolbarClass" : "",
            "extendedAreaClass" : "",
            "contentTemplateClass" : "",
            "fill" : false,
            "expanded" : true,
            "enableMaximize" : true,
            "enableAccordion" : true,
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
              "dataSource" : "projectsFanwzs",
              "fields" : [ {
                "id" : "projectCode_034d37e8_rnse",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "项目编号",
                "captionTemplate" : null,
                "dataField" : "projectCode",
                "dataType" : "string",
                "binding" : {
                  "type" : "Form",
                  "path" : "projectCode",
                  "field" : "034d37e8-5585-4a75-b4d9-94f665d4ac48"
                },
                "enumData" : null,
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "displayTemplate" : null,
                "editor" : null,
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
                "path" : "projectCode",
                "readonly" : false,
                "visible" : true,
                "allowGrouping" : true,
                "tipMode" : "auto"
              }, {
                "id" : "projectName_2693df04_jujs",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "项目名称",
                "captionTemplate" : null,
                "dataField" : "projectName",
                "dataType" : "string",
                "binding" : {
                  "type" : "Form",
                  "path" : "projectName",
                  "field" : "2693df04-6fb9-4484-abac-8b6f8334ca5a"
                },
                "enumData" : null,
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "displayTemplate" : null,
                "editor" : null,
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
                "path" : "projectName",
                "readonly" : false,
                "visible" : true,
                "allowGrouping" : true,
                "tipMode" : "auto"
              } ],
              "focusedItem" : null,
              "focusedIndex" : null,
              "identifyField" : null,
              "multiSelect" : false,
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
              "onSelectionChange" : "loadCard1",
              "fieldEditable" : false,
              "appendRow" : null,
              "disable" : "viewModel.stateMachine['editable']",
              "pageChange" : "changePage1",
              "pageSizeChanged" : "changePage1",
              "fitColumns" : true,
              "autoFitColumns" : false,
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
            "toolbar" : {
              "type" : "SectionToolbar",
              "position" : "inHead",
              "contents" : [ ]
            }
          } ],
          "afterViewInit" : ""
        }, {
          "id" : "detail-form-component",
          "type" : "Component",
          "componentType" : "form-col-1",
          "viewModel" : "detail-form-component-viewmodel",
          "onInit" : "",
          "appearance" : {
            "class" : "f-struct-wrapper"
          },
          "contents" : [ {
            "id" : "detail-form-section",
            "type" : "Section",
            "appearance" : {
              "class" : "f-section-form f-section-in-main"
            },
            "visible" : true,
            "mainTitle" : "基本信息",
            "subTitle" : "",
            "headerClass" : "",
            "titleClass" : "",
            "extendedHeaderAreaClass" : "",
            "toolbarClass" : "",
            "extendedAreaClass" : "",
            "contentTemplateClass" : "",
            "fill" : false,
            "expanded" : true,
            "enableMaximize" : false,
            "enableAccordion" : false,
            "accordionMode" : "default",
            "showHeader" : true,
            "headerTemplate" : "",
            "titleTemplate" : "",
            "extendedHeaderAreaTemplate" : "",
            "toolbarTemplate" : "",
            "extendedAreaTemplate" : "",
            "contents" : [ {
              "id" : "detail-form-layout",
              "type" : "Form",
              "appearance" : {
                "class" : "f-form-layout farris-form farris-form-controls-inline"
              },
              "size" : null,
              "contents" : [ {
                "id" : "projectCode_034d37e8_75r8",
                "type" : "TextBox",
                "titleSourceType" : "static",
                "title" : "项目编号",
                "appearance" : {
                  "class" : "col-12"
                },
                "size" : null,
                "binding" : {
                  "type" : "Form",
                  "path" : "projectCode",
                  "field" : "034d37e8-5585-4a75-b4d9-94f665d4ac48"
                },
                "readonly" : "!viewModel.stateMachine['editable']",
                "require" : false,
                "disable" : false,
                "placeHolder" : "",
                "format" : null,
                "validation" : null,
                "value" : null,
                "maxLength" : 36,
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
                "path" : "projectCode",
                "enableAppend" : false,
                "inputAppendType" : "button",
                "inputAppendDisabled" : false
              }, {
                "id" : "projectName_2693df04_u0od",
                "type" : "TextBox",
                "titleSourceType" : "static",
                "title" : "项目名称",
                "appearance" : {
                  "class" : "col-12"
                },
                "size" : null,
                "binding" : {
                  "type" : "Form",
                  "path" : "projectName",
                  "field" : "2693df04-6fb9-4484-abac-8b6f8334ca5a"
                },
                "readonly" : "!viewModel.stateMachine['editable']",
                "require" : false,
                "disable" : false,
                "placeHolder" : "",
                "format" : null,
                "validation" : null,
                "value" : null,
                "maxLength" : 512,
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
                "path" : "projectName",
                "enableAppend" : false,
                "inputAppendType" : "button",
                "inputAppendDisabled" : false
              }, {
                "id" : "projectType_47b0d767_7fzm",
                "type" : "TextBox",
                "titleSourceType" : "static",
                "title" : "项目类别",
                "appearance" : {
                  "class" : "col-12"
                },
                "size" : null,
                "binding" : {
                  "type" : "Form",
                  "path" : "projectType",
                  "field" : "47b0d767-813c-40e0-ac91-7ca55af99494"
                },
                "readonly" : "!viewModel.stateMachine['editable']",
                "require" : false,
                "disable" : false,
                "placeHolder" : "",
                "format" : null,
                "validation" : null,
                "value" : null,
                "maxLength" : 36,
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
                "path" : "projectType",
                "enableAppend" : false,
                "inputAppendType" : "button",
                "inputAppendDisabled" : false
              }, {
                "id" : "projectNote_60e4aa39_qvd7",
                "type" : "MultiTextBox",
                "titleSourceType" : "static",
                "title" : "项目备注",
                "binding" : {
                  "type" : "Form",
                  "path" : "projectNote",
                  "field" : "60e4aa39-29c1-44c1-abdf-fd09a81883a4"
                },
                "placeHolder" : "",
                "appearance" : {
                  "class" : "col-12"
                },
                "size" : null,
                "readonly" : "!viewModel.stateMachine['editable']",
                "require" : false,
                "disable" : false,
                "format" : null,
                "validation" : null,
                "value" : null,
                "maxLength" : 0,
                "linkedLabelEnabled" : false,
                "linkedLabelClick" : null,
                "visible" : true,
                "holdPlace" : false,
                "isTextArea" : true,
                "tabindex" : -1,
                "hasDefaultFocus" : false,
                "focusState" : null,
                "titleWidth" : null,
                "autoHeight" : false,
                "maxHeight" : null,
                "path" : "projectNote",
                "editType" : "default",
                "dialogWidth" : 500,
                "dialogHeight" : 400,
                "enableWordCount" : false,
                "countType" : "surplus",
                "onlyShowInDialog" : false
              }, {
                "id" : "projectSum_c8e88808_bpqf",
                "type" : "NumericBox",
                "titleSourceType" : "static",
                "title" : "项目金额",
                "controlSource" : "Farris",
                "appearance" : {
                  "class" : "col-12"
                },
                "size" : null,
                "binding" : {
                  "type" : "Form",
                  "path" : "projectSum",
                  "field" : "c8e88808-9c3e-419e-bf0f-4290828bb220"
                },
                "readonly" : "!viewModel.stateMachine['editable']",
                "require" : false,
                "disable" : false,
                "placeHolder" : "",
                "textAlign" : "left",
                "precisionSourceType" : "static",
                "precision" : 2,
                "validation" : null,
                "maxValue" : null,
                "minValue" : 0,
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
                "path" : "projectSum",
                "enableAppend" : false,
                "inputAppendType" : "button",
                "inputAppendDisabled" : false
              } ],
              "controlsInline" : true,
              "formAutoIntl" : true,
              "visible" : true,
              "draggable" : false
            } ],
            "toolbar" : {
              "type" : "SectionToolbar",
              "position" : "inHead",
              "contents" : [ ]
            }
          } ],
          "afterViewInit" : ""
        } ],
        "webcmds" : [ {
          "id" : "7c48ef46-339c-42d4-8365-a21236c63044",
          "path" : "/projects/packages/Inspur.GS.Gsp.Web.WebCmp/webcmd",
          "name" : "ListCardController.webcmd",
          "refedHandlers" : [ {
            "host" : "fda876c8-7230-46e7-af3d-d38233642275",
            "handler" : "loadList"
          }, {
            "host" : "8788c27e-722a-4b98-9d57-98eafb526fe5",
            "handler" : "loadCard"
          }, {
            "host" : "ef281c13-4480-4256-901e-4bef5f92bd9e",
            "handler" : "add"
          }, {
            "host" : "d12acc4e-6274-44dc-95e6-cedeb5e66707",
            "handler" : "edit"
          }, {
            "host" : "5707d460-c441-45c4-8fe1-f77abd9f75b1",
            "handler" : "save"
          }, {
            "host" : "b3897b4b-a37f-48e3-afb3-8489cec02806",
            "handler" : "cancel"
          }, {
            "host" : "22576fc1-08fb-49a9-b132-295c7392b481",
            "handler" : "remove"
          }, {
            "host" : "e7cf83c2-e52d-4dce-aded-047a819c8068",
            "handler" : "changePage"
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
        "projectName" : "bo-projectsfanwzfront",
        "showType" : "page",
        "toolbar" : {
          "items" : { },
          "configs" : { }
        },
        "expressions" : [ ]
      },
      "options" : {
        "enableTextArea" : true,
        "renderMode" : "compile"
      }
    },
    "CreationDate" : null
  },
  "ExtendRule" : null,
  "RelativePath" : "FSSC/DF/ProjectsFanwz/bo-projectsfanwzfront/metadata/components",
  "ExtendProperty" : "",
  "Extended" : false,
  "PreviousVersion" : null,
  "Version" : null,
  "Properties" : null
}