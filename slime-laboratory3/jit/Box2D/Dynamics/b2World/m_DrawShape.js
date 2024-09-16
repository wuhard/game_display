(function anonymous(context
) {
/*
	Index: 150
	Path:  Box2D/Dynamics/b2World::m_DrawShape
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_DrawShape(local1 /* b2Shape */, local2 /* b2Transform */, local3 /* b2Color */) {
        // Possible use a real "this"
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
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local4 = null;
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local5 = null;
//                        stack0 = NaN;// JIT: redundant assigment, value unused
                        local6 = NaN;
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local7 = null;
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local8 = 0;
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local9 = null;
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local10 = 0;
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local11 = null;
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local12 = null;
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local13 = null;
                        { p = 271; continue; };
                    case 52:
                        // JIT: potential type:7 0:Box2D.Collision.Shapes::b2Shape
                        stack0 = local1;
                        // 7 0:Box2D.Collision.Shapes::b2CircleShape
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack1 = temp.$Bgb2CircleShape;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[0]);
                        }
                        stack0 = (_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL])) ? stack1.axAsType(local1) : local1;
                        //JIT: SKIP DOUBLED COERCE AFTER ASTYPELATE
                        local4 = stack0;
                        // 7 0:Box2D.Common.Math::b2Math
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack0 = temp.$Bgb2Math;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[1]);
                        }
//                        // JIT: potential type:7 0:Box2D.Common.Math::b2Transform// JIT: redundant assigment, value unused
                        stack1 = local2;
//                        stack2 = local4;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_p
                        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])) {
                            stack2 = local4['m_p'];
                        } else {
                            temp = local4[AX_CLASS_SYMBOL] ? local4 : sec.box(local4);
                            stack2 = temp.$Bgm_p;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[2]);
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.MulX(local2, stack2);
                        } else {
                            // 7 0::MulX
                            {
                                let t = stack0;
                                const m = t.$BgMulX || (t = sec.box(stack0), t.$BgMulX);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgMulX (local2, stack2);
                                } else { 
                                    stack0 = stack0.axCallProperty($names[3], [local2, stack2], false);
                                }
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[4], true, false);
                            _e || console.warn('[m_DrawShape] Coerce Type not found:', "b2Vec2")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local5 = stack0;
//                        stack0 = local4;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_radius
                        //Possible type:7 0:Box2D.Common.Math::b2Math
                        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])) {
                            stack0 = local4['m_radius'];
                        } else {
                            temp = local4[AX_CLASS_SYMBOL] ? local4 : sec.box(local4);
                            stack0 = temp.$Bgm_radius;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[5]);
                            }
                        }
                        stack0 = +stack0;
                        local6 = stack0;
//                        // JIT: potential type:7 0:Box2D.Common.Math::b2Transform// JIT: redundant assigment, value unused
                        stack0 = local2;
                        // 7 0::R
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
                            stack0 = local2['R'];
                        } else {
                            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
                            stack0 = temp.$BgR;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[6]);
                            }
                        }
                        // 7 0::col1
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['col1'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgcol1;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[7]);
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[4], true, false);
                            _e || console.warn('[m_DrawShape] Coerce Type not found:', "b2Vec2")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local7 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::m_debugDraw
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2DebugDraw  */ 
                        stack0 = this.$Bgm_debugDraw;
//                        stack1 = local5;// JIT: redundant assigment, value unused
//                        stack2 = local6;// JIT: redundant assigment, value unused
//                        stack3 = local7;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:Box2D.Common::b2Color// JIT: redundant assigment, value unused
                        stack4 = local3;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.DrawSolidCircle(local5, local6, local7, local3);
                        } else {
                            // 7 0::DrawSolidCircle
                            {
                                let t = stack0;
                                const m = t.$BgDrawSolidCircle || (t = sec.box(stack0), t.$BgDrawSolidCircle);
                                if( typeof m === "function" ) { 
                                    m.call(t, local5, local6, local7, local3);
                                } else { 
                                   stack0.axCallProperty($names[8], [local5, local6, local7, local3], false);
                                }
                            }
                        }
                        //JIT: Emit inline return
                        return;
                    case 116:
                        // JIT: potential type:7 0:Box2D.Collision.Shapes::b2Shape
                        stack0 = local1;
                        // 7 0:Box2D.Collision.Shapes::b2PolygonShape
                        temp = scope0.findScopeProperty($names[9], true, false);
                        stack1 = temp.$Bgb2PolygonShape;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[9]);
                        }
                        stack0 = (_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL])) ? stack1.axAsType(local1) : local1;
                        //JIT: SKIP DOUBLED COERCE AFTER ASTYPELATE
                        stack1 = stack0;
                        local9 = stack1;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.GetVertexCount();
                        } else {
                            // 7 0::GetVertexCount
                            {
                                let t = stack0;
                                const m = t.$BgGetVertexCount || (t = sec.box(stack0), t.$BgGetVertexCount);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetVertexCount ();
                                } else { 
                                    stack0 = stack0.axCallProperty($names[10], [], false);
                                }
                            }
                        }
                        stack0 |= 0;
                        local10 = stack0;
