(function anonymous(context
) {
/*
	Index: 116
	Path:  Box2D/Dynamics/b2World::m_AddController
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0:Box2D.Dynamics.Controllers::b2Controller
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_AddController(local1 /* b2Controller */) {
        // Possible use a real "this"
        // local2 is assigned before read, skip init
        let local2 = undefined
        // local3 is assigned before read, skip init
        let local3 = undefined
        let stack0 = undefined;
        let stack1 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        //IR: PUSHSCOPE removed, reason: unused
        // unreachable
//        // JIT: potential type:7 0:Box2D.Dynamics.Controllers::b2Controller// JIT: redundant assigment, value unused
        stack0 = local1;
//        stack1 = this;// JIT: redundant assigment, value unused
        // 7 3::m_controllerList
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics.Controllers::b2Controller  */ 
        stack1 = this.$Bgm_controllerList;
        // 7 0:http://www.box2d.org/ns/b2internal::m_next
        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])){
            local1.m_next = stack1;
        } else {
            context.setproperty($names[0], stack1, local1);
        }
//        // JIT: potential type:7 0:Box2D.Dynamics.Controllers::b2Controller// JIT: redundant assigment, value unused
        stack0 = local1;
//        stack1 = null;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_prev
        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])){
            local1.m_prev = null;
        } else {
            context.setproperty($names[1], null, local1);
        }
//        stack0 = this;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0:Box2D.Dynamics.Controllers::b2Controller// JIT: redundant assigment, value unused
        stack1 = local1;
        // 7 3::m_controllerList
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:Box2D.Dynamics.Controllers::b2Controller  */ 
        this.$Bgm_controllerList = local1;
//        // JIT: potential type:7 0:Box2D.Dynamics.Controllers::b2Controller// JIT: redundant assigment, value unused
        stack0 = local1;
//        stack1 = this;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_world
        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])){
            local1.m_world = this;
        } else {
            context.setproperty($names[2], this, local1);
        }
//        stack0 = this;// JIT: redundant assigment, value unused
        stack1 = this;
        local2 = stack1;
        // 7 3::m_controllerCount
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
        stack0 = this.$Bgm_controllerCount;
        stack0 = (stack0 | 0) + 1;
        local3 = stack0;
//        stack0 = local2;// JIT: redundant assigment, value unused
//        stack1 = local3;// JIT: redundant assigment, value unused
        // 7 3::m_controllerCount
        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])){
            local2.m_controllerCount = local3;
        } else {
            context.setproperty($names[3], local3, local2);
        }
        //IR: KILL removed, reason: prevent optimisation
        //IR: KILL removed, reason: prevent optimisation
        // JIT: potential type:7 0:Box2D.Dynamics.Controllers::b2Controller
        stack0 = local1;
        return local1;
    }
//# sourceURL=http://jit/Box2D/Dynamics/b2World/m_AddController.js
})