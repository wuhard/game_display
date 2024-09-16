(function anonymous(context
) {
/*
	Index: 927
	Path:  CubicBezier.curveThroughPoints
	Type:  Public
	Kind:  Method
	Super: -
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;

                 /* e */
                 const flash_geom__Point = context.getTopLevel(3)['$BgPoint']; // flash.geom:Point
                 const __Math = context.getTopLevel(11)['$BgMath']; // :Math
                 const flash_geom__Point_def = context.getTopLevel(3); // flash.geom:Point
                 const __trace_def = context.getTopLevel(25); // :trace

    return function compiled_curveThroughPoints(local1 /* Graphics */, local2 /* Array */, local3 /* Number */ = 0.5, local4 /* Number */ = 0.75, local5 /* Boolean */ = true) {
        // Possible use a real "this"
        /* Force Number coerce */
        local3 = (+local3);
        /* Force Number coerce */
        local4 = (+local4);
        /* Force Boolean coerce */
        local5 = (!!local5);
        // local6 is assigned before read, skip init
        let local6 = undefined
        // local7 is assigned before read, skip init
        let local7 = undefined
        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
        let stack3 = undefined;
        let stack4 = undefined;
        let stack5 = undefined;
        let stack6 = undefined;
        let stack7 = undefined;
        let scope0 = undefined;
        let scope1 = undefined;
        let scope2 = undefined;
        let scope3 = undefined;
        let scope4 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        let p = 0;
        while (true) {
            switch (p) {
                    case 0:
                        stack0 = this;
                        scope0 = context.savedScope.extend(this);
                        stack0 = sec.createActivation(context.mi, scope0);
                        stack1 = stack0;
                        local6 = stack1;
                        scope1 = scope0.extend(stack0);
                        stack0 = scope1.object;
                        stack1 = null;
                        //JIT: SKIP_NULL_COERCE
                        stack0.axSetSlot(6, null);
                        stack0 = scope1.object;
                        stack1 = null;
                        //JIT: SKIP_NULL_COERCE
                        stack0.axSetSlot(7, null);
                        stack0 = scope1.object;
                        stack1 = undefined;
                        
                        stack0.axSetSlot(8, undefined);
                        stack0 = scope1.object;
                        stack1 = undefined;
                        
                        stack0.axSetSlot(9, undefined);
                        stack0 = scope1.object;
                        stack1 = undefined;
                        
                        stack0.axSetSlot(10, undefined);
                        stack0 = scope1.object;
                        stack1 = null;
                        //JIT: SKIP_NULL_COERCE
                        stack0.axSetSlot(11, null);
                        stack0 = scope1.object;
                        stack1 = false;
                        stack0.axSetSlot(12, false);
                        stack0 = scope1.object;
                        stack1 = undefined;
                        
                        stack0.axSetSlot(13, undefined);
                        stack0 = scope1.object;
                        stack1 = undefined;
                        
                        stack0.axSetSlot(14, undefined);
                        stack0 = scope1.object;
                        stack1 = undefined;
                        
                        stack0.axSetSlot(15, undefined);
                        stack0 = scope1.object;
                        stack1 = undefined;
                        
                        stack0.axSetSlot(16, undefined);
                        stack0 = scope1.object;
                        stack1 = undefined;
                        
                        stack0.axSetSlot(17, undefined);
                        stack0 = scope1.object;
                        stack1 = undefined;
                        
                        stack0.axSetSlot(18, undefined);
                        stack0 = scope1.object;
                        stack1 = undefined;
                        
                        stack0.axSetSlot(19, undefined);
                        stack0 = scope1.object;
                        stack1 = undefined;
                        
                        stack0.axSetSlot(20, undefined);
                        stack0 = scope1.object;
                        stack1 = undefined;
                        
                        stack0.axSetSlot(21, undefined);
                        stack0 = scope1.object;
                        stack1 = undefined;
                        
                        stack0.axSetSlot(22, undefined);
                        stack0 = scope1.object;
                        stack1 = undefined;
                        
                        stack0.axSetSlot(23, undefined);
                        stack0 = scope1.object;
                        stack1 = undefined;
                        
                        stack0.axSetSlot(24, undefined);
                        stack0 = scope1.object;
                        stack1 = undefined;
                        
                        stack0.axSetSlot(25, undefined);
                        stack0 = scope1.object;
                        stack1 = undefined;
                        
                        stack0.axSetSlot(26, undefined);
                        stack0 = scope1.object;
                        stack1 = undefined;
                        
                        stack0.axSetSlot(27, undefined);
                        stack0 = scope1.object;
                        stack1 = undefined;
                        
                        stack0.axSetSlot(28, undefined);
                        stack0 = scope1.object;
                        stack1 = undefined;
                        
                        stack0.axSetSlot(29, undefined);
                        stack0 = scope1.object;
                        stack1 = undefined;
                        
                        stack0.axSetSlot(30, undefined);
                        stack0 = scope1.object;
                        stack1 = undefined;
                        
                        stack0.axSetSlot(31, undefined);
                        stack0 = scope1.object;
                        stack1 = undefined;
                        
                        stack0.axSetSlot(32, undefined);
                        stack0 = scope1.object;
                        stack1 = undefined;
                        
                        stack0.axSetSlot(33, undefined);
                        stack0 = scope1.object;
                        stack1 = undefined;
                        
                        stack0.axSetSlot(34, undefined);
                        stack0 = scope1.object;
                        stack1 = undefined;
                        
                        stack0.axSetSlot(35, undefined);
                        stack0 = scope1.object;
                        stack1 = undefined;
                        
                        stack0.axSetSlot(36, undefined);
                        stack0 = scope1.object;
                        stack1 = false;
                        stack0.axSetSlot(37, false);
                        stack0 = scope1.object;
                        stack1 = null;
                        //JIT: SKIP_NULL_COERCE
                        stack0.axSetSlot(38, null);
                        stack0 = scope1.object;
                        stack1 = undefined;
                        
                        stack0.axSetSlot(39, undefined);
                        stack0 = scope1.object;
                        stack1 = undefined;
                        
                        stack0.axSetSlot(40, undefined);
                        stack0 = scope1.object;
                        // JIT: potential type:7 0:flash.display::Graphics
                        stack1 = local1;
                        stack0.axSetSlot(1, local1);
                        stack0 = scope1.object;
                        // JIT: potential type:7 0::Array
                        stack1 = local2;
                        stack0.axSetSlot(2, local2);
                        stack0 = scope1.object;
                        // JIT: potential type:7 0::Number
                        stack1 = local3;
                        stack0.axSetSlot(3, local3);
                        stack0 = scope1.object;
                        // JIT: potential type:7 0::Number
                        stack1 = local4;
                        stack0.axSetSlot(4, local4);
                        stack0 = scope1.object;
                        // JIT: potential type:7 0::Boolean
                        stack1 = local5;
                        stack0.axSetSlot(5, local5);
                        try {
                                stack0 = scope1.object;
                                stack1 = scope1.object;
                                stack1 = stack1.axGetSlot(2);
                                if (!(_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL]))) {
                                   stack1 = stack1.slice();
                                } else {
                                    // 7 0:http://adobe.com/AS3/2006/builtin::slice
                                    {
                                        let t = stack1;
                                        const m = t.$Bgslice || (t = sec.box(stack1), t.$Bgslice);
                                        if( typeof m === "function" ) { 
                                            stack1 = t.$Bgslice ();
                                        } else { 
                                            stack1 = stack1.axCallProperty($names[0], [], false);
                                        }
                                    }
                                }
                                if ((stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                                    var _e = scope1.getScopeProperty($names[1], true, false);
                                    _e || console.warn('[curveThroughPoints] Coerce Type not found:', "Array")
                                    stack1 = _e ? _e.axCoerce(stack1) : stack1;
                                }
                                stack0.axSetSlot(6, stack1);
                                stack0 = scope1.object;
                                // 7 0::Array
                                stack1 = scope1.findScopeProperty($names[1], true, false);
                                //JIT: Support fast construct:Array/Object
                                stack1 = context.constructFast(stack1, [], $names[1]);
                                //IR: Drop coerce, reason: redundant
                                stack0.axSetSlot(7, stack1);
                                stack0 = scope1.object;
                                stack1 = 0;
                                
                                stack0.axSetSlot(8, 0);
                                { p = 416; continue; };
                            }
                            catch(e) {
                                // in case this is a error coming from stack0.__fast when stack0 is undefined,
                                // we convert it to a ASError, so that avm2 can still catch it
                                if (e instanceof TypeError) {
                                     var _e = context.sec.createError("TypeError", {code:1065, message:e.message})
                                     _e.source = e; e = _e;
                                }
                                stack0 = e;
                                { p = 2731; continue; };
                                throw e;
                            }
                        case 283:
                            try {
                                stack0 = scope1.object;
                                stack0 = stack0.axGetSlot(6);
                                stack1 = scope1.object;
                                stack1 = stack1.axGetSlot(8);
                                // 27 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::*
                                {
                                    let simple = stack1;
                                    const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                                    if (typeof simple === "number") {
                                        stack0 = b_obj.axGetNumericProperty(simple);
                                    } else {
                                        stack0 = b_obj['$Bg' + simple];
                                        if (stack0 === undefined || typeof stack0 === 'function') {
                                            const rm = context.runtimename($names[2], stack1);
                                            stack0 = b_obj.axGetProperty(rm);
                                        }
                                    }
                                }
                                // 7 0:flash.geom::Point
                                /* GenerateLexImports GETLEX */
                                stack1 = flash_geom__Point;
                                stack0 = flash_geom__Point.axIsType(stack0);
                                if (stack0) { p = 313; continue; };
                                // 7 0::Error
                                stack0 = scope1.findScopeProperty($names[4], true, false);
//                                stack1 = "Array must contain Point objects";// JIT: redundant assigment, value unused
                                //JIT: Support fast construct:Error/Object
                                stack0 = context.constructFast(stack0, ["Array must contain Point objects"], $names[4]);
                                throw stack0;
                            }
                            catch(e) {
                                // in case this is a error coming from stack0.__fast when stack0 is undefined,
                                // we convert it to a ASError, so that avm2 can still catch it
                                if (e instanceof TypeError) {
                                     var _e = context.sec.createError("TypeError", {code:1065, message:e.message})
                                     _e.source = e; e = _e;
                                }
                                stack0 = e;
                                { p = 2731; continue; };
                                throw e;
                            }
                        case 313:
                            try {
                                stack0 = scope1.object;
                                stack0 = stack0.axGetSlot(8);
                                stack1 = 0;
                                if (!(0 < stack0)) { p = 405; continue; };
                                stack0 = scope1.object;
                                stack0 = stack0.axGetSlot(6);
                                stack1 = scope1.object;
                                stack1 = stack1.axGetSlot(8);
                                // 27 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::*
                                {
                                    let simple = stack1;
                                    const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                                    if (typeof simple === "number") {
                                        stack0 = b_obj.axGetNumericProperty(simple);
                                    } else {
                                        stack0 = b_obj['$Bg' + simple];
                                        if (stack0 === undefined || typeof stack0 === 'function') {
                                            const rm = context.runtimename($names[2], stack1);
                                            stack0 = b_obj.axGetProperty(rm);
                                        }
                                    }
                                }
                                // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::x
                                //Possible type:7 0::Error
                                if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                                    stack0 = stack0['x'];
                                } else {
                                    temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                                    stack0 = temp.$Bgx;
                                    if (stack0 === undefined || typeof stack0 === 'function') {
                                        stack0 = temp.axGetProperty($names[5]);
                                    }
                                }
                                stack1 = scope1.object;
                                stack1 = stack1.axGetSlot(6);
                                stack2 = scope1.object;
                                stack2 = stack2.axGetSlot(8);
                                stack2--;
                                // 27 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::*
                                {
                                    let simple = stack2;
                                    const b_obj = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);

                                    if (typeof simple === "number") {
                                        stack1 = b_obj.axGetNumericProperty(simple);
                                    } else {
                                        stack1 = b_obj['$Bg' + simple];
                                        if (stack1 === undefined || typeof stack1 === 'function') {
                                            const rm = context.runtimename($names[2], stack2);
                                            stack1 = b_obj.axGetProperty(rm);
                                        }
                                    }
                                }
                                // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::x
                                //Possible type:undefined
                                if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                                    stack1 = stack1['x'];
                                } else {
                                    temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                                    stack1 = temp.$Bgx;
                                    if (stack1 === undefined || typeof stack1 === 'function') {
                                        stack1 = temp.axGetProperty($names[5]);
                                    }
                                }
                                stack0 = stack0 == stack1;
                                stack1 = stack0;
                                if (!stack1) { p = 389; continue; };
                                stack0 = scope1.object;
                                stack0 = stack0.axGetSlot(6);
                                stack1 = scope1.object;
                                stack1 = stack1.axGetSlot(8);
                                // 27 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::*
                                {
                                    let simple = stack1;
                                    const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                                    if (typeof simple === "number") {
                                        stack0 = b_obj.axGetNumericProperty(simple);
                                    } else {
                                        stack0 = b_obj['$Bg' + simple];
                                        if (stack0 === undefined || typeof stack0 === 'function') {
                                            const rm = context.runtimename($names[2], stack1);
                                            stack0 = b_obj.axGetProperty(rm);
                                        }
                                    }
                                }
                                // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::y
                                if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                                    stack0 = stack0['y'];
                                } else {
                                    temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                                    stack0 = temp.$Bgy;
                                    if (stack0 === undefined || typeof stack0 === 'function') {
                                        stack0 = temp.axGetProperty($names[6]);
                                    }
                                }
                                stack1 = scope1.object;
                                stack1 = stack1.axGetSlot(6);
                                stack2 = scope1.object;
                                stack2 = stack2.axGetSlot(8);
                                stack2--;
                                // 27 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::*
                                {
                                    let simple = stack2;
                                    const b_obj = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);

                                    if (typeof simple === "number") {
                                        stack1 = b_obj.axGetNumericProperty(simple);
                                    } else {
                                        stack1 = b_obj['$Bg' + simple];
                                        if (stack1 === undefined || typeof stack1 === 'function') {
                                            const rm = context.runtimename($names[2], stack2);
                                            stack1 = b_obj.axGetProperty(rm);
                                        }
                                    }
                                }
                                // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::y
                                if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                                    stack1 = stack1['y'];
                                } else {
                                    temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                                    stack1 = temp.$Bgy;
                                    if (stack1 === undefined || typeof stack1 === 'function') {
                                        stack1 = temp.axGetProperty($names[6]);
                                    }
                                }
                                stack0 = stack0 == stack1;
                            }
                            catch(e) {
                                // in case this is a error coming from stack0.__fast when stack0 is undefined,
                                // we convert it to a ASError, so that avm2 can still catch it
                                if (e instanceof TypeError) {
                                     var _e = context.sec.createError("TypeError", {code:1065, message:e.message})
                                     _e.source = e; e = _e;
                                }
                                stack0 = e;
                                { p = 2731; continue; };
                                throw e;
                            }
                        case 389:
                            try {
                                if (!stack0) { p = 405; continue; };
                                stack0 = scope1.object;
                                stack0 = stack0.axGetSlot(7);
                                stack1 = scope1.object;
                                stack1 = stack1.axGetSlot(8);
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
                                           stack0.axCallProperty($names[7], [stack1], false);
                                        }
                                    }
                                }
                            }
                            catch(e) {
                                // in case this is a error coming from stack0.__fast when stack0 is undefined,
                                // we convert it to a ASError, so that avm2 can still catch it
                                if (e instanceof TypeError) {
                                     var _e = context.sec.createError("TypeError", {code:1065, message:e.message})
                                     _e.source = e; e = _e;
                                }
                                stack0 = e;
                                { p = 2731; continue; };
                                throw e;
                            }
                        case 405:
                            try {
                                stack0 = scope1.object;
                                stack0 = stack0.axGetSlot(8);
                                stack0++;
                                
                                stack1 = scope1.object;
                                temp = stack1;
                                stack1 = stack0;
                                stack0 = temp;
                                temp = undefined;
                                stack0.axSetSlot(8, stack1);
                            }
                            catch(e) {
                                // in case this is a error coming from stack0.__fast when stack0 is undefined,
                                // we convert it to a ASError, so that avm2 can still catch it
                                if (e instanceof TypeError) {
                                     var _e = context.sec.createError("TypeError", {code:1065, message:e.message})
                                     _e.source = e; e = _e;
                                }
                                stack0 = e;
                                { p = 2731; continue; };
                                throw e;
                            }
                        case 416:
                            try {
                                stack0 = scope1.object;
                                stack0 = stack0.axGetSlot(8);
                                stack1 = scope1.object;
                                stack1 = stack1.axGetSlot(6);
                                // 7 0::length
                                if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                                    stack1 = stack1['length'];
                                } else {
                                    temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                                    stack1 = temp.$Bglength;
                                    if (stack1 === undefined || typeof stack1 === 'function') {
                                        stack1 = temp.axGetProperty($names[8]);
                                    }
                                }
                                if (stack1 > stack0) { p = 283; continue; };
                                stack0 = scope1.object;
                                stack1 = scope1.object;
                                stack1 = stack1.axGetSlot(7);
                                // 7 0::length
                                if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                                    stack1 = stack1['length'];
                                } else {
                                    temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                                    stack1 = temp.$Bglength;
                                    if (stack1 === undefined || typeof stack1 === 'function') {
                                        stack1 = temp.axGetProperty($names[8]);
                                    }
                                }
                                stack1--;
                                
                                stack0.axSetSlot(8, stack1);
                                { p = 481; continue; };
                            }
                            catch(e) {
                                // in case this is a error coming from stack0.__fast when stack0 is undefined,
                                // we convert it to a ASError, so that avm2 can still catch it
                                if (e instanceof TypeError) {
                                     var _e = context.sec.createError("TypeError", {code:1065, message:e.message})
                                     _e.source = e; e = _e;
                                }
                                stack0 = e;
                                { p = 2731; continue; };
                                throw e;
                            }
                        case 448:
                            try {
                                stack0 = scope1.object;
                                stack0 = stack0.axGetSlot(6);
                                stack1 = scope1.object;
                                stack1 = stack1.axGetSlot(7);
                                stack2 = scope1.object;
                                stack2 = stack2.axGetSlot(8);
                                // 27 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::*
                                {
                                    let simple = stack2;
                                    const b_obj = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);

                                    if (typeof simple === "number") {
                                        stack1 = b_obj.axGetNumericProperty(simple);
                                    } else {
                                        stack1 = b_obj['$Bg' + simple];
                                        if (stack1 === undefined || typeof stack1 === 'function') {
                                            const rm = context.runtimename($names[2], stack2);
                                            stack1 = b_obj.axGetProperty(rm);
                                        }
                                    }
                                }
