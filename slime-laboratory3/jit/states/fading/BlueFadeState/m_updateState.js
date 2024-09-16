(function anonymous(context
) {
/*
	Index: 1058
	Path:  states/fading/BlueFadeState::m_updateState
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_updateState(local1 /* Game */) {
        // Possible use a real "this"
        // local2 is assigned before read, skip init
        let local2 = undefined
        // local3 is assigned before read, skip init
        let local3 = undefined
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
                                stack0 = temp.axGetProperty($names[1]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 3::fader
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::BluePanel  */ 
                        stack1 = this.$Bgfader;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack2 = temp.$BgUtils;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::rootMovie
                        //Possible type:7 0::Utils
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['rootMovie'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$BgrootMovie;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[1]);
                            }
                        }
                        // 7 0::numChildren
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['numChildren'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$BgnumChildren;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[2]);
                            }
                        }
                        stack2--;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.setChildIndex(stack1, stack2);
                        } else {
                            // 7 0::setChildIndex
                            {
                                let t = stack0;
                                const m = t.$BgsetChildIndex || (t = sec.box(stack0), t.$BgsetChildIndex);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1, stack2);
                                } else { 
                                   stack0.axCallProperty($names[3], [stack1, stack2], false);
                                }
                            }
                        }
//                        // JIT: potential type:7 0::Game// JIT: redundant assigment, value unused
                        stack0 = local1;
                        // 7 0::fadingOut
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack0 = local1['fadingOut'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack0 = temp.$BgfadingOut;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[4]);
                            }
                        }
                        if (!stack0) { p = 80; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::fader
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::BluePanel  */ 
                        stack0 = this.$Bgfader;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 3::fader
                        //Possible type:7 0::BluePanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::BluePanel  */ 
                        stack1 = this.$Bgfader;
                        // 7 0::alpha
                        //Possible type:7 0::BluePanel
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['alpha'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgalpha;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[5]);
                            }
                        }
//                        stack2 = 0.16;// JIT: redundant assigment, value unused
                        stack1 += 0.16;
                        // 7 0::alpha
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.alpha = stack1;
                        } else {
                            context.setproperty($names[5], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::fader
                        //Possible type:7 0::BluePanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::BluePanel  */ 
                        stack0 = this.$Bgfader;
                        // 7 0::alpha
                        //Possible type:7 0::BluePanel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['alpha'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgalpha;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[5]);
                            }
                        }
                        stack1 = 1;
                        if (!(1 <= stack0)) { p = 76; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::fader
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::BluePanel  */ 
                        stack0 = this.$Bgfader;
//                        stack1 = 1;// JIT: redundant assigment, value unused
                        // 7 0::alpha
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.alpha = 1;
                        } else {
                            context.setproperty($names[5], 1, stack0);
                        }
//                        // JIT: potential type:7 0::Game// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::FADE_OUT_FLAG
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])){
                            local1.FADE_OUT_FLAG = true;
                        } else {
                            context.setproperty($names[6], true, local1);
                        }
                    case 76:
                        //JIT: Emit inline return
                        return;
                    case 80:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        stack1 = this;
                        local2 = stack1;
                        // 7 3::delayCounter
                        //Possible type:7 0::BluePanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack0 = this.$BgdelayCounter;
                        stack1 = stack0;
                        stack1 = (stack1 | 0) + 1;
                        local3 = stack1;
//                        stack1 = local2;// JIT: redundant assigment, value unused
//                        stack2 = local3;// JIT: redundant assigment, value unused
                        // 7 3::delayCounter
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])){
                            local2.delayCounter = local3;
                        } else {
                            context.setproperty($names[7], local3, local2);
                        }
                        //IR: KILL removed, reason: prevent optimisation
                        //IR: KILL removed, reason: prevent optimisation
                        stack1 = 1;
                        //JIT: Emit inline return
                        if (!(1 < stack0)) { return; }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 3::delayCounter
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
                        this.$BgdelayCounter = 0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::fader
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::BluePanel  */ 
                        stack0 = this.$Bgfader;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 3::fader
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::BluePanel  */ 
                        stack1 = this.$Bgfader;
                        // 7 0::alpha
                        //Possible type:7 0::BluePanel
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['alpha'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgalpha;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[5]);
                            }
                        }
//                        stack2 = 0.3;// JIT: redundant assigment, value unused
                        stack1 -= 0.3;
                        // 7 0::alpha
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.alpha = stack1;
                        } else {
                            context.setproperty($names[5], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::fader
                        //Possible type:7 0::BluePanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::BluePanel  */ 
                        stack0 = this.$Bgfader;
                        // 7 0::alpha
                        //Possible type:7 0::BluePanel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['alpha'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgalpha;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[5]);
                            }
                        }
                        stack1 = 0;
                        //JIT: Emit inline return
                        if (!(0 >= stack0)) { return; }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::fader
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::BluePanel  */ 
                        stack0 = this.$Bgfader;
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 0::alpha
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.alpha = 0;
                        } else {
                            context.setproperty($names[5], 0, stack0);
                        }
//                        // JIT: potential type:7 0::Game// JIT: redundant assigment, value unused
                        stack0 = local1;
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                            local1.removeFader();
                        } else {
                            // 7 0::removeFader
                            {
                                let t = local1;
                                const m = t.$BgremoveFader || (t = sec.box(local1), t.$BgremoveFader);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   local1.axCallProperty($names[8], [], false);
                                }
                            }
                        }
                    case 154:
                        return;
                    }
                }
            }
//# sourceURL=http://jit/states/fading/BlueFadeState/m_updateState.js
})