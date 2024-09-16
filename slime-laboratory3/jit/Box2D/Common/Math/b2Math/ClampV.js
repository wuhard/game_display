(function anonymous(context
) {
/*
	Index: 577
	Path:  Box2D/Common/Math/b2Math.ClampV
	Type:  Public
	Kind:  Method
	Super: -
	Return: 7 0:Box2D.Common.Math::b2Vec2
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_ClampV(local1 /* b2Vec2 */, local2 /* b2Vec2 */, local3 /* b2Vec2 */) {
        // Possible use a real "this"

        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
        let stack3 = undefined;
        let stack4 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        stack0 = this;
        scope0 = context.savedScope.extend(this);
        // 7 0::MaxV
        /* We sure that this scope owner, represented in TRAIT as Method  */ 
//        stack0 = this;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0:Box2D.Common.Math::b2Vec2// JIT: redundant assigment, value unused
        stack1 = local2;
        // 7 0::MinV
        /* We sure that this scope owner, represented in TRAIT as Method  */ 
//        stack2 = this;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0:Box2D.Common.Math::b2Vec2// JIT: redundant assigment, value unused
        stack3 = local1;
//        // JIT: potential type:7 0:Box2D.Common.Math::b2Vec2// JIT: redundant assigment, value unused
        stack4 = local3;
        /* We sure that this safe call, represented in TRAIT as Method  */ 
        stack2 = this.$BgMinV(local1, local3);
        /* We sure that this safe call, represented in TRAIT as Method  */ 
        stack0 = this.$BgMaxV(local2, stack2);
        return stack0;
    }
//# sourceURL=http://jit/Box2D/Common/Math/b2Math/ClampV.js
})