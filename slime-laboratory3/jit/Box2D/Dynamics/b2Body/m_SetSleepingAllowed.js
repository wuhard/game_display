(function anonymous(context
) {
/*
	Index: 357
	Path:  Box2D/Dynamics/b2Body::m_SetSleepingAllowed
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_SetSleepingAllowed(local1 /* Boolean */) {
        // Possible use a real "this"
        /* Force Boolean coerce */
        local1 = (!!local1);

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
                        // JIT: potential type:7 0::Boolean
                        stack0 = local1;
                        if (!local1) { p = 23; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_flags
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::uint  */ 
                        stack1 = this.$Bgm_flags;
                        // 7 0:http://www.box2d.org/ns/b2internal::e_allowSleepFlag
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack2 = temp.$Bge_allowSleepFlag;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[0]);
                        }
                        stack1 |= stack2;
                        // 7 0:http://www.box2d.org/ns/b2internal::m_flags
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::uint  */ 
                        this.$Bgm_flags = (stack1>>>0);
                        //JIT: Emit inline return
                        return;
                    case 23:
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_flags
                        //Possible type:7 0::uint
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::uint  */ 
                        stack1 = this.$Bgm_flags;
                        // 7 0:http://www.box2d.org/ns/b2internal::e_allowSleepFlag
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack2 = temp.$Bge_allowSleepFlag;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[0]);
                        }
                        stack2 = ~stack2;
                        stack1 &= stack2;
                        // 7 0:http://www.box2d.org/ns/b2internal::m_flags
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::uint  */ 
                        this.$Bgm_flags = (stack1>>>0);
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgSetAwake(true);
                    case 42:
                        return;
                    }
                }
            }
//# sourceURL=http://jit/Box2D/Dynamics/b2Body/m_SetSleepingAllowed.js
})