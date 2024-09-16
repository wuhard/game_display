(function anonymous(context
) {
/*
	Index: 533
	Path:  game_utils/StateMachineNew::m_setRule
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_setRule(local1 /* String */, local2 /* String */, local3 /* String */) {
        // Possible use a real "this"
        /* Force String coerce */
        local1 = (local1==null?null:''+ local1);
        /* Force String coerce */
        local2 = (local2==null?null:''+ local2);
        /* Force String coerce */
        local3 = (local3==null?null:''+ local3);
        // local4 is assigned before read, skip init
        let local4 = undefined
        // local5 is assigned before read, skip init
        let local5 = undefined
        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
        let stack3 = undefined;
        let stack4 = undefined;
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
                        // 7 0::statesDictionary
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.utils::Dictionary  */ 
                        stack0 = this.$BgstatesDictionary;
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
                        if (null != stack0) { p = 45; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::statesDictionary
                        //Possible type:7 0:flash.utils::Dictionary
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.utils::Dictionary  */ 
                        stack0 = this.$BgstatesDictionary;
                        // JIT: potential type:7 0::String
                        stack1 = local1;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        stack3 = this;
                        local4 = stack3;
                        // 7 0::statesCounter
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack2 = this.$BgstatesCounter;
                        stack3 = stack2;
                        stack3 = (stack3 | 0) + 1;
                        local5 = stack3;
//                        stack3 = local4;// JIT: redundant assigment, value unused
//                        stack4 = local5;// JIT: redundant assigment, value unused
                        // 7 0::statesCounter
                        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])){
                            local4.statesCounter = local5;
                        } else {
                            context.setproperty($names[1], local5, local4);
                        }
                        //IR: KILL removed, reason: prevent optimisation
                        //IR: KILL removed, reason: prevent optimisation
                        context.setproperty(context.runtimename($names[0], local1), stack2, stack0);
                    case 45:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::statesDictionary
                        //Possible type:7 0:flash.utils::Dictionary
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.utils::Dictionary  */ 
                        stack0 = this.$BgstatesDictionary;
                        // JIT: potential type:7 0::String
                        stack1 = local3;
                        // 27 {3, 0, 0:http://adobe.com/AS3/2006/builtin, 3, 0:game_utils, 2:game_utils, 1:game_utils:StateMachineNew, 5:game_utils:StateMachineNew}::*
                        {
                            let simple = local3;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[0], local3);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        stack1 = null;
                        if (null != stack0) { p = 88; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::statesDictionary
                        //Possible type:7 0:flash.utils::Dictionary
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.utils::Dictionary  */ 
                        stack0 = this.$BgstatesDictionary;
                        // JIT: potential type:7 0::String
                        stack1 = local3;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        stack3 = this;
                        local4 = stack3;
                        // 7 0::statesCounter
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack2 = this.$BgstatesCounter;
                        stack3 = stack2;
                        stack3 = (stack3 | 0) + 1;
                        local5 = stack3;
//                        stack3 = local4;// JIT: redundant assigment, value unused
//                        stack4 = local5;// JIT: redundant assigment, value unused
                        // 7 0::statesCounter
                        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])){
                            local4.statesCounter = local5;
                        } else {
                            context.setproperty($names[1], local5, local4);
                        }
                        //IR: KILL removed, reason: prevent optimisation
                        //IR: KILL removed, reason: prevent optimisation
                        context.setproperty(context.runtimename($names[0], local3), stack2, stack0);
                    case 88:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::actionsDictionary
                        //Possible type:7 0:flash.utils::Dictionary
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.utils::Dictionary  */ 
                        stack0 = this.$BgactionsDictionary;
                        // JIT: potential type:7 0::String
                        stack1 = local2;
                        // 27 {3, 0, 0:http://adobe.com/AS3/2006/builtin, 3, 0:game_utils, 2:game_utils, 1:game_utils:StateMachineNew, 5:game_utils:StateMachineNew}::*
                        {
                            let simple = local2;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[0], local2);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        stack1 = null;
                        if (null != stack0) { p = 131; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::actionsDictionary
                        //Possible type:7 0:flash.utils::Dictionary
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.utils::Dictionary  */ 
                        stack0 = this.$BgactionsDictionary;
                        // JIT: potential type:7 0::String
                        stack1 = local2;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        stack3 = this;
                        local4 = stack3;
                        // 7 0::actionsCounter
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack2 = this.$BgactionsCounter;
                        stack3 = stack2;
                        stack3 = (stack3 | 0) + 1;
                        local5 = stack3;
//                        stack3 = local4;// JIT: redundant assigment, value unused
//                        stack4 = local5;// JIT: redundant assigment, value unused
                        // 7 0::actionsCounter
                        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])){
                            local4.actionsCounter = local5;
                        } else {
                            context.setproperty($names[2], local5, local4);
                        }
                        //IR: KILL removed, reason: prevent optimisation
                        //IR: KILL removed, reason: prevent optimisation
                        context.setproperty(context.runtimename($names[0], local2), stack2, stack0);
                    case 131:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::states
                        //Possible type:7 0:flash.utils::Dictionary
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$Bgstates;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::statesDictionary
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.utils::Dictionary  */ 
                        stack1 = this.$BgstatesDictionary;
                        // JIT: potential type:7 0::String
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
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::actionsDictionary
                        //Possible type:7 0:flash.utils::Dictionary
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.utils::Dictionary  */ 
                        stack1 = this.$BgactionsDictionary;
                        // JIT: potential type:7 0::String
                        stack2 = local2;
                        // 27 {3, 0, 0:http://adobe.com/AS3/2006/builtin, 3, 0:game_utils, 2:game_utils, 1:game_utils:StateMachineNew, 5:game_utils:StateMachineNew}::*
                        {
                            let simple = local2;
                            const b_obj = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);

                            if (typeof simple === "number") {
                                stack1 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack1 = b_obj['$Bg' + simple];
                                if (stack1 === undefined || typeof stack1 === 'function') {
                                    const rm = context.runtimename($names[0], local2);
                                    stack1 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // JIT: potential type:7 0::String
                        stack2 = local3;
                        context.setproperty(context.runtimename($names[0], stack1), local3, stack0);
                        return;
                    }
                }
            }
//# sourceURL=http://jit/game_utils/StateMachineNew/m_setRule.js
})