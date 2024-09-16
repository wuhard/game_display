(function anonymous(context
) {
/*
	Index: 1424
	Path:  Box2D/Collision/Shapes/b2PolygonShape::m_ComputeSubmergedArea
	Type:  Public
	Kind:  Method
	Super: Box2D/Collision/Shapes/b2Shape
	Return: 7 0::Number
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_ComputeSubmergedArea(local1 /* b2Vec2 */, local2 /* Number */, local3 /* b2Transform */, local4 /* b2Vec2 */) {
        // Possible use a real "this"
        /* Force Number coerce */
        local2 = (+local2);
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
        // local26 is assigned before read, skip init
        let local26 = undefined
        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
        let stack3 = undefined;
        let stack4 = undefined;
        let stack5 = undefined;
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
                        local12 = 0;
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local22 = null;
//                        stack0 = false;// JIT: redundant assigment, value unused
                        local23 = false;
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local24 = null;
//                        stack0 = NaN;// JIT: redundant assigment, value unused
                        local25 = NaN;
                        // 7 0:Box2D.Common.Math::b2Math
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$Bgb2Math;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
//                        // JIT: potential type:7 0:Box2D.Common.Math::b2Transform// JIT: redundant assigment, value unused
                        stack1 = local3;
                        // 7 0::R
                        if (!(local3 != undefined && local3[AX_CLASS_SYMBOL])) {
                            stack1 = local3['R'];
                        } else {
                            temp = local3[AX_CLASS_SYMBOL] ? local3 : sec.box(local3);
                            stack1 = temp.$BgR;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[1]);
                            }
                        }
//                        // JIT: potential type:7 0:Box2D.Common.Math::b2Vec2// JIT: redundant assigment, value unused
                        stack2 = local1;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.MulTMV(stack1, local1);
                        } else {
                            // 7 0::MulTMV
                            {
                                let t = stack0;
                                const m = t.$BgMulTMV || (t = sec.box(stack0), t.$BgMulTMV);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgMulTMV (stack1, local1);
                                } else { 
                                    stack0 = stack0.axCallProperty($names[2], [stack1, local1], false);
                                }
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[3], true, false);
                            _e || console.warn('[m_ComputeSubmergedArea] Coerce Type not found:', "b2Vec2")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local5 = stack0;
                        // JIT: potential type:7 0::Number
                        stack0 = local2;
                        // 7 0:Box2D.Common.Math::b2Math
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack1 = temp.$Bgb2Math;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[0]);
                        }
//                        // JIT: potential type:7 0:Box2D.Common.Math::b2Vec2// JIT: redundant assigment, value unused
                        stack2 = local1;
//                        // JIT: potential type:7 0:Box2D.Common.Math::b2Transform// JIT: redundant assigment, value unused
                        stack3 = local3;
                        // 7 0::position
                        if (!(local3 != undefined && local3[AX_CLASS_SYMBOL])) {
                            stack3 = local3['position'];
                        } else {
                            temp = local3[AX_CLASS_SYMBOL] ? local3 : sec.box(local3);
                            stack3 = temp.$Bgposition;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[4]);
                            }
                        }
                        if (!(_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL]))) {
                           stack1 = stack1.Dot(local1, stack3);
                        } else {
                            // 7 0::Dot
                            {
                                let t = stack1;
                                const m = t.$BgDot || (t = sec.box(stack1), t.$BgDot);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$BgDot (local1, stack3);
                                } else { 
                                    stack1 = stack1.axCallProperty($names[5], [local1, stack3], false);
                                }
                            }
                        }
                        stack0 -= stack1;
                        stack0 = +stack0;
                        local6 = stack0;
                        // 9 {3, 0:Box2D.Common.Math, 0:Box2D.Collision.Shapes, 0, 0:__AS3__.vec, 3, 2:Box2D.Collision.Shapes, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Common, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:http://www.box2d.org/ns/b2internal, 1:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2Shape}::Vector
                        temp = scope0.findScopeProperty($names[6], true, false);
                        stack0 = temp.$BgVector;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[6]);
                        }
                        // 7 0::Number
                        temp = scope0.findScopeProperty($names[7], true, false);
                        stack1 = temp.$BgNumber;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[7]);
                        }
                        stack0 = sec.applyType(stack0, [stack1]);
                        //JIT: Possible source:9 {3, 0:Box2D.Common.Math, 0:Box2D.Collision.Shapes, 0, 0:__AS3__.vec, 3, 2:Box2D.Collision.Shapes, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Common, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:http://www.box2d.org/ns/b2internal, 1:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2Shape}::Vector
                        stack0 = context.construct(stack0, []);
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[8], true, false);
                            _e || console.warn('[m_ComputeSubmergedArea] Coerce Type not found:', "Vector")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local7 = stack0;
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local8 = 0;
//                        stack0 = -1;// JIT: redundant assigment, value unused
                        local9 = -1;
//                        stack0 = -1;// JIT: redundant assigment, value unused
                        local10 = -1;
