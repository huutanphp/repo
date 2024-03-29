// ==UserScript==
// @name           Add Udid Developer
// @namespace      https://github.com/igorskyflyer
// @version        1.0.19
// @author         Igor DimitrijeviÄ (@igorskyflyer)
// @description    Counters anti-AdBlock scripts
// @homepage       https://github.com/igorskyflyer/userscript-anti-anti-adblock
// @homepageURL    https://github.com/igorskyflyer/userscript-anti-anti-adblock
// @website        https://igorskyflyer.me
// @downloadURL    https://github.com/igorskyflyer/userscript-anti-anti-adblock/raw/main/anti-anti-adblock.user.js
// @updateURL      https://github.com/igorskyflyer/userscript-anti-anti-adblock/raw/main/anti-anti-adblock.user.js
// @supportURL     https://github.com/igorskyflyer/userscript-anti-anti-adblock/issues
// @grant          unsafeWindow
// @match          https://developer.apple.com/*
// @run-at         document-end
// ==/UserScript==

unsafeWindow.dotcom = { flags: { adverts: true, analytics: true,  }, userinfo: { ads: true }, initAnalytics: function() {} }
unsafeWindow.zaraz = { track: function() {} }
unsafeWindow.demandSupply = { pfAds: true, setPfAds: function() {} }
unsafeWindow.zarazData = {}
unsafeWindow.AdTrack = { init: function() {} }
unsafeWindow.MDCore = { adblock: 0 }

unsafeWindow.hasAdBlocker =
unsafeWindow.abp = false;

unsafeWindow.googleAd =
unsafeWindow.isLoadAds =
unsafeWindow.generatorAds =
unsafeWindow.zfgloadedpopup =
unsafeWindow.canRunAds =
unsafeWindow.canRunAdvertise = true;

unsafeWindow.google_ad_status = 1;

unsafeWindow.GeneratorAds =
unsafeWindow.Ads_PushPage =
unsafeWindow.Ads_Popunder =
unsafeWindow.Ads_Vignette =
unsafeWindow.postAntiadblockInfo =
unsafeWindow.AdsPlugin =
unsafeWindow.AdscoreInit = function() {}
