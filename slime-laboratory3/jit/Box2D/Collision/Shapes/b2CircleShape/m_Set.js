(function anonymous(context
) {
/*
	Index: 1436
	Path:  Box2D/Collision/Shapes/b2CircleShape::m_Set
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
        let stack0 = undefined;
        let stack1 = undefined;
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
                        stack0 = this;
//                        // JIT: potential type:7 0:Box2D.Collision.Shapes::b2Shape// JIT: redundant assigment, value unused
                        stack1 = local1;
                        sec.box(this).axCallSuper($names[0], context.savedScope, [local1]);
                        // JIT: potential type:7 0:Box2D.Collision.Shapes::b2Shape
                        stack0 = local1;
                        // 7 0:Box2D.Collision.Shapes::b2CircleShape
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack1 = temp.$Bgb2CircleShape;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[1]);
                        }
                        stack0 = stack1.axIsType(local1);
                        //JIT: Emit inline return
                        if (!stack0) { return; }
                        // JIT: potential type:7 0:Box2D.Collision.Shapes::b2Shape
                        stack0 = local1;
                        // 7 0:Box2D.Collision.Shapes::b2CircleShape
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack1 = temp.$Bgb2CircleShape;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[1]);
                        }
                        stack0 = (_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL])) ? stack1.axAsType(local1) : local1;
                        //JIT: SKIP DOUBLED COERCE AFTER ASTYPELATE
                        local2 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_p
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        stack0 = this.$Bgm_p;
//                        stack1 = local2;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_p
                        //Possible type:7 0:Box2D.Collision.Shapes::b2CircleShape
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
                            stack1 = local2['m_p'];
                        } else {
                            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
                            stack1 = temp.$Bgm_p;
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
                    case 39:
                        return;
                    }
                }
            }
//# sourceURL=http://jit/Box2D/Collision/Shapes/b2CircleShape/m_Set.js
})