(function anonymous(context
) {
/*
	Index: 933
	Path:  fl/motion/BezierSegment.getCubicRoots
	Type:  Public
	Kind:  Method
	Super: -
	Return: 7 0::Array
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;

             /* e */
             const __Math = context.getTopLevel(2)['$BgMath']; // :Math

    return function compiled_getCubicRoots(local1 /* Number */ = 0, local2 /* Number */ = 0, local3 /* Number */ = 0, local4 /* Number */ = 0) {
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
        // local6 is assigned before read, skip init
        let local6 = undefined
        // local7 is assigned before read, skip init
        let local7 = undefined
        // local8 is assigned before read, skip init
        let local8 = undefined
        // local9 is assigned before read, skip init
        let local9 = undefined
        // local10 is assigned before read, skip init
        let local10 = undefined
        // local11 is assigned before read, skip init
        let local11 = undefined
        // local12 is assigned before read, skip init
        let local12 = undefined
        // local13 is assigned before read, skip init
        let local13 = undefined
        // local14 is assigned before read, skip init
        let local14 = undefined
        // local15 is assigned before read, skip init
        let local15 = undefined
        // local16 is assigned before read, skip init
        let local16 = undefined
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
                        local9 = NaN;
//                        stack0 = NaN;// JIT: redundant assigment, value unused
                        local10 = NaN;
//                        stack0 = NaN;// JIT: redundant assigment, value unused
                        local11 = NaN;
//                        stack0 = NaN;// JIT: redundant assigment, value unused
                        local12 = NaN;
//                        stack0 = NaN;// JIT: redundant assigment, value unused
                        local13 = NaN;
//                        stack0 = NaN;// JIT: redundant assigment, value unused
                        local14 = NaN;
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local15 = 0;
//                        stack0 = NaN;// JIT: redundant assigment, value unused
                        local16 = NaN;
                        // JIT: potential type:7 0::Number
                        stack0 = local1;
                        if (local1) { p = 44; continue; };
                        // 7 0:fl.motion::BezierSegment
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgBezierSegment;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack1 = local2;
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack2 = local3;
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack3 = local4;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.getQuadraticRoots(local2, local3, local4);
                        } else {
                            // 7 0::getQuadraticRoots
                            {
                                let t = stack0;
                                const m = t.$BggetQuadraticRoots || (t = sec.box(stack0), t.$BggetQuadraticRoots);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetQuadraticRoots (local2, local3, local4);
                                } else { 
                                    stack0 = stack0.axCallProperty($names[1], [local2, local3, local4], false);
                                }
                            }
                        }
                        return stack0;
                    case 44:
                        // JIT: potential type:7 0::Number
                        stack0 = local1;
                        stack1 = 1;
                        if (1 == local1) { p = 68; continue; };
                        // JIT: potential type:7 0::Number
                        stack0 = local2;
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack1 = local1;
                        stack0 /= local1;
                        stack0 = +stack0;
                        local2 = stack0;
                        // JIT: potential type:7 0::Number
                        stack0 = local3;
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack1 = local1;
                        stack0 /= local1;
                        stack0 = +stack0;
                        local3 = stack0;
                        // JIT: potential type:7 0::Number
                        stack0 = local4;
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack1 = local1;
                        stack0 /= local1;
                        stack0 = +stack0;
                        local4 = stack0;
                    case 68:
                        // JIT: potential type:7 0::Number
                        stack0 = local2;
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack1 = local2;
                        stack0 *= local2;
                        stack1 = 3;
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack2 = local3;
                        stack1 *= local3;
                        stack0 -= stack1;
//                        stack1 = 9;// JIT: redundant assigment, value unused
                        stack0 /= 9;
                        stack0 = +stack0;
                        stack1 = stack0;
                        stack2 = stack1;
                        local5 = stack2;
                        stack0 *= stack1;
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        stack0 *= local5;
                        stack0 = +stack0;
                        local6 = stack0;
                        stack0 = 2;
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack1 = local2;
                        stack0 *= local2;
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack1 = local2;
                        stack0 *= local2;
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack1 = local2;
                        stack0 *= local2;
                        stack1 = 9;
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack2 = local2;
                        stack1 *= local2;
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack2 = local3;
                        stack1 *= local3;
                        stack0 -= stack1;
                        stack1 = 27;
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack2 = local4;
                        stack1 *= local4;
                        stack0 += stack1;
//                        stack1 = 54;// JIT: redundant assigment, value unused
                        stack0 /= 54;
                        stack0 = +stack0;
                        local7 = stack0;
                        stack0 = local6;
                        stack1 = local7;
//                        stack2 = local7;// JIT: redundant assigment, value unused
                        stack1 *= local7;
                        stack0 -= stack1;
                        stack0 = +stack0;
                        stack1 = stack0;
                        local8 = stack1;
                        stack1 = 0;
                        if (!(0 <= stack0)) { p = 292; continue; };
                        stack0 = local5;
                        if (local5) { p = 147; continue; };
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        stack0 = sec.AXArray.axBox([0]);
                        return stack0;
                    case 147:
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack0 = __Math;// JIT: redundant assigment, value unused
                        stack1 = local7;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack2 = __Math;// JIT: redundant assigment, value unused
//                        stack3 = local6;// JIT: redundant assigment, value unused
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack2 = __Math.sqrt(local6);
                        } else {
                            // 7 0::sqrt
                            {
                                let t = __Math;
                                const m = t.$Bgsqrt || (t = sec.box(__Math), t.$Bgsqrt);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$Bgsqrt (local6);
                                } else { 
                                    stack2 = __Math.axCallProperty($names[3], [local6], false);
                                }
                            }
                        }
                        stack1 /= stack2;
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack0 = __Math.acos(stack1);
                        } else {
                            // 7 0::acos
                            {
                                let t = __Math;
                                const m = t.$Bgacos || (t = sec.box(__Math), t.$Bgacos);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$Bgacos (stack1);
                                } else { 
                                    stack0 = __Math.axCallProperty($names[4], [stack1], false);
                                }
                            }
                        }
                        stack0 = +stack0;
                        local9 = stack0;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack0 = __Math;// JIT: redundant assigment, value unused
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack0 = __Math.sqrt(local5);
                        } else {
                            // 7 0::sqrt
                            {
                                let t = __Math;
                                const m = t.$Bgsqrt || (t = sec.box(__Math), t.$Bgsqrt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$Bgsqrt (local5);
                                } else { 
                                    stack0 = __Math.axCallProperty($names[3], [local5], false);
                                }
                            }
                        }
                        stack0 = +stack0;
                        local10 = stack0;
                        stack0 = -2;