//                                stack2 = 1;// JIT: redundant assigment, value unused
                                if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                                    stack0.splice(stack1, 1);
                                } else {
                                    // 7 0:http://adobe.com/AS3/2006/builtin::splice
                                    {
                                        let t = stack0;
                                        const m = t.$Bgsplice || (t = sec.box(stack0), t.$Bgsplice);
                                        if( typeof m === "function" ) { 
                                            m.call(t, stack1, 1);
                                        } else { 
                                           stack0.axCallProperty($names[9], [stack1, 1], false);
                                        }
                                    }
                                }
                                stack0 = scope1.object;
                                stack0 = stack0.axGetSlot(8);
                                stack0--;
                                
                                stack1 = scope1.object;
                                temp = stack1;
                                stack1 = stack0;
                                stack0 = temp;
                                temp = undefined;
                                stack0.axSetSlot(8, stack1);
                            }
                            catch(e) {
                                // in case this is a error coming from stack0.__fast when stack0 is undefined,
                                // we convert it to a ASError, so that avm2 can still catch it
                                if (e instanceof TypeError) {
                                     var _e = context.sec.createError("TypeError", {code:1065, message:e.message})
                                     _e.source = e; e = _e;
                                }
                                stack0 = e;
                                { p = 2731; continue; };
                                throw e;
                            }
                        case 481:
                            try {
                                stack0 = scope1.object;
                                stack0 = stack0.axGetSlot(8);
                                stack1 = 0;
                                if (0 <= stack0) { p = 448; continue; };
                                stack0 = scope1.object;
                                stack0 = stack0.axGetSlot(3);
                                stack1 = 0;
                                if (!(0 >= stack0)) { p = 512; continue; };
                                stack0 = scope1.object;
                                stack1 = 0.5;
                                //IR: CONVERT_D removed, reason: arguments strictly number
                                stack0.axSetSlot(3, 0.5);
                                { p = 529; continue; };
                            }
                            catch(e) {
                                // in case this is a error coming from stack0.__fast when stack0 is undefined,
                                // we convert it to a ASError, so that avm2 can still catch it
                                if (e instanceof TypeError) {
                                     var _e = context.sec.createError("TypeError", {code:1065, message:e.message})
                                     _e.source = e; e = _e;
                                }
                                stack0 = e;
                                { p = 2731; continue; };
                                throw e;
                            }
                        case 512:
                            try {
                                stack0 = scope1.object;
                                stack0 = stack0.axGetSlot(3);
                                stack1 = 1;
                                if (!(1 < stack0)) { p = 529; continue; };
                                stack0 = scope1.object;
                                stack1 = 1;
                                stack1 = +1;
                                stack0.axSetSlot(3, stack1);
                            }
                            catch(e) {
                                // in case this is a error coming from stack0.__fast when stack0 is undefined,
                                // we convert it to a ASError, so that avm2 can still catch it
                                if (e instanceof TypeError) {
                                     var _e = context.sec.createError("TypeError", {code:1065, message:e.message})
                                     _e.source = e; e = _e;
                                }
                                stack0 = e;
                                { p = 2731; continue; };
                                throw e;
                            }
                        case 529:
                            try {
                                stack0 = scope1.object;
                                stack0 = stack0.axGetSlot(4);
                                stack1 = 0;
                                if (!(0 > stack0)) { p = 550; continue; };
                                stack0 = scope1.object;
                                stack1 = 0;
                                stack1 = +0;
                                stack0.axSetSlot(4, stack1);
                                { p = 567; continue; };
                            }
                            catch(e) {
                                // in case this is a error coming from stack0.__fast when stack0 is undefined,
                                // we convert it to a ASError, so that avm2 can still catch it
                                if (e instanceof TypeError) {
                                     var _e = context.sec.createError("TypeError", {code:1065, message:e.message})
                                     _e.source = e; e = _e;
                                }
                                stack0 = e;
                                { p = 2731; continue; };
                                throw e;
                            }
                        case 550:
                            try {
                                stack0 = scope1.object;
                                stack0 = stack0.axGetSlot(4);
                                stack1 = 1;
                                if (!(1 < stack0)) { p = 567; continue; };
                                stack0 = scope1.object;
                                stack1 = 1;
                                stack1 = +1;
                                stack0.axSetSlot(4, stack1);
                            }
                            catch(e) {
                                // in case this is a error coming from stack0.__fast when stack0 is undefined,
                                // we convert it to a ASError, so that avm2 can still catch it
                                if (e instanceof TypeError) {
                                     var _e = context.sec.createError("TypeError", {code:1065, message:e.message})
                                     _e.source = e; e = _e;
                                }
                                stack0 = e;
                                { p = 2731; continue; };
                                throw e;
                            }
                        case 567:
                            try {
                                stack0 = scope1.object;
                                stack0 = stack0.axGetSlot(6);
                                // 7 0::length
                                if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                                    stack0 = stack0['length'];
                                } else {
                                    temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                                    stack0 = temp.$Bglength;
                                    if (stack0 === undefined || typeof stack0 === 'function') {
                                        stack0 = temp.axGetProperty($names[8]);
                                    }
                                }
                                stack1 = 2;
                                if (!(2 < stack0)) { p = 2650; continue; };
                                stack0 = scope1.object;
                                stack1 = 1;
                                
                                stack0.axSetSlot(9, 1);
                                stack0 = scope1.object;
                                stack1 = scope1.object;
                                stack1 = stack1.axGetSlot(6);
                                // 7 0::length
                                //Possible type:undefined
                                if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                                    stack1 = stack1['length'];
                                } else {
                                    temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                                    stack1 = temp.$Bglength;
                                    if (stack1 === undefined || typeof stack1 === 'function') {
                                        stack1 = temp.axGetProperty($names[8]);
                                    }
                                }
                                stack1--;
                                
                                stack0.axSetSlot(10, stack1);
                                stack0 = scope1.object;
                                stack0 = stack0.axGetSlot(6);
                                stack1 = 0;
                                // 27 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::*
                                {
                                    let simple = 0;
                                    const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                                    if (typeof simple === "number") {
                                        stack0 = b_obj.axGetNumericProperty(simple);
                                    } else {
                                        stack0 = b_obj['$Bg' + simple];
                                        if (stack0 === undefined || typeof stack0 === 'function') {
                                            const rm = context.runtimename($names[2], 0);
                                            stack0 = b_obj.axGetProperty(rm);
                                        }
                                    }
                                }
                                // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::x
                                if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                                    stack0 = stack0['x'];
                                } else {
                                    temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                                    stack0 = temp.$Bgx;
                                    if (stack0 === undefined || typeof stack0 === 'function') {
                                        stack0 = temp.axGetProperty($names[5]);
                                    }
                                }
                                stack1 = scope1.object;
                                stack1 = stack1.axGetSlot(6);
                                stack2 = scope1.object;
                                stack2 = stack2.axGetSlot(6);
                                // 7 0::length
                                //Possible type:undefined
                                if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                                    stack2 = stack2['length'];
                                } else {
                                    temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                                    stack2 = temp.$Bglength;
                                    if (stack2 === undefined || typeof stack2 === 'function') {
                                        stack2 = temp.axGetProperty($names[8]);
                                    }
                                }
                                stack2--;
                                // 27 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::*
                                {
                                    let simple = stack2;
                                    const b_obj = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);

                                    if (typeof simple === "number") {
                                        stack1 = b_obj.axGetNumericProperty(simple);
                                    } else {
                                        stack1 = b_obj['$Bg' + simple];
                                        if (stack1 === undefined || typeof stack1 === 'function') {
                                            const rm = context.runtimename($names[2], stack2);
                                            stack1 = b_obj.axGetProperty(rm);
                                        }
                                    }
                                }
                                // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::x
                                //Possible type:undefined
                                if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                                    stack1 = stack1['x'];
                                } else {
                                    temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                                    stack1 = temp.$Bgx;
                                    if (stack1 === undefined || typeof stack1 === 'function') {
                                        stack1 = temp.axGetProperty($names[5]);
                                    }
                                }
                                stack0 = stack0 == stack1;
                                stack1 = stack0;
                                if (!stack1) { p = 668; continue; };
                                stack0 = scope1.object;
                                stack0 = stack0.axGetSlot(6);
                                stack1 = 0;
                                // 27 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::*
                                {
                                    let simple = 0;
                                    const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                                    if (typeof simple === "number") {
                                        stack0 = b_obj.axGetNumericProperty(simple);
                                    } else {
                                        stack0 = b_obj['$Bg' + simple];
                                        if (stack0 === undefined || typeof stack0 === 'function') {
                                            const rm = context.runtimename($names[2], 0);
                                            stack0 = b_obj.axGetProperty(rm);
                                        }
                                    }
                                }
                                // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::y
                                if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                                    stack0 = stack0['y'];
                                } else {
                                    temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                                    stack0 = temp.$Bgy;
                                    if (stack0 === undefined || typeof stack0 === 'function') {
                                        stack0 = temp.axGetProperty($names[6]);
                                    }
                                }
                                stack1 = scope1.object;
                                stack1 = stack1.axGetSlot(6);
                                stack2 = scope1.object;
                                stack2 = stack2.axGetSlot(6);
                                // 7 0::length
                                if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                                    stack2 = stack2['length'];
                                } else {
                                    temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                                    stack2 = temp.$Bglength;
                                    if (stack2 === undefined || typeof stack2 === 'function') {
                                        stack2 = temp.axGetProperty($names[8]);
                                    }
                                }
                                stack2--;
                                // 27 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::*
                                {
                                    let simple = stack2;
                                    const b_obj = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);

                                    if (typeof simple === "number") {
                                        stack1 = b_obj.axGetNumericProperty(simple);
                                    } else {
                                        stack1 = b_obj['$Bg' + simple];
                                        if (stack1 === undefined || typeof stack1 === 'function') {
                                            const rm = context.runtimename($names[2], stack2);
                                            stack1 = b_obj.axGetProperty(rm);
                                        }
                                    }
                                }
                                // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::y
                                //Possible type:undefined
                                if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                                    stack1 = stack1['y'];
                                } else {
                                    temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                                    stack1 = temp.$Bgy;
                                    if (stack1 === undefined || typeof stack1 === 'function') {
                                        stack1 = temp.axGetProperty($names[6]);
                                    }
                                }
                                stack0 = stack0 == stack1;
                            }
                            catch(e) {
                                // in case this is a error coming from stack0.__fast when stack0 is undefined,
                                // we convert it to a ASError, so that avm2 can still catch it
                                if (e instanceof TypeError) {
                                     var _e = context.sec.createError("TypeError", {code:1065, message:e.message})
                                     _e.source = e; e = _e;
                                }
                                stack0 = e;
                                { p = 2731; continue; };
                                throw e;
                            }
                        case 668:
                            try {
                                if (!stack0) { p = 691; continue; };
                                stack0 = scope1.object;
                                stack1 = 0;
                                
                                stack0.axSetSlot(9, 0);
                                stack0 = scope1.object;
                                stack1 = scope1.object;
                                stack1 = stack1.axGetSlot(6);
                                // 7 0::length
                                //Possible type:undefined
                                if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                                    stack1 = stack1['length'];
                                } else {
                                    temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                                    stack1 = temp.$Bglength;
                                    if (stack1 === undefined || typeof stack1 === 'function') {
                                        stack1 = temp.axGetProperty($names[8]);
                                    }
                                }
                                
                                stack0.axSetSlot(10, stack1);
                            }
                            catch(e) {
                                // in case this is a error coming from stack0.__fast when stack0 is undefined,
                                // we convert it to a ASError, so that avm2 can still catch it
                                if (e instanceof TypeError) {
                                     var _e = context.sec.createError("TypeError", {code:1065, message:e.message})
                                     _e.source = e; e = _e;
                                }
                                stack0 = e;
                                { p = 2731; continue; };
                                throw e;
                            }
                        case 691:
                            try {
                                stack0 = scope1.object;
                                // 7 0::Array
                                stack1 = scope1.findScopeProperty($names[1], true, false);
                                //JIT: Support fast construct:Array/Object
                                stack1 = context.constructFast(stack1, [], $names[1]);
                                //IR: Drop coerce, reason: redundant
                                stack0.axSetSlot(11, stack1);
                                stack0 = scope1.object;
                                stack1 = scope1.object;
                                stack1 = stack1.axGetSlot(9);
                                
                                stack0.axSetSlot(8, stack1);
                                { p = 1797; continue; };
                            }
                            catch(e) {
                                // in case this is a error coming from stack0.__fast when stack0 is undefined,
                                // we convert it to a ASError, so that avm2 can still catch it
                                if (e instanceof TypeError) {
                                     var _e = context.sec.createError("TypeError", {code:1065, message:e.message})
                                     _e.source = e; e = _e;
                                }
                                stack0 = e;
                                { p = 2731; continue; };
                                throw e;
                            }
                        case 715:
                            try {
                                stack0 = scope1.object;
                                stack1 = scope1.object;
                                stack1 = stack1.axGetSlot(8);
                                stack1--;
                                stack2 = 0;
                                if (!(0 > stack1)) { p = 751; continue; };
                                stack1 = scope1.object;
                                stack1 = stack1.axGetSlot(6);
                                stack2 = scope1.object;
                                stack2 = stack2.axGetSlot(6);
                                // 7 0::length
                                //Possible type:undefined
                                if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                                    stack2 = stack2['length'];
                                } else {
                                    temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                                    stack2 = temp.$Bglength;
                                    if (stack2 === undefined || typeof stack2 === 'function') {
                                        stack2 = temp.axGetProperty($names[8]);
                                    }
                                }
//                                stack3 = 2;// JIT: redundant assigment, value unused
                                stack2 -= 2;
                                // 27 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::*
                                {
                                    let simple = stack2;
                                    const b_obj = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);

                                    if (typeof simple === "number") {
                                        stack1 = b_obj.axGetNumericProperty(simple);
                                    } else {
                                        stack1 = b_obj['$Bg' + simple];
                                        if (stack1 === undefined || typeof stack1 === 'function') {
                                            const rm = context.runtimename($names[2], stack2);
                                            stack1 = b_obj.axGetProperty(rm);
                                        }
                                    }
                                }
                                
                                { p = 764; continue; };
                            }
                            catch(e) {
                                // in case this is a error coming from stack0.__fast when stack0 is undefined,
                                // we convert it to a ASError, so that avm2 can still catch it
                                if (e instanceof TypeError) {
                                     var _e = context.sec.createError("TypeError", {code:1065, message:e.message})
                                     _e.source = e; e = _e;
                                }
                                stack0 = e;
                                { p = 2731; continue; };
                                throw e;
                            }
                        case 751:
                            try {
                                stack1 = scope1.object;
                                stack1 = stack1.axGetSlot(6);
                                stack2 = scope1.object;
                                stack2 = stack2.axGetSlot(8);
                                stack2--;
                                // 27 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::*
                                {
                                    let simple = stack2;
                                    const b_obj = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);

                                    if (typeof simple === "number") {
                                        stack1 = b_obj.axGetNumericProperty(simple);
                                    } else {
                                        stack1 = b_obj['$Bg' + simple];
                                        if (stack1 === undefined || typeof stack1 === 'function') {
                                            const rm = context.runtimename($names[2], stack2);
                                            stack1 = b_obj.axGetProperty(rm);
                                        }
                                    }
                                }
                                
                            }
                            catch(e) {
                                // in case this is a error coming from stack0.__fast when stack0 is undefined,
                                // we convert it to a ASError, so that avm2 can still catch it
                                if (e instanceof TypeError) {
                                     var _e = context.sec.createError("TypeError", {code:1065, message:e.message})
                                     _e.source = e; e = _e;
                                }
                                stack0 = e;
                                { p = 2731; continue; };
                                throw e;
                            }
                        case 764:
                            try {
                                
                                stack0.axSetSlot(13, stack1);
                                stack0 = scope1.object;
                                stack1 = scope1.object;
                                stack1 = stack1.axGetSlot(6);
                                stack2 = scope1.object;
                                stack2 = stack2.axGetSlot(8);
                                // 27 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::*
                                {
                                    let simple = stack2;
                                    const b_obj = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);

                                    if (typeof simple === "number") {
                                        stack1 = b_obj.axGetNumericProperty(simple);
                                    } else {
                                        stack1 = b_obj['$Bg' + simple];
                                        if (stack1 === undefined || typeof stack1 === 'function') {
                                            const rm = context.runtimename($names[2], stack2);
                                            stack1 = b_obj.axGetProperty(rm);
                                        }
                                    }
                                }
                                
                                stack0.axSetSlot(14, stack1);
                                stack0 = scope1.object;
                                stack1 = scope1.object;
                                stack1 = stack1.axGetSlot(8);
