(function anonymous(context
) {
/*
	Index: 1415
	Path:  Box2D/Collision/Shapes/b2PolygonShape::m_SetAsArray
	Type:  Public
	Kind:  Method
	Super: Box2D/Collision/Shapes/b2Shape
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_SetAsArray(local1 /* Array */, local2 /* Number */ = 0) {
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
                        //JIT: Possible source:9 {3, 0:Box2D.Common.Math, 0:Box2D.Collision.Shapes, 0, 0:__AS3__.vec, 3, 2:Box2D.Collision.Shapes, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Common, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:http://www.box2d.org/ns/b2internal, 1:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2Shape}::Vector
                        stack0 = context.construct(stack0, []);
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[2], true, false);
                            _e || console.warn('[m_SetAsArray] Coerce Type not found:', "Vector")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local3 = stack0;
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local5 = 0;
//                        // JIT: potential type:7 0::Array// JIT: redundant assigment, value unused
                        stack0 = local1;
                        
                        local6 = local1;
                        { p = 48; continue; };
                    case 31:
                        stack0 = local6;
                        stack1 = local5;
                        stack0 = sec.box(local6).axNextValue(local5);
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[1], true, false);
                            _e || console.warn('[m_SetAsArray] Coerce Type not found:', "b2Vec2")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local4 = stack0;
//                        stack0 = local3;// JIT: redundant assigment, value unused
//                        stack1 = local4;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local3, ((_a !== 'object' && _a !== 'function' ) || local3 == null || local3[AX_CLASS_SYMBOL]))) {
                            local3.push(local4);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = local3;
                                const m = t.$Bgpush || (t = sec.box(local3), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local4);
                                } else { 
                                   local3.axCallProperty($names[3], [local4], false);
                                }
                            }
                        }
                    case 48:
                        temp = context.hasnext2(local6, local5);
                        local6 = temp[0];
                        local5 = temp[1];
                        stack0 = local5 > 0;
                        if (stack0) { p = 31; continue; };
                        //IR: KILL removed, reason: prevent optimisation
                        //IR: KILL removed, reason: prevent optimisation
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = local3;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack2 = local2;
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgSetAsVector(local3, local2);
                        return;
                    }
                }
            }
//# sourceURL=http://jit/Box2D/Collision/Shapes/b2PolygonShape/m_SetAsArray.js
})