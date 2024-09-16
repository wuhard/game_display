(function anonymous(context
) {
/*
	Index: 1037
	Path:  states/SplashState::m_initPanels
	Type:  Protected
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_initPanels() {
        // Possible use a real "this"

        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
        let stack3 = undefined;
        let stack4 = undefined;
        let stack5 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        let p = 0;
        while (true) {
            switch (p) {
                    case 0:
                        stack0 = this;
                        scope0 = context.savedScope.extend(this);
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::IS_IPHONE_X
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['IS_IPHONE_X'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgIS_IPHONE_X;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[1]);
                            }
                        }
                        if (!stack0) { p = 28; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 24;// JIT: redundant assigment, value unused
                        // 7 1:states:SplashState::additional_x_margin
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
                        this.$Bgadditional_x_margin = 24;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 4;// JIT: redundant assigment, value unused
                        // 7 1:states:SplashState::additional_y_margin
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
                        this.$Bgadditional_y_margin = 4;
                        { p = 40; continue; };
                    case 28:
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 1:states:SplashState::additional_x_margin
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
                        this.$Bgadditional_x_margin = 0;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 1:states:SplashState::additional_y_margin
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
                        this.$Bgadditional_y_margin = 0;
                    case 40:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:interfaces.panels::MenuBackground
                        stack1 = scope0.findScopeProperty($names[2], true, false);
                        stack1 = context.constructprop($names[2], stack1, []);
                        // 7 0::splashBackground
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:interfaces.panels::MenuBackground  */ 
                        this.$BgsplashBackground = stack1;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:interfaces.panels::GameTitlePanel
                        stack1 = scope0.findScopeProperty($names[3], true, false);
                        stack1 = context.constructprop($names[3], stack1, []);
                        // 7 0::splashTitle
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:interfaces.panels::GameTitlePanel  */ 
                        this.$BgsplashTitle = stack1;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::MenuButtonsSprite
                        stack1 = scope0.findScopeProperty($names[4], true, false);
                        stack1 = context.constructprop($names[4], stack1, []);
                        // 7 0::splashButtons
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::MenuButtonsSprite  */ 
                        this.$BgsplashButtons = stack1;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::splashBackground
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:interfaces.panels::MenuBackground  */ 
                        stack0 = this.$BgsplashBackground;
                        // 7 0::int
                        temp = scope0.findScopeProperty($names[5], true, false);
                        stack1 = temp.$Bgint;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[5]);
                        }
                        stack2 = context.savedScope.global.object;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack3 = temp.$BgUtils;
                        if (stack3 === undefined || typeof stack3 === 'function') {
                            stack3 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::WIDTH
                        //Possible type:7 0::Utils
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['WIDTH'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$BgWIDTH;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[6]);
                            }
                        }
//                        stack4 = 0.5;// JIT: redundant assigment, value unused
                        stack3 *= 0.5;
                        stack1 = context.call(stack1, stack2, [stack3], scope0);
                        // 7 0::x
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.x = stack1;
                        } else {
                            context.setproperty($names[7], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::splashBackground
                        //Possible type:7 0:interfaces.panels::MenuBackground
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:interfaces.panels::MenuBackground  */ 
                        stack0 = this.$BgsplashBackground;
                        // 7 0::int
                        temp = scope0.findScopeProperty($names[5], true, false);
                        stack1 = temp.$Bgint;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[5]);
                        }
                        stack2 = context.savedScope.global.object;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack3 = temp.$BgUtils;
                        if (stack3 === undefined || typeof stack3 === 'function') {
                            stack3 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::HEIGHT
                        //Possible type:7 0::Utils
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['HEIGHT'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$BgHEIGHT;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[8]);
                            }
                        }
//                        stack4 = 0.5;// JIT: redundant assigment, value unused
                        stack3 *= 0.5;
                        stack1 = context.call(stack1, stack2, [stack3], scope0);
                        // 7 0::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = stack1;
                        } else {
                            context.setproperty($names[9], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::splashTitle
                        //Possible type:7 0:interfaces.panels::MenuBackground
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:interfaces.panels::GameTitlePanel  */ 
                        stack0 = this.$BgsplashTitle;
                        // 7 0::int
                        temp = scope0.findScopeProperty($names[5], true, false);
                        stack1 = temp.$Bgint;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[5]);
                        }
                        stack2 = context.savedScope.global.object;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack3 = temp.$BgUtils;
                        if (stack3 === undefined || typeof stack3 === 'function') {
                            stack3 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::WIDTH
                        //Possible type:7 0::Utils
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['WIDTH'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$BgWIDTH;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[6]);
                            }
                        }