//                        stack0 = false;// JIT: redundant assigment, value unused
                        local11 = false;
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local12 = 0;
                        { p = 190; continue; };
                    case 92:
                        stack0 = local7;
                        stack1 = local12;
                        // 7 0:Box2D.Common.Math::b2Math
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack2 = temp.$Bgb2Math;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[0]);
                        }
//                        stack3 = local5;// JIT: redundant assigment, value unused
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_vertices
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 29 0:__AS3__.vec::Vector<7 0:Box2D.Common.Math::b2Vec2>  */ 
                        stack4 = this.$Bgm_vertices;
                        stack5 = local12;
                        // 27 {3, 0:Box2D.Common.Math, 0:Box2D.Collision.Shapes, 0, 3, 2:Box2D.Collision.Shapes, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Common, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:http://www.box2d.org/ns/b2internal, 1:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2Shape}::*
                        {
                            let simple = local12;
                            const b_obj = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);

                            if (typeof simple === "number") {
                                stack4 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack4 = b_obj['$Bg' + simple];
                                if (stack4 === undefined || typeof stack4 === 'function') {
                                    const rm = context.runtimename($names[9], local12);
                                    stack4 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        if (!(_a = typeof stack2, ((_a !== 'object' && _a !== 'function' ) || stack2 == null || stack2[AX_CLASS_SYMBOL]))) {
                           stack2 = stack2.Dot(local5, stack4);
                        } else {
                            // 7 0::Dot
                            {
                                let t = stack2;
                                const m = t.$BgDot || (t = sec.box(stack2), t.$BgDot);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BgDot (local5, stack4);
                                } else { 
                                    stack2 = stack2.axCallProperty($names[5], [local5, stack4], false);
                                }
                            }
                        }
//                        stack3 = local6;// JIT: redundant assigment, value unused
                        stack2 -= local6;
                        context.setproperty(context.runtimename($names[9], local12), stack2, local7);
                        stack0 = local7;
                        stack1 = local12;
                        // 27 {3, 0:Box2D.Common.Math, 0:Box2D.Collision.Shapes, 0, 3, 2:Box2D.Collision.Shapes, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Common, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:http://www.box2d.org/ns/b2internal, 1:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2Shape}::*
                        {
                            let simple = local12;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[9], local12);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 7 0::Number
                        temp = scope0.findScopeProperty($names[7], true, false);
                        stack1 = temp.$BgNumber;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[7]);
                        }
                        // 7 0::MIN_VALUE
                        //Possible type:7 0::Number
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['MIN_VALUE'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgMIN_VALUE;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[10]);
                            }
                        }
                        stack1 = -stack1;
                        stack0 = stack0 < stack1;
                        local23 = stack0;
                        stack0 = local12;
                        stack1 = 0;
                        if (!(0 < local12)) { p = 183; continue; };
                        stack0 = local23;
                        if (!local23) { p = 169; continue; };
                        stack0 = local11;
                        if (local11) { p = 165; continue; };
                        stack0 = local12;
                        stack0--;
                        stack0 |= 0;
                        local9 = stack0;
                        local8 = (local8 | 0) + 1;
                    case 165:
                        { p = 183; continue; };
                    case 169:
                        stack0 = local11;
                        if (!local11) { p = 183; continue; };
                        stack0 = local12;
                        stack0--;
                        stack0 |= 0;
                        local10 = stack0;
                        local8 = (local8 | 0) + 1;
                    case 183:
                        stack0 = local23;
                        stack0 = !!local23;
                        local11 = stack0;
                        local12 = (local12 | 0) + 1;
                    case 190:
                        stack0 = local12;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_vertexCount
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack1 = this.$Bgm_vertexCount;
                        if (stack1 > local12) { p = 92; continue; };
                        { p = 295; continue; };
                    case 204:
                        stack0 = local11;
                        if (!local11) { p = 254; continue; };
                        // 7 0:Box2D.Collision.Shapes::b2MassData
                        stack0 = scope0.findScopeProperty($names[11], true, false);
                        //JIT: Support fast construct:b2MassData/Object
                        stack0 = context.constructFast(stack0, [], $names[11]);
                        //IR: Drop coerce, reason: redundant
                        local24 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = local24;// JIT: redundant assigment, value unused
//                        stack2 = 1;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgComputeMass(local24, 1);
//                        // JIT: potential type:7 0:Box2D.Common.Math::b2Vec2// JIT: redundant assigment, value unused
                        stack0 = local4;
                        // 7 0:Box2D.Common.Math::b2Math
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack1 = temp.$Bgb2Math;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[0]);
                        }
//                        // JIT: potential type:7 0:Box2D.Common.Math::b2Transform// JIT: redundant assigment, value unused
                        stack2 = local3;
