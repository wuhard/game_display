(function anonymous(context
) {
/*
	Index: 535
	Path:  game_utils/StateMachineNew::m_performAction
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;

             /* e */
             const __trace_def = context.getTopLevel(1); // :trace
             const flash_utils__getTimer_def = context.getTopLevel(2); // flash.utils:getTimer

    return function compiled_m_performAction(local1 /* String */) {
        // Possible use a real "this"
        /* Force String coerce */
        local1 = (local1==null?null:''+ local1);
        // local2 is assigned before read, skip init
        let local2 = undefined
        // local3 is assigned before read, skip init
        let local3 = undefined
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
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::actionsDictionary
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.utils::Dictionary  */ 
                        stack0 = this.$BgactionsDictionary;
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
                        if (null != stack0) { p = 25; continue; };
                        // 7 0::trace
                        /* GenerateLexImports */
//                        stack0 = __trace_def;// JIT: redundant assigment, value unused
//                        stack1 = "WARNING! Wrong action typed";// JIT: redundant assigment, value unused
                        if (!(_a = typeof __trace_def, ((_a !== 'object' && _a !== 'function' ) || __trace_def == null || __trace_def[AX_CLASS_SYMBOL]))) {
                            __trace_def.trace("WARNING! Wrong action typed");
                        } else {
                            // 7 0::trace
                            {
                                let t = __trace_def;
                                const m = t.$Bgtrace || (t = sec.box(__trace_def), t.$Bgtrace);
                                if( typeof m === "function" ) { 
                                    m.call(t, "WARNING! Wrong action typed");
                                } else { 
                                   __trace_def.axCallProperty($names[1], ["WARNING! Wrong action typed"], false);
                                }
                            }
                        }
                    case 25:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::states
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$Bgstates;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::statesDictionary
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.utils::Dictionary  */ 
                        stack1 = this.$BgstatesDictionary;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0::currentState
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::String  */ 
                        stack2 = this.$BgcurrentState;
                        // 27 {3, 0, 0:http://adobe.com/AS3/2006/builtin, 3, 0:game_utils, 2:game_utils, 1:game_utils:StateMachineNew, 5:game_utils:StateMachineNew}::*
                        {
                            let simple = stack2;
                            const b_obj = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);

                            if (typeof simple === "number") {
                                stack1 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack1 = b_obj['$Bg' + simple];
                                if (stack1 === undefined || typeof stack1 === 'function') {
                                    const rm = context.runtimename($names[0], stack2);
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
                        stack0 = context.axCoerceString(stack0);
                        local2 = stack0;
                        stack0 = local2;
                        stack1 = "NONE";
                        //JIT: Emit inline return
                        if ("NONE" == local2) { return; }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::currentState
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::String  */ 
                        stack1 = this.$BgcurrentState;
                        // 7 0::lastState
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::String  */ 
                        this.$BglastState = (stack1==null?null:''+ stack1);
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = local2;// JIT: redundant assigment, value unused
                        // 7 0::currentState
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::String  */ 
                        this.$BgcurrentState = (local2==null?null:''+ local2);
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::functionsDictionary
                        //Possible type:7 0::Array
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.utils::Dictionary  */ 
                        stack0 = this.$BgfunctionsDictionary;
                        stack1 = stack0;
                        local3 = stack1;
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
                        stack1 = local3;
                        stack0 = context.call(stack0, local3, [], scope0);
                        //IR: KILL removed, reason: prevent optimisation
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:flash.utils::getTimer
                        /* GenerateLexImports */
//                        stack1 = flash_utils__getTimer_def;// JIT: redundant assigment, value unused
                        if (!(_a = typeof flash_utils__getTimer_def, ((_a !== 'object' && _a !== 'function' ) || flash_utils__getTimer_def == null || flash_utils__getTimer_def[AX_CLASS_SYMBOL]))) {
                           stack1 = flash_utils__getTimer_def.getTimer();
                        } else {
                            // 7 0:flash.utils::getTimer
                            {
                                let t = flash_utils__getTimer_def;
                                const m = t.$BggetTimer || (t = sec.box(flash_utils__getTimer_def), t.$BggetTimer);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$BggetTimer ();
                                } else { 
                                    stack1 = flash_utils__getTimer_def.axCallProperty($names[2], [], false);
                                }
                            }
                        }
                        // 7 0::stateTimeCounter
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::uint  */ 
                        this.$BgstateTimeCounter = (stack1>>>0);
                    case 104:
                        return;
                    }
                }
            }
//# sourceURL=http://jit/game_utils/StateMachineNew/m_performAction.js
})