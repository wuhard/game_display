(function anonymous(context
) {
/*
	Index: 202
	Path:  entities/AnimationManager::m_performAction
	Type:  Public
	Kind:  Method
	Super: Object
	Return: *
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_performAction(local1 /* int */) {
        // Possible use a real "this"
        /* Force int coerce */
        local1 = (local1|0);
        // local2 is assigned before read, skip init
        let local2 = undefined
        let stack0 = undefined;
        let stack1 = undefined;
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
                        { p = 344; continue; };
                    case 6:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::entity
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::Entity  */ 
                        stack0 = this.$Bgentity;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 3::entity
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::Entity  */ 
                        stack1 = this.$Bgentity;
                        // 7 0::currentState
                        //Possible type:7 0:entities::Entity
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['currentState'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgcurrentState;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[0]);
                            }
                        }
                        // 7 0::lastState
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.lastState = stack1;
                        } else {
                            context.setproperty($names[1], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::entity
                        //Possible type:7 0:entities::Entity
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::Entity  */ 
                        stack0 = this.$Bgentity;
                        // 7 0::IsStandingState
                        temp = scope0.findScopeProperty($names[2], true, false);
                        stack1 = temp.$BgIsStandingState;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[2]);
                        }
                        // 7 0::currentState
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.currentState = stack1;
                        } else {
                            context.setproperty($names[0], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::entity
                        //Possible type:7 0:entities::Entity
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::Entity  */ 
                        stack0 = this.$Bgentity;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.standingAnimation();
                        } else {
                            // 7 0::standingAnimation
                            {
                                let t = stack0;
                                const m = t.$BgstandingAnimation || (t = sec.box(stack0), t.$BgstandingAnimation);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[3], [], false);
                                }
                            }
                        }
                        //JIT: Emit inline return
                        return;
                    case 43:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::entity
                        //Possible type:7 0:entities::Entity
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::Entity  */ 
                        stack0 = this.$Bgentity;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 3::entity
                        //Possible type:7 0::IsStandingState
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::Entity  */ 
                        stack1 = this.$Bgentity;
                        // 7 0::currentState
                        //Possible type:7 0:entities::Entity
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['currentState'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgcurrentState;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[0]);
                            }
                        }
                        // 7 0::lastState
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.lastState = stack1;
                        } else {
                            context.setproperty($names[1], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::entity
                        //Possible type:7 0:entities::Entity
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::Entity  */ 
                        stack0 = this.$Bgentity;
                        // 7 0::IsWalkingState
                        temp = scope0.findScopeProperty($names[4], true, false);
                        stack1 = temp.$BgIsWalkingState;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[4]);
                        }
                        // 7 0::currentState
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.currentState = stack1;
                        } else {
                            context.setproperty($names[0], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::entity
                        //Possible type:7 0:entities::Entity
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::Entity  */ 
                        stack0 = this.$Bgentity;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.walkingAnimation();
                        } else {
                            // 7 0::walkingAnimation
                            {
                                let t = stack0;
                                const m = t.$BgwalkingAnimation || (t = sec.box(stack0), t.$BgwalkingAnimation);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[5], [], false);
                                }
                            }
                        }
                        //JIT: Emit inline return
                        return;
                    case 80:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::entity
                        //Possible type:7 0:entities::Entity
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::Entity  */ 
                        stack0 = this.$Bgentity;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 3::entity
                        //Possible type:7 0::IsWalkingState
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::Entity  */ 
                        stack1 = this.$Bgentity;
                        // 7 0::currentState
                        //Possible type:7 0:entities::Entity
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['currentState'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgcurrentState;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[0]);
                            }
                        }
                        // 7 0::lastState
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.lastState = stack1;
                        } else {
                            context.setproperty($names[1], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::entity
                        //Possible type:7 0:entities::Entity
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::Entity  */ 
                        stack0 = this.$Bgentity;
                        // 7 0::IsJumpingState
                        temp = scope0.findScopeProperty($names[6], true, false);
                        stack1 = temp.$BgIsJumpingState;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[6]);
                        }
                        // 7 0::currentState
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.currentState = stack1;
                        } else {
                            context.setproperty($names[0], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::entity
                        //Possible type:7 0:entities::Entity
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::Entity  */ 
                        stack0 = this.$Bgentity;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.jumpingAnimation();
                        } else {
                            // 7 0::jumpingAnimation
                            {
                                let t = stack0;
                                const m = t.$BgjumpingAnimation || (t = sec.box(stack0), t.$BgjumpingAnimation);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[7], [], false);
                                }
                            }
                        }
                        //JIT: Emit inline return
                        return;
                    case 117:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::entity
                        //Possible type:7 0:entities::Entity
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::Entity  */ 
                        stack0 = this.$Bgentity;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 3::entity
                        //Possible type:7 0::IsJumpingState
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::Entity  */ 
                        stack1 = this.$Bgentity;
                        // 7 0::currentState
                        //Possible type:7 0:entities::Entity
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['currentState'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgcurrentState;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[0]);
                            }
                        }
                        // 7 0::lastState
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.lastState = stack1;
                        } else {
                            context.setproperty($names[1], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::entity
                        //Possible type:7 0:entities::Entity
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::Entity  */ 
                        stack0 = this.$Bgentity;
                        // 7 0::IsFallingState
                        temp = scope0.findScopeProperty($names[8], true, false);
                        stack1 = temp.$BgIsFallingState;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[8]);
                        }
                        // 7 0::currentState
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.currentState = stack1;
                        } else {
                            context.setproperty($names[0], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::entity
                        //Possible type:7 0:entities::Entity
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::Entity  */ 
                        stack0 = this.$Bgentity;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.fallingAnimation();
                        } else {
                            // 7 0::fallingAnimation
                            {
                                let t = stack0;
                                const m = t.$BgfallingAnimation || (t = sec.box(stack0), t.$BgfallingAnimation);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[9], [], false);
                                }
                            }
                        }
                        //JIT: Emit inline return
                        return;
                    case 154:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::entity
                        //Possible type:7 0:entities::Entity
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::Entity  */ 
                        stack0 = this.$Bgentity;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 3::entity
                        //Possible type:7 0::IsFallingState
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::Entity  */ 
                        stack1 = this.$Bgentity;
                        // 7 0::currentState
                        //Possible type:7 0:entities::Entity
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['currentState'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgcurrentState;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[0]);
                            }
                        }
                        // 7 0::lastState
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.lastState = stack1;
                        } else {
                            context.setproperty($names[1], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::entity
                        //Possible type:7 0:entities::Entity
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::Entity  */ 
                        stack0 = this.$Bgentity;
                        // 7 0::IsHurtState
                        temp = scope0.findScopeProperty($names[10], true, false);
                        stack1 = temp.$BgIsHurtState;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[10]);
                        }
                        // 7 0::currentState
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.currentState = stack1;
                        } else {
                            context.setproperty($names[0], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::entity
                        //Possible type:7 0:entities::Entity
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::Entity  */ 
                        stack0 = this.$Bgentity;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.hurtAnimation();
                        } else {
                            // 7 0::hurtAnimation
                            {
                                let t = stack0;
                                const m = t.$BghurtAnimation || (t = sec.box(stack0), t.$BghurtAnimation);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[11], [], false);
                                }
                            }
                        }
                        //JIT: Emit inline return
                        return;
                    case 191:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::entity
                        //Possible type:7 0:entities::Entity
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::Entity  */ 
                        stack0 = this.$Bgentity;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 3::entity
                        //Possible type:7 0::IsHurtState
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::Entity  */ 
                        stack1 = this.$Bgentity;
                        // 7 0::currentState
                        //Possible type:7 0:entities::Entity
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['currentState'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgcurrentState;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[0]);
                            }
                        }
                        // 7 0::lastState
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.lastState = stack1;
                        } else {
                            context.setproperty($names[1], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::entity
                        //Possible type:7 0:entities::Entity
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::Entity  */ 
                        stack0 = this.$Bgentity;
                        // 7 0::IsLevelFinishedState
                        temp = scope0.findScopeProperty($names[12], true, false);
                        stack1 = temp.$BgIsLevelFinishedState;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[12]);
                        }
                        // 7 0::currentState
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.currentState = stack1;
                        } else {
                            context.setproperty($names[0], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::entity
                        //Possible type:7 0:entities::Entity
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::Entity  */ 
                        stack0 = this.$Bgentity;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.levelFinishedAnimation();
                        } else {
                            // 7 0::levelFinishedAnimation
                            {
                                let t = stack0;
                                const m = t.$BglevelFinishedAnimation || (t = sec.box(stack0), t.$BglevelFinishedAnimation);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[13], [], false);
                                }
                            }
                        }
                        //JIT: Emit inline return
                        return;
                    case 228:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::entity
                        //Possible type:7 0:entities::Entity
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::Entity  */ 
                        stack0 = this.$Bgentity;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 3::entity
                        //Possible type:7 0::IsLevelFinishedState
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::Entity  */ 
                        stack1 = this.$Bgentity;
                        // 7 0::currentState
                        //Possible type:7 0:entities::Entity
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['currentState'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgcurrentState;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[0]);
                            }
                        }
                        // 7 0::lastState
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.lastState = stack1;
                        } else {
                            context.setproperty($names[1], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::entity
                        //Possible type:7 0:entities::Entity
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::Entity  */ 
                        stack0 = this.$Bgentity;
                        // 7 0::IsGameOverState
                        temp = scope0.findScopeProperty($names[14], true, false);
                        stack1 = temp.$BgIsGameOverState;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[14]);
                        }
                        // 7 0::currentState
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.currentState = stack1;
                        } else {
                            context.setproperty($names[0], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::entity
                        //Possible type:7 0:entities::Entity
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::Entity  */ 
                        stack0 = this.$Bgentity;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.gameOverAnimation();
                        } else {
                            // 7 0::gameOverAnimation
                            {
                                let t = stack0;
                                const m = t.$BggameOverAnimation || (t = sec.box(stack0), t.$BggameOverAnimation);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[15], [], false);
                                }
                            }
                        }
                        //JIT: Emit inline return
                        return;
                    case 265:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::entity
                        //Possible type:7 0:entities::Entity
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::Entity  */ 
                        stack0 = this.$Bgentity;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 3::entity
                        //Possible type:7 0::IsGameOverState
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::Entity  */ 
                        stack1 = this.$Bgentity;
                        // 7 0::currentState
                        //Possible type:7 0:entities::Entity
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['currentState'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgcurrentState;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[0]);
                            }
                        }
                        // 7 0::lastState
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.lastState = stack1;
                        } else {
                            context.setproperty($names[1], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::entity
                        //Possible type:7 0:entities::Entity
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::Entity  */ 
                        stack0 = this.$Bgentity;
                        // 7 0::IsSwimmingState
                        temp = scope0.findScopeProperty($names[16], true, false);
                        stack1 = temp.$BgIsSwimmingState;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[16]);
                        }
                        // 7 0::currentState
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.currentState = stack1;
                        } else {
                            context.setproperty($names[0], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::entity
                        //Possible type:7 0:entities::Entity
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::Entity  */ 
                        stack0 = this.$Bgentity;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.swimmingAnimation();
                        } else {
                            // 7 0::swimmingAnimation
                            {
                                let t = stack0;
                                const m = t.$BgswimmingAnimation || (t = sec.box(stack0), t.$BgswimmingAnimation);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[17], [], false);
                                }
                            }
                        }
                        //JIT: Emit inline return
                        return;
                    case 302:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::entity
                        //Possible type:7 0:entities::Entity
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::Entity  */ 
                        stack0 = this.$Bgentity;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 3::entity
                        //Possible type:7 0::IsSwimmingState
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::Entity  */ 
                        stack1 = this.$Bgentity;
                        // 7 0::currentState
                        //Possible type:7 0:entities::Entity
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['currentState'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgcurrentState;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[0]);
                            }
                        }
                        // 7 0::lastState
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.lastState = stack1;
                        } else {
                            context.setproperty($names[1], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::entity
                        //Possible type:7 0:entities::Entity
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::Entity  */ 
                        stack0 = this.$Bgentity;
                        // 7 0::IsSplattedState
                        temp = scope0.findScopeProperty($names[18], true, false);
                        stack1 = temp.$BgIsSplattedState;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[18]);
                        }
                        // 7 0::currentState
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.currentState = stack1;
                        } else {
                            context.setproperty($names[0], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::entity
                        //Possible type:7 0:entities::Entity
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::Entity  */ 
                        stack0 = this.$Bgentity;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.splatAnimation();
                        } else {
                            // 7 0::splatAnimation
                            {
                                let t = stack0;
                                const m = t.$BgsplatAnimation || (t = sec.box(stack0), t.$BgsplatAnimation);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[19], [], false);
                                }
                            }
                        }
                        //JIT: Emit inline return
                        return;
                    case 339:
                        //JIT: Emit inline return
                        return;
                    case 344:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::animations
                        //Possible type:7 0:entities::Entity
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$Bganimations;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 3::entity
                        //Possible type:7 0::IsSplattedState
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::Entity  */ 
                        stack1 = this.$Bgentity;
                        // 7 0::currentState
                        //Possible type:7 0:entities::Entity
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['currentState'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgcurrentState;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[0]);
                            }
                        }
                        // 27 {3, 0, 0:http://adobe.com/AS3/2006/builtin, 3, 0:entities, 2:entities, 1:entities:AnimationManager, 5:entities:AnimationManager}::*
                        {
                            let simple = stack1;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[20], stack1);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // JIT: potential type:7 0::int
                        stack1 = local1;
                        // 27 {3, 0, 0:http://adobe.com/AS3/2006/builtin, 3, 0:entities, 2:entities, 1:entities:AnimationManager, 5:entities:AnimationManager}::*
                        {
                            let simple = local1;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[20], local1);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        local2 = stack0;
                        // 7 0::IsStandingState
                        temp = scope0.findScopeProperty($names[2], true, false);
                        stack0 = temp.$BgIsStandingState;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[2]);
                        }
                        stack1 = local2;
                        if (local2 !== stack0) { p = 377; continue; };
                        stack0 = 0;
                        { p = 501; continue; };
                    case 377:
                        // 7 0::IsWalkingState
                        temp = scope0.findScopeProperty($names[4], true, false);
                        stack0 = temp.$BgIsWalkingState;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[4]);
                        }
                        stack1 = local2;
                        if (local2 !== stack0) { p = 391; continue; };
                        stack0 = 1;
                        { p = 501; continue; };
                    case 391:
                        // 7 0::IsJumpingState
                        temp = scope0.findScopeProperty($names[6], true, false);
                        stack0 = temp.$BgIsJumpingState;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[6]);
                        }
                        stack1 = local2;
                        if (local2 !== stack0) { p = 405; continue; };
                        stack0 = 2;
                        { p = 501; continue; };
                    case 405:
                        // 7 0::IsFallingState
                        temp = scope0.findScopeProperty($names[8], true, false);
                        stack0 = temp.$BgIsFallingState;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[8]);
                        }
                        stack1 = local2;
                        if (local2 !== stack0) { p = 419; continue; };
                        stack0 = 3;
                        { p = 501; continue; };
                    case 419:
                        // 7 0::IsHurtState
                        temp = scope0.findScopeProperty($names[10], true, false);
                        stack0 = temp.$BgIsHurtState;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[10]);
                        }
                        stack1 = local2;
                        if (local2 !== stack0) { p = 433; continue; };
                        stack0 = 4;
                        { p = 501; continue; };
                    case 433:
                        // 7 0::IsLevelFinishedState
                        temp = scope0.findScopeProperty($names[12], true, false);
                        stack0 = temp.$BgIsLevelFinishedState;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[12]);
                        }
                        stack1 = local2;
                        if (local2 !== stack0) { p = 447; continue; };
                        stack0 = 5;
                        { p = 501; continue; };
                    case 447:
                        // 7 0::IsGameOverState
                        temp = scope0.findScopeProperty($names[14], true, false);
                        stack0 = temp.$BgIsGameOverState;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[14]);
                        }
                        stack1 = local2;
                        if (local2 !== stack0) { p = 461; continue; };
                        stack0 = 6;
                        { p = 501; continue; };
                    case 461:
                        // 7 0::IsSwimmingState
                        temp = scope0.findScopeProperty($names[16], true, false);
                        stack0 = temp.$BgIsSwimmingState;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[16]);
                        }
                        stack1 = local2;
                        if (local2 !== stack0) { p = 475; continue; };
                        stack0 = 7;
                        { p = 501; continue; };
                    case 475:
                        // 7 0::IsSplattedState
                        temp = scope0.findScopeProperty($names[18], true, false);
                        stack0 = temp.$BgIsSplattedState;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[18]);
                        }
                        stack1 = local2;
                        if (local2 !== stack0) { p = 489; continue; };
                        stack0 = 8;
                        { p = 501; continue; };
                    case 489:
                        { p = 499; continue; };
                        // unreachable
                        // unreachable
                    case 499:
                        stack0 = 9;
                    case 501:
                        //IR: KILL removed, reason: prevent optimisation
                        if (stack0 >= 0 && stack0 < 10) { p = [6, 43, 80, 117, 154, 191, 228, 265, 302, 339][stack0]; continue; } else { p = 339; continue; };
                    case 538:
                        return;
                    }
                }
            }
//# sourceURL=http://jit/entities/AnimationManager/m_performAction.js
})