//                        stack3 = local24;// JIT: redundant assigment, value unused
                        // 7 0::center
                        if (!(local24 != undefined && local24[AX_CLASS_SYMBOL])) {
                            stack3 = local24['center'];
                        } else {
                            temp = local24[AX_CLASS_SYMBOL] ? local24 : sec.box(local24);
                            stack3 = temp.$Bgcenter;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[12]);
                            }
                        }
                        if (!(_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL]))) {
                           stack1 = stack1.MulX(local3, stack3);
                        } else {
                            // 7 0::MulX
                            {
                                let t = stack1;
                                const m = t.$BgMulX || (t = sec.box(stack1), t.$BgMulX);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$BgMulX (local3, stack3);
                                } else { 
                                    stack1 = stack1.axCallProperty($names[13], [local3, stack3], false);
                                }
                            }
                        }
                        if (!(_a = typeof local4, ((_a !== 'object' && _a !== 'function' ) || local4 == null || local4[AX_CLASS_SYMBOL]))) {
                            local4.SetV(stack1);
                        } else {
                            // 7 0::SetV
                            {
                                let t = local4;
                                const m = t.$BgSetV || (t = sec.box(local4), t.$BgSetV);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   local4.axCallProperty($names[14], [stack1], false);
                                }
                            }
                        }
