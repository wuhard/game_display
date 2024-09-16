(function anonymous(context
) {
/*
	Index: 1670
	Path:  levels/collisions/SolidCircleCollision::constructor
	Type:  Public
	Kind:  null
	Super: levels/collisions/LevelCollision
	Return: *
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_constructor(local1 /* Level */, local2 /* Number */, local3 /* Number */, local4 /* Number */) {
        // Possible use a real "this"
        /* Force Number coerce */
        local2 = (+local2);
        /* Force Number coerce */
        local3 = (+local3);
        /* Force Number coerce */
        local4 = (+local4);
        // local5 is assigned before read, skip init
        let local5 = undefined
        // local6 is assigned before read, skip init
        let local6 = undefined
        // local7 is assigned before read, skip init
        let local7 = undefined
        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
        let stack3 = undefined;
        let stack4 = undefined;
        let stack5 = undefined;
        let stack6 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        stack0 = this;
        scope0 = context.savedScope.extend(this);
//        stack0 = null;// JIT: redundant assigment, value unused
        //JIT: SKIP_NULL_COERCE
        local5 = null;
//        stack0 = null;// JIT: redundant assigment, value unused
        //JIT: SKIP_NULL_COERCE
        local6 = null;
        stack0 = this;
//        // JIT: potential type:7 0:levels::Level// JIT: redundant assigment, value unused
        stack1 = local1;
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack2 = local2;
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack3 = local3;
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack4 = local4;
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack5 = local4;
//        stack6 = 0;// JIT: redundant assigment, value unused
        context.savedScope.superConstructor.call(this, local1, local2, local3, local4, local4, 0);
        // 7 0:Box2D.Dynamics::b2BodyDef
        stack0 = scope0.findScopeProperty($names[0], true, false);
        //JIT: Support fast construct:b2BodyDef/Object
        stack0 = context.constructFast(stack0, [], $names[0]);
        //IR: Drop coerce, reason: redundant
        stack1 = stack0;
        local5 = stack1;
        // 7 0::position
        //Possible type:7 0:Box2D.Dynamics::b2BodyDef
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
            stack0 = stack0['position'];
        } else {
            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
            stack0 = temp.$Bgposition;
            if (stack0 === undefined || typeof stack0 === 'function') {
                stack0 = temp.axGetProperty($names[1]);
            }
        }
        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
        stack1 = this.$BgxPos;
        // 7 0::Utils
        temp = scope0.findScopeProperty($names[2], true, false);
        stack2 = temp.$BgUtils;
        if (stack2 === undefined || typeof stack2 === 'function') {
            stack2 = temp.axGetProperty($names[2]);
        }
        // 7 0::m_scale
        //Possible type:7 0::Utils
        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
            stack2 = stack2['m_scale'];
        } else {
            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
            stack2 = temp.$Bgm_scale;
            if (stack2 === undefined || typeof stack2 === 'function') {
                stack2 = temp.axGetProperty($names[3]);
            }
        }
        stack1 /= stack2;
        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
        stack2 = this.$BgyPos;
        // 7 0::Utils
        temp = scope0.findScopeProperty($names[2], true, false);
        stack3 = temp.$BgUtils;
        if (stack3 === undefined || typeof stack3 === 'function') {
            stack3 = temp.axGetProperty($names[2]);
        }
        // 7 0::m_scale
        //Possible type:7 0::Utils
        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
            stack3 = stack3['m_scale'];
        } else {
            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
            stack3 = temp.$Bgm_scale;
            if (stack3 === undefined || typeof stack3 === 'function') {
                stack3 = temp.axGetProperty($names[3]);
            }
        }
        stack2 /= stack3;
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
            stack0.Set(stack1, stack2);
        } else {
            // 7 0::Set
            {
                let t = stack0;
                const m = t.$BgSet || (t = sec.box(stack0), t.$BgSet);
                if( typeof m === "function" ) { 
                    m.call(t, stack1, stack2);
                } else { 
                   stack0.axCallProperty($names[4], [stack1, stack2], false);
                }
            }
        }
        // 7 0:Box2D.Collision.Shapes::b2CircleShape
        stack0 = scope0.findScopeProperty($names[5], true, false);
        // JIT: potential type:7 0::Number
        stack1 = local4;
        // 7 0::Utils
        temp = scope0.findScopeProperty($names[2], true, false);
        stack2 = temp.$BgUtils;
        if (stack2 === undefined || typeof stack2 === 'function') {
            stack2 = temp.axGetProperty($names[2]);
        }
        // 7 0::m_scale
        //Possible type:7 0::Utils
        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
            stack2 = stack2['m_scale'];
        } else {
            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
            stack2 = temp.$Bgm_scale;
            if (stack2 === undefined || typeof stack2 === 'function') {
                stack2 = temp.axGetProperty($names[3]);
            }
        }
        stack1 /= stack2;
        //JIT: Support fast construct:b2CircleShape/b2Shape/Object
        stack0 = context.constructFast(stack0, [stack1], $names[5]);
        //IR: Drop coerce, reason: redundant
        local6 = stack0;
        // 7 0:Box2D.Dynamics::b2FixtureDef
        stack0 = scope0.findScopeProperty($names[6], true, false);
        //JIT: Support fast construct:b2FixtureDef/Object
        stack0 = context.constructFast(stack0, [], $names[6]);
        //IR: Drop coerce, reason: redundant
        stack1 = stack0;
        local7 = stack1;
