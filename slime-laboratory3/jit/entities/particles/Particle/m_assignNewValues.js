(function anonymous(context
) {
/*
	Index: 921
	Path:  entities/particles/Particle::m_assignNewValues
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_assignNewValues(local1 /* MovieClip */, local2 /* Number */, local3 /* Number */, local4 /* Number */, local5 /* Number */, local6 /* Number */) {
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
        // local10 is assigned before read, skip init
        let local10 = undefined
        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
        let stack3 = undefined;
        let stack4 = undefined;
        let stack5 = undefined;
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
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local9 = null;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
//                        stack2 = this;// JIT: redundant assigment, value unused
//                        stack3 = this;// JIT: redundant assigment, value unused
//                        stack4 = 0;// JIT: redundant assigment, value unused
                        //IR: DUP changed to PUSH*, reason: prevent optimisation
//                        stack5 = 0;// JIT: redundant assigment, value unused
                        local10 = 0;
                        // 7 0::foo4
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$Bgfoo4 = 0;
                        stack3 = local10;
                        //IR: KILL removed, reason: prevent optimisation
                        stack4 = local10;
                        local10 = stack4;
                        // 7 0::foo3
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$Bgfoo3 = (+stack3);
                        stack2 = local10;
                        //IR: KILL removed, reason: prevent optimisation
                        stack3 = local10;
                        local10 = stack3;
                        // 7 0::foo2
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$Bgfoo2 = (+stack2);
//                        stack1 = local10;// JIT: redundant assigment, value unused
                        //IR: KILL removed, reason: prevent optimisation
                        // 7 0::foo
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$Bgfoo = (+local10);
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgparticleSprite;
                        stack1 = null;
                        if (null == stack0) { p = 70; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgremoveSprite();
                    case 70:
                        // JIT: potential type:7 0:flash.display::MovieClip
                        stack0 = local1;
                        stack1 = null;
                        if (null == local1) { p = 95; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack1 = local1;
                        // 7 0::particleSprite
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:flash.display::MovieClip  */ 
                        this.$BgparticleSprite = local1;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::world
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['world'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgworld;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[1]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack1 = this.$BgparticleSprite;
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
                                   stack0.axCallProperty($names[2], [stack1], false);
                                }
                            }
                        }
                    case 95:
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack1 = local2;
                        // 7 0::xPos
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$BgxPos = (+local2);
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack1 = local3;
                        // 7 0::yPos
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$BgyPos = (+local3);
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::xPos
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack1 = this.$BgxPos;
                        // 7 0::originalXPos
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: null  */ 
                        this.$BgoriginalXPos = stack1;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::yPos
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack1 = this.$BgyPos;
                        // 7 0::originalYPos
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$BgoriginalYPos = (+stack1);
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack1 = local4;
                        // 7 0::xVel
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$BgxVel = (+local4);
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack1 = local5;
                        // 7 0::yVel
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$BgyVel = (+local5);
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack1 = local6;
                        // 7 0::friction
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$Bgfriction = (+local6);
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::dead
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$Bgdead = false;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgparticleSprite;
                        // 7 0::BubbleParticleSprite
                        temp = scope0.findScopeProperty($names[3], true, false);
                        stack1 = temp.$BgBubbleParticleSprite;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[3]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 168; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::xPos
                        //Possible type:7 0::BubbleParticleSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack1 = this.$BgxPos;
                        // 7 0::foo
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$Bgfoo = (+stack1);
                        //JIT: Emit inline return
                        return;
                    case 168:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgparticleSprite;
                        // 7 0::Glass1ParticleSprite
                        temp = scope0.findScopeProperty($names[4], true, false);
                        stack1 = temp.$BgGlass1ParticleSprite;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[4]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        stack1 = stack0;
                        if (stack1) { p = 190; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgparticleSprite;
                        // 7 0::Glass2ParticleSprite
                        temp = scope0.findScopeProperty($names[5], true, false);
                        stack1 = temp.$BgGlass2ParticleSprite;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[5]);
                        }
                        stack0 = stack1.axIsType(stack0);
                    case 190:
                        stack1 = stack0;
                        if (stack1) { p = 204; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgparticleSprite;
                        // 7 0::Glass3ParticleSprite
                        temp = scope0.findScopeProperty($names[6], true, false);
                        stack1 = temp.$BgGlass3ParticleSprite;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[6]);
                        }
                        stack0 = stack1.axIsType(stack0);
                    case 204:
                        stack1 = stack0;
                        if (stack1) { p = 218; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgparticleSprite;
                        // 7 0::WaterParticleSprite
                        temp = scope0.findScopeProperty($names[7], true, false);
                        stack1 = temp.$BgWaterParticleSprite;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[7]);
                        }
                        stack0 = stack1.axIsType(stack0);
                    case 218:
                        //JIT: Emit inline return
                        if (!stack0) { return; }
                        // 7 0:Box2D.Dynamics::b2BodyDef
                        stack0 = scope0.findScopeProperty($names[8], true, false);
                        //JIT: Support fast construct:b2BodyDef/Object
                        stack0 = context.constructFast(stack0, [], $names[8]);
                        //IR: Drop coerce, reason: redundant
                        stack1 = stack0;
                        local7 = stack1;
                        // 7 0:Box2D.Dynamics::b2Body
                        temp = scope0.findScopeProperty($names[9], true, false);
                        stack1 = temp.$Bgb2Body;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[9]);
                        }
                        // 7 0::b2_dynamicBody
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['b2_dynamicBody'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgb2_dynamicBody;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[10]);
                            }
                        }
                        // 7 0::type
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.type = stack1;
                        } else {
                            context.setproperty($names[11], stack1, stack0);
                        }
