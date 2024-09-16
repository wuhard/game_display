(function anonymous(context
) {
/*
	Index: 1627
	Path:  levels/collisions/LaserCollision::constructor
	Type:  Public
	Kind:  null
	Super: levels/collisions/LevelCollision
	Return: *
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_constructor(local1 /* Level */, local2 /* Number */, local3 /* Number */, local4 /* Number */, local5 /* Number */, local6 /* Number */) {
        // Possible use a real "this"
        /* Force Number coerce */
        local2 = (+local2);
        /* Force Number coerce */
        local3 = (+local3);
        /* Force Number coerce */
        local4 = (+local4);
        /* Force Number coerce */
        local5 = (+local5);
        /* Force Number coerce */
        local6 = (+local6);
        // local7 is assigned before read, skip init
        let local7 = undefined
        // local8 is assigned before read, skip init
        let local8 = undefined
        // local9 is assigned before read, skip init
        let local9 = undefined
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
                        local7 = null;
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local8 = null;
                        stack0 = 16;
                        stack0 = +16;
                        local4 = stack0;
                        stack0 = 2;
                        stack0 = +2;
                        local5 = stack0;
                        stack0 = this;
//                        // JIT: potential type:7 0:levels::Level// JIT: redundant assigment, value unused
                        stack1 = local1;
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack2 = local2;
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack3 = local3;
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack4 = local4;
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack5 = local5;
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack6 = local6;
                        context.savedScope.superConstructor.call(this, local1, local2, local3, local4, local5, local6);
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::pauseTime
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgpauseTime = false;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 0::pauseCounter
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: null  */ 
                        this.$BgpauseCounter = 0;
                        // 7 0::laserSpriteContainer
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BglaserSpriteContainer;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
                        stack1 = null;
                        if (null != stack0) { p = 95; continue; };
                        // 7 0::laserSpriteContainer
                        stack0 = scope0.findScopeProperty($names[0], false, false);
                        // 7 0::LaserSpriteContainer
                        stack1 = scope0.findScopeProperty($names[1], true, false);
                        stack1 = context.constructprop($names[1], stack1, []);
                        // 7 0::laserSpriteContainer
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.laserSpriteContainer = stack1;
                        } else {
                            context.setproperty($names[0], stack1, stack0);
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[2], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[2]);
                        }
                        // 7 0::world
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['world'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgworld;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
                        // 7 0::laserSpriteContainer
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack1 = temp.$BglaserSpriteContainer;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[0]);
                        }
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
                                   stack0.axCallProperty($names[4], [stack1], false);
                                }
                            }
                        }
                        // 7 0::laserSpriteContainer
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BglaserSpriteContainer;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 0::x
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.x = 0;
                        } else {
                            context.setproperty($names[5], 0, stack0);
                        }
                        // 7 0::laserSpriteContainer
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BglaserSpriteContainer;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 0::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = 0;
                        } else {
                            context.setproperty($names[6], 0, stack0);
                        }
                    case 95:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::LaserParticleSprite
                        stack1 = scope0.findScopeProperty($names[7], true, false);
                        stack1 = context.constructprop($names[7], stack1, []);
                        // 7 0::laserParticleSprite
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::LaserParticleSprite  */ 
                        this.$BglaserParticleSprite = stack1;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[2], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[2]);
                        }
                        // 7 0::world
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['world'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgworld;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::laserParticleSprite
                        //Possible type:7 0::LaserParticleSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::LaserParticleSprite  */ 
                        stack1 = this.$BglaserParticleSprite;
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
                                   stack0.axCallProperty($names[4], [stack1], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 45;// JIT: redundant assigment, value unused
                        // 7 0::currentAngle
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$BgcurrentAngle = 45;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::clockwiseRotation
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgclockwiseRotation = true;
                        // 7 0:Box2D.Dynamics::b2BodyDef
                        stack0 = scope0.findScopeProperty($names[8], true, false);
                        //JIT: Support fast construct:b2BodyDef/Object
                        stack0 = context.constructFast(stack0, [], $names[8]);
                        //IR: Drop coerce, reason: redundant
                        stack1 = stack0;
                        local7 = stack1;
                        // 7 0::position
                        //Possible type:7 0:Box2D.Dynamics::b2BodyDef
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['position'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgposition;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[9]);
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
                                stack2 = temp.axGetProperty($names[10]);
                            }
                        }
                        stack1 /= stack2;
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack2 = this.$BgyPos;
//                        stack3 = 4;// JIT: redundant assigment, value unused
                        stack2 += 4;
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
                                stack3 = temp.axGetProperty($names[10]);
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
                                   stack0.axCallProperty($names[11], [stack1, stack2], false);
                                }
                            }
                        }
                        // 7 0:Box2D.Collision.Shapes::b2PolygonShape
                        stack0 = scope0.findScopeProperty($names[12], true, false);
                        //JIT: Support fast construct:b2PolygonShape/b2Shape/Object
                        stack0 = context.constructFast(stack0, [], $names[12]);
                        //IR: Drop coerce, reason: redundant
                        stack1 = stack0;
                        local8 = stack1;
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack1 = this.$Bgwidth;
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
                                stack2 = temp.axGetProperty($names[10]);
                            }
                        }
                        stack1 /= stack2;
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack2 = this.$Bgheight;
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
                                stack3 = temp.axGetProperty($names[10]);
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
                        local9 = stack1;
