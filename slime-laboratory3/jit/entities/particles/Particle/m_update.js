(function anonymous(context
) {
/*
	Index: 919
	Path:  entities/particles/Particle::m_update
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;

             /* e */
             const __Math = context.getTopLevel(16)['$BgMath']; // :Math
             const flash_geom__Point_def = context.getTopLevel(42); // flash.geom:Point

    return function compiled_m_update(local1 /* Hero */) {
        // Possible use a real "this"
        // local2 is assigned before read, skip init
        let local2 = undefined
        // local3 is assigned before read, skip init
        let local3 = undefined
        // local4 is assigned before read, skip init
        let local4 = undefined
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
                        local2 = null;
//                        stack0 = NaN;// JIT: redundant assigment, value unused
                        local3 = NaN;
//                        stack0 = NaN;// JIT: redundant assigment, value unused
                        local4 = NaN;
//                        stack0 = NaN;// JIT: redundant assigment, value unused
                        local5 = NaN;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::xVel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack1 = this.$BgxVel;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0::friction
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack2 = this.$Bgfriction;
                        stack1 *= stack2;
                        // 7 0::xVel
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$BgxVel = (+stack1);
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::yVel
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack1 = this.$BgyVel;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0::friction
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack2 = this.$Bgfriction;
                        stack1 *= stack2;
                        // 7 0::yVel
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$BgyVel = (+stack1);
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::xPos
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack1 = this.$BgxPos;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0::xVel
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack2 = this.$BgxVel;
                        stack1 += stack2;
                        // 7 0::xPos
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$BgxPos = (+stack1);
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::yPos
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack1 = this.$BgyPos;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0::yVel
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack2 = this.$BgyVel;
                        stack1 += stack2;
                        // 7 0::yPos
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$BgyPos = (+stack1);
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgparticleSprite;
                        // 7 0::PointStringParticle
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack1 = temp.$BgPointStringParticle;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[0]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 109; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::yPos
                        //Possible type:7 0::PointStringParticle
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack1 = this.$BgyPos;
                        stack1--;
                        // 7 0::yPos
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$BgyPos = (+stack1);
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgparticleSprite;
                        // 7 0::currentFrame
                        //Possible type:7 0:flash.display::MovieClip
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['currentFrame'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgcurrentFrame;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[1]);
                            }
                        }
                        stack1 = 45;
                        if (45 != stack0) { p = 105; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::dead
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$Bgdead = true;
                    case 105:
                        //JIT: Emit inline return
                        return;
                    case 109:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgparticleSprite;
                        // 7 0::IceSmokeParticleSprite
                        temp = scope0.findScopeProperty($names[2], true, false);
                        stack1 = temp.$BgIceSmokeParticleSprite;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[2]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        stack1 = stack0;
                        if (stack1) { p = 131; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgparticleSprite;
                        // 7 0::SnowSmokeParticleSprite
                        temp = scope0.findScopeProperty($names[3], true, false);
                        stack1 = temp.$BgSnowSmokeParticleSprite;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[3]);
                        }
                        stack0 = stack1.axIsType(stack0);
                    case 131:
                        stack1 = stack0;
                        if (stack1) { p = 145; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgparticleSprite;
                        // 7 0::IceSmokeParticleSprite2
                        temp = scope0.findScopeProperty($names[4], true, false);
                        stack1 = temp.$BgIceSmokeParticleSprite2;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[4]);
                        }
                        stack0 = stack1.axIsType(stack0);
                    case 145:
                        if (!stack0) { p = 171; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgparticleSprite;
                        // 7 0::currentFrame
                        //Possible type:7 0:flash.display::MovieClip
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['currentFrame'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgcurrentFrame;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[1]);
                            }
                        }
                        stack1 = 20;
                        if (20 != stack0) { p = 167; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::dead
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$Bgdead = true;
                    case 167:
                        //JIT: Emit inline return
                        return;
                    case 171:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgparticleSprite;
                        // 7 0::YellowSlimeParticle
                        temp = scope0.findScopeProperty($names[5], true, false);
                        stack1 = temp.$BgYellowSlimeParticle;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[5]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 242; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::yVel
                        //Possible type:7 0::YellowSlimeParticle
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack1 = this.$BgyVel;
//                        stack2 = 0.6;// JIT: redundant assigment, value unused
                        stack1 += 0.6;
                        // 7 0::yVel
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$BgyVel = (+stack1);
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::level
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack0 = this.$Bglevel;
                        // 7 0::hero
                        //Possible type:7 0:levels::Level
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['hero'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bghero;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[6]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::xPos
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
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
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0::yPos
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
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
//                        stack3 = true;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.GetBody(stack1, stack2, true);
                        } else {
                            // 7 0::GetBody
                            {
                                let t = stack0;
                                const m = t.$BgGetBody || (t = sec.box(stack0), t.$BgGetBody);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetBody (stack1, stack2, true);
                                } else { 
                                    stack0 = stack0.axCallProperty($names[9], [stack1, stack2, true], false);
                                }
                            }
                        }
                        stack1 = null;
                        if (null == stack0) { p = 238; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::dead
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$Bgdead = true;
                    case 238:
                        //JIT: Emit inline return
                        return;
                    case 242:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgparticleSprite;
                        // 7 0::AvalancheSnowParticleSprite
                        temp = scope0.findScopeProperty($names[10], true, false);
                        stack1 = temp.$BgAvalancheSnowParticleSprite;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[10]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 291; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::yPos
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack0 = this.$BgyPos;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::level
                        //Possible type:7 0::AvalancheSnowParticleSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack1 = this.$Bglevel;
                        // 7 0::camera
                        //Possible type:7 0:levels::Level
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['camera'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgcamera;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[11]);
                            }
                        }
                        // 7 0::y
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['y'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgy;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[12]);
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[7], true, false);
                        stack2 = temp.$BgUtils;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[7]);
                        }
                        // 7 0::WIDTH
                        //Possible type:7 0::Utils
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['WIDTH'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$BgWIDTH;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[13]);
                            }
                        }
                        stack1 += stack2;
//                        stack2 = 16;// JIT: redundant assigment, value unused
                        stack1 += 16;
                        if (!(stack1 <= stack0)) { p = 287; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::dead
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$Bgdead = true;
                    case 287:
                        //JIT: Emit inline return
                        return;
                    case 291:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgparticleSprite;
                        // 7 0::YellowSlimeWallParticleSprite
                        temp = scope0.findScopeProperty($names[14], true, false);
                        stack1 = temp.$BgYellowSlimeWallParticleSprite;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[14]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 325; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgparticleSprite;
                        // 7 0::currentFrame
                        //Possible type:7 0:flash.display::MovieClip
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['currentFrame'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgcurrentFrame;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[1]);
                            }
                        }
                        stack1 = 17;
                        if (17 != stack0) { p = 321; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::dead
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$Bgdead = true;
                    case 321:
                        //JIT: Emit inline return
                        return;
                    case 325:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgparticleSprite;
                        // 7 0::NoGravityParticleSprite
                        temp = scope0.findScopeProperty($names[15], true, false);
                        stack1 = temp.$BgNoGravityParticleSprite;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[15]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 450; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::foo2
                        //Possible type:7 0::NoGravityParticleSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack1 = this.$Bgfoo2;
//                        stack2 = 0.4;// JIT: redundant assigment, value unused
                        stack1 += 0.4;
                        // 7 0::foo2
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$Bgfoo2 = (+stack1);
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::originalXPos
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: null  */ 
                        stack1 = this.$BgoriginalXPos;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack2 = __Math;// JIT: redundant assigment, value unused
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 0::foo2
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack3 = this.$Bgfoo2;
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack2 = __Math.sin(stack3);
                        } else {
                            // 7 0::sin
                            {
                                let t = __Math;
                                const m = t.$Bgsin || (t = sec.box(__Math), t.$Bgsin);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$Bgsin (stack3);
                                } else { 
                                    stack2 = __Math.axCallProperty($names[17], [stack3], false);
                                }
                            }
                        }
