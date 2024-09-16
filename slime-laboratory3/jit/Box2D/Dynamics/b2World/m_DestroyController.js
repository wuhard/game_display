(function anonymous(context
) {
/*
	Index: 119
	Path:  Box2D/Dynamics/b2World::m_DestroyController
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_DestroyController(local1 /* b2Controller */) {
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

        
        let p = 0;
        while (true) {
            switch (p) {
                    case 0:
                        //IR: PUSHSCOPE removed, reason: unused
                        // unreachable
//                        // JIT: potential type:7 0:Box2D.Dynamics.Controllers::b2Controller// JIT: redundant assigment, value unused
                        stack0 = local1;
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                            local1.Clear();
                        } else {
                            // 7 0::Clear
                            {
                                let t = local1;
                                const m = t.$BgClear || (t = sec.box(local1), t.$BgClear);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   local1.axCallProperty($names[0], [], false);
                                }
                            }
                        }
//                        // JIT: potential type:7 0:Box2D.Dynamics.Controllers::b2Controller// JIT: redundant assigment, value unused
                        stack0 = local1;
                        // 7 0:http://www.box2d.org/ns/b2internal::m_next
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack0 = local1['m_next'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack0 = temp.$Bgm_next;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[1]);
                            }
                        }
                        if (!stack0) { p = 26; continue; };
//                        // JIT: potential type:7 0:Box2D.Dynamics.Controllers::b2Controller// JIT: redundant assigment, value unused
                        stack0 = local1;
                        // 7 0:http://www.box2d.org/ns/b2internal::m_next
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack0 = local1['m_next'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack0 = temp.$Bgm_next;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[1]);
                            }
                        }
//                        // JIT: potential type:7 0:Box2D.Dynamics.Controllers::b2Controller// JIT: redundant assigment, value unused
                        stack1 = local1;
                        // 7 0:http://www.box2d.org/ns/b2internal::m_prev
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack1 = local1['m_prev'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack1 = temp.$Bgm_prev;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[2]);
                            }
                        }
                        // 7 0:http://www.box2d.org/ns/b2internal::m_prev
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.m_prev = stack1;
                        } else {
                            context.setproperty($names[2], stack1, stack0);
                        }
                    case 26:
//                        // JIT: potential type:7 0:Box2D.Dynamics.Controllers::b2Controller// JIT: redundant assigment, value unused
                        stack0 = local1;
                        // 7 0:http://www.box2d.org/ns/b2internal::m_prev
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack0 = local1['m_prev'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack0 = temp.$Bgm_prev;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
                        if (!stack0) { p = 45; continue; };
//                        // JIT: potential type:7 0:Box2D.Dynamics.Controllers::b2Controller// JIT: redundant assigment, value unused
                        stack0 = local1;
                        // 7 0:http://www.box2d.org/ns/b2internal::m_prev
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack0 = local1['m_prev'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack0 = temp.$Bgm_prev;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
//                        // JIT: potential type:7 0:Box2D.Dynamics.Controllers::b2Controller// JIT: redundant assigment, value unused
                        stack1 = local1;
                        // 7 0:http://www.box2d.org/ns/b2internal::m_next
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack1 = local1['m_next'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack1 = temp.$Bgm_next;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[1]);
                            }
                        }
                        // 7 0:http://www.box2d.org/ns/b2internal::m_next
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.m_next = stack1;
                        } else {
                            context.setproperty($names[1], stack1, stack0);
                        }
                    case 45:
                        // JIT: potential type:7 0:Box2D.Dynamics.Controllers::b2Controller
                        stack0 = local1;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 3::m_controllerList
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics.Controllers::b2Controller  */ 
                        stack1 = this.$Bgm_controllerList;
                        if (stack1 != local1) { p = 62; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:Box2D.Dynamics.Controllers::b2Controller// JIT: redundant assigment, value unused
                        stack1 = local1;
                        // 7 0:http://www.box2d.org/ns/b2internal::m_next
                        //Possible type:7 0:Box2D.Dynamics.Controllers::b2Controller
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack1 = local1['m_next'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack1 = temp.$Bgm_next;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[1]);
                            }
                        }
                        // 7 3::m_controllerList
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:Box2D.Dynamics.Controllers::b2Controller  */ 
                        this.$Bgm_controllerList = stack1;
                    case 62:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        stack1 = this;
                        local2 = stack1;
                        // 7 3::m_controllerCount
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack0 = this.$Bgm_controllerCount;
                        stack0 = (stack0 | 0) - 1;
                        local3 = stack0;
//                        stack0 = local2;// JIT: redundant assigment, value unused
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        // 7 3::m_controllerCount
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])){
                            local2.m_controllerCount = local3;
                        } else {
                            context.setproperty($names[3], local3, local2);
                        }
                        //IR: KILL removed, reason: prevent optimisation
                        //IR: KILL removed, reason: prevent optimisation
                        return;
                    }
                }
            }
//# sourceURL=http://jit/Box2D/Dynamics/b2World/m_DestroyController.js
})