//                        stack0 = local9;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local9, ((_a !== 'object' && _a !== 'function' ) || local9 == null || local9[AX_CLASS_SYMBOL]))) {
                           stack0 = local9.GetVertices();
                        } else {
                            // 7 0::GetVertices
                            {
                                let t = local9;
                                const m = t.$BgGetVertices || (t = sec.box(local9), t.$BgGetVertices);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetVertices ();
                                } else { 
                                    stack0 = local9.axCallProperty($names[11], [], false);
                                }
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[12], true, false);
                            _e || console.warn('[m_DrawShape] Coerce Type not found:', "Vector")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local11 = stack0;
                        // 9 {3, 0:Box2D.Dynamics, 0:Box2D.Common.Math, 3, 0, 2:Box2D.Dynamics, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Common, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Contacts, 0:Box2D.Dynamics.Joints, 0:http://www.box2d.org/ns/b2internal, 1:Box2D.Dynamics:b2World, 5:Box2D.Dynamics:b2World, 0:__AS3__.vec}::Vector
                        temp = scope0.findScopeProperty($names[13], true, false);
                        stack0 = temp.$BgVector;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[13]);
                        }
                        // 7 0:Box2D.Common.Math::b2Vec2
                        temp = scope0.findScopeProperty($names[4], true, false);
                        stack1 = temp.$Bgb2Vec2;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[4]);
                        }
                        stack0 = sec.applyType(stack0, [stack1]);
//                        stack1 = local10;// JIT: redundant assigment, value unused
                        //JIT: Possible source:9 {3, 0:Box2D.Dynamics, 0:Box2D.Common.Math, 3, 0, 2:Box2D.Dynamics, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Common, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Contacts, 0:Box2D.Dynamics.Joints, 0:http://www.box2d.org/ns/b2internal, 1:Box2D.Dynamics:b2World, 5:Box2D.Dynamics:b2World, 0:__AS3__.vec}::Vector
                        stack0 = context.construct(stack0, [local10]);
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[12], true, false);
                            _e || console.warn('[m_DrawShape] Coerce Type not found:', "Vector")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local12 = stack0;
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local8 = 0;
                        { p = 191; continue; };
                    case 166:
                        stack0 = local12;
                        stack1 = local8;
                        // 7 0:Box2D.Common.Math::b2Math
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack2 = temp.$Bgb2Math;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[1]);
                        }
