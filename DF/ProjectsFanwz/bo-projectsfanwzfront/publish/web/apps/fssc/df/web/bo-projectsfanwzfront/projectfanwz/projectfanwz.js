/*! UPDATE TIME: 2022-6-23 15:45:02 */
System.register(['@angular/core', 'tslib', '@angular/common', '@angular/forms', '@farris/kendo-binding', '@progress/kendo-angular-layout', '@farris/ui-flex-layout', '@farris/ui-forms', '@farris/ui-forms/validation-message', '@farris/ui-loading', '@farris/ui-messager', '@farris/ui-notify', '@farris/ui-response-toolbar', '@farris/bef', '@ngx-translate/core', '@ngx-translate/http-loader', 'rxjs', 'rxjs/operators', '@angular/common/http', '@angular/platform-browser', '@farris/devkit', '@farris/command-services', '@farris/ui-verify-detail', '@ecp-caf/caf-common', '@gsp-sys/rtf-common', '@farris/ui-tooltip', '@progress/kendo-angular-grid', '@progress/kendo-angular-dateinputs', '@progress/kendo-angular-dropdowns', '@progress/kendo-angular-buttons', '@progress/kendo-angular-inputs', '@progress/kendo-angular-intl', '@progress/kendo-angular-intl/locales/zh/all', '@farris/ui-lookup', '@farris/ui-treetable', '@farris/ui-field-group', '@farris/ui-tabs', '@farris/ui-tag', '@farris/ui-sidebar', '@gsp-svc/formdoc-upload', '@farris/ui-section', '@farris/ui-datepicker', '@farris/ui-time-spinner', '@farris/ui-datagrid', '@farris/ui-wizard', '@gsp-cmp/querysolution', '@farris/ui-button', '@farris/ui-list-view', '@farris/ui-time-picker', '@farris/ui-draggable', '@farris/ui-splitter', '@farris/ui-list-nav', '@farris/ui-text', '@gsp-wf/rtdevkit', '@farris/ui-multi-select', '@farris/ui-input-group', '@farris/ui-combo-list', '@farris/ui-html-editor', '@gsp-svc/cloudprint', '@farris/ui-datagrid-editors', '@farris/ui-view-change', '@farris/ui-switch', '@farris/ui-list-filter', '@farris/ui-filter', '@farris/ui-avatar', '@farris/ui-calendar', '@gsp-wf/ui-flowchart', '@farris/ui-number-spinner', '@farris/ui-combo-lookup', '@farris/ui-scrollspy', '@gsp-svc/file-viewer', '@farris/ui-language-textbox', '@farris/dynamic-control-group', '@farris/ui-batch-edit-dialog', '@farris/ui-datagrid-filter', '@farris/ui-datagrid-settings', '@farris/ui-footer', '@farris/discussion-group', '@farris/ui-nav', '@farris/tags', '@farris/ui-editor', '@farris/extend-fileupload-adapt-unifile', '@farris/extend-header-footer', '@farris/extend-page-modal', '@farris/ui-feature-editor', '@farris/extend-scroll-collapsible-area', '@angular/router', '@gsp-dip/data-imp-exp', '@farris/ui-common', '@farris/ui-loading/farris-ui-loading.ngfactory', '@farris/ui-modal/farris-ui-modal.ngfactory', '@farris/ui-messager/farris-ui-messager.ngfactory', '@farris/ui-notify/farris-ui-notify.ngfactory', '@farris/ui-popover/farris-ui-popover.ngfactory', '@farris/ui-context-menu/farris-ui-context-menu.ngfactory', '@farris/ui-datatable/farris-ui-datatable.ngfactory', '@farris/ui-treetable/farris-ui-treetable.ngfactory', '@farris/ui-lookup/farris-ui-lookup.ngfactory', '@farris/ui-time-picker/farris-ui-time-picker.ngfactory', '@farris/ui-datepicker/farris-ui-datepicker.ngfactory', '@farris/ui-filter-panel/farris-ui-filter-panel.ngfactory', '@farris/ui-tooltip/farris-ui-tooltip.ngfactory', '@progress/kendo-angular-popup.ngfactory', '@gsp-svc/file-viewer/gsp-svc-file-viewer.ngfactory', '@gsp-wf/wf-approval-logs/gsp-wf-wf-approval-logs.ngfactory', '@gsp-wf/ui-flowchart/gsp-wf-ui-flowchart.ngfactory', '@farris/ui-language-textbox/farris-ui-language-textbox.ngfactory', '@farris/ui-modal', 'lodash-es', '@farris/ui-locale', '@farris/ui-perfect-scrollbar', '@farris/ui-popover/farris-ui-popover.ngfactory', '@farris/ui-modal/farris-ui-modal.ngfactory', '@farris/ui-messager/farris-ui-messager.ngfactory', '@farris/ui-notify/farris-ui-notify.ngfactory', '@farris/ui-loading/farris-ui-loading.ngfactory', '@farris/ui-context-menu/farris-ui-context-menu.ngfactory', '@farris/ui-datatable/farris-ui-datatable.ngfactory', '@farris/ui-treetable/farris-ui-treetable.ngfactory', '@farris/ui-lookup/farris-ui-lookup.ngfactory', '@farris/ui-popover', '@farris/ui-modal/positioning', '@farris/ui-modal/component-loader', '@farris/ui-pagination', '@farris/ui-common/date', '@farris/ui-common/number', '@farris/ui-common/column', '@farris/ui-context-menu', '@farris/ui-common/events', '@farris/ui-dialog', '@farris/ui-area-response', '@farris/ui-layout', '@farris/ui-datatable', '@farris/ui-perfect-scrollbar/farris-ui-perfect-scrollbar.ngfactory', '@farris/ui-input-group/farris-ui-input-group.ngfactory', '@farris/ui-filter-editor/farris-ui-filter-editor.ngfactory', '@farris/ui-sort-editor/farris-ui-sort-editor.ngfactory', '@farris/ui-datagrid-editors/farris-ui-datagrid-editors.ngfactory', '@gsp-wf/wf-task-handler/gsp-wf-wf-task-handler.ngfactory', '@farris/ui-verify-detail/farris-ui-verify-detail.ngfactory', '@progress/kendo-angular-grid.ngfactory', '@farris/ui-tabs/farris-ui-tabs.ngfactory', '@gsp-svc/formdoc-upload/gsp-svc-formdoc-upload.ngfactory', '@farris/component-querycondition/farris-component-querycondition.ngfactory', '@gsp-cmp/querysolution/gsp-cmp-querysolution.ngfactory', '@gsp-wf/rtdevkit/gsp-wf-rtdevkit.ngfactory', '@progress/kendo-angular-dialog.ngfactory', '@gsp-svc/cloudprint/gsp-svc-cloudprint.ngfactory', '@farris/dynamic-control-group/farris-dynamic-control-group.ngfactory', '@farris/ui-batch-edit-dialog/farris-ui-batch-edit-dialog.ngfactory', '@farris/extend-file-upload/farris-extend-file-upload.ngfactory', '@farris/discussion-group/farris-discussion-group.ngfactory', '@farris/ui-datagrid-filter/farris-ui-datagrid-filter.ngfactory', '@farris/ui-datagrid-settings/farris-ui-datagrid-settings.ngfactory', '@farris/extend-page-modal/farris-extend-page-modal.ngfactory', '@farris/ui-feature-editor/farris-ui-feature-editor.ngfactory', '@farris/ui-response-toolbar/farris-ui-response-toolbar.ngfactory', '@farris/ui-splitter/farris-ui-splitter.ngfactory', '@farris/ui-datagrid/farris-ui-datagrid.ngfactory', '@farris/ui-section/farris-ui-section.ngfactory', '@gsp-wf/wf-task-handler', '@farris/ui-text/farris-ui-text.ngfactory', '@farris/ui-forms/validation-message/farris-ui-forms-validation-message.ngfactory', '@progress/kendo-angular-l10n', '@farris/ui-number-spinner/farris-ui-number-spinner.ngfactory', '@progress/kendo-angular-dialog', '@gsp-dip/data-imp-exp/gsp-dip-data-imp-exp.ngfactory', '@farris/ui-filter-condition', '@gsp-sys/sysmgr-common', '@gsp-sys/sysmgr-ui', '@progress/kendo-angular-popup', '@gsp-wf/wf-approval-logs', '@progress/kendo-angular-resize-sensor', '@farris/component-querycondition', '@gsp-wf/ui-comment', '@farris/extend-file-upload', '@farris/ui-datalist', '@farris/ui-filter-panel', '@farris/ui-dropdown', '@gsp-wf/task-impl-api', '@gsp-wf/wf-sign', '@farris/ui-filter-editor', '@farris/ui-sort-editor', '@farris/ui-progress', '@farris/ui-progress-step', '@farris/ui-tree', '@progress/kendo-angular-excel-export', '@progress/kendo-angular-treeview'], function (exports, module) {
    'use strict';
    var Pipe, Injectable, Injector, HostBinding, Component, ElementRef, NgModule, ViewChild, LOCALE_ID, ??cmf, ??mod, ??mpd, ComponentFactoryResolver, ??CodegenComponentFactoryResolver, NgModuleRef, ??crt, ??ccf, ??vid, ??eld, ??did, ViewContainerRef, ChangeDetectorRef, Renderer2, Input, Output, defineInjectable, inject, INJECTOR, forwardRef, EventEmitter, RendererFactory2, PLATFORM_ID, NgZone, ApplicationRef, ??nov, ??prd, ??pid, ??qud, ??ted, ??ppd, ??and, TemplateRef, IterableDiffers, ??unv, ??EMPTY_MAP, KeyValueDiffers, ??pod, ??inlineInterpolate, Inject, InjectionToken, ErrorHandler, __decorate, __metadata, __extends, __spread, CommonModule, NgLocalization, NgLocaleLocalization, ??angular_packages_common_common_a, NgForOf, NgIf, NgClass, DOCUMENT, isPlatformBrowser, FormControl, FormsModule, ReactiveFormsModule, NG_VALUE_ACCESSOR, ??angular_packages_forms_forms_j, ??angular_packages_forms_forms_bc, DefaultValueAccessor, COMPOSITION_BUFFER_MODE, NgModel, NgControl, NgControlStatus, FormGroupDirective, ControlContainer, NgControlStatusGroup, MaxLengthValidator, NG_VALIDATORS, FormControlName, ??angular_packages_forms_forms_k, FormBuilder, KendoBindingModule, FarrisDatagridUseBindingDataDirective, EditableDirective, FarrisDataGridEndEditDirective, FarrisDataGridRemoteSummaryDirective, InputEndEditDirective, FarrisKendoGridFormatService, FarrisTreetableFormatService, LayoutModule, PanelBarModule, SplitterModule$1, TabStripModule, FlexLayoutModule, FarrisFormsModule, TextareaAutoSizeDirective, TextareaWordcountDirective, TextareaZoomDirective, FormMessageModule, ValidationMessageComponent, LoadingModule, LoadingService, LOADING_DEFAULT_CONFIG, loaddingDefaultConfig, MessagerModule, MessagerService, MESSAGER_DEFAULT_CONFIG, MessagerDefaultConfig, NotifyModule, NotifyService, FResponseToolbarModule, ResponseToolbarComponent, UriService, BefProxy, BefRepository, BefLookupRestService, DefaultComboHttpService, FrameworkSessionService, BE_SESSION_HANDLING_STRATEGY_TOKEN, BE_SERVER_URI_TOKEN, TranslateService, TranslateModule, TranslateLoader, MissingTranslationHandler, TranslateStore, TranslateCompiler, TranslateFakeCompiler, TranslateParser, TranslateDefaultParser, USE_DEFAULT_LANG, USE_STORE, TranslateHttpLoader, of, Observable, BehaviorSubject, Subject, switchMap, catchError, HttpClient, HttpXsrfTokenExtractor, ??angular_packages_common_http_http_g, ??angular_packages_common_http_http_e, ??angular_packages_common_http_http_h, ??angular_packages_common_http_http_f, HTTP_INTERCEPTORS, HttpClientXsrfModule, HttpClientModule, ??angular_packages_common_http_http_d, XhrFactory, HttpXhrBackend, HttpBackend, HttpHandler, ??HttpInterceptingHandler, DomSanitizer, EventManager, Declaration, NgCommand, ViewModel, NgField, NgEntity, Entity, NgRepository, NgValidateForm, Form, NgState, State, NgRenderState, NgAction, StateMachine, UIState, NgCommandHandler, CommandHandler, FARRIS_DEVKIT_FRAME_PROVIDERS, FRAME_ID, BindingData, Repository, NAMESPACE, TranslateToken, FARRIS_DEVKIT_EXPRESSION_LISTENER_PROVIDERS, FARRIS_DEVKIT_EXPRESSION_EFFECTOR_PROVIDERS, FARRIS_DEVKIT_EXPRESSION_ROOT_FRAME_PROVIDERS, AppContext, PARAM_TYPE_TRANSFORM_TOKEN, FORM_ID, EXCEPTION_HANDLER, BACK_END_MESSAGE_HANDLER_TOKEN, COMMAND_HANDLERS_TOKEN, FrameComponent, NgFormControl, FARRIS_DEVKIT_APP_PROVIDERS, FORM_PATH_TOKEN, FrameContext, CommandHandlerRegistry, CommandHandlerExtenderRegistry, COMMAND_HANDLER_EXTENDERS_TOKEN, CommandHandlerFactory, VariableParseService, CommandBus, RouterParamService, ResolveService, ExpressionExecutor, FORM_MANIFEST_SERVICE_TOKEN, FORM_EXPRESSION_MANIFEST_SERVICE_TOKEN, MESSAGE_SERVICE_TOKEN, NOTIFY_SERVICE_TOKEN, FRAME_COMPONENT_INIT_HANDLER_TOKEN, UserSettingsToken, AppContextManager, RESOLVER_TOKEN, EntityDependencyResolver, StateDependencyResolver, CommentDependencyResolver, ResolverRegistry, LISTENER_TOKEN, UIStateChangeListener, RepositoryChangeListener, BindingDataChangeListener, EFFECTOR_TOKEN, RepositoryEffector, UIStateEffector, ReadonlyEffector, DependencyEffector, RelativeEffector, ValidateEffector, RequiredEffector, VisibleEffector, ListenerRegistry, Listeners, EffectorRegistry, EffectorFactory, ExpressionRegistry, ExpressionEventEmitter, ExpressionResult, ExpressionManager, ExpressionResultFactory, EVENT_HANDLER_TOKEN, RepositoryAddEntityEventHandler, RepositoryRemoveEntityEventHandler, EntityValueChangedEventHandler, StateValueChangedEventHandler, RepositoryLoadEventHandler, EntityUpdateEventHandler, BindingDataAppendObjectEventHandler, BindingDataValueChangeEventHandler, BindingDataRemoveObjectEventHandler, BindingDataLoadEventHandler, BindingDataSelectionChangedEventHandler, EventHandlerRegistry, ExpressionEngineImpl, FrameEventBus, EventBus, Subscription, RestfulService, VARIABLE_PARSERS, FrameIdVariableParser, ??a$3, EventParamVariableParser, DataVariableParser, UIStateVariableParser, StateMachineVariableParser, CommandVariableParser, FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS, ComponentManagerService, ExceptionHandler, BackEndMessageHandler, KeybindingService, LocalizationService, ApplicationParamService, NavigationMiddlewareService, ListDataService, CardDataService, StateMachineService, CommandService, FocusInvalidService, EndEditService, ValidationService, CommandServicesModule, NavigationEventService, RuntimeFrameworkService, MenuStateService, QuerystringService, NavigationService, FormMessageService, FormLoadingService, FormNotifyService, LanguageService, FormErrorService, FilterConditionService, ChangeItemService, UIStateService, BindingDataService, EntityTraversingService, EntityManipulationService, EntityAggregationService, EntityListService, EntityService, TreeDataService, SubTreeDataService, SubListDataService, RemoveDataService, SaveDataService, EditDataService, FilterConditionDataService, RemoteSummaryService, BeActionService, ApproveService, PrintService, AttachmentDataService, AttachmentService, FileService, GridMiddlewareService, SidebarService, FarrisFormService, FARRIS_FORM_COMPONENTS, DialogService$1, RouterService, AuthorityService, ??b, ??c, BatchEditService, DiscussionGroupService, DataGridService, FormAttentionService, FeatureDataService, FeatureRepository, FeatureEditService, ExpressionService, PopUpService, DirtyCheckingService, FormService, ViewModelService, PaginationService$1, FormManifestService, FormExpressionManifestService, WorkFlowMessageHandler, WorkFlowMessageService, WorkFlowMessage, BindingPathService, FormControlService, FrameContextService, HideEventService, FormWizardService, CheckService, DataCheckService, EventService, FilterService$2, ParamService, UserSettingsService, VerifyDetailService, VerifyDetailModule, FrmCommonModule, SessionService, LanguageService$1, HttpService, CacheStorageAbstract, CacheMemoryStorage, CacheService, WindowVariableService, TabEntityService, FrmI18nSettingService, FrameworkService, FrameworkVariableService, AppService, FrmEventBus, FuncsService, LoadingService$1, CommonSharedModule, FarrisTooltipModule, AttentionService, FInputTipsDirective, GridModule, GridComponent, BrowserSupportService, SelectionService, GroupInfoService, GroupsService, ChangeNotificationService, DetailsService, EditService$1, FilterService, PDFService, ResponsiveService, ExcelService, ScrollSyncService, DomEventsService, ColumnResizingService, ColumnReorderService, ColumnInfoService, NavigationService$1, SortService, SharedModule, DragAndDropModule, GroupModule, BodyModule, SharedFilterModule, RowFilterModule, FilterMenuModule, ColumnMenuModule, HeaderModule, FooterModule, PagerModule, ExcelModule, PDFModule, DateInputsModule, DOMService, CenturyViewService, DecadeViewService, MonthViewService, YearViewService, WeekNamesService, NavigationService$2, BusViewService, DOMService$1, HoursService, MinutesService, SecondsService, DayPeriodService, EventsModule$1, DateInputModule, CalendarCommonModule, TemplatesModule, VirtualizationModule, CalendarModule$1, DatePickerModule, MultiViewCalendarModule, CalendarsModule, TimePickerModule$1, DateRangeModule, TOUCH_ENABLED, touchEnabled, DropDownsModule, SharedDirectivesModule, SharedModule$1, DropDownListModule, AutoCompleteModule, ComboBoxModule, MultiSelectModule$1, TOUCH_ENABLED$1, touchEnabled$1, ButtonsModule, ButtonModule, ButtonGroupModule, ListModule, SplitButtonModule, DropDownButtonModule, InputsModule, TextAreaDirective, EventsModule, NumericTextBoxModule, TextBoxModule, DraggableModule, SliderModule, SwitchModule$1, MaskedTextBoxModule, IntlModule, IntlService, CldrIntlService, ServerSideToken, LookupModule, LookupComponent, TreeTableModule, TreetableService, TTHotkeys, FieldGroupModule, ??a, FarrisTabsModule, NgbDropdownConfig, NgbTooltipConfig, TabService, TabConfig, NgbDropdownModule, NgbTooltipModule, FarrisTagModule, FarrisSidebarModule, FarrisSidebarService, UploadDialogMoudle, UploadDialogService, DownloadService, UploadService, UploadModule, FarrisSectionModule, FarrisSectionComponent, FarrisDatePickerModule, FarrisTimeSpinnerModule, DatagridComponent, GRID_SETTINGS_HTTP, DatagridModule, DatagridSmartFilterService, DatagridFacadeService, DatagridService, ??t, ValidatorMessagerService, GRID_SETTINGS_SERVICE, NgxPaginationModule, ScrollbarModule, DatagridSmartFilterModule, SCROLLBAR_CONFIG, GRID_EDITORS, GRID_FILTER_ROW, WizardService, WizardModule, QuerySolutionModule, QUERYSOLUTION_HANDLER_TOKEN, FarrisButtonModule, ListViewModule, TimePickerModule, AngularDraggableModule, AngularResizableDirective, SplitterModule, SplitterComponent, SplitterPaneComponent, ListNavModule, TextModule, TextComponent, WFSubmiteService, WFRuntimeModule, I18nService$1, TaskService$1, UserService, MultiSelectModule, InputGroupModule, InputGroupComponent, ComboServerSideToken, ComboListModule, ComboLocaleService, FarrisHtmlEditorModule, ??b$3, defaultModules, CloudprintService, CloudPrintModule, ??a$1, ??b$1, ??c$2, ??e, DatagridEditorsModule, EditorProviders, DatagridTextareaComponent, DatagridTextboxComponent, ??a$4, ??b$2, ??c$3, ??d$2, ??e$1, ??f$3, ??g$2, ??h$1, ??i, ??j$1, ??k, DatagridEnumEditorComponent, DatagridFilterEditorComponent, DatagridSortEditorComponent, ViewChangeModule, SwitchModule, SWITCH_OPTIONS, ListFilterModule, LISTFILTER_HANDLER_TOKEN, ConvertorService$2, SolutionService$2, QuerySolutionService$1, SimpleFilterModule, FilterService$1, ConvertorService, SolutionService, AvatarModule, CalendarModule, WFFlowchartService, UiFlowchartModule, UiFlowchartService, NumberSpinnerModule, NumberSpinnerComponent, ComboLookupModule, ScrollspyModule, FileListModule, FileViewerService, ??j, ??s, ??n, ??u, ??v, ??o, ??z, ??d, ??a$2, ??y, ??f$2, ??h, ??be, ??g$1, ??t$1, ??bg, ??bh, LanguageTextboxModule, DynamicControlGroupModule, BatchEditDialogModule, BatchEditDialogService, DatagridFilterRowModule, FilterRowComponent, DatagridSettingsModule, DatagridSettingsService, FarrisFooterModule, DiscussionGroupModule, DiscussionListService, NavModule, TagsModule, EditorModule, EditorService, TINYMCE_SCRIPT_SRC, FfileuploadAdaptUnifileModule, FFileUploadAdaptUnifileConfigService, FFileUploadAdaptUnifileConfigToken, FfileuploadAdaptUnifileService, FfilepreviewAdaptUnifileService, FEHeaderFooterModule, FEPageModalModule, FEPageModalService, FeatureEditorModule, FeatureEditorService, I18nService, FEScrollCollapsibleAreaModule, FEScrollCollapsibleAreaService, ActivatedRoute, Router, RouterModule, ??angular_packages_router_router_a, ??EmptyOutletComponent, RouterOutlet, ChildrenOutletContexts, ROUTES, DataImportExportService, DIP_DATAIE_SERVICE, DataImpExpModule, ??f, ??g, DataieHandcraftService, ??c$1, ??d$1, CommonUtils, FarrisCommonModule, RuntimeStateService, IdService, LoadingComponentNgFactory$1, ModalBackdropComponentNgFactory$1, ModalContainerComponentNgFactory$1, MessagerComponentNgFactory$1, NotifyContainerComponentNgFactory$1, PopoverContainerComponentNgFactory$1, FarrisContextMenuComponentNgFactory$1, DataTableComponentNgFactory$1, TreeTableComponentNgFactory$1, LookupLeftComponentNgFactory$1, LookupTabsComponentNgFactory$1, TimePickerPanelComponentNgFactory, CalendarComponentNgFactory, FilterPanelComponentNgFactory, TooltipComponentNgFactory, PopupComponentNgFactory, ??bNgFactory, ??iNgFactory, ??wNgFactory, ??bfNgFactory, ??cNgFactory, ??eNgFactory, ??bbNgFactory, ??bcNgFactory, FileListComponentNgFactory, WfApprovalLogsComponentNgFactory, UIFlowchartComponentNgFactory, LanguageTextPanelComponentNgFactory, BsModalService, ModalModule, cloneDeep, LocaleService, LocaleModule, FARRIS_LOCAL_CUSTOM_DATA, FarrisLocalePipe, PerfectScrollbarModule, PerfectScrollbarComponent, PopoverContainerComponentNgFactory, ModalBackdropComponentNgFactory, ModalContainerComponentNgFactory, MessagerComponentNgFactory, NotifyContainerComponentNgFactory, LoadingComponentNgFactory, FarrisContextMenuComponentNgFactory, DataTableComponentNgFactory, TreeTableComponentNgFactory, LookupLeftComponentNgFactory, LookupTabsComponentNgFactory, PopoverConfig, PopoverModule, PositioningService, ComponentLoaderFactory, PaginationService, PaginationModule, DateTimeHelperService, DateHelperModule, NumberHelperService, NumberHelperModule, ColumnFormatService, DataColumnModule, FarrisContextMenuService, FarrisContextMenuModule, ResizeService, DialogService, FarrisDialogModule, FAreaResponseModule, LayoutModule$1, DataTableModule, View_PerfectScrollbarComponent_0, RenderType_PerfectScrollbarComponent, View_InputGroupComponent_0, RenderType_InputGroupComponent, FilterEditorComponentNgFactory, SortEditorComponentNgFactory, ??lNgFactory, DatagridTextboxComponentNgFactory, DatagridTextareaComponentNgFactory, ??aNgFactory, ??bNgFactory$1, ??cNgFactory$1, ??dNgFactory, ??eNgFactory$1, ??fNgFactory, ??gNgFactory, ??hNgFactory, ??iNgFactory$1, ??jNgFactory, ??kNgFactory, DatagridEnumEditorComponentNgFactory, DatagridSortEditorComponentNgFactory, DatagridFilterEditorComponentNgFactory, TaskExecuteComponentNgFactory, TaskAssigninfoComponentNgFactory, ProcessSelectorComponentNgFactory, VerifyDetailComponentNgFactory, StringFilterCellComponentNgFactory, NumericFilterCellComponentNgFactory, BooleanFilterCellComponentNgFactory, DateFilterCellComponentNgFactory, StringFilterMenuComponentNgFactory, NumericFilterMenuComponentNgFactory, DateFilterMenuComponentNgFactory, BooleanFilterMenuComponentNgFactory, NgbTooltipWindowNgFactory, FileUploadComponentNgFactory, UploadDialogComponentNgFactory, ??bNgFactory$2, QueryConditionComponentNgFactory, ??cNgFactory$2, ??eNgFactory$2, ProcessSelectorComponentNgFactory$1, WfWorkitemHandleComponentNgFactory, UserHelperComponentNgFactory, TaskAssignComponentNgFactory, TaskSignaddComponentNgFactory, TaskTransferComponentNgFactory, ??aNgFactory$1, WindowComponentNgFactory, WindowTitleBarComponentNgFactory, DialogComponentNgFactory, DialogTitleBarComponentNgFactory, ??dNgFactory$1, ??fNgFactory$1, ??gNgFactory$1, ??hNgFactory$1, ??bNgFactory$3, ??cNgFactory$3, ??dNgFactory$2, ??eNgFactory$3, ??fNgFactory$2, ??gNgFactory$2, ??hNgFactory$2, BatchEditDialogComponentNgFactory, ResultConfirmComponentNgFactory, MultiDownloadInfoComponentNgFactory, DiscussionPersonnelComponentNgFactory, FilterRowComponentNgFactory, FilterTextboxComponentNgFactory, FilterCheckboxComponentNgFactory, ConditionEditorComponentNgFactory, FilterDatalistComponentNgFactory, FilterRowPanelComponentNgFactory, FilterRowEditorComponentNgFactory, FilterSelectComponentNgFactory, DatagridSettingsComponentNgFactory, SimpleColumnsComponentNgFactory, FEPageModalComponentNgFactory, FEModalBackdropComponentNgFactory, ??aNgFactory$2, FeatureEditorComponentNgFactory, View_ResponseToolbarComponent_0, RenderType_ResponseToolbarComponent, View_SplitterComponent_0, RenderType_SplitterComponent, View_SplitterPaneComponent_0, RenderType_SplitterPaneComponent, View_DatagridComponent_0, RenderType_DatagridComponent, View_FarrisSectionComponent_0, RenderType_FarrisSectionComponent, WfTaskHandlerService, TaskService, I18nService$2, WfTaskHandlerModule, View_TextComponent_0, RenderType_TextComponent, View_ValidationMessageComponent_0, RenderType_ValidationMessageComponent, RTL, LocalizationService$1, View_NumberSpinnerComponent_0, RenderType_NumberSpinnerComponent, WindowService, WindowContainerService, DialogContainerService, DialogService$2, SharedModule$2, WindowModule, DialogModule, ??bNgFactory$4, ??nNgFactory, ??eNgFactory$4, ??hNgFactory$3, ??mNgFactory, ??kNgFactory$1, ??lNgFactory$1, RuleIdHelpComponentNgFactory, DataieRuleHelpComponentNgFactory, ??oNgFactory, ??pNgFactory, ??qNgFactory, ??rNgFactory, ??sNgFactory, ??tNgFactory, ??uNgFactory, ??vNgFactory, ??wNgFactory$1, ??xNgFactory, ??yNgFactory, ??zNgFactory, QuerySolutionService, FilterConditionModule, SysCommonUtilService, SysSecurityConfigService, SysCommonModule, HelpFilterMap, SysHelpService, SysExceptionService, ??f$1, SysLocaleService, SysManagerUIModule, PopupService, POPUP_CONTAINER, PopupModule, WfApprovalLogsService, WfApprovalLogsModule, ResizeBatchService, ResizeSensorModule, SolutionService$1, ConvertorService$1, QueryConditionModule, TaskCommentService, TaskCommentUIState, TaskCommentViewModel, I18nService$3, TaskCommentRepository, WFCommentModule, UploadServerService, FFileUploaderService, FFileUploadModule, FFileUploadAPIServiceToken, DatalistModule, FilterPanelModule, FDropdownDirectiveTypeModule, TaskImplApiModule, WfSignModule, FilterModule, SorterModule, ProgressModule, ProgressStepModule, TreeModule, ExcelExportModule, CheckBoxModule, SharedModule$3, TreeViewModule;
    return {
        setters: [function (module) {
            Pipe = module.Pipe;
            Injectable = module.Injectable;
            Injector = module.Injector;
            HostBinding = module.HostBinding;
            Component = module.Component;
            ElementRef = module.ElementRef;
            NgModule = module.NgModule;
            ViewChild = module.ViewChild;
            LOCALE_ID = module.LOCALE_ID;
            ??cmf = module.??cmf;
            ??mod = module.??mod;
            ??mpd = module.??mpd;
            ComponentFactoryResolver = module.ComponentFactoryResolver;
            ??CodegenComponentFactoryResolver = module.??CodegenComponentFactoryResolver;
            NgModuleRef = module.NgModuleRef;
            ??crt = module.??crt;
            ??ccf = module.??ccf;
            ??vid = module.??vid;
            ??eld = module.??eld;
            ??did = module.??did;
            ViewContainerRef = module.ViewContainerRef;
            ChangeDetectorRef = module.ChangeDetectorRef;
            Renderer2 = module.Renderer2;
            Input = module.Input;
            Output = module.Output;
            defineInjectable = module.defineInjectable;
            inject = module.inject;
            INJECTOR = module.INJECTOR;
            forwardRef = module.forwardRef;
            EventEmitter = module.EventEmitter;
            RendererFactory2 = module.RendererFactory2;
            PLATFORM_ID = module.PLATFORM_ID;
            NgZone = module.NgZone;
            ApplicationRef = module.ApplicationRef;
            ??nov = module.??nov;
            ??prd = module.??prd;
            ??pid = module.??pid;
            ??qud = module.??qud;
            ??ted = module.??ted;
            ??ppd = module.??ppd;
            ??and = module.??and;
            TemplateRef = module.TemplateRef;
            IterableDiffers = module.IterableDiffers;
            ??unv = module.??unv;
            ??EMPTY_MAP = module.??EMPTY_MAP;
            KeyValueDiffers = module.KeyValueDiffers;
            ??pod = module.??pod;
            ??inlineInterpolate = module.??inlineInterpolate;
            Inject = module.Inject;
            InjectionToken = module.InjectionToken;
            ErrorHandler = module.ErrorHandler;
        }, function (module) {
            __decorate = module.__decorate;
            __metadata = module.__metadata;
            __extends = module.__extends;
            __spread = module.__spread;
        }, function (module) {
            CommonModule = module.CommonModule;
            NgLocalization = module.NgLocalization;
            NgLocaleLocalization = module.NgLocaleLocalization;
            ??angular_packages_common_common_a = module.??angular_packages_common_common_a;
            NgForOf = module.NgForOf;
            NgIf = module.NgIf;
            NgClass = module.NgClass;
            DOCUMENT = module.DOCUMENT;
            isPlatformBrowser = module.isPlatformBrowser;
        }, function (module) {
            FormControl = module.FormControl;
            FormsModule = module.FormsModule;
            ReactiveFormsModule = module.ReactiveFormsModule;
            NG_VALUE_ACCESSOR = module.NG_VALUE_ACCESSOR;
            ??angular_packages_forms_forms_j = module.??angular_packages_forms_forms_j;
            ??angular_packages_forms_forms_bc = module.??angular_packages_forms_forms_bc;
            DefaultValueAccessor = module.DefaultValueAccessor;
            COMPOSITION_BUFFER_MODE = module.COMPOSITION_BUFFER_MODE;
            NgModel = module.NgModel;
            NgControl = module.NgControl;
            NgControlStatus = module.NgControlStatus;
            FormGroupDirective = module.FormGroupDirective;
            ControlContainer = module.ControlContainer;
            NgControlStatusGroup = module.NgControlStatusGroup;
            MaxLengthValidator = module.MaxLengthValidator;
            NG_VALIDATORS = module.NG_VALIDATORS;
            FormControlName = module.FormControlName;
            ??angular_packages_forms_forms_k = module.??angular_packages_forms_forms_k;
            FormBuilder = module.FormBuilder;
        }, function (module) {
            KendoBindingModule = module.KendoBindingModule;
            FarrisDatagridUseBindingDataDirective = module.FarrisDatagridUseBindingDataDirective;
            EditableDirective = module.EditableDirective;
            FarrisDataGridEndEditDirective = module.FarrisDataGridEndEditDirective;
            FarrisDataGridRemoteSummaryDirective = module.FarrisDataGridRemoteSummaryDirective;
            InputEndEditDirective = module.InputEndEditDirective;
            FarrisKendoGridFormatService = module.FarrisKendoGridFormatService;
            FarrisTreetableFormatService = module.FarrisTreetableFormatService;
        }, function (module) {
            LayoutModule = module.LayoutModule;
            PanelBarModule = module.PanelBarModule;
            SplitterModule$1 = module.SplitterModule;
            TabStripModule = module.TabStripModule;
        }, function (module) {
            FlexLayoutModule = module.FlexLayoutModule;
        }, function (module) {
            FarrisFormsModule = module.FarrisFormsModule;
            TextareaAutoSizeDirective = module.TextareaAutoSizeDirective;
            TextareaWordcountDirective = module.TextareaWordcountDirective;
            TextareaZoomDirective = module.TextareaZoomDirective;
        }, function (module) {
            FormMessageModule = module.FormMessageModule;
            ValidationMessageComponent = module.ValidationMessageComponent;
        }, function (module) {
            LoadingModule = module.LoadingModule;
            LoadingService = module.LoadingService;
            LOADING_DEFAULT_CONFIG = module.LOADING_DEFAULT_CONFIG;
            loaddingDefaultConfig = module.loaddingDefaultConfig;
        }, function (module) {
            MessagerModule = module.MessagerModule;
            MessagerService = module.MessagerService;
            MESSAGER_DEFAULT_CONFIG = module.MESSAGER_DEFAULT_CONFIG;
            MessagerDefaultConfig = module.MessagerDefaultConfig;
        }, function (module) {
            NotifyModule = module.NotifyModule;
            NotifyService = module.NotifyService;
        }, function (module) {
            FResponseToolbarModule = module.FResponseToolbarModule;
            ResponseToolbarComponent = module.ResponseToolbarComponent;
        }, function (module) {
            UriService = module.UriService;
            BefProxy = module.BefProxy;
            BefRepository = module.BefRepository;
            BefLookupRestService = module.BefLookupRestService;
            DefaultComboHttpService = module.DefaultComboHttpService;
            FrameworkSessionService = module.FrameworkSessionService;
            BE_SESSION_HANDLING_STRATEGY_TOKEN = module.BE_SESSION_HANDLING_STRATEGY_TOKEN;
            BE_SERVER_URI_TOKEN = module.BE_SERVER_URI_TOKEN;
        }, function (module) {
            TranslateService = module.TranslateService;
            TranslateModule = module.TranslateModule;
            TranslateLoader = module.TranslateLoader;
            MissingTranslationHandler = module.MissingTranslationHandler;
            TranslateStore = module.TranslateStore;
            TranslateCompiler = module.TranslateCompiler;
            TranslateFakeCompiler = module.TranslateFakeCompiler;
            TranslateParser = module.TranslateParser;
            TranslateDefaultParser = module.TranslateDefaultParser;
            USE_DEFAULT_LANG = module.USE_DEFAULT_LANG;
            USE_STORE = module.USE_STORE;
        }, function (module) {
            TranslateHttpLoader = module.TranslateHttpLoader;
        }, function (module) {
            of = module.of;
            Observable = module.Observable;
            BehaviorSubject = module.BehaviorSubject;
            Subject = module.Subject;
        }, function (module) {
            switchMap = module.switchMap;
            catchError = module.catchError;
        }, function (module) {
            HttpClient = module.HttpClient;
            HttpXsrfTokenExtractor = module.HttpXsrfTokenExtractor;
            ??angular_packages_common_http_http_g = module.??angular_packages_common_http_http_g;
            ??angular_packages_common_http_http_e = module.??angular_packages_common_http_http_e;
            ??angular_packages_common_http_http_h = module.??angular_packages_common_http_http_h;
            ??angular_packages_common_http_http_f = module.??angular_packages_common_http_http_f;
            HTTP_INTERCEPTORS = module.HTTP_INTERCEPTORS;
            HttpClientXsrfModule = module.HttpClientXsrfModule;
            HttpClientModule = module.HttpClientModule;
            ??angular_packages_common_http_http_d = module.??angular_packages_common_http_http_d;
            XhrFactory = module.XhrFactory;
            HttpXhrBackend = module.HttpXhrBackend;
            HttpBackend = module.HttpBackend;
            HttpHandler = module.HttpHandler;
            ??HttpInterceptingHandler = module.??HttpInterceptingHandler;
        }, function (module) {
            DomSanitizer = module.DomSanitizer;
            EventManager = module.EventManager;
        }, function (module) {
            Declaration = module.Declaration;
            NgCommand = module.NgCommand;
            ViewModel = module.ViewModel;
            NgField = module.NgField;
            NgEntity = module.NgEntity;
            Entity = module.Entity;
            NgRepository = module.NgRepository;
            NgValidateForm = module.NgValidateForm;
            Form = module.Form;
            NgState = module.NgState;
            State = module.State;
            NgRenderState = module.NgRenderState;
            NgAction = module.NgAction;
            StateMachine = module.StateMachine;
            UIState = module.UIState;
            NgCommandHandler = module.NgCommandHandler;
            CommandHandler = module.CommandHandler;
            FARRIS_DEVKIT_FRAME_PROVIDERS = module.FARRIS_DEVKIT_FRAME_PROVIDERS;
            FRAME_ID = module.FRAME_ID;
            BindingData = module.BindingData;
            Repository = module.Repository;
            NAMESPACE = module.NAMESPACE;
            TranslateToken = module.TranslateToken;
            FARRIS_DEVKIT_EXPRESSION_LISTENER_PROVIDERS = module.FARRIS_DEVKIT_EXPRESSION_LISTENER_PROVIDERS;
            FARRIS_DEVKIT_EXPRESSION_EFFECTOR_PROVIDERS = module.FARRIS_DEVKIT_EXPRESSION_EFFECTOR_PROVIDERS;
            FARRIS_DEVKIT_EXPRESSION_ROOT_FRAME_PROVIDERS = module.FARRIS_DEVKIT_EXPRESSION_ROOT_FRAME_PROVIDERS;
            AppContext = module.AppContext;
            PARAM_TYPE_TRANSFORM_TOKEN = module.PARAM_TYPE_TRANSFORM_TOKEN;
            FORM_ID = module.FORM_ID;
            EXCEPTION_HANDLER = module.EXCEPTION_HANDLER;
            BACK_END_MESSAGE_HANDLER_TOKEN = module.BACK_END_MESSAGE_HANDLER_TOKEN;
            COMMAND_HANDLERS_TOKEN = module.COMMAND_HANDLERS_TOKEN;
            FrameComponent = module.FrameComponent;
            NgFormControl = module.NgFormControl;
            FARRIS_DEVKIT_APP_PROVIDERS = module.FARRIS_DEVKIT_APP_PROVIDERS;
            FORM_PATH_TOKEN = module.FORM_PATH_TOKEN;
            FrameContext = module.FrameContext;
            CommandHandlerRegistry = module.CommandHandlerRegistry;
            CommandHandlerExtenderRegistry = module.CommandHandlerExtenderRegistry;
            COMMAND_HANDLER_EXTENDERS_TOKEN = module.COMMAND_HANDLER_EXTENDERS_TOKEN;
            CommandHandlerFactory = module.CommandHandlerFactory;
            VariableParseService = module.VariableParseService;
            CommandBus = module.CommandBus;
            RouterParamService = module.RouterParamService;
            ResolveService = module.ResolveService;
            ExpressionExecutor = module.ExpressionExecutor;
            FORM_MANIFEST_SERVICE_TOKEN = module.FORM_MANIFEST_SERVICE_TOKEN;
            FORM_EXPRESSION_MANIFEST_SERVICE_TOKEN = module.FORM_EXPRESSION_MANIFEST_SERVICE_TOKEN;
            MESSAGE_SERVICE_TOKEN = module.MESSAGE_SERVICE_TOKEN;
            NOTIFY_SERVICE_TOKEN = module.NOTIFY_SERVICE_TOKEN;
            FRAME_COMPONENT_INIT_HANDLER_TOKEN = module.FRAME_COMPONENT_INIT_HANDLER_TOKEN;
            UserSettingsToken = module.UserSettingsToken;
            AppContextManager = module.AppContextManager;
            RESOLVER_TOKEN = module.RESOLVER_TOKEN;
            EntityDependencyResolver = module.EntityDependencyResolver;
            StateDependencyResolver = module.StateDependencyResolver;
            CommentDependencyResolver = module.CommentDependencyResolver;
            ResolverRegistry = module.ResolverRegistry;
            LISTENER_TOKEN = module.LISTENER_TOKEN;
            UIStateChangeListener = module.UIStateChangeListener;
            RepositoryChangeListener = module.RepositoryChangeListener;
            BindingDataChangeListener = module.BindingDataChangeListener;
            EFFECTOR_TOKEN = module.EFFECTOR_TOKEN;
            RepositoryEffector = module.RepositoryEffector;
            UIStateEffector = module.UIStateEffector;
            ReadonlyEffector = module.ReadonlyEffector;
            DependencyEffector = module.DependencyEffector;
            RelativeEffector = module.RelativeEffector;
            ValidateEffector = module.ValidateEffector;
            RequiredEffector = module.RequiredEffector;
            VisibleEffector = module.VisibleEffector;
            ListenerRegistry = module.ListenerRegistry;
            Listeners = module.Listeners;
            EffectorRegistry = module.EffectorRegistry;
            EffectorFactory = module.EffectorFactory;
            ExpressionRegistry = module.ExpressionRegistry;
            ExpressionEventEmitter = module.ExpressionEventEmitter;
            ExpressionResult = module.ExpressionResult;
            ExpressionManager = module.ExpressionManager;
            ExpressionResultFactory = module.ExpressionResultFactory;
            EVENT_HANDLER_TOKEN = module.EVENT_HANDLER_TOKEN;
            RepositoryAddEntityEventHandler = module.RepositoryAddEntityEventHandler;
            RepositoryRemoveEntityEventHandler = module.RepositoryRemoveEntityEventHandler;
            EntityValueChangedEventHandler = module.EntityValueChangedEventHandler;
            StateValueChangedEventHandler = module.StateValueChangedEventHandler;
            RepositoryLoadEventHandler = module.RepositoryLoadEventHandler;
            EntityUpdateEventHandler = module.EntityUpdateEventHandler;
            BindingDataAppendObjectEventHandler = module.BindingDataAppendObjectEventHandler;
            BindingDataValueChangeEventHandler = module.BindingDataValueChangeEventHandler;
            BindingDataRemoveObjectEventHandler = module.BindingDataRemoveObjectEventHandler;
            BindingDataLoadEventHandler = module.BindingDataLoadEventHandler;
            BindingDataSelectionChangedEventHandler = module.BindingDataSelectionChangedEventHandler;
            EventHandlerRegistry = module.EventHandlerRegistry;
            ExpressionEngineImpl = module.ExpressionEngineImpl;
            FrameEventBus = module.FrameEventBus;
            EventBus = module.EventBus;
            Subscription = module.Subscription;
            RestfulService = module.RestfulService;
            VARIABLE_PARSERS = module.VARIABLE_PARSERS;
            FrameIdVariableParser = module.FrameIdVariableParser;
            ??a$3 = module.??a;
            EventParamVariableParser = module.EventParamVariableParser;
            DataVariableParser = module.DataVariableParser;
            UIStateVariableParser = module.UIStateVariableParser;
            StateMachineVariableParser = module.StateMachineVariableParser;
            CommandVariableParser = module.CommandVariableParser;
        }, function (module) {
            FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS = module.FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS;
            ComponentManagerService = module.ComponentManagerService;
            ExceptionHandler = module.ExceptionHandler;
            BackEndMessageHandler = module.BackEndMessageHandler;
            KeybindingService = module.KeybindingService;
            LocalizationService = module.LocalizationService;
            ApplicationParamService = module.ApplicationParamService;
            NavigationMiddlewareService = module.NavigationMiddlewareService;
            ListDataService = module.ListDataService;
            CardDataService = module.CardDataService;
            StateMachineService = module.StateMachineService;
            CommandService = module.CommandService;
            FocusInvalidService = module.FocusInvalidService;
            EndEditService = module.EndEditService;
            ValidationService = module.ValidationService;
            CommandServicesModule = module.CommandServicesModule;
            NavigationEventService = module.NavigationEventService;
            RuntimeFrameworkService = module.RuntimeFrameworkService;
            MenuStateService = module.MenuStateService;
            QuerystringService = module.QuerystringService;
            NavigationService = module.NavigationService;
            FormMessageService = module.FormMessageService;
            FormLoadingService = module.FormLoadingService;
            FormNotifyService = module.FormNotifyService;
            LanguageService = module.LanguageService;
            FormErrorService = module.FormErrorService;
            FilterConditionService = module.FilterConditionService;
            ChangeItemService = module.ChangeItemService;
            UIStateService = module.UIStateService;
            BindingDataService = module.BindingDataService;
            EntityTraversingService = module.EntityTraversingService;
            EntityManipulationService = module.EntityManipulationService;
            EntityAggregationService = module.EntityAggregationService;
            EntityListService = module.EntityListService;
            EntityService = module.EntityService;
            TreeDataService = module.TreeDataService;
            SubTreeDataService = module.SubTreeDataService;
            SubListDataService = module.SubListDataService;
            RemoveDataService = module.RemoveDataService;
            SaveDataService = module.SaveDataService;
            EditDataService = module.EditDataService;
            FilterConditionDataService = module.FilterConditionDataService;
            RemoteSummaryService = module.RemoteSummaryService;
            BeActionService = module.BeActionService;
            ApproveService = module.ApproveService;
            PrintService = module.PrintService;
            AttachmentDataService = module.AttachmentDataService;
            AttachmentService = module.AttachmentService;
            FileService = module.FileService;
            GridMiddlewareService = module.GridMiddlewareService;
            SidebarService = module.SidebarService;
            FarrisFormService = module.FarrisFormService;
            FARRIS_FORM_COMPONENTS = module.FARRIS_FORM_COMPONENTS;
            DialogService$1 = module.DialogService;
            RouterService = module.RouterService;
            AuthorityService = module.AuthorityService;
            ??b = module.??b;
            ??c = module.??c;
            BatchEditService = module.BatchEditService;
            DiscussionGroupService = module.DiscussionGroupService;
            DataGridService = module.DataGridService;
            FormAttentionService = module.FormAttentionService;
            FeatureDataService = module.FeatureDataService;
            FeatureRepository = module.FeatureRepository;
            FeatureEditService = module.FeatureEditService;
            ExpressionService = module.ExpressionService;
            PopUpService = module.PopUpService;
            DirtyCheckingService = module.DirtyCheckingService;
            FormService = module.FormService;
            ViewModelService = module.ViewModelService;
            PaginationService$1 = module.PaginationService;
            FormManifestService = module.FormManifestService;
            FormExpressionManifestService = module.FormExpressionManifestService;
            WorkFlowMessageHandler = module.WorkFlowMessageHandler;
            WorkFlowMessageService = module.WorkFlowMessageService;
            WorkFlowMessage = module.WorkFlowMessage;
            BindingPathService = module.BindingPathService;
            FormControlService = module.FormControlService;
            FrameContextService = module.FrameContextService;
            HideEventService = module.HideEventService;
            FormWizardService = module.FormWizardService;
            CheckService = module.CheckService;
            DataCheckService = module.DataCheckService;
            EventService = module.EventService;
            FilterService$2 = module.FilterService;
            ParamService = module.ParamService;
            UserSettingsService = module.UserSettingsService;
        }, function (module) {
            VerifyDetailService = module.VerifyDetailService;
            VerifyDetailModule = module.VerifyDetailModule;
        }, function (module) {
            FrmCommonModule = module.FrmCommonModule;
            SessionService = module.SessionService;
            LanguageService$1 = module.LanguageService;
            HttpService = module.HttpService;
            CacheStorageAbstract = module.CacheStorageAbstract;
            CacheMemoryStorage = module.CacheMemoryStorage;
            CacheService = module.CacheService;
            WindowVariableService = module.WindowVariableService;
            TabEntityService = module.TabEntityService;
        }, function (module) {
            FrmI18nSettingService = module.FrmI18nSettingService;
            FrameworkService = module.FrameworkService;
            FrameworkVariableService = module.FrameworkVariableService;
            AppService = module.AppService;
            FrmEventBus = module.FrmEventBus;
            FuncsService = module.FuncsService;
            LoadingService$1 = module.LoadingService;
            CommonSharedModule = module.CommonSharedModule;
        }, function (module) {
            FarrisTooltipModule = module.FarrisTooltipModule;
            AttentionService = module.AttentionService;
            FInputTipsDirective = module.FInputTipsDirective;
        }, function (module) {
            GridModule = module.GridModule;
            GridComponent = module.GridComponent;
            BrowserSupportService = module.BrowserSupportService;
            SelectionService = module.SelectionService;
            GroupInfoService = module.GroupInfoService;
            GroupsService = module.GroupsService;
            ChangeNotificationService = module.ChangeNotificationService;
            DetailsService = module.DetailsService;
            EditService$1 = module.EditService$1;
            FilterService = module.FilterService;
            PDFService = module.PDFService;
            ResponsiveService = module.ResponsiveService;
            ExcelService = module.ExcelService;
            ScrollSyncService = module.ScrollSyncService;
            DomEventsService = module.DomEventsService;
            ColumnResizingService = module.ColumnResizingService;
            ColumnReorderService = module.ColumnReorderService;
            ColumnInfoService = module.ColumnInfoService;
            NavigationService$1 = module.NavigationService;
            SortService = module.SortService;
            SharedModule = module.SharedModule;
            DragAndDropModule = module.DragAndDropModule;
            GroupModule = module.GroupModule;
            BodyModule = module.BodyModule;
            SharedFilterModule = module.SharedFilterModule;
            RowFilterModule = module.RowFilterModule;
            FilterMenuModule = module.FilterMenuModule;
            ColumnMenuModule = module.ColumnMenuModule;
            HeaderModule = module.HeaderModule;
            FooterModule = module.FooterModule;
            PagerModule = module.PagerModule;
            ExcelModule = module.ExcelModule;
            PDFModule = module.PDFModule;
        }, function (module) {
            DateInputsModule = module.DateInputsModule;
            DOMService = module.DOMService;
            CenturyViewService = module.CenturyViewService;
            DecadeViewService = module.DecadeViewService;
            MonthViewService = module.MonthViewService;
            YearViewService = module.YearViewService;
            WeekNamesService = module.WeekNamesService;
            NavigationService$2 = module.NavigationService;
            BusViewService = module.BusViewService;
            DOMService$1 = module.DOMService$1;
            HoursService = module.HoursService;
            MinutesService = module.MinutesService;
            SecondsService = module.SecondsService;
            DayPeriodService = module.DayPeriodService;
            EventsModule$1 = module.EventsModule;
            DateInputModule = module.DateInputModule;
            CalendarCommonModule = module.CalendarCommonModule;
            TemplatesModule = module.TemplatesModule;
            VirtualizationModule = module.VirtualizationModule;
            CalendarModule$1 = module.CalendarModule;
            DatePickerModule = module.DatePickerModule;
            MultiViewCalendarModule = module.MultiViewCalendarModule;
            CalendarsModule = module.CalendarsModule;
            TimePickerModule$1 = module.TimePickerModule;
            DateRangeModule = module.DateRangeModule;
            TOUCH_ENABLED = module.TOUCH_ENABLED;
            touchEnabled = module.touchEnabled;
        }, function (module) {
            DropDownsModule = module.DropDownsModule;
            SharedDirectivesModule = module.SharedDirectivesModule;
            SharedModule$1 = module.SharedModule;
            DropDownListModule = module.DropDownListModule;
            AutoCompleteModule = module.AutoCompleteModule;
            ComboBoxModule = module.ComboBoxModule;
            MultiSelectModule$1 = module.MultiSelectModule;
            TOUCH_ENABLED$1 = module.TOUCH_ENABLED;
            touchEnabled$1 = module.touchEnabled;
        }, function (module) {
            ButtonsModule = module.ButtonsModule;
            ButtonModule = module.ButtonModule;
            ButtonGroupModule = module.ButtonGroupModule;
            ListModule = module.ListModule;
            SplitButtonModule = module.SplitButtonModule;
            DropDownButtonModule = module.DropDownButtonModule;
        }, function (module) {
            InputsModule = module.InputsModule;
            TextAreaDirective = module.TextAreaDirective;
            EventsModule = module.EventsModule;
            NumericTextBoxModule = module.NumericTextBoxModule;
            TextBoxModule = module.TextBoxModule;
            DraggableModule = module.DraggableModule;
            SliderModule = module.SliderModule;
            SwitchModule$1 = module.SwitchModule;
            MaskedTextBoxModule = module.MaskedTextBoxModule;
        }, function (module) {
            IntlModule = module.IntlModule;
            IntlService = module.IntlService;
            CldrIntlService = module.CldrIntlService;
        }, function () {}, function (module) {
            ServerSideToken = module.ServerSideToken;
            LookupModule = module.LookupModule;
            LookupComponent = module.LookupComponent;
        }, function (module) {
            TreeTableModule = module.TreeTableModule;
            TreetableService = module.TreetableService;
            TTHotkeys = module.TTHotkeys;
        }, function (module) {
            FieldGroupModule = module.FieldGroupModule;
            ??a = module.??a;
        }, function (module) {
            FarrisTabsModule = module.FarrisTabsModule;
            NgbDropdownConfig = module.NgbDropdownConfig;
            NgbTooltipConfig = module.NgbTooltipConfig;
            TabService = module.TabService;
            TabConfig = module.TabConfig;
            NgbDropdownModule = module.NgbDropdownModule;
            NgbTooltipModule = module.NgbTooltipModule;
        }, function (module) {
            FarrisTagModule = module.FarrisTagModule;
        }, function (module) {
            FarrisSidebarModule = module.FarrisSidebarModule;
            FarrisSidebarService = module.FarrisSidebarService;
        }, function (module) {
            UploadDialogMoudle = module.UploadDialogMoudle;
            UploadDialogService = module.UploadDialogService;
            DownloadService = module.DownloadService;
            UploadService = module.UploadService;
            UploadModule = module.UploadModule;
        }, function (module) {
            FarrisSectionModule = module.FarrisSectionModule;
            FarrisSectionComponent = module.FarrisSectionComponent;
        }, function (module) {
            FarrisDatePickerModule = module.FarrisDatePickerModule;
        }, function (module) {
            FarrisTimeSpinnerModule = module.FarrisTimeSpinnerModule;
        }, function (module) {
            DatagridComponent = module.DatagridComponent;
            GRID_SETTINGS_HTTP = module.GRID_SETTINGS_HTTP;
            DatagridModule = module.DatagridModule;
            DatagridSmartFilterService = module.DatagridSmartFilterService;
            DatagridFacadeService = module.DatagridFacadeService;
            DatagridService = module.DatagridService;
            ??t = module.??t;
            ValidatorMessagerService = module.ValidatorMessagerService;
            GRID_SETTINGS_SERVICE = module.GRID_SETTINGS_SERVICE;
            NgxPaginationModule = module.NgxPaginationModule;
            ScrollbarModule = module.ScrollbarModule;
            DatagridSmartFilterModule = module.DatagridSmartFilterModule;
            SCROLLBAR_CONFIG = module.SCROLLBAR_CONFIG;
            GRID_EDITORS = module.GRID_EDITORS;
            GRID_FILTER_ROW = module.GRID_FILTER_ROW;
        }, function (module) {
            WizardService = module.WizardService;
            WizardModule = module.WizardModule;
        }, function (module) {
            QuerySolutionModule = module.QuerySolutionModule;
            QUERYSOLUTION_HANDLER_TOKEN = module.QUERYSOLUTION_HANDLER_TOKEN;
        }, function (module) {
            FarrisButtonModule = module.FarrisButtonModule;
        }, function (module) {
            ListViewModule = module.ListViewModule;
        }, function (module) {
            TimePickerModule = module.TimePickerModule;
        }, function (module) {
            AngularDraggableModule = module.AngularDraggableModule;
            AngularResizableDirective = module.AngularResizableDirective;
        }, function (module) {
            SplitterModule = module.SplitterModule;
            SplitterComponent = module.SplitterComponent;
            SplitterPaneComponent = module.SplitterPaneComponent;
        }, function (module) {
            ListNavModule = module.ListNavModule;
        }, function (module) {
            TextModule = module.TextModule;
            TextComponent = module.TextComponent;
        }, function (module) {
            WFSubmiteService = module.WFSubmiteService;
            WFRuntimeModule = module.WFRuntimeModule;
            I18nService$1 = module.I18nService;
            TaskService$1 = module.TaskService;
            UserService = module.UserService;
        }, function (module) {
            MultiSelectModule = module.MultiSelectModule;
        }, function (module) {
            InputGroupModule = module.InputGroupModule;
            InputGroupComponent = module.InputGroupComponent;
        }, function (module) {
            ComboServerSideToken = module.ComboServerSideToken;
            ComboListModule = module.ComboListModule;
            ComboLocaleService = module.ComboLocaleService;
        }, function (module) {
            FarrisHtmlEditorModule = module.FarrisHtmlEditorModule;
            ??b$3 = module.??b;
            defaultModules = module.defaultModules;
        }, function (module) {
            CloudprintService = module.CloudprintService;
            CloudPrintModule = module.CloudPrintModule;
            ??a$1 = module.??a;
            ??b$1 = module.??b;
            ??c$2 = module.??c;
            ??e = module.??e;
        }, function (module) {
            DatagridEditorsModule = module.DatagridEditorsModule;
            EditorProviders = module.EditorProviders;
            DatagridTextareaComponent = module.DatagridTextareaComponent;
            DatagridTextboxComponent = module.DatagridTextboxComponent;
            ??a$4 = module.??a;
            ??b$2 = module.??b;
            ??c$3 = module.??c;
            ??d$2 = module.??d;
            ??e$1 = module.??e;
            ??f$3 = module.??f;
            ??g$2 = module.??g;
            ??h$1 = module.??h;
            ??i = module.??i;
            ??j$1 = module.??j;
            ??k = module.??k;
            DatagridEnumEditorComponent = module.DatagridEnumEditorComponent;
            DatagridFilterEditorComponent = module.DatagridFilterEditorComponent;
            DatagridSortEditorComponent = module.DatagridSortEditorComponent;
        }, function (module) {
            ViewChangeModule = module.ViewChangeModule;
        }, function (module) {
            SwitchModule = module.SwitchModule;
            SWITCH_OPTIONS = module.SWITCH_OPTIONS;
        }, function (module) {
            ListFilterModule = module.ListFilterModule;
            LISTFILTER_HANDLER_TOKEN = module.LISTFILTER_HANDLER_TOKEN;
            ConvertorService$2 = module.ConvertorService;
            SolutionService$2 = module.SolutionService;
            QuerySolutionService$1 = module.QuerySolutionService;
        }, function (module) {
            SimpleFilterModule = module.SimpleFilterModule;
            FilterService$1 = module.FilterService;
            ConvertorService = module.ConvertorService;
            SolutionService = module.SolutionService;
        }, function (module) {
            AvatarModule = module.AvatarModule;
        }, function (module) {
            CalendarModule = module.CalendarModule;
        }, function (module) {
            WFFlowchartService = module.WFFlowchartService;
            UiFlowchartModule = module.UiFlowchartModule;
            UiFlowchartService = module.UiFlowchartService;
        }, function (module) {
            NumberSpinnerModule = module.NumberSpinnerModule;
            NumberSpinnerComponent = module.NumberSpinnerComponent;
        }, function (module) {
            ComboLookupModule = module.ComboLookupModule;
        }, function (module) {
            ScrollspyModule = module.ScrollspyModule;
        }, function (module) {
            FileListModule = module.FileListModule;
            FileViewerService = module.FileViewerService;
            ??j = module.??j;
            ??s = module.??s;
            ??n = module.??n;
            ??u = module.??u;
            ??v = module.??v;
            ??o = module.??o;
            ??z = module.??z;
            ??d = module.??d;
            ??a$2 = module.??a;
            ??y = module.??y;
            ??f$2 = module.??f;
            ??h = module.??h;
            ??be = module.??be;
            ??g$1 = module.??g;
            ??t$1 = module.??t;
            ??bg = module.??bg;
            ??bh = module.??bh;
        }, function (module) {
            LanguageTextboxModule = module.LanguageTextboxModule;
        }, function (module) {
            DynamicControlGroupModule = module.DynamicControlGroupModule;
        }, function (module) {
            BatchEditDialogModule = module.BatchEditDialogModule;
            BatchEditDialogService = module.BatchEditDialogService;
        }, function (module) {
            DatagridFilterRowModule = module.DatagridFilterRowModule;
            FilterRowComponent = module.FilterRowComponent;
        }, function (module) {
            DatagridSettingsModule = module.DatagridSettingsModule;
            DatagridSettingsService = module.DatagridSettingsService;
        }, function (module) {
            FarrisFooterModule = module.FarrisFooterModule;
        }, function (module) {
            DiscussionGroupModule = module.DiscussionGroupModule;
            DiscussionListService = module.DiscussionListService;
        }, function (module) {
            NavModule = module.NavModule;
        }, function (module) {
            TagsModule = module.TagsModule;
        }, function (module) {
            EditorModule = module.EditorModule;
            EditorService = module.EditorService;
            TINYMCE_SCRIPT_SRC = module.TINYMCE_SCRIPT_SRC;
        }, function (module) {
            FfileuploadAdaptUnifileModule = module.FfileuploadAdaptUnifileModule;
            FFileUploadAdaptUnifileConfigService = module.FFileUploadAdaptUnifileConfigService;
            FFileUploadAdaptUnifileConfigToken = module.FFileUploadAdaptUnifileConfigToken;
            FfileuploadAdaptUnifileService = module.FfileuploadAdaptUnifileService;
            FfilepreviewAdaptUnifileService = module.FfilepreviewAdaptUnifileService;
        }, function (module) {
            FEHeaderFooterModule = module.FEHeaderFooterModule;
        }, function (module) {
            FEPageModalModule = module.FEPageModalModule;
            FEPageModalService = module.FEPageModalService;
        }, function (module) {
            FeatureEditorModule = module.FeatureEditorModule;
            FeatureEditorService = module.FeatureEditorService;
            I18nService = module.I18nService;
        }, function (module) {
            FEScrollCollapsibleAreaModule = module.FEScrollCollapsibleAreaModule;
            FEScrollCollapsibleAreaService = module.FEScrollCollapsibleAreaService;
        }, function (module) {
            ActivatedRoute = module.ActivatedRoute;
            Router = module.Router;
            RouterModule = module.RouterModule;
            ??angular_packages_router_router_a = module.??angular_packages_router_router_a;
            ??EmptyOutletComponent = module.??EmptyOutletComponent;
            RouterOutlet = module.RouterOutlet;
            ChildrenOutletContexts = module.ChildrenOutletContexts;
            ROUTES = module.ROUTES;
        }, function (module) {
            DataImportExportService = module.DataImportExportService;
            DIP_DATAIE_SERVICE = module.DIP_DATAIE_SERVICE;
            DataImpExpModule = module.DataImpExpModule;
            ??f = module.??f;
            ??g = module.??g;
            DataieHandcraftService = module.DataieHandcraftService;
            ??c$1 = module.??c;
            ??d$1 = module.??d;
        }, function (module) {
            CommonUtils = module.CommonUtils;
            FarrisCommonModule = module.FarrisCommonModule;
            RuntimeStateService = module.RuntimeStateService;
            IdService = module.IdService;
        }, function (module) {
            LoadingComponentNgFactory$1 = module.LoadingComponentNgFactory;
        }, function (module) {
            ModalBackdropComponentNgFactory$1 = module.ModalBackdropComponentNgFactory;
            ModalContainerComponentNgFactory$1 = module.ModalContainerComponentNgFactory;
        }, function (module) {
            MessagerComponentNgFactory$1 = module.MessagerComponentNgFactory;
        }, function (module) {
            NotifyContainerComponentNgFactory$1 = module.NotifyContainerComponentNgFactory;
        }, function (module) {
            PopoverContainerComponentNgFactory$1 = module.PopoverContainerComponentNgFactory;
        }, function (module) {
            FarrisContextMenuComponentNgFactory$1 = module.FarrisContextMenuComponentNgFactory;
        }, function (module) {
            DataTableComponentNgFactory$1 = module.DataTableComponentNgFactory;
        }, function (module) {
            TreeTableComponentNgFactory$1 = module.TreeTableComponentNgFactory;
        }, function (module) {
            LookupLeftComponentNgFactory$1 = module.LookupLeftComponentNgFactory;
            LookupTabsComponentNgFactory$1 = module.LookupTabsComponentNgFactory;
        }, function (module) {
            TimePickerPanelComponentNgFactory = module.TimePickerPanelComponentNgFactory;
        }, function (module) {
            CalendarComponentNgFactory = module.CalendarComponentNgFactory;
        }, function (module) {
            FilterPanelComponentNgFactory = module.FilterPanelComponentNgFactory;
        }, function (module) {
            TooltipComponentNgFactory = module.TooltipComponentNgFactory;
        }, function (module) {
            PopupComponentNgFactory = module.PopupComponentNgFactory;
        }, function (module) {
            ??bNgFactory = module.??bNgFactory;
            ??iNgFactory = module.??iNgFactory;
            ??wNgFactory = module.??wNgFactory;
            ??bfNgFactory = module.??bfNgFactory;
            ??cNgFactory = module.??cNgFactory;
            ??eNgFactory = module.??eNgFactory;
            ??bbNgFactory = module.??bbNgFactory;
            ??bcNgFactory = module.??bcNgFactory;
            FileListComponentNgFactory = module.FileListComponentNgFactory;
        }, function (module) {
            WfApprovalLogsComponentNgFactory = module.WfApprovalLogsComponentNgFactory;
        }, function (module) {
            UIFlowchartComponentNgFactory = module.UIFlowchartComponentNgFactory;
        }, function (module) {
            LanguageTextPanelComponentNgFactory = module.LanguageTextPanelComponentNgFactory;
        }, function (module) {
            BsModalService = module.BsModalService;
            ModalModule = module.ModalModule;
        }, function (module) {
            cloneDeep = module.cloneDeep;
        }, function (module) {
            LocaleService = module.LocaleService;
            LocaleModule = module.LocaleModule;
            FARRIS_LOCAL_CUSTOM_DATA = module.FARRIS_LOCAL_CUSTOM_DATA;
            FarrisLocalePipe = module.FarrisLocalePipe;
        }, function (module) {
            PerfectScrollbarModule = module.PerfectScrollbarModule;
            PerfectScrollbarComponent = module.PerfectScrollbarComponent;
        }, function (module) {
            PopoverContainerComponentNgFactory = module.PopoverContainerComponentNgFactory;
        }, function (module) {
            ModalBackdropComponentNgFactory = module.ModalBackdropComponentNgFactory;
            ModalContainerComponentNgFactory = module.ModalContainerComponentNgFactory;
        }, function (module) {
            MessagerComponentNgFactory = module.MessagerComponentNgFactory;
        }, function (module) {
            NotifyContainerComponentNgFactory = module.NotifyContainerComponentNgFactory;
        }, function (module) {
            LoadingComponentNgFactory = module.LoadingComponentNgFactory;
        }, function (module) {
            FarrisContextMenuComponentNgFactory = module.FarrisContextMenuComponentNgFactory;
        }, function (module) {
            DataTableComponentNgFactory = module.DataTableComponentNgFactory;
        }, function (module) {
            TreeTableComponentNgFactory = module.TreeTableComponentNgFactory;
        }, function (module) {
            LookupLeftComponentNgFactory = module.LookupLeftComponentNgFactory;
            LookupTabsComponentNgFactory = module.LookupTabsComponentNgFactory;
        }, function (module) {
            PopoverConfig = module.PopoverConfig;
            PopoverModule = module.PopoverModule;
        }, function (module) {
            PositioningService = module.PositioningService;
        }, function (module) {
            ComponentLoaderFactory = module.ComponentLoaderFactory;
        }, function (module) {
            PaginationService = module.PaginationService;
            PaginationModule = module.PaginationModule;
        }, function (module) {
            DateTimeHelperService = module.DateTimeHelperService;
            DateHelperModule = module.DateHelperModule;
        }, function (module) {
            NumberHelperService = module.NumberHelperService;
            NumberHelperModule = module.NumberHelperModule;
        }, function (module) {
            ColumnFormatService = module.ColumnFormatService;
            DataColumnModule = module.DataColumnModule;
        }, function (module) {
            FarrisContextMenuService = module.FarrisContextMenuService;
            FarrisContextMenuModule = module.FarrisContextMenuModule;
        }, function (module) {
            ResizeService = module.ResizeService;
        }, function (module) {
            DialogService = module.DialogService;
            FarrisDialogModule = module.FarrisDialogModule;
        }, function (module) {
            FAreaResponseModule = module.FAreaResponseModule;
        }, function (module) {
            LayoutModule$1 = module.LayoutModule;
        }, function (module) {
            DataTableModule = module.DataTableModule;
        }, function (module) {
            View_PerfectScrollbarComponent_0 = module.View_PerfectScrollbarComponent_0;
            RenderType_PerfectScrollbarComponent = module.RenderType_PerfectScrollbarComponent;
        }, function (module) {
            View_InputGroupComponent_0 = module.View_InputGroupComponent_0;
            RenderType_InputGroupComponent = module.RenderType_InputGroupComponent;
        }, function (module) {
            FilterEditorComponentNgFactory = module.FilterEditorComponentNgFactory;
        }, function (module) {
            SortEditorComponentNgFactory = module.SortEditorComponentNgFactory;
        }, function (module) {
            ??lNgFactory = module.??lNgFactory;
            DatagridTextboxComponentNgFactory = module.DatagridTextboxComponentNgFactory;
            DatagridTextareaComponentNgFactory = module.DatagridTextareaComponentNgFactory;
            ??aNgFactory = module.??aNgFactory;
            ??bNgFactory$1 = module.??bNgFactory;
            ??cNgFactory$1 = module.??cNgFactory;
            ??dNgFactory = module.??dNgFactory;
            ??eNgFactory$1 = module.??eNgFactory;
            ??fNgFactory = module.??fNgFactory;
            ??gNgFactory = module.??gNgFactory;
            ??hNgFactory = module.??hNgFactory;
            ??iNgFactory$1 = module.??iNgFactory;
            ??jNgFactory = module.??jNgFactory;
            ??kNgFactory = module.??kNgFactory;
            DatagridEnumEditorComponentNgFactory = module.DatagridEnumEditorComponentNgFactory;
            DatagridSortEditorComponentNgFactory = module.DatagridSortEditorComponentNgFactory;
            DatagridFilterEditorComponentNgFactory = module.DatagridFilterEditorComponentNgFactory;
        }, function (module) {
            TaskExecuteComponentNgFactory = module.TaskExecuteComponentNgFactory;
            TaskAssigninfoComponentNgFactory = module.TaskAssigninfoComponentNgFactory;
            ProcessSelectorComponentNgFactory = module.ProcessSelectorComponentNgFactory;
        }, function (module) {
            VerifyDetailComponentNgFactory = module.VerifyDetailComponentNgFactory;
        }, function (module) {
            StringFilterCellComponentNgFactory = module.StringFilterCellComponentNgFactory;
            NumericFilterCellComponentNgFactory = module.NumericFilterCellComponentNgFactory;
            BooleanFilterCellComponentNgFactory = module.BooleanFilterCellComponentNgFactory;
            DateFilterCellComponentNgFactory = module.DateFilterCellComponentNgFactory;
            StringFilterMenuComponentNgFactory = module.StringFilterMenuComponentNgFactory;
            NumericFilterMenuComponentNgFactory = module.NumericFilterMenuComponentNgFactory;
            DateFilterMenuComponentNgFactory = module.DateFilterMenuComponentNgFactory;
            BooleanFilterMenuComponentNgFactory = module.BooleanFilterMenuComponentNgFactory;
        }, function (module) {
            NgbTooltipWindowNgFactory = module.NgbTooltipWindowNgFactory;
        }, function (module) {
            FileUploadComponentNgFactory = module.FileUploadComponentNgFactory;
            UploadDialogComponentNgFactory = module.UploadDialogComponentNgFactory;
        }, function (module) {
            ??bNgFactory$2 = module.??bNgFactory;
            QueryConditionComponentNgFactory = module.QueryConditionComponentNgFactory;
        }, function (module) {
            ??cNgFactory$2 = module.??cNgFactory;
            ??eNgFactory$2 = module.??eNgFactory;
        }, function (module) {
            ProcessSelectorComponentNgFactory$1 = module.ProcessSelectorComponentNgFactory;
            WfWorkitemHandleComponentNgFactory = module.WfWorkitemHandleComponentNgFactory;
            UserHelperComponentNgFactory = module.UserHelperComponentNgFactory;
            TaskAssignComponentNgFactory = module.TaskAssignComponentNgFactory;
            TaskSignaddComponentNgFactory = module.TaskSignaddComponentNgFactory;
            TaskTransferComponentNgFactory = module.TaskTransferComponentNgFactory;
            ??aNgFactory$1 = module.??aNgFactory;
        }, function (module) {
            WindowComponentNgFactory = module.WindowComponentNgFactory;
            WindowTitleBarComponentNgFactory = module.WindowTitleBarComponentNgFactory;
            DialogComponentNgFactory = module.DialogComponentNgFactory;
            DialogTitleBarComponentNgFactory = module.DialogTitleBarComponentNgFactory;
        }, function (module) {
            ??dNgFactory$1 = module.??dNgFactory;
            ??fNgFactory$1 = module.??fNgFactory;
            ??gNgFactory$1 = module.??gNgFactory;
            ??hNgFactory$1 = module.??hNgFactory;
        }, function (module) {
            ??bNgFactory$3 = module.??bNgFactory;
            ??cNgFactory$3 = module.??cNgFactory;
            ??dNgFactory$2 = module.??dNgFactory;
            ??eNgFactory$3 = module.??eNgFactory;
            ??fNgFactory$2 = module.??fNgFactory;
            ??gNgFactory$2 = module.??gNgFactory;
            ??hNgFactory$2 = module.??hNgFactory;
        }, function (module) {
            BatchEditDialogComponentNgFactory = module.BatchEditDialogComponentNgFactory;
            ResultConfirmComponentNgFactory = module.ResultConfirmComponentNgFactory;
        }, function (module) {
            MultiDownloadInfoComponentNgFactory = module.MultiDownloadInfoComponentNgFactory;
        }, function (module) {
            DiscussionPersonnelComponentNgFactory = module.DiscussionPersonnelComponentNgFactory;
        }, function (module) {
            FilterRowComponentNgFactory = module.FilterRowComponentNgFactory;
            FilterTextboxComponentNgFactory = module.FilterTextboxComponentNgFactory;
            FilterCheckboxComponentNgFactory = module.FilterCheckboxComponentNgFactory;
            ConditionEditorComponentNgFactory = module.ConditionEditorComponentNgFactory;
            FilterDatalistComponentNgFactory = module.FilterDatalistComponentNgFactory;
            FilterRowPanelComponentNgFactory = module.FilterRowPanelComponentNgFactory;
            FilterRowEditorComponentNgFactory = module.FilterRowEditorComponentNgFactory;
            FilterSelectComponentNgFactory = module.FilterSelectComponentNgFactory;
        }, function (module) {
            DatagridSettingsComponentNgFactory = module.DatagridSettingsComponentNgFactory;
            SimpleColumnsComponentNgFactory = module.SimpleColumnsComponentNgFactory;
        }, function (module) {
            FEPageModalComponentNgFactory = module.FEPageModalComponentNgFactory;
            FEModalBackdropComponentNgFactory = module.FEModalBackdropComponentNgFactory;
            ??aNgFactory$2 = module.??aNgFactory;
        }, function (module) {
            FeatureEditorComponentNgFactory = module.FeatureEditorComponentNgFactory;
        }, function (module) {
            View_ResponseToolbarComponent_0 = module.View_ResponseToolbarComponent_0;
            RenderType_ResponseToolbarComponent = module.RenderType_ResponseToolbarComponent;
        }, function (module) {
            View_SplitterComponent_0 = module.View_SplitterComponent_0;
            RenderType_SplitterComponent = module.RenderType_SplitterComponent;
            View_SplitterPaneComponent_0 = module.View_SplitterPaneComponent_0;
            RenderType_SplitterPaneComponent = module.RenderType_SplitterPaneComponent;
        }, function (module) {
            View_DatagridComponent_0 = module.View_DatagridComponent_0;
            RenderType_DatagridComponent = module.RenderType_DatagridComponent;
        }, function (module) {
            View_FarrisSectionComponent_0 = module.View_FarrisSectionComponent_0;
            RenderType_FarrisSectionComponent = module.RenderType_FarrisSectionComponent;
        }, function (module) {
            WfTaskHandlerService = module.WfTaskHandlerService;
            TaskService = module.TaskService;
            I18nService$2 = module.I18nService;
            WfTaskHandlerModule = module.WfTaskHandlerModule;
        }, function (module) {
            View_TextComponent_0 = module.View_TextComponent_0;
            RenderType_TextComponent = module.RenderType_TextComponent;
        }, function (module) {
            View_ValidationMessageComponent_0 = module.View_ValidationMessageComponent_0;
            RenderType_ValidationMessageComponent = module.RenderType_ValidationMessageComponent;
        }, function (module) {
            RTL = module.RTL;
            LocalizationService$1 = module.LocalizationService;
        }, function (module) {
            View_NumberSpinnerComponent_0 = module.View_NumberSpinnerComponent_0;
            RenderType_NumberSpinnerComponent = module.RenderType_NumberSpinnerComponent;
        }, function (module) {
            WindowService = module.WindowService;
            WindowContainerService = module.WindowContainerService;
            DialogContainerService = module.DialogContainerService;
            DialogService$2 = module.DialogService;
            SharedModule$2 = module.SharedModule;
            WindowModule = module.WindowModule;
            DialogModule = module.DialogModule;
        }, function (module) {
            ??bNgFactory$4 = module.??bNgFactory;
            ??nNgFactory = module.??nNgFactory;
            ??eNgFactory$4 = module.??eNgFactory;
            ??hNgFactory$3 = module.??hNgFactory;
            ??mNgFactory = module.??mNgFactory;
            ??kNgFactory$1 = module.??kNgFactory;
            ??lNgFactory$1 = module.??lNgFactory;
            RuleIdHelpComponentNgFactory = module.RuleIdHelpComponentNgFactory;
            DataieRuleHelpComponentNgFactory = module.DataieRuleHelpComponentNgFactory;
            ??oNgFactory = module.??oNgFactory;
            ??pNgFactory = module.??pNgFactory;
            ??qNgFactory = module.??qNgFactory;
            ??rNgFactory = module.??rNgFactory;
            ??sNgFactory = module.??sNgFactory;
            ??tNgFactory = module.??tNgFactory;
            ??uNgFactory = module.??uNgFactory;
            ??vNgFactory = module.??vNgFactory;
            ??wNgFactory$1 = module.??wNgFactory;
            ??xNgFactory = module.??xNgFactory;
            ??yNgFactory = module.??yNgFactory;
            ??zNgFactory = module.??zNgFactory;
        }, function (module) {
            QuerySolutionService = module.QuerySolutionService;
            FilterConditionModule = module.FilterConditionModule;
        }, function (module) {
            SysCommonUtilService = module.SysCommonUtilService;
            SysSecurityConfigService = module.SysSecurityConfigService;
            SysCommonModule = module.SysCommonModule;
        }, function (module) {
            HelpFilterMap = module.HelpFilterMap;
            SysHelpService = module.SysHelpService;
            SysExceptionService = module.SysExceptionService;
            ??f$1 = module.??f;
            SysLocaleService = module.SysLocaleService;
            SysManagerUIModule = module.SysManagerUIModule;
        }, function (module) {
            PopupService = module.PopupService;
            POPUP_CONTAINER = module.POPUP_CONTAINER;
            PopupModule = module.PopupModule;
        }, function (module) {
            WfApprovalLogsService = module.WfApprovalLogsService;
            WfApprovalLogsModule = module.WfApprovalLogsModule;
        }, function (module) {
            ResizeBatchService = module.ResizeBatchService;
            ResizeSensorModule = module.ResizeSensorModule;
        }, function (module) {
            SolutionService$1 = module.SolutionService;
            ConvertorService$1 = module.ConvertorService;
            QueryConditionModule = module.QueryConditionModule;
        }, function (module) {
            TaskCommentService = module.TaskCommentService;
            TaskCommentUIState = module.TaskCommentUIState;
            TaskCommentViewModel = module.TaskCommentViewModel;
            I18nService$3 = module.I18nService;
            TaskCommentRepository = module.TaskCommentRepository;
            WFCommentModule = module.WFCommentModule;
        }, function (module) {
            UploadServerService = module.UploadServerService;
            FFileUploaderService = module.FFileUploaderService;
            FFileUploadModule = module.FFileUploadModule;
            FFileUploadAPIServiceToken = module.FFileUploadAPIServiceToken;
        }, function (module) {
            DatalistModule = module.DatalistModule;
        }, function (module) {
            FilterPanelModule = module.FilterPanelModule;
        }, function (module) {
            FDropdownDirectiveTypeModule = module.FDropdownDirectiveTypeModule;
        }, function (module) {
            TaskImplApiModule = module.TaskImplApiModule;
        }, function (module) {
            WfSignModule = module.WfSignModule;
        }, function (module) {
            FilterModule = module.FilterModule;
        }, function (module) {
            SorterModule = module.SorterModule;
        }, function (module) {
            ProgressModule = module.ProgressModule;
        }, function (module) {
            ProgressStepModule = module.ProgressStepModule;
        }, function (module) {
            TreeModule = module.TreeModule;
        }, function (module) {
            ExcelExportModule = module.ExcelExportModule;
        }, function (module) {
            CheckBoxModule = module.CheckBoxModule;
            SharedModule$3 = module.SharedModule;
            TreeViewModule = module.TreeViewModule;
        }],
        execute: function () {

            function createTranslateLoader(http, version) {
                var versionSuffix = "";
                if (version) {
                    versionSuffix = "?v=" + version;
                }
                return new TranslateHttpLoader(http, '/apps/fssc/df/web/bo-projectsfanwzfront/projectfanwz/i18n/', '.json' + versionSuffix);
            }
            var lang = { "zh-CHS": { "root-component": "", "root-layout": "", "page-header": "", "header-nav": "", "header-title-container": "", "page-header-title": "", "page-header-toolbar": "", "button-add": "??????", "button-edit": "??????", "button-save": "??????", "button-cancel": "??????", "button-delete": "??????", "button-data-import": "??????", "button-data-export": "??????", "main-container": "", "content-splitter": "", "content-list": "", "data-grid-component-ref": "", "content-main": "", "detail-component-ref": "", "data-grid-component": "", "data-grid-section": "", "Section/data-grid-section/mainTitle": "", "Section/data-grid-section/subTitle": "", "dataGrid": "", "DataGrid/dataGrid/lineNumberTitle": "", "DataGrid/dataGrid/OperateEditButton": "??????", "DataGrid/dataGrid/OperateDeleteButton": "??????", "DataGrid/dataGrid/OperateColumn": "??????", "projectCode_034d37e8_rnse": "????????????", "projectName_2693df04_jujs": "????????????", "detail-form-component": "", "detail-form-section": "", "Section/detail-form-section/mainTitle": "????????????", "Section/detail-form-section/subTitle": "", "detail-form-layout": "", "projectCode_034d37e8_75r8": "????????????", "TextBox/projectCode_034d37e8_75r8/placeHolder": "", "projectName_2693df04_u0od": "????????????", "TextBox/projectName_2693df04_u0od/placeHolder": "", "projectType_47b0d767_7fzm": "????????????", "TextBox/projectType_47b0d767_7fzm/placeHolder": "", "projectNote_60e4aa39_qvd7": "????????????", "MultiTextBox/projectNote_60e4aa39_qvd7/placeHolder": "", "projectSum_c8e88808_bpqf": "????????????", "NumberSpinner/projectSum_c8e88808_bpqf/placeHolder": "" } };
            var LangPipe = /** @class */ (function () {
                function LangPipe(translate, http) {
                    this.translate = translate;
                    this.http = http;
                }
                LangPipe.prototype.transform = function (key, langCode, defaultValue) {
                    var translateValue = this.translate.instant(key);
                    if (translateValue == "JitI18nDefaultValue") {
                        return defaultValue ? defaultValue : "";
                    }
                    return translateValue;
                };
                LangPipe = __decorate([
                    Pipe({ name: 'lang' }),
                    __metadata("design:paramtypes", [TranslateService, HttpClient])
                ], LangPipe);
                return LangPipe;
            }());
            var SafeHtmlPipe = /** @class */ (function () {
                function SafeHtmlPipe(sanitizer) {
                    this.sanitizer = sanitizer;
                }
                SafeHtmlPipe.prototype.transform = function (url) {
                    if (!url) {
                        url = "";
                    }
                    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
                };
                SafeHtmlPipe = __decorate([
                    Pipe({ name: 'safeHtml' }),
                    __metadata("design:paramtypes", [DomSanitizer])
                ], SafeHtmlPipe);
                return SafeHtmlPipe;
            }());
            var LangService = /** @class */ (function () {
                function LangService(translate) {
                    this.translate = translate;
                }
                LangService.prototype.transform = function (key, langCode, defaultValue) {
                    var translateValue = this.translate.instant(key);
                    if (translateValue == "JitI18nDefaultValue") {
                        return defaultValue ? defaultValue : "";
                    }
                    return translateValue;
                };
                LangService.prototype.getCurrentLanguage = function () {
                    return this.translate.currentLang;
                };
                LangService = __decorate([
                    Injectable(),
                    __metadata("design:paramtypes", [TranslateService])
                ], LangService);
                return LangService;
            }());
            var TranslateResolveService = /** @class */ (function () {
                function TranslateResolveService(translate, http) {
                    this.translate = translate;
                    this.http = http;
                    translate.defaultLang = 'zh-CHS';
                    translate.setTranslation('zh-CHS', lang['zh-CHS']);
                }
                TranslateResolveService.prototype.resolve = function (route, state) {
                    var _this = this;
                    var langCode = localStorage.getItem('languageCode');
                    if (!langCode) {
                        langCode = "zh-CHS";
                    }
                    if (langCode == "zh-CHS" || (this.translate.defaultLang === langCode && this.translate.currentLoader == createTranslateLoader(this.http, null))) {
                        this.translate.setTranslation('zh-CHS', lang['zh-CHS']);
                        return of(this.translate[langCode]);
                    }
                    else {
                        var httpOb = this.http.get("/apps/fssc/df/web/bo-projectsfanwzfront/version.json?v=" + new Date().getTime()).pipe(switchMap(function (data) {
                            var currentVersion = null;
                            if (data instanceof Array) {
                                var versionKey_1 = "projectfanwz/" + langCode + ".json";
                                data.forEach(function (item) {
                                    if (item.category == "i18n" && item.key == versionKey_1) {
                                        currentVersion = item.value;
                                    }
                                });
                            }
                            _this.translate.defaultLang = langCode;
                            _this.translate.currentLang = langCode;
                            _this.translate.currentLoader = createTranslateLoader(_this.http, currentVersion);
                            var tran = _this.translate.getTranslation(langCode).pipe(catchError(function (err) {
                                console.error("read resource file failed,please check!!! " + err);
                                return of(err);
                            }));
                            return tran;
                        }));
                        return httpOb;
                    }
                };
                TranslateResolveService = __decorate([
                    Injectable(),
                    __metadata("design:paramtypes", [TranslateService, HttpClient])
                ], TranslateResolveService);
                return TranslateResolveService;
            }());

            var EventDeclaration = /** @class */ (function (_super) {
                __extends(EventDeclaration, _super);
                function EventDeclaration() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                EventDeclaration = __decorate([
                    Injectable()
                ], EventDeclaration);
                return EventDeclaration;
            }(Declaration));

            var RootViewmodel = /** @class */ (function (_super) {
                __extends(RootViewmodel, _super);
                function RootViewmodel() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.bindingPath = '/';
                    _this.dom = {};
                    _this.childViewModels = {
                        'DataGridComponentViewmodel': 'dataGridComponentViewmodel',
                        'DetailFormComponentViewmodel': 'detailFormComponentViewmodel'
                    };
                    return _this;
                }
                RootViewmodel.prototype.dataImport1 = function (commandParam) { return; };
                RootViewmodel.prototype.dataExport1 = function (commandParam) { return; };
                __decorate([
                    NgCommand({
                        name: 'dataImport1',
                        params: {
                            type: '',
                            ruleID: '',
                            option: ''
                        },
                        paramDescriptions: {
                            type: { type: 'int' },
                            ruleID: { type: 'string' },
                            option: { type: 'string' }
                        }
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], RootViewmodel.prototype, "dataImport1", null);
                __decorate([
                    NgCommand({
                        name: 'dataExport1',
                        params: {
                            type: '',
                            ruleID: '',
                            option: ''
                        },
                        paramDescriptions: {
                            type: { type: 'int' },
                            ruleID: { type: 'string' },
                            option: { type: 'string' }
                        }
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], RootViewmodel.prototype, "dataExport1", null);
                RootViewmodel = __decorate([
                    Injectable()
                ], RootViewmodel);
                return RootViewmodel;
            }(ViewModel));

            var ProjectsFanwzEntity = /** @class */ (function (_super) {
                __extends(ProjectsFanwzEntity, _super);
                function ProjectsFanwzEntity() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                __decorate([
                    NgField({
                        originalDataField: 'ID',
                        dataField: 'id',
                        primary: true,
                        originalDataFieldType: 'String',
                        initValue: '',
                        path: 'ID',
                        validRules: [
                            {
                                type: 'required',
                                constraints: [true],
                            },
                            {
                                type: 'maxLength',
                                constraints: [36],
                                message: '???????????????36',
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], ProjectsFanwzEntity.prototype, "id", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'Version',
                        dataField: 'version',
                        originalDataFieldType: 'DateTime',
                        initValue: '0001-01-01T00:00:00',
                        path: 'Version',
                        enableTimeZone: true,
                    }),
                    __metadata("design:type", String)
                ], ProjectsFanwzEntity.prototype, "version", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'ProjectCode',
                        dataField: 'projectCode',
                        originalDataFieldType: 'String',
                        initValue: '',
                        path: 'ProjectCode',
                        validRules: [
                            {
                                type: 'maxLength',
                                constraints: [36],
                                message: '???????????????36',
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], ProjectsFanwzEntity.prototype, "projectCode", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'ProjectName',
                        dataField: 'projectName',
                        originalDataFieldType: 'String',
                        initValue: '',
                        path: 'ProjectName',
                        validRules: [
                            {
                                type: 'maxLength',
                                constraints: [512],
                                message: '???????????????512',
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], ProjectsFanwzEntity.prototype, "projectName", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'ProjectType',
                        dataField: 'projectType',
                        originalDataFieldType: 'String',
                        initValue: '',
                        path: 'ProjectType',
                        validRules: [
                            {
                                type: 'maxLength',
                                constraints: [36],
                                message: '???????????????36',
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], ProjectsFanwzEntity.prototype, "projectType", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'ProjectNote',
                        dataField: 'projectNote',
                        originalDataFieldType: 'Text',
                        initValue: '',
                        path: 'ProjectNote',
                    }),
                    __metadata("design:type", Object)
                ], ProjectsFanwzEntity.prototype, "projectNote", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'ProjectSum',
                        dataField: 'projectSum',
                        originalDataFieldType: 'Number',
                        initValue: 0,
                        path: 'ProjectSum',
                    }),
                    __metadata("design:type", Object)
                ], ProjectsFanwzEntity.prototype, "projectSum", void 0);
                ProjectsFanwzEntity = __decorate([
                    NgEntity({
                        originalCode: "ProjectsFanwz",
                        nodeCode: "projectsFanwzs"
                    })
                ], ProjectsFanwzEntity);
                return ProjectsFanwzEntity;
            }(Entity));

            var ProjectsFanwzProxy = /** @class */ (function (_super) {
                __extends(ProjectsFanwzProxy, _super);
                function ProjectsFanwzProxy(httpClient, uriService) {
                    var _this = _super.call(this, httpClient, uriService) || this;
                    _this.apiUrl = 'api/fssc/df/v1.0/projectfanwz_frm';
                    _this.baseUri = uriService.extendUri(_this.apiUrl);
                    return _this;
                }
                ProjectsFanwzProxy = __decorate([
                    Injectable(),
                    __metadata("design:paramtypes", [HttpClient,
                        UriService])
                ], ProjectsFanwzProxy);
                return ProjectsFanwzProxy;
            }(BefProxy));

            var ProjectsFanwzRepository = /** @class */ (function (_super) {
                __extends(ProjectsFanwzRepository, _super);
                function ProjectsFanwzRepository(injector) {
                    var _this = _super.call(this, injector) || this;
                    _this.name = 'ProjectsFanwzRepository';
                    _this.paginationInfo = {
                        ProjectsFanwzEntity: {
                            pageSize: 20,
                        },
                    };
                    _this.proxy = injector.get(ProjectsFanwzProxy, null);
                    return _this;
                }
                ProjectsFanwzRepository = __decorate([
                    Injectable(),
                    NgRepository({
                        apiUrl: 'api/fssc/df/v1.0/projectfanwz_frm',
                        entityType: ProjectsFanwzEntity
                    }),
                    __metadata("design:paramtypes", [Injector])
                ], ProjectsFanwzRepository);
                return ProjectsFanwzRepository;
            }(BefRepository));

            var RootViewmodelForm = /** @class */ (function (_super) {
                __extends(RootViewmodelForm, _super);
                function RootViewmodelForm() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                RootViewmodelForm = __decorate([
                    Injectable(),
                    NgValidateForm({
                        formGroupName: '????????????Fanwz',
                        enableValidate: false
                    }),
                    Injectable()
                ], RootViewmodelForm);
                return RootViewmodelForm;
            }(Form));

            var ??0 = function (context) { return context.state === 'init'; }, ??1 = function (context) { return context.state === 'add' || context.state === 'edit'; }, ??2 = function (context) { return context.state === 'init'; }, ??3 = function (context) { return context.state === 'init'; }, ??4 = function (context) { return context.state === 'add' || context.state === 'edit'; }, ??5 = function (context) { return context.state === 'add' || context.state === 'edit'; };
            var RootViewmodelStateMachine = /** @class */ (function (_super) {
                __extends(RootViewmodelStateMachine, _super);
                function RootViewmodelStateMachine() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                __decorate([
                    NgState({ name: "??????" }),
                    __metadata("design:type", State)
                ], RootViewmodelStateMachine.prototype, "add", void 0);
                __decorate([
                    NgState({
                        initialState: true,
                        name: "??????"
                    }),
                    __metadata("design:type", State)
                ], RootViewmodelStateMachine.prototype, "init", void 0);
                __decorate([
                    NgState({ name: "??????" }),
                    __metadata("design:type", State)
                ], RootViewmodelStateMachine.prototype, "edit", void 0);
                __decorate([
                    NgRenderState({
                        render: ??0
                    }),
                    __metadata("design:type", Boolean)
                ], RootViewmodelStateMachine.prototype, "canRemove", void 0);
                __decorate([
                    NgRenderState({
                        render: ??1
                    }),
                    __metadata("design:type", Boolean)
                ], RootViewmodelStateMachine.prototype, "editable", void 0);
                __decorate([
                    NgRenderState({
                        render: ??2
                    }),
                    __metadata("design:type", Boolean)
                ], RootViewmodelStateMachine.prototype, "canEdit", void 0);
                __decorate([
                    NgRenderState({
                        render: ??3
                    }),
                    __metadata("design:type", Boolean)
                ], RootViewmodelStateMachine.prototype, "canAdd", void 0);
                __decorate([
                    NgRenderState({
                        render: ??4
                    }),
                    __metadata("design:type", Boolean)
                ], RootViewmodelStateMachine.prototype, "canSave", void 0);
                __decorate([
                    NgRenderState({
                        render: ??5
                    }),
                    __metadata("design:type", Boolean)
                ], RootViewmodelStateMachine.prototype, "canCancel", void 0);
                __decorate([
                    NgAction({
                        transitTo: 'init'
                    }),
                    __metadata("design:type", Function)
                ], RootViewmodelStateMachine.prototype, "Cancel", void 0);
                __decorate([
                    NgAction({
                        transitTo: 'add'
                    }),
                    __metadata("design:type", Function)
                ], RootViewmodelStateMachine.prototype, "Create", void 0);
                __decorate([
                    NgAction({
                        transitTo: 'edit'
                    }),
                    __metadata("design:type", Function)
                ], RootViewmodelStateMachine.prototype, "Edit", void 0);
                __decorate([
                    NgAction({
                        transitTo: 'init'
                    }),
                    __metadata("design:type", Function)
                ], RootViewmodelStateMachine.prototype, "Save", void 0);
                RootViewmodelStateMachine = __decorate([
                    Injectable()
                ], RootViewmodelStateMachine);
                return RootViewmodelStateMachine;
            }(StateMachine));

            var RootViewmodelUIState = /** @class */ (function (_super) {
                __extends(RootViewmodelUIState, _super);
                function RootViewmodelUIState() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                RootViewmodelUIState = __decorate([
                    Injectable()
                ], RootViewmodelUIState);
                return RootViewmodelUIState;
            }(UIState));

            var dataImport1Handler = /** @class */ (function (_super) {
                __extends(dataImport1Handler, _super);
                function dataImport1Handler(_DataImportExportService1) {
                    var _this = _super.call(this) || this;
                    _this._DataImportExportService1 = _DataImportExportService1;
                    return _this;
                }
                dataImport1Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('CommonDataImport', function (context) {
                        var args = [
                            '{COMMAND~/params/type}',
                            '{COMMAND~/params/ruleID}',
                            '{COMMAND~/params/option}'
                        ];
                        return _this.invoke(_this._DataImportExportService1, 'CommonDataImport', args, context);
                    });
                };
                dataImport1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'dataImport1'
                    }),
                    __metadata("design:paramtypes", [DataImportExportService])
                ], dataImport1Handler);
                return dataImport1Handler;
            }(CommandHandler));

            var dataExport1Handler = /** @class */ (function (_super) {
                __extends(dataExport1Handler, _super);
                function dataExport1Handler(_DataImportExportService1) {
                    var _this = _super.call(this) || this;
                    _this._DataImportExportService1 = _DataImportExportService1;
                    return _this;
                }
                dataExport1Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('CommonDataExport', function (context) {
                        var args = [
                            '{COMMAND~/params/type}',
                            '{COMMAND~/params/ruleID}',
                            '{COMMAND~/params/option}'
                        ];
                        return _this.invoke(_this._DataImportExportService1, 'CommonDataExport', args, context);
                    });
                };
                dataExport1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'dataExport1'
                    }),
                    __metadata("design:paramtypes", [DataImportExportService])
                ], dataExport1Handler);
                return dataExport1Handler;
            }(CommandHandler));

            var RootComponent = /** @class */ (function (_super) {
                __extends(RootComponent, _super);
                function RootComponent(wizardSer, keybindingService, langService, route, router, rootElement, localizationService, frmI18nSettingService, frameworkService, applicationParamsService, verifyService, stateMachine, sanitizer, injector) {
                    var _this = _super.call(this, injector) || this;
                    _this.wizardSer = wizardSer;
                    _this.keybindingService = keybindingService;
                    _this.langService = langService;
                    _this.route = route;
                    _this.router = router;
                    _this.rootElement = rootElement;
                    _this.localizationService = localizationService;
                    _this.frmI18nSettingService = frmI18nSettingService;
                    _this.frameworkService = frameworkService;
                    _this.applicationParamsService = applicationParamsService;
                    _this.verifyService = verifyService;
                    _this.stateMachine = stateMachine;
                    _this.sanitizer = sanitizer;
                    _this.injector = injector;
                    _this.cls = 'f-page-root  ';
                    _this.lang = "";
                    _this.size = {};
                    _this.enabledLanguageList = [];
                    _this.pageHeaderToolbarToolbarItems = [{
                            "id": "button-add",
                            "text": _this.langService.transform('button-add', _this.lang, "??????"),
                            "resourceId": "button-add",
                            "isDP": false,
                            "class": "btn-primary",
                            "tipsEnable": false,
                            "icon": "",
                            "children": []
                        }, {
                            "id": "button-edit",
                            "text": _this.langService.transform('button-edit', _this.lang, "??????"),
                            "resourceId": "button-edit",
                            "isDP": false,
                            "tipsEnable": false,
                            "icon": "",
                            "children": []
                        }, {
                            "id": "button-save",
                            "text": _this.langService.transform('button-save', _this.lang, "??????"),
                            "resourceId": "button-save",
                            "isDP": false,
                            "tipsEnable": false,
                            "icon": "",
                            "children": []
                        }, {
                            "id": "button-cancel",
                            "text": _this.langService.transform('button-cancel', _this.lang, "??????"),
                            "resourceId": "button-cancel",
                            "isDP": false,
                            "tipsEnable": false,
                            "icon": "",
                            "children": []
                        }, {
                            "id": "button-delete",
                            "text": _this.langService.transform('button-delete', _this.lang, "??????"),
                            "resourceId": "button-delete",
                            "isDP": false,
                            "tipsEnable": false,
                            "icon": "",
                            "children": []
                        }, {
                            "id": "button-data-import",
                            "text": _this.langService.transform('button-data-import', _this.lang, "??????"),
                            "resourceId": "button-data-import",
                            "isDP": false,
                            "tipsEnable": false,
                            "icon": "",
                            "children": []
                        }, {
                            "id": "button-data-export",
                            "text": _this.langService.transform('button-data-export', _this.lang, "??????"),
                            "resourceId": "button-data-export",
                            "isDP": false,
                            "tipsEnable": false,
                            "icon": "",
                            "children": []
                        }
                    ];
                    _this.pageHeaderToolbarToolbarItemsStates = new BehaviorSubject({});
                    _this.pageHeaderToolbarToolbarItemsVisibleStates = new BehaviorSubject({});
                    _this.tabsToolbarStates = new BehaviorSubject({});
                    _this.tabsToolbarVisibleStates = new BehaviorSubject({});
                    _this.lang = localStorage.getItem('languageCode') || "zh-CHS";
                    if (_this.frmI18nSettingService) {
                        var i18nSetting = _this.frmI18nSettingService.getSetting();
                        if (i18nSetting && i18nSetting.languages && i18nSetting.languages.length > 0) {
                            i18nSetting.languages.forEach(function (item) {
                                _this.enabledLanguageList.push({
                                    code: item.code,
                                    name: item.name
                                });
                            });
                        }
                        else {
                            console.warn("get current enable languages is null. if this occurs,please ensure the form into the framework.");
                            _this.enabledLanguageList.push({ "code": "en", "name": "English" });
                            _this.enabledLanguageList.push({ "code": "zh-CHS", "name": "????????????" });
                        }
                    }
                    return _this;
                }
                RootComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    if (this.keybindingService) {
                        this.viewModel.keybindingMap.forEach(function (keyBinding, method) {
                            _this.keybindingService.register(keyBinding, function () {
                                return _this.viewModel[method]();
                            });
                        });
                    }
                    this.viewModel.verifycationChanged.subscribe(function (verifyInformations) {
                        if (verifyInformations.length) {
                            _this.verifyService.createVerify({
                                'parent': _this.rootElement,
                                'verifyList': verifyInformations,
                                'showType': 'all'
                            });
                        }
                        else {
                            _this.verifyService.clear();
                        }
                    });
                    this.stateMachine.stateChange.subscribe(function () {
                        var pageHeaderToolbarToolbarItemsstates = {
                            'button-add': !_this.viewModel.stateMachine['canAdd'],
                            'button-edit': !_this.viewModel.stateMachine['canEdit'],
                            'button-save': !_this.viewModel.stateMachine['canSave'],
                            'button-cancel': !_this.viewModel.stateMachine['canCancel'],
                            'button-delete': !_this.viewModel.stateMachine['canRemove'],
                            'button-data-import': false,
                            'button-data-export': false,
                        };
                        _this.pageHeaderToolbarToolbarItemsStates.next(pageHeaderToolbarToolbarItemsstates);
                    });
                    this.stateMachine.stateChange.subscribe(function () {
                        var pageHeaderToolbarToolbarItemsvisibleStates = {
                            'button-add': true,
                            'button-edit': true,
                            'button-save': true,
                            'button-cancel': true,
                            'button-delete': true,
                            'button-data-import': true,
                            'button-data-export': true,
                        };
                        _this.pageHeaderToolbarToolbarItemsVisibleStates.next(pageHeaderToolbarToolbarItemsvisibleStates);
                    });
                    this.pageHeaderToolbarToolbarItems.forEach(function (toolbarItem) {
                        var transformText = _this.langService.transform(toolbarItem.resourceId, _this.lang, toolbarItem.text);
                        if (transformText) {
                            toolbarItem.text = transformText;
                        }
                    });
                    this.applicationParamsService.parseParams(this.route, this.frameworkService, this.viewModel, function () {
                        _this.onFormLoad();
                    });
                };
                RootComponent.prototype.ngAfterViewInit = function () {
                };
                RootComponent.prototype.handleSizeChange = function (size) {
                    this.size = size;
                };
                RootComponent.prototype.onFormLoad = function () {
                };
                RootComponent.prototype.pageHeaderToolbarClickHandler = function (args) {
                    switch (args.id) {
                        case 'button-add':
                            this.viewModel.dataGridComponentViewmodel.add1(args);
                            break;
                        case 'button-edit':
                            this.viewModel.detailFormComponentViewmodel.edit1(args);
                            break;
                        case 'button-save':
                            this.viewModel.detailFormComponentViewmodel.save1(args);
                            break;
                        case 'button-cancel':
                            this.viewModel.detailFormComponentViewmodel.cancel1(args);
                            break;
                        case 'button-delete':
                            this.viewModel.dataGridComponentViewmodel.remove1(args);
                            break;
                        case 'button-data-import':
                            this.viewModel.dataImport1(args);
                            break;
                        case 'button-data-export':
                            this.viewModel.dataExport1(args);
                            break;
                    }
                };
                __decorate([
                    HostBinding('class'),
                    __metadata("design:type", Object)
                ], RootComponent.prototype, "cls", void 0);
                RootComponent = __decorate([
                    Component({
                        selector: 'app-rootcomponent',
                        templateUrl: './rootcomponent.html',
                        styleUrls: ['./rootcomponent.scss'],
                        providers: [
                            FARRIS_DEVKIT_FRAME_PROVIDERS,
                            FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS,
                            { provide: FRAME_ID, useValue: 'root-component' },
                            { provide: BindingData, useClass: BindingData },
                            { provide: Repository, useExisting: ProjectsFanwzRepository },
                            LangService,
                            { provide: NAMESPACE, useValue: '' },
                            { provide: ServerSideToken, useClass: BefLookupRestService },
                            { provide: ComboServerSideToken, useClass: DefaultComboHttpService },
                            { provide: Form, useClass: RootViewmodelForm },
                            { provide: StateMachine, useClass: RootViewmodelStateMachine },
                            { provide: UIState, useClass: RootViewmodelUIState },
                            DIP_DATAIE_SERVICE,
                            FrameworkSessionService,
                            UriService,
                            ProjectsFanwzProxy,
                            ProjectsFanwzRepository,
                            { provide: ViewModel, useClass: RootViewmodel },
                            { provide: Declaration, useClass: EventDeclaration },
                            { provide: TranslateToken, useExisting: LangService },
                            VerifyDetailService,
                            { provide: WFSubmiteService, useClass: WFSubmiteService },
                            { provide: CloudprintService, useClass: CloudprintService },
                            { provide: WFFlowchartService, useClass: WFFlowchartService },
                            FARRIS_DEVKIT_EXPRESSION_LISTENER_PROVIDERS,
                            FARRIS_DEVKIT_EXPRESSION_EFFECTOR_PROVIDERS,
                            FARRIS_DEVKIT_EXPRESSION_ROOT_FRAME_PROVIDERS,
                            AppContext,
                            ComponentManagerService,
                            { provide: PARAM_TYPE_TRANSFORM_TOKEN, useValue: false },
                            { provide: FORM_ID, useValue: "a270caa9-61f5-42d1-963a-5e70677e6b0a" },
                            { provide: BE_SESSION_HANDLING_STRATEGY_TOKEN, useValue: "SeparatedSession" },
                            { provide: EXCEPTION_HANDLER, useClass: ExceptionHandler },
                            { provide: BACK_END_MESSAGE_HANDLER_TOKEN, useClass: BackEndMessageHandler },
                            { provide: COMMAND_HANDLERS_TOKEN, useClass: dataImport1Handler, multi: true },
                            { provide: COMMAND_HANDLERS_TOKEN, useClass: dataExport1Handler, multi: true },
                        ]
                    }),
                    __metadata("design:paramtypes", [WizardService,
                        KeybindingService,
                        LangService,
                        ActivatedRoute,
                        Router,
                        ElementRef,
                        LocalizationService,
                        FrmI18nSettingService,
                        FrameworkService,
                        ApplicationParamService,
                        VerifyDetailService,
                        StateMachine,
                        DomSanitizer,
                        Injector])
                ], RootComponent);
                return RootComponent;
            }(FrameComponent));

            var routes = [
                {
                    path: '',
                    component: RootComponent,
                    children: [],
                    resolve: {
                        'translate': TranslateResolveService
                    }
                }
            ];
            var ProjectFanwzRoutingModule = /** @class */ (function () {
                function ProjectFanwzRoutingModule() {
                }
                ProjectFanwzRoutingModule = __decorate([
                    NgModule({
                        imports: [
                            RouterModule.forChild(routes)
                        ],
                        exports: [
                            RouterModule
                        ]
                    })
                ], ProjectFanwzRoutingModule);
                return ProjectFanwzRoutingModule;
            }());

            var ??0$1 = { type: 'string' }, ??1$1 = { type: 'string' };
            var DataGridComponentViewmodel = /** @class */ (function (_super) {
                __extends(DataGridComponentViewmodel, _super);
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
                                    "resourceId": "projectCode_034d37e8_rnse",
                                    "visible": {
                                        "useQuote": false,
                                        "isExpression": false,
                                        "value": true
                                    },
                                    "id": "projectCode_034d37e8_rnse",
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
                                        "path": "projectCode",
                                        "isExpression": false,
                                        "value": "projectCode"
                                    },
                                    "dataField": "projectCode",
                                    "dataType": "string",
                                    "multiLanguage": false,
                                    "caption": "????????????",
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
                                    "resourceId": "projectName_2693df04_jujs",
                                    "visible": {
                                        "useQuote": false,
                                        "isExpression": false,
                                        "value": true
                                    },
                                    "id": "projectName_2693df04_jujs",
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
                                        "path": "projectName",
                                        "isExpression": false,
                                        "value": "projectName"
                                    },
                                    "dataField": "projectName",
                                    "dataType": "string",
                                    "multiLanguage": false,
                                    "caption": "????????????",
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
                                }
                            ],
                            "multiSelect": false,
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
                DataGridComponentViewmodel.prototype.loadList1 = function (commandParam) { return; };
                DataGridComponentViewmodel.prototype.remove1 = function (commandParam) { return; };
                DataGridComponentViewmodel.prototype.loadCard1 = function (commandParam) { return; };
                DataGridComponentViewmodel.prototype.add1 = function (commandParam) { return; };
                DataGridComponentViewmodel.prototype.changePage1 = function (commandParam) { return; };
                __decorate([
                    NgCommand({
                        name: 'loadList1',
                        params: {}
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], DataGridComponentViewmodel.prototype, "loadList1", null);
                __decorate([
                    NgCommand({
                        name: 'remove1',
                        params: {
                            id: '{DATA~/data-grid-component/id}'
                        },
                        paramDescriptions: {
                            id: ??0$1
                        }
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], DataGridComponentViewmodel.prototype, "remove1", null);
                __decorate([
                    NgCommand({
                        name: 'loadCard1',
                        params: {
                            id: '{DATA~/data-grid-component/id}',
                            frameId: 'detail-form-component'
                        },
                        paramDescriptions: {
                            id: ??1$1,
                            frameId: { type: 'string' }
                        }
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], DataGridComponentViewmodel.prototype, "loadCard1", null);
                __decorate([
                    NgCommand({
                        name: 'add1',
                        params: {}
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], DataGridComponentViewmodel.prototype, "add1", null);
                __decorate([
                    NgCommand({
                        name: 'changePage1',
                        params: {
                            loadCommandName: 'loadList1',
                            loadCommandFrameId: 'data-grid-component'
                        },
                        paramDescriptions: {
                            loadCommandName: { type: 'string' },
                            loadCommandFrameId: { type: 'string' }
                        }
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], DataGridComponentViewmodel.prototype, "changePage1", null);
                DataGridComponentViewmodel = __decorate([
                    Injectable()
                ], DataGridComponentViewmodel);
                return DataGridComponentViewmodel;
            }(ViewModel));

            var DataGridComponentViewmodelForm = /** @class */ (function (_super) {
                __extends(DataGridComponentViewmodelForm, _super);
                function DataGridComponentViewmodelForm() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                __decorate([
                    NgFormControl({
                        id: 'projectCode',
                        name: "{{projectCode_034d37e8_rnse}}",
                        binding: 'projectCode',
                        updateOn: 'blur',
                        defaultI18nValue: '????????????',
                    }),
                    __metadata("design:type", FormControl)
                ], DataGridComponentViewmodelForm.prototype, "projectCode", void 0);
                __decorate([
                    NgFormControl({
                        id: 'projectName',
                        name: "{{projectName_2693df04_jujs}}",
                        binding: 'projectName',
                        updateOn: 'blur',
                        defaultI18nValue: '????????????',
                    }),
                    __metadata("design:type", FormControl)
                ], DataGridComponentViewmodelForm.prototype, "projectName", void 0);
                DataGridComponentViewmodelForm = __decorate([
                    Injectable(),
                    NgValidateForm({
                        formGroupName: '????????????Fanwz',
                        enableValidate: false
                    }),
                    Injectable()
                ], DataGridComponentViewmodelForm);
                return DataGridComponentViewmodelForm;
            }(Form));

            var DataGridComponentViewmodelUIState = /** @class */ (function (_super) {
                __extends(DataGridComponentViewmodelUIState, _super);
                function DataGridComponentViewmodelUIState() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                DataGridComponentViewmodelUIState = __decorate([
                    Injectable()
                ], DataGridComponentViewmodelUIState);
                return DataGridComponentViewmodelUIState;
            }(UIState));

            var loadList1Handler = /** @class */ (function (_super) {
                __extends(loadList1Handler, _super);
                function loadList1Handler(_NavigationMiddlewareService1, _ListDataService1) {
                    var _this = _super.call(this) || this;
                    _this._NavigationMiddlewareService1 = _NavigationMiddlewareService1;
                    _this._ListDataService1 = _ListDataService1;
                    return _this;
                }
                loadList1Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('onClosing', function (context) {
                        var args = [];
                        return _this.invoke(_this._NavigationMiddlewareService1, 'onClosing', args, context);
                    });
                    this.addTask('load', function (context) {
                        var args = [
                            '{COMMAND~/params/filter}',
                            '{COMMAND~/params/sort}'
                        ];
                        return _this.invoke(_this._ListDataService1, 'load', args, context);
                    });
                    this.addLink('onClosing', 'load', "1==1");
                };
                loadList1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'loadList1'
                    }),
                    __metadata("design:paramtypes", [NavigationMiddlewareService,
                        ListDataService])
                ], loadList1Handler);
                return loadList1Handler;
            }(CommandHandler));

            var remove1Handler = /** @class */ (function (_super) {
                __extends(remove1Handler, _super);
                function remove1Handler(_ListDataService1) {
                    var _this = _super.call(this) || this;
                    _this._ListDataService1 = _ListDataService1;
                    return _this;
                }
                remove1Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('remove', function (context) {
                        var args = [
                            '{COMMAND~/params/id}',
                            '{COMMAND~/params/ifSave}',
                            '{COMMAND~/params/successMsg}'
                        ];
                        return _this.invoke(_this._ListDataService1, 'remove', args, context);
                    });
                    this.addTask('refreshAfterRemoving', function (context) {
                        var args = [
                            '{COMMAND~/params/refreshCommandName}',
                            '{COMMAND~/params/refreshCommandFrameId}'
                        ];
                        return _this.invoke(_this._ListDataService1, 'refreshAfterRemoving', args, context);
                    });
                    this.addLink('remove', 'refreshAfterRemoving', "1==1");
                };
                remove1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'remove1'
                    }),
                    __metadata("design:paramtypes", [ListDataService])
                ], remove1Handler);
                return remove1Handler;
            }(CommandHandler));

            var loadCard1Handler = /** @class */ (function (_super) {
                __extends(loadCard1Handler, _super);
                function loadCard1Handler(_CardDataService1) {
                    var _this = _super.call(this) || this;
                    _this._CardDataService1 = _CardDataService1;
                    return _this;
                }
                loadCard1Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('update', function (context) {
                        var args = [];
                        return _this.invoke(_this._CardDataService1, 'update', args, context);
                    });
                };
                loadCard1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'loadCard1'
                    }),
                    __metadata("design:paramtypes", [CardDataService])
                ], loadCard1Handler);
                return loadCard1Handler;
            }(CommandHandler));

            var add1Handler = /** @class */ (function (_super) {
                __extends(add1Handler, _super);
                function add1Handler(_ListDataService1, _StateMachineService1) {
                    var _this = _super.call(this) || this;
                    _this._ListDataService1 = _ListDataService1;
                    _this._StateMachineService1 = _StateMachineService1;
                    return _this;
                }
                add1Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('append', function (context) {
                        var args = [];
                        return _this.invoke(_this._ListDataService1, 'append', args, context);
                    });
                    this.addTask('transit', function (context) {
                        var args = [
                            'Create'
                        ];
                        return _this.invoke(_this._StateMachineService1, 'transit', args, context);
                    });
                    this.addLink('append', 'transit', "1==1");
                };
                add1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'add1'
                    }),
                    __metadata("design:paramtypes", [ListDataService,
                        StateMachineService])
                ], add1Handler);
                return add1Handler;
            }(CommandHandler));

            var changePage1Handler = /** @class */ (function (_super) {
                __extends(changePage1Handler, _super);
                function changePage1Handler(_CommandService1) {
                    var _this = _super.call(this) || this;
                    _this._CommandService1 = _CommandService1;
                    return _this;
                }
                changePage1Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('execute', function (context) {
                        var args = [
                            '{COMMAND~/params/loadCommandName}',
                            '{COMMAND~/params/loadCommandFrameId}'
                        ];
                        return _this.invoke(_this._CommandService1, 'execute', args, context);
                    });
                };
                changePage1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'changePage1'
                    }),
                    __metadata("design:paramtypes", [CommandService])
                ], changePage1Handler);
                return changePage1Handler;
            }(CommandHandler));

            var DataGridComponent = /** @class */ (function (_super) {
                __extends(DataGridComponent, _super);
                function DataGridComponent(wizardSer, keybindingService, langService, route, router, rootElement, localizationService, frmI18nSettingService, focusInvalidService, farrisGridUtils, sanitizer, injector) {
                    var _this = _super.call(this, injector) || this;
                    _this.wizardSer = wizardSer;
                    _this.keybindingService = keybindingService;
                    _this.langService = langService;
                    _this.route = route;
                    _this.router = router;
                    _this.rootElement = rootElement;
                    _this.localizationService = localizationService;
                    _this.frmI18nSettingService = frmI18nSettingService;
                    _this.focusInvalidService = focusInvalidService;
                    _this.farrisGridUtils = farrisGridUtils;
                    _this.sanitizer = sanitizer;
                    _this.injector = injector;
                    _this.dataGridColumns = [];
                    _this.cls = 'f-struct-wrapper  f-utils-fill-flex-column ';
                    _this.lang = "";
                    _this.size = {};
                    _this.enabledLanguageList = [];
                    _this.tabsToolbarStates = new BehaviorSubject({});
                    _this.tabsToolbarVisibleStates = new BehaviorSubject({});
                    _this.SectiondatagridsectionMainTitle = _this.langService.transform('Section/data-grid-section/mainTitle', _this.lang, "");
                    _this.SectiondatagridsectionSubTitle = _this.langService.transform('Section/data-grid-section/subTitle', _this.lang, "");
                    _this.dataGridlineNumberTitle = _this.langService.transform('DataGrid/dataGrid/lineNumberTitle', _this.lang, "");
                    _this.lang = localStorage.getItem('languageCode') || "zh-CHS";
                    _this.viewModel.verifycationChanged.subscribe(function (verifyInformations) {
                        _this.focusInvalidService.focusGridCell(verifyInformations, _this.dataGridDataGrid);
                    });
                    if (_this.frmI18nSettingService) {
                        var i18nSetting = _this.frmI18nSettingService.getSetting();
                        if (i18nSetting && i18nSetting.languages && i18nSetting.languages.length > 0) {
                            i18nSetting.languages.forEach(function (item) {
                                _this.enabledLanguageList.push({
                                    code: item.code,
                                    name: item.name
                                });
                            });
                        }
                        else {
                            console.warn("get current enable languages is null. if this occurs,please ensure the form into the framework.");
                            _this.enabledLanguageList.push({ "code": "en", "name": "English" });
                            _this.enabledLanguageList.push({ "code": "zh-CHS", "name": "????????????" });
                        }
                    }
                    return _this;
                }
                DataGridComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    if (this.keybindingService) {
                        this.viewModel.keybindingMap.forEach(function (keyBinding, method) {
                            _this.keybindingService.register(keyBinding, function () {
                                return _this.viewModel[method]();
                            });
                        });
                    }
                    this.dataGridColumns = [
                        [
                            {
                                id: 'projectCode_034d37e8_rnse',
                                field: 'projectCode',
                                width: 120,
                                title: this.langService.transform('projectCode_034d37e8_rnse', this.lang, "????????????"),
                                dataType: 'string',
                                align: 'left',
                                halign: 'left',
                                valign: 'middle',
                                isMultilingualField: false,
                                sortable: true,
                                footer: {
                                    options: {},
                                },
                                groupFooter: {
                                    options: {},
                                    formatter: { "type": "none" },
                                },
                                readonly: false,
                                visible: true,
                                allowGrouping: true,
                                filter: false,
                                formatter: {}
                            },
                            {
                                id: 'projectName_2693df04_jujs',
                                field: 'projectName',
                                width: 120,
                                title: this.langService.transform('projectName_2693df04_jujs', this.lang, "????????????"),
                                dataType: 'string',
                                align: 'left',
                                halign: 'left',
                                valign: 'middle',
                                isMultilingualField: false,
                                sortable: true,
                                footer: {
                                    options: {},
                                },
                                groupFooter: {
                                    options: {},
                                    formatter: { "type": "none" },
                                },
                                readonly: false,
                                visible: true,
                                allowGrouping: true,
                                filter: false,
                                formatter: {}
                            }
                        ]
                    ];
                    this.viewModel.dataGridColumns = this.dataGridColumns;
                    this.viewModel.dataGridColumnsName = "dataGridColumns";
                    this.onFormLoad();
                };
                DataGridComponent.prototype.ngAfterViewInit = function () {
                };
                DataGridComponent.prototype.handleSizeChange = function (size) {
                    this.size = size;
                };
                DataGridComponent.prototype.onFormLoad = function () {
                    this.viewModel.loadList1();
                };
                __decorate([
                    ViewChild('dataGridDataGrid'),
                    __metadata("design:type", DatagridComponent)
                ], DataGridComponent.prototype, "dataGridDataGrid", void 0);
                __decorate([
                    HostBinding('class'),
                    __metadata("design:type", Object)
                ], DataGridComponent.prototype, "cls", void 0);
                DataGridComponent = __decorate([
                    Component({
                        selector: 'app-datagridcomponent',
                        templateUrl: './datagridcomponent.html',
                        styleUrls: ['./datagridcomponent.scss'],
                        providers: [
                            FARRIS_DEVKIT_FRAME_PROVIDERS,
                            FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS,
                            { provide: FRAME_ID, useValue: 'data-grid-component' },
                            { provide: BindingData, useClass: BindingData },
                            { provide: Repository, useExisting: ProjectsFanwzRepository },
                            LangService,
                            { provide: NAMESPACE, useValue: '' },
                            { provide: ServerSideToken, useClass: BefLookupRestService },
                            { provide: ComboServerSideToken, useClass: DefaultComboHttpService },
                            { provide: GRID_SETTINGS_HTTP, useClass: BefLookupRestService },
                            { provide: Form, useClass: DataGridComponentViewmodelForm },
                            { provide: UIState, useClass: DataGridComponentViewmodelUIState },
                            DIP_DATAIE_SERVICE,
                            { provide: ViewModel, useClass: DataGridComponentViewmodel },
                            { provide: EXCEPTION_HANDLER, useValue: null },
                            { provide: COMMAND_HANDLERS_TOKEN, useClass: loadList1Handler, multi: true },
                            { provide: COMMAND_HANDLERS_TOKEN, useClass: remove1Handler, multi: true },
                            { provide: COMMAND_HANDLERS_TOKEN, useClass: loadCard1Handler, multi: true },
                            { provide: COMMAND_HANDLERS_TOKEN, useClass: add1Handler, multi: true },
                            { provide: COMMAND_HANDLERS_TOKEN, useClass: changePage1Handler, multi: true },
                        ]
                    }),
                    __metadata("design:paramtypes", [WizardService,
                        KeybindingService,
                        LangService,
                        ActivatedRoute,
                        Router,
                        ElementRef,
                        LocalizationService,
                        FrmI18nSettingService,
                        FocusInvalidService,
                        CommonUtils,
                        DomSanitizer,
                        Injector])
                ], DataGridComponent);
                return DataGridComponent;
            }(FrameComponent));

            var ??0$2 = { type: 'string' };
            var DetailFormComponentViewmodel = /** @class */ (function (_super) {
                __extends(DetailFormComponentViewmodel, _super);
                function DetailFormComponentViewmodel() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.bindingPath = '/';
                    _this.dom = {};
                    return _this;
                }
                DetailFormComponentViewmodel.prototype.edit1 = function (commandParam) { return; };
                DetailFormComponentViewmodel.prototype.save1 = function (commandParam) { return; };
                DetailFormComponentViewmodel.prototype.cancel1 = function (commandParam) { return; };
                __decorate([
                    NgCommand({
                        name: 'edit1',
                        params: {
                            id: '{DATA~/detail-form-component/id}',
                            transitionAction: 'Edit'
                        },
                        paramDescriptions: {
                            id: ??0$2,
                            transitionAction: { type: 'string' }
                        }
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], DetailFormComponentViewmodel.prototype, "edit1", null);
                __decorate([
                    NgCommand({
                        name: 'save1',
                        params: {}
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], DetailFormComponentViewmodel.prototype, "save1", null);
                __decorate([
                    NgCommand({
                        name: 'cancel1',
                        params: {}
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], DetailFormComponentViewmodel.prototype, "cancel1", null);
                DetailFormComponentViewmodel = __decorate([
                    Injectable()
                ], DetailFormComponentViewmodel);
                return DetailFormComponentViewmodel;
            }(ViewModel));

            var DetailFormComponentViewmodelForm = /** @class */ (function (_super) {
                __extends(DetailFormComponentViewmodelForm, _super);
                function DetailFormComponentViewmodelForm() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                __decorate([
                    NgFormControl({
                        id: 'projectCode_034d37e8_75r8',
                        name: "{{projectCode_034d37e8_75r8}}",
                        binding: 'projectCode',
                        updateOn: 'blur',
                        defaultI18nValue: '????????????',
                    }),
                    __metadata("design:type", FormControl)
                ], DetailFormComponentViewmodelForm.prototype, "projectCode", void 0);
                __decorate([
                    NgFormControl({
                        id: 'projectName_2693df04_u0od',
                        name: "{{projectName_2693df04_u0od}}",
                        binding: 'projectName',
                        updateOn: 'blur',
                        defaultI18nValue: '????????????',
                    }),
                    __metadata("design:type", FormControl)
                ], DetailFormComponentViewmodelForm.prototype, "projectName", void 0);
                __decorate([
                    NgFormControl({
                        id: 'projectType_47b0d767_7fzm',
                        name: "{{projectType_47b0d767_7fzm}}",
                        binding: 'projectType',
                        updateOn: 'blur',
                        defaultI18nValue: '????????????',
                    }),
                    __metadata("design:type", FormControl)
                ], DetailFormComponentViewmodelForm.prototype, "projectType", void 0);
                __decorate([
                    NgFormControl({
                        id: 'projectNote_60e4aa39_qvd7',
                        name: "{{projectNote_60e4aa39_qvd7}}",
                        binding: 'projectNote',
                        updateOn: 'blur',
                        defaultI18nValue: '????????????',
                    }),
                    __metadata("design:type", FormControl)
                ], DetailFormComponentViewmodelForm.prototype, "projectNote", void 0);
                __decorate([
                    NgFormControl({
                        id: 'projectSum_c8e88808_bpqf',
                        name: "{{projectSum_c8e88808_bpqf}}",
                        binding: 'projectSum',
                        updateOn: 'blur',
                        defaultI18nValue: '????????????',
                    }),
                    __metadata("design:type", FormControl)
                ], DetailFormComponentViewmodelForm.prototype, "projectSum", void 0);
                DetailFormComponentViewmodelForm = __decorate([
                    Injectable(),
                    NgValidateForm({
                        formGroupName: '????????????Fanwz',
                        enableValidate: true
                    }),
                    Injectable()
                ], DetailFormComponentViewmodelForm);
                return DetailFormComponentViewmodelForm;
            }(Form));

            var DetailFormComponentViewmodelUIState = /** @class */ (function (_super) {
                __extends(DetailFormComponentViewmodelUIState, _super);
                function DetailFormComponentViewmodelUIState() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                DetailFormComponentViewmodelUIState = __decorate([
                    Injectable()
                ], DetailFormComponentViewmodelUIState);
                return DetailFormComponentViewmodelUIState;
            }(UIState));

            var edit1Handler = /** @class */ (function (_super) {
                __extends(edit1Handler, _super);
                function edit1Handler(_CardDataService1, _StateMachineService1) {
                    var _this = _super.call(this) || this;
                    _this._CardDataService1 = _CardDataService1;
                    _this._StateMachineService1 = _StateMachineService1;
                    return _this;
                }
                edit1Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('update', function (context) {
                        var args = [];
                        return _this.invoke(_this._CardDataService1, 'update', args, context);
                    });
                    this.addTask('transit', function (context) {
                        var args = [
                            'Edit'
                        ];
                        return _this.invoke(_this._StateMachineService1, 'transit', args, context);
                    });
                    this.addLink('update', 'transit', "1==1");
                };
                edit1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'edit1'
                    }),
                    __metadata("design:paramtypes", [CardDataService,
                        StateMachineService])
                ], edit1Handler);
                return edit1Handler;
            }(CommandHandler));

            var save1Handler = /** @class */ (function (_super) {
                __extends(save1Handler, _super);
                function save1Handler(_EndEditService1, _ValidationService1, _ListDataService1, _CardDataService1, _StateMachineService1) {
                    var _this = _super.call(this) || this;
                    _this._EndEditService1 = _EndEditService1;
                    _this._ValidationService1 = _ValidationService1;
                    _this._ListDataService1 = _ListDataService1;
                    _this._CardDataService1 = _CardDataService1;
                    _this._StateMachineService1 = _StateMachineService1;
                    return _this;
                }
                save1Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('endEdit', function (context) {
                        var args = [];
                        return _this.invoke(_this._EndEditService1, 'endEdit', args, context);
                    });
                    this.addTask('validateCurrentRow', function (context) {
                        var args = [];
                        return _this.invoke(_this._ValidationService1, 'validateCurrentRow', args, context);
                    });
                    this.addTask('save', function (context) {
                        var args = [
                            '{COMMAND~/params/successMsg}'
                        ];
                        return _this.invoke(_this._CardDataService1, 'save', args, context);
                    });
                    this.addTask('refresh', function (context) {
                        var args = [
                            '{COMMAND~/params/loadCmdName}',
                            '{COMMAND~/params/loadCmdFrameId}'
                        ];
                        return _this.invoke(_this._ListDataService1, 'refresh', args, context);
                    });
                    this.addTask('transit', function (context) {
                        var args = [
                            'Save'
                        ];
                        return _this.invoke(_this._StateMachineService1, 'transit', args, context);
                    });
                    this.addTask('resetValidation', function (context) {
                        var args = [];
                        return _this.invoke(_this._ValidationService1, 'resetValidation', args, context);
                    });
                    this.addLink('endEdit', 'validateCurrentRow', "1==1");
                    this.addLink('validateCurrentRow', 'save', "1==1");
                    this.addLink('save', 'refresh', "1==1");
                    this.addLink('refresh', 'transit', "1==1");
                    this.addLink('transit', 'resetValidation', "1==1");
                };
                save1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'save1'
                    }),
                    __metadata("design:paramtypes", [EndEditService,
                        ValidationService,
                        ListDataService,
                        CardDataService,
                        StateMachineService])
                ], save1Handler);
                return save1Handler;
            }(CommandHandler));

            var cancel1Handler = /** @class */ (function (_super) {
                __extends(cancel1Handler, _super);
                function cancel1Handler(_EndEditService1, _ValidationService1, _ListDataService1, _CardDataService1, _StateMachineService1) {
                    var _this = _super.call(this) || this;
                    _this._EndEditService1 = _EndEditService1;
                    _this._ValidationService1 = _ValidationService1;
                    _this._ListDataService1 = _ListDataService1;
                    _this._CardDataService1 = _CardDataService1;
                    _this._StateMachineService1 = _StateMachineService1;
                    return _this;
                }
                cancel1Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('endEdit', function (context) {
                        var args = [];
                        return _this.invoke(_this._EndEditService1, 'endEdit', args, context);
                    });
                    this.addTask('cancel', function (context) {
                        var args = [];
                        return _this.invoke(_this._CardDataService1, 'cancel', args, context);
                    });
                    this.addTask('refresh', function (context) {
                        var args = [
                            '{COMMAND~/params/loadCmdName}',
                            '{COMMAND~/params/loadCmdFrameId}'
                        ];
                        return _this.invoke(_this._ListDataService1, 'refresh', args, context);
                    });
                    this.addTask('transit', function (context) {
                        var args = [
                            'Cancel'
                        ];
                        return _this.invoke(_this._StateMachineService1, 'transit', args, context);
                    });
                    this.addTask('resetValidation', function (context) {
                        var args = [];
                        return _this.invoke(_this._ValidationService1, 'resetValidation', args, context);
                    });
                    this.addLink('endEdit', 'cancel', "1==1");
                    this.addLink('cancel', 'refresh', "1==1");
                    this.addLink('refresh', 'transit', "1==1");
                    this.addLink('transit', 'resetValidation', "1==1");
                };
                cancel1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'cancel1'
                    }),
                    __metadata("design:paramtypes", [EndEditService,
                        ValidationService,
                        ListDataService,
                        CardDataService,
                        StateMachineService])
                ], cancel1Handler);
                return cancel1Handler;
            }(CommandHandler));

            var DetailFormComponent = /** @class */ (function (_super) {
                __extends(DetailFormComponent, _super);
                function DetailFormComponent(wizardSer, keybindingService, langService, route, router, rootElement, localizationService, frmI18nSettingService, focusInvalidService, sanitizer, injector) {
                    var _this = _super.call(this, injector) || this;
                    _this.wizardSer = wizardSer;
                    _this.keybindingService = keybindingService;
                    _this.langService = langService;
                    _this.route = route;
                    _this.router = router;
                    _this.rootElement = rootElement;
                    _this.localizationService = localizationService;
                    _this.frmI18nSettingService = frmI18nSettingService;
                    _this.focusInvalidService = focusInvalidService;
                    _this.sanitizer = sanitizer;
                    _this.injector = injector;
                    _this.cls = 'f-struct-wrapper ';
                    _this.lang = "";
                    _this.size = {};
                    _this.enabledLanguageList = [];
                    _this.tabsToolbarStates = new BehaviorSubject({});
                    _this.tabsToolbarVisibleStates = new BehaviorSubject({});
                    _this.SectiondetailformsectionMainTitle = _this.langService.transform('Section/detail-form-section/mainTitle', _this.lang, "????????????");
                    _this.SectiondetailformsectionSubTitle = _this.langService.transform('Section/detail-form-section/subTitle', _this.lang, "");
                    _this.projectSum_c8e88808_bpqf_PlaceHolder = _this.langService.transform('NumericBox/projectSum_c8e88808_bpqf/placeHolder', _this.lang, "");
                    _this.projectSumC8e88808BpqfTextOptions = {
                        "type": "number",
                        "useThousands": true,
                        "precision": 2,
                    };
                    _this.projectCode_034d37e8_75r8_PlaceHolder = _this.langService.transform('TextBox/projectCode_034d37e8_75r8/placeHolder', _this.lang, "");
                    _this.projectName_2693df04_u0od_PlaceHolder = _this.langService.transform('TextBox/projectName_2693df04_u0od/placeHolder', _this.lang, "");
                    _this.projectType_47b0d767_7fzm_PlaceHolder = _this.langService.transform('TextBox/projectType_47b0d767_7fzm/placeHolder', _this.lang, "");
                    _this.lang = localStorage.getItem('languageCode') || "zh-CHS";
                    _this.viewModel.verifycationChanged.subscribe(function (verifyInformations) {
                        _this.focusInvalidService.focusInvalidInput(verifyInformations, _this.rootElement);
                    });
                    if (_this.frmI18nSettingService) {
                        var i18nSetting = _this.frmI18nSettingService.getSetting();
                        if (i18nSetting && i18nSetting.languages && i18nSetting.languages.length > 0) {
                            i18nSetting.languages.forEach(function (item) {
                                _this.enabledLanguageList.push({
                                    code: item.code,
                                    name: item.name
                                });
                            });
                        }
                        else {
                            console.warn("get current enable languages is null. if this occurs,please ensure the form into the framework.");
                            _this.enabledLanguageList.push({ "code": "en", "name": "English" });
                            _this.enabledLanguageList.push({ "code": "zh-CHS", "name": "????????????" });
                        }
                    }
                    return _this;
                }
                DetailFormComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    if (this.keybindingService) {
                        this.viewModel.keybindingMap.forEach(function (keyBinding, method) {
                            _this.keybindingService.register(keyBinding, function () {
                                return _this.viewModel[method]();
                            });
                        });
                    }
                    this.onFormLoad();
                };
                DetailFormComponent.prototype.ngAfterViewInit = function () {
                };
                DetailFormComponent.prototype.handleSizeChange = function (size) {
                    this.size = size;
                };
                DetailFormComponent.prototype.onFormLoad = function () {
                };
                __decorate([
                    HostBinding('class'),
                    __metadata("design:type", Object)
                ], DetailFormComponent.prototype, "cls", void 0);
                DetailFormComponent = __decorate([
                    Component({
                        selector: 'app-detailformcomponent',
                        templateUrl: './detailformcomponent.html',
                        styleUrls: ['./detailformcomponent.scss'],
                        providers: [
                            FARRIS_DEVKIT_FRAME_PROVIDERS,
                            FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS,
                            { provide: FRAME_ID, useValue: 'detail-form-component' },
                            { provide: BindingData, useClass: BindingData },
                            { provide: Repository, useExisting: ProjectsFanwzRepository },
                            LangService,
                            { provide: NAMESPACE, useValue: '' },
                            { provide: ServerSideToken, useClass: BefLookupRestService },
                            { provide: ComboServerSideToken, useClass: DefaultComboHttpService },
                            { provide: Form, useClass: DetailFormComponentViewmodelForm },
                            { provide: UIState, useClass: DetailFormComponentViewmodelUIState },
                            DIP_DATAIE_SERVICE,
                            { provide: ViewModel, useClass: DetailFormComponentViewmodel },
                            { provide: EXCEPTION_HANDLER, useValue: null },
                            { provide: COMMAND_HANDLERS_TOKEN, useClass: edit1Handler, multi: true },
                            { provide: COMMAND_HANDLERS_TOKEN, useClass: save1Handler, multi: true },
                            { provide: COMMAND_HANDLERS_TOKEN, useClass: cancel1Handler, multi: true },
                        ]
                    }),
                    __metadata("design:paramtypes", [WizardService,
                        KeybindingService,
                        LangService,
                        ActivatedRoute,
                        Router,
                        ElementRef,
                        LocalizationService,
                        FrmI18nSettingService,
                        FocusInvalidService,
                        DomSanitizer,
                        Injector])
                ], DetailFormComponent);
                return DetailFormComponent;
            }(FrameComponent));

            var JitMissingTranslationHandler = /** @class */ (function () {
                function JitMissingTranslationHandler() {
                }
                JitMissingTranslationHandler.prototype.handle = function (params) {
                    return "JitI18nDefaultValue";
                };
                return JitMissingTranslationHandler;
            }());
            var ??0$3 = (createTranslateLoader$1), ??1$2 = localStorage.getItem('languageCode') || 'zh-CHS', ??2$1 = function () { return window.location.protocol + "//" + window.location.hostname + ":" + window.location.port; };
            var ProjectFanwzModule = /** @class */ (function () {
                function ProjectFanwzModule(trans) {
                    this.trans = trans;
                }
                ProjectFanwzModule = __decorate([
                    NgModule({
                        exports: [
                            RootComponent
                        ],
                        bootstrap: [
                            RootComponent
                        ],
                        entryComponents: [
                            RootComponent
                        ],
                        declarations: [
                            LangPipe,
                            SafeHtmlPipe,
                            RootComponent,
                            DataGridComponent,
                            DetailFormComponent
                        ],
                        imports: [
                            CommonModule,
                            FormsModule,
                            ReactiveFormsModule,
                            LayoutModule,
                            KendoBindingModule,
                            FlexLayoutModule,
                            LoadingModule.forRoot(),
                            MessagerModule.forRoot(),
                            NotifyModule.forRoot(),
                            CommandServicesModule,
                            FResponseToolbarModule,
                            FarrisFormsModule,
                            FormMessageModule,
                            TranslateModule.forRoot({
                                loader: {
                                    provide: TranslateLoader,
                                    useFactory: ??0$3,
                                    deps: [HttpClient]
                                },
                                missingTranslationHandler: { provide: MissingTranslationHandler, useClass: JitMissingTranslationHandler }
                            }),
                            VerifyDetailModule,
                            FarrisTooltipModule,
                            GridModule,
                            DateInputsModule,
                            DropDownsModule,
                            ButtonsModule,
                            FarrisTabsModule,
                            FarrisTagModule,
                            FarrisSidebarModule,
                            UploadDialogMoudle,
                            InputsModule,
                            IntlModule,
                            LookupModule,
                            TreeTableModule,
                            FieldGroupModule,
                            FarrisSectionModule,
                            FarrisDatePickerModule,
                            FarrisTimeSpinnerModule,
                            WizardModule,
                            QuerySolutionModule,
                            FarrisButtonModule,
                            ListViewModule,
                            TimePickerModule,
                            AngularDraggableModule,
                            SplitterModule,
                            ListNavModule,
                            TextModule,
                            WFRuntimeModule,
                            MultiSelectModule,
                            InputGroupModule,
                            ComboListModule,
                            CloudPrintModule,
                            DatagridEditorsModule,
                            FarrisHtmlEditorModule,
                            ViewChangeModule,
                            ListFilterModule,
                            SimpleFilterModule,
                            AvatarModule,
                            UiFlowchartModule,
                            CalendarModule,
                            NumberSpinnerModule,
                            ComboLookupModule,
                            ScrollspyModule,
                            LanguageTextboxModule,
                            DynamicControlGroupModule,
                            FileListModule,
                            SwitchModule.forRoot(),
                            FarrisFooterModule,
                            BatchEditDialogModule,
                            DiscussionGroupModule,
                            NavModule,
                            TagsModule,
                            FfileuploadAdaptUnifileModule,
                            DatagridFilterRowModule.forRoot(),
                            DatagridSettingsModule.forRoot(),
                            DatagridModule.forRoot(EditorProviders.slice()),
                            EditorModule.forRoot('/platform/common/web/assets/tinymce/tinymce.min.js'),
                            FrmCommonModule.forRoot(),
                            FEHeaderFooterModule,
                            FEPageModalModule.forRoot(),
                            FeatureEditorModule,
                            FEScrollCollapsibleAreaModule,
                            ProjectFanwzRoutingModule,
                            DataImpExpModule,
                        ],
                        providers: [
                            { provide: LOCALE_ID, useValue: ??1$2 },
                            TranslateResolveService,
                            FARRIS_DEVKIT_APP_PROVIDERS,
                            FrameworkVariableService,
                            FrmI18nSettingService,
                            FileViewerService,
                            { provide: FORM_PATH_TOKEN, useValue: '/apps/fssc/df/web/bo-projectsfanwzfront/projectfanwz/' },
                            { provide: BE_SERVER_URI_TOKEN, useFactory: ??2$1 }
                        ]
                    }),
                    __metadata("design:paramtypes", [TranslateResolveService])
                ], ProjectFanwzModule);
                return ProjectFanwzModule;
            }());
            function createTranslateLoader$1(http) {
                return new TranslateHttpLoader(http, '/apps/fssc/df/web/bo-projectsfanwzfront/projectfanwz/i18n/', '.json');
            }

            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             *
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */ 
            var RouterModuleNgFactory = ??cmf(RouterModule, [], function (_l) { return ??mod([??mpd(512, ComponentFactoryResolver, ??CodegenComponentFactoryResolver, [[8, [??EmptyOutletComponentNgFactory]], [3, ComponentFactoryResolver], NgModuleRef]), ??mpd(1073742336, RouterModule, RouterModule, [[2, ??angular_packages_router_router_a], [2, Router]])]); });
            var styles_??EmptyOutletComponent = [];
            var RenderType_??EmptyOutletComponent = ??crt({ encapsulation: 2, styles: styles_??EmptyOutletComponent, data: {} });
            function View_??EmptyOutletComponent_0(_l) { return ??vid(0, [(_l()(), ??eld(0, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), ??did(1, 212992, null, 0, RouterOutlet, [ChildrenOutletContexts, ViewContainerRef, ComponentFactoryResolver, [8, null], ChangeDetectorRef], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
            function View_??EmptyOutletComponent_Host_0(_l) { return ??vid(0, [(_l()(), ??eld(0, 0, null, null, 1, "ng-component", [], null, null, null, View_??EmptyOutletComponent_0, RenderType_??EmptyOutletComponent)), ??did(1, 49152, null, 0, ??EmptyOutletComponent, [], null, null)], null, null); }
            var ??EmptyOutletComponentNgFactory = ??ccf("ng-component", ??EmptyOutletComponent, View_??EmptyOutletComponent_Host_0, {}, {}, []);

            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var EnumEditorComponent = /** @class */ (function () {
                function EnumEditorComponent(el, render, messagerService, localeSer) {
                    var _a;
                    this.el = el;
                    this.render = render;
                    this.messagerService = messagerService;
                    this.localeSer = localeSer;
                    /**
                     * enum data
                     */
                    this.data = [];
                    this.columns = [];
                    this.textField = 'name';
                    this.valueField = 'value';
                    this.dataChange = new EventEmitter();
                    this.cls = 'd-flex flex-column flex-fill';
                    this.overflow = 'hidden';
                    this.height = '100%';
                    this.showSortBtns = true;
                    this.currentEnumData = null;
                    this.newEnumData = (_a = {},
                        _a[this.textField] = '',
                        _a[this.valueField] = '',
                        _a);
                }
                /**
                 * @param {?} changes
                 * @return {?}
                 */
                EnumEditorComponent.prototype.ngOnChanges = /**
                 * @param {?} changes
                 * @return {?}
                 */
                function (changes) {
                    // console.log(changes);
                };
                /**
                 * @return {?}
                 */
                EnumEditorComponent.prototype.ngOnInit = /**
                 * @return {?}
                 */
                function () {
                };
                /**
                 * @param {?} index
                 * @return {?}
                 */
                EnumEditorComponent.prototype.insertCondition = /**
                 * @param {?} index
                 * @return {?}
                 */
                function (index) {
                    /** @type {?} */
                    var newEnumData = Object.assign({}, this.newEnumData);
                    if (index === 0) {
                        this.data.unshift(newEnumData);
                    }
                    else {
                        this.data.splice(index, 0, newEnumData);
                    }
                    this.changeConditionList();
                };
                /**
                 * @param {?} index
                 * @return {?}
                 */
                EnumEditorComponent.prototype.remove = /**
                 * @param {?} index
                 * @return {?}
                 */
                function (index) {
                    this.data.splice(index, 1);
                    this.changeConditionList();
                    if (this.currentEnumData) {
                        if (index === this.currentEnumData.index) {
                            this.currentEnumData = null;
                        }
                    }
                };
                /**
                 * @return {?}
                 */
                EnumEditorComponent.prototype.onAddFilter = /**
                 * @return {?}
                 */
                function () {
                    this.data = __spread(this.data, [Object.assign({}, this.newEnumData)]);
                    this.changeConditionList();
                };
                /**
                 * @return {?}
                 */
                EnumEditorComponent.prototype.onClear = /**
                 * @return {?}
                 */
                function () {
                    var _this = this;
                    this.messagerService.question(this.localeSer.getValue('enumEditor.message'), (/**
                     * @return {?}
                     */
                    function () {
                        _this.data = [];
                        _this.changeConditionList();
                    }));
                };
                /**
                 * @return {?}
                 */
                EnumEditorComponent.prototype.onMoveTop = /**
                 * @return {?}
                 */
                function () {
                    if (this.currentEnumData) {
                        this.data.unshift(this.currentEnumData.data);
                        this.data.splice(this.currentEnumData.index + 1, 1);
                        this.currentEnumData.index = 0;
                        this.changeConditionList();
                    }
                };
                /**
                 * @return {?}
                 */
                EnumEditorComponent.prototype.onMovePrev = /**
                 * @return {?}
                 */
                function () {
                    var _a;
                    if (this.currentEnumData) {
                        /** @type {?} */
                        var index = this.currentEnumData.index;
                        /** @type {?} */
                        var tempArr = this.data.splice(index, 1);
                        (_a = this.data).splice.apply(_a, __spread([index - 1, 0], tempArr));
                        this.currentEnumData.index = index - 1;
                        this.changeConditionList();
                    }
                };
                /**
                 * @return {?}
                 */
                EnumEditorComponent.prototype.onMoveNext = /**
                 * @return {?}
                 */
                function () {
                    var _a;
                    if (this.currentEnumData) {
                        /** @type {?} */
                        var index = this.currentEnumData.index;
                        /** @type {?} */
                        var tempArr = this.data.splice(index, 1);
                        (_a = this.data).splice.apply(_a, __spread([index + 1, 0], tempArr));
                        this.currentEnumData.index = index + 1;
                        this.changeConditionList();
                    }
                };
                /**
                 * @return {?}
                 */
                EnumEditorComponent.prototype.onMoveBottom = /**
                 * @return {?}
                 */
                function () {
                    if (this.currentEnumData) {
                        this.data.push(this.currentEnumData.data);
                        this.data.splice(this.currentEnumData.index, 1);
                        this.currentEnumData.index = this.data.length - 1;
                        this.changeConditionList();
                    }
                };
                /**
                 * @private
                 * @return {?}
                 */
                EnumEditorComponent.prototype.changeConditionList = /**
                 * @private
                 * @return {?}
                 */
                function () {
                    this.dataChange.next(this.data);
                };
                /**
                 * @param {?} $event
                 * @return {?}
                 */
                EnumEditorComponent.prototype.selected = /**
                 * @param {?} $event
                 * @return {?}
                 */
                function ($event) {
                    // console.log($event);
                    this.currentEnumData = $event;
                };
                /**
                 * @param {?} $event
                 * @return {?}
                 */
                EnumEditorComponent.prototype.isSelected = /**
                 * @param {?} $event
                 * @return {?}
                 */
                function ($event) {
                    if (this.currentEnumData) {
                        return this.currentEnumData.index === $event;
                    }
                    return false;
                };
                EnumEditorComponent.decorators = [
                    { type: Component, args: [{
                                selector: 'farris-enum-editor',
                                template: "<div class=\"table-header \">\r\n    <table class=\"table table-bordered\" style=\"margin-bottom: 0\">\r\n        <colgroup>\r\n            <col style=\"width: 42px\">\r\n            <col style=\"width: 40%\">\r\n            <col>\r\n        </colgroup>\r\n        <thead>\r\n            <tr>\r\n                <th></th>\r\n                <th><b>{{'enumEditor.value'| locale}}</b></th>\r\n                <th><b>{{'enumEditor.name'| locale}}</b></th>\r\n            </tr>\r\n        </thead>\r\n    </table>\r\n</div>\r\n<div class=\"table-body flex-fill\" style=\"overflow: hidden\" #tablebodybox>\r\n    <perfect-scrollbar [config]=\"{}\">\r\n        <table class=\"table table-bordered\">\r\n            <colgroup>\r\n                <col style=\"width: 42px\">\r\n                <col style=\"width: 40%\">\r\n                <col>\r\n            </colgroup>\r\n            <tbody>\r\n                <tr *ngFor=\"let item of data; let index=index;\" (click)=\"selected({'index':index, 'data': item})\" [class.selected]=\"isSelected(index)\" >\r\n                    <td>\r\n                        <button type=\"button\" class=\"btn btn-link\" (click)=\"remove(index)\">\r\n                            <span class=\"f-icon f-icon-close\" style=\"color: red\"></span>\r\n                        </button>\r\n                    </td>\r\n                    <td>\r\n                        <input type=\"text\" style=\"width:100%\" autocomplete=\"off\" placeholder=\"\" class=\"k-textbox\" [(ngModel)]=\"item[valueField]\">\r\n                    </td>\r\n                    <td>\r\n                        <input type=\"text\" style=\"width:100%\" placeholder=\"\" autocomplete=\"off\" class=\"k-textbox\" [(ngModel)]=\"item[textField]\">\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </perfect-scrollbar>\r\n</div>\r\n<div style=\"flex-shrink: 0;\">\r\n<enum-editor-footer\r\n[showSortBtns]=\"showSortBtns\"\r\n(addFilter)=\"onAddFilter()\"\r\n(clearFilter)=\"onClear()\"\r\n(moveTop)=\"onMoveTop()\"\r\n(movePrev)=\"onMovePrev()\"\r\n(moveNext)=\"onMoveNext()\"\r\n(moveBottom)=\"onMoveBottom()\"></enum-editor-footer>\r\n</div>"
                            }] }
                ];
                /** @nocollapse */
                EnumEditorComponent.ctorParameters = function () { return [
                    { type: ElementRef },
                    { type: Renderer2 },
                    { type: MessagerService },
                    { type: LocaleService }
                ]; };
                EnumEditorComponent.propDecorators = {
                    data: [{ type: Input }],
                    columns: [{ type: Input }],
                    textField: [{ type: Input }],
                    valueField: [{ type: Input }],
                    dataChange: [{ type: Output }],
                    tablebodybox: [{ type: ViewChild, args: ['tablebodybox',] }],
                    cls: [{ type: HostBinding, args: ['class',] }],
                    overflow: [{ type: HostBinding, args: ['style.overflow',] }],
                    height: [{ type: HostBinding, args: ['style.height',] }],
                    showSortBtns: [{ type: Input }]
                };
                return EnumEditorComponent;
            }());

            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @enum {number} */
            var EnumOutType = {
                'array': 0,
                'object': 1,
            };
            EnumOutType[EnumOutType['array']] = 'array';
            EnumOutType[EnumOutType['object']] = 'object';
            var EnumEditorService = /** @class */ (function () {
                function EnumEditorService(injector, cfr, modalService, localeService) {
                    this.injector = injector;
                    this.cfr = cfr;
                    this.modalService = modalService;
                    this.localeService = localeService;
                    this.enumEditorRef = null;
                    this.dlgRef = null;
                    this.originalData = [];
                    this.textField = 'name';
                    this.valueField = 'value';
                    this.outType = EnumOutType.array;
                    this.dataChanged = new Subject();
                }
                /**
                 * @param {?=} enumData
                 * @param {?=} options
                 * @return {?}
                 */
                EnumEditorService.prototype.showDialog = /**
                 * @param {?=} enumData
                 * @param {?=} options
                 * @return {?}
                 */
                function (enumData, options) {
                    var _this = this;
                    if (enumData === void 0) { enumData = []; }
                    if (options === void 0) { options = {}; }
                    enumData = this.toJSON(enumData);
                    /** @type {?} */
                    var enumEditorFactory = this.cfr.resolveComponentFactory(EnumEditorComponent);
                    this.enumEditorRef = enumEditorFactory.create(this.injector);
                    this.enumEditorRef.instance.data = enumData;
                    this.originalData = cloneDeep(enumData);
                    this.textField = options['textField'] || 'name';
                    this.valueField = options['valueField'] || 'value';
                    this.outType = options['outType'] || EnumOutType.array;
                    options['showSortBtns'] = this.outType === EnumOutType.array;
                    this.dlgRef = this.modalService.show(this.enumEditorRef, {
                        width: 800, height: 500,
                        title: this.localeService.getValue('enumEditor.title'), enableScroll: false,
                        minHeight: 398, minWidth: 798, iconCls: 'f-icon f-icon-top_developmenttool',
                        buttons: [
                            {
                                text: this.localeService.getValue('enumEditor.cancelButton'),
                                cls: 'btn btn-outline-secondary',
                                handle: (/**
                                 * @return {?}
                                 */
                                function () {
                                    _this.cancel();
                                })
                            },
                            {
                                text: this.localeService.getValue('enumEditor.okButton'),
                                cls: 'btn btn-primary',
                                handle: (/**
                                 * @return {?}
                                 */
                                function () {
                                    _this.save();
                                })
                            }
                        ],
                        initialState: options,
                        dialogFooterStyles: { background: '#F4F6F9' },
                        buttonAlign: 'right',
                        closed: (/**
                         * @param {?} isCloseButtonClick
                         * @return {?}
                         */
                        function (isCloseButtonClick) {
                            if (isCloseButtonClick) {
                                _this.cancel();
                            }
                        })
                    });
                    this.enumEditorRef.instance.height = this.dlgRef.dialog.instance.getContainerSize().height;
                    this.dlgRef.dialog.instance.resized.subscribe((/**
                     * @param {?} size
                     * @return {?}
                     */
                    function (size) {
                        _this.enumEditorRef.instance.height = size.containerHeight;
                    }));
                    this.enumEditorRef.changeDetectorRef.detectChanges();
                    this.dlgRef.dialog.changeDetectorRef.reattach();
                    // this.openDialog.emit();
                };
                /**
                 * @return {?}
                 */
                EnumEditorService.prototype.cancel = /**
                 * @return {?}
                 */
                function () {
                    this._dataChanged(this.originalData);
                    this.dlgRef.close();
                };
                /**
                 * @return {?}
                 */
                EnumEditorService.prototype.save = /**
                 * @return {?}
                 */
                function () {
                    /** @type {?} */
                    var enumData = this.enumEditorRef.instance.data;
                    this._dataChanged(enumData);
                    this.dlgRef.close();
                };
                /**
                 * @private
                 * @param {?} enumData
                 * @return {?}
                 */
                EnumEditorService.prototype._dataChanged = /**
                 * @private
                 * @param {?} enumData
                 * @return {?}
                 */
                function (enumData) {
                    /** @type {?} */
                    var str = this.toString(enumData);
                    this.dataChanged.next(str);
                };
                /**
                 * @param {?} enumData
                 * @return {?}
                 */
                EnumEditorService.prototype.toString = /**
                 * @param {?} enumData
                 * @return {?}
                 */
                function (enumData) {
                    var _this = this;
                    if (enumData && enumData.length) {
                        if (this.outType === EnumOutType.array) {
                            return JSON.stringify(enumData);
                        }
                        else {
                            /** @type {?} */
                            var obj = enumData.reduce((/**
                             * @param {?} r
                             * @param {?} c
                             * @return {?}
                             */
                            function (r, c) {
                                r[c[_this.valueField]] = c[_this.textField];
                                return r;
                            }), {});
                            return JSON.stringify(obj);
                        }
                    }
                    return '';
                };
                /**
                 * @param {?} val
                 * @return {?}
                 */
                EnumEditorService.prototype.toJSON = /**
                 * @param {?} val
                 * @return {?}
                 */
                function (val) {
                    /** @type {?} */
                    var enumData = [];
                    if (val) {
                        if (typeof val === 'string') {
                            try {
                                enumData = JSON.parse(val);
                                if (this.outType === EnumOutType.object) {
                                    enumData = this.convertObject2Array(enumData);
                                }
                            }
                            catch (e) {
                                enumData = [];
                                console.warn(e);
                            }
                        }
                        else {
                            if (Array.isArray(val)) {
                                enumData = val;
                            }
                            else {
                                enumData = this.convertObject2Array(val);
                            }
                        }
                    }
                    return enumData;
                };
                /**
                 * @private
                 * @param {?} obj
                 * @return {?}
                 */
                EnumEditorService.prototype.convertObject2Array = /**
                 * @private
                 * @param {?} obj
                 * @return {?}
                 */
                function (obj) {
                    var _this = this;
                    /** @type {?} */
                    var _enumData = [];
                    Object.keys(obj).forEach((/**
                     * @param {?} n
                     * @return {?}
                     */
                    function (n) {
                        var _a;
                        _enumData.push((_a = {}, _a[_this.valueField] = n, _a[_this.textField] = obj[n], _a));
                    }));
                    return _enumData;
                };
                EnumEditorService.decorators = [
                    { type: Injectable, args: [{
                                providedIn: 'root'
                            },] }
                ];
                /** @nocollapse */
                EnumEditorService.ctorParameters = function () { return [
                    { type: Injector },
                    { type: ComponentFactoryResolver },
                    { type: BsModalService },
                    { type: LocaleService }
                ]; };
                /** @nocollapse */ EnumEditorService.ngInjectableDef = defineInjectable({ factory: function EnumEditorService_Factory() { return new EnumEditorService(inject(INJECTOR), inject(ComponentFactoryResolver), inject(BsModalService), inject(LocaleService)); }, token: EnumEditorService, providedIn: "root" });
                return EnumEditorService;
            }());

            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var EnumEditorFooterComponent = /** @class */ (function () {
                function EnumEditorFooterComponent(grid) {
                    this.grid = grid;
                    this.cls = 'f-filter-footer';
                    this.showSortBtns = true;
                    this.addFilter = new EventEmitter();
                    this.clearFilter = new EventEmitter();
                    this.moveTop = new EventEmitter();
                    this.movePrev = new EventEmitter();
                    this.moveNext = new EventEmitter();
                    this.moveBottom = new EventEmitter();
                }
                /**
                 * @return {?}
                 */
                EnumEditorFooterComponent.prototype.ngOnInit = /**
                 * @return {?}
                 */
                function () { };
                /**
                 * @return {?}
                 */
                EnumEditorFooterComponent.prototype.onAddFilter = /**
                 * @return {?}
                 */
                function () {
                    this.addFilter.emit();
                };
                /**
                 * @return {?}
                 */
                EnumEditorFooterComponent.prototype.onClear = /**
                 * @return {?}
                 */
                function () {
                    this.clearFilter.emit();
                };
                /**
                 * @return {?}
                 */
                EnumEditorFooterComponent.prototype.onMoveTop = /**
                 * @return {?}
                 */
                function () {
                    this.moveTop.emit();
                };
                /**
                 * @return {?}
                 */
                EnumEditorFooterComponent.prototype.onMovePrev = /**
                 * @return {?}
                 */
                function () {
                    this.movePrev.emit();
                };
                /**
                 * @return {?}
                 */
                EnumEditorFooterComponent.prototype.onMoveNext = /**
                 * @return {?}
                 */
                function () {
                    this.moveNext.emit();
                };
                /**
                 * @return {?}
                 */
                EnumEditorFooterComponent.prototype.onMoveBottom = /**
                 * @return {?}
                 */
                function () {
                    this.moveBottom.emit();
                };
                /**
                 * @return {?}
                 */
                EnumEditorFooterComponent.prototype.canUse = /**
                 * @return {?}
                 */
                function () {
                    if (this.grid.currentEnumData) {
                        return this.grid.data.length > 1;
                    }
                    return false;
                };
                /**
                 * @return {?}
                 */
                EnumEditorFooterComponent.prototype.canMoveUp = /**
                 * @return {?}
                 */
                function () {
                    if (this.canUse()) {
                        return this.grid.currentEnumData.index > 0;
                    }
                    return false;
                };
                /**
                 * @return {?}
                 */
                EnumEditorFooterComponent.prototype.canMoveDown = /**
                 * @return {?}
                 */
                function () {
                    if (this.canUse()) {
                        return this.grid.currentEnumData.index < this.grid.data.length - 1;
                    }
                    return false;
                };
                EnumEditorFooterComponent.decorators = [
                    { type: Component, args: [{
                                selector: 'enum-editor-footer',
                                template: "\n    <div class=\"footer-container\">\n        <button type=\"button\" (click)=\"onAddFilter()\"\n            class=\"k-button k-button-icontext k-flat \"><span class=\"k-icon k-i-add\"></span> {{ 'enumEditor.addWhere' | locale }}</button>\n        <button type=\"button\" (click)=\"onClear()\" [disabled]=\"!grid.data.length\"\n            class=\"k-button k-button-icontext k-flat \"><span class=\"k-icon k-i-delete\"></span> {{ 'enumEditor.clear' | locale }}</button>\n        <ng-container *ngIf=\"showSortBtns\">\n            <button type=\"button\" [disabled]=\"!canMoveUp()\" (click)=\"onMoveTop()\"\n            class=\"k-button k-button-icontext k-flat \"><span class=\"k-icon k-i-arrow-end-up\"></span>\n            {{'enumEditor.moveTop' | locale }}</button>\n        <button type=\"button\" [disabled]=\"!canMoveUp()\" (click)=\"onMovePrev()\"\n            class=\"k-button k-button-icontext k-flat \"><span class=\"k-icon k-i-arrow-60-up\"></span>\n            {{'enumEditor.moveUp' | locale }}</button>\n        <button type=\"button\" [disabled]=\"!canMoveDown()\" (click)=\"onMoveNext()\"\n            class=\"k-button k-button-icontext k-flat \"><span class=\"k-icon k-i-arrow-60-down\"></span>\n            {{'enumEditor.moveDown' | locale }}</button>\n        <button type=\"button\" [disabled]=\"!canMoveDown()\" (click)=\"onMoveBottom()\"\n            class=\"k-button k-button-icontext k-flat\"><span class=\"k-icon k-i-arrow-end-down\"></span>\n            {{'enumEditor.moveBottom' | locale }}</button>\n            </ng-container>\n    </div>\n    "
                            }] }
                ];
                /** @nocollapse */
                EnumEditorFooterComponent.ctorParameters = function () { return [
                    { type: EnumEditorComponent }
                ]; };
                EnumEditorFooterComponent.propDecorators = {
                    cls: [{ type: HostBinding, args: ['class',] }],
                    showSortBtns: [{ type: Input }],
                    addFilter: [{ type: Output }],
                    clearFilter: [{ type: Output }],
                    moveTop: [{ type: Output }],
                    movePrev: [{ type: Output }],
                    moveNext: [{ type: Output }],
                    moveBottom: [{ type: Output }]
                };
                return EnumEditorFooterComponent;
            }());

            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var ENUM_EDITOR_VALUE_ACCESSOR = {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef((/**
                 * @return {?}
                 */
                function () { return EnumEditorInputComponent; })),
                multi: true
            };
            var EnumEditorInputComponent = /** @class */ (function (_super) {
                __extends(EnumEditorInputComponent, _super);
                function EnumEditorInputComponent(injector, ees, el) {
                    var _this = _super.call(this, injector, el) || this;
                    _this.injector = injector;
                    _this.ees = ees;
                    _this.el = el;
                    _this.textField = 'name';
                    _this.valueField = 'value';
                    _this.outType = EnumOutType.array;
                    _this.enableClear = true;
                    _this.valueChange = new EventEmitter();
                    _this.groupIcon = '<i class="f-icon f-icon-lookup"></i>';
                    _this.ees.dataChanged.subscribe((/**
                     * @param {?} str
                     * @return {?}
                     */
                    function (str) {
                        _this.updateData(str);
                    }));
                    return _this;
                }
                /**
                 * @private
                 * @param {?} str
                 * @return {?}
                 */
                EnumEditorInputComponent.prototype.updateData = /**
                 * @private
                 * @param {?} str
                 * @return {?}
                 */
                function (str) {
                    this.value = str;
                    this.valueChange.emit(str);
                    this.onModelChange(str);
                    this.onModelTouched(str);
                };
                /**
                 * @return {?}
                 */
                EnumEditorInputComponent.prototype.ngOnInit = /**
                 * @return {?}
                 */
                function () { };
                /**
                 * @return {?}
                 */
                EnumEditorInputComponent.prototype.showDialog = /**
                 * @return {?}
                 */
                function () {
                    /** @type {?} */
                    var enumData = this.convertValue2JSON();
                    this.ees.showDialog(enumData, {
                        textField: this.textField,
                        valueField: this.valueField,
                        outType: this.outType
                    });
                };
                /**
                 * @param {?} $event
                 * @return {?}
                 */
                EnumEditorInputComponent.prototype.onClear = /**
                 * @param {?} $event
                 * @return {?}
                 */
                function ($event) {
                    this.updateData('');
                };
                /**
                 * @param {?} val
                 * @return {?}
                 */
                EnumEditorInputComponent.prototype.writeValue = /**
                 * @param {?} val
                 * @return {?}
                 */
                function (val) {
                    if (val && typeof val === 'object') {
                        this.value = JSON.stringify(val);
                    }
                    else {
                        this.value = val || '';
                    }
                };
                /**
                 * @private
                 * @return {?}
                 */
                EnumEditorInputComponent.prototype.convertValue2JSON = /**
                 * @private
                 * @return {?}
                 */
                function () {
                    return this.ees.toJSON(this.value);
                };
                EnumEditorInputComponent.decorators = [
                    { type: Component, args: [{
                                selector: 'enum-editor-input',
                                template: "\n    <input-group #ig style=\"width: 100%\"\n        [groupText]=\"groupIcon\"\n        (clear)=\"onClear($event)\"\n        (clickHandle)=\"showDialog()\"\n        [readonly] = \"readonly\"\n        [editable] = \"editable\"\n        [enableClear] = \"enableClear\"\n        [(value)]=\"value\">\n    </input-group>\n    ",
                                providers: [
                                    ENUM_EDITOR_VALUE_ACCESSOR,
                                    EnumEditorService
                                ]
                            }] }
                ];
                /** @nocollapse */
                EnumEditorInputComponent.ctorParameters = function () { return [
                    { type: Injector },
                    { type: EnumEditorService },
                    { type: ElementRef }
                ]; };
                EnumEditorInputComponent.propDecorators = {
                    value: [{ type: Input }],
                    textField: [{ type: Input }],
                    valueField: [{ type: Input }],
                    outType: [{ type: Input }],
                    enableClear: [{ type: Input }],
                    valueChange: [{ type: Output }],
                    inputGroupRef: [{ type: ViewChild, args: ['ig',] }]
                };
                return EnumEditorInputComponent;
            }(LookupComponent));

            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var EnumEditorModule = /** @class */ (function () {
                function EnumEditorModule() {
                }
                /**
                 * @return {?}
                 */
                EnumEditorModule.forRoot = /**
                 * @return {?}
                 */
                function () {
                    return {
                        ngModule: EnumEditorModule,
                        providers: [
                            EnumEditorService
                        ]
                    };
                };
                EnumEditorModule.decorators = [
                    { type: NgModule, args: [{
                                declarations: [
                                    EnumEditorComponent,
                                    EnumEditorInputComponent,
                                    EnumEditorFooterComponent
                                ],
                                imports: [
                                    CommonModule,
                                    FormsModule,
                                    InputGroupModule,
                                    FarrisCommonModule,
                                    MessagerModule.forRoot(),
                                    PerfectScrollbarModule,
                                    LookupModule,
                                    LocaleModule
                                ],
                                entryComponents: [
                                    EnumEditorComponent
                                ],
                                exports: [EnumEditorComponent, EnumEditorInputComponent]
                            },] }
                ];
                return EnumEditorModule;
            }());

            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             *
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */ 
            var EnumEditorModuleNgFactory = ??cmf(EnumEditorModule, [], function (_l) { return ??mod([??mpd(512, ComponentFactoryResolver, ??CodegenComponentFactoryResolver, [[8, [PopoverContainerComponentNgFactory, ModalBackdropComponentNgFactory, ModalContainerComponentNgFactory, MessagerComponentNgFactory, NotifyContainerComponentNgFactory, LoadingComponentNgFactory, FarrisContextMenuComponentNgFactory, DataTableComponentNgFactory, TreeTableComponentNgFactory, LookupLeftComponentNgFactory, LookupTabsComponentNgFactory, EnumEditorComponentNgFactory]], [3, ComponentFactoryResolver], NgModuleRef]), ??mpd(4608, NgLocalization, NgLocaleLocalization, [LOCALE_ID, [2, ??angular_packages_common_common_a]]), ??mpd(4608, ??angular_packages_forms_forms_j, ??angular_packages_forms_forms_j, []), ??mpd(4608, PopoverConfig, PopoverConfig, []), ??mpd(4608, PositioningService, PositioningService, [RendererFactory2, PLATFORM_ID]), ??mpd(4608, ComponentLoaderFactory, ComponentLoaderFactory, [ComponentFactoryResolver, NgZone, Injector, PositioningService, ApplicationRef]), ??mpd(4608, CommonUtils, CommonUtils, []), ??mpd(4608, RuntimeStateService, RuntimeStateService, [CommonUtils]), ??mpd(4608, IdService, IdService, []), ??mpd(4608, LocaleService, LocaleService, [LOCALE_ID, CommonUtils, [2, FARRIS_LOCAL_CUSTOM_DATA]]), ??mpd(4608, BsModalService, BsModalService, [RendererFactory2, ComponentLoaderFactory, NgZone]), ??mpd(4608, NotifyService, NotifyService, [ComponentFactoryResolver, Injector, ApplicationRef]), ??mpd(4608, PaginationService, PaginationService, []), ??mpd(4608, DateTimeHelperService, DateTimeHelperService, []), ??mpd(4608, NumberHelperService, NumberHelperService, []), ??mpd(4608, ColumnFormatService, ColumnFormatService, [DateTimeHelperService, NumberHelperService]), ??mpd(4608, FarrisContextMenuService, FarrisContextMenuService, [ComponentFactoryResolver, Injector]), ??mpd(4608, TreetableService, TreetableService, []), ??mpd(4608, ResizeService, ResizeService, []), ??mpd(4608, TTHotkeys, TTHotkeys, [EventManager]), ??mpd(4608, DialogService, DialogService, []), ??mpd(4608, MessagerService, MessagerService, [BsModalService, Injector]), ??mpd(4608, LoadingService, LoadingService, [ApplicationRef, ComponentFactoryResolver, Injector]), ??mpd(1073742336, CommonModule, CommonModule, []), ??mpd(1073742336, ??angular_packages_forms_forms_bc, ??angular_packages_forms_forms_bc, []), ??mpd(1073742336, FormsModule, FormsModule, []), ??mpd(1073742336, PopoverModule, PopoverModule, []), ??mpd(1073742336, FarrisCommonModule, FarrisCommonModule, []), ??mpd(1073742336, InputGroupModule, InputGroupModule, []), ??mpd(1073742336, LocaleModule, LocaleModule, []), ??mpd(1073742336, PerfectScrollbarModule, PerfectScrollbarModule, []), ??mpd(1073742336, AngularDraggableModule, AngularDraggableModule, []), ??mpd(1073742336, FAreaResponseModule, FAreaResponseModule, []), ??mpd(1073742336, ModalModule, ModalModule, []), ??mpd(1073742336, MessagerModule, MessagerModule, []), ??mpd(1073742336, FarrisDialogModule, FarrisDialogModule, []), ??mpd(1073742336, NotifyModule, NotifyModule, []), ??mpd(1073742336, LoadingModule, LoadingModule, []), ??mpd(1073742336, LayoutModule$1, LayoutModule$1, []), ??mpd(1073742336, PaginationModule, PaginationModule, []), ??mpd(1073742336, DateHelperModule, DateHelperModule, []), ??mpd(1073742336, NumberHelperModule, NumberHelperModule, []), ??mpd(1073742336, DataColumnModule, DataColumnModule, []), ??mpd(1073742336, DataTableModule, DataTableModule, []), ??mpd(1073742336, FarrisContextMenuModule, FarrisContextMenuModule, []), ??mpd(1073742336, TreeTableModule, TreeTableModule, []), ??mpd(1073742336, LookupModule, LookupModule, []), ??mpd(1073742336, EnumEditorModule, EnumEditorModule, []), ??mpd(256, FARRIS_LOCAL_CUSTOM_DATA, {}, []), ??mpd(256, MESSAGER_DEFAULT_CONFIG, MessagerDefaultConfig, []), ??mpd(256, LOADING_DEFAULT_CONFIG, { delay: 1000 }, [])]); });
            var styles_EnumEditorComponent = [];
            var RenderType_EnumEditorComponent = ??crt({ encapsulation: 2, styles: styles_EnumEditorComponent, data: {} });
            function View_EnumEditorComponent_1(_l) { return ??vid(0, [(_l()(), ??eld(0, 0, null, null, 17, "tr", [], [[2, "selected", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
                    var pd_0 = (_co.selected({ "index": _v.context.index, "data": _v.context.$implicit }) !== false);
                    ad = (pd_0 && ad);
                } return ad; }, null, null)), (_l()(), ??eld(1, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), ??eld(2, 0, null, null, 1, "button", [["class", "btn btn-link"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
                    var pd_0 = (_co.remove(_v.context.index) !== false);
                    ad = (pd_0 && ad);
                } return ad; }, null, null)), (_l()(), ??eld(3, 0, null, null, 0, "span", [["class", "f-icon f-icon-close"], ["style", "color: red"]], null, null, null, null, null)), (_l()(), ??eld(4, 0, null, null, 6, "td", [], null, null, null, null, null)), (_l()(), ??eld(5, 0, null, null, 5, "input", [["autocomplete", "off"], ["class", "k-textbox"], ["placeholder", ""], ["style", "width:100%"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
                    var pd_0 = (??nov(_v, 6)._handleInput($event.target.value) !== false);
                    ad = (pd_0 && ad);
                } if (("blur" === en)) {
                    var pd_1 = (??nov(_v, 6).onTouched() !== false);
                    ad = (pd_1 && ad);
                } if (("compositionstart" === en)) {
                    var pd_2 = (??nov(_v, 6)._compositionStart() !== false);
                    ad = (pd_2 && ad);
                } if (("compositionend" === en)) {
                    var pd_3 = (??nov(_v, 6)._compositionEnd($event.target.value) !== false);
                    ad = (pd_3 && ad);
                } if (("ngModelChange" === en)) {
                    var pd_4 = ((_v.context.$implicit[_co.valueField] = $event) !== false);
                    ad = (pd_4 && ad);
                } return ad; }, null, null)), ??did(6, 16384, null, 0, DefaultValueAccessor, [Renderer2, ElementRef, [2, COMPOSITION_BUFFER_MODE]], null, null), ??prd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [DefaultValueAccessor]), ??did(8, 671744, null, 0, NgModel, [[8, null], [8, null], [8, null], [6, NG_VALUE_ACCESSOR]], { model: [0, "model"] }, { update: "ngModelChange" }), ??prd(2048, null, NgControl, null, [NgModel]), ??did(10, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null), (_l()(), ??eld(11, 0, null, null, 6, "td", [], null, null, null, null, null)), (_l()(), ??eld(12, 0, null, null, 5, "input", [["autocomplete", "off"], ["class", "k-textbox"], ["placeholder", ""], ["style", "width:100%"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
                    var pd_0 = (??nov(_v, 13)._handleInput($event.target.value) !== false);
                    ad = (pd_0 && ad);
                } if (("blur" === en)) {
                    var pd_1 = (??nov(_v, 13).onTouched() !== false);
                    ad = (pd_1 && ad);
                } if (("compositionstart" === en)) {
                    var pd_2 = (??nov(_v, 13)._compositionStart() !== false);
                    ad = (pd_2 && ad);
                } if (("compositionend" === en)) {
                    var pd_3 = (??nov(_v, 13)._compositionEnd($event.target.value) !== false);
                    ad = (pd_3 && ad);
                } if (("ngModelChange" === en)) {
                    var pd_4 = ((_v.context.$implicit[_co.textField] = $event) !== false);
                    ad = (pd_4 && ad);
                } return ad; }, null, null)), ??did(13, 16384, null, 0, DefaultValueAccessor, [Renderer2, ElementRef, [2, COMPOSITION_BUFFER_MODE]], null, null), ??prd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [DefaultValueAccessor]), ??did(15, 671744, null, 0, NgModel, [[8, null], [8, null], [8, null], [6, NG_VALUE_ACCESSOR]], { model: [0, "model"] }, { update: "ngModelChange" }), ??prd(2048, null, NgControl, null, [NgModel]), ??did(17, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null)], function (_ck, _v) { var _co = _v.component; var currVal_8 = _v.context.$implicit[_co.valueField]; _ck(_v, 8, 0, currVal_8); var currVal_16 = _v.context.$implicit[_co.textField]; _ck(_v, 15, 0, currVal_16); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.isSelected(_v.context.index); _ck(_v, 0, 0, currVal_0); var currVal_1 = ??nov(_v, 10).ngClassUntouched; var currVal_2 = ??nov(_v, 10).ngClassTouched; var currVal_3 = ??nov(_v, 10).ngClassPristine; var currVal_4 = ??nov(_v, 10).ngClassDirty; var currVal_5 = ??nov(_v, 10).ngClassValid; var currVal_6 = ??nov(_v, 10).ngClassInvalid; var currVal_7 = ??nov(_v, 10).ngClassPending; _ck(_v, 5, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); var currVal_9 = ??nov(_v, 17).ngClassUntouched; var currVal_10 = ??nov(_v, 17).ngClassTouched; var currVal_11 = ??nov(_v, 17).ngClassPristine; var currVal_12 = ??nov(_v, 17).ngClassDirty; var currVal_13 = ??nov(_v, 17).ngClassValid; var currVal_14 = ??nov(_v, 17).ngClassInvalid; var currVal_15 = ??nov(_v, 17).ngClassPending; _ck(_v, 12, 0, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15); }); }
            function View_EnumEditorComponent_0(_l) { return ??vid(0, [??pid(0, FarrisLocalePipe, [LocaleService]), ??qud(402653184, 1, { tablebodybox: 0 }), (_l()(), ??eld(2, 0, null, null, 16, "div", [["class", "table-header "]], null, null, null, null, null)), (_l()(), ??eld(3, 0, null, null, 15, "table", [["class", "table table-bordered"], ["style", "margin-bottom: 0"]], null, null, null, null, null)), (_l()(), ??eld(4, 0, null, null, 3, "colgroup", [], null, null, null, null, null)), (_l()(), ??eld(5, 0, null, null, 0, "col", [["style", "width: 42px"]], null, null, null, null, null)), (_l()(), ??eld(6, 0, null, null, 0, "col", [["style", "width: 40%"]], null, null, null, null, null)), (_l()(), ??eld(7, 0, null, null, 0, "col", [], null, null, null, null, null)), (_l()(), ??eld(8, 0, null, null, 10, "thead", [], null, null, null, null, null)), (_l()(), ??eld(9, 0, null, null, 9, "tr", [], null, null, null, null, null)), (_l()(), ??eld(10, 0, null, null, 0, "th", [], null, null, null, null, null)), (_l()(), ??eld(11, 0, null, null, 3, "th", [], null, null, null, null, null)), (_l()(), ??eld(12, 0, null, null, 2, "b", [], null, null, null, null, null)), (_l()(), ??ted(13, null, ["", ""])), ??ppd(14, 1), (_l()(), ??eld(15, 0, null, null, 3, "th", [], null, null, null, null, null)), (_l()(), ??eld(16, 0, null, null, 2, "b", [], null, null, null, null, null)), (_l()(), ??ted(17, null, ["", ""])), ??ppd(18, 1), (_l()(), ??eld(19, 0, [[1, 0], ["tablebodybox", 1]], null, 10, "div", [["class", "table-body flex-fill"], ["style", "overflow: hidden"]], null, null, null, null, null)), (_l()(), ??eld(20, 0, null, null, 9, "perfect-scrollbar", [], [[2, "ps-show-limits", null], [2, "ps-show-active", null]], null, null, View_PerfectScrollbarComponent_0, RenderType_PerfectScrollbarComponent)), ??did(21, 507904, null, 0, PerfectScrollbarComponent, [NgZone, ChangeDetectorRef, PLATFORM_ID], { config: [0, "config"] }, null), (_l()(), ??eld(22, 0, null, 0, 7, "table", [["class", "table table-bordered"]], null, null, null, null, null)), (_l()(), ??eld(23, 0, null, null, 3, "colgroup", [], null, null, null, null, null)), (_l()(), ??eld(24, 0, null, null, 0, "col", [["style", "width: 42px"]], null, null, null, null, null)), (_l()(), ??eld(25, 0, null, null, 0, "col", [["style", "width: 40%"]], null, null, null, null, null)), (_l()(), ??eld(26, 0, null, null, 0, "col", [], null, null, null, null, null)), (_l()(), ??eld(27, 0, null, null, 2, "tbody", [], null, null, null, null, null)), (_l()(), ??and(16777216, null, null, 1, null, View_EnumEditorComponent_1)), ??did(29, 278528, null, 0, NgForOf, [ViewContainerRef, TemplateRef, IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), ??eld(30, 0, null, null, 2, "div", [["style", "flex-shrink: 0;"]], null, null, null, null, null)), (_l()(), ??eld(31, 0, null, null, 1, "enum-editor-footer", [], [[8, "className", 0]], [[null, "addFilter"], [null, "clearFilter"], [null, "moveTop"], [null, "movePrev"], [null, "moveNext"], [null, "moveBottom"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("addFilter" === en)) {
                    var pd_0 = (_co.onAddFilter() !== false);
                    ad = (pd_0 && ad);
                } if (("clearFilter" === en)) {
                    var pd_1 = (_co.onClear() !== false);
                    ad = (pd_1 && ad);
                } if (("moveTop" === en)) {
                    var pd_2 = (_co.onMoveTop() !== false);
                    ad = (pd_2 && ad);
                } if (("movePrev" === en)) {
                    var pd_3 = (_co.onMovePrev() !== false);
                    ad = (pd_3 && ad);
                } if (("moveNext" === en)) {
                    var pd_4 = (_co.onMoveNext() !== false);
                    ad = (pd_4 && ad);
                } if (("moveBottom" === en)) {
                    var pd_5 = (_co.onMoveBottom() !== false);
                    ad = (pd_5 && ad);
                } return ad; }, View_EnumEditorFooterComponent_0, RenderType_EnumEditorFooterComponent)), ??did(32, 114688, null, 0, EnumEditorFooterComponent, [EnumEditorComponent], { showSortBtns: [0, "showSortBtns"] }, { addFilter: "addFilter", clearFilter: "clearFilter", moveTop: "moveTop", movePrev: "movePrev", moveNext: "moveNext", moveBottom: "moveBottom" })], function (_ck, _v) { var _co = _v.component; var currVal_4 = ??EMPTY_MAP; _ck(_v, 21, 0, currVal_4); var currVal_5 = _co.data; _ck(_v, 29, 0, currVal_5); var currVal_7 = _co.showSortBtns; _ck(_v, 32, 0, currVal_7); }, function (_ck, _v) { var currVal_0 = ??unv(_v, 13, 0, _ck(_v, 14, 0, ??nov(_v, 0), "enumEditor.value")); _ck(_v, 13, 0, currVal_0); var currVal_1 = ??unv(_v, 17, 0, _ck(_v, 18, 0, ??nov(_v, 0), "enumEditor.name")); _ck(_v, 17, 0, currVal_1); var currVal_2 = ??nov(_v, 21).autoPropagation; var currVal_3 = ??nov(_v, 21).scrollIndicators; _ck(_v, 20, 0, currVal_2, currVal_3); var currVal_6 = ??nov(_v, 32).cls; _ck(_v, 31, 0, currVal_6); }); }
            function View_EnumEditorComponent_Host_0(_l) { return ??vid(0, [(_l()(), ??eld(0, 0, null, null, 1, "farris-enum-editor", [], [[8, "className", 0], [4, "overflow", null], [4, "height", null]], null, null, View_EnumEditorComponent_0, RenderType_EnumEditorComponent)), ??did(1, 638976, null, 0, EnumEditorComponent, [ElementRef, Renderer2, MessagerService, LocaleService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, function (_ck, _v) { var currVal_0 = ??nov(_v, 1).cls; var currVal_1 = ??nov(_v, 1).overflow; var currVal_2 = ??nov(_v, 1).height; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); }); }
            var EnumEditorComponentNgFactory = ??ccf("farris-enum-editor", EnumEditorComponent, View_EnumEditorComponent_Host_0, { data: "data", columns: "columns", textField: "textField", valueField: "valueField", showSortBtns: "showSortBtns" }, { dataChange: "dataChange" }, []);
            var styles_EnumEditorFooterComponent = [];
            var RenderType_EnumEditorFooterComponent = ??crt({ encapsulation: 2, styles: styles_EnumEditorFooterComponent, data: {} });
            function View_EnumEditorFooterComponent_1(_l) { return ??vid(0, [(_l()(), ??eld(0, 0, null, null, 16, null, null, null, null, null, null, null)), (_l()(), ??eld(1, 0, null, null, 3, "button", [["class", "k-button k-button-icontext k-flat "], ["type", "button"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
                    var pd_0 = (_co.onMoveTop() !== false);
                    ad = (pd_0 && ad);
                } return ad; }, null, null)), (_l()(), ??eld(2, 0, null, null, 0, "span", [["class", "k-icon k-i-arrow-end-up"]], null, null, null, null, null)), (_l()(), ??ted(3, null, [" ", ""])), ??ppd(4, 1), (_l()(), ??eld(5, 0, null, null, 3, "button", [["class", "k-button k-button-icontext k-flat "], ["type", "button"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
                    var pd_0 = (_co.onMovePrev() !== false);
                    ad = (pd_0 && ad);
                } return ad; }, null, null)), (_l()(), ??eld(6, 0, null, null, 0, "span", [["class", "k-icon k-i-arrow-60-up"]], null, null, null, null, null)), (_l()(), ??ted(7, null, [" ", ""])), ??ppd(8, 1), (_l()(), ??eld(9, 0, null, null, 3, "button", [["class", "k-button k-button-icontext k-flat "], ["type", "button"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
                    var pd_0 = (_co.onMoveNext() !== false);
                    ad = (pd_0 && ad);
                } return ad; }, null, null)), (_l()(), ??eld(10, 0, null, null, 0, "span", [["class", "k-icon k-i-arrow-60-down"]], null, null, null, null, null)), (_l()(), ??ted(11, null, [" ", ""])), ??ppd(12, 1), (_l()(), ??eld(13, 0, null, null, 3, "button", [["class", "k-button k-button-icontext k-flat"], ["type", "button"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
                    var pd_0 = (_co.onMoveBottom() !== false);
                    ad = (pd_0 && ad);
                } return ad; }, null, null)), (_l()(), ??eld(14, 0, null, null, 0, "span", [["class", "k-icon k-i-arrow-end-down"]], null, null, null, null, null)), (_l()(), ??ted(15, null, [" ", ""])), ??ppd(16, 1)], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.canMoveUp(); _ck(_v, 1, 0, currVal_0); var currVal_1 = ??unv(_v, 3, 0, _ck(_v, 4, 0, ??nov(_v.parent, 0), "enumEditor.moveTop")); _ck(_v, 3, 0, currVal_1); var currVal_2 = !_co.canMoveUp(); _ck(_v, 5, 0, currVal_2); var currVal_3 = ??unv(_v, 7, 0, _ck(_v, 8, 0, ??nov(_v.parent, 0), "enumEditor.moveUp")); _ck(_v, 7, 0, currVal_3); var currVal_4 = !_co.canMoveDown(); _ck(_v, 9, 0, currVal_4); var currVal_5 = ??unv(_v, 11, 0, _ck(_v, 12, 0, ??nov(_v.parent, 0), "enumEditor.moveDown")); _ck(_v, 11, 0, currVal_5); var currVal_6 = !_co.canMoveDown(); _ck(_v, 13, 0, currVal_6); var currVal_7 = ??unv(_v, 15, 0, _ck(_v, 16, 0, ??nov(_v.parent, 0), "enumEditor.moveBottom")); _ck(_v, 15, 0, currVal_7); }); }
            function View_EnumEditorFooterComponent_0(_l) { return ??vid(0, [??pid(0, FarrisLocalePipe, [LocaleService]), (_l()(), ??eld(1, 0, null, null, 10, "div", [["class", "footer-container"]], null, null, null, null, null)), (_l()(), ??eld(2, 0, null, null, 3, "button", [["class", "k-button k-button-icontext k-flat "], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
                    var pd_0 = (_co.onAddFilter() !== false);
                    ad = (pd_0 && ad);
                } return ad; }, null, null)), (_l()(), ??eld(3, 0, null, null, 0, "span", [["class", "k-icon k-i-add"]], null, null, null, null, null)), (_l()(), ??ted(4, null, [" ", ""])), ??ppd(5, 1), (_l()(), ??eld(6, 0, null, null, 3, "button", [["class", "k-button k-button-icontext k-flat "], ["type", "button"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
                    var pd_0 = (_co.onClear() !== false);
                    ad = (pd_0 && ad);
                } return ad; }, null, null)), (_l()(), ??eld(7, 0, null, null, 0, "span", [["class", "k-icon k-i-delete"]], null, null, null, null, null)), (_l()(), ??ted(8, null, [" ", ""])), ??ppd(9, 1), (_l()(), ??and(16777216, null, null, 1, null, View_EnumEditorFooterComponent_1)), ??did(11, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_3 = _co.showSortBtns; _ck(_v, 11, 0, currVal_3); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = ??unv(_v, 4, 0, _ck(_v, 5, 0, ??nov(_v, 0), "enumEditor.addWhere")); _ck(_v, 4, 0, currVal_0); var currVal_1 = !_co.grid.data.length; _ck(_v, 6, 0, currVal_1); var currVal_2 = ??unv(_v, 8, 0, _ck(_v, 9, 0, ??nov(_v, 0), "enumEditor.clear")); _ck(_v, 8, 0, currVal_2); }); }
            function View_EnumEditorFooterComponent_Host_0(_l) { return ??vid(0, [(_l()(), ??eld(0, 0, null, null, 1, "enum-editor-footer", [], [[8, "className", 0]], null, null, View_EnumEditorFooterComponent_0, RenderType_EnumEditorFooterComponent)), ??did(1, 114688, null, 0, EnumEditorFooterComponent, [EnumEditorComponent], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, function (_ck, _v) { var currVal_0 = ??nov(_v, 1).cls; _ck(_v, 0, 0, currVal_0); }); }
            var EnumEditorFooterComponentNgFactory = ??ccf("enum-editor-footer", EnumEditorFooterComponent, View_EnumEditorFooterComponent_Host_0, { showSortBtns: "showSortBtns" }, { addFilter: "addFilter", clearFilter: "clearFilter", moveTop: "moveTop", movePrev: "movePrev", moveNext: "moveNext", moveBottom: "moveBottom" }, []);
            var styles_EnumEditorInputComponent = [];
            var RenderType_EnumEditorInputComponent = ??crt({ encapsulation: 2, styles: styles_EnumEditorInputComponent, data: {} });
            function View_EnumEditorInputComponent_0(_l) { return ??vid(0, [??qud(402653184, 1, { content: 0 }), ??qud(402653184, 2, { inputGroupRef: 0 }), (_l()(), ??eld(2, 0, null, null, 2, "input-group", [["style", "width: 100%"]], [[2, "f-cmp-inputgroup", null]], [[null, "clear"], [null, "clickHandle"], [null, "valueChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("clear" === en)) {
                    var pd_0 = (_co.onClear($event) !== false);
                    ad = (pd_0 && ad);
                } if (("clickHandle" === en)) {
                    var pd_1 = (_co.showDialog() !== false);
                    ad = (pd_1 && ad);
                } if (("valueChange" === en)) {
                    var pd_2 = ((_co.value = $event) !== false);
                    ad = (pd_2 && ad);
                } return ad; }, View_InputGroupComponent_0, RenderType_InputGroupComponent)), ??prd(5120, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [InputGroupComponent]), ??did(4, 4833280, [[2, 4], ["ig", 4]], 0, InputGroupComponent, [ElementRef, Renderer2, NgZone, Injector], { value: [0, "value"], readonly: [1, "readonly"], editable: [2, "editable"], enableClear: [3, "enableClear"], groupText: [4, "groupText"] }, { clear: "clear", valueChange: "valueChange", clickHandle: "clickHandle" })], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.value; var currVal_2 = _co.readonly; var currVal_3 = _co.editable; var currVal_4 = _co.enableClear; var currVal_5 = _co.groupIcon; _ck(_v, 4, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5); }, function (_ck, _v) { var currVal_0 = ??nov(_v, 4).autocomplete; _ck(_v, 2, 0, currVal_0); }); }
            function View_EnumEditorInputComponent_Host_0(_l) { return ??vid(0, [(_l()(), ??eld(0, 0, null, null, 3, "enum-editor-input", [], [[8, "className", 0]], null, null, View_EnumEditorInputComponent_0, RenderType_EnumEditorInputComponent)), ??prd(5120, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [EnumEditorInputComponent]), ??prd(512, null, EnumEditorService, EnumEditorService, [Injector, ComponentFactoryResolver, BsModalService, LocaleService]), ??did(3, 8634368, null, 0, EnumEditorInputComponent, [Injector, EnumEditorService, ElementRef], null, null)], function (_ck, _v) { _ck(_v, 3, 0); }, function (_ck, _v) { var currVal_0 = ??nov(_v, 3).hostCls; _ck(_v, 0, 0, currVal_0); }); }
            var EnumEditorInputComponentNgFactory = ??ccf("enum-editor-input", EnumEditorInputComponent, View_EnumEditorInputComponent_Host_0, { dialogWidth: "dialogWidth", dialogHeight: "dialogHeight", title: "title", buttonAlign: "buttonAlign", buttonsRef: "buttonsRef", showButtons: "showButtons", showCloseButton: "showCloseButton", showMaxButton: "showMaxButton", resizable: "resizable", draggable: "draggable", disabled: "disabled", editable: "editable", readonly: "readonly", mapFields: "mapFields", valueField: "valueField", textField: "textField", displayText: "displayText", context: "context", beforeOpen: "beforeOpen", beforeClose: "beforeClose", dictPicking: "dictPicking", dictPicked: "dictPicked", value: "value", outType: "outType", enableClear: "enableClear" }, { dialogOpened: "dialogOpened", dialogClosed: "dialogClosed", dialogMaxed: "dialogMaxed", resizing: "resizing", resized: "resized", valueChange: "valueChange" }, []);

            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             *
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */ 
            var styles = [""];

            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             *
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */ 
            var styles$1 = [""];

            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             *
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */ 
            var styles_DataGridComponent = [styles$1];
            var RenderType_DataGridComponent = ??crt({ encapsulation: 0, styles: styles_DataGridComponent, data: {} });
            function View_DataGridComponent_2(_l) { return ??vid(0, [(_l()(), ??eld(0, 0, null, null, 9, "farris-datagrid", [["class", "f-component-grid"], ["farris-grid-end-edit", ""], ["farris-remote-summary-command", ""], ["farris-use-binding-data", ""], ["id", "dataGrid"]], [[4, "position", null], [2, "f-datagrid-full", null], [2, "f-datagrid-auto-height", null]], [[null, "pageChanged"], [null, "selectedRowChange"], [null, "pageSizeChanged"], [null, "click"], [null, "selectChanged"], [null, "unSelect"], [null, "checkedChange"], [null, "scrollYLoad"], [null, "filterChanged"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
                    var pd_0 = (??nov(_v, 4).onClick($event) !== false);
                    ad = (pd_0 && ad);
                } if (("pageChanged" === en)) {
                    var pd_1 = (??nov(_v, 6).pageChangedHandler($event) !== false);
                    ad = (pd_1 && ad);
                } if (("selectChanged" === en)) {
                    var pd_2 = (??nov(_v, 6).selectedRowChanged($event) !== false);
                    ad = (pd_2 && ad);
                } if (("unSelect" === en)) {
                    var pd_3 = (??nov(_v, 6).unSelected($event) !== false);
                    ad = (pd_3 && ad);
                } if (("checkedChange" === en)) {
                    var pd_4 = (??nov(_v, 6).checkedChanged($event) !== false);
                    ad = (pd_4 && ad);
                } if (("pageSizeChanged" === en)) {
                    var pd_5 = (??nov(_v, 6).pageSizeChanged($event) !== false);
                    ad = (pd_5 && ad);
                } if (("scrollYLoad" === en)) {
                    var pd_6 = (??nov(_v, 6).scrollY($event) !== false);
                    ad = (pd_6 && ad);
                } if (("filterChanged" === en)) {
                    var pd_7 = (??nov(_v, 6).filterChanged($event) !== false);
                    ad = (pd_7 && ad);
                } if (("pageChanged" === en)) {
                    var pd_8 = (_co.viewModel.changePage1($event) !== false);
                    ad = (pd_8 && ad);
                } if (("selectedRowChange" === en)) {
                    var pd_9 = (_co.viewModel.loadCard1($event) !== false);
                    ad = (pd_9 && ad);
                } if (("pageSizeChanged" === en)) {
                    var pd_10 = (_co.viewModel.changePage1($event) !== false);
                    ad = (pd_10 && ad);
                } return ad; }, View_DatagridComponent_0, RenderType_DatagridComponent)), ??prd(4608, null, DatagridSmartFilterService, DatagridSmartFilterService, []), ??prd(512, null, DatagridFacadeService, DatagridFacadeService, [HttpClient]), ??prd(512, null, DatagridService, DatagridService, []), ??did(4, 6275072, [[1, 4], ["dataGridDataGrid", 4]], 1, DatagridComponent, [ChangeDetectorRef, ElementRef, Injector, NgZone, DatagridFacadeService, DatagridService, ApplicationRef, DomSanitizer, Renderer2], { id: [0, "id"], autoHeight: [1, "autoHeight"], showBorder: [2, "showBorder"], striped: [3, "striped"], headerWrap: [4, "headerWrap"], footerHeight: [5, "footerHeight"], footerDataFrom: [6, "footerDataFrom"], footerPosition: [7, "footerPosition"], rowHeight: [8, "rowHeight"], fit: [9, "fit"], fitColumns: [10, "fitColumns"], autoFitColumns: [11, "autoFitColumns"], disabled: [12, "disabled"], scrollBarShowMode: [13, "scrollBarShowMode"], showLineNumber: [14, "showLineNumber"], lineNumberTitle: [15, "lineNumberTitle"], lineNumberWidth: [16, "lineNumberWidth"], lockPagination: [17, "lockPagination"], pagination: [18, "pagination"], showPageList: [19, "showPageList"], showGotoInput: [20, "showGotoInput"], multiSelect: [21, "multiSelect"], showCheckbox: [22, "showCheckbox"], showAllCheckbox: [23, "showAllCheckbox"], checkOnSelect: [24, "checkOnSelect"], selectOnCheck: [25, "selectOnCheck"], selectionMode: [26, "selectionMode"], keepSelect: [27, "keepSelect"], fields: [28, "fields"], nowrap: [29, "nowrap"], virtualized: [30, "virtualized"], virtualizedAsyncLoad: [31, "virtualizedAsyncLoad"], editMode: [32, "editMode"], selectOnEditing: [33, "selectOnEditing"], groupSummaryPosition: [34, "groupSummaryPosition"], showGroupColumn: [35, "showGroupColumn"], showRowGroupPanel: [36, "showRowGroupPanel"], mergeCell: [37, "mergeCell"], enableSimpleMode: [38, "enableSimpleMode"], clearSelectionsWhenDataIsEmpty: [39, "clearSelectionsWhenDataIsEmpty"], enableContextMenu: [40, "enableContextMenu"], enableHighlightCell: [41, "enableHighlightCell"] }, { pageSizeChanged: "pageSizeChanged", pageChanged: "pageChanged", filterChanged: "filterChanged", selectChanged: "selectChanged", unSelect: "unSelect", scrollYLoad: "scrollYLoad", checkedChange: "checkedChange" }), ??qud(603979776, 9, { dgColumns: 1 }), ??did(6, 737280, null, 0, FarrisDatagridUseBindingDataDirective, [BindingData, ViewModel, DatagridComponent], null, { selectedRowChange: "selectedRowChange" }), ??did(7, 737280, null, 0, EditableDirective, [BindingData, ViewModel, DatagridComponent, DateTimeHelperService, Injector, RuntimeStateService, DialogService, NgZone], { gridEditable: [0, "gridEditable"], disableGroupOnEditing: [1, "disableGroupOnEditing"] }, null), ??did(8, 147456, null, 0, FarrisDataGridEndEditDirective, [AppContext, DatagridComponent], null, null), ??did(9, 16384, null, 0, FarrisDataGridRemoteSummaryDirective, [ViewModel, DatagridComponent], { remoteSummaryCommand: [0, "remoteSummaryCommand"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_3 = "dataGrid"; var currVal_4 = false; var currVal_5 = false; var currVal_6 = true; var currVal_7 = false; var currVal_8 = 29; var currVal_9 = "client"; var currVal_10 = "bottom"; var currVal_11 = 30; var currVal_12 = true; var currVal_13 = true; var currVal_14 = false; var currVal_15 = _co.viewModel.stateMachine["editable"]; var currVal_16 = "auto"; var currVal_17 = false; var currVal_18 = _co.dataGridlineNumberTitle; var currVal_19 = 36; var currVal_20 = (_co.viewModel.stateMachine && _co.viewModel.stateMachine["editable"]); var currVal_21 = true; var currVal_22 = false; var currVal_23 = false; var currVal_24 = false; var currVal_25 = false; var currVal_26 = false; var currVal_27 = false; var currVal_28 = false; var currVal_29 = "custom"; var currVal_30 = true; var currVal_31 = _co.viewModel.dataGridColumns; var currVal_32 = true; var currVal_33 = false; var currVal_34 = false; var currVal_35 = "cell"; var currVal_36 = false; var currVal_37 = "groupFooterRow"; var currVal_38 = true; var currVal_39 = false; var currVal_40 = false; var currVal_41 = false; var currVal_42 = true; var currVal_43 = false; var currVal_44 = false; _ck(_v, 4, 1, [currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40, currVal_41, currVal_42, currVal_43, currVal_44]); _ck(_v, 6, 0); var currVal_45 = (_co.viewModel.stateMachine && _co.viewModel.stateMachine["editable"]); var currVal_46 = true; _ck(_v, 7, 0, currVal_45, currVal_46); var currVal_47 = ""; _ck(_v, 9, 0, currVal_47); }, function (_ck, _v) { var currVal_0 = ??nov(_v, 4).pos; var currVal_1 = ??nov(_v, 4).hostCls; var currVal_2 = ??nov(_v, 4).autoHeightCls; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); }); }
            function View_DataGridComponent_1(_l) { return ??vid(0, [(_l()(), ??eld(0, 0, null, null, 11, "farris-section", [["class", "f-section-grid f-section-in-nav"], ["id", "data-grid-section"]], [[2, "f-section", null], [2, "f-section-maximize", null], [2, "f-section-fill", null], [2, "f-section-accordion", null], [2, "f-state-collapse", null], [2, "f-section-custom-accordion", null]], null, null, View_FarrisSectionComponent_0, RenderType_FarrisSectionComponent)), ??did(1, 245760, null, 7, FarrisSectionComponent, [[2, Injector]], { mainTitle: [0, "mainTitle"], subTitle: [1, "subTitle"], showHeader: [2, "showHeader"], enableMaximize: [3, "enableMaximize"], enableAccordion: [4, "enableAccordion"], fill: [5, "fill"], expandStatus: [6, "expandStatus"], index: [7, "index"] }, null), ??qud(335544320, 2, { headerDirective: 0 }), ??qud(335544320, 3, { headerTitleDirective: 0 }), ??qud(335544320, 4, { headerContentDirective: 0 }), ??qud(335544320, 5, { headerToolbarDirective: 0 }), ??qud(335544320, 6, { extendDirective: 0 }), ??qud(335544320, 7, { contentDirective: 0 }), ??qud(335544320, 8, { viewChangeDirective: 0 }), (_l()(), ??eld(9, 0, null, 0, 2, "div", [["class", "f-utils-fill"]], null, null, null, null, null)), (_l()(), ??and(16777216, null, null, 1, null, View_DataGridComponent_2)), ??did(11, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_6 = _co.SectiondatagridsectionMainTitle; var currVal_7 = _co.SectiondatagridsectionSubTitle; var currVal_8 = false; var currVal_9 = true; var currVal_10 = "default"; var currVal_11 = false; var currVal_12 = true; var currVal_13 = _co.index; _ck(_v, 1, 0, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13); var currVal_14 = true; _ck(_v, 11, 0, currVal_14); }, function (_ck, _v) { var currVal_0 = ??nov(_v, 1).baseCls; var currVal_1 = ??nov(_v, 1).maxStatus; var currVal_2 = ??nov(_v, 1).fillCls; var currVal_3 = ??nov(_v, 1).enableAccordionCls; var currVal_4 = ??nov(_v, 1).enableCollapseCls; var currVal_5 = ??nov(_v, 1).enableCustomAccordionCls; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5); }); }
            function View_DataGridComponent_0(_l) { return ??vid(0, [??qud(671088640, 1, { dataGridDataGrid: 0 }), (_l()(), ??and(16777216, null, null, 1, null, View_DataGridComponent_1)), ??did(2, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = true; _ck(_v, 2, 0, currVal_0); }, null); }
            function View_DataGridComponent_Host_0(_l) { return ??vid(0, [(_l()(), ??eld(0, 0, null, null, 83, "app-datagridcomponent", [], [[8, "className", 0]], null, null, View_DataGridComponent_0, RenderType_DataGridComponent)), ??prd(4608, null, NavigationEventService, NavigationEventService, [RuntimeFrameworkService, MenuStateService, QuerystringService]), ??prd(4608, null, NavigationService, NavigationService, [RuntimeFrameworkService, MenuStateService, NavigationEventService, QuerystringService, [2, FrameContext], [2, Injector]]), ??prd(4608, null, ViewModel, DataGridComponentViewmodel, []), ??prd(4608, null, CommandService, CommandService, [ViewModel, AppContext]), ??prd(4608, null, CardDataService, CardDataService, [FormMessageService, FrameContext, FormLoadingService, FormNotifyService, [2, LanguageService], FormErrorService, RuntimeFrameworkService, CommandService]), ??prd(4608, null, NavigationMiddlewareService, NavigationMiddlewareService, [NavigationService, FrameContext, FormMessageService, [2, LanguageService], CardDataService]), ??prd(4608, null, BindingData, BindingData, []), ??prd(4608, null, ListDataService, ListDataService, [FormMessageService, Repository, BindingData, FormLoadingService, [2, LanguageService], FormNotifyService, FormErrorService, ViewModel, FilterConditionService]), ??prd(4608, null, StateMachineService, StateMachineService, [StateMachine]), ??prd(5120, null, COMMAND_HANDLERS_TOKEN, function (p0_0, p0_1, p1_0, p2_0, p3_0, p3_1, p4_0) { return [new loadList1Handler(p0_0, p0_1), new remove1Handler(p1_0), new loadCard1Handler(p2_0), new add1Handler(p3_0, p3_1), new changePage1Handler(p4_0)]; }, [NavigationMiddlewareService, ListDataService, ListDataService, CardDataService, ListDataService, StateMachineService, CommandService]), ??prd(4608, null, CommandHandlerRegistry, CommandHandlerRegistry, [[2, COMMAND_HANDLERS_TOKEN]]), ??prd(4608, null, CommandHandlerExtenderRegistry, CommandHandlerExtenderRegistry, [[2, COMMAND_HANDLER_EXTENDERS_TOKEN]]), ??prd(4608, null, CommandHandlerFactory, CommandHandlerFactory, [CommandHandlerRegistry, CommandHandlerExtenderRegistry, FrameContext, VariableParseService]), ??prd(4608, null, CommandBus, CommandBus, [CommandHandlerFactory]), ??prd(4608, null, ValidationService, ValidationService, [Repository, FrameContext]), ??prd(4608, null, ChangeItemService, ChangeItemService, [Repository, FrameContext, FormNotifyService, LanguageService]), ??prd(4608, null, UIStateService, UIStateService, []), ??prd(4608, null, BindingDataService, BindingDataService, [BindingData, AppContext]), ??prd(4608, null, EntityTraversingService, EntityTraversingService, [FrameContext]), ??prd(4608, null, EntityManipulationService, EntityManipulationService, [FrameContext]), ??prd(4608, null, EntityAggregationService, EntityAggregationService, [FrameContext]), ??prd(4608, null, EntityListService, EntityListService, [BindingData]), ??prd(4608, null, EntityService, EntityService, [FrameContext]), ??prd(4608, null, TreeDataService, TreeDataService, [FrameContext, FormMessageService, FormLoadingService, FormNotifyService, FormErrorService, [2, LanguageService]]), ??prd(4608, null, SubTreeDataService, SubTreeDataService, [FrameContext, ViewModel, FormMessageService, FormLoadingService, FormErrorService, FormNotifyService, [2, LanguageService]]), ??prd(4608, null, SubListDataService, SubListDataService, [FormMessageService, Repository, FormLoadingService, ViewModel, [2, LanguageService], FormNotifyService, FormErrorService]), ??prd(4608, null, RemoveDataService, RemoveDataService, [FrameContext]), ??prd(4608, null, SaveDataService, SaveDataService, [FrameContext]), ??prd(4608, null, EditDataService, EditDataService, [FrameContext]), ??prd(4608, null, FilterConditionDataService, FilterConditionDataService, [ViewModel, FilterConditionService, CommandService]), ??prd(4608, null, RemoteSummaryService, RemoteSummaryService, [ViewModel]), ??prd(4608, null, BeActionService, BeActionService, [Repository, FormLoadingService, FormMessageService, FormNotifyService, FormErrorService, [2, LanguageService]]), ??prd(4608, null, ApproveService, ApproveService, [FormLoadingService, BeActionService, FormMessageService, FormNotifyService, [2, LanguageService], FormErrorService, FrameContext, [2, WFSubmiteService], [2, WFFlowchartService], [2, WfTaskHandlerService]]), ??prd(4608, null, PrintService, PrintService, [FormMessageService, LanguageService, CloudprintService, [2, FormNotifyService]]), ??prd(4608, null, AttachmentDataService, AttachmentDataService, [FrameContext, FormLoadingService]), ??prd(4608, null, AttachmentService, AttachmentService, [FrameContext, AttachmentDataService, FormNotifyService, UploadDialogService, [2, DownloadService]]), ??prd(4608, null, FileService, FileService, [FrameContext, AttachmentDataService, EntityService, SubListDataService, FormNotifyService, LanguageService, ListDataService, [2, FormLoadingService]]), ??prd(4608, null, GridMiddlewareService, GridMiddlewareService, [FrameContext, FormMessageService, [2, LanguageService], ViewModel, CommandService]), ??prd(4608, null, SidebarService, SidebarService, [FrameContext, FarrisSidebarService, FormMessageService, [2, LanguageService]]), ??prd(4608, null, FarrisFormService, FarrisFormService, [[2, FARRIS_FORM_COMPONENTS]]), ??prd(4608, null, DialogService$1, DialogService$1, [BsModalService, FarrisFormService, ComponentFactoryResolver, FrameContext, [2, Injector]]), ??prd(4608, null, RouterService, RouterService, [Router, RouterParamService, FrameworkService, [2, AppService], [2, MenuStateService], [2, LanguageService]]), ??prd(4608, null, AuthorityService, AuthorityService, []), ??prd(4608, null, QUERYSOLUTION_HANDLER_TOKEN, ??b, [FrameContext, FrameworkSessionService]), ??prd(4608, null, LISTFILTER_HANDLER_TOKEN, ??c, [FrameContext]), ??prd(4608, null, EndEditService, EndEditService, [FrameContext]), ??prd(4608, null, BatchEditDialogService, BatchEditDialogService, [Injector, BsModalService, ComponentFactoryResolver, LocaleService]), ??prd(4608, null, BatchEditService, BatchEditService, [Injector, ComponentManagerService, ViewModel, Repository, BatchEditDialogService, DateTimeHelperService, LanguageService, FormNotifyService]), ??prd(4608, null, DiscussionGroupService, DiscussionGroupService, [Injector, FrameContext, FormLoadingService, RuntimeFrameworkService]), ??prd(4608, null, DataGridService, DataGridService, []), ??prd(4608, null, FormAttentionService, FormAttentionService, [Injector, FrameContext, AttentionService]), ??prd(4608, null, FeatureEditorService, FeatureEditorService, [Injector, BsModalService, ComponentFactoryResolver, LocaleService, I18nService]), ??prd(4608, null, FeatureDataService, FeatureDataService, [Injector, FeatureRepository, [2, LOCALE_ID]]), ??prd(4608, null, FeatureEditService, FeatureEditService, [Injector, FeatureEditorService, FeatureDataService, FormLoadingService, FormNotifyService, LanguageService]), ??prd(4608, null, ExpressionService, ExpressionService, [Injector, ResolveService, FrameContext, ExpressionExecutor]), ??prd(4608, null, PopUpService, PopUpService, [Injector, FrameContext, Repository, LanguageService, FormMessageService]), ??prd(4608, null, DirtyCheckingService, DirtyCheckingService, [Injector, ChangeDetectorRef, ApplicationRef]), ??prd(4608, null, FormService, FormService, [Injector, AppContext, Repository]), ??prd(4608, null, ViewModelService, ViewModelService, []), ??prd(4608, null, PaginationService$1, PaginationService$1, [Injector, FrameContext]), ??prd(4608, null, FORM_MANIFEST_SERVICE_TOKEN, FormManifestService, [Injector, FORM_PATH_TOKEN, HttpClient]), ??prd(4608, null, FORM_EXPRESSION_MANIFEST_SERVICE_TOKEN, FormExpressionManifestService, [Injector, FrameContext, HttpClient, FORM_PATH_TOKEN, FORM_MANIFEST_SERVICE_TOKEN]), ??prd(4608, null, MESSAGE_SERVICE_TOKEN, FormMessageService, [MessagerService, [2, LanguageService], LOCALE_ID]), ??prd(4608, null, NOTIFY_SERVICE_TOKEN, FormNotifyService, [NotifyService, [2, LanguageService]]), ??prd(5120, null, FRAME_COMPONENT_INIT_HANDLER_TOKEN, function (p0_0, p0_1, p0_2, p0_3) { return [new WorkFlowMessageHandler(p0_0, p0_1, p0_2, p0_3)]; }, [Injector, FrameContext, WorkFlowMessageService, WorkFlowMessage]), ??prd(4608, null, ServerSideToken, BefLookupRestService, [Repository, [2, FrameContext]]), ??prd(4608, null, ComboServerSideToken, DefaultComboHttpService, [Repository]), ??prd(4608, null, GRID_SETTINGS_HTTP, BefLookupRestService, [Repository, [2, FrameContext]]), ??prd(4608, null, Form, DataGridComponentViewmodelForm, []), ??prd(4608, null, UIState, DataGridComponentViewmodelUIState, []), ??prd(4608, null, DataImportExportService, DataImportExportService, [BsModalService, ComponentFactoryResolver, Injector, FrameContext, ??f, NotifyService, EntityListService, ??g, DataieHandcraftService, HttpClient, LoadingService, ??c$1]), ??prd(512, null, LangService, LangService, [TranslateService]), ??prd(512, null, LocalizationService, LocalizationService, [Injector, UserSettingsToken]), ??prd(2048, null, Repository, null, [ProjectsFanwzRepository]), ??prd(512, null, FrameContext, FrameContext, [Injector, [3, FrameContext]]), ??prd(512, null, BindingPathService, BindingPathService, [Injector, AppContext, Repository]), ??prd(512, null, FormControlService, FormControlService, []), ??prd(512, null, FrameContextService, FrameContextService, [Injector, AppContext, FrameContext, Repository, BindingPathService, FormControlService]), ??prd(512, null, FocusInvalidService, FocusInvalidService, [Repository, FrameContext, FrameContextService, FormControlService]), ??did(80, 4440064, null, 0, DataGridComponent, [WizardService, KeybindingService, LangService, ActivatedRoute, Router, ElementRef, LocalizationService, FrmI18nSettingService, FocusInvalidService, CommonUtils, DomSanitizer, Injector], null, null), ??prd(256, null, FRAME_ID, "data-grid-component", []), ??prd(256, null, NAMESPACE, "", []), ??prd(256, null, EXCEPTION_HANDLER, null, [])], function (_ck, _v) { _ck(_v, 80, 0); }, function (_ck, _v) { var currVal_0 = ??nov(_v, 80).cls; _ck(_v, 0, 0, currVal_0); }); }
            var DataGridComponentNgFactory = ??ccf("app-datagridcomponent", DataGridComponent, View_DataGridComponent_Host_0, {}, {}, []);

            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             *
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */ 
            var styles$2 = [""];

            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             *
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */ 
            var styles_DetailFormComponent = [styles$2];
            var RenderType_DetailFormComponent = ??crt({ encapsulation: 0, styles: styles_DetailFormComponent, data: {} });
            function View_DetailFormComponent_3(_l) { return ??vid(0, [(_l()(), ??eld(0, 0, null, null, 1, "span", [["class", "farris-label-info text-danger"]], null, null, null, null, null)), (_l()(), ??ted(-1, null, ["*"]))], null, null); }
            function View_DetailFormComponent_4(_l) { return ??vid(0, [(_l()(), ??eld(0, 0, null, null, 10, "input", [["class", "form-control"], ["formControlName", "projectCode"], ["id", "projectCode_034d37e8_75r8"], ["input-end-edit", ""], ["maxlength", "36"], ["tabindex", "-1"]], [[8, "readOnly", 0], [8, "placeholder", 0], [1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
                    var pd_0 = (??nov(_v, 1)._handleInput($event.target.value) !== false);
                    ad = (pd_0 && ad);
                } if (("blur" === en)) {
                    var pd_1 = (??nov(_v, 1).onTouched() !== false);
                    ad = (pd_1 && ad);
                } if (("compositionstart" === en)) {
                    var pd_2 = (??nov(_v, 1)._compositionStart() !== false);
                    ad = (pd_2 && ad);
                } if (("compositionend" === en)) {
                    var pd_3 = (??nov(_v, 1)._compositionEnd($event.target.value) !== false);
                    ad = (pd_3 && ad);
                } return ad; }, null, null)), ??did(1, 16384, null, 0, DefaultValueAccessor, [Renderer2, ElementRef, [2, COMPOSITION_BUFFER_MODE]], null, null), ??did(2, 540672, null, 0, MaxLengthValidator, [], { maxlength: [0, "maxlength"] }, null), ??prd(1024, null, NG_VALIDATORS, function (p0_0) { return [p0_0]; }, [MaxLengthValidator]), ??prd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [DefaultValueAccessor]), ??did(5, 671744, null, 0, FormControlName, [[3, ControlContainer], [6, NG_VALIDATORS], [8, null], [6, NG_VALUE_ACCESSOR], [2, ??angular_packages_forms_forms_k]], { name: [0, "name"] }, null), ??prd(2048, null, NgControl, null, [FormControlName]), ??did(7, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null), ??did(8, 212992, null, 0, InputEndEditDirective, [AppContext, ElementRef], null, null), ??did(9, 4341760, null, 0, FInputTipsDirective, [ElementRef, NgZone, Renderer2], { enableTips: [0, "enableTips"] }, null), ??ppd(10, 3)], function (_ck, _v) { var currVal_10 = "36"; _ck(_v, 2, 0, currVal_10); var currVal_11 = "projectCode"; _ck(_v, 5, 0, currVal_11); _ck(_v, 8, 0); var currVal_12 = true; _ck(_v, 9, 0, currVal_12); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.viewModel.stateMachine["editable"]; var currVal_1 = ??inlineInterpolate(1, "", ??unv(_v, 0, 1, _ck(_v, 10, 0, ??nov(_v.parent.parent.parent, 0), "TextBox/projectCode_034d37e8_75r8/placeHolder", _co.lang, "")), ""); var currVal_2 = (??nov(_v, 2).maxlength ? ??nov(_v, 2).maxlength : null); var currVal_3 = ??nov(_v, 7).ngClassUntouched; var currVal_4 = ??nov(_v, 7).ngClassTouched; var currVal_5 = ??nov(_v, 7).ngClassPristine; var currVal_6 = ??nov(_v, 7).ngClassDirty; var currVal_7 = ??nov(_v, 7).ngClassValid; var currVal_8 = ??nov(_v, 7).ngClassInvalid; var currVal_9 = ??nov(_v, 7).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); }); }
            function View_DetailFormComponent_5(_l) { return ??vid(0, [(_l()(), ??eld(0, 0, null, null, 5, "farris-text", [["formControlName", "projectCode"]], [[2, "f-component-text", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "mouseenter"]], function (_v, en, $event) { var ad = true; if (("mouseenter" === en)) {
                    var pd_0 = (??nov(_v, 1).changeTitle($event) !== false);
                    ad = (pd_0 && ad);
                } return ad; }, View_TextComponent_0, RenderType_TextComponent)), ??did(1, 4440064, null, 0, TextComponent, [DateTimeHelperService, NumberHelperService, Injector, NgZone], { type: [0, "type"] }, null), ??prd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [TextComponent]), ??did(3, 671744, null, 0, FormControlName, [[3, ControlContainer], [8, null], [8, null], [6, NG_VALUE_ACCESSOR], [2, ??angular_packages_forms_forms_k]], { name: [0, "name"] }, null), ??prd(2048, null, NgControl, null, [FormControlName]), ??did(5, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null)], function (_ck, _v) { var currVal_8 = "string"; _ck(_v, 1, 0, currVal_8); var currVal_9 = "projectCode"; _ck(_v, 3, 0, currVal_9); }, function (_ck, _v) { var currVal_0 = ??nov(_v, 1).cls; var currVal_1 = ??nov(_v, 5).ngClassUntouched; var currVal_2 = ??nov(_v, 5).ngClassTouched; var currVal_3 = ??nov(_v, 5).ngClassPristine; var currVal_4 = ??nov(_v, 5).ngClassDirty; var currVal_5 = ??nov(_v, 5).ngClassValid; var currVal_6 = ??nov(_v, 5).ngClassInvalid; var currVal_7 = ??nov(_v, 5).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }); }
            function View_DetailFormComponent_2(_l) { return ??vid(0, [(_l()(), ??eld(0, 0, null, null, 19, "div", [["class", "col-12"]], null, null, null, null, null)), (_l()(), ??eld(1, 0, null, null, 18, "div", [["class", "farris-group-wrap"]], null, null, null, null, null)), (_l()(), ??eld(2, 0, null, null, 17, "div", [["class", "form-group farris-form-group"]], null, null, null, null, null)), ??did(3, 278528, null, 0, NgClass, [IterableDiffers, KeyValueDiffers, ElementRef, Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), ??pod(4, { "form-group--has-tips": 0 }), (_l()(), ??eld(5, 0, null, null, 6, "label", [["class", "col-form-label"], ["for", "projectCode_034d37e8_75r8"]], [[8, "title", 0]], null, null, null, null)), ??ppd(6, 3), (_l()(), ??and(16777216, null, null, 1, null, View_DetailFormComponent_3)), ??did(8, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ??eld(9, 0, null, null, 2, "span", [["class", "farris-label-text"]], null, null, null, null, null)), (_l()(), ??ted(10, null, ["", ""])), ??ppd(11, 3), (_l()(), ??eld(12, 0, null, null, 7, "div", [["class", "farris-input-wrap"]], null, null, null, null, null)), (_l()(), ??and(16777216, null, null, 1, null, View_DetailFormComponent_4)), ??did(14, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ??eld(15, 0, null, null, 1, "validationMessage", [], [[8, "hidden", 0]], null, null, View_ValidationMessageComponent_0, RenderType_ValidationMessageComponent)), ??did(16, 573440, null, 0, ValidationMessageComponent, [ElementRef], { errors: [0, "errors"] }, null), (_l()(), ??eld(17, 0, null, null, 0, "div", [["class", "farris-feedback"]], null, null, null, null, null)), (_l()(), ??and(16777216, null, null, 1, null, View_DetailFormComponent_5)), ??did(19, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "form-group farris-form-group"; var currVal_1 = _ck(_v, 4, 0, false); _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_3 = false; _ck(_v, 8, 0, currVal_3); var currVal_5 = _co.viewModel.stateMachine["editable"]; _ck(_v, 14, 0, currVal_5); var currVal_7 = _co.viewModel.form.getCardControlErrors("projectCode"); _ck(_v, 16, 0, currVal_7); var currVal_8 = !_co.viewModel.stateMachine["editable"]; _ck(_v, 19, 0, currVal_8); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = ??inlineInterpolate(1, "", ??unv(_v, 5, 0, _ck(_v, 6, 0, ??nov(_v.parent.parent, 0), "projectCode_034d37e8_75r8", _co.lang, "\u9879\u76EE\u7F16\u53F7")), ""); _ck(_v, 5, 0, currVal_2); var currVal_4 = ??unv(_v, 10, 0, _ck(_v, 11, 0, ??nov(_v.parent.parent, 0), "projectCode_034d37e8_75r8", _co.lang, "\u9879\u76EE\u7F16\u53F7")); _ck(_v, 10, 0, currVal_4); var currVal_6 = !_co.viewModel.form.isShowValidationMsg; _ck(_v, 15, 0, currVal_6); }); }
            function View_DetailFormComponent_7(_l) { return ??vid(0, [(_l()(), ??eld(0, 0, null, null, 1, "span", [["class", "farris-label-info text-danger"]], null, null, null, null, null)), (_l()(), ??ted(-1, null, ["*"]))], null, null); }
            function View_DetailFormComponent_8(_l) { return ??vid(0, [(_l()(), ??eld(0, 0, null, null, 10, "input", [["class", "form-control"], ["formControlName", "projectName"], ["id", "projectName_2693df04_u0od"], ["input-end-edit", ""], ["maxlength", "512"], ["tabindex", "-1"]], [[8, "readOnly", 0], [8, "placeholder", 0], [1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
                    var pd_0 = (??nov(_v, 1)._handleInput($event.target.value) !== false);
                    ad = (pd_0 && ad);
                } if (("blur" === en)) {
                    var pd_1 = (??nov(_v, 1).onTouched() !== false);
                    ad = (pd_1 && ad);
                } if (("compositionstart" === en)) {
                    var pd_2 = (??nov(_v, 1)._compositionStart() !== false);
                    ad = (pd_2 && ad);
                } if (("compositionend" === en)) {
                    var pd_3 = (??nov(_v, 1)._compositionEnd($event.target.value) !== false);
                    ad = (pd_3 && ad);
                } return ad; }, null, null)), ??did(1, 16384, null, 0, DefaultValueAccessor, [Renderer2, ElementRef, [2, COMPOSITION_BUFFER_MODE]], null, null), ??did(2, 540672, null, 0, MaxLengthValidator, [], { maxlength: [0, "maxlength"] }, null), ??prd(1024, null, NG_VALIDATORS, function (p0_0) { return [p0_0]; }, [MaxLengthValidator]), ??prd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [DefaultValueAccessor]), ??did(5, 671744, null, 0, FormControlName, [[3, ControlContainer], [6, NG_VALIDATORS], [8, null], [6, NG_VALUE_ACCESSOR], [2, ??angular_packages_forms_forms_k]], { name: [0, "name"] }, null), ??prd(2048, null, NgControl, null, [FormControlName]), ??did(7, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null), ??did(8, 212992, null, 0, InputEndEditDirective, [AppContext, ElementRef], null, null), ??did(9, 4341760, null, 0, FInputTipsDirective, [ElementRef, NgZone, Renderer2], { enableTips: [0, "enableTips"] }, null), ??ppd(10, 3)], function (_ck, _v) { var currVal_10 = "512"; _ck(_v, 2, 0, currVal_10); var currVal_11 = "projectName"; _ck(_v, 5, 0, currVal_11); _ck(_v, 8, 0); var currVal_12 = true; _ck(_v, 9, 0, currVal_12); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.viewModel.stateMachine["editable"]; var currVal_1 = ??inlineInterpolate(1, "", ??unv(_v, 0, 1, _ck(_v, 10, 0, ??nov(_v.parent.parent.parent, 0), "TextBox/projectName_2693df04_u0od/placeHolder", _co.lang, "")), ""); var currVal_2 = (??nov(_v, 2).maxlength ? ??nov(_v, 2).maxlength : null); var currVal_3 = ??nov(_v, 7).ngClassUntouched; var currVal_4 = ??nov(_v, 7).ngClassTouched; var currVal_5 = ??nov(_v, 7).ngClassPristine; var currVal_6 = ??nov(_v, 7).ngClassDirty; var currVal_7 = ??nov(_v, 7).ngClassValid; var currVal_8 = ??nov(_v, 7).ngClassInvalid; var currVal_9 = ??nov(_v, 7).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); }); }
            function View_DetailFormComponent_9(_l) { return ??vid(0, [(_l()(), ??eld(0, 0, null, null, 5, "farris-text", [["formControlName", "projectName"]], [[2, "f-component-text", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "mouseenter"]], function (_v, en, $event) { var ad = true; if (("mouseenter" === en)) {
                    var pd_0 = (??nov(_v, 1).changeTitle($event) !== false);
                    ad = (pd_0 && ad);
                } return ad; }, View_TextComponent_0, RenderType_TextComponent)), ??did(1, 4440064, null, 0, TextComponent, [DateTimeHelperService, NumberHelperService, Injector, NgZone], { type: [0, "type"] }, null), ??prd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [TextComponent]), ??did(3, 671744, null, 0, FormControlName, [[3, ControlContainer], [8, null], [8, null], [6, NG_VALUE_ACCESSOR], [2, ??angular_packages_forms_forms_k]], { name: [0, "name"] }, null), ??prd(2048, null, NgControl, null, [FormControlName]), ??did(5, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null)], function (_ck, _v) { var currVal_8 = "string"; _ck(_v, 1, 0, currVal_8); var currVal_9 = "projectName"; _ck(_v, 3, 0, currVal_9); }, function (_ck, _v) { var currVal_0 = ??nov(_v, 1).cls; var currVal_1 = ??nov(_v, 5).ngClassUntouched; var currVal_2 = ??nov(_v, 5).ngClassTouched; var currVal_3 = ??nov(_v, 5).ngClassPristine; var currVal_4 = ??nov(_v, 5).ngClassDirty; var currVal_5 = ??nov(_v, 5).ngClassValid; var currVal_6 = ??nov(_v, 5).ngClassInvalid; var currVal_7 = ??nov(_v, 5).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }); }
            function View_DetailFormComponent_6(_l) { return ??vid(0, [(_l()(), ??eld(0, 0, null, null, 19, "div", [["class", "col-12"]], null, null, null, null, null)), (_l()(), ??eld(1, 0, null, null, 18, "div", [["class", "farris-group-wrap"]], null, null, null, null, null)), (_l()(), ??eld(2, 0, null, null, 17, "div", [["class", "form-group farris-form-group"]], null, null, null, null, null)), ??did(3, 278528, null, 0, NgClass, [IterableDiffers, KeyValueDiffers, ElementRef, Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), ??pod(4, { "form-group--has-tips": 0 }), (_l()(), ??eld(5, 0, null, null, 6, "label", [["class", "col-form-label"], ["for", "projectName_2693df04_u0od"]], [[8, "title", 0]], null, null, null, null)), ??ppd(6, 3), (_l()(), ??and(16777216, null, null, 1, null, View_DetailFormComponent_7)), ??did(8, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ??eld(9, 0, null, null, 2, "span", [["class", "farris-label-text"]], null, null, null, null, null)), (_l()(), ??ted(10, null, ["", ""])), ??ppd(11, 3), (_l()(), ??eld(12, 0, null, null, 7, "div", [["class", "farris-input-wrap"]], null, null, null, null, null)), (_l()(), ??and(16777216, null, null, 1, null, View_DetailFormComponent_8)), ??did(14, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ??eld(15, 0, null, null, 1, "validationMessage", [], [[8, "hidden", 0]], null, null, View_ValidationMessageComponent_0, RenderType_ValidationMessageComponent)), ??did(16, 573440, null, 0, ValidationMessageComponent, [ElementRef], { errors: [0, "errors"] }, null), (_l()(), ??eld(17, 0, null, null, 0, "div", [["class", "farris-feedback"]], null, null, null, null, null)), (_l()(), ??and(16777216, null, null, 1, null, View_DetailFormComponent_9)), ??did(19, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "form-group farris-form-group"; var currVal_1 = _ck(_v, 4, 0, false); _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_3 = false; _ck(_v, 8, 0, currVal_3); var currVal_5 = _co.viewModel.stateMachine["editable"]; _ck(_v, 14, 0, currVal_5); var currVal_7 = _co.viewModel.form.getCardControlErrors("projectName"); _ck(_v, 16, 0, currVal_7); var currVal_8 = !_co.viewModel.stateMachine["editable"]; _ck(_v, 19, 0, currVal_8); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = ??inlineInterpolate(1, "", ??unv(_v, 5, 0, _ck(_v, 6, 0, ??nov(_v.parent.parent, 0), "projectName_2693df04_u0od", _co.lang, "\u9879\u76EE\u540D\u79F0")), ""); _ck(_v, 5, 0, currVal_2); var currVal_4 = ??unv(_v, 10, 0, _ck(_v, 11, 0, ??nov(_v.parent.parent, 0), "projectName_2693df04_u0od", _co.lang, "\u9879\u76EE\u540D\u79F0")); _ck(_v, 10, 0, currVal_4); var currVal_6 = !_co.viewModel.form.isShowValidationMsg; _ck(_v, 15, 0, currVal_6); }); }
            function View_DetailFormComponent_11(_l) { return ??vid(0, [(_l()(), ??eld(0, 0, null, null, 1, "span", [["class", "farris-label-info text-danger"]], null, null, null, null, null)), (_l()(), ??ted(-1, null, ["*"]))], null, null); }
            function View_DetailFormComponent_12(_l) { return ??vid(0, [(_l()(), ??eld(0, 0, null, null, 10, "input", [["class", "form-control"], ["formControlName", "projectType"], ["id", "projectType_47b0d767_7fzm"], ["input-end-edit", ""], ["maxlength", "36"], ["tabindex", "-1"]], [[8, "readOnly", 0], [8, "placeholder", 0], [1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
                    var pd_0 = (??nov(_v, 1)._handleInput($event.target.value) !== false);
                    ad = (pd_0 && ad);
                } if (("blur" === en)) {
                    var pd_1 = (??nov(_v, 1).onTouched() !== false);
                    ad = (pd_1 && ad);
                } if (("compositionstart" === en)) {
                    var pd_2 = (??nov(_v, 1)._compositionStart() !== false);
                    ad = (pd_2 && ad);
                } if (("compositionend" === en)) {
                    var pd_3 = (??nov(_v, 1)._compositionEnd($event.target.value) !== false);
                    ad = (pd_3 && ad);
                } return ad; }, null, null)), ??did(1, 16384, null, 0, DefaultValueAccessor, [Renderer2, ElementRef, [2, COMPOSITION_BUFFER_MODE]], null, null), ??did(2, 540672, null, 0, MaxLengthValidator, [], { maxlength: [0, "maxlength"] }, null), ??prd(1024, null, NG_VALIDATORS, function (p0_0) { return [p0_0]; }, [MaxLengthValidator]), ??prd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [DefaultValueAccessor]), ??did(5, 671744, null, 0, FormControlName, [[3, ControlContainer], [6, NG_VALIDATORS], [8, null], [6, NG_VALUE_ACCESSOR], [2, ??angular_packages_forms_forms_k]], { name: [0, "name"] }, null), ??prd(2048, null, NgControl, null, [FormControlName]), ??did(7, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null), ??did(8, 212992, null, 0, InputEndEditDirective, [AppContext, ElementRef], null, null), ??did(9, 4341760, null, 0, FInputTipsDirective, [ElementRef, NgZone, Renderer2], { enableTips: [0, "enableTips"] }, null), ??ppd(10, 3)], function (_ck, _v) { var currVal_10 = "36"; _ck(_v, 2, 0, currVal_10); var currVal_11 = "projectType"; _ck(_v, 5, 0, currVal_11); _ck(_v, 8, 0); var currVal_12 = true; _ck(_v, 9, 0, currVal_12); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.viewModel.stateMachine["editable"]; var currVal_1 = ??inlineInterpolate(1, "", ??unv(_v, 0, 1, _ck(_v, 10, 0, ??nov(_v.parent.parent.parent, 0), "TextBox/projectType_47b0d767_7fzm/placeHolder", _co.lang, "")), ""); var currVal_2 = (??nov(_v, 2).maxlength ? ??nov(_v, 2).maxlength : null); var currVal_3 = ??nov(_v, 7).ngClassUntouched; var currVal_4 = ??nov(_v, 7).ngClassTouched; var currVal_5 = ??nov(_v, 7).ngClassPristine; var currVal_6 = ??nov(_v, 7).ngClassDirty; var currVal_7 = ??nov(_v, 7).ngClassValid; var currVal_8 = ??nov(_v, 7).ngClassInvalid; var currVal_9 = ??nov(_v, 7).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); }); }
            function View_DetailFormComponent_13(_l) { return ??vid(0, [(_l()(), ??eld(0, 0, null, null, 5, "farris-text", [["formControlName", "projectType"]], [[2, "f-component-text", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "mouseenter"]], function (_v, en, $event) { var ad = true; if (("mouseenter" === en)) {
                    var pd_0 = (??nov(_v, 1).changeTitle($event) !== false);
                    ad = (pd_0 && ad);
                } return ad; }, View_TextComponent_0, RenderType_TextComponent)), ??did(1, 4440064, null, 0, TextComponent, [DateTimeHelperService, NumberHelperService, Injector, NgZone], { type: [0, "type"] }, null), ??prd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [TextComponent]), ??did(3, 671744, null, 0, FormControlName, [[3, ControlContainer], [8, null], [8, null], [6, NG_VALUE_ACCESSOR], [2, ??angular_packages_forms_forms_k]], { name: [0, "name"] }, null), ??prd(2048, null, NgControl, null, [FormControlName]), ??did(5, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null)], function (_ck, _v) { var currVal_8 = "string"; _ck(_v, 1, 0, currVal_8); var currVal_9 = "projectType"; _ck(_v, 3, 0, currVal_9); }, function (_ck, _v) { var currVal_0 = ??nov(_v, 1).cls; var currVal_1 = ??nov(_v, 5).ngClassUntouched; var currVal_2 = ??nov(_v, 5).ngClassTouched; var currVal_3 = ??nov(_v, 5).ngClassPristine; var currVal_4 = ??nov(_v, 5).ngClassDirty; var currVal_5 = ??nov(_v, 5).ngClassValid; var currVal_6 = ??nov(_v, 5).ngClassInvalid; var currVal_7 = ??nov(_v, 5).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }); }
            function View_DetailFormComponent_10(_l) { return ??vid(0, [(_l()(), ??eld(0, 0, null, null, 19, "div", [["class", "col-12"]], null, null, null, null, null)), (_l()(), ??eld(1, 0, null, null, 18, "div", [["class", "farris-group-wrap"]], null, null, null, null, null)), (_l()(), ??eld(2, 0, null, null, 17, "div", [["class", "form-group farris-form-group"]], null, null, null, null, null)), ??did(3, 278528, null, 0, NgClass, [IterableDiffers, KeyValueDiffers, ElementRef, Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), ??pod(4, { "form-group--has-tips": 0 }), (_l()(), ??eld(5, 0, null, null, 6, "label", [["class", "col-form-label"], ["for", "projectType_47b0d767_7fzm"]], [[8, "title", 0]], null, null, null, null)), ??ppd(6, 3), (_l()(), ??and(16777216, null, null, 1, null, View_DetailFormComponent_11)), ??did(8, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ??eld(9, 0, null, null, 2, "span", [["class", "farris-label-text"]], null, null, null, null, null)), (_l()(), ??ted(10, null, ["", ""])), ??ppd(11, 3), (_l()(), ??eld(12, 0, null, null, 7, "div", [["class", "farris-input-wrap"]], null, null, null, null, null)), (_l()(), ??and(16777216, null, null, 1, null, View_DetailFormComponent_12)), ??did(14, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ??eld(15, 0, null, null, 1, "validationMessage", [], [[8, "hidden", 0]], null, null, View_ValidationMessageComponent_0, RenderType_ValidationMessageComponent)), ??did(16, 573440, null, 0, ValidationMessageComponent, [ElementRef], { errors: [0, "errors"] }, null), (_l()(), ??eld(17, 0, null, null, 0, "div", [["class", "farris-feedback"]], null, null, null, null, null)), (_l()(), ??and(16777216, null, null, 1, null, View_DetailFormComponent_13)), ??did(19, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "form-group farris-form-group"; var currVal_1 = _ck(_v, 4, 0, false); _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_3 = false; _ck(_v, 8, 0, currVal_3); var currVal_5 = _co.viewModel.stateMachine["editable"]; _ck(_v, 14, 0, currVal_5); var currVal_7 = _co.viewModel.form.getCardControlErrors("projectType"); _ck(_v, 16, 0, currVal_7); var currVal_8 = !_co.viewModel.stateMachine["editable"]; _ck(_v, 19, 0, currVal_8); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = ??inlineInterpolate(1, "", ??unv(_v, 5, 0, _ck(_v, 6, 0, ??nov(_v.parent.parent, 0), "projectType_47b0d767_7fzm", _co.lang, "\u9879\u76EE\u7C7B\u522B")), ""); _ck(_v, 5, 0, currVal_2); var currVal_4 = ??unv(_v, 10, 0, _ck(_v, 11, 0, ??nov(_v.parent.parent, 0), "projectType_47b0d767_7fzm", _co.lang, "\u9879\u76EE\u7C7B\u522B")); _ck(_v, 10, 0, currVal_4); var currVal_6 = !_co.viewModel.form.isShowValidationMsg; _ck(_v, 15, 0, currVal_6); }); }
            function View_DetailFormComponent_15(_l) { return ??vid(0, [(_l()(), ??eld(0, 0, null, null, 1, "span", [["class", "farris-label-info text-danger"]], null, null, null, null, null)), (_l()(), ??ted(-1, null, ["*"]))], null, null); }
            function View_DetailFormComponent_16(_l) { return ??vid(0, [(_l()(), ??eld(0, 0, null, null, 11, "textarea", [["class", "form-control"], ["formControlName", "projectNote"], ["id", "projectNote_60e4aa39_qvd7"], ["input-end-edit", ""], ["kendoTextArea", ""], ["tabindex", "-1"]], [[8, "readOnly", 0], [8, "placeholder", 0], [2, "k-textarea", null], [1, "dir", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "change"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
                    var pd_0 = (??nov(_v, 1)._handleInput($event.target.value) !== false);
                    ad = (pd_0 && ad);
                } if (("blur" === en)) {
                    var pd_1 = (??nov(_v, 1).onTouched() !== false);
                    ad = (pd_1 && ad);
                } if (("compositionstart" === en)) {
                    var pd_2 = (??nov(_v, 1)._compositionStart() !== false);
                    ad = (pd_2 && ad);
                } if (("compositionend" === en)) {
                    var pd_3 = (??nov(_v, 1)._compositionEnd($event.target.value) !== false);
                    ad = (pd_3 && ad);
                } if (("input" === en)) {
                    var pd_4 = (??nov(_v, 8).onInput() !== false);
                    ad = (pd_4 && ad);
                } if (("change" === en)) {
                    var pd_5 = (??nov(_v, 8).onValueChange() !== false);
                    ad = (pd_5 && ad);
                } return ad; }, null, null)), ??did(1, 16384, null, 0, DefaultValueAccessor, [Renderer2, ElementRef, [2, COMPOSITION_BUFFER_MODE]], null, null), ??did(2, 737280, null, 0, TextAreaDirective, [Renderer2, ElementRef, NgZone, ChangeDetectorRef, Injector, [2, RTL]], null, null), ??prd(1024, null, NG_VALUE_ACCESSOR, function (p0_0, p1_0) { return [p0_0, p1_0]; }, [DefaultValueAccessor, TextAreaDirective]), ??did(4, 671744, null, 0, FormControlName, [[3, ControlContainer], [8, null], [8, null], [6, NG_VALUE_ACCESSOR], [2, ??angular_packages_forms_forms_k]], { name: [0, "name"] }, null), ??prd(2048, null, NgControl, null, [FormControlName]), ??did(6, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null), ??did(7, 212992, null, 0, InputEndEditDirective, [AppContext, ElementRef], null, null), ??did(8, 4800512, null, 0, TextareaAutoSizeDirective, [ElementRef, NgControl, Injector], { enable: [0, "enable"] }, null), ??did(9, 4931584, null, 0, TextareaWordcountDirective, [ElementRef, Renderer2, Injector], { useWordCount: [0, "useWordCount"], countType: [1, "countType"], onlyShowInDialog: [2, "onlyShowInDialog"] }, null), ??did(10, 4931584, null, 0, TextareaZoomDirective, [ElementRef, Renderer2, Injector, [2, TextareaWordcountDirective]], { useZoom: [0, "useZoom"] }, null), ??ppd(11, 3)], function (_ck, _v) { _ck(_v, 2, 0); var currVal_11 = "projectNote"; _ck(_v, 4, 0, currVal_11); _ck(_v, 7, 0); var currVal_12 = false; _ck(_v, 8, 0, currVal_12); var currVal_13 = false; var currVal_14 = "surplus"; var currVal_15 = false; _ck(_v, 9, 0, currVal_13, currVal_14, currVal_15); var currVal_16 = false; _ck(_v, 10, 0, currVal_16); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.viewModel.stateMachine["editable"]; var currVal_1 = ??inlineInterpolate(1, "", ??unv(_v, 0, 1, _ck(_v, 11, 0, ??nov(_v.parent.parent.parent, 0), "MultiTextBox/projectNote_60e4aa39_qvd7/placeHolder", _co.lang, "")), ""); var currVal_2 = ??nov(_v, 2).elementClass; var currVal_3 = ??nov(_v, 2).direction; var currVal_4 = ??nov(_v, 6).ngClassUntouched; var currVal_5 = ??nov(_v, 6).ngClassTouched; var currVal_6 = ??nov(_v, 6).ngClassPristine; var currVal_7 = ??nov(_v, 6).ngClassDirty; var currVal_8 = ??nov(_v, 6).ngClassValid; var currVal_9 = ??nov(_v, 6).ngClassInvalid; var currVal_10 = ??nov(_v, 6).ngClassPending; _ck(_v, 0, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10]); }); }
            function View_DetailFormComponent_17(_l) { return ??vid(0, [(_l()(), ??eld(0, 0, null, null, 6, "farris-text", [["formControlName", "projectNote"]], [[2, "f-component-text", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "mouseenter"]], function (_v, en, $event) { var ad = true; if (("mouseenter" === en)) {
                    var pd_0 = (??nov(_v, 1).changeTitle($event) !== false);
                    ad = (pd_0 && ad);
                } return ad; }, View_TextComponent_0, RenderType_TextComponent)), ??did(1, 4440064, null, 0, TextComponent, [DateTimeHelperService, NumberHelperService, Injector, NgZone], { isTextArea: [0, "isTextArea"], autoSize: [1, "autoSize"], type: [2, "type"] }, null), ??prd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [TextComponent]), ??did(3, 671744, null, 0, FormControlName, [[3, ControlContainer], [8, null], [8, null], [6, NG_VALUE_ACCESSOR], [2, ??angular_packages_forms_forms_k]], { name: [0, "name"] }, null), ??prd(2048, null, NgControl, null, [FormControlName]), ??did(5, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null), ??did(6, 4931584, null, 0, TextareaZoomDirective, [ElementRef, Renderer2, Injector, [2, TextareaWordcountDirective]], { useZoom: [0, "useZoom"] }, null)], function (_ck, _v) { var currVal_8 = true; var currVal_9 = false; var currVal_10 = "string"; _ck(_v, 1, 0, currVal_8, currVal_9, currVal_10); var currVal_11 = "projectNote"; _ck(_v, 3, 0, currVal_11); var currVal_12 = false; _ck(_v, 6, 0, currVal_12); }, function (_ck, _v) { var currVal_0 = ??nov(_v, 1).cls; var currVal_1 = ??nov(_v, 5).ngClassUntouched; var currVal_2 = ??nov(_v, 5).ngClassTouched; var currVal_3 = ??nov(_v, 5).ngClassPristine; var currVal_4 = ??nov(_v, 5).ngClassDirty; var currVal_5 = ??nov(_v, 5).ngClassValid; var currVal_6 = ??nov(_v, 5).ngClassInvalid; var currVal_7 = ??nov(_v, 5).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }); }
            function View_DetailFormComponent_14(_l) { return ??vid(0, [(_l()(), ??eld(0, 0, null, null, 19, "div", [["class", "col-12"]], null, null, null, null, null)), (_l()(), ??eld(1, 0, null, null, 18, "div", [["class", "farris-group-wrap"]], null, null, null, null, null)), (_l()(), ??eld(2, 0, null, null, 17, "div", [["class", "form-group farris-form-group"]], null, null, null, null, null)), ??did(3, 278528, null, 0, NgClass, [IterableDiffers, KeyValueDiffers, ElementRef, Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), ??pod(4, { "form-group--has-tips": 0 }), (_l()(), ??eld(5, 0, null, null, 6, "label", [["class", "col-form-label col-form-label-multi"], ["for", "projectNote_60e4aa39_qvd7"]], [[8, "title", 0]], null, null, null, null)), ??ppd(6, 3), (_l()(), ??and(16777216, null, null, 1, null, View_DetailFormComponent_15)), ??did(8, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ??eld(9, 0, null, null, 2, "span", [["class", "farris-label-text"]], null, null, null, null, null)), (_l()(), ??ted(10, null, ["", ""])), ??ppd(11, 3), (_l()(), ??eld(12, 0, null, null, 7, "div", [["class", "farris-input-wrap"]], null, null, null, null, null)), (_l()(), ??and(16777216, null, null, 1, null, View_DetailFormComponent_16)), ??did(14, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ??eld(15, 0, null, null, 1, "validationMessage", [], [[8, "hidden", 0]], null, null, View_ValidationMessageComponent_0, RenderType_ValidationMessageComponent)), ??did(16, 573440, null, 0, ValidationMessageComponent, [ElementRef], { errors: [0, "errors"] }, null), (_l()(), ??eld(17, 0, null, null, 0, "div", [["class", "farris-feedback"]], null, null, null, null, null)), (_l()(), ??and(16777216, null, null, 1, null, View_DetailFormComponent_17)), ??did(19, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "form-group farris-form-group"; var currVal_1 = _ck(_v, 4, 0, false); _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_3 = false; _ck(_v, 8, 0, currVal_3); var currVal_5 = _co.viewModel.stateMachine["editable"]; _ck(_v, 14, 0, currVal_5); var currVal_7 = _co.viewModel.form.getCardControlErrors("projectNote"); _ck(_v, 16, 0, currVal_7); var currVal_8 = !_co.viewModel.stateMachine["editable"]; _ck(_v, 19, 0, currVal_8); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = ??inlineInterpolate(1, "", ??unv(_v, 5, 0, _ck(_v, 6, 0, ??nov(_v.parent.parent, 0), "projectNote_60e4aa39_qvd7", _co.lang, "\u9879\u76EE\u5907\u6CE8")), ""); _ck(_v, 5, 0, currVal_2); var currVal_4 = ??unv(_v, 10, 0, _ck(_v, 11, 0, ??nov(_v.parent.parent, 0), "projectNote_60e4aa39_qvd7", _co.lang, "\u9879\u76EE\u5907\u6CE8")); _ck(_v, 10, 0, currVal_4); var currVal_6 = !_co.viewModel.form.isShowValidationMsg; _ck(_v, 15, 0, currVal_6); }); }
            function View_DetailFormComponent_19(_l) { return ??vid(0, [(_l()(), ??eld(0, 0, null, null, 1, "span", [["class", "farris-label-info text-danger"]], null, null, null, null, null)), (_l()(), ??ted(-1, null, ["*"]))], null, null); }
            function View_DetailFormComponent_20(_l) { return ??vid(0, [(_l()(), ??eld(0, 0, null, null, 8, "farris-number-spinner", [["formControlName", "projectSum"], ["id", "projectSum_c8e88808_bpqf"], ["input-end-edit", ""]], [[2, "f-cmp-number-spinner", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], null, null, View_NumberSpinnerComponent_0, RenderType_NumberSpinnerComponent)), ??did(1, 4964352, null, 0, NumberSpinnerComponent, [ElementRef, Renderer2, Injector], { readonly: [0, "readonly"], placeholder: [1, "placeholder"], step: [2, "step"], min: [3, "min"], bigNumber: [4, "bigNumber"], showButton: [5, "showButton"], useThousands: [6, "useThousands"], textAlign: [7, "textAlign"], canNull: [8, "canNull"], precision: [9, "precision"], showZero: [10, "showZero"] }, null), ??ppd(2, 3), ??prd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [NumberSpinnerComponent]), ??did(4, 671744, null, 0, FormControlName, [[3, ControlContainer], [8, null], [8, null], [6, NG_VALUE_ACCESSOR], [2, ??angular_packages_forms_forms_k]], { name: [0, "name"] }, null), ??prd(2048, null, NgControl, null, [FormControlName]), ??did(6, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null), ??did(7, 212992, null, 0, InputEndEditDirective, [AppContext, ElementRef], null, null), ??did(8, 4276224, null, 0, ??a, [ElementRef, Injector, Renderer2, [8, null]], { tabIndex: [0, "tabIndex"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_8 = !_co.viewModel.stateMachine["editable"]; var currVal_9 = ??inlineInterpolate(1, "", ??unv(_v, 1, 1, _ck(_v, 2, 0, ??nov(_v.parent.parent.parent, 0), "NumberSpinner/projectSum_c8e88808_bpqf/placeHolder", _co.lang, "")), ""); var currVal_10 = 1; var currVal_11 = 0; var currVal_12 = false; var currVal_13 = true; var currVal_14 = true; var currVal_15 = "left"; var currVal_16 = true; var currVal_17 = 2; var currVal_18 = true; _ck(_v, 1, 1, [currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18]); var currVal_19 = "projectSum"; _ck(_v, 4, 0, currVal_19); _ck(_v, 7, 0); var currVal_20 = (0 - 1); _ck(_v, 8, 0, currVal_20); }, function (_ck, _v) { var currVal_0 = ??nov(_v, 1).hostClass; var currVal_1 = ??nov(_v, 6).ngClassUntouched; var currVal_2 = ??nov(_v, 6).ngClassTouched; var currVal_3 = ??nov(_v, 6).ngClassPristine; var currVal_4 = ??nov(_v, 6).ngClassDirty; var currVal_5 = ??nov(_v, 6).ngClassValid; var currVal_6 = ??nov(_v, 6).ngClassInvalid; var currVal_7 = ??nov(_v, 6).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }); }
            function View_DetailFormComponent_21(_l) { return ??vid(0, [(_l()(), ??eld(0, 0, null, null, 5, "farris-text", [["formControlName", "projectSum"]], [[2, "f-component-text", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "mouseenter"]], function (_v, en, $event) { var ad = true; if (("mouseenter" === en)) {
                    var pd_0 = (??nov(_v, 1).changeTitle($event) !== false);
                    ad = (pd_0 && ad);
                } return ad; }, View_TextComponent_0, RenderType_TextComponent)), ??did(1, 4440064, null, 0, TextComponent, [DateTimeHelperService, NumberHelperService, Injector, NgZone], { type: [0, "type"], textAlign: [1, "textAlign"], option: [2, "option"] }, null), ??prd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [TextComponent]), ??did(3, 671744, null, 0, FormControlName, [[3, ControlContainer], [8, null], [8, null], [6, NG_VALUE_ACCESSOR], [2, ??angular_packages_forms_forms_k]], { name: [0, "name"] }, null), ??prd(2048, null, NgControl, null, [FormControlName]), ??did(5, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null)], function (_ck, _v) { var _co = _v.component; var currVal_8 = "number"; var currVal_9 = "left"; var currVal_10 = _co.projectSumC8e88808BpqfTextOptions; _ck(_v, 1, 0, currVal_8, currVal_9, currVal_10); var currVal_11 = "projectSum"; _ck(_v, 3, 0, currVal_11); }, function (_ck, _v) { var currVal_0 = ??nov(_v, 1).cls; var currVal_1 = ??nov(_v, 5).ngClassUntouched; var currVal_2 = ??nov(_v, 5).ngClassTouched; var currVal_3 = ??nov(_v, 5).ngClassPristine; var currVal_4 = ??nov(_v, 5).ngClassDirty; var currVal_5 = ??nov(_v, 5).ngClassValid; var currVal_6 = ??nov(_v, 5).ngClassInvalid; var currVal_7 = ??nov(_v, 5).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }); }
            function View_DetailFormComponent_18(_l) { return ??vid(0, [(_l()(), ??eld(0, 0, null, null, 19, "div", [["class", "col-12"]], null, null, null, null, null)), (_l()(), ??eld(1, 0, null, null, 18, "div", [["class", "farris-group-wrap"]], null, null, null, null, null)), (_l()(), ??eld(2, 0, null, null, 17, "div", [["class", "form-group farris-form-group"]], null, null, null, null, null)), ??did(3, 278528, null, 0, NgClass, [IterableDiffers, KeyValueDiffers, ElementRef, Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), ??pod(4, { "form-group--has-tips": 0 }), (_l()(), ??eld(5, 0, null, null, 6, "label", [["class", "col-form-label"], ["for", "projectSum_c8e88808_bpqf"]], [[8, "title", 0]], null, null, null, null)), ??ppd(6, 3), (_l()(), ??and(16777216, null, null, 1, null, View_DetailFormComponent_19)), ??did(8, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ??eld(9, 0, null, null, 2, "span", [["class", "farris-label-text"]], null, null, null, null, null)), (_l()(), ??ted(10, null, ["", ""])), ??ppd(11, 3), (_l()(), ??eld(12, 0, null, null, 7, "div", [["class", "farris-input-wrap"]], null, null, null, null, null)), (_l()(), ??and(16777216, null, null, 1, null, View_DetailFormComponent_20)), ??did(14, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ??eld(15, 0, null, null, 1, "validationMessage", [], [[8, "hidden", 0]], null, null, View_ValidationMessageComponent_0, RenderType_ValidationMessageComponent)), ??did(16, 573440, null, 0, ValidationMessageComponent, [ElementRef], { errors: [0, "errors"] }, null), (_l()(), ??eld(17, 0, null, null, 0, "div", [["class", "farris-feedback"]], null, null, null, null, null)), (_l()(), ??and(16777216, null, null, 1, null, View_DetailFormComponent_21)), ??did(19, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "form-group farris-form-group"; var currVal_1 = _ck(_v, 4, 0, false); _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_3 = false; _ck(_v, 8, 0, currVal_3); var currVal_5 = _co.viewModel.stateMachine["editable"]; _ck(_v, 14, 0, currVal_5); var currVal_7 = _co.viewModel.form.getCardControlErrors("projectSum"); _ck(_v, 16, 0, currVal_7); var currVal_8 = !_co.viewModel.stateMachine["editable"]; _ck(_v, 19, 0, currVal_8); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = ??inlineInterpolate(1, "", ??unv(_v, 5, 0, _ck(_v, 6, 0, ??nov(_v.parent.parent, 0), "projectSum_c8e88808_bpqf", _co.lang, "\u9879\u76EE\u91D1\u989D")), ""); _ck(_v, 5, 0, currVal_2); var currVal_4 = ??unv(_v, 10, 0, _ck(_v, 11, 0, ??nov(_v.parent.parent, 0), "projectSum_c8e88808_bpqf", _co.lang, "\u9879\u76EE\u91D1\u989D")); _ck(_v, 10, 0, currVal_4); var currVal_6 = !_co.viewModel.form.isShowValidationMsg; _ck(_v, 15, 0, currVal_6); }); }
            function View_DetailFormComponent_1(_l) { return ??vid(0, [(_l()(), ??eld(0, 0, null, null, 22, "farris-section", [["class", "f-section-form f-section-in-main"], ["id", "detail-form-section"]], [[2, "f-section", null], [2, "f-section-maximize", null], [2, "f-section-fill", null], [2, "f-section-accordion", null], [2, "f-state-collapse", null], [2, "f-section-custom-accordion", null]], null, null, View_FarrisSectionComponent_0, RenderType_FarrisSectionComponent)), ??did(1, 245760, null, 7, FarrisSectionComponent, [[2, Injector]], { mainTitle: [0, "mainTitle"], subTitle: [1, "subTitle"], showHeader: [2, "showHeader"], enableMaximize: [3, "enableMaximize"], fill: [4, "fill"], expandStatus: [5, "expandStatus"], index: [6, "index"] }, null), ??qud(335544320, 1, { headerDirective: 0 }), ??qud(335544320, 2, { headerTitleDirective: 0 }), ??qud(335544320, 3, { headerContentDirective: 0 }), ??qud(335544320, 4, { headerToolbarDirective: 0 }), ??qud(335544320, 5, { extendDirective: 0 }), ??qud(335544320, 6, { contentDirective: 0 }), ??qud(335544320, 7, { viewChangeDirective: 0 }), (_l()(), ??eld(9, 0, null, 0, 13, "div", [["class", "f-form-layout farris-form farris-form-controls-inline"], ["id", "detail-form-layout"]], [[2, "farris-form-controls-inline", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; if (("submit" === en)) {
                    var pd_0 = (??nov(_v, 10).onSubmit($event) !== false);
                    ad = (pd_0 && ad);
                } if (("reset" === en)) {
                    var pd_1 = (??nov(_v, 10).onReset() !== false);
                    ad = (pd_1 && ad);
                } return ad; }, null, null)), ??did(10, 540672, null, 0, FormGroupDirective, [[8, null], [8, null]], { form: [0, "form"] }, null), ??prd(2048, null, ControlContainer, null, [FormGroupDirective]), ??did(12, 16384, null, 0, NgControlStatusGroup, [[4, ControlContainer]], null, null), (_l()(), ??and(16777216, null, null, 1, null, View_DetailFormComponent_2)), ??did(14, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ??and(16777216, null, null, 1, null, View_DetailFormComponent_6)), ??did(16, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ??and(16777216, null, null, 1, null, View_DetailFormComponent_10)), ??did(18, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ??and(16777216, null, null, 1, null, View_DetailFormComponent_14)), ??did(20, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ??and(16777216, null, null, 1, null, View_DetailFormComponent_18)), ??did(22, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_6 = _co.SectiondetailformsectionMainTitle; var currVal_7 = _co.SectiondetailformsectionSubTitle; var currVal_8 = true; var currVal_9 = false; var currVal_10 = false; var currVal_11 = true; var currVal_12 = _co.index; _ck(_v, 1, 0, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12); var currVal_21 = _co.viewModel.form; _ck(_v, 10, 0, currVal_21); var currVal_22 = true; _ck(_v, 14, 0, currVal_22); var currVal_23 = true; _ck(_v, 16, 0, currVal_23); var currVal_24 = true; _ck(_v, 18, 0, currVal_24); var currVal_25 = true; _ck(_v, 20, 0, currVal_25); var currVal_26 = true; _ck(_v, 22, 0, currVal_26); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = ??nov(_v, 1).baseCls; var currVal_1 = ??nov(_v, 1).maxStatus; var currVal_2 = ??nov(_v, 1).fillCls; var currVal_3 = ??nov(_v, 1).enableAccordionCls; var currVal_4 = ??nov(_v, 1).enableCollapseCls; var currVal_5 = ??nov(_v, 1).enableCustomAccordionCls; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5); var currVal_13 = ((_co.lang === "zh-CHS") || (_co.lang === "zh-CHT")); var currVal_14 = ??nov(_v, 12).ngClassUntouched; var currVal_15 = ??nov(_v, 12).ngClassTouched; var currVal_16 = ??nov(_v, 12).ngClassPristine; var currVal_17 = ??nov(_v, 12).ngClassDirty; var currVal_18 = ??nov(_v, 12).ngClassValid; var currVal_19 = ??nov(_v, 12).ngClassInvalid; var currVal_20 = ??nov(_v, 12).ngClassPending; _ck(_v, 9, 0, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20); }); }
            function View_DetailFormComponent_0(_l) { return ??vid(0, [??pid(0, LangPipe, [TranslateService, HttpClient]), (_l()(), ??and(16777216, null, null, 1, null, View_DetailFormComponent_1)), ??did(2, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = true; _ck(_v, 2, 0, currVal_0); }, null); }
            function View_DetailFormComponent_Host_0(_l) { return ??vid(0, [(_l()(), ??eld(0, 0, null, null, 82, "app-detailformcomponent", [], [[8, "className", 0]], null, null, View_DetailFormComponent_0, RenderType_DetailFormComponent)), ??prd(4608, null, ViewModel, DetailFormComponentViewmodel, []), ??prd(4608, null, CommandService, CommandService, [ViewModel, AppContext]), ??prd(4608, null, CardDataService, CardDataService, [FormMessageService, FrameContext, FormLoadingService, FormNotifyService, [2, LanguageService], FormErrorService, RuntimeFrameworkService, CommandService]), ??prd(4608, null, StateMachineService, StateMachineService, [StateMachine]), ??prd(4608, null, EndEditService, EndEditService, [FrameContext]), ??prd(4608, null, ValidationService, ValidationService, [Repository, FrameContext]), ??prd(4608, null, BindingData, BindingData, []), ??prd(4608, null, ListDataService, ListDataService, [FormMessageService, Repository, BindingData, FormLoadingService, [2, LanguageService], FormNotifyService, FormErrorService, ViewModel, FilterConditionService]), ??prd(5120, null, COMMAND_HANDLERS_TOKEN, function (p0_0, p0_1, p1_0, p1_1, p1_2, p1_3, p1_4, p2_0, p2_1, p2_2, p2_3, p2_4) { return [new edit1Handler(p0_0, p0_1), new save1Handler(p1_0, p1_1, p1_2, p1_3, p1_4), new cancel1Handler(p2_0, p2_1, p2_2, p2_3, p2_4)]; }, [CardDataService, StateMachineService, EndEditService, ValidationService, ListDataService, CardDataService, StateMachineService, EndEditService, ValidationService, ListDataService, CardDataService, StateMachineService]), ??prd(4608, null, CommandHandlerRegistry, CommandHandlerRegistry, [[2, COMMAND_HANDLERS_TOKEN]]), ??prd(4608, null, CommandHandlerExtenderRegistry, CommandHandlerExtenderRegistry, [[2, COMMAND_HANDLER_EXTENDERS_TOKEN]]), ??prd(4608, null, CommandHandlerFactory, CommandHandlerFactory, [CommandHandlerRegistry, CommandHandlerExtenderRegistry, FrameContext, VariableParseService]), ??prd(4608, null, CommandBus, CommandBus, [CommandHandlerFactory]), ??prd(4608, null, ChangeItemService, ChangeItemService, [Repository, FrameContext, FormNotifyService, LanguageService]), ??prd(4608, null, UIStateService, UIStateService, []), ??prd(4608, null, BindingDataService, BindingDataService, [BindingData, AppContext]), ??prd(4608, null, EntityTraversingService, EntityTraversingService, [FrameContext]), ??prd(4608, null, EntityManipulationService, EntityManipulationService, [FrameContext]), ??prd(4608, null, EntityAggregationService, EntityAggregationService, [FrameContext]), ??prd(4608, null, EntityListService, EntityListService, [BindingData]), ??prd(4608, null, EntityService, EntityService, [FrameContext]), ??prd(4608, null, TreeDataService, TreeDataService, [FrameContext, FormMessageService, FormLoadingService, FormNotifyService, FormErrorService, [2, LanguageService]]), ??prd(4608, null, SubTreeDataService, SubTreeDataService, [FrameContext, ViewModel, FormMessageService, FormLoadingService, FormErrorService, FormNotifyService, [2, LanguageService]]), ??prd(4608, null, SubListDataService, SubListDataService, [FormMessageService, Repository, FormLoadingService, ViewModel, [2, LanguageService], FormNotifyService, FormErrorService]), ??prd(4608, null, RemoveDataService, RemoveDataService, [FrameContext]), ??prd(4608, null, SaveDataService, SaveDataService, [FrameContext]), ??prd(4608, null, EditDataService, EditDataService, [FrameContext]), ??prd(4608, null, FilterConditionDataService, FilterConditionDataService, [ViewModel, FilterConditionService, CommandService]), ??prd(4608, null, RemoteSummaryService, RemoteSummaryService, [ViewModel]), ??prd(4608, null, BeActionService, BeActionService, [Repository, FormLoadingService, FormMessageService, FormNotifyService, FormErrorService, [2, LanguageService]]), ??prd(4608, null, ApproveService, ApproveService, [FormLoadingService, BeActionService, FormMessageService, FormNotifyService, [2, LanguageService], FormErrorService, FrameContext, [2, WFSubmiteService], [2, WFFlowchartService], [2, WfTaskHandlerService]]), ??prd(4608, null, PrintService, PrintService, [FormMessageService, LanguageService, CloudprintService, [2, FormNotifyService]]), ??prd(4608, null, AttachmentDataService, AttachmentDataService, [FrameContext, FormLoadingService]), ??prd(4608, null, AttachmentService, AttachmentService, [FrameContext, AttachmentDataService, FormNotifyService, UploadDialogService, [2, DownloadService]]), ??prd(4608, null, FileService, FileService, [FrameContext, AttachmentDataService, EntityService, SubListDataService, FormNotifyService, LanguageService, ListDataService, [2, FormLoadingService]]), ??prd(4608, null, NavigationEventService, NavigationEventService, [RuntimeFrameworkService, MenuStateService, QuerystringService]), ??prd(4608, null, NavigationService, NavigationService, [RuntimeFrameworkService, MenuStateService, NavigationEventService, QuerystringService, [2, FrameContext], [2, Injector]]), ??prd(4608, null, NavigationMiddlewareService, NavigationMiddlewareService, [NavigationService, FrameContext, FormMessageService, [2, LanguageService], CardDataService]), ??prd(4608, null, GridMiddlewareService, GridMiddlewareService, [FrameContext, FormMessageService, [2, LanguageService], ViewModel, CommandService]), ??prd(4608, null, SidebarService, SidebarService, [FrameContext, FarrisSidebarService, FormMessageService, [2, LanguageService]]), ??prd(4608, null, FarrisFormService, FarrisFormService, [[2, FARRIS_FORM_COMPONENTS]]), ??prd(4608, null, DialogService$1, DialogService$1, [BsModalService, FarrisFormService, ComponentFactoryResolver, FrameContext, [2, Injector]]), ??prd(4608, null, RouterService, RouterService, [Router, RouterParamService, FrameworkService, [2, AppService], [2, MenuStateService], [2, LanguageService]]), ??prd(4608, null, AuthorityService, AuthorityService, []), ??prd(4608, null, QUERYSOLUTION_HANDLER_TOKEN, ??b, [FrameContext, FrameworkSessionService]), ??prd(4608, null, LISTFILTER_HANDLER_TOKEN, ??c, [FrameContext]), ??prd(4608, null, BatchEditDialogService, BatchEditDialogService, [Injector, BsModalService, ComponentFactoryResolver, LocaleService]), ??prd(4608, null, BatchEditService, BatchEditService, [Injector, ComponentManagerService, ViewModel, Repository, BatchEditDialogService, DateTimeHelperService, LanguageService, FormNotifyService]), ??prd(4608, null, DiscussionGroupService, DiscussionGroupService, [Injector, FrameContext, FormLoadingService, RuntimeFrameworkService]), ??prd(4608, null, DataGridService, DataGridService, []), ??prd(4608, null, FormAttentionService, FormAttentionService, [Injector, FrameContext, AttentionService]), ??prd(4608, null, FeatureEditorService, FeatureEditorService, [Injector, BsModalService, ComponentFactoryResolver, LocaleService, I18nService]), ??prd(4608, null, FeatureDataService, FeatureDataService, [Injector, FeatureRepository, [2, LOCALE_ID]]), ??prd(4608, null, FeatureEditService, FeatureEditService, [Injector, FeatureEditorService, FeatureDataService, FormLoadingService, FormNotifyService, LanguageService]), ??prd(4608, null, ExpressionService, ExpressionService, [Injector, ResolveService, FrameContext, ExpressionExecutor]), ??prd(4608, null, PopUpService, PopUpService, [Injector, FrameContext, Repository, LanguageService, FormMessageService]), ??prd(4608, null, DirtyCheckingService, DirtyCheckingService, [Injector, ChangeDetectorRef, ApplicationRef]), ??prd(4608, null, FormService, FormService, [Injector, AppContext, Repository]), ??prd(4608, null, ViewModelService, ViewModelService, []), ??prd(4608, null, PaginationService$1, PaginationService$1, [Injector, FrameContext]), ??prd(4608, null, FORM_MANIFEST_SERVICE_TOKEN, FormManifestService, [Injector, FORM_PATH_TOKEN, HttpClient]), ??prd(4608, null, FORM_EXPRESSION_MANIFEST_SERVICE_TOKEN, FormExpressionManifestService, [Injector, FrameContext, HttpClient, FORM_PATH_TOKEN, FORM_MANIFEST_SERVICE_TOKEN]), ??prd(4608, null, MESSAGE_SERVICE_TOKEN, FormMessageService, [MessagerService, [2, LanguageService], LOCALE_ID]), ??prd(4608, null, NOTIFY_SERVICE_TOKEN, FormNotifyService, [NotifyService, [2, LanguageService]]), ??prd(5120, null, FRAME_COMPONENT_INIT_HANDLER_TOKEN, function (p0_0, p0_1, p0_2, p0_3) { return [new WorkFlowMessageHandler(p0_0, p0_1, p0_2, p0_3)]; }, [Injector, FrameContext, WorkFlowMessageService, WorkFlowMessage]), ??prd(4608, null, ServerSideToken, BefLookupRestService, [Repository, [2, FrameContext]]), ??prd(4608, null, ComboServerSideToken, DefaultComboHttpService, [Repository]), ??prd(4608, null, Form, DetailFormComponentViewmodelForm, []), ??prd(4608, null, UIState, DetailFormComponentViewmodelUIState, []), ??prd(4608, null, DataImportExportService, DataImportExportService, [BsModalService, ComponentFactoryResolver, Injector, FrameContext, ??f, NotifyService, EntityListService, ??g, DataieHandcraftService, HttpClient, LoadingService, ??c$1]), ??prd(512, null, LangService, LangService, [TranslateService]), ??prd(512, null, LocalizationService, LocalizationService, [Injector, UserSettingsToken]), ??prd(2048, null, Repository, null, [ProjectsFanwzRepository]), ??prd(512, null, FrameContext, FrameContext, [Injector, [3, FrameContext]]), ??prd(512, null, BindingPathService, BindingPathService, [Injector, AppContext, Repository]), ??prd(512, null, FormControlService, FormControlService, []), ??prd(512, null, FrameContextService, FrameContextService, [Injector, AppContext, FrameContext, Repository, BindingPathService, FormControlService]), ??prd(512, null, FocusInvalidService, FocusInvalidService, [Repository, FrameContext, FrameContextService, FormControlService]), ??did(79, 4440064, null, 0, DetailFormComponent, [WizardService, KeybindingService, LangService, ActivatedRoute, Router, ElementRef, LocalizationService, FrmI18nSettingService, FocusInvalidService, DomSanitizer, Injector], null, null), ??prd(256, null, FRAME_ID, "detail-form-component", []), ??prd(256, null, NAMESPACE, "", []), ??prd(256, null, EXCEPTION_HANDLER, null, [])], function (_ck, _v) { _ck(_v, 79, 0); }, function (_ck, _v) { var currVal_0 = ??nov(_v, 79).cls; _ck(_v, 0, 0, currVal_0); }); }
            var DetailFormComponentNgFactory = ??ccf("app-detailformcomponent", DetailFormComponent, View_DetailFormComponent_Host_0, {}, {}, []);

            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             *
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */ 
            var styles_RootComponent = [styles];
            var RenderType_RootComponent = ??crt({ encapsulation: 0, styles: styles_RootComponent, data: {} });
            function View_RootComponent_4(_l) { return ??vid(0, [(_l()(), ??eld(0, 0, null, null, 4, "div", [["class", "f-title"], ["id", "header-title-container"]], null, null, null, null, null)), (_l()(), ??eld(1, 0, null, null, 1, "span", [["class", "f-title-icon f-text-orna-dict"]], null, null, null, null, null)), (_l()(), ??eld(2, 0, null, null, 0, "i", [["class", "f-icon f-icon-page-title-dictionary"]], null, null, null, null, null)), (_l()(), ??eld(3, 0, null, null, 1, "h4", [["class", "f-title-text"]], null, null, null, null, null)), (_l()(), ??ted(-1, null, ["\u9879\u76EE\u5B57\u5178Fanwz"]))], null, null); }
            function View_RootComponent_5(_l) { return ??vid(0, [(_l()(), ??eld(0, 0, null, null, 1, "f-response-toolbar", [["class", "col-7 f-toolbar"], ["id", "page-header-toolbar"]], [[2, "f-response-toolbar", null], [2, "position-relative", null]], [[null, "rtClickEvent"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("rtClickEvent" === en)) {
                    var pd_0 = (_co.pageHeaderToolbarClickHandler($event) !== false);
                    ad = (pd_0 && ad);
                } return ad; }, View_ResponseToolbarComponent_0, RenderType_ResponseToolbarComponent)), ??did(1, 13090816, [["responsebar", 4]], 0, ResponseToolbarComponent, [ElementRef, Renderer2, ChangeDetectorRef, LocaleService], { datas: [0, "datas"], btnState: [1, "btnState"], btnVisible: [2, "btnVisible"] }, { rtClickEvent: "rtClickEvent" })], function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.pageHeaderToolbarToolbarItems; var currVal_3 = _co.pageHeaderToolbarToolbarItemsStates; var currVal_4 = _co.pageHeaderToolbarToolbarItemsVisibleStates; _ck(_v, 1, 0, currVal_2, currVal_3, currVal_4); }, function (_ck, _v) { var currVal_0 = ??nov(_v, 1).frtCls; var currVal_1 = ??nov(_v, 1).prCls; _ck(_v, 0, 0, currVal_0, currVal_1); }); }
            function View_RootComponent_3(_l) { return ??vid(0, [(_l()(), ??eld(0, 0, null, null, 4, "div", [["class", "f-page-header-base"], ["id", "header-nav"]], null, null, null, null, null)), (_l()(), ??and(16777216, null, null, 1, null, View_RootComponent_4)), ??did(2, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ??and(16777216, null, null, 1, null, View_RootComponent_5)), ??did(4, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = true; _ck(_v, 2, 0, currVal_0); var currVal_1 = true; _ck(_v, 4, 0, currVal_1); }, null); }
            function View_RootComponent_2(_l) { return ??vid(0, [(_l()(), ??eld(0, 0, null, null, 2, "div", [["class", "f-page-header"], ["id", "page-header"]], null, null, null, null, null)), (_l()(), ??and(16777216, null, null, 1, null, View_RootComponent_3)), ??did(2, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = true; _ck(_v, 2, 0, currVal_0); }, null); }
            function View_RootComponent_6(_l) { return ??vid(0, [(_l()(), ??eld(0, 0, null, null, 175, "div", [["class", "f-page-main"], ["id", "main-container"]], null, null, null, null, null)), (_l()(), ??eld(1, 0, null, null, 174, "farris-splitter", [["class", "f-page-content"], ["id", "content-splitter"]], [[2, "f-component-splitter", null]], null, null, View_SplitterComponent_0, RenderType_SplitterComponent)), ??did(2, 1163264, null, 1, SplitterComponent, [], null, null), ??qud(603979776, 1, { splitterPane: 1 }), (_l()(), ??eld(4, 0, null, 0, 86, "farris-splitter-pane", [["class", "f-col-w6 f-page-content-nav"], ["ngResizable", ""]], [[2, "f-component-splitter-pane", null]], null, null, View_SplitterPaneComponent_0, RenderType_SplitterPaneComponent)), ??did(5, 4931584, null, 0, AngularResizableDirective, [ElementRef, Renderer2], { ngResizable: [0, "ngResizable"], rzHandles: [1, "rzHandles"] }, null), ??did(6, 114688, [[1, 4]], 0, SplitterPaneComponent, [], null, null), (_l()(), ??eld(7, 0, null, 0, 83, "app-datagridcomponent", [], [[8, "className", 0]], null, null, View_DataGridComponent_0, RenderType_DataGridComponent)), ??prd(4608, null, NavigationEventService, NavigationEventService, [RuntimeFrameworkService, MenuStateService, QuerystringService]), ??prd(4608, null, NavigationService, NavigationService, [RuntimeFrameworkService, MenuStateService, NavigationEventService, QuerystringService, [2, FrameContext], [2, Injector]]), ??prd(4608, null, ViewModel, DataGridComponentViewmodel, []), ??prd(4608, null, CommandService, CommandService, [ViewModel, AppContext]), ??prd(4608, null, CardDataService, CardDataService, [FormMessageService, FrameContext, FormLoadingService, FormNotifyService, [2, LanguageService], FormErrorService, RuntimeFrameworkService, CommandService]), ??prd(4608, null, NavigationMiddlewareService, NavigationMiddlewareService, [NavigationService, FrameContext, FormMessageService, [2, LanguageService], CardDataService]), ??prd(4608, null, BindingData, BindingData, []), ??prd(4608, null, ListDataService, ListDataService, [FormMessageService, Repository, BindingData, FormLoadingService, [2, LanguageService], FormNotifyService, FormErrorService, ViewModel, FilterConditionService]), ??prd(4608, null, StateMachineService, StateMachineService, [StateMachine]), ??prd(5120, null, COMMAND_HANDLERS_TOKEN, function (p0_0, p0_1, p1_0, p2_0, p3_0, p3_1, p4_0) { return [new loadList1Handler(p0_0, p0_1), new remove1Handler(p1_0), new loadCard1Handler(p2_0), new add1Handler(p3_0, p3_1), new changePage1Handler(p4_0)]; }, [NavigationMiddlewareService, ListDataService, ListDataService, CardDataService, ListDataService, StateMachineService, CommandService]), ??prd(4608, null, CommandHandlerRegistry, CommandHandlerRegistry, [[2, COMMAND_HANDLERS_TOKEN]]), ??prd(4608, null, CommandHandlerExtenderRegistry, CommandHandlerExtenderRegistry, [[2, COMMAND_HANDLER_EXTENDERS_TOKEN]]), ??prd(4608, null, CommandHandlerFactory, CommandHandlerFactory, [CommandHandlerRegistry, CommandHandlerExtenderRegistry, FrameContext, VariableParseService]), ??prd(4608, null, CommandBus, CommandBus, [CommandHandlerFactory]), ??prd(4608, null, ValidationService, ValidationService, [Repository, FrameContext]), ??prd(4608, null, ChangeItemService, ChangeItemService, [Repository, FrameContext, FormNotifyService, LanguageService]), ??prd(4608, null, UIStateService, UIStateService, []), ??prd(4608, null, BindingDataService, BindingDataService, [BindingData, AppContext]), ??prd(4608, null, EntityTraversingService, EntityTraversingService, [FrameContext]), ??prd(4608, null, EntityManipulationService, EntityManipulationService, [FrameContext]), ??prd(4608, null, EntityAggregationService, EntityAggregationService, [FrameContext]), ??prd(4608, null, EntityListService, EntityListService, [BindingData]), ??prd(4608, null, EntityService, EntityService, [FrameContext]), ??prd(4608, null, TreeDataService, TreeDataService, [FrameContext, FormMessageService, FormLoadingService, FormNotifyService, FormErrorService, [2, LanguageService]]), ??prd(4608, null, SubTreeDataService, SubTreeDataService, [FrameContext, ViewModel, FormMessageService, FormLoadingService, FormErrorService, FormNotifyService, [2, LanguageService]]), ??prd(4608, null, SubListDataService, SubListDataService, [FormMessageService, Repository, FormLoadingService, ViewModel, [2, LanguageService], FormNotifyService, FormErrorService]), ??prd(4608, null, RemoveDataService, RemoveDataService, [FrameContext]), ??prd(4608, null, SaveDataService, SaveDataService, [FrameContext]), ??prd(4608, null, EditDataService, EditDataService, [FrameContext]), ??prd(4608, null, FilterConditionDataService, FilterConditionDataService, [ViewModel, FilterConditionService, CommandService]), ??prd(4608, null, RemoteSummaryService, RemoteSummaryService, [ViewModel]), ??prd(4608, null, BeActionService, BeActionService, [Repository, FormLoadingService, FormMessageService, FormNotifyService, FormErrorService, [2, LanguageService]]), ??prd(4608, null, ApproveService, ApproveService, [FormLoadingService, BeActionService, FormMessageService, FormNotifyService, [2, LanguageService], FormErrorService, FrameContext, [2, WFSubmiteService], [2, WFFlowchartService], [2, WfTaskHandlerService]]), ??prd(4608, null, PrintService, PrintService, [FormMessageService, LanguageService, CloudprintService, [2, FormNotifyService]]), ??prd(4608, null, AttachmentDataService, AttachmentDataService, [FrameContext, FormLoadingService]), ??prd(4608, null, AttachmentService, AttachmentService, [FrameContext, AttachmentDataService, FormNotifyService, UploadDialogService, [2, DownloadService]]), ??prd(4608, null, FileService, FileService, [FrameContext, AttachmentDataService, EntityService, SubListDataService, FormNotifyService, LanguageService, ListDataService, [2, FormLoadingService]]), ??prd(4608, null, GridMiddlewareService, GridMiddlewareService, [FrameContext, FormMessageService, [2, LanguageService], ViewModel, CommandService]), ??prd(4608, null, SidebarService, SidebarService, [FrameContext, FarrisSidebarService, FormMessageService, [2, LanguageService]]), ??prd(4608, null, FarrisFormService, FarrisFormService, [[2, FARRIS_FORM_COMPONENTS]]), ??prd(4608, null, DialogService$1, DialogService$1, [BsModalService, FarrisFormService, ComponentFactoryResolver, FrameContext, [2, Injector]]), ??prd(4608, null, RouterService, RouterService, [Router, RouterParamService, FrameworkService, [2, AppService], [2, MenuStateService], [2, LanguageService]]), ??prd(4608, null, AuthorityService, AuthorityService, []), ??prd(4608, null, QUERYSOLUTION_HANDLER_TOKEN, ??b, [FrameContext, FrameworkSessionService]), ??prd(4608, null, LISTFILTER_HANDLER_TOKEN, ??c, [FrameContext]), ??prd(4608, null, EndEditService, EndEditService, [FrameContext]), ??prd(4608, null, BatchEditDialogService, BatchEditDialogService, [Injector, BsModalService, ComponentFactoryResolver, LocaleService]), ??prd(4608, null, BatchEditService, BatchEditService, [Injector, ComponentManagerService, ViewModel, Repository, BatchEditDialogService, DateTimeHelperService, LanguageService, FormNotifyService]), ??prd(4608, null, DiscussionGroupService, DiscussionGroupService, [Injector, FrameContext, FormLoadingService, RuntimeFrameworkService]), ??prd(4608, null, DataGridService, DataGridService, []), ??prd(4608, null, FormAttentionService, FormAttentionService, [Injector, FrameContext, AttentionService]), ??prd(4608, null, FeatureEditorService, FeatureEditorService, [Injector, BsModalService, ComponentFactoryResolver, LocaleService, I18nService]), ??prd(4608, null, FeatureDataService, FeatureDataService, [Injector, FeatureRepository, [2, LOCALE_ID]]), ??prd(4608, null, FeatureEditService, FeatureEditService, [Injector, FeatureEditorService, FeatureDataService, FormLoadingService, FormNotifyService, LanguageService]), ??prd(4608, null, ExpressionService, ExpressionService, [Injector, ResolveService, FrameContext, ExpressionExecutor]), ??prd(4608, null, PopUpService, PopUpService, [Injector, FrameContext, Repository, LanguageService, FormMessageService]), ??prd(4608, null, DirtyCheckingService, DirtyCheckingService, [Injector, ChangeDetectorRef, ApplicationRef]), ??prd(4608, null, FormService, FormService, [Injector, AppContext, Repository]), ??prd(4608, null, ViewModelService, ViewModelService, []), ??prd(4608, null, PaginationService$1, PaginationService$1, [Injector, FrameContext]), ??prd(4608, null, FORM_MANIFEST_SERVICE_TOKEN, FormManifestService, [Injector, FORM_PATH_TOKEN, HttpClient]), ??prd(4608, null, FORM_EXPRESSION_MANIFEST_SERVICE_TOKEN, FormExpressionManifestService, [Injector, FrameContext, HttpClient, FORM_PATH_TOKEN, FORM_MANIFEST_SERVICE_TOKEN]), ??prd(4608, null, MESSAGE_SERVICE_TOKEN, FormMessageService, [MessagerService, [2, LanguageService], LOCALE_ID]), ??prd(4608, null, NOTIFY_SERVICE_TOKEN, FormNotifyService, [NotifyService, [2, LanguageService]]), ??prd(5120, null, FRAME_COMPONENT_INIT_HANDLER_TOKEN, function (p0_0, p0_1, p0_2, p0_3) { return [new WorkFlowMessageHandler(p0_0, p0_1, p0_2, p0_3)]; }, [Injector, FrameContext, WorkFlowMessageService, WorkFlowMessage]), ??prd(4608, null, ServerSideToken, BefLookupRestService, [Repository, [2, FrameContext]]), ??prd(4608, null, ComboServerSideToken, DefaultComboHttpService, [Repository]), ??prd(4608, null, GRID_SETTINGS_HTTP, BefLookupRestService, [Repository, [2, FrameContext]]), ??prd(4608, null, Form, DataGridComponentViewmodelForm, []), ??prd(4608, null, UIState, DataGridComponentViewmodelUIState, []), ??prd(4608, null, DataImportExportService, DataImportExportService, [BsModalService, ComponentFactoryResolver, Injector, FrameContext, ??f, NotifyService, EntityListService, ??g, DataieHandcraftService, HttpClient, LoadingService, ??c$1]), ??prd(512, null, LangService, LangService, [TranslateService]), ??prd(512, null, LocalizationService, LocalizationService, [Injector, UserSettingsToken]), ??prd(2048, null, Repository, null, [ProjectsFanwzRepository]), ??prd(512, null, FrameContext, FrameContext, [Injector, [3, FrameContext]]), ??prd(512, null, BindingPathService, BindingPathService, [Injector, AppContext, Repository]), ??prd(512, null, FormControlService, FormControlService, []), ??prd(512, null, FrameContextService, FrameContextService, [Injector, AppContext, FrameContext, Repository, BindingPathService, FormControlService]), ??prd(512, null, FocusInvalidService, FocusInvalidService, [Repository, FrameContext, FrameContextService, FormControlService]), ??did(87, 4440064, null, 0, DataGridComponent, [WizardService, KeybindingService, LangService, ActivatedRoute, Router, ElementRef, LocalizationService, FrmI18nSettingService, FocusInvalidService, CommonUtils, DomSanitizer, Injector], null, null), ??prd(256, null, FRAME_ID, "data-grid-component", []), ??prd(256, null, NAMESPACE, "", []), ??prd(256, null, EXCEPTION_HANDLER, null, []), (_l()(), ??eld(91, 0, null, 0, 84, "farris-splitter-pane", [["class", "f-page-content-main"]], [[2, "f-component-splitter-pane", null]], null, null, View_SplitterPaneComponent_0, RenderType_SplitterPaneComponent)), ??did(92, 114688, [[1, 4]], 0, SplitterPaneComponent, [], null, null), (_l()(), ??eld(93, 0, null, 0, 82, "app-detailformcomponent", [], [[8, "className", 0]], null, null, View_DetailFormComponent_0, RenderType_DetailFormComponent)), ??prd(4608, null, ViewModel, DetailFormComponentViewmodel, []), ??prd(4608, null, CommandService, CommandService, [ViewModel, AppContext]), ??prd(4608, null, CardDataService, CardDataService, [FormMessageService, FrameContext, FormLoadingService, FormNotifyService, [2, LanguageService], FormErrorService, RuntimeFrameworkService, CommandService]), ??prd(4608, null, StateMachineService, StateMachineService, [StateMachine]), ??prd(4608, null, EndEditService, EndEditService, [FrameContext]), ??prd(4608, null, ValidationService, ValidationService, [Repository, FrameContext]), ??prd(4608, null, BindingData, BindingData, []), ??prd(4608, null, ListDataService, ListDataService, [FormMessageService, Repository, BindingData, FormLoadingService, [2, LanguageService], FormNotifyService, FormErrorService, ViewModel, FilterConditionService]), ??prd(5120, null, COMMAND_HANDLERS_TOKEN, function (p0_0, p0_1, p1_0, p1_1, p1_2, p1_3, p1_4, p2_0, p2_1, p2_2, p2_3, p2_4) { return [new edit1Handler(p0_0, p0_1), new save1Handler(p1_0, p1_1, p1_2, p1_3, p1_4), new cancel1Handler(p2_0, p2_1, p2_2, p2_3, p2_4)]; }, [CardDataService, StateMachineService, EndEditService, ValidationService, ListDataService, CardDataService, StateMachineService, EndEditService, ValidationService, ListDataService, CardDataService, StateMachineService]), ??prd(4608, null, CommandHandlerRegistry, CommandHandlerRegistry, [[2, COMMAND_HANDLERS_TOKEN]]), ??prd(4608, null, CommandHandlerExtenderRegistry, CommandHandlerExtenderRegistry, [[2, COMMAND_HANDLER_EXTENDERS_TOKEN]]), ??prd(4608, null, CommandHandlerFactory, CommandHandlerFactory, [CommandHandlerRegistry, CommandHandlerExtenderRegistry, FrameContext, VariableParseService]), ??prd(4608, null, CommandBus, CommandBus, [CommandHandlerFactory]), ??prd(4608, null, ChangeItemService, ChangeItemService, [Repository, FrameContext, FormNotifyService, LanguageService]), ??prd(4608, null, UIStateService, UIStateService, []), ??prd(4608, null, BindingDataService, BindingDataService, [BindingData, AppContext]), ??prd(4608, null, EntityTraversingService, EntityTraversingService, [FrameContext]), ??prd(4608, null, EntityManipulationService, EntityManipulationService, [FrameContext]), ??prd(4608, null, EntityAggregationService, EntityAggregationService, [FrameContext]), ??prd(4608, null, EntityListService, EntityListService, [BindingData]), ??prd(4608, null, EntityService, EntityService, [FrameContext]), ??prd(4608, null, TreeDataService, TreeDataService, [FrameContext, FormMessageService, FormLoadingService, FormNotifyService, FormErrorService, [2, LanguageService]]), ??prd(4608, null, SubTreeDataService, SubTreeDataService, [FrameContext, ViewModel, FormMessageService, FormLoadingService, FormErrorService, FormNotifyService, [2, LanguageService]]), ??prd(4608, null, SubListDataService, SubListDataService, [FormMessageService, Repository, FormLoadingService, ViewModel, [2, LanguageService], FormNotifyService, FormErrorService]), ??prd(4608, null, RemoveDataService, RemoveDataService, [FrameContext]), ??prd(4608, null, SaveDataService, SaveDataService, [FrameContext]), ??prd(4608, null, EditDataService, EditDataService, [FrameContext]), ??prd(4608, null, FilterConditionDataService, FilterConditionDataService, [ViewModel, FilterConditionService, CommandService]), ??prd(4608, null, RemoteSummaryService, RemoteSummaryService, [ViewModel]), ??prd(4608, null, BeActionService, BeActionService, [Repository, FormLoadingService, FormMessageService, FormNotifyService, FormErrorService, [2, LanguageService]]), ??prd(4608, null, ApproveService, ApproveService, [FormLoadingService, BeActionService, FormMessageService, FormNotifyService, [2, LanguageService], FormErrorService, FrameContext, [2, WFSubmiteService], [2, WFFlowchartService], [2, WfTaskHandlerService]]), ??prd(4608, null, PrintService, PrintService, [FormMessageService, LanguageService, CloudprintService, [2, FormNotifyService]]), ??prd(4608, null, AttachmentDataService, AttachmentDataService, [FrameContext, FormLoadingService]), ??prd(4608, null, AttachmentService, AttachmentService, [FrameContext, AttachmentDataService, FormNotifyService, UploadDialogService, [2, DownloadService]]), ??prd(4608, null, FileService, FileService, [FrameContext, AttachmentDataService, EntityService, SubListDataService, FormNotifyService, LanguageService, ListDataService, [2, FormLoadingService]]), ??prd(4608, null, NavigationEventService, NavigationEventService, [RuntimeFrameworkService, MenuStateService, QuerystringService]), ??prd(4608, null, NavigationService, NavigationService, [RuntimeFrameworkService, MenuStateService, NavigationEventService, QuerystringService, [2, FrameContext], [2, Injector]]), ??prd(4608, null, NavigationMiddlewareService, NavigationMiddlewareService, [NavigationService, FrameContext, FormMessageService, [2, LanguageService], CardDataService]), ??prd(4608, null, GridMiddlewareService, GridMiddlewareService, [FrameContext, FormMessageService, [2, LanguageService], ViewModel, CommandService]), ??prd(4608, null, SidebarService, SidebarService, [FrameContext, FarrisSidebarService, FormMessageService, [2, LanguageService]]), ??prd(4608, null, FarrisFormService, FarrisFormService, [[2, FARRIS_FORM_COMPONENTS]]), ??prd(4608, null, DialogService$1, DialogService$1, [BsModalService, FarrisFormService, ComponentFactoryResolver, FrameContext, [2, Injector]]), ??prd(4608, null, RouterService, RouterService, [Router, RouterParamService, FrameworkService, [2, AppService], [2, MenuStateService], [2, LanguageService]]), ??prd(4608, null, AuthorityService, AuthorityService, []), ??prd(4608, null, QUERYSOLUTION_HANDLER_TOKEN, ??b, [FrameContext, FrameworkSessionService]), ??prd(4608, null, LISTFILTER_HANDLER_TOKEN, ??c, [FrameContext]), ??prd(4608, null, BatchEditDialogService, BatchEditDialogService, [Injector, BsModalService, ComponentFactoryResolver, LocaleService]), ??prd(4608, null, BatchEditService, BatchEditService, [Injector, ComponentManagerService, ViewModel, Repository, BatchEditDialogService, DateTimeHelperService, LanguageService, FormNotifyService]), ??prd(4608, null, DiscussionGroupService, DiscussionGroupService, [Injector, FrameContext, FormLoadingService, RuntimeFrameworkService]), ??prd(4608, null, DataGridService, DataGridService, []), ??prd(4608, null, FormAttentionService, FormAttentionService, [Injector, FrameContext, AttentionService]), ??prd(4608, null, FeatureEditorService, FeatureEditorService, [Injector, BsModalService, ComponentFactoryResolver, LocaleService, I18nService]), ??prd(4608, null, FeatureDataService, FeatureDataService, [Injector, FeatureRepository, [2, LOCALE_ID]]), ??prd(4608, null, FeatureEditService, FeatureEditService, [Injector, FeatureEditorService, FeatureDataService, FormLoadingService, FormNotifyService, LanguageService]), ??prd(4608, null, ExpressionService, ExpressionService, [Injector, ResolveService, FrameContext, ExpressionExecutor]), ??prd(4608, null, PopUpService, PopUpService, [Injector, FrameContext, Repository, LanguageService, FormMessageService]), ??prd(4608, null, DirtyCheckingService, DirtyCheckingService, [Injector, ChangeDetectorRef, ApplicationRef]), ??prd(4608, null, FormService, FormService, [Injector, AppContext, Repository]), ??prd(4608, null, ViewModelService, ViewModelService, []), ??prd(4608, null, PaginationService$1, PaginationService$1, [Injector, FrameContext]), ??prd(4608, null, FORM_MANIFEST_SERVICE_TOKEN, FormManifestService, [Injector, FORM_PATH_TOKEN, HttpClient]), ??prd(4608, null, FORM_EXPRESSION_MANIFEST_SERVICE_TOKEN, FormExpressionManifestService, [Injector, FrameContext, HttpClient, FORM_PATH_TOKEN, FORM_MANIFEST_SERVICE_TOKEN]), ??prd(4608, null, MESSAGE_SERVICE_TOKEN, FormMessageService, [MessagerService, [2, LanguageService], LOCALE_ID]), ??prd(4608, null, NOTIFY_SERVICE_TOKEN, FormNotifyService, [NotifyService, [2, LanguageService]]), ??prd(5120, null, FRAME_COMPONENT_INIT_HANDLER_TOKEN, function (p0_0, p0_1, p0_2, p0_3) { return [new WorkFlowMessageHandler(p0_0, p0_1, p0_2, p0_3)]; }, [Injector, FrameContext, WorkFlowMessageService, WorkFlowMessage]), ??prd(4608, null, ServerSideToken, BefLookupRestService, [Repository, [2, FrameContext]]), ??prd(4608, null, ComboServerSideToken, DefaultComboHttpService, [Repository]), ??prd(4608, null, Form, DetailFormComponentViewmodelForm, []), ??prd(4608, null, UIState, DetailFormComponentViewmodelUIState, []), ??prd(4608, null, DataImportExportService, DataImportExportService, [BsModalService, ComponentFactoryResolver, Injector, FrameContext, ??f, NotifyService, EntityListService, ??g, DataieHandcraftService, HttpClient, LoadingService, ??c$1]), ??prd(512, null, LangService, LangService, [TranslateService]), ??prd(512, null, LocalizationService, LocalizationService, [Injector, UserSettingsToken]), ??prd(2048, null, Repository, null, [ProjectsFanwzRepository]), ??prd(512, null, FrameContext, FrameContext, [Injector, [3, FrameContext]]), ??prd(512, null, BindingPathService, BindingPathService, [Injector, AppContext, Repository]), ??prd(512, null, FormControlService, FormControlService, []), ??prd(512, null, FrameContextService, FrameContextService, [Injector, AppContext, FrameContext, Repository, BindingPathService, FormControlService]), ??prd(512, null, FocusInvalidService, FocusInvalidService, [Repository, FrameContext, FrameContextService, FormControlService]), ??did(172, 4440064, null, 0, DetailFormComponent, [WizardService, KeybindingService, LangService, ActivatedRoute, Router, ElementRef, LocalizationService, FrmI18nSettingService, FocusInvalidService, DomSanitizer, Injector], null, null), ??prd(256, null, FRAME_ID, "detail-form-component", []), ??prd(256, null, NAMESPACE, "", []), ??prd(256, null, EXCEPTION_HANDLER, null, [])], function (_ck, _v) { _ck(_v, 2, 0); var currVal_2 = ""; var currVal_3 = "e"; _ck(_v, 5, 0, currVal_2, currVal_3); _ck(_v, 6, 0); _ck(_v, 87, 0); _ck(_v, 92, 0); _ck(_v, 172, 0); }, function (_ck, _v) { var currVal_0 = ??nov(_v, 2).cls; _ck(_v, 1, 0, currVal_0); var currVal_1 = ??nov(_v, 6).cls; _ck(_v, 4, 0, currVal_1); var currVal_4 = ??nov(_v, 87).cls; _ck(_v, 7, 0, currVal_4); var currVal_5 = ??nov(_v, 92).cls; _ck(_v, 91, 0, currVal_5); var currVal_6 = ??nov(_v, 172).cls; _ck(_v, 93, 0, currVal_6); }); }
            function View_RootComponent_1(_l) { return ??vid(0, [(_l()(), ??eld(0, 0, null, null, 4, "div", [["class", "f-page f-page-navigate f-page-is-grid-card"], ["id", "root-layout"]], null, null, null, null, null)), (_l()(), ??and(16777216, null, null, 1, null, View_RootComponent_2)), ??did(2, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ??and(16777216, null, null, 1, null, View_RootComponent_6)), ??did(4, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = true; _ck(_v, 2, 0, currVal_0); var currVal_1 = true; _ck(_v, 4, 0, currVal_1); }, null); }
            function View_RootComponent_0(_l) { return ??vid(0, [(_l()(), ??and(16777216, null, null, 1, null, View_RootComponent_1)), ??did(1, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = true; _ck(_v, 1, 0, currVal_0); }, null); }
            function View_RootComponent_Host_0(_l) { return ??vid(0, [(_l()(), ??eld(0, 0, null, null, 117, "app-rootcomponent", [], [[8, "className", 0]], null, null, View_RootComponent_0, RenderType_RootComponent)), ??prd(4608, null, FrameContext, FrameContext, [Injector, [3, FrameContext]]), ??prd(4608, null, BindingData, BindingData, []), ??prd(4608, null, EntityListService, EntityListService, [BindingData]), ??prd(4608, null, DataImportExportService, DataImportExportService, [BsModalService, ComponentFactoryResolver, Injector, FrameContext, ??f, NotifyService, EntityListService, ??g, DataieHandcraftService, HttpClient, LoadingService, ??c$1]), ??prd(5120, null, COMMAND_HANDLERS_TOKEN, function (p0_0, p1_0) { return [new dataImport1Handler(p0_0), new dataExport1Handler(p1_0)]; }, [DataImportExportService, DataImportExportService]), ??prd(4608, null, CommandHandlerRegistry, CommandHandlerRegistry, [[2, COMMAND_HANDLERS_TOKEN]]), ??prd(4608, null, CommandHandlerExtenderRegistry, CommandHandlerExtenderRegistry, [[2, COMMAND_HANDLER_EXTENDERS_TOKEN]]), ??prd(4608, null, CommandHandlerFactory, CommandHandlerFactory, [CommandHandlerRegistry, CommandHandlerExtenderRegistry, FrameContext, VariableParseService]), ??prd(4608, null, CommandBus, CommandBus, [CommandHandlerFactory]), ??prd(4608, null, ProjectsFanwzRepository, ProjectsFanwzRepository, [Injector]), ??prd(6144, null, Repository, null, [ProjectsFanwzRepository]), ??prd(4608, null, ValidationService, ValidationService, [Repository, FrameContext]), ??prd(4608, null, AppContext, AppContext, [[2, Injector], [2, AppContextManager], [3, AppContext]]), ??prd(4608, null, BindingPathService, BindingPathService, [Injector, AppContext, Repository]), ??prd(4608, null, FormControlService, FormControlService, []), ??prd(4608, null, FrameContextService, FrameContextService, [Injector, AppContext, FrameContext, Repository, BindingPathService, FormControlService]), ??prd(4608, null, FocusInvalidService, FocusInvalidService, [Repository, FrameContext, FrameContextService, FormControlService]), ??prd(4608, null, ChangeItemService, ChangeItemService, [Repository, FrameContext, FormNotifyService, LanguageService]), ??prd(4608, null, UIStateService, UIStateService, []), ??prd(4608, null, StateMachineService, StateMachineService, [StateMachine]), ??prd(4608, null, BindingDataService, BindingDataService, [BindingData, AppContext]), ??prd(4608, null, ViewModel, RootViewmodel, []), ??prd(4608, null, CommandService, CommandService, [ViewModel, AppContext]), ??prd(4608, null, EntityTraversingService, EntityTraversingService, [FrameContext]), ??prd(4608, null, EntityManipulationService, EntityManipulationService, [FrameContext]), ??prd(4608, null, EntityAggregationService, EntityAggregationService, [FrameContext]), ??prd(4608, null, EntityService, EntityService, [FrameContext]), ??prd(4608, null, ListDataService, ListDataService, [FormMessageService, Repository, BindingData, FormLoadingService, [2, LanguageService], FormNotifyService, FormErrorService, ViewModel, FilterConditionService]), ??prd(4608, null, TreeDataService, TreeDataService, [FrameContext, FormMessageService, FormLoadingService, FormNotifyService, FormErrorService, [2, LanguageService]]), ??prd(4608, null, SubTreeDataService, SubTreeDataService, [FrameContext, ViewModel, FormMessageService, FormLoadingService, FormErrorService, FormNotifyService, [2, LanguageService]]), ??prd(4608, null, CardDataService, CardDataService, [FormMessageService, FrameContext, FormLoadingService, FormNotifyService, [2, LanguageService], FormErrorService, RuntimeFrameworkService, CommandService]), ??prd(4608, null, SubListDataService, SubListDataService, [FormMessageService, Repository, FormLoadingService, ViewModel, [2, LanguageService], FormNotifyService, FormErrorService]), ??prd(4608, null, RemoveDataService, RemoveDataService, [FrameContext]), ??prd(4608, null, SaveDataService, SaveDataService, [FrameContext]), ??prd(4608, null, EditDataService, EditDataService, [FrameContext]), ??prd(4608, null, FilterConditionDataService, FilterConditionDataService, [ViewModel, FilterConditionService, CommandService]), ??prd(4608, null, RemoteSummaryService, RemoteSummaryService, [ViewModel]), ??prd(4608, null, BeActionService, BeActionService, [Repository, FormLoadingService, FormMessageService, FormNotifyService, FormErrorService, [2, LanguageService]]), ??prd(4608, null, WFSubmiteService, WFSubmiteService, [Injector, ComponentFactoryResolver, BsModalService, [2, I18nService$1]]), ??prd(4608, null, WFFlowchartService, WFFlowchartService, [MessagerService, Injector, ComponentFactoryResolver, BsModalService]), ??prd(4608, null, ApproveService, ApproveService, [FormLoadingService, BeActionService, FormMessageService, FormNotifyService, [2, LanguageService], FormErrorService, FrameContext, [2, WFSubmiteService], [2, WFFlowchartService], [2, WfTaskHandlerService]]), ??prd(4608, null, CloudprintService, CloudprintService, [??a$1, ComponentFactoryResolver, ??b$1, ??c$2, Injector, ApplicationRef, NotifyService, AppService, WindowService, BsModalService]), ??prd(4608, null, PrintService, PrintService, [FormMessageService, LanguageService, CloudprintService, [2, FormNotifyService]]), ??prd(4608, null, AttachmentDataService, AttachmentDataService, [FrameContext, FormLoadingService]), ??prd(4608, null, AttachmentService, AttachmentService, [FrameContext, AttachmentDataService, FormNotifyService, UploadDialogService, [2, DownloadService]]), ??prd(4608, null, FileService, FileService, [FrameContext, AttachmentDataService, EntityService, SubListDataService, FormNotifyService, LanguageService, ListDataService, [2, FormLoadingService]]), ??prd(4608, null, NavigationEventService, NavigationEventService, [RuntimeFrameworkService, MenuStateService, QuerystringService]), ??prd(4608, null, NavigationService, NavigationService, [RuntimeFrameworkService, MenuStateService, NavigationEventService, QuerystringService, [2, FrameContext], [2, Injector]]), ??prd(4608, null, NavigationMiddlewareService, NavigationMiddlewareService, [NavigationService, FrameContext, FormMessageService, [2, LanguageService], CardDataService]), ??prd(4608, null, GridMiddlewareService, GridMiddlewareService, [FrameContext, FormMessageService, [2, LanguageService], ViewModel, CommandService]), ??prd(4608, null, SidebarService, SidebarService, [FrameContext, FarrisSidebarService, FormMessageService, [2, LanguageService]]), ??prd(4608, null, FarrisFormService, FarrisFormService, [[2, FARRIS_FORM_COMPONENTS]]), ??prd(4608, null, DialogService$1, DialogService$1, [BsModalService, FarrisFormService, ComponentFactoryResolver, FrameContext, [2, Injector]]), ??prd(4608, null, RouterService, RouterService, [Router, RouterParamService, FrameworkService, [2, AppService], [2, MenuStateService], [2, LanguageService]]), ??prd(4608, null, AuthorityService, AuthorityService, []), ??prd(4608, null, FrameworkSessionService, FrameworkSessionService, [[2, SessionService]]), ??prd(4608, null, QUERYSOLUTION_HANDLER_TOKEN, ??b, [FrameContext, FrameworkSessionService]), ??prd(4608, null, LISTFILTER_HANDLER_TOKEN, ??c, [FrameContext]), ??prd(4608, null, EndEditService, EndEditService, [FrameContext]), ??prd(4608, null, BatchEditDialogService, BatchEditDialogService, [Injector, BsModalService, ComponentFactoryResolver, LocaleService]), ??prd(4608, null, ComponentManagerService, ComponentManagerService, []), ??prd(4608, null, BatchEditService, BatchEditService, [Injector, ComponentManagerService, ViewModel, Repository, BatchEditDialogService, DateTimeHelperService, LanguageService, FormNotifyService]), ??prd(4608, null, DiscussionGroupService, DiscussionGroupService, [Injector, FrameContext, FormLoadingService, RuntimeFrameworkService]), ??prd(4608, null, DataGridService, DataGridService, []), ??prd(4608, null, FormAttentionService, FormAttentionService, [Injector, FrameContext, AttentionService]), ??prd(4608, null, FeatureEditorService, FeatureEditorService, [Injector, BsModalService, ComponentFactoryResolver, LocaleService, I18nService]), ??prd(4608, null, FeatureDataService, FeatureDataService, [Injector, FeatureRepository, [2, LOCALE_ID]]), ??prd(4608, null, FeatureEditService, FeatureEditService, [Injector, FeatureEditorService, FeatureDataService, FormLoadingService, FormNotifyService, LanguageService]), ??prd(5120, null, RESOLVER_TOKEN, function (p0_0) { return [new EntityDependencyResolver(p0_0), new StateDependencyResolver(), new CommentDependencyResolver()]; }, [Repository]), ??prd(4608, null, ResolverRegistry, ResolverRegistry, [Injector, [2, RESOLVER_TOKEN]]), ??prd(4608, null, ResolveService, ResolveService, [Injector, ResolverRegistry]), ??prd(4608, null, ExpressionExecutor, ExpressionExecutor, []), ??prd(4608, null, ExpressionService, ExpressionService, [Injector, ResolveService, FrameContext, ExpressionExecutor]), ??prd(4608, null, PopUpService, PopUpService, [Injector, FrameContext, Repository, LanguageService, FormMessageService]), ??prd(4608, null, DirtyCheckingService, DirtyCheckingService, [Injector, ChangeDetectorRef, ApplicationRef]), ??prd(4608, null, FormService, FormService, [Injector, AppContext, Repository]), ??prd(4608, null, ViewModelService, ViewModelService, []), ??prd(4608, null, PaginationService$1, PaginationService$1, [Injector, FrameContext]), ??prd(4608, null, FORM_MANIFEST_SERVICE_TOKEN, FormManifestService, [Injector, FORM_PATH_TOKEN, HttpClient]), ??prd(4608, null, FORM_EXPRESSION_MANIFEST_SERVICE_TOKEN, FormExpressionManifestService, [Injector, FrameContext, HttpClient, FORM_PATH_TOKEN, FORM_MANIFEST_SERVICE_TOKEN]), ??prd(4608, null, MESSAGE_SERVICE_TOKEN, FormMessageService, [MessagerService, [2, LanguageService], LOCALE_ID]), ??prd(4608, null, NOTIFY_SERVICE_TOKEN, FormNotifyService, [NotifyService, [2, LanguageService]]), ??prd(5120, null, FRAME_COMPONENT_INIT_HANDLER_TOKEN, function (p0_0, p0_1, p0_2, p0_3) { return [new WorkFlowMessageHandler(p0_0, p0_1, p0_2, p0_3)]; }, [Injector, FrameContext, WorkFlowMessageService, WorkFlowMessage]), ??prd(4608, null, ServerSideToken, BefLookupRestService, [Repository, [2, FrameContext]]), ??prd(4608, null, ComboServerSideToken, DefaultComboHttpService, [Repository]), ??prd(4608, null, Form, RootViewmodelForm, []), ??prd(4608, null, UIState, RootViewmodelUIState, []), ??prd(4608, null, UriService, UriService, [BE_SERVER_URI_TOKEN]), ??prd(4608, null, ProjectsFanwzProxy, ProjectsFanwzProxy, [HttpClient, UriService]), ??prd(4608, null, Declaration, EventDeclaration, []), ??prd(6144, null, TranslateToken, null, [LangService]), ??prd(5120, null, LISTENER_TOKEN, function (p0_0, p0_1, p0_2, p0_3, p0_4, p1_0, p1_1, p1_2, p2_0, p2_1, p2_2) { return [new UIStateChangeListener(p0_0, p0_1, p0_2, p0_3, p0_4), new RepositoryChangeListener(p1_0, p1_1, p1_2), new BindingDataChangeListener(p2_0, p2_1, p2_2)]; }, [Injector, UIState, NAMESPACE, FRAME_ID, BindingData, Injector, Repository, NAMESPACE, Injector, BindingData, NAMESPACE]), ??prd(5120, null, EFFECTOR_TOKEN, function (p0_0, p0_1, p0_2, p0_3, p1_0, p1_1, p1_2, p2_0, p2_1, p2_2, p3_0, p3_1, p3_2, p3_3, p4_0, p4_1, p4_2, p4_3, p5_0, p5_1, p5_2, p5_3, p5_4, p6_0, p6_1, p6_2, p6_3, p7_0, p7_1, p7_2, p7_3) { return [new RepositoryEffector(p0_0, p0_1, p0_2, p0_3), new UIStateEffector(p1_0, p1_1, p1_2), new ReadonlyEffector(p2_0, p2_1, p2_2), new DependencyEffector(p3_0, p3_1, p3_2, p3_3), new RelativeEffector(p4_0, p4_1, p4_2, p4_3), new ValidateEffector(p5_0, p5_1, p5_2, p5_3, p5_4), new RequiredEffector(p6_0, p6_1, p6_2, p6_3), new VisibleEffector(p7_0, p7_1, p7_2, p7_3)]; }, [Injector, Repository, NAMESPACE, BindingData, Injector, UIState, NAMESPACE, Injector, NAMESPACE, FrameContext, Injector, Repository, NAMESPACE, BindingData, Injector, MESSAGE_SERVICE_TOKEN, NOTIFY_SERVICE_TOKEN, NAMESPACE, Injector, MESSAGE_SERVICE_TOKEN, NOTIFY_SERVICE_TOKEN, NAMESPACE, FrameContext, Injector, Repository, NAMESPACE, FrameContext, Injector, NAMESPACE, FrameContext, Repository]), ??prd(4608, null, ListenerRegistry, ListenerRegistry, [[2, LISTENER_TOKEN], [2, Injector]]), ??prd(4608, null, Listeners, Listeners, [[2, ListenerRegistry]]), ??prd(4608, null, EffectorRegistry, EffectorRegistry, [Injector, [2, EFFECTOR_TOKEN]]), ??prd(4608, null, EffectorFactory, EffectorFactory, [Injector, EffectorRegistry]), ??prd(4608, null, ExpressionRegistry, ExpressionRegistry, [Injector, FORM_EXPRESSION_MANIFEST_SERVICE_TOKEN, [2, TranslateToken]]), ??prd(4608, null, ExpressionEventEmitter, ExpressionEventEmitter, [Listeners]), ??prd(4608, null, ExpressionResult, ExpressionResult, [Injector]), ??prd(4608, null, ExpressionManager, ExpressionManager, [Injector, ResolveService, ExpressionExecutor, ExpressionRegistry, ExpressionResult, MESSAGE_SERVICE_TOKEN, NOTIFY_SERVICE_TOKEN]), ??prd(4608, null, ExpressionResultFactory, ExpressionResultFactory, [Injector, ExpressionRegistry, ExpressionManager, ExpressionResult]), ??prd(5120, null, EVENT_HANDLER_TOKEN, function (p0_0, p0_1, p0_2, p0_3, p0_4, p0_5, p0_6, p1_0, p1_1, p1_2, p1_3, p1_4, p1_5, p1_6, p2_0, p2_1, p2_2, p2_3, p2_4, p2_5, p2_6, p3_0, p3_1, p3_2, p3_3, p3_4, p3_5, p3_6, p4_0, p4_1, p4_2, p4_3, p4_4, p4_5, p4_6, p5_0, p5_1, p5_2, p5_3, p5_4, p5_5, p5_6, p6_0, p6_1, p6_2, p6_3, p6_4, p6_5, p6_6, p7_0, p7_1, p7_2, p7_3, p7_4, p7_5, p7_6, p8_0, p8_1, p8_2, p8_3, p8_4, p8_5, p8_6, p9_0, p9_1, p9_2, p9_3, p9_4, p9_5, p9_6, p10_0, p10_1, p10_2, p10_3, p10_4, p10_5, p10_6) { return [new RepositoryAddEntityEventHandler(p0_0, p0_1, p0_2, p0_3, p0_4, p0_5, p0_6), new RepositoryRemoveEntityEventHandler(p1_0, p1_1, p1_2, p1_3, p1_4, p1_5, p1_6), new EntityValueChangedEventHandler(p2_0, p2_1, p2_2, p2_3, p2_4, p2_5, p2_6), new StateValueChangedEventHandler(p3_0, p3_1, p3_2, p3_3, p3_4, p3_5, p3_6), new RepositoryLoadEventHandler(p4_0, p4_1, p4_2, p4_3, p4_4, p4_5, p4_6), new EntityUpdateEventHandler(p5_0, p5_1, p5_2, p5_3, p5_4, p5_5, p5_6), new BindingDataAppendObjectEventHandler(p6_0, p6_1, p6_2, p6_3, p6_4, p6_5, p6_6), new BindingDataValueChangeEventHandler(p7_0, p7_1, p7_2, p7_3, p7_4, p7_5, p7_6), new BindingDataRemoveObjectEventHandler(p8_0, p8_1, p8_2, p8_3, p8_4, p8_5, p8_6), new BindingDataLoadEventHandler(p9_0, p9_1, p9_2, p9_3, p9_4, p9_5, p9_6), new BindingDataSelectionChangedEventHandler(p10_0, p10_1, p10_2, p10_3, p10_4, p10_5, p10_6)]; }, [Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult, Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult, Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult, Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult, Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult, Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult, Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult, Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult, Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult, Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult, Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult]), ??prd(4608, null, EventHandlerRegistry, EventHandlerRegistry, [[2, EVENT_HANDLER_TOKEN]]), ??prd(4608, null, ExpressionEngineImpl, ExpressionEngineImpl, [Injector, ExpressionRegistry, ExpressionEventEmitter, ResolverRegistry, EventHandlerRegistry, ResolveService]), ??prd(4608, null, EXCEPTION_HANDLER, ExceptionHandler, [FormErrorService, [2, LanguageService], AppContext]), ??prd(4608, null, BACK_END_MESSAGE_HANDLER_TOKEN, BackEndMessageHandler, [Injector, FrameContext, TranslateToken]), ??prd(512, null, LangService, LangService, [TranslateService]), ??prd(512, null, LocalizationService, LocalizationService, [Injector, UserSettingsToken]), ??prd(512, null, VerifyDetailService, VerifyDetailService, [ComponentFactoryResolver, Injector, ApplicationRef]), ??prd(512, null, StateMachine, RootViewmodelStateMachine, []), ??did(112, 4440064, null, 0, RootComponent, [WizardService, KeybindingService, LangService, ActivatedRoute, Router, ElementRef, LocalizationService, FrmI18nSettingService, FrameworkService, ApplicationParamService, VerifyDetailService, StateMachine, DomSanitizer, Injector], null, null), ??prd(256, null, FRAME_ID, "root-component", []), ??prd(256, null, NAMESPACE, "", []), ??prd(256, null, PARAM_TYPE_TRANSFORM_TOKEN, false, []), ??prd(256, null, FORM_ID, "a270caa9-61f5-42d1-963a-5e70677e6b0a", []), ??prd(256, null, BE_SESSION_HANDLING_STRATEGY_TOKEN, "SeparatedSession", [])], function (_ck, _v) { _ck(_v, 112, 0); }, function (_ck, _v) { var currVal_0 = ??nov(_v, 112).cls; _ck(_v, 0, 0, currVal_0); }); }
            var RootComponentNgFactory = ??ccf("app-rootcomponent", RootComponent, View_RootComponent_Host_0, {}, {}, []);

            // This service is based on the `ng2-cookies` package which sadly is not a service and does
            // not use `DOCUMENT` injection and therefore doesn't work well with AoT production builds.
            // Package: https://github.com/BCJTI/ng2-cookies
            var CookieService = (function () {
                /**
                 * @param {?} document
                 * @param {?} platformId
                 */
                function CookieService(document, platformId) {
                    this.document = document;
                    this.platformId = platformId;
                    this.documentIsAccessible = isPlatformBrowser(this.platformId);
                }
                /**
                 * @param {?} name Cookie name
                 * @return {?}
                 */
                CookieService.prototype.check = function (name) {
                    if (!this.documentIsAccessible) {
                        return false;
                    }
                    name = encodeURIComponent(name);
                    var /** @type {?} */ regExp = this.getCookieRegExp(name);
                    var /** @type {?} */ exists = regExp.test(this.document.cookie);
                    return exists;
                };
                /**
                 * @param {?} name Cookie name
                 * @return {?}
                 */
                CookieService.prototype.get = function (name) {
                    if (this.documentIsAccessible && this.check(name)) {
                        name = encodeURIComponent(name);
                        var /** @type {?} */ regExp = this.getCookieRegExp(name);
                        var /** @type {?} */ result = regExp.exec(this.document.cookie);
                        return decodeURIComponent(result[1]);
                    }
                    else {
                        return '';
                    }
                };
                /**
                 * @return {?}
                 */
                CookieService.prototype.getAll = function () {
                    if (!this.documentIsAccessible) {
                        return {};
                    }
                    var /** @type {?} */ cookies = {};
                    var /** @type {?} */ document = this.document;
                    if (document.cookie && document.cookie !== '') {
                        var /** @type {?} */ split = document.cookie.split(';');
                        for (var /** @type {?} */ i = 0; i < split.length; i += 1) {
                            var /** @type {?} */ currentCookie = split[i].split('=');
                            currentCookie[0] = currentCookie[0].replace(/^ /, '');
                            cookies[decodeURIComponent(currentCookie[0])] = decodeURIComponent(currentCookie[1]);
                        }
                    }
                    return cookies;
                };
                /**
                 * @param {?} name     Cookie name
                 * @param {?} value    Cookie value
                 * @param {?=} expires  Number of days until the cookies expires or an actual `Date`
                 * @param {?=} path     Cookie path
                 * @param {?=} domain   Cookie domain
                 * @param {?=} secure   Secure flag
                 * @param {?=} sameSite OWASP samesite token `Lax`, `None`, or `Strict`. Defaults to `None`
                 * @return {?}
                 */
                CookieService.prototype.set = function (name, value, expires, path, domain, secure, sameSite) {
                    if (sameSite === void 0) { sameSite = 'None'; }
                    if (!this.documentIsAccessible) {
                        return;
                    }
                    var /** @type {?} */ cookieString = encodeURIComponent(name) + '=' + encodeURIComponent(value) + ';';
                    if (expires) {
                        if (typeof expires === 'number') {
                            var /** @type {?} */ dateExpires = new Date(new Date().getTime() + expires * 1000 * 60 * 60 * 24);
                            cookieString += 'expires=' + dateExpires.toUTCString() + ';';
                        }
                        else {
                            cookieString += 'expires=' + expires.toUTCString() + ';';
                        }
                    }
                    if (path) {
                        cookieString += 'path=' + path + ';';
                    }
                    if (domain) {
                        cookieString += 'domain=' + domain + ';';
                    }
                    if (secure) {
                        cookieString += 'secure;';
                    }
                    cookieString += 'sameSite=' + sameSite + ';';
                    this.document.cookie = cookieString;
                };
                /**
                 * @param {?} name   Cookie name
                 * @param {?=} path   Cookie path
                 * @param {?=} domain Cookie domain
                 * @return {?}
                 */
                CookieService.prototype.delete = function (name, path, domain) {
                    if (!this.documentIsAccessible) {
                        return;
                    }
                    this.set(name, '', new Date('Thu, 01 Jan 1970 00:00:01 GMT'), path, domain, undefined, 'Lax');
                };
                /**
                 * @param {?=} path   Cookie path
                 * @param {?=} domain Cookie domain
                 * @return {?}
                 */
                CookieService.prototype.deleteAll = function (path, domain) {
                    if (!this.documentIsAccessible) {
                        return;
                    }
                    var /** @type {?} */ cookies = this.getAll();
                    for (var /** @type {?} */ cookieName in cookies) {
                        if (cookies.hasOwnProperty(cookieName)) {
                            this.delete(cookieName, path, domain);
                        }
                    }
                };
                /**
                 * @param {?} name Cookie name
                 * @return {?}
                 */
                CookieService.prototype.getCookieRegExp = function (name) {
                    var /** @type {?} */ escapedName = name.replace(/([\[\]\{\}\(\)\|\=\;\+\?\,\.\*\^\$])/ig, '\\$1');
                    return new RegExp('(?:^' + escapedName + '|;\\s*' + escapedName + ')=(.*?)(?:;|$)', 'g');
                };
                return CookieService;
            }());
            CookieService.decorators = [
                { type: Injectable },
            ];
            /**
             * @nocollapse
             */
            CookieService.ctorParameters = function () { return [
                { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] },] },
                { type: InjectionToken, decorators: [{ type: Inject, args: [PLATFORM_ID,] },] },
            ]; };

            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             *
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */ 
            var ProjectFanwzModuleNgFactory = exports('ProjectFanwzModuleNgFactory', ??cmf(ProjectFanwzModule, [RootComponent], function (_l) { return ??mod([??mpd(512, ComponentFactoryResolver, ??CodegenComponentFactoryResolver, [[8, [LoadingComponentNgFactory$1, ModalBackdropComponentNgFactory$1, ModalContainerComponentNgFactory$1, MessagerComponentNgFactory$1, NotifyContainerComponentNgFactory$1, PopoverContainerComponentNgFactory$1, FarrisContextMenuComponentNgFactory$1, DataTableComponentNgFactory$1, TreeTableComponentNgFactory$1, LookupLeftComponentNgFactory$1, LookupTabsComponentNgFactory$1, TimePickerPanelComponentNgFactory, CalendarComponentNgFactory, FilterPanelComponentNgFactory, TooltipComponentNgFactory, PopupComponentNgFactory, ??bNgFactory, ??iNgFactory, ??wNgFactory, ??bfNgFactory, ??cNgFactory, ??eNgFactory, ??bbNgFactory, ??bcNgFactory, FileListComponentNgFactory, WfApprovalLogsComponentNgFactory, UIFlowchartComponentNgFactory, ??EmptyOutletComponentNgFactory, LanguageTextPanelComponentNgFactory, EnumEditorComponentNgFactory, FilterEditorComponentNgFactory, SortEditorComponentNgFactory, ??lNgFactory, DatagridTextboxComponentNgFactory, DatagridTextareaComponentNgFactory, ??aNgFactory, ??bNgFactory$1, ??cNgFactory$1, ??dNgFactory, ??eNgFactory$1, ??fNgFactory, ??gNgFactory, ??hNgFactory, ??iNgFactory$1, ??jNgFactory, ??kNgFactory, DatagridEnumEditorComponentNgFactory, DatagridSortEditorComponentNgFactory, DatagridFilterEditorComponentNgFactory, TaskExecuteComponentNgFactory, TaskAssigninfoComponentNgFactory, ProcessSelectorComponentNgFactory, VerifyDetailComponentNgFactory, StringFilterCellComponentNgFactory, NumericFilterCellComponentNgFactory, BooleanFilterCellComponentNgFactory, DateFilterCellComponentNgFactory, StringFilterMenuComponentNgFactory, NumericFilterMenuComponentNgFactory, DateFilterMenuComponentNgFactory, BooleanFilterMenuComponentNgFactory, NgbTooltipWindowNgFactory, FileUploadComponentNgFactory, UploadDialogComponentNgFactory, ??bNgFactory$2, QueryConditionComponentNgFactory, ??cNgFactory$2, ??eNgFactory$2, ProcessSelectorComponentNgFactory$1, WfWorkitemHandleComponentNgFactory, UserHelperComponentNgFactory, TaskAssignComponentNgFactory, TaskSignaddComponentNgFactory, TaskTransferComponentNgFactory, ??aNgFactory$1, WindowComponentNgFactory, WindowTitleBarComponentNgFactory, DialogComponentNgFactory, DialogTitleBarComponentNgFactory, ??dNgFactory$1, ??fNgFactory$1, ??gNgFactory$1, ??hNgFactory$1, ??bNgFactory$3, ??cNgFactory$3, ??dNgFactory$2, ??eNgFactory$3, ??fNgFactory$2, ??gNgFactory$2, ??hNgFactory$2, BatchEditDialogComponentNgFactory, ResultConfirmComponentNgFactory, MultiDownloadInfoComponentNgFactory, DiscussionPersonnelComponentNgFactory, FilterRowComponentNgFactory, FilterTextboxComponentNgFactory, FilterCheckboxComponentNgFactory, ConditionEditorComponentNgFactory, FilterDatalistComponentNgFactory, FilterRowPanelComponentNgFactory, FilterRowEditorComponentNgFactory, FilterSelectComponentNgFactory, DatagridSettingsComponentNgFactory, SimpleColumnsComponentNgFactory, FEPageModalComponentNgFactory, FEModalBackdropComponentNgFactory, ??aNgFactory$2, FeatureEditorComponentNgFactory, RootComponentNgFactory, ??bNgFactory$4, ??nNgFactory, ??eNgFactory$4, ??hNgFactory$3, ??mNgFactory, ??kNgFactory$1, ??lNgFactory$1, RuleIdHelpComponentNgFactory, DataieRuleHelpComponentNgFactory, ??oNgFactory, ??pNgFactory, ??qNgFactory, ??rNgFactory, ??sNgFactory, ??tNgFactory, ??uNgFactory, ??vNgFactory, ??wNgFactory$1, ??xNgFactory, ??yNgFactory, ??zNgFactory]], [3, ComponentFactoryResolver], NgModuleRef]), ??mpd(4608, NgLocalization, NgLocaleLocalization, [LOCALE_ID, [2, ??angular_packages_common_common_a]]), ??mpd(4608, ??angular_packages_forms_forms_j, ??angular_packages_forms_forms_j, []), ??mpd(4608, FormBuilder, FormBuilder, []), ??mpd(4608, CommonUtils, CommonUtils, []), ??mpd(4608, RuntimeStateService, RuntimeStateService, [CommonUtils]), ??mpd(4608, IdService, IdService, []), ??mpd(4608, DialogService, DialogService, []), ??mpd(135680, GridComponent, GridComponent, [BrowserSupportService, SelectionService, ElementRef, GroupInfoService, GroupsService, ChangeNotificationService, DetailsService, EditService$1, FilterService, PDFService, ResponsiveService, Renderer2, ExcelService, NgZone, ScrollSyncService, DomEventsService, ColumnResizingService, ChangeDetectorRef, ColumnReorderService, ColumnInfoService, NavigationService$1, SortService, LocalizationService$1]), ??mpd(4608, DateTimeHelperService, DateTimeHelperService, []), ??mpd(4608, NumberHelperService, NumberHelperService, []), ??mpd(4608, FarrisKendoGridFormatService, FarrisKendoGridFormatService, [DateTimeHelperService, NumberHelperService]), ??mpd(4608, FarrisTreetableFormatService, FarrisTreetableFormatService, []), ??mpd(4608, LocaleService, LocaleService, [LOCALE_ID, CommonUtils, [2, FARRIS_LOCAL_CUSTOM_DATA]]), ??mpd(4608, PositioningService, PositioningService, [RendererFactory2, PLATFORM_ID]), ??mpd(4608, ComponentLoaderFactory, ComponentLoaderFactory, [ComponentFactoryResolver, NgZone, Injector, PositioningService, ApplicationRef]), ??mpd(4608, BsModalService, BsModalService, [RendererFactory2, ComponentLoaderFactory, NgZone]), ??mpd(4608, NotifyService, NotifyService, [ComponentFactoryResolver, Injector, ApplicationRef]), ??mpd(4608, PaginationService, PaginationService, []), ??mpd(4608, PopoverConfig, PopoverConfig, []), ??mpd(4608, ColumnFormatService, ColumnFormatService, [DateTimeHelperService, NumberHelperService]), ??mpd(4608, HttpXsrfTokenExtractor, ??angular_packages_common_http_http_g, [DOCUMENT, PLATFORM_ID, ??angular_packages_common_http_http_e]), ??mpd(4608, ??angular_packages_common_http_http_h, ??angular_packages_common_http_http_h, [HttpXsrfTokenExtractor, ??angular_packages_common_http_http_f]), ??mpd(5120, HTTP_INTERCEPTORS, function (p0_0) { return [p0_0]; }, [??angular_packages_common_http_http_h]), ??mpd(4608, LoadingService, LoadingService, [ApplicationRef, ComponentFactoryResolver, Injector]), ??mpd(4608, ComboLocaleService, ComboLocaleService, [LocaleService]), ??mpd(4608, FarrisContextMenuService, FarrisContextMenuService, [ComponentFactoryResolver, Injector]), ??mpd(4608, TreetableService, TreetableService, []), ??mpd(4608, ResizeService, ResizeService, []), ??mpd(4608, TTHotkeys, TTHotkeys, [EventManager]), ??mpd(4608, MessagerService, MessagerService, [BsModalService, Injector]), ??mpd(4608, QuerySolutionService, QuerySolutionService, []), ??mpd(4608, AttentionService, AttentionService, [RendererFactory2, NgZone]), ??mpd(4608, FilterService$1, FilterService$1, []), ??mpd(4608, ConvertorService, ConvertorService, []), ??mpd(4608, SolutionService, SolutionService, []), ??mpd(4608, ErrorHandler, ??t, []), ??mpd(4608, ValidatorMessagerService, ValidatorMessagerService, []), ??mpd(4608, SessionService, SessionService, []), ??mpd(4608, SysCommonUtilService, SysCommonUtilService, [SessionService]), ??mpd(4608, SysSecurityConfigService, SysSecurityConfigService, [HttpClient, SysCommonUtilService]), ??mpd(4608, HelpFilterMap, HelpFilterMap, []), ??mpd(4608, SysHelpService, SysHelpService, [HttpClient, SysCommonUtilService]), ??mpd(4608, SysExceptionService, SysExceptionService, []), ??mpd(4608, ??f$1, ??f$1, [HttpClient, SysCommonUtilService]), ??mpd(4608, CookieService, CookieService, [DOCUMENT, PLATFORM_ID]), ??mpd(4608, LanguageService$1, LanguageService$1, [CookieService]), ??mpd(4608, SysLocaleService, SysLocaleService, [LanguageService$1]), ??mpd(4608, PopupService, PopupService, [ApplicationRef, ComponentFactoryResolver, Injector, [2, POPUP_CONTAINER]]), ??mpd(4608, ??j, ??j, []), ??mpd(4608, ??s, ??s, []), ??mpd(4608, ??n, ??n, []), ??mpd(4608, ??u, ??u, []), ??mpd(4608, ??v, ??v, [??u]), ??mpd(4608, HttpService, HttpService, [HttpClient, SessionService]), ??mpd(4608, ??o, ??o, []), ??mpd(4608, ??z, ??z, []), ??mpd(4608, ??d, ??d, [HttpService, HttpClient, ??z]), ??mpd(4608, ??a$2, ??a$2, [HttpService, HttpClient]), ??mpd(4608, ??y, ??y, []), ??mpd(4608, ??a$1, ??a$1, [HttpClient]), ??mpd(4608, ??b$1, ??b$1, [HttpClient]), ??mpd(4608, ??c$2, ??c$2, [HttpClient]), ??mpd(4608, FrameworkVariableService, FrameworkVariableService, []), ??mpd(4608, FrmI18nSettingService, FrmI18nSettingService, [FrameworkVariableService, LanguageService$1, HttpService]), ??mpd(4608, AppService, AppService, [HttpService, SessionService, [2, FrmI18nSettingService]]), ??mpd(4608, WindowContainerService, WindowContainerService, []), ??mpd(4608, WindowService, WindowService, [ComponentFactoryResolver, WindowContainerService]), ??mpd(4608, CloudprintService, CloudprintService, [??a$1, ComponentFactoryResolver, ??b$1, ??c$2, Injector, ApplicationRef, NotifyService, AppService, WindowService, BsModalService]), ??mpd(4608, WfApprovalLogsService, WfApprovalLogsService, [MessagerService, Injector, ComponentFactoryResolver, BsModalService]), ??mpd(4608, NgbDropdownConfig, NgbDropdownConfig, []), ??mpd(4608, UiFlowchartService, UiFlowchartService, [HttpService]), ??mpd(4608, WFFlowchartService, WFFlowchartService, [MessagerService, Injector, ComponentFactoryResolver, BsModalService]), ??mpd(4608, TaskService, TaskService, [HttpService, MessagerService]), ??mpd(4608, I18nService$2, I18nService$2, []), ??mpd(4608, CacheStorageAbstract, CacheMemoryStorage, []), ??mpd(4608, CacheService, CacheService, [[2, CacheStorageAbstract]]), ??mpd(4608, FrmEventBus, FrmEventBus, []), ??mpd(4608, FuncsService, FuncsService, [[2, FrameworkVariableService]]), ??mpd(4608, FrameworkService, FrameworkService, [HttpService, Router, CacheService, SessionService, FrmEventBus, FuncsService, LoadingService$1, [2, AppService], [2, FrmI18nSettingService]]), ??mpd(4608, WfTaskHandlerService, WfTaskHandlerService, [WfApprovalLogsService, WFFlowchartService, Injector, ComponentFactoryResolver, BsModalService, TaskService, NotifyService, I18nService$2, FrameworkService, ApplicationRef]), ??mpd(4608, AppContextManager, AppContextManager, []), ??mpd(4608, AppContext, AppContext, [[2, Injector], [2, AppContextManager], [3, AppContext]]), ??mpd(4608, FormLoadingService, FormLoadingService, [LoadingService, [2, HideEventService], [2, AppContext]]), ??mpd(4608, LanguageService, LanguageService, [[2, LOCALE_ID]]), ??mpd(4608, FormMessageService, FormMessageService, [MessagerService, [2, LanguageService], LOCALE_ID]), ??mpd(4608, FormNotifyService, FormNotifyService, [NotifyService, [2, LanguageService]]), ??mpd(4608, FormErrorService, FormErrorService, [FormMessageService, [2, LanguageService]]), ??mpd(4608, WizardService, WizardService, []), ??mpd(4608, FormWizardService, FormWizardService, [WizardService]), ??mpd(4608, CheckService, CheckService, []), ??mpd(4608, DataCheckService, DataCheckService, [FormMessageService, FormNotifyService, [2, LanguageService]]), ??mpd(4608, FrameEventBus, FrameEventBus, []), ??mpd(4608, EventService, EventService, [FrameEventBus]), ??mpd(4608, ComponentManagerService, ComponentManagerService, []), ??mpd(4608, FilterService$2, FilterService$2, []), ??mpd(4608, KeybindingService, KeybindingService, []), ??mpd(4608, QuerystringService, QuerystringService, []), ??mpd(4608, RuntimeFrameworkService, RuntimeFrameworkService, []), ??mpd(4608, ParamService, ParamService, [QuerystringService, RuntimeFrameworkService]), ??mpd(4608, MenuStateService, MenuStateService, []), ??mpd(4608, NavigationEventService, NavigationEventService, [RuntimeFrameworkService, MenuStateService, QuerystringService]), ??mpd(4608, NavigationService, NavigationService, [RuntimeFrameworkService, MenuStateService, NavigationEventService, QuerystringService, [2, FrameContext], [2, Injector]]), ??mpd(4608, RouterParamService, RouterParamService, []), ??mpd(4608, RouterService, RouterService, [Router, RouterParamService, FrameworkService, [2, AppService], [2, MenuStateService], [2, LanguageService]]), ??mpd(4608, ApplicationParamService, ApplicationParamService, [[2, ParamService], [2, RuntimeFrameworkService]]), ??mpd(4608, FilterConditionService, FilterConditionService, []), ??mpd(4608, UserSettingsToken, UserSettingsService, [Injector, [2, FrmI18nSettingService]]), ??mpd(4608, VerifyDetailService, VerifyDetailService, [ComponentFactoryResolver, Injector, ApplicationRef]), ??mpd(4608, IntlService, CldrIntlService, [LOCALE_ID]), ??mpd(4608, DOMService, DOMService, []), ??mpd(4608, CenturyViewService, CenturyViewService, []), ??mpd(4608, DecadeViewService, DecadeViewService, []), ??mpd(4608, MonthViewService, MonthViewService, [IntlService]), ??mpd(4608, YearViewService, YearViewService, [IntlService]), ??mpd(4608, WeekNamesService, WeekNamesService, [IntlService]), ??mpd(135680, ResizeBatchService, ResizeBatchService, [NgZone]), ??mpd(4608, NavigationService$2, NavigationService$2, [BusViewService]), ??mpd(4608, DOMService$1, DOMService$1, []), ??mpd(4608, HoursService, HoursService, [IntlService]), ??mpd(4608, MinutesService, MinutesService, [IntlService]), ??mpd(4608, SecondsService, SecondsService, [IntlService]), ??mpd(4608, DayPeriodService, DayPeriodService, [IntlService]), ??mpd(4608, NgbTooltipConfig, NgbTooltipConfig, []), ??mpd(4608, TabService, TabService, [[2, TabConfig]]), ??mpd(4608, UploadService, UploadService, [HttpService]), ??mpd(4608, DownloadService, DownloadService, []), ??mpd(4608, UploadDialogService, UploadDialogService, [BsModalService, ComponentFactoryResolver, Injector]), ??mpd(4608, SolutionService$1, SolutionService$1, [NotifyService]), ??mpd(4608, ConvertorService$1, ConvertorService$1, []), ??mpd(4608, TaskCommentService, TaskCommentService, [HttpService]), ??mpd(4608, TaskCommentUIState, TaskCommentUIState, []), ??mpd(4608, TaskCommentViewModel, TaskCommentViewModel, [TaskCommentUIState, HttpService]), ??mpd(4608, I18nService$3, I18nService$3, []), ??mpd(4608, TaskCommentRepository, TaskCommentRepository, []), ??mpd(4608, TaskService$1, TaskService$1, [HttpService]), ??mpd(4608, UserService, UserService, [HttpClient, HttpService, SessionService]), ??mpd(4608, I18nService$1, I18nService$1, []), ??mpd(4608, WFSubmiteService, WFSubmiteService, [Injector, ComponentFactoryResolver, BsModalService, [2, I18nService$1]]), ??mpd(4608, DialogContainerService, DialogContainerService, []), ??mpd(4608, DialogService$2, DialogService$2, [ComponentFactoryResolver, DialogContainerService]), ??mpd(4608, ??e, ??e, [HttpClient]), ??mpd(4608, ConvertorService$2, ConvertorService$2, []), ??mpd(4608, SolutionService$2, SolutionService$2, []), ??mpd(4608, QuerySolutionService$1, QuerySolutionService$1, []), ??mpd(4608, FFileUploadAdaptUnifileConfigService, FFileUploadAdaptUnifileConfigService, [[2, FFileUploadAdaptUnifileConfigToken]]), ??mpd(4608, UploadServerService, FfileuploadAdaptUnifileService, [UploadService, FFileUploadAdaptUnifileConfigService]), ??mpd(4608, FFileUploaderService, FFileUploaderService, [[2, UploadServerService]]), ??mpd(4608, DiscussionListService, DiscussionListService, []), ??mpd(4608, FileViewerService, FileViewerService, [BsModalService, ComponentFactoryResolver, Injector, ??a$2, MessagerService, CloudprintService, AppService]), ??mpd(4608, FfilepreviewAdaptUnifileService, FfilepreviewAdaptUnifileService, [FileViewerService, FFileUploadAdaptUnifileConfigService, [2, DownloadService]]), ??mpd(4608, EditorService, EditorService, []), ??mpd(4608, I18nService, I18nService, [[2, LOCALE_ID]]), ??mpd(4608, FEScrollCollapsibleAreaService, FEScrollCollapsibleAreaService, []), ??mpd(4608, ??d$1, ??d$1, [HttpClient]), ??mpd(4608, ??f, ??f, [??d$1, NotifyService, HttpClient, LoadingService]), ??mpd(4608, ??c$1, ??c$1, [BsModalService, ComponentFactoryResolver, ??d$1, NotifyService, HttpClient, Injector]), ??mpd(4608, ??g, ??g, [NotifyService, ??d$1, LoadingService, ??c$1, HttpClient]), ??mpd(4608, DataieHandcraftService, DataieHandcraftService, [ComponentFactoryResolver, BsModalService, Injector, ??f, NotifyService, ??g, HttpClient, LoadingService]), ??mpd(4608, GRID_SETTINGS_SERVICE, DatagridSettingsService, [Injector, BsModalService, MessagerService, IdService, LocaleService]), ??mpd(4608, WindowVariableService, WindowVariableService, []), ??mpd(4608, TabEntityService, TabEntityService, []), ??mpd(4608, FEPageModalService, FEPageModalService, [RendererFactory2, [2, ComponentLoaderFactory], Injector, NgZone]), ??mpd(4608, EventBus, EventBus, []), ??mpd(4608, Subscription, Subscription, []), ??mpd(4608, RestfulService, RestfulService, [HttpClient]), ??mpd(5120, VARIABLE_PARSERS, function () { return [new FrameIdVariableParser(), new ??a$3(), new EventParamVariableParser(), new DataVariableParser(), new UIStateVariableParser(), new StateMachineVariableParser(), new CommandVariableParser()]; }, []), ??mpd(4608, VariableParseService, VariableParseService, [VARIABLE_PARSERS]), ??mpd(5120, BE_SERVER_URI_TOKEN, ??2$1, []), ??mpd(1073742336, CommonModule, CommonModule, []), ??mpd(1073742336, ??angular_packages_forms_forms_bc, ??angular_packages_forms_forms_bc, []), ??mpd(1073742336, FormsModule, FormsModule, []), ??mpd(1073742336, ReactiveFormsModule, ReactiveFormsModule, []), ??mpd(1073742336, PanelBarModule, PanelBarModule, []), ??mpd(1073742336, SplitterModule$1, SplitterModule$1, []), ??mpd(1073742336, TabStripModule, TabStripModule, []), ??mpd(1073742336, LayoutModule, LayoutModule, []), ??mpd(1073742336, FarrisCommonModule, FarrisCommonModule, []), ??mpd(1073742336, KendoBindingModule, KendoBindingModule, []), ??mpd(1073742336, FlexLayoutModule, FlexLayoutModule, []), ??mpd(1073742336, LocaleModule, LocaleModule, []), ??mpd(1073742336, LoadingModule, LoadingModule, []), ??mpd(1073742336, PerfectScrollbarModule, PerfectScrollbarModule, []), ??mpd(1073742336, AngularDraggableModule, AngularDraggableModule, []), ??mpd(1073742336, FAreaResponseModule, FAreaResponseModule, []), ??mpd(1073742336, ModalModule, ModalModule, []), ??mpd(1073742336, MessagerModule, MessagerModule, []), ??mpd(1073742336, NotifyModule, NotifyModule, []), ??mpd(1073742336, PaginationModule, PaginationModule, []), ??mpd(1073742336, PopoverModule, PopoverModule, []), ??mpd(1073742336, InputGroupModule, InputGroupModule, []), ??mpd(1073742336, DateHelperModule, DateHelperModule, []), ??mpd(1073742336, NumberHelperModule, NumberHelperModule, []), ??mpd(1073742336, DataColumnModule, DataColumnModule, []), ??mpd(1073742336, DataTableModule, DataTableModule, []), ??mpd(1073742336, FarrisDialogModule, FarrisDialogModule, []), ??mpd(1073742336, HttpClientXsrfModule, HttpClientXsrfModule, []), ??mpd(1073742336, HttpClientModule, HttpClientModule, []), ??mpd(1073742336, DatalistModule, DatalistModule, []), ??mpd(1073742336, ComboListModule, ComboListModule, []), ??mpd(1073742336, LayoutModule$1, LayoutModule$1, []), ??mpd(1073742336, FarrisContextMenuModule, FarrisContextMenuModule, []), ??mpd(1073742336, TreeTableModule, TreeTableModule, []), ??mpd(1073742336, LookupModule, LookupModule, []), ??mpd(1073742336, NgxPaginationModule, NgxPaginationModule, []), ??mpd(1073742336, ScrollbarModule, ScrollbarModule, []), ??mpd(1073742336, TimePickerModule, TimePickerModule, []), ??mpd(1073742336, FarrisDatePickerModule, FarrisDatePickerModule, []), ??mpd(1073742336, FarrisFormsModule, FarrisFormsModule, []), ??mpd(1073742336, NumberSpinnerModule, NumberSpinnerModule, []), ??mpd(1073742336, SwitchModule, SwitchModule, []), ??mpd(1073742336, FilterConditionModule, FilterConditionModule, []), ??mpd(1073742336, FilterPanelModule, FilterPanelModule, []), ??mpd(1073742336, FarrisSidebarModule, FarrisSidebarModule, []), ??mpd(1073742336, FarrisTooltipModule, FarrisTooltipModule, []), ??mpd(1073742336, SimpleFilterModule, SimpleFilterModule, []), ??mpd(1073742336, DatagridSmartFilterModule, DatagridSmartFilterModule, []), ??mpd(1073742336, DatagridModule, DatagridModule, []), ??mpd(1073742336, SysCommonModule, SysCommonModule, []), ??mpd(1073742336, SysManagerUIModule, SysManagerUIModule, []), ??mpd(1073742336, ButtonModule, ButtonModule, []), ??mpd(1073742336, ButtonGroupModule, ButtonGroupModule, []), ??mpd(1073742336, PopupModule, PopupModule, []), ??mpd(1073742336, ListModule, ListModule, []), ??mpd(1073742336, SplitButtonModule, SplitButtonModule, []), ??mpd(1073742336, DropDownButtonModule, DropDownButtonModule, []), ??mpd(1073742336, ButtonsModule, ButtonsModule, []), ??mpd(1073742336, ??f$2, ??f$2, []), ??mpd(1073742336, ??h, ??h, []), ??mpd(1073742336, ??be, ??be, []), ??mpd(1073742336, ??g$1, ??g$1, []), ??mpd(1073742336, ??t$1, ??t$1, []), ??mpd(1073742336, ??bg, ??bg, []), ??mpd(1073742336, ??bh, ??bh, []), ??mpd(1073742336, FileListModule, FileListModule, []), ??mpd(1073742336, WfApprovalLogsModule, WfApprovalLogsModule, []), ??mpd(1073742336, NgbDropdownModule, NgbDropdownModule, []), ??mpd(1073742336, FarrisSectionModule, FarrisSectionModule, []), ??mpd(1073742336, FDropdownDirectiveTypeModule, FDropdownDirectiveTypeModule, []), ??mpd(1073742336, UiFlowchartModule, UiFlowchartModule, []), ??mpd(1073742336, RouterModule, RouterModule, [[2, ??angular_packages_router_router_a], [2, Router]]), ??mpd(1073742336, CommonSharedModule, CommonSharedModule, []), ??mpd(1073742336, TaskImplApiModule, TaskImplApiModule, []), ??mpd(1073742336, WfSignModule, WfSignModule, []), ??mpd(1073742336, AvatarModule, AvatarModule, []), ??mpd(1073742336, ComboLookupModule, ComboLookupModule, []), ??mpd(1073742336, LanguageTextboxModule, LanguageTextboxModule, []), ??mpd(1073742336, EnumEditorModule, EnumEditorModule, []), ??mpd(1073742336, FilterModule, FilterModule, []), ??mpd(1073742336, SorterModule, SorterModule, []), ??mpd(1073742336, DatagridEditorsModule, DatagridEditorsModule, []), ??mpd(1073742336, WfTaskHandlerModule, WfTaskHandlerModule, []), ??mpd(512, WorkFlowMessageService, WorkFlowMessageService, []), ??mpd(512, WorkFlowMessage, WorkFlowMessage, [Injector, WorkFlowMessageService]), ??mpd(1073742336, CommandServicesModule, CommandServicesModule, [WorkFlowMessage]), ??mpd(1073742336, FResponseToolbarModule, FResponseToolbarModule, []), ??mpd(1073742336, FormMessageModule, FormMessageModule, []), ??mpd(1073742336, TranslateModule, TranslateModule, []), ??mpd(1073742336, VerifyDetailModule, VerifyDetailModule, []), ??mpd(1073742336, SharedModule, SharedModule, []), ??mpd(1073742336, DragAndDropModule, DragAndDropModule, []), ??mpd(1073742336, GroupModule, GroupModule, []), ??mpd(1073742336, EventsModule, EventsModule, []), ??mpd(1073742336, NumericTextBoxModule, NumericTextBoxModule, []), ??mpd(1073742336, IntlModule, IntlModule, []), ??mpd(1073742336, EventsModule$1, EventsModule$1, []), ??mpd(1073742336, DateInputModule, DateInputModule, []), ??mpd(1073742336, CalendarCommonModule, CalendarCommonModule, []), ??mpd(1073742336, TemplatesModule, TemplatesModule, []), ??mpd(1073742336, VirtualizationModule, VirtualizationModule, []), ??mpd(1073742336, CalendarModule$1, CalendarModule$1, []), ??mpd(1073742336, DatePickerModule, DatePickerModule, []), ??mpd(1073742336, BodyModule, BodyModule, []), ??mpd(1073742336, ResizeSensorModule, ResizeSensorModule, []), ??mpd(1073742336, SharedDirectivesModule, SharedDirectivesModule, []), ??mpd(1073742336, SharedModule$1, SharedModule$1, []), ??mpd(1073742336, DropDownListModule, DropDownListModule, []), ??mpd(1073742336, AutoCompleteModule, AutoCompleteModule, []), ??mpd(1073742336, TextBoxModule, TextBoxModule, []), ??mpd(1073742336, DraggableModule, DraggableModule, []), ??mpd(1073742336, SliderModule, SliderModule, []), ??mpd(1073742336, SwitchModule$1, SwitchModule$1, []), ??mpd(1073742336, MaskedTextBoxModule, MaskedTextBoxModule, []), ??mpd(1073742336, InputsModule, InputsModule, []), ??mpd(1073742336, SharedFilterModule, SharedFilterModule, []), ??mpd(1073742336, RowFilterModule, RowFilterModule, []), ??mpd(1073742336, FilterMenuModule, FilterMenuModule, []), ??mpd(1073742336, ColumnMenuModule, ColumnMenuModule, []), ??mpd(1073742336, HeaderModule, HeaderModule, []), ??mpd(1073742336, FooterModule, FooterModule, []), ??mpd(1073742336, PagerModule, PagerModule, []), ??mpd(1073742336, GridModule, GridModule, []), ??mpd(1073742336, MultiViewCalendarModule, MultiViewCalendarModule, []), ??mpd(1073742336, CalendarsModule, CalendarsModule, []), ??mpd(1073742336, TimePickerModule$1, TimePickerModule$1, []), ??mpd(1073742336, DateRangeModule, DateRangeModule, []), ??mpd(1073742336, DateInputsModule, DateInputsModule, []), ??mpd(1073742336, ComboBoxModule, ComboBoxModule, []), ??mpd(1073742336, MultiSelectModule$1, MultiSelectModule$1, []), ??mpd(1073742336, DropDownsModule, DropDownsModule, []), ??mpd(1073742336, NgbTooltipModule, NgbTooltipModule, []), ??mpd(1073742336, FarrisTabsModule, FarrisTabsModule, []), ??mpd(1073742336, FarrisTagModule, FarrisTagModule, []), ??mpd(1073742336, ProgressModule, ProgressModule, []), ??mpd(1073742336, UploadModule, UploadModule, []), ??mpd(1073742336, UploadDialogMoudle, UploadDialogMoudle, []), ??mpd(1073742336, FieldGroupModule, FieldGroupModule, []), ??mpd(1073742336, FarrisTimeSpinnerModule, FarrisTimeSpinnerModule, []), ??mpd(1073742336, ProgressStepModule, ProgressStepModule, []), ??mpd(1073742336, WizardModule, WizardModule, []), ??mpd(1073742336, MultiSelectModule, MultiSelectModule, []), ??mpd(1073742336, QueryConditionModule, QueryConditionModule, []), ??mpd(1073742336, QuerySolutionModule, QuerySolutionModule, []), ??mpd(1073742336, FarrisButtonModule, FarrisButtonModule, []), ??mpd(1073742336, ListViewModule, ListViewModule, []), ??mpd(1073742336, SplitterModule, SplitterModule, []), ??mpd(1073742336, ListNavModule, ListNavModule, []), ??mpd(1073742336, TextModule, TextModule, []), ??mpd(1073742336, WFCommentModule, WFCommentModule, []), ??mpd(1073742336, WFRuntimeModule, WFRuntimeModule, []), ??mpd(1073742336, SharedModule$2, SharedModule$2, []), ??mpd(1073742336, WindowModule, WindowModule, []), ??mpd(1073742336, DialogModule, DialogModule, []), ??mpd(1073742336, CloudPrintModule, CloudPrintModule, []), ??mpd(1073742336, FarrisHtmlEditorModule, FarrisHtmlEditorModule, []), ??mpd(1073742336, ViewChangeModule, ViewChangeModule, []), ??mpd(1073742336, ListFilterModule, ListFilterModule, []), ??mpd(1073742336, CalendarModule, CalendarModule, []), ??mpd(1073742336, ScrollspyModule, ScrollspyModule, []), ??mpd(1073742336, DynamicControlGroupModule, DynamicControlGroupModule, []), ??mpd(1073742336, FarrisFooterModule, FarrisFooterModule, []), ??mpd(1073742336, BatchEditDialogModule, BatchEditDialogModule, []), ??mpd(1073742336, TreeModule, TreeModule, []), ??mpd(1073742336, FFileUploadModule, FFileUploadModule, []), ??mpd(1073742336, DiscussionGroupModule, DiscussionGroupModule, []), ??mpd(1073742336, NavModule, NavModule, []), ??mpd(1073742336, TagsModule, TagsModule, []), ??mpd(1073742336, FfileuploadAdaptUnifileModule, FfileuploadAdaptUnifileModule, []), ??mpd(1073742336, DatagridFilterRowModule, DatagridFilterRowModule, []), ??mpd(1073742336, DatagridSettingsModule, DatagridSettingsModule, []), ??mpd(1073742336, EditorModule, EditorModule, []), ??mpd(1073742336, FrmCommonModule, FrmCommonModule, []), ??mpd(1073742336, FEHeaderFooterModule, FEHeaderFooterModule, []), ??mpd(1073742336, FEPageModalModule, FEPageModalModule, []), ??mpd(1073742336, FeatureEditorModule, FeatureEditorModule, []), ??mpd(1073742336, FEScrollCollapsibleAreaModule, FEScrollCollapsibleAreaModule, []), ??mpd(1073742336, ProjectFanwzRoutingModule, ProjectFanwzRoutingModule, []), ??mpd(1073742336, ExcelExportModule, ExcelExportModule, []), ??mpd(1073742336, ExcelModule, ExcelModule, []), ??mpd(1073742336, CheckBoxModule, CheckBoxModule, []), ??mpd(1073742336, SharedModule$3, SharedModule$3, []), ??mpd(1073742336, TreeViewModule, TreeViewModule, []), ??mpd(1073742336, PDFModule, PDFModule, []), ??mpd(1073742336, DataImpExpModule, DataImpExpModule, []), ??mpd(512, TranslateStore, TranslateStore, []), ??mpd(512, ??angular_packages_common_http_http_d, ??angular_packages_common_http_http_d, []), ??mpd(2048, XhrFactory, null, [??angular_packages_common_http_http_d]), ??mpd(512, HttpXhrBackend, HttpXhrBackend, [XhrFactory]), ??mpd(2048, HttpBackend, null, [HttpXhrBackend]), ??mpd(512, HttpHandler, ??HttpInterceptingHandler, [HttpBackend, Injector]), ??mpd(512, HttpClient, HttpClient, [HttpHandler]), ??mpd(1024, TranslateLoader, ??0$3, [HttpClient]), ??mpd(512, TranslateCompiler, TranslateFakeCompiler, []), ??mpd(512, TranslateParser, TranslateDefaultParser, []), ??mpd(512, MissingTranslationHandler, JitMissingTranslationHandler, []), ??mpd(256, USE_DEFAULT_LANG, undefined, []), ??mpd(256, USE_STORE, undefined, []), ??mpd(512, TranslateService, TranslateService, [TranslateStore, TranslateLoader, TranslateCompiler, TranslateParser, MissingTranslationHandler, USE_DEFAULT_LANG, USE_STORE]), ??mpd(512, TranslateResolveService, TranslateResolveService, [TranslateService, HttpClient]), ??mpd(1073742336, ProjectFanwzModule, ProjectFanwzModule, [TranslateResolveService]), ??mpd(256, LOCALE_ID, ??1$2, []), ??mpd(256, FARRIS_LOCAL_CUSTOM_DATA, {}, []), ??mpd(256, ??angular_packages_common_http_http_e, "XSRF-TOKEN", []), ??mpd(256, ??angular_packages_common_http_http_f, "X-XSRF-TOKEN", []), ??mpd(256, LOADING_DEFAULT_CONFIG, loaddingDefaultConfig, []), ??mpd(256, MESSAGER_DEFAULT_CONFIG, MessagerDefaultConfig, []), ??mpd(256, SWITCH_OPTIONS, {}, []), ??mpd(256, SCROLLBAR_CONFIG, { minScrollbarLength: 20 }, []), ??mpd(1024, GRID_EDITORS, function () { return [{ name: "textarea", value: DatagridTextareaComponent }, { name: "textbox", value: DatagridTextboxComponent }, { name: "checkbox", value: ??a$4 }, { name: "datepicker", value: ??b$2 }, { name: "input-group", value: ??c$3 }, { name: "select", value: ??d$2 }, { name: "lookup", value: ??e$1 }, { name: "numberbox", value: ??f$3 }, { name: "combolist", value: ??g$2 }, { name: "switch", value: ??h$1 }, { name: "timepicker", value: ??i }, { name: "combo-lookup", value: ??j$1 }, { name: "language-textbox", value: ??k }, { name: "enum-editor", value: DatagridEnumEditorComponent }, { name: "filter-editor", value: DatagridFilterEditorComponent }, { name: "sort-editor", value: DatagridSortEditorComponent }, { name: "textarea", value: DatagridTextareaComponent }, { name: "textbox", value: DatagridTextboxComponent }, { name: "checkbox", value: ??a$4 }, { name: "datepicker", value: ??b$2 }, { name: "input-group", value: ??c$3 }, { name: "select", value: ??d$2 }, { name: "lookup", value: ??e$1 }, { name: "numberbox", value: ??f$3 }, { name: "combolist", value: ??g$2 }, { name: "switch", value: ??h$1 }, { name: "timepicker", value: ??i }, { name: "combo-lookup", value: ??j$1 }, { name: "language-textbox", value: ??k }, { name: "enum-editor", value: DatagridEnumEditorComponent }, { name: "filter-editor", value: DatagridFilterEditorComponent }, { name: "sort-editor", value: DatagridSortEditorComponent }]; }, []), ??mpd(256, TOUCH_ENABLED, touchEnabled, []), ??mpd(256, TOUCH_ENABLED$1, touchEnabled$1, []), ??mpd(256, ??b$3, { modules: defaultModules }, []), ??mpd(256, FFileUploadAPIServiceToken, null, []), ??mpd(1024, ROUTES, function () { return [[{ path: "", component: RootComponent, children: [], resolve: { "translate": TranslateResolveService } }]]; }, []), ??mpd(256, GRID_FILTER_ROW, FilterRowComponent, []), ??mpd(256, TINYMCE_SCRIPT_SRC, "/platform/common/web/assets/tinymce/tinymce.min.js", []), ??mpd(256, FORM_PATH_TOKEN, "/apps/fssc/df/web/bo-projectsfanwzfront/projectfanwz/", [])]); }));

        }
    };
});
