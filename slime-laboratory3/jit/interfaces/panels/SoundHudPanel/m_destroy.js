(function anonymous(context
) {
/*
	Index: 1928
	Path:  interfaces/panels/SoundHudPanel::m_destroy
	Type:  Public
	Kind:  Method
	Super: flash/display/Sprite
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_destroy() {
        // Possible use a real "this"

        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        stack0 = this;
        scope0 = context.savedScope.extend(this);
//        stack0 = this;// JIT: redundant assigment, value unused
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
                stack0 = temp.axGetProperty($names[0]);
            }
        }
        // 7 0:flash.events::MouseEvent
        temp = scope0.findScopeProperty($names[1], true, false);
        stack1 = temp.$BgMouseEvent;
        if (stack1 === undefined || typeof stack1 === 'function') {
            stack1 = temp.axGetProperty($names[1]);
        }
        // 7 0::CLICK
        //Possible type:7 0:flash.events::MouseEvent
        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
            stack1 = stack1['CLICK'];
        } else {
            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
            stack1 = temp.$BgCLICK;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[2]);
            }
        }
//        stack2 = this;// JIT: redundant assigment, value unused
        // 7 1:interfaces.panels:SoundHudPanel::soundHandler
        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
        stack2 = this.axGetProperty($names[3]);
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
            stack0.removeEventListener(stack1, stack2);
        } else {
            // 7 0::removeEventListener
            {
                let t = stack0;
                const m = t.$BgremoveEventListener || (t = sec.box(stack0), t.$BgremoveEventListener);
                if( typeof m === "function" ) { 
                    m.call(t, stack1, stack2);
                } else { 
                   stack0.axCallProperty($names[4], [stack1, stack2], false);
                }
            }
        }
//        stack0 = this;// JIT: redundant assigment, value unused
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
                stack0 = temp.axGetProperty($names[5]);
            }
        }
        // 7 0:flash.events::MouseEvent
        temp = scope0.findScopeProperty($names[1], true, false);
        stack1 = temp.$BgMouseEvent;
        if (stack1 === undefined || typeof stack1 === 'function') {
            stack1 = temp.axGetProperty($names[1]);
        }
        // 7 0::CLICK
        //Possible type:7 0:flash.events::MouseEvent
        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
            stack1 = stack1['CLICK'];
        } else {
            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
            stack1 = temp.$BgCLICK;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[2]);
            }
        }
//        stack2 = this;// JIT: redundant assigment, value unused
        // 7 1:interfaces.panels:SoundHudPanel::soundHandler
        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
        stack2 = this.axGetProperty($names[3]);
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
            stack0.removeEventListener(stack1, stack2);
        } else {
            // 7 0::removeEventListener
            {
                let t = stack0;
                const m = t.$BgremoveEventListener || (t = sec.box(stack0), t.$BgremoveEventListener);
                if( typeof m === "function" ) { 
                    m.call(t, stack1, stack2);
                } else { 
                   stack0.axCallProperty($names[4], [stack1, stack2], false);
                }
            }
        }
        // 7 0::removeChild
        /* We sure that this scope owner, represented in TRAIT as Method  */ 
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = this;// JIT: redundant assigment, value unused
        // 7 1:interfaces.panels:SoundHudPanel::splashSound
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::SoundSplashHudSprite  */ 
        stack1 = this.$BgsplashSound;
        /* We sure that this safe call, represented in TRAIT as Method  */ 
        this.$BgremoveChild(stack1);
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = null;// JIT: redundant assigment, value unused
        // 7 1:interfaces.panels:SoundHudPanel::splashSound
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::SoundSplashHudSprite  */ 
        this.$BgsplashSound = null;
        return;
    }
//# sourceURL=http://jit/interfaces/panels/SoundHudPanel/m_destroy.js
})