//                        stack3 = 20;// JIT: redundant assigment, value unused
                        stack2 *= 20;
                        stack1 += stack2;
                        // 7 0::xPos
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$BgxPos = (+stack1);
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::yVel
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack0 = this.$BgyVel;
                        stack1 = 0;
                        if (!(0 < stack0)) { p = 405; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::yPos
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack0 = this.$BgyPos;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::originalYPos
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack1 = this.$BgoriginalYPos;
//                        stack2 = 80;// JIT: redundant assigment, value unused
                        stack1 += 80;
                        if (!(stack1 <= stack0)) { p = 401; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::dead
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$Bgdead = true;
                    case 401:
                        { p = 425; continue; };
                    case 405:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::yPos
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack0 = this.$BgyPos;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::originalYPos
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack1 = this.$BgoriginalYPos;
//                        stack2 = 80;// JIT: redundant assigment, value unused
                        stack1 -= 80;
                        if (!(stack1 >= stack0)) { p = 425; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::dead
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$Bgdead = true;
                    case 425:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgparticleSprite;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack1 = __Math;// JIT: redundant assigment, value unused
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0::foo2
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack2 = this.$Bgfoo2;
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack1 = __Math.cos(stack2);
                        } else {
                            // 7 0::cos
                            {
                                let t = __Math;
                                const m = t.$Bgcos || (t = sec.box(__Math), t.$Bgcos);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$Bgcos (stack2);
                                } else { 
                                    stack1 = __Math.axCallProperty($names[18], [stack2], false);
                                }
                            }
                        }
//                        stack2 = 1;// JIT: redundant assigment, value unused
                        stack1 += 1;
                        // 7 0::alpha
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.alpha = stack1;
                        } else {
                            context.setproperty($names[19], stack1, stack0);
                        }
                        //JIT: Emit inline return
                        return;
                    case 450:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgparticleSprite;
                        // 7 0::SteamSmokeSprite
                        temp = scope0.findScopeProperty($names[20], true, false);
                        stack1 = temp.$BgSteamSmokeSprite;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[20]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 547; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        stack1 = this;
                        local6 = stack1;
                        // 7 0::foo2
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack0 = this.$Bgfoo2;
                        stack0 = +stack0;
                        stack1 = stack0;
                        stack1--;
                        local7 = stack1;
//                        stack1 = local6;// JIT: redundant assigment, value unused
//                        stack2 = local7;// JIT: redundant assigment, value unused
                        // 7 0::foo2
                        if (!(local6 != undefined && local6[AX_CLASS_SYMBOL])){
                            local6.foo2 = local7;
                        } else {
                            context.setproperty($names[21], local7, local6);
                        }
                        //IR: KILL removed, reason: prevent optimisation
                        //IR: KILL removed, reason: prevent optimisation
                        stack1 = 0;
                        if (!(0 > stack0)) { p = 543; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgparticleSprite;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack1 = this.$BgparticleSprite;
                        // 7 0::alpha
                        //Possible type:7 0:flash.display::MovieClip
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['alpha'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgalpha;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[19]);
                            }
                        }
//                        stack2 = 0.1;// JIT: redundant assigment, value unused
                        stack1 -= 0.1;
                        // 7 0::alpha
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.alpha = stack1;
                        } else {
                            context.setproperty($names[19], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgparticleSprite;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack1 = this.$BgparticleSprite;
                        // 9 {3, 0, 0:levels, 0:flash.geom, 3, 0:entities.particles, 2:entities.particles, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:entities, 1:entities.particles:Particle, 5:entities.particles:Particle}::scale
                        //Possible type:7 0:flash.display::MovieClip
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['scale'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgscale;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[22]);
                            }
                        }
//                        stack2 = 0.1;// JIT: redundant assigment, value unused
                        stack1 += 0.1;
                        // 9 {3, 0, 0:levels, 0:flash.geom, 3, 0:entities.particles, 2:entities.particles, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:entities, 1:entities.particles:Particle, 5:entities.particles:Particle}::scale
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.scale = stack1;
                        } else {
                            context.setproperty($names[22], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgparticleSprite;
                        // 7 0::alpha
                        //Possible type:7 0:flash.display::MovieClip
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['alpha'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgalpha;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[19]);
                            }
                        }
                        stack1 = 0;
                        if (!(0 >= stack0)) { p = 543; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::dead
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$Bgdead = true;
                    case 543:
                        //JIT: Emit inline return
                        return;
                    case 547:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgparticleSprite;
                        // 7 0::SnowParticleSprite
                        temp = scope0.findScopeProperty($names[23], true, false);
                        stack1 = temp.$BgSnowParticleSprite;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[23]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 708; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 0::xVel
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$BgxVel = 0;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::foo
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack1 = this.$Bgfoo;
//                        stack2 = 0.05;// JIT: redundant assigment, value unused
                        stack1 += 0.05;
                        // 7 0::foo
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$Bgfoo = (+stack1);
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::foo4
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack0 = this.$Bgfoo4;
                        stack1 = 50;
                        if (!(50 < stack0)) { p = 615; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::originalXPos
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: null  */ 
                        stack1 = this.$BgoriginalXPos;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack2 = __Math;// JIT: redundant assigment, value unused
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 0::foo
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack3 = this.$Bgfoo;
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack2 = __Math.sin(stack3);
                        } else {
                            // 7 0::sin
                            {
                                let t = __Math;
                                const m = t.$Bgsin || (t = sec.box(__Math), t.$Bgsin);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$Bgsin (stack3);
                                } else { 
                                    stack2 = __Math.axCallProperty($names[17], [stack3], false);
                                }
                            }
                        }
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 0::foo2
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack3 = this.$Bgfoo2;
                        stack2 *= stack3;
                        stack1 += stack2;
                        // 7 0::xPos
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$BgxPos = (+stack1);
                        { p = 640; continue; };
                    case 615:
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::originalXPos
                        //Possible type:null
                        /* We sure that this safe get, represented in TRAIT as Slot, type: null  */ 
                        stack1 = this.$BgoriginalXPos;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack2 = __Math;// JIT: redundant assigment, value unused
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 0::foo
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack3 = this.$Bgfoo;
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack2 = __Math.cos(stack3);
                        } else {
                            // 7 0::cos
                            {
                                let t = __Math;
                                const m = t.$Bgcos || (t = sec.box(__Math), t.$Bgcos);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$Bgcos (stack3);
                                } else { 
                                    stack2 = __Math.axCallProperty($names[18], [stack3], false);
                                }
                            }
                        }
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 0::foo2
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack3 = this.$Bgfoo2;
                        stack2 *= stack3;
                        stack1 += stack2;
                        // 7 0::xPos
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$BgxPos = (+stack1);
                    case 640:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        stack1 = this;
                        local6 = stack1;
                        // 7 0::foo3
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack0 = this.$Bgfoo3;
                        stack0 = +stack0;
                        stack1 = stack0;
                        stack1--;
                        local7 = stack1;
//                        stack1 = local6;// JIT: redundant assigment, value unused
//                        stack2 = local7;// JIT: redundant assigment, value unused
                        // 7 0::foo3
                        if (!(local6 != undefined && local6[AX_CLASS_SYMBOL])){
                            local6.foo3 = local7;
                        } else {
                            context.setproperty($names[24], local7, local6);
                        }
                        //IR: KILL removed, reason: prevent optimisation
                        //IR: KILL removed, reason: prevent optimisation
                        stack1 = 0;
                        if (!(0 > stack0)) { p = 704; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgparticleSprite;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack1 = this.$BgparticleSprite;
                        // 7 0::alpha
                        //Possible type:7 0:flash.display::MovieClip
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['alpha'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgalpha;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[19]);
                            }
                        }
