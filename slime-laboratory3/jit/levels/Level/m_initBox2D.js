(function anonymous(context
) {
/*
	Index: 168
	Path:  levels/Level::m_initBox2D
	Type:  Protected
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_initBox2D() {
        // Possible use a real "this"
        // local1 is assigned before read, skip init
        let local1 = undefined
        // local2 is assigned before read, skip init
        let local2 = undefined
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
        // 7 0:Box2D.Common.Math::b2Vec2
        stack0 = scope0.findScopeProperty($names[0], true, false);
//        stack1 = 0;// JIT: redundant assigment, value unused
//        stack2 = 15;// JIT: redundant assigment, value unused
        //JIT: Support fast construct:b2Vec2/Object
        stack0 = context.constructFast(stack0, [0, 15], $names[0]);
        //IR: Drop coerce, reason: redundant
        local1 = stack0;
//        stack0 = true;// JIT: redundant assigment, value unused
        local2 = true;
        // 7 0::Utils
        temp = scope0.findScopeProperty($names[1], true, false);
        stack0 = temp.$BgUtils;
        if (stack0 === undefined || typeof stack0 === 'function') {
            stack0 = temp.axGetProperty($names[1]);
        }
        // 7 0:Box2D.Dynamics::b2World
        stack1 = scope0.findScopeProperty($names[2], true, false);
//        stack2 = local1;// JIT: redundant assigment, value unused
//        stack3 = local2;// JIT: redundant assigment, value unused
        //JIT: Support fast construct:b2World/Object
        stack1 = context.constructFast(stack1, [local1, local2], $names[2]);
        // 7 0::m_world
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.m_world = stack1;
        } else {
            context.setproperty($names[3], stack1, stack0);
        }
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0:levels::ContactListener
        stack1 = scope0.findScopeProperty($names[4], true, false);
//        stack2 = this;// JIT: redundant assigment, value unused
        //JIT: Support fast construct:ContactListener/b2ContactListener/Object
        stack1 = context.constructFast(stack1, [this], $names[4]);
        // 7 0::cListener
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:levels::ContactListener  */ 
        this.$BgcListener = stack1;
        // 7 0::Utils
        temp = scope0.findScopeProperty($names[1], true, false);
        stack0 = temp.$BgUtils;
        if (stack0 === undefined || typeof stack0 === 'function') {
            stack0 = temp.axGetProperty($names[1]);
        }
        // 7 0::m_world
        //Possible type:7 0::Utils
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
            stack0 = stack0['m_world'];
        } else {
            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
            stack0 = temp.$Bgm_world;
            if (stack0 === undefined || typeof stack0 === 'function') {
                stack0 = temp.axGetProperty($names[3]);
            }
        }
//        stack1 = this;// JIT: redundant assigment, value unused
        // 7 0::cListener
        //Possible type:7 0:levels::ContactListener
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::ContactListener  */ 
        stack1 = this.$BgcListener;
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
            stack0.SetContactListener(stack1);
        } else {
            // 7 0::SetContactListener
            {
                let t = stack0;
                const m = t.$BgSetContactListener || (t = sec.box(stack0), t.$BgSetContactListener);
                if( typeof m === "function" ) { 
                    m.call(t, stack1);
                } else { 
                   stack0.axCallProperty($names[5], [stack1], false);
                }
            }
        }
        return;
    }
//# sourceURL=http://jit/levels/Level/m_initBox2D.js
})