//                                stack2 = 1;// JIT: redundant assigment, value unused
                                stack1 += 1;
                                stack2 = scope1.object;
                                stack2 = stack2.axGetSlot(6);
                                // 7 0::length
                                //Possible type:undefined
                                if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                                    stack2 = stack2['length'];
                                } else {
                                    temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                                    stack2 = temp.$Bglength;
                                    if (stack2 === undefined || typeof stack2 === 'function') {
                                        stack2 = temp.axGetProperty($names[8]);
                                    }
                                }
                                if (stack2 != stack1) { p = 817; continue; };
                                stack1 = scope1.object;
                                stack1 = stack1.axGetSlot(6);
                                stack2 = 1;
                                // 27 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::*
                                {
                                    let simple = 1;
                                    const b_obj = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);

                                    if (typeof simple === "number") {
                                        stack1 = b_obj.axGetNumericProperty(simple);
                                    } else {
                                        stack1 = b_obj['$Bg' + simple];
                                        if (stack1 === undefined || typeof stack1 === 'function') {
                                            const rm = context.runtimename($names[2], 1);
                                            stack1 = b_obj.axGetProperty(rm);
                                        }
                                    }
                                }
                                
                                { p = 832; continue; };
                            }
                            catch(e) {
                                // in case this is a error coming from stack0.__fast when stack0 is undefined,
                                // we convert it to a ASError, so that avm2 can still catch it
                                if (e instanceof TypeError) {
                                     var _e = context.sec.createError("TypeError", {code:1065, message:e.message})
                                     _e.source = e; e = _e;
                                }
                                stack0 = e;
                                { p = 2731; continue; };
                                throw e;
                            }
                        case 817:
                            try {
                                stack1 = scope1.object;
                                stack1 = stack1.axGetSlot(6);
                                stack2 = scope1.object;
                                stack2 = stack2.axGetSlot(8);
//                                stack3 = 1;// JIT: redundant assigment, value unused
                                stack2 += 1;
                                // 27 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::*
                                {
                                    let simple = stack2;
                                    const b_obj = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);

                                    if (typeof simple === "number") {
                                        stack1 = b_obj.axGetNumericProperty(simple);
                                    } else {
                                        stack1 = b_obj['$Bg' + simple];
                                        if (stack1 === undefined || typeof stack1 === 'function') {
                                            const rm = context.runtimename($names[2], stack2);
                                            stack1 = b_obj.axGetProperty(rm);
                                        }
                                    }
                                }
                                
                            }
                            catch(e) {
                                // in case this is a error coming from stack0.__fast when stack0 is undefined,
                                // we convert it to a ASError, so that avm2 can still catch it
                                if (e instanceof TypeError) {
                                     var _e = context.sec.createError("TypeError", {code:1065, message:e.message})
                                     _e.source = e; e = _e;
                                }
                                stack0 = e;
                                { p = 2731; continue; };
                                throw e;
                            }
                        case 832:
                            try {
                                
                                stack0.axSetSlot(15, stack1);
                                stack0 = scope1.object;
                                // 7 0:flash.geom::Point
                                /* GenerateLexImports GETLEX */
//                                stack1 = flash_geom__Point;// JIT: redundant assigment, value unused
                                stack2 = scope1.object;
                                stack2 = stack2.axGetSlot(13);
                                stack3 = scope1.object;
                                stack3 = stack3.axGetSlot(14);
                                if (!(_a = typeof flash_geom__Point, ((_a !== 'object' && _a !== 'function' ) || flash_geom__Point == null || flash_geom__Point[AX_CLASS_SYMBOL]))) {
                                   stack1 = flash_geom__Point.distance(stack2, stack3);
                                } else {
                                    // 7 0::distance
                                    {
                                        let t = flash_geom__Point;
                                        const m = t.$Bgdistance || (t = sec.box(flash_geom__Point), t.$Bgdistance);
                                        if( typeof m === "function" ) { 
                                            stack1 = t.$Bgdistance (stack2, stack3);
                                        } else { 
                                            stack1 = flash_geom__Point.axCallProperty($names[10], [stack2, stack3], false);
                                        }
                                    }
                                }
                                
                                stack0.axSetSlot(16, stack1);
                                stack0 = scope1.object;
                                stack0 = stack0.axGetSlot(16);
                                stack1 = 0.001;
                                if (!(0.001 > stack0)) { p = 871; continue; };
                                stack0 = scope1.object;
                                stack1 = 0.001;
                                
                                stack0.axSetSlot(16, 0.001);
                            }
                            catch(e) {
                                // in case this is a error coming from stack0.__fast when stack0 is undefined,
                                // we convert it to a ASError, so that avm2 can still catch it
                                if (e instanceof TypeError) {
                                     var _e = context.sec.createError("TypeError", {code:1065, message:e.message})
                                     _e.source = e; e = _e;
                                }
                                stack0 = e;
                                { p = 2731; continue; };
                                throw e;
                            }
                        case 871:
                            try {
                                stack0 = scope1.object;
                                // 7 0:flash.geom::Point
                                /* GenerateLexImports GETLEX */
//                                stack1 = flash_geom__Point;// JIT: redundant assigment, value unused
                                stack2 = scope1.object;
                                stack2 = stack2.axGetSlot(14);
                                stack3 = scope1.object;
                                stack3 = stack3.axGetSlot(15);
                                if (!(_a = typeof flash_geom__Point, ((_a !== 'object' && _a !== 'function' ) || flash_geom__Point == null || flash_geom__Point[AX_CLASS_SYMBOL]))) {
                                   stack1 = flash_geom__Point.distance(stack2, stack3);
                                } else {
                                    // 7 0::distance
                                    {
                                        let t = flash_geom__Point;
                                        const m = t.$Bgdistance || (t = sec.box(flash_geom__Point), t.$Bgdistance);
                                        if( typeof m === "function" ) { 
                                            stack1 = t.$Bgdistance (stack2, stack3);
                                        } else { 
                                            stack1 = flash_geom__Point.axCallProperty($names[10], [stack2, stack3], false);
                                        }
                                    }
                                }
                                
                                stack0.axSetSlot(17, stack1);
                                stack0 = scope1.object;
                                stack0 = stack0.axGetSlot(17);
                                stack1 = 0.001;
                                if (!(0.001 > stack0)) { p = 907; continue; };
                                stack0 = scope1.object;
                                stack1 = 0.001;
                                
                                stack0.axSetSlot(17, 0.001);
                            }
                            catch(e) {
                                // in case this is a error coming from stack0.__fast when stack0 is undefined,
                                // we convert it to a ASError, so that avm2 can still catch it
                                if (e instanceof TypeError) {
                                     var _e = context.sec.createError("TypeError", {code:1065, message:e.message})
                                     _e.source = e; e = _e;
                                }
                                stack0 = e;
                                { p = 2731; continue; };
                                throw e;
                            }
                        case 907:
                            try {
                                stack0 = scope1.object;
                                // 7 0:flash.geom::Point
                                /* GenerateLexImports GETLEX */
//                                stack1 = flash_geom__Point;// JIT: redundant assigment, value unused
                                stack2 = scope1.object;
                                stack2 = stack2.axGetSlot(13);
                                stack3 = scope1.object;
                                stack3 = stack3.axGetSlot(15);
                                if (!(_a = typeof flash_geom__Point, ((_a !== 'object' && _a !== 'function' ) || flash_geom__Point == null || flash_geom__Point[AX_CLASS_SYMBOL]))) {
                                   stack1 = flash_geom__Point.distance(stack2, stack3);
                                } else {
                                    // 7 0::distance
                                    {
                                        let t = flash_geom__Point;
                                        const m = t.$Bgdistance || (t = sec.box(flash_geom__Point), t.$Bgdistance);
                                        if( typeof m === "function" ) { 
                                            stack1 = t.$Bgdistance (stack2, stack3);
                                        } else { 
                                            stack1 = flash_geom__Point.axCallProperty($names[10], [stack2, stack3], false);
                                        }
                                    }
                                }
                                
                                stack0.axSetSlot(18, stack1);
                                stack0 = scope1.object;
                                stack0 = stack0.axGetSlot(18);
                                stack1 = 0.001;
                                if (!(0.001 > stack0)) { p = 943; continue; };
                                stack0 = scope1.object;
                                stack1 = 0.001;
                                
                                stack0.axSetSlot(18, 0.001);
                            }
                            catch(e) {
                                // in case this is a error coming from stack0.__fast when stack0 is undefined,
                                // we convert it to a ASError, so that avm2 can still catch it
                                if (e instanceof TypeError) {
                                     var _e = context.sec.createError("TypeError", {code:1065, message:e.message})
                                     _e.source = e; e = _e;
                                }
                                stack0 = e;
                                { p = 2731; continue; };
                                throw e;
                            }
                        case 943:
                            try {
                                stack0 = scope1.object;
                                stack1 = scope1.object;
                                stack1 = stack1.axGetSlot(17);
                                stack2 = scope1.object;
                                stack2 = stack2.axGetSlot(17);
                                stack1 *= stack2;
                                stack2 = scope1.object;
                                stack2 = stack2.axGetSlot(16);
                                stack3 = scope1.object;
                                stack3 = stack3.axGetSlot(16);
                                stack2 *= stack3;
                                stack1 += stack2;
                                stack2 = scope1.object;
                                stack2 = stack2.axGetSlot(18);
                                stack3 = scope1.object;
                                stack3 = stack3.axGetSlot(18);
                                stack2 *= stack3;
                                stack1 -= stack2;
                                stack2 = 2;
                                stack3 = scope1.object;
                                stack3 = stack3.axGetSlot(17);
                                stack2 *= stack3;
                                stack3 = scope1.object;
                                stack3 = stack3.axGetSlot(16);
                                stack2 *= stack3;
                                stack1 /= stack2;
                                
                                stack0.axSetSlot(19, stack1);
                                stack0 = scope1.object;
                                stack0 = stack0.axGetSlot(19);
                                stack1 = -1;
                                if (!(-1 > stack0)) { p = 1011; continue; };
                                stack0 = scope1.object;
                                stack1 = -1;
                                
                                stack0.axSetSlot(19, -1);
                                { p = 1028; continue; };
                            }
                            catch(e) {
                                // in case this is a error coming from stack0.__fast when stack0 is undefined,
                                // we convert it to a ASError, so that avm2 can still catch it
                                if (e instanceof TypeError) {
                                     var _e = context.sec.createError("TypeError", {code:1065, message:e.message})
                                     _e.source = e; e = _e;
                                }
                                stack0 = e;
                                { p = 2731; continue; };
                                throw e;
                            }
                        case 1011:
                            try {
                                stack0 = scope1.object;
                                stack0 = stack0.axGetSlot(19);
                                stack1 = 1;
                                if (!(1 < stack0)) { p = 1028; continue; };
                                stack0 = scope1.object;
                                stack1 = 1;
                                
                                stack0.axSetSlot(19, 1);
                            }
                            catch(e) {
                                // in case this is a error coming from stack0.__fast when stack0 is undefined,
                                // we convert it to a ASError, so that avm2 can still catch it
                                if (e instanceof TypeError) {
                                     var _e = context.sec.createError("TypeError", {code:1065, message:e.message})
                                     _e.source = e; e = _e;
                                }
                                stack0 = e;
                                { p = 2731; continue; };
                                throw e;
                            }
                        case 1028:
                            try {
                                stack0 = scope1.object;
                                // 7 0::Math
                                /* GenerateLexImports GETLEX */
//                                stack1 = __Math;// JIT: redundant assigment, value unused
                                stack2 = scope1.object;
                                stack2 = stack2.axGetSlot(19);
                                if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                                   stack1 = __Math.acos(stack2);
                                } else {
                                    // 7 0::acos
                                    {
                                        let t = __Math;
                                        const m = t.$Bgacos || (t = sec.box(__Math), t.$Bgacos);
                                        if( typeof m === "function" ) { 
                                            stack1 = t.$Bgacos (stack2);
                                        } else { 
                                            stack1 = __Math.axCallProperty($names[12], [stack2], false);
                                        }
                                    }
                                }
                                
                                stack0.axSetSlot(20, stack1);
                                stack0 = scope1.object;
                                // 7 0:flash.geom::Point
                                /* GenerateLexImports */
//                                stack1 = flash_geom__Point_def;// JIT: redundant assigment, value unused
                                stack2 = scope1.object;
                                stack2 = stack2.axGetSlot(13);
                                // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::x
                                //Possible type:undefined
                                if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                                    stack2 = stack2['x'];
                                } else {
                                    temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                                    stack2 = temp.$Bgx;
                                    if (stack2 === undefined || typeof stack2 === 'function') {
                                        stack2 = temp.axGetProperty($names[5]);
                                    }
                                }
                                stack3 = scope1.object;
                                stack3 = stack3.axGetSlot(14);
                                // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::x
                                //Possible type:undefined
                                if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                                    stack3 = stack3['x'];
                                } else {
                                    temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                                    stack3 = temp.$Bgx;
                                    if (stack3 === undefined || typeof stack3 === 'function') {
                                        stack3 = temp.axGetProperty($names[5]);
                                    }
                                }
                                stack2 -= stack3;
                                stack3 = scope1.object;
                                stack3 = stack3.axGetSlot(13);
                                // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::y
                                if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                                    stack3 = stack3['y'];
                                } else {
                                    temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                                    stack3 = temp.$Bgy;
                                    if (stack3 === undefined || typeof stack3 === 'function') {
                                        stack3 = temp.axGetProperty($names[6]);
                                    }
                                }
                                stack4 = scope1.object;
                                stack4 = stack4.axGetSlot(14);
                                // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::y
                                if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                                    stack4 = stack4['y'];
                                } else {
                                    temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                                    stack4 = temp.$Bgy;
                                    if (stack4 === undefined || typeof stack4 === 'function') {
                                        stack4 = temp.axGetProperty($names[6]);
                                    }
                                }
                                stack3 -= stack4;
                                //JIT: Support fast construct:Point/Object
                                stack1 = context.constructFast(flash_geom__Point_def, [stack2, stack3], $names[3]);
                                
                                stack0.axSetSlot(21, stack1);
                                stack0 = scope1.object;
                                // 7 0:flash.geom::Point
                                /* GenerateLexImports */
//                                stack1 = flash_geom__Point_def;// JIT: redundant assigment, value unused
                                stack2 = scope1.object;
                                stack2 = stack2.axGetSlot(14);
                                // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::x
                                if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                                    stack2 = stack2['x'];
                                } else {
                                    temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                                    stack2 = temp.$Bgx;
                                    if (stack2 === undefined || typeof stack2 === 'function') {
                                        stack2 = temp.axGetProperty($names[5]);
                                    }
                                }
                                stack3 = scope1.object;
                                stack3 = stack3.axGetSlot(14);
                                // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::y
                                if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                                    stack3 = stack3['y'];
                                } else {
                                    temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                                    stack3 = temp.$Bgy;
                                    if (stack3 === undefined || typeof stack3 === 'function') {
                                        stack3 = temp.axGetProperty($names[6]);
                                    }
                                }
                                //JIT: Support fast construct:Point/Object
                                stack1 = context.constructFast(flash_geom__Point_def, [stack2, stack3], $names[3]);
                                
                                stack0.axSetSlot(22, stack1);
                                stack0 = scope1.object;
                                // 7 0:flash.geom::Point
                                /* GenerateLexImports */
