(function anonymous(context
) {
/*
	Index: 201
	Path:  entities/AnimationManager::m_setRule
	Type:  Public
	Kind:  Method
	Super: Object
	Return: *
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_setRule(local1 /* int */, local2 /* int */, local3 /* int */) {
        // Possible use a real "this"
        /* Force int coerce */
        local1 = (local1|0);
        /* Force int coerce */
        local2 = (local2|0);
        /* Force int coerce */
        local3 = (local3|0);

        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        //IR: PUSHSCOPE removed, reason: unused
        // unreachable
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0::animations
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
        stack0 = this.$Bganimations;
        // JIT: potential type:7 0::int
        stack1 = local1;
        // 27 {3, 0, 0:http://adobe.com/AS3/2006/builtin, 3, 0:entities, 2:entities, 1:entities:AnimationManager, 5:entities:AnimationManager}::*
        {
            let simple = local1;
            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

            if (typeof simple === "number") {
                stack0 = b_obj.axGetNumericProperty(simple);
            } else {
                stack0 = b_obj['$Bg' + simple];
                if (stack0 === undefined || typeof stack0 === 'function') {
                    const rm = context.runtimename($names[0], local1);
                    stack0 = b_obj.axGetProperty(rm);
                }
            }
        }
        // JIT: potential type:7 0::int
        stack1 = local2;
        // JIT: potential type:7 0::int
        stack2 = local3;
        context.setproperty(context.runtimename($names[0], local2), local3, stack0);
        return;
    }
//# sourceURL=http://jit/entities/AnimationManager/m_setRule.js
})