//                        stack4 = 0.25;// JIT: redundant assigment, value unused
                        stack3 *= 0.25;
                        stack1 = context.call(stack1, stack2, [stack3], scope0);
                        // 7 0::x
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.x = stack1;
                        } else {
                            context.setproperty($names[7], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::splashTitle
                        //Possible type:7 0:interfaces.panels::GameTitlePanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:interfaces.panels::GameTitlePanel  */ 
                        stack0 = this.$BgsplashTitle;
                        // 7 0::int
                        temp = scope0.findScopeProperty($names[5], true, false);
                        stack1 = temp.$Bgint;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[5]);
                        }
                        stack2 = context.savedScope.global.object;
//                        stack3 = 16;// JIT: redundant assigment, value unused
                        stack1 = context.call(stack1, stack2, [16], scope0);
                        // 7 0::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = stack1;
                        } else {
                            context.setproperty($names[9], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::splashTitle
                        //Possible type:7 0:interfaces.panels::GameTitlePanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:interfaces.panels::GameTitlePanel  */ 
                        stack0 = this.$BgsplashTitle;
                        // 7 0::width
                        //Possible type:7 0:interfaces.panels::GameTitlePanel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['width'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgwidth;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[10]);
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack1 = temp.$BgUtils;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::WIDTH
                        //Possible type:7 0::Utils
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['WIDTH'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgWIDTH;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[6]);
                            }
                        }
//                        stack2 = 0.8;// JIT: redundant assigment, value unused
                        stack1 *= 0.8;
                        if (!(stack1 <= stack0)) { p = 208; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 1:states:SplashState::IS_SMALL_SCREEN
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgIS_SMALL_SCREEN = true;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::splashBackground
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:interfaces.panels::MenuBackground  */ 
                        stack0 = this.$BgsplashBackground;
                        // 7 0::int
                        temp = scope0.findScopeProperty($names[5], true, false);
                        stack1 = temp.$Bgint;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[5]);
                        }
                        stack2 = context.savedScope.global.object;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack3 = temp.$BgUtils;
                        if (stack3 === undefined || typeof stack3 === 'function') {
                            stack3 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::WIDTH
                        //Possible type:7 0::Utils
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['WIDTH'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$BgWIDTH;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[6]);
                            }
                        }
//                        stack4 = 0.3;// JIT: redundant assigment, value unused
                        stack3 *= 0.3;
                        stack1 = context.call(stack1, stack2, [stack3], scope0);
                        // 7 0::x
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.x = stack1;
                        } else {
                            context.setproperty($names[7], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::splashBackground
                        //Possible type:7 0:interfaces.panels::MenuBackground
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:interfaces.panels::MenuBackground  */ 
                        stack0 = this.$BgsplashBackground;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.setSmallScreen();
                        } else {
                            // 7 0::setSmallScreen
                            {
                                let t = stack0;
                                const m = t.$BgsetSmallScreen || (t = sec.box(stack0), t.$BgsetSmallScreen);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[11], [], false);
                                }
                            }
                        }
                        { p = 213; continue; };
                    case 208:
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 1:states:SplashState::IS_SMALL_SCREEN
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgIS_SMALL_SCREEN = false;
                    case 213:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:SplashState::IS_SMALL_SCREEN
                        //Possible type:7 0:interfaces.panels::MenuBackground
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgIS_SMALL_SCREEN;
                        if (stack0) { p = 313; continue; };
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::IS_IPHONE_X
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['IS_IPHONE_X'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgIS_IPHONE_X;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[1]);
                            }
                        }
                        if (!stack0) { p = 272; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::splashTitle
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:interfaces.panels::GameTitlePanel  */ 
                        stack0 = this.$BgsplashTitle;
                        // 7 0::int
                        temp = scope0.findScopeProperty($names[5], true, false);
                        stack1 = temp.$Bgint;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[5]);
                        }
                        stack2 = context.savedScope.global.object;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack3 = temp.$BgUtils;
                        if (stack3 === undefined || typeof stack3 === 'function') {
                            stack3 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::WIDTH
                        //Possible type:7 0::Utils
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['WIDTH'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$BgWIDTH;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[6]);
                            }
                        }