//        stack1 = local6;// JIT: redundant assigment, value unused
        // 7 0::shape
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.shape = local6;
        } else {
            context.setproperty($names[7], local6, stack0);
        }
//        stack0 = local7;// JIT: redundant assigment, value unused
//        stack1 = 1;// JIT: redundant assigment, value unused
        // 7 0::friction
        if (!(local7 != undefined && local7[AX_CLASS_SYMBOL])){
            local7.friction = 1;
        } else {
            context.setproperty($names[8], 1, local7);
        }
//        stack0 = local7;// JIT: redundant assigment, value unused
//        stack1 = 0;// JIT: redundant assigment, value unused
        // 7 0::density
        if (!(local7 != undefined && local7[AX_CLASS_SYMBOL])){
            local7.density = 0;
        } else {
            context.setproperty($names[9], 0, local7);
        }
//        stack0 = local7;// JIT: redundant assigment, value unused
//        stack1 = 0.9;// JIT: redundant assigment, value unused
        // 7 0::restitution
        if (!(local7 != undefined && local7[AX_CLASS_SYMBOL])){
            local7.restitution = 0.9;
        } else {
            context.setproperty($names[10], 0.9, local7);
        }
//        stack0 = local7;// JIT: redundant assigment, value unused
        // 7 0::filter
        //Possible type:7 0:Box2D.Dynamics::b2FixtureDef
        if (!(local7 != undefined && local7[AX_CLASS_SYMBOL])) {
            stack0 = local7['filter'];
        } else {
            temp = local7[AX_CLASS_SYMBOL] ? local7 : sec.box(local7);
            stack0 = temp.$Bgfilter;
            if (stack0 === undefined || typeof stack0 === 'function') {
                stack0 = temp.axGetProperty($names[11]);
            }
        }
//        stack1 = 4;// JIT: redundant assigment, value unused
        // 7 0::categoryBits
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.categoryBits = 4;
        } else {
            context.setproperty($names[12], 4, stack0);
        }
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0::Utils
        temp = scope0.findScopeProperty($names[2], true, false);
        stack1 = temp.$BgUtils;
        if (stack1 === undefined || typeof stack1 === 'function') {
            stack1 = temp.axGetProperty($names[2]);
        }
        // 7 0::m_world
        //Possible type:7 0::Utils
        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
            stack1 = stack1['m_world'];
        } else {
            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
            stack1 = temp.$Bgm_world;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[13]);
            }
        }
//        stack2 = local5;// JIT: redundant assigment, value unused
        if (!(_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL]))) {
           stack1 = stack1.CreateBody(local5);
        } else {
            // 7 0::CreateBody
            {
                let t = stack1;
                const m = t.$BgCreateBody || (t = sec.box(stack1), t.$BgCreateBody);
                if( typeof m === "function" ) { 
                    stack1 = t.$BgCreateBody (local5);
                } else { 
                    stack1 = stack1.axCallProperty($names[14], [local5], false);
                }
            }
        }
        // 7 2:levels.collisions::body
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:Box2D.Dynamics::b2Body  */ 
        this.$Bgbody = stack1;
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 2:levels.collisions::body
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
        stack0 = this.$Bgbody;
//        stack1 = local7;// JIT: redundant assigment, value unused
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
            stack0.CreateFixture(local7);
        } else {
            // 7 0::CreateFixture
            {
                let t = stack0;
                const m = t.$BgCreateFixture || (t = sec.box(stack0), t.$BgCreateFixture);
                if( typeof m === "function" ) { 
                    m.call(t, local7);
                } else { 
                   stack0.axCallProperty($names[15], [local7], false);
                }
            }
        }
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 2:levels.collisions::body
        //Possible type:7 0:Box2D.Dynamics::b2Body
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
        stack0 = this.$Bgbody;
        // 7 0:levels::UserData
        stack1 = scope0.findScopeProperty($names[16], true, false);
//        stack2 = false;// JIT: redundant assigment, value unused
        //JIT: Support fast construct:UserData/Object
        stack1 = context.constructFast(stack1, [false], $names[16]);
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
            stack0.SetUserData(stack1);
        } else {
            // 7 0::SetUserData
            {
                let t = stack0;
                const m = t.$BgSetUserData || (t = sec.box(stack0), t.$BgSetUserData);
                if( typeof m === "function" ) { 
                    m.call(t, stack1);
                } else { 
                   stack0.axCallProperty($names[17], [stack1], false);
                }
            }
        }
        return;
    }
//# sourceURL=http://jit/levels/collisions/SolidCircleCollision/constructor.js
})