//                        stack2 = 0.05;// JIT: redundant assigment, value unused
                        stack1 -= 0.05;
                        // 7 0::alpha
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.alpha = stack1;
                        } else {
                            context.setproperty($names[19], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgparticleSprite;
                        // 7 0::alpha
                        //Possible type:7 0:flash.display::MovieClip
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['alpha'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgalpha;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[19]);
                            }
                        }
                        stack1 = 0;
                        if (!(0 >= stack0)) { p = 704; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::dead
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$Bgdead = true;
                    case 704:
                        //JIT: Emit inline return
                        return;
                    case 708:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgparticleSprite;
                        // 7 0::TinyIceParticleSprite
                        temp = scope0.findScopeProperty($names[25], true, false);
                        stack1 = temp.$BgTinyIceParticleSprite;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[25]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 788; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        stack1 = this;
                        local6 = stack1;
                        // 7 0::foo
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack0 = this.$Bgfoo;
                        stack0 = +stack0;
                        stack1 = stack0;
                        stack1--;
                        local7 = stack1;
//                        stack1 = local6;// JIT: redundant assigment, value unused
//                        stack2 = local7;// JIT: redundant assigment, value unused
                        // 7 0::foo
                        if (!(local6 != undefined && local6[AX_CLASS_SYMBOL])){
                            local6.foo = local7;
                        } else {
                            context.setproperty($names[26], local7, local6);
                        }
                        //IR: KILL removed, reason: prevent optimisation
                        //IR: KILL removed, reason: prevent optimisation
                        stack1 = 0;
                        if (!(0 > stack0)) { p = 784; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgparticleSprite;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack1 = this.$BgparticleSprite;
                        // 7 0::alpha
                        //Possible type:7 0:flash.display::MovieClip
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['alpha'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgalpha;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[19]);
                            }
                        }
//                        stack2 = 0.1;// JIT: redundant assigment, value unused
                        stack1 -= 0.1;
                        // 7 0::alpha
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.alpha = stack1;
                        } else {
                            context.setproperty($names[19], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgparticleSprite;
                        // 7 0::alpha
                        //Possible type:7 0:flash.display::MovieClip
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['alpha'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgalpha;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[19]);
                            }
                        }
                        stack1 = 0;
                        if (!(0 >= stack0)) { p = 784; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::dead
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$Bgdead = true;
                    case 784:
                        //JIT: Emit inline return
                        return;
                    case 788:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgparticleSprite;
                        // 7 0::WaterParticleSprite
                        temp = scope0.findScopeProperty($names[27], true, false);
                        stack1 = temp.$BgWaterParticleSprite;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[27]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 928; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::body
                        //Possible type:7 0::WaterParticleSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack1 = this.$Bgbody;
                        if (!(_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL]))) {
                           stack1 = stack1.GetPosition();
                        } else {
                            // 7 0::GetPosition
                            {
                                let t = stack1;
                                const m = t.$BgGetPosition || (t = sec.box(stack1), t.$BgGetPosition);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$BgGetPosition ();
                                } else { 
                                    stack1 = stack1.axCallProperty($names[28], [], false);
                                }
                            }
                        }
                        // 7 0::x
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['x'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[29]);
                            }
                        }
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
                        stack1 *= stack2;
                        // 7 0::xPos
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$BgxPos = (+stack1);
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::body
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack1 = this.$Bgbody;
                        if (!(_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL]))) {
                           stack1 = stack1.GetPosition();
                        } else {
                            // 7 0::GetPosition
                            {
                                let t = stack1;
                                const m = t.$BgGetPosition || (t = sec.box(stack1), t.$BgGetPosition);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$BgGetPosition ();
                                } else { 
                                    stack1 = stack1.axCallProperty($names[28], [], false);
                                }
                            }
                        }
                        // 7 0::y
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['y'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgy;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[12]);
                            }
                        }
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
                        stack1 *= stack2;
                        // 7 0::yPos
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$BgyPos = (+stack1);
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::body
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack1 = this.$Bgbody;
                        if (!(_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL]))) {
                           stack1 = stack1.GetLinearVelocity();
                        } else {
                            // 7 0::GetLinearVelocity
                            {
                                let t = stack1;
                                const m = t.$BgGetLinearVelocity || (t = sec.box(stack1), t.$BgGetLinearVelocity);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$BgGetLinearVelocity ();
                                } else { 
                                    stack1 = stack1.axCallProperty($names[30], [], false);
                                }
                            }
                        }
                        // 7 0::x
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['x'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[29]);
                            }
                        }
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
                        stack1 *= stack2;
                        // 7 0::xVel
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$BgxVel = (+stack1);
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::body
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack1 = this.$Bgbody;
                        if (!(_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL]))) {
                           stack1 = stack1.GetLinearVelocity();
                        } else {
                            // 7 0::GetLinearVelocity
                            {
                                let t = stack1;
                                const m = t.$BgGetLinearVelocity || (t = sec.box(stack1), t.$BgGetLinearVelocity);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$BgGetLinearVelocity ();
                                } else { 
                                    stack1 = stack1.axCallProperty($names[30], [], false);
                                }
                            }
                        }
                        // 7 0::y
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['y'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgy;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[12]);
                            }
                        }
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
                        stack1 *= stack2;
                        // 7 0::yVel
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$BgyVel = (+stack1);
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::yVel
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack0 = this.$BgyVel;
                        stack1 = 0;
                        stack0 = stack0 <= 0;
                        stack1 = stack0;
                        if (stack1) { p = 915; continue; };
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack0 = __Math;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::xVel
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack1 = this.$BgxVel;
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack0 = __Math.abs(stack1);
                        } else {
                            // 7 0::abs
                            {
                                let t = __Math;
                                const m = t.$Bgabs || (t = sec.box(__Math), t.$Bgabs);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$Bgabs (stack1);
                                } else { 
                                    stack0 = __Math.axCallProperty($names[31], [stack1], false);
                                }
                            }
                        }
                        stack1 = 0.1;
                        stack0 = stack0 > 0.1;
                    case 915:
                        if (!stack0) { p = 924; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::dead
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$Bgdead = true;
                    case 924:
                        //JIT: Emit inline return
                        return;
                    case 928:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        //Possible type:7 0::Math
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgparticleSprite;
                        // 7 0::Glass1ParticleSprite
                        temp = scope0.findScopeProperty($names[32], true, false);
                        stack1 = temp.$BgGlass1ParticleSprite;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[32]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        stack1 = stack0;
                        if (stack1) { p = 950; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgparticleSprite;
                        // 7 0::Glass2ParticleSprite
                        temp = scope0.findScopeProperty($names[33], true, false);
                        stack1 = temp.$BgGlass2ParticleSprite;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[33]);
                        }
                        stack0 = stack1.axIsType(stack0);
                    case 950:
                        stack1 = stack0;
                        if (stack1) { p = 964; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgparticleSprite;
                        // 7 0::Glass3ParticleSprite
                        temp = scope0.findScopeProperty($names[34], true, false);
                        stack1 = temp.$BgGlass3ParticleSprite;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[34]);
                        }
                        stack0 = stack1.axIsType(stack0);
                    case 964:
                        if (!stack0) { p = 1360; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::body
                        //Possible type:7 0::Glass3ParticleSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack1 = this.$Bgbody;
                        if (!(_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL]))) {
                           stack1 = stack1.GetPosition();
                        } else {
                            // 7 0::GetPosition
                            {
                                let t = stack1;
                                const m = t.$BgGetPosition || (t = sec.box(stack1), t.$BgGetPosition);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$BgGetPosition ();
                                } else { 
                                    stack1 = stack1.axCallProperty($names[28], [], false);
                                }
                            }
                        }
                        // 7 0::x
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['x'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[29]);
                            }
                        }
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
                        stack1 *= stack2;
                        // 7 0::xPos
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$BgxPos = (+stack1);
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::body
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack1 = this.$Bgbody;
                        if (!(_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL]))) {
                           stack1 = stack1.GetPosition();
                        } else {
                            // 7 0::GetPosition
                            {
                                let t = stack1;
                                const m = t.$BgGetPosition || (t = sec.box(stack1), t.$BgGetPosition);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$BgGetPosition ();
                                } else { 
                                    stack1 = stack1.axCallProperty($names[28], [], false);
                                }
                            }
                        }
                        // 7 0::y
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['y'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgy;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[12]);
                            }
                        }
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
                        stack1 *= stack2;
                        // 7 0::yPos
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$BgyPos = (+stack1);
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::body
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack1 = this.$Bgbody;
                        if (!(_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL]))) {
                           stack1 = stack1.GetLinearVelocity();
                        } else {
                            // 7 0::GetLinearVelocity
                            {
                                let t = stack1;
                                const m = t.$BgGetLinearVelocity || (t = sec.box(stack1), t.$BgGetLinearVelocity);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$BgGetLinearVelocity ();
                                } else { 
                                    stack1 = stack1.axCallProperty($names[30], [], false);
                                }
                            }
                        }
                        // 7 0::x
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['x'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[29]);
                            }
                        }
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
                        stack1 *= stack2;
                        // 7 0::xVel
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$BgxVel = (+stack1);
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::body
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack1 = this.$Bgbody;
                        if (!(_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL]))) {
                           stack1 = stack1.GetLinearVelocity();
                        } else {
                            // 7 0::GetLinearVelocity
                            {
                                let t = stack1;
                                const m = t.$BgGetLinearVelocity || (t = sec.box(stack1), t.$BgGetLinearVelocity);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$BgGetLinearVelocity ();
                                } else { 
                                    stack1 = stack1.axCallProperty($names[30], [], false);
                                }
                            }
                        }
                        // 7 0::y
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['y'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgy;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[12]);
                            }
                        }
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
                        stack1 *= stack2;
                        // 7 0::yVel
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$BgyVel = (+stack1);
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack0 = __Math;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::xVel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack1 = this.$BgxVel;
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack0 = __Math.abs(stack1);
                        } else {
                            // 7 0::abs
                            {
                                let t = __Math;
                                const m = t.$Bgabs || (t = sec.box(__Math), t.$Bgabs);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$Bgabs (stack1);
                                } else { 
                                    stack0 = __Math.axCallProperty($names[31], [stack1], false);
                                }
                            }
                        }
                        stack1 = 1;
                        stack0 = stack0 > 1;
                        stack1 = stack0;
                        if (stack1) { p = 1090; continue; };
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack0 = __Math;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::yVel
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack1 = this.$BgyVel;
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack0 = __Math.abs(stack1);
                        } else {
                            // 7 0::abs
                            {
                                let t = __Math;
                                const m = t.$Bgabs || (t = sec.box(__Math), t.$Bgabs);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$Bgabs (stack1);
                                } else { 
                                    stack0 = __Math.axCallProperty($names[31], [stack1], false);
                                }
                            }
                        }
                        stack1 = 1;
                        stack0 = stack0 > 1;
                    case 1090:
                        if (!stack0) { p = 1312; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        //Possible type:7 0::Math
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgparticleSprite;
                        // 7 0::currentFrame
                        //Possible type:7 0:flash.display::MovieClip
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['currentFrame'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgcurrentFrame;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[1]);
                            }
                        }
                        stack1 = 1;
                        if (1 != stack0) { p = 1204; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        stack1 = this;
                        local6 = stack1;
                        // 7 0::foo
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack0 = this.$Bgfoo;
                        stack0 = +stack0;
                        stack1 = stack0;
                        stack1--;
                        local7 = stack1;
//                        stack1 = local6;// JIT: redundant assigment, value unused
//                        stack2 = local7;// JIT: redundant assigment, value unused
                        // 7 0::foo
                        if (!(local6 != undefined && local6[AX_CLASS_SYMBOL])){
                            local6.foo = local7;
                        } else {
                            context.setproperty($names[26], local7, local6);
                        }
                        //IR: KILL removed, reason: prevent optimisation
                        //IR: KILL removed, reason: prevent optimisation
                        stack1 = 0;
                        if (!(0 > stack0)) { p = 1200; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 1;// JIT: redundant assigment, value unused
                        // 7 0::foo
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$Bgfoo = 1;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgparticleSprite;
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
                                   stack0.axCallProperty($names[35], [2], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::foo2
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack0 = this.$Bgfoo2;
                        stack1 = 50;
                        if (!(50 < stack0)) { p = 1183; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgparticleSprite;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack1 = this.$BgparticleSprite;
                        // 7 0::rotation
                        //Possible type:7 0:flash.display::MovieClip
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['rotation'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgrotation;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[36]);
                            }
                        }
//                        stack2 = 90;// JIT: redundant assigment, value unused
                        stack1 += 90;
                        // 7 0::rotation
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.rotation = stack1;
                        } else {
                            context.setproperty($names[36], stack1, stack0);
                        }
                        { p = 1200; continue; };
                    case 1183:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgparticleSprite;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack1 = this.$BgparticleSprite;
                        // 7 0::rotation
                        //Possible type:7 0:flash.display::MovieClip
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['rotation'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgrotation;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[36]);
                            }
                        }
