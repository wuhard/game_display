(function anonymous(context
) {
/*
	Index: 534
	Path:  game_utils/StateMachineNew::m_setFunctionToState
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_setFunctionToState(local1 /* String */, local2 /* Function */) {
        // Possible use a real "this"
        /* Force String coerce */
        local1 = (local1==null?null:''+ local1);

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
                        //IR: PUSHSCOPE removed, reason: unused
                        // unreachable
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::functionsDictionary
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.utils::Dictionary  */ 
                        stack0 = this.$BgfunctionsDictionary;
                        // JIT: potential type:7 0::String
                        stack1 = local1;
                        // 27 {3, 0, 0:http://adobe.com/AS3/2006/builtin, 3, 0:game_utils, 2:game_utils, 1:game_utils:StateMachineNew, 5:game_utils:StateMachineNew}::*
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
                        stack1 = null;
                        //JIT: Emit inline return
                        if (null != stack0) { return; }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::functionsDictionary
                        //Possible type:7 0:flash.utils::Dictionary
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.utils::Dictionary  */ 
                        stack0 = this.$BgfunctionsDictionary;
                        // JIT: potential type:7 0::String
                        stack1 = local1;
                        // JIT: potential type:7 0::Function
                        stack2 = local2;
                        context.setproperty(context.runtimename($names[0], local1), local2, stack0);
                    case 24:
                        return;
                    }
                }
            }
//# sourceURL=http://jit/game_utils/StateMachineNew/m_setFunctionToState.js
})