(function anonymous(context
) {
/*
	Index: 140
	Path:  Box2D/Dynamics/b2World::m_RayCastOne
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0:Box2D.Dynamics::b2Fixture
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_RayCastOne(local1 /* b2Vec2 */, local2 /* b2Vec2 */) {
        // Possible use a real "this"
        // local3 is assigned before read, skip init
        let local3 = undefined
        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
        let stack3 = undefined;
        let scope0 = undefined;
        let scope1 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        stack0 = this;
        scope0 = context.savedScope.extend(this);
        stack0 = sec.createActivation(context.mi, scope0);
        stack1 = stack0;
        local3 = stack1;
        scope1 = scope0.extend(stack0);
        stack0 = scope1.object;
        stack1 = null;
        //JIT: SKIP_NULL_COERCE
        stack0.axSetSlot(3, null);
        stack0 = scope1.object;
        stack1 = null;
        //JIT: SKIP_NULL_COERCE
        stack0.axSetSlot(4, null);
        stack0 = scope1.object;
        // JIT: potential type:7 0:Box2D.Common.Math::b2Vec2
        stack1 = local1;
        stack0.axSetSlot(1, local1);
        stack0 = scope1.object;
        // JIT: potential type:7 0:Box2D.Common.Math::b2Vec2
        stack1 = local2;
        stack0.axSetSlot(2, local2);
        stack0 = scope1.object;
        // anonymous (?: b2Fixture, ?: b2Vec2, ?: b2Vec2, ?: Number): Number
        stack1 = context.createFunction(139, scope1, true, 140);
        if ((stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
            var _e = scope1.getScopeProperty($names[0], true, false);
            _e || console.warn('[m_RayCastOne] Coerce Type not found:', "Function")
            stack1 = _e ? _e.axCoerce(stack1) : stack1;
        }
        stack0.axSetSlot(4, stack1);
//        stack0 = this;// JIT: redundant assigment, value unused
        stack1 = scope1.object;
        stack1 = stack1.axGetSlot(4);
        stack2 = scope1.object;
        stack2 = stack2.axGetSlot(1);
        stack3 = scope1.object;
        stack3 = stack3.axGetSlot(2);
        /* We sure that this safe call, represented in TRAIT as Method  */ 
        this.$BgRayCast(stack1, stack2, stack3);
        stack0 = scope1.object;
        stack0 = stack0.axGetSlot(3);
        return stack0;
    }
//# sourceURL=http://jit/Box2D/Dynamics/b2World/m_RayCastOne.js
})