//                        stack0 = local7;// JIT: redundant assigment, value unused
                        // 7 0::position
                        //Possible type:7 0:Box2D.Dynamics::b2BodyDef
                        if (!(local7 != undefined && local7[AX_CLASS_SYMBOL])) {
                            stack0 = local7['position'];
                        } else {
                            temp = local7[AX_CLASS_SYMBOL] ? local7 : sec.box(local7);
                            stack0 = temp.$Bgposition;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[12]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::xPos
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack1 = this.$BgxPos;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack2 = temp.$BgUtils;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['m_scale'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgm_scale;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[13]);
                            }
                        }
                        stack1 /= stack2;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0::yPos
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack2 = this.$BgyPos;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack3 = temp.$BgUtils;
                        if (stack3 === undefined || typeof stack3 === 'function') {
                            stack3 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['m_scale'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgm_scale;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[13]);
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
                                   stack0.axCallProperty($names[14], [stack1, stack2], false);
                                }
                            }
                        }
//                        stack0 = local7;// JIT: redundant assigment, value unused
//                        stack1 = 2;// JIT: redundant assigment, value unused
                        // 7 0::linearDamping
                        if (!(local7 != undefined && local7[AX_CLASS_SYMBOL])){
                            local7.linearDamping = 2;
                        } else {
                            context.setproperty($names[15], 2, local7);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgparticleSprite;
                        // 7 0::WaterParticleSprite
                        temp = scope0.findScopeProperty($names[7], true, false);
                        stack1 = temp.$BgWaterParticleSprite;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[7]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 312; continue; };
                        // 7 0:Box2D.Collision.Shapes::b2CircleShape
                        stack0 = scope0.findScopeProperty($names[16], true, false);
                        stack1 = 1;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack2 = temp.$BgUtils;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['m_scale'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgm_scale;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[13]);
                            }
                        }
                        stack1 /= stack2;
                        //JIT: Support fast construct:b2CircleShape/b2Shape/Object
                        stack0 = context.constructFast(stack0, [stack1], $names[16]);
                        //IR: Drop coerce, reason: redundant
                        local8 = stack0;
                        { p = 330; continue; };
                    case 312:
                        // 7 0:Box2D.Collision.Shapes::b2CircleShape
                        stack0 = scope0.findScopeProperty($names[16], true, false);
                        stack1 = 4;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack2 = temp.$BgUtils;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['m_scale'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgm_scale;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[13]);
                            }
                        }
                        stack1 /= stack2;
                        //JIT: Support fast construct:b2CircleShape/b2Shape/Object
                        stack0 = context.constructFast(stack0, [stack1], $names[16]);
                        //IR: Drop coerce, reason: redundant
                        local8 = stack0;
                    case 330:
                        // 7 0:Box2D.Dynamics::b2FixtureDef
                        stack0 = scope0.findScopeProperty($names[17], true, false);
                        //JIT: Support fast construct:b2FixtureDef/Object
                        stack0 = context.constructFast(stack0, [], $names[17]);
                        //IR: Drop coerce, reason: redundant
                        stack1 = stack0;
                        local9 = stack1;
                        // 7 0::filter
                        //Possible type:7 0:Box2D.Dynamics::b2FixtureDef
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['filter'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgfilter;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[18]);
                            }
                        }
