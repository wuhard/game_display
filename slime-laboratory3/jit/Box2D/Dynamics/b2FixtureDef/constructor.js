(function anonymous(context
) {
/*
	Index: 687
	Path:  Box2D/Dynamics/b2FixtureDef::constructor
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
        // 7 0::filter
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:Box2D.Dynamics::b2FilterData  */ 
        this.$Bgfilter = stack1;
        stack0 = this;
        context.savedScope.superConstructor.call(this, );
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = null;// JIT: redundant assigment, value unused
        // 7 0::shape
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:Box2D.Collision.Shapes::b2Shape  */ 
        this.$Bgshape = null;
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = null;// JIT: redundant assigment, value unused
        // 7 0::userData
        /* We sure that this safe set, represented in TRAIT as Slot, with type: null  */ 
        this.$BguserData = null;
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = 0.2;// JIT: redundant assigment, value unused
        // 7 0::friction
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
        this.$Bgfriction = 0.2;
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = 0;// JIT: redundant assigment, value unused
        // 7 0::restitution
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
        this.$Bgrestitution = 0;
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = 0;// JIT: redundant assigment, value unused
        // 7 0::density
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
        this.$Bgdensity = 0;
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0::filter
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2FilterData  */ 
        stack0 = this.$Bgfilter;
//        stack1 = 1;// JIT: redundant assigment, value unused
        // 7 0::categoryBits
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.categoryBits = 1;
        } else {
            context.setproperty($names[1], 1, stack0);
        }
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0::filter
        //Possible type:7 0:Box2D.Dynamics::b2FilterData
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2FilterData  */ 
        stack0 = this.$Bgfilter;
//        stack1 = 65535;// JIT: redundant assigment, value unused
        // 7 0::maskBits
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.maskBits = 65535;
        } else {
            context.setproperty($names[2], 65535, stack0);
        }
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0::filter
        //Possible type:7 0:Box2D.Dynamics::b2FilterData
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2FilterData  */ 
        stack0 = this.$Bgfilter;
//        stack1 = 0;// JIT: redundant assigment, value unused
        // 7 0::groupIndex
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.groupIndex = 0;
        } else {
            context.setproperty($names[3], 0, stack0);
        }
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = false;// JIT: redundant assigment, value unused
        // 7 0::isSensor
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
        this.$BgisSensor = false;
        return;
    }
//# sourceURL=http://jit/Box2D/Dynamics/b2FixtureDef/constructor.js
})