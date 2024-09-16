(function anonymous(context
) {
/*
	Index: 243
	Path:  Box2D/Common/Math/b2Vec2::m_Copy
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0:Box2D.Common.Math::b2Vec2
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_Copy() {
        // Possible use a real "this"

        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        stack0 = this;
        scope0 = context.savedScope.extend(this);
        // 7 0:Box2D.Common.Math::b2Vec2
        stack0 = scope0.findScopeProperty($names[0], true, false);
//        stack1 = this;// JIT: redundant assigment, value unused
        // 7 0::x
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
        stack1 = this.$Bgx;
//        stack2 = this;// JIT: redundant assigment, value unused
        // 7 0::y
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
        stack2 = this.$Bgy;
        //JIT: Support fast construct:b2Vec2/Object
        stack0 = context.constructFast(stack0, [stack1, stack2], $names[0]);
        return stack0;
    }
//# sourceURL=http://jit/Box2D/Common/Math/b2Vec2/m_Copy.js
})