//                        stack1 = local10;// JIT: redundant assigment, value unused
                        stack0 *= local10;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack1 = __Math;// JIT: redundant assigment, value unused
                        stack2 = local9;
//                        stack3 = 3;// JIT: redundant assigment, value unused
                        stack2 /= 3;
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack1 = __Math.cos(stack2);
                        } else {
                            // 7 0::cos
                            {
                                let t = __Math;
                                const m = t.$Bgcos || (t = sec.box(__Math), t.$Bgcos);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$Bgcos (stack2);
                                } else { 
                                    stack1 = __Math.axCallProperty($names[5], [stack2], false);
                                }
                            }
                        }
                        stack0 *= stack1;
                        // JIT: potential type:7 0::Number
                        stack1 = local2;
//                        stack2 = 3;// JIT: redundant assigment, value unused
                        stack1 /= 3;
                        stack0 -= stack1;
                        stack0 = +stack0;
                        local11 = stack0;
                        stack0 = -2;
//                        stack1 = local10;// JIT: redundant assigment, value unused
                        stack0 *= local10;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack1 = __Math;// JIT: redundant assigment, value unused
                        stack2 = local9;
                        stack3 = 2;
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
                                stack4 = temp.axGetProperty($names[6]);
                            }
                        }
                        stack3 *= stack4;
                        stack2 += stack3;
//                        stack3 = 3;// JIT: redundant assigment, value unused
                        stack2 /= 3;
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack1 = __Math.cos(stack2);
                        } else {
                            // 7 0::cos
                            {
                                let t = __Math;
                                const m = t.$Bgcos || (t = sec.box(__Math), t.$Bgcos);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$Bgcos (stack2);
                                } else { 
                                    stack1 = __Math.axCallProperty($names[5], [stack2], false);
                                }
                            }
                        }
                        stack0 *= stack1;
                        // JIT: potential type:7 0::Number
                        stack1 = local2;