//                        stack2 = 90;// JIT: redundant assigment, value unused
                        stack1 -= 90;
                        // 7 0::rotation
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.rotation = stack1;
                        } else {
                            context.setproperty($names[36], stack1, stack0);
                        }
                    case 1200:
                        { p = 1308; continue; };
                    case 1204:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        stack1 = this;
                        local6 = stack1;
                        // 7 0::foo
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack0 = this.$Bgfoo;
                        stack0 = +stack0;
                        stack1 = stack0;
                        stack1--;
                        local7 = stack1;
//                        stack1 = local6;// JIT: redundant assigment, value unused
//                        stack2 = local7;// JIT: redundant assigment, value unused
                        // 7 0::foo
                        if (!(local6 != undefined && local6[AX_CLASS_SYMBOL])){
                            local6.foo = local7;
                        } else {
                            context.setproperty($names[26], local7, local6);
                        }
                        //IR: KILL removed, reason: prevent optimisation
                        //IR: KILL removed, reason: prevent optimisation
                        stack1 = 0;
                        if (!(0 > stack0)) { p = 1308; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        stack1 = 2;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack2 = __Math;// JIT: redundant assigment, value unused
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack2 = __Math.random();
                        } else {
                            // 7 0::random
                            {
                                let t = __Math;
                                const m = t.$Bgrandom || (t = sec.box(__Math), t.$Bgrandom);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$Bgrandom ();
                                } else { 
                                    stack2 = __Math.axCallProperty($names[37], [], false);
                                }
                            }
                        }
//                        stack3 = 2;// JIT: redundant assigment, value unused
                        stack2 *= 2;
                        stack1 += stack2;
                        // 7 0::foo
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$Bgfoo = (+stack1);
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgparticleSprite;
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
                                   stack0.axCallProperty($names[35], [1], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::foo2
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack0 = this.$Bgfoo2;
                        stack1 = 50;
                        if (!(50 < stack0)) { p = 1291; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgparticleSprite;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack1 = this.$BgparticleSprite;
                        // 7 0::rotation
                        //Possible type:7 0:flash.display::MovieClip
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['rotation'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgrotation;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[36]);
                            }
                        }
//                        stack2 = 90;// JIT: redundant assigment, value unused
                        stack1 += 90;
                        // 7 0::rotation
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.rotation = stack1;
                        } else {
                            context.setproperty($names[36], stack1, stack0);
                        }
                        { p = 1308; continue; };
                    case 1291:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgparticleSprite;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack1 = this.$BgparticleSprite;
                        // 7 0::rotation
                        //Possible type:7 0:flash.display::MovieClip
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['rotation'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgrotation;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[36]);
                            }
                        }
