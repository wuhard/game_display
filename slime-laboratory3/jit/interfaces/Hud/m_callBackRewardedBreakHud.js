(function anonymous(context
) {
/*
	Index: 650
	Path:  interfaces/Hud::m_callBackRewardedBreakHud
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_callBackRewardedBreakHud(local1 /* Boolean */) {
        // Possible use a real "this"
        /* Force Boolean coerce */
        local1 = (!!local1);

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
                        // JIT: potential type:7 0::Boolean
                        stack0 = local1;
                        stack1 = false;
                        if (false != local1) { p = 26; continue; };
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
                            context.setproperty($names[1], true, stack0);
                        }
                        // 7 0:levels::Level
                        temp = scope0.findScopeProperty($names[2], true, false);
                        stack0 = temp.$BgLevel;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[2]);
                        }
//                        stack1 = 30;// JIT: redundant assigment, value unused
                        // 7 0::PAUSE_ON_DELAY
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.PAUSE_ON_DELAY = 30;
                        } else {
                            context.setproperty($names[3], 30, stack0);
                        }
                        //JIT: Emit inline return
                        return;
                    case 26:
                        // 7 0:levels::Level
                        temp = scope0.findScopeProperty($names[2], true, false);
                        stack0 = temp.$BgLevel;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[2]);
                        }
//                        stack1 = 30;// JIT: redundant assigment, value unused
                        // 7 0::PAUSE_ON_DELAY
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.PAUSE_ON_DELAY = 30;
                        } else {
                            context.setproperty($names[3], 30, stack0);
                        }
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
                                stack0 = temp.axGetProperty($names[4]);
                            }
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
                                stack1 = temp.axGetProperty($names[5]);
                            }
                        }
                        if (stack1 != stack0) { p = 73; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:Hud::SKIP_REWARD_GRANTED
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgSKIP_REWARD_GRANTED = true;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::SKIP_LEVEL_REWARD
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.SKIP_LEVEL_REWARD = true;
                        } else {
                            context.setproperty($names[6], true, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:Hud::level
                        //Possible type:7 0::Utils
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack0 = this.$Bglevel;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.completed();
                        } else {
                            // 7 0::completed
                            {
                                let t = stack0;
                                const m = t.$Bgcompleted || (t = sec.box(stack0), t.$Bgcompleted);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[7], [], false);
                                }
                            }
                        }
                        //JIT: Emit inline return
                        return;
                    case 73:
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
                                stack0 = temp.axGetProperty($names[4]);
                            }
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
                                stack1 = temp.axGetProperty($names[8]);
                            }
                        }
                        //JIT: Emit inline return
                        if (stack1 != stack0) { return; }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:Hud::checkpointCollisionToUnlock
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels.collisions::CheckpointCollision  */ 
                        stack0 = this.$BgcheckpointCollisionToUnlock;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.unlockCheckpoint();
                        } else {
                            // 7 0::unlockCheckpoint
                            {
                                let t = stack0;
                                const m = t.$BgunlockCheckpoint || (t = sec.box(stack0), t.$BgunlockCheckpoint);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[9], [], false);
                                }
                            }
                        }
                    case 97:
                        return;
                    }
                }
            }
//# sourceURL=http://jit/interfaces/Hud/m_callBackRewardedBreakHud.js
})