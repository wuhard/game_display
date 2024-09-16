(function anonymous(context
) {
/*
	Index: 332
	Path:  Box2D/Dynamics/b2Body::m_GetDefinition
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0:Box2D.Dynamics::b2BodyDef
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_GetDefinition() {
        // Possible use a real "this"
        // local1 is assigned before read, skip init
        let local1 = undefined
        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        stack0 = this;
        scope0 = context.savedScope.extend(this);
        // 7 0:Box2D.Dynamics::b2BodyDef
        stack0 = scope0.findScopeProperty($names[0], true, false);
        //JIT: Support fast construct:b2BodyDef/Object
        stack0 = context.constructFast(stack0, [], $names[0]);
        //IR: Drop coerce, reason: redundant
        local1 = stack0;
//        stack0 = local1;// JIT: redundant assigment, value unused
//        stack1 = this;// JIT: redundant assigment, value unused
        /* We sure that this safe call, represented in TRAIT as Method  */ 
        stack1 = this.$BgGetType();
        // 7 0::type
        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])){
            local1.type = stack1;
        } else {
            context.setproperty($names[1], stack1, local1);
        }
//        stack0 = local1;// JIT: redundant assigment, value unused
//        stack1 = this;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_flags
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::uint  */ 
        stack1 = this.$Bgm_flags;
        // 7 0:http://www.box2d.org/ns/b2internal::e_allowSleepFlag
        temp = scope0.findScopeProperty($names[2], true, false);
        stack2 = temp.$Bge_allowSleepFlag;
        if (stack2 === undefined || typeof stack2 === 'function') {
            stack2 = temp.axGetProperty($names[2]);
        }
        stack1 &= stack2;
        // 7 0:http://www.box2d.org/ns/b2internal::e_allowSleepFlag
        temp = scope0.findScopeProperty($names[2], true, false);
        stack2 = temp.$Bge_allowSleepFlag;
        if (stack2 === undefined || typeof stack2 === 'function') {
            stack2 = temp.axGetProperty($names[2]);
        }
        stack1 = stack1 == stack2;
        // 7 0::allowSleep
        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])){
            local1.allowSleep = stack1;
        } else {
            context.setproperty($names[3], stack1, local1);
        }
//        stack0 = local1;// JIT: redundant assigment, value unused
//        stack1 = this;// JIT: redundant assigment, value unused
        /* We sure that this safe call, represented in TRAIT as Method  */ 
        stack1 = this.$BgGetAngle();
        // 7 0::angle
        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])){
            local1.angle = stack1;
        } else {
            context.setproperty($names[4], stack1, local1);
        }
//        stack0 = local1;// JIT: redundant assigment, value unused
//        stack1 = this;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_angularDamping
        //Possible type:7 0::uint
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
        stack1 = this.$Bgm_angularDamping;
        // 7 0::angularDamping
        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])){
            local1.angularDamping = stack1;
        } else {
            context.setproperty($names[5], stack1, local1);
        }
//        stack0 = local1;// JIT: redundant assigment, value unused
//        stack1 = this;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_angularVelocity
        //Possible type:7 0::Number
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
        stack1 = this.$Bgm_angularVelocity;
        // 7 0::angularVelocity
        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])){
            local1.angularVelocity = stack1;
        } else {
            context.setproperty($names[6], stack1, local1);
        }
//        stack0 = local1;// JIT: redundant assigment, value unused
//        stack1 = this;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_flags
        //Possible type:7 0::Number
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::uint  */ 
        stack1 = this.$Bgm_flags;
        // 7 0:http://www.box2d.org/ns/b2internal::e_fixedRotationFlag
        temp = scope0.findScopeProperty($names[7], true, false);
        stack2 = temp.$Bge_fixedRotationFlag;
        if (stack2 === undefined || typeof stack2 === 'function') {
            stack2 = temp.axGetProperty($names[7]);
        }
        stack1 &= stack2;
        // 7 0:http://www.box2d.org/ns/b2internal::e_fixedRotationFlag
        temp = scope0.findScopeProperty($names[7], true, false);
        stack2 = temp.$Bge_fixedRotationFlag;
        if (stack2 === undefined || typeof stack2 === 'function') {
            stack2 = temp.axGetProperty($names[7]);
        }
        stack1 = stack1 == stack2;
        // 7 0::fixedRotation
        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])){
            local1.fixedRotation = stack1;
        } else {
            context.setproperty($names[8], stack1, local1);
        }