//                                stack1 = flash_geom__Point_def;// JIT: redundant assigment, value unused
                                stack2 = scope1.object;
                                stack2 = stack2.axGetSlot(15);
                                // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::x
                                if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                                    stack2 = stack2['x'];
                                } else {
                                    temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                                    stack2 = temp.$Bgx;
                                    if (stack2 === undefined || typeof stack2 === 'function') {
                                        stack2 = temp.axGetProperty($names[5]);
                                    }
                                }
                                stack3 = scope1.object;
                                stack3 = stack3.axGetSlot(14);
                                // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::x
                                if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                                    stack3 = stack3['x'];
                                } else {
                                    temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                                    stack3 = temp.$Bgx;
                                    if (stack3 === undefined || typeof stack3 === 'function') {
                                        stack3 = temp.axGetProperty($names[5]);
                                    }
                                }
                                stack2 -= stack3;
                                stack3 = scope1.object;
                                stack3 = stack3.axGetSlot(15);
                                // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::y
                                if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                                    stack3 = stack3['y'];
                                } else {
                                    temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                                    stack3 = temp.$Bgy;
                                    if (stack3 === undefined || typeof stack3 === 'function') {
                                        stack3 = temp.axGetProperty($names[6]);
                                    }
                                }
                                stack4 = scope1.object;
                                stack4 = stack4.axGetSlot(14);
                                // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::y
                                if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                                    stack4 = stack4['y'];
                                } else {
                                    temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                                    stack4 = temp.$Bgy;
                                    if (stack4 === undefined || typeof stack4 === 'function') {
                                        stack4 = temp.axGetProperty($names[6]);
                                    }
                                }
                                stack3 -= stack4;
                                //JIT: Support fast construct:Point/Object
                                stack1 = context.constructFast(flash_geom__Point_def, [stack2, stack3], $names[3]);
                                
                                stack0.axSetSlot(23, stack1);
                                stack0 = scope1.object;
                                stack0 = stack0.axGetSlot(16);
                                stack1 = scope1.object;
                                stack1 = stack1.axGetSlot(17);
                                if (!(stack1 < stack0)) { p = 1176; continue; };
                                stack0 = scope1.object;
                                stack0 = stack0.axGetSlot(21);
                                stack1 = scope1.object;
                                stack1 = stack1.axGetSlot(17);
                                if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                                    stack0.normalize(stack1);
                                } else {
                                    // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::normalize
                                    {
                                        let t = stack0;
                                        const m = t.$Bgnormalize || (t = sec.box(stack0), t.$Bgnormalize);
                                        if( typeof m === "function" ) { 
                                            m.call(t, stack1);
                                        } else { 
                                           stack0.axCallProperty($names[13], [stack1], false);
                                        }
                                    }
                                }
                                { p = 1200; continue; };
                            }
                            catch(e) {
                                // in case this is a error coming from stack0.__fast when stack0 is undefined,
                                // we convert it to a ASError, so that avm2 can still catch it
                                if (e instanceof TypeError) {
                                     var _e = context.sec.createError("TypeError", {code:1065, message:e.message})
                                     _e.source = e; e = _e;
                                }
                                stack0 = e;
                                { p = 2731; continue; };
                                throw e;
                            }
                        case 1176:
                            try {
                                stack0 = scope1.object;
                                stack0 = stack0.axGetSlot(17);
                                stack1 = scope1.object;
                                stack1 = stack1.axGetSlot(16);
                                if (!(stack1 < stack0)) { p = 1200; continue; };
                                stack0 = scope1.object;
                                stack0 = stack0.axGetSlot(23);
                                stack1 = scope1.object;
                                stack1 = stack1.axGetSlot(16);
                                if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                                    stack0.normalize(stack1);
                                } else {
                                    // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::normalize
                                    {
                                        let t = stack0;
                                        const m = t.$Bgnormalize || (t = sec.box(stack0), t.$Bgnormalize);
                                        if( typeof m === "function" ) { 
                                            m.call(t, stack1);
                                        } else { 
                                           stack0.axCallProperty($names[13], [stack1], false);
                                        }
                                    }
                                }
                            }
                            catch(e) {
                                // in case this is a error coming from stack0.__fast when stack0 is undefined,
                                // we convert it to a ASError, so that avm2 can still catch it
                                if (e instanceof TypeError) {
                                     var _e = context.sec.createError("TypeError", {code:1065, message:e.message})
                                     _e.source = e; e = _e;
                                }
                                stack0 = e;
                                { p = 2731; continue; };
                                throw e;
                            }
                        case 1200:
                            try {
                                stack0 = scope1.object;
                                stack0 = stack0.axGetSlot(21);
                                stack1 = scope1.object;
                                stack1 = stack1.axGetSlot(14);
                                // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::x
                                //Possible type:7 0:flash.geom::Point
                                if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                                    stack1 = stack1['x'];
                                } else {
                                    temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                                    stack1 = temp.$Bgx;
                                    if (stack1 === undefined || typeof stack1 === 'function') {
                                        stack1 = temp.axGetProperty($names[5]);
                                    }
                                }
                                stack2 = scope1.object;
                                stack2 = stack2.axGetSlot(14);
                                // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::y
                                if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                                    stack2 = stack2['y'];
                                } else {
                                    temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                                    stack2 = temp.$Bgy;
                                    if (stack2 === undefined || typeof stack2 === 'function') {
                                        stack2 = temp.axGetProperty($names[6]);
                                    }
                                }
                                if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                                    stack0.offset(stack1, stack2);
                                } else {
                                    // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::offset
                                    {
                                        let t = stack0;
                                        const m = t.$Bgoffset || (t = sec.box(stack0), t.$Bgoffset);
                                        if( typeof m === "function" ) { 
                                            m.call(t, stack1, stack2);
                                        } else { 
                                           stack0.axCallProperty($names[14], [stack1, stack2], false);
                                        }
                                    }
                                }
                                stack0 = scope1.object;
                                stack0 = stack0.axGetSlot(23);
                                stack1 = scope1.object;
                                stack1 = stack1.axGetSlot(14);
                                // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::x
                                if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                                    stack1 = stack1['x'];
                                } else {
                                    temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                                    stack1 = temp.$Bgx;
                                    if (stack1 === undefined || typeof stack1 === 'function') {
                                        stack1 = temp.axGetProperty($names[5]);
                                    }
                                }
                                stack2 = scope1.object;
                                stack2 = stack2.axGetSlot(14);
                                // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::y
                                if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                                    stack2 = stack2['y'];
                                } else {
                                    temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                                    stack2 = temp.$Bgy;
                                    if (stack2 === undefined || typeof stack2 === 'function') {
                                        stack2 = temp.axGetProperty($names[6]);
                                    }
                                }
                                if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                                    stack0.offset(stack1, stack2);
                                } else {
                                    // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::offset
                                    {
                                        let t = stack0;
                                        const m = t.$Bgoffset || (t = sec.box(stack0), t.$Bgoffset);
                                        if( typeof m === "function" ) { 
                                            m.call(t, stack1, stack2);
                                        } else { 
                                           stack0.axCallProperty($names[14], [stack1, stack2], false);
                                        }
                                    }
                                }
                                stack0 = scope1.object;
                                stack1 = scope1.object;
                                stack1 = stack1.axGetSlot(22);
                                // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::x
                                if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                                    stack1 = stack1['x'];
                                } else {
                                    temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                                    stack1 = temp.$Bgx;
                                    if (stack1 === undefined || typeof stack1 === 'function') {
                                        stack1 = temp.axGetProperty($names[5]);
                                    }
                                }
                                stack2 = scope1.object;
                                stack2 = stack2.axGetSlot(21);
                                // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::x
                                if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                                    stack2 = stack2['x'];
                                } else {
                                    temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                                    stack2 = temp.$Bgx;
                                    if (stack2 === undefined || typeof stack2 === 'function') {
                                        stack2 = temp.axGetProperty($names[5]);
                                    }
                                }
                                stack1 -= stack2;
                                
                                stack0.axSetSlot(24, stack1);
                                stack0 = scope1.object;
                                stack1 = scope1.object;
                                stack1 = stack1.axGetSlot(22);
                                // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::y
                                if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                                    stack1 = stack1['y'];
                                } else {
                                    temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                                    stack1 = temp.$Bgy;
                                    if (stack1 === undefined || typeof stack1 === 'function') {
                                        stack1 = temp.axGetProperty($names[6]);
                                    }
                                }
                                stack2 = scope1.object;
                                stack2 = stack2.axGetSlot(21);
                                // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::y
                                if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                                    stack2 = stack2['y'];
                                } else {
                                    temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                                    stack2 = temp.$Bgy;
                                    if (stack2 === undefined || typeof stack2 === 'function') {
                                        stack2 = temp.axGetProperty($names[6]);
                                    }
                                }
                                stack1 -= stack2;
                                
                                stack0.axSetSlot(25, stack1);
                                stack0 = scope1.object;
                                stack1 = scope1.object;
                                stack1 = stack1.axGetSlot(22);
                                // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::x
                                if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                                    stack1 = stack1['x'];
                                } else {
                                    temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                                    stack1 = temp.$Bgx;
                                    if (stack1 === undefined || typeof stack1 === 'function') {
                                        stack1 = temp.axGetProperty($names[5]);
                                    }
                                }
                                stack2 = scope1.object;
                                stack2 = stack2.axGetSlot(23);
                                // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::x
                                if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                                    stack2 = stack2['x'];
                                } else {
                                    temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                                    stack2 = temp.$Bgx;
                                    if (stack2 === undefined || typeof stack2 === 'function') {
                                        stack2 = temp.axGetProperty($names[5]);
                                    }
                                }
                                stack1 -= stack2;
                                
                                stack0.axSetSlot(26, stack1);
                                stack0 = scope1.object;
                                stack1 = scope1.object;
                                stack1 = stack1.axGetSlot(22);
                                // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::y
                                if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                                    stack1 = stack1['y'];
                                } else {
                                    temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                                    stack1 = temp.$Bgy;
                                    if (stack1 === undefined || typeof stack1 === 'function') {
                                        stack1 = temp.axGetProperty($names[6]);
                                    }
                                }
                                stack2 = scope1.object;
                                stack2 = stack2.axGetSlot(23);
                                // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::y
                                if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                                    stack2 = stack2['y'];
                                } else {
                                    temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                                    stack2 = temp.$Bgy;
                                    if (stack2 === undefined || typeof stack2 === 'function') {
                                        stack2 = temp.axGetProperty($names[6]);
                                    }
                                }
                                stack1 -= stack2;
                                
                                stack0.axSetSlot(27, stack1);
                                stack0 = scope1.object;
                                stack1 = scope1.object;
                                stack1 = stack1.axGetSlot(24);
                                stack2 = scope1.object;
                                stack2 = stack2.axGetSlot(26);
                                stack1 += stack2;
                                
                                stack0.axSetSlot(28, stack1);
                                stack0 = scope1.object;
                                stack1 = scope1.object;
                                stack1 = stack1.axGetSlot(25);
                                stack2 = scope1.object;
                                stack2 = stack2.axGetSlot(27);
                                stack1 += stack2;
                                
                                stack0.axSetSlot(29, stack1);
                                stack0 = scope1.object;
                                stack0 = stack0.axGetSlot(28);
                                stack1 = 0;
                                stack0 = stack0 == 0;
                                stack1 = stack0;
                                if (!stack1) { p = 1372; continue; };
                                stack0 = scope1.object;
                                stack0 = stack0.axGetSlot(29);
                                stack1 = 0;
                                stack0 = stack0 == 0;
                            }
                            catch(e) {
                                // in case this is a error coming from stack0.__fast when stack0 is undefined,
                                // we convert it to a ASError, so that avm2 can still catch it
                                if (e instanceof TypeError) {
                                     var _e = context.sec.createError("TypeError", {code:1065, message:e.message})
                                     _e.source = e; e = _e;
                                }
                                stack0 = e;
                                { p = 2731; continue; };
                                throw e;
                            }
                        case 1372:
                            try {
                                if (!stack0) { p = 1395; continue; };
                                stack0 = scope1.object;
                                stack1 = scope1.object;
                                stack1 = stack1.axGetSlot(26);
                                stack1 = -stack1;
                                
                                stack0.axSetSlot(28, stack1);
                                stack0 = scope1.object;
                                stack1 = scope1.object;
                                stack1 = stack1.axGetSlot(27);
                                
                                stack0.axSetSlot(29, stack1);
                            }
                            catch(e) {
                                // in case this is a error coming from stack0.__fast when stack0 is undefined,
                                // we convert it to a ASError, so that avm2 can still catch it
                                if (e instanceof TypeError) {
                                     var _e = context.sec.createError("TypeError", {code:1065, message:e.message})
                                     _e.source = e; e = _e;
                                }
                                stack0 = e;
                                { p = 2731; continue; };
                                throw e;
                            }
                        case 1395:
                            try {
                                stack0 = scope1.object;
                                stack0 = stack0.axGetSlot(25);
                                stack1 = 0;
                                stack0 = stack0 == 0;
                                stack1 = stack0;
                                if (!stack1) { p = 1415; continue; };
                                stack0 = scope1.object;
                                stack0 = stack0.axGetSlot(27);
                                stack1 = 0;
                                stack0 = stack0 == 0;
                            }
                            catch(e) {
                                // in case this is a error coming from stack0.__fast when stack0 is undefined,
                                // we convert it to a ASError, so that avm2 can still catch it
                                if (e instanceof TypeError) {
                                     var _e = context.sec.createError("TypeError", {code:1065, message:e.message})
                                     _e.source = e; e = _e;
                                }
                                stack0 = e;
                                { p = 2731; continue; };
                                throw e;
                            }
                        case 1415:
                            try {
                                if (!stack0) { p = 1437; continue; };
                                stack0 = scope1.object;
                                stack1 = 0;
                                
                                stack0.axSetSlot(28, 0);
                                stack0 = scope1.object;
                                stack1 = 1;
                                
                                stack0.axSetSlot(29, 1);
                                { p = 1475; continue; };
                            }
                            catch(e) {
                                // in case this is a error coming from stack0.__fast when stack0 is undefined,
                                // we convert it to a ASError, so that avm2 can still catch it
                                if (e instanceof TypeError) {
                                     var _e = context.sec.createError("TypeError", {code:1065, message:e.message})
                                     _e.source = e; e = _e;
                                }
                                stack0 = e;
                                { p = 2731; continue; };
                                throw e;
                            }
                        case 1437:
                            try {
                                stack0 = scope1.object;
                                stack0 = stack0.axGetSlot(24);
                                stack1 = 0;
                                stack0 = stack0 == 0;
                                stack1 = stack0;
                                if (!stack1) { p = 1457; continue; };
                                stack0 = scope1.object;
                                stack0 = stack0.axGetSlot(26);
                                stack1 = 0;
                                stack0 = stack0 == 0;
                            }
                            catch(e) {
                                // in case this is a error coming from stack0.__fast when stack0 is undefined,
                                // we convert it to a ASError, so that avm2 can still catch it
                                if (e instanceof TypeError) {
                                     var _e = context.sec.createError("TypeError", {code:1065, message:e.message})
                                     _e.source = e; e = _e;
                                }
                                stack0 = e;
                                { p = 2731; continue; };
                                throw e;
                            }
                        case 1457:
                            try {
                                if (!stack0) { p = 1475; continue; };
                                stack0 = scope1.object;
                                stack1 = 1;
                                
                                stack0.axSetSlot(28, 1);
                                stack0 = scope1.object;
                                stack1 = 0;
                                
                                stack0.axSetSlot(29, 0);
                            }
                            catch(e) {
                                // in case this is a error coming from stack0.__fast when stack0 is undefined,
                                // we convert it to a ASError, so that avm2 can still catch it
                                if (e instanceof TypeError) {
                                     var _e = context.sec.createError("TypeError", {code:1065, message:e.message})
                                     _e.source = e; e = _e;
                                }
                                stack0 = e;
                                { p = 2731; continue; };
                                throw e;
                            }
                        case 1475:
                            try {
                                stack0 = scope1.object;
                                // 7 0::Math
                                /* GenerateLexImports GETLEX */
//                                stack1 = __Math;// JIT: redundant assigment, value unused
                                stack2 = scope1.object;
                                stack2 = stack2.axGetSlot(28);
                                stack3 = scope1.object;
                                stack3 = stack3.axGetSlot(28);
                                stack2 *= stack3;
                                stack3 = scope1.object;
                                stack3 = stack3.axGetSlot(29);
                                stack4 = scope1.object;
                                stack4 = stack4.axGetSlot(29);
                                stack3 *= stack4;
                                stack2 += stack3;
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
                                            stack1 = __Math.axCallProperty($names[15], [stack2], false);
                                        }
                                    }
                                }
                                
                                stack0.axSetSlot(30, stack1);
                                stack0 = scope1.object;
                                // 7 0::Math
                                /* GenerateLexImports GETLEX */
//                                stack1 = __Math;// JIT: redundant assigment, value unused
                                stack2 = scope1.object;
                                stack2 = stack2.axGetSlot(29);
                                stack3 = scope1.object;
                                stack3 = stack3.axGetSlot(28);
                                if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                                   stack1 = __Math.atan2(stack2, stack3);
                                } else {
                                    // 7 0::atan2
                                    {
                                        let t = __Math;
                                        const m = t.$Bgatan2 || (t = sec.box(__Math), t.$Bgatan2);
                                        if( typeof m === "function" ) { 
                                            stack1 = t.$Bgatan2 (stack2, stack3);
                                        } else { 
                                            stack1 = __Math.axCallProperty($names[16], [stack2, stack3], false);
                                        }
                                    }
                                }
                                
                                stack0.axSetSlot(31, stack1);
                                stack0 = scope1.object;
                                // 7 0::Math
                                /* GenerateLexImports GETLEX */
//                                stack1 = __Math;// JIT: redundant assigment, value unused
                                stack2 = scope1.object;
                                stack2 = stack2.axGetSlot(16);
                                stack3 = scope1.object;
                                stack3 = stack3.axGetSlot(17);
                                if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                                   stack1 = __Math.min(stack2, stack3);
                                } else {
                                    // 7 0::min
                                    {
                                        let t = __Math;
                                        const m = t.$Bgmin || (t = sec.box(__Math), t.$Bgmin);
                                        if( typeof m === "function" ) { 
                                            stack1 = t.$Bgmin (stack2, stack3);
                                        } else { 
                                            stack1 = __Math.axCallProperty($names[17], [stack2, stack3], false);
                                        }
                                    }
                                }
                                stack2 = scope1.object;
                                stack2 = stack2.axGetSlot(3);
                                stack1 *= stack2;
                                
                                stack0.axSetSlot(32, stack1);
                                stack0 = scope1.object;
                                stack1 = scope1.object;
                                stack1 = stack1.axGetSlot(20);
                                // 7 0::Math
                                /* GenerateLexImports GETLEX */
//                                stack2 = __Math;// JIT: redundant assigment, value unused
                                // 7 0::PI
                                //Possible type:7 0::Math
                                if (!(__Math != undefined && __Math[AX_CLASS_SYMBOL])) {
                                    stack2 = __Math['PI'];
                                } else {
                                    temp = __Math[AX_CLASS_SYMBOL] ? __Math : sec.box(__Math);
                                    stack2 = temp.$BgPI;
                                    if (stack2 === undefined || typeof stack2 === 'function') {
                                        stack2 = temp.axGetProperty($names[18]);
                                    }
                                }
                                stack1 /= stack2;
                                
                                stack0.axSetSlot(33, stack1);
                                stack0 = scope1.object;
                                stack1 = scope1.object;
                                stack1 = stack1.axGetSlot(32);
                                stack2 = 1;
                                stack3 = scope1.object;
                                stack3 = stack3.axGetSlot(4);
                                stack2 -= stack3;
                                stack3 = scope1.object;
                                stack3 = stack3.axGetSlot(4);
                                stack4 = scope1.object;
                                stack4 = stack4.axGetSlot(33);
                                stack3 *= stack4;
                                stack2 += stack3;
                                stack1 *= stack2;
                                
                                stack0.axSetSlot(32, stack1);
                                stack0 = scope1.object;
                                stack1 = scope1.object;
                                stack1 = stack1.axGetSlot(31);
                                // 7 0::Math
                                /* GenerateLexImports GETLEX */
//                                stack2 = __Math;// JIT: redundant assigment, value unused
                                // 7 0::PI
                                //Possible type:7 0::Math
                                if (!(__Math != undefined && __Math[AX_CLASS_SYMBOL])) {
                                    stack2 = __Math['PI'];
                                } else {
                                    temp = __Math[AX_CLASS_SYMBOL] ? __Math : sec.box(__Math);
                                    stack2 = temp.$BgPI;
                                    if (stack2 === undefined || typeof stack2 === 'function') {
                                        stack2 = temp.axGetProperty($names[18]);
                                    }
                                }
//                                stack3 = 2;// JIT: redundant assigment, value unused
                                stack2 /= 2;
                                stack1 += stack2;
                                
                                stack0.axSetSlot(34, stack1);
                                stack0 = scope1.object;
                                // 7 0:flash.geom::Point
                                /* GenerateLexImports GETLEX */
//                                stack1 = flash_geom__Point;// JIT: redundant assigment, value unused
                                stack2 = scope1.object;
                                stack2 = stack2.axGetSlot(32);
                                stack3 = scope1.object;
                                stack3 = stack3.axGetSlot(34);
                                if (!(_a = typeof flash_geom__Point, ((_a !== 'object' && _a !== 'function' ) || flash_geom__Point == null || flash_geom__Point[AX_CLASS_SYMBOL]))) {
                                   stack1 = flash_geom__Point.polar(stack2, stack3);
                                } else {
                                    // 7 0::polar
                                    {
                                        let t = flash_geom__Point;
                                        const m = t.$Bgpolar || (t = sec.box(flash_geom__Point), t.$Bgpolar);
                                        if( typeof m === "function" ) { 
                                            stack1 = t.$Bgpolar (stack2, stack3);
                                        } else { 
                                            stack1 = flash_geom__Point.axCallProperty($names[19], [stack2, stack3], false);
                                        }
                                    }
                                }
                                
                                stack0.axSetSlot(35, stack1);
                                stack0 = scope1.object;
                                // 7 0:flash.geom::Point
                                /* GenerateLexImports GETLEX */
