(function anonymous(context
) {
/*
	Index: 531
	Path:  game_utils/StateMachineNew::constructor
	Type:  Public
	Kind:  null
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;

             /* e */
             const flash_utils__Dictionary_def = context.getTopLevel(0); // flash.utils:Dictionary

    return function compiled_constructor(local1 /* int */ = 20, local2 /* int */ = 20) {
        // Possible use a real "this"
        /* Force int coerce */
        local1 = (local1|0);
        /* Force int coerce */
        local2 = (local2|0);
        // local3 is assigned before read, skip init
        let local3 = undefined
        // local4 is assigned before read, skip init
        let local4 = undefined
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
//                        stack0 = undefined;// JIT: redundant assigment, value unused
                        
                        local3 = undefined;
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local4 = 0;
                        stack0 = this;
                        context.savedScope.superConstructor.call(this, );
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:flash.utils::Dictionary
                        /* GenerateLexImports */
//                        stack1 = flash_utils__Dictionary_def;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:Dictionary/Object
                        stack1 = context.constructFast(flash_utils__Dictionary_def, [], $names[0]);
                        // 7 0::statesDictionary
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:flash.utils::Dictionary  */ 
                        this.$BgstatesDictionary = stack1;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:flash.utils::Dictionary
                        /* GenerateLexImports */
//                        stack1 = flash_utils__Dictionary_def;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:Dictionary/Object
                        stack1 = context.constructFast(flash_utils__Dictionary_def, [], $names[0]);
                        // 7 0::actionsDictionary
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:flash.utils::Dictionary  */ 
                        this.$BgactionsDictionary = stack1;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:flash.utils::Dictionary
                        /* GenerateLexImports */
//                        stack1 = flash_utils__Dictionary_def;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:Dictionary/Object
                        stack1 = context.constructFast(flash_utils__Dictionary_def, [], $names[0]);
                        // 7 0::functionsDictionary
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:flash.utils::Dictionary  */ 
                        this.$BgfunctionsDictionary = stack1;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = "";// JIT: redundant assigment, value unused
                        // 7 0::currentState
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::String  */ 
                        this.$BgcurrentState = "";
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = "";// JIT: redundant assigment, value unused
                        // 7 0::lastState
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::String  */ 
                        this.$BglastState = "";
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 0::statesCounter
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
                        this.$BgstatesCounter = 0;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 0::actionsCounter
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
                        this.$BgactionsCounter = 0;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 0::stateTimeCounter
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::uint  */ 
                        this.$BgstateTimeCounter = 0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::Array
                        stack1 = scope0.findScopeProperty($names[1], true, false);
                        //JIT: Support fast construct:Array/Object
                        stack1 = context.constructFast(stack1, [], $names[1]);
                        // 7 0::states
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Array  */ 
                        this.$Bgstates = stack1;
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        
                        local3 = 0;
                        { p = 143; continue; };
                    case 92:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::states
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$Bgstates;
                        // 7 0::Array
                        stack1 = scope0.findScopeProperty($names[1], true, false);
                        //JIT: Support fast construct:Array/Object
                        stack1 = context.constructFast(stack1, [], $names[1]);
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(stack1);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[2], [stack1], false);
                                }
                            }
                        }
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local4 = 0;
                        { p = 132; continue; };
                    case 114:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::states
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$Bgstates;
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
                                    const rm = context.runtimename($names[3], local3);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
//                        stack1 = "NONE";// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push("NONE");
                        } else {
                            // 9 {3, 0, 0:http://adobe.com/AS3/2006/builtin, 3, 0:game_utils, 2:game_utils, 1:game_utils:StateMachineNew, 5:game_utils:StateMachineNew}::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, "NONE");
                                } else { 
                                   stack0.axCallProperty($names[4], ["NONE"], false);
                                }
                            }
                        }
                        local4 = (local4 | 0) + 1;
                    case 132:
                        stack0 = local4;
                        // JIT: potential type:7 0::int
                        stack1 = local2;
                        if (local2 > local4) { p = 114; continue; };
                        stack0 = local3;
                        stack0++;
                        
                        local3 = stack0;
                    case 143:
                        stack0 = local3;
                        // JIT: potential type:7 0::int
                        stack1 = local1;
                        if (local1 > local3) { p = 92; continue; };
                        return;
                    }
                }
            }
//# sourceURL=http://jit/game_utils/StateMachineNew/constructor.js
})