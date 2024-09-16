(function anonymous(context
) {
/*
	Index: 803
	Path:  game_utils/Easings.easeInOutCircular
	Type:  Public
	Kind:  Method
	Super: -
	Return: 7 0::Number
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;

             /* e */
             const __Math = context.getTopLevel(0)['$BgMath']; // :Math

    return function compiled_easeInOutCircular(local1 /* Number */, local2 /* Number */, local3 /* Number */, local4 /* Number */) {
        // Possible use a real "this"
        /* Force Number coerce */
        local1 = (+local1);
        /* Force Number coerce */
        local2 = (+local2);
        /* Force Number coerce */
        local3 = (+local3);
        /* Force Number coerce */
        local4 = (+local4);
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
                        stack0 = this;
                        scope0 = context.savedScope.extend(this);
                        // JIT: potential type:7 0::Number
                        stack0 = local1;
                        // JIT: potential type:7 0::Number
                        stack1 = local4;
//                        stack2 = 2;// JIT: redundant assigment, value unused
                        stack1 /= 2;
                        stack0 /= stack1;
                        stack1 = stack0;
                        local5 = stack1;
                        stack0 = +stack0;
                        local1 = stack0;
                        stack0 = local5;
                        //IR: KILL removed, reason: prevent optimisation
                        stack1 = 1;
                        if (!(1 > local5)) { p = 47; continue; };
                        // JIT: potential type:7 0::Number
                        stack0 = local3;
                        stack0 = -local3;
//                        stack1 = 2;// JIT: redundant assigment, value unused
                        stack0 /= 2;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack1 = __Math;// JIT: redundant assigment, value unused
                        stack2 = 1;
                        // JIT: potential type:7 0::Number
                        stack3 = local1;
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack4 = local1;
                        stack3 *= local1;
                        stack2 -= stack3;
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack1 = __Math.sqrt(stack2);
                        } else {
                            // 7 0::sqrt
                            {
                                let t = __Math;
                                const m = t.$Bgsqrt || (t = sec.box(__Math), t.$Bgsqrt);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$Bgsqrt (stack2);
                                } else { 
                                    stack1 = __Math.axCallProperty($names[1], [stack2], false);
                                }
                            }
                        }
                        stack1--;
                        stack0 *= stack1;
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack1 = local2;
                        stack0 += local2;
                        return (+stack0);
                    case 47:
                        // JIT: potential type:7 0::Number
                        stack0 = local3;
//                        stack1 = 2;// JIT: redundant assigment, value unused
                        stack0 /= 2;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack1 = __Math;// JIT: redundant assigment, value unused
                        stack2 = 1;
                        // JIT: potential type:7 0::Number
                        stack3 = local1;
//                        stack4 = 2;// JIT: redundant assigment, value unused
                        stack3 -= 2;
                        stack4 = stack3;
                        local5 = stack4;
                        stack3 = +stack3;
                        local1 = stack3;
                        stack3 = local5;
                        //IR: KILL removed, reason: prevent optimisation
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack4 = local1;
                        stack3 *= local1;
                        stack2 -= stack3;
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack1 = __Math.sqrt(stack2);
                        } else {
                            // 7 0::sqrt
                            {
                                let t = __Math;
                                const m = t.$Bgsqrt || (t = sec.box(__Math), t.$Bgsqrt);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$Bgsqrt (stack2);
                                } else { 
                                    stack1 = __Math.axCallProperty($names[1], [stack2], false);
                                }
                            }
                        }
//                        stack2 = 1;// JIT: redundant assigment, value unused
                        stack1 += 1;
                        stack0 *= stack1;
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack1 = local2;
                        stack0 += local2;
                        return (+stack0);
                    }
                }
            }
//# sourceURL=http://jit/game_utils/Easings/easeInOutCircular.js
})