//                        stack4 = 0.01;// JIT: redundant assigment, value unused
                        stack3 *= 0.01;
                        stack1 = context.call(stack1, stack2, [stack3], scope0);
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:SplashState::additional_x_margin
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack2 = this.$Bgadditional_x_margin;
                        stack1 += stack2;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0::splashTitle
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:interfaces.panels::GameTitlePanel  */ 
                        stack2 = this.$BgsplashTitle;
                        // 7 0::width
                        //Possible type:7 0:interfaces.panels::GameTitlePanel
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['width'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgwidth;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[10]);
                            }
                        }
//                        stack3 = 0.5;// JIT: redundant assigment, value unused
                        stack2 *= 0.5;
                        stack1 += stack2;
                        // 7 0::x
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.x = stack1;
                        } else {
                            context.setproperty($names[7], stack1, stack0);
                        }
                        { p = 309; continue; };
                    case 272:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::splashTitle
                        //Possible type:7 0:interfaces.panels::GameTitlePanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:interfaces.panels::GameTitlePanel  */ 
                        stack0 = this.$BgsplashTitle;
                        // 7 0::int
                        temp = scope0.findScopeProperty($names[5], true, false);
                        stack1 = temp.$Bgint;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[5]);
                        }
                        stack2 = context.savedScope.global.object;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack3 = temp.$BgUtils;
                        if (stack3 === undefined || typeof stack3 === 'function') {
                            stack3 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::WIDTH
                        //Possible type:7 0::Utils
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['WIDTH'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$BgWIDTH;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[6]);
                            }
                        }
//                        stack4 = 0.04;// JIT: redundant assigment, value unused
                        stack3 *= 0.04;
                        stack1 = context.call(stack1, stack2, [stack3], scope0);
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:SplashState::additional_x_margin
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack2 = this.$Bgadditional_x_margin;
                        stack1 += stack2;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0::splashTitle
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:interfaces.panels::GameTitlePanel  */ 
                        stack2 = this.$BgsplashTitle;
                        // 7 0::width
                        //Possible type:7 0:interfaces.panels::GameTitlePanel
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['width'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgwidth;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[10]);
                            }
                        }
//                        stack3 = 0.5;// JIT: redundant assigment, value unused
                        stack2 *= 0.5;
                        stack1 += stack2;
                        // 7 0::x
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.x = stack1;
                        } else {
                            context.setproperty($names[7], stack1, stack0);
                        }
                    case 309:
                        { p = 353; continue; };
                    case 313:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::splashTitle
                        //Possible type:7 0:interfaces.panels::GameTitlePanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:interfaces.panels::GameTitlePanel  */ 
                        stack0 = this.$BgsplashTitle;
                        // 7 0::int
                        temp = scope0.findScopeProperty($names[5], true, false);
                        stack1 = temp.$Bgint;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[5]);
                        }
                        stack2 = context.savedScope.global.object;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack3 = temp.$BgUtils;
                        if (stack3 === undefined || typeof stack3 === 'function') {
                            stack3 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::WIDTH
                        //Possible type:7 0::Utils
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['WIDTH'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$BgWIDTH;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[6]);
                            }
                        }
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 0::splashTitle
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:interfaces.panels::GameTitlePanel  */ 
                        stack4 = this.$BgsplashTitle;
                        // 7 0::width
                        //Possible type:7 0:interfaces.panels::GameTitlePanel
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['width'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgwidth;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[10]);
                            }
                        }
                        stack3 -= stack4;
//                        stack4 = 0.5;// JIT: redundant assigment, value unused
                        stack3 *= 0.5;
                        stack1 = context.call(stack1, stack2, [stack3], scope0);
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0::splashTitle
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:interfaces.panels::GameTitlePanel  */ 
                        stack2 = this.$BgsplashTitle;
                        // 7 0::width
                        //Possible type:7 0:interfaces.panels::GameTitlePanel
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['width'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgwidth;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[10]);
                            }
                        }
