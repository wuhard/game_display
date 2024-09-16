(function anonymous(context
) {
/*
	Index: 170
	Path:  levels/Level::m_update
	Type:  Public
	Kind:  Method
	Super: Object
	Return: *
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;

             /* e */
             const flash_geom__Rectangle_def = context.getTopLevel(33); // flash.geom:Rectangle

    return function compiled_m_update() {
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
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local1 = 0;
                        // 7 0:levels::Level
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgLevel;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::PAUSE_ON_DELAY
                        //Possible type:7 0:levels::Level
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['PAUSE_ON_DELAY'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgPAUSE_ON_DELAY;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[1]);
                            }
                        }
                        stack1 = 0;
                        if (!(0 < stack0)) { p = 34; continue; };
                        // 7 0:levels::Level
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgLevel;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
                        stack1 = stack0;
                        local2 = stack1;
                        // 7 0::PAUSE_ON_DELAY
                        //Possible type:7 0:levels::Level
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['PAUSE_ON_DELAY'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgPAUSE_ON_DELAY;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[1]);
                            }
                        }
                        stack0 = (stack0 | 0) - 1;
                        local3 = stack0;
//                        stack0 = local2;// JIT: redundant assigment, value unused
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        // 7 0::PAUSE_ON_DELAY
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])){
                            local2.PAUSE_ON_DELAY = local3;
                        } else {
                            context.setproperty($names[1], local3, local2);
                        }
                        //IR: KILL removed, reason: prevent optimisation
                        //IR: KILL removed, reason: prevent optimisation
                    case 34:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        stack1 = this;
                        local2 = stack1;
                        // 7 0::jump_cooldown_counter
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack0 = this.$Bgjump_cooldown_counter;
                        stack0 = (stack0 | 0) - 1;
                        local3 = stack0;
//                        stack0 = local2;// JIT: redundant assigment, value unused
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        // 7 0::jump_cooldown_counter
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])){
                            local2.jump_cooldown_counter = local3;
                        } else {
                            context.setproperty($names[2], local3, local2);
                        }
                        //IR: KILL removed, reason: prevent optimisation
                        //IR: KILL removed, reason: prevent optimisation
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::jump_cooldown_counter
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack0 = this.$Bgjump_cooldown_counter;
                        stack1 = 0;
                        if (!(0 >= stack0)) { p = 67; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 0::jump_cooldown_counter
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
                        this.$Bgjump_cooldown_counter = 0;
                    case 67:
                        // 7 0::initialDelay
                        temp = scope0.findScopeProperty($names[3], true, false);
                        stack0 = temp.$BginitialDelay;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[3]);
                        }
                        stack1 = 0;
                        if (!(0 < stack0)) { p = 99; continue; };
                        // 7 0::initialDelay
                        stack0 = scope0.findScopeProperty($names[3], true, false);
                        stack1 = stack0;
                        local2 = stack1;
                        // 7 0::initialDelay
                        //Possible type:7 0::initialDelay
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['initialDelay'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BginitialDelay;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
                        stack0 = (stack0 | 0) - 1;
                        local3 = stack0;
//                        stack0 = local2;// JIT: redundant assigment, value unused
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        // 7 0::initialDelay
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])){
                            local2.initialDelay = local3;
                        } else {
                            context.setproperty($names[3], local3, local2);
                        }
                        //IR: KILL removed, reason: prevent optimisation
                        //IR: KILL removed, reason: prevent optimisation
                        { p = 116; continue; };
                    case 99:
                        // 7 0::initialDelay
                        temp = scope0.findScopeProperty($names[3], true, false);
                        stack0 = temp.$BginitialDelay;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[3]);
                        }
                        stack1 = 0;
                        if (0 != stack0) { p = 116; continue; };
                        // 7 0::initialDelay
                        stack0 = scope0.findScopeProperty($names[3], false, false);
