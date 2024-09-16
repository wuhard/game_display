(function anonymous(context
) {
/*
	Index: 1418
	Path:  Box2D/Collision/Shapes/b2PolygonShape::m_SetAsOrientedBox
	Type:  Public
	Kind:  Method
	Super: Box2D/Collision/Shapes/b2Shape
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_SetAsOrientedBox(local1 /* Number */, local2 /* Number */, local3 /* b2Vec2 */ = null, local4 /* Number */ = 0) {
        // Possible use a real "this"
        /* Force Number coerce */
        local1 = (+local1);
        /* Force Number coerce */
        local2 = (+local2);
        /* Force Number coerce */
        local4 = (+local4);
        // local5 is assigned before read, skip init
        let local5 = undefined
        // local6 is assigned before read, skip init
        let local6 = undefined
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
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 4;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_vertexCount
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
                        this.$Bgm_vertexCount = 4;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 4;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgReserve(4);
//                        stack0 = this;// JIT: redundant assigment, value unused
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
//                        stack0 = this;// JIT: redundant assigment, value unused
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
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
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
//                        stack0 = this;// JIT: redundant assigment, value unused
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
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack1 = local1;
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
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
//                        stack0 = this;// JIT: redundant assigment, value unused
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
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
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
//                        stack0 = this;// JIT: redundant assigment, value unused
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
//                        stack1 = 0;// JIT: redundant assigment, value unused
//                        stack2 = -1;// JIT: redundant assigment, value unused
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
//                        stack0 = this;// JIT: redundant assigment, value unused
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
//                        stack1 = 1;// JIT: redundant assigment, value unused
//                        stack2 = 0;// JIT: redundant assigment, value unused
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
//                        stack0 = this;// JIT: redundant assigment, value unused
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
//                        stack1 = 0;// JIT: redundant assigment, value unused
//                        stack2 = 1;// JIT: redundant assigment, value unused
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
//                        stack0 = this;// JIT: redundant assigment, value unused
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
//                        stack1 = -1;// JIT: redundant assigment, value unused
//                        stack2 = 0;// JIT: redundant assigment, value unused
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
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:Box2D.Common.Math::b2Vec2// JIT: redundant assigment, value unused
                        stack1 = local3;
                        // 7 0:http://www.box2d.org/ns/b2internal::m_centroid
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        this.$Bgm_centroid = local3;
                        // 7 0:Box2D.Common.Math::b2Transform
                        stack0 = scope0.findScopeProperty($names[2], true, false);
                        //JIT: Support fast construct:b2Transform/Object
                        stack0 = context.constructFast(stack0, [], $names[2]);
                        //IR: Drop coerce, reason: redundant
                        stack1 = stack0;
                        local5 = stack1;
//                        // JIT: potential type:7 0:Box2D.Common.Math::b2Vec2// JIT: redundant assigment, value unused
                        stack1 = local3;
                        // 7 0::position
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.position = local3;
                        } else {
                            context.setproperty($names[3], local3, stack0);
                        }
//                        stack0 = local5;// JIT: redundant assigment, value unused
                        // 7 0::R
                        //Possible type:7 0:Box2D.Common.Math::b2Transform
                        if (!(local5 != undefined && local5[AX_CLASS_SYMBOL])) {
                            stack0 = local5['R'];
                        } else {
                            temp = local5[AX_CLASS_SYMBOL] ? local5 : sec.box(local5);
                            stack0 = temp.$BgR;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[4]);
                            }
                        }
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack1 = local4;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.Set(local4);
                        } else {
                            // 7 0::Set
                            {
                                let t = stack0;
                                const m = t.$BgSet || (t = sec.box(stack0), t.$BgSet);
                                if( typeof m === "function" ) { 
                                    m.call(t, local4);
                                } else { 
                                   stack0.axCallProperty($names[1], [local4], false);
                                }
                            }
                        }
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local6 = 0;
                        { p = 245; continue; };
                    case 185:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_vertices
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 29 0:__AS3__.vec::Vector<7 0:Box2D.Common.Math::b2Vec2>  */ 
                        stack0 = this.$Bgm_vertices;
                        stack1 = local6;
                        // 7 0:Box2D.Common.Math::b2Math
                        temp = scope0.findScopeProperty($names[5], true, false);
                        stack2 = temp.$Bgb2Math;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[5]);
                        }