//                        stack0 = local24;// JIT: redundant assigment, value unused
                        // 7 0::mass
                        //Possible type:7 0:Box2D.Collision.Shapes::b2MassData
                        if (!(local24 != undefined && local24[AX_CLASS_SYMBOL])) {
                            stack0 = local24['mass'];
                        } else {
                            temp = local24[AX_CLASS_SYMBOL] ? local24 : sec.box(local24);
                            stack0 = temp.$Bgmass;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[15]);
                            }
                        }
                        return (+stack0);
                    case 254:
                        stack0 = 0;
                        return 0;
                    case 257:
                        stack0 = local9;
                        stack1 = -1;
                        if (-1 != local9) { p = 278; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_vertexCount
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack0 = this.$Bgm_vertexCount;
                        stack0--;
                        stack0 |= 0;
                        local9 = stack0;
                        { p = 286; continue; };
                    case 278:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_vertexCount
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack0 = this.$Bgm_vertexCount;
                        stack0--;
                        stack0 |= 0;
                        local10 = stack0;
                    case 286:
                        { p = 355; continue; };
                    case 290:
                        { p = 355; continue; };
                    case 295:
//                        stack0 = local8;// JIT: redundant assigment, value unused
                        local26 = local8;
                        stack0 = 0;
                        stack1 = local26;
                        if (local26 !== 0) { p = 313; continue; };
                        stack0 = 0;
                        { p = 339; continue; };
                    case 313:
                        stack0 = 1;
                        stack1 = local26;
                        if (local26 !== 1) { p = 327; continue; };
                        stack0 = 1;
                        { p = 339; continue; };
                    case 327:
                        { p = 337; continue; };
                        // unreachable
                        // unreachable
                    case 337:
                        stack0 = 2;
                    case 339:
                        //IR: KILL removed, reason: prevent optimisation
                        if (stack0 >= 0 && stack0 < 3) { p = [204, 257, 290][stack0]; continue; } else { p = 290; continue; };
                    case 355:
                        stack0 = local9;
//                        stack1 = 1;// JIT: redundant assigment, value unused
                        stack0 += 1;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_vertexCount
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack1 = this.$Bgm_vertexCount;
                        stack0 %= stack1;
                        stack0 |= 0;
                        local13 = stack0;
                        stack0 = local10;
//                        stack1 = 1;// JIT: redundant assigment, value unused
                        stack0 += 1;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_vertexCount
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack1 = this.$Bgm_vertexCount;
                        stack0 %= stack1;
                        stack0 |= 0;
                        local14 = stack0;
                        stack0 = 0;
                        stack1 = local7;
                        stack2 = local9;
                        // 27 {3, 0:Box2D.Common.Math, 0:Box2D.Collision.Shapes, 0, 3, 2:Box2D.Collision.Shapes, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Common, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:http://www.box2d.org/ns/b2internal, 1:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2Shape}::*
                        {
                            let simple = local9;
                            const b_obj = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);

                            if (typeof simple === "number") {
                                stack1 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack1 = b_obj['$Bg' + simple];
                                if (stack1 === undefined || typeof stack1 === 'function') {
                                    const rm = context.runtimename($names[9], local9);
                                    stack1 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        stack0 -= stack1;
                        stack1 = local7;
                        stack2 = local13;
                        // 27 {3, 0:Box2D.Common.Math, 0:Box2D.Collision.Shapes, 0, 3, 2:Box2D.Collision.Shapes, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Common, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:http://www.box2d.org/ns/b2internal, 1:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2Shape}::*
                        {
                            let simple = local13;
                            const b_obj = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);

                            if (typeof simple === "number") {
                                stack1 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack1 = b_obj['$Bg' + simple];
                                if (stack1 === undefined || typeof stack1 === 'function') {
                                    const rm = context.runtimename($names[9], local13);
                                    stack1 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        stack2 = local7;
                        stack3 = local9;
                        // 27 {3, 0:Box2D.Common.Math, 0:Box2D.Collision.Shapes, 0, 3, 2:Box2D.Collision.Shapes, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Common, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:http://www.box2d.org/ns/b2internal, 1:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2Shape}::*
                        {
                            let simple = local9;
                            const b_obj = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);

                            if (typeof simple === "number") {
                                stack2 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack2 = b_obj['$Bg' + simple];
                                if (stack2 === undefined || typeof stack2 === 'function') {
                                    const rm = context.runtimename($names[9], local9);
                                    stack2 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        stack1 -= stack2;
                        stack0 /= stack1;
                        stack0 = +stack0;
                        local15 = stack0;
                        stack0 = 0;
                        stack1 = local7;
                        stack2 = local10;
                        // 27 {3, 0:Box2D.Common.Math, 0:Box2D.Collision.Shapes, 0, 3, 2:Box2D.Collision.Shapes, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Common, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:http://www.box2d.org/ns/b2internal, 1:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2Shape}::*
                        {
                            let simple = local10;
                            const b_obj = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);

                            if (typeof simple === "number") {
                                stack1 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack1 = b_obj['$Bg' + simple];
                                if (stack1 === undefined || typeof stack1 === 'function') {
                                    const rm = context.runtimename($names[9], local10);
                                    stack1 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        stack0 -= stack1;
                        stack1 = local7;
                        stack2 = local14;
                        // 27 {3, 0:Box2D.Common.Math, 0:Box2D.Collision.Shapes, 0, 3, 2:Box2D.Collision.Shapes, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Common, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:http://www.box2d.org/ns/b2internal, 1:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2Shape}::*
                        {
                            let simple = local14;
                            const b_obj = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);

                            if (typeof simple === "number") {
                                stack1 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack1 = b_obj['$Bg' + simple];
                                if (stack1 === undefined || typeof stack1 === 'function') {
                                    const rm = context.runtimename($names[9], local14);
                                    stack1 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        stack2 = local7;
                        stack3 = local10;
                        // 27 {3, 0:Box2D.Common.Math, 0:Box2D.Collision.Shapes, 0, 3, 2:Box2D.Collision.Shapes, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Common, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:http://www.box2d.org/ns/b2internal, 1:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2Shape}::*
                        {
                            let simple = local10;
                            const b_obj = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);

                            if (typeof simple === "number") {
                                stack2 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack2 = b_obj['$Bg' + simple];
                                if (stack2 === undefined || typeof stack2 === 'function') {
                                    const rm = context.runtimename($names[9], local10);
                                    stack2 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        stack1 -= stack2;
                        stack0 /= stack1;
                        stack0 = +stack0;
                        local16 = stack0;
                        // 7 0:Box2D.Common.Math::b2Vec2
                        stack0 = scope0.findScopeProperty($names[3], true, false);
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_vertices
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 29 0:__AS3__.vec::Vector<7 0:Box2D.Common.Math::b2Vec2>  */ 
                        stack1 = this.$Bgm_vertices;
                        stack2 = local9;
                        // 27 {3, 0:Box2D.Common.Math, 0:Box2D.Collision.Shapes, 0, 3, 2:Box2D.Collision.Shapes, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Common, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:http://www.box2d.org/ns/b2internal, 1:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2Shape}::*
                        {
                            let simple = local9;
                            const b_obj = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);

                            if (typeof simple === "number") {
                                stack1 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack1 = b_obj['$Bg' + simple];
                                if (stack1 === undefined || typeof stack1 === 'function') {
                                    const rm = context.runtimename($names[9], local9);
                                    stack1 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 7 0::x
                        //Possible type:29 0:__AS3__.vec::Vector<7 0:Box2D.Common.Math::b2Vec2>
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['x'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[16]);
                            }
                        }
                        stack2 = 1;
//                        stack3 = local15;// JIT: redundant assigment, value unused
                        stack2 -= local15;
                        stack1 *= stack2;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_vertices
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 29 0:__AS3__.vec::Vector<7 0:Box2D.Common.Math::b2Vec2>  */ 
                        stack2 = this.$Bgm_vertices;
                        stack3 = local13;
                        // 27 {3, 0:Box2D.Common.Math, 0:Box2D.Collision.Shapes, 0, 3, 2:Box2D.Collision.Shapes, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Common, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:http://www.box2d.org/ns/b2internal, 1:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2Shape}::*
                        {
                            let simple = local13;
                            const b_obj = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);

                            if (typeof simple === "number") {
                                stack2 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack2 = b_obj['$Bg' + simple];
                                if (stack2 === undefined || typeof stack2 === 'function') {
                                    const rm = context.runtimename($names[9], local13);
                                    stack2 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 7 0::x
                        //Possible type:29 0:__AS3__.vec::Vector<7 0:Box2D.Common.Math::b2Vec2>
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[16]);
                            }
                        }
//                        stack3 = local15;// JIT: redundant assigment, value unused
                        stack2 *= local15;
                        stack1 += stack2;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_vertices
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 29 0:__AS3__.vec::Vector<7 0:Box2D.Common.Math::b2Vec2>  */ 
                        stack2 = this.$Bgm_vertices;
                        stack3 = local9;
                        // 27 {3, 0:Box2D.Common.Math, 0:Box2D.Collision.Shapes, 0, 3, 2:Box2D.Collision.Shapes, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Common, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:http://www.box2d.org/ns/b2internal, 1:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2Shape}::*
                        {
                            let simple = local9;
                            const b_obj = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);

                            if (typeof simple === "number") {
                                stack2 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack2 = b_obj['$Bg' + simple];
                                if (stack2 === undefined || typeof stack2 === 'function') {
                                    const rm = context.runtimename($names[9], local9);
                                    stack2 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 7 0::y
                        //Possible type:29 0:__AS3__.vec::Vector<7 0:Box2D.Common.Math::b2Vec2>
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['y'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgy;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[17]);
                            }
                        }
                        stack3 = 1;
//                        stack4 = local15;// JIT: redundant assigment, value unused
                        stack3 -= local15;
                        stack2 *= stack3;
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_vertices
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 29 0:__AS3__.vec::Vector<7 0:Box2D.Common.Math::b2Vec2>  */ 
                        stack3 = this.$Bgm_vertices;
                        stack4 = local13;
                        // 27 {3, 0:Box2D.Common.Math, 0:Box2D.Collision.Shapes, 0, 3, 2:Box2D.Collision.Shapes, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Common, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:http://www.box2d.org/ns/b2internal, 1:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2Shape}::*
                        {
                            let simple = local13;
                            const b_obj = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);

                            if (typeof simple === "number") {
                                stack3 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack3 = b_obj['$Bg' + simple];
                                if (stack3 === undefined || typeof stack3 === 'function') {
                                    const rm = context.runtimename($names[9], local13);
                                    stack3 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 7 0::y
                        //Possible type:29 0:__AS3__.vec::Vector<7 0:Box2D.Common.Math::b2Vec2>
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[17]);
                            }
                        }
//                        stack4 = local15;// JIT: redundant assigment, value unused
                        stack3 *= local15;
                        stack2 += stack3;
                        //JIT: Support fast construct:b2Vec2/Object
                        stack0 = context.constructFast(stack0, [stack1, stack2], $names[3]);
                        //IR: Drop coerce, reason: redundant
                        local17 = stack0;
                        // 7 0:Box2D.Common.Math::b2Vec2
                        stack0 = scope0.findScopeProperty($names[3], true, false);
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_vertices
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 29 0:__AS3__.vec::Vector<7 0:Box2D.Common.Math::b2Vec2>  */ 
                        stack1 = this.$Bgm_vertices;
                        stack2 = local10;
                        // 27 {3, 0:Box2D.Common.Math, 0:Box2D.Collision.Shapes, 0, 3, 2:Box2D.Collision.Shapes, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Common, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:http://www.box2d.org/ns/b2internal, 1:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2Shape}::*
                        {
                            let simple = local10;
                            const b_obj = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);

                            if (typeof simple === "number") {
                                stack1 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack1 = b_obj['$Bg' + simple];
                                if (stack1 === undefined || typeof stack1 === 'function') {
                                    const rm = context.runtimename($names[9], local10);
                                    stack1 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 7 0::x
                        //Possible type:29 0:__AS3__.vec::Vector<7 0:Box2D.Common.Math::b2Vec2>
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['x'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[16]);
                            }
                        }
                        stack2 = 1;
//                        stack3 = local16;// JIT: redundant assigment, value unused
                        stack2 -= local16;
                        stack1 *= stack2;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_vertices
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 29 0:__AS3__.vec::Vector<7 0:Box2D.Common.Math::b2Vec2>  */ 
                        stack2 = this.$Bgm_vertices;
                        stack3 = local14;
                        // 27 {3, 0:Box2D.Common.Math, 0:Box2D.Collision.Shapes, 0, 3, 2:Box2D.Collision.Shapes, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Common, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:http://www.box2d.org/ns/b2internal, 1:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2Shape}::*
                        {
                            let simple = local14;
                            const b_obj = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);

                            if (typeof simple === "number") {
                                stack2 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack2 = b_obj['$Bg' + simple];
                                if (stack2 === undefined || typeof stack2 === 'function') {
                                    const rm = context.runtimename($names[9], local14);
                                    stack2 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 7 0::x
                        //Possible type:29 0:__AS3__.vec::Vector<7 0:Box2D.Common.Math::b2Vec2>
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[16]);
                            }
                        }
//                        stack3 = local16;// JIT: redundant assigment, value unused
                        stack2 *= local16;
                        stack1 += stack2;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_vertices
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 29 0:__AS3__.vec::Vector<7 0:Box2D.Common.Math::b2Vec2>  */ 
                        stack2 = this.$Bgm_vertices;
                        stack3 = local10;
                        // 27 {3, 0:Box2D.Common.Math, 0:Box2D.Collision.Shapes, 0, 3, 2:Box2D.Collision.Shapes, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Common, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:http://www.box2d.org/ns/b2internal, 1:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2Shape}::*
                        {
                            let simple = local10;
                            const b_obj = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);

                            if (typeof simple === "number") {
                                stack2 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack2 = b_obj['$Bg' + simple];
                                if (stack2 === undefined || typeof stack2 === 'function') {
                                    const rm = context.runtimename($names[9], local10);
                                    stack2 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 7 0::y
                        //Possible type:29 0:__AS3__.vec::Vector<7 0:Box2D.Common.Math::b2Vec2>
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['y'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgy;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[17]);
                            }
                        }
                        stack3 = 1;
//                        stack4 = local16;// JIT: redundant assigment, value unused
                        stack3 -= local16;
                        stack2 *= stack3;
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_vertices
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 29 0:__AS3__.vec::Vector<7 0:Box2D.Common.Math::b2Vec2>  */ 
                        stack3 = this.$Bgm_vertices;
                        stack4 = local14;
                        // 27 {3, 0:Box2D.Common.Math, 0:Box2D.Collision.Shapes, 0, 3, 2:Box2D.Collision.Shapes, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Common, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:http://www.box2d.org/ns/b2internal, 1:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2Shape}::*
                        {
                            let simple = local14;
                            const b_obj = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);

                            if (typeof simple === "number") {
                                stack3 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack3 = b_obj['$Bg' + simple];
                                if (stack3 === undefined || typeof stack3 === 'function') {
                                    const rm = context.runtimename($names[9], local14);
                                    stack3 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 7 0::y
                        //Possible type:29 0:__AS3__.vec::Vector<7 0:Box2D.Common.Math::b2Vec2>
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[17]);
                            }
                        }
//                        stack4 = local16;// JIT: redundant assigment, value unused
                        stack3 *= local16;
                        stack2 += stack3;
                        //JIT: Support fast construct:b2Vec2/Object
                        stack0 = context.constructFast(stack0, [stack1, stack2], $names[3]);
                        //IR: Drop coerce, reason: redundant
                        local18 = stack0;
                        stack0 = 0;
                        stack0 = +0;
                        local19 = stack0;
                        // 7 0:Box2D.Common.Math::b2Vec2
                        stack0 = scope0.findScopeProperty($names[3], true, false);
                        //JIT: Support fast construct:b2Vec2/Object
                        stack0 = context.constructFast(stack0, [], $names[3]);
                        //IR: Drop coerce, reason: redundant
                        local20 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_vertices
                        //Possible type:7 0:Box2D.Common.Math::b2Vec2
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 29 0:__AS3__.vec::Vector<7 0:Box2D.Common.Math::b2Vec2>  */ 
                        stack0 = this.$Bgm_vertices;
                        stack1 = local13;
                        // 27 {3, 0:Box2D.Common.Math, 0:Box2D.Collision.Shapes, 0, 3, 2:Box2D.Collision.Shapes, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Common, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:http://www.box2d.org/ns/b2internal, 1:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2Shape}::*
                        {
                            let simple = local13;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[9], local13);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[3], true, false);
                            _e || console.warn('[m_ComputeSubmergedArea] Coerce Type not found:', "b2Vec2")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local21 = stack0;
                        stack0 = local13;
                        stack0 |= 0;
                        local12 = stack0;
                        { p = 808; continue; };
                    case 629:
                        stack0 = local12;
//                        stack1 = 1;// JIT: redundant assigment, value unused
                        stack0 += 1;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_vertexCount
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack1 = this.$Bgm_vertexCount;
                        stack0 %= stack1;
                        stack0 |= 0;
                        stack1 = stack0;
                        local12 = stack1;
                        stack1 = local14;
                        if (local14 != stack0) { p = 660; continue; };
                        stack0 = local18;
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[3], true, false);
                            _e || console.warn('[m_ComputeSubmergedArea] Coerce Type not found:', "b2Vec2")
                            stack0 = _e ? _e.axCoerce(local18) : local18;
                        }
                        local22 = stack0;
                        { p = 673; continue; };
                    case 660:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_vertices
                        //Possible type:29 0:__AS3__.vec::Vector<7 0:Box2D.Common.Math::b2Vec2>
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 29 0:__AS3__.vec::Vector<7 0:Box2D.Common.Math::b2Vec2>  */ 
                        stack0 = this.$Bgm_vertices;
                        stack1 = local12;
                        // 27 {3, 0:Box2D.Common.Math, 0:Box2D.Collision.Shapes, 0, 3, 2:Box2D.Collision.Shapes, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Common, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:http://www.box2d.org/ns/b2internal, 1:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2Shape}::*
                        {
                            let simple = local12;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[9], local12);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[3], true, false);
                            _e || console.warn('[m_ComputeSubmergedArea] Coerce Type not found:', "b2Vec2")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local22 = stack0;
                    case 673:
                        stack0 = 0.5;
//                        stack1 = local21;// JIT: redundant assigment, value unused
                        // 7 0::x
                        //Possible type:7 0::int
                        if (!(local21 != undefined && local21[AX_CLASS_SYMBOL])) {
                            stack1 = local21['x'];
                        } else {
                            temp = local21[AX_CLASS_SYMBOL] ? local21 : sec.box(local21);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[16]);
                            }
                        }
//                        stack2 = local17;// JIT: redundant assigment, value unused
                        // 7 0::x
                        if (!(local17 != undefined && local17[AX_CLASS_SYMBOL])) {
                            stack2 = local17['x'];
                        } else {
                            temp = local17[AX_CLASS_SYMBOL] ? local17 : sec.box(local17);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[16]);
                            }
                        }
                        stack1 -= stack2;
//                        stack2 = local22;// JIT: redundant assigment, value unused
                        // 7 0::y
                        if (!(local22 != undefined && local22[AX_CLASS_SYMBOL])) {
                            stack2 = local22['y'];
                        } else {
                            temp = local22[AX_CLASS_SYMBOL] ? local22 : sec.box(local22);
                            stack2 = temp.$Bgy;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[17]);
                            }
                        }
