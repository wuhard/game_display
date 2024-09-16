(function anonymous(context
) {
/*
	Index: 180
	Path:  levels/Level::m_downKeyDown
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_downKeyDown() {
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
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::FREEZE_FLAG
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgFREEZE_FLAG;
                        stack0 = !!stack0;
                        stack1 = stack0;
                        if (!stack1) { p = 19; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::RESTORE_CHECKPOINT_FLAG
                        //Possible type:7 0::Boolean
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgRESTORE_CHECKPOINT_FLAG;
                        stack1 = false;
                        stack0 = stack0 == false;
                    case 19:
                        stack1 = stack0;
                        if (stack1) { p = 31; continue; };
                        // 7 0::initialDelay
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BginitialDelay;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
                        stack1 = 0;
                        stack0 = stack0 > 0;
                    case 31:
                        if (!stack0) { p = 36; continue; };
                        return;
                    case 36:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::downPressed
                        //Possible type:7 0::initialDelay
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgdownPressed;
                        if (stack0) { p = 73; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::SPLITTED_FLAG
                        //Possible type:7 0::Boolean
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgSPLITTED_FLAG;
                        if (!stack0) { p = 56; continue; };
                        { p = 73; continue; };
                    case 56:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::hero
                        //Possible type:7 0::Boolean
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::Hero  */ 
                        stack0 = this.$Bghero;
                        // 7 0::animationManager
                        //Possible type:7 0:entities::Hero
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['animationManager'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BganimationManager;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[1]);
                            }
                        }
                        // 7 0:entities::AnimationManager
                        temp = scope0.findScopeProperty($names[2], true, false);
                        stack1 = temp.$BgAnimationManager;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[2]);
                        }
                        // 7 0::DownKeyPressedAction
                        //Possible type:7 0:entities::AnimationManager
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['DownKeyPressedAction'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgDownKeyPressedAction;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[3]);
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.performAction(stack1);
                        } else {
                            // 7 0::performAction
                            {
                                let t = stack0;
                                const m = t.$BgperformAction || (t = sec.box(stack0), t.$BgperformAction);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[4], [stack1], false);
                                }
                            }
                        }
                    case 73:
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::downPressed
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgdownPressed = true;
                        return;
                    }
                }
            }
//# sourceURL=http://jit/levels/Level/m_downKeyDown.js
})