(function anonymous(context
) {
/*
	Index: 961
	Path:  states/LevelState::m_callBackRewardedBreak
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_callBackRewardedBreak(local1 /* Boolean */) {
        // Possible use a real "this"
        /* Force Boolean coerce */
        local1 = (!!local1);
        // local2 is assigned before read, skip init
        let local2 = undefined
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
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local2 = 0;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::REWARD_AD_TYPE
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['REWARD_AD_TYPE'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgREWARD_AD_TYPE;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[1]);
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack1 = temp.$BgUtils;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::REWARD_SKIN
                        //Possible type:7 0::Utils
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['REWARD_SKIN'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgREWARD_SKIN;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[2]);
                            }
                        }
                        //JIT: Emit inline return
                        if (stack1 != stack0) { return; }
                        // JIT: potential type:7 0::Boolean
                        stack0 = local1;
                        stack1 = false;
                        if (false != local1) { p = 61; continue; };
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::ADS_BLOCKED
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.ADS_BLOCKED = true;
                        } else {
                            context.setproperty($names[3], true, stack0);
                        }
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
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::LEVEL_WON
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgLEVEL_WON = true;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::levelEnd
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BglevelEnd = true;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 4;// JIT: redundant assigment, value unused
                        // 7 0::choice
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
                        this.$Bgchoice = 4;
                        //JIT: Emit inline return
                        return;
                    case 61:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        stack0 = this.$BgunlockSkin();
                        stack0 |= 0;
                        local2 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 58;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::exit_level_counter
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
                        this.$Bgexit_level_counter = 58;
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
                    case 81:
                        return;
                    }
                }
            }
//# sourceURL=http://jit/states/LevelState/m_callBackRewardedBreak.js
})