//                        stack3 = local17;// JIT: redundant assigment, value unused
                        // 7 0::y
                        if (!(local17 != undefined && local17[AX_CLASS_SYMBOL])) {
                            stack3 = local17['y'];
                        } else {
                            temp = local17[AX_CLASS_SYMBOL] ? local17 : sec.box(local17);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[17]);
                            }
                        }
                        stack2 -= stack3;
                        stack1 *= stack2;
//                        stack2 = local21;// JIT: redundant assigment, value unused
                        // 7 0::y
                        if (!(local21 != undefined && local21[AX_CLASS_SYMBOL])) {
                            stack2 = local21['y'];
                        } else {
                            temp = local21[AX_CLASS_SYMBOL] ? local21 : sec.box(local21);
                            stack2 = temp.$Bgy;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[17]);
                            }
                        }
//                        stack3 = local17;// JIT: redundant assigment, value unused
                        // 7 0::y
                        if (!(local17 != undefined && local17[AX_CLASS_SYMBOL])) {
                            stack3 = local17['y'];
                        } else {
                            temp = local17[AX_CLASS_SYMBOL] ? local17 : sec.box(local17);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[17]);
                            }
                        }
                        stack2 -= stack3;
//                        stack3 = local22;// JIT: redundant assigment, value unused
                        // 7 0::x
                        if (!(local22 != undefined && local22[AX_CLASS_SYMBOL])) {
                            stack3 = local22['x'];
                        } else {
                            temp = local22[AX_CLASS_SYMBOL] ? local22 : sec.box(local22);
                            stack3 = temp.$Bgx;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[16]);
                            }
                        }
