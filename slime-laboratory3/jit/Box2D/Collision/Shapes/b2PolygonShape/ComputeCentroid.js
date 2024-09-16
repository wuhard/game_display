(function anonymous(context
) {
/*
	Index: 1411
	Path:  Box2D/Collision/Shapes/b2PolygonShape.ComputeCentroid
	Type:  Public
	Kind:  Method
	Super: -
	Return: 7 0:Box2D.Common.Math::b2Vec2
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_ComputeCentroid(local1 /* Vector */, local2 /* uint */) {
        // Possible use a real "this"
        /* Force uint coerce */
        local2 = (local2>>>0);
        // local3 is assigned before read, skip init
        let local3 = undefined
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
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local3 = null;
//                        stack0 = NaN;// JIT: redundant assigment, value unused
                        local7 = NaN;
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local9 = null;
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local10 = null;
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
                        // 7 0:Box2D.Common.Math::b2Vec2
                        stack0 = scope0.findScopeProperty($names[0], true, false);
                        //JIT: Support fast construct:b2Vec2/Object
                        stack0 = context.constructFast(stack0, [], $names[0]);
                        //IR: Drop coerce, reason: redundant
                        local3 = stack0;
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        //IR: CONVERT_D removed, reason: arguments strictly number
                        local4 = 0;
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        //IR: CONVERT_D removed, reason: arguments strictly number
                        local5 = 0;
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        //IR: CONVERT_D removed, reason: arguments strictly number
                        local6 = 0;
                        stack0 = 1;
//                        stack1 = 3;// JIT: redundant assigment, value unused
                        stack0 /= 3;
                        stack0 = +stack0;
                        local7 = stack0;
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local8 = 0;
                        { p = 264; continue; };
                    case 76:
                        // JIT: potential type:29 0:__AS3__.vec::Vector<7 0:Box2D.Common.Math::b2Vec2>
                        stack0 = local1;
                        stack1 = local8;
                        // 27 {3, 0:Box2D.Common.Math, 0:Box2D.Collision.Shapes, 0, 3, 2:Box2D.Collision.Shapes, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Common, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:http://www.box2d.org/ns/b2internal, 1:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2Shape}::*
                        {
                            let simple = local8;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[1], local8);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[0], true, false);
                            _e || console.warn('[ComputeCentroid] Coerce Type not found:', "b2Vec2")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local9 = stack0;
                        stack0 = local8;
//                        stack1 = 1;// JIT: redundant assigment, value unused
                        stack0 += 1;
                        // JIT: potential type:7 0::uint
                        stack1 = local2;
                        stack0 = stack0 < local2;
                        if (!stack0) { p = 118; continue; };
                        // JIT: potential type:29 0:__AS3__.vec::Vector<7 0:Box2D.Common.Math::b2Vec2>
                        stack0 = local1;
                        // 7 0::int
                        stack1 = scope0.findScopeProperty($names[2], true, false);
                        stack2 = local8;
//                        stack3 = 1;// JIT: redundant assigment, value unused
                        stack2 += 1;
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
                                    stack1 = stack1.axCallProperty($names[2], [stack2], false);
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
                                    const rm = context.runtimename($names[1], stack1);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[0], true, false);
                            _e || console.warn('[ComputeCentroid] Coerce Type not found:', "b2Vec2")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        { p = 126; continue; };
                    case 118:
                        // JIT: potential type:29 0:__AS3__.vec::Vector<7 0:Box2D.Common.Math::b2Vec2>
                        stack0 = local1;
                        stack1 = 0;
                        // 27 {3, 0:Box2D.Common.Math, 0:Box2D.Collision.Shapes, 0, 3, 2:Box2D.Collision.Shapes, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Common, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:http://www.box2d.org/ns/b2internal, 1:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2Shape}::*
                        {
                            let simple = 0;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[1], 0);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[0], true, false);
                            _e || console.warn('[ComputeCentroid] Coerce Type not found:', "b2Vec2")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                    case 126:
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[0], true, false);
                            _e || console.warn('[ComputeCentroid] Coerce Type not found:', "b2Vec2")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local10 = stack0;
