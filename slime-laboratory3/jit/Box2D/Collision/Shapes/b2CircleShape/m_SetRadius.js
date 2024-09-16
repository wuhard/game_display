(function anonymous(context
) {
/*
	Index: 1445
	Path:  Box2D/Collision/Shapes/b2CircleShape::m_SetRadius
	Type:  Public
	Kind:  Method
	Super: Box2D/Collision/Shapes/b2Shape
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_SetRadius(local1 /* Number */) {
        // Possible use a real "this"
        /* Force Number coerce */
        local1 = (+local1);

        let stack0 = undefined;
        let stack1 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        stack0 = this;
        scope0 = context.savedScope.extend(this);
        // 7 0:http://www.box2d.org/ns/b2internal::m_radius
        stack0 = scope0.findScopeProperty($names[0], false, false);
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack1 = local1;
        // 7 0:http://www.box2d.org/ns/b2internal::m_radius
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.m_radius = local1;
        } else {
            context.setproperty($names[0], local1, stack0);
        }
        return;
    }
//# sourceURL=http://jit/Box2D/Collision/Shapes/b2CircleShape/m_SetRadius.js
})