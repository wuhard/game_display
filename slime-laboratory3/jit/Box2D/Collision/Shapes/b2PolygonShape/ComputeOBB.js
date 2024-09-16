(function anonymous(context
) {
/*
	Index: 1412
	Path:  Box2D/Collision/Shapes/b2PolygonShape.ComputeOBB
	Type:  Public
	Kind:  Method
	Super: -
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;

             /* e */
             const __Math = context.getTopLevel(9)['$BgMath']; // :Math

    return function compiled_ComputeOBB(local1 /* b2OBB */, local2 /* Vector */, local3 /* int */) {
        // Possible use a real "this"
        /* Force int coerce */
        local3 = (local3|0);
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
        // local17 is assigned before read, skip init
        let local17 = undefined
        // local18 is assigned before read, skip init
        let local18 = undefined
        // local19 is assigned before read, skip init
        let local19 = undefined
        // local20 is assigned before read, skip init
        let local20 = undefined
        // local21 is assigned before read, skip init
        let local21 = undefined
        // local22 is assigned before read, skip init
        let local22 = undefined
        // local23 is assigned before read, skip init
        let local23 = undefined
        // local24 is assigned before read, skip init
        let local24 = undefined
        // local25 is assigned before read, skip init
        let local25 = undefined
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
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local4 = 0;
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local7 = null;
//                        stack0 = NaN;// JIT: redundant assigment, value unused
                        local8 = NaN;
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
//                        stack0 = NaN;// JIT: redundant assigment, value unused
                        local15 = NaN;
//                        stack0 = NaN;// JIT: redundant assigment, value unused
                        local16 = NaN;
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local17 = 0;
//                        stack0 = NaN;// JIT: redundant assigment, value unused
                        local18 = NaN;
//                        stack0 = NaN;// JIT: redundant assigment, value unused
                        local19 = NaN;
//                        stack0 = NaN;// JIT: redundant assigment, value unused
                        local20 = NaN;
//                        stack0 = NaN;// JIT: redundant assigment, value unused
                        local21 = NaN;
//                        stack0 = NaN;// JIT: redundant assigment, value unused
                        local22 = NaN;
//                        stack0 = NaN;// JIT: redundant assigment, value unused
                        local23 = NaN;
//                        stack0 = NaN;// JIT: redundant assigment, value unused
                        local24 = NaN;
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local25 = null;
                        // 9 {3, 0:Box2D.Common.Math, 0:Box2D.Collision.Shapes, 0, 0:__AS3__.vec, 3, 2:Box2D.Collision.Shapes, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Common, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:http://www.box2d.org/ns/b2internal, 1:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2Shape}::Vector
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgVector;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
                        // 7 0:Box2D.Common.Math::b2Vec2
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack1 = temp.$Bgb2Vec2;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[1]);
                        }
                        stack0 = sec.applyType(stack0, [stack1]);
                        // JIT: potential type:7 0::int
                        stack1 = local3;
//                        stack2 = 1;// JIT: redundant assigment, value unused
                        stack1 += 1;
                        //JIT: Possible source:9 {3, 0:Box2D.Common.Math, 0:Box2D.Collision.Shapes, 0, 0:__AS3__.vec, 3, 2:Box2D.Collision.Shapes, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Common, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:http://www.box2d.org/ns/b2internal, 1:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2Shape}::Vector
                        stack0 = context.construct(stack0, [stack1]);
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[2], true, false);
                            _e || console.warn('[ComputeOBB] Coerce Type not found:', "Vector")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local5 = stack0;
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local4 = 0;
                        { p = 109; continue; };
                    case 93:
                        stack0 = local5;
                        stack1 = local4;
                        // JIT: potential type:29 0:__AS3__.vec::Vector<7 0:Box2D.Common.Math::b2Vec2>
                        stack2 = local2;
                        stack3 = local4;
                        // 27 {3, 0:Box2D.Common.Math, 0:Box2D.Collision.Shapes, 0, 3, 2:Box2D.Collision.Shapes, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Common, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:http://www.box2d.org/ns/b2internal, 1:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2Shape}::*
                        {
                            let simple = local4;
                            const b_obj = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);

                            if (typeof simple === "number") {
                                stack2 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack2 = b_obj['$Bg' + simple];
                                if (stack2 === undefined || typeof stack2 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack2 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        context.setproperty(context.runtimename($names[3], local4), stack2, local5);
                        local4 = (local4 | 0) + 1;
                    case 109:
                        stack0 = local4;
                        // JIT: potential type:7 0::int
                        stack1 = local3;
                        if (local3 > local4) { p = 93; continue; };
                        stack0 = local5;
                        // JIT: potential type:7 0::int
                        stack1 = local3;
                        stack2 = local5;
                        stack3 = 0;
                        // 27 {3, 0:Box2D.Common.Math, 0:Box2D.Collision.Shapes, 0, 3, 2:Box2D.Collision.Shapes, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Common, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:http://www.box2d.org/ns/b2internal, 1:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2Shape}::*
                        {
                            let simple = 0;
                            const b_obj = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);

                            if (typeof simple === "number") {
                                stack2 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack2 = b_obj['$Bg' + simple];
                                if (stack2 === undefined || typeof stack2 === 'function') {
                                    const rm = context.runtimename($names[3], 0);
                                    stack2 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        context.setproperty(context.runtimename($names[3], local3), stack2, local5);
                        // 7 0::Number
                        temp = scope0.findScopeProperty($names[4], true, false);
                        stack0 = temp.$BgNumber;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[4]);
                        }
                        // 7 0::MAX_VALUE
                        //Possible type:7 0::Number
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['MAX_VALUE'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgMAX_VALUE;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[5]);
                            }
                        }
                        stack0 = +stack0;
                        local6 = stack0;
