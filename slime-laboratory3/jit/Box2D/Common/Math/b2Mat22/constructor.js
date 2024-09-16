(function anonymous(context
) {
/*
	Index: 692
	Path:  Box2D/Common/Math/b2Mat22::constructor
	Type:  Public
	Kind:  null
	Super: Object
	Return: *
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_constructor() {
        // Possible use a real "this"
        // local1 is assigned before read, skip init
        let local1 = undefined
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
        //JIT: Support fast construct:b2Vec2/Object
        stack1 = context.constructFast(stack1, [], $names[0]);
        // 7 0::col1
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:Box2D.Common.Math::b2Vec2  */ 
        this.$Bgcol1 = stack1;
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0:Box2D.Common.Math::b2Vec2
        stack1 = scope0.findScopeProperty($names[0], true, false);
        //JIT: Support fast construct:b2Vec2/Object
        stack1 = context.constructFast(stack1, [], $names[0]);
        // 7 0::col2
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:Box2D.Common.Math::b2Vec2  */ 
        this.$Bgcol2 = stack1;
        stack0 = this;
        context.savedScope.superConstructor.call(this, );
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0::col1
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
        stack0 = this.$Bgcol1;
//        stack1 = this;// JIT: redundant assigment, value unused
        // 7 0::col2
        //Possible type:7 0:Box2D.Common.Math::b2Vec2
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
        stack1 = this.$Bgcol2;
//        stack2 = 1;// JIT: redundant assigment, value unused
        //IR: DUP changed to PUSH*, reason: prevent optimisation
//        stack3 = 1;// JIT: redundant assigment, value unused
        local1 = 1;
        // 7 0::y
        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])){
            stack1.y = 1;
        } else {
            context.setproperty($names[1], 1, stack1);
        }
//        stack1 = local1;// JIT: redundant assigment, value unused
        //IR: KILL removed, reason: prevent optimisation
        // 7 0::x
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.x = local1;
        } else {
            context.setproperty($names[2], local1, stack0);
        }
        return;
    }
//# sourceURL=http://jit/Box2D/Common/Math/b2Mat22/constructor.js
})