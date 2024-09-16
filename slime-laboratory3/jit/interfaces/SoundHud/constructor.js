(function anonymous(context
) {
/*
	Index: 516
	Path:  interfaces/SoundHud::constructor
	Type:  Public
	Kind:  null
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_constructor(local1 /* Level */ = null) {
        // Possible use a real "this"
        // local2 is assigned before read, skip init
        let local2 = undefined
        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
        let stack3 = undefined;
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
                        stack0 = this;
                        context.savedScope.superConstructor.call(this, );
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:levels::Level// JIT: redundant assigment, value unused
                        stack1 = local1;
                        // 7 1:interfaces:SoundHud::level
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:levels::Level  */ 
                        this.$Bglevel = local1;
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
                        if (!stack0) { p = 36; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 24;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:SoundHud::additional_x_margin
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
                        this.$Bgadditional_x_margin = 24;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 4;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:SoundHud::additional_y_margin
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
                        this.$Bgadditional_y_margin = 4;
                        { p = 48; continue; };
                    case 36:
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:SoundHud::additional_x_margin
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
                        this.$Bgadditional_x_margin = 0;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:SoundHud::additional_y_margin
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
                        this.$Bgadditional_y_margin = 0;
                    case 48:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:flash.display::MovieClip
                        stack1 = scope0.findScopeProperty($names[2], true, false);
                        stack1 = context.constructprop($names[2], stack1, []);
                        // 7 0::hudContainer
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:flash.display::MovieClip  */ 
                        this.$BghudContainer = stack1;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::rootMovie
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['rootMovie'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgrootMovie;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::hudContainer
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack1 = this.$BghudContainer;
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
                                   stack0.axCallProperty($names[4], [stack1], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::hudContainer
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BghudContainer;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::hudContainer
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack1 = this.$BghudContainer;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack2 = temp.$BgUtils;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::GFX_SCALE
                        //Possible type:7 0::Utils
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['GFX_SCALE'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$BgGFX_SCALE;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[5]);
                            }
                        }
                        stack3 = stack2;
                        local2 = stack3;
                        // 7 0::scaleY
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])){
                            stack1.scaleY = stack2;
                        } else {
                            context.setproperty($names[6], stack2, stack1);
                        }
