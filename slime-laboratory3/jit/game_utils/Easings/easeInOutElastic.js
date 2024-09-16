(function anonymous(context
) {
/*
	Index: 800
	Path:  game_utils/Easings.easeInOutElastic
	Type:  Public
	Kind:  Method
	Super: -
	Return: 7 0::Number
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;

             /* e */
             const __Math = context.getTopLevel(0)['$BgMath']; // :Math

    return function compiled_easeInOutElastic(local1 /* Number */, local2 /* Number */, local3 /* Number */, local4 /* Number */, local5 /* Number */ = undefined, local6 /* Number */ = undefined) {
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
        let stack5 = undefined;
        let stack6 = undefined;
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
                        // JIT: potential type:7 0::Number
                        stack1 = local4;
//                        stack2 = 2;// JIT: redundant assigment, value unused
                        stack1 /= 2;
                        stack0 /= stack1;
                        stack1 = stack0;
                        local8 = stack1;
                        stack0 = +stack0;
                        local1 = stack0;
                        stack0 = local8;
                        //IR: KILL removed, reason: prevent optimisation
                        stack1 = 2;
                        if (2 != local8) { p = 40; continue; };
                        // JIT: potential type:7 0::Number
                        stack0 = local2;
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack1 = local3;
                        stack0 += local3;
                        return (+stack0);
                    case 40:
                        // JIT: potential type:7 0::Number
                        stack0 = local6;
                        if (local6) { p = 57; continue; };
                        // JIT: potential type:7 0::Number
                        stack0 = local4;
                        stack1 = 0.3;
//                        stack2 = 1.5;// JIT: redundant assigment, value unused
                        stack1 *= 1.5;
                        stack0 *= stack1;
                        stack0 = +stack0;
                        local6 = stack0;
                    case 57:
                        // JIT: potential type:7 0::Number
                        stack0 = local5;
                        stack0 = !local5;
                        stack1 = stack0;
                        if (stack1) { p = 77; continue; };
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
                    case 77:
                        if (!stack0) { p = 97; continue; };
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
                        { p = 124; continue; };
                    case 97:
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
                    case 124:
                        // JIT: potential type:7 0::Number
                        stack0 = local1;
                        stack1 = 1;
                        if (!(1 > local1)) { p = 191; continue; };
                        stack0 = -0.5;
                        // JIT: potential type:7 0::Number
                        stack1 = local5;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack2 = __Math;// JIT: redundant assigment, value unused
//                        stack3 = 2;// JIT: redundant assigment, value unused
                        stack4 = 10;
                        // JIT: potential type:7 0::Number
                        stack5 = local1;
                        stack5--;
                        stack6 = stack5;
                        local8 = stack6;
                        stack5 = +stack5;
                        local1 = stack5;
//                        stack5 = local8;// JIT: redundant assigment, value unused
                        //IR: KILL removed, reason: prevent optimisation
                        stack4 *= local8;
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack2 = __Math.pow(2, stack4);
                        } else {
                            // 7 0::pow
                            {
                                let t = __Math;
                                const m = t.$Bgpow || (t = sec.box(__Math), t.$Bgpow);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$Bgpow (2, stack4);
                                } else { 
                                    stack2 = __Math.axCallProperty($names[4], [2, stack4], false);
                                }
                            }
                        }
                        stack1 *= stack2;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack2 = __Math;// JIT: redundant assigment, value unused
                        // JIT: potential type:7 0::Number
                        stack3 = local1;
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack4 = local4;
                        stack3 *= local4;
//                        stack4 = local7;// JIT: redundant assigment, value unused
                        stack3 -= local7;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack4 = __Math;// JIT: redundant assigment, value unused
                        // 7 0::PI
                        //Possible type:7 0::Math
                        if (!(__Math != undefined && __Math[AX_CLASS_SYMBOL])) {
                            stack4 = __Math['PI'];
                        } else {
                            temp = __Math[AX_CLASS_SYMBOL] ? __Math : sec.box(__Math);
                            stack4 = temp.$BgPI;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[2]);
                            }
                        }
                        stack3 *= stack4;
//                        stack4 = 2;// JIT: redundant assigment, value unused
                        stack3 *= 2;
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack4 = local6;
                        stack3 /= local6;
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack2 = __Math.sin(stack3);
                        } else {
                            // 7 0::sin
                            {
                                let t = __Math;
                                const m = t.$Bgsin || (t = sec.box(__Math), t.$Bgsin);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$Bgsin (stack3);
                                } else { 
                                    stack2 = __Math.axCallProperty($names[5], [stack3], false);
                                }
                            }
                        }
                        stack1 *= stack2;
                        stack0 *= stack1;
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack1 = local2;
                        stack0 += local2;
                        return (+stack0);
                    case 191:
                        // JIT: potential type:7 0::Number
                        stack0 = local5;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack1 = __Math;// JIT: redundant assigment, value unused
//                        stack2 = 2;// JIT: redundant assigment, value unused
                        stack3 = -10;
                        // JIT: potential type:7 0::Number
                        stack4 = local1;
                        stack4--;
                        stack5 = stack4;
                        local8 = stack5;
                        stack4 = +stack4;
                        local1 = stack4;
//                        stack4 = local8;// JIT: redundant assigment, value unused
                        //IR: KILL removed, reason: prevent optimisation
                        stack3 *= local8;
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
//                        stack1 = 0.5;// JIT: redundant assigment, value unused
                        stack0 *= 0.5;
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
//# sourceURL=http://jit/game_utils/Easings/easeInOutElastic.js
})