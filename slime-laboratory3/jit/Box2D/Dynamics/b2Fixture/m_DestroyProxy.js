(function anonymous(context
) {
/*
	Index: 232
	Path:  Box2D/Dynamics/b2Fixture::m_DestroyProxy
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_DestroyProxy(local1 /* IBroadPhase */) {
        // Possible use a real "this"

        let stack0 = undefined;
        let stack1 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        let p = 0;
        while (true) {
            switch (p) {
                    case 0:
                        //IR: PUSHSCOPE removed, reason: unused
                        // unreachable
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_proxy
                        /* We sure that this safe get, represented in TRAIT as Slot, type: null  */ 
                        stack0 = this.$Bgm_proxy;
                        stack1 = null;
                        if (null != stack0) { p = 12; continue; };
                        return;
                    case 12:
//                        // JIT: potential type:7 0:Box2D.Collision::IBroadPhase// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_proxy
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: null  */ 
                        stack1 = this.$Bgm_proxy;
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                            local1.DestroyProxy(stack1);
                        } else {
                            // 7 0:Box2D.Collision:IBroadPhase::DestroyProxy
                            {
                                let t = local1;
                                const m = t.$BgDestroyProxy || (t = sec.box(local1), t.$BgDestroyProxy);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   local1.axCallProperty($names[0], [stack1], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = null;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_proxy
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: null  */ 
                        this.$Bgm_proxy = null;
                        return;
                    }
                }
            }
//# sourceURL=http://jit/Box2D/Dynamics/b2Fixture/m_DestroyProxy.js
})