//                        stack0 = local9;// JIT: redundant assigment, value unused
                        // 7 0::x
                        //Possible type:undefined
                        if (!(local9 != undefined && local9[AX_CLASS_SYMBOL])) {
                            stack0 = local9['x'];
                        } else {
                            temp = local9[AX_CLASS_SYMBOL] ? local9 : sec.box(local9);
                            stack0 = temp.$Bgx;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        stack0 -= local5;
                        stack0 = +stack0;
                        local11 = stack0;
//                        stack0 = local9;// JIT: redundant assigment, value unused
                        // 7 0::y
                        if (!(local9 != undefined && local9[AX_CLASS_SYMBOL])) {
                            stack0 = local9['y'];
                        } else {
                            temp = local9[AX_CLASS_SYMBOL] ? local9 : sec.box(local9);
                            stack0 = temp.$Bgy;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[4]);
                            }
                        }
//                        stack1 = local6;// JIT: redundant assigment, value unused
                        stack0 -= local6;
                        stack0 = +stack0;
                        local12 = stack0;
//                        stack0 = local10;// JIT: redundant assigment, value unused
                        // 7 0::x
                        if (!(local10 != undefined && local10[AX_CLASS_SYMBOL])) {
                            stack0 = local10['x'];
                        } else {
                            temp = local10[AX_CLASS_SYMBOL] ? local10 : sec.box(local10);
                            stack0 = temp.$Bgx;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        stack0 -= local5;
                        stack0 = +stack0;
                        local13 = stack0;
//                        stack0 = local10;// JIT: redundant assigment, value unused
                        // 7 0::y
                        if (!(local10 != undefined && local10[AX_CLASS_SYMBOL])) {
                            stack0 = local10['y'];
                        } else {
                            temp = local10[AX_CLASS_SYMBOL] ? local10 : sec.box(local10);
                            stack0 = temp.$Bgy;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[4]);
                            }
                        }
//                        stack1 = local6;// JIT: redundant assigment, value unused
                        stack0 -= local6;
                        stack0 = +stack0;
                        local14 = stack0;
                        stack0 = local11;
//                        stack1 = local14;// JIT: redundant assigment, value unused
                        stack0 *= local14;
                        stack1 = local12;
//                        stack2 = local13;// JIT: redundant assigment, value unused
                        stack1 *= local13;
                        stack0 -= stack1;
                        stack0 = +stack0;
                        local15 = stack0;
                        stack0 = 0.5;
//                        stack1 = local15;// JIT: redundant assigment, value unused
                        stack0 *= local15;
                        stack0 = +stack0;
                        local16 = stack0;
                        stack0 = local4;
//                        stack1 = local16;// JIT: redundant assigment, value unused
                        stack0 += local16;
                        stack0 = +stack0;
                        local4 = stack0;
//                        stack0 = local3;// JIT: redundant assigment, value unused
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        // 7 0::x
                        //Possible type:undefined
                        if (!(local3 != undefined && local3[AX_CLASS_SYMBOL])) {
                            stack1 = local3['x'];
                        } else {
                            temp = local3[AX_CLASS_SYMBOL] ? local3 : sec.box(local3);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[3]);
                            }
                        }
                        stack2 = local16;
//                        stack3 = local7;// JIT: redundant assigment, value unused
                        stack2 *= local7;
                        stack3 = local5;
//                        stack4 = local9;// JIT: redundant assigment, value unused
                        // 7 0::x
                        if (!(local9 != undefined && local9[AX_CLASS_SYMBOL])) {
                            stack4 = local9['x'];
                        } else {
                            temp = local9[AX_CLASS_SYMBOL] ? local9 : sec.box(local9);
                            stack4 = temp.$Bgx;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[3]);
                            }
                        }
                        stack3 += stack4;