//                        stack1 = local2;// JIT: redundant assigment, value unused
                        //IR: KILL removed, reason: prevent optimisation
                        // 7 0::scaleX
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.scaleX = local2;
                        } else {
                            context.setproperty($names[7], local2, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::SoundHudSprite
                        stack1 = scope0.findScopeProperty($names[8], true, false);
                        stack1 = context.constructprop($names[8], stack1, []);
                        // 7 0::hudSprite
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::SoundHudSprite  */ 
                        this.$BghudSprite = stack1;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::hudContainer
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BghudContainer;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::hudSprite
                        //Possible type:7 0::SoundHudSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::SoundHudSprite  */ 
                        stack1 = this.$BghudSprite;
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
                                   stack0.axCallProperty($names[4], [stack1], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:interfaces.panels::SoundHudPanel
                        stack1 = scope0.findScopeProperty($names[9], true, false);
//                        // JIT: potential type:7 0:levels::Level// JIT: redundant assigment, value unused
                        stack2 = local1;
                        stack1 = context.constructprop($names[9], stack1, [local1]);
                        // 7 0::soundHudPanel
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:interfaces.panels::SoundHudPanel  */ 
                        this.$BgsoundHudPanel = stack1;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::hudContainer
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BghudContainer;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::soundHudPanel
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
                                   stack0.axCallProperty($names[4], [stack1], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::soundHudPanel
                        //Possible type:7 0:flash.display::MovieClip
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
                                stack1 = temp.axGetProperty($names[10]);
                            }
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0::soundHudPanel
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
                                stack2 = temp.axGetProperty($names[11]);
                            }
                        }
                        stack1 -= stack2;
                        // 7 0::x
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.x = stack1;
                        } else {
                            context.setproperty($names[12], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::soundHudPanel
                        //Possible type:7 0:interfaces.panels::SoundHudPanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:interfaces.panels::SoundHudPanel  */ 
                        stack0 = this.$BgsoundHudPanel;
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 0::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = 0;
                        } else {
                            context.setproperty($names[13], 0, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::GlassesButton
                        stack1 = scope0.findScopeProperty($names[14], true, false);
                        stack1 = context.constructprop($names[14], stack1, []);
                        // 7 0::glassesButton
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::GlassesButton  */ 
                        this.$BgglassesButton = stack1;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::hudContainer
                        //Possible type:7 0:interfaces.panels::SoundHudPanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BghudContainer;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::glassesButton
                        //Possible type:7 0::GlassesButton
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::GlassesButton  */ 
                        stack1 = this.$BgglassesButton;
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
                                   stack0.axCallProperty($names[4], [stack1], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::glassesButton
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::GlassesButton  */ 
                        stack0 = this.$BgglassesButton;
//                        stack1 = 235;// JIT: redundant assigment, value unused
                        // 7 0::x
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.x = 235;
                        } else {
                            context.setproperty($names[12], 235, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::glassesButton
                        //Possible type:7 0::GlassesButton
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::GlassesButton  */ 
                        stack0 = this.$BgglassesButton;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:SoundHud::additional_y_margin
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack1 = this.$Bgadditional_y_margin;
                        // 7 0::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = stack1;
                        } else {
                            context.setproperty($names[13], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::hudSprite
                        //Possible type:7 0::GlassesButton
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::SoundHudSprite  */ 
                        stack0 = this.$BghudSprite;
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
                                stack1 = temp.axGetProperty($names[10]);
                            }
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0::hudSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::SoundHudSprite  */ 
                        stack2 = this.$BghudSprite;
                        // 7 0::width
                        //Possible type:7 0::SoundHudSprite
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['width'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgwidth;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[11]);
                            }
                        }
//                        stack3 = 2;// JIT: redundant assigment, value unused
                        stack2 *= 2;
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:SoundHud::additional_x_margin
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack3 = this.$Bgadditional_x_margin;
                        stack2 += stack3;
                        stack1 -= stack2;
                        // 7 0::x
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.x = stack1;
                        } else {
                            context.setproperty($names[12], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::hudSprite
                        //Possible type:7 0::SoundHudSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::SoundHudSprite  */ 
                        stack0 = this.$BghudSprite;
                        stack1 = 0;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:SoundHud::additional_y_margin
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack2 = this.$Bgadditional_y_margin;
                        stack1 += stack2;
                        // 7 0::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = stack1;
                        } else {
                            context.setproperty($names[13], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::hudSprite
                        //Possible type:7 0::SoundHudSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::SoundHudSprite  */ 
                        stack0 = this.$BghudSprite;
                        // 7 0::pauseButton
                        //Possible type:7 0::SoundHudSprite
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['pauseButton'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgpauseButton;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[15]);
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[16], false, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:SoundHud::canPause
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgcanPause = false;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::PauseOn
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.PauseOn = false;
                        } else {
                            context.setproperty($names[17], false, stack0);
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::SettingsOn
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.SettingsOn = false;
                        } else {
                            context.setproperty($names[18], false, stack0);
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::rootStage
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['rootStage'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgrootStage;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[19]);
                            }
                        }
                        // 7 0:flash.events::KeyboardEvent
                        temp = scope0.findScopeProperty($names[20], true, false);
                        stack1 = temp.$BgKeyboardEvent;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[20]);
                        }
                        // 7 0::KEY_DOWN
                        //Possible type:7 0:flash.events::KeyboardEvent
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['KEY_DOWN'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgKEY_DOWN;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[21]);
                            }
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:SoundHud::keyDownPausePanel
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
                        stack2 = this.axGetProperty($names[22]);
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.addEventListener(stack1, stack2);
                        } else {
                            // 7 0::addEventListener
                            {
                                let t = stack0;
                                const m = t.$BgaddEventListener || (t = sec.box(stack0), t.$BgaddEventListener);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1, stack2);
                                } else { 
                                   stack0.axCallProperty($names[23], [stack1, stack2], false);
                                }
                            }
                        }
                        return;
                    }
                }
            }
//# sourceURL=http://jit/interfaces/SoundHud/constructor.js
})