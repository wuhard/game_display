(function anonymous(context
) {
/*
	Index: 1927
	Path:  interfaces/panels/SoundHudPanel::constructor
	Type:  Public
	Kind:  null
	Super: flash/display/Sprite
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_constructor(local1 /* Level */ = null) {
        // Possible use a real "this"
        // local2 is assigned before read, skip init
        let local2 = undefined
        // local3 is assigned before read, skip init
        let local3 = undefined
        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
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
//                        stack0 = NaN;// JIT: redundant assigment, value unused
                        local2 = NaN;
//                        stack0 = NaN;// JIT: redundant assigment, value unused
                        local3 = NaN;
                        stack0 = this;
                        context.savedScope.superConstructor.call(this, );
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:levels::Level// JIT: redundant assigment, value unused
                        stack1 = local1;
                        // 7 1:interfaces.panels:SoundHudPanel::level
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:levels::Level  */ 
                        this.$Bglevel = local1;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::SoundSplashHudSprite
                        stack1 = scope0.findScopeProperty($names[0], true, false);
                        stack1 = context.constructprop($names[0], stack1, []);
                        // 7 1:interfaces.panels:SoundHudPanel::splashSound
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::SoundSplashHudSprite  */ 
                        this.$BgsplashSound = stack1;
                        // 7 0::addChild
                        /* We sure that this scope owner, represented in TRAIT as Method  */ 
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces.panels:SoundHudPanel::splashSound
                        //Possible type:7 0::SoundSplashHudSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::SoundSplashHudSprite  */ 
                        stack1 = this.$BgsplashSound;
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgaddChild(stack1);
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[1]);
                        }
                        // 7 0::IS_IPHONE_X
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['IS_IPHONE_X'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgIS_IPHONE_X;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
                        if (!stack0) { p = 58; continue; };
                        stack0 = 24;
                        stack0 = +24;
                        local2 = stack0;
                        stack0 = 4;
                        stack0 = +4;
                        local3 = stack0;
                        { p = 66; continue; };
                    case 58:
                        stack0 = 0;
                        stack0 = +0;
                        local2 = stack0;
                        stack0 = 0;
                        stack0 = +0;
                        local3 = stack0;
                    case 66:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces.panels:SoundHudPanel::splashSound
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::SoundSplashHudSprite  */ 
                        stack0 = this.$BgsplashSound;
//                        stack1 = local2;// JIT: redundant assigment, value unused
                        // 7 0::x
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.x = local2;
                        } else {
                            context.setproperty($names[3], local2, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces.panels:SoundHudPanel::splashSound
                        //Possible type:7 0::SoundSplashHudSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::SoundSplashHudSprite  */ 
                        stack0 = this.$BgsplashSound;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        // 7 0::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = local3;
                        } else {
                            context.setproperty($names[4], local3, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces.panels:SoundHudPanel::splashSound
                        //Possible type:7 0::SoundSplashHudSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::SoundSplashHudSprite  */ 
                        stack0 = this.$BgsplashSound;
                        // 7 0::soundOffButton
                        //Possible type:7 0::SoundSplashHudSprite
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['soundOffButton'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgsoundOffButton;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[5]);
                            }
                        }
                        // 7 0:flash.events::MouseEvent
                        temp = scope0.findScopeProperty($names[6], true, false);
                        stack1 = temp.$BgMouseEvent;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[6]);
                        }
                        // 7 0::CLICK
                        //Possible type:7 0:flash.events::MouseEvent
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['CLICK'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgCLICK;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[7]);
                            }
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces.panels:SoundHudPanel::soundHandler
                        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
                        stack2 = this.axGetProperty($names[8]);
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
                                   stack0.axCallProperty($names[9], [stack1, stack2], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces.panels:SoundHudPanel::splashSound
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::SoundSplashHudSprite  */ 
                        stack0 = this.$BgsplashSound;
                        // 7 0::soundOnButton
                        //Possible type:7 0::SoundSplashHudSprite
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['soundOnButton'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgsoundOnButton;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[10]);
                            }
                        }
                        // 7 0:flash.events::MouseEvent
                        temp = scope0.findScopeProperty($names[6], true, false);
                        stack1 = temp.$BgMouseEvent;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[6]);
                        }
                        // 7 0::CLICK
                        //Possible type:7 0:flash.events::MouseEvent
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['CLICK'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgCLICK;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[7]);
                            }
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces.panels:SoundHudPanel::soundHandler
                        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
                        stack2 = this.axGetProperty($names[8]);
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
                                   stack0.axCallProperty($names[9], [stack1, stack2], false);
                                }
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[1]);
                        }
                        // 7 0::MusicOn
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['MusicOn'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgMusicOn;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[11]);
                            }
                        }
                        if (!stack0) { p = 147; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces.panels:SoundHudPanel::splashSound
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::SoundSplashHudSprite  */ 
                        stack0 = this.$BgsplashSound;
                        // 7 0::soundOffButton
                        //Possible type:7 0::SoundSplashHudSprite
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['soundOffButton'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgsoundOffButton;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[5]);
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[12], false, stack0);
                        }
                        //JIT: Emit inline return
                        return;
                    case 147:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces.panels:SoundHudPanel::splashSound
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::SoundSplashHudSprite  */ 
                        stack0 = this.$BgsplashSound;
                        // 7 0::soundOnButton
                        //Possible type:7 0::SoundSplashHudSprite
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['soundOnButton'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgsoundOnButton;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[10]);
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[12], false, stack0);
                        }
                    case 158:
                        return;
                    }
                }
            }
//# sourceURL=http://jit/interfaces/panels/SoundHudPanel/constructor.js
})