//                        stack1 = local8;// JIT: redundant assigment, value unused
                        // 7 0::shape
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.shape = local8;
                        } else {
                            context.setproperty($names[16], local8, stack0);
                        }
//                        stack0 = local9;// JIT: redundant assigment, value unused
//                        stack1 = 1;// JIT: redundant assigment, value unused
                        // 7 0::friction
                        if (!(local9 != undefined && local9[AX_CLASS_SYMBOL])){
                            local9.friction = 1;
                        } else {
                            context.setproperty($names[17], 1, local9);
                        }
//                        stack0 = local9;// JIT: redundant assigment, value unused
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 0::density
                        if (!(local9 != undefined && local9[AX_CLASS_SYMBOL])){
                            local9.density = 0;
                        } else {
                            context.setproperty($names[18], 0, local9);
                        }
//                        stack0 = local9;// JIT: redundant assigment, value unused
//                        stack1 = 0.9;// JIT: redundant assigment, value unused
                        // 7 0::restitution
                        if (!(local9 != undefined && local9[AX_CLASS_SYMBOL])){
                            local9.restitution = 0.9;
                        } else {
                            context.setproperty($names[19], 0.9, local9);
                        }
//                        stack0 = local9;// JIT: redundant assigment, value unused
                        // 7 0::filter
                        //Possible type:7 0:Box2D.Dynamics::b2FixtureDef
                        if (!(local9 != undefined && local9[AX_CLASS_SYMBOL])) {
                            stack0 = local9['filter'];
                        } else {
                            temp = local9[AX_CLASS_SYMBOL] ? local9 : sec.box(local9);
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
                                stack1 = temp.axGetProperty($names[22]);
                            }
                        }
//                        stack2 = local7;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL]))) {
                           stack1 = stack1.CreateBody(local7);
                        } else {
                            // 7 0::CreateBody
                            {
                                let t = stack1;
                                const m = t.$BgCreateBody || (t = sec.box(stack1), t.$BgCreateBody);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$BgCreateBody (local7);
                                } else { 
                                    stack1 = stack1.axCallProperty($names[23], [local7], false);
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
//                        stack1 = local9;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.CreateFixture(local9);
                        } else {
                            // 7 0::CreateFixture
                            {
                                let t = stack0;
                                const m = t.$BgCreateFixture || (t = sec.box(stack0), t.$BgCreateFixture);
                                if( typeof m === "function" ) { 
                                    m.call(t, local9);
                                } else { 
                                   stack0.axCallProperty($names[24], [local9], false);
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
                        // 7 0::LaserSprite
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
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack1 = local2;
                        // 7 0::x
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.x = local2;
                        } else {
                            context.setproperty($names[5], local2, stack0);
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BglevelCollisionSprite;
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack1 = local3;
                        // 7 0::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = local3;
                        } else {
                            context.setproperty($names[6], local3, stack0);
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[2], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[2]);
                        }
                        // 7 0::world
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['world'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgworld;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
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
                                   stack0.axCallProperty($names[4], [stack1], false);
                                }
                            }
                        }
                        return;
                    }
                }
            }
//# sourceURL=http://jit/levels/collisions/LaserCollision/constructor.js
})