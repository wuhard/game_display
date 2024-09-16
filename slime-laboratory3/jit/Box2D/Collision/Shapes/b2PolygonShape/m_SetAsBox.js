(function anonymous(context
) {
/*
	Index: 1417
	Path:  Box2D/Collision/Shapes/b2PolygonShape::m_SetAsBox
	Type:  Public
	Kind:  Method
	Super: Box2D/Collision/Shapes/b2Shape
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_SetAsBox(local1 /* Number */, local2 /* Number */) {
        // Possible use a real "this"
        /* Force Number coerce */
        local1 = (+local1);
        /* Force Number coerce */
        local2 = (+local2);

        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        //IR: PUSHSCOPE removed, reason: unused
        // unreachable
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = 4;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_vertexCount
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
        this.$Bgm_vertexCount = 4;
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = 4;// JIT: redundant assigment, value unused
        /* We sure that this safe call, represented in TRAIT as Method  */ 
        this.$BgReserve(4);
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_vertices
        /* We sure that this safe get, represented in TRAIT as Slot, type: 29 0:__AS3__.vec::Vector<7 0:Box2D.Common.Math::b2Vec2>  */ 
        stack0 = this.$Bgm_vertices;
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
                    const rm = context.runtimename($names[0], 0);
                    stack0 = b_obj.axGetProperty(rm);
                }
            }
        }
        // JIT: potential type:7 0::Number
        stack1 = local1;
        stack1 = -local1;
        // JIT: potential type:7 0::Number
        stack2 = local2;
        stack2 = -local2;
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
            stack0.Set(stack1, stack2);
        } else {
            // 7 0::Set
            {
                let t = stack0;
                const m = t.$BgSet || (t = sec.box(stack0), t.$BgSet);
                if( typeof m === "function" ) { 
                    m.call(t, stack1, stack2);
                } else { 
                   stack0.axCallProperty($names[1], [stack1, stack2], false);
                }
            }
        }
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_vertices
        //Possible type:29 0:__AS3__.vec::Vector<7 0:Box2D.Common.Math::b2Vec2>
        /* We sure that this safe get, represented in TRAIT as Slot, type: 29 0:__AS3__.vec::Vector<7 0:Box2D.Common.Math::b2Vec2>  */ 
        stack0 = this.$Bgm_vertices;
        stack1 = 1;
        // 27 {3, 0:Box2D.Common.Math, 0:Box2D.Collision.Shapes, 0, 3, 2:Box2D.Collision.Shapes, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Common, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:http://www.box2d.org/ns/b2internal, 1:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2Shape}::*
        {
            let simple = 1;
            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

            if (typeof simple === "number") {
                stack0 = b_obj.axGetNumericProperty(simple);
            } else {
                stack0 = b_obj['$Bg' + simple];
                if (stack0 === undefined || typeof stack0 === 'function') {
                    const rm = context.runtimename($names[0], 1);
                    stack0 = b_obj.axGetProperty(rm);
                }
            }
        }
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack1 = local1;
        // JIT: potential type:7 0::Number
        stack2 = local2;
        stack2 = -local2;
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
            stack0.Set(local1, stack2);
        } else {
            // 7 0::Set
            {
                let t = stack0;
                const m = t.$BgSet || (t = sec.box(stack0), t.$BgSet);
                if( typeof m === "function" ) { 
                    m.call(t, local1, stack2);
                } else { 
                   stack0.axCallProperty($names[1], [local1, stack2], false);
                }
            }
        }
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_vertices
        //Possible type:29 0:__AS3__.vec::Vector<7 0:Box2D.Common.Math::b2Vec2>
        /* We sure that this safe get, represented in TRAIT as Slot, type: 29 0:__AS3__.vec::Vector<7 0:Box2D.Common.Math::b2Vec2>  */ 
        stack0 = this.$Bgm_vertices;
        stack1 = 2;
        // 27 {3, 0:Box2D.Common.Math, 0:Box2D.Collision.Shapes, 0, 3, 2:Box2D.Collision.Shapes, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Common, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:http://www.box2d.org/ns/b2internal, 1:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2Shape}::*
        {
            let simple = 2;
            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

            if (typeof simple === "number") {
                stack0 = b_obj.axGetNumericProperty(simple);
            } else {
                stack0 = b_obj['$Bg' + simple];
                if (stack0 === undefined || typeof stack0 === 'function') {
                    const rm = context.runtimename($names[0], 2);
                    stack0 = b_obj.axGetProperty(rm);
                }
            }
        }
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack1 = local1;
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack2 = local2;
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
            stack0.Set(local1, local2);
        } else {
            // 7 0::Set
            {
                let t = stack0;
                const m = t.$BgSet || (t = sec.box(stack0), t.$BgSet);
                if( typeof m === "function" ) { 
                    m.call(t, local1, local2);
                } else { 
                   stack0.axCallProperty($names[1], [local1, local2], false);
                }
            }
        }
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_vertices
        //Possible type:29 0:__AS3__.vec::Vector<7 0:Box2D.Common.Math::b2Vec2>
        /* We sure that this safe get, represented in TRAIT as Slot, type: 29 0:__AS3__.vec::Vector<7 0:Box2D.Common.Math::b2Vec2>  */ 
        stack0 = this.$Bgm_vertices;
        stack1 = 3;
        // 27 {3, 0:Box2D.Common.Math, 0:Box2D.Collision.Shapes, 0, 3, 2:Box2D.Collision.Shapes, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Common, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:http://www.box2d.org/ns/b2internal, 1:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2Shape}::*
        {
            let simple = 3;
            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

            if (typeof simple === "number") {
                stack0 = b_obj.axGetNumericProperty(simple);
            } else {
                stack0 = b_obj['$Bg' + simple];
                if (stack0 === undefined || typeof stack0 === 'function') {
                    const rm = context.runtimename($names[0], 3);
                    stack0 = b_obj.axGetProperty(rm);
                }
            }
        }
        // JIT: potential type:7 0::Number
        stack1 = local1;
        stack1 = -local1;
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack2 = local2;
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
            stack0.Set(stack1, local2);
        } else {
            // 7 0::Set
            {
                let t = stack0;
                const m = t.$BgSet || (t = sec.box(stack0), t.$BgSet);
                if( typeof m === "function" ) { 
                    m.call(t, stack1, local2);
                } else { 
                   stack0.axCallProperty($names[1], [stack1, local2], false);
                }
            }
        }
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_normals
        //Possible type:29 0:__AS3__.vec::Vector<7 0:Box2D.Common.Math::b2Vec2>
        /* We sure that this safe get, represented in TRAIT as Slot, type: 29 0:__AS3__.vec::Vector<7 0:Box2D.Common.Math::b2Vec2>  */ 
        stack0 = this.$Bgm_normals;
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
                    const rm = context.runtimename($names[0], 0);
                    stack0 = b_obj.axGetProperty(rm);
                }
            }
        }