//                        stack0 = 1;// JIT: redundant assigment, value unused
                        local4 = 1;
                        { p = 629; continue; };
                    case 145:
                        stack0 = local5;
                        // 7 0::int
                        stack1 = scope0.findScopeProperty($names[6], true, false);
                        stack2 = local4;
                        stack2--;
                        if (!(_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL]))) {
                           stack1 = stack1.int(stack2);
                        } else {
                            // 7 0::int
                            {
                                let t = stack1;
                                const m = t.$Bgint || (t = sec.box(stack1), t.$Bgint);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$Bgint (stack2);
                                } else { 
                                    stack1 = stack1.axCallProperty($names[6], [stack2], false);
                                }
                            }
                        }
                        // 27 {3, 0:Box2D.Common.Math, 0:Box2D.Collision.Shapes, 0, 3, 2:Box2D.Collision.Shapes, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Common, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:http://www.box2d.org/ns/b2internal, 1:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2Shape}::*
                        {
                            let simple = stack1;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[3], stack1);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[1], true, false);
                            _e || console.warn('[ComputeOBB] Coerce Type not found:', "b2Vec2")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local7 = stack0;
                        stack0 = local5;
                        stack1 = local4;
                        // 27 {3, 0:Box2D.Common.Math, 0:Box2D.Collision.Shapes, 0, 3, 2:Box2D.Collision.Shapes, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Common, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:http://www.box2d.org/ns/b2internal, 1:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2Shape}::*
                        {
                            let simple = local4;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 7 0::x
                        //Possible type:undefined
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['x'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgx;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[7]);
                            }
                        }
//                        stack1 = local7;// JIT: redundant assigment, value unused
                        // 7 0::x
                        //Possible type:7 0:Box2D.Common.Math::b2Vec2
                        if (!(local7 != undefined && local7[AX_CLASS_SYMBOL])) {
                            stack1 = local7['x'];
                        } else {
                            temp = local7[AX_CLASS_SYMBOL] ? local7 : sec.box(local7);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[7]);
                            }
                        }
                        stack0 -= stack1;
                        stack0 = +stack0;
                        local8 = stack0;
                        stack0 = local5;
                        stack1 = local4;
                        // 27 {3, 0:Box2D.Common.Math, 0:Box2D.Collision.Shapes, 0, 3, 2:Box2D.Collision.Shapes, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Common, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:http://www.box2d.org/ns/b2internal, 1:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2Shape}::*
                        {
                            let simple = local4;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 7 0::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['y'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgy;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[8]);
                            }
                        }
