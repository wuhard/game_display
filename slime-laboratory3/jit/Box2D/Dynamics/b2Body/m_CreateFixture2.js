(function anonymous(context
) {
/*
	Index: 317
	Path:  Box2D/Dynamics/b2Body::m_CreateFixture2
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0:Box2D.Dynamics::b2Fixture
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_CreateFixture2(local1 /* b2Shape */, local2 /* Number */ = 0) {
        // Possible use a real "this"
        /* Force Number coerce */
        local2 = (+local2);
        // local3 is assigned before read, skip init
        let local3 = undefined
        let stack0 = undefined;
        let stack1 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        stack0 = this;
        scope0 = context.savedScope.extend(this);
        // 7 0:Box2D.Dynamics::b2FixtureDef
        stack0 = scope0.findScopeProperty($names[0], true, false);
        //JIT: Support fast construct:b2FixtureDef/Object
        stack0 = context.constructFast(stack0, [], $names[0]);
        //IR: Drop coerce, reason: redundant
        local3 = stack0;
//        stack0 = local3;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0:Box2D.Collision.Shapes::b2Shape// JIT: redundant assigment, value unused
        stack1 = local1;
        // 7 0::shape
        if (!(local3 != undefined && local3[AX_CLASS_SYMBOL])){
            local3.shape = local1;
        } else {
            context.setproperty($names[1], local1, local3);
        }
//        stack0 = local3;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack1 = local2;
        // 7 0::density
        if (!(local3 != undefined && local3[AX_CLASS_SYMBOL])){
            local3.density = local2;
        } else {
            context.setproperty($names[2], local2, local3);
        }
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = local3;// JIT: redundant assigment, value unused
        /* We sure that this safe call, represented in TRAIT as Method  */ 
        stack0 = this.$BgCreateFixture(local3);
        return stack0;
    }
//# sourceURL=http://jit/Box2D/Dynamics/b2Body/m_CreateFixture2.js
})