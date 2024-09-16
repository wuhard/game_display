(function anonymous(context
) {
/*
	Index: 1149
	Path:  entities/Hero::m_gameOverAnimation
	Type:  Public
	Kind:  Method
	Super: entities/Entity
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_gameOverAnimation() {
        // Possible use a real "this"
        // local1 is assigned before read, skip init
        let local1 = undefined
        // local2 is assigned before read, skip init
        let local2 = undefined
        // local3 is assigned before read, skip init
        let local3 = undefined
        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
        let stack3 = undefined;
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
                        // 7 0:com.poki::PokiFlashSDK
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgPokiFlashSDK;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.instance();
                        } else {
                            // 7 0::instance
                            {
                                let t = stack0;
                                const m = t.$Bginstance || (t = sec.box(stack0), t.$Bginstance);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$Bginstance ();
                                } else { 
                                    stack0 = stack0.axCallProperty($names[1], [], false);
                                }
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.gameplayStop();
                        } else {
                            // 7 0::gameplayStop
                            {
                                let t = stack0;
                                const m = t.$BggameplayStop || (t = sec.box(stack0), t.$BggameplayStop);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[2], [], false);
                                }
                            }
                        }
                        // 7 0:levels::Level
                        temp = scope0.findScopeProperty($names[3], true, false);
                        stack0 = temp.$BgLevel;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[3]);
                        }
//                        stack1 = 90;// JIT: redundant assigment, value unused
                        // 7 0::PAUSE_ON_DELAY
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.PAUSE_ON_DELAY = 90;
                        } else {
                            context.setproperty($names[4], 90, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::glasses
                        //Possible type:7 0:levels::Level
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::SunglassesSprite  */ 
                        stack0 = this.$Bgglasses;
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[5], false, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = false;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgsetOnIce(false);
                        // 7 0::SoundSystem
                        temp = scope0.findScopeProperty($names[6], true, false);
                        stack0 = temp.$BgSoundSystem;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[6]);
                        }
//                        stack1 = "hurt";// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.PlaySound("hurt");
                        } else {
                            // 7 0::PlaySound
                            {
                                let t = stack0;
                                const m = t.$BgPlaySound || (t = sec.box(stack0), t.$BgPlaySound);
                                if( typeof m === "function" ) { 
                                    m.call(t, "hurt");
                                } else { 
                                   stack0.axCallProperty($names[7], ["hurt"], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgremoveStickJoints();
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$Bglevel;
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::NORMAL_GRAVITY
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.NORMAL_GRAVITY = true;
                        } else {
                            context.setproperty($names[8], true, stack0);
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$Bglevel;
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::ZERO_GRAVITY
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.ZERO_GRAVITY = false;
                        } else {
                            context.setproperty($names[9], false, stack0);
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[10], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[10]);
                        }
                        // 7 0::m_world
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['m_world'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgm_world;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[11]);
                            }
                        }
                        // 7 0:Box2D.Common.Math::b2Vec2
                        stack1 = scope0.findScopeProperty($names[12], true, false);
//                        stack2 = 0;// JIT: redundant assigment, value unused
//                        stack3 = 15;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:b2Vec2/Object
                        stack1 = context.constructFast(stack1, [0, 15], $names[12]);
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.SetGravity(stack1);
                        } else {
                            // 7 0::SetGravity
                            {
                                let t = stack0;
                                const m = t.$BgSetGravity || (t = sec.box(stack0), t.$BgSetGravity);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[13], [stack1], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::IS_FROST
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgIS_FROST;
                        stack0 = !!stack0;
                        local1 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = false;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgsetFrost(false);
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = local1;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgexplosionParticle(local1);
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::eye1
                        //Possible type:7 0::Boolean
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$Bgeye1;
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[5], false, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::eye2
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$Bgeye2;
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[5], false, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::eye_frost1
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$Bgeye_frost1;
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[5], false, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::eye_frost2
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$Bgeye_frost2;
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[5], false, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::eye1
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$Bgeye1;
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
                                   stack0.axCallProperty($names[14], [1], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::eye2
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$Bgeye2;
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
                                   stack0.axCallProperty($names[14], [1], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::currentMidPosition
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        stack1 = this.$BgcurrentMidPosition;
                        // 7 0::x
                        //Possible type:7 0:Box2D.Common.Math::b2Vec2
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['x'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[15]);
                            }
                        }
                        // 7 0::heroDeadAtX
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: null  */ 
                        this.$BgheroDeadAtX = stack1;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::currentMidPosition
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        stack1 = this.$BgcurrentMidPosition;
                        // 7 0::y
                        //Possible type:7 0:Box2D.Common.Math::b2Vec2
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['y'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgy;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[16]);
                            }
                        }
                        // 7 0::heroDeadAtY
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$BgheroDeadAtY = (+stack1);
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:Box2D.Common.Math::b2Vec2
                        stack1 = scope0.findScopeProperty($names[12], true, false);
//                        stack2 = -100;// JIT: redundant assigment, value unused
//                        stack3 = -100;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:b2Vec2/Object
                        stack1 = context.constructFast(stack1, [-100, -100], $names[12]);
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgrebuildSlimeAt(stack1);
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[10], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[10]);
                        }
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 0::PlayerLifes
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.PlayerLifes = 0;
                        } else {
                            context.setproperty($names[17], 0, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::magnitude
                        //Possible type:7 0::Utils
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack0 = this.$Bgmagnitude;
                        stack1 = 1;
                        if (1 == stack0) { p = 218; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 1;// JIT: redundant assigment, value unused
                        // 7 0::magnitude
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$Bgmagnitude = 1;
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$Bglevel;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.heroResettedSize();
                        } else {
                            // 7 0::heroResettedSize
                            {
                                let t = stack0;
                                const m = t.$BgheroResettedSize || (t = sec.box(stack0), t.$BgheroResettedSize);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[18], [], false);
                                }
                            }
                        }
                    case 218:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgscaleSlime();
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::dead
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$Bgdead = true;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[10], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[10]);
                        }
                        stack1 = stack0;
                        local2 = stack1;
                        // 7 0::DEATHS_AMOUNT
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['DEATHS_AMOUNT'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgDEATHS_AMOUNT;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[19]);
                            }
                        }
                        stack0 = (stack0 | 0) + 1;
                        local3 = stack0;
//                        stack0 = local2;// JIT: redundant assigment, value unused
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        // 7 0::DEATHS_AMOUNT
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])){
                            local2.DEATHS_AMOUNT = local3;
                        } else {
                            context.setproperty($names[19], local3, local2);
                        }
                        //IR: KILL removed, reason: prevent optimisation
                        //IR: KILL removed, reason: prevent optimisation
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$Bglevel;
                        // 7 0::LEVEL_ALREADY_WON
                        //Possible type:7 0::level
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['LEVEL_ALREADY_WON'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgLEVEL_ALREADY_WON;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[20]);
                            }
                        }
                        stack1 = false;
                        //JIT: Emit inline return
                        if (false != stack0) { return; }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$Bglevel;
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::PERFECT_LEVEL_FLAG
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.PERFECT_LEVEL_FLAG = false;
                        } else {
                            context.setproperty($names[21], false, stack0);
                        }
                    case 265:
                        return;
                    }
                }
            }
//# sourceURL=http://jit/entities/Hero/m_gameOverAnimation.js
})