//                        stack1 = local7;// JIT: redundant assigment, value unused
                        // 7 0::y
                        if (!(local7 != undefined && local7[AX_CLASS_SYMBOL])) {
                            stack1 = local7['y'];
                        } else {
                            temp = local7[AX_CLASS_SYMBOL] ? local7 : sec.box(local7);
                            stack1 = temp.$Bgy;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[8]);
                            }
                        }
                        stack0 -= stack1;
                        stack0 = +stack0;
                        local9 = stack0;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack0 = __Math;// JIT: redundant assigment, value unused
                        stack1 = local8;
//                        stack2 = local8;// JIT: redundant assigment, value unused
                        stack1 *= local8;
                        stack2 = local9;
//                        stack3 = local9;// JIT: redundant assigment, value unused
                        stack2 *= local9;
                        stack1 += stack2;
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack0 = __Math.sqrt(stack1);
                        } else {
                            // 7 0::sqrt
                            {
                                let t = __Math;
                                const m = t.$Bgsqrt || (t = sec.box(__Math), t.$Bgsqrt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$Bgsqrt (stack1);
                                } else { 
                                    stack0 = __Math.axCallProperty($names[10], [stack1], false);
                                }
                            }
                        }
                        stack0 = +stack0;
                        local10 = stack0;
                        stack0 = local8;
//                        stack1 = local10;// JIT: redundant assigment, value unused
                        stack0 /= local10;
                        stack0 = +stack0;
                        local8 = stack0;
                        stack0 = local9;
//                        stack1 = local10;// JIT: redundant assigment, value unused
                        stack0 /= local10;
                        stack0 = +stack0;
                        stack1 = stack0;
                        local9 = stack1;
                        stack0 = -stack0;
                        stack0 = +stack0;
                        local11 = stack0;
                        stack0 = local8;
                        stack0 = +local8;
                        local12 = stack0;
                        // 7 0::Number
                        temp = scope0.findScopeProperty($names[4], true, false);
                        stack0 = temp.$BgNumber;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[4]);
                        }
                        // 7 0::MAX_VALUE
                        //Possible type:7 0::Number
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['MAX_VALUE'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgMAX_VALUE;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[5]);
                            }
                        }
                        stack0 = +stack0;
                        local13 = stack0;
                        // 7 0::Number
                        temp = scope0.findScopeProperty($names[4], true, false);
                        stack0 = temp.$BgNumber;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[4]);
                        }
                        // 7 0::MAX_VALUE
                        //Possible type:7 0::Number
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['MAX_VALUE'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgMAX_VALUE;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[5]);
                            }
                        }
                        stack0 = +stack0;
                        local14 = stack0;
                        // 7 0::Number
                        temp = scope0.findScopeProperty($names[4], true, false);
                        stack0 = temp.$BgNumber;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[4]);
                        }
                        // 7 0::MAX_VALUE
                        //Possible type:7 0::Number
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['MAX_VALUE'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgMAX_VALUE;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[5]);
                            }
                        }
                        stack0 = -stack0;
                        stack0 = +stack0;
                        local15 = stack0;
                        // 7 0::Number
                        temp = scope0.findScopeProperty($names[4], true, false);
                        stack0 = temp.$BgNumber;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[4]);
                        }
                        // 7 0::MAX_VALUE
                        //Possible type:7 0::Number
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['MAX_VALUE'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgMAX_VALUE;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[5]);
                            }
                        }
                        stack0 = -stack0;
                        stack0 = +stack0;
                        local16 = stack0;
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local17 = 0;
                        { p = 411; continue; };
                    case 290:
                        stack0 = local5;
                        stack1 = local17;
                        // 27 {3, 0:Box2D.Common.Math, 0:Box2D.Collision.Shapes, 0, 3, 2:Box2D.Collision.Shapes, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Common, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:http://www.box2d.org/ns/b2internal, 1:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2Shape}::*
                        {
                            let simple = local17;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[3], local17);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 7 0::x
                        //Possible type:undefined
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['x'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgx;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[7]);
                            }
                        }
