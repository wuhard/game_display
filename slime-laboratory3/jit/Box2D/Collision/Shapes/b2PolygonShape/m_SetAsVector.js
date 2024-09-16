(function anonymous(context
) {
/*
	Index: 1416
	Path:  Box2D/Collision/Shapes/b2PolygonShape::m_SetAsVector
	Type:  Public
	Kind:  Method
	Super: Box2D/Collision/Shapes/b2Shape
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_SetAsVector(local1 /* Vector */, local2 /* Number */ = 0) {
        // Possible use a real "this"
        /* Force Number coerce */
        local2 = (+local2);
        // local3 is assigned before read, skip init
        let local3 = undefined
        // local4 is assigned before read, skip init
        let local4 = undefined
        // local5 is assigned before read, skip init
        let local5 = undefined
        // local6 is assigned before read, skip init
        let local6 = undefined
        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
        let stack3 = undefined;
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
                        local3 = 0;
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local4 = 0;
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local5 = 0;
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local6 = null;
                        // JIT: potential type:7 0::Number
                        stack0 = local2;
                        stack1 = 0;
                        if (0 != local2) { p = 31; continue; };
//                        // JIT: potential type:29 0:__AS3__.vec::Vector<7 0:Box2D.Common.Math::b2Vec2>// JIT: redundant assigment, value unused
                        stack0 = local1;
                        // 7 0::length
                        //Possible type:undefined
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack0 = local1['length'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack0 = temp.$Bglength;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[0]);
                            }
                        }
                        stack0 = +stack0;
                        local2 = stack0;
                    case 31:
                        // 7 0:Box2D.Common::b2Settings
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack0 = temp.$Bgb2Settings;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[1]);
                        }
                        stack1 = 2;
                        // JIT: potential type:7 0::Number
                        stack2 = local2;
                        stack1 = 2 <= local2;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.b2Assert(stack1);
                        } else {
                            // 7 0::b2Assert
                            {
                                let t = stack0;
                                const m = t.$Bgb2Assert || (t = sec.box(stack0), t.$Bgb2Assert);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[2], [stack1], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack1 = local2;
                        // 7 0:http://www.box2d.org/ns/b2internal::m_vertexCount
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
                        this.$Bgm_vertexCount = (local2|0);
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack1 = local2;
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgReserve(local2);
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local3 = 0;
                        { p = 80; continue; };
                    case 60:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_vertices
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 29 0:__AS3__.vec::Vector<7 0:Box2D.Common.Math::b2Vec2>  */ 
                        stack0 = this.$Bgm_vertices;
                        stack1 = local3;
                        // 27 {3, 0:Box2D.Common.Math, 0:Box2D.Collision.Shapes, 0, 3, 2:Box2D.Collision.Shapes, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Common, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:http://www.box2d.org/ns/b2internal, 1:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2Shape}::*
                        {
                            let simple = local3;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[3], local3);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // JIT: potential type:29 0:__AS3__.vec::Vector<7 0:Box2D.Common.Math::b2Vec2>
                        stack1 = local1;
                        stack2 = local3;
                        // 27 {3, 0:Box2D.Common.Math, 0:Box2D.Collision.Shapes, 0, 3, 2:Box2D.Collision.Shapes, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Common, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:http://www.box2d.org/ns/b2internal, 1:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2Shape}::*
                        {
                            let simple = local3;
                            const b_obj = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);

                            if (typeof simple === "number") {
                                stack1 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack1 = b_obj['$Bg' + simple];
                                if (stack1 === undefined || typeof stack1 === 'function') {
                                    const rm = context.runtimename($names[3], local3);
                                    stack1 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.SetV(stack1);
                        } else {
                            // 7 0::SetV
                            {
                                let t = stack0;
                                const m = t.$BgSetV || (t = sec.box(stack0), t.$BgSetV);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[4], [stack1], false);
                                }
                            }
                        }
                        local3 = (local3 | 0) + 1;
                    case 80:
                        stack0 = local3;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_vertexCount
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack1 = this.$Bgm_vertexCount;
                        if (stack1 > local3) { p = 60; continue; };
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local3 = 0;
                        { p = 213; continue; };
                    case 96:
                        stack0 = local3;
                        stack0 |= 0;
                        local4 = stack0;
                        stack0 = local3;
//                        stack1 = 1;// JIT: redundant assigment, value unused
                        stack0 += 1;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_vertexCount
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack1 = this.$Bgm_vertexCount;
                        stack0 = stack0 < stack1;
                        if (!stack0) { p = 123; continue; };
                        stack0 = local3;
//                        stack1 = 1;// JIT: redundant assigment, value unused
                        stack0 += 1;
                        stack0 |= 0;
                        { p = 125; continue; };
                    case 123:
                        stack0 = 0;
                    case 125:
                        stack0 |= 0;
                        local5 = stack0;
                        // 7 0:Box2D.Common.Math::b2Math
                        temp = scope0.findScopeProperty($names[5], true, false);
                        stack0 = temp.$Bgb2Math;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[5]);
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_vertices
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 29 0:__AS3__.vec::Vector<7 0:Box2D.Common.Math::b2Vec2>  */ 
                        stack1 = this.$Bgm_vertices;
                        stack2 = local5;
                        // 27 {3, 0:Box2D.Common.Math, 0:Box2D.Collision.Shapes, 0, 3, 2:Box2D.Collision.Shapes, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Common, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:http://www.box2d.org/ns/b2internal, 1:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2Shape}::*
                        {
                            let simple = local5;
                            const b_obj = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);

                            if (typeof simple === "number") {
                                stack1 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack1 = b_obj['$Bg' + simple];
                                if (stack1 === undefined || typeof stack1 === 'function') {
                                    const rm = context.runtimename($names[3], local5);
                                    stack1 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_vertices
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 29 0:__AS3__.vec::Vector<7 0:Box2D.Common.Math::b2Vec2>  */ 
                        stack2 = this.$Bgm_vertices;
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
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.SubtractVV(stack1, stack2);
                        } else {
                            // 7 0::SubtractVV
                            {
                                let t = stack0;
                                const m = t.$BgSubtractVV || (t = sec.box(stack0), t.$BgSubtractVV);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgSubtractVV (stack1, stack2);
                                } else { 
                                    stack0 = stack0.axCallProperty($names[6], [stack1, stack2], false);
                                }
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[7], true, false);
                            _e || console.warn('[m_SetAsVector] Coerce Type not found:', "b2Vec2")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local6 = stack0;
                        // 7 0:Box2D.Common::b2Settings
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack0 = temp.$Bgb2Settings;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[1]);
                        }
