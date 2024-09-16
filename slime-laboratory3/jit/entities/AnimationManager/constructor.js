(function anonymous(context
) {
/*
	Index: 199
	Path:  entities/AnimationManager::constructor
	Type:  Public
	Kind:  null
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_constructor(local1 /* Entity */) {
        // Possible use a real "this"
        // local2 is assigned before read, skip init
        let local2 = undefined
        // local3 is assigned before read, skip init
        let local3 = undefined
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
                        
                        local2 = undefined;
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local3 = 0;
                        stack0 = this;
                        context.savedScope.superConstructor.call(this, );
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:entities::Entity// JIT: redundant assigment, value unused
                        stack1 = local1;
                        // 7 3::entity
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:entities::Entity  */ 
                        this.$Bgentity = local1;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::Array
                        stack1 = scope0.findScopeProperty($names[0], true, false);
                        //JIT: Support fast construct:Array/Object
                        stack1 = context.constructFast(stack1, [], $names[0]);
                        // 7 0::animations
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Array  */ 
                        this.$Bganimations = stack1;
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        
                        local2 = 0;
                        { p = 83; continue; };
                    case 33:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::animations
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$Bganimations;
                        // 7 0::Array
                        stack1 = scope0.findScopeProperty($names[0], true, false);
                        //JIT: Support fast construct:Array/Object
                        stack1 = context.constructFast(stack1, [], $names[0]);
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
                                   stack0.axCallProperty($names[1], [stack1], false);
                                }
                            }
                        }
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local3 = 0;
                        { p = 71; continue; };
                    case 54:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::animations
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$Bganimations;
                        stack1 = local2;
                        // 27 {3, 0, 0:http://adobe.com/AS3/2006/builtin, 3, 0:entities, 2:entities, 1:entities:AnimationManager, 5:entities:AnimationManager}::*
                        {
                            let simple = local2;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[2], local2);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
//                        stack1 = -1;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(-1);
                        } else {
                            // 9 {3, 0, 0:http://adobe.com/AS3/2006/builtin, 3, 0:entities, 2:entities, 1:entities:AnimationManager, 5:entities:AnimationManager}::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, -1);
                                } else { 
                                   stack0.axCallProperty($names[3], [-1], false);
                                }
                            }
                        }
                        local3 = (local3 | 0) + 1;
                    case 71:
                        stack0 = local3;
                        // 7 0::AmountAction
                        temp = scope0.findScopeProperty($names[4], true, false);
                        stack1 = temp.$BgAmountAction;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[4]);
                        }
                        if (stack1 > local3) { p = 54; continue; };
                        stack0 = local2;
                        stack0++;
                        
                        local2 = stack0;
                    case 83:
                        stack0 = local2;
                        // 7 0::AmountState
                        temp = scope0.findScopeProperty($names[5], true, false);
                        stack1 = temp.$BgAmountState;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[5]);
                        }
                        if (stack1 > local2) { p = 33; continue; };
                        return;
                    }
                }
            }
//# sourceURL=http://jit/entities/AnimationManager/constructor.js
})