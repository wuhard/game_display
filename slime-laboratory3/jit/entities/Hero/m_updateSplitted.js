(function anonymous(context
) {
/*
	Index: 1130
	Path:  entities/Hero::m_updateSplitted
	Type:  Public
	Kind:  Method
	Super: entities/Entity
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_updateSplitted() {
        // Possible use a real "this"

        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
        let stack3 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        stack0 = this;
        scope0 = context.savedScope.extend(this);
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0:Box2D.Common.Math::b2Vec2
        stack1 = scope0.findScopeProperty($names[0], true, false);
//        stack2 = -1000;// JIT: redundant assigment, value unused
//        stack3 = -1000;// JIT: redundant assigment, value unused
        //JIT: Support fast construct:b2Vec2/Object
        stack1 = context.constructFast(stack1, [-1000, -1000], $names[0]);
        /* We sure that this safe call, represented in TRAIT as Method  */ 
        this.$BgrebuildSlimeAt(stack1);
        return;
    }
//# sourceURL=http://jit/entities/Hero/m_updateSplitted.js
})