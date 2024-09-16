(function anonymous(context
) {
/*
	Index: 228
	Path:  Box2D/Dynamics/b2Fixture::constructor
	Type:  Public
	Kind:  null
	Super: Object
	Return: *
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_constructor() {
        // Possible use a real "this"

        let stack0 = undefined;
        let stack1 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        stack0 = this;
        scope0 = context.savedScope.extend(this);
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0:Box2D.Dynamics::b2FilterData
        stack1 = scope0.findScopeProperty($names[0], true, false);
        //JIT: Support fast construct:b2FilterData/Object
        stack1 = context.constructFast(stack1, [], $names[0]);
        // 7 0:http://www.box2d.org/ns/b2internal::m_filter
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:Box2D.Dynamics::b2FilterData  */ 
        this.$Bgm_filter = stack1;
        stack0 = this;
        context.savedScope.superConstructor.call(this, );
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0:Box2D.Collision::b2AABB
        stack1 = scope0.findScopeProperty($names[1], true, false);
        //JIT: Support fast construct:b2AABB/Object
        stack1 = context.constructFast(stack1, [], $names[1]);
        // 7 0:http://www.box2d.org/ns/b2internal::m_aabb
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:Box2D.Collision::b2AABB  */ 
        this.$Bgm_aabb = stack1;
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = null;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_userData
        /* We sure that this safe set, represented in TRAIT as Slot, with type: null  */ 
        this.$Bgm_userData = null;
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = null;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_body
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:Box2D.Dynamics::b2Body  */ 
        this.$Bgm_body = null;
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = null;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_next
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:Box2D.Dynamics::b2Fixture  */ 
        this.$Bgm_next = null;
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = null;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_shape
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:Box2D.Collision.Shapes::b2Shape  */ 
        this.$Bgm_shape = null;
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = 0;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_density
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
        this.$Bgm_density = 0;
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = 0;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_friction
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
        this.$Bgm_friction = 0;
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = 0;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_restitution
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
        this.$Bgm_restitution = 0;
        return;
    }
//# sourceURL=http://jit/Box2D/Dynamics/b2Fixture/constructor.js
})