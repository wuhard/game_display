(function anonymous(context
) {
/*
	Index: 200
	Path:  entities/AnimationManager::m_destroy
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_destroy() {
        // Possible use a real "this"
        // local1 is assigned before read, skip init
        let local1 = undefined
        // local2 is assigned before read, skip init
        let local2 = undefined
        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
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
//                        stack0 = undefined;// JIT: redundant assigment, value unused
                        
                        local1 = undefined;
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local2 = 0;
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        
                        local1 = 0;
                        { p = 30; continue; };
                    case 16:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::animations
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$Bganimations;
                        stack1 = local1;
                        stack2 = null;
                        context.setproperty(context.runtimename($names[0], local1), null, stack0);
                        stack0 = local1;
                        stack0++;
                        
                        local1 = stack0;
                    case 30:
                        stack0 = local1;
                        // 7 0::AmountState
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack1 = temp.$BgAmountState;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[1]);
                        }
                        if (stack1 > local1) { p = 16; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = null;// JIT: redundant assigment, value unused
                        // 7 0::animations
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Array  */ 
                        this.$Bganimations = null;
                        return;
                    }
                }
            }
//# sourceURL=http://jit/entities/AnimationManager/m_destroy.js
})