//                        stack2 = 90;// JIT: redundant assigment, value unused
                        stack1 -= 90;
                        // 7 0::rotation
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.rotation = stack1;
                        } else {
                            context.setproperty($names[36], stack1, stack0);
                        }
                    case 1308:
                        { p = 1322; continue; };
                    case 1312:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgparticleSprite;
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
                                   stack0.axCallProperty($names[35], [1], false);
                                }
                            }
                        }
                    case 1322:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        stack1 = this;
                        local6 = stack1;
                        // 7 0::foo3
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack0 = this.$Bgfoo3;
                        stack0 = +stack0;
                        stack1 = stack0;
                        stack1--;
                        local7 = stack1;
//                        stack1 = local6;// JIT: redundant assigment, value unused
//                        stack2 = local7;// JIT: redundant assigment, value unused
                        // 7 0::foo3
                        if (!(local6 != undefined && local6[AX_CLASS_SYMBOL])){
                            local6.foo3 = local7;
                        } else {
                            context.setproperty($names[24], local7, local6);
                        }
                        //IR: KILL removed, reason: prevent optimisation
                        //IR: KILL removed, reason: prevent optimisation
                        stack1 = 0;
                        if (!(0 > stack0)) { p = 1356; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::dead
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$Bgdead = true;
                    case 1356:
                        //JIT: Emit inline return
                        return;
                    case 1360:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgparticleSprite;
                        // 7 0::SmokeParticleSprite
                        temp = scope0.findScopeProperty($names[38], true, false);
                        stack1 = temp.$BgSmokeParticleSprite;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[38]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 1394; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgparticleSprite;
                        // 7 0::currentFrame
                        //Possible type:7 0:flash.display::MovieClip
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['currentFrame'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgcurrentFrame;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[1]);
                            }
                        }
                        stack1 = 10;
                        if (10 != stack0) { p = 1390; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::dead
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$Bgdead = true;
                    case 1390:
                        //JIT: Emit inline return
                        return;
                    case 1394:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgparticleSprite;
                        // 7 0::PointGetParticleSprite
                        temp = scope0.findScopeProperty($names[39], true, false);
                        stack1 = temp.$BgPointGetParticleSprite;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[39]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 1428; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgparticleSprite;
                        // 7 0::currentFrame
                        //Possible type:7 0:flash.display::MovieClip
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['currentFrame'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgcurrentFrame;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[1]);
                            }
                        }
                        stack1 = 8;
                        if (8 != stack0) { p = 1424; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::dead
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$Bgdead = true;
                    case 1424:
                        //JIT: Emit inline return
                        return;
                    case 1428:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgparticleSprite;
                        // 7 0::BurnParticleSprite
                        temp = scope0.findScopeProperty($names[40], true, false);
                        stack1 = temp.$BgBurnParticleSprite;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[40]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 1523; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::yPos
                        //Possible type:7 0::BurnParticleSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack1 = this.$BgyPos;
                        stack2 = 0.6;
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 0::foo
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack3 = this.$Bgfoo;
                        stack2 += stack3;
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack3 = this.$BgparticleSprite;
                        // 7 0::currentFrame
                        //Possible type:7 0:flash.display::MovieClip
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['currentFrame'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$BgcurrentFrame;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[1]);
                            }
                        }
//                        stack4 = 60;// JIT: redundant assigment, value unused
                        stack3 /= 60;
                        stack2 -= stack3;
                        stack1 -= stack2;
                        // 7 0::yPos
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$BgyPos = (+stack1);
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::foo2
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack1 = this.$Bgfoo2;
//                        stack2 = 0.1;// JIT: redundant assigment, value unused
                        stack1 += 0.1;
                        // 7 0::foo2
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$Bgfoo2 = (+stack1);
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::originalXPos
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: null  */ 
                        stack1 = this.$BgoriginalXPos;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack2 = __Math;// JIT: redundant assigment, value unused
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 0::foo2
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack3 = this.$Bgfoo2;
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack2 = __Math.sin(stack3);
                        } else {
                            // 7 0::sin
                            {
                                let t = __Math;
                                const m = t.$Bgsin || (t = sec.box(__Math), t.$Bgsin);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$Bgsin (stack3);
                                } else { 
                                    stack2 = __Math.axCallProperty($names[17], [stack3], false);
                                }
                            }
                        }
//                        stack3 = 8;// JIT: redundant assigment, value unused
                        stack2 *= 8;
                        stack1 += stack2;
                        // 7 0::xPos
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$BgxPos = (+stack1);
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgparticleSprite;
                        // 7 0::currentFrame
                        //Possible type:7 0:flash.display::MovieClip
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['currentFrame'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgcurrentFrame;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[1]);
                            }
                        }
                        stack1 = 30;
                        if (!(30 <= stack0)) { p = 1519; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::dead
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$Bgdead = true;
                    case 1519:
                        //JIT: Emit inline return
                        return;
                    case 1523:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgparticleSprite;
                        // 7 0::DeadSlimeParticle
                        temp = scope0.findScopeProperty($names[41], true, false);
                        stack1 = temp.$BgDeadSlimeParticle;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[41]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 1624; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::xVel
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack0 = this.$BgxVel;
                        stack1 = 4;
                        if (!(4 < stack0)) { p = 1555; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 4;// JIT: redundant assigment, value unused
                        // 7 0::xVel
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$BgxVel = 4;
                        { p = 1571; continue; };
                    case 1555:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::xVel
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack0 = this.$BgxVel;
                        stack1 = -4;
                        if (!(-4 > stack0)) { p = 1571; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = -4;// JIT: redundant assigment, value unused
                        // 7 0::xVel
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$BgxVel = -4;
                    case 1571:
                        // 7 0:flash.geom::Point
                        /* GenerateLexImports */
//                        stack0 = flash_geom__Point_def;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::xPos
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack1 = this.$BgxPos;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0::yPos
                        //Possible type:7 0::Math
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack2 = this.$BgyPos;
                        //JIT: Support fast construct:Point/Object
                        stack0 = context.constructFast(flash_geom__Point_def, [stack1, stack2], $names[42]);
                        //IR: Drop coerce, reason: redundant
                        local2 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::level
                        //Possible type:7 0:flash.geom::Point
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack0 = this.$Bglevel;
                        // 7 0::camera
                        //Possible type:7 0:levels::Level
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['camera'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgcamera;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[11]);
                            }
                        }
//                        stack1 = local2;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.containsPoint(local2);
                        } else {
                            // 7 0::containsPoint
                            {
                                let t = stack0;
                                const m = t.$BgcontainsPoint || (t = sec.box(stack0), t.$BgcontainsPoint);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgcontainsPoint (local2);
                                } else { 
                                    stack0 = stack0.axCallProperty($names[43], [local2], false);
                                }
                            }
                        }
                        stack1 = false;
                        if (false != stack0) { p = 1609; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::dead
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$Bgdead = true;
                    case 1609:
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::yVel
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack1 = this.$BgyVel;
//                        stack2 = 0.6;// JIT: redundant assigment, value unused
                        stack1 += 0.6;
                        // 7 0::yVel
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$BgyVel = (+stack1);
                        //JIT: Emit inline return
                        return;
                    case 1624:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgparticleSprite;
                        // 7 0::LightParticleSprite
                        temp = scope0.findScopeProperty($names[44], true, false);
                        stack1 = temp.$BgLightParticleSprite;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[44]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 1658; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgparticleSprite;
                        // 7 0::currentFrame
                        //Possible type:7 0:flash.display::MovieClip
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['currentFrame'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgcurrentFrame;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[1]);
                            }
                        }
                        stack1 = 20;
                        if (20 != stack0) { p = 1654; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::dead
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$Bgdead = true;
                    case 1654:
                        //JIT: Emit inline return
                        return;
                    case 1658:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgparticleSprite;
                        // 7 0::LightningParticleSprite
                        temp = scope0.findScopeProperty($names[45], true, false);
                        stack1 = temp.$BgLightningParticleSprite;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[45]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 1919; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::foo
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack0 = this.$Bgfoo;
                        stack1 = 0;
                        if (0 != stack0) { p = 1819; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::yVel
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack1 = this.$BgyVel;
//                        stack2 = 0.05;// JIT: redundant assigment, value unused
                        stack1 += 0.05;
                        // 7 0::yVel
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$BgyVel = (+stack1);
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::level
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack0 = this.$Bglevel;
                        // 7 0::particlesManager
                        //Possible type:7 0:levels::Level
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['particlesManager'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgparticlesManager;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[46]);
                            }
                        }
                        // 7 0::LightningShadowParticleSprite
                        stack1 = scope0.findScopeProperty($names[47], true, false);
                        stack1 = context.constructprop($names[47], stack1, []);
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0::xPos
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack2 = this.$BgxPos;
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 0::yPos
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack3 = this.$BgyPos;
//                        stack4 = 0;// JIT: redundant assigment, value unused
                        //IR: DUP changed to PUSH*, reason: prevent optimisation
