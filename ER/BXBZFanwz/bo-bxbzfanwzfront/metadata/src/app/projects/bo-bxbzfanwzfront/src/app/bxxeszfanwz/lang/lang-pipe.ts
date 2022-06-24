
import { Pipe, PipeTransform, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, switchMap } from "rxjs/operators";
import { HttpClient } from '@angular/common/http';
import { DomSanitizer} from '@angular/platform-browser';
export function createTranslateLoader(http: HttpClient,version:string) {
  let versionSuffix = "";
  if (version) {
    versionSuffix = "?v=" + version;
  }
  return new TranslateHttpLoader(http, '/apps/fssc/er/web/bo-bxbzfanwzfront/bxxeszfanwz/i18n/', '.json'+ versionSuffix);
}

export const lang = {"zh-CHS":{"bxry_a34bc496_y63s":"人员","GridField/bxry_a34bc496_y63s/editor/bxry_a34bc496_rj3w":"文本","GridField/bxry_a34bc496_y63s/editor/TextBox/bxry_a34bc496_rj3w/placeHolder":"","bxdw_f6ac04c5_059z":"单位","GridField/bxdw_f6ac04c5_059z/editor/bxdw_f6ac04c5_piyl":"文本","GridField/bxdw_f6ac04c5_059z/editor/TextBox/bxdw_f6ac04c5_piyl/placeHolder":"","root-component":"","root-layout":"","page-header":"","header-nav":"","header-title-container":"","page-header-title":"","page-header-toolbar":"","button-add":"新增","button-edit":"编辑","button-save":"保存","button-cancel":"取消","button-delete":"删除","button-data-import":"导入","button-data-export":"导出","page-main":"","data-grid-component-ref":"","data-grid-component":"","data-grid-section":"","Section/data-grid-section/mainTitle":"","Section/data-grid-section/subTitle":"","dataGrid":"","DataGrid/dataGrid/lineNumberTitle":"","DataGrid/dataGrid/OperateEditButton":"编辑","DataGrid/dataGrid/OperateDeleteButton":"删除","DataGrid/dataGrid/OperateColumn":"操作","bxdW_BXDW_name_58c3aac5_4ebf":"所属组织","GridField/bxdW_BXDW_name_58c3aac5_4ebf/editor/bxdW_BXDW_name_58c3aac5_vpnb":"所属组织","GridField/bxdW_BXDW_name_58c3aac5_4ebf/editor/LookupEdit/bxdW_BXDW_name_58c3aac5_vpnb/placeHolder":"","GridField/bxdW_BXDW_name_58c3aac5_4ebf/editor/LookupEdit/bxdW_BXDW_name_58c3aac5_vpnb/dialogTitle":"","bxrY_BXRY_Name_d8b213ed_m4pc":"报销人员","GridField/bxrY_BXRY_Name_d8b213ed_m4pc/editor/bxrY_BXRY_Name_d8b213ed_jwcb":"报销人员","GridField/bxrY_BXRY_Name_d8b213ed_m4pc/editor/LookupEdit/bxrY_BXRY_Name_d8b213ed_jwcb/placeHolder":"","GridField/bxrY_BXRY_Name_d8b213ed_m4pc/editor/LookupEdit/bxrY_BXRY_Name_d8b213ed_jwcb/dialogTitle":"","je_88937e19_97r1":"金额","GridField/je_88937e19_97r1/editor/je_88937e19_rdgv":"数值框","GridField/je_88937e19_97r1/editor/NumberSpinner/je_88937e19_rdgv/placeHolder":"","ksrq_45aa3953_15m6":"开始日期","GridField/ksrq_45aa3953_15m6/editor/ksrq_45aa3953_81rz":"日期选择","GridField/ksrq_45aa3953_15m6/editor/DateBox/ksrq_45aa3953_81rz/placeHolder":"","jsrq_5973d1a1_lfio":"结束日期","GridField/jsrq_5973d1a1_lfio/editor/jsrq_5973d1a1_p6xd":"日期选择","GridField/jsrq_5973d1a1_lfio/editor/DateBox/jsrq_5973d1a1_p6xd/placeHolder":"","bz_9c4f692b_5ibr":"币种","GridField/bz_9c4f692b_5ibr/editor/bz_9c4f692b_cucu":"文本","GridField/bz_9c4f692b_5ibr/editor/TextBox/bz_9c4f692b_cucu/placeHolder":"","qt_91fb0df2_5zcg":"启用标志","GridField/qt_91fb0df2_5zcg/editor/qt_91fb0df2_rmx5":"复选框","GridField/qt_91fb0df2_5zcg/formatter/trueText":"是","GridField/qt_91fb0df2_5zcg/formatter/falseText":"否"}};

@Pipe({ name: 'lang' })
export class LangPipe implements PipeTransform {
  constructor(private translate: TranslateService, private http: HttpClient) { }
  transform(key: string, langCode: string, defaultValue?: string) {
      
    const translateValue = this.translate.instant(key);
    if (translateValue == "JitI18nDefaultValue") {
      return defaultValue ? defaultValue : "";
    }

    return translateValue;
  }
}
@Pipe({ name: 'safeHtml' })
export class SafeHtmlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  transform(url) {
    if (!url) {
      url = "";
    }
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
@Injectable()
export class LangService {
  constructor(private translate: TranslateService) { }
  transform(key: string, langCode: string, defaultValue?: string) {
    
    const translateValue = this.translate.instant(key);
    if (translateValue == "JitI18nDefaultValue") {
      return defaultValue ? defaultValue : "";
    }

    return translateValue;
  }

  getCurrentLanguage() {
    return this.translate.currentLang;
  }

}

@Injectable()
export class TranslateResolveService implements Resolve<any>{

  constructor(private translate: TranslateService, private http: HttpClient) {
    translate.defaultLang = 'zh-CHS';
    translate.setTranslation('zh-CHS', lang['zh-CHS']);
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    let langCode = localStorage.getItem('languageCode');
    if (!langCode) {
      langCode = "zh-CHS";
    }
    if (langCode == "zh-CHS" || (this.translate.defaultLang === langCode && this.translate.currentLoader == createTranslateLoader(this.http,null))) {
      this.translate.setTranslation('zh-CHS', lang['zh-CHS']);
      return of(this.translate[langCode]);
    } else {
      const httpOb = this.http.get("/apps/fssc/er/web/bo-bxbzfanwzfront/version.json?v=" + new Date().getTime()).pipe(switchMap((data)=>{
        let currentVersion = null;
        if (data instanceof Array) {
          const versionKey = "bxxeszfanwz/" + langCode + ".json";
          data.forEach((item) => {
            if (item.category == "i18n" && item.key == versionKey) {
              currentVersion = item.value;
            }
          });
        }

        this.translate.defaultLang = langCode;
        this.translate.currentLang = langCode;
        this.translate.currentLoader = createTranslateLoader(this.http, currentVersion);

    let tran = this.translate.getTranslation(langCode).pipe(catchError(err => {
      console.error("read resource file failed,please check!!! "+ err);
      return of(err);
    }));
    return tran;
      }));
      return httpOb;
    }
  }
}