//                        stack1 = local7;// JIT: redundant assigment, value unused
                        // 7 0::x
                        if (!(local7 != undefined && local7[AX_CLASS_SYMBOL])) {
                            stack1 = local7['x'];
                        } else {
                            temp = local7[AX_CLASS_SYMBOL] ? local7 : sec.box(local7);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[7]);
                            }
                        }
                        stack0 -= stack1;
                        stack0 = +stack0;
                        local19 = stack0;
                        stack0 = local5;
                        stack1 = local17;
                        // 27 {3, 0:Box2D.Common.Math, 0:Box2D.Collision.Shapes, 0, 3, 2:Box2D.Collision.Shapes, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Common, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:http://www.box2d.org/ns/b2internal, 1:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2Shape}::*
                        {
                            let simple = local17;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[3], local17);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 7 0::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['y'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgy;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[8]);
                            }
                        }
//                        stack1 = local7;// JIT: redundant assigment, value unused
                        // 7 0::y
                        if (!(local7 != undefined && local7[AX_CLASS_SYMBOL])) {
                            stack1 = local7['y'];
                        } else {
                            temp = local7[AX_CLASS_SYMBOL] ? local7 : sec.box(local7);
                            stack1 = temp.$Bgy;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[8]);
                            }
                        }
                        stack0 -= stack1;
                        stack0 = +stack0;
                        local20 = stack0;
                        stack0 = local8;
//                        stack1 = local19;// JIT: redundant assigment, value unused
                        stack0 *= local19;
                        stack1 = local9;
//                        stack2 = local20;// JIT: redundant assigment, value unused
                        stack1 *= local20;
                        stack0 += stack1;
                        stack0 = +stack0;
                        local21 = stack0;
                        stack0 = local11;
//                        stack1 = local19;// JIT: redundant assigment, value unused
                        stack0 *= local19;
                        stack1 = local12;
//                        stack2 = local20;// JIT: redundant assigment, value unused
                        stack1 *= local20;
                        stack0 += stack1;
                        stack0 = +stack0;
                        local22 = stack0;
                        stack0 = local21;
                        stack1 = local13;
                        if (!(local13 > local21)) { p = 370; continue; };
                        stack0 = local21;
                        stack0 = +local21;
                        local13 = stack0;
                    case 370:
                        stack0 = local22;
                        stack1 = local14;
                        if (!(local14 > local22)) { p = 383; continue; };
                        stack0 = local22;
                        stack0 = +local22;
                        local14 = stack0;
                    case 383:
                        stack0 = local21;
                        stack1 = local15;
                        if (!(local15 < local21)) { p = 396; continue; };
                        stack0 = local21;
                        stack0 = +local21;
                        local15 = stack0;
                    case 396:
                        stack0 = local22;
                        stack1 = local16;
                        if (!(local16 < local22)) { p = 409; continue; };
                        stack0 = local22;
                        stack0 = +local22;
                        local16 = stack0;
                    case 409:
                        local17 = (local17 | 0) + 1;
                    case 411:
                        stack0 = local17;
                        // JIT: potential type:7 0::int
                        stack1 = local3;
                        if (local3 > local17) { p = 290; continue; };
                        stack0 = local15;
//                        stack1 = local13;// JIT: redundant assigment, value unused
                        stack0 -= local13;
                        stack1 = local16;
//                        stack2 = local14;// JIT: redundant assigment, value unused
                        stack1 -= local14;
                        stack0 *= stack1;
                        stack0 = +stack0;
                        stack1 = stack0;
                        local18 = stack1;
                        stack1 = 0.95;
//                        stack2 = local6;// JIT: redundant assigment, value unused
                        stack1 *= local6;
                        if (!(stack1 > stack0)) { p = 627; continue; };
                        stack0 = local18;
                        stack0 = +local18;
                        local6 = stack0;
//                        // JIT: potential type:7 0:Box2D.Collision::b2OBB// JIT: redundant assigment, value unused
                        stack0 = local1;
                        // 7 0::R
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack0 = local1['R'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack0 = temp.$BgR;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[11]);
                            }
                        }
                        // 7 0::col1
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['col1'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgcol1;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[12]);
                            }
                        }
