(function anonymous(context
) {
/*
	Index: 192
	Path:  levels/Level::m_focusOutHandler
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_focusOutHandler(local1 /* Event */) {
        // Possible use a real "this"

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
                        // 7 0:levels::Level
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgLevel;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::PAUSE_ON_DELAY
                        //Possible type:7 0:levels::Level
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['PAUSE_ON_DELAY'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgPAUSE_ON_DELAY;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[1]);
                            }
                        }
                        stack1 = 0;
                        if (!(0 < stack0)) { p = 14; continue; };
                        return;
                    case 14:
                        // 7 0::initialDelay
                        temp = scope0.findScopeProperty($names[2], true, false);
                        stack0 = temp.$BginitialDelay;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[2]);
                        }
                        stack1 = 0;
                        if (!(0 < stack0)) { p = 24; continue; };
                        return;
                    case 24:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::FREEZE_FLAG
                        //Possible type:7 0::initialDelay
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgFREEZE_FLAG;
                        stack0 = !stack0;
                        stack1 = stack0;
                        if (!stack1) { p = 40; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::GAME_OVER_FLAG
                        //Possible type:7 0::Boolean
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgGAME_OVER_FLAG;
                        stack0 = !stack0;
                    case 40:
                        stack1 = stack0;
                        if (!stack1) { p = 51; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::LEVEL_WON_FLAG
                        //Possible type:7 0::Boolean
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgLEVEL_WON_FLAG;
                        stack0 = !stack0;
                    case 51:
                        stack1 = stack0;
                        if (!stack1) { p = 61; continue; };
                        // 7 0::IS_AD_ON
                        temp = scope0.findScopeProperty($names[3], true, false);
                        stack0 = temp.$BgIS_AD_ON;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[3]);
                        }
                        stack0 = !stack0;
                    case 61:
                        //JIT: Emit inline return
                        if (!stack0) { return; }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[4], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[4]);
                        }
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::PauseOn
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.PauseOn = true;
                        } else {
                            context.setproperty($names[5], true, stack0);
                        }
                    case 72:
                        return;
                    }
                }
            }
//# sourceURL=http://jit/levels/Level/m_focusOutHandler.js
})