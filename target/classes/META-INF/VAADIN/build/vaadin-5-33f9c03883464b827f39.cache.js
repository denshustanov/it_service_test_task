(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{231:function(n,i,o){"use strict";o.r(i),o.d(i,"init",(function(){return t}));const t=function(n){window.Vaadin=window.Vaadin||{},window.Vaadin.Flow=window.Vaadin.Flow||{};var i,o={},t={};i=void 0!==typeof window.console&&window.location.search.match(/[&?]debug(&|$)/)?"function"==typeof window.console.log?function(){window.console.log.apply(window.console,arguments)}:window.console.log:function(){};window.Vaadin=window.Vaadin||{},window.Vaadin.Flow=window.Vaadin.Flow||{},window.Vaadin.Flow.tryCatchWrapper=function(n,i,o){return function(){try{return n.apply(this,arguments)}catch(n){console.error("There seems to be an error in the "+i+":\n"+n.message+"\nPlease submit an issue to https://github.com/vaadin/"+o+"/issues/new!")}}},window.Vaadin.Flow.initApplication||(window.Vaadin.Flow.clients=window.Vaadin.Flow.clients||{},window.Vaadin.Flow.initApplication=function(n,e){var w=n.replace(/-\d+$/,"");if(o[n]){if(window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients&&window.Vaadin.Flow.clients[w]&&window.Vaadin.Flow.clients[w].initializing)throw new Error("Application "+n+" is already being initialized");if(function(n){var i=document.getElementById(n);if(!i)return!1;for(var o=0;o<i.childElementCount;o++){var t=i.childNodes[o].className;if(t&&-1!=t.indexOf("v-app-loading"))return!1}return!0}(n))throw new Error("Application "+n+" already initialized")}i("init application",n,e),window.Vaadin.Flow.clients[w]={isActive:function(){return!0},initializing:!0,productionMode:a};var d={getConfig:function(n){return e[n]}};o[n]=d,window.name||(window.name=n+"-"+Math.random());return t.client={pendingApps:[]},t.client.callback?(i("Starting from bootstrap",n),t.client.callback(n)):(i("Setting pending startup",n),t.client.pendingApps.push(n)),d},window.Vaadin.Flow.getAppIds=function(){var n=[];for(var i in o)o.hasOwnProperty(i)&&n.push(i);return n},window.Vaadin.Flow.getApp=function(n){return o[n]},window.Vaadin.Flow.registerWidgetset=function(n,o){i("Widgetset registered",n);var e=t[n];if(e&&e.pendingApps){e.callback=o;for(var a=0;a<e.pendingApps.length;a++){var w=e.pendingApps[a];i("Starting from register widgetset",w),o(w)}e.pendingApps=null}},window.Vaadin.Flow.getBrowserDetailsParameters=function(){var n={};n["v-sh"]=window.screen.height,n["v-sw"]=window.screen.width,n["v-wh"]=window.innerHeight,n["v-ww"]=window.innerWidth,n["v-bh"]=document.body.clientHeight,n["v-bw"]=document.body.clientWidth;var i=new Date;n["v-curdate"]=i.getTime();for(var o=i.getTimezoneOffset(),t=0,e=o,a=12;a>0;a--){i.setUTCMonth(a);var w=i.getTimezoneOffset();if(o!=w){t=o>w?o-w:w-o,e=o>w?o:w;break}}n["v-tzo"]=o,n["v-dstd"]=t,n["v-rtzo"]=e,n["v-dston"]=o!=e;try{n["v-tzid"]=Intl.DateTimeFormat().resolvedOptions().timeZone}catch(i){n["v-tzid"]=""}window.name&&(n["v-wn"]=window.name);var d=!1;try{document.createEvent("TouchEvent"),d=!0}catch(n){d="ontouchstart"in window||void 0!==navigator.msMaxTouchPoints}return n["v-td"]=d,n["v-pr"]=window.devicePixelRatio,navigator.platform&&(n["v-np"]=navigator.platform),Object.keys(n).forEach((function(i){var o=n[i];void 0!==o&&(n[i]=o.toString())})),n}),i("Flow bootstrap loaded"),n.appConfig.productionMode&&"function"!=typeof window.__gwtStatsEvent&&(window.Vaadin.Flow.gwtStatsEvents=[],window.__gwtStatsEvent=function(n){return window.Vaadin.Flow.gwtStatsEvents.push(n),!0});var e=n.appConfig,a=n.appConfig.productionMode;window.Vaadin.Flow.initApplication(e.appId,e)}}}]);