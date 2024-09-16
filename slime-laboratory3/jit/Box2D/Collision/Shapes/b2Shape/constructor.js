(function anonymous(context
) {
/*
	Index: 389
	Path:  Box2D/Collision/Shapes/b2Shape::constructor
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
        stack0 = this;
        context.savedScope.superConstructor.call(this, );
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::e_unknownShape
        temp = scope0.findScopeProperty($names[0], true, false);
        stack1 = temp.$Bge_unknownShape;
        if (stack1 === undefined || typeof stack1 === 'function') {
            stack1 = temp.axGetProperty($names[0]);
        }
        // 7 0:http://www.box2d.org/ns/b2internal::m_type
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
        this.$Bgm_type = (stack1|0);
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0:Box2D.Common::b2Settings
        temp = scope0.findScopeProperty($names[1], true, false);
        stack1 = temp.$Bgb2Settings;
        if (stack1 === undefined || typeof stack1 === 'function') {
            stack1 = temp.axGetProperty($names[1]);
        }
        // 7 0::b2_linearSlop
        //Possible type:7 0:Box2D.Common::b2Settings
        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
            stack1 = stack1['b2_linearSlop'];
        } else {
            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
            stack1 = temp.$Bgb2_linearSlop;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[2]);
            }
        }
        // 7 0:http://www.box2d.org/ns/b2internal::m_radius
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
        this.$Bgm_radius = (+stack1);
        return;
    }
//# sourceURL=http://jit/Box2D/Collision/Shapes/b2Shape/constructor.js
})