//                        // JIT: potential type:7 0:Box2D.Common.Math::b2Transform// JIT: redundant assigment, value unused
                        stack3 = local2;
                        stack4 = local11;
                        stack5 = local8;
                        // 27 {3, 0:Box2D.Dynamics, 0:Box2D.Common.Math, 3, 0, 2:Box2D.Dynamics, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Common, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Contacts, 0:Box2D.Dynamics.Joints, 0:http://www.box2d.org/ns/b2internal, 1:Box2D.Dynamics:b2World, 5:Box2D.Dynamics:b2World}::*
                        {
                            let simple = local8;
                            const b_obj = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);

                            if (typeof simple === "number") {
                                stack4 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack4 = b_obj['$Bg' + simple];
                                if (stack4 === undefined || typeof stack4 === 'function') {
                                    const rm = context.runtimename($names[14], local8);
                                    stack4 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        if (!(_a = typeof stack2, ((_a !== 'object' && _a !== 'function' ) || stack2 == null || stack2[AX_CLASS_SYMBOL]))) {
                           stack2 = stack2.MulX(local2, stack4);
                        } else {
                            // 7 0::MulX
                            {
                                let t = stack2;
                                const m = t.$BgMulX || (t = sec.box(stack2), t.$BgMulX);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BgMulX (local2, stack4);
                                } else { 
                                    stack2 = stack2.axCallProperty($names[3], [local2, stack4], false);
                                }
                            }
                        }
                        context.setproperty(context.runtimename($names[14], local8), stack2, local12);
                        local8 = (local8 | 0) + 1;
                    case 191:
                        stack0 = local8;
                        stack1 = local10;
                        if (local10 > local8) { p = 166; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::m_debugDraw
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2DebugDraw  */ 
                        stack0 = this.$Bgm_debugDraw;
//                        stack1 = local12;// JIT: redundant assigment, value unused
//                        stack2 = local10;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:Box2D.Common::b2Color// JIT: redundant assigment, value unused
                        stack3 = local3;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.DrawSolidPolygon(local12, local10, local3);
                        } else {
                            // 7 0::DrawSolidPolygon
                            {
                                let t = stack0;
                                const m = t.$BgDrawSolidPolygon || (t = sec.box(stack0), t.$BgDrawSolidPolygon);
                                if( typeof m === "function" ) { 
                                    m.call(t, local12, local10, local3);
                                } else { 
                                   stack0.axCallProperty($names[15], [local12, local10, local3], false);
                                }
                            }
                        }
                        //JIT: Emit inline return
                        return;
                    case 216:
                        // JIT: potential type:7 0:Box2D.Collision.Shapes::b2Shape
                        stack0 = local1;
                        // 7 0:Box2D.Collision.Shapes::b2EdgeShape
                        temp = scope0.findScopeProperty($names[16], true, false);
                        stack1 = temp.$Bgb2EdgeShape;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[16]);
                        }
                        stack0 = (_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL])) ? stack1.axAsType(local1) : local1;
                        //JIT: SKIP DOUBLED COERCE AFTER ASTYPELATE
                        local13 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::m_debugDraw
                        //Possible type:7 0:Box2D.Dynamics::b2DebugDraw
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2DebugDraw  */ 
                        stack0 = this.$Bgm_debugDraw;
                        // 7 0:Box2D.Common.Math::b2Math
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack1 = temp.$Bgb2Math;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[1]);
                        }
//                        // JIT: potential type:7 0:Box2D.Common.Math::b2Transform// JIT: redundant assigment, value unused
                        stack2 = local2;
//                        stack3 = local13;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local13, ((_a !== 'object' && _a !== 'function' ) || local13 == null || local13[AX_CLASS_SYMBOL]))) {
                           stack3 = local13.GetVertex1();
                        } else {
                            // 7 0::GetVertex1
                            {
                                let t = local13;
                                const m = t.$BgGetVertex1 || (t = sec.box(local13), t.$BgGetVertex1);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$BgGetVertex1 ();
                                } else { 
                                    stack3 = local13.axCallProperty($names[17], [], false);
                                }
                            }
                        }
                        if (!(_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL]))) {
                           stack1 = stack1.MulX(local2, stack3);
                        } else {
                            // 7 0::MulX
                            {
                                let t = stack1;
                                const m = t.$BgMulX || (t = sec.box(stack1), t.$BgMulX);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$BgMulX (local2, stack3);
                                } else { 
                                    stack1 = stack1.axCallProperty($names[3], [local2, stack3], false);
                                }
                            }
                        }
                        // 7 0:Box2D.Common.Math::b2Math
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack2 = temp.$Bgb2Math;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[1]);
                        }
//                        // JIT: potential type:7 0:Box2D.Common.Math::b2Transform// JIT: redundant assigment, value unused
                        stack3 = local2;
