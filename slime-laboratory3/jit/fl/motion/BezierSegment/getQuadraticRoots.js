(function anonymous(context
) {
/*
	Index: 934
	Path:  fl/motion/BezierSegment.getQuadraticRoots
	Type:  Public
	Kind:  Method
	Super: -
	Return: 7 0::Array
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;

             /* e */
             const __Math = context.getTopLevel(2)['$BgMath']; // :Math

    return function compiled_getQuadraticRoots(local1 /* Number */, local2 /* Number */, local3 /* Number */) {
        // Possible use a real "this"
        /* Force Number coerce */
        local1 = (+local1);
        /* Force Number coerce */
        local2 = (+local2);
        /* Force Number coerce */
        local3 = (+local3);
        // local4 is assigned before read, skip init
        let local4 = undefined
        // local5 is assigned before read, skip init
        let local5 = undefined
        // local6 is assigned before read, skip init
        let local6 = undefined
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
                        stack0 = sec.AXArray.axBox([]);
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[0], true, false);
                            _e || console.warn('[getQuadraticRoots] Coerce Type not found:', "Array")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local4 = stack0;
                        // JIT: potential type:7 0::Number
                        stack0 = local1;
                        if (local1) { p = 38; continue; };
                        // JIT: potential type:7 0::Number
                        stack0 = local2;
                        if (local2) { p = 24; continue; };
                        stack0 = sec.AXArray.axBox([]);
                        return stack0;
                    case 24:
                        stack0 = local4;
                        stack1 = 0;
                        // JIT: potential type:7 0::Number
                        stack2 = local3;
                        stack2 = -local3;
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack3 = local2;
                        stack2 /= local2;
                        context.setproperty(context.runtimename($names[1], 0), stack2, local4);
                        stack0 = local4;
                        return local4;
                    case 38:
                        // JIT: potential type:7 0::Number
                        stack0 = local2;
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack1 = local2;
                        stack0 *= local2;
                        stack1 = 4;
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack2 = local1;
                        stack1 *= local1;
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack2 = local3;
                        stack1 *= local3;
                        stack0 -= stack1;
                        stack0 = +stack0;
                        stack1 = stack0;
                        local5 = stack1;
                        stack1 = 0;
                        if (!(0 < stack0)) { p = 64; continue; };
                        stack0 = 1;
                        { p = 81; continue; };
                    case 64:
                        stack0 = local5;
                        stack1 = 0;
                        stack0 = local5 < 0;
                        if (!stack0) { p = 79; continue; };
                        stack0 = -1;
                        { p = 81; continue; };
                    case 79:
                        stack0 = 0;
                    case 81:
                        stack0 |= 0;
                        stack1 = stack0;
                        local6 = stack1;
                        stack1 = 0;
                        if (!(0 > stack0)) { p = 94; continue; };
                        stack0 = sec.AXArray.axBox([]);
                        return stack0;
                    case 94:
                        stack0 = local6;
                        if (local6) { p = 118; continue; };
                        stack0 = local4;
                        stack1 = 0;
                        // JIT: potential type:7 0::Number
                        stack2 = local2;
                        stack2 = -local2;
                        stack3 = 2;
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack4 = local1;
                        stack3 *= local1;
                        stack2 /= stack3;
                        context.setproperty(context.runtimename($names[1], 0), stack2, local4);
                        { p = 197; continue; };
                    case 118:
                        stack0 = local4;
                        stack1 = 0;
                        stack2 = local4;
                        stack3 = 1;
                        // JIT: potential type:7 0::Number
                        stack4 = local2;
                        stack4 = -local2;
                        stack5 = 2;
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack6 = local1;
                        stack5 *= local1;
                        stack4 /= stack5;
                        stack5 = stack4;
                        local8 = stack5;
                        context.setproperty(context.runtimename($names[1], 1), stack4, local4);
                        stack2 = local8;
                        //IR: KILL removed, reason: prevent optimisation
                        context.setproperty(context.runtimename($names[1], 0), local8, local4);
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
                        stack1 = 2;
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack2 = local1;
                        stack1 *= local1;
                        stack0 /= stack1;
                        stack0 = +stack0;
                        local7 = stack0;
                        stack0 = local4;
                        stack1 = 0;
                        stack2 = local4;
                        stack3 = 0;
                        // 27 {3, 0, 0:fl.motion, 3, 2:fl.motion, 0:http://adobe.com/AS3/2006/builtin, 1:fl.motion:BezierSegment, 5:fl.motion:BezierSegment, 5:Object}::*
                        {
                            let simple = 0;
                            const b_obj = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);

                            if (typeof simple === "number") {
                                stack2 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack2 = b_obj['$Bg' + simple];
                                if (stack2 === undefined || typeof stack2 === 'function') {
                                    const rm = context.runtimename($names[1], 0);
                                    stack2 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
//                        stack3 = local7;// JIT: redundant assigment, value unused
                        stack2 -= local7;
                        context.setproperty(context.runtimename($names[1], 0), stack2, local4);
                        stack0 = local4;
                        stack1 = 1;
                        stack2 = local4;
                        stack3 = 1;
                        // 27 {3, 0, 0:fl.motion, 3, 2:fl.motion, 0:http://adobe.com/AS3/2006/builtin, 1:fl.motion:BezierSegment, 5:fl.motion:BezierSegment, 5:Object}::*
                        {
                            let simple = 1;
                            const b_obj = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);

                            if (typeof simple === "number") {
                                stack2 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack2 = b_obj['$Bg' + simple];
                                if (stack2 === undefined || typeof stack2 === 'function') {
                                    const rm = context.runtimename($names[1], 1);
                                    stack2 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
//                        stack3 = local7;// JIT: redundant assigment, value unused
                        stack2 += local7;
                        context.setproperty(context.runtimename($names[1], 1), stack2, local4);
                    case 197:
                        stack0 = local4;
                        return local4;
                    }
                }
            }
//# sourceURL=http://jit/fl/motion/BezierSegment/getQuadraticRoots.js
})