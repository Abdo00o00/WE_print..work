"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[10],{1010:(J,_,s)=>{s.r(_),s.d(_,{PropertiesModule:()=>X});var c=s(177),m=s(6627),p=s(3865),M=s(2145),k=s(7945),e=s(4438),u=s(8005),f=s(9021),b=s(7313),v=s(5144),T=s(5779),C=s(1141),h=s(9998),g=s(8018);function j(r,d){1&r&&e.nrm(0,"app-loading-shimmer")}function D(r,d){if(1&r){const t=e.RV6();e.j41(0,"li",16),e.bIt("click",function(){const n=e.eBV(t).$implicit,a=e.XpG(2).$implicit;return e.Njj(n.command({id:a.id}))}),e.j41(1,"a",17),e.nrm(2,"span",18),e.j41(3,"span",19),e.EFF(4),e.k0s()()()}if(2&r){const t=d.$implicit;e.R7$(),e.BMQ("aria-label",t.label),e.R7$(),e.HbH(t.icon),e.R7$(2),e.JRh(t.label)}}function I(r,d){if(1&r){const t=e.RV6();e.j41(0,"tr")(1,"td"),e.EFF(2),e.k0s(),e.j41(3,"td"),e.EFF(4),e.k0s(),e.j41(5,"td"),e.EFF(6),e.k0s(),e.j41(7,"td"),e.EFF(8),e.k0s(),e.j41(9,"td"),e.EFF(10),e.k0s(),e.j41(11,"td")(12,"div",12)(13,"div")(14,"p-menu",13,1),e.DNE(16,D,5,4,"ng-template",14),e.k0s(),e.j41(17,"p-button",15),e.bIt("onClick",function(n){e.eBV(t);const a=e.sdS(15);return e.Njj(a.toggle(n))}),e.k0s()()()()()}if(2&r){const t=e.XpG().$implicit,i=e.XpG(2);e.R7$(2),e.Lme("",t.id," ",t.lastName,""),e.R7$(2),e.JRh(t.name),e.R7$(2),e.JRh(t.property_heading.name),e.R7$(2),e.JRh(t.price),e.R7$(2),e.JRh(t.created_at),e.R7$(4),e.Y8G("model",i.actionOptions)("popup",!0),e.R7$(3),e.Y8G("text",!0)}}function $(r,d){1&r&&(e.j41(0,"td"),e.nrm(1,"p-skeleton"),e.k0s())}function L(r,d){if(1&r&&(e.j41(0,"tr"),e.Z7z(1,$,2,0,"td",null,e.Vm6),e.j41(3,"td"),e.nrm(4,"p-skeleton"),e.k0s()()),2&r){const t=e.XpG(3);e.R7$(),e.Dyx(t.items.headers)}}function E(r,d){if(1&r&&e.DNE(0,I,18,9,"tr")(1,L,5,0,"tr"),2&r){const t=e.XpG(2);e.vxM(0,t.isLoadingFilter?-1:0),e.R7$(),e.vxM(1,t.isLoadingFilter?1:-1)}}function G(r,d){if(1&r){const t=e.RV6();e.j41(0,"div",9)(1,"div",10)(2,"app-dynamic-table",11),e.nI1(3,"translate"),e.bIt("pageChange",function(n){e.eBV(t);const a=e.XpG();return e.Njj(a.onPageChange(n))})("pageSizeChange",function(n){e.eBV(t);const a=e.XpG();return e.Njj(a.onPageSizeChange(n))})("search",function(n){e.eBV(t);const a=e.XpG();return e.Njj(a.onSearch(n))})("buttonClick",function(){e.eBV(t);const n=e.XpG();return e.Njj(n.openComponent())}),e.k0s(),e.DNE(4,E,2,2,"ng-template",null,0,e.C5r),e.k0s()()}if(2&r){const t=e.sdS(5),i=e.XpG();e.R7$(2),e.Y8G("items",i.items)("hasHeader",!0)("enablePagination",!1)("showBtn",i.addItem)("enableSorting",!1)("initialPageSize",i.size)("totalRecords",null==i.paginationResponse?null:i.paginationResponse.total)("bodyTemplate",t)("customTemplate",!0)("showBtn",!0)("buttonText",e.bMT(3,12,"Add property"))("HandelRenderingDataMessage",i.HandelRenderingDataMessage)}}let P=(()=>{class r extends M.j{constructor(t,i,n,a){super(a),this.router=t,this.injector=i,this.alertService=n,this.Urls=k.f,this.isLoadingFilter=!1,this.isLoadingItems=!0,this.categoriesList=[],this.actionOptions=[{label:"Edit",icon:"pi pi-pencil",command:l=>{l?.id&&(console.log("edit",l.id),this.router.navigate(["/admin/properties/edit",l.id]))}},{label:"Delete",icon:"pi pi-trash text-danger",command:l=>{l?.id&&this.deleteData(l.id)}}],this.items={tableHeader:"Services",headers:["ID","Name","Info","Price","Created On","Actions"],data:[]}}openComponent(){this.router.navigate(["/admin/properties/add"])}list(t){t?this.isLoadingFilter=!0:this.isLoadingItems=!0,this.HandelRenderingDataMessage="Loading...",this.injector.get(p.h).listProperties(this.request).subscribe({next:n=>{this.categoriesList=n.data,this.items.data=n.data,this.paginationResponse={...n.meta,...n.links},this.isLoadingItems=!1,this.isLoadingFilter=!1,0==n.data.length&&(this.HandelRenderingDataMessage="No Data Found"),this.cdr.detectChanges()},error:n=>{this.errorMessage=n.error.errors}})}deleteData(t){this.injector.get(p.h).deletePropertiesHeadings({id:t,table:"properties"}).subscribe({next:n=>{this.alertService.toast({severity:"success",summary:"",detail:n.message}),this.list()},error:n=>{this.errorMessage=n.error.errors}})}static{this.\u0275fac=function(i){return new(i||r)(e.rXU(m.Ix),e.rXU(e.zZn),e.rXU(u.n),e.rXU(e.gRc))}}static{this.\u0275cmp=e.VBU({type:r,selectors:[["app-list"]],features:[e.Vt3],decls:12,vars:5,consts:[["customBodyTemplate",""],["menu",""],[1,"page-breadcrumb"],[1,"breadcrumb"],[1,"breadcrumb-item"],["routerLink","/admin/properties"],[1,"d-flex","justify-content-center","h-100"],[1,"card","w-100","border-0"],[1,"card-body","pt-0"],[1,"row","h-100"],[1,"col-12","my-2"],[3,"pageChange","pageSizeChange","search","buttonClick","items","hasHeader","enablePagination","showBtn","enableSorting","initialPageSize","totalRecords","bodyTemplate","customTemplate","buttonText","HandelRenderingDataMessage"],[1,"actions"],["appendTo","body",3,"model","popup"],["pTemplate","option"],["icon","pi pi-ellipsis-v","severity","secondary",3,"onClick","text"],["pMenuItem","",3,"click"],[1,"p-ripple","p-element","p-menuitem-link","small"],[1,"p-menuitem-icon"],[1,"p-menuitem-text"]],template:function(i,n){1&i&&(e.j41(0,"nav",2)(1,"ol",3)(2,"li",4)(3,"a",5),e.EFF(4),e.nI1(5,"translate"),e.k0s()()()(),e.nrm(6,"p-toast"),e.j41(7,"div",6)(8,"div",7)(9,"div",8),e.DNE(10,j,1,0,"app-loading-shimmer")(11,G,6,14,"div",9),e.k0s()()()),2&i&&(e.R7$(4),e.SpI(" ",e.bMT(5,3,"Properties"),""),e.R7$(6),e.vxM(10,n.isLoadingItems?10:-1),e.R7$(),e.vxM(11,n.isLoadingItems?-1:11))},dependencies:[m.Wk,f.J,b.f,v.W1,T.Ei,C.$n,h.y8,g.D9]})}}return r})();var F=s(467),o=s(9417),R=s(8848);function S(r,d){if(1&r&&(e.j41(0,"option",26),e.EFF(1),e.k0s()),2&r){const t=d.$implicit;e.Y8G("value",t.id),e.R7$(),e.JRh(t.name)}}function N(r,d){if(1&r&&(e.j41(0,"div",27),e.EFF(1),e.k0s()),2&r){const t=e.XpG();e.R7$(),e.SpI(" ",t.errorMessage," ")}}let y=(()=>{class r{constructor(t,i,n,a){this.router=t,this.injector=i,this.alertService=n,this.fb=a,this.errorMessage="",this.isEditPage=!1,this.selectedFile=null,this.list=[],this.fileAddedBeforeArrayMuti=[],this.uploadForm=this.fb.group({ar_name:["",[o.k0.required,o.k0.minLength(3)]],en_name:["",[o.k0.required,o.k0.minLength(3)]],property_id_heading:["",[o.k0.required]],price:["",[o.k0.required,o.k0.min(0)]],icon_name:["",[o.k0.minLength(3)]],icon_label:["",[o.k0.minLength(3)]]})}ngOnInit(){this.getAllPropertiesService(),this.isEditPage=this.router.url.indexOf("edit")>-1,this.isEditPage&&this.getIDfromUrl()}onRemoveFile(t){var i=this;return(0,F.A)(function*(){i.uploadForm.get("image")?.reset(null),t.length&&i.onUploadSuccess(t)})()}onUploadSuccess(t){var i=this;return(0,F.A)(function*(){i.selectedFile=t})()}changeValue(t,i){return this.uploadForm.get(i)?.setValue(t),!0}changeTouche(t){return this.uploadForm.get(t)?.markAsTouched(),!0}getIDfromUrl(){const i=this.router.url.match(/\/edit\/(\d+)/);i&&(this.id=i[1],this.getDataByID(this.id))}getDataByID(t){this.injector.get(p.h).geProperityDataByID(t).subscribe({next:n=>{this.currentData=n.data,console.log(this.currentData)},error:n=>{this.errorMessage=n.error.errors}})}getAllPropertiesService(){this.injector.get(p.h).listPropertiesHeadings().subscribe({next:i=>{this.list=i.data},error:i=>{this.errorMessage=i.error.errors}})}removeNullProperties(t){return Array.isArray(t)?t.map(this.removeNullProperties):"object"==typeof t&&null!==t?Object.fromEntries(Object.entries(t).filter(([i,n])=>null!==n).map(([i,n])=>[i,this.removeNullProperties(n)])):t}submitData(){const t=new FormData,i=(a,l)=>{if(l){if(Array.isArray(l)&&0===l.length)return;t.append(a,l)}};i("ar_name",this.uploadForm.get("ar_name")?.value),i("property_id_heading",this.uploadForm.get("property_id_heading")?.value),i("price",this.uploadForm.get("price")?.value),i("en_name",this.uploadForm.get("en_name")?.value),i("icon_name",this.uploadForm.get("icon_name")?.value),i("icon_label",this.uploadForm.get("icon_label")?.value),i("image",this.selectedFile),this.isEditPage&&t.append("_method","PUT"),this.injector.get(p.h).properties(t,this.id).subscribe({next:a=>{this.alertService.toast({severity:"success",summary:"",detail:a.message}),this.router.navigate(["/admin/properties"])},error:a=>{this.errorMessage=a.error.message}})}static{this.\u0275fac=function(i){return new(i||r)(e.rXU(m.Ix),e.rXU(e.zZn),e.rXU(u.n),e.rXU(o.ok))}}static{this.\u0275cmp=e.VBU({type:r,selectors:[["app-form"]],decls:59,vars:60,consts:[[1,"card"],[1,"card-header"],[1,"card-body"],[1,"row"],[1,"col-12"],[1,"forms-sample",3,"formGroup"],[1,"mb-3"],["for","ar_name",1,"form-label"],["type","text","id","ar_name","required","","formControlName","ar_name",1,"form-control",3,"placeholder","ngModel"],["for","en_name",1,"form-label"],["type","text","id","en_name","required","","formControlName","en_name",1,"form-control",3,"placeholder","ngModel"],["for","property_heading",1,"form-label"],["formControlName","property_id_heading",1,"form-select","mb-3",3,"ariaPlaceholder","ngModel"],["selected","","disabled",""],[3,"value",4,"ngFor","ngForOf"],["for","price",1,"form-label"],["type","number","id","price","required","","formControlName","price",1,"form-control",3,"placeholder","ngModel"],["for","icon_name",1,"form-label"],["type","text","id","icon_name","required","","formControlName","icon_name",1,"form-control",3,"placeholder","ngModel"],["for","icon_label",1,"form-label"],["type","text","id","icon_label","required","","formControlName","icon_label",1,"form-control",3,"placeholder","ngModel"],["for","image",1,"form-label"],[3,"onClick","fileRemoved","fileAdded","fileAddedBefore","isMultiple","maxFiles","accepts"],[1,"col-md-12","d-flex","align-items-center","justify-content-end"],["type","submit",1,"btn","btn-solid-main",3,"click"],["class","error-message text-danger",4,"ngIf"],[3,"value"],[1,"error-message","text-danger"]],template:function(i,n){1&i&&(e.j41(0,"div",0)(1,"h4",1),e.EFF(2),e.nI1(3,"translate"),e.k0s(),e.nrm(4,"p-toast"),e.j41(5,"div",2)(6,"div",3)(7,"div",4)(8,"form",5)(9,"div",6)(10,"label",7),e.EFF(11),e.nI1(12,"translate"),e.k0s(),e.nrm(13,"input",8),e.nI1(14,"translate"),e.k0s(),e.j41(15,"div",6)(16,"label",9),e.EFF(17),e.nI1(18,"translate"),e.k0s(),e.nrm(19,"input",10),e.nI1(20,"translate"),e.k0s(),e.j41(21,"div",6)(22,"label",11),e.EFF(23),e.nI1(24,"translate"),e.k0s(),e.j41(25,"select",12),e.nI1(26,"translate"),e.j41(27,"option",13),e.EFF(28),e.nI1(29,"translate"),e.k0s(),e.DNE(30,S,2,2,"option",14),e.k0s()(),e.j41(31,"div",6)(32,"label",15),e.EFF(33),e.nI1(34,"translate"),e.k0s(),e.nrm(35,"input",16),e.nI1(36,"translate"),e.k0s(),e.j41(37,"div",6)(38,"label",17),e.EFF(39),e.nI1(40,"translate"),e.k0s(),e.nrm(41,"input",18),e.nI1(42,"translate"),e.k0s(),e.j41(43,"div",6)(44,"label",19),e.EFF(45),e.nI1(46,"translate"),e.k0s(),e.nrm(47,"input",20),e.nI1(48,"translate"),e.k0s(),e.j41(49,"div",6)(50,"label",21),e.EFF(51),e.nI1(52,"translate"),e.k0s(),e.j41(53,"app-upload-files",22),e.bIt("onClick",function(l){return n.changeValue(l,"image")})("onClick",function(){return n.changeTouche("image")})("fileRemoved",function(l){return n.onRemoveFile(l)})("fileAdded",function(l){return n.onUploadSuccess(l)}),e.k0s()(),e.j41(54,"div",23)(55,"button",24),e.bIt("click",function(){return n.submitData()}),e.EFF(56),e.nI1(57,"translate"),e.k0s()()(),e.DNE(58,N,2,1,"div",25),e.k0s()()()()),2&i&&(e.R7$(2),e.JRh(e.bMT(3,28,n.isEditPage?"edit properity":"add a new properity")),e.R7$(6),e.Y8G("formGroup",n.uploadForm),e.R7$(3),e.JRh(e.bMT(12,30,"ar_name")),e.R7$(2),e.Y8G("placeholder",e.bMT(14,32,"ar_name"))("ngModel",null==n.currentData?null:n.currentData.name),e.R7$(4),e.JRh(e.bMT(18,34,"en_name")),e.R7$(2),e.Y8G("placeholder",e.bMT(20,36,"en_name"))("ngModel",null==n.currentData?null:n.currentData.name),e.R7$(4),e.JRh(e.bMT(24,38,"property_heading")),e.R7$(2),e.Y8G("ariaPlaceholder",e.bMT(26,40,"property_heading"))("ngModel",null==n.currentData||null==n.currentData.property_heading?null:n.currentData.property_heading.id),e.R7$(3),e.JRh(e.bMT(29,42,"Select property heading")),e.R7$(2),e.Y8G("ngForOf",n.list),e.R7$(3),e.JRh(e.bMT(34,44,"price")),e.R7$(2),e.Y8G("placeholder",e.bMT(36,46,"price"))("ngModel",null==n.currentData?null:n.currentData.price),e.R7$(4),e.JRh(e.bMT(40,48,"icon_name")),e.R7$(2),e.Y8G("placeholder",e.bMT(42,50,"icon_name"))("ngModel",null==n.currentData||null==n.currentData.icon_info?null:n.currentData.icon_info.icon),e.R7$(4),e.JRh(e.bMT(46,52,"icon_label")),e.R7$(2),e.Y8G("placeholder",e.bMT(48,54,"icon_label"))("ngModel",null==n.currentData||null==n.currentData.icon_info?null:n.currentData.icon_info.label),e.R7$(4),e.JRh(e.bMT(52,56,"image")),e.R7$(2),e.Y8G("fileAddedBefore",n.fileAddedBeforeArrayMuti)("isMultiple",!1)("maxFiles",1e6),e.R7$(3),e.JRh(e.bMT(57,58,"Save")),e.R7$(2),e.Y8G("ngIf",n.errorMessage))},dependencies:[c.Sq,c.bT,o.qT,o.xH,o.y7,o.me,o.Q0,o.wz,o.BC,o.cb,o.YS,o.j4,o.JD,h.y8,R.q,g.D9],styles:[".card-header[_ngcontent-%COMP%]{background-color:transparent;color:var(--primary-color)!important;font-weight:bolder;border:0px}"]})}}return r})();const x=[{path:"",component:P},{path:"add",component:y},{path:"edit/:id",component:y}];let B=(()=>{class r{static{this.\u0275fac=function(i){return new(i||r)}}static{this.\u0275mod=e.$C({type:r})}static{this.\u0275inj=e.G2t({imports:[m.iI.forChild(x),m.iI]})}}return r})();var A=s(8833);let X=(()=>{class r{static{this.\u0275fac=function(i){return new(i||r)}}static{this.\u0275mod=e.$C({type:r})}static{this.\u0275inj=e.G2t({providers:[p.h,u.n],imports:[c.MD,B,g.h,o.X1,f.J,b.f,v.Mk,C.tm,A.kr,h.MB,R.q]})}}return r})()}}]);