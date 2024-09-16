(function anonymous(context
) {
/*
	Index: 1943
	Path:  interfaces/panels/GameTitlePanel::m_playAnimation
	Type:  Public
	Kind:  Method
	Super: flash/display/Sprite
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_playAnimation() {
        // Possible use a real "this"
        // local1 is assigned before read, skip init
        let local1 = undefined
        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        //IR: PUSHSCOPE removed, reason: unused
        // unreachable
//        stack0 = 0;// JIT: redundant assigment, value unused
        local1 = 0;
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0::titleSprite
        //Possible type:undefined
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::SplashTitle  */ 
        stack0 = this.$BgtitleSprite;
//        stack1 = 2;// JIT: redundant assigment, value unused
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
            stack0.gotoAndPlay(2);
        } else {
            // 7 0::gotoAndPlay
            {
                let t = stack0;
                const m = t.$BggotoAndPlay || (t = sec.box(stack0), t.$BggotoAndPlay);
                if( typeof m === "function" ) { 
                    m.call(t, 2);
                } else { 
                   stack0.axCallProperty($names[0], [2], false);
                }
            }
        }
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0::titleSprite
        //Possible type:7 0::SplashTitle
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::SplashTitle  */ 
        stack0 = this.$BgtitleSprite;
        // 7 0::gfxHandle
        //Possible type:7 0::SplashTitle
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
            stack0 = stack0['gfxHandle'];
        } else {
            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
            stack0 = temp.$BggfxHandle;
            if (stack0 === undefined || typeof stack0 === 'function') {
                stack0 = temp.axGetProperty($names[1]);
            }
        }
//        stack1 = 2;// JIT: redundant assigment, value unused
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
            stack0.gotoAndStop(2);
        } else {
            // 7 0::gotoAndStop
            {
                let t = stack0;
                const m = t.$BggotoAndStop || (t = sec.box(stack0), t.$BggotoAndStop);
                if( typeof m === "function" ) { 
                    m.call(t, 2);
                } else { 
                   stack0.axCallProperty($names[2], [2], false);
                }
            }
        }
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0::titleSprite
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::SplashTitle  */ 
        stack0 = this.$BgtitleSprite;
//        stack1 = this;// JIT: redundant assigment, value unused
        // 7 0::titleSprite
        //Possible type:undefined
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::SplashTitle  */ 
        stack1 = this.$BgtitleSprite;
        // 7 0::y
        //Possible type:7 0::SplashTitle
        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
            stack1 = stack1['y'];
        } else {
            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
            stack1 = temp.$Bgy;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[3]);
            }
        }
//        stack2 = 32;// JIT: redundant assigment, value unused
        stack1 -= 32;
        // 7 0::y
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.y = stack1;
        } else {
            context.setproperty($names[3], stack1, stack0);
        }
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = 0;// JIT: redundant assigment, value unused
        // 7 1:interfaces.panels:GameTitlePanel::t_tick
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
        this.$Bgt_tick = 0;
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = 0.5;// JIT: redundant assigment, value unused
        // 7 1:interfaces.panels:GameTitlePanel::t_time
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
        this.$Bgt_time = 0.5;
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = this;// JIT: redundant assigment, value unused
        // 7 0::titleSprite
        //Possible type:undefined
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::SplashTitle  */ 
        stack1 = this.$BgtitleSprite;
        // 7 0::y
        //Possible type:7 0::SplashTitle
        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
            stack1 = stack1['y'];
        } else {
            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
            stack1 = temp.$Bgy;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[3]);
            }
        }
        // 7 1:interfaces.panels:GameTitlePanel::t_start
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
        this.$Bgt_start = (+stack1);
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = 32;// JIT: redundant assigment, value unused
        // 7 1:interfaces.panels:GameTitlePanel::t_diff
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
        this.$Bgt_diff = 32;
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = 3;// JIT: redundant assigment, value unused
        // 7 1:interfaces.panels:GameTitlePanel::PROGRESSION
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
        this.$BgPROGRESSION = 3;
        return;
    }
//# sourceURL=http://jit/interfaces/panels/GameTitlePanel/m_playAnimation.js
})