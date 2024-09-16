(function anonymous(context
) {
/*
	Index: 1446
	Path:  Box2D/Collision/Shapes/b2CircleShape::constructor
	Type:  Public
	Kind:  null
	Super: Box2D/Collision/Shapes/b2Shape
	Return: *
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_constructor(local1 /* Number */ = 0) {
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
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0:Box2D.Common.Math::b2Vec2
        stack1 = scope0.findScopeProperty($names[0], true, false);
        //JIT: Support fast construct:b2Vec2/Object
        stack1 = context.constructFast(stack1, [], $names[0]);
        // 7 0:http://www.box2d.org/ns/b2internal::m_p
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:Box2D.Common.Math::b2Vec2  */ 
        this.$Bgm_p = stack1;
        stack0 = this;
        context.savedScope.superConstructor.call(this, );
        // 7 0:http://www.box2d.org/ns/b2internal::m_type
        stack0 = scope0.findScopeProperty($names[1], false, false);
        // 7 0:http://www.box2d.org/ns/b2internal::e_circleShape
        temp = scope0.findScopeProperty($names[2], true, false);
        stack1 = temp.$Bge_circleShape;
        if (stack1 === undefined || typeof stack1 === 'function') {
            stack1 = temp.axGetProperty($names[2]);
        }
        // 7 0:http://www.box2d.org/ns/b2internal::m_type
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.m_type = stack1;
        } else {
            context.setproperty($names[1], stack1, stack0);
        }
        // 7 0:http://www.box2d.org/ns/b2internal::m_radius
        stack0 = scope0.findScopeProperty($names[3], false, false);
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack1 = local1;
        // 7 0:http://www.box2d.org/ns/b2internal::m_radius
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.m_radius = local1;
        } else {
            context.setproperty($names[3], local1, stack0);
        }
        return;
    }
//# sourceURL=http://jit/Box2D/Collision/Shapes/b2CircleShape/constructor.js
})