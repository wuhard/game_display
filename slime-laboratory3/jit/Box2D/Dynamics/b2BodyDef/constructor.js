(function anonymous(context
) {
/*
	Index: 499
	Path:  Box2D/Dynamics/b2BodyDef::constructor
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
        let stack2 = undefined;
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
        // 7 0::position
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:Box2D.Common.Math::b2Vec2  */ 
        this.$Bgposition = stack1;
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0:Box2D.Common.Math::b2Vec2
        stack1 = scope0.findScopeProperty($names[0], true, false);
        //JIT: Support fast construct:b2Vec2/Object
        stack1 = context.constructFast(stack1, [], $names[0]);
        // 7 0::linearVelocity
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:Box2D.Common.Math::b2Vec2  */ 
        this.$BglinearVelocity = stack1;
        stack0 = this;
        context.savedScope.superConstructor.call(this, );
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = null;// JIT: redundant assigment, value unused
        // 7 0::userData
        /* We sure that this safe set, represented in TRAIT as Slot, with type: null  */ 
        this.$BguserData = null;
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0::position
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
        stack0 = this.$Bgposition;
//        stack1 = 0;// JIT: redundant assigment, value unused
//        stack2 = 0;// JIT: redundant assigment, value unused
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
            stack0.Set(0, 0);
        } else {
            // 7 0::Set
            {
                let t = stack0;
                const m = t.$BgSet || (t = sec.box(stack0), t.$BgSet);
                if( typeof m === "function" ) { 
                    m.call(t, 0, 0);
                } else { 
                   stack0.axCallProperty($names[1], [0, 0], false);
                }
            }
        }
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = 0;// JIT: redundant assigment, value unused
        // 7 0::angle
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
        this.$Bgangle = 0;
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0::linearVelocity
        //Possible type:7 0:Box2D.Common.Math::b2Vec2
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
        stack0 = this.$BglinearVelocity;
//        stack1 = 0;// JIT: redundant assigment, value unused
        //IR: DUP changed to PUSH*, reason: prevent optimisation
//        stack2 = 0;// JIT: redundant assigment, value unused
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
            stack0.Set(0, 0);
        } else {
            // 7 0::Set
            {
                let t = stack0;
                const m = t.$BgSet || (t = sec.box(stack0), t.$BgSet);
                if( typeof m === "function" ) { 
                    m.call(t, 0, 0);
                } else { 
                   stack0.axCallProperty($names[1], [0, 0], false);
                }
            }
        }
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = 0;// JIT: redundant assigment, value unused
        // 7 0::angularVelocity
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
        this.$BgangularVelocity = 0;
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = 0;// JIT: redundant assigment, value unused
        // 7 0::linearDamping
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
        this.$BglinearDamping = 0;
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = 0;// JIT: redundant assigment, value unused
        // 7 0::angularDamping
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
        this.$BgangularDamping = 0;
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = true;// JIT: redundant assigment, value unused
        // 7 0::allowSleep
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
        this.$BgallowSleep = true;
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = true;// JIT: redundant assigment, value unused
        // 7 0::awake
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
        this.$Bgawake = true;
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = false;// JIT: redundant assigment, value unused
        // 7 0::fixedRotation
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
        this.$BgfixedRotation = false;
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = false;// JIT: redundant assigment, value unused
        // 7 0::bullet
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
        this.$Bgbullet = false;
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0:Box2D.Dynamics::b2Body
        temp = scope0.findScopeProperty($names[2], true, false);
        stack1 = temp.$Bgb2Body;
        if (stack1 === undefined || typeof stack1 === 'function') {
            stack1 = temp.axGetProperty($names[2]);
        }
        // 7 0::b2_staticBody
        //Possible type:7 0:Box2D.Dynamics::b2Body
        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
            stack1 = stack1['b2_staticBody'];
        } else {
            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
            stack1 = temp.$Bgb2_staticBody;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[3]);
            }
        }
        // 7 0::type
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::uint  */ 
        this.$Bgtype = (stack1>>>0);
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = true;// JIT: redundant assigment, value unused
        // 7 0::active
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
        this.$Bgactive = true;
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = 1;// JIT: redundant assigment, value unused
        // 7 0::inertiaScale
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
        this.$BginertiaScale = 1;
        return;
    }
//# sourceURL=http://jit/Box2D/Dynamics/b2BodyDef/constructor.js
})