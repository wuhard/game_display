(function anonymous(context
) {
/*
	Index: 537
	Path:  game_utils/StateMachineNew::m_setState
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_setState(local1 /* String */) {
        // Possible use a real "this"
        /* Force String coerce */
        local1 = (local1==null?null:''+ local1);
        // local2 is assigned before read, skip init
        let local2 = undefined
        let stack0 = undefined;
        let stack1 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        stack0 = this;
        scope0 = context.savedScope.extend(this);
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = this;// JIT: redundant assigment, value unused
        // 7 0::currentState
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::String  */ 
        stack1 = this.$BgcurrentState;
        // 7 0::lastState
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::String  */ 
        this.$BglastState = (stack1==null?null:''+ stack1);
//        stack0 = this;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0::String// JIT: redundant assigment, value unused
        stack1 = local1;
        // 7 0::currentState
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::String  */ 
        this.$BgcurrentState = (local1==null?null:''+ local1);
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0::functionsDictionary
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.utils::Dictionary  */ 
        stack0 = this.$BgfunctionsDictionary;
        stack1 = stack0;
        local2 = stack1;
//        stack1 = this;// JIT: redundant assigment, value unused
        // 7 0::currentState
        //Possible type:7 0::String
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::String  */ 
        stack1 = this.$BgcurrentState;
        // 27 {3, 0, 0:http://adobe.com/AS3/2006/builtin, 3, 0:game_utils, 2:game_utils, 1:game_utils:StateMachineNew, 5:game_utils:StateMachineNew}::*
        {
            let simple = stack1;
            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

            if (typeof simple === "number") {
                stack0 = b_obj.axGetNumericProperty(simple);
            } else {
                stack0 = b_obj['$Bg' + simple];
                if (stack0 === undefined || typeof stack0 === 'function') {
                    const rm = context.runtimename($names[0], stack1);
                    stack0 = b_obj.axGetProperty(rm);
                }
            }
        }
        stack1 = local2;
        stack0 = context.call(stack0, local2, [], scope0);
        //IR: KILL removed, reason: prevent optimisation
        return;
    }
//# sourceURL=http://jit/game_utils/StateMachineNew/m_setState.js
})