//                        stack1 = local8;// JIT: redundant assigment, value unused
                        // 7 0::x
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.x = local8;
                        } else {
                            context.setproperty($names[7], local8, stack0);
                        }
//                        // JIT: potential type:7 0:Box2D.Collision::b2OBB// JIT: redundant assigment, value unused
                        stack0 = local1;
                        // 7 0::R
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack0 = local1['R'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack0 = temp.$BgR;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[11]);
                            }
                        }
                        // 7 0::col1
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['col1'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgcol1;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[12]);
                            }
                        }
//                        stack1 = local9;// JIT: redundant assigment, value unused
                        // 7 0::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = local9;
                        } else {
                            context.setproperty($names[8], local9, stack0);
                        }
//                        // JIT: potential type:7 0:Box2D.Collision::b2OBB// JIT: redundant assigment, value unused
                        stack0 = local1;
                        // 7 0::R
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack0 = local1['R'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack0 = temp.$BgR;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[11]);
                            }
                        }
                        // 7 0::col2
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['col2'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgcol2;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[13]);
                            }
                        }
//                        stack1 = local11;// JIT: redundant assigment, value unused
                        // 7 0::x
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.x = local11;
                        } else {
                            context.setproperty($names[7], local11, stack0);
                        }
//                        // JIT: potential type:7 0:Box2D.Collision::b2OBB// JIT: redundant assigment, value unused
                        stack0 = local1;
                        // 7 0::R
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack0 = local1['R'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack0 = temp.$BgR;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[11]);
                            }
                        }
                        // 7 0::col2
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['col2'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgcol2;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[13]);
                            }
                        }
//                        stack1 = local12;// JIT: redundant assigment, value unused
                        // 7 0::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = local12;
                        } else {
                            context.setproperty($names[8], local12, stack0);
                        }
                        stack0 = 0.5;
                        stack1 = local13;
//                        stack2 = local15;// JIT: redundant assigment, value unused
                        stack1 += local15;
                        stack0 *= stack1;
                        stack0 = +stack0;
                        local23 = stack0;
                        stack0 = 0.5;
                        stack1 = local14;
//                        stack2 = local16;// JIT: redundant assigment, value unused
                        stack1 += local16;
                        stack0 *= stack1;
                        stack0 = +stack0;
                        local24 = stack0;
//                        // JIT: potential type:7 0:Box2D.Collision::b2OBB// JIT: redundant assigment, value unused
                        stack0 = local1;
                        // 7 0::R
                        //Possible type:undefined
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack0 = local1['R'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack0 = temp.$BgR;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[11]);
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[14], true, false);
                            _e || console.warn('[ComputeOBB] Coerce Type not found:', "b2Mat22")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local25 = stack0;
//                        // JIT: potential type:7 0:Box2D.Collision::b2OBB// JIT: redundant assigment, value unused
                        stack0 = local1;
                        // 7 0::center
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack0 = local1['center'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack0 = temp.$Bgcenter;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[15]);
                            }
                        }
//                        stack1 = local7;// JIT: redundant assigment, value unused
                        // 7 0::x
                        //Possible type:undefined
                        if (!(local7 != undefined && local7[AX_CLASS_SYMBOL])) {
                            stack1 = local7['x'];
                        } else {
                            temp = local7[AX_CLASS_SYMBOL] ? local7 : sec.box(local7);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[7]);
                            }
                        }
//                        stack2 = local25;// JIT: redundant assigment, value unused
                        // 7 0::col1
                        //Possible type:undefined
                        if (!(local25 != undefined && local25[AX_CLASS_SYMBOL])) {
                            stack2 = local25['col1'];
                        } else {
                            temp = local25[AX_CLASS_SYMBOL] ? local25 : sec.box(local25);
                            stack2 = temp.$Bgcol1;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[12]);
                            }
                        }
                        // 7 0::x
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[7]);
                            }
                        }
//                        stack3 = local23;// JIT: redundant assigment, value unused
                        stack2 *= local23;