//                        stack1 = -1;// JIT: redundant assigment, value unused
                        // 7 0::initialDelay
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.initialDelay = -1;
                        } else {
                            context.setproperty($names[3], -1, stack0);
                        }
                    case 116:
                        // 7 0::IS_AD_ON
                        temp = scope0.findScopeProperty($names[4], true, false);
                        stack0 = temp.$BgIS_AD_ON;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[4]);
                        }
                        if (!stack0) { p = 124; continue; };
                        return;
                    case 124:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::effectsLayer
                        //Possible type:7 0::IS_AD_ON
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgeffectsLayer;
                        // 7 0::graphics
                        //Possible type:7 0:flash.display::MovieClip
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['graphics'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bggraphics;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[5]);
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.clear();
                        } else {
                            // 7 0::clear
                            {
                                let t = stack0;
                                const m = t.$Bgclear || (t = sec.box(stack0), t.$Bgclear);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[6], [], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::SPLITTED_FLAG
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgSPLITTED_FLAG;
                        if (!stack0) { p = 356; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::smallHero1
                        //Possible type:7 0::Boolean
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::SmallHero  */ 
                        stack0 = this.$BgsmallHero1;
                        // 7 0::dead
                        //Possible type:7 0:entities::SmallHero
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['dead'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgdead;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[7]);
                            }
                        }
                        stack0 = !!stack0;
                        stack1 = stack0;
                        if (stack1) { p = 165; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::smallHero2
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::SmallHero  */ 
                        stack0 = this.$BgsmallHero2;
                        // 7 0::dead
                        //Possible type:7 0:entities::SmallHero
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['dead'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgdead;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[7]);
                            }
                        }
                        stack0 = !!stack0;
                    case 165:
                        if (!stack0) { p = 356; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        stack1 = this;
                        local2 = stack1;
                        // 7 0::heroDeadDelay
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack0 = this.$BgheroDeadDelay;
                        stack1 = stack0;
                        stack1 = (stack1 | 0) + 1;
                        local3 = stack1;
//                        stack1 = local2;// JIT: redundant assigment, value unused
//                        stack2 = local3;// JIT: redundant assigment, value unused
                        // 7 0::heroDeadDelay
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])){
                            local2.heroDeadDelay = local3;
                        } else {
                            context.setproperty($names[8], local3, local2);
                        }
                        //IR: KILL removed, reason: prevent optimisation
                        //IR: KILL removed, reason: prevent optimisation
                        stack1 = 10;
                        if (10 != stack0) { p = 356; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::smallHero1
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::SmallHero  */ 
                        stack0 = this.$BgsmallHero1;
                        // 7 0::entitySprite
                        //Possible type:7 0:entities::SmallHero
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['entitySprite'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgentitySprite;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[9]);
                            }
                        }
                        // 7 0::graphics
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['graphics'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bggraphics;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[5]);
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.clear();
                        } else {
                            // 7 0::clear
                            {
                                let t = stack0;
                                const m = t.$Bgclear || (t = sec.box(stack0), t.$Bgclear);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[6], [], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::smallHero2
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::SmallHero  */ 
                        stack0 = this.$BgsmallHero2;
                        // 7 0::entitySprite
                        //Possible type:7 0:entities::SmallHero
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['entitySprite'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgentitySprite;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[9]);
                            }
                        }
                        // 7 0::graphics
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['graphics'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bggraphics;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[5]);
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.clear();
                        } else {
                            // 7 0::clear
                            {
                                let t = stack0;
                                const m = t.$Bgclear || (t = sec.box(stack0), t.$Bgclear);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[6], [], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::RESTORE_CHECKPOINT_FLAG
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgRESTORE_CHECKPOINT_FLAG = true;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::SPLITTED_FLAG
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgSPLITTED_FLAG = false;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::hero
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::Hero  */ 
                        stack0 = this.$Bghero;
                        // 7 0:entities::AnimationManager
                        temp = scope0.findScopeProperty($names[10], true, false);
                        stack1 = temp.$BgAnimationManager;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[10]);
                        }
                        // 7 0::IsStandingState
                        //Possible type:7 0:entities::AnimationManager
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['IsStandingState'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgIsStandingState;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[11]);
                            }
                        }
                        // 7 0::currentState
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.currentState = stack1;
                        } else {
                            context.setproperty($names[12], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::slimeSplitterIn
                        //Possible type:7 0:entities::Hero
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels.collisions::SlimeSplitterIn  */ 
                        stack0 = this.$BgslimeSplitterIn;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.openSlimeSplitter();
                        } else {
                            // 7 0::openSlimeSplitter
                            {
                                let t = stack0;
                                const m = t.$BgopenSlimeSplitter || (t = sec.box(stack0), t.$BgopenSlimeSplitter);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[13], [], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::smallHero1
                        //Possible type:7 0:levels.collisions::SlimeSplitterIn
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::SmallHero  */ 
                        stack0 = this.$BgsmallHero1;
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::dead
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.dead = false;
                        } else {
                            context.setproperty($names[7], false, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::smallHero2
                        //Possible type:7 0:entities::SmallHero
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::SmallHero  */ 
                        stack0 = this.$BgsmallHero2;
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::dead
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.dead = false;
                        } else {
                            context.setproperty($names[7], false, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::smallHero1
                        //Possible type:7 0:entities::SmallHero
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::SmallHero  */ 
                        stack0 = this.$BgsmallHero1;
                        // 7 0::eye1
                        //Possible type:7 0:entities::SmallHero
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['eye1'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgeye1;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[14]);
                            }
                        }
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = true;
                        } else {
                            context.setproperty($names[15], true, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::smallHero2
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::SmallHero  */ 
                        stack0 = this.$BgsmallHero2;
                        // 7 0::eye1
                        //Possible type:7 0:entities::SmallHero
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['eye1'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgeye1;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[14]);
                            }
                        }
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = true;
                        } else {
                            context.setproperty($names[15], true, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::smallHero1
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::SmallHero  */ 
                        stack0 = this.$BgsmallHero1;
                        // 7 0:Box2D.Common.Math::b2Vec2
                        stack1 = scope0.findScopeProperty($names[16], true, false);
//                        stack2 = -1000;// JIT: redundant assigment, value unused
//                        stack3 = -1000;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:b2Vec2/Object
                        stack1 = context.constructFast(stack1, [-1000, -1000], $names[16]);
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.rebuildSlimeAt(stack1);
                        } else {
                            // 7 0::rebuildSlimeAt
                            {
                                let t = stack0;
                                const m = t.$BgrebuildSlimeAt || (t = sec.box(stack0), t.$BgrebuildSlimeAt);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[17], [stack1], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::smallHero2
                        //Possible type:7 0:entities::SmallHero
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::SmallHero  */ 
                        stack0 = this.$BgsmallHero2;
                        // 7 0:Box2D.Common.Math::b2Vec2
                        stack1 = scope0.findScopeProperty($names[16], true, false);
//                        stack2 = -2000;// JIT: redundant assigment, value unused
//                        stack3 = -1000;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:b2Vec2/Object
                        stack1 = context.constructFast(stack1, [-2000, -1000], $names[16]);
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.rebuildSlimeAt(stack1);
                        } else {
                            // 7 0::rebuildSlimeAt
                            {
                                let t = stack0;
                                const m = t.$BgrebuildSlimeAt || (t = sec.box(stack0), t.$BgrebuildSlimeAt);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[17], [stack1], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::smallHero1
                        //Possible type:7 0:entities::SmallHero
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::SmallHero  */ 
                        stack0 = this.$BgsmallHero1;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.updateAABB();
                        } else {
                            // 7 0::updateAABB
                            {
                                let t = stack0;
                                const m = t.$BgupdateAABB || (t = sec.box(stack0), t.$BgupdateAABB);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[18], [], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::smallHero2
                        //Possible type:7 0:entities::SmallHero
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::SmallHero  */ 
                        stack0 = this.$BgsmallHero2;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.updateAABB();
                        } else {
                            // 7 0::updateAABB
                            {
                                let t = stack0;
                                const m = t.$BgupdateAABB || (t = sec.box(stack0), t.$BgupdateAABB);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[18], [], false);
                                }
                            }
                        }
                    case 356:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::checkpointLightAnimation
                        //Possible type:7 0:entities::SmallHero
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgcheckpointLightAnimation;
                        if (!stack0) { p = 461; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        stack1 = this;
                        local2 = stack1;
                        // 7 0::lightDelay
                        //Possible type:7 0::Boolean
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack0 = this.$BglightDelay;
                        stack1 = stack0;
                        stack1 = (stack1 | 0) - 1;
                        local3 = stack1;
//                        stack1 = local2;// JIT: redundant assigment, value unused
//                        stack2 = local3;// JIT: redundant assigment, value unused
                        // 7 0::lightDelay
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])){
                            local2.lightDelay = local3;
                        } else {
                            context.setproperty($names[19], local3, local2);
                        }
                        //IR: KILL removed, reason: prevent optimisation
                        //IR: KILL removed, reason: prevent optimisation
                        stack1 = 0;
                        if (!(0 > stack0)) { p = 461; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 10;// JIT: redundant assigment, value unused
                        // 7 0::lightDelay
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
                        this.$BglightDelay = 10;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::checkpointLightAnimation
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgcheckpointLightAnimation = false;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::RESTORE_CHECKPOINT_FLAG
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgRESTORE_CHECKPOINT_FLAG = false;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::FREEZE_FLAG
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgFREEZE_FLAG = false;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::hero
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::Hero  */ 
                        stack0 = this.$Bghero;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.restoreToCheckpoint();
                        } else {
                            // 7 0::restoreToCheckpoint
                            {
                                let t = stack0;
                                const m = t.$BgrestoreToCheckpoint || (t = sec.box(stack0), t.$BgrestoreToCheckpoint);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[20], [], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::cameraNode
                        //Possible type:7 0:entities::Hero
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        stack0 = this.$BgcameraNode;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::hero
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::Hero  */ 
                        stack1 = this.$Bghero;
                        if (!(_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL]))) {
                           stack1 = stack1.getMidPosition();
                        } else {
                            // 7 0::getMidPosition
                            {
                                let t = stack1;
                                const m = t.$BggetMidPosition || (t = sec.box(stack1), t.$BggetMidPosition);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$BggetMidPosition ();
                                } else { 
                                    stack1 = stack1.axCallProperty($names[21], [], false);
                                }
                            }
                        }
                        // 7 0::x
                        //Possible type:7 0:entities::Hero
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['x'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[22]);
                            }
                        }
                        // 7 0::x
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.x = stack1;
                        } else {
                            context.setproperty($names[22], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::cameraNode
                        //Possible type:7 0:Box2D.Common.Math::b2Vec2
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        stack0 = this.$BgcameraNode;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::hero
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::Hero  */ 
                        stack1 = this.$Bghero;
                        if (!(_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL]))) {
                           stack1 = stack1.getMidPosition();
                        } else {
                            // 7 0::getMidPosition
                            {
                                let t = stack1;
                                const m = t.$BggetMidPosition || (t = sec.box(stack1), t.$BggetMidPosition);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$BggetMidPosition ();
                                } else { 
                                    stack1 = stack1.axCallProperty($names[21], [], false);
                                }
                            }
                        }
                        // 7 0::y
                        //Possible type:7 0:entities::Hero
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['y'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgy;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[23]);
                            }
                        }
                        // 7 0::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = stack1;
                        } else {
                            context.setproperty($names[23], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::collisionsManager
                        //Possible type:7 0:Box2D.Common.Math::b2Vec2
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels.collisions::CollisionsManager  */ 
                        stack0 = this.$BgcollisionsManager;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.resetCollisions();
                        } else {
                            // 7 0::resetCollisions
                            {
                                let t = stack0;
                                const m = t.$BgresetCollisions || (t = sec.box(stack0), t.$BgresetCollisions);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[24], [], false);
                                }
                            }
                        }
                    case 461:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::SPLITTED_FLAG
                        //Possible type:7 0:levels.collisions::CollisionsManager
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgSPLITTED_FLAG;
                        stack1 = false;
                        if (false != stack0) { p = 553; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::hero
                        //Possible type:7 0::Boolean
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::Hero  */ 
                        stack0 = this.$Bghero;
                        // 7 0::dead
                        //Possible type:7 0:entities::Hero
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['dead'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgdead;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[7]);
                            }
                        }
                        if (!stack0) { p = 547; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        stack1 = this;
                        local2 = stack1;
                        // 7 0::heroDeadDelay
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack0 = this.$BgheroDeadDelay;
                        stack1 = stack0;
                        stack1 = (stack1 | 0) + 1;
                        local3 = stack1;
//                        stack1 = local2;// JIT: redundant assigment, value unused
//                        stack2 = local3;// JIT: redundant assigment, value unused
                        // 7 0::heroDeadDelay
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])){
                            local2.heroDeadDelay = local3;
                        } else {
                            context.setproperty($names[8], local3, local2);
                        }
                        //IR: KILL removed, reason: prevent optimisation
                        //IR: KILL removed, reason: prevent optimisation
                        stack1 = 10;
                        stack0 = stack0 == 10;
                        stack1 = stack0;
                        if (!stack1) { p = 514; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::LEVEL_ALREADY_WON
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgLEVEL_ALREADY_WON;
                        stack1 = false;
                        stack0 = stack0 == false;
                    case 514:
                        if (!stack0) { p = 543; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::RESTORE_CHECKPOINT_FLAG
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgRESTORE_CHECKPOINT_FLAG = true;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::LEVEL_TYPE
                        //Possible type:7 0::Boolean
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack0 = this.$BgLEVEL_TYPE;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::SEWER
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack1 = this.$BgSEWER;
                        if (stack1 != stack0) { p = 543; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::sewerRoutine
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::SewerRoutine  */ 
                        stack0 = this.$BgsewerRoutine;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.heroDead();
                        } else {
                            // 7 0::heroDead
                            {
                                let t = stack0;
                                const m = t.$BgheroDead || (t = sec.box(stack0), t.$BgheroDead);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[25], [], false);
                                }
                            }
                        }
                    case 543:
                        { p = 553; continue; };
                    case 547:
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 0::heroDeadDelay
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
                        this.$BgheroDeadDelay = 0;
                    case 553:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::SPLITTED_FLAG
                        //Possible type:7 0:levels::SewerRoutine
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgSPLITTED_FLAG;
                        if (!stack0) { p = 587; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::hero
                        //Possible type:7 0::Boolean
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::Hero  */ 
                        stack0 = this.$Bghero;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.updateSplitted();
                        } else {
                            // 7 0::updateSplitted
                            {
                                let t = stack0;
                                const m = t.$BgupdateSplitted || (t = sec.box(stack0), t.$BgupdateSplitted);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[26], [], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::smallHero1
                        //Possible type:7 0:entities::Hero
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::SmallHero  */ 
                        stack0 = this.$BgsmallHero1;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.update();
                        } else {
                            // 7 0::update
                            {
                                let t = stack0;
                                const m = t.$Bgupdate || (t = sec.box(stack0), t.$Bgupdate);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[27], [], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::smallHero2
                        //Possible type:7 0:entities::SmallHero
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::SmallHero  */ 
                        stack0 = this.$BgsmallHero2;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.update();
                        } else {
                            // 7 0::update
                            {
                                let t = stack0;
                                const m = t.$Bgupdate || (t = sec.box(stack0), t.$Bgupdate);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[27], [], false);
                                }
                            }
                        }
                        { p = 612; continue; };
                    case 587:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::hero
                        //Possible type:7 0:entities::SmallHero
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::Hero  */ 
                        stack0 = this.$Bghero;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.update();
                        } else {
                            // 7 0::update
                            {
                                let t = stack0;
                                const m = t.$Bgupdate || (t = sec.box(stack0), t.$Bgupdate);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[27], [], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::smallHero1
                        //Possible type:7 0:entities::Hero
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::SmallHero  */ 
                        stack0 = this.$BgsmallHero1;
//                        stack1 = true;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.updateSplitted(true);
                        } else {
                            // 7 0::updateSplitted
                            {
                                let t = stack0;
                                const m = t.$BgupdateSplitted || (t = sec.box(stack0), t.$BgupdateSplitted);
                                if( typeof m === "function" ) { 
                                    m.call(t, true);
                                } else { 
                                   stack0.axCallProperty($names[26], [true], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::smallHero2
                        //Possible type:7 0:entities::SmallHero
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::SmallHero  */ 
                        stack0 = this.$BgsmallHero2;
//                        stack1 = false;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.updateSplitted(false);
                        } else {
                            // 7 0::updateSplitted
                            {
                                let t = stack0;
                                const m = t.$BgupdateSplitted || (t = sec.box(stack0), t.$BgupdateSplitted);
                                if( typeof m === "function" ) { 
                                    m.call(t, false);
                                } else { 
                                   stack0.axCallProperty($names[26], [false], false);
                                }
                            }
                        }
                    case 612:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::collisionsManager
                        //Possible type:7 0:entities::SmallHero
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels.collisions::CollisionsManager  */ 
                        stack0 = this.$BgcollisionsManager;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.update();
                        } else {
                            // 7 0::update
                            {
                                let t = stack0;
                                const m = t.$Bgupdate || (t = sec.box(stack0), t.$Bgupdate);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[27], [], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::itemsManager
                        //Possible type:7 0:levels.collisions::CollisionsManager
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels.items::ItemsManager  */ 
                        stack0 = this.$BgitemsManager;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.update();
                        } else {
                            // 7 0::update
                            {
                                let t = stack0;
                                const m = t.$Bgupdate || (t = sec.box(stack0), t.$Bgupdate);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[27], [], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::particlesManager
                        //Possible type:7 0:levels.items::ItemsManager
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities.particles::ParticlesManager  */ 
                        stack0 = this.$BgparticlesManager;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.update();
                        } else {
                            // 7 0::update
                            {
                                let t = stack0;
                                const m = t.$Bgupdate || (t = sec.box(stack0), t.$Bgupdate);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[27], [], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::LEVEL_TYPE
                        //Possible type:7 0:entities.particles::ParticlesManager
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack0 = this.$BgLEVEL_TYPE;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::SEWER
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack1 = this.$BgSEWER;
                        if (stack1 != stack0) { p = 652; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::sewerRoutine
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::SewerRoutine  */ 
                        stack0 = this.$BgsewerRoutine;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.update();
                        } else {
                            // 7 0::update
                            {
                                let t = stack0;
                                const m = t.$Bgupdate || (t = sec.box(stack0), t.$Bgupdate);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[27], [], false);
                                }
                            }
                        }
                    case 652:
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[28], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[28]);
                        }
                        // 7 0::m_world
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['m_world'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgm_world;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[29]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::m_timeStep
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack1 = this.$Bgm_timeStep;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0::m_velocityIterations
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack2 = this.$Bgm_velocityIterations;
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 0::m_positionIterations
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack3 = this.$Bgm_positionIterations;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.Step(stack1, stack2, stack3);
                        } else {
                            // 7 0::Step
                            {
                                let t = stack0;
                                const m = t.$BgStep || (t = sec.box(stack0), t.$BgStep);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1, stack2, stack3);
                                } else { 
                                   stack0.axCallProperty($names[30], [stack1, stack2, stack3], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::RESTORE_CHECKPOINT_FLAG
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgRESTORE_CHECKPOINT_FLAG;
                        if (!stack0) { p = 691; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgcheckpointCameraRoutine();
                        { p = 696; continue; };
                    case 691:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgnormalCameraRoutine();
                    case 696:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::SPLITTED_FLAG
                        //Possible type:7 0::Boolean
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgSPLITTED_FLAG;
                        if (!stack0) { p = 746; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::hero
                        //Possible type:7 0::Boolean
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::Hero  */ 
                        stack0 = this.$Bghero;
                        // 7 0::entitySprite
                        //Possible type:7 0:entities::Hero
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['entitySprite'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgentitySprite;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[9]);
                            }
                        }
                        // 7 0::graphics
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['graphics'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bggraphics;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[5]);
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.clear();
                        } else {
                            // 7 0::clear
                            {
                                let t = stack0;
                                const m = t.$Bgclear || (t = sec.box(stack0), t.$Bgclear);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[6], [], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::smallHero1
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::SmallHero  */ 
                        stack0 = this.$BgsmallHero1;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::camera
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.geom::Rectangle  */ 
                        stack1 = this.$Bgcamera;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.updateScreenPosition(stack1);
                        } else {
                            // 7 0::updateScreenPosition
                            {
                                let t = stack0;
                                const m = t.$BgupdateScreenPosition || (t = sec.box(stack0), t.$BgupdateScreenPosition);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[31], [stack1], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::smallHero2
                        //Possible type:7 0:entities::SmallHero
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::SmallHero  */ 
                        stack0 = this.$BgsmallHero2;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::camera
                        //Possible type:7 0:flash.geom::Rectangle
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.geom::Rectangle  */ 
                        stack1 = this.$Bgcamera;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.updateScreenPosition(stack1);
                        } else {
                            // 7 0::updateScreenPosition
                            {
                                let t = stack0;
                                const m = t.$BgupdateScreenPosition || (t = sec.box(stack0), t.$BgupdateScreenPosition);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[31], [stack1], false);
                                }
                            }
                        }
                        { p = 782; continue; };
                    case 746:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::hero
                        //Possible type:7 0:entities::SmallHero
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::Hero  */ 
                        stack0 = this.$Bghero;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::camera
                        //Possible type:7 0:flash.geom::Rectangle
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.geom::Rectangle  */ 
                        stack1 = this.$Bgcamera;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.updateScreenPosition(stack1);
                        } else {
                            // 7 0::updateScreenPosition
                            {
                                let t = stack0;
                                const m = t.$BgupdateScreenPosition || (t = sec.box(stack0), t.$BgupdateScreenPosition);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[31], [stack1], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::smallHero1
                        //Possible type:7 0:entities::Hero
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::SmallHero  */ 
                        stack0 = this.$BgsmallHero1;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::camera
                        //Possible type:7 0:flash.geom::Rectangle
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.geom::Rectangle  */ 
                        stack1 = this.$Bgcamera;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.updateScreenPosition(stack1);
                        } else {
                            // 7 0::updateScreenPosition
                            {
                                let t = stack0;
                                const m = t.$BgupdateScreenPosition || (t = sec.box(stack0), t.$BgupdateScreenPosition);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[31], [stack1], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::smallHero2
                        //Possible type:7 0:entities::SmallHero
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::SmallHero  */ 
                        stack0 = this.$BgsmallHero2;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::camera
                        //Possible type:7 0:flash.geom::Rectangle
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.geom::Rectangle  */ 
                        stack1 = this.$Bgcamera;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.updateScreenPosition(stack1);
                        } else {
                            // 7 0::updateScreenPosition
                            {
                                let t = stack0;
                                const m = t.$BgupdateScreenPosition || (t = sec.box(stack0), t.$BgupdateScreenPosition);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[31], [stack1], false);
                                }
                            }
                        }
                    case 782:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::collisionsManager
                        //Possible type:7 0:entities::SmallHero
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels.collisions::CollisionsManager  */ 
                        stack0 = this.$BgcollisionsManager;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::camera
                        //Possible type:7 0:flash.geom::Rectangle
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.geom::Rectangle  */ 
                        stack1 = this.$Bgcamera;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.updateScreenPositions(stack1);
                        } else {
                            // 7 0::updateScreenPositions
                            {
                                let t = stack0;
                                const m = t.$BgupdateScreenPositions || (t = sec.box(stack0), t.$BgupdateScreenPositions);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[32], [stack1], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::itemsManager
                        //Possible type:7 0:levels.collisions::CollisionsManager
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels.items::ItemsManager  */ 
                        stack0 = this.$BgitemsManager;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::camera
                        //Possible type:7 0:flash.geom::Rectangle
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.geom::Rectangle  */ 
                        stack1 = this.$Bgcamera;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.updateScreenPositions(stack1);
                        } else {
                            // 7 0::updateScreenPositions
                            {
                                let t = stack0;
                                const m = t.$BgupdateScreenPositions || (t = sec.box(stack0), t.$BgupdateScreenPositions);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[32], [stack1], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::particlesManager
                        //Possible type:7 0:levels.items::ItemsManager
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities.particles::ParticlesManager  */ 
                        stack0 = this.$BgparticlesManager;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::camera
                        //Possible type:7 0:flash.geom::Rectangle
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.geom::Rectangle  */ 
                        stack1 = this.$Bgcamera;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.updateScreenPositions(stack1);
                        } else {
                            // 7 0::updateScreenPositions
                            {
                                let t = stack0;
                                const m = t.$BgupdateScreenPositions || (t = sec.box(stack0), t.$BgupdateScreenPositions);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[32], [stack1], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::_bitmapData
                        //Possible type:7 0:entities.particles::ParticlesManager
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::BitmapData  */ 
                        stack0 = this.$Bg_bitmapData;
                        // 7 0:flash.geom::Rectangle
                        /* GenerateLexImports */
//                        stack1 = flash_geom__Rectangle_def;// JIT: redundant assigment, value unused
//                        stack2 = 0;// JIT: redundant assigment, value unused
                        //IR: DUP changed to PUSH*, reason: prevent optimisation
//                        stack3 = 0;// JIT: redundant assigment, value unused
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 0::_bitmapData
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::BitmapData  */ 
                        stack4 = this.$Bg_bitmapData;
                        // 7 0::width
                        //Possible type:7 0:flash.display::BitmapData
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['width'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgwidth;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[34]);
                            }
                        }
//                        stack5 = this;// JIT: redundant assigment, value unused
                        // 7 0::_bitmapData
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::BitmapData  */ 
                        stack5 = this.$Bg_bitmapData;
                        // 7 0::height
                        //Possible type:7 0:flash.display::BitmapData
                        if (!(stack5 != undefined && stack5[AX_CLASS_SYMBOL])) {
                            stack5 = stack5['height'];
                        } else {
                            temp = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);
                            stack5 = temp.$Bgheight;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[35]);
                            }
                        }
                        //JIT: Support fast construct:Rectangle/Object
                        stack1 = context.constructFast(flash_geom__Rectangle_def, [0, 0, stack4, stack5], $names[33]);
//                        stack2 = 0;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.fillRect(stack1, 0);
                        } else {
                            // 7 0::fillRect
                            {
                                let t = stack0;
                                const m = t.$BgfillRect || (t = sec.box(stack0), t.$BgfillRect);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1, 0);
                                } else { 
                                   stack0.axCallProperty($names[36], [stack1, 0], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::_bitmapData
                        //Possible type:7 0:flash.display::BitmapData
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::BitmapData  */ 
                        stack0 = this.$Bg_bitmapData;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::effectsLayer
                        //Possible type:7 0:flash.geom::Rectangle
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack1 = this.$BgeffectsLayer;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.draw(stack1);
                        } else {
                            // 7 0::draw
                            {
                                let t = stack0;
                                const m = t.$Bgdraw || (t = sec.box(stack0), t.$Bgdraw);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[37], [stack1], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::SPLITTED_FLAG
                        //Possible type:7 0:flash.display::BitmapData
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgSPLITTED_FLAG;
                        if (!stack0) { p = 926; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::smallHero1
                        //Possible type:7 0::Boolean
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::SmallHero  */ 
                        stack0 = this.$BgsmallHero1;
                        // 7 0::entitySprite
                        //Possible type:7 0:entities::SmallHero
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['entitySprite'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgentitySprite;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[9]);
                            }
                        }
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = true;
                        } else {
                            context.setproperty($names[15], true, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::smallHero2
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::SmallHero  */ 
                        stack0 = this.$BgsmallHero2;
                        // 7 0::entitySprite
                        //Possible type:7 0:entities::SmallHero
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['entitySprite'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgentitySprite;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[9]);
                            }
                        }
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = true;
                        } else {
                            context.setproperty($names[15], true, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::_bitmapData
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::BitmapData  */ 
                        stack0 = this.$Bg_bitmapData;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::smallHero1
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::SmallHero  */ 
                        stack1 = this.$BgsmallHero1;
                        // 7 0::entitySprite
                        //Possible type:7 0:entities::SmallHero
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['entitySprite'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgentitySprite;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[9]);
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.draw(stack1);
                        } else {
                            // 7 0::draw
                            {
                                let t = stack0;
                                const m = t.$Bgdraw || (t = sec.box(stack0), t.$Bgdraw);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[37], [stack1], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::_bitmapData
                        //Possible type:7 0:flash.display::BitmapData
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::BitmapData  */ 
                        stack0 = this.$Bg_bitmapData;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::smallHero2
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::SmallHero  */ 
                        stack1 = this.$BgsmallHero2;
                        // 7 0::entitySprite
                        //Possible type:7 0:entities::SmallHero
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['entitySprite'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgentitySprite;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[9]);
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.draw(stack1);
                        } else {
                            // 7 0::draw
                            {
                                let t = stack0;
                                const m = t.$Bgdraw || (t = sec.box(stack0), t.$Bgdraw);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[37], [stack1], false);
                                }
                            }
                        }
                        { p = 952; continue; };
                    case 926:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::hero
                        //Possible type:7 0:flash.display::BitmapData
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::Hero  */ 
                        stack0 = this.$Bghero;
                        // 7 0::entitySprite
                        //Possible type:7 0:entities::Hero
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['entitySprite'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgentitySprite;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[9]);
                            }
                        }
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = true;
                        } else {
                            context.setproperty($names[15], true, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::_bitmapData
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::BitmapData  */ 
                        stack0 = this.$Bg_bitmapData;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::hero
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::Hero  */ 
                        stack1 = this.$Bghero;
                        // 7 0::entitySprite
                        //Possible type:7 0:entities::Hero
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['entitySprite'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgentitySprite;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[9]);
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.draw(stack1);
                        } else {
                            // 7 0::draw
                            {
                                let t = stack0;
                                const m = t.$Bgdraw || (t = sec.box(stack0), t.$Bgdraw);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[37], [stack1], false);
                                }
                            }
                        }
                    case 952:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::_bitmap
                        //Possible type:7 0:flash.display::BitmapData
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::Bitmap  */ 
                        stack0 = this.$Bg_bitmap;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::camera
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.geom::Rectangle  */ 
                        stack1 = this.$Bgcamera;
                        // 7 0::x
                        //Possible type:7 0:flash.geom::Rectangle
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['x'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[22]);
                            }
                        }
                        // 7 0::x
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.x = stack1;
                        } else {
                            context.setproperty($names[22], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::_bitmap
                        //Possible type:7 0:flash.display::Bitmap
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::Bitmap  */ 
                        stack0 = this.$Bg_bitmap;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::camera
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.geom::Rectangle  */ 
                        stack1 = this.$Bgcamera;
                        // 7 0::y
                        //Possible type:7 0:flash.geom::Rectangle
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['y'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgy;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[23]);
                            }
                        }
                        // 7 0::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = stack1;
                        } else {
                            context.setproperty($names[23], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::hero
                        //Possible type:7 0:flash.display::Bitmap
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::Hero  */ 
                        stack0 = this.$Bghero;
                        // 7 0::entitySprite
                        //Possible type:7 0:entities::Hero
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['entitySprite'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgentitySprite;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[9]);
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[15], false, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::smallHero1
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::SmallHero  */ 
                        stack0 = this.$BgsmallHero1;
                        // 7 0::entitySprite
                        //Possible type:7 0:entities::SmallHero
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['entitySprite'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgentitySprite;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[9]);
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[15], false, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::smallHero2
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::SmallHero  */ 
                        stack0 = this.$BgsmallHero2;
                        // 7 0::entitySprite
                        //Possible type:7 0:entities::SmallHero
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['entitySprite'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgentitySprite;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[9]);
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[15], false, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::hud
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:interfaces::Hud  */ 
                        stack0 = this.$Bghud;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.update();
                        } else {
                            // 7 0::update
                            {
                                let t = stack0;
                                const m = t.$Bgupdate || (t = sec.box(stack0), t.$Bgupdate);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[27], [], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::dPad
                        //Possible type:7 0:interfaces::Hud
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:interfaces::VirtualDPad  */ 
                        stack0 = this.$BgdPad;
                        stack1 = null;
                        if (null == stack0) { p = 1036; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::dPad
                        //Possible type:7 0:interfaces::VirtualDPad
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:interfaces::VirtualDPad  */ 
                        stack0 = this.$BgdPad;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.update();
                        } else {
                            // 7 0::update
                            {
                                let t = stack0;
                                const m = t.$Bgupdate || (t = sec.box(stack0), t.$Bgupdate);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[27], [], false);
                                }
                            }
                        }
                    case 1036:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::soundHud
                        //Possible type:7 0:interfaces::VirtualDPad
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:interfaces::SoundHud  */ 
                        stack0 = this.$BgsoundHud;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.update();
                        } else {
                            // 7 0::update
                            {
                                let t = stack0;
                                const m = t.$Bgupdate || (t = sec.box(stack0), t.$Bgupdate);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[27], [], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgdrawBitmapScene();
                        return;
                    }
                }
            }
//# sourceURL=http://jit/levels/Level/m_update.js
})