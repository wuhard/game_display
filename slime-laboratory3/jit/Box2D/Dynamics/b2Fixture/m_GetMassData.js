(function anonymous(context
) {
/*
	Index: 220
	Path:  Box2D/Dynamics/b2Fixture::m_GetMassData
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0:Box2D.Collision.Shapes::b2MassData
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_GetMassData(local1 /* b2MassData */ = null) {
        // Possible use a real "this"

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
                        // JIT: potential type:7 0:Box2D.Collision.Shapes::b2MassData
                        stack0 = local1;
                        stack1 = null;
                        if (null != local1) { p = 16; continue; };
                        // 7 0:Box2D.Collision.Shapes::b2MassData
                        stack0 = scope0.findScopeProperty($names[0], true, false);
                        //JIT: Support fast construct:b2MassData/Object
                        stack0 = context.constructFast(stack0, [], $names[0]);
                        //IR: Drop coerce, reason: redundant
                        local1 = stack0;
                    case 16:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_shape
                        //Possible type:7 0:Box2D.Collision.Shapes::b2MassData
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Collision.Shapes::b2Shape  */ 
                        stack0 = this.$Bgm_shape;
//                        // JIT: potential type:7 0:Box2D.Collision.Shapes::b2MassData// JIT: redundant assigment, value unused
                        stack1 = local1;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_density
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack2 = this.$Bgm_density;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.ComputeMass(local1, stack2);
                        } else {
                            // 7 0::ComputeMass
                            {
                                let t = stack0;
                                const m = t.$BgComputeMass || (t = sec.box(stack0), t.$BgComputeMass);
                                if( typeof m === "function" ) { 
                                    m.call(t, local1, stack2);
                                } else { 
                                   stack0.axCallProperty($names[1], [local1, stack2], false);
                                }
                            }
                        }
                        // JIT: potential type:7 0:Box2D.Collision.Shapes::b2MassData
                        stack0 = local1;
                        return local1;
                    }
                }
            }
//# sourceURL=http://jit/Box2D/Dynamics/b2Fixture/m_GetMassData.js
})