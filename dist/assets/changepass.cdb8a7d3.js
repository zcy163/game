import{d as e,u as a,r as s,b as l,e as r,f as o,w as n,y as d,U as u,h as t,p as m}from"./index.99533025.js";import{t as c,u as i}from"./common.0150f410.js";const p={class:"changepass-box"},v={class:"header"},f={class:"changepass-main"},w=m(e({__name:"changepass",setup(e){const m=a(),w=s({id:m.getId(),username:m.getUsername(),password:""}),h=()=>{new c(i).postData("edit",w.value).then((e=>{b()}))},b=()=>{u.push({name:"GameHome"})};return(e,a)=>{const s=t("van-icon"),u=t("van-sticky"),m=t("van-field"),c=t("van-cell-group"),i=t("van-form");return l(),r("div",p,[o(u,null,{default:n((()=>[d("div",v,[o(s,{name:"arrow-left",color:"#ccc",size:"20px",onClick:b})])])),_:1}),d("div",f,[o(i,{ref:"userFormRef",onSubmit:h,"validate-first":!0},{default:n((()=>[o(c,{inset:""},{default:n((()=>[o(m,{modelValue:w.value.username,"onUpdate:modelValue":a[0]||(a[0]=e=>w.value.username=e),type:"text",name:"username",label:"username",placeholder:"username",disabled:"",rules:[{required:!0,message:"Incorrect Password"}]},null,8,["modelValue"]),o(m,{modelValue:w.value.password,"onUpdate:modelValue":a[1]||(a[1]=e=>w.value.password=e),type:"password",name:"password",label:"Password",placeholder:"Password",rules:[{required:!0,message:"Incorrect Password"}]},null,8,["modelValue"])])),_:1}),d("div",{class:"ibutton",onClick:h}," Submit ")])),_:1},512)])])}}}),[["__scopeId","data-v-359a042a"]]);export{w as default};