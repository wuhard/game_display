(function anonymous(context
) {
/*
	Index: 1646
	Path:  levels/collisions/TickTockCollision::constructor
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

        
        let p = 0;
        while (true) {
            switch (p) {
                    case 0:
                        stack0 = this;
                        scope0 = context.savedScope.extend(this);
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local5 = null;
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local6 = null;
                        stack0 = this;
//                        // JIT: potential type:7 0:levels::Level// JIT: redundant assigment, value unused
                        stack1 = local1;
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack2 = local2;
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack3 = local3;
//                        stack4 = 24;// JIT: redundant assigment, value unused
//                        stack5 = 8;// JIT: redundant assigment, value unused
//                        stack6 = 0;// JIT: redundant assigment, value unused
                        context.savedScope.superConstructor.call(this, local1, local2, local3, 24, 8, 0);
                        // 7 0::originalXPos
                        stack0 = scope0.findScopeProperty($names[0], false, false);
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack1 = local2;
                        // 7 0::originalXPos
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.originalXPos = local2;
                        } else {
                            context.setproperty($names[0], local2, stack0);
                        }
                        // 7 0::originalYPos
                        stack0 = scope0.findScopeProperty($names[1], false, false);
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack1 = local3;
                        // 7 0::originalYPos
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.originalYPos = local3;
                        } else {
                            context.setproperty($names[1], local3, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 2:levels.collisions::IS_VISIBLE
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgIS_VISIBLE = true;
                        // JIT: potential type:7 0::Number
                        stack0 = local4;
                        stack1 = 0;
                        if (0 != local4) { p = 60; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 2:levels.collisions::IS_TICK
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgIS_TICK = true;
                        { p = 65; continue; };
                    case 60:
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 2:levels.collisions::IS_TICK
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgIS_TICK = false;
                    case 65:
                        // 7 0:Box2D.Dynamics::b2BodyDef
                        stack0 = scope0.findScopeProperty($names[2], true, false);
                        //JIT: Support fast construct:b2BodyDef/Object
                        stack0 = context.constructFast(stack0, [], $names[2]);
                        //IR: Drop coerce, reason: redundant
                        stack1 = stack0;
                        local5 = stack1;
                        // 7 0:Box2D.Dynamics::b2Body
                        temp = scope0.findScopeProperty($names[3], true, false);
                        stack1 = temp.$Bgb2Body;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[3]);
                        }
                        // 7 0::b2_staticBody
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['b2_staticBody'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgb2_staticBody;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[4]);
                            }
                        }
                        // 7 0::type
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.type = stack1;
                        } else {
                            context.setproperty($names[5], stack1, stack0);
                        }
//                        stack0 = local5;// JIT: redundant assigment, value unused
                        // 7 0::position
                        //Possible type:7 0:Box2D.Dynamics::b2BodyDef
                        if (!(local5 != undefined && local5[AX_CLASS_SYMBOL])) {
                            stack0 = local5['position'];
                        } else {
                            temp = local5[AX_CLASS_SYMBOL] ? local5 : sec.box(local5);
                            stack0 = temp.$Bgposition;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[6]);
                            }
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack1 = this.$BgxPos;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[7], true, false);
                        stack2 = temp.$BgUtils;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[7]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['m_scale'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgm_scale;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[8]);
                            }
                        }
                        stack1 /= stack2;
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack2 = this.$BgyPos;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[7], true, false);
                        stack3 = temp.$BgUtils;
                        if (stack3 === undefined || typeof stack3 === 'function') {
                            stack3 = temp.axGetProperty($names[7]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['m_scale'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgm_scale;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[8]);
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
                                   stack0.axCallProperty($names[9], [stack1, stack2], false);
                                }
                            }
                        }
//                        stack0 = local5;// JIT: redundant assigment, value unused
//                        stack1 = 0.5;// JIT: redundant assigment, value unused
                        // 7 0::linearDamping
                        if (!(local5 != undefined && local5[AX_CLASS_SYMBOL])){
                            local5.linearDamping = 0.5;
                        } else {
                            context.setproperty($names[10], 0.5, local5);
                        }
//                        stack0 = local5;// JIT: redundant assigment, value unused
//                        stack1 = 0.1;// JIT: redundant assigment, value unused
                        // 7 0::angularDamping
                        if (!(local5 != undefined && local5[AX_CLASS_SYMBOL])){
                            local5.angularDamping = 0.1;
                        } else {
                            context.setproperty($names[11], 0.1, local5);
                        }
                        // 7 0:Box2D.Collision.Shapes::b2PolygonShape
                        stack0 = scope0.findScopeProperty($names[12], true, false);
                        //JIT: Support fast construct:b2PolygonShape/b2Shape/Object
                        stack0 = context.constructFast(stack0, [], $names[12]);
                        //IR: Drop coerce, reason: redundant
                        stack1 = stack0;
                        local6 = stack1;
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack1 = this.$Bgwidth;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[7], true, false);
                        stack2 = temp.$BgUtils;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[7]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['m_scale'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgm_scale;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[8]);
                            }
                        }
                        stack1 /= stack2;
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack2 = this.$Bgheight;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[7], true, false);
                        stack3 = temp.$BgUtils;
                        if (stack3 === undefined || typeof stack3 === 'function') {
                            stack3 = temp.axGetProperty($names[7]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['m_scale'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgm_scale;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[8]);
                            }
                        }
                        stack2 /= stack3;
                        // 7 0:Box2D.Common.Math::b2Vec2
                        stack3 = scope0.findScopeProperty($names[13], true, false);
//                        stack4 = 0;// JIT: redundant assigment, value unused
                        //IR: DUP changed to PUSH*, reason: prevent optimisation
//                        stack5 = 0;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:b2Vec2/Object
                        stack3 = context.constructFast(stack3, [0, 0], $names[13]);
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack4 = this.$Bgrotation;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.SetAsOrientedBox(stack1, stack2, stack3, stack4);
                        } else {
                            // 7 0::SetAsOrientedBox
                            {
                                let t = stack0;
                                const m = t.$BgSetAsOrientedBox || (t = sec.box(stack0), t.$BgSetAsOrientedBox);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1, stack2, stack3, stack4);
                                } else { 
                                   stack0.axCallProperty($names[14], [stack1, stack2, stack3, stack4], false);
                                }
                            }
                        }
                        // 7 0:Box2D.Dynamics::b2FixtureDef
                        stack0 = scope0.findScopeProperty($names[15], true, false);
                        //JIT: Support fast construct:b2FixtureDef/Object
                        stack0 = context.constructFast(stack0, [], $names[15]);
                        //IR: Drop coerce, reason: redundant
                        stack1 = stack0;
                        local7 = stack1;
//                        stack1 = local6;// JIT: redundant assigment, value unused
                        // 7 0::shape
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.shape = local6;
                        } else {
                            context.setproperty($names[16], local6, stack0);
                        }
//                        stack0 = local7;// JIT: redundant assigment, value unused
//                        stack1 = 1;// JIT: redundant assigment, value unused
                        // 7 0::friction
                        if (!(local7 != undefined && local7[AX_CLASS_SYMBOL])){
                            local7.friction = 1;
                        } else {
                            context.setproperty($names[17], 1, local7);
                        }
//                        stack0 = local7;// JIT: redundant assigment, value unused
//                        stack1 = 1;// JIT: redundant assigment, value unused
                        // 7 0::density
                        if (!(local7 != undefined && local7[AX_CLASS_SYMBOL])){
                            local7.density = 1;
                        } else {
                            context.setproperty($names[18], 1, local7);
                        }
//                        stack0 = local7;// JIT: redundant assigment, value unused
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 0::restitution
                        if (!(local7 != undefined && local7[AX_CLASS_SYMBOL])){
                            local7.restitution = 0;
                        } else {
                            context.setproperty($names[19], 0, local7);
                        }
//                        stack0 = local7;// JIT: redundant assigment, value unused
                        // 7 0::filter
                        //Possible type:7 0:Box2D.Dynamics::b2FixtureDef
                        if (!(local7 != undefined && local7[AX_CLASS_SYMBOL])) {
                            stack0 = local7['filter'];
                        } else {
                            temp = local7[AX_CLASS_SYMBOL] ? local7 : sec.box(local7);
                            stack0 = temp.$Bgfilter;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[20]);
                            }
                        }
//                        stack1 = 4;// JIT: redundant assigment, value unused
                        // 7 0::categoryBits
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.categoryBits = 4;
                        } else {
                            context.setproperty($names[21], 4, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[7], true, false);
                        stack1 = temp.$BgUtils;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[7]);
                        }
                        // 7 0::m_world
                        //Possible type:7 0::Utils
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['m_world'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgm_world;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[22]);
                            }
                        }
//                        stack2 = local5;// JIT: redundant assigment, value unused
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
                                    stack1 = stack1.axCallProperty($names[23], [local5], false);
                                }
                            }
                        }
                        // 7 2:levels.collisions::body
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:Box2D.Dynamics::b2Body  */ 
                        this.$Bgbody = stack1;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 2:levels.collisions::body
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack0 = this.$Bgbody;
//                        stack1 = local7;// JIT: redundant assigment, value unused
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
                                   stack0.axCallProperty($names[24], [local7], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 2:levels.collisions::body
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack0 = this.$Bgbody;
                        // 7 0:levels::UserData
                        stack1 = scope0.findScopeProperty($names[25], true, false);
//                        stack2 = false;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:UserData/Object
                        stack1 = context.constructFast(stack1, [false], $names[25]);
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
                                   stack0.axCallProperty($names[26], [stack1], false);
                                }
                            }
                        }
                        // 7 0::levelCollisionSprite
                        stack0 = scope0.findScopeProperty($names[27], false, false);
                        // 7 0::TickTockPlatformSprite
                        stack1 = scope0.findScopeProperty($names[28], true, false);
                        stack1 = context.constructprop($names[28], stack1, []);
                        // 7 0::levelCollisionSprite
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.levelCollisionSprite = stack1;
                        } else {
                            context.setproperty($names[27], stack1, stack0);
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BglevelCollisionSprite;
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack1 = this.$BgxPos;
                        // 7 0::x
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.x = stack1;
                        } else {
                            context.setproperty($names[29], stack1, stack0);
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BglevelCollisionSprite;
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack1 = this.$BgyPos;
                        // 7 0::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = stack1;
                        } else {
                            context.setproperty($names[30], stack1, stack0);
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[7], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[7]);
                        }
                        // 7 0::world
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['world'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgworld;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[31]);
                            }
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack1 = this.$BglevelCollisionSprite;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.addChild(stack1);
                        } else {
                            // 7 0::addChild
                            {
                                let t = stack0;
                                const m = t.$BgaddChild || (t = sec.box(stack0), t.$BgaddChild);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[32], [stack1], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 2:levels.collisions::IS_TICK
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgIS_TICK;
                        if (!stack0) { p = 324; continue; };
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BglevelCollisionSprite;
//                        stack1 = 1;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.gotoAndStop(1);
                        } else {
                            // 7 0::gotoAndStop
                            {
                                let t = stack0;
                                const m = t.$BggotoAndStop || (t = sec.box(stack0), t.$BggotoAndStop);
                                if( typeof m === "function" ) { 
                                    m.call(t, 1);
                                } else { 
                                   stack0.axCallProperty($names[33], [1], false);
                                }
                            }
                        }
                        //JIT: Emit inline return
                        return;
                    case 324:
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BglevelCollisionSprite;
//                        stack1 = 2;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.gotoAndStop(2);
                        } else {
                            // 7 0::gotoAndStop
                            {
                                let t = stack0;
                                const m = t.$BggotoAndStop || (t = sec.box(stack0), t.$BggotoAndStop);
                                if( typeof m === "function" ) { 
                                    m.call(t, 2);
                                } else { 
                                   stack0.axCallProperty($names[33], [2], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgswitchTickTock(true);
                    case 339:
                        return;
                    }
                }
            }
//# sourceURL=http://jit/levels/collisions/TickTockCollision/constructor.js
})