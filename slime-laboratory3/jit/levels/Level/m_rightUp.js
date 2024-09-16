(function anonymous(context
) {
/*
	Index: 187
	Path:  levels/Level::m_rightUp
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_rightUp() {
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
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::rightPressed
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgrightPressed = false;
                        return;
                    }
                }
            }
//# sourceURL=http://jit/levels/Level/m_rightUp.js
})