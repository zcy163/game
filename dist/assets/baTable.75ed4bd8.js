var e=Object.defineProperty,t=(t,a,i)=>(((t,a,i)=>{a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[a]=i})(t,"symbol"!=typeof a?a+"":a,i),i);/* empty css             *//* empty css                  *//* empty css                   */import{a1 as a,d as i,r as s,Y as r,E as o,a2 as n,a3 as l,a4 as d,a5 as h,b as u,e as f,j as c,n as p,k as b,w as m,L as g,M as v,f as w,z as y,g as k,a6 as I,a7 as x,a8 as A,p as z,B as C,C as B,y as _,a9 as T,aa as j,ab as P}from"./index.99533025.js";function S(){if(!a())throw new Error("useCurrentInstance() can only be used inside setup() or functional components!");const{appContext:e}=a();return{proxy:e.config.globalProperties}}const E={key:0,class:"table-pagination"},F=z(i({__name:"index",props:{pagination:{type:Boolean,default:!0}},emits:["action"],setup(e,{emit:t}){const a=e,{proxy:i}=S(),z=I("baTable"),C=s(""),B=r({currentPage:1,pageSize:10}),_=(e,t)=>{i.eventBus.emit("onTableButtonClick",{name:e,row:t})},T=o((()=>{var e;return null==(e=z.table.data)?void 0:e.filter((e=>!C.value||e.username.toLowerCase().includes(C.value.toLowerCase())))})),j=e=>{B.pageSize=e,t("action","page-size-change",{size:e})},P=e=>{B.currentPage=e,t("action","current-page-change",{page:e})};return(e,t)=>{const i=x,s=A,r=n,o=l,I=d,S=h;return u(),f("div",null,[c((u(),b(o,{class:"ba-data-table w100","header-cell-class-name":"table-header-cell","row-class-name":"table-row",data:p(T),border:!0,stripe:""},{default:m((()=>[(u(!0),f(g,null,v(p(z).table.column,((e,a)=>(u(),f(g,{key:a},["operator"===e.label?(u(),b(r,{key:0,align:"right",width:e.width},{header:m((()=>[w(i,{modelValue:C.value,"onUpdate:modelValue":t[0]||(t[0]=e=>C.value=e),size:"small",placeholder:"根据用户名搜索"},null,8,["modelValue"])])),default:m((e=>{var t;return[w(s,{class:"table-operate table-row-edit",type:"primary",onClick:t=>_("edit",e.row)},{default:m((()=>[y(" 编辑 ")])),_:2},1032,["onClick"]),w(s,{class:"table-operate table-row-edit",type:"danger",onClick:t=>_("delete",e.row),disabled:"admin"===(null==(t=e.row)?void 0:t.username)},{default:m((()=>[y(" 删除 ")])),_:2},1032,["onClick","disabled"])]})),_:2},1032,["width"])):(u(),b(r,{key:1,label:e.label,prop:e.prop},null,8,["label","prop"]))],64)))),128))])),_:1},8,["data"])),[[S,p(z).table.loading]]),a.pagination&&p(z).table.total?(u(),f("div",E,[w(I,{currentPage:B.currentPage,"onUpdate:currentPage":t[1]||(t[1]=e=>B.currentPage=e),"page-size":B.pageSize,"onUpdate:page-size":t[2]||(t[2]=e=>B.pageSize=e),"page-sizes":[10,20,50,100],background:"",layout:"sizes,total, ->, prev, pager, next, jumper",total:p(z).table.total,onSizeChange:j,onCurrentChange:P},null,8,["currentPage","page-size","total"])])):k("",!0)])}}}),[["__scopeId","data-v-8a7f5ccc"]]),L=e=>(C("data-v-6b947d85"),e=e(),B(),e),q={class:"table-header-index"},D=L((()=>_("span",null,"刷新",-1))),H=L((()=>_("span",null,"新增",-1))),O=z(i({__name:"header",props:{buttons:{default:()=>["refresh","add","edit","delete"]},quickSearchPlaceholder:{default:""}},emits:["action"],setup(e,{emit:t}){const a=e;I("baTable");const i=(e,a={})=>{t("action",e,a)};return(e,t)=>{const s=A;return u(),f("div",q,[a.buttons.includes("refresh")?(u(),b(s,{key:0,class:"table-header-operate",type:"success",onClick:t[0]||(t[0]=e=>i("refresh",{loading:!0}))},{default:m((()=>[D])),_:1})):k("",!0),a.buttons.includes("add")?(u(),b(s,{key:1,class:"table-header-operate",type:"warning",onClick:t[1]||(t[1]=e=>i("add"))},{default:m((()=>[H])),_:1})):k("",!0)])}}}),[["__scopeId","data-v-6b947d85"]]);class M{constructor(e,a,i={},s={},o={}){t(this,"api"),t(this,"activate"),t(this,"table",r({pk:"id",column:[],total:0,filter:{},loading:!1,selection:[]})),t(this,"form",r({ref:void 0,operate:"",operateIds:[],items:{},defaultItems:{},loading:!1,submitLoading:!1,labelWidth:160})),t(this,"before"),t(this,"after"),t(this,"getIndex",(()=>{if(!1!==this.runBefore("getIndex"))return this.table.loading=!0,this.api.index(this.table.filter).then((e=>{this.table.total=e.data.total,this.table.data=e.data.list,this.table.loading=!1,this.runAfter("getIndex",{res:e})})).catch((()=>{this.table.loading=!1}))})),t(this,"postDel",(e=>{!1!==this.runBefore("postDel",{ids:e})&&this.api.del(e).then((e=>{this.onTableHeaderAction("refresh",{}),this.runAfter("postDel",{res:e})}))})),t(this,"requestEdit",(e=>{if(!1!==this.runBefore("requestEdit",{id:e}))return this.form.loading=!0,this.form.items={},this.api.edit({[this.table.pk]:e}).then((e=>{this.form.loading=!1,this.form.items=e.data.row,this.runAfter("requestEdit",{res:e})}))})),t(this,"onTableHeaderAction",((e,t)=>{if(!1===this.runBefore("onTableHeaderAction",{event:e,data:t}))return;const a=new Map([["refresh",()=>{this.table.data=[],this.getIndex()}],["add",()=>{this.toggleForm("add")}]]);return(a.get(e)||a.get("default")).call(this),this.runAfter("onTableHeaderAction",{event:e,data:t})})),t(this,"onTableAction",((e,t)=>{if(!1===this.runBefore("onTableAction",{event:e,data:t}))return;const a=new Map([["selection-change",()=>{this.table.selection=t}],["page-size-change",()=>{this.table.filter.limit=t.size,this.getIndex()}],["current-page-change",()=>{this.table.filter.page=t.page,this.getIndex()}],["sort-change",()=>{let e="";t.prop?t.prop&&(e=t.prop+","+t.order):e="",e!=this.table.filter.order&&(this.table.filter.order=e,this.getIndex())}],["default",()=>{}]]);return(a.get(e)||a.get("default")).call(this),this.runAfter("onTableAction",{event:e,data:t})})),t(this,"toggleForm",((e="",t=[])=>{if(!1!==this.runBefore("toggleForm",{operate:e,operateIds:t})){if(this.form.ref&&this.form.ref.resetFields(),"edit"==e){if(!t.length)return!1;this.requestEdit(t[0])}else"add"==e&&(this.form.items=Object.assign({},this.form.defaultItems));this.form.operate=e,this.form.operateIds=t,this.runAfter("toggleForm",{operate:e,operateIds:t})}})),t(this,"onSubmit",(e=>{if(!1===this.runBefore("onSubmit",{formEl:e,operate:this.form.operate,items:this.form.items}))return;Object.keys(this.form.items).forEach((e=>{null===this.form.items[e]&&delete this.form.items[e]}));const t=()=>{this.form.submitLoading=!0,this.api.postData(this.form.operate,this.form.items).then((e=>{var t;this.onTableHeaderAction("refresh",{}),this.form.submitLoading=!1,null==(t=this.form.operateIds)||t.shift(),this.form.operateIds.length>0?this.toggleForm("edit",this.form.operateIds):this.toggleForm(),this.runAfter("onSubmit",{res:e})})).catch((()=>{this.form.submitLoading=!1}))};e?(this.form.ref=e,e.validate((e=>{e&&t()}))):t()})),t(this,"mount",(()=>{if(!1===this.runBefore("mount"))return;this.activate=!0;const{proxy:e}=S();e.eventBus.on("onTableButtonClick",(e=>{this.activate&&("edit"==e.name?this.toggleForm("edit",[e.row[this.table.pk]]):"delete"==e.name&&this.postDel([e.row[this.table.pk]]))})),T((()=>{this.activate=!1,this.runAfter("mount")})),j((()=>{this.activate=!0})),P((()=>{this.activate=!1}))})),this.api=e,this.table=Object.assign(this.table,a),this.form=Object.assign(this.form,i),this.before=s,this.after=o,this.activate=!0}runBefore(e,t={}){return!this.before||!this.before[e]||"function"!=typeof this.before[e]||!1!==this.before[e]({...t})}runAfter(e,t={}){return!this.after||!this.after[e]||"function"!=typeof this.after[e]||!1!==this.after[e]({...t})}}export{O as T,F as a,M as b};