//        stack0 = local1;// JIT: redundant assigment, value unused
//        stack1 = this;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_flags
        //Possible type:7 0::uint
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::uint  */ 
        stack1 = this.$Bgm_flags;
        // 7 0:http://www.box2d.org/ns/b2internal::e_bulletFlag
        temp = scope0.findScopeProperty($names[9], true, false);
        stack2 = temp.$Bge_bulletFlag;
        if (stack2 === undefined || typeof stack2 === 'function') {
            stack2 = temp.axGetProperty($names[9]);
        }
        stack1 &= stack2;
        // 7 0:http://www.box2d.org/ns/b2internal::e_bulletFlag
        temp = scope0.findScopeProperty($names[9], true, false);
        stack2 = temp.$Bge_bulletFlag;
        if (stack2 === undefined || typeof stack2 === 'function') {
            stack2 = temp.axGetProperty($names[9]);
        }
        stack1 = stack1 == stack2;
        // 7 0::bullet
        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])){
            local1.bullet = stack1;
        } else {
            context.setproperty($names[10], stack1, local1);
        }
//        stack0 = local1;// JIT: redundant assigment, value unused
//        stack1 = this;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_flags
        //Possible type:7 0::uint
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::uint  */ 
        stack1 = this.$Bgm_flags;
        // 7 0:http://www.box2d.org/ns/b2internal::e_awakeFlag
        temp = scope0.findScopeProperty($names[11], true, false);
        stack2 = temp.$Bge_awakeFlag;
        if (stack2 === undefined || typeof stack2 === 'function') {
            stack2 = temp.axGetProperty($names[11]);
        }
        stack1 &= stack2;
        // 7 0:http://www.box2d.org/ns/b2internal::e_awakeFlag
        temp = scope0.findScopeProperty($names[11], true, false);
        stack2 = temp.$Bge_awakeFlag;
        if (stack2 === undefined || typeof stack2 === 'function') {
            stack2 = temp.axGetProperty($names[11]);
        }
        stack1 = stack1 == stack2;
        // 7 0::awake
        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])){
            local1.awake = stack1;
        } else {
            context.setproperty($names[12], stack1, local1);
        }
//        stack0 = local1;// JIT: redundant assigment, value unused
//        stack1 = this;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_linearDamping
        //Possible type:7 0::uint
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
        stack1 = this.$Bgm_linearDamping;
        // 7 0::linearDamping
        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])){
            local1.linearDamping = stack1;
        } else {
            context.setproperty($names[13], stack1, local1);
        }
//        stack0 = local1;// JIT: redundant assigment, value unused
        // 7 0::linearVelocity
        //Possible type:7 0:Box2D.Dynamics::b2BodyDef
        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
            stack0 = local1['linearVelocity'];
        } else {
            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
            stack0 = temp.$BglinearVelocity;
            if (stack0 === undefined || typeof stack0 === 'function') {
                stack0 = temp.axGetProperty($names[14]);
            }
        }
//        stack1 = this;// JIT: redundant assigment, value unused
        /* We sure that this safe call, represented in TRAIT as Method  */ 
        stack1 = this.$BgGetLinearVelocity();
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
                   stack0.axCallProperty($names[15], [stack1], false);
                }
            }
        }
//        stack0 = local1;// JIT: redundant assigment, value unused
//        stack1 = this;// JIT: redundant assigment, value unused
        /* We sure that this safe call, represented in TRAIT as Method  */ 
        stack1 = this.$BgGetPosition();
        // 7 0::position
        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])){
            local1.position = stack1;
        } else {
            context.setproperty($names[16], stack1, local1);
        }
//        stack0 = local1;// JIT: redundant assigment, value unused
//        stack1 = this;// JIT: redundant assigment, value unused
        /* We sure that this safe call, represented in TRAIT as Method  */ 
        stack1 = this.$BgGetUserData();
        // 7 0::userData
        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])){
            local1.userData = stack1;
        } else {
            context.setproperty($names[17], stack1, local1);
        }
        stack0 = local1;
        return local1;
    }
//# sourceURL=http://jit/Box2D/Dynamics/b2Body/m_GetDefinition.js
})