//                        stack2 = 3;// JIT: redundant assigment, value unused
                        stack1 /= 3;
                        stack0 -= stack1;
                        stack0 = +stack0;
                        local12 = stack0;
                        stack0 = -2;
//                        stack1 = local10;// JIT: redundant assigment, value unused
                        stack0 *= local10;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack1 = __Math;// JIT: redundant assigment, value unused
                        stack2 = local9;
                        stack3 = 4;
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
                                stack4 = temp.axGetProperty($names[6]);
                            }
                        }
                        stack3 *= stack4;
                        stack2 += stack3;
//                        stack3 = 3;// JIT: redundant assigment, value unused
                        stack2 /= 3;
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack1 = __Math.cos(stack2);
                        } else {
                            // 7 0::cos
                            {
                                let t = __Math;
                                const m = t.$Bgcos || (t = sec.box(__Math), t.$Bgcos);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$Bgcos (stack2);
                                } else { 
                                    stack1 = __Math.axCallProperty($names[5], [stack2], false);
                                }
                            }
                        }
                        stack0 *= stack1;
                        // JIT: potential type:7 0::Number
                        stack1 = local2;
//                        stack2 = 3;// JIT: redundant assigment, value unused
                        stack1 /= 3;
                        stack0 -= stack1;
                        stack0 = +stack0;
                        local13 = stack0;
//                        stack0 = local11;// JIT: redundant assigment, value unused
//                        stack1 = local12;// JIT: redundant assigment, value unused
//                        stack2 = local13;// JIT: redundant assigment, value unused
                        stack0 = sec.AXArray.axBox([local11, local12, local13]);
                        return stack0;
                        // unreachable
                    case 292:
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack0 = __Math;// JIT: redundant assigment, value unused
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack1 = __Math;// JIT: redundant assigment, value unused
                        stack2 = local8;
                        stack2 = -local8;
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
                                    stack1 = __Math.axCallProperty($names[3], [stack2], false);
                                }
                            }
                        }
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack2 = __Math;// JIT: redundant assigment, value unused
//                        stack3 = local7;// JIT: redundant assigment, value unused
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack2 = __Math.abs(local7);
                        } else {
                            // 7 0::abs
                            {
                                let t = __Math;
                                const m = t.$Bgabs || (t = sec.box(__Math), t.$Bgabs);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$Bgabs (local7);
                                } else { 
                                    stack2 = __Math.axCallProperty($names[7], [local7], false);
                                }
                            }
                        }
                        stack1 += stack2;
                        stack2 = 1;
//                        stack3 = 3;// JIT: redundant assigment, value unused
                        stack2 /= 3;
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack0 = __Math.pow(stack1, stack2);
                        } else {
                            // 7 0::pow
                            {
                                let t = __Math;
                                const m = t.$Bgpow || (t = sec.box(__Math), t.$Bgpow);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$Bgpow (stack1, stack2);
                                } else { 
                                    stack0 = __Math.axCallProperty($names[8], [stack1, stack2], false);
                                }
                            }
                        }
                        stack0 = +stack0;
                        local14 = stack0;
                        stack0 = local7;
                        stack1 = 0;
                        if (!(0 < local7)) { p = 341; continue; };
                        stack0 = 1;
                        { p = 358; continue; };
                    case 341:
                        stack0 = local7;
                        stack1 = 0;
                        stack0 = local7 < 0;
                        if (!stack0) { p = 356; continue; };
                        stack0 = -1;
                        { p = 358; continue; };
                    case 356:
                        stack0 = 0;
                    case 358:
                        stack0 |= 0;
                        stack1 = stack0;
                        local15 = stack1;
                        stack0 = -stack0;
                        stack1 = local14;
                        stack2 = local5;
//                        stack3 = local14;// JIT: redundant assigment, value unused
                        stack2 /= local14;
                        stack1 += stack2;
                        stack0 *= stack1;
                        // JIT: potential type:7 0::Number
                        stack1 = local2;
//                        stack2 = 3;// JIT: redundant assigment, value unused
                        stack1 /= 3;
                        stack0 -= stack1;
                        stack0 = +stack0;
                        stack1 = stack0;
                        local16 = stack1;
                        stack0 = sec.AXArray.axBox([stack0]);
                        return stack0;
                    }
                }
            }
//# sourceURL=http://jit/fl/motion/BezierSegment/getCubicRoots.js
})