//                        stack3 = 0.5;// JIT: redundant assigment, value unused
                        stack2 *= 0.5;
                        stack1 += stack2;
                        // 7 0::x
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.x = stack1;
                        } else {
                            context.setproperty($names[7], stack1, stack0);
                        }
                    case 353:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::splashButtons
                        //Possible type:7 0:interfaces.panels::GameTitlePanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::MenuButtonsSprite  */ 
                        stack0 = this.$BgsplashButtons;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::splashTitle
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:interfaces.panels::GameTitlePanel  */ 
                        stack1 = this.$BgsplashTitle;
                        // 7 0::x
                        //Possible type:7 0:interfaces.panels::GameTitlePanel
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['x'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[7]);
                            }
                        }
                        // 7 0::x
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.x = stack1;
                        } else {
                            context.setproperty($names[7], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::splashButtons
                        //Possible type:7 0::MenuButtonsSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::MenuButtonsSprite  */ 
                        stack0 = this.$BgsplashButtons;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::splashTitle
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:interfaces.panels::GameTitlePanel  */ 
                        stack1 = this.$BgsplashTitle;
                        // 7 0::y
                        //Possible type:7 0:interfaces.panels::GameTitlePanel
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['y'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgy;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[9]);
                            }
                        }
//                        stack2 = 112;// JIT: redundant assigment, value unused
                        stack1 += 112;
                        // 7 0::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = stack1;
                        } else {
                            context.setproperty($names[9], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:interfaces.panels::SoundHudPanel
                        stack1 = scope0.findScopeProperty($names[12], true, false);
                        stack1 = context.constructprop($names[12], stack1, []);
                        // 7 1:states:SplashState::soundHudPanel
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:interfaces.panels::SoundHudPanel  */ 
                        this.$BgsoundHudPanel = stack1;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:SplashState::container
                        //Possible type:7 0::MenuButtonsSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::Sprite  */ 
                        stack0 = this.$Bgcontainer;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:SplashState::soundHudPanel
                        //Possible type:7 0:interfaces.panels::SoundHudPanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:interfaces.panels::SoundHudPanel  */ 
                        stack1 = this.$BgsoundHudPanel;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.addChild(stack1);
                        } else {
                            // 7 0::addChild
                            {
                                let t = stack0;
                                const m = t.$BgaddChild || (t = sec.box(stack0), t.$BgaddChild);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[13], [stack1], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:SplashState::soundHudPanel
                        //Possible type:7 0:flash.display::Sprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:interfaces.panels::SoundHudPanel  */ 
                        stack0 = this.$BgsoundHudPanel;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack1 = temp.$BgUtils;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::WIDTH
                        //Possible type:7 0::Utils
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['WIDTH'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgWIDTH;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[6]);
                            }
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:SplashState::soundHudPanel
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:interfaces.panels::SoundHudPanel  */ 
                        stack2 = this.$BgsoundHudPanel;
                        // 7 0::width
                        //Possible type:7 0:interfaces.panels::SoundHudPanel
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['width'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgwidth;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[10]);
                            }
                        }
                        stack1 -= stack2;
                        // 7 0::x
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.x = stack1;
                        } else {
                            context.setproperty($names[7], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:SplashState::soundHudPanel
                        //Possible type:7 0:interfaces.panels::SoundHudPanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:interfaces.panels::SoundHudPanel  */ 
                        stack0 = this.$BgsoundHudPanel;
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 0::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = 0;
                        } else {
                            context.setproperty($names[9], 0, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::SplashHudSprite
                        stack1 = scope0.findScopeProperty($names[14], true, false);
                        stack1 = context.constructprop($names[14], stack1, []);
                        // 7 0::splashHud
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::SplashHudSprite  */ 
                        this.$BgsplashHud = stack1;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::splashHud
                        //Possible type:7 0:interfaces.panels::SoundHudPanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::SplashHudSprite  */ 
                        stack0 = this.$BgsplashHud;
                        // 7 0::int
                        temp = scope0.findScopeProperty($names[5], true, false);
                        stack1 = temp.$Bgint;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[5]);
                        }
                        stack2 = context.savedScope.global.object;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack3 = temp.$BgUtils;
                        if (stack3 === undefined || typeof stack3 === 'function') {
                            stack3 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::WIDTH
                        //Possible type:7 0::Utils
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['WIDTH'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$BgWIDTH;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[6]);
                            }
                        }
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 0::splashHud
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::SplashHudSprite  */ 
                        stack4 = this.$BgsplashHud;
                        // 7 0::width
                        //Possible type:7 0::SplashHudSprite
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['width'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgwidth;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[10]);
                            }
                        }
