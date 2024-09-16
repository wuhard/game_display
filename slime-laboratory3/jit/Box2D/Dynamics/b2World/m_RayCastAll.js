(function anonymous(context
) {
/*
	Index: 142
	Path:  Box2D/Dynamics/b2World::m_RayCastAll
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 29 0:__AS3__.vec::Vector<7 0:Box2D.Dynamics::b2Fixture>
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_RayCastAll(local1 /* b2Vec2 */, local2 /* b2Vec2 */) {
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
        stack1 = context.createFunction(141, scope1, true, 142);
        if ((stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
            var _e = scope1.getScopeProperty($names[0], true, false);
            _e || console.warn('[m_RayCastAll] Coerce Type not found:', "Function")
            stack1 = _e ? _e.axCoerce(stack1) : stack1;
        }
        stack0.axSetSlot(4, stack1);
        stack0 = scope1.object;
        // 9 {3, 0:Box2D.Dynamics, 0:Box2D.Common.Math, 3, 0, 2:Box2D.Dynamics, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Common, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Contacts, 0:Box2D.Dynamics.Joints, 0:http://www.box2d.org/ns/b2internal, 1:Box2D.Dynamics:b2World, 5:Box2D.Dynamics:b2World, 0:__AS3__.vec}::Vector
        temp = scope1.findScopeProperty($names[1], true, false);
        stack1 = temp.$BgVector;
        if (stack1 === undefined || typeof stack1 === 'function') {
            stack1 = temp.axGetProperty($names[1]);
        }
        // 7 0:Box2D.Dynamics::b2Fixture
        temp = scope1.findScopeProperty($names[2], true, false);
        stack2 = temp.$Bgb2Fixture;
        if (stack2 === undefined || typeof stack2 === 'function') {
            stack2 = temp.axGetProperty($names[2]);
        }
        stack1 = sec.applyType(stack1, [stack2]);
        //JIT: Possible source:9 {3, 0:Box2D.Dynamics, 0:Box2D.Common.Math, 3, 0, 2:Box2D.Dynamics, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Common, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Contacts, 0:Box2D.Dynamics.Joints, 0:http://www.box2d.org/ns/b2internal, 1:Box2D.Dynamics:b2World, 5:Box2D.Dynamics:b2World, 0:__AS3__.vec}::Vector
        stack1 = context.construct(stack1, []);
        if ((stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
            var _e = scope1.getScopeProperty($names[3], true, false);
            _e || console.warn('[m_RayCastAll] Coerce Type not found:', "Vector")
            stack1 = _e ? _e.axCoerce(stack1) : stack1;
        }
        stack0.axSetSlot(3, stack1);
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
//# sourceURL=http://jit/Box2D/Dynamics/b2World/m_RayCastAll.js
})