//        stack1 = 0;// JIT: redundant assigment, value unused
//        stack2 = -1;// JIT: redundant assigment, value unused
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
            stack0.Set(0, -1);
        } else {
            // 7 0::Set
            {
                let t = stack0;
                const m = t.$BgSet || (t = sec.box(stack0), t.$BgSet);
                if( typeof m === "function" ) { 
                    m.call(t, 0, -1);
                } else { 
                   stack0.axCallProperty($names[1], [0, -1], false);
                }
            }
        }
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_normals
        //Possible type:29 0:__AS3__.vec::Vector<7 0:Box2D.Common.Math::b2Vec2>
        /* We sure that this safe get, represented in TRAIT as Slot, type: 29 0:__AS3__.vec::Vector<7 0:Box2D.Common.Math::b2Vec2>  */ 
        stack0 = this.$Bgm_normals;
        stack1 = 1;
        // 27 {3, 0:Box2D.Common.Math, 0:Box2D.Collision.Shapes, 0, 3, 2:Box2D.Collision.Shapes, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Common, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:http://www.box2d.org/ns/b2internal, 1:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2Shape}::*
        {
            let simple = 1;
            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

            if (typeof simple === "number") {
                stack0 = b_obj.axGetNumericProperty(simple);
            } else {
                stack0 = b_obj['$Bg' + simple];
                if (stack0 === undefined || typeof stack0 === 'function') {
                    const rm = context.runtimename($names[0], 1);
                    stack0 = b_obj.axGetProperty(rm);
                }
            }
        }
