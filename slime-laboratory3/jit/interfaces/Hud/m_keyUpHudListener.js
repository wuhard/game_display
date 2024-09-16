(function anonymous(context
) {
/*
	Index: 651
	Path:  interfaces/Hud::m_keyUpHudListener
	Type:  Protected
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_keyUpHudListener(local1 /* KeyboardEvent */) {
        // Possible use a real "this"
        // local2 is assigned before read, skip init
        let local2 = undefined
        // local3 is assigned before read, skip init
        let local3 = undefined
        let stack0 = undefined;
        let stack1 = undefined;
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
//                        stack0 = false;// JIT: redundant assigment, value unused
                        local2 = false;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:Hud::IS_CHECKPOINT_STAYING
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgIS_CHECKPOINT_STAYING;
                        if (!stack0) { p = 30; continue; };
//                        stack0 = true;// JIT: redundant assigment, value unused
                        local2 = true;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack1 = temp.$BgUtils;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::REWARD_CHECKPOINT
                        //Possible type:7 0::Utils
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['REWARD_CHECKPOINT'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgREWARD_CHECKPOINT;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[1]);
                            }
                        }
                        // 7 0::REWARD_AD_TYPE
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.REWARD_AD_TYPE = stack1;
                        } else {
                            context.setproperty($names[2], stack1, stack0);
                        }
                        { p = 64; continue; };
                    case 30:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:Hud::IS_SKIP_STAYING
                        //Possible type:7 0::Utils
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgIS_SKIP_STAYING;
                        stack0 = !!stack0;
                        stack1 = stack0;
                        if (!stack1) { p = 46; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:Hud::SKIP_REWARD_GRANTED
                        //Possible type:7 0::Boolean
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgSKIP_REWARD_GRANTED;
                        stack0 = !stack0;
                    case 46:
                        if (!stack0) { p = 64; continue; };
//                        stack0 = true;// JIT: redundant assigment, value unused
                        local2 = true;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack1 = temp.$BgUtils;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::REWARD_SKIP_LEVEL
                        //Possible type:7 0::Utils
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['REWARD_SKIP_LEVEL'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgREWARD_SKIP_LEVEL;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[3]);
                            }
                        }
                        // 7 0::REWARD_AD_TYPE
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.REWARD_AD_TYPE = stack1;
                        } else {
                            context.setproperty($names[2], stack1, stack0);
                        }
                    case 64:
                        stack0 = local2;
                        if (local2) { p = 70; continue; };
                        return;
                    case 70:
                        { p = 106; continue; };
                    case 74:
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:Hud::SKIP_REWARD_GRANTED
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgSKIP_REWARD_GRANTED = false;
                        // 7 0:levels::Level
                        temp = scope0.findScopeProperty($names[4], true, false);
                        stack0 = temp.$BgLevel;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[4]);
                        }
//                        stack1 = 30;// JIT: redundant assigment, value unused
                        // 7 0::PAUSE_ON_DELAY
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.PAUSE_ON_DELAY = 30;
                        } else {
                            context.setproperty($names[5], 30, stack0);
                        }
                        // 7 0:com.poki::PokiFlashSDK
                        temp = scope0.findScopeProperty($names[6], true, false);
                        stack0 = temp.$BgPokiFlashSDK;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[6]);
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.instance();
                        } else {
                            // 7 0::instance
                            {
                                let t = stack0;
                                const m = t.$Bginstance || (t = sec.box(stack0), t.$Bginstance);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$Bginstance ();
                                } else { 
                                    stack0 = stack0.axCallProperty($names[7], [], false);
                                }
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.rewardedBreak();
                        } else {
                            // 7 0::rewardedBreak
                            {
                                let t = stack0;
                                const m = t.$BgrewardedBreak || (t = sec.box(stack0), t.$BgrewardedBreak);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[8], [], false);
                                }
                            }
                        }
                        //JIT: Emit inline return
                        return;
                    case 101:
                        //JIT: Emit inline return
                        return;
                    case 106:
//                        // JIT: potential type:7 0:flash.events::KeyboardEvent// JIT: redundant assigment, value unused
                        stack0 = local1;
                        // 7 0::keyCode
                        //Possible type:7 0:com.poki::PokiFlashSDK
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack0 = local1['keyCode'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack0 = temp.$BgkeyCode;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[9]);
                            }
                        }
                        local3 = stack0;
                        stack0 = 32;
                        stack1 = local3;
                        if (local3 !== 32) { p = 124; continue; };
                        stack0 = 0;
                        { p = 136; continue; };
                    case 124:
                        { p = 134; continue; };
                        // unreachable
                        // unreachable
                    case 134:
                        stack0 = 1;
                    case 136:
                        //IR: KILL removed, reason: prevent optimisation
                        if (stack0 >= 0 && stack0 < 2) { p = [74, 101][stack0]; continue; } else { p = 101; continue; };
                    case 149:
                        return;
                    }
                }
            }
//# sourceURL=http://jit/interfaces/Hud/m_keyUpHudListener.js
})