//                        stack4 = local10;// JIT: redundant assigment, value unused
                        // 7 0::x
                        if (!(local10 != undefined && local10[AX_CLASS_SYMBOL])) {
                            stack4 = local10['x'];
                        } else {
                            temp = local10[AX_CLASS_SYMBOL] ? local10 : sec.box(local10);
                            stack4 = temp.$Bgx;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[3]);
                            }
                        }
                        stack3 += stack4;
                        stack2 *= stack3;
                        stack1 += stack2;
                        // 7 0::x
                        if (!(local3 != undefined && local3[AX_CLASS_SYMBOL])){
                            local3.x = stack1;
                        } else {
                            context.setproperty($names[3], stack1, local3);
                        }
//                        stack0 = local3;// JIT: redundant assigment, value unused
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        // 7 0::y
                        if (!(local3 != undefined && local3[AX_CLASS_SYMBOL])) {
                            stack1 = local3['y'];
                        } else {
                            temp = local3[AX_CLASS_SYMBOL] ? local3 : sec.box(local3);
                            stack1 = temp.$Bgy;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[4]);
                            }
                        }
                        stack2 = local16;
//                        stack3 = local7;// JIT: redundant assigment, value unused
                        stack2 *= local7;
                        stack3 = local6;
//                        stack4 = local9;// JIT: redundant assigment, value unused
                        // 7 0::y
                        if (!(local9 != undefined && local9[AX_CLASS_SYMBOL])) {
                            stack4 = local9['y'];
                        } else {
                            temp = local9[AX_CLASS_SYMBOL] ? local9 : sec.box(local9);
                            stack4 = temp.$Bgy;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[4]);
                            }
                        }
                        stack3 += stack4;
//                        stack4 = local10;// JIT: redundant assigment, value unused
                        // 7 0::y
                        if (!(local10 != undefined && local10[AX_CLASS_SYMBOL])) {
                            stack4 = local10['y'];
                        } else {
                            temp = local10[AX_CLASS_SYMBOL] ? local10 : sec.box(local10);
                            stack4 = temp.$Bgy;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[4]);
                            }
                        }
                        stack3 += stack4;
                        stack2 *= stack3;
                        stack1 += stack2;
                        // 7 0::y
                        if (!(local3 != undefined && local3[AX_CLASS_SYMBOL])){
                            local3.y = stack1;
                        } else {
                            context.setproperty($names[4], stack1, local3);
                        }
                        local8 = (local8 | 0) + 1;
                    case 264:
                        stack0 = local8;
                        // JIT: potential type:7 0::uint
                        stack1 = local2;
                        if (local2 > local8) { p = 76; continue; };
//                        stack0 = local3;// JIT: redundant assigment, value unused
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        // 7 0::x
                        if (!(local3 != undefined && local3[AX_CLASS_SYMBOL])) {
                            stack1 = local3['x'];
                        } else {
                            temp = local3[AX_CLASS_SYMBOL] ? local3 : sec.box(local3);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[3]);
                            }
                        }
                        stack2 = 1;
//                        stack3 = local4;// JIT: redundant assigment, value unused
                        stack2 /= local4;
                        stack1 *= stack2;
                        // 7 0::x
                        if (!(local3 != undefined && local3[AX_CLASS_SYMBOL])){
                            local3.x = stack1;
                        } else {
                            context.setproperty($names[3], stack1, local3);
                        }
//                        stack0 = local3;// JIT: redundant assigment, value unused
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        // 7 0::y
                        if (!(local3 != undefined && local3[AX_CLASS_SYMBOL])) {
                            stack1 = local3['y'];
                        } else {
                            temp = local3[AX_CLASS_SYMBOL] ? local3 : sec.box(local3);
                            stack1 = temp.$Bgy;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[4]);
                            }
                        }
                        stack2 = 1;
//                        stack3 = local4;// JIT: redundant assigment, value unused
                        stack2 /= local4;
                        stack1 *= stack2;
                        // 7 0::y
                        if (!(local3 != undefined && local3[AX_CLASS_SYMBOL])){
                            local3.y = stack1;
                        } else {
                            context.setproperty($names[4], stack1, local3);
                        }
                        stack0 = local3;
                        return local3;
                    }
                }
            }
//# sourceURL=http://jit/Box2D/Collision/Shapes/b2PolygonShape/ComputeCentroid.js
})