//                                stack1 = flash_geom__Point;// JIT: redundant assigment, value unused
                                stack2 = scope1.object;
                                stack2 = stack2.axGetSlot(32);
                                stack3 = scope1.object;
                                stack3 = stack3.axGetSlot(34);
                                // 7 0::Math
                                /* GenerateLexImports GETLEX */
//                                stack4 = __Math;// JIT: redundant assigment, value unused
                                // 7 0::PI
                                //Possible type:7 0::Math
                                if (!(__Math != undefined && __Math[AX_CLASS_SYMBOL])) {
                                    stack4 = __Math['PI'];
                                } else {
                                    temp = __Math[AX_CLASS_SYMBOL] ? __Math : sec.box(__Math);
                                    stack4 = temp.$BgPI;
                                    if (stack4 === undefined || typeof stack4 === 'function') {
                                        stack4 = temp.axGetProperty($names[18]);
                                    }
                                }
                                stack3 += stack4;
                                if (!(_a = typeof flash_geom__Point, ((_a !== 'object' && _a !== 'function' ) || flash_geom__Point == null || flash_geom__Point[AX_CLASS_SYMBOL]))) {
                                   stack1 = flash_geom__Point.polar(stack2, stack3);
                                } else {
                                    // 7 0::polar
                                    {
                                        let t = flash_geom__Point;
                                        const m = t.$Bgpolar || (t = sec.box(flash_geom__Point), t.$Bgpolar);
                                        if( typeof m === "function" ) { 
                                            stack1 = t.$Bgpolar (stack2, stack3);
                                        } else { 
                                            stack1 = flash_geom__Point.axCallProperty($names[19], [stack2, stack3], false);
                                        }
                                    }
                                }
                                
                                stack0.axSetSlot(36, stack1);
                                stack0 = scope1.object;
                                stack0 = stack0.axGetSlot(36);
                                stack1 = scope1.object;
                                stack1 = stack1.axGetSlot(14);
                                // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::x
                                //Possible type:7 0:flash.geom::Point
                                if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                                    stack1 = stack1['x'];
                                } else {
                                    temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                                    stack1 = temp.$Bgx;
                                    if (stack1 === undefined || typeof stack1 === 'function') {
                                        stack1 = temp.axGetProperty($names[5]);
                                    }
                                }
                                stack2 = scope1.object;
                                stack2 = stack2.axGetSlot(14);
                                // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::y
                                if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                                    stack2 = stack2['y'];
                                } else {
                                    temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                                    stack2 = temp.$Bgy;
                                    if (stack2 === undefined || typeof stack2 === 'function') {
                                        stack2 = temp.axGetProperty($names[6]);
                                    }
                                }
                                if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                                    stack0.offset(stack1, stack2);
                                } else {
                                    // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::offset
                                    {
                                        let t = stack0;
                                        const m = t.$Bgoffset || (t = sec.box(stack0), t.$Bgoffset);
                                        if( typeof m === "function" ) { 
                                            m.call(t, stack1, stack2);
                                        } else { 
                                           stack0.axCallProperty($names[14], [stack1, stack2], false);
                                        }
                                    }
                                }
                                stack0 = scope1.object;
                                stack0 = stack0.axGetSlot(35);
                                stack1 = scope1.object;
                                stack1 = stack1.axGetSlot(14);
                                // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::x
                                if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                                    stack1 = stack1['x'];
                                } else {
                                    temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                                    stack1 = temp.$Bgx;
                                    if (stack1 === undefined || typeof stack1 === 'function') {
                                        stack1 = temp.axGetProperty($names[5]);
                                    }
                                }
                                stack2 = scope1.object;
                                stack2 = stack2.axGetSlot(14);
                                // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::y
                                if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                                    stack2 = stack2['y'];
                                } else {
                                    temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                                    stack2 = temp.$Bgy;
                                    if (stack2 === undefined || typeof stack2 === 'function') {
                                        stack2 = temp.axGetProperty($names[6]);
                                    }
                                }
                                if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                                    stack0.offset(stack1, stack2);
                                } else {
                                    // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::offset
                                    {
                                        let t = stack0;
                                        const m = t.$Bgoffset || (t = sec.box(stack0), t.$Bgoffset);
                                        if( typeof m === "function" ) { 
                                            m.call(t, stack1, stack2);
                                        } else { 
                                           stack0.axCallProperty($names[14], [stack1, stack2], false);
                                        }
                                    }
                                }
                                // 7 0:flash.geom::Point
                                /* GenerateLexImports GETLEX */
//                                stack0 = flash_geom__Point;// JIT: redundant assigment, value unused
                                stack1 = scope1.object;
                                stack1 = stack1.axGetSlot(35);
                                stack2 = scope1.object;
                                stack2 = stack2.axGetSlot(15);
                                if (!(_a = typeof flash_geom__Point, ((_a !== 'object' && _a !== 'function' ) || flash_geom__Point == null || flash_geom__Point[AX_CLASS_SYMBOL]))) {
                                   stack0 = flash_geom__Point.distance(stack1, stack2);
                                } else {
                                    // 7 0::distance
                                    {
                                        let t = flash_geom__Point;
                                        const m = t.$Bgdistance || (t = sec.box(flash_geom__Point), t.$Bgdistance);
                                        if( typeof m === "function" ) { 
                                            stack0 = t.$Bgdistance (stack1, stack2);
                                        } else { 
                                            stack0 = flash_geom__Point.axCallProperty($names[10], [stack1, stack2], false);
                                        }
                                    }
                                }
                                // 7 0:flash.geom::Point
                                /* GenerateLexImports GETLEX */
//                                stack1 = flash_geom__Point;// JIT: redundant assigment, value unused
                                stack2 = scope1.object;
                                stack2 = stack2.axGetSlot(36);
                                stack3 = scope1.object;
                                stack3 = stack3.axGetSlot(15);
                                if (!(_a = typeof flash_geom__Point, ((_a !== 'object' && _a !== 'function' ) || flash_geom__Point == null || flash_geom__Point[AX_CLASS_SYMBOL]))) {
                                   stack1 = flash_geom__Point.distance(stack2, stack3);
                                } else {
                                    // 7 0::distance
                                    {
                                        let t = flash_geom__Point;
                                        const m = t.$Bgdistance || (t = sec.box(flash_geom__Point), t.$Bgdistance);
                                        if( typeof m === "function" ) { 
                                            stack1 = t.$Bgdistance (stack2, stack3);
                                        } else { 
                                            stack1 = flash_geom__Point.axCallProperty($names[10], [stack2, stack3], false);
                                        }
                                    }
                                }
                                if (!(stack1 < stack0)) { p = 1762; continue; };
                                stack0 = scope1.object;
                                stack0 = stack0.axGetSlot(11);
                                stack1 = scope1.object;
                                stack1 = stack1.axGetSlot(8);
                                // 7 0::Array
                                stack2 = scope1.findScopeProperty($names[1], true, false);
                                stack3 = scope1.object;
                                stack3 = stack3.axGetSlot(35);
                                stack4 = scope1.object;
                                stack4 = stack4.axGetSlot(36);
                                //JIT: Support fast construct:Array/Object
                                stack2 = context.constructFast(stack2, [stack3, stack4], $names[1]);
                                context.setproperty(context.runtimename($names[2], stack1), stack2, stack0);
                                { p = 1786; continue; };
                            }
                            catch(e) {
                                // in case this is a error coming from stack0.__fast when stack0 is undefined,
                                // we convert it to a ASError, so that avm2 can still catch it
                                if (e instanceof TypeError) {
                                     var _e = context.sec.createError("TypeError", {code:1065, message:e.message})
                                     _e.source = e; e = _e;
                                }
                                stack0 = e;
                                { p = 2731; continue; };
                                throw e;
                            }
                        case 1762:
                            try {
                                stack0 = scope1.object;
                                stack0 = stack0.axGetSlot(11);
                                stack1 = scope1.object;
                                stack1 = stack1.axGetSlot(8);
                                // 7 0::Array
                                stack2 = scope1.findScopeProperty($names[1], true, false);
                                stack3 = scope1.object;
                                stack3 = stack3.axGetSlot(36);
                                stack4 = scope1.object;
                                stack4 = stack4.axGetSlot(35);
                                //JIT: Support fast construct:Array/Object
                                stack2 = context.constructFast(stack2, [stack3, stack4], $names[1]);
                                context.setproperty(context.runtimename($names[2], stack1), stack2, stack0);
                            }
                            catch(e) {
                                // in case this is a error coming from stack0.__fast when stack0 is undefined,
                                // we convert it to a ASError, so that avm2 can still catch it
                                if (e instanceof TypeError) {
                                     var _e = context.sec.createError("TypeError", {code:1065, message:e.message})
                                     _e.source = e; e = _e;
                                }
                                stack0 = e;
                                { p = 2731; continue; };
                                throw e;
                            }
                        case 1786:
                            try {
                                stack0 = scope1.object;
                                stack0 = stack0.axGetSlot(8);
                                stack0++;
                                
                                stack1 = scope1.object;
                                temp = stack1;
                                stack1 = stack0;
                                stack0 = temp;
                                temp = undefined;
                                stack0.axSetSlot(8, stack1);
                            }
                            catch(e) {
                                // in case this is a error coming from stack0.__fast when stack0 is undefined,
                                // we convert it to a ASError, so that avm2 can still catch it
                                if (e instanceof TypeError) {
                                     var _e = context.sec.createError("TypeError", {code:1065, message:e.message})
                                     _e.source = e; e = _e;
                                }
                                stack0 = e;
                                { p = 2731; continue; };
                                throw e;
                            }
                        case 1797:
                            try {
                                stack0 = scope1.object;
                                stack0 = stack0.axGetSlot(8);
                                stack1 = scope1.object;
                                stack1 = stack1.axGetSlot(10);
                                if (stack1 > stack0) { p = 715; continue; };
                                stack0 = scope1.object;
                                stack0 = stack0.axGetSlot(5);
                                if (!stack0) { p = 1853; continue; };
                                stack0 = scope1.object;
                                stack0 = stack0.axGetSlot(1);
                                stack1 = scope1.object;
                                stack1 = stack1.axGetSlot(6);
                                stack2 = 0;
                                // 27 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::*
                                {
                                    let simple = 0;
                                    const b_obj = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);

                                    if (typeof simple === "number") {
                                        stack1 = b_obj.axGetNumericProperty(simple);
                                    } else {
                                        stack1 = b_obj['$Bg' + simple];
                                        if (stack1 === undefined || typeof stack1 === 'function') {
                                            const rm = context.runtimename($names[2], 0);
                                            stack1 = b_obj.axGetProperty(rm);
                                        }
                                    }
                                }
                                // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::x
                                //Possible type:7 0:flash.geom::Point
                                if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                                    stack1 = stack1['x'];
                                } else {
                                    temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                                    stack1 = temp.$Bgx;
                                    if (stack1 === undefined || typeof stack1 === 'function') {
                                        stack1 = temp.axGetProperty($names[5]);
                                    }
                                }
                                stack2 = scope1.object;
                                stack2 = stack2.axGetSlot(6);
                                stack3 = 0;
                                // 27 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::*
                                {
                                    let simple = 0;
                                    const b_obj = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);

                                    if (typeof simple === "number") {
                                        stack2 = b_obj.axGetNumericProperty(simple);
                                    } else {
                                        stack2 = b_obj['$Bg' + simple];
                                        if (stack2 === undefined || typeof stack2 === 'function') {
                                            const rm = context.runtimename($names[2], 0);
                                            stack2 = b_obj.axGetProperty(rm);
                                        }
                                    }
                                }
                                // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::y
                                //Possible type:undefined
                                if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                                    stack2 = stack2['y'];
                                } else {
                                    temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                                    stack2 = temp.$Bgy;
                                    if (stack2 === undefined || typeof stack2 === 'function') {
                                        stack2 = temp.axGetProperty($names[6]);
                                    }
                                }
                                if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                                    stack0.moveTo(stack1, stack2);
                                } else {
                                    // 7 0::moveTo
                                    {
                                        let t = stack0;
                                        const m = t.$BgmoveTo || (t = sec.box(stack0), t.$BgmoveTo);
                                        if( typeof m === "function" ) { 
                                            m.call(t, stack1, stack2);
                                        } else { 
                                           stack0.axCallProperty($names[20], [stack1, stack2], false);
                                        }
                                    }
                                }
                                { p = 1885; continue; };
                            }
                            catch(e) {
                                // in case this is a error coming from stack0.__fast when stack0 is undefined,
                                // we convert it to a ASError, so that avm2 can still catch it
                                if (e instanceof TypeError) {
                                     var _e = context.sec.createError("TypeError", {code:1065, message:e.message})
                                     _e.source = e; e = _e;
                                }
                                stack0 = e;
                                { p = 2731; continue; };
                                throw e;
                            }
                        case 1853:
                            try {
                                stack0 = scope1.object;
                                stack0 = stack0.axGetSlot(1);
                                stack1 = scope1.object;
                                stack1 = stack1.axGetSlot(6);
                                stack2 = 0;
                                // 27 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::*
                                {
                                    let simple = 0;
                                    const b_obj = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);

                                    if (typeof simple === "number") {
                                        stack1 = b_obj.axGetNumericProperty(simple);
                                    } else {
                                        stack1 = b_obj['$Bg' + simple];
                                        if (stack1 === undefined || typeof stack1 === 'function') {
                                            const rm = context.runtimename($names[2], 0);
                                            stack1 = b_obj.axGetProperty(rm);
                                        }
                                    }
                                }
                                // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::x
                                if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                                    stack1 = stack1['x'];
                                } else {
                                    temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                                    stack1 = temp.$Bgx;
                                    if (stack1 === undefined || typeof stack1 === 'function') {
                                        stack1 = temp.axGetProperty($names[5]);
                                    }
                                }
                                stack2 = scope1.object;
                                stack2 = stack2.axGetSlot(6);
                                stack3 = 0;
                                // 27 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::*
                                {
                                    let simple = 0;
                                    const b_obj = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);

                                    if (typeof simple === "number") {
                                        stack2 = b_obj.axGetNumericProperty(simple);
                                    } else {
                                        stack2 = b_obj['$Bg' + simple];
                                        if (stack2 === undefined || typeof stack2 === 'function') {
                                            const rm = context.runtimename($names[2], 0);
                                            stack2 = b_obj.axGetProperty(rm);
                                        }
                                    }
                                }
                                // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::y
                                //Possible type:undefined
                                if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                                    stack2 = stack2['y'];
                                } else {
                                    temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                                    stack2 = temp.$Bgy;
                                    if (stack2 === undefined || typeof stack2 === 'function') {
                                        stack2 = temp.axGetProperty($names[6]);
                                    }
                                }
                                if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                                    stack0.lineTo(stack1, stack2);
                                } else {
                                    // 7 0::lineTo
                                    {
                                        let t = stack0;
                                        const m = t.$BglineTo || (t = sec.box(stack0), t.$BglineTo);
                                        if( typeof m === "function" ) { 
                                            m.call(t, stack1, stack2);
                                        } else { 
                                           stack0.axCallProperty($names[21], [stack1, stack2], false);
                                        }
                                    }
                                }
                            }
                            catch(e) {
                                // in case this is a error coming from stack0.__fast when stack0 is undefined,
                                // we convert it to a ASError, so that avm2 can still catch it
                                if (e instanceof TypeError) {
                                     var _e = context.sec.createError("TypeError", {code:1065, message:e.message})
                                     _e.source = e; e = _e;
                                }
                                stack0 = e;
                                { p = 2731; continue; };
                                throw e;
                            }
                        case 1885:
                            try {
                                stack0 = scope1.object;
                                stack0 = stack0.axGetSlot(9);
                                stack1 = 1;
                                if (1 != stack0) { p = 1961; continue; };
                                stack0 = scope1.object;
                                stack0 = stack0.axGetSlot(1);
                                stack1 = scope1.object;
                                stack1 = stack1.axGetSlot(11);
                                stack2 = 1;
                                // 27 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::*
                                {
                                    let simple = 1;
                                    const b_obj = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);

                                    if (typeof simple === "number") {
                                        stack1 = b_obj.axGetNumericProperty(simple);
                                    } else {
                                        stack1 = b_obj['$Bg' + simple];
                                        if (stack1 === undefined || typeof stack1 === 'function') {
                                            const rm = context.runtimename($names[2], 1);
                                            stack1 = b_obj.axGetProperty(rm);
                                        }
                                    }
                                }
                                stack2 = 0;
                                // 27 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::*
                                {
                                    let simple = 0;
                                    const b_obj = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);

                                    if (typeof simple === "number") {
                                        stack1 = b_obj.axGetNumericProperty(simple);
                                    } else {
                                        stack1 = b_obj['$Bg' + simple];
                                        if (stack1 === undefined || typeof stack1 === 'function') {
                                            const rm = context.runtimename($names[2], 0);
                                            stack1 = b_obj.axGetProperty(rm);
                                        }
                                    }
                                }
                                // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::x
                                //Possible type:undefined
                                if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                                    stack1 = stack1['x'];
                                } else {
                                    temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                                    stack1 = temp.$Bgx;
                                    if (stack1 === undefined || typeof stack1 === 'function') {
                                        stack1 = temp.axGetProperty($names[5]);
                                    }
                                }
                                stack2 = scope1.object;
                                stack2 = stack2.axGetSlot(11);
                                stack3 = 1;
                                // 27 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::*
                                {
                                    let simple = 1;
                                    const b_obj = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);

                                    if (typeof simple === "number") {
                                        stack2 = b_obj.axGetNumericProperty(simple);
                                    } else {
                                        stack2 = b_obj['$Bg' + simple];
                                        if (stack2 === undefined || typeof stack2 === 'function') {
                                            const rm = context.runtimename($names[2], 1);
                                            stack2 = b_obj.axGetProperty(rm);
                                        }
                                    }
                                }
                                stack3 = 0;
                                // 27 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::*
                                {
                                    let simple = 0;
                                    const b_obj = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);

                                    if (typeof simple === "number") {
                                        stack2 = b_obj.axGetNumericProperty(simple);
                                    } else {
                                        stack2 = b_obj['$Bg' + simple];
                                        if (stack2 === undefined || typeof stack2 === 'function') {
                                            const rm = context.runtimename($names[2], 0);
                                            stack2 = b_obj.axGetProperty(rm);
                                        }
                                    }
                                }
                                // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::y
                                //Possible type:undefined
                                if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                                    stack2 = stack2['y'];
                                } else {
                                    temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                                    stack2 = temp.$Bgy;
                                    if (stack2 === undefined || typeof stack2 === 'function') {
                                        stack2 = temp.axGetProperty($names[6]);
                                    }
                                }
                                stack3 = scope1.object;
                                stack3 = stack3.axGetSlot(6);
                                stack4 = 1;
                                // 27 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::*
                                {
                                    let simple = 1;
                                    const b_obj = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);

                                    if (typeof simple === "number") {
                                        stack3 = b_obj.axGetNumericProperty(simple);
                                    } else {
                                        stack3 = b_obj['$Bg' + simple];
                                        if (stack3 === undefined || typeof stack3 === 'function') {
                                            const rm = context.runtimename($names[2], 1);
                                            stack3 = b_obj.axGetProperty(rm);
                                        }
                                    }
                                }
                                // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::x
                                //Possible type:undefined
                                if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                                    stack3 = stack3['x'];
                                } else {
                                    temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                                    stack3 = temp.$Bgx;
                                    if (stack3 === undefined || typeof stack3 === 'function') {
                                        stack3 = temp.axGetProperty($names[5]);
                                    }
                                }
                                stack4 = scope1.object;
                                stack4 = stack4.axGetSlot(6);
                                stack5 = 1;
                                // 27 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::*
                                {
                                    let simple = 1;
                                    const b_obj = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);

                                    if (typeof simple === "number") {
                                        stack4 = b_obj.axGetNumericProperty(simple);
                                    } else {
                                        stack4 = b_obj['$Bg' + simple];
                                        if (stack4 === undefined || typeof stack4 === 'function') {
                                            const rm = context.runtimename($names[2], 1);
                                            stack4 = b_obj.axGetProperty(rm);
                                        }
                                    }
                                }
                                // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::y
                                //Possible type:undefined
                                if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                                    stack4 = stack4['y'];
                                } else {
                                    temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                                    stack4 = temp.$Bgy;
                                    if (stack4 === undefined || typeof stack4 === 'function') {
                                        stack4 = temp.axGetProperty($names[6]);
                                    }
                                }
                                if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                                    stack0.curveTo(stack1, stack2, stack3, stack4);
                                } else {
                                    // 7 0::curveTo
                                    {
                                        let t = stack0;
                                        const m = t.$BgcurveTo || (t = sec.box(stack0), t.$BgcurveTo);
                                        if( typeof m === "function" ) { 
                                            m.call(t, stack1, stack2, stack3, stack4);
                                        } else { 
                                           stack0.axCallProperty($names[22], [stack1, stack2, stack3, stack4], false);
                                        }
                                    }
                                }
                            }
                            catch(e) {
                                // in case this is a error coming from stack0.__fast when stack0 is undefined,
                                // we convert it to a ASError, so that avm2 can still catch it
                                if (e instanceof TypeError) {
                                     var _e = context.sec.createError("TypeError", {code:1065, message:e.message})
                                     _e.source = e; e = _e;
                                }
                                stack0 = e;
                                { p = 2731; continue; };
                                throw e;
                            }
                        case 1961:
                            try {
                                stack0 = scope1.object;
                                stack1 = true;
                                stack0.axSetSlot(12, true);
                                stack0 = scope1.object;
                                stack1 = scope1.object;
                                stack1 = stack1.axGetSlot(9);
                                
                                stack0.axSetSlot(8, stack1);
                                { p = 2537; continue; };
                            }
                            catch(e) {
                                // in case this is a error coming from stack0.__fast when stack0 is undefined,
                                // we convert it to a ASError, so that avm2 can still catch it
                                if (e instanceof TypeError) {
                                     var _e = context.sec.createError("TypeError", {code:1065, message:e.message})
                                     _e.source = e; e = _e;
                                }
                                stack0 = e;
                                { p = 2731; continue; };
                                throw e;
                            }
                        case 1979:
                            try {
                                stack0 = scope1.object;
                                stack1 = scope1.object;
                                stack1 = stack1.axGetSlot(8);
                                stack2 = 0;
                                stack1 = stack1 > 0;
                                stack2 = stack1;
                                if (!stack2) { p = 2134; continue; };
                                // 7 0::Math
                                /* GenerateLexImports GETLEX */
//                                stack1 = __Math;// JIT: redundant assigment, value unused
                                stack2 = scope1.object;
                                stack2 = stack2.axGetSlot(6);
                                stack3 = scope1.object;
                                stack3 = stack3.axGetSlot(8);
                                // 27 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::*
                                {
                                    let simple = stack3;
                                    const b_obj = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);

                                    if (typeof simple === "number") {
                                        stack2 = b_obj.axGetNumericProperty(simple);
                                    } else {
                                        stack2 = b_obj['$Bg' + simple];
                                        if (stack2 === undefined || typeof stack2 === 'function') {
                                            const rm = context.runtimename($names[2], stack3);
                                            stack2 = b_obj.axGetProperty(rm);
                                        }
                                    }
                                }
                                // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::y
                                //Possible type:undefined
                                if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                                    stack2 = stack2['y'];
                                } else {
                                    temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                                    stack2 = temp.$Bgy;
                                    if (stack2 === undefined || typeof stack2 === 'function') {
                                        stack2 = temp.axGetProperty($names[6]);
                                    }
                                }
                                stack3 = scope1.object;
                                stack3 = stack3.axGetSlot(6);
                                stack4 = scope1.object;
                                stack4 = stack4.axGetSlot(8);
                                stack4--;
                                // 27 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::*
                                {
                                    let simple = stack4;
                                    const b_obj = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);

                                    if (typeof simple === "number") {
                                        stack3 = b_obj.axGetNumericProperty(simple);
                                    } else {
                                        stack3 = b_obj['$Bg' + simple];
                                        if (stack3 === undefined || typeof stack3 === 'function') {
                                            const rm = context.runtimename($names[2], stack4);
                                            stack3 = b_obj.axGetProperty(rm);
                                        }
                                    }
                                }
                                // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::y
                                if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                                    stack3 = stack3['y'];
                                } else {
                                    temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                                    stack3 = temp.$Bgy;
                                    if (stack3 === undefined || typeof stack3 === 'function') {
                                        stack3 = temp.axGetProperty($names[6]);
                                    }
                                }
                                stack2 -= stack3;
                                stack3 = scope1.object;
                                stack3 = stack3.axGetSlot(6);
                                stack4 = scope1.object;
                                stack4 = stack4.axGetSlot(8);
                                // 27 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::*
                                {
                                    let simple = stack4;
                                    const b_obj = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);

                                    if (typeof simple === "number") {
                                        stack3 = b_obj.axGetNumericProperty(simple);
                                    } else {
                                        stack3 = b_obj['$Bg' + simple];
                                        if (stack3 === undefined || typeof stack3 === 'function') {
                                            const rm = context.runtimename($names[2], stack4);
                                            stack3 = b_obj.axGetProperty(rm);
                                        }
                                    }
                                }
                                // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::x
                                if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                                    stack3 = stack3['x'];
                                } else {
                                    temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                                    stack3 = temp.$Bgx;
                                    if (stack3 === undefined || typeof stack3 === 'function') {
                                        stack3 = temp.axGetProperty($names[5]);
                                    }
                                }
                                stack4 = scope1.object;
                                stack4 = stack4.axGetSlot(6);
                                stack5 = scope1.object;
                                stack5 = stack5.axGetSlot(8);
                                stack5--;
                                // 27 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::*
                                {
                                    let simple = stack5;
                                    const b_obj = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);

                                    if (typeof simple === "number") {
                                        stack4 = b_obj.axGetNumericProperty(simple);
                                    } else {
                                        stack4 = b_obj['$Bg' + simple];
                                        if (stack4 === undefined || typeof stack4 === 'function') {
                                            const rm = context.runtimename($names[2], stack5);
                                            stack4 = b_obj.axGetProperty(rm);
                                        }
                                    }
                                }
                                // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::x
                                if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                                    stack4 = stack4['x'];
                                } else {
                                    temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                                    stack4 = temp.$Bgx;
                                    if (stack4 === undefined || typeof stack4 === 'function') {
                                        stack4 = temp.axGetProperty($names[5]);
                                    }
                                }
                                stack3 -= stack4;
                                if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                                   stack1 = __Math.atan2(stack2, stack3);
                                } else {
                                    // 7 0::atan2
                                    {
                                        let t = __Math;
                                        const m = t.$Bgatan2 || (t = sec.box(__Math), t.$Bgatan2);
                                        if( typeof m === "function" ) { 
                                            stack1 = t.$Bgatan2 (stack2, stack3);
                                        } else { 
                                            stack1 = __Math.axCallProperty($names[16], [stack2, stack3], false);
                                        }
                                    }
                                }
                                // 7 0::Math
                                /* GenerateLexImports GETLEX */
