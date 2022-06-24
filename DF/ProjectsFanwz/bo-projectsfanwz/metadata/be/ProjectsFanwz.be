{
  "Header" : {
    "Code" : "ProjectsFanwz",
    "Type" : "GSPBusinessEntity",
    "NameSpace" : "Inspur.GS.FSSC.DF.ProjectsFanwz",
    "CertId" : null,
    "Name" : "项目字典Fanwz",
    "FileName" : "ProjectsFanwz.be",
    "BizobjectID" : "4de97d7c-9f8f-04a4-a825-859b00dd9a33",
    "Language" : null,
    "Extendable" : false,
    "ID" : "8ced655c-e818-4d42-b8ac-6e14624510d4",
    "IsTranslating" : false
  },
  "Refs" : [ {
    "DependentMetadata" : {
      "ID" : "1455a6a1-36e8-49fd-8f40-9d2c43a96599",
      "CertId" : null,
      "NameSpace" : "Inspur.GS.FSSC.DF.ProjectsFanwz",
      "Code" : "ProjectsFanwz.be",
      "Name" : "ProjectsFanwz.be",
      "Type" : "ResourceMetadata",
      "BizobjectID" : "4de97d7c-9f8f-04a4-a825-859b00dd9a33"
    }
  } ],
  "Content" : {
    "ID" : "8ced655c-e818-4d42-b8ac-6e14624510d4",
    "Code" : "ProjectsFanwz",
    "Name" : "项目字典Fanwz",
    "GeneratingAssembly" : "Inspur.GS.FSSC.DF.ProjectsFanwz",
    "IsUseNamespaceConfig" : true,
    "VersionControlInfo" : {
      "VersionControlElementId" : "a9adcaa3-2093-4d24-9f04-f73b7825b8e6"
    },
    "IsSimplifyGen" : true,
    "MainObject" : {
      "ID" : "56cbd09c-7f29-43ba-883d-64e835febf10",
      "Code" : "ProjectsFanwz",
      "Name" : "项目字典Fanwz",
      "I18nResourceInfoPrefix" : "Inspur.GS.FSSC.DF.ProjectsFanwz.ProjectsFanwz.ProjectsFanwz",
      "ContainElements" : [ {
        "ID" : "b134bf15-8889-4742-b8f0-d1fdc917eba3",
        "LabelID" : "ID",
        "ChildAssociations" : [ ],
        "ColumnID" : "b2863c18-8bcf-447a-9c62-a7fc744c467c",
        "Code" : "ID",
        "Name" : "ID",
        "MDataType" : "String",
        "Length" : 36,
        "IsRequire" : true,
        "EnableRtrim" : true
      }, {
        "ID" : "a9adcaa3-2093-4d24-9f04-f73b7825b8e6",
        "LabelID" : "Version",
        "ChildAssociations" : [ ],
        "ColumnID" : "e62c2eea-6b4a-4a58-a095-04010b3abc2d",
        "Code" : "Version",
        "Name" : "Version",
        "MDataType" : "DateTime",
        "EnableRtrim" : true
      }, {
        "ID" : "52e400c8-22f1-4620-9396-a272caa57c81",
        "LabelID" : "ProjectCode",
        "ChildAssociations" : [ ],
        "ColumnID" : "e8d531e0-1a33-4414-83ca-98dfb8e9d71c",
        "Code" : "ProjectCode",
        "Name" : "项目编号",
        "MDataType" : "String",
        "Length" : 36,
        "EnableRtrim" : true
      }, {
        "ID" : "38d98453-8a14-49a6-b5ee-e7bcca68af8c",
        "LabelID" : "ProjectName",
        "ChildAssociations" : [ ],
        "ColumnID" : "804b7778-94ea-4782-a2fd-d22043ea0c87",
        "Code" : "ProjectName",
        "Name" : "项目名称",
        "MDataType" : "String",
        "Length" : 512,
        "EnableRtrim" : true
      }, {
        "ID" : "96189630-e651-4554-bdb0-5dcf2c333677",
        "LabelID" : "ProjectType",
        "ChildAssociations" : [ ],
        "ColumnID" : "118e1a02-4804-4d14-9ffe-bf4a6d48c471",
        "Code" : "ProjectType",
        "Name" : "项目类别",
        "MDataType" : "String",
        "Length" : 36,
        "EnableRtrim" : true
      }, {
        "ID" : "242166b0-dda2-42ff-bd5e-20a5f1a04f42",
        "LabelID" : "ProjectNote",
        "ChildAssociations" : [ ],
        "ColumnID" : "d80349b8-151a-45b1-9f7c-a4483edc33f9",
        "Code" : "ProjectNote",
        "Name" : "项目备注",
        "MDataType" : "Text",
        "EnableRtrim" : true
      }, {
        "ID" : "8288c79b-ace2-488b-a01c-97e2b1360fd0",
        "LabelID" : "ProjectSum",
        "ChildAssociations" : [ ],
        "ColumnID" : "3a31f002-05d7-4a24-9e67-933d24598535",
        "Code" : "ProjectSum",
        "Name" : "项目金额",
        "MDataType" : "Decimal",
        "Length" : 8,
        "Precision" : 2,
        "EnableRtrim" : true
      } ],
      "RefObjectName" : "6009ed8f-bf91-43c4-9a3d-a00373a2cb8e",
      "ColumnGenerateID" : {
        "ElementID" : "b134bf15-8889-4742-b8f0-d1fdc917eba3",
        "GenerateType" : "Guid",
        "ColumnParameters" : [ ]
      },
      "BelongModelID" : "8ced655c-e818-4d42-b8ac-6e14624510d4"
    },
    "Variables" : {
      "ID" : "6e0f28ae-ea8d-4762-8583-e7f3701613b4",
      "Code" : "ProjectsFanwzVariable",
      "Name" : "项目字典Fanwz变量",
      "I18nResourceInfoPrefix" : ""
    },
    "ComponentAssemblyName" : "Inspur.GS.FSSC.DF.ProjectsFanwz"
  },
  "ExtendRule" : null,
  "RelativePath" : "FSSC/DF/ProjectsFanwz/bo-projectsfanwz/metadata/be",
  "ExtendProperty" : "{\"enableEntryBills\":false}",
  "Extended" : false,
  "PreviousVersion" : null,
  "Version" : null,
  "Properties" : null
}