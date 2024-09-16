(function anonymous(context
) {
/*
	Index: 1414
	Path:  Box2D/Collision/Shapes/b2PolygonShape::m_Set
	Type:  Public
	Kind:  Method
	Super: Box2D/Collision/Shapes/b2Shape
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_Set(local1 /* b2Shape */) {
        // Possible use a real "this"
        // local2 is assigned before read, skip init
        let local2 = undefined
        // local3 is assigned before read, skip init
        let local3 = undefined
        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
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
                        local2 = null;
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local3 = 0;
                        stack0 = this;
//                        // JIT: potential type:7 0:Box2D.Collision.Shapes::b2Shape// JIT: redundant assigment, value unused
                        stack1 = local1;
                        sec.box(this).axCallSuper($names[0], context.savedScope, [local1]);
                        // JIT: potential type:7 0:Box2D.Collision.Shapes::b2Shape
                        stack0 = local1;
                        // 7 0:Box2D.Collision.Shapes::b2PolygonShape
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack1 = temp.$Bgb2PolygonShape;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[1]);
                        }
                        stack0 = stack1.axIsType(local1);
                        //JIT: Emit inline return
                        if (!stack0) { return; }
                        // JIT: potential type:7 0:Box2D.Collision.Shapes::b2Shape
                        stack0 = local1;
                        // 7 0:Box2D.Collision.Shapes::b2PolygonShape
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack1 = temp.$Bgb2PolygonShape;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[1]);
                        }
                        stack0 = (_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL])) ? stack1.axAsType(local1) : local1;
                        //JIT: SKIP DOUBLED COERCE AFTER ASTYPELATE
                        local2 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_centroid
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        stack0 = this.$Bgm_centroid;
//                        stack1 = local2;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_centroid
                        //Possible type:7 0:Box2D.Collision.Shapes::b2PolygonShape
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
                            stack1 = local2['m_centroid'];
                        } else {
                            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
                            stack1 = temp.$Bgm_centroid;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[2]);
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
                                   stack0.axCallProperty($names[3], [stack1], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = local2;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_vertexCount
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
                            stack1 = local2['m_vertexCount'];
                        } else {
                            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
                            stack1 = temp.$Bgm_vertexCount;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[4]);
                            }
                        }
                        // 7 0:http://www.box2d.org/ns/b2internal::m_vertexCount
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
                        this.$Bgm_vertexCount = (stack1|0);
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_vertexCount
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack1 = this.$Bgm_vertexCount;
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgReserve(stack1);
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local3 = 0;
                        { p = 109; continue; };
                    case 66:
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
                                    const rm = context.runtimename($names[5], local3);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
//                        stack1 = local2;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_vertices
                        //Possible type:7 0::int
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
                            stack1 = local2['m_vertices'];
                        } else {
                            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
                            stack1 = temp.$Bgm_vertices;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[6]);
                            }
                        }
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
                                    const rm = context.runtimename($names[5], local3);
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
                                   stack0.axCallProperty($names[3], [stack1], false);
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
                                    const rm = context.runtimename($names[5], local3);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
//                        stack1 = local2;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_normals
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
                            stack1 = local2['m_normals'];
                        } else {
                            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
                            stack1 = temp.$Bgm_normals;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[7]);
                            }
                        }
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
                                    const rm = context.runtimename($names[5], local3);
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
                                   stack0.axCallProperty($names[3], [stack1], false);
                                }
                            }
                        }
                        local3 = (local3 | 0) + 1;
                    case 109:
                        stack0 = local3;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_vertexCount
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack1 = this.$Bgm_vertexCount;
                        if (stack1 > local3) { p = 66; continue; };
                    case 118:
                        return;
                    }
                }
            }
//# sourceURL=http://jit/Box2D/Collision/Shapes/b2PolygonShape/m_Set.js
})