//                                stack2 = __Math;// JIT: redundant assigment, value unused
                                stack3 = scope1.object;
                                stack3 = stack3.axGetSlot(6);
                                stack4 = scope1.object;
                                stack4 = stack4.axGetSlot(8);
//                                stack5 = 1;// JIT: redundant assigment, value unused
                                stack4 += 1;
                                // 27 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::*
                                {
                                    let simple = stack4;
                                    const b_obj = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);

                                    if (typeof simple === "number") {
                                        stack3 = b_obj.axGetNumericProperty(simple);
                                    } else {
                                        stack3 = b_obj['$Bg' + simple];
                                        if (stack3 === undefined || typeof stack3 === 'function') {
                                            const rm = context.runtimename($names[2], stack4);
                                            stack3 = b_obj.axGetProperty(rm);
                                        }
                                    }
                                }
                                // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::y
                                if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                                    stack3 = stack3['y'];
                                } else {
                                    temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                                    stack3 = temp.$Bgy;
                                    if (stack3 === undefined || typeof stack3 === 'function') {
                                        stack3 = temp.axGetProperty($names[6]);
                                    }
                                }
                                stack4 = scope1.object;
                                stack4 = stack4.axGetSlot(6);
                                stack5 = scope1.object;
                                stack5 = stack5.axGetSlot(8);
                                // 27 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::*
                                {
                                    let simple = stack5;
                                    const b_obj = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);

                                    if (typeof simple === "number") {
                                        stack4 = b_obj.axGetNumericProperty(simple);
                                    } else {
                                        stack4 = b_obj['$Bg' + simple];
                                        if (stack4 === undefined || typeof stack4 === 'function') {
                                            const rm = context.runtimename($names[2], stack5);
                                            stack4 = b_obj.axGetProperty(rm);
                                        }
                                    }
                                }
                                // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::y
                                if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                                    stack4 = stack4['y'];
                                } else {
                                    temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                                    stack4 = temp.$Bgy;
                                    if (stack4 === undefined || typeof stack4 === 'function') {
                                        stack4 = temp.axGetProperty($names[6]);
                                    }
                                }
                                stack3 -= stack4;
                                stack4 = scope1.object;
                                stack4 = stack4.axGetSlot(6);
                                stack5 = scope1.object;
                                stack5 = stack5.axGetSlot(8);
//                                stack6 = 1;// JIT: redundant assigment, value unused
                                stack5 += 1;
                                // 27 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::*
                                {
                                    let simple = stack5;
                                    const b_obj = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);

                                    if (typeof simple === "number") {
                                        stack4 = b_obj.axGetNumericProperty(simple);
                                    } else {
                                        stack4 = b_obj['$Bg' + simple];
                                        if (stack4 === undefined || typeof stack4 === 'function') {
                                            const rm = context.runtimename($names[2], stack5);
                                            stack4 = b_obj.axGetProperty(rm);
                                        }
                                    }
                                }
                                // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::x
                                if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                                    stack4 = stack4['x'];
                                } else {
                                    temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                                    stack4 = temp.$Bgx;
                                    if (stack4 === undefined || typeof stack4 === 'function') {
                                        stack4 = temp.axGetProperty($names[5]);
                                    }
                                }
                                stack5 = scope1.object;
                                stack5 = stack5.axGetSlot(6);
                                stack6 = scope1.object;
                                stack6 = stack6.axGetSlot(8);
                                // 27 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::*
                                {
                                    let simple = stack6;
                                    const b_obj = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);

                                    if (typeof simple === "number") {
                                        stack5 = b_obj.axGetNumericProperty(simple);
                                    } else {
                                        stack5 = b_obj['$Bg' + simple];
                                        if (stack5 === undefined || typeof stack5 === 'function') {
                                            const rm = context.runtimename($names[2], stack6);
                                            stack5 = b_obj.axGetProperty(rm);
                                        }
                                    }
                                }
                                // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::x
                                //Possible type:undefined
                                if (!(stack5 != undefined && stack5[AX_CLASS_SYMBOL])) {
                                    stack5 = stack5['x'];
                                } else {
                                    temp = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);
                                    stack5 = temp.$Bgx;
                                    if (stack5 === undefined || typeof stack5 === 'function') {
                                        stack5 = temp.axGetProperty($names[5]);
                                    }
                                }
                                stack4 -= stack5;
                                if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                                   stack2 = __Math.atan2(stack3, stack4);
                                } else {
                                    // 7 0::atan2
                                    {
                                        let t = __Math;
                                        const m = t.$Bgatan2 || (t = sec.box(__Math), t.$Bgatan2);
                                        if( typeof m === "function" ) { 
                                            stack2 = t.$Bgatan2 (stack3, stack4);
                                        } else { 
                                            stack2 = __Math.axCallProperty($names[16], [stack3, stack4], false);
                                        }
                                    }
                                }
                                stack1 = stack1 == stack2;
                            }
                            catch(e) {
                                // in case this is a error coming from stack0.__fast when stack0 is undefined,
                                // we convert it to a ASError, so that avm2 can still catch it
                                if (e instanceof TypeError) {
                                     var _e = context.sec.createError("TypeError", {code:1065, message:e.message})
                                     _e.source = e; e = _e;
                                }
                                stack0 = e;
                                { p = 2731; continue; };
                                throw e;
                            }
                        case 2134:
                            try {
                                stack2 = stack1;
                                if (stack2) { p = 2310; continue; };
                                stack1 = scope1.object;
                                stack1 = stack1.axGetSlot(8);
                                stack2 = scope1.object;
                                stack2 = stack2.axGetSlot(6);
                                // 7 0::length
                                //Possible type:7 0::Math
                                if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                                    stack2 = stack2['length'];
                                } else {
                                    temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                                    stack2 = temp.$Bglength;
                                    if (stack2 === undefined || typeof stack2 === 'function') {
                                        stack2 = temp.axGetProperty($names[8]);
                                    }
                                }
//                                stack3 = 2;// JIT: redundant assigment, value unused
                                stack2 -= 2;
                                stack1 = stack1 < stack2;
                                stack2 = stack1;
                                if (!stack2) { p = 2310; continue; };
                                // 7 0::Math
                                /* GenerateLexImports GETLEX */
//                                stack1 = __Math;// JIT: redundant assigment, value unused
                                stack2 = scope1.object;
                                stack2 = stack2.axGetSlot(6);
                                stack3 = scope1.object;
                                stack3 = stack3.axGetSlot(8);
//                                stack4 = 2;// JIT: redundant assigment, value unused
                                stack3 += 2;
                                // 27 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::*
                                {
                                    let simple = stack3;
                                    const b_obj = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);

                                    if (typeof simple === "number") {
                                        stack2 = b_obj.axGetNumericProperty(simple);
                                    } else {
                                        stack2 = b_obj['$Bg' + simple];
                                        if (stack2 === undefined || typeof stack2 === 'function') {
                                            const rm = context.runtimename($names[2], stack3);
                                            stack2 = b_obj.axGetProperty(rm);
                                        }
                                    }
                                }
                                // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::y
                                if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                                    stack2 = stack2['y'];
                                } else {
                                    temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                                    stack2 = temp.$Bgy;
                                    if (stack2 === undefined || typeof stack2 === 'function') {
                                        stack2 = temp.axGetProperty($names[6]);
                                    }
                                }
                                stack3 = scope1.object;
                                stack3 = stack3.axGetSlot(6);
                                stack4 = scope1.object;
                                stack4 = stack4.axGetSlot(8);
//                                stack5 = 1;// JIT: redundant assigment, value unused
                                stack4 += 1;
                                // 27 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::*
                                {
                                    let simple = stack4;
                                    const b_obj = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);

                                    if (typeof simple === "number") {
                                        stack3 = b_obj.axGetNumericProperty(simple);
                                    } else {
                                        stack3 = b_obj['$Bg' + simple];
                                        if (stack3 === undefined || typeof stack3 === 'function') {
                                            const rm = context.runtimename($names[2], stack4);
                                            stack3 = b_obj.axGetProperty(rm);
                                        }
                                    }
                                }
                                // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::y
                                //Possible type:undefined
                                if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                                    stack3 = stack3['y'];
                                } else {
                                    temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                                    stack3 = temp.$Bgy;
                                    if (stack3 === undefined || typeof stack3 === 'function') {
                                        stack3 = temp.axGetProperty($names[6]);
                                    }
                                }
                                stack2 -= stack3;
                                stack3 = scope1.object;
                                stack3 = stack3.axGetSlot(6);
                                stack4 = scope1.object;
                                stack4 = stack4.axGetSlot(8);