//                        stack1 = local6;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local6, ((_a !== 'object' && _a !== 'function' ) || local6 == null || local6[AX_CLASS_SYMBOL]))) {
                           stack1 = local6.LengthSquared();
                        } else {
                            // 7 0::LengthSquared
                            {
                                let t = local6;
                                const m = t.$BgLengthSquared || (t = sec.box(local6), t.$BgLengthSquared);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$BgLengthSquared ();
                                } else { 
                                    stack1 = local6.axCallProperty($names[8], [], false);
                                }
                            }
                        }
                        // 7 0::Number
                        temp = scope0.findScopeProperty($names[9], true, false);
                        stack2 = temp.$BgNumber;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[9]);
                        }
                        // 7 0::MIN_VALUE
                        //Possible type:7 0::Number
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['MIN_VALUE'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$BgMIN_VALUE;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[10]);
                            }
                        }
                        stack1 = stack1 > stack2;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.b2Assert(stack1);
                        } else {
                            // 7 0::b2Assert
                            {
                                let t = stack0;
                                const m = t.$Bgb2Assert || (t = sec.box(stack0), t.$Bgb2Assert);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[2], [stack1], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_normals
                        //Possible type:7 0:Box2D.Common::b2Settings
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 29 0:__AS3__.vec::Vector<7 0:Box2D.Common.Math::b2Vec2>  */ 
                        stack0 = this.$Bgm_normals;
                        stack1 = local3;
                        // 27 {3, 0:Box2D.Common.Math, 0:Box2D.Collision.Shapes, 0, 3, 2:Box2D.Collision.Shapes, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Common, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:http://www.box2d.org/ns/b2internal, 1:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2Shape}::*
                        {
                            let simple = local3;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[3], local3);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 7 0:Box2D.Common.Math::b2Math
                        temp = scope0.findScopeProperty($names[5], true, false);
                        stack1 = temp.$Bgb2Math;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[5]);
                        }
//                        stack2 = local6;// JIT: redundant assigment, value unused
//                        stack3 = 1;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL]))) {
                           stack1 = stack1.CrossVF(local6, 1);
                        } else {
                            // 7 0::CrossVF
                            {
                                let t = stack1;
                                const m = t.$BgCrossVF || (t = sec.box(stack1), t.$BgCrossVF);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$BgCrossVF (local6, 1);
                                } else { 
                                    stack1 = stack1.axCallProperty($names[11], [local6, 1], false);
                                }
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.SetV(stack1);
                        } else {
                            // 7 0::SetV
                            {
                                let t = stack0;
                                const m = t.$BgSetV || (t = sec.box(stack0), t.$BgSetV);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[4], [stack1], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_normals
                        //Possible type:29 0:__AS3__.vec::Vector<7 0:Box2D.Common.Math::b2Vec2>
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 29 0:__AS3__.vec::Vector<7 0:Box2D.Common.Math::b2Vec2>  */ 
                        stack0 = this.$Bgm_normals;
                        stack1 = local3;
                        // 27 {3, 0:Box2D.Common.Math, 0:Box2D.Collision.Shapes, 0, 3, 2:Box2D.Collision.Shapes, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Common, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:http://www.box2d.org/ns/b2internal, 1:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2Shape}::*
                        {
                            let simple = local3;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[3], local3);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.Normalize();
                        } else {
                            // 7 0::Normalize
                            {
                                let t = stack0;
                                const m = t.$BgNormalize || (t = sec.box(stack0), t.$BgNormalize);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[12], [], false);
                                }
                            }
                        }
                        local3 = (local3 | 0) + 1;
                    case 213:
                        stack0 = local3;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_vertexCount
                        //Possible type:7 0:Box2D.Common.Math::b2Math
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack1 = this.$Bgm_vertexCount;
                        if (stack1 > local3) { p = 96; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::ComputeCentroid
                        stack1 = scope0.findScopeProperty($names[13], true, false);
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_vertices
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 29 0:__AS3__.vec::Vector<7 0:Box2D.Common.Math::b2Vec2>  */ 
                        stack2 = this.$Bgm_vertices;
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_vertexCount
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack3 = this.$Bgm_vertexCount;
                        if (!(_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL]))) {
                           stack1 = stack1.ComputeCentroid(stack2, stack3);
                        } else {
                            // 7 0::ComputeCentroid
                            {
                                let t = stack1;
                                const m = t.$BgComputeCentroid || (t = sec.box(stack1), t.$BgComputeCentroid);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$BgComputeCentroid (stack2, stack3);
                                } else { 
                                    stack1 = stack1.axCallProperty($names[13], [stack2, stack3], false);
                                }
                            }
                        }
                        // 7 0:http://www.box2d.org/ns/b2internal::m_centroid
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        this.$Bgm_centroid = stack1;
                        return;
                    }
                }
            }
//# sourceURL=http://jit/Box2D/Collision/Shapes/b2PolygonShape/m_SetAsVector.js
})