//                        stack4 = local13;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local13, ((_a !== 'object' && _a !== 'function' ) || local13 == null || local13[AX_CLASS_SYMBOL]))) {
                           stack4 = local13.GetVertex2();
                        } else {
                            // 7 0::GetVertex2
                            {
                                let t = local13;
                                const m = t.$BgGetVertex2 || (t = sec.box(local13), t.$BgGetVertex2);
                                if( typeof m === "function" ) { 
                                    stack4 = t.$BgGetVertex2 ();
                                } else { 
                                    stack4 = local13.axCallProperty($names[18], [], false);
                                }
                            }
                        }
                        if (!(_a = typeof stack2, ((_a !== 'object' && _a !== 'function' ) || stack2 == null || stack2[AX_CLASS_SYMBOL]))) {
                           stack2 = stack2.MulX(local2, stack4);
                        } else {
                            // 7 0::MulX
                            {
                                let t = stack2;
                                const m = t.$BgMulX || (t = sec.box(stack2), t.$BgMulX);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BgMulX (local2, stack4);
                                } else { 
                                    stack2 = stack2.axCallProperty($names[3], [local2, stack4], false);
                                }
                            }
                        }
//                        // JIT: potential type:7 0:Box2D.Common::b2Color// JIT: redundant assigment, value unused
                        stack3 = local3;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.DrawSegment(stack1, stack2, local3);
                        } else {
                            // 7 0::DrawSegment
                            {
                                let t = stack0;
                                const m = t.$BgDrawSegment || (t = sec.box(stack0), t.$BgDrawSegment);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1, stack2, local3);
                                } else { 
                                   stack0.axCallProperty($names[19], [stack1, stack2, local3], false);
                                }
                            }
                        }
                        //JIT: Emit inline return
                        return;
                    case 266:
                        //JIT: Emit inline return
                        return;
                    case 271:
//                        // JIT: potential type:7 0:Box2D.Collision.Shapes::b2Shape// JIT: redundant assigment, value unused
                        stack0 = local1;
                        // 7 0:http://www.box2d.org/ns/b2internal::m_type
                        //Possible type:7 0:Box2D.Dynamics::b2DebugDraw
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack0 = local1['m_type'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack0 = temp.$Bgm_type;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[20]);
                            }
                        }
                        local14 = stack0;
                        // 7 0:Box2D.Collision.Shapes::b2Shape
                        temp = scope0.findScopeProperty($names[21], true, false);
                        stack0 = temp.$Bgb2Shape;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[21]);
                        }
                        // 7 0:http://www.box2d.org/ns/b2internal::e_circleShape
                        //Possible type:7 0:Box2D.Collision.Shapes::b2Shape
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['e_circleShape'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bge_circleShape;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[22]);
                            }
                        }
                        stack1 = local14;
                        if (local14 !== stack0) { p = 294; continue; };
                        stack0 = 0;
                        { p = 340; continue; };
                    case 294:
                        // 7 0:Box2D.Collision.Shapes::b2Shape
                        temp = scope0.findScopeProperty($names[21], true, false);
                        stack0 = temp.$Bgb2Shape;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[21]);
                        }
                        // 7 0:http://www.box2d.org/ns/b2internal::e_polygonShape
                        //Possible type:7 0:Box2D.Collision.Shapes::b2Shape
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['e_polygonShape'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bge_polygonShape;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[23]);
                            }
                        }
                        stack1 = local14;
                        if (local14 !== stack0) { p = 311; continue; };
                        stack0 = 1;
                        { p = 340; continue; };
                    case 311:
                        // 7 0:Box2D.Collision.Shapes::b2Shape
                        temp = scope0.findScopeProperty($names[21], true, false);
                        stack0 = temp.$Bgb2Shape;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[21]);
                        }
                        // 7 0:http://www.box2d.org/ns/b2internal::e_edgeShape
                        //Possible type:7 0:Box2D.Collision.Shapes::b2Shape
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['e_edgeShape'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bge_edgeShape;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[24]);
                            }
                        }
                        stack1 = local14;
                        if (local14 !== stack0) { p = 328; continue; };
                        stack0 = 2;
                        { p = 340; continue; };
                    case 328:
                        { p = 338; continue; };
                        // unreachable
                        // unreachable
                    case 338:
                        stack0 = 3;
                    case 340:
                        //IR: KILL removed, reason: prevent optimisation
                        if (stack0 >= 0 && stack0 < 4) { p = [52, 116, 216, 266][stack0]; continue; } else { p = 266; continue; };
                    case 359:
                        return;
                    }
                }
            }
//# sourceURL=http://jit/Box2D/Dynamics/b2World/m_DrawShape.js
})