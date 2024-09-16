(function anonymous(context
) {
/*
	Index: 799
	Path:  game_utils/Easings.easeOutElastic
	Type:  Public
	Kind:  Method
	Super: -
	Return: 7 0::Number
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;

             /* e */
             const __Math = context.getTopLevel(0)['$BgMath']; // :Math

    return function compiled_easeOutElastic(local1 /* Number */, local2 /* Number */, local3 /* Number */, local4 /* Number */, local5 /* Number */ = undefined, local6 /* Number */ = undefined) {
        // Possible use a real "this"
        /* Force Number coerce */
        local1 = (+local1);
        /* Force Number coerce */
        local2 = (+local2);
        /* Force Number coerce */
        local3 = (+local3);
        /* Force Number coerce */
        local4 = (+local4);
        /* Force Number coerce */
        local5 = (+local5);
        /* Force Number coerce */
        local6 = (+local6);
        // local7 is assigned before read, skip init
        let local7 = undefined
        // local8 is assigned before read, skip init
        let local8 = undefined
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
//                        stack0 = NaN;// JIT: redundant assigment, value unused
                        local7 = NaN;
                        // JIT: potential type:7 0::Number
                        stack0 = local1;
                        stack1 = 0;
                        if (0 != local1) { p = 14; continue; };
                        // JIT: potential type:7 0::Number
                        stack0 = local2;
                        return (+local2);
                    case 14:
                        // JIT: potential type:7 0::Number
                        stack0 = local1;
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack1 = local4;
                        stack0 /= local4;
                        stack1 = stack0;
                        local8 = stack1;
                        stack0 = +stack0;
                        local1 = stack0;
                        stack0 = local8;
                        //IR: KILL removed, reason: prevent optimisation
                        stack1 = 1;
                        if (1 != local8) { p = 37; continue; };
                        // JIT: potential type:7 0::Number
                        stack0 = local2;
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack1 = local3;
                        stack0 += local3;
                        return (+stack0);
                    case 37:
                        // JIT: potential type:7 0::Number
                        stack0 = local6;
                        if (local6) { p = 51; continue; };
                        // JIT: potential type:7 0::Number
                        stack0 = local4;
//                        stack1 = 0.3;// JIT: redundant assigment, value unused
                        stack0 *= 0.3;
                        stack0 = +stack0;
                        local6 = stack0;
                    case 51:
                        // JIT: potential type:7 0::Number
                        stack0 = local5;
                        stack0 = !local5;
                        stack1 = stack0;
                        if (stack1) { p = 71; continue; };
                        // JIT: potential type:7 0::Number
                        stack0 = local5;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack1 = __Math;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack2 = local3;
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack1 = __Math.abs(local3);
                        } else {
                            // 7 0::abs
                            {
                                let t = __Math;
                                const m = t.$Bgabs || (t = sec.box(__Math), t.$Bgabs);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$Bgabs (local3);
                                } else { 
                                    stack1 = __Math.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        stack0 = local5 < stack1;
                    case 71:
                        if (!stack0) { p = 91; continue; };
                        // JIT: potential type:7 0::Number
                        stack0 = local3;
                        stack0 = +local3;
                        local5 = stack0;
                        // JIT: potential type:7 0::Number
                        stack0 = local6;
//                        stack1 = 4;// JIT: redundant assigment, value unused
                        stack0 /= 4;
                        stack0 = +stack0;
                        local7 = stack0;
                        { p = 118; continue; };
                    case 91:
                        // JIT: potential type:7 0::Number
                        stack0 = local6;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack1 = __Math;// JIT: redundant assigment, value unused
                        // 7 0::PI
                        //Possible type:7 0::Math
                        if (!(__Math != undefined && __Math[AX_CLASS_SYMBOL])) {
                            stack1 = __Math['PI'];
                        } else {
                            temp = __Math[AX_CLASS_SYMBOL] ? __Math : sec.box(__Math);
                            stack1 = temp.$BgPI;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[2]);
                            }
                        }
                        stack0 /= stack1;
//                        stack1 = 2;// JIT: redundant assigment, value unused
                        stack0 *= 2;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack1 = __Math;// JIT: redundant assigment, value unused
                        // JIT: potential type:7 0::Number
                        stack2 = local3;
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack3 = local5;
                        stack2 /= local5;
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack1 = __Math.asin(stack2);
                        } else {
                            // 7 0::asin
                            {
                                let t = __Math;
                                const m = t.$Bgasin || (t = sec.box(__Math), t.$Bgasin);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$Bgasin (stack2);
                                } else { 
                                    stack1 = __Math.axCallProperty($names[3], [stack2], false);
                                }
                            }
                        }
                        stack0 *= stack1;
                        stack0 = +stack0;
                        local7 = stack0;
                    case 118:
                        // JIT: potential type:7 0::Number
                        stack0 = local5;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack1 = __Math;// JIT: redundant assigment, value unused
//                        stack2 = 2;// JIT: redundant assigment, value unused
                        stack3 = -10;
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack4 = local1;
                        stack3 *= local1;
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack1 = __Math.pow(2, stack3);
                        } else {
                            // 7 0::pow
                            {
                                let t = __Math;
                                const m = t.$Bgpow || (t = sec.box(__Math), t.$Bgpow);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$Bgpow (2, stack3);
                                } else { 
                                    stack1 = __Math.axCallProperty($names[4], [2, stack3], false);
                                }
                            }
                        }
                        stack0 *= stack1;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack1 = __Math;// JIT: redundant assigment, value unused
                        // JIT: potential type:7 0::Number
                        stack2 = local1;
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack3 = local4;
                        stack2 *= local4;
//                        stack3 = local7;// JIT: redundant assigment, value unused
                        stack2 -= local7;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack3 = __Math;// JIT: redundant assigment, value unused
                        // 7 0::PI
                        //Possible type:7 0::Math
                        if (!(__Math != undefined && __Math[AX_CLASS_SYMBOL])) {
                            stack3 = __Math['PI'];
                        } else {
                            temp = __Math[AX_CLASS_SYMBOL] ? __Math : sec.box(__Math);
                            stack3 = temp.$BgPI;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[2]);
                            }
                        }
                        stack2 *= stack3;
//                        stack3 = 2;// JIT: redundant assigment, value unused
                        stack2 *= 2;
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack3 = local6;
                        stack2 /= local6;
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack1 = __Math.sin(stack2);
                        } else {
                            // 7 0::sin
                            {
                                let t = __Math;
                                const m = t.$Bgsin || (t = sec.box(__Math), t.$Bgsin);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$Bgsin (stack2);
                                } else { 
                                    stack1 = __Math.axCallProperty($names[5], [stack2], false);
                                }
                            }
                        }
                        stack0 *= stack1;
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack1 = local3;
                        stack0 += local3;
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack1 = local2;
                        stack0 += local2;
                        return (+stack0);
                    }
                }
            }
//# sourceURL=http://jit/game_utils/Easings/easeOutElastic.js
})