//                        stack3 = local25;// JIT: redundant assigment, value unused
                        // 7 0::col2
                        //Possible type:undefined
                        if (!(local25 != undefined && local25[AX_CLASS_SYMBOL])) {
                            stack3 = local25['col2'];
                        } else {
                            temp = local25[AX_CLASS_SYMBOL] ? local25 : sec.box(local25);
                            stack3 = temp.$Bgcol2;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[13]);
                            }
                        }
                        // 7 0::x
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['x'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgx;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[7]);
                            }
                        }
//                        stack4 = local24;// JIT: redundant assigment, value unused
                        stack3 *= local24;
                        stack2 += stack3;
                        stack1 += stack2;
                        // 7 0::x
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.x = stack1;
                        } else {
                            context.setproperty($names[7], stack1, stack0);
                        }
//                        // JIT: potential type:7 0:Box2D.Collision::b2OBB// JIT: redundant assigment, value unused
                        stack0 = local1;
                        // 7 0::center
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack0 = local1['center'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack0 = temp.$Bgcenter;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[15]);
                            }
                        }
//                        stack1 = local7;// JIT: redundant assigment, value unused
                        // 7 0::y
                        if (!(local7 != undefined && local7[AX_CLASS_SYMBOL])) {
                            stack1 = local7['y'];
                        } else {
                            temp = local7[AX_CLASS_SYMBOL] ? local7 : sec.box(local7);
                            stack1 = temp.$Bgy;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[8]);
                            }
                        }
//                        stack2 = local25;// JIT: redundant assigment, value unused
                        // 7 0::col1
                        if (!(local25 != undefined && local25[AX_CLASS_SYMBOL])) {
                            stack2 = local25['col1'];
                        } else {
                            temp = local25[AX_CLASS_SYMBOL] ? local25 : sec.box(local25);
                            stack2 = temp.$Bgcol1;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[12]);
                            }
                        }
                        // 7 0::y
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['y'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgy;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[8]);
                            }
                        }
//                        stack3 = local23;// JIT: redundant assigment, value unused
                        stack2 *= local23;
//                        stack3 = local25;// JIT: redundant assigment, value unused
                        // 7 0::col2
                        if (!(local25 != undefined && local25[AX_CLASS_SYMBOL])) {
                            stack3 = local25['col2'];
                        } else {
                            temp = local25[AX_CLASS_SYMBOL] ? local25 : sec.box(local25);
                            stack3 = temp.$Bgcol2;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[13]);
                            }
                        }
                        // 7 0::y
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[8]);
                            }
                        }
//                        stack4 = local24;// JIT: redundant assigment, value unused
                        stack3 *= local24;
                        stack2 += stack3;
                        stack1 += stack2;
                        // 7 0::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = stack1;
                        } else {
                            context.setproperty($names[8], stack1, stack0);
                        }
//                        // JIT: potential type:7 0:Box2D.Collision::b2OBB// JIT: redundant assigment, value unused
                        stack0 = local1;
                        // 7 0::extents
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack0 = local1['extents'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack0 = temp.$Bgextents;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[16]);
                            }
                        }
                        stack1 = 0.5;
                        stack2 = local15;
//                        stack3 = local13;// JIT: redundant assigment, value unused
                        stack2 -= local13;
                        stack1 *= stack2;
                        // 7 0::x
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.x = stack1;
                        } else {
                            context.setproperty($names[7], stack1, stack0);
                        }
//                        // JIT: potential type:7 0:Box2D.Collision::b2OBB// JIT: redundant assigment, value unused
                        stack0 = local1;
                        // 7 0::extents
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack0 = local1['extents'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack0 = temp.$Bgextents;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[16]);
                            }
                        }
                        stack1 = 0.5;
                        stack2 = local16;
//                        stack3 = local14;// JIT: redundant assigment, value unused
                        stack2 -= local14;
                        stack1 *= stack2;
                        // 7 0::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = stack1;
                        } else {
                            context.setproperty($names[8], stack1, stack0);
                        }
                    case 627:
                        local4 = (local4 | 0) + 1;
                    case 629:
                        stack0 = local4;
                        // JIT: potential type:7 0::int
                        stack1 = local3;
                        if (local3 >= local4) { p = 145; continue; };
                        return;
                    }
                }
            }
//# sourceURL=http://jit/Box2D/Collision/Shapes/b2PolygonShape/ComputeOBB.js
})