(function anonymous(context
) {
/*
	Index: 525
	Path:  interfaces/SoundHud::m_showPause
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_showPause() {
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
        // 7 0::hudSprite
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
                stack0 = temp.axGetProperty($names[0]);
            }
        }
//        stack1 = true;// JIT: redundant assigment, value unused
        // 7 0::visible
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.visible = true;
        } else {
            context.setproperty($names[1], true, stack0);
        }
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0::hudSprite
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
                stack0 = temp.axGetProperty($names[0]);
            }
        }
        // 7 0:flash.events::MouseEvent
        temp = scope0.findScopeProperty($names[2], true, false);
        stack1 = temp.$BgMouseEvent;
        if (stack1 === undefined || typeof stack1 === 'function') {
            stack1 = temp.axGetProperty($names[2]);
        }
        // 7 0::CLICK
        //Possible type:7 0:flash.events::MouseEvent
        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
            stack1 = stack1['CLICK'];
        } else {
            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
            stack1 = temp.$BgCLICK;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[3]);
            }
        }
//        stack2 = this;// JIT: redundant assigment, value unused
        // 7 1:interfaces:SoundHud::pauseClickHandler
        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
        stack2 = this.axGetProperty($names[4]);
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
                   stack0.axCallProperty($names[5], [stack1, stack2], false);
                }
            }
        }
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0::glassesButton
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::GlassesButton  */ 
        stack0 = this.$BgglassesButton;
        // 7 0:flash.events::MouseEvent
        temp = scope0.findScopeProperty($names[2], true, false);
        stack1 = temp.$BgMouseEvent;
        if (stack1 === undefined || typeof stack1 === 'function') {
            stack1 = temp.axGetProperty($names[2]);
        }
        // 7 0::CLICK
        //Possible type:7 0:flash.events::MouseEvent
        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
            stack1 = stack1['CLICK'];
        } else {
            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
            stack1 = temp.$BgCLICK;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[3]);
            }
        }
//        stack2 = this;// JIT: redundant assigment, value unused
        // 7 1:interfaces:SoundHud::glassesClickHandler
        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
        stack2 = this.axGetProperty($names[6]);
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
                   stack0.axCallProperty($names[5], [stack1, stack2], false);
                }
            }
        }
        return;
    }
//# sourceURL=http://jit/interfaces/SoundHud/m_showPause.js
})