//                        stack4 = local17;// JIT: redundant assigment, value unused
                        // 7 0::x
                        //Possible type:29 0:__AS3__.vec::Vector<7 0:Box2D.Common.Math::b2Vec2>
                        if (!(local17 != undefined && local17[AX_CLASS_SYMBOL])) {
                            stack4 = local17['x'];
                        } else {
                            temp = local17[AX_CLASS_SYMBOL] ? local17 : sec.box(local17);
                            stack4 = temp.$Bgx;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[16]);
                            }
                        }
                        stack3 -= stack4;
                        stack2 *= stack3;
                        stack1 -= stack2;
                        stack0 *= stack1;
                        stack0 = +stack0;
                        local25 = stack0;
                        stack0 = local19;
//                        stack1 = local25;// JIT: redundant assigment, value unused
                        stack0 += local25;
                        stack0 = +stack0;
                        local19 = stack0;
//                        stack0 = local20;// JIT: redundant assigment, value unused
//                        stack1 = local20;// JIT: redundant assigment, value unused
                        // 7 0::x
                        if (!(local20 != undefined && local20[AX_CLASS_SYMBOL])) {
                            stack1 = local20['x'];
                        } else {
                            temp = local20[AX_CLASS_SYMBOL] ? local20 : sec.box(local20);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[16]);
                            }
                        }
                        stack2 = local25;
