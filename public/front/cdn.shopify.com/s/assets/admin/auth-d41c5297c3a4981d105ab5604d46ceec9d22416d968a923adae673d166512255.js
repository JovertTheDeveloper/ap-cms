!function(){var e=function(e){var t={exports:{}};return e.call(t.exports,t,t.exports),t.exports},t=function(e){return e&&e.__esModule?e:{"default":e}};!function(e,t,a){function r(e){var t={},r=/^jQuery\d+$/;return a.each(e.attributes,function(e,a){a.specified&&!r.test(a.name)&&(t[a.name]=a.value)}),t}function l(e,r){var l=this,o=a(l);if(l.value==o.attr("placeholder")&&o.hasClass("placeholder"))if(o.data("placeholder-password")){if(o=o.hide().next().show().attr("id",o.removeAttr("id").data("placeholder-id")),!0===e)return o[0].value=r;o.focus()}else l.value="",o.removeClass("placeholder"),l==t.activeElement&&l.select()}function o(){var e,t=this,o=a(t),n=this.id;if(""==t.value){if("password"==t.type){if(!o.data("placeholder-textinput")){try{e=o.clone().attr({type:"text"})}catch(t){e=a("<input>").attr(a.extend(r(this),{type:"text"}))}e.removeAttr("name").data({"placeholder-password":!0,"placeholder-id":n}).bind("focus.placeholder",l),o.data({"placeholder-textinput":e,"placeholder-id":n}).before(e)}o=o.removeAttr("id").hide().prev().attr("id",n).show()}o.addClass("placeholder"),o[0].value=o.attr("placeholder")}else o.removeClass("placeholder")}var n,u,c="placeholder"in t.createElement("input"),i="placeholder"in t.createElement("textarea"),d=a.fn,s=a.valHooks;c&&i?(u=d.placeholder=function(){return this},u.input=u.textarea=!0):(u=d.placeholder=function(){var e=this;return e.filter((c?"textarea":":input")+"[placeholder]").not(".placeholder").bind({"focus.placeholder":l,"blur.placeholder":o}).data("placeholder-enabled",!0).trigger("blur.placeholder"),e},u.input=c,u.textarea=i,n={get:function(e){var t=a(e);return t.data("placeholder-enabled")&&t.hasClass("placeholder")?"":e.value},set:function(e,r){var n=a(e);return n.data("placeholder-enabled")?(""==r?(e.value=r,e!=t.activeElement&&o.call(e)):n.hasClass("placeholder")?l.call(e,!0,r)||(e.value=r):e.value=r,n):e.value=r}},c||(s.input=n),i||(s.textarea=n),a(function(){a(t).delegate("form","submit.placeholder",function(){var e=a(".placeholder",this).each(l);setTimeout(function(){e.each(o)},10)})}),a(e).bind("beforeunload.placeholder",function(){a(".placeholder").each(function(){this.value=""})}))}(this,document,jQuery),function(){var e;e=["rememberMe","home_date_range","homeSidebarDate","homeSidebarChannel"],window.SafeLocalStorage={get:function(e,t){var a;if(2!==arguments.length)throw"SafeLocalStorage developer error: You must supply a 2nd argument, a fallback/default value, to SafeLocalStorage.get()";try{a=localStorage.getItem(e);try{return a=JSON.parse(a),"undefined"===a?t:null!=a?a:t}catch(e){return e,"undefined"===a?t:null!=a?a:t}}catch(e){return e,t}},set:function(e,t){try{return localStorage.setItem(e,JSON.stringify(t))}catch(e){}},"delete":function(e){try{return localStorage.removeItem(e)}catch(e){}},clear:function(){try{return localStorage.clear()}catch(e){}},clearUnsafeItems:function(){var t,a,r,l,o,n,u,c;try{for(c={},t=0,l=e.length;t<l;t++)r=e[t],null!==(u=this.get(r,null))&&(c[r]=u);for(n=this.clear(),a=0,o=e.length;a<o;a++)r=e[a],null!==(u=c[r])&&this.set(r,u);return n}catch(e){}}}}.call(this);e(function(){"use strict";function e(e){e.attr({role:"alert",tabindex:-1}),setTimeout(function(){return e.focus()},1e3)}var a=t($),r=t(window.SafeLocalStorage);(0,a["default"])(document).on("ready",function(){r["default"].clearUnsafeItems(),(0,a["default"])("input, textarea").placeholder(),(0,a["default"])(".login-form #forgot-password").on("click",function(e){var t=(0,a["default"])("input[type=email]").val(),r=e.currentTarget.getAttribute("href");e.preventDefault(),e.stopPropagation(),window.location=r+"?login="+encodeURIComponent(t)}),(0,a["default"])("#remember_checkbox").on("change",function(e){return r["default"].set("rememberMe",Boolean(e.target.checked))});var t=r["default"].get("rememberMe",null);!0===t?(0,a["default"])("#remember_checkbox").attr("checked",!0):!1===t&&(0,a["default"])("#remember_checkbox").attr("checked",!1),(0,a["default"])("body").on("mouseenter",".tooltip",function(){var e=(0,a["default"])(this);e.hasClass("disabled")||e.addClass("is-active")}),(0,a["default"])("body").on("mouseleave",".tooltip",function(){(0,a["default"])(this).removeClass("is-active")}),(0,a["default"])("input").each(function(e,t){t.autocapitalize=!1,t.autocorrect=!1});var l={INPUT:"next-input--stylized",INPUT_FOCUSED:"next-input--is-focused"};(0,a["default"])("."+l.INPUT+" input").on("focus",function(e){(0,a["default"])(e.target).closest("."+l.INPUT).addClass(l.INPUT_FOCUSED)}).on("blur",function(e){(0,a["default"])(e.target).closest("."+l.INPUT).removeClass(l.INPUT_FOCUSED)});var o=(0,a["default"])("#login-input");o&&(""===o.val()?o.focus():(0,a["default"])("#password").focus()),(0,a["default"])("#passwordLoginToggle").on("click",function(e){e.preventDefault(),e.stopPropagation(),(0,a["default"])("#auth_style").val("normal-password"),(0,a["default"])("#user_identity_url").removeAttr("required"),(0,a["default"])("#user_identity_url").prop("disabled",!0),(0,a["default"])("#user_password, #user_password_confirmation").prop("required","required"),(0,a["default"])("#user_password, #user_password_confirmation").prop("disabled",!1),(0,a["default"])("#passwordLogin, #passwordLoginConfirmation").slideToggle(400)}),(0,a["default"])("#decline-invitation, #cancel-decline").on("click",function(e){e.preventDefault(),e.stopPropagation(),(0,a["default"])("#create-account-form, #decline-form").slideToggle(400)});var n=(0,a["default"])("#system_error");n.length&&e(n)})})}("undefined"!=typeof global?global:"undefined"!=typeof window&&window);