//                        stack5 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:SplashState::additional_x_margin
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack5 = this.$Bgadditional_x_margin;
                        stack4 += stack5;
//                        stack5 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:SplashState::soundHudPanel
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:interfaces.panels::SoundHudPanel  */ 
                        stack5 = this.$BgsoundHudPanel;
                        // 7 0::width
                        //Possible type:7 0:interfaces.panels::SoundHudPanel
                        if (!(stack5 != undefined && stack5[AX_CLASS_SYMBOL])) {
                            stack5 = stack5['width'];
                        } else {
                            temp = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);
                            stack5 = temp.$Bgwidth;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[10]);
                            }
                        }
                        stack4 += stack5;
                        stack3 -= stack4;
                        stack1 = context.call(stack1, stack2, [stack3], scope0);
                        // 7 0::x
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.x = stack1;
                        } else {
                            context.setproperty($names[7], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::splashHud
                        //Possible type:7 0::SplashHudSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::SplashHudSprite  */ 
                        stack0 = this.$BgsplashHud;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:SplashState::additional_y_margin
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack1 = this.$Bgadditional_y_margin;
                        // 7 0::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = stack1;
                        } else {
                            context.setproperty($names[9], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:SplashState::container
                        //Possible type:7 0::SplashHudSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::Sprite  */ 
                        stack0 = this.$Bgcontainer;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::splashBackground
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:interfaces.panels::MenuBackground  */ 
                        stack1 = this.$BgsplashBackground;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.addChild(stack1);
                        } else {
                            // 7 0::addChild
                            {
                                let t = stack0;
                                const m = t.$BgaddChild || (t = sec.box(stack0), t.$BgaddChild);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[13], [stack1], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:SplashState::container
                        //Possible type:7 0:flash.display::Sprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::Sprite  */ 
                        stack0 = this.$Bgcontainer;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::splashTitle
                        //Possible type:7 0:interfaces.panels::MenuBackground
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:interfaces.panels::GameTitlePanel  */ 
                        stack1 = this.$BgsplashTitle;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.addChild(stack1);
                        } else {
                            // 7 0::addChild
                            {
                                let t = stack0;
                                const m = t.$BgaddChild || (t = sec.box(stack0), t.$BgaddChild);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[13], [stack1], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:SplashState::container
                        //Possible type:7 0:flash.display::Sprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::Sprite  */ 
                        stack0 = this.$Bgcontainer;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::splashButtons
                        //Possible type:7 0:interfaces.panels::GameTitlePanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::MenuButtonsSprite  */ 
                        stack1 = this.$BgsplashButtons;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.addChild(stack1);
                        } else {
                            // 7 0::addChild
                            {
                                let t = stack0;
                                const m = t.$BgaddChild || (t = sec.box(stack0), t.$BgaddChild);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[13], [stack1], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:SplashState::container
                        //Possible type:7 0:flash.display::Sprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::Sprite  */ 
                        stack0 = this.$Bgcontainer;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::splashHud
                        //Possible type:7 0::MenuButtonsSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::SplashHudSprite  */ 
                        stack1 = this.$BgsplashHud;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.addChild(stack1);
                        } else {
                            // 7 0::addChild
                            {
                                let t = stack0;
                                const m = t.$BgaddChild || (t = sec.box(stack0), t.$BgaddChild);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[13], [stack1], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:SplashState::container
                        //Possible type:7 0:flash.display::Sprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::Sprite  */ 
                        stack0 = this.$Bgcontainer;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:SplashState::soundHudPanel
                        //Possible type:7 0::SplashHudSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:interfaces.panels::SoundHudPanel  */ 
                        stack1 = this.$BgsoundHudPanel;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.addChild(stack1);
                        } else {
                            // 7 0::addChild
                            {
                                let t = stack0;
                                const m = t.$BgaddChild || (t = sec.box(stack0), t.$BgaddChild);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[13], [stack1], false);
                                }
                            }
                        }
                        return;
                    }
                }
            }
//# sourceURL=http://jit/states/SplashState/m_initPanels.js
})