//                        stack3 = local17;// JIT: redundant assigment, value unused
                        // 7 0::x
                        if (!(local17 != undefined && local17[AX_CLASS_SYMBOL])) {
                            stack3 = local17['x'];
                        } else {
                            temp = local17[AX_CLASS_SYMBOL] ? local17 : sec.box(local17);
                            stack3 = temp.$Bgx;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[16]);
                            }
                        }
//                        stack4 = local21;// JIT: redundant assigment, value unused
                        // 7 0::x
                        if (!(local21 != undefined && local21[AX_CLASS_SYMBOL])) {
                            stack4 = local21['x'];
                        } else {
                            temp = local21[AX_CLASS_SYMBOL] ? local21 : sec.box(local21);
                            stack4 = temp.$Bgx;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[16]);
                            }
                        }
                        stack3 += stack4;
//                        stack4 = local22;// JIT: redundant assigment, value unused
                        // 7 0::x
                        if (!(local22 != undefined && local22[AX_CLASS_SYMBOL])) {
                            stack4 = local22['x'];
                        } else {
                            temp = local22[AX_CLASS_SYMBOL] ? local22 : sec.box(local22);
                            stack4 = temp.$Bgx;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[16]);
                            }
                        }
                        stack3 += stack4;
                        stack2 *= stack3;
