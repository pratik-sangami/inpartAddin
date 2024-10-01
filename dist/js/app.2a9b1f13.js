(function(){"use strict";var e={8702:function(e,t,n){var a=n(3751),s=n(641),i=n(33);const o={id:"app"},l={key:0,class:"loader"},r={key:1,class:"content"},c={class:"padding"},d=["src"],u={class:"action-buttons-wrapper"},m=(0,s.Lk)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},[(0,s.Lk)("path",{d:"M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zM329 305c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-95 95-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L329 305z"})],-1),p=[m],h=(0,s.Lk)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[(0,s.Lk)("path",{d:"M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"})],-1),f=[h],g={class:"content-main"},v={key:0,class:"panel-inner"},y={class:"panel-inner-header"},k=(0,s.Lk)("h4",null,"Compose Appointment",-1),b=(0,s.Lk)("label",null,"Appointment Title",-1),E=["value"],M=(0,s.Lk)("label",null,"Appointment Date",-1),L=["value"],C=(0,s.Lk)("label",null,"Appointment Stgart Time",-1),T=["value"],w=(0,s.Lk)("label",null,"Appointment End Time",-1),R=["value"],A={key:1,class:"panel-inner"},I={class:"panel-inner-header"},S=(0,s.Lk)("h4",null,"Compose Email",-1),P=(0,s.Lk)("label",null,"Subject of email",-1),D=["value"],O=(0,s.Lk)("label",null,"Message of email",-1),j=["value"],x=(0,s.Lk)("h2",null,"Email",-1),N=(0,s.Lk)("p",{class:"title"},[(0,s.Lk)("b",null,"Email Type:")],-1),z=(0,s.Lk)("p",{class:"title"},[(0,s.Lk)("b",null,"Subject:")],-1),_=(0,s.Lk)("p",{class:"title"},[(0,s.Lk)("b",null,"Sender Email:")],-1),B=(0,s.Lk)("p",{class:"title"},[(0,s.Lk)("b",null,"Sender Name:")],-1),X={key:0},q=(0,s.Lk)("p",{class:"title"},[(0,s.Lk)("b",null,"CC Recipients:")],-1),$=["onClick"],F={key:1},V=(0,s.Lk)("p",{class:"title"},[(0,s.Lk)("b",null,"BCC Recipients:")],-1),U=["onClick"],W={key:2},H=(0,s.Lk)("p",{class:"title"},[(0,s.Lk)("b",null,"Attachments:")],-1),Q=["href","download"],K=(0,s.Lk)("b",null,"Body:",-1),J=(0,s.Lk)("div",{class:"spacer"}," ",-1),Y=["innerHTML"],Z=["disabled"],G={key:2},ee=(0,s.Lk)("b",null,"Summarized content:",-1),te={class:"summarizedContent email-content"},ne={key:2,class:"popup"},ae={class:"popup-content"},se={key:0},ie={key:1},oe=["src"],le=(0,s.Lk)("b",null,"Email:",-1),re=(0,s.Lk)("b",null,"Designation:",-1),ce={key:2},de=(0,s.Lk)("p",null,"No data available.",-1),ue=[de];function me(e,t,n,a,m,h){return(0,s.uX)(),(0,s.CE)("div",o,[m.isLoaded?((0,s.uX)(),(0,s.CE)("div",r,[(0,s.Lk)("div",{class:(0,i.C4)(["content-header",{blurred:""!==m.createMode}])},[(0,s.Lk)("div",c,[null!==m.accountData?((0,s.uX)(),(0,s.CE)("img",{key:0,src:m.accountData?.photo,class:"avatar"},null,8,d)):(0,s.Q3)("",!0),(0,s.Lk)("p",null,(0,i.v_)(m.account.name)+", "+(0,i.v_)(m.accountData?.designation),1),(0,s.Lk)("p",null,"Total email logged: "+(0,i.v_)(m.totalEmails),1),(0,s.Lk)("div",u,[(0,s.Lk)("button",{class:"myBtn action-buttons",title:"Book Appointment",onClick:t[0]||(t[0]=()=>m.createMode="appointment")},p),(0,s.Lk)("button",{class:"myBtn action-buttons",title:"Send Mail",onClick:t[1]||(t[1]=()=>m.createMode="email")},f)])])],2),(0,s.Lk)("div",g,["appointment"===m.createMode?((0,s.uX)(),(0,s.CE)("div",v,[(0,s.Lk)("div",y,[k,(0,s.Lk)("button",{class:"close-button",onClick:t[2]||(t[2]=(...e)=>h.handleCloseModal&&h.handleCloseModal(...e))},"X")]),(0,s.Lk)("div",null,[b,(0,s.Lk)("input",{type:"text",placeholder:"Appointment title",onInput:t[3]||(t[3]=e=>h.updateAppointmentTitle(e.target.value)),value:m.appointmentTitle},null,40,E)]),(0,s.Lk)("div",null,[M,(0,s.Lk)("input",{type:"date",placeholder:"Start time",onInput:t[4]||(t[4]=e=>h.updateEventDay(e.target.value)),value:m.eventDay},null,40,L)]),(0,s.Lk)("div",null,[C,(0,s.Lk)("input",{type:"time",name:"Start time",id:"startTime",placeholder:"Start Time",onInput:t[5]||(t[5]=e=>h.updateEventStartTime(e.target.value)),value:m.eventStartTime},null,40,T)]),(0,s.Lk)("div",null,[w,(0,s.Lk)("input",{type:"time",name:"End time",placeholder:"End Time",onInput:t[6]||(t[6]=e=>h.updateEventEndTime(e.target.value)),value:m.eventEndTime},null,40,R)]),(0,s.Lk)("button",{class:"myBtn",onClick:t[7]||(t[7]=(...e)=>h.assignEvent&&h.assignEvent(...e))},"Assign Event")])):(0,s.Q3)("",!0),"email"===m.createMode?((0,s.uX)(),(0,s.CE)("div",A,[(0,s.Lk)("div",I,[S,(0,s.Lk)("button",{class:"close-button",onClick:t[8]||(t[8]=(...e)=>h.handleCloseModal&&h.handleCloseModal(...e))},"X")]),(0,s.Lk)("div",null,[P,(0,s.Lk)("input",{type:"text",name:"Message",placeholder:"Message Title",onInput:t[9]||(t[9]=e=>h.updateMessageTitle(e.target.value)),value:m.messageTitle},null,40,D)]),(0,s.Lk)("div",null,[O,(0,s.Lk)("textarea",{name:"Message",placeholder:"Message",onInput:t[10]||(t[10]=e=>h.updateMessage(e.target.value)),value:m.message},null,40,j)]),(0,s.Lk)("button",{class:"myBtn",onClick:t[11]||(t[11]=(...e)=>h.sendEmail&&h.sendEmail(...e))},"send")])):(0,s.Q3)("",!0),(0,s.Lk)("div",{class:(0,i.C4)(["email-content",{blurred:""!==m.createMode}])},[x,(0,s.Lk)("div",null,[N,(0,s.eW)(" "+(0,i.v_)(h.getMessageClassDescription(m.itemClass)||m.itemClass),1)]),(0,s.Lk)("div",null,[z,(0,s.eW)(" "+(0,i.v_)(m.subject),1)]),(0,s.Lk)("div",null,[_,(0,s.eW)(" "+(0,i.v_)(m.senderEmail),1)]),(0,s.Lk)("div",null,[B,(0,s.eW)(" "+(0,i.v_)(m.senderName),1)]),m.ccRecipients.length>0?((0,s.uX)(),(0,s.CE)("div",X,[q,((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(m.ccRecipients,((e,t)=>((0,s.uX)(),(0,s.CE)("span",{key:t,onClick:t=>h.fetchPersonalData(e.emailAddress),class:"clickable"},(0,i.v_)(e.emailAddress),9,$)))),128))])):(0,s.Q3)("",!0),m.bccRecipients.length>0?((0,s.uX)(),(0,s.CE)("div",F,[V,((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(m.bccRecipients,((e,t)=>((0,s.uX)(),(0,s.CE)("span",{key:t,onClick:t=>h.fetchPersonalData(e.emailAddress),class:"clickable"},(0,i.v_)(e.emailAddress),9,U)))),128))])):(0,s.Q3)("",!0),m.attachments.length>0?((0,s.uX)(),(0,s.CE)("div",W,[H,((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(m.attachments,((e,t)=>((0,s.uX)(),(0,s.CE)("div",{key:t},[(0,s.Lk)("a",{href:e.url,download:e.name},(0,i.v_)(e.name),9,Q)])))),128))])):(0,s.Q3)("",!0),(0,s.Lk)("div",null,[K,J,(0,s.Lk)("div",{innerHTML:m.body,class:"email-body"},null,8,Y)])],2),(0,s.Lk)("button",{class:"myBtn",onClick:t[12]||(t[12]=(...e)=>h.summarizeContent&&h.summarizeContent(...e)),disabled:m.fetchingOpenAi},(0,i.v_)(m.fetchingOpenAi?"summarizing ...":"Summarize using AI "),9,Z),m.summarizedContent?((0,s.uX)(),(0,s.CE)("div",G,[ee,(0,s.Lk)("div",te,(0,i.v_)(m.summarizedContent),1)])):(0,s.Q3)("",!0),(0,s.Lk)("div",null,[(0,s.Lk)("button",{class:"myBtn",onClick:t[13]||(t[13]=(...e)=>h.handleLogEmail&&h.handleLogEmail(...e))},"Log mail")])])])):((0,s.uX)(),(0,s.CE)("div",l)),m.popupVisible?((0,s.uX)(),(0,s.CE)("div",ne,[(0,s.Lk)("div",ae,[(0,s.Lk)("span",{class:"close",onClick:t[14]||(t[14]=(...e)=>h.hidePopup&&h.hidePopup(...e))},"×"),m.personalData?((0,s.uX)(),(0,s.CE)("h2",se,(0,i.v_)(m.personalData.name),1)):(0,s.Q3)("",!0),m.personalData?((0,s.uX)(),(0,s.CE)("div",ie,[(0,s.Lk)("img",{src:m.personalData.photo,alt:"Profile Photo",class:"profile-image"},null,8,oe),(0,s.Lk)("p",null,[le,(0,s.eW)(" "+(0,i.v_)(m.personalData.email),1)]),(0,s.Lk)("p",null,[re,(0,s.eW)(" "+(0,i.v_)(m.personalData.designation),1)])])):((0,s.uX)(),(0,s.CE)("div",ce,ue))])])):(0,s.Q3)("",!0),""!==m.createMode?((0,s.uX)(),(0,s.CE)("div",{key:3,class:"backdrop",onClick:t[15]||(t[15]=(...e)=>h.handleCloseModal&&h.handleCloseModal(...e))})):(0,s.Q3)("",!0)])}n(4114),n(6573),n(8100),n(7936),n(7467),n(4732),n(9577),n(4979),n(4603),n(7566),n(8721);var pe=n(884),he=n(4115),fe=n(3284);const ge={"IPM.Activity":"Journal entries","IPM.Appointment":"Appointments","IPM.Contact":"Contacts","IPM.DistList":"Distribution lists","IPM.Document":"Documents","IPM.OLE.Class":"Exception item of a recurrence series",IPM:"Items for which the specified form cannot be found","IPM.Note":"Email messages","IPM.Note.IMC.Notification":"Reports from the Internet Mail Connect (the Exchange Server gateway to the Internet)","IPM.Note.Rules.OofTemplate.Microsoft":"Out-of-office templates","IPM.Post":"Posting notes in a folder","IPM.StickyNote":"Creating notes","IPM.Recall.Report":"Message recall reports","IPM.Outlook.Recall":"Recalling sent messages from recipient Inboxes","IPM.Remote":"Remote Mail message headers","IPM.Note.Rules.ReplyTemplate.Microsoft":"Editing rule reply templates","IPM.Report":"Reporting item status","IPM.Resend":"Resending a failed message","IPM.Schedule.Meeting.Canceled":"Meeting cancellations","IPM.Schedule.Meeting.Request":"Meeting requests","IPM.Schedule.Meeting.Resp.Neg":"Responses to decline meeting requests","IPM.Schedule.Meeting.Resp.Pos":"Responses to accept meeting requests","IPM.Schedule.Meeting.Resp.Tent":"Responses to tentatively accept meeting requests","IPM.Note.Secure":"Encrypted notes to other people","IPM.Note.Secure.Sign":"Digitally signed notes to other people","IPM.Task":"Tasks","IPM.TaskRequest.Accept":"Responses to accept task requests","IPM.TaskRequest.Decline":"Responses to decline task requests","IPM.TaskRequest":"Task requests","IPM.TaskRequest.Update":"Updates to requested tasks"};var ve={name:"App",data(){return{isLoaded:!1,subject:"",senderEmail:"",senderName:"",body:"",ccRecipients:[],bccRecipients:[],attachments:[],error:null,fetching:!1,emailItem:null,popupVisible:!1,personalData:null,accessToken:null,msalInstance:null,isMsalInitialized:!1,account:null,fetchingOpenAi:!1,summarizedContent:"",accountData:null,eventDay:null,eventStartTime:null,eventEndTime:null,isEventCreateMode:!1,message:"",messageTitle:"",appointmentTitle:"",createMode:"",totalEmails:null,outlookItemId:"",typeOfEvent:"",from:[],to:[],itemClass:[],itemId:"",allEmails:[]}},created(){this.initializeMsal(),this.fetchEmailData(),this.fetchTotalEmails()},methods:{getMessageClassDescription(e){return ge[e]||!1},async initializeMsal(){try{const e={auth:{clientId:"6821c268-c82f-46be-a889-dc170861f0d8",authority:"https://login.microsoftonline.com/common",redirectUri:"https://inpart-addin.vercel.app/"},system:{allowNativeBroker:!0}};console.log("asd"),console.log("asd"),console.log("asd"),console.log("asd");const t=new pe.v(e);await t.initialize(),this.isMsalInitialized=!0,this.msalInstance=t,this.msalInstance.handleRedirectPromise();const n=this;await this.msalInstance.loginPopup({scopes:["User.ReadWrite"]}).then((function(e){n.accessToken=e.accessToken,n.account=e.account,n.fetchPersonalAvatar(n.account.username),n.isLoaded=!0})).catch((function(e){console.log(e)}))}catch(e){console.error("MSAL initialization error:",e)}},async summarizeContent(){this.summarizedContent=await this.getSelectedText()},async getSelectedText(){return this.fetchingOpenAi=!0,new window.Office.Promise(function(e,t){try{window.Office.context.mailbox.item.body.getAsync(window.Office.CoercionType.Text,async function(t){const n=new fe.Configuration({apiKey:{NODE_ENV:"production",BASE_URL:"/"}.VUE_APP_OPENAI_KEY}),a=new fe.OpenAIApi(n),s=await a.createChatCompletion({model:"gpt-3.5-turbo",messages:[{role:"system",content:"You are a helpful assistant that can help users to better manage emails. The following prompt contains the whole mail thread. "},{role:"user",content:"Summarize the following mail thread and extract the key points: "+t.value}]});e(s.data.choices[0].message.content),this.fetchingOpenAi=!1}.bind(this))}catch(n){t(n)}}.bind(this))},async signIn(){if(!this.isMsalInitialized)return void console.error("MSAL instance is not initialized");const e=this;try{var t={scopes:["AuditLog.Read.All","Calendars.Read","Calendars.Read.Shared","Calendars.ReadBasic","Calendars.ReadWrite","Calendars.ReadWrite.Shared","Directory.Read.All","email","Mail.Read","Mail.Read.Shared","Mail.ReadBasic","Mail.ReadBasic.Shared","Mail.ReadWrite","Mail.ReadWrite.Shared","Mail.Send","Mail.Send.Shared","MailboxSettings.Read","MailboxSettings.ReadWrite","openid","profile","SecurityEvents.Read.All","SecurityEvents.ReadWrite.All","User.Read","User.ReadWrite"],account:e.account};this.msalInstance.acquireTokenSilent(t).then((e=>{this.accessToken=e.accessToken})).catch((async e=>{if(console.log(e),e instanceof he.CB)return this.msalInstance.acquireTokenSilent(t);e.message.includes("interaction_in_progress")?console.error("An authentication interaction is already in progress."):console.error("Sign-in error:",e)}))}catch(n){console.error("Sign-in error:",n)}},handleCloseModal(){this.createMode=""},async sendEmail(){try{const e=this.accessToken,t="https://graph.microsoft.com/v1.0/me/sendMail",n={message:{subject:this.messageTitle,body:{contentType:"HTML",content:this.message},toRecipients:[{emailAddress:{address:this.senderEmail}}]}},a=await fetch(t,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`},body:JSON.stringify(n)});a.ok?(this.createMode="",this.$toast.success("Email sent succesfully.")):(console.error("Failed to send email:",a.statusText),this.$toast.error("Failed to send email:",a.statusText))}catch(e){console.error("Error sending email:",e),this.$toast.error("Error sending email:",e)}},async assignEvent(){const e=this;try{const t="https://graph.microsoft.com/v1.0/me/events",n=e=>e<10?"0"+e:e,a=(e,t)=>{const[a,s]=t.split(":"),i=a.padStart(2,"0"),o=s.padStart(2,"0");return`${e.getFullYear()}-${n(e.getMonth()+1)}-${n(e.getDate())}T${i}:${o}:00`},s=a(new Date(this.eventDay),this.eventStartTime),i=a(new Date(this.eventDay),this.eventEndTime),o=[{emailAddress:{address:e.senderEmail},type:"required"},...e.bccRecipients.map((e=>({emailAddress:{address:e.emailAddress},type:"bcc"}))),...e.ccRecipients.map((e=>({emailAddress:{address:e.emailAddress},type:"cc"})))],l=Intl.DateTimeFormat().resolvedOptions().timeZone;console.log(o,"allAttendees"),console.log(l);const r={subject:this.appointmentTitle,start:{dateTime:s,timeZone:l},end:{dateTime:i,timeZone:l},location:{displayName:"Conference Room"},body:{content:"Discuss project progress.",contentType:"text"},attendees:o.map((e=>({emailAddress:{address:e.emailAddress.address},type:"Required"})))},c=await fetch(t,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.accessToken}`},body:JSON.stringify(r)});c.ok?(this.createMode="",this.$toast.success("Appointment created succesfully."),console.log("Event added to Outlook calendar.")):(console.error("Failed to add event:",c.statusText),this.$toast.error("Failed to add event:",c.statusText))}catch(t){console.error("Error assigning event:",t),this.$toast.error("Error assigning event:",t)}},async fetchEmailData(){this.error=null,this.fetching=!0;try{const e=window.Office.context.mailbox.item;console.log(e),this.outlookItemId=e.itemId,this.emailItem=e,this.subject=e.subject,this.senderEmail="appointment"==e.itemType?e.organizer.emailAddress:e.from.emailAddress,this.senderName="appointment"==e.itemType?e.organizer.displayName:e.from.displayName,this.ccRecipients=e.cc||[],this.bccRecipients=e.bcc||[],this.from=e.from||[],this.to=e.to||[],this.itemClass="appointment"==e.itemType?e.itemType:e.itemClass,this.itemId=e.itemId,await this.fetchAttachments(e.attachments),await this.fetchEmailBody()}catch(e){console.error("Error fetching email data:",e),this.error="Error fetching email data. Please try again."}finally{this.fetching=!1}},updateEventDay(e){this.eventDay=e},updateAppointmentTitle(e){this.appointmentTitle=e},updateEventStartTime(e){this.eventStartTime=e},updateEventEndTime(e){this.eventEndTime=e},updateMessage(e){this.message=e},updateMessageTitle(e){this.messageTitle=e},async fetchAttachments(e){await Promise.all(e.map((async e=>{if("file"===e.attachmentType)this.attachments.push({name:e.name,url:e.content});else try{const t=await this.createBlobUrl(e);this.attachments.push({name:e.name,url:t})}catch(t){console.error("Error creating blob URL:",t),this.error="Error fetching attachments. Please try again."}})))},async createBlobUrl(e){const t=atob(e.content),n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);const a=new Blob([n],{type:e.contentType});return URL.createObjectURL(a)},async fetchEmailBody(){return new Promise(((e,t)=>{window.Office.context.mailbox.item.body.getAsync(window.Office.CoercionType.Html,(n=>{n.status===window.Office.AsyncResultStatus.Succeeded?(this.body=n.value,e()):t(new Error("Error fetching body: "+n.error.message))}))}))},formatRecipients(e){return e.map((e=>e.displayName||e.emailAddress||"Unknown")).join(", ")},handleLogEmail(){const e={subject:this.subject,senderEmail:this.senderEmail,senderName:this.senderName,ccRecipients:this.ccRecipients.map((e=>e.emailAddress)),bccRecipients:this.bccRecipients.map((e=>e.emailAddress)),body:this.body,itemId:this.itemId,itemClass:this.itemClass};console.log(e,"emailData"),fetch("http://localhost:3009/emails",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((e=>{if(!e.ok)throw new Error("Failed to log email data.");console.log("Email data successfully logged."),this.$toast.success("Email data successfully logged."),this.fetchTotalEmails(),this.fetchAllEmails()})).catch((e=>{console.error("Error logging email data:",e),e.message.includes("Failed to log email data")?this.$toast.error("Email with this itemId already exists."):this.$toast.error("An error occurred. Please try again.")}))},async fetchPersonalData(e){try{const t=await fetch(`http://localhost:3009/personal-data/${e}`);if(!t.ok)throw new Error("Failed to fetch personal data.");const n=await t.json();this.personalData=n,this.popupVisible=!0}catch(t){console.error("Error fetching personal data:",t),this.personalData=null,this.popupVisible=!1}},async fetchPersonalAvatar(e){try{const t=await fetch(`http://localhost:3009/personal-data/${e}`);if(!t.ok)throw new Error("Failed to fetch personal data.");const n=await t.json();this.accountData=n}catch(t){console.error("Error fetching personal data:",t),this.accountData=null}},async fetchTotalEmails(){try{const e=await fetch("http://localhost:3009/emails/count");if(!e.ok)throw new Error("Failed to fetch total number of emails.");const t=await e.json();this.totalEmails=t.totalRecords}catch(e){console.error("Error fetching total number of emails:",e)}},async fetchAllEmails(){try{const e=await fetch("http://localhost:3009/emails");if(!e.ok)throw new Error("Failed to fetch total number of emails.");const t=await e.json();this.allEmails=t}catch(e){console.error("Error fetching total number of emails:",e)}},hidePopup(){this.popupVisible=!1},resetState(){this.subject="",this.senderEmail="",this.senderName="",this.body="",this.ccRecipients=[],this.bccRecipients=[],this.attachments=[],this.error=null,this.fetching=!1,this.emailItem=null,this.fetchingOpenAi=!1,this.summarizedContent=""}}},ye=n(6262);const ke=(0,ye.A)(ve,[["render",me]]);var be=ke,Ee=n(3464),Me=n.n(Ee);window.Office.onReady((()=>{(0,a.Ef)(be).use(Me()).mount("#app")}))}},t={};function n(a){var s=t[a];if(void 0!==s)return s.exports;var i=t[a]={exports:{}};return e[a].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,a,s,i){if(!a){var o=1/0;for(d=0;d<e.length;d++){a=e[d][0],s=e[d][1],i=e[d][2];for(var l=!0,r=0;r<a.length;r++)(!1&i||o>=i)&&Object.keys(n.O).every((function(e){return n.O[e](a[r])}))?a.splice(r--,1):(l=!1,i<o&&(o=i));if(l){e.splice(d--,1);var c=s();void 0!==c&&(t=c)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[a,s,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,a){return n.f[a](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+".e3b93d3e.js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="my-add-in:";n.l=function(a,s,i,o){if(e[a])e[a].push(s);else{var l,r;if(void 0!==i)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==a||u.getAttribute("data-webpack")==t+i){l=u;break}}l||(r=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",t+i),l.src=a),e[a]=[s];var m=function(t,n){l.onerror=l.onload=null,clearTimeout(p);var s=e[a];if(delete e[a],l.parentNode&&l.parentNode.removeChild(l),s&&s.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=m.bind(null,l.onerror),l.onload=m.bind(null,l.onload),r&&document.head.appendChild(l)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e={524:0};n.f.j=function(t,a){var s=n.o(e,t)?e[t]:void 0;if(0!==s)if(s)a.push(s[2]);else{var i=new Promise((function(n,a){s=e[t]=[n,a]}));a.push(s[2]=i);var o=n.p+n.u(t),l=new Error,r=function(a){if(n.o(e,t)&&(s=e[t],0!==s&&(e[t]=void 0),s)){var i=a&&("load"===a.type?"missing":a.type),o=a&&a.target&&a.target.src;l.message="Loading chunk "+t+" failed.\n("+i+": "+o+")",l.name="ChunkLoadError",l.type=i,l.request=o,s[1](l)}};n.l(o,r,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,a){var s,i,o=a[0],l=a[1],r=a[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(s in l)n.o(l,s)&&(n.m[s]=l[s]);if(r)var d=r(n)}for(t&&t(a);c<o.length;c++)i=o[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(d)},a=self["webpackChunkmy_add_in"]=self["webpackChunkmy_add_in"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[504],(function(){return n(8702)}));a=n.O(a)})();
//# sourceMappingURL=app.2a9b1f13.js.map