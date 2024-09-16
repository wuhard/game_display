(function anonymous(context
) {
/*
	Index: 1419
	Path:  Box2D/Collision/Shapes/b2PolygonShape::m_SetAsEdge
	Type:  Public
	Kind:  Method
	Super: Box2D/Collision/Shapes/b2Shape
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_SetAsEdge(local1 /* b2Vec2 */, local2 /* b2Vec2 */) {
        // Possible use a real "this"

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

        
        stack0 = this;
        scope0 = context.savedScope.extend(this);
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = 2;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_vertexCount
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
        this.$Bgm_vertexCount = 2;
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = 2;// JIT: redundant assigment, value unused
        /* We sure that this safe call, represented in TRAIT as Method  */ 
        this.$BgReserve(2);
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
//        // JIT: potential type:7 0:Box2D.Common.Math::b2Vec2// JIT: redundant assigment, value unused
        stack1 = local1;
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
            stack0.SetV(local1);
        } else {
            // 7 0::SetV
            {
                let t = stack0;
                const m = t.$BgSetV || (t = sec.box(stack0), t.$BgSetV);
                if( typeof m === "function" ) { 
                    m.call(t, local1);
                } else { 
                   stack0.axCallProperty($names[1], [local1], false);
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
//        // JIT: potential type:7 0:Box2D.Common.Math::b2Vec2// JIT: redundant assigment, value unused
        stack1 = local2;
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
            stack0.SetV(local2);
        } else {
            // 7 0::SetV
            {
                let t = stack0;
                const m = t.$BgSetV || (t = sec.box(stack0), t.$BgSetV);
                if( typeof m === "function" ) { 
                    m.call(t, local2);
                } else { 
                   stack0.axCallProperty($names[1], [local2], false);
                }
            }
        }
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_centroid
        //Possible type:29 0:__AS3__.vec::Vector<7 0:Box2D.Common.Math::b2Vec2>
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
        stack0 = this.$Bgm_centroid;
        stack1 = 0.5;
//        // JIT: potential type:7 0:Box2D.Common.Math::b2Vec2// JIT: redundant assigment, value unused
        stack2 = local1;
        // 7 0::x
        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
            stack2 = local1['x'];
        } else {
            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
            stack2 = temp.$Bgx;
            if (stack2 === undefined || typeof stack2 === 'function') {
                stack2 = temp.axGetProperty($names[2]);
            }
        }
//        // JIT: potential type:7 0:Box2D.Common.Math::b2Vec2// JIT: redundant assigment, value unused
        stack3 = local2;
        // 7 0::x
        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
            stack3 = local2['x'];
        } else {
            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
            stack3 = temp.$Bgx;
            if (stack3 === undefined || typeof stack3 === 'function') {
                stack3 = temp.axGetProperty($names[2]);
            }
        }
        stack2 += stack3;
        stack1 *= stack2;
        // 7 0::x
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.x = stack1;
        } else {
            context.setproperty($names[2], stack1, stack0);
        }
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_centroid
        //Possible type:7 0:Box2D.Common.Math::b2Vec2
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
        stack0 = this.$Bgm_centroid;
        stack1 = 0.5;
//        // JIT: potential type:7 0:Box2D.Common.Math::b2Vec2// JIT: redundant assigment, value unused
        stack2 = local1;
        // 7 0::y
        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
            stack2 = local1['y'];
        } else {
            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
            stack2 = temp.$Bgy;
            if (stack2 === undefined || typeof stack2 === 'function') {
                stack2 = temp.axGetProperty($names[3]);
            }
        }
//        // JIT: potential type:7 0:Box2D.Common.Math::b2Vec2// JIT: redundant assigment, value unused
        stack3 = local2;
        // 7 0::y
        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
            stack3 = local2['y'];
        } else {
            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
            stack3 = temp.$Bgy;
            if (stack3 === undefined || typeof stack3 === 'function') {
                stack3 = temp.axGetProperty($names[3]);
            }
        }
        stack2 += stack3;
        stack1 *= stack2;
        // 7 0::y
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.y = stack1;
        } else {
            context.setproperty($names[3], stack1, stack0);
        }
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_normals
        //Possible type:7 0:Box2D.Common.Math::b2Vec2
        /* We sure that this safe get, represented in TRAIT as Slot, type: 29 0:__AS3__.vec::Vector<7 0:Box2D.Common.Math::b2Vec2>  */ 
        stack0 = this.$Bgm_normals;
        stack1 = 0;
        // 7 0:Box2D.Common.Math::b2Math
        temp = scope0.findScopeProperty($names[4], true, false);
        stack2 = temp.$Bgb2Math;
        if (stack2 === undefined || typeof stack2 === 'function') {
            stack2 = temp.axGetProperty($names[4]);
        }
        // 7 0:Box2D.Common.Math::b2Math
        temp = scope0.findScopeProperty($names[4], true, false);
        stack3 = temp.$Bgb2Math;
        if (stack3 === undefined || typeof stack3 === 'function') {
            stack3 = temp.axGetProperty($names[4]);
        }