//        stack1 = 1;// JIT: redundant assigment, value unused
//        stack2 = 0;// JIT: redundant assigment, value unused
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
            stack0.Set(1, 0);
        } else {
            // 7 0::Set
            {
                let t = stack0;
                const m = t.$BgSet || (t = sec.box(stack0), t.$BgSet);
                if( typeof m === "function" ) { 
                    m.call(t, 1, 0);
                } else { 
                   stack0.axCallProperty($names[1], [1, 0], false);
                }
            }
        }
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_normals
        //Possible type:29 0:__AS3__.vec::Vector<7 0:Box2D.Common.Math::b2Vec2>
        /* We sure that this safe get, represented in TRAIT as Slot, type: 29 0:__AS3__.vec::Vector<7 0:Box2D.Common.Math::b2Vec2>  */ 
        stack0 = this.$Bgm_normals;
        stack1 = 2;
        // 27 {3, 0:Box2D.Common.Math, 0:Box2D.Collision.Shapes, 0, 3, 2:Box2D.Collision.Shapes, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Common, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:http://www.box2d.org/ns/b2internal, 1:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2Shape}::*
        {
            let simple = 2;
            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

            if (typeof simple === "number") {
                stack0 = b_obj.axGetNumericProperty(simple);
            } else {
                stack0 = b_obj['$Bg' + simple];
                if (stack0 === undefined || typeof stack0 === 'function') {
                    const rm = context.runtimename($names[0], 2);
                    stack0 = b_obj.axGetProperty(rm);
                }
            }
        }
//        stack1 = 0;// JIT: redundant assigment, value unused
//        stack2 = 1;// JIT: redundant assigment, value unused
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
            stack0.Set(0, 1);
        } else {
            // 7 0::Set
            {
                let t = stack0;
                const m = t.$BgSet || (t = sec.box(stack0), t.$BgSet);
                if( typeof m === "function" ) { 
                    m.call(t, 0, 1);
                } else { 
                   stack0.axCallProperty($names[1], [0, 1], false);
                }
            }
        }
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_normals
        //Possible type:29 0:__AS3__.vec::Vector<7 0:Box2D.Common.Math::b2Vec2>
        /* We sure that this safe get, represented in TRAIT as Slot, type: 29 0:__AS3__.vec::Vector<7 0:Box2D.Common.Math::b2Vec2>  */ 
        stack0 = this.$Bgm_normals;
        stack1 = 3;
        // 27 {3, 0:Box2D.Common.Math, 0:Box2D.Collision.Shapes, 0, 3, 2:Box2D.Collision.Shapes, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Common, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:http://www.box2d.org/ns/b2internal, 1:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2Shape}::*
        {
            let simple = 3;
            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

            if (typeof simple === "number") {
                stack0 = b_obj.axGetNumericProperty(simple);
            } else {
                stack0 = b_obj['$Bg' + simple];
                if (stack0 === undefined || typeof stack0 === 'function') {
                    const rm = context.runtimename($names[0], 3);
                    stack0 = b_obj.axGetProperty(rm);
                }
            }
        }
//        stack1 = -1;// JIT: redundant assigment, value unused
//        stack2 = 0;// JIT: redundant assigment, value unused
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
            stack0.Set(-1, 0);
        } else {
            // 7 0::Set
            {
                let t = stack0;
                const m = t.$BgSet || (t = sec.box(stack0), t.$BgSet);
                if( typeof m === "function" ) { 
                    m.call(t, -1, 0);
                } else { 
                   stack0.axCallProperty($names[1], [-1, 0], false);
                }
            }
        }
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_centroid
        //Possible type:29 0:__AS3__.vec::Vector<7 0:Box2D.Common.Math::b2Vec2>
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
        stack0 = this.$Bgm_centroid;
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
            stack0.SetZero();
        } else {
            // 7 0::SetZero
            {
                let t = stack0;
                const m = t.$BgSetZero || (t = sec.box(stack0), t.$BgSetZero);
                if( typeof m === "function" ) { 
                    m.call(t);
                } else { 
                   stack0.axCallProperty($names[2], [], false);
                }
            }
        }
        return;
    }
//# sourceURL=http://jit/Box2D/Collision/Shapes/b2PolygonShape/m_SetAsBox.js
})