//                                stack5 = 2;// JIT: redundant assigment, value unused
                                stack4 += 2;
                                // 27 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::*
                                {
                                    let simple = stack4;
                                    const b_obj = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);

                                    if (typeof simple === "number") {
                                        stack3 = b_obj.axGetNumericProperty(simple);
                                    } else {
                                        stack3 = b_obj['$Bg' + simple];
                                        if (stack3 === undefined || typeof stack3 === 'function') {
                                            const rm = context.runtimename($names[2], stack4);
                                            stack3 = b_obj.axGetProperty(rm);
                                        }
                                    }
                                }
                                // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::x
                                if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                                    stack3 = stack3['x'];
                                } else {
                                    temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                                    stack3 = temp.$Bgx;
                                    if (stack3 === undefined || typeof stack3 === 'function') {
                                        stack3 = temp.axGetProperty($names[5]);
                                    }
                                }
                                stack4 = scope1.object;
                                stack4 = stack4.axGetSlot(6);
                                stack5 = scope1.object;
                                stack5 = stack5.axGetSlot(8);
//                                stack6 = 1;// JIT: redundant assigment, value unused
                                stack5 += 1;
                                // 27 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::*
                                {
                                    let simple = stack5;
                                    const b_obj = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);

                                    if (typeof simple === "number") {
                                        stack4 = b_obj.axGetNumericProperty(simple);
                                    } else {
                                        stack4 = b_obj['$Bg' + simple];
                                        if (stack4 === undefined || typeof stack4 === 'function') {
                                            const rm = context.runtimename($names[2], stack5);
                                            stack4 = b_obj.axGetProperty(rm);
                                        }
                                    }
                                }
                                // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::x
                                //Possible type:undefined
                                if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                                    stack4 = stack4['x'];
                                } else {
                                    temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                                    stack4 = temp.$Bgx;
                                    if (stack4 === undefined || typeof stack4 === 'function') {
                                        stack4 = temp.axGetProperty($names[5]);
                                    }
                                }
                                stack3 -= stack4;
                                if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                                   stack1 = __Math.atan2(stack2, stack3);
                                } else {
                                    // 7 0::atan2
                                    {
                                        let t = __Math;
                                        const m = t.$Bgatan2 || (t = sec.box(__Math), t.$Bgatan2);
                                        if( typeof m === "function" ) { 
                                            stack1 = t.$Bgatan2 (stack2, stack3);
                                        } else { 
                                            stack1 = __Math.axCallProperty($names[16], [stack2, stack3], false);
                                        }
                                    }
                                }
                                // 7 0::Math
                                /* GenerateLexImports GETLEX */
//                                stack2 = __Math;// JIT: redundant assigment, value unused
                                stack3 = scope1.object;
                                stack3 = stack3.axGetSlot(6);
                                stack4 = scope1.object;
                                stack4 = stack4.axGetSlot(8);
//                                stack5 = 1;// JIT: redundant assigment, value unused
                                stack4 += 1;
                                // 27 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::*
                                {
                                    let simple = stack4;
                                    const b_obj = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);

                                    if (typeof simple === "number") {
                                        stack3 = b_obj.axGetNumericProperty(simple);
                                    } else {
                                        stack3 = b_obj['$Bg' + simple];
                                        if (stack3 === undefined || typeof stack3 === 'function') {
                                            const rm = context.runtimename($names[2], stack4);
                                            stack3 = b_obj.axGetProperty(rm);
                                        }
                                    }
                                }
                                // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::y
                                if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                                    stack3 = stack3['y'];
                                } else {
                                    temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                                    stack3 = temp.$Bgy;
                                    if (stack3 === undefined || typeof stack3 === 'function') {
                                        stack3 = temp.axGetProperty($names[6]);
                                    }
                                }
                                stack4 = scope1.object;
                                stack4 = stack4.axGetSlot(6);
                                stack5 = scope1.object;
                                stack5 = stack5.axGetSlot(8);
                                // 27 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::*
                                {
                                    let simple = stack5;
                                    const b_obj = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);

                                    if (typeof simple === "number") {
                                        stack4 = b_obj.axGetNumericProperty(simple);
                                    } else {
                                        stack4 = b_obj['$Bg' + simple];
                                        if (stack4 === undefined || typeof stack4 === 'function') {
                                            const rm = context.runtimename($names[2], stack5);
                                            stack4 = b_obj.axGetProperty(rm);
                                        }
                                    }
                                }
                                // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::y
                                if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                                    stack4 = stack4['y'];
                                } else {
                                    temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                                    stack4 = temp.$Bgy;
                                    if (stack4 === undefined || typeof stack4 === 'function') {
                                        stack4 = temp.axGetProperty($names[6]);
                                    }
                                }
                                stack3 -= stack4;
                                stack4 = scope1.object;
                                stack4 = stack4.axGetSlot(6);
                                stack5 = scope1.object;
                                stack5 = stack5.axGetSlot(8);
//                                stack6 = 1;// JIT: redundant assigment, value unused
                                stack5 += 1;
                                // 27 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::*
                                {
                                    let simple = stack5;
                                    const b_obj = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);

                                    if (typeof simple === "number") {
                                        stack4 = b_obj.axGetNumericProperty(simple);
                                    } else {
                                        stack4 = b_obj['$Bg' + simple];
                                        if (stack4 === undefined || typeof stack4 === 'function') {
                                            const rm = context.runtimename($names[2], stack5);
                                            stack4 = b_obj.axGetProperty(rm);
                                        }
                                    }
                                }
                                // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::x
                                if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                                    stack4 = stack4['x'];
                                } else {
                                    temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                                    stack4 = temp.$Bgx;
                                    if (stack4 === undefined || typeof stack4 === 'function') {
                                        stack4 = temp.axGetProperty($names[5]);
                                    }
                                }
                                stack5 = scope1.object;
                                stack5 = stack5.axGetSlot(6);
                                stack6 = scope1.object;
                                stack6 = stack6.axGetSlot(8);
                                // 27 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::*
                                {
                                    let simple = stack6;
                                    const b_obj = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);

                                    if (typeof simple === "number") {
                                        stack5 = b_obj.axGetNumericProperty(simple);
                                    } else {
                                        stack5 = b_obj['$Bg' + simple];
                                        if (stack5 === undefined || typeof stack5 === 'function') {
                                            const rm = context.runtimename($names[2], stack6);
                                            stack5 = b_obj.axGetProperty(rm);
                                        }
                                    }
                                }
                                // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::x
                                //Possible type:undefined
                                if (!(stack5 != undefined && stack5[AX_CLASS_SYMBOL])) {
                                    stack5 = stack5['x'];
                                } else {
                                    temp = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);
                                    stack5 = temp.$Bgx;
                                    if (stack5 === undefined || typeof stack5 === 'function') {
                                        stack5 = temp.axGetProperty($names[5]);
                                    }
                                }
                                stack4 -= stack5;
                                if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                                   stack2 = __Math.atan2(stack3, stack4);
                                } else {
                                    // 7 0::atan2
                                    {
                                        let t = __Math;
                                        const m = t.$Bgatan2 || (t = sec.box(__Math), t.$Bgatan2);
                                        if( typeof m === "function" ) { 
                                            stack2 = t.$Bgatan2 (stack3, stack4);
                                        } else { 
                                            stack2 = __Math.axCallProperty($names[16], [stack3, stack4], false);
                                        }
                                    }
                                }
                                stack1 = stack1 == stack2;
                            }
                            catch(e) {
                                // in case this is a error coming from stack0.__fast when stack0 is undefined,
                                // we convert it to a ASError, so that avm2 can still catch it
                                if (e instanceof TypeError) {
                                     var _e = context.sec.createError("TypeError", {code:1065, message:e.message})
                                     _e.source = e; e = _e;
                                }
                                stack0 = e;
                                { p = 2731; continue; };
                                throw e;
                            }
                        case 2310:
                            try {
                                //IR: CONVERT_B removed, reason: arguments strictly boolean
                                stack0.axSetSlot(37, stack1);
                                stack0 = scope1.object;
                                stack0 = stack0.axGetSlot(12);
                                stack0 = !!stack0;
                                stack1 = stack0;
                                if (!stack1) { p = 2329; continue; };
                                stack0 = scope1.object;
                                stack0 = stack0.axGetSlot(37);
                                stack0 = !!stack0;
                            }
                            catch(e) {
                                // in case this is a error coming from stack0.__fast when stack0 is undefined,
                                // we convert it to a ASError, so that avm2 can still catch it
                                if (e instanceof TypeError) {
                                     var _e = context.sec.createError("TypeError", {code:1065, message:e.message})
                                     _e.source = e; e = _e;
                                }
                                stack0 = e;
                                { p = 2731; continue; };
                                throw e;
                            }
                        case 2329:
                            try {
                                if (!stack0) { p = 2379; continue; };
                                stack0 = scope1.object;
                                stack0 = stack0.axGetSlot(1);
                                stack1 = scope1.object;
                                stack1 = stack1.axGetSlot(6);
                                stack2 = scope1.object;
                                stack2 = stack2.axGetSlot(8);
//                                stack3 = 1;// JIT: redundant assigment, value unused
                                stack2 += 1;
                                // 27 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::*
                                {
                                    let simple = stack2;
                                    const b_obj = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);

                                    if (typeof simple === "number") {
                                        stack1 = b_obj.axGetNumericProperty(simple);
                                    } else {
                                        stack1 = b_obj['$Bg' + simple];
                                        if (stack1 === undefined || typeof stack1 === 'function') {
                                            const rm = context.runtimename($names[2], stack2);
                                            stack1 = b_obj.axGetProperty(rm);
                                        }
                                    }
                                }
                                // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::x
                                //Possible type:7 0::Math
                                if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                                    stack1 = stack1['x'];
                                } else {
                                    temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                                    stack1 = temp.$Bgx;
                                    if (stack1 === undefined || typeof stack1 === 'function') {
                                        stack1 = temp.axGetProperty($names[5]);
                                    }
                                }
                                stack2 = scope1.object;
                                stack2 = stack2.axGetSlot(6);
                                stack3 = scope1.object;
                                stack3 = stack3.axGetSlot(8);
//                                stack4 = 1;// JIT: redundant assigment, value unused
                                stack3 += 1;
                                // 27 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::*
                                {
                                    let simple = stack3;
                                    const b_obj = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);

                                    if (typeof simple === "number") {
                                        stack2 = b_obj.axGetNumericProperty(simple);
                                    } else {
                                        stack2 = b_obj['$Bg' + simple];
                                        if (stack2 === undefined || typeof stack2 === 'function') {
                                            const rm = context.runtimename($names[2], stack3);
                                            stack2 = b_obj.axGetProperty(rm);
                                        }
                                    }
                                }
                                // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::y
                                //Possible type:7 0::Math
                                if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                                    stack2 = stack2['y'];
                                } else {
                                    temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                                    stack2 = temp.$Bgy;
                                    if (stack2 === undefined || typeof stack2 === 'function') {
                                        stack2 = temp.axGetProperty($names[6]);
                                    }
                                }
                                if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                                    stack0.lineTo(stack1, stack2);
                                } else {
                                    // 7 0::lineTo
                                    {
                                        let t = stack0;
                                        const m = t.$BglineTo || (t = sec.box(stack0), t.$BglineTo);
                                        if( typeof m === "function" ) { 
                                            m.call(t, stack1, stack2);
                                        } else { 
                                           stack0.axCallProperty($names[21], [stack1, stack2], false);
                                        }
                                    }
                                }
                                { p = 2526; continue; };
                            }
                            catch(e) {
                                // in case this is a error coming from stack0.__fast when stack0 is undefined,
                                // we convert it to a ASError, so that avm2 can still catch it
                                if (e instanceof TypeError) {
                                     var _e = context.sec.createError("TypeError", {code:1065, message:e.message})
                                     _e.source = e; e = _e;
                                }
                                stack0 = e;
                                { p = 2731; continue; };
                                throw e;
                            }
                        case 2379:
                            try {
                                stack0 = scope1.object;
                                // 7 0:fl.motion::BezierSegment
                                stack1 = scope1.findScopeProperty($names[23], true, false);
                                stack2 = scope1.object;
                                stack2 = stack2.axGetSlot(6);
                                stack3 = scope1.object;
                                stack3 = stack3.axGetSlot(8);
                                // 27 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::*
                                {
                                    let simple = stack3;
                                    const b_obj = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);

                                    if (typeof simple === "number") {
                                        stack2 = b_obj.axGetNumericProperty(simple);
                                    } else {
                                        stack2 = b_obj['$Bg' + simple];
                                        if (stack2 === undefined || typeof stack2 === 'function') {
                                            const rm = context.runtimename($names[2], stack3);
                                            stack2 = b_obj.axGetProperty(rm);
                                        }
                                    }
                                }
                                stack3 = scope1.object;
                                stack3 = stack3.axGetSlot(11);
                                stack4 = scope1.object;
                                stack4 = stack4.axGetSlot(8);
                                // 27 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::*
                                {
                                    let simple = stack4;
                                    const b_obj = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);

                                    if (typeof simple === "number") {
                                        stack3 = b_obj.axGetNumericProperty(simple);
                                    } else {
                                        stack3 = b_obj['$Bg' + simple];
                                        if (stack3 === undefined || typeof stack3 === 'function') {
                                            const rm = context.runtimename($names[2], stack4);
                                            stack3 = b_obj.axGetProperty(rm);
                                        }
                                    }
                                }
                                stack4 = 1;
                                // 27 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::*
                                {
                                    let simple = 1;
                                    const b_obj = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);

                                    if (typeof simple === "number") {
                                        stack3 = b_obj.axGetNumericProperty(simple);
                                    } else {
                                        stack3 = b_obj['$Bg' + simple];
                                        if (stack3 === undefined || typeof stack3 === 'function') {
                                            const rm = context.runtimename($names[2], 1);
                                            stack3 = b_obj.axGetProperty(rm);
                                        }
                                    }
                                }
                                stack4 = scope1.object;
                                stack4 = stack4.axGetSlot(11);
                                stack5 = scope1.object;
                                stack5 = stack5.axGetSlot(8);
//                                stack6 = 1;// JIT: redundant assigment, value unused
                                stack5 += 1;
                                // 27 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::*
                                {
                                    let simple = stack5;
                                    const b_obj = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);

                                    if (typeof simple === "number") {
                                        stack4 = b_obj.axGetNumericProperty(simple);
                                    } else {
                                        stack4 = b_obj['$Bg' + simple];
                                        if (stack4 === undefined || typeof stack4 === 'function') {
                                            const rm = context.runtimename($names[2], stack5);
                                            stack4 = b_obj.axGetProperty(rm);
                                        }
                                    }
                                }
                                stack5 = 0;
                                // 27 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::*
                                {
                                    let simple = 0;
                                    const b_obj = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);

                                    if (typeof simple === "number") {
                                        stack4 = b_obj.axGetNumericProperty(simple);
                                    } else {
                                        stack4 = b_obj['$Bg' + simple];
                                        if (stack4 === undefined || typeof stack4 === 'function') {
                                            const rm = context.runtimename($names[2], 0);
                                            stack4 = b_obj.axGetProperty(rm);
                                        }
                                    }
                                }
                                stack5 = scope1.object;
                                stack5 = stack5.axGetSlot(6);
                                stack6 = scope1.object;
                                stack6 = stack6.axGetSlot(8);
//                                stack7 = 1;// JIT: redundant assigment, value unused
                                stack6 += 1;
                                // 27 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::*
                                {
                                    let simple = stack6;
                                    const b_obj = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);

                                    if (typeof simple === "number") {
                                        stack5 = b_obj.axGetNumericProperty(simple);
                                    } else {
                                        stack5 = b_obj['$Bg' + simple];
                                        if (stack5 === undefined || typeof stack5 === 'function') {
                                            const rm = context.runtimename($names[2], stack6);
                                            stack5 = b_obj.axGetProperty(rm);
                                        }
                                    }
                                }
                                //JIT: Support fast construct:BezierSegment/Object
                                stack1 = context.constructFast(stack1, [stack2, stack3, stack4, stack5], $names[23]);
                                //IR: Drop coerce, reason: redundant
                                stack0.axSetSlot(38, stack1);
                                stack0 = scope1.object;
                                stack1 = 0.01;
                                
                                stack0.axSetSlot(39, 0.01);
                                { p = 2516; continue; };
                            }
                            catch(e) {
                                // in case this is a error coming from stack0.__fast when stack0 is undefined,
                                // we convert it to a ASError, so that avm2 can still catch it
                                if (e instanceof TypeError) {
                                     var _e = context.sec.createError("TypeError", {code:1065, message:e.message})
                                     _e.source = e; e = _e;
                                }
                                stack0 = e;
                                { p = 2731; continue; };
                                throw e;
                            }
                        case 2464:
                            try {
                                stack0 = scope1.object;
                                stack1 = scope1.object;
                                stack1 = stack1.axGetSlot(38);
                                stack2 = scope1.object;
                                stack2 = stack2.axGetSlot(39);
                                if (!(_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL]))) {
                                   stack1 = stack1.getValue(stack2);
                                } else {
                                    // 7 0::getValue
                                    {
                                        let t = stack1;
                                        const m = t.$BggetValue || (t = sec.box(stack1), t.$BggetValue);
                                        if( typeof m === "function" ) { 
                                            stack1 = t.$BggetValue (stack2);
                                        } else { 
                                            stack1 = stack1.axCallProperty($names[24], [stack2], false);
                                        }
                                    }
                                }
                                
                                stack0.axSetSlot(40, stack1);
                                stack0 = scope1.object;
                                stack0 = stack0.axGetSlot(1);
                                stack1 = scope1.object;
                                stack1 = stack1.axGetSlot(40);
                                // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::x
                                //Possible type:undefined
                                if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                                    stack1 = stack1['x'];
                                } else {
                                    temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                                    stack1 = temp.$Bgx;
                                    if (stack1 === undefined || typeof stack1 === 'function') {
                                        stack1 = temp.axGetProperty($names[5]);
                                    }
                                }
                                stack2 = scope1.object;
                                stack2 = stack2.axGetSlot(40);
                                // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::y
                                if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                                    stack2 = stack2['y'];
                                } else {
                                    temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                                    stack2 = temp.$Bgy;
                                    if (stack2 === undefined || typeof stack2 === 'function') {
                                        stack2 = temp.axGetProperty($names[6]);
                                    }
                                }
                                if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                                    stack0.lineTo(stack1, stack2);
                                } else {
                                    // 7 0::lineTo
                                    {
                                        let t = stack0;
                                        const m = t.$BglineTo || (t = sec.box(stack0), t.$BglineTo);
                                        if( typeof m === "function" ) { 
                                            m.call(t, stack1, stack2);
                                        } else { 
                                           stack0.axCallProperty($names[21], [stack1, stack2], false);
                                        }
                                    }
                                }
                                stack0 = scope1.object;
                                stack1 = scope1.object;
                                stack1 = stack1.axGetSlot(39);