//        // JIT: potential type:7 0:Box2D.Common.Math::b2Vec2// JIT: redundant assigment, value unused
        stack4 = local2;
//        // JIT: potential type:7 0:Box2D.Common.Math::b2Vec2// JIT: redundant assigment, value unused
        stack5 = local1;
        if (!(_a = typeof stack3, ((_a !== 'object' && _a !== 'function' ) || stack3 == null || stack3[AX_CLASS_SYMBOL]))) {
           stack3 = stack3.SubtractVV(local2, local1);
        } else {
            // 7 0::SubtractVV
            {
                let t = stack3;
                const m = t.$BgSubtractVV || (t = sec.box(stack3), t.$BgSubtractVV);
                if( typeof m === "function" ) { 
                    stack3 = t.$BgSubtractVV (local2, local1);
                } else { 
                    stack3 = stack3.axCallProperty($names[5], [local2, local1], false);
                }
            }
        }
//        stack4 = 1;// JIT: redundant assigment, value unused
        if (!(_a = typeof stack2, ((_a !== 'object' && _a !== 'function' ) || stack2 == null || stack2[AX_CLASS_SYMBOL]))) {
           stack2 = stack2.CrossVF(stack3, 1);
        } else {
            // 7 0::CrossVF
            {
                let t = stack2;
                const m = t.$BgCrossVF || (t = sec.box(stack2), t.$BgCrossVF);
                if( typeof m === "function" ) { 
                    stack2 = t.$BgCrossVF (stack3, 1);
                } else { 
                    stack2 = stack2.axCallProperty($names[6], [stack3, 1], false);
                }
            }
        }
        context.setproperty(context.runtimename($names[0], 0), stack2, stack0);
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
                   stack0.axCallProperty($names[7], [], false);
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
//        stack1 = this;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_normals
        //Possible type:undefined
        /* We sure that this safe get, represented in TRAIT as Slot, type: 29 0:__AS3__.vec::Vector<7 0:Box2D.Common.Math::b2Vec2>  */ 
        stack1 = this.$Bgm_normals;
        stack2 = 0;
        // 27 {3, 0:Box2D.Common.Math, 0:Box2D.Collision.Shapes, 0, 3, 2:Box2D.Collision.Shapes, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Common, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:http://www.box2d.org/ns/b2internal, 1:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2Shape}::*
        {
            let simple = 0;
            const b_obj = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);

            if (typeof simple === "number") {
                stack1 = b_obj.axGetNumericProperty(simple);
            } else {
                stack1 = b_obj['$Bg' + simple];
                if (stack1 === undefined || typeof stack1 === 'function') {
                    const rm = context.runtimename($names[0], 0);
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
                stack1 = temp.axGetProperty($names[2]);
            }
        }
        stack1 = -stack1;
        // 7 0::x
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.x = stack1;
        } else {
            context.setproperty($names[2], stack1, stack0);
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
//        stack1 = this;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_normals
        //Possible type:undefined
        /* We sure that this safe get, represented in TRAIT as Slot, type: 29 0:__AS3__.vec::Vector<7 0:Box2D.Common.Math::b2Vec2>  */ 
        stack1 = this.$Bgm_normals;
        stack2 = 0;
        // 27 {3, 0:Box2D.Common.Math, 0:Box2D.Collision.Shapes, 0, 3, 2:Box2D.Collision.Shapes, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Common, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:http://www.box2d.org/ns/b2internal, 1:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2Shape}::*
        {
            let simple = 0;
            const b_obj = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);

            if (typeof simple === "number") {
                stack1 = b_obj.axGetNumericProperty(simple);
            } else {
                stack1 = b_obj['$Bg' + simple];
                if (stack1 === undefined || typeof stack1 === 'function') {
                    const rm = context.runtimename($names[0], 0);
                    stack1 = b_obj.axGetProperty(rm);
                }
            }
        }
        // 7 0::y
        //Possible type:29 0:__AS3__.vec::Vector<7 0:Box2D.Common.Math::b2Vec2>
        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
            stack1 = stack1['y'];
        } else {
            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
            stack1 = temp.$Bgy;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[3]);
            }
        }
        stack1 = -stack1;
        // 7 0::y
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.y = stack1;
        } else {
            context.setproperty($names[3], stack1, stack0);
        }
        return;
    }
//# sourceURL=http://jit/Box2D/Collision/Shapes/b2PolygonShape/m_SetAsEdge.js
})