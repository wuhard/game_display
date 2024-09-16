(function anonymous(context
) {
/*
	Index: 112
	Path:  Box2D/Dynamics/b2World::m_CreateBody
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0:Box2D.Dynamics::b2Body
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_CreateBody(local1 /* b2BodyDef */) {
        // Possible use a real "this"
        // local2 is assigned before read, skip init
        let local2 = undefined
        // local3 is assigned before read, skip init
        let local3 = undefined
        // local4 is assigned before read, skip init
        let local4 = undefined
        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        let p = 0;
        while (true) {
            switch (p) {
                    case 0:
                        stack0 = this;
                        scope0 = context.savedScope.extend(this);
//                        stack0 = this;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        stack0 = this.$BgIsLocked();
                        stack1 = true;
                        if (true != stack0) { p = 14; continue; };
                        stack0 = null;
                        return null;
                    case 14:
                        // 7 0:Box2D.Dynamics::b2Body
                        stack0 = scope0.findScopeProperty($names[0], true, false);
//                        // JIT: potential type:7 0:Box2D.Dynamics::b2BodyDef// JIT: redundant assigment, value unused
                        stack1 = local1;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:b2Body/Object
                        stack0 = context.constructFast(stack0, [local1, this], $names[0]);
                        //IR: Drop coerce, reason: redundant
                        local2 = stack0;
//                        stack0 = local2;// JIT: redundant assigment, value unused
//                        stack1 = null;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_prev
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])){
                            local2.m_prev = null;
                        } else {
                            context.setproperty($names[1], null, local2);
                        }
//                        stack0 = local2;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_bodyList
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack1 = this.$Bgm_bodyList;
                        // 7 0:http://www.box2d.org/ns/b2internal::m_next
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])){
                            local2.m_next = stack1;
                        } else {
                            context.setproperty($names[2], stack1, local2);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_bodyList
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack0 = this.$Bgm_bodyList;
                        if (!stack0) { p = 53; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_bodyList
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack0 = this.$Bgm_bodyList;
//                        stack1 = local2;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_prev
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.m_prev = local2;
                        } else {
                            context.setproperty($names[1], local2, stack0);
                        }
                    case 53:
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = local2;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_bodyList
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:Box2D.Dynamics::b2Body  */ 
                        this.$Bgm_bodyList = local2;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        stack1 = this;
                        local3 = stack1;
                        // 7 3::m_bodyCount
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack0 = this.$Bgm_bodyCount;
                        stack0 = (stack0 | 0) + 1;
                        local4 = stack0;
//                        stack0 = local3;// JIT: redundant assigment, value unused
//                        stack1 = local4;// JIT: redundant assigment, value unused
                        // 7 3::m_bodyCount
                        if (!(local3 != undefined && local3[AX_CLASS_SYMBOL])){
                            local3.m_bodyCount = local4;
                        } else {
                            context.setproperty($names[3], local4, local3);
                        }
                        //IR: KILL removed, reason: prevent optimisation
                        //IR: KILL removed, reason: prevent optimisation
                        stack0 = local2;
                        return local2;
                    }
                }
            }
//# sourceURL=http://jit/Box2D/Dynamics/b2World/m_CreateBody.js
})