//                        stack5 = 0;// JIT: redundant assigment, value unused
                        //IR: DUP changed to PUSH*, reason: prevent optimisation
//                        stack6 = 0;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.pushParticle(stack1, stack2, stack3, 0, 0, 0);
                        } else {
                            // 7 0::pushParticle
                            {
                                let t = stack0;
                                const m = t.$BgpushParticle || (t = sec.box(stack0), t.$BgpushParticle);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1, stack2, stack3, 0, 0, 0);
                                } else { 
                                   stack0.axCallProperty($names[48], [stack1, stack2, stack3, 0, 0, 0], false);
                                }
                            }
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
                                stack0 = temp.axGetProperty($names[49]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        //Possible type:7 0::LightningShadowParticleSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack1 = this.$BgparticleSprite;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[7], true, false);
                        stack2 = temp.$BgUtils;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[7]);
                        }
                        // 7 0::world
                        //Possible type:7 0::Utils
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['world'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgworld;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[49]);
                            }
                        }
                        // 7 0::numChildren
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['numChildren'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$BgnumChildren;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[50]);
                            }
                        }
                        stack2--;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.setChildIndex(stack1, stack2);
                        } else {
                            // 7 0::setChildIndex
                            {
                                let t = stack0;
                                const m = t.$BgsetChildIndex || (t = sec.box(stack0), t.$BgsetChildIndex);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1, stack2);
                                } else { 
                                   stack0.axCallProperty($names[51], [stack1, stack2], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        stack1 = this;
                        local6 = stack1;
                        // 7 0::foo2
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack0 = this.$Bgfoo2;
                        stack0 = +stack0;
                        stack1 = stack0;
                        stack1++;
                        local7 = stack1;
//                        stack1 = local6;// JIT: redundant assigment, value unused
//                        stack2 = local7;// JIT: redundant assigment, value unused
                        // 7 0::foo2
                        if (!(local6 != undefined && local6[AX_CLASS_SYMBOL])){
                            local6.foo2 = local7;
                        } else {
                            context.setproperty($names[21], local7, local6);
                        }
                        //IR: KILL removed, reason: prevent optimisation
                        //IR: KILL removed, reason: prevent optimisation
                        stack1 = 0;
                        if (!(0 < stack0)) { p = 1815; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 0::foo2
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$Bgfoo2 = 0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgparticleSprite;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack1 = this.$BgparticleSprite;
                        // 7 0::alpha
                        //Possible type:7 0:flash.display::MovieClip
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['alpha'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgalpha;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[19]);
                            }
                        }
//                        stack2 = 0.25;// JIT: redundant assigment, value unused
                        stack1 -= 0.25;
                        // 7 0::alpha
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.alpha = stack1;
                        } else {
                            context.setproperty($names[19], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgparticleSprite;
                        // 7 0::alpha
                        //Possible type:7 0:flash.display::MovieClip
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['alpha'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgalpha;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[19]);
                            }
                        }
                        stack1 = 0;
                        if (!(0 >= stack0)) { p = 1815; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::dead
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$Bgdead = true;
                    case 1815:
                        { p = 1915; continue; };
                    case 1819:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::foo2
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack0 = this.$Bgfoo2;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::xPos
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack1 = this.$BgxPos;
                        stack0 -= stack1;
                        stack0 = +stack0;
                        local3 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::foo3
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack0 = this.$Bgfoo3;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::yPos
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack1 = this.$BgyPos;
                        stack0 -= stack1;
                        stack0 = +stack0;
                        local4 = stack0;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack0 = __Math;// JIT: redundant assigment, value unused
                        stack1 = local3;
//                        stack2 = local3;// JIT: redundant assigment, value unused
                        stack1 *= local3;
                        stack2 = local4;
//                        stack3 = local4;// JIT: redundant assigment, value unused
                        stack2 *= local4;
                        stack1 += stack2;
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack0 = __Math.sqrt(stack1);
                        } else {
                            // 7 0::sqrt
                            {
                                let t = __Math;
                                const m = t.$Bgsqrt || (t = sec.box(__Math), t.$Bgsqrt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$Bgsqrt (stack1);
                                } else { 
                                    stack0 = __Math.axCallProperty($names[52], [stack1], false);
                                }
                            }
                        }
                        stack0 = +stack0;
                        local5 = stack0;
                        stack0 = local3;
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        stack0 /= local5;
                        stack0 = +stack0;
                        local3 = stack0;
                        stack0 = local4;
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        stack0 /= local5;
                        stack0 = +stack0;
                        local4 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::xPos
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack1 = this.$BgxPos;
                        stack2 = local3;
//                        stack3 = 2;// JIT: redundant assigment, value unused
                        stack2 *= 2;
                        stack1 += stack2;
                        // 7 0::xPos
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$BgxPos = (+stack1);
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::yPos
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack1 = this.$BgyPos;
                        stack2 = local4;
//                        stack3 = 2;// JIT: redundant assigment, value unused
                        stack2 *= 2;
                        stack1 += stack2;
                        // 7 0::yPos
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$BgyPos = (+stack1);
                        stack0 = local5;
                        stack1 = 8;
                        if (!(8 > local5)) { p = 1915; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::dead
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$Bgdead = true;
                    case 1915:
                        //JIT: Emit inline return
                        return;
                    case 1919:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        //Possible type:7 0::Math
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgparticleSprite;
                        // 7 0::LightningShadowParticleSprite
                        temp = scope0.findScopeProperty($names[47], true, false);
                        stack1 = temp.$BgLightningShadowParticleSprite;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[47]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 1986; continue; };
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
                                stack0 = temp.axGetProperty($names[49]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        //Possible type:7 0::LightningShadowParticleSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack1 = this.$BgparticleSprite;
//                        stack2 = 0;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.setChildIndex(stack1, 0);
                        } else {
                            // 7 0::setChildIndex
                            {
                                let t = stack0;
                                const m = t.$BgsetChildIndex || (t = sec.box(stack0), t.$BgsetChildIndex);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1, 0);
                                } else { 
                                   stack0.axCallProperty($names[51], [stack1, 0], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgparticleSprite;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack1 = this.$BgparticleSprite;
                        // 7 0::alpha
                        //Possible type:7 0:flash.display::MovieClip
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['alpha'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgalpha;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[19]);
                            }
                        }
