(function anonymous(context
) {
/*
	Index: 300
	Path:  Box2D/Common/Math/b2Sweep::m_Copy
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0:Box2D.Common.Math::b2Sweep
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_Copy() {
        // Possible use a real "this"
        // local1 is assigned before read, skip init
        let local1 = undefined
        let stack0 = undefined;
        let stack1 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        stack0 = this;
        scope0 = context.savedScope.extend(this);
        // 7 0:Box2D.Common.Math::b2Sweep
        stack0 = scope0.findScopeProperty($names[0], true, false);
        //JIT: Support fast construct:b2Sweep/Object
        stack0 = context.constructFast(stack0, [], $names[0]);
        //IR: Drop coerce, reason: redundant
        local1 = stack0;
//        stack0 = local1;// JIT: redundant assigment, value unused
        // 7 0::localCenter
        //Possible type:7 0:Box2D.Common.Math::b2Sweep
        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
            stack0 = local1['localCenter'];
        } else {
            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
            stack0 = temp.$BglocalCenter;
            if (stack0 === undefined || typeof stack0 === 'function') {
                stack0 = temp.axGetProperty($names[1]);
            }
        }
//        stack1 = this;// JIT: redundant assigment, value unused
        // 7 0::localCenter
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
        stack1 = this.$BglocalCenter;
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
            stack0.SetV(stack1);
        } else {
            // 7 0::SetV
            {
                let t = stack0;
                const m = t.$BgSetV || (t = sec.box(stack0), t.$BgSetV);
                if( typeof m === "function" ) { 
                    m.call(t, stack1);
                } else { 
                   stack0.axCallProperty($names[2], [stack1], false);
                }
            }
        }
//        stack0 = local1;// JIT: redundant assigment, value unused
        // 7 0::c0
        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
            stack0 = local1['c0'];
        } else {
            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
            stack0 = temp.$Bgc0;
            if (stack0 === undefined || typeof stack0 === 'function') {
                stack0 = temp.axGetProperty($names[3]);
            }
        }
//        stack1 = this;// JIT: redundant assigment, value unused
        // 7 0::c0
        //Possible type:7 0:Box2D.Common.Math::b2Vec2
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
        stack1 = this.$Bgc0;
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
            stack0.SetV(stack1);
        } else {
            // 7 0::SetV
            {
                let t = stack0;
                const m = t.$BgSetV || (t = sec.box(stack0), t.$BgSetV);
                if( typeof m === "function" ) { 
                    m.call(t, stack1);
                } else { 
                   stack0.axCallProperty($names[2], [stack1], false);
                }
            }
        }
//        stack0 = local1;// JIT: redundant assigment, value unused
        // 7 0::c
        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
            stack0 = local1['c'];
        } else {
            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
            stack0 = temp.$Bgc;
            if (stack0 === undefined || typeof stack0 === 'function') {
                stack0 = temp.axGetProperty($names[4]);
            }
        }
//        stack1 = this;// JIT: redundant assigment, value unused
        // 7 0::c
        //Possible type:7 0:Box2D.Common.Math::b2Vec2
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
        stack1 = this.$Bgc;
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
            stack0.SetV(stack1);
        } else {
            // 7 0::SetV
            {
                let t = stack0;
                const m = t.$BgSetV || (t = sec.box(stack0), t.$BgSetV);
                if( typeof m === "function" ) { 
                    m.call(t, stack1);
                } else { 
                   stack0.axCallProperty($names[2], [stack1], false);
                }
            }
        }
//        stack0 = local1;// JIT: redundant assigment, value unused
//        stack1 = this;// JIT: redundant assigment, value unused
        // 7 0::a0
        //Possible type:7 0:Box2D.Common.Math::b2Vec2
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
        stack1 = this.$Bga0;
        // 7 0::a0
        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])){
            local1.a0 = stack1;
        } else {
            context.setproperty($names[5], stack1, local1);
        }
//        stack0 = local1;// JIT: redundant assigment, value unused
//        stack1 = this;// JIT: redundant assigment, value unused
        // 7 0::a
        //Possible type:7 0::Number
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
        stack1 = this.$Bga;
        // 7 0::a
        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])){
            local1.a = stack1;
        } else {
            context.setproperty($names[6], stack1, local1);
        }
//        stack0 = local1;// JIT: redundant assigment, value unused
//        stack1 = this;// JIT: redundant assigment, value unused
        // 7 0::t0
        //Possible type:7 0::Number
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
        stack1 = this.$Bgt0;
        // 7 0::t0
        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])){
            local1.t0 = stack1;
        } else {
            context.setproperty($names[7], stack1, local1);
        }
        stack0 = local1;
        return local1;
    }
//# sourceURL=http://jit/Box2D/Common/Math/b2Sweep/m_Copy.js
})