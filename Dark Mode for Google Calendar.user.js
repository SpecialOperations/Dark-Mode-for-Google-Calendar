// ==UserScript==
// @name         Dark Mode for Google Calendar
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Uses CSS to make Google Calendar black.
// @author       Ethan Bahr
// @match        https://calendar.google.com*/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        GM.addStyle
// @run-at       document-start
// ==/UserScript==

var something = (function() {
    var executed = false;
    return function() {
        if (!executed) {
            executed = true;
    // Black backgrounds
    GM.addStyle(".VfPpkd-LgbsSe.VfPpkd-LgbsSe-OWXEXe-INsAgc.VfPpkd-LgbsSe-OWXEXe-dgl2Hf.Rj2Mlf.OLiIxf.PDpWxe.P62QJc.LQeN7.GXlaye.xbo4ob, .v83gc, .rES0Be.elYzab-cXXICe-Hjleke.jLjmyd, .GENA3c, .Gk2izd, .OCQPo, .lYYbjc, .JtukPc, .p9lUpf, .wmCMbe, .q1j8lf.Jyewjb-haAclf.cPMh0b, .JPdR6b, .gHQcAb, .M842Cd, .OA0qNb.ncFHed, .CTxAtc, .I7OXgf.ZEeHrd.VhQQpd.Inn9w.iWO5td, .chVlZc, .YbcZBd, .zebRld, .cAYGed.KKjvXb .Ioup7e, .cAYGed.KKjvXb .BMQm1d, .Lzfnue, .PVQHSc.zIeiH .jBmls, .zDdMCe>.NSsY4e, .IIB0tc .jBmls, .C5tYIb, .tNDBE, .K2fuAf, .SGWAac, .Kk7lMc-Ku9FSb-DWWcKd-OomVLb, .gboEAb, .gb_Ud.gb_Qd, .gb_Ud.gb_Ie, .gb_Vd gb_Xa gb_Kd, .gb_Ld.gb_2d, .QQYuzf, .yRgNBf{background-color:black!important};")
    // White text
    GM.addStyle(".VfPpkd-vQzf8d, .gb_4d.gb_1c, .NlWrkb.snByac, .aIwHYe, .NI2kfb.qZvm2d-ibnC6b-bN97Pc.DX3x9d span, span.r4nke, h2, .XnnJrc span, .Bd2qQe span, .JPdR6b.e5Emjc.kydeve.e6NAn, .s4ZaLd span, .w61Ns.pCoqfc, .kxfKW div, .yHbHub div, .JtukPc span, .gb_Ld gb_2d span, .Xro3Db-nUpftc span, .JPdR6b span, .gb_Se span, .CTxAtc div, .NFUcsb.df5yGe.qRUolc div, .KuzJyd div, .M842Cd div, .u3WVdc.jBmls div, .zDdMCe>.NSsY4e label, .zDdMCe>.NSsY4e div, .yVWOnb div div, .sP2P6e div, .XvhY1d div, .gb_4c, .rSoRzd{color: white!important};")
    // Making icons white
    GM.addStyle("div.rF3YF .NMm5M, div.rF3YF .Ce1Y1c, .gb_oa svg, .gb_Fc svg, .gb_2c .gb_4d, .gb_Rc .gb_4d, .gb_Ue path, .Ce1Y1c path, .gb_zc path, .V1t8Le div div{color: white;fill: white;opacity: 1;}");
    GM.addStyle(".gb_oa svg, .gb_Fc svg, .gb_2c .gb_4d, .gb_Rc .gb_4d{color: white;opacity: 1;}");
    GM.addStyle(".gb_Se{background: grey!important;}");
    //Root modifiers
    GM.addStyle(":root{--on-surface-variant: whitesmoke;}");
    GM.addStyle(":root{--surface: black;}");
    GM.addStyle(":root{--textfield-surface: #121111}");
    //
    GM.addStyle(".qmv2fc{background-color: royalblue;}");
    GM.addStyle(".qmv2fc.KKjvXb{background-color: darkblue;}");
    //grey hovers
    GM.addStyle(".qmv2fc:hover, .JAPqpe.K0NPx span:hover, U26fgb.c7fp5b.FS4hgd.wXaa9.mAozAc:hover, .M842Cd div:hover, .w8UdJc div:hover, .OA0qNb.ncFHed div:hover, .Cd9hpd:hover, .u3WVdc.jBmls div div:hover{background-color: grey!important;}");
    GM.addStyle(".scrollable-element{scrollbar-color: black grey;}");
        }
    };
})();
something();
something();