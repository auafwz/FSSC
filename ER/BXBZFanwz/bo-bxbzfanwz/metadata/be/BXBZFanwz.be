{
  "Header" : {
    "Code" : "BXBZFanwz",
    "Type" : "GSPBusinessEntity",
    "NameSpace" : "Inspur.GS.FSSC.ER.BXBZFanwz",
    "CertId" : null,
    "Name" : "报销限额设置Fanwz",
    "FileName" : "BXBZFanwz.be",
    "BizobjectID" : "c3bf58bb-4eb7-4eb0-baf8-d9c24235f148",
    "Language" : null,
    "Extendable" : false,
    "ID" : "b6a6d7eb-ec54-4a40-8c53-0b8be2a20dd5",
    "IsTranslating" : false
  },
  "Refs" : [ {
    "DependentMetadata" : {
      "ID" : "c31ae4d9-8ee1-43ec-a526-09720fb3f4c9",
      "CertId" : null,
      "NameSpace" : "Inspur.GS.Gsp.Sys.User",
      "Code" : "GspUser",
      "Name" : "用户",
      "Type" : "GSPBusinessEntity",
      "BizobjectID" : "User"
    }
  }, {
    "DependentMetadata" : {
      "ID" : "2bedfc30-4b06-49ff-bbfe-3b996a5c2919",
      "CertId" : null,
      "NameSpace" : "Inspur.GS.Gsp.Sys.SysOrg",
      "Code" : "SysOrg",
      "Name" : "系统组织",
      "Type" : "GSPBusinessEntity",
      "BizobjectID" : "SysOrg"
    }
  }, {
    "DependentMetadata" : {
      "ID" : "b66c43a8-d763-4b3b-8e37-b0799142aeae",
      "CertId" : null,
      "NameSpace" : "Inspur.GS.FSSC.ER.BXBZFanwz",
      "Code" : "BXBZFanwz.be",
      "Name" : "BXBZFanwz.be",
      "Type" : "ResourceMetadata",
      "BizobjectID" : "c3bf58bb-4eb7-4eb0-baf8-d9c24235f148"
    }
  } ],
  "Content" : {
    "ID" : "b6a6d7eb-ec54-4a40-8c53-0b8be2a20dd5",
    "Code" : "BXBZFanwz",
    "Name" : "报销限额设置Fanwz",
    "GeneratingAssembly" : "Inspur.GS.FSSC.ER.BXBZFanwz",
    "IsUseNamespaceConfig" : true,
    "VersionControlInfo" : {
      "VersionControlElementId" : "6c0928c8-92da-4677-917c-43f42da0d5bb"
    },
    "IsSimplifyGen" : true,
    "MainObject" : {
      "ID" : "20dde9d2-82e5-458d-bb55-729035633b2b",
      "Code" : "BXBZFanwz",
      "Name" : "报销限额设置Fanwz",
      "I18nResourceInfoPrefix" : "Inspur.GS.FSSC.ER.BXBZFanwz.BXBZFanwz.BXBZFanwz",
      "ContainElements" : [ {
        "ID" : "4d579650-5801-4c10-a0c2-b59e784fc3e8",
        "LabelID" : "ID",
        "ChildAssociations" : [ ],
        "ColumnID" : "fdb0f184-7fc6-43db-b20a-a5b23f2ce23b",
        "Code" : "ID",
        "Name" : "ID",
        "MDataType" : "String",
        "Length" : 36,
        "IsRequire" : true,
        "EnableRtrim" : true
      }, {
        "ID" : "6c0928c8-92da-4677-917c-43f42da0d5bb",
        "LabelID" : "Version",
        "ChildAssociations" : [ ],
        "ColumnID" : "523b81fb-9eb3-4dae-849e-855cb2978316",
        "Code" : "Version",
        "Name" : "Version",
        "MDataType" : "DateTime",
        "EnableRtrim" : true
      }, {
        "ID" : "a10ea27d-db10-47b8-820b-a33d9eb84644",
        "LabelID" : "BXRY",
        "ChildAssociations" : [ {
          "ID" : "87bda9ce-a353-4ffe-9404-ffac55d842cc",
          "RefElementCollection" : [ {
            "ID" : "fe921810-b850-4d29-a82d-894f81320e50",
            "LabelID" : "BXRY_Name",
            "ChildAssociations" : [ ],
            "ColumnID" : "55569631-de1d-46a5-bf27-2d9663989d58",
            "Code" : "Name",
            "Name" : "名称",
            "MDataType" : "String",
            "Length" : 36,
            "IsMultiLanguage" : true,
            "IsRefElement" : true,
            "RefElementID" : "94fd1572-613c-4973-bf79-12e33c16a9ec",
            "EnableRtrim" : true
          } ],
          "RefModelID" : "c31ae4d9-8ee1-43ec-a526-09720fb3f4c9",
          "RefModelName" : "用户",
          "RefModelCode" : "GspUser",
          "RefModelPkgName" : "Inspur.GS.Gsp.Sys.User",
          "RefObjectID" : "c8b9b61f-fc8b-4d5f-921b-4f56a3b00a08",
          "RefObjectCode" : "GspUser",
          "RefObjectName" : "用户",
          "KeyCollection" : [ {
            "SourceElement" : "82e52824-f8e1-46a1-841f-0f65582eafac",
            "SourceElementDisplay" : "ID",
            "TargetElement" : "a10ea27d-db10-47b8-820b-a33d9eb84644",
            "TargetElementDisplay" : "人员",
            "RefDataModelName" : ""
          } ],
          "AssoModelInfo" : {
            "ModelConfigId" : "GspUser",
            "MainObjCode" : "GspUser"
          }
        } ],
        "ColumnID" : "6500a83d-cdbd-41bb-842f-8b15496fe829",
        "Code" : "BXRY",
        "Name" : "人员",
        "ObjectType" : "Association",
        "MDataType" : "String",
        "Length" : 36,
        "EnableRtrim" : true
      }, {
        "ID" : "8478df8d-275e-490d-9f00-239e6686eb4d",
        "LabelID" : "BXDW",
        "ChildAssociations" : [ {
          "ID" : "5ded097c-b4b9-4a0f-a207-672e8442cf96",
          "RefElementCollection" : [ {
            "ID" : "8bb65962-ba3e-4025-81fb-3a69c1b6b876",
            "LabelID" : "BXDW_name",
            "ChildAssociations" : [ ],
            "ColumnID" : "4fea2fa9-656a-4a90-9ff3-f9b25c3e2315",
            "Code" : "name",
            "Name" : "名称",
            "MDataType" : "String",
            "Length" : 100,
            "IsMultiLanguage" : true,
            "IsRefElement" : true,
            "RefElementID" : "a824ff6d-b08f-4b5c-b707-997d56760fb4",
            "EnableRtrim" : true
          } ],
          "RefModelID" : "2bedfc30-4b06-49ff-bbfe-3b996a5c2919",
          "RefModelName" : "系统组织",
          "RefModelCode" : "SysOrg",
          "RefModelPkgName" : "Inspur.GS.Gsp.Sys.SysOrg",
          "RefObjectID" : "51b2e509-92c6-4131-b395-6cf92b6e0bab",
          "RefObjectCode" : "SysOrg",
          "RefObjectName" : "系统组织",
          "KeyCollection" : [ {
            "SourceElement" : "0d45aea4-1327-403f-bda2-c9b5a933587b",
            "SourceElementDisplay" : "ID",
            "TargetElement" : "8478df8d-275e-490d-9f00-239e6686eb4d",
            "TargetElementDisplay" : "单位",
            "RefDataModelName" : ""
          } ],
          "AssoModelInfo" : {
            "ModelConfigId" : "Inspur.GS.Gsp.Sys.SysOrg.SysOrg",
            "MainObjCode" : "SysOrg"
          }
        } ],
        "ColumnID" : "1369d50c-14c9-47b1-8242-52fd06ef0a15",
        "Code" : "BXDW",
        "Name" : "单位",
        "ObjectType" : "Association",
        "MDataType" : "String",
        "Length" : 36,
        "EnableRtrim" : true
      }, {
        "ID" : "8641b03e-5d85-43b6-a788-011a2ef756cf",
        "LabelID" : "JE",
        "ChildAssociations" : [ ],
        "ColumnID" : "74eeba5b-2ecf-43a7-9fae-f8d25c945d2b",
        "Code" : "JE",
        "Name" : "金额",
        "MDataType" : "Decimal",
        "Length" : 8,
        "Precision" : 2,
        "EnableRtrim" : true
      }, {
        "ID" : "eb7937a4-0d40-45da-bc61-5e8eef8665d9",
        "LabelID" : "KSRQ",
        "ChildAssociations" : [ ],
        "ColumnID" : "b4b98474-ba1a-4d1a-9d61-e39088148eeb",
        "Code" : "KSRQ",
        "Name" : "开始日期",
        "MDataType" : "Date",
        "EnableRtrim" : true
      }, {
        "ID" : "a667af6b-7ab6-4e8d-a57e-3ae0241941b0",
        "LabelID" : "JSRQ",
        "ChildAssociations" : [ ],
        "ColumnID" : "48ea7713-2142-475c-bf5c-54f8cf6e00c9",
        "Code" : "JSRQ",
        "Name" : "结束日期",
        "MDataType" : "Date",
        "EnableRtrim" : true
      }, {
        "ID" : "1afe5b0d-9303-4edd-9955-381473dbb331",
        "LabelID" : "BZ",
        "ChildAssociations" : [ ],
        "ColumnID" : "304960c9-13cd-4da2-948f-707816240395",
        "Code" : "BZ",
        "Name" : "币种",
        "MDataType" : "String",
        "Length" : 10,
        "EnableRtrim" : true
      }, {
        "ID" : "b57c636c-4b29-404c-b5be-aeafd194f5a3",
        "LabelID" : "QT",
        "ChildAssociations" : [ ],
        "ColumnID" : "a9f68770-b419-4451-9314-1717dc46ae29",
        "Code" : "QT",
        "Name" : "启用标志",
        "MDataType" : "Boolean",
        "Length" : 1,
        "EnableRtrim" : true
      } ],
      "RefObjectName" : "95933088-0012-4c78-a551-938b913ffb81",
      "ColumnGenerateID" : {
        "ElementID" : "4d579650-5801-4c10-a0c2-b59e784fc3e8",
        "GenerateType" : "Guid",
        "ColumnParameters" : [ ]
      },
      "BelongModelID" : "b6a6d7eb-ec54-4a40-8c53-0b8be2a20dd5"
    },
    "Variables" : {
      "ID" : "02b798a5-5254-4aef-a04d-679afa44a055",
      "Code" : "BXBZFanwzVariable",
      "Name" : "报销限额设置Fanwz变量",
      "I18nResourceInfoPrefix" : ""
    },
    "ComponentAssemblyName" : "Inspur.GS.FSSC.ER.BXBZFanwz"
  },
  "ExtendRule" : null,
  "RelativePath" : "FSSC/ER/BXBZFanwz/bo-bxbzfanwz/metadata/be",
  "ExtendProperty" : "{\"enableEntryBills\":false}",
  "Extended" : false,
  "PreviousVersion" : null,
  "Version" : null,
  "Properties" : null
}