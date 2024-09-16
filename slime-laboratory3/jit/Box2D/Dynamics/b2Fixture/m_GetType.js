(function anonymous(context
) {
/*
	Index: 208
	Path:  Box2D/Dynamics/b2Fixture::m_GetType
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::int
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_GetType() {
        // Possible use a real "this"

        let stack0 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        //IR: PUSHSCOPE removed, reason: unused
        // unreachable
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_shape
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Collision.Shapes::b2Shape  */ 
        stack0 = this.$Bgm_shape;
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
           stack0 = stack0.GetType();
        } else {
            // 7 0::GetType
            {
                let t = stack0;
                const m = t.$BgGetType || (t = sec.box(stack0), t.$BgGetType);
                if( typeof m === "function" ) { 
                    stack0 = t.$BgGetType ();
                } else { 
                    stack0 = stack0.axCallProperty($names[0], [], false);
                }
            }
        }
        return (stack0|0);
    }
//# sourceURL=http://jit/Box2D/Dynamics/b2Fixture/m_GetType.js
})