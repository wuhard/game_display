(function anonymous(context
) {
/*
	Index: 532
	Path:  game_utils/StateMachineNew::m_destroy
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
                        //IR: PUSHSCOPE removed, reason: unused
                        // unreachable
//                        stack0 = undefined;// JIT: redundant assigment, value unused
                        
                        local1 = undefined;
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local2 = 0;
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        
                        local1 = 0;
                        { p = 69; continue; };
                    case 16:
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local2 = 0;
                        { p = 40; continue; };
                    case 24:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::states
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$Bgstates;
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
                        stack1 = local2;
                        stack2 = null;
                        context.setproperty(context.runtimename($names[0], local2), null, stack0);
                        local2 = (local2 | 0) + 1;
                    case 40:
                        stack0 = local2;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::states
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack1 = this.$Bgstates;
                        stack2 = local1;
                        // 27 {3, 0, 0:http://adobe.com/AS3/2006/builtin, 3, 0:game_utils, 2:game_utils, 1:game_utils:StateMachineNew, 5:game_utils:StateMachineNew}::*
                        {
                            let simple = local1;
                            const b_obj = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);

                            if (typeof simple === "number") {
                                stack1 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack1 = b_obj['$Bg' + simple];
                                if (stack1 === undefined || typeof stack1 === 'function') {
                                    const rm = context.runtimename($names[0], local1);
                                    stack1 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:http://adobe.com/AS3/2006/builtin, 3, 0:game_utils, 2:game_utils, 1:game_utils:StateMachineNew, 5:game_utils:StateMachineNew}::length
                        //Possible type:7 0::Array
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['length'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bglength;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[1]);
                            }
                        }
                        if (stack1 > local2) { p = 24; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::states
                        //Possible type:7 0::Array
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$Bgstates;
                        stack1 = local1;
                        stack2 = null;
                        context.setproperty(context.runtimename($names[0], local1), null, stack0);
                        stack0 = local1;
                        stack0++;
                        
                        local1 = stack0;
                    case 69:
                        stack0 = local1;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::states
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack1 = this.$Bgstates;
                        // 7 0::length
                        //Possible type:7 0::Array
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['length'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bglength;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[2]);
                            }
                        }
                        if (stack1 > local1) { p = 16; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = null;// JIT: redundant assigment, value unused
                        // 7 0::states
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Array  */ 
                        this.$Bgstates = null;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = null;// JIT: redundant assigment, value unused
                        // 7 0::currentState
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::String  */ 
                        this.$BgcurrentState = null;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = null;// JIT: redundant assigment, value unused
                        // 7 0::lastState
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::String  */ 
                        this.$BglastState = null;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = null;// JIT: redundant assigment, value unused
                        // 7 0::functionsDictionary
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:flash.utils::Dictionary  */ 
                        this.$BgfunctionsDictionary = null;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = null;// JIT: redundant assigment, value unused
                        // 7 0::actionsDictionary
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:flash.utils::Dictionary  */ 
                        this.$BgactionsDictionary = null;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = null;// JIT: redundant assigment, value unused
                        // 7 0::statesDictionary
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:flash.utils::Dictionary  */ 
                        this.$BgstatesDictionary = null;
                        return;
                    }
                }
            }
//# sourceURL=http://jit/game_utils/StateMachineNew/m_destroy.js
})