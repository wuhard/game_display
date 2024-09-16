(function anonymous(context
) {
/*
	Index: 382
	Path:  Box2D/Collision/Shapes/b2Shape::m_Set
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_Set(local1 /* b2Shape */) {
        // Possible use a real "this"

        let stack0 = undefined;
        let stack1 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        //IR: PUSHSCOPE removed, reason: unused
        // unreachable
//        stack0 = this;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0:Box2D.Collision.Shapes::b2Shape// JIT: redundant assigment, value unused
        stack1 = local1;
        // 7 0:http://www.box2d.org/ns/b2internal::m_radius
        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
            stack1 = local1['m_radius'];
        } else {
            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
            stack1 = temp.$Bgm_radius;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[0]);
            }
        }
        // 7 0:http://www.box2d.org/ns/b2internal::m_radius
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
        this.$Bgm_radius = (+stack1);
        return;
    }
//# sourceURL=http://jit/Box2D/Collision/Shapes/b2Shape/m_Set.js
})