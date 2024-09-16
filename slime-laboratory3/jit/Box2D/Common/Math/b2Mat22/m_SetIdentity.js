(function anonymous(context
) {
/*
	Index: 698
	Path:  Box2D/Common/Math/b2Mat22::m_SetIdentity
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_SetIdentity() {
        // Possible use a real "this"

        let stack0 = undefined;
        let stack1 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        //IR: PUSHSCOPE removed, reason: unused
        // unreachable
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0::col1
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
        stack0 = this.$Bgcol1;
//        stack1 = 1;// JIT: redundant assigment, value unused
        // 7 0::x
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.x = 1;
        } else {
            context.setproperty($names[0], 1, stack0);
        }
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0::col2
        //Possible type:7 0:Box2D.Common.Math::b2Vec2
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
        stack0 = this.$Bgcol2;
//        stack1 = 0;// JIT: redundant assigment, value unused
        // 7 0::x
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.x = 0;
        } else {
            context.setproperty($names[0], 0, stack0);
        }
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0::col1
        //Possible type:7 0:Box2D.Common.Math::b2Vec2
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
        stack0 = this.$Bgcol1;
//        stack1 = 0;// JIT: redundant assigment, value unused
        // 7 0::y
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.y = 0;
        } else {
            context.setproperty($names[1], 0, stack0);
        }
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0::col2
        //Possible type:7 0:Box2D.Common.Math::b2Vec2
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
        stack0 = this.$Bgcol2;
//        stack1 = 1;// JIT: redundant assigment, value unused
        // 7 0::y
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.y = 1;
        } else {
            context.setproperty($names[1], 1, stack0);
        }
        return;
    }
//# sourceURL=http://jit/Box2D/Common/Math/b2Mat22/m_SetIdentity.js
})