//                        stack3 = 3;// JIT: redundant assigment, value unused
                        stack2 /= 3;
                        stack1 += stack2;
                        // 7 0::x
                        if (!(local20 != undefined && local20[AX_CLASS_SYMBOL])){
                            local20.x = stack1;
                        } else {
                            context.setproperty($names[16], stack1, local20);
                        }
//                        stack0 = local20;// JIT: redundant assigment, value unused
//                        stack1 = local20;// JIT: redundant assigment, value unused
                        // 7 0::y
                        if (!(local20 != undefined && local20[AX_CLASS_SYMBOL])) {
                            stack1 = local20['y'];
                        } else {
                            temp = local20[AX_CLASS_SYMBOL] ? local20 : sec.box(local20);
                            stack1 = temp.$Bgy;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[17]);
                            }
                        }
                        stack2 = local25;
//                        stack3 = local17;// JIT: redundant assigment, value unused
                        // 7 0::y
                        //Possible type:undefined
                        if (!(local17 != undefined && local17[AX_CLASS_SYMBOL])) {
                            stack3 = local17['y'];
                        } else {
                            temp = local17[AX_CLASS_SYMBOL] ? local17 : sec.box(local17);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[17]);
                            }
                        }
//                        stack4 = local21;// JIT: redundant assigment, value unused
                        // 7 0::y
                        if (!(local21 != undefined && local21[AX_CLASS_SYMBOL])) {
                            stack4 = local21['y'];
                        } else {
                            temp = local21[AX_CLASS_SYMBOL] ? local21 : sec.box(local21);
                            stack4 = temp.$Bgy;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[17]);
                            }
                        }
                        stack3 += stack4;
//                        stack4 = local22;// JIT: redundant assigment, value unused
                        // 7 0::y
                        if (!(local22 != undefined && local22[AX_CLASS_SYMBOL])) {
                            stack4 = local22['y'];
                        } else {
                            temp = local22[AX_CLASS_SYMBOL] ? local22 : sec.box(local22);
                            stack4 = temp.$Bgy;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[17]);
                            }
                        }
                        stack3 += stack4;
                        stack2 *= stack3;
//                        stack3 = 3;// JIT: redundant assigment, value unused
                        stack2 /= 3;
                        stack1 += stack2;
                        // 7 0::y
                        if (!(local20 != undefined && local20[AX_CLASS_SYMBOL])){
                            local20.y = stack1;
                        } else {
                            context.setproperty($names[17], stack1, local20);
                        }
                        stack0 = local22;
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[3], true, false);
                            _e || console.warn('[m_ComputeSubmergedArea] Coerce Type not found:', "b2Vec2")
                            stack0 = _e ? _e.axCoerce(local22) : local22;
                        }
                        local21 = stack0;
                    case 808:
                        stack0 = local12;
                        stack1 = local14;
                        if (local14 != local12) { p = 629; continue; };
//                        stack0 = local20;// JIT: redundant assigment, value unused
                        stack1 = 1;
//                        stack2 = local19;// JIT: redundant assigment, value unused
                        stack1 /= local19;
                        if (!(_a = typeof local20, ((_a !== 'object' && _a !== 'function' ) || local20 == null || local20[AX_CLASS_SYMBOL]))) {
                            local20.Multiply(stack1);
                        } else {
                            // 7 0::Multiply
                            {
                                let t = local20;
                                const m = t.$BgMultiply || (t = sec.box(local20), t.$BgMultiply);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   local20.axCallProperty($names[18], [stack1], false);
                                }
                            }
                        }
//                        // JIT: potential type:7 0:Box2D.Common.Math::b2Vec2// JIT: redundant assigment, value unused
                        stack0 = local4;
                        // 7 0:Box2D.Common.Math::b2Math
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack1 = temp.$Bgb2Math;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[0]);
                        }
//                        // JIT: potential type:7 0:Box2D.Common.Math::b2Transform// JIT: redundant assigment, value unused
                        stack2 = local3;
//                        stack3 = local20;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL]))) {
                           stack1 = stack1.MulX(local3, local20);
                        } else {
                            // 7 0::MulX
                            {
                                let t = stack1;
                                const m = t.$BgMulX || (t = sec.box(stack1), t.$BgMulX);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$BgMulX (local3, local20);
                                } else { 
                                    stack1 = stack1.axCallProperty($names[13], [local3, local20], false);
                                }
                            }
                        }
                        if (!(_a = typeof local4, ((_a !== 'object' && _a !== 'function' ) || local4 == null || local4[AX_CLASS_SYMBOL]))) {
                            local4.SetV(stack1);
                        } else {
                            // 7 0::SetV
                            {
                                let t = local4;
                                const m = t.$BgSetV || (t = sec.box(local4), t.$BgSetV);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   local4.axCallProperty($names[14], [stack1], false);
                                }
                            }
                        }
                        stack0 = local19;
                        return (+local19);
                    }
                }
            }
//# sourceURL=http://jit/Box2D/Collision/Shapes/b2PolygonShape/m_ComputeSubmergedArea.js
})