//                        stack2 = 0.25;// JIT: redundant assigment, value unused
                        stack1 -= 0.25;
                        // 7 0::alpha
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.alpha = stack1;
                        } else {
                            context.setproperty($names[19], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgparticleSprite;
                        // 7 0::alpha
                        //Possible type:7 0:flash.display::MovieClip
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['alpha'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgalpha;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[19]);
                            }
                        }
                        stack1 = 0;
                        if (!(0 >= stack0)) { p = 1982; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::dead
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$Bgdead = true;
                    case 1982:
                        //JIT: Emit inline return
                        return;
                    case 1986:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgparticleSprite;
                        // 7 0::FizzleParticle
                        temp = scope0.findScopeProperty($names[53], true, false);
                        stack1 = temp.$BgFizzleParticle;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[53]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 2158; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::foo
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack0 = this.$Bgfoo;
                        stack1 = 0;
                        if (0 != stack0) { p = 2058; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::yVel
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack1 = this.$BgyVel;
//                        stack2 = 0.2;// JIT: redundant assigment, value unused
                        stack1 -= 0.2;
                        // 7 0::yVel
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$BgyVel = (+stack1);
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgparticleSprite;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack1 = this.$BgparticleSprite;
                        // 7 0::alpha
                        //Possible type:7 0:flash.display::MovieClip
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['alpha'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgalpha;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[19]);
                            }
                        }
//                        stack2 = 0.02;// JIT: redundant assigment, value unused
                        stack1 -= 0.02;
                        // 7 0::alpha
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.alpha = stack1;
                        } else {
                            context.setproperty($names[19], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgparticleSprite;
                        // 7 0::alpha
                        //Possible type:7 0:flash.display::MovieClip
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['alpha'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgalpha;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[19]);
                            }
                        }
                        stack1 = 0;
                        if (!(0 >= stack0)) { p = 2054; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::dead
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$Bgdead = true;
                    case 2054:
                        { p = 2154; continue; };
                    case 2058:
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::yVel
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack1 = this.$BgyVel;
//                        stack2 = 0.2;// JIT: redundant assigment, value unused
                        stack1 -= 0.2;
                        // 7 0::yVel
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$BgyVel = (+stack1);
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::level
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack0 = this.$Bglevel;
                        // 7 0::LEVEL_TYPE
                        //Possible type:7 0:levels::Level
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['LEVEL_TYPE'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgLEVEL_TYPE;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[54]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::level
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack1 = this.$Bglevel;
                        // 7 0::SEWER
                        //Possible type:7 0:levels::Level
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['SEWER'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgSEWER;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[55]);
                            }
                        }
                        if (stack1 != stack0) { p = 2120; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::yPos
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack0 = this.$BgyPos;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::level
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack1 = this.$Bglevel;
                        // 7 0::sewerRoutine
                        //Possible type:7 0:levels::Level
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['sewerRoutine'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgsewerRoutine;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[56]);
                            }
                        }
                        // 7 0::acidCollision
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['acidCollision'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgacidCollision;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[57]);
                            }
                        }
                        // 7 0::yPos
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['yPos'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgyPos;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[58]);
                            }
                        }
//                        stack2 = 16;// JIT: redundant assigment, value unused
                        stack1 += 16;
                        if (!(stack1 > stack0)) { p = 2116; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::dead
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$Bgdead = true;
                    case 2116:
                        { p = 2154; continue; };
                    case 2120:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgparticleSprite;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack1 = this.$BgparticleSprite;
                        // 7 0::alpha
                        //Possible type:7 0:flash.display::MovieClip
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['alpha'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgalpha;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[19]);
                            }
                        }
//                        stack2 = 0.005;// JIT: redundant assigment, value unused
                        stack1 -= 0.005;
                        // 7 0::alpha
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.alpha = stack1;
                        } else {
                            context.setproperty($names[19], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::yPos
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack0 = this.$BgyPos;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::foo
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack1 = this.$Bgfoo;
                        if (!(stack1 > stack0)) { p = 2154; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::dead
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$Bgdead = true;
                    case 2154:
                        //JIT: Emit inline return
                        return;
                    case 2158:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgparticleSprite;
                        // 7 0::SlimeParticle
                        temp = scope0.findScopeProperty($names[59], true, false);
                        stack1 = temp.$BgSlimeParticle;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[59]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 2292; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::xVel
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack0 = this.$BgxVel;
                        stack1 = 4;
                        if (!(4 < stack0)) { p = 2190; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 4;// JIT: redundant assigment, value unused
                        // 7 0::xVel
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$BgxVel = 4;
                        { p = 2206; continue; };
                    case 2190:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::xVel
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack0 = this.$BgxVel;
                        stack1 = -4;
                        if (!(-4 > stack0)) { p = 2206; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = -4;// JIT: redundant assigment, value unused
                        // 7 0::xVel
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$BgxVel = -4;
                    case 2206:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::yVel
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack0 = this.$BgyVel;
                        stack1 = 4;
                        if (!(4 < stack0)) { p = 2226; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 4;// JIT: redundant assigment, value unused
                        // 7 0::yVel
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$BgyVel = 4;
                        { p = 2242; continue; };
                    case 2226:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::yVel
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack0 = this.$BgyVel;
                        stack1 = -4;
                        if (!(-4 > stack0)) { p = 2242; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = -4;// JIT: redundant assigment, value unused
                        // 7 0::yVel
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$BgyVel = -4;
                    case 2242:
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::yVel
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack1 = this.$BgyVel;
//                        stack2 = 0.2;// JIT: redundant assigment, value unused
                        stack1 += 0.2;
                        // 7 0::yVel
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$BgyVel = (+stack1);
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgparticleSprite;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack1 = this.$BgparticleSprite;
                        // 7 0::alpha
                        //Possible type:7 0:flash.display::MovieClip
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['alpha'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgalpha;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[19]);
                            }
                        }
//                        stack2 = 0.05;// JIT: redundant assigment, value unused
                        stack1 -= 0.05;
                        // 7 0::alpha
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.alpha = stack1;
                        } else {
                            context.setproperty($names[19], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgparticleSprite;
                        // 7 0::alpha
                        //Possible type:7 0:flash.display::MovieClip
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['alpha'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgalpha;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[19]);
                            }
                        }
                        stack1 = 0;
                        if (!(0 >= stack0)) { p = 2288; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::dead
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$Bgdead = true;
                    case 2288:
                        //JIT: Emit inline return
                        return;
                    case 2292:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgparticleSprite;
                        // 7 0::BubbleParticleSprite
                        temp = scope0.findScopeProperty($names[60], true, false);
                        stack1 = temp.$BgBubbleParticleSprite;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[60]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 2419; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::yVel
                        //Possible type:7 0::BubbleParticleSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack1 = this.$BgyVel;
                        stack2 = 0.5;
                        stack3 = 1.5;
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack4 = this.$BgparticleSprite;
                        // 7 0::scaleX
                        //Possible type:7 0:flash.display::MovieClip
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['scaleX'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$BgscaleX;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[61]);
                            }
                        }
                        stack3 -= stack4;
//                        stack4 = 2;// JIT: redundant assigment, value unused
                        stack3 /= 2;
                        stack2 += stack3;
                        stack1 -= stack2;
                        // 7 0::yVel
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$BgyVel = (+stack1);
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::counter
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack1 = this.$Bgcounter;
//                        stack2 = 0.1;// JIT: redundant assigment, value unused
                        stack1 += 0.1;
                        // 7 0::counter
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$Bgcounter = (+stack1);
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::foo
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack1 = this.$Bgfoo;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack2 = __Math;// JIT: redundant assigment, value unused
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 0::counter
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack3 = this.$Bgcounter;
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack2 = __Math.sin(stack3);
                        } else {
                            // 7 0::sin
                            {
                                let t = __Math;
                                const m = t.$Bgsin || (t = sec.box(__Math), t.$Bgsin);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$Bgsin (stack3);
                                } else { 
                                    stack2 = __Math.axCallProperty($names[17], [stack3], false);
                                }
                            }
                        }
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack3 = this.$BgparticleSprite;
                        // 7 0::width
                        //Possible type:7 0:flash.display::MovieClip
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['width'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgwidth;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[62]);
                            }
                        }
                        stack2 *= stack3;
                        stack1 += stack2;
                        // 7 0::xPos
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$BgxPos = (+stack1);
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::yPos
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack0 = this.$BgyPos;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::foo2
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack1 = this.$Bgfoo2;
                        if (!(stack1 > stack0)) { p = 2415; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgparticleSprite;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack1 = this.$BgparticleSprite;
                        // 7 0::alpha
                        //Possible type:7 0:flash.display::MovieClip
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['alpha'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgalpha;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[19]);
                            }
                        }