//                        stack3 = local5;// JIT: redundant assigment, value unused
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_vertices
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 29 0:__AS3__.vec::Vector<7 0:Box2D.Common.Math::b2Vec2>  */ 
                        stack4 = this.$Bgm_vertices;
                        stack5 = local6;
                        // 27 {3, 0:Box2D.Common.Math, 0:Box2D.Collision.Shapes, 0, 3, 2:Box2D.Collision.Shapes, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Common, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:http://www.box2d.org/ns/b2internal, 1:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2Shape}::*
                        {
                            let simple = local6;
                            const b_obj = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);

                            if (typeof simple === "number") {
                                stack4 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack4 = b_obj['$Bg' + simple];
                                if (stack4 === undefined || typeof stack4 === 'function') {
                                    const rm = context.runtimename($names[0], local6);
                                    stack4 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        if (!(_a = typeof stack2, ((_a !== 'object' && _a !== 'function' ) || stack2 == null || stack2[AX_CLASS_SYMBOL]))) {
                           stack2 = stack2.MulX(local5, stack4);
                        } else {
                            // 7 0::MulX
                            {
                                let t = stack2;
                                const m = t.$BgMulX || (t = sec.box(stack2), t.$BgMulX);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BgMulX (local5, stack4);
                                } else { 
                                    stack2 = stack2.axCallProperty($names[6], [local5, stack4], false);
                                }
                            }
                        }
                        context.setproperty(context.runtimename($names[0], local6), stack2, stack0);
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_normals
                        //Possible type:29 0:__AS3__.vec::Vector<7 0:Box2D.Common.Math::b2Vec2>
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 29 0:__AS3__.vec::Vector<7 0:Box2D.Common.Math::b2Vec2>  */ 
                        stack0 = this.$Bgm_normals;
                        stack1 = local6;
                        // 7 0:Box2D.Common.Math::b2Math
                        temp = scope0.findScopeProperty($names[5], true, false);
                        stack2 = temp.$Bgb2Math;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[5]);
                        }
//                        stack3 = local5;// JIT: redundant assigment, value unused
                        // 7 0::R
                        if (!(local5 != undefined && local5[AX_CLASS_SYMBOL])) {
                            stack3 = local5['R'];
                        } else {
                            temp = local5[AX_CLASS_SYMBOL] ? local5 : sec.box(local5);
                            stack3 = temp.$BgR;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[4]);
                            }
                        }
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_normals
                        //Possible type:29 0:__AS3__.vec::Vector<7 0:Box2D.Common.Math::b2Vec2>
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 29 0:__AS3__.vec::Vector<7 0:Box2D.Common.Math::b2Vec2>  */ 
                        stack4 = this.$Bgm_normals;
                        stack5 = local6;
                        // 27 {3, 0:Box2D.Common.Math, 0:Box2D.Collision.Shapes, 0, 3, 2:Box2D.Collision.Shapes, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Common, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:http://www.box2d.org/ns/b2internal, 1:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2Shape}::*
                        {
                            let simple = local6;
                            const b_obj = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);

                            if (typeof simple === "number") {
                                stack4 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack4 = b_obj['$Bg' + simple];
                                if (stack4 === undefined || typeof stack4 === 'function') {
                                    const rm = context.runtimename($names[0], local6);
                                    stack4 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        if (!(_a = typeof stack2, ((_a !== 'object' && _a !== 'function' ) || stack2 == null || stack2[AX_CLASS_SYMBOL]))) {
                           stack2 = stack2.MulMV(stack3, stack4);
                        } else {
                            // 7 0::MulMV
                            {
                                let t = stack2;
                                const m = t.$BgMulMV || (t = sec.box(stack2), t.$BgMulMV);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BgMulMV (stack3, stack4);
                                } else { 
                                    stack2 = stack2.axCallProperty($names[7], [stack3, stack4], false);
                                }
                            }
                        }
                        context.setproperty(context.runtimename($names[0], local6), stack2, stack0);
                        local6 = (local6 | 0) + 1;
                    case 245:
                        stack0 = local6;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_vertexCount
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack1 = this.$Bgm_vertexCount;
                        if (stack1 > local6) { p = 185; continue; };
                        return;
                    }
                }
            }
//# sourceURL=http://jit/Box2D/Collision/Shapes/b2PolygonShape/m_SetAsOrientedBox.js
})