//                        stack1 = 4;// JIT: redundant assigment, value unused
                        // 7 0::categoryBits
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.categoryBits = 4;
                        } else {
                            context.setproperty($names[19], 4, stack0);
                        }
//                        stack0 = local9;// JIT: redundant assigment, value unused
                        // 7 0::filter
                        if (!(local9 != undefined && local9[AX_CLASS_SYMBOL])) {
                            stack0 = local9['filter'];
                        } else {
                            temp = local9[AX_CLASS_SYMBOL] ? local9 : sec.box(local9);
                            stack0 = temp.$Bgfilter;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[18]);
                            }
                        }
//                        stack1 = 4;// JIT: redundant assigment, value unused
                        // 7 0::maskBits
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.maskBits = 4;
                        } else {
                            context.setproperty($names[20], 4, stack0);
                        }
//                        stack0 = local9;// JIT: redundant assigment, value unused
//                        stack1 = local8;// JIT: redundant assigment, value unused
                        // 7 0::shape
                        if (!(local9 != undefined && local9[AX_CLASS_SYMBOL])){
                            local9.shape = local8;
                        } else {
                            context.setproperty($names[21], local8, local9);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack1 = temp.$BgUtils;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[0]);
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
                        // 7 0::body
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:Box2D.Dynamics::b2Body  */ 
                        this.$Bgbody = stack1;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::body
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
                        // 7 0::body
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
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::body
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack0 = this.$Bgbody;
                        // 7 0:Box2D.Common.Math::b2Vec2
                        stack1 = scope0.findScopeProperty($names[27], true, false);
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0::xVel
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack2 = this.$BgxVel;
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 0::yVel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack3 = this.$BgyVel;
                        //JIT: Support fast construct:b2Vec2/Object
                        stack1 = context.constructFast(stack1, [stack2, stack3], $names[27]);
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0::body
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack2 = this.$Bgbody;
                        if (!(_a = typeof stack2, ((_a !== 'object' && _a !== 'function' ) || stack2 == null || stack2[AX_CLASS_SYMBOL]))) {
                           stack2 = stack2.GetPosition();
                        } else {
                            // 7 0::GetPosition
                            {
                                let t = stack2;
                                const m = t.$BgGetPosition || (t = sec.box(stack2), t.$BgGetPosition);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BgGetPosition ();
                                } else { 
                                    stack2 = stack2.axCallProperty($names[28], [], false);
                                }
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.ApplyImpulse(stack1, stack2);
                        } else {
                            // 7 0::ApplyImpulse
                            {
                                let t = stack0;
                                const m = t.$BgApplyImpulse || (t = sec.box(stack0), t.$BgApplyImpulse);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1, stack2);
                                } else { 
                                   stack0.axCallProperty($names[29], [stack1, stack2], false);
                                }
                            }
                        }
                    case 436:
                        return;
                    }
                }
            }
//# sourceURL=http://jit/entities/particles/Particle/m_assignNewValues.js
})