//                                stack2 = 0.01;// JIT: redundant assigment, value unused
                                stack1 += 0.01;
                                
                                stack0.axSetSlot(39, stack1);
                            }
                            catch(e) {
                                // in case this is a error coming from stack0.__fast when stack0 is undefined,
                                // we convert it to a ASError, so that avm2 can still catch it
                                if (e instanceof TypeError) {
                                     var _e = context.sec.createError("TypeError", {code:1065, message:e.message})
                                     _e.source = e; e = _e;
                                }
                                stack0 = e;
                                { p = 2731; continue; };
                                throw e;
                            }
                        case 2516:
                            try {
                                stack0 = scope1.object;
                                stack0 = stack0.axGetSlot(39);
                                stack1 = 1.01;
                                if (1.01 > stack0) { p = 2464; continue; };
                            }
                            catch(e) {
                                // in case this is a error coming from stack0.__fast when stack0 is undefined,
                                // we convert it to a ASError, so that avm2 can still catch it
                                if (e instanceof TypeError) {
                                     var _e = context.sec.createError("TypeError", {code:1065, message:e.message})
                                     _e.source = e; e = _e;
                                }
                                stack0 = e;
                                { p = 2731; continue; };
                                throw e;
                            }
                        case 2526:
                            try {
                                stack0 = scope1.object;
                                stack0 = stack0.axGetSlot(8);
                                stack0++;
                                
                                stack1 = scope1.object;
                                temp = stack1;
                                stack1 = stack0;
                                stack0 = temp;
                                temp = undefined;
                                stack0.axSetSlot(8, stack1);
                            }
                            catch(e) {
                                // in case this is a error coming from stack0.__fast when stack0 is undefined,
                                // we convert it to a ASError, so that avm2 can still catch it
                                if (e instanceof TypeError) {
                                     var _e = context.sec.createError("TypeError", {code:1065, message:e.message})
                                     _e.source = e; e = _e;
                                }
                                stack0 = e;
                                { p = 2731; continue; };
                                throw e;
                            }
                        case 2537:
                            try {
                                stack0 = scope1.object;
                                stack0 = stack0.axGetSlot(8);
                                stack1 = scope1.object;
                                stack1 = stack1.axGetSlot(10);
                                stack1--;
                                if (stack1 > stack0) { p = 1979; continue; };
                                stack0 = scope1.object;
                                stack0 = stack0.axGetSlot(10);
                                stack1 = scope1.object;
                                stack1 = stack1.axGetSlot(6);
                                // 7 0::length
                                //Possible type:undefined
                                if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                                    stack1 = stack1['length'];
                                } else {
                                    temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                                    stack1 = temp.$Bglength;
                                    if (stack1 === undefined || typeof stack1 === 'function') {
                                        stack1 = temp.axGetProperty($names[8]);
                                    }
                                }
                                stack1--;
                                if (stack1 != stack0) { p = 2646; continue; };
                                stack0 = scope1.object;
                                stack0 = stack0.axGetSlot(1);
                                stack1 = scope1.object;
                                stack1 = stack1.axGetSlot(11);
                                stack2 = scope1.object;
                                stack2 = stack2.axGetSlot(8);
                                // 27 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::*
                                {
                                    let simple = stack2;
                                    const b_obj = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);

                                    if (typeof simple === "number") {
                                        stack1 = b_obj.axGetNumericProperty(simple);
                                    } else {
                                        stack1 = b_obj['$Bg' + simple];
                                        if (stack1 === undefined || typeof stack1 === 'function') {
                                            const rm = context.runtimename($names[2], stack2);
                                            stack1 = b_obj.axGetProperty(rm);
                                        }
                                    }
                                }
                                stack2 = 1;
                                // 27 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::*
                                {
                                    let simple = 1;
                                    const b_obj = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);

                                    if (typeof simple === "number") {
                                        stack1 = b_obj.axGetNumericProperty(simple);
                                    } else {
                                        stack1 = b_obj['$Bg' + simple];
                                        if (stack1 === undefined || typeof stack1 === 'function') {
                                            const rm = context.runtimename($names[2], 1);
                                            stack1 = b_obj.axGetProperty(rm);
                                        }
                                    }
                                }
                                // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::x
                                if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                                    stack1 = stack1['x'];
                                } else {
                                    temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                                    stack1 = temp.$Bgx;
                                    if (stack1 === undefined || typeof stack1 === 'function') {
                                        stack1 = temp.axGetProperty($names[5]);
                                    }
                                }
                                stack2 = scope1.object;
                                stack2 = stack2.axGetSlot(11);
                                stack3 = scope1.object;
                                stack3 = stack3.axGetSlot(8);
                                // 27 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::*
                                {
                                    let simple = stack3;
                                    const b_obj = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);

                                    if (typeof simple === "number") {
                                        stack2 = b_obj.axGetNumericProperty(simple);
                                    } else {
                                        stack2 = b_obj['$Bg' + simple];
                                        if (stack2 === undefined || typeof stack2 === 'function') {
                                            const rm = context.runtimename($names[2], stack3);
                                            stack2 = b_obj.axGetProperty(rm);
                                        }
                                    }
                                }
                                stack3 = 1;
                                // 27 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::*
                                {
                                    let simple = 1;
                                    const b_obj = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);

                                    if (typeof simple === "number") {
                                        stack2 = b_obj.axGetNumericProperty(simple);
                                    } else {
                                        stack2 = b_obj['$Bg' + simple];
                                        if (stack2 === undefined || typeof stack2 === 'function') {
                                            const rm = context.runtimename($names[2], 1);
                                            stack2 = b_obj.axGetProperty(rm);
                                        }
                                    }
                                }
                                // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::y
                                //Possible type:undefined
                                if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                                    stack2 = stack2['y'];
                                } else {
                                    temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                                    stack2 = temp.$Bgy;
                                    if (stack2 === undefined || typeof stack2 === 'function') {
                                        stack2 = temp.axGetProperty($names[6]);
                                    }
                                }
                                stack3 = scope1.object;
                                stack3 = stack3.axGetSlot(6);
                                stack4 = scope1.object;
                                stack4 = stack4.axGetSlot(8);
//                                stack5 = 1;// JIT: redundant assigment, value unused
                                stack4 += 1;
                                // 27 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::*
                                {
                                    let simple = stack4;
                                    const b_obj = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);

                                    if (typeof simple === "number") {
                                        stack3 = b_obj.axGetNumericProperty(simple);
                                    } else {
                                        stack3 = b_obj['$Bg' + simple];
                                        if (stack3 === undefined || typeof stack3 === 'function') {
                                            const rm = context.runtimename($names[2], stack4);
                                            stack3 = b_obj.axGetProperty(rm);
                                        }
                                    }
                                }
                                // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::x
                                //Possible type:undefined
                                if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                                    stack3 = stack3['x'];
                                } else {
                                    temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                                    stack3 = temp.$Bgx;
                                    if (stack3 === undefined || typeof stack3 === 'function') {
                                        stack3 = temp.axGetProperty($names[5]);
                                    }
                                }
                                stack4 = scope1.object;
                                stack4 = stack4.axGetSlot(6);
                                stack5 = scope1.object;
                                stack5 = stack5.axGetSlot(8);
//                                stack6 = 1;// JIT: redundant assigment, value unused
                                stack5 += 1;
                                // 27 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::*
                                {
                                    let simple = stack5;
                                    const b_obj = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);

                                    if (typeof simple === "number") {
                                        stack4 = b_obj.axGetNumericProperty(simple);
                                    } else {
                                        stack4 = b_obj['$Bg' + simple];
                                        if (stack4 === undefined || typeof stack4 === 'function') {
                                            const rm = context.runtimename($names[2], stack5);
                                            stack4 = b_obj.axGetProperty(rm);
                                        }
                                    }
                                }
                                // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::y
                                //Possible type:undefined
                                if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                                    stack4 = stack4['y'];
                                } else {
                                    temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                                    stack4 = temp.$Bgy;
                                    if (stack4 === undefined || typeof stack4 === 'function') {
                                        stack4 = temp.axGetProperty($names[6]);
                                    }
                                }
                                if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                                    stack0.curveTo(stack1, stack2, stack3, stack4);
                                } else {
                                    // 7 0::curveTo
                                    {
                                        let t = stack0;
                                        const m = t.$BgcurveTo || (t = sec.box(stack0), t.$BgcurveTo);
                                        if( typeof m === "function" ) { 
                                            m.call(t, stack1, stack2, stack3, stack4);
                                        } else { 
                                           stack0.axCallProperty($names[22], [stack1, stack2, stack3, stack4], false);
                                        }
                                    }
                                }
                            }
                            catch(e) {
                                // in case this is a error coming from stack0.__fast when stack0 is undefined,
                                // we convert it to a ASError, so that avm2 can still catch it
                                if (e instanceof TypeError) {
                                     var _e = context.sec.createError("TypeError", {code:1065, message:e.message})
                                     _e.source = e; e = _e;
                                }
                                stack0 = e;
                                { p = 2731; continue; };
                                throw e;
                            }
                        case 2646:
                            try {
                                { p = 2727; continue; };
                            }
                            catch(e) {
                                // in case this is a error coming from stack0.__fast when stack0 is undefined,
                                // we convert it to a ASError, so that avm2 can still catch it
                                if (e instanceof TypeError) {
                                     var _e = context.sec.createError("TypeError", {code:1065, message:e.message})
                                     _e.source = e; e = _e;
                                }
                                stack0 = e;
                                { p = 2731; continue; };
                                throw e;
                            }
                        case 2650:
                            try {
                                stack0 = scope1.object;
                                stack0 = stack0.axGetSlot(6);
                                // 7 0::length
                                //Possible type:7 0:flash.geom::Point
                                if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                                    stack0 = stack0['length'];
                                } else {
                                    temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                                    stack0 = temp.$Bglength;
                                    if (stack0 === undefined || typeof stack0 === 'function') {
                                        stack0 = temp.axGetProperty($names[8]);
                                    }
                                }
                                stack1 = 2;
                                if (2 != stack0) { p = 2727; continue; };
                                stack0 = scope1.object;
                                stack0 = stack0.axGetSlot(1);
                                stack1 = scope1.object;
                                stack1 = stack1.axGetSlot(6);
                                stack2 = 0;
                                // 27 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::*
                                {
                                    let simple = 0;
                                    const b_obj = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);

                                    if (typeof simple === "number") {
                                        stack1 = b_obj.axGetNumericProperty(simple);
                                    } else {
                                        stack1 = b_obj['$Bg' + simple];
                                        if (stack1 === undefined || typeof stack1 === 'function') {
                                            const rm = context.runtimename($names[2], 0);
                                            stack1 = b_obj.axGetProperty(rm);
                                        }
                                    }
                                }
                                // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::x
                                //Possible type:undefined
                                if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                                    stack1 = stack1['x'];
                                } else {
                                    temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                                    stack1 = temp.$Bgx;
                                    if (stack1 === undefined || typeof stack1 === 'function') {
                                        stack1 = temp.axGetProperty($names[5]);
                                    }
                                }
                                stack2 = scope1.object;
                                stack2 = stack2.axGetSlot(6);
                                stack3 = 0;
                                // 27 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::*
                                {
                                    let simple = 0;
                                    const b_obj = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);

                                    if (typeof simple === "number") {
                                        stack2 = b_obj.axGetNumericProperty(simple);
                                    } else {
                                        stack2 = b_obj['$Bg' + simple];
                                        if (stack2 === undefined || typeof stack2 === 'function') {
                                            const rm = context.runtimename($names[2], 0);
                                            stack2 = b_obj.axGetProperty(rm);
                                        }
                                    }
                                }
                                // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::y
                                //Possible type:undefined
                                if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                                    stack2 = stack2['y'];
                                } else {
                                    temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                                    stack2 = temp.$Bgy;
                                    if (stack2 === undefined || typeof stack2 === 'function') {
                                        stack2 = temp.axGetProperty($names[6]);
                                    }
                                }
                                if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                                    stack0.moveTo(stack1, stack2);
                                } else {
                                    // 7 0::moveTo
                                    {
                                        let t = stack0;
                                        const m = t.$BgmoveTo || (t = sec.box(stack0), t.$BgmoveTo);
                                        if( typeof m === "function" ) { 
                                            m.call(t, stack1, stack2);
                                        } else { 
                                           stack0.axCallProperty($names[20], [stack1, stack2], false);
                                        }
                                    }
                                }
                                stack0 = scope1.object;
                                stack0 = stack0.axGetSlot(1);
                                stack1 = scope1.object;
                                stack1 = stack1.axGetSlot(6);
                                stack2 = 1;
                                // 27 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::*
                                {
                                    let simple = 1;
                                    const b_obj = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);

                                    if (typeof simple === "number") {
                                        stack1 = b_obj.axGetNumericProperty(simple);
                                    } else {
                                        stack1 = b_obj['$Bg' + simple];
                                        if (stack1 === undefined || typeof stack1 === 'function') {
                                            const rm = context.runtimename($names[2], 1);
                                            stack1 = b_obj.axGetProperty(rm);
                                        }
                                    }
                                }
                                // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::x
                                if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                                    stack1 = stack1['x'];
                                } else {
                                    temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                                    stack1 = temp.$Bgx;
                                    if (stack1 === undefined || typeof stack1 === 'function') {
                                        stack1 = temp.axGetProperty($names[5]);
                                    }
                                }
                                stack2 = scope1.object;
                                stack2 = stack2.axGetSlot(6);
                                stack3 = 1;
                                // 27 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::*
                                {
                                    let simple = 1;
                                    const b_obj = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);

                                    if (typeof simple === "number") {
                                        stack2 = b_obj.axGetNumericProperty(simple);
                                    } else {
                                        stack2 = b_obj['$Bg' + simple];
                                        if (stack2 === undefined || typeof stack2 === 'function') {
                                            const rm = context.runtimename($names[2], 1);
                                            stack2 = b_obj.axGetProperty(rm);
                                        }
                                    }
                                }
                                // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::y
                                //Possible type:undefined
                                if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                                    stack2 = stack2['y'];
                                } else {
                                    temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                                    stack2 = temp.$Bgy;
                                    if (stack2 === undefined || typeof stack2 === 'function') {
                                        stack2 = temp.axGetProperty($names[6]);
                                    }
                                }
                                if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                                    stack0.lineTo(stack1, stack2);
                                } else {
                                    // 7 0::lineTo
                                    {
                                        let t = stack0;
                                        const m = t.$BglineTo || (t = sec.box(stack0), t.$BglineTo);
                                        if( typeof m === "function" ) { 
                                            m.call(t, stack1, stack2);
                                        } else { 
                                           stack0.axCallProperty($names[21], [stack1, stack2], false);
                                        }
                                    }
                                }
                            }
                            catch(e) {
                                // in case this is a error coming from stack0.__fast when stack0 is undefined,
                                // we convert it to a ASError, so that avm2 can still catch it
                                if (e instanceof TypeError) {
                                     var _e = context.sec.createError("TypeError", {code:1065, message:e.message})
                                     _e.source = e; e = _e;
                                }
                                stack0 = e;
                                { p = 2731; continue; };
                                throw e;
                            }
                        case 2727:
                            try {
                                //JIT: Emit inline return
                                return;
                            }
                            catch(e) {
                                // in case this is a error coming from stack0.__fast when stack0 is undefined,
                                // we convert it to a ASError, so that avm2 can still catch it
                                if (e instanceof TypeError) {
                                     var _e = context.sec.createError("TypeError", {code:1065, message:e.message})
                                     _e.source = e; e = _e;
                                }
                                stack0 = e;
                                { p = 2731; continue; };
                                throw e;
                            }
                        case 2731:
                            stack1 = this;
                            scope0 = context.savedScope.extend(this);
                            stack1 = local6;
                            scope1 = scope0.extend(local6);
                            stack1 = sec.createCatch(context.mi.getBody().catchBlocks[0], scope1);
                            stack2 = stack1;
                            local7 = stack2;
                            stack2 = stack1;
                            scope2 = scope1.extend(stack2);
                            temp = stack1;
                            stack1 = stack0;
                            stack0 = temp;
                            temp = undefined;
                            stack0.axSetSlot(1, stack1);
                            // 7 0::trace
                            /* GenerateLexImports */
//                            stack0 = __trace_def;// JIT: redundant assigment, value unused
                            stack1 = scope2.object;
                            stack1 = stack1.axGetSlot(1);
                            if (!(_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL]))) {
                               stack1 = stack1.getStackTrace();
                            } else {
                                // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::getStackTrace
                                {
                                    let t = stack1;
                                    const m = t.$BggetStackTrace || (t = sec.box(stack1), t.$BggetStackTrace);
                                    if( typeof m === "function" ) { 
                                        stack1 = t.$BggetStackTrace ();
                                    } else { 
                                        stack1 = stack1.axCallProperty($names[26], [], false);
                                    }
                                }
                            }
                            if (!(_a = typeof __trace_def, ((_a !== 'object' && _a !== 'function' ) || __trace_def == null || __trace_def[AX_CLASS_SYMBOL]))) {
                                __trace_def.trace(stack1);
                            } else {
                                // 7 0::trace
                                {
                                    let t = __trace_def;
                                    const m = t.$Bgtrace || (t = sec.box(__trace_def), t.$Bgtrace);
                                    if( typeof m === "function" ) { 
                                        m.call(t, stack1);
                                    } else { 
                                       __trace_def.axCallProperty($names[25], [stack1], false);
                                    }
                                }
                            }
                            scope2 = undefined;
                            //IR: KILL removed, reason: prevent optimisation
                        case 2764:
                            return;
                        }
                    }
                }
//# sourceURL=http://jit/CubicBezier/curveThroughPoints.js
})