//                        stack2 = 0.1;// JIT: redundant assigment, value unused
                        stack1 -= 0.1;
                        // 7 0::alpha
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.alpha = stack1;
                        } else {
                            context.setproperty($names[19], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgparticleSprite;
                        // 7 0::alpha
                        //Possible type:7 0:flash.display::MovieClip
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['alpha'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgalpha;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[19]);
                            }
                        }
                        stack1 = 0;
                        if (!(0 >= stack0)) { p = 2415; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::dead
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$Bgdead = true;
                    case 2415:
                        //JIT: Emit inline return
                        return;
                    case 2419:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgparticleSprite;
                        // 7 0::SmokeExplosionSprite
                        temp = scope0.findScopeProperty($names[63], true, false);
                        stack1 = temp.$BgSmokeExplosionSprite;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[63]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 2453; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgparticleSprite;
                        // 7 0::currentFrame
                        //Possible type:7 0:flash.display::MovieClip
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['currentFrame'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgcurrentFrame;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[1]);
                            }
                        }
                        stack1 = 15;
                        if (15 != stack0) { p = 2449; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::dead
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$Bgdead = true;
                    case 2449:
                        //JIT: Emit inline return
                        return;
                    case 2453:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgparticleSprite;
                        // 7 0::WaterParticleSprite
                        temp = scope0.findScopeProperty($names[27], true, false);
                        stack1 = temp.$BgWaterParticleSprite;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[27]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 2496; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::yVel
                        //Possible type:7 0::WaterParticleSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack1 = this.$BgyVel;
//                        stack2 = 0.4;// JIT: redundant assigment, value unused
                        stack1 += 0.4;
                        // 7 0::yVel
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$BgyVel = (+stack1);
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::yVel
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack0 = this.$BgyVel;
                        stack1 = 8;
                        if (!(8 <= stack0)) { p = 2492; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 8;// JIT: redundant assigment, value unused
                        // 7 0::yVel
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$BgyVel = 8;
                    case 2492:
                        //JIT: Emit inline return
                        return;
                    case 2496:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgparticleSprite;
                        // 7 0::SmallSmokeExplosionSprite
                        temp = scope0.findScopeProperty($names[64], true, false);
                        stack1 = temp.$BgSmallSmokeExplosionSprite;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[64]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 2530; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgparticleSprite;
                        // 7 0::currentFrame
                        //Possible type:7 0:flash.display::MovieClip
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['currentFrame'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgcurrentFrame;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[1]);
                            }
                        }
                        stack1 = 15;
                        if (15 != stack0) { p = 2526; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::dead
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$Bgdead = true;
                    case 2526:
                        //JIT: Emit inline return
                        return;
                    case 2530:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgparticleSprite;
                        // 7 0::SideSmokeSprite
                        temp = scope0.findScopeProperty($names[65], true, false);
                        stack1 = temp.$BgSideSmokeSprite;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[65]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 2564; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgparticleSprite;
                        // 7 0::currentFrame
                        //Possible type:7 0:flash.display::MovieClip
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['currentFrame'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgcurrentFrame;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[1]);
                            }
                        }
                        stack1 = 14;
                        if (14 != stack0) { p = 2560; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::dead
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$Bgdead = true;
                    case 2560:
                        //JIT: Emit inline return
                        return;
                    case 2564:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgparticleSprite;
                        // 7 0::PinkParticle
                        temp = scope0.findScopeProperty($names[66], true, false);
                        stack1 = temp.$BgPinkParticle;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[66]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        stack1 = stack0;
                        if (stack1) { p = 2586; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgparticleSprite;
                        // 7 0::RockParticle
                        temp = scope0.findScopeProperty($names[67], true, false);
                        stack1 = temp.$BgRockParticle;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[67]);
                        }
                        stack0 = stack1.axIsType(stack0);
                    case 2586:
                        stack1 = stack0;
                        if (stack1) { p = 2600; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgparticleSprite;
                        // 7 0::PinkBigParticle
                        temp = scope0.findScopeProperty($names[68], true, false);
                        stack1 = temp.$BgPinkBigParticle;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[68]);
                        }
                        stack0 = stack1.axIsType(stack0);
                    case 2600:
                        if (!stack0) { p = 2641; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::yVel
                        //Possible type:7 0::PinkBigParticle
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack1 = this.$BgyVel;
//                        stack2 = 0.6;// JIT: redundant assigment, value unused
                        stack1 += 0.6;
                        // 7 0::yVel
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$BgyVel = (+stack1);
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgparticleSprite;
                        // 7 0::y
                        //Possible type:7 0:flash.display::MovieClip
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['y'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgy;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[12]);
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[7], true, false);
                        stack1 = temp.$BgUtils;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[7]);
                        }
                        // 7 0::SCREEN_HEIGHT
                        //Possible type:7 0::Utils
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['SCREEN_HEIGHT'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgSCREEN_HEIGHT;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[69]);
                            }
                        }
                        if (!(stack1 < stack0)) { p = 2637; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::dead
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$Bgdead = true;
                    case 2637:
                        //JIT: Emit inline return
                        return;
                    case 2641:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgparticleSprite;
                        // 7 0::PowerUpSprite
                        temp = scope0.findScopeProperty($names[70], true, false);
                        stack1 = temp.$BgPowerUpSprite;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[70]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        //JIT: Emit inline return
                        if (!stack0) { return; }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:entities::Hero// JIT: redundant assigment, value unused
                        stack1 = local1;
                        // 7 0::xPos
                        //Possible type:7 0::PowerUpSprite
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack1 = local1['xPos'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack1 = temp.$BgxPos;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[71]);
                            }
                        }
//                        // JIT: potential type:7 0:entities::Hero// JIT: redundant assigment, value unused
                        stack2 = local1;
                        // 7 0::WIDTH
                        //Possible type:undefined
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack2 = local1['WIDTH'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack2 = temp.$BgWIDTH;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[13]);
                            }
                        }
//                        stack3 = 2;// JIT: redundant assigment, value unused
                        stack2 /= 2;
                        stack1 += stack2;
                        // 7 0::xPos
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$BgxPos = (+stack1);
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:entities::Hero// JIT: redundant assigment, value unused
                        stack1 = local1;
                        // 7 0::yPos
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack1 = local1['yPos'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack1 = temp.$BgyPos;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[58]);
                            }
                        }
//                        // JIT: potential type:7 0:entities::Hero// JIT: redundant assigment, value unused
                        stack2 = local1;
                        // 7 0::HEIGHT
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack2 = local1['HEIGHT'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack2 = temp.$BgHEIGHT;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[72]);
                            }
                        }
//                        stack3 = 2;// JIT: redundant assigment, value unused
                        stack2 /= 2;
                        stack1 += stack2;
                        // 7 0::yPos
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$BgyPos = (+stack1);
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::particleSprite
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgparticleSprite;
                        // 7 0::currentFrame
                        //Possible type:7 0:flash.display::MovieClip
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['currentFrame'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgcurrentFrame;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[1]);
                            }
                        }
                        stack1 = 15;
                        //JIT: Emit inline return
                        if (15 != stack0) { return; }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::dead
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$Bgdead = true;
                    case 2703:
                        return;
                    }
                }
            }
//# sourceURL=http://jit/entities/particles/Particle/m_update.js
})