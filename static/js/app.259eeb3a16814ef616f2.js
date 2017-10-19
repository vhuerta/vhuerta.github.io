webpackJsonp([0],[,,,function(e,s,t){"use strict";var a=t(1),o=t(23),n=t.n(o),i=t(11),r=t(10),l={es:i.a,en:r.a};a.a.use(n.a),a.a.config.lang="es",s.a=new n.a({locale:"es",fallbackLang:"es",messages:l})},function(e,s,t){t(15);var a=t(0)(t(5),t(33),null,null);e.exports=a.exports},function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=t(25),o=t.n(a),n=t(30),i=t.n(n),r=t(28),l=t.n(r),c=t(27),d=t.n(c),m=t(29),v=t.n(m),p=t(24),u=t.n(p),_=t(26),f=t.n(_);s.default={name:"App",components:{HeaderInfo:o.a,Slider:i.a,Prompt:l.a,PersonalInfo:d.a,SkillsInfo:v.a,EducationInfo:u.a,JobsInfo:f.a},mounted:function(){var e=this;setTimeout(function(){return e.whoamiStart=!0},1e3)},data:function(){return{whoamiStart:!1,personalInfoClosed:!0,skillsShow:!1,skillsStart:!1,skillsInfoClosed:!0,educationShow:!1,educationStart:!1,educationInfoClosed:!0,jobsShow:!1,jobsStart:!1,jobsInfoClosed:!0}},methods:{next:function(e){var s=this,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";this[e]=!1,t&&(this[t+"Show"]=!0,setTimeout(function(){s[t+"Start"]=!0},500))}}}},function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={beforeMount:function(){this.setLang()},data:function(){return{lang:""}},computed:{isSelectedEs:function(){return"es"===this.lang},isSelectedEn:function(){return"en"===this.lang}},methods:{setLang:function(){var e=this;setTimeout(function(){var s=navigator.language||navigator.userLanguage;s=s.substr(0,2);var t=window.location.hash.replace("#","")||s;t=["es","en"].indexOf(t)>-1&&t||"es",e.$i18n.locale=t,e.lang=t},100)}}}},function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=t(18);t.n(a);s.default={props:{name:{type:String,required:!0},name_icon:{type:String,default:"fa fa-code"},path:{type:String,required:!0},path_icon:{type:String,default:"fa fa-folder-o"},command:{type:String,required:!0},start:{type:Boolean,default:!0}},mounted:function(){this.start&&this.prompt()},watch:{start:function(e,s){!0===e&&!1===s&&this.prompt()}},methods:{prompt:function(){var e=this,s=e.$refs.command;t.i(a.init)(s,{strings:[e.command],typeSpeed:200,startDelay:500,cursorChar:"|",onFinished:function(){s.parentNode.querySelector(".ityped-cursor").remove(),e.$emit("end")}})}}}},function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"SkillsInfo",props:{start:{type:Boolean,default:!1}},watch:{start:function(){setTimeout(this.animate,200)}},methods:{animate:function(){this.$refs.js.style.width="100%",this.$refs.java.style.width="95%",this.$refs.php.style.width="95%",this.$refs.python.style.width="50%",this.$refs.ruby.style.width="50%",this.$refs.sql.style.width="90%",this.$refs.nosql.style.width="95%",this.$refs.devops.style.width="70%"}}}},function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=t(19),o=t.n(a);s.default={props:{closed:{type:Boolean,default:!0}},watch:{closed:function(e,s){e?o()(this.$refs.container).slideUp("fast"):o()(this.$refs.container).slideDown("fast")}}}},function(e,s,t){"use strict";s.a={lang:"Language",github_view:"Github Repo",prompt_name:"vhuerta",prompt_path:"~/cv",spanish:"Español",english:"English",whoami:"whoami",skills_prompt:"skills",education_prompt:"education",jobs_prompt:"employment",may:"May",july:"July",august:"August",september:"September",october:"October",november:"November",december:"December",late:"Late",unique_project:"Unique project",personal_info:{name:"Fullname: Victor R. Huerta Hernández",nationality:"Nationality: Mexican",residence:"Living in: Mexico City",age:"Age: 27 years old",birthday:"Birthday: June 25 of 1989",mobile:"Mobile",email:"Email"},skills:{js:"JS (Expert)",java:"Java (Expert)",php:"PHP (Expert)",python:"Python (Medium)",ruby:"Ruby (Medium)",nosql:"NoSQL (Expert)",sql:"SQL (Expert)",devops:"DevOps (Advanced)",detail:"Detail"},education:{scrum_date:"11/25/2014",node_date:"11/07/2015",java_date:"02/22/2012",unam_description:"UNAM, Bachelor of Applied Mathematics and Computation",unam_status:"Unfinished"},jobs:{clarovideo:"Maintenance and develop of new features of the front end main platform, Most used techs: Javascript and ReactJS",compropago:"Design, integration and development of high demand and low response time microservices, participe on choosement of architecture and technology. Most used techs: Python, NodeJS, Ruby, AWS services like Lambda functions, Kinesis Streams, RDBMS, Redis, Mongo, RabbitMQ",blackcore:"Lead and guide a developers team, design and development of diverse projects, such as a fixed asset control system, property valuation system, mobile apps and banks integrations with those systems. Deployment of cloud infraestructure and server configurations. Most used techs: NodeJS, PHP, MySQL, MongoDB, Rackspace Cloud",odintec:"Design and development of custom systems for different clients. Most used techs: Java, JSP, MySQL, NodeJS, ReactJS",mair:"Design and development of Ecommerce custom platforms, for different clients. Most used techs: PHP, MySQL",hds:"Lead and guide a developers team, design and development innovation projects such as a system to translate natural language to medical terms,  Most used techs: JAVA, JSF, Spring, MySQL, FireBird",unam:"Website for the III National Congress of Technology in 2011. Most used techs: PHP, MySQL",economy:"Migration of Minery Information System for Mobiles. Most used techs: Java, Spring, MySQL",diid:"Development of new modules for the current enterprise platform (pawn stores). Most used techs: PHP, MySQL"}}},function(e,s,t){"use strict";s.a={lang:"Lenguaje",github_view:"Repo Github",prompt_name:"vhuerta",prompt_path:"~/cv",spanish:"Español",english:"English",whoami:"whoami",skills_prompt:"skills",education_prompt:"education",jobs_prompt:"employment",may:"Mayo",july:"Julio",august:"Agosto",september:"Septiembre",october:"Octubre",november:"Noviembre",december:"Diciembre",late:"Finales",unique_project:"Proyecto unico",personal_info:{name:"Nombre: Victor R. Huerta Hernández",nationality:"Nacionalidad: Mexicano",residence:"Resido en: Ciudad de México",age:"Edad: 27 años",birthday:"Fecha nacimiento: 25 de Junio de 1989",mobile:"Movil",email:"Correo"},skills:{js:"JS (Experto)",java:"Java (Experto)",php:"PHP (Experto)",python:"Python (Intermedio)",ruby:"Ruby (Intermedio)",nosql:"NoSQL (Experto)",sql:"SQL (Experto)",devops:"DevOps (Avanzado)",detail:"Detalle"},education:{scrum_date:"25/11/2014",node_date:"07/11/2015",java_date:"22/02/2012",unam_description:"UNAM - Lic. Matemáticas Aplicadas y Computación",unam_status:"Trunca"},jobs:{clarovideo:"Mantenimiento y desarrollo de nuevos modulos del frontend de la plataforma principal, Tecnologias mas utilizadas: Javascript y ReactJS",compropago:"Diseño, integracion y desarrollo de microservicios de alta demanda y bajo tiempo de respuesta, Participando en la elección de arquitectura y tecnologias a usar. Tecnologias mas utilizadas: Python, NodeJS, Ruby, AWS services como Lambda, Kinesis, RDBMS, Redis, Mongo, RabbitMQ",blackcore:"Dirigir y guiar al equipo de desarrollo, diseño y desarrollo de diversos proyectos, tales como un sistema de control de activos fijos, sistema de valuación de inmuebles, aplicaciones móviles e integración de bancos con esos sistemas. Implementación de infraestructura Cloud y configuracion de servidores. Técnologias más utilizadas: NodeJS, PHP, MySQL, MongoDB, Rackspace Cloud",odintec:"Diseño y desarrollo de sistemas a la medida para varios clientes. Tecnologias mas usadas: Java, JSP, MySQL",mair:"Diseño y desarrollo de plataformas para ecommerce personalizadas. Tecnologias mas usadas: PHP, MySQL",hds:"Dirigir y guiar al equipo de desarrollo, diseñar y desarrollar proyectos de inovación tales como un sistema para traducir terminos comunes a terminos medicos. Tecnologias mas usadas:  JAVA, JSF, Spring, MySQL, FireBird",unam:"Desarrollar diseñar e implementar portal del III Congreso Nacional de Tecnología 2011. Tecnologias mas usadas: PHP, MySQL",economy:"Migrar Sistema de Información Minera para Móviles. Tecnologias mas usadas: Java, Spring, MySQL",diid:"Analisis y desarrollo de módulos del sistema corporativo (Casas de empeño) a si como de módulos de OSCommerce. Tecnologias mas usadas: PHP, MySQL"}}},function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=t(1),o=t(4),n=t.n(o),i=t(3);new a.a({el:"#app",template:"<App/>",components:{App:n.a},i18n:i.a})},function(e,s){},function(e,s){},function(e,s){},function(e,s){},function(e,s){},,,,,,,function(e,s,t){var a=t(0)(null,t(36),null,null);e.exports=a.exports},function(e,s,t){t(16);var a=t(0)(t(6),t(35),null,null);e.exports=a.exports},function(e,s,t){var a=t(0)(null,t(34),null,null);e.exports=a.exports},function(e,s,t){var a=t(0)(null,t(37),null,null);e.exports=a.exports},function(e,s,t){t(13);var a=t(0)(t(7),t(31),null,null);e.exports=a.exports},function(e,s,t){t(17);var a=t(0)(t(8),t(38),null,null);e.exports=a.exports},function(e,s,t){t(14);var a=t(0)(t(9),t(32),null,null);e.exports=a.exports},function(e,s){e.exports={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"row sentence whoami"},[t("div",{staticClass:"col-xs-12"},[t("span",{staticClass:"prompt name pull-left"},[t("i",{class:e.name_icon}),e._v(" "+e._s(e.name))]),e._v(" "),t("div",{staticClass:"prompt triangle name pull-left"}),e._v(" "),t("span",{staticClass:"prompt node pull-left"},[t("i",{class:e.path_icon}),e._v(" "+e._s(e.path))]),e._v(" "),t("div",{staticClass:"prompt triangle node pull-left"}),e._v(" "),t("span",{staticClass:"prompt end pull-left"},[e._v("$")]),e._v(" "),t("div",{staticClass:"prompt triangle end pull-left"}),e._v(" "),t("span",{ref:"command",staticClass:"prompt text pull-left"}),e._v(" "),t("div",{staticClass:"clearfix"})])])},staticRenderFns:[]}},function(e,s){e.exports={render:function(){var e=this,s=e.$createElement;return(e._self._c||s)("div",{ref:"container",class:["slider row sentence"]},[e._t("default")],2)},staticRenderFns:[]}},function(e,s){e.exports={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"container"},[t("header-info"),e._v(" "),t("prompt",{attrs:{start:e.whoamiStart,name:e.$t("prompt_name"),path:e.$t("prompt_path"),command:e.$t("whoami")},on:{end:function(s){e.next("personalInfoClosed","skills")}}}),e._v(" "),t("slider",{attrs:{closed:e.personalInfoClosed}},[t("personal-info")],1),e._v(" "),t("prompt",{directives:[{name:"show",rawName:"v-show",value:e.skillsShow,expression:"skillsShow"}],attrs:{start:e.skillsStart,name:e.$t("prompt_name"),path:e.$t("prompt_path"),command:e.$t("skills_prompt")},on:{end:function(s){e.next("skillsInfoClosed","education")}}}),e._v(" "),t("slider",{attrs:{closed:e.skillsInfoClosed}},[t("skills-info",{attrs:{start:e.skillsInfoClosed}})],1),e._v(" "),t("prompt",{directives:[{name:"show",rawName:"v-show",value:e.educationShow,expression:"educationShow"}],attrs:{start:e.educationStart,name:e.$t("prompt_name"),path:e.$t("prompt_path"),command:e.$t("education_prompt")},on:{end:function(s){e.next("educationInfoClosed","jobs")}}}),e._v(" "),t("slider",{attrs:{closed:e.educationInfoClosed}},[t("education-info",{attrs:{start:e.educationInfoClosed}})],1),e._v(" "),t("prompt",{directives:[{name:"show",rawName:"v-show",value:e.jobsShow,expression:"jobsShow"}],attrs:{start:e.jobsStart,name:e.$t("prompt_name"),path:e.$t("prompt_path"),command:e.$t("jobs_prompt")},on:{end:function(s){e.next("jobsInfoClosed")}}}),e._v(" "),t("slider",{attrs:{closed:e.jobsInfoClosed}},[t("jobs-info",{attrs:{start:e.educationInfoClosed}})],1)],1)},staticRenderFns:[]}},function(e,s){e.exports={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"col-xs-12"},[t("div",{staticClass:"col-xs-12",staticStyle:{"border-bottom":"dotted 1px #fff"}},[t("div",{staticClass:"col-xs-12 comment"},[t("p",[t("i",{staticClass:"fa fa-bookmark",staticStyle:{color:"#34cc34"}}),e._v(" Claro video - ("+e._s(e.$t("july"))+" 2017 - "+e._s(e.$t("actual"))+")\n        "),t("br"),e._v("    Senior Developer.\n        "),t("br"),e._v(" "),t("br"),e._v("    "+e._s(e.$t("jobs.clarovideo"))+".\n        "),t("br")])])]),e._v(" "),t("div",{staticClass:"col-xs-12",staticStyle:{"margin-top":"10px","border-bottom":"dotted 1px #fff"}},[t("div",{staticClass:"col-xs-12 comment"},[t("p",[t("i",{staticClass:"fa fa-bookmark",staticStyle:{color:"#34cc34"}}),e._v(" Odintec - ("+e._s(e.$t("september"))+" 2015 - Actual)\n        "),t("br"),e._v("    Full Stack Developer. (Remote side projects)\n        "),t("br"),e._v(" "),t("br"),e._v("    "+e._s(e.$t("jobs.odintec"))+".\n        "),t("br")])])]),e._v(" "),t("div",{staticClass:"col-xs-12",staticStyle:{"border-bottom":"dotted 1px #fff"}},[t("div",{staticClass:"col-xs-12 comment"},[t("p",[t("i",{staticClass:"fa fa-bookmark"}),e._v(" Compropago - ("+e._s(e.$t("september"))+" 2016 - "+e._s(e.$t("july"))+" 2017)\n        "),t("br"),e._v("    Microservices Developer.\n        "),t("br"),e._v(" "),t("br"),e._v("    "+e._s(e.$t("jobs.compropago"))+".\n        "),t("br")])])]),e._v(" "),t("div",{staticClass:"col-xs-12",staticStyle:{"border-bottom":"dotted 1px #fff"}},[t("div",{staticClass:"col-xs-12 comment"},[t("p",[t("i",{staticClass:"fa fa-bookmark"}),e._v(" Blackcore de México S.A. C.V. - ("+e._s(e.$t("december"))+" 2012 - "+e._s(e.$t("september"))+" 2016)\n        "),t("br"),e._v("    Project Lead / Fullstack Developer.\n        "),t("br"),e._v(" "),t("br"),e._v("    "+e._s(e.$t("jobs.blackcore"))+".\n        "),t("br")])])]),e._v(" "),t("div",{staticClass:"col-xs-12",staticStyle:{"margin-top":"10px","border-bottom":"dotted 1px #fff"}},[t("div",{staticClass:"col-xs-12 comment"},[t("p",[t("i",{staticClass:"fa fa-bookmark"}),e._v(" Mair 3D - ("+e._s(e.$t("november"))+" 2011 - "+e._s(e.$t("late"))+" 2013)\n        "),t("br"),e._v("    Full Stack Developer. (Remote)\n        "),t("br"),e._v(" "),t("br"),e._v("    "+e._s(e.$t("jobs.mair"))+".\n        "),t("br")])])]),e._v(" "),t("div",{staticClass:"col-xs-12",staticStyle:{"margin-top":"10px","border-bottom":"dotted 1px #fff"}},[t("div",{staticClass:"col-xs-12 comment"},[t("p",[t("i",{staticClass:"fa fa-bookmark"}),e._v(" Health Digital Systems - ("+e._s(e.$t("october"))+" 2011 - "+e._s(e.$t("november"))+" 2012)\n\n        "),t("br"),e._v("    Project Lead / Full Stack Developer.\n        "),t("br"),e._v(" "),t("br"),e._v("    "+e._s(e.$t("jobs.hds"))+".\n        "),t("br")])])]),e._v(" "),t("div",{staticClass:"col-xs-12",staticStyle:{"margin-top":"10px","border-bottom":"dotted 1px #fff"}},[t("div",{staticClass:"col-xs-12 comment"},[t("p",[t("i",{staticClass:"fa fa-bookmark"}),e._v(" UNAM - ("+e._s(e.$t("august"))+" 2011)\n        "),t("br"),e._v("    Developer. ("+e._s(e.$t("unique_project"))+")\n        "),t("br"),e._v(" "),t("br"),e._v("    "+e._s(e.$t("jobs.unam"))+".\n        "),t("br")])])]),e._v(" "),t("div",{staticClass:"col-xs-12",staticStyle:{"margin-top":"10px","border-bottom":"dotted 1px #fff"}},[t("div",{staticClass:"col-xs-12 comment"},[t("p",[t("i",{staticClass:"fa fa-bookmark"}),e._v(" Secretaria de Economia - ("+e._s(e.$t("august"))+" 2011)\n        "),t("br"),e._v("    Developer. ("+e._s(e.$t("unique_project"))+")\n        "),t("br"),e._v(" "),t("br"),e._v("    "+e._s(e.$t("jobs.economy"))+".\n        "),t("br")])])]),e._v(" "),t("div",{staticClass:"col-xs-12",staticStyle:{"margin-top":"10px","border-bottom":"dotted 1px #fff"}},[t("div",{staticClass:"col-xs-12 comment"},[t("p",[t("i",{staticClass:"fa fa-bookmark"}),e._v(" Operadora DIID - ("+e._s(e.$t("october"))+" 2010 - "+e._s(e.$t("may"))+" 2011)\n        "),t("br"),e._v("    Developer.\n        "),t("br"),e._v(" "),t("br"),e._v("    "+e._s(e.$t("jobs.diid"))+".\n        "),t("br")])])])])},staticRenderFns:[]}},function(e,s){e.exports={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"row sentence"},[t("div",{staticClass:"col-xs-12"},[t("div",{staticClass:"col-xs-12 comment"},[t("p",{staticClass:"code-comment"},[t("span",{staticClass:"pull-right"},[t("a",{class:["btn btn-link",{disabled:e.isSelectedEs}],attrs:{href:"#es"},on:{click:e.setLang}},[e._v(e._s(e.$t("spanish")))]),e._v("/"),t("a",{class:["btn btn-link",{disabled:e.isSelectedEn}],attrs:{href:"#en"},on:{click:e.setLang}},[e._v(e._s(e.$t("english")))]),e._v("|"),t("a",{class:["btn btn-link"],attrs:{href:"https://github.com/vhuerta/resume",target:"__blank"}},[e._v(e._s(e.$t("github_view"))+" "),t("i",{staticClass:"fa fa-github"})])])])])])])},staticRenderFns:[]}},function(e,s){e.exports={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"col-sm-12"},[t("div",{staticClass:"col-sm-6"},[t("div",{staticClass:"col-xs-12"},[t("i",{staticClass:"fa fa-star"}),e._v(" Certified SCRUM Master\n      "),t("br"),e._v(" ID: 374470\n      "),t("br"),e._v(" Scrum Alliance. "+e._s(e.$t("education.scrum_date"))+"\n      "),t("br"),e._v(" "),t("br")])]),e._v(" "),t("div",{staticClass:"col-sm-6"},[t("div",{staticClass:"col-xs-12 "},[t("i",{staticClass:"fa fa-star"}),e._v(" Certified Node Developer\n      "),t("br"),e._v(" ID: 262-286-792\n      "),t("br"),e._v(" Strongloop. "+e._s(e.$t("education.node_date"))+"\n      "),t("br"),e._v(" "),t("br")])]),e._v(" "),t("div",{staticClass:"col-sm-6"},[t("div",{staticClass:"col-xs-12 "},[t("i",{staticClass:"fa fa-star"}),e._v(" Certified Java Programmer\n      "),t("br"),e._v(" ID: OC1082674\n      "),t("br"),e._v(" Oracle. "+e._s(e.$t("education.java_date"))+"\n      "),t("br"),e._v(" "),t("br")])]),e._v(" "),t("div",{staticClass:"col-sm-6"},[t("div",{staticClass:"col-xs-12 "},[t("i",{staticClass:"fa fa-star-half-o"}),e._v(" "+e._s(e.$t("education.unam_description"))+"\n      "),t("br"),e._v(" "+e._s(e.$t("education.unam_status"))+"\n      "),t("br"),e._v(" 2009 - 2012\n    ")])])])},staticRenderFns:[]}},function(e,s){e.exports={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"col-xs-12"},[t("div",{staticClass:"col-xs-12 col-sm-6 comment"},[e._v("\n    "+e._s(e.$t("personal_info.name"))+"\n  ")]),e._v(" "),t("div",{staticClass:"col-xs-12 col-sm-6 comment"},[e._v("\n    "+e._s(e.$t("personal_info.nationality"))+"\n  ")]),e._v(" "),t("div",{staticClass:"col-xs-12 col-sm-6 comment"},[e._v("\n    "+e._s(e.$t("personal_info.residence"))+"\n  ")]),e._v(" "),t("div",{staticClass:"col-xs-12 col-sm-6 comment"},[e._v("\n    "+e._s(e.$t("personal_info.mobile"))+": "),t("a",{attrs:{href:"tel:+525550681600"}},[e._v("(+52) 55 5068 1600")])]),e._v(" "),t("div",{staticClass:"col-xs-12 col-sm-6 comment"},[e._v("\n    "+e._s(e.$t("personal_info.email"))+": "),t("a",{attrs:{href:"mailto:vhuertahnz@gmail.com"}},[e._v("vhuertahnz@gmail.com")])]),e._v(" "),e._m(0)])},staticRenderFns:[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"col-xs-12 col-sm-6 comment"},[e._v("\n    Github "),t("i",{staticClass:"fa fa-github"}),e._v(": "),t("a",{attrs:{href:"http://github.com/vhuerta"}},[e._v("vhuerta")])])}]}},function(e,s){e.exports={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"col-xs-12"},[t("div",{staticClass:"col-xs-6 sentence comment"},[e._v("\n    "+e._s(e.$t("skills.js"))+":\n  ")]),e._v(" "),t("div",{staticClass:"col-xs-6 sentence comment"},[e._v("\n    "+e._s(e.$t("skills.java"))+":\n  ")]),e._v(" "),t("div",{staticClass:"col-xs-6 sentence comment"},[t("div",{staticClass:"progress"},[t("div",{ref:"js",staticClass:"progress-bar progress-bar-success",staticStyle:{width:"0%"},attrs:{role:"progressbar","aria-valuenow":"90","aria-valuemin":"0","aria-valuemax":"100"}})])]),e._v(" "),t("div",{staticClass:"col-xs-6 sentence comment"},[t("div",{staticClass:"progress"},[t("div",{ref:"java",staticClass:"progress-bar progress-bar-success",staticStyle:{width:"0%"},attrs:{role:"progressbar","aria-valuenow":"80","aria-valuemin":"0","aria-valuemax":"100"}})])]),e._v(" "),t("div",{staticClass:"col-xs-6 sentence comment"},[e._v("\n    "+e._s(e.$t("skills.php"))+":\n  ")]),e._v(" "),t("div",{staticClass:"col-xs-6 sentence comment"},[e._v("\n    "+e._s(e.$t("skills.python"))+":\n  ")]),e._v(" "),t("div",{staticClass:"col-xs-6 sentence comment"},[t("div",{staticClass:"progress"},[t("div",{ref:"php",staticClass:"progress-bar progress-bar-success",staticStyle:{width:"0%"},attrs:{role:"progressbar","aria-valuenow":"90","aria-valuemin":"0","aria-valuemax":"100"}})])]),e._v(" "),t("div",{staticClass:"col-xs-6 sentence comment"},[t("div",{staticClass:"progress"},[t("div",{ref:"python",staticClass:"progress-bar progress-bar-warn",staticStyle:{width:"0%"},attrs:{role:"progressbar","aria-valuenow":"90","aria-valuemin":"0","aria-valuemax":"100"}})])]),e._v(" "),t("div",{staticClass:"col-xs-6 sentence comment"},[e._v("\n    "+e._s(e.$t("skills.ruby"))+":\n  ")]),e._v(" "),t("div",{staticClass:"col-xs-6 sentence comment"},[e._v("\n    "+e._s(e.$t("skills.nosql"))+":\n  ")]),e._v(" "),t("div",{staticClass:"col-xs-6 sentence comment"},[t("div",{staticClass:"progress"},[t("div",{ref:"ruby",staticClass:"progress-bar progress-bar-warn",staticStyle:{width:"0%"},attrs:{role:"progressbar","aria-valuenow":"90","aria-valuemin":"0","aria-valuemax":"100"}})])]),e._v(" "),t("div",{staticClass:"col-xs-6 sentence comment"},[t("div",{staticClass:"progress"},[t("div",{ref:"nosql",staticClass:"progress-bar progress-bar-success",staticStyle:{width:"0%"},attrs:{role:"progressbar","aria-valuenow":"90","aria-valuemin":"0","aria-valuemax":"100"}})])]),e._v(" "),t("div",{staticClass:"col-xs-6 sentence comment"},[e._v("\n    "+e._s(e.$t("skills.sql"))+":\n  ")]),e._v(" "),t("div",{staticClass:"col-xs-6 sentence comment"},[e._v("\n    "+e._s(e.$t("skills.devops"))+":\n  ")]),e._v(" "),t("div",{staticClass:"col-xs-6 sentence comment"},[t("div",{staticClass:"progress"},[t("div",{ref:"sql",staticClass:"progress-bar progress-bar-success",staticStyle:{width:"0%"},attrs:{role:"progressbar","aria-valuenow":"90","aria-valuemin":"0","aria-valuemax":"100"}})])]),e._v(" "),t("div",{staticClass:"col-xs-6 sentence comment"},[t("div",{staticClass:"progress"},[t("div",{ref:"devops",staticClass:"progress-bar progress-bar-info",staticStyle:{width:"0%"},attrs:{role:"progressbar","aria-valuenow":"90","aria-valuemin":"0","aria-valuemax":"100"}})])]),e._v(" "),e._m(0)])},staticRenderFns:[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"col-xs-12"},[t("div",{staticClass:"col-xs-12 col-sm-6 sentence skills-ul"},[t("ul",[t("li",[e._v("\n            Langs: \n            "),t("br"),e._v("  JS, Java, PHP, Python, Ruby\n            "),t("br")]),e._v(" "),t("li",[e._v("\n            Backend Frameworks: \n              "),t("br"),e._v("  JS: Node, Express, Sails, Meteor\n              "),t("br"),e._v("  Java: Spring, JSF, Hibernate, JSP, EJB\n              "),t("br"),e._v("  PHP: Codeigniter\n              "),t("br")]),e._v(" "),t("li",[e._v("\n            SO's: \n            "),t("br"),e._v("  MacOs, Windows, Linux\n            "),t("br")]),e._v(" "),t("li",[e._v("\n            DevOps:\n            "),t("br"),e._v("  Rackspace, Softlayer, Heroku\n            "),t("br"),e._v("  AWS (Lambdas, Kinesis, S3 Etc)\n            "),t("br"),e._v("  Linux Servers (Centos, Ubuntu)\n          ")])])]),e._v(" "),t("div",{staticClass:"col-xs-12 col-sm-6 sentence skills-ul"},[t("p",[t("ul",[t("li",[e._v("\n            Frontend Frameworks: \n            "),t("br"),e._v("  Vue JS, React JS, Angular 1.x, Aurelia, JQuery.\n          ")]),e._v(" "),t("li",[e._v("\n            Mobile: \n            "),t("br"),e._v("  Cordova, Swift.\n          ")]),e._v(" "),t("li",[e._v("\n            Webservers & Other tools: \n            "),t("br"),e._v("  Apache, NGINX, Tomcat, JBoss\n            "),t("br"),e._v("  RabbitMQ, Maven, Webpack, Yeoman, Gulp, Grunt\n          ")]),e._v(" "),t("li",[e._v("\n            NoSQL:\n            "),t("br"),e._v("  MongoDb, Redis, Neo4j\n          ")]),e._v(" "),t("li",[e._v("\n            SQL:\n            "),t("br"),e._v("  MySQL, Oracle, Firebird\n          ")])])])])])}]}}],[